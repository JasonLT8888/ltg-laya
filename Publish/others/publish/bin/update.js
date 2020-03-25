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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/UpdateProject.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Config/CommonConfig.ts":
/*!************************************!*\
  !*** ./src/Config/CommonConfig.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CommonConfig {
}
exports.default = CommonConfig;
CommonConfig.needCopy = [
    'src/LTGame',
    'src/SDK',
    'bin/res/ltgame',
    'bin/libs',
    'bin/index.js',
    'libs'
];


/***/ }),

/***/ "./src/Config/EFileType.ts":
/*!*********************************!*\
  !*** ./src/Config/EFileType.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EFileType;
(function (EFileType) {
    EFileType[EFileType["NotExist"] = 0] = "NotExist";
    EFileType[EFileType["Dir"] = 1] = "Dir";
    EFileType[EFileType["File"] = 2] = "File";
})(EFileType = exports.EFileType || (exports.EFileType = {}));


/***/ }),

/***/ "./src/UpdateProject.ts":
/*!******************************!*\
  !*** ./src/UpdateProject.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const path = __webpack_require__(/*! path */ "path");
const process = __webpack_require__(/*! process */ "process");
const CommonConfig_1 = __webpack_require__(/*! Config/CommonConfig */ "./src/Config/CommonConfig.ts");
const LTUtils_1 = __webpack_require__(/*! Utils/LTUtils */ "./src/Utils/LTUtils.ts");
const EFileType_1 = __webpack_require__(/*! Config/EFileType */ "./src/Config/EFileType.ts");
/**
 * 更新项目内的框架内容
 * 详见CommonConfig.ts
 */
class UpdateProject {
    constructor() {
        // D:\Work_Projects\ltg-laya\FakeProject\code\laya\p_yinyou
        let currentWorkPath = process.cwd();
        let srcPath = path.join(currentWorkPath, './others/publish/templates/_project/laya');
        let targetPath = currentWorkPath;
        console.log("开始更新框架内容");
        for (let value of CommonConfig_1.default.needCopy) {
            let combieSrc = path.join(srcPath, value);
            let fileType = LTUtils_1.LTUtils.IsFileOrDir(combieSrc);
            if (fileType == EFileType_1.EFileType.NotExist) {
                console.log(combieSrc, "不存在");
                continue;
            }
            let combieTarget = path.join(targetPath, value);
            if (fileType == EFileType_1.EFileType.File) {
                LTUtils_1.LTUtils.CopyFile(combieSrc, combieTarget);
            }
            else {
                LTUtils_1.LTUtils.CopyDir(combieSrc, combieTarget);
            }
            console.log("拷贝", combieSrc, "完成");
        }
        console.log("更新框架完成");
    }
}
new UpdateProject();


/***/ }),

/***/ "./src/Utils/LTUtils.ts":
/*!******************************!*\
  !*** ./src/Utils/LTUtils.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fs = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");
const uglify_es = __webpack_require__(/*! uglify-es */ "uglify-es");
const child_process = __webpack_require__(/*! child_process */ "child_process");
const EFileType_1 = __webpack_require__(/*! Config/EFileType */ "./src/Config/EFileType.ts");
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
    static IsFileOrDir(checkPath) {
        if (!fs.existsSync(checkPath)) {
            return EFileType_1.EFileType.NotExist;
        }
        let fileStat = fs.statSync(checkPath);
        if (fileStat.isFile()) {
            return EFileType_1.EFileType.File;
        }
        return EFileType_1.EFileType.Dir;
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
                this.CopyDir(filePath, targetPath, checkFunc);
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

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

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
//# sourceMappingURL=update.js.map