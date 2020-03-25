let path = require('path');
let fs = require("fs");
let process = require("process");
let ltutils = require('../publish/js/ltutils');
let colors = require('colors');

let buildParam = {
    useCompress: true,
}

/**
 * 如果存在则保留的文件
 */
let keepFiles = [
    "project.config.json",
    // "game.json",
];

let platformPath = "wx/";
let currentWorkDir = process.cwd();
console.log("开始发布", colors.green(platformPath));

/**
 * 发布路径
 */
let releasePath = path.join(currentWorkDir, "./release/" + platformPath);
/**
 * 模板路径
 */
let templatePath = path.join(currentWorkDir, "./others/publish/templates/" + platformPath);
/**
 * 源码路径
 */
let binPath = path.join(currentWorkDir, "./bin/");

function _CheckRelease() {
    // 确保release目录存在
    console.log("当前release路径", releasePath.green);
    let result = ltutils._MakeDirExist(releasePath);
    if (result) {
        console.log("release路径检查通过");
    } else {
        throw SyntaxError("release路径创建失败,请检查权限");
    }
}

function _CopyTemplate() {
    console.log("当前template路径", templatePath.green);
    ltutils._CopyDir(templatePath, releasePath, (fileName) => {
        if (keepFiles.indexOf(fileName) >= 0) {
            let targetPath = path.join(releasePath, fileName);
            if (fs.existsSync(targetPath)) {
                console.log("检测到已存在", fileName.green, "进行保留");
                return false;
            }
        }
        return true;
    });
    console.log("template拷贝完成");
}

function _CopyIndex() {
    // index.js(只拷贝index.js内引用的)
    let indexJsPath = path.join(binPath, "./index.js");
    let readJs = fs.readFileSync(indexJsPath, {
        "encoding": "utf-8"
    });
    let regex = /loadLib\("(.*)"\)/gm;
    let str = readJs;
    let m;
    if (buildParam.useCompress) {
        console.log("当前配置需要压缩js,开始压缩");
        var startTime = Date.now();
    }

    while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        if (m[1]) {
            let fileName = m[1];
            let srcPath = path.join(binPath, fileName);

            // 确保目标路径存在
            let targetPath = path.join(releasePath, fileName);
            let lastIndex = targetPath.lastIndexOf("\\");
            let dirPath = targetPath.substring(0, lastIndex);
            ltutils._MakeDirExist(dirPath);

            if (buildParam.useCompress) {
                ltutils._CompressJs(srcPath, targetPath);
            } else {
                fs.copyFileSync(srcPath, targetPath);
            }
        }
    }

    let targetIndexPath = path.join(releasePath, "./index.js");
    if (buildParam.useCompress) {
        ltutils._CompressJs(indexJsPath, targetIndexPath)

        let endTime = Date.now();
        let passTime = ((endTime - startTime) / 1000).toFixed(2);
        console.log("压缩完成,总共耗时" + passTime + "秒");
    } else {
        // 拷贝indexjs
        fs.copyFileSync(indexJsPath, targetIndexPath);
    }
}

function _CopyBin() {
    console.log("当前bin路径", binPath.green);
    // res
    ltutils._CopyDir(path.join(binPath, "./res/"), path.join(releasePath, "./res/"))
    _CopyIndex();
    console.log("bin目录拷贝完成");

}

function _DoWork() {
    let startTime = Date.now();

    _CheckRelease();
    console.log("");
    _CopyTemplate();
    console.log("");
    _CopyBin();
    console.log("");

    let endTime = Date.now();
    let passTime = ((endTime - startTime) / 1000).toFixed(2);
    console.log("发布完成", releasePath.green);
    console.log("总共耗时" + passTime.green + "秒");
}

_DoWork();
