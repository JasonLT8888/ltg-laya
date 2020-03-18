/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/EPackResolveType.ts":
/*!*********************************!*\
  !*** ./src/EPackResolveType.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EPackResolveType;
(function (EPackResolveType) {
    /**
     * 自动生成game.js,配置json等
     */
    EPackResolveType[EPackResolveType["AutoSearch"] = 0] = "AutoSearch";
    /**
     * 全打入包内,不生成game.js,也不生成json等
     */
    EPackResolveType[EPackResolveType["AllIn"] = 1] = "AllIn";
    /**
     * 全放cdn,不生成game.js,也不生成json等
     */
    EPackResolveType[EPackResolveType["AllOut"] = 2] = "AllOut";
})(EPackResolveType = exports.EPackResolveType || (exports.EPackResolveType = {}));


/***/ }),

/***/ "./src/Ex/StringEx.ts":
/*!****************************!*\
  !*** ./src/Ex/StringEx.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class StringEx {
    static IsNullOrEmpty(str) {
        return str == null || str == "";
    }
}
exports.default = StringEx;


/***/ }),

/***/ "./src/LTPackNode.ts":
/*!***************************!*\
  !*** ./src/LTPackNode.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class LTPackNode {
    constructor() {
        this.childs = [];
        this.size = 0;
    }
}
exports.LTPackNode = LTPackNode;


/***/ }),

/***/ "./src/LTUtils.ts":
/*!************************!*\
  !*** ./src/LTUtils.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fs = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");
const uglify_es = __webpack_require__(/*! uglify-es */ "uglify-es");
const child_process = __webpack_require__(/*! child_process */ "child_process");
class LTUtils {
    static CompressJs(srcPath, targetPath) {
        let oldStat = fs.statSync(srcPath);
        let fileName = path.win32.basename(srcPath);
        let srcJs = fs.readFileSync(srcPath, {
            "encoding": "utf-8"
        });
        let minJs = uglify_es.minify(srcJs);
        if (minJs.error) {
            console.error("压缩文件", fileName, "出错", minJs.error);
            throw SyntaxError("文件压缩失败,中断发包");
        }
        this.WriteStrTo(targetPath, minJs.code);
        let newStat = fs.statSync(targetPath);
        let size1 = oldStat.size / 1024;
        let size2 = newStat.size / 1024;
        let rate = size2 / size1;
        let rateStr = "(" + (rate * 100).toFixed(2) + "%)";
        console.log("压缩", fileName.green, size1.toFixed(2) + "Kb >>>>>>>> " + size2.toFixed(2) + "Kb " + (rate > 1 ? rateStr.red : rateStr.green));
        return minJs.code;
    }
    /**
     * 将制定文件转换为es5标准
     * @param srcPath
     */
    static WrapToES5(srcPath) {
        let buffer = child_process.execSync("babel ");
        console.log(buffer);
    }
    static ReplaceAll(str, replaceStr, newStr) {
        let result = str;
        while (result.indexOf(replaceStr) >= 0) {
            result = result.replace(replaceStr, newStr);
        }
        return result;
    }
    static MakeDirExist(dirPath) {
        let dirStat = null;
        if (fs.existsSync(dirPath)) {
            dirStat = fs.statSync(dirPath);
        }
        if (!dirStat || !dirStat.isDirectory()) {
            fs.mkdirSync(dirPath, {
                recursive: true
            });
            if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
                return true;
            }
        }
        else {
            return true;
        }
        return false;
    }
    static DeleteDir(targetDir) {
        let files = [];
        if (fs.existsSync(targetDir)) {
            files = fs.readdirSync(targetDir);
            for (let i = 0; i < files.length; ++i) {
                let file = files[i];
                let curPath = path.join(targetDir, file);
                if (fs.statSync(curPath).isDirectory()) { // recurse
                    this.DeleteDir(curPath);
                }
                else {
                    // delete file
                    fs.unlinkSync(curPath);
                }
            }
            fs.rmdirSync(targetDir);
        }
    }
    static CopyFile(srcFile, targetFile) {
        let lastIndex = targetFile.lastIndexOf("\\");
        let dirPath = targetFile.substring(0, lastIndex);
        LTUtils.MakeDirExist(dirPath);
        fs.copyFileSync(srcFile, targetFile);
    }
    static CopyDir(srcDir, targetDir, checkFunc = null) {
        this.MakeDirExist(targetDir);
        let files = fs.readdirSync(srcDir);
        for (let i = 0; i < files.length; ++i) {
            let fileName = files[i];
            if (checkFunc && !checkFunc(fileName)) {
                // true表示继续使用,false表示跳过
                continue;
            }
            let filePath = path.join(srcDir, fileName);
            let targetPath = path.join(targetDir, fileName);
            let fileStat = fs.statSync(filePath);
            if (fileStat.isDirectory()) {
                this.CopyDir(filePath, targetPath);
            }
            else {
                fs.copyFileSync(filePath, targetPath);
            }
        }
    }
    /**
     * 从文件读取内容
     * @param filePath 指定文件路径
     */
    static ReadStrFrom(filePath) {
        if (!LTUtils.IsFileExist(filePath)) {
            return null;
        }
        let fsStat = fs.statSync(filePath);
        if (fsStat.isDirectory()) {
            return null;
        }
        return fs.readFileSync(filePath, {
            "encoding": "utf-8"
        });
    }
    /**
     * 判断文件是否存在
     * @param filePath
     */
    static IsFileExist(filePath) {
        return fs.existsSync(filePath);
    }
    /**
     * 向文件写入内容
     * @param filePath 指定文件路径
     */
    static WriteStrTo(filePath, writeStr) {
        let lastIndex = filePath.lastIndexOf("\\");
        let dirPath = filePath.substring(0, lastIndex);
        LTUtils.MakeDirExist(dirPath);
        fs.writeFileSync(filePath, writeStr, {
            "encoding": "utf-8"
        });
    }
}
exports.LTUtils = LTUtils;


/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const process = __webpack_require__(/*! process */ "process");
const PublishHandler_1 = __webpack_require__(/*! ./PublishHandler */ "./src/PublishHandler.ts");
class Main {
    constructor() {
        let platformPath = this._GetParam("-p");
        if (platformPath == null) {
            console.log("需要传入-p 平台参数");
            return;
        }
        let useCompress = this._GetParam("-c") == "true" ? true : false;
        new PublishHandler_1.PublishHandler(platformPath, useCompress).Start();
    }
    _GetParam(paramName) {
        let paramIndex = process.argv.indexOf(paramName);
        if (paramIndex < 0)
            return null;
        return process.argv[paramIndex + 1];
    }
}
exports.Main = Main;
new Main();


/***/ }),

/***/ "./src/PublishHandler.ts":
/*!*******************************!*\
  !*** ./src/PublishHandler.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const path = __webpack_require__(/*! path */ "path");
const fs = __webpack_require__(/*! fs */ "fs");
const process = __webpack_require__(/*! process */ "process");
const colors = __webpack_require__(/*! colors */ "colors");
const LTUtils_1 = __webpack_require__(/*! LTUtils */ "./src/LTUtils.ts");
const SubpackHelper_1 = __webpack_require__(/*! SubpackHelper */ "./src/SubpackHelper.ts");
const StringEx_1 = __webpack_require__(/*! Ex/StringEx */ "./src/Ex/StringEx.ts");
class PublishHandler {
    constructor(platformStr, useCompress = true) {
        this._keepPlatforms = {
            "wx": [
                "project.config.json"
            ],
            "tt": [
                "project.config.json"
            ],
            "qq": [
                "project.config.json"
            ]
        };
        this._platformStr = platformStr;
        this._useCompress = useCompress;
    }
    Start() {
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
    _CopyBin() {
        // res
        let targetPath = path.join(this._releasePath, "./res/");
        LTUtils_1.LTUtils.DeleteDir(targetPath);
        let srcResPath = path.join(this._binPath, "./res/");
        let cdnPath = path.join(this._cdnPath, "./res/");
        // 分包检测
        let subpackHelper = new SubpackHelper_1.SubpackHelper(srcResPath, this._packConfig);
        subpackHelper.single_max_size = this._packConfig.maxSinglePackSize * 1024 * 1024;
        subpackHelper.total_max_size = this._packConfig.maxTotalPackSize * 1024 * 1024;
        subpackHelper.Analyze();
        subpackHelper.Replace(targetPath, cdnPath);
        this._CopyIndex();
        console.log("bin目录拷贝完成");
        console.log();
    }
    _CopyIndex() {
        // index.js(只拷贝index.js内引用的)
        let indexJsPath = path.join(this._binPath, "./index.js");
        let readJs = LTUtils_1.LTUtils.ReadStrFrom(indexJsPath);
        if (this._useCompress) {
            console.log("当前配置需要压缩js,开始压缩");
            var startTime = Date.now();
        }
        let cachePath = path.join(this._workPath, "./temp/" + this._platformStr + "/");
        LTUtils_1.LTUtils.MakeDirExist(cachePath);
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
                LTUtils_1.LTUtils.MakeDirExist(dirPath);
                if (this._useCompress) {
                    this._DoCacheCompress(fileName, srcPath, cachePath, targetPath);
                }
                else {
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
        }
        else {
            // 拷贝indexjs
            fs.copyFileSync(indexJsPath, targetIndexPath);
            console.log("当前配置无需压缩,直接拷贝所有js文件");
        }
    }
    _DoCacheCompress(fileName, srcPath, cachePath, targetPath) {
        // 检测是否已存在
        let srcStat = fs.statSync(srcPath);
        let lastModifyTime = srcStat.mtimeMs;
        let tempPath = path.join(cachePath, fileName);
        let tempStr = LTUtils_1.LTUtils.ReadStrFrom(tempPath);
        if (StringEx_1.default.IsNullOrEmpty(tempStr)) {
            let compressJs = LTUtils_1.LTUtils.CompressJs(srcPath, targetPath);
            // 创建temp文件
            let cacheObj = {
                fileName: fileName,
                modifyTime: lastModifyTime,
                compressJs: compressJs
            };
            let jsonStr = JSON.stringify(cacheObj);
            LTUtils_1.LTUtils.WriteStrTo(tempPath, jsonStr);
        }
        else {
            let readJson = JSON.parse(tempStr);
            let read_fileName = readJson["fileName"];
            let read_modifyTime = readJson["modifyTime"];
            if (fileName == read_fileName && read_modifyTime == lastModifyTime) {
                console.log("文件未变动,直接使用缓存文件进行替换", fileName.green);
                LTUtils_1.LTUtils.WriteStrTo(targetPath, readJson["compressJs"]);
            }
            else {
                let compressJs = LTUtils_1.LTUtils.CompressJs(srcPath, targetPath);
                // 创建temp文件
                let cacheObj = {
                    fileName: fileName,
                    modifyTime: lastModifyTime,
                    compressJs: compressJs
                };
                let jsonStr = JSON.stringify(cacheObj);
                LTUtils_1.LTUtils.WriteStrTo(tempPath, jsonStr);
            }
        }
    }
    _CopyTemplate() {
        LTUtils_1.LTUtils.CopyDir(this._templatePath, this._releasePath, (fileName) => {
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
    _CheckRelease() {
        let checkResult = LTUtils_1.LTUtils.MakeDirExist(this._releasePath);
        if (checkResult) {
            console.log("release路径检查通过");
        }
        else {
            throw SyntaxError("release路径创建失败,请检查权限");
        }
        console.log();
    }
    _InitAll() {
        this._workPath = process.cwd();
        let configPath = path.join(this._workPath, "./others/config/publish." + this._platformStr + ".json");
        if (!LTUtils_1.LTUtils.IsFileExist(configPath)) {
            console.log("当前平台", this._platformStr, "不存在打包配置文件", ("publish." + this._platformStr + ".json").red, "读取默认配置");
            configPath = path.join(this._workPath, "./others/config/publish.default.json");
        }
        let readStr = LTUtils_1.LTUtils.ReadStrFrom(configPath);
        this._packConfig = JSON.parse(readStr);
        this._releasePath = path.join(this._workPath, "./release/" + this._platformStr);
        this._templatePath = path.join(this._workPath, "./others/publish/templates/" + this._platformStr);
        this._binPath = path.join(this._workPath, "./bin/");
        this._cdnPath = path.join(this._workPath, "./cdn/" + this._platformStr);
        console.log("release路径", this._releasePath.green);
        console.log("template路径", this._templatePath.green);
        console.log("bin路径", this._binPath.green);
        console.log("cdn路径", this._cdnPath.green);
        this._keepFiles = this._keepPlatforms[this._platformStr];
        if (!this._keepFiles) {
            console.log("当前平台未配置keepFiles", this._platformStr);
            this._keepFiles = [];
        }
        console.log();
    }
}
exports.PublishHandler = PublishHandler;


/***/ }),

/***/ "./src/SubpackHelper.ts":
/*!******************************!*\
  !*** ./src/SubpackHelper.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fs = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");
const LTPackNode_1 = __webpack_require__(/*! ./LTPackNode */ "./src/LTPackNode.ts");
const LTUtils_1 = __webpack_require__(/*! LTUtils */ "./src/LTUtils.ts");
const EPackResolveType_1 = __webpack_require__(/*! EPackResolveType */ "./src/EPackResolveType.ts");
class SubpackHelper {
    constructor(rootPath, packConfig) {
        this.single_max_size = 4 * 1024 * 1024;
        this.total_max_size = 4 * 1024 * 1024;
        this._rootPath = rootPath;
        this._packConfig = packConfig;
        this._rootNode = new LTPackNode_1.LTPackNode();
        this._rootNode.fullPath = rootPath;
        this._rootNode.isNode = false;
    }
    /**
     * 进行分析
     */
    Analyze() {
        this._AnalyzeDir(this._rootPath, this._rootNode);
        this._CombieNode(this._rootNode);
        let kb = Math.ceil(this._rootNode.size / 1024);
        let mb = kb / 1024;
        console.log("资源包:", this._rootNode.fullPath, "总共", kb.toFixed(0) + "kb (" + mb.toFixed(2) + "mb)");
        this._subpacks = [];
        this._remoteFiles = [];
        this._cacheSize = 0;
        // 优先进行强制主包
        let upRootPath = path.join(this._rootPath, "./../");
        for (let i = 0; i < this._packConfig.forceInPack.length; ++i) {
            let forceMainPack = this._packConfig.forceInPack[i];
            let fullPath = path.join(upRootPath, forceMainPack);
            console.log("强制主包", fullPath.green);
            let fakePack = new LTPackNode_1.LTPackNode();
            fakePack.isNode = false;
            let dirStat = fs.statSync(fullPath);
            fakePack.size = dirStat.size;
            fakePack.fullPath = fullPath;
            this._subpacks.push(fakePack);
            this._cacheSize += fakePack.size;
        }
        this._SplitSubpack(this._rootNode, this._subpacks, this._remoteFiles);
        kb = Math.ceil(this._cacheSize / 1024);
        mb = kb / 1024;
        console.log("拆分子包个数", this._subpacks.length, "总子包大小", kb.toFixed(0) + "kb (" + mb.toFixed(2) + "mb)");
    }
    /**
     * 进行包替换
     */
    Replace(subpackPath, cdnPath) {
        LTUtils_1.LTUtils.DeleteDir(cdnPath);
        // 将远程文件放到一个文件夹
        for (let i = 0; i < this._remoteFiles.length; ++i) {
            let remoteFile = this._remoteFiles[i];
            let relativePath = remoteFile.fullPath.replace(this._rootPath, "");
            let targetPath = path.join(cdnPath, relativePath);
            if (remoteFile.isNode) {
                // 拷贝文件
                LTUtils_1.LTUtils.CopyFile(remoteFile.fullPath, targetPath);
            }
            else {
                // 拷贝文件夹
                LTUtils_1.LTUtils.CopyDir(remoteFile.fullPath, targetPath);
            }
        }
        LTUtils_1.LTUtils.DeleteDir(subpackPath);
        // 将子包放到一个文件夹
        for (let i = 0; i < this._subpacks.length; ++i) {
            let subpack = this._subpacks[i];
            if (subpack.isNode) {
                console.log("子包检测到单文件,请注意检查".red, subpack.fullPath);
                continue;
            }
            let relativePath = subpack.fullPath.replace(this._rootPath, "");
            let targetPath = path.join(subpackPath, relativePath);
            LTUtils_1.LTUtils.CopyDir(subpack.fullPath, targetPath);
            // 检查有没有game.js,没有则主动创建
            let jsPath = path.join(targetPath, "./game.js");
            if (!fs.existsSync(jsPath)) {
                LTUtils_1.LTUtils.WriteStrTo(jsPath, "");
            }
        }
        // 生成game.json
        let gameJsonPath = path.join(subpackPath, "./../game.json");
        let gameJsonStr = fs.readFileSync(gameJsonPath, {
            "encoding": "utf-8"
        });
        let gameJson = JSON.parse(gameJsonStr);
        let subpacks = [];
        let upRootPath = path.join(this._rootPath, "./../");
        for (let i = 0; i < this._subpacks.length; ++i) {
            let subpack = this._subpacks[i];
            if (subpack.isNode)
                continue;
            let relativePath = subpack.fullPath.replace(upRootPath, "");
            let checkRelativePath = relativePath.replace("\\", "/");
            if (this._packConfig.packType == EPackResolveType_1.EPackResolveType.AutoSearch) {
                if (this._packConfig.forceInPack.indexOf(checkRelativePath) >= 0) {
                    console.log("强制主包", checkRelativePath.green);
                }
                else {
                    subpacks.push({
                        "name": relativePath,
                        "root": relativePath
                    });
                }
            }
        }
        // 写出game.json文件
        gameJson['subpackages'] = subpacks;
        let outputjson = JSON.stringify(gameJson);
        while (outputjson.indexOf("\\\\") >= 0) {
            outputjson = outputjson.replace("\\\\", "/");
        }
        fs.writeFileSync(gameJsonPath, outputjson, {
            "encoding": "utf-8"
        });
        // 写出subpack.json文件
        let subpackJsonData = [];
        for (let i = 0; i < this._subpacks.length; ++i) {
            let subpack = this._subpacks[i];
            let relativePath = subpack.fullPath.replace(upRootPath, "");
            let checkRelativePath = LTUtils_1.LTUtils.ReplaceAll(relativePath, "\\", "/");
            let packType = this._packConfig.packType == EPackResolveType_1.EPackResolveType.AllIn ? 1 : 2;
            if (this._packConfig.forceInPack.indexOf(checkRelativePath) >= 0) {
                packType = 1;
            }
            subpackJsonData.push({
                "path": checkRelativePath,
                "pathType": packType
            });
        }
        let upSubpackPath = path.join(subpackPath, "./../");
        let subpackJsonStr = JSON.stringify(subpackJsonData);
        let subpackJsonPath = path.join(upSubpackPath, "./subpack.json");
        fs.writeFileSync(subpackJsonPath, subpackJsonStr, {
            "encoding": "utf-8"
        });
        console.log("输出subpack.json", subpackJsonPath);
    }
    _SplitSubpack(node, subPacks, remoteFiles) {
        let upRootPath = path.join(this._rootPath, "./../");
        // 进行包整理
        for (let i = 0; i < node.childs.length; ++i) {
            let child = node.childs[i];
            if (child.isNode) {
                // 散文件
                remoteFiles.push(child);
            }
            else {
                // 文件夹
                let relativePath = child.fullPath.replace(upRootPath, "");
                relativePath = relativePath.replace("\\", "/");
                let isInForceMainPack = this._packConfig.forceInPack.indexOf(relativePath) >= 0;
                if (!isInForceMainPack) {
                    let isInForceRemote = this._packConfig.forceRemote.indexOf(relativePath) >= 0;
                    if (isInForceRemote || this._packConfig.packType == EPackResolveType_1.EPackResolveType.AllOut) {
                        console.log("强制远程包", relativePath.green);
                        remoteFiles.push(child);
                    }
                    else {
                        if (child.size > this.single_max_size) {
                            this._SplitSubpack(child, subPacks, remoteFiles);
                        }
                        else {
                            if (child.size + this._cacheSize < this.total_max_size) {
                                subPacks.push(child);
                                this._cacheSize += child.size;
                            }
                            else {
                                this._SplitSubpack(child, subPacks, remoteFiles);
                            }
                        }
                    }
                }
            }
        }
    }
    _CombieNode(node) {
        for (let i = 0; i < node.childs.length; ++i) {
            let childNode = node.childs[i];
            if (!childNode.isNode) {
                this._CombieNode(childNode);
            }
            node.size += childNode.size;
        }
    }
    _AnalyzeDir(currentPath, node) {
        let files = fs.readdirSync(currentPath);
        for (let i = 0; i < files.length; ++i) {
            let fileName = files[i];
            let filePath = path.join(currentPath, fileName);
            let fileStat = fs.statSync(filePath);
            let createNode = new LTPackNode_1.LTPackNode();
            createNode.fullPath = filePath;
            createNode.parent = node;
            node.childs.push(createNode);
            if (fileStat.isDirectory()) {
                createNode.isNode = false;
                this._AnalyzeDir(filePath, createNode);
            }
            else {
                createNode.isNode = true;
                createNode.size = fileStat.size;
            }
        }
    }
}
exports.SubpackHelper = SubpackHelper;


/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "colors":
/*!*************************!*\
  !*** external "colors" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("colors");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("process");

/***/ }),

/***/ "uglify-es":
/*!****************************!*\
  !*** external "uglify-es" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uglify-es");

/***/ })

/******/ });
//# sourceMappingURL=publish.js.map