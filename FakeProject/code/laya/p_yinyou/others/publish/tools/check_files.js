const fs = require("fs");
const process = require("process");
const path = require("path");
var tempFileNames = [];
var cnFileNames = [];
var tempDirNames = [];
var count = 0;
function withChinese(s) {
    var patrn = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
    if (!patrn.exec(s)) {
        return false;
    }
    else {
        return true;
    }
}
function checkFiles(currentPath) {
    let files = fs.readdirSync(currentPath);
    for (let i = 0; i < files.length; ++i) {
        let fileName = files[i];
        let filePath = path.join(currentPath, fileName);
        let fileStat = fs.statSync(filePath);

        if (fileStat.isDirectory()) {
            if (fileName.indexOf("#") >= 0 || fileName.indexOf(" ") >= 0) {
                tempDirNames.push(filePath);
            }
            checkFiles(filePath);
        } else {
            if (fileName.indexOf("#") >= 0 || fileName.indexOf(" ") >= 0) {
                tempFileNames.push(filePath);
            }
            if (withChinese(fileName)) {
                cnFileNames.push(filePath);
            }
            minifyJson(filePath);
            count++;
        }


    }
}
var warnNames = [];
function minifyJson(f) {
    if (f.endsWith(".ltcb.ls")) {
        warnNames.push(f);
        return;
    }
    if (f.endsWith('.ls') || f.endsWith('.lh') || f.endsWith('.lmat') || f.endsWith('.json')) {
        console.log("minify json", f);
        let jsonStr = fs.readFileSync(f, {
            "encoding": "utf-8"
        });
        let outJson = JSON.parse(jsonStr);
        let outputjson = JSON.stringify(outJson);
        fs.writeFileSync(f, outputjson, {
            "encoding": "utf-8"
        });
    }

}
var dirPath = path.join(process.cwd(), "bin/res/");
checkFiles(dirPath);
console.log(`检查完成，资源包文件总数：${count}`);
console.log("");

for (let i = 0; i < warnNames.length; i++) {
    console.log("查看场景导出设置是否正确：" + warnNames[i]);
}

for (let i = 0; i < tempDirNames.length; i++) {
    console.log("不安全目录：" + tempDirNames[i]);
}
for (let i = 0; i < tempFileNames.length; i++) {
    console.log("不安全文件：" + tempFileNames[i]);
}

for (let i = 0; i < cnFileNames.length; i++) {
    console.log("文件名字包含中文：" + cnFileNames[i]);
}

console.log("");