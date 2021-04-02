import * as path from 'path';
import * as fs from 'fs';
import * as process from 'process';
import * as colors from 'colors';
import * as babel from "@babel/core";
import * as uglify_es from 'uglify-es';
import * as shellJs from 'shelljs';
import { LTUtils } from 'Utils/LTUtils';
import { SubpackHelper } from './SubpackHelper';
import StringEx from 'Utils/StringEx';
import { LTPackConfig } from './LTPackConfig';

export class PublishHandler {

    private _platformStr: string;

    private _keepPlatforms = {
        "wx": [
            "project.config.json",
            "game.json"
        ],
        "tt": [
            "project.config.json",
            "game.json"
        ],
        "qq": [
            "project.config.json",
            "game.json"
        ],
        "oppo": [
            "manifest.json",
            "icon.png"
        ]
    }

    private _keepFiles: string[];

    private _workPath: string;
    private _releasePath: string;
    private _templatePath: string;
    private _openDataContextPath: string;
    private _binPath: string;
    private _cdnPath: string;
    private _packConfig: LTPackConfig;

    constructor(platformStr: string) {
        this._platformStr = platformStr;
    }

    public Start() {
        let startTime = Date.now();

        console.log("开始发布", colors.green(this._platformStr));
        this._InitAll();
        this._CheckRelease();
        this._CopyTemplate();
        this._CopyBin();
        this._CopyOpenDataContext();

        if (this._platformStr == "oppo") {
            // 打包成rpk
            shellJs.cd(this._releasePath);
            let rpk_packer = path.join(this._workPath, "./others/publish/tools/quick-tools/lib/bin/index.js");
            let mode = this._packConfig.isDebug ? "debug" : "release";
            shellJs.exec(`node ${rpk_packer} pack ${mode}`)
        }

        // 再次提示cdn
        console.log(("注意cdn资源,需要拷贝到服务器:" + this._cdnPath).bgRed);

        let endTime = Date.now();
        let passTime = ((endTime - startTime) / 1000).toFixed(2);
        console.log("发布完成", this._releasePath.green);
        console.log("总共耗时 " + passTime.green + " 秒");
    }

    private _CopyBin() {
        // res
        let targetPath = path.join(this._releasePath, "./res/");
        LTUtils.DeleteDir(targetPath);

        let srcResPath = path.join(this._binPath, "./res/");
        let cdnPath = path.join(this._cdnPath, "./res/")
        // 分包检测
        let subpackHelper = new SubpackHelper(srcResPath, this._packConfig);
        subpackHelper.single_max_size = this._packConfig.maxSinglePackSize * 1024 * 1024;
        subpackHelper.total_max_size = this._packConfig.maxTotalPackSize * 1024 * 1024;
        subpackHelper.Analyze();
        subpackHelper.Replace(targetPath, cdnPath);

        this._CopyIndex();

        console.log("bin目录拷贝完成");
        console.log();
    }

