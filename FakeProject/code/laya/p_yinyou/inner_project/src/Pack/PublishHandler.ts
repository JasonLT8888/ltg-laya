import * as path from 'path';
import * as fs from 'fs';
import * as process from 'process';
import * as colors from 'colors';
import { IPackConfig } from 'Pack/IPackConfig';
import { LTUtils } from 'Utils/LTUtils';
import { SubpackHelper } from './SubpackHelper';
import StringEx from 'Utils/StringEx';

export class PublishHandler {

    private _platformStr: string;

    private _keepPlatforms = {
        "wx": [
            "project.config.json"
        ],
        "tt": [
            "project.config.json"
        ],
        "qq": [
            "project.config.json"
        ]
    }

    private _keepFiles: string[];
    private _useCompress: boolean;

    private _workPath: string;
    private _releasePath: string;
    private _templatePath: string;
    private _binPath: string;
    private _cdnPath: string;
    private _packConfig: IPackConfig;

    constructor(platformStr: string, useCompress: boolean = true) {
        this._platformStr = platformStr;
        this._useCompress = useCompress;
    }

    public Start() {
        let startTime = Date.now();

        console.log("开始发布", colors.green(this._platformStr));
        this._InitAll();
        this._CheckRelease();
        this._CopyTemplate();
        this._CopyBin();

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

        if (this._useCompress) {
            console.log("当前配置需要压缩js,开始压缩");
            var startTime = Date.now();
        }
        let cachePath = path.join(this._workPath, "./temp/" + this._platformStr + "/");
        LTUtils.MakeDirExist(cachePath);

        let regex = /loadLib\("(.*)"\)/gm;
        let str = readJs;
        let m;
        while ((m = regex.exec(str)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            if (m[1]) {
                let fileName = m[1];
                let srcPath = path.join(this._binPath, fileName);

                // 确保目标路径存在
                let targetPath = path.join(this._releasePath, fileName);
                let lastIndex = targetPath.lastIndexOf("\\");
                let dirPath = targetPath.substring(0, lastIndex);
                LTUtils.MakeDirExist(dirPath);

                if (this._useCompress) {
                    this._DoCacheCompress(fileName, srcPath, cachePath, targetPath);
                } else {
                    fs.copyFileSync(srcPath, targetPath);
                }
            }
        }

        let targetIndexPath = path.join(this._releasePath, "./index.js");
        if (this._useCompress) {
            this._DoCacheCompress("index.js", indexJsPath, cachePath, targetIndexPath);
            let endTime = Date.now();
            let passTime = ((endTime - startTime) / 1000).toFixed(2);
            console.log("压缩完成,总共耗时 " + passTime.green + " 秒");
        } else {
            // 拷贝indexjs
            fs.copyFileSync(indexJsPath, targetIndexPath);

            console.log("当前配置无需压缩,直接拷贝所有js文件");
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
        this._packConfig = JSON.parse(readStr);
        this._useCompress = this._packConfig.compress;

        this._releasePath = path.join(this._workPath, "./release/" + this._platformStr);
        this._templatePath = path.join(this._workPath, "./others/publish/templates/" + this._platformStr);
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