    private _CopyIndex() {
        // index.js(只拷贝index.js内引用的)
        let indexJsPath = path.join(this._binPath, "./index.js");
        let readJs = LTUtils.ReadStrFrom(indexJsPath);

        if (this._packConfig.compress) {
            console.log("当前配置需要压缩js,开始压缩");
            var startTime = Date.now();
        }
        let cachePath = path.join(this._workPath, "./temp/" + this._platformStr + "/");
        LTUtils.MakeDirExist(cachePath);

        let str = readJs;
        if (this._packConfig.openDataContext) {
            //开放域所需引用laya ui 库
            str = str.replace("//openContext", "");
        } else {
            str = str.replace('loadLib("libs/laya.ui.js");', "");
        }

        let regex = /loadLib\("(.*)"\)/gm;
        let m;
        while ((m = regex.exec(str)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            if (m[1]) {
                let fileName = m[1] as string;
                let srcPath = path.join(this._binPath, fileName);
                console.log(srcPath.green);
                // 确保目标路径存在
                let targetPath = path.join(this._releasePath, fileName);
                let lastIndex = targetPath.lastIndexOf("\\");
                let dirPath = targetPath.substring(0, lastIndex);
                LTUtils.MakeDirExist(dirPath);

                let needTrans = this._packConfig.es5;
                if (needTrans) {
                    if (!fileName.endsWith("bundle.js")) {
                        needTrans = false;
                    }
                }
                if (needTrans) {
                    // 进行转es5操作
                    console.log("进行转es5操作 " + targetPath.green + "");
                    let transCode = babel.transformFileSync(srcPath, {
                        "presets": ["@babel/preset-env"],
                        "babelrc": false
                    }).code;
                    if (this._packConfig.compress) {
                        transCode = uglify_es.minify(transCode).code;
                    }
                    LTUtils.WriteStrTo(targetPath, transCode);
                } else {
                    if (this._packConfig.compress) {
                        this._DoCacheCompress(fileName, srcPath, cachePath, targetPath);
                    } else {
                        fs.copyFileSync(srcPath, targetPath);
                    }
                }
            }
        }

        let targetIndexPath = path.join(this._releasePath, "./index.js");
        LTUtils.WriteStrTo(targetIndexPath, str);
        if (this._packConfig.compress) {
            this._DoCacheCompress("index.js", targetIndexPath, cachePath, targetIndexPath);
            // this._DoCacheCompress("index.js", indexJsPath, cachePath, targetIndexPath);
            let endTime = Date.now();
            let passTime = ((endTime - startTime) / 1000).toFixed(2);
            console.log("压缩完成,总共耗时 " + passTime.green + " 秒");
        } else {
            // 拷贝indexjs
            // fs.copyFileSync(indexJsPath, targetIndexPath);
            // if (this._packConfig.openDataContext) {
            //     //开放域所需引用laya ui 库 
            // }
            console.log("当前配置无需压缩,直接拷贝所有js文件");
            LTUtils.WriteStrTo(targetIndexPath, str);
        }

        if (this._packConfig.platform == "oppo" || this._packConfig.platform == "vivo") {
            // 处理load
            let readIndexStr = LTUtils.ReadStrFrom(targetIndexPath);
            let cahceStr = "____";
            readIndexStr = LTUtils.ReplaceAll(readIndexStr, "loadLib(\"", cahceStr);
            readIndexStr = LTUtils.ReplaceAll(readIndexStr, cahceStr, "require(\"./");
            LTUtils.WriteStrTo(targetIndexPath, readIndexStr);
            console.log(this._packConfig.platform + " 平台重写index.js", indexJsPath);
            if (this._packConfig.platform == "vivo") {
                // let indexJsPath = LTUtils.ReadStrFrom(targetIndexPath);// s.join(e, "./../index.js");
                let outIndexPath = targetIndexPath.replace('index.js', 'src/index.js');
                fs.writeFileSync(outIndexPath, readIndexStr);
                let libsArr = readIndexStr.split("require(\"");
                let cfgPath = targetIndexPath.replace('index.js', "minigame.config.js");
                let modules = [{
                    module_name: './libs/laya.vvmini.js',
                    module_path: './libs/laya.vvmini.js',
                    module_from: '../../bin/libs/laya.vvmini.js'
                }];
                for (let i = 1; i < libsArr.length; i++) {
                    const libPath = libsArr[i];
                    let path = libPath.replace('"),', "").replace('");', '');
                    let moduleOb = {
                        module_name: path,
                        module_path: path,
                        module_from: path.replace('./', "")
                    }
                    modules.push(moduleOb);
                }
                let cfgTxt = fs.readFileSync(cfgPath, { encoding: "utf-8" });
                cfgTxt = cfgTxt.replace("const externals = []", `const externals =${JSON.stringify(modules)};`)
                fs.writeFileSync(cfgPath, cfgTxt, { encoding: "utf-8" });
                let resPath = targetIndexPath.replace('index.js', "res");
                let resToPath = targetIndexPath.replace('index.js', "src\\res");
                LTUtils.DeleteDir(resToPath);
                // shell.rm("-rf", resToPath);
                // shell.mv(resPath, resToPath);
                fs.renameSync(resPath, resToPath);
                console.log("vivo 复制 res 完成");
            }
        }
    }

    private _DoCacheCompress(fileName: string, srcPath: string, cachePath: string, targetPath: string) {
        // 检测是否已存在
        let srcStat = fs.statSync(srcPath);
        let lastModifyTime = srcStat.mtimeMs;
        let tempPath = path.join(cachePath, fileName);
        let tempStr = LTUtils.ReadStrFrom(tempPath);
        if (StringEx.IsNullOrEmpty(tempStr)) {
            let compressJs = LTUtils.CompressJs(srcPath, targetPath);
            // 创建temp文件
            let cacheObj = {
                fileName: fileName,
                modifyTime: lastModifyTime,
                compressJs: compressJs
            };
            let jsonStr = JSON.stringify(cacheObj);
            LTUtils.WriteStrTo(tempPath, jsonStr);
        } else {
            let readJson = JSON.parse(tempStr);
            let read_fileName = readJson["fileName"];
            let read_modifyTime = readJson["modifyTime"];
            if (fileName == read_fileName && read_modifyTime == lastModifyTime) {
                console.log("文件未变动,直接使用缓存文件进行替换", fileName.green);
                LTUtils.WriteStrTo(targetPath, readJson["compressJs"]);
            } else {
                let compressJs = LTUtils.CompressJs(srcPath, targetPath);
                // 创建temp文件
                let cacheObj = {
                    fileName: fileName,
                    modifyTime: lastModifyTime,
                    compressJs: compressJs
                };
                let jsonStr = JSON.stringify(cacheObj);
                LTUtils.WriteStrTo(tempPath, jsonStr);
            }
        }
    }

    private _CopyTemplate() {
        LTUtils.CopyDir(this._templatePath, this._releasePath, (fileName) => {
            if (this._keepFiles.indexOf(fileName) >= 0) {
                let targetPath = path.join(this._releasePath, fileName);
                if (fs.existsSync(targetPath)) {
                    console.log("检测到已存在", fileName.green, "进行保留");
                    return false;
                }
            }
            return true;
        });
        console.log("template拷贝完成");
        console.log();
    }
    private _CopyOpenDataContext() {
        if (this._packConfig.openDataContext) {
            let targetPath = path.join(this._releasePath, "./openDataContext/")
            LTUtils.CopyDir(this._openDataContextPath, targetPath);
            console.log("开放域工程".bgRed, "openDataContext 目录拷贝完成".green);
        } else {
            console.log("不是开放域工程,无需拷贝 openDataContext");
        }

    }

    private _CheckRelease() {
        let checkResult = LTUtils.MakeDirExist(this._releasePath);
        if (checkResult) {
            console.log("release路径检查", "通过".green);
        } else {
            console.log("release路径检查", "失败".red);
            throw SyntaxError("release路径创建失败,请检查权限");
        }

        console.log();
    }

    private _InitAll() {
        this._workPath = process.cwd();
        let configPath = path.join(this._workPath, "./pack_config/publish." + this._platformStr + ".json");
        if (!LTUtils.IsFileExist(configPath)) {
            console.log("当前平台", this._platformStr, "不存在打包配置文件", configPath.red, "读取默认配置");
            configPath = path.join(this._workPath, "./others/config/publish.default.json");
        }
        let readStr = LTUtils.ReadStrFrom(configPath);
        let parseData = JSON.parse(readStr);
        this._packConfig = new LTPackConfig();
        this._packConfig.platform = this._platformStr;
        for (let key in parseData) {
            this._packConfig[key] = parseData[key];
        }

        this._releasePath = path.join(this._workPath, "./release/" + this._platformStr);
        this._templatePath = path.join(this._workPath, "./others/publish/templates/" + this._platformStr);
        this._openDataContextPath = path.join(this._workPath, "./others/publish/templates/openDataContext");
        this._binPath = path.join(this._workPath, "./bin/");
        this._cdnPath = path.join(this._workPath, "./cdn/" + this._platformStr);

        console.log("release路径", this._releasePath.green);
        //console.log("template路径", this._templatePath.green);
        //console.log("bin路径", this._binPath.green);
        //console.log("cdn路径", this._cdnPath.green);

        this._keepFiles = this._keepPlatforms[this._platformStr];
        if (!this._keepFiles) {
            console.log("当前平台未配置keepFiles", this._platformStr);
            this._keepFiles = [];
        }

        console.log();
    }

}