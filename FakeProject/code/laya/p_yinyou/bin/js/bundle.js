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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/LTGame/Async/Awaiters.ts":
/*!**************************************!*\
  !*** ./src/LTGame/Async/Awaiters.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Awaiters; });
class Awaiters {
    static NextFrame() {
        // 一帧有可能刚好当帧执行,这里跳两帧
        return this.Frames(2);
    }
    static Frames(num) {
        return new Promise(function (resolve) {
            Laya.timer.frameOnce(num, null, () => {
                resolve();
            });
        });
    }
    static Seconds(num) {
        return new Promise(function (resolve) {
            Laya.timer.once(num * 1000, null, () => {
                resolve();
            });
        });
    }
}


/***/ }),

/***/ "./src/LTGame/Commom/CommonEventId.ts":
/*!********************************************!*\
  !*** ./src/LTGame/Commom/CommonEventId.ts ***!
  \********************************************/
/*! exports provided: CommonEventId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonEventId", function() { return CommonEventId; });
class CommonEventId {
}
CommonEventId.PAUSE_AUDIO = "PAUSE_AUDIO";
CommonEventId.RESUM_AUDIO = "RESUM_AUDIO";
CommonEventId.AD_CONFIG_GETTED = "AD_CONFIG_GETTED";


/***/ }),

/***/ "./src/LTGame/Config/ConfigManager.ts":
/*!********************************************!*\
  !*** ./src/LTGame/Config/ConfigManager.ts ***!
  \********************************************/
/*! exports provided: ConfigManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigManager", function() { return ConfigManager; });
class ConfigManager {
    static get needLoadCount() {
        return this._configList.length;
    }
    static AddConfig(configName) {
        ConfigManager._configList.push(configName);
    }
    static StartLoad(onFinished, onProgress = null) {
        if (ConfigManager._configList.length == 0) {
            if (onFinished) {
                onFinished.run();
            }
            return;
        }
        var loadUrls = [];
        for (let configName of ConfigManager._configList) {
            loadUrls.push(configName.path);
        }
        Laya.loader.create(loadUrls, Laya.Handler.create(this, () => {
            for (let configName of ConfigManager._configList) {
                configName.data = Laya.loader.getRes(configName.path);
                configName.dataList = [];
                for (let configKey in configName.data) {
                    let value = configName.data[configKey];
                    if (value != null) {
                        configName.dataList.push(value);
                    }
                }
            }
            if (onFinished) {
                onFinished.run();
            }
        }), onProgress);
    }
}
ConfigManager._configList = [];


/***/ }),

/***/ "./src/LTGame/Config/LoadPackConfig.ts":
/*!*********************************************!*\
  !*** ./src/LTGame/Config/LoadPackConfig.ts ***!
  \*********************************************/
/*! exports provided: LoadPackConfig, EPackType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPackConfig", function() { return LoadPackConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPackType", function() { return EPackType; });
class LoadPackConfig {
    constructor(path, pathType) {
        this.path = path;
        this.pathType = pathType;
    }
}
var EPackType;
(function (EPackType) {
    EPackType[EPackType["MainPack"] = 1] = "MainPack";
    EPackType[EPackType["SubPack"] = 2] = "SubPack";
    EPackType[EPackType["Remote"] = 3] = "Remote";
})(EPackType || (EPackType = {}));


/***/ }),

/***/ "./src/LTGame/Fsm/BaseState.ts":
/*!*************************************!*\
  !*** ./src/LTGame/Fsm/BaseState.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseState; });
class BaseState {
    constructor(id) {
        this.id = id;
    }
    GetNextState() {
        if (this.isFinished) {
            return this.nextState;
        }
        return 0;
    }
    OnEnter(exitState, param) {
        this.isFinished = false;
        this.nextState = 0;
        this.passTime = 0;
        this.deltaTime = 0;
        this._DoEnter(exitState, param);
    }
    OnRunning(param, dt) {
        if (this.isFinished)
            return;
        this.deltaTime = dt;
        this.passTime += dt;
        this._DoRunning(param);
    }
    OnExit(enterState, param) {
        this._DoExit(enterState, param);
    }
    OnLateUpdate(dt) {
        if (this.isFinished)
            return;
        this._DoLateUpdate(dt);
    }
    _DoLateUpdate(dt) { }
    _DoEnter(exitStte, param) { }
    _DoRunning(param) { }
    _DoExit(enterState, param) { }
}


/***/ }),

/***/ "./src/LTGame/Fsm/StateMachine.ts":
/*!****************************************!*\
  !*** ./src/LTGame/Fsm/StateMachine.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StateMachine; });
/* harmony import */ var _LTUtils_LTDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LTUtils/LTDictionary */ "./src/LTGame/LTUtils/LTDictionary.ts");

class StateMachine {
    constructor() {
        this._states = new _LTUtils_LTDictionary__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    get count() {
        return this._states.count;
    }
    Add(addState) {
        return this._states.Add(addState.id, addState);
    }
    Remove(id) {
        return this._states.Remove(id);
    }
    RemoveAll() {
        this._states.Clear();
        this.currState = null;
    }
    ExitCurrState(param = null) {
        if (null != this.currState) {
            this.currState.OnExit(null, param);
            this.currState = null;
        }
    }
    ChangeState(id, param = null) {
        var state = this.Find(id);
        if (state != null) {
            if (null != this.currState) {
                this.currState.OnExit(state, param);
            }
            this.lastState = this.currState;
            this.currState = state;
            state.OnEnter(this.lastState, param);
            return true;
        }
        console.error("不存在的状态ID:" + id);
        return false;
    }
    OnRunning(param, dt) {
        if (null == this.currState) {
            return;
        }
        this.currState.OnRunning(param, dt);
    }
    Find(id) {
        return this._states.Get(id);
    }
}


/***/ }),

/***/ "./src/LTGame/LTUtils/ColorEx.ts":
/*!***************************************!*\
  !*** ./src/LTGame/LTUtils/ColorEx.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorEx; });
class ColorEx {
    static RgbToHex(r, g, b) {
        var color = r << 16 | g << 8 | b;
        var str = color.toString(16);
        while (str.length < 6)
            str = "0" + str;
        return "#" + str;
    }
    static ColorToHex(color) {
        return this.RgbToHex(color.r * 255, color.g * 255, color.b * 255);
    }
    static HexToColor(colorHex, alpha = null) {
        let cr = colorHex.substring(0, 2);
        let cg = colorHex.substring(2, 4);
        let cb = colorHex.substring(4, 6);
        let ca = colorHex.substring(6, 8);
        let nr = parseInt(cr, 16);
        let ng = parseInt(cg, 16);
        let nb = parseInt(cb, 16);
        let na = alpha ? alpha : parseInt(ca, 16);
        return new Laya.Color(nr / 255, ng / 255, nb / 255, na);
    }
    static ToV3(color) {
        return new Laya.Vector3(color.r, color.g, color.b);
    }
    static ToV4(color) {
        return new Laya.Vector4(color.r, color.g, color.b, color.a);
    }
    static _Hex(num) {
        return ("0" + num.toString(16)).slice(-2);
    }
}


/***/ }),

/***/ "./src/LTGame/LTUtils/LTDictionary.ts":
/*!********************************************!*\
  !*** ./src/LTGame/LTUtils/LTDictionary.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTDictionary; });
class LTDictionary {
    constructor() {
        this._values = [];
        this._keys = [];
    }
    /**
     * 获取所有的子元素列表。
     */
    get values() {
        return this._values;
    }
    /**
     * 获取所有的子元素键名列表。
     */
    get keys() {
        return this._keys;
    }
    get count() {
        return this._keys.length;
    }
    /**
     * 给指定的键名设置值。
     * @param   key 键名。
     * @param   value 值。
     */
    set(key, value) {
        var index = this.indexOf(key);
        if (index >= 0) {
            this._values[index] = value;
            return;
        }
        this._keys.push(key);
        this._values.push(value);
    }
    /**
     * 获取指定对象的键名索引。
     * @param   key 键名对象。
     * @return 键名索引。
     */
    indexOf(key) {
        var index = this._keys.indexOf(key);
        if (index >= 0)
            return index;
        return -1;
    }
    /**
     * 返回指定键名的值。
     * @param   key 键名对象。
     * @return 指定键名的值。
     */
    Get(key) {
        var index = this.indexOf(key);
        return index < 0 ? null : this._values[index];
    }
    ContainsKey(key) {
        return this.indexOf(key) >= 0;
    }
    Add(key, value) {
        var index = this.indexOf(key);
        if (index >= 0) {
            return false;
        }
        this._keys.push(key);
        this._values.push(value);
        return true;
    }
    /**
     * 移除指定键名的值。
     * @param   key 键名对象。
     * @return 是否成功移除。
     */
    Remove(key) {
        var index = this.indexOf(key);
        if (index >= 0) {
            this._keys.splice(index, 1);
            this._values.splice(index, 1);
            return true;
        }
        return false;
    }
    /**
     * 清除此对象的键名列表和键值列表。
     */
    Clear() {
        this._values.length = 0;
        this._keys.length = 0;
    }
}


/***/ }),

/***/ "./src/LTGame/LTUtils/LTUtils.ts":
/*!***************************************!*\
  !*** ./src/LTGame/LTUtils/LTUtils.ts ***!
  \***************************************/
/*! exports provided: LTUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTUtils", function() { return LTUtils; });
class LTUtils {
    static CachFile(url) {
        if (!Laya.Browser.onWeiXin)
            return;
        var fullUrl = Laya.URL.formatURL(url);
        var fileInfo = Laya.MiniAdpter.getFileInfo(fullUrl);
        if (fileInfo == null) {
            Laya.MiniAdpter.downLoadFile(fullUrl);
        }
    }
    static DownLoadFiles(urls, complete, progress) {
        Laya.loader.create(urls, complete, progress, null, null, null, 1, true);
    }
    static SetShadow(obj, castShadow, receiveShadow) {
        // 默认当meshrender处理
        let meshRenderer = obj.meshRenderer;
        if (meshRenderer != null) {
            meshRenderer.castShadow = castShadow;
            meshRenderer.receiveShadow = receiveShadow;
            return obj;
        }
        let skinnedMeshRenderer = obj.skinnedMeshRenderer;
        if (skinnedMeshRenderer != null) {
            skinnedMeshRenderer.castShadow = castShadow;
            skinnedMeshRenderer.receiveShadow = receiveShadow;
            return obj;
        }
        // console.error("未处理的阴影设置类型", obj);
        return obj;
    }
    static EnableShadow(directionLight, farDistance) {
        //灯光开启阴影
        directionLight.shadow = true;
        //可见阴影距离
        directionLight.shadowDistance = farDistance;
        //生成阴影贴图尺寸
        directionLight.shadowResolution = 1024;
        //生成阴影贴图数量
        directionLight.shadowPSSMCount = 1;
        //模糊等级,越大越高,更耗性能
        directionLight.shadowPCFType = 3;
    }
    static GetRes(resUrl, noClone = false) {
        var getRes = Laya.loader.getRes(resUrl);
        if (getRes == null) {
            console.error("资源尚未加载", resUrl);
            return null;
        }
        return noClone ? getRes : getRes.clone();
    }
    static FindChild(parent, path) {
        if (path == "")
            return parent;
        var splitPath = path.split("/");
        return LTUtils._FindChild(splitPath, parent, 0);
    }
    static _FindChild(nodeName, currentNode, currentLevel) {
        var findChild = currentNode.getChildByName(nodeName[currentLevel]);
        if (findChild == null) {
            console.log(currentNode, "下不存在节点:", nodeName[currentLevel]);
            return null;
        }
        if (currentLevel + 1 == nodeName.length) {
            return findChild;
        }
        else {
            return LTUtils._FindChild(nodeName, findChild, currentLevel + 1);
        }
    }
    /**
     * 获得金币字符串显示
     * @param num
     */
    static GetCoinStr(num) {
        if (this._strMap == null) {
            this._strMap = ["", "K", "M", "B", "T", "Q"];
            for (let i = 0; i < 500; ++i) {
                let firstC = String.fromCharCode(Math.floor(i / 24) + 97);
                let behind = String.fromCharCode(Math.floor(i % 24) + 97);
                this._strMap.push(firstC + behind);
            }
        }
        let count = 0;
        while (num > 1000) {
            num /= 1000;
            count++;
        }
        if (count >= this._strMap.length) {
            console.error("单位表越界");
            return num.toFixed(1) + "aa"; //"越界";
        }
        if (count <= 0) {
            return num.toFixed(0);
        }
        return num.toFixed(1) + this._strMap[count];
    }
    /**
 * 获得金币字符串显示
 * @param num
 */
    static GetCoinStr1(num) {
        if (this._strMap == null) {
            this._strMap = ["", "K", "M", "B", "T", "Q"];
            for (let i = 0; i < 500; ++i) {
                let firstC = String.fromCharCode(Math.floor(i / 24) + 97);
                let behind = String.fromCharCode(Math.floor(i % 24) + 97);
                this._strMap.push(firstC + behind);
            }
        }
        let count = 0;
        while (num > 1000) {
            num /= 1000;
            count++;
        }
        if (count >= this._strMap.length) {
            console.error("单位表越界");
            return num.toFixed(1) + "aa"; //"越界";
        }
        if (count <= 0) {
            return num.toFixed(0);
        }
        return num.toFixed(0) + this._strMap[count];
    }
    static makeTimeLeftString(time, separator = ":", flag = false) {
        var ret = "";
        var hour;
        if (time <= 0) {
            ret = ret + "00:00";
            return ret;
        }
        if (time > LTUtils.ONE_YEAR) {
            ret = "大于一年";
            return ret;
        }
        if (flag) {
            if (time > LTUtils.ONE_DAY) {
                var day = Math.floor(time / LTUtils.ONE_DAY);
                ret = day + "天";
            }
            else if (time >= 3600) {
                hour = Math.floor(time / 3600);
                ret = hour + "时";
            }
            else {
                var minute = Math.floor(time / 60);
                if (minute < 10)
                    ret += "0";
                ret += minute.toString() + separator;
                var second = time % 60;
                if (second < 10)
                    ret += "0";
                ret += second.toString();
            }
            return ret;
        }
        if (time > LTUtils.ONE_DAY) {
            var day = Math.floor(time / LTUtils.ONE_DAY);
            ret = day + "天";
            time = time - day * LTUtils.ONE_DAY;
            if (flag) {
                hour = Math.floor(time / 3600);
                if (hour > 0) {
                    ret += hour + "时";
                }
                return ret;
            }
        }
        if (time <= 0) {
            ret = ret + "00:00";
            return ret;
        }
        ret = '';
        hour = Math.floor(time / 3600);
        if (hour > 0) {
            if (hour < 10) {
                ret += "0" + hour.toString() + separator;
            }
            else {
                ret += hour.toString() + separator;
            }
        }
        var minute = Math.floor((time - hour * 3600) / 60);
        if ((minute > 0) || (hour > 0)) {
            if (minute < 10)
                ret += "0";
            ret += minute.toString() + separator;
        }
        else {
            ret += "00" + separator;
        }
        var second = time % 60;
        if (second < 10)
            ret += "0";
        ret += second.toString();
        return ret;
    }
    /**
    * 获取当前天数
    */
    static GetCurrentDayCount(tick) {
        let dayCount = Math.floor(tick / 1000 / 60 / 60 / 24);
        return dayCount;
    }
}
/**
* 时间转换
*/
LTUtils.ONE_YEAR = 60 * 60 * 24 * 365;
LTUtils.ONE_DAY = 60 * 60 * 24;


/***/ }),

/***/ "./src/LTGame/LTUtils/MathEx.ts":
/*!**************************************!*\
  !*** ./src/LTGame/LTUtils/MathEx.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MathEx; });
class MathEx {
    static ToHex(num) {
        return num.toString(16);
    }
    static RandomFromArray(numArr) {
        var randomIndex = MathEx.RandomInt(0, numArr.length);
        return numArr[randomIndex];
    }
    static RandomFromWithWeight(numArr, weightArr) {
        if (numArr == null || numArr.length == 0) {
            return null;
        }
        var totalWeight = 0;
        for (var weight of weightArr) {
            totalWeight += weight;
        }
        var randomWeight = MathEx.Random(0, totalWeight);
        var currentWeight = 0;
        for (var i = 0; i < numArr.length; ++i) {
            currentWeight += weightArr[i];
            if (randomWeight < currentWeight) {
                return numArr[i];
            }
        }
        return numArr[numArr.length - 1];
    }
    static RandomInt(min, max) {
        return Math.floor(this.Random(min, max));
    }
    static Random(min, max) {
        return (max - min) * Math.random() + min;
    }
    static Clamp(value, min, max) {
        if (value < min)
            return min;
        if (value > max)
            return max;
        return value;
    }
    static Clamp01(value) {
        return this.Clamp(value, 0, 1);
    }
    static Sign(value) {
        if (value == 0)
            return 1;
        return value > 0 ? 1 : -1;
    }
    static GetNumCount(num) {
        var numberCount = 0;
        var newNumber = num;
        while (newNumber / 10 > 0) {
            newNumber = Math.floor(newNumber / 10);
            numberCount++;
        }
        return numberCount;
    }
    static Lerp(from, to, progress) {
        return from + (to - from) * progress;
    }
    static MoveTowardsAngle(current, target, maxDelta) {
        var num = MathEx.DeltaAngle(current, target);
        if (0 - maxDelta < num && num < maxDelta) {
            return target;
        }
        target = current + num;
        return MathEx.MoveTowards(current, target, maxDelta);
    }
    static MoveTowards(current, target, maxDelta) {
        if (Math.abs(target - current) <= maxDelta) {
            return target;
        }
        return current + Math.sign(target - current) * maxDelta;
    }
    static DeltaAngle(current, target) {
        var num = MathEx.Repeat(target - current, 360);
        if (num > 180) {
            num -= 360;
        }
        return num;
    }
    static Repeat(t, length) {
        return MathEx.Clamp(t - Math.floor(t / length) * length, 0, length);
    }
    static IsSimilar(n1, n2) {
        return n1 == n2;
    }
}
MathEx.Deg2Rad = 0.0175;
MathEx.Rad2Deg = 57.2958;


/***/ }),

/***/ "./src/LTGame/LTUtils/MonoHelper.ts":
/*!******************************************!*\
  !*** ./src/LTGame/LTUtils/MonoHelper.ts ***!
  \******************************************/
/*! exports provided: default, EActionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MonoHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EActionType", function() { return EActionType; });
class MonoHelper extends Laya.Script {
    constructor() {
        super(...arguments);
        this._updateActions = [];
        this._lateUpdateActions = [];
    }
    static get instance() {
        if (this._instance == null) {
            let monoHelper = new Laya.Sprite();
            this._instance = monoHelper.addComponent(MonoHelper);
            Laya.stage.addChild(monoHelper);
        }
        return this._instance;
    }
    _GetActionList(actionType) {
        switch (actionType) {
            case EActionType.Update:
                return this._updateActions;
            case EActionType.LateUpdate:
                return this._lateUpdateActions;
            default:
                console.error("未处理的actionType类型", actionType);
                return null;
        }
    }
    AddAction(actionType, caller, func, args) {
        let list = this._GetActionList(actionType);
        if (list == null)
            return;
        for (let i = 0; i < list.length; ++i) {
            let handleInList = list[i];
            if (handleInList.caller == caller && handleInList.method == func) {
                console.warn("已存在重复注册事件,取消注册");
                return;
            }
        }
        let handle = Laya.Handler.create(caller, func, args, false);
        list.push(handle);
    }
    RemoveAction(actionType, caller, func) {
        let list = this._GetActionList(actionType);
        if (list == null)
            return;
        for (let i = 0; i < list.length; ++i) {
            let handleInList = list[i];
            if (handleInList.caller == caller && handleInList.method == func) {
                list = list.splice(i, 1);
                return;
            }
        }
    }
    onUpdate() {
        for (let i = 0; i < this._updateActions.length; ++i) {
            let action = this._updateActions[i];
            action.run();
        }
    }
    onLateUpdate() {
        for (let i = 0; i < this._lateUpdateActions.length; ++i) {
            let action = this._lateUpdateActions[i];
            action.run();
        }
    }
    onDestroy() {
        MonoHelper._instance = null;
    }
}
var EActionType;
(function (EActionType) {
    EActionType[EActionType["Update"] = 0] = "Update";
    EActionType[EActionType["LateUpdate"] = 1] = "LateUpdate";
})(EActionType || (EActionType = {}));


/***/ }),

/***/ "./src/LTGame/LTUtils/StringEx.ts":
/*!****************************************!*\
  !*** ./src/LTGame/LTUtils/StringEx.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StringEx; });
class StringEx {
    static SplitToIntArray(str, splitStr) {
        var splits = str.split(splitStr);
        var result = [];
        for (var i = 0; i < splits.length; ++i) {
            var parseNum = parseInt(splits[i]);
            if (isNaN(parseNum)) {
                parseNum = 0;
            }
            result.push(parseNum);
        }
        return result;
    }
    static IntArrToStr(arr) {
        var str = "";
        for (var i = 0; i < arr.length; ++i) {
            str += arr[i].toFixed(0);
            if (i < arr.length - 1) {
                str += ",";
            }
        }
        return str;
    }
    static IsNullOrEmpty(str) {
        if (str == null)
            return true;
        if (str == "")
            return true;
        return false;
    }
}


/***/ }),

/***/ "./src/LTGame/LTVersion.ts":
/*!*********************************!*\
  !*** ./src/LTGame/LTVersion.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTVersion; });
class LTVersion {
}
LTVersion.version = "0.0.1";


/***/ }),

/***/ "./src/LTGame/Platform/BDPlatform.ts":
/*!*******************************************!*\
  !*** ./src/LTGame/Platform/BDPlatform.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BDPlatform; });
/* harmony import */ var _WXPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WXPlatform */ "./src/LTGame/Platform/WXPlatform.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");




class BDPlatform extends _WXPlatform__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].BD;
        this._showVideoLoad = false;
    }
    Init(platformData) {
        this._base = window["swan"];
        if (this._base == null) {
            console.error("平台初始化错误");
            return;
        }
        this._platformData = platformData;
        this._InitLauchOption();
        // this._Login();
        this._InitShareInfo();
        this._InitSystemInfo();
        this._isBannerLoaded = false;
        this._isBannerShowed = false;
        // this._CreateBannerAd();
        this._CreateVideoAd();
        this._CreateInterstitalAd();
        window["iplatform"] = this;
    }
    _CreateBannerAd() {
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(this._platformData.bannerId)) {
            console.log("无有效的banner广告ID,取消加载");
            return;
        }
        let windowWidth = this._base.getSystemInfoSync().windowWidth;
        let windowHeight = this._base.getSystemInfoSync().windowHeight;
        let bannerObj = {};
        bannerObj["adUnitId"] = this._platformData.bannerId; // "adunit-b48894d44d318e5a";
        bannerObj["appSid"] = this.sid;
        let styleObj = {};
        styleObj["left"] = 0;
        styleObj["top"] = 0;
        styleObj["width"] = windowWidth;
        bannerObj["style"] = styleObj;
        this._bannerAd = this._base.createBannerAd(bannerObj);
        this._bannerAd.onLoad(() => {
            console.log("banner加载成功");
            this._isBannerLoaded = true;
            this._bannerAd.style.top = windowHeight - this._bannerAd.style.height;
            // 创建完直接显示广告
            this._bannerAd.show();
        });
        this._bannerAd.onError((res) => {
            console.error("banner广告加载失败", res);
        });
    }
    _CreateVideoAd() {
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(this._platformData.rewardVideoId)) {
            console.log("无有效的视频广告ID,取消加载");
            return;
        }
        this._videoFailedCount = 0;
        let videoObj = {};
        videoObj["adUnitId"] = this._platformData.rewardVideoId; // "adunit-5631637236cf16b6";
        videoObj["appSid"] = this.sid;
        this._rewardVideo = this._base.createRewardedVideoAd(videoObj);
        this._rewardVideo.onLoad(() => {
            console.log("视频广告加载成功");
            this._isVideoLoaded = true;
        });
        this._rewardVideo.onError((res) => {
            this._videoFailedCount++;
            console.error("视频广告加载失败", res);
            if (this._videoFailedCount > 10) {
                console.log("第", this._videoFailedCount, "次重新加载视频广告");
                // 失败自动加载广告
                this._rewardVideo.load();
            }
        });
        this._rewardVideo.onClose((res) => {
            this._base.hideLoading();
            Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_3__["CommonEventId"].RESUM_AUDIO);
            console.log("视频回调", res);
            let isEnd = res["isEnded"];
            if (isEnd) {
                if (this._rewardSuccessed)
                    this._rewardSuccessed.run();
            }
            else {
                if (this._rewardSkipped)
                    this._rewardSkipped.run();
            }
            // bd需要自动加载广告
            this._rewardVideo.load();
        });
    }
    _CreateInterstitalAd() {
    }
    LoadSubpackage(name, onSuccess, onFailed, onProgress) {
        let loadObj = {};
        loadObj["name"] = name;
        loadObj["success"] = () => {
            console.log("分包加载成功", name);
            if (onSuccess) {
                onSuccess.run();
            }
        };
        loadObj["fail"] = () => {
            console.error("分包加载失败", name);
            if (onFailed) {
                onFailed.run();
            }
        };
        let loadTask = this._base.loadSubpackage(loadObj);
        loadTask.onProgressUpdate((res) => {
            if (onProgress) {
                let value = res.progress / 100;
                if (isNaN(value)) {
                    value = res.loaded / res.total;
                }
                onProgress.runWith(value);
            }
        });
    }
    RecordEvent(eventId, param) {
        this._base.reportAnalytics(eventId, param);
    }
    ShowBannerAd() {
        if (this._isBannerLoaded) {
            return;
        }
        this._CreateBannerAd();
    }
    HideBannerAd() {
        if (!this._isBannerLoaded)
            return;
        this._isBannerLoaded = false;
        if (this._bannerAd) {
            this._bannerAd.destroy();
        }
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/Data/LTPlatformData.ts":
/*!****************************************************!*\
  !*** ./src/LTGame/Platform/Data/LTPlatformData.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTPlatformData; });
class LTPlatformData {
    constructor() {
        this.bannerId = "";
        this.rewardVideoId = "";
        this.interstitialId = "";
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/DefaultPlatform.ts":
/*!************************************************!*\
  !*** ./src/LTGame/Platform/DefaultPlatform.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultPlatform; });
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");


class DefaultPlatform {
    constructor() {
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].Web;
        this.safeArea = null;
    }
    Init(platformData) {
        this.loginState = {
            isLogin: false,
            code: null
        };
        Laya.timer.once(500, this, this._FakeLoginEnd);
    }
    _FakeLoginEnd() {
        if (this.onLoginEnd)
            this.onLoginEnd.run();
    }
    IsBannerAvaliable() {
        return false;
    }
    IsVideoAvaliable() {
        return true;
    }
    IsInterstitalAvaliable() {
        return false;
    }
    ShowBannerAd() {
        console.log("调用ShowBannerAd");
    }
    HideBannerAd() {
        console.log("调用HideBannerAd");
    }
    ShowRewardVideoAd(onSuccess, onSkipped) {
        console.log("调用ShowRewardVideoAd");
        if (onSuccess != null) {
            onSuccess.run();
        }
    }
    ShowInterstitalAd() {
        console.log("调用ShowInterstitalAd");
    }
    GetFromAppId() {
        return null;
    }
    ShareAppMessage(obj, onSuccess = null, onFailed = null) {
        console.log("分享消息", obj);
        if (onSuccess) {
            onSuccess.run();
        }
    }
    LoadSubpackage(name, onSuccess, onFailed) {
        if (onSuccess) {
            onSuccess.run();
        }
    }
    RecordEvent(eventId, param) {
        console.log("记录事件", eventId, param);
    }
    StartRecord(maxTime) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].platformStr, "暂未实现录屏功能");
    }
    StopRecord() {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].platformStr, "暂未实现录屏功能");
    }
    ShareVideoInfo() {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].platformStr, "暂未实现录屏功能");
    }
    _CheckUpdate() {
    }
    ShowToast(str) {
        console.log("提示信息:", str);
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/EPlatformType.ts":
/*!**********************************************!*\
  !*** ./src/LTGame/Platform/EPlatformType.ts ***!
  \**********************************************/
/*! exports provided: EPlatformType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPlatformType", function() { return EPlatformType; });
var EPlatformType;
(function (EPlatformType) {
    EPlatformType[EPlatformType["None"] = 0] = "None";
    EPlatformType[EPlatformType["Web"] = 1] = "Web";
    EPlatformType[EPlatformType["WX"] = 2] = "WX";
    EPlatformType[EPlatformType["QQ"] = 3] = "QQ";
    EPlatformType[EPlatformType["BD"] = 4] = "BD";
    EPlatformType[EPlatformType["Oppo"] = 5] = "Oppo";
    EPlatformType[EPlatformType["Vivo"] = 6] = "Vivo";
    EPlatformType[EPlatformType["TT"] = 7] = "TT";
    EPlatformType[EPlatformType["QTT"] = 8] = "QTT";
})(EPlatformType || (EPlatformType = {}));


/***/ }),

/***/ "./src/LTGame/Platform/LTPlatform.ts":
/*!*******************************************!*\
  !*** ./src/LTGame/Platform/LTPlatform.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTPlatform; });
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTPlatformFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LTPlatformFactory */ "./src/LTGame/Platform/LTPlatformFactory.ts");


class LTPlatform {
    static get instance() {
        if (this._instance == null) {
            console.error("对象尚未初始化,请先调用CreateInstance进行初始化");
        }
        return this._instance;
    }
    static CreateInstance(appId = null) {
        if (this._instance != null) {
            console.error("已调用过平台创建为", LTPlatform.GetPlatformStr(this._instance.platform), "不能重复创建");
            return this._instance;
        }
        this._instance = _LTPlatformFactory__WEBPACK_IMPORTED_MODULE_1__["default"].CreateInstance();
        this._instance.appId = appId;
        console.log("平台实例创建完成", LTPlatform.GetPlatformStr(this._instance.platform));
        return this._instance;
    }
    static get platformStr() {
        return LTPlatform.GetPlatformStr(this._instance.platform);
    }
    static GetPlatformStr(platformEnum) {
        switch (platformEnum) {
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].BD:
                return "百度";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].None:
                return "未识别";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].Oppo:
                return "Oppo";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].QQ:
                return "QQ";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].TT:
                return "头条";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].Vivo:
                return "Vivo";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].Web:
                return "网页";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].WX:
                return "微信";
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].QTT:
                return "趣头条";
            default:
                return "未定义";
        }
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/LTPlatformFactory.ts":
/*!**************************************************!*\
  !*** ./src/LTGame/Platform/LTPlatformFactory.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTPlatformFactory; });
/* harmony import */ var _TTPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TTPlatform */ "./src/LTGame/Platform/TTPlatform.ts");
/* harmony import */ var _WXPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WXPlatform */ "./src/LTGame/Platform/WXPlatform.ts");
/* harmony import */ var _BDPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BDPlatform */ "./src/LTGame/Platform/BDPlatform.ts");
/* harmony import */ var _QTTPlatform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QTTPlatform */ "./src/LTGame/Platform/QTTPlatform.ts");
/* harmony import */ var _QQPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QQPlatform */ "./src/LTGame/Platform/QQPlatform.ts");
/* harmony import */ var _DefaultPlatform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DefaultPlatform */ "./src/LTGame/Platform/DefaultPlatform.ts");






class LTPlatformFactory {
    static CreateInstance() {
        let isQTT = window["qttGame"] != null;
        let isTT = window["tt"] != null;
        let result;
        if (isTT) {
            result = new _TTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"]();
        }
        else if (Laya.Browser.onMiniGame) {
            result = new _WXPlatform__WEBPACK_IMPORTED_MODULE_1__["default"]();
        }
        else if (Laya.Browser.onBDMiniGame) {
            result = new _BDPlatform__WEBPACK_IMPORTED_MODULE_2__["default"]();
        }
        else if (isQTT) {
            result = new _QTTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"]();
        }
        else if (Laya.Browser.onQQMiniGame) {
            result = new _QQPlatform__WEBPACK_IMPORTED_MODULE_4__["default"]();
        }
        else {
            console.log("未识别平台,默认创建为web", Laya.Browser.userAgent);
            result = new _DefaultPlatform__WEBPACK_IMPORTED_MODULE_5__["default"]();
        }
        return result;
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/QQPlatform.ts":
/*!*******************************************!*\
  !*** ./src/LTGame/Platform/QQPlatform.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QQPlatform; });
/* harmony import */ var _WXPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WXPlatform */ "./src/LTGame/Platform/WXPlatform.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");




class QQPlatform extends _WXPlatform__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].QQ;
    }
    Init(platformData) {
        this._base = window["qq"];
        if (this._base == null) {
            console.error("平台初始化错误", _LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr);
            return;
        }
        this._platformData = platformData;
        this._InitLauchOption();
        this._Login();
        this._InitShareInfo();
        this._InitSystemInfo();
        this._CreateBannerAd();
        this._CreateVideoAd();
        this._CreateInterstitalAd();
        window["iplatform"] = this;
    }
    _InitSystemInfo() {
        try {
            let systemInfo = this._base.getSystemInfoSync();
            this._cacheScreenScale = systemInfo.screenWidth / Laya.stage.width;
            this.safeArea = {};
            this.safeArea.width = systemInfo.windowWidth;
            this.safeArea.height = systemInfo.windowHeight;
            this.safeArea.top = systemInfo.statusBarHeight;
            this.safeArea.bottom = 0;
            console.log("QQ覆写_InitSystemInfo", this.safeArea);
        }
        catch (e) {
            console.error(e);
            console.error("获取设备信息失败,执行默认初始化");
            this.safeArea = null;
        }
    }
    _CreateBannerAd() {
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__["default"].IsNullOrEmpty(this._platformData.bannerId)) {
            console.log("无有效的banner广告ID,取消加载");
            return;
        }
        let windowWidth = this._base.getSystemInfoSync().windowWidth;
        let windowHeight = this._base.getSystemInfoSync().windowHeight;
        let bannerObj = {};
        bannerObj["adUnitId"] = this._platformData.bannerId; // "adunit-b48894d44d318e5a";
        let styleObj = {};
        styleObj["left"] = 0;
        styleObj["top"] = 0;
        styleObj["width"] = 300;
        bannerObj["style"] = styleObj;
        this._bannerAd = this._base.createBannerAd(bannerObj);
        this._isBannerLoaded = false;
        this._bannerAd.onLoad(() => {
            console.log("banner加载成功", this._bannerAd);
            this._isBannerLoaded = true;
        });
        this._bannerAd.onError((res) => {
            console.error("banner广告加载失败", res);
        });
        this._bannerAd.onResize((size) => {
            console.log("onResize");
            this._bannerAd.style.top = windowHeight - size.height;
            this._bannerAd.style.left = (windowWidth - size.width) / 2;
        });
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/QTTPlatform.ts":
/*!********************************************!*\
  !*** ./src/LTGame/Platform/QTTPlatform.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QTTPlatform; });
/* harmony import */ var _WXPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WXPlatform */ "./src/LTGame/Platform/WXPlatform.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");



class QTTPlatform extends _WXPlatform__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].QTT;
    }
    Init(platformData) {
        this._base = window["qttGame"];
        if (this._base == null) {
            console.error("平台初始化错误");
            return;
        }
        this._platformData = platformData;
        // this._InitLauchOption();
        // this._Login();
        // this._InitShareInfo();
        // this._InitSystemInfo();
        // this._CreateBannerAd();
        // this._CreateVideoAd();
        // this._CreateInterstitalAd();
        window["iplatform"] = this;
    }
    IsBannerAvaliable() {
        return true;
    }
    ShowBannerAd() {
        this._base.showBanner({ index: 1 });
    }
    HideBannerAd() {
        this._base.hideBanner();
    }
    IsVideoAvaliable() {
        return true;
    }
    ShowRewardVideoAd(onSuccess, onSkipped) {
        let options = {};
        options.index = 1; //广告位置（1，2，3，4...）
        options.gametype = 1; //互动游戏类型，1(砸金蛋)  2(laba)  3(大转盘)
        options.rewardtype = 1; //互动广告框，只有 1
        options.data = {};
        options.data.title = "获得奖励"; //互动抽中奖后的道具提示文字
        Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__["CommonEventId"].PAUSE_AUDIO);
        this._base.showVideo((res) => {
            Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__["CommonEventId"].RESUM_AUDIO);
            if (res == 1) {
                // 播放完成，发放奖励
                if (onSuccess) {
                    onSuccess.run();
                }
            }
            else {
                //res = 0    填充不足
                //res = 2    提前关闭
                if (onSkipped) {
                    onSkipped.run();
                }
            }
        }, options);
    }
    ShowInterstitalAd() {
        // 趣头条插页广告转接为互动广告
        this.ShowHDReward();
    }
    /**
     * 显示互动广告
     */
    ShowHDReward() {
        let options = {};
        options.index = 1;
        options.rewardtype = 1;
        this._base.showHDReward(options);
    }
    RecordEvent(eventId, param) {
        console.log("记录事件", eventId, param);
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/ShareInfo.ts":
/*!******************************************!*\
  !*** ./src/LTGame/Platform/ShareInfo.ts ***!
  \******************************************/
/*! exports provided: ShareInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareInfo", function() { return ShareInfo; });
class ShareInfo {
}


/***/ }),

/***/ "./src/LTGame/Platform/ShareManager.ts":
/*!*********************************************!*\
  !*** ./src/LTGame/Platform/ShareManager.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShareManager; });
/* harmony import */ var _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _ShareInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShareInfo */ "./src/LTGame/Platform/ShareInfo.ts");



class ShareManager {
    constructor() {
        this._shareInfoList = [];
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new ShareManager();
        }
        return this._instance;
    }
    AddShareInfo(shareInfo) {
        for (let getInfo of this._shareInfoList) {
            if (getInfo.shareId == shareInfo.shareId)
                return;
        }
        this._shareInfoList.push(shareInfo);
    }
    GetShareInfo(id = null) {
        if (this._shareInfoList.length == 0) {
            let fakeShareInfo = new _ShareInfo__WEBPACK_IMPORTED_MODULE_2__["ShareInfo"]();
            return fakeShareInfo;
        }
        if (id != null) {
            for (let shareInfo of this._shareInfoList) {
                if (shareInfo.shareId == id)
                    return shareInfo;
            }
        }
        let randomShare = _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_0__["default"].RandomFromArray(this._shareInfoList);
        return randomShare;
    }
    ShareAppMessage(shareInfo) {
        _LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ShareAppMessage(shareInfo, Laya.Handler.create(this, () => {
            console.log("分享成功");
        }), null);
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/TTPlatform.ts":
/*!*******************************************!*\
  !*** ./src/LTGame/Platform/TTPlatform.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TTPlatform; });
/* harmony import */ var _WXPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WXPlatform */ "./src/LTGame/Platform/WXPlatform.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _ShareManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShareManager */ "./src/LTGame/Platform/ShareManager.ts");
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");






class TTPlatform extends _WXPlatform__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].TT;
        this._showVideoLoad = false;
    }
    Init(platformData) {
        this._base = window["tt"];
        if (this._base == null) {
            console.error("平台初始化错误");
            return;
        }
        this._platformData = platformData;
        this._InitLauchOption();
        // this._Login();
        this._InitShareInfo();
        this._InitSystemInfo();
        this._CreateBannerAd();
        this._CreateVideoAd();
        this._CreateInterstitalAd();
        this._CreateRecordManager();
        window["iplatform"] = this;
    }
    _CreateBannerAd() {
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_5__["default"].IsNullOrEmpty(this._platformData.bannerId)) {
            console.log("无有效的banner广告ID,取消加载");
            return;
        }
        let windowWidth = this._base.getSystemInfoSync().windowWidth;
        let windowHeight = this._base.getSystemInfoSync().windowHeight;
        let bannerObj = {};
        bannerObj["adUnitId"] = this._platformData.bannerId; // "adunit-b48894d44d318e5a";
        bannerObj["adIntervals"] = 30;
        let styleObj = {};
        styleObj["left"] = 0;
        styleObj["top"] = 0;
        styleObj["width"] = windowWidth;
        bannerObj["style"] = styleObj;
        this._bannerAd = this._base.createBannerAd(bannerObj);
        this._isBannerLoaded = false;
        this._bannerAd.onLoad(() => {
            console.log("banner加载成功", this._bannerAd);
            this._isBannerLoaded = true;
        });
        this._bannerAd.onError((res) => {
            console.error("banner广告加载失败", res);
            this._bannerAd == null;
        });
        this._bannerAd.onResize((size) => {
            this._bannerAd.style.top = windowHeight - size.height;
            this._bannerAd.style.left = (windowWidth - size.width) / 2;
        });
    }
    _CreateRecordManager() {
        this._isRecording = false;
        this._isRecordSuccess = false;
        this._recorderManager = this._base.getGameRecorderManager();
        this._recorderManager.onStart((res) => {
            console.log("开始录制", res);
            this._isRecording = true;
            this._isRecordSuccess = false;
            this._startCallBack && this._startCallBack.run();
            this._startCallBack = null;
        });
        this._recorderManager.onStop((res) => {
            console.log("停止录制", res);
            this._cacheRecorderVideoPath = res.videoPath;
            this._isRecording = false;
            this._isRecordSuccess = true;
            this._endCallBack && this._endCallBack.run();
            this._endCallBack = null;
        });
        this._recorderManager.onError((err) => {
            console.log("录制发生错误", err);
            this._isRecordSuccess = false;
        });
    }
    RecordEvent(eventId, param) {
        let reportAnalytics = this._base["reportAnalytics"];
        if (reportAnalytics) {
            if (param == null) {
                param = {};
            }
            reportAnalytics(eventId, param);
        }
        else {
            console.error("reportAnalytics 方法不存在");
        }
    }
    ShowBannerAd() {
        if (!this.IsBannerAvaliable()) {
            return;
        }
        this._bannerAd.show();
    }
    StartRecord(maxTime, startCallBack, overCallBack) {
        if (this._isRecording) {
            console.log("视频已经在录制中,不能重复录制");
            return;
        }
        console.log("调用开始录屏");
        maxTime = _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_2__["default"].Clamp(maxTime, 3, 300);
        this._recorderManager.start({
            duration: maxTime
        });
        if (this._startCallBack) {
            this._startCallBack.recover();
            this._startCallBack = null;
        }
        this._startCallBack = startCallBack;
        if (this._endCallBack) {
            this._endCallBack.recover();
            this._endCallBack = null;
        }
        this._endCallBack = overCallBack;
    }
    StopRecord() {
        if (!this._isRecording) {
            console.log("没有视频正在录制中,无法停止录制");
            return;
        }
        console.log("调用停止录屏");
        this._recorderManager.stop();
    }
    ShareVideoInfo(onSuccess, onFailed) {
        if (this._isRecordSuccess) {
            let shareData = {};
            shareData.channel = "video";
            let getShareData = _ShareManager__WEBPACK_IMPORTED_MODULE_4__["default"].instance.GetShareInfo();
            shareData.title = getShareData.shareTitle;
            shareData.extra = {
                videoPath: this._cacheRecorderVideoPath
            };
            shareData.success = () => {
                console.log("分享成功");
                if (onSuccess) {
                    onSuccess.run();
                }
            };
            shareData.fail = (e) => {
                console.log("分享失败", e);
                if (onFailed) {
                    onFailed.run();
                }
            };
            this._base.shareAppMessage(shareData);
        }
        else {
            console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].platformStr, "录屏发生错误,无法分享");
        }
    }
    ShareAppMessage(shareInfo, onSuccess, onFailed) {
        console.log("分享消息", shareInfo);
        let shareObj = _WXPlatform__WEBPACK_IMPORTED_MODULE_0__["default"]._WrapShareInfo(shareInfo);
        shareObj["success"] = () => {
            console.log("分享成功");
            if (onSuccess) {
                onSuccess.run();
            }
        };
        shareObj["fail"] = () => {
            console.log("分享失败");
            if (onFailed) {
                onFailed.run();
            }
        };
        this._base.shareAppMessage(shareObj);
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/WXPlatform.ts":
/*!*******************************************!*\
  !*** ./src/LTGame/Platform/WXPlatform.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WXPlatform; });
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _ShareManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShareManager */ "./src/LTGame/Platform/ShareManager.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");






class WXPlatform {
    constructor() {
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].WX;
        this.safeArea = null;
        this._isBannerLoaded = false;
        this._isVideoLoaded = false;
        this._isInterstitialLoaded = false;
        this._showVideoLoad = true;
    }
    Init(platformData) {
        this._base = window["wx"];
        if (this._base == null) {
            console.error("平台初始化错误", _LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].platformStr);
            return;
        }
        this._platformData = platformData;
        this._InitLauchOption();
        this._Login();
        this._InitShareInfo();
        this._InitSystemInfo();
        this._CreateBannerAd();
        this._CreateVideoAd();
        this._CreateInterstitalAd();
        // this._CreateRecordManager();
        window["iplatform"] = this;
    }
    _CheckUpdate() {
        let updateManager = this._base.getUpdateManager();
        if (updateManager == null)
            return;
        updateManager.onCheckForUpdate(function (res) {
            // 请求完新版本信息的回调
            console.log("onCheckForUpdate", res.hasUpdate);
            if (res.hasUpdate) {
                this._base.showToast({
                    title: "即将有更新请留意"
                });
            }
        });
        updateManager.onUpdateReady(() => {
            this._base.showModal({
                title: "更新提示",
                content: "新版本已经准备好，是否立即使用？",
                success: function (res) {
                    if (res.confirm) {
                        // 调用 applyUpdate 应用新版本并重启
                        updateManager.applyUpdate();
                    }
                    else {
                        this._base.showToast({
                            icon: "none",
                            title: "小程序下一次「冷启动」时会使用新版本"
                        });
                    }
                }
            });
        });
        updateManager.onUpdateFailed(() => {
            this._base.showToast({
                title: "更新失败，下次启动继续..."
            });
        });
    }
    _CreateRecordManager() {
        this._isRecording = false;
        this._isRecordSuccess = false;
        this._recorderManager = this._base.getGameRecorder();
        this._recorderManager.on("start", () => {
            console.log("开始录制");
            this._isRecording = true;
            this._isRecordSuccess = false;
        });
        this._recorderManager.on("stop", (res) => {
            console.log("停止录制", res);
            this._cacheRecorderVideoPath = res.videoPath;
            this._isRecording = false;
            this._isRecordSuccess = true;
        });
        this._recorderManager.on("error", (err) => {
            console.log("录制发生错误", err);
            this._isRecordSuccess = false;
        });
    }
    _Login() {
        this.loginState = {
            isLogin: false,
            code: ""
        };
        let loginData = {};
        loginData.success = (res) => {
            this._OnLoginSuccess(res);
        };
        loginData.fail = (res) => {
            console.error(_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].platformStr, "登录失败", res);
            this.loginState.isLogin = false;
            this.loginState.code = "";
        };
        loginData.complete = (res) => {
            if (this.onLoginEnd != null) {
                this.onLoginEnd.run();
            }
        };
        this._base.login(loginData);
    }
    _OnLoginSuccess(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].platformStr, "登录成功", res);
        this.loginState.isLogin = true;
        this.loginState.code = res.code;
    }
    _InitLauchOption() {
        // 绑定onShow事件
        this._base.onShow(this._OnShow);
        this._base.onHide(this._OnHide);
        // 自动获取一次启动参数
        let res = this._base.getLaunchOptionsSync();
        this._OnShow(res);
    }
    _InitShareInfo() {
        this._base.showShareMenu({
            withShareTicket: true,
            success: (res) => {
                console.log("InitShareSuccess", res);
            },
            fail: (res) => {
                console.log("InitShareFailed", res);
            },
            complete: (res) => {
                console.log("InitShareComplete", res);
            }
        });
        this._base.onShareAppMessage(() => {
            let shareInfo = _ShareManager__WEBPACK_IMPORTED_MODULE_2__["default"].instance.GetShareInfo();
            return WXPlatform._WrapShareInfo(shareInfo);
        });
    }
    static _WrapShareInfo(shareInfo) {
        let shareObj = {};
        if (shareInfo.shareTitle) {
            shareObj["title"] = shareInfo.shareTitle;
        }
        if (shareInfo.shareImg) {
            shareObj["imageUrl"] = shareInfo.shareImg;
        }
        if (shareInfo.sharePath) {
            shareObj["query"] = {};
            let pathSplit = shareInfo.sharePath.split("?");
            let params = pathSplit[1].split("&");
            for (let getParam of params) {
                let splitParam = getParam.split("=");
                shareObj["query"][splitParam[0]] = splitParam[1];
            }
        }
        return shareObj;
    }
    _InitSystemInfo() {
        try {
            let systemInfo = this._base.getSystemInfoSync();
            this.safeArea = systemInfo.safeArea;
            this._cacheScreenScale = systemInfo.screenWidth / Laya.stage.width;
        }
        catch (e) {
            console.error(e);
            console.error("获取设备信息失败,执行默认初始化");
            this.safeArea = null;
        }
    }
    _CreateInterstitalAd() {
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__["default"].IsNullOrEmpty(this._platformData.interstitialId)) {
            console.log("无有效的插页广告ID,取消加载");
            return;
        }
        this._interstitalFailedCount = 0;
        let intAdObj = {};
        intAdObj["adUnitId"] = this._platformData.interstitialId;
        this._intersitialAd = this._base.createInterstitialAd(intAdObj);
        this._intersitialAd.onLoad(() => {
            console.log("插页广告加载成功");
            this._isInterstitialLoaded = true;
        });
        this._intersitialAd.onError((err) => {
            this._interstitalFailedCount++;
            console.error("插页广告加载失败", err);
            if (this._interstitalFailedCount > 10) {
                console.log("第", this._interstitalFailedCount, "次重新加载插页广告");
                // 失败自动加载广告
                this._intersitialAd.load();
            }
        });
    }
    _CreateVideoAd() {
        let createRewardedVideoAd = this._base["createRewardedVideoAd"];
        if (createRewardedVideoAd == null) {
            console.error("无createRewardedVideoAd方法,跳过初始化");
            return;
        }
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__["default"].IsNullOrEmpty(this._platformData.rewardVideoId)) {
            console.log("无有效的视频广告ID,取消加载");
            return;
        }
        this._videoFailedCount = 0;
        let videoObj = {};
        videoObj["adUnitId"] = this._platformData.rewardVideoId; // "adunit-5631637236cf16b6";
        this._rewardVideo = createRewardedVideoAd(videoObj);
        this._rewardVideo.onLoad(() => {
            console.log("视频广告加载成功");
            this._isVideoLoaded = true;
        });
        this._rewardVideo.onError((res) => {
            this._videoFailedCount++;
            console.error("视频广告加载失败", res);
            if (this._videoFailedCount > 10) {
                console.log("第", this._videoFailedCount, "次重新加载视频广告");
                // 失败自动加载广告
                this._rewardVideo.load();
            }
        });
        this._rewardVideo.onClose((res) => {
            Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_5__["CommonEventId"].RESUM_AUDIO);
            console.log("视频回调", res);
            let isEnd = res["isEnded"];
            if (isEnd) {
                if (this._rewardSuccessed)
                    this._rewardSuccessed.run();
            }
            else {
                if (this._rewardSkipped)
                    this._rewardSkipped.run();
                this.ShowToast("跳过视频无法获得奖励");
            }
        });
    }
    _CreateBannerAd() {
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__["default"].IsNullOrEmpty(this._platformData.bannerId)) {
            console.log("无有效的banner广告ID,取消加载");
            return;
        }
        let windowWidth = this._base.getSystemInfoSync().windowWidth;
        let windowHeight = this._base.getSystemInfoSync().windowHeight;
        let bannerObj = {};
        bannerObj["adUnitId"] = this._platformData.bannerId; // "adunit-b48894d44d318e5a";
        bannerObj["adIntervals"] = 30;
        let styleObj = {};
        styleObj["left"] = 0;
        styleObj["top"] = 0;
        styleObj["width"] = 300;
        bannerObj["style"] = styleObj;
        this._bannerAd = this._base.createBannerAd(bannerObj);
        this._isBannerLoaded = false;
        this._bannerAd.onLoad(() => {
            console.log("banner加载成功");
            this._isBannerLoaded = true;
            this._bannerAd.style.top = windowHeight - this._bannerAd.style.realHeight;
            this._bannerAd.style.left = (windowWidth - this._bannerAd.style.realWidth) / 2;
        });
        this._bannerAd.onError((res) => {
            console.error("banner广告加载失败", res);
        });
    }
    IsBannerAvaliable() {
        return this._isBannerLoaded;
    }
    IsVideoAvaliable() {
        return this._isVideoLoaded;
    }
    IsInterstitalAvaliable() {
        return this._isInterstitialLoaded;
    }
    ShowBannerAd() {
        if (!this.IsBannerAvaliable()) {
            return;
        }
        this._bannerAd.show();
    }
    HideBannerAd() {
        if (!this.IsBannerAvaliable())
            return;
        this._bannerAd.hide();
    }
    ShowRewardVideoAd(onSuccess, onSkipped) {
        if (!this._isVideoLoaded) {
            console.error("视频广告尚未加载好");
            return;
        }
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        this._isVideoLoaded = false;
        if (this._showVideoLoad)
            this._base.showLoading({
                title: "正在加载视频广告",
                mask: true
            });
        Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_5__["CommonEventId"].PAUSE_AUDIO);
        if (this._showVideoLoad) {
            this._rewardVideo.show().then(() => {
                this._base.hideLoading();
            });
        }
        else {
            this._rewardVideo.show();
        }
    }
    ShowInterstitalAd() {
        if (!this._isInterstitialLoaded) {
            console.error("插页广告尚未加载好");
            return;
        }
        this._intersitialAd.show();
    }
    GetFromAppId() {
        if (this.lauchOption.referrerInfo == null) {
            return null;
        }
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__["default"].IsNullOrEmpty(this.lauchOption.referrerInfo.appId)) {
            return null;
        }
        return this.lauchOption.referrerInfo.appId;
    }
    /**
     * 小游戏回到前台的事件
     */
    _OnShow(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].platformStr, "OnShow", res);
        _LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.lauchOption = res;
        _LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance._CheckUpdate();
        if (_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.onResume) {
            _LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.onResume.runWith(res);
        }
    }
    /**
     * 小游戏退出前台的事件
     */
    _OnHide(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].platformStr, "OnHide", res);
        if (_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.onPause) {
            _LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.onPause.runWith(res);
        }
    }
    ShareAppMessage(shareInfo, onSuccess, onFailed) {
        console.log("分享消息", shareInfo);
        let shareObj = WXPlatform._WrapShareInfo(shareInfo);
        this._base.shareAppMessage(shareObj);
        if (onSuccess) {
            onSuccess.run();
        }
    }
    LoadSubpackage(name, onSuccess, onFailed, onProgress) {
        let loadObj = {};
        loadObj["name"] = name;
        loadObj["success"] = () => {
            console.log("分包加载成功", name);
            if (onSuccess) {
                onSuccess.run();
            }
        };
        loadObj["fail"] = () => {
            console.error("分包加载失败", name);
            if (onFailed) {
                onFailed.run();
            }
        };
        let loadTask = this._base.loadSubpackage(loadObj);
        loadTask.onProgressUpdate((res) => {
            if (Laya.Browser.onMobile) {
                console.log("分包加载进度", res);
            }
            if (onProgress) {
                onProgress.runWith(res.progress / 100);
            }
        });
    }
    RecordEvent(eventId, param) {
        console.log("记录事件", eventId, param);
        let aldSendEvent = this._base["aldSendEvent"];
        if (aldSendEvent == null) {
            console.error("阿拉丁sdk尚未接入,请检查配置");
            return;
        }
        if (param != null) {
            aldSendEvent(eventId, param);
        }
        else {
            aldSendEvent(eventId);
        }
    }
    StartRecord(maxTime, startCallBack, overCallBack) {
        if (this._isRecording) {
            console.log("视频已经在录制中,不能重复录制");
            return;
        }
        console.log("调用开始录屏");
        let recordObj = {};
        recordObj["duration"] = _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_4__["default"].Clamp(maxTime, 5, 7200);
        this._recorderManager.start(recordObj);
    }
    StopRecord() {
        if (!this._isRecording) {
            console.log("没有视频正在录制中,无法停止录制");
            return;
        }
        console.log("调用停止录屏");
        this._recorderManager.stop();
    }
    /**
     * 创建分享视频按钮
     * @param x
     * @param y
     * @param width
     * @param height
     */
    CreateShareVideoBtn(x, y, width, height) {
        let btnObj = {};
        btnObj.style = {
            left: x * this._cacheScreenScale,
            top: y * this._cacheScreenScale,
            height: height * this._cacheScreenScale,
            width: width * this._cacheScreenScale
        };
        btnObj.share = {
            query: {
                tick: 1
            },
            bgm: "",
            timeRange: [0, 60 * 1000]
        };
        if (this._shareVideoBtn == null) {
            this._shareVideoBtn = this._base.createGameRecorderShareButton(btnObj);
        }
        else {
            this._shareVideoBtn.show();
        }
    }
    /**
     * 隐藏分享视频按钮
     */
    HideShareVideoBtn() {
        if (this._shareVideoBtn != null) {
            this._shareVideoBtn.hide();
        }
    }
    ShareVideoInfo(onSuccess, onFailed) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].platformStr, "不支持直接调用视频分享");
    }
    ShowToast(str) {
        this._base.showToast({
            title: str,
            duration: 2000
        });
    }
}


/***/ }),

/***/ "./src/LTGame/Res/LTRes.ts":
/*!*********************************!*\
  !*** ./src/LTGame/Res/LTRes.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTRes; });
class LTRes {
    static Load(urls, onCompleted, onProgress = null) {
        Laya.loader.create(urls, onCompleted, onProgress);
    }
    static Load2d(urls, onCompleted, onProgress = null) {
        Laya.loader.load(urls, onCompleted, onProgress);
    }
    static LoadAsync(urls, onProgress = null) {
        return new Promise(function (resolve) {
            LTRes.Load(urls, Laya.Handler.create(null, () => {
                resolve();
            }), onProgress);
        });
    }
    static Load2dAsync(urls, onProgress = null) {
        return new Promise(function (resolve) {
            LTRes.Load2d(urls, Laya.Handler.create(null, () => {
                resolve();
            }), onProgress);
        });
    }
}


/***/ }),

/***/ "./src/LTGame/Res/LTRespackManager.ts":
/*!********************************************!*\
  !*** ./src/LTGame/Res/LTRespackManager.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTRespackManager; });
/* harmony import */ var _Config_LoadPackConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config/LoadPackConfig */ "./src/LTGame/Config/LoadPackConfig.ts");
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");




class LTRespackManager {
    constructor() {
        this._packs = [];
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new LTRespackManager();
        }
        return this._instance;
    }
    get packs() {
        return this._packs;
    }
    get baseUrl() {
        return this._baseUrl;
    }
    get _totalProgress() {
        let total = this._subpackProgress.length;
        let loaded = 0;
        for (let singlProgress of this._subpackProgress) {
            loaded += singlProgress;
        }
        return loaded / total;
    }
    SetRemoteUrl(baseUrl) {
        this._baseUrl = baseUrl;
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_1__["default"].IsNullOrEmpty(this._baseUrl))
            return;
        let adapter = null;
        switch (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.platform) {
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].TT:
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].WX:
                adapter = Laya.MiniAdpter;
                break;
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].BD:
                adapter = Laya.BMiniAdapter;
                break;
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].QQ:
                adapter = Laya["QQMiniAdapter"];
                break;
        }
        if (adapter == null)
            return;
        Laya.URL.basePath = this._baseUrl;
        adapter.nativefiles = [];
        for (let pack of this._packs) {
            if (pack.pathType != _Config_LoadPackConfig__WEBPACK_IMPORTED_MODULE_0__["EPackType"].Remote) {
                adapter.nativefiles.push(pack.path);
            }
        }
    }
    AddPackData(...packDatas) {
        packDatas.forEach(packData => {
            this._packs.push(packData);
        });
    }
    LoadSubPack(onComplete, onProgress) {
        this._subpackLoaded = [];
        this._subpackProgress = [];
        for (let i = 0; i < this._packs.length; ++i) {
            let pack = this._packs[i];
            if (pack.pathType == _Config_LoadPackConfig__WEBPACK_IMPORTED_MODULE_0__["EPackType"].SubPack) {
                this._subpackLoaded.push(false);
                this._subpackProgress.push(0);
            }
        }
        let reIndex = 0;
        for (let i = 0; i < this._packs.length; ++i) {
            let pack = this._packs[i];
            if (pack.pathType == _Config_LoadPackConfig__WEBPACK_IMPORTED_MODULE_0__["EPackType"].SubPack) {
                let cacheIndex = reIndex;
                _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.LoadSubpackage(pack.path, Laya.Handler.create(this, () => {
                    this._subpackLoaded[cacheIndex] = true;
                    for (let i = 0; i < this._subpackLoaded.length; ++i) {
                        if (!this._subpackLoaded[i])
                            return;
                    }
                    if (onComplete) {
                        onComplete.run();
                    }
                }), Laya.Handler.create(this, () => {
                    console.error("分包加载失败", pack.path);
                }), Laya.Handler.create(this, (value) => {
                    this._subpackProgress[cacheIndex] = value;
                    if (onProgress) {
                        onProgress.runWith(this._totalProgress);
                    }
                }, null, false));
                reIndex++;
            }
        }
        if (reIndex == 0) {
            onProgress.runWith(1);
            if (onComplete) {
                onComplete.run();
            }
        }
    }
}


/***/ }),

/***/ "./src/LTGame/Start/LTMain.ts":
/*!************************************!*\
  !*** ./src/LTGame/Start/LTMain.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTMain; });
class LTMain {
    constructor(mainLogicClass) {
        let config3D = new Config3D();
        config3D.octreeCulling = false;
        config3D.enableMultiLight = false;
        config3D.isAntialias = true;
        //根据IDE设置初始化引擎
        Laya3D.init(750, 1334, config3D, Laya.Handler.create(null, () => {
            Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
            Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
            Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
            //兼容微信不支持加载scene后缀场景
            Laya.URL.exportSceneToJson = true;
            //打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
            // if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
            // if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
            // Laya.Stat.show();
            Laya.alertGlobalError = false;
            this._mainLogic = new mainLogicClass();
        }));
    }
}


/***/ }),

/***/ "./src/LTGame/Start/LTSplashScene.ts":
/*!*******************************************!*\
  !*** ./src/LTGame/Start/LTSplashScene.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTSplashScene; });
/* harmony import */ var _Fsm_BaseState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Fsm/BaseState */ "./src/LTGame/Fsm/BaseState.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _UIExt_FGui_FGuiData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UIExt/FGui/FGuiData */ "./src/LTGame/UIExt/FGui/FGuiData.ts");
/* harmony import */ var _Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Res/LTRespackManager */ "./src/LTGame/Res/LTRespackManager.ts");
/* harmony import */ var _Config_ConfigManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Config/ConfigManager */ "./src/LTGame/Config/ConfigManager.ts");
/* harmony import */ var _UIExt_FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UIExt/FGui/FGuiEx */ "./src/LTGame/UIExt/FGui/FGuiEx.ts");
/* harmony import */ var _Res_LTRes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Res/LTRes */ "./src/LTGame/Res/LTRes.ts");







class LTSplashScene extends _Fsm_BaseState__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(1);
        /**
         * 用于初始化的ui包
         */
        this._initPath = "res/fgui_load/Load";
        /**
         * 需要加载的其他UI包
         */
        this._needLoadOtherUIPack = [
            "res/fgui/Main"
        ];
        /**
         * 资源加载权重:
         * 子包
         * 配置
         * 资源
         * 其他ui
         */
        this._loadProgressWeight = [10, 1, 5, 2];
        this._configProgress = 0;
        this._otherUIProgress = 0;
        this._resProgress = 0;
        this._subPackProgress = 0;
        this._isUIShowed = false;
    }
    get _loadProgress() {
        let totalWeight = this._loadProgressWeight[0] + this._loadProgressWeight[1] + this._loadProgressWeight[2] + this._loadProgressWeight[3];
        let loadWeight = this._loadProgressWeight[0] * this._subPackProgress
            + this._loadProgressWeight[1] * this._configProgress
            + this._loadProgressWeight[2] * this._resProgress
            + this._loadProgressWeight[3] * this._otherUIProgress;
        return loadWeight / totalWeight * 100;
    }
    _DoEnter() {
        this._InitUI();
    }
    _InitUI() {
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.RecordEvent("开始初始化启动界面", null);
        this._OnBindUI();
        let loadUrl = [];
        loadUrl.push({ url: this._initPath + ".bin", type: Laya.Loader.BUFFER });
        loadUrl.push({ url: this._initPath + "_atlas0.png", type: Laya.Loader.IMAGE });
        Laya.loader.load(loadUrl, Laya.Handler.create(this, this._OnUILoaded));
    }
    _OnBindUI() {
    }
    _OnUILoaded() {
        fgui.UIPackage.addPackage(this._initPath);
        // 打开界面
        let needFit = new _UIExt_FGui_FGuiData__WEBPACK_IMPORTED_MODULE_2__["default"]();
        needFit.needFitScreen = true;
        this._ui = _UIExt_FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_5__["default"].AddUI(this._splashUIClass, needFit);
        this._progressUI = this._ui["m_progress"];
        this._progressUI.value = 0;
        this._isUIShowed = true;
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.RecordEvent("启动界面初始化完成", null);
        _Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_3__["default"].instance.LoadSubPack(Laya.Handler.create(this, this._OnPackLoaded), Laya.Handler.create(this, this._OnPackProgress, null, false));
    }
    _OnPackProgress(value) {
        this._subPackProgress = value;
    }
    _OnPackLoaded() {
        this._StartLoad();
    }
    _StartLoad() {
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.RecordEvent("开始加载配置表", null);
        this._OnSetLoadConfig();
        if (_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_4__["ConfigManager"].needLoadCount <= 0) {
            this._configProgress = 1;
            this._OnConfigLoaded();
            return;
        }
        _Config_ConfigManager__WEBPACK_IMPORTED_MODULE_4__["ConfigManager"].StartLoad(Laya.Handler.create(this, this._OnConfigLoaded), Laya.Handler.create(this, this._OnConfigProgress, null, false));
    }
    _OnSetLoadConfig() {
    }
    _OnConfigProgress(value) {
        this._configProgress = value;
    }
    _OnConfigLoaded() {
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.RecordEvent("开始加载剩余UI资源", null);
        if (this._needLoadOtherUIPack.length == 0) {
            this._OnOtherUILoaded();
            return;
        }
        let uiLoadData = [];
        for (let i = 0; i < this._needLoadOtherUIPack.length; ++i) {
            let otherUIPack = this._needLoadOtherUIPack[i];
            uiLoadData.push({ url: otherUIPack + ".bin", type: Laya.Loader.BUFFER });
            uiLoadData.push({ url: otherUIPack + "_atlas0.png", type: Laya.Loader.IMAGE });
        }
        Laya.loader.load(uiLoadData, Laya.Handler.create(this, this._OnOtherUILoaded), Laya.Handler.create(this, this._OnOtherUIProgress, null, false));
    }
    _OnOtherUIProgress(value) {
        this._otherUIProgress = value;
    }
    _OnOtherUILoaded() {
        return __awaiter(this, void 0, void 0, function* () {
            _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.RecordEvent("开始加载剩余游戏资源", null);
            for (let i = 0; i < this._needLoadOtherUIPack.length; ++i) {
                let otherUIPack = this._needLoadOtherUIPack[i];
                fgui.UIPackage.addPackage(otherUIPack);
            }
            let loadUrls = [];
            this._OnGameResPrepared(loadUrls);
            if (loadUrls.length == 0) {
                this._resProgress = 1;
                this._OnResLoaded();
                return;
            }
            yield _Res_LTRes__WEBPACK_IMPORTED_MODULE_6__["default"].LoadAsync(loadUrls, Laya.Handler.create(this, this._OnResProgress, null, false));
            this._OnResLoaded();
        });
    }
    /**
     * 准备需要在splash界面加载的资源,会体现在进度条上
     * @param urls
     */
    _OnGameResPrepared(urls) {
    }
    _OnResProgress(value) {
        this._resProgress = value;
    }
    _OnResLoaded() {
        this._progressUI.value = 100;
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.RecordEvent("进入游戏", null);
        this.isFinished = true;
        this._OnGameResLoaded();
    }
    _OnGameResLoaded() {
    }
    _DoRunning() {
        if (!this._isUIShowed) {
            return;
        }
        this._progressUI.value = this._loadProgress;
    }
    _DoExit() {
        this._ui.dispose();
    }
}


/***/ }),

/***/ "./src/LTGame/Start/LTStart.ts":
/*!*************************************!*\
  !*** ./src/LTGame/Start/LTStart.ts ***!
  \*************************************/
/*! exports provided: LTStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTStart", function() { return LTStart; });
/* harmony import */ var _Fsm_StateMachine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Fsm/StateMachine */ "./src/LTGame/Fsm/StateMachine.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _Platform_Data_LTPlatformData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Platform/Data/LTPlatformData */ "./src/LTGame/Platform/Data/LTPlatformData.ts");
/* harmony import */ var _Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Res/LTRespackManager */ "./src/LTGame/Res/LTRespackManager.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _UIExt_FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UIExt/FGui/FGuiEx */ "./src/LTGame/UIExt/FGui/FGuiEx.ts");
/* harmony import */ var _LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../LTUtils/MonoHelper */ "./src/LTGame/LTUtils/MonoHelper.ts");
/* harmony import */ var _LTVersion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../LTVersion */ "./src/LTGame/LTVersion.ts");








class LTStart {
    constructor() {
        this._jsonPath = "subpack.json";
        this.__enableStat = false;
        console.log("游戏开始初始化,当前框架版本号", _LTVersion__WEBPACK_IMPORTED_MODULE_7__["default"].version);
        Laya.loader.load(this._jsonPath, Laya.Handler.create(this, this._OnJsonLoaded));
    }
    get _currentState() {
        return this._fsm.currState;
    }
    get _enableStat() {
        return this.__enableStat;
    }
    set _enableStat(value) {
        if (value == this.__enableStat)
            return;
        Laya.Stat.show();
        this.__enableStat = value;
    }
    _OnJsonLoaded() {
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].CreateInstance();
        let platformData = new _Platform_Data_LTPlatformData__WEBPACK_IMPORTED_MODULE_2__["default"]();
        let loadJson = Laya.loader.getRes(this._jsonPath);
        Laya.loader.clearRes(this._jsonPath);
        if (loadJson != null) {
            for (let i = 0; i < loadJson.length; ++i) {
                let jsonData = loadJson[i];
                console.log("自动设置分包", jsonData);
                _Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_3__["default"].instance.AddPackData(jsonData);
            }
        }
        this._HandleInitPlatform(_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.platform, platformData);
        this._HandleSDK();
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.Init(platformData);
        // 非web平台禁用debug模式
        if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].Web) {
            Laya.Shader3D.debugMode = false;
        }
        _UIExt_FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_5__["default"].Init(_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.safeArea);
        Laya.timer.frameOnce(1, this, this._NextFramUpdate);
    }
    _NextFramUpdate() {
        this._fsm = new _Fsm_StateMachine__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this._InitFsm();
        if (this._fsm.count == 0) {
            console.error("请在_InitFsm中先进行状态注册");
            return;
        }
        this._fsm.ChangeState(1);
        this._RegistUpdate();
    }
    _RegistUpdate() {
        _LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_6__["default"].instance.AddAction(_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_6__["EActionType"].Update, this, this._LogicUpdate);
        _LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_6__["default"].instance.AddAction(_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_6__["EActionType"].LateUpdate, this, this._LateUpdate);
    }
    _UnRegistUpdate() {
        _LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_6__["default"].instance.RemoveAction(_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_6__["EActionType"].Update, this, this._LogicUpdate);
        _LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_6__["default"].instance.RemoveAction(_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_6__["EActionType"].LateUpdate, this, this._LateUpdate);
    }
    _HandleSDK() {
    }
    _HandleInitPlatform(ePlatform, platformData) {
    }
    _LogicUpdate() {
        let dt = Laya.timer.delta / 1000;
        let nextState = this._currentState.GetNextState();
        if (nextState != 0) {
            var changeResult = this._fsm.ChangeState(nextState, null);
            if (!changeResult) {
                console.error("场景切换发生错误,无法进行切换,终止游戏流程");
                this._UnRegistUpdate();
                return;
            }
        }
        this._fsm.OnRunning(null, dt);
    }
    _LateUpdate() {
        let dt = Laya.timer.delta / 1000;
        this._currentState.OnLateUpdate(dt);
    }
    _InitFsm() {
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts":
/*!*************************************************!*\
  !*** ./src/LTGame/UIExt/FGui/BaseUIMediator.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseUIMediator; });
class BaseUIMediator {
    constructor() {
        this._scaleSmall = 0.8;
        this._tweenTime = 180;
        this._isShow = false;
        this._lockScreen = false;
    }
    get ui() {
        return this._ui;
    }
    _InitBottom() {
        let bottomGroup = this.ui["m_bottom_group"];
        if (bottomGroup == null) {
            this._defaultBottomHeight = 0;
        }
        else {
            this._defaultBottomHeight = bottomGroup.y;
        }
    }
    _SetBottomDown(downDistance = 0) {
        let bottomGroup = this.ui["m_bottom_group"];
        if (bottomGroup == null)
            return;
        bottomGroup.y = this._defaultBottomHeight + downDistance;
    }
    _OnShow() {
        this._isShow = true;
    }
    Hide(dispose = true) {
        if (this._ui == null)
            return;
        if (this._ui.isDisposed)
            return;
        this._isShow = false;
        this._lockScreen = false;
        this._OnHide();
        if (dispose) {
            this.ui.dispose();
        }
        else {
            this.ui.removeFromParent();
        }
    }
    _OnHide() { }
}


/***/ }),

/***/ "./src/LTGame/UIExt/FGui/FGuiData.ts":
/*!*******************************************!*\
  !*** ./src/LTGame/UIExt/FGui/FGuiData.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FGuiData; });
class FGuiData {
    constructor() {
        /**
         * 是否需要适配刘海屏
         */
        this.needFitScreen = false;
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/FGui/FGuiEx.ts":
/*!*****************************************!*\
  !*** ./src/LTGame/UIExt/FGui/FGuiEx.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FGuiEx; });
/* harmony import */ var _LTUtils_LTDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTUtils/LTDictionary */ "./src/LTGame/LTUtils/LTDictionary.ts");
/* harmony import */ var _FGuiData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FGuiData */ "./src/LTGame/UIExt/FGui/FGuiData.ts");


class FGuiEx {
    static Init(safeArea = null) {
        this.safeArea = safeArea;
        fgui.UIConfig.packageFileExtension = "bin";
        Laya.stage.addChild(fgui.GRoot.inst.displayObject);
        this.UpdateAllUI();
        Laya.stage.on(Laya.Event.RESIZE, this, this.UpdateAllUI);
    }
    static AddUI(uiType, param = null) {
        let ui = uiType.createInstance();
        fgui.GRoot.inst.addChild(ui);
        if (param == null) {
            param = new _FGuiData__WEBPACK_IMPORTED_MODULE_1__["default"]();
        }
        if (param == null || !param.needFitScreen) {
            ui.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
        }
        else {
            ui.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height - this.top - this.bottom);
            ui.y = this.top;
        }
        this._cacheMap.set(ui.constructor.name, param);
        window[ui.constructor.name] = ui;
        console.log("打开界面", ui.constructor.name);
        return ui;
    }
    static UpdateAllUI() {
        let setWidth = Laya.stage.width;
        let setHeight = Laya.stage.height;
        if (this.safeArea != null) {
            let scale = Laya.stage.width / this.safeArea.width;
            this.top = this.safeArea.top * scale;
            this.bottom = this.safeArea.bottom * scale;
        }
        fgui.GRoot.inst.setSize(setWidth, setHeight);
        let childCount = fgui.GRoot.inst.numChildren;
        for (let i = 0; i < childCount; ++i) {
            let ui = fgui.GRoot.inst.getChildAt(i);
            let getData = this._cacheMap.Get(ui.constructor.name);
            if (getData == null || !getData.needFitScreen) {
                ui.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
            }
            else {
                ui.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height - this.top - this.bottom);
                ui.y = this.top;
            }
        }
    }
    static CheckIn(ui, x, y) {
        if (x > ui.x && x < ui.x + ui.width && y > ui.y && y < ui.y + ui.height) {
            return true;
        }
        return false;
    }
    /**
     * 获取3d物件在屏幕中的位置
     * @param camera
     * @param pos3d
     * @param ui
     */
    static GetPointFrom3DWorld(camera, pos3d, ui) {
        let uiPos = new Laya.Vector4();
        camera.worldToViewportPoint(pos3d, uiPos);
        if (ui != null) {
            return ui.globalToLocal(uiPos.x, uiPos.y);
        }
        else {
            return new Laya.Point(uiPos.x, uiPos.y);
        }
    }
}
FGuiEx.top = 0;
FGuiEx.bottom = 0;
FGuiEx._cacheMap = new _LTUtils_LTDictionary__WEBPACK_IMPORTED_MODULE_0__["default"]();


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LTGame_Start_LTMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LTGame/Start/LTMain */ "./src/LTGame/Start/LTMain.ts");
/* harmony import */ var _script_MainStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/MainStart */ "./src/script/MainStart.ts");


new _LTGame_Start_LTMain__WEBPACK_IMPORTED_MODULE_0__["default"](_script_MainStart__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/script/MainStart.ts":
/*!*********************************!*\
  !*** ./src/script/MainStart.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainStart; });
/* harmony import */ var _LTGame_Start_LTStart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LTGame/Start/LTStart */ "./src/LTGame/Start/LTStart.ts");
/* harmony import */ var _scene_SplashScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene/SplashScene */ "./src/script/scene/SplashScene.ts");
/* harmony import */ var _scene_MainScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene/MainScene */ "./src/script/scene/MainScene.ts");
/* harmony import */ var _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LTGame/Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LTGame/Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _LTGame_Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LTGame/Res/LTRespackManager */ "./src/LTGame/Res/LTRespackManager.ts");






class MainStart extends _LTGame_Start_LTStart__WEBPACK_IMPORTED_MODULE_0__["LTStart"] {
    constructor() {
        super();
        this._appId = "wx149cdd1b3b19378f";
        this._enableStat = true;
    }
    _HandleInitPlatform(ePlatform, platformData) {
        let version = "v0.0.1";
        switch (ePlatform) {
            case _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Web:
                console.log("web平台,不做任何处理");
                break;
            case _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].TT:
                this._appId = "ttbe90c82d21ba845b";
                platformData.bannerId = "1bhbt9cjpr9a35bd30";
                platformData.rewardVideoId = "6tnnb4e3em519ja6d2";
                _LTGame_Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_5__["default"].instance.SetRemoteUrl("https://hs.yz061.com/res/down/public/p_yinyou/" + version + "_tt/");
                break;
            default:
                console.error("未处理平台内容", _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].platformStr, "请在MainStart中添加处理");
                break;
        }
    }
    _InitFsm() {
        this._fsm.Add(new _scene_SplashScene__WEBPACK_IMPORTED_MODULE_1__["default"]());
        this._fsm.Add(new _scene_MainScene__WEBPACK_IMPORTED_MODULE_2__["default"]());
    }
}


/***/ }),

/***/ "./src/script/common/GameConst.ts":
/*!****************************************!*\
  !*** ./src/script/common/GameConst.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameConst; });
class GameConst {
}
/**
 * 前进移动速度
 */
GameConst.moveSpeedZ = 20;
/**
 * 地图生成速度
 */
GameConst.genRoadSpeed = 100;
/**
 * 横向滑动速度
 */
GameConst.moveSpeedX = 10;
/**
 * 道路宽度,决定玩家左右移动最大距离
 */
GameConst.halfRoadWidth = 3.5;


/***/ }),

/***/ "./src/script/common/GameData.ts":
/*!***************************************!*\
  !*** ./src/script/common/GameData.ts ***!
  \***************************************/
/*! exports provided: SaveData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveData", function() { return SaveData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameData; });
/* harmony import */ var _LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");

class SaveData {
    constructor() {
        /**
         * 金币数量
         */
        this.coinCount = 0;
        /**
         * 当前关卡id
         */
        this.levelId = 1;
    }
}
class GameData {
    constructor() {
        this._savePath = "game01.sav";
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new GameData();
            this._instance._ReadFromFile();
        }
        return this._instance._saveData;
    }
    static SaveToDisk() {
        if (!this._instance)
            return;
        let json = JSON.stringify(this._instance._saveData);
        Laya.LocalStorage.setJSON(this._instance._savePath, json);
    }
    _ReadFromFile() {
        let readStr = Laya.LocalStorage.getJSON(this._savePath);
        this._saveData = new SaveData();
        if (!_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__["default"].IsNullOrEmpty(readStr)) {
            let jsonData = JSON.parse(readStr);
            for (let key in jsonData) {
                this._saveData[key] = jsonData[key];
            }
        }
        console.log(this._saveData);
    }
}


/***/ }),

/***/ "./src/script/common/GlobalUnit.ts":
/*!*****************************************!*\
  !*** ./src/script/common/GlobalUnit.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalUnit; });
/* harmony import */ var _manager_GameManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manager/GameManager */ "./src/script/manager/GameManager.ts");
/* harmony import */ var _manager_CameraManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager/CameraManager */ "./src/script/manager/CameraManager.ts");


class GlobalUnit {
    static InitAll() {
        this.s3d = Laya.stage.addChildAt(new Laya.Scene3D(), 0);
        this.gameManager = new _manager_GameManager__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.cameraManager = new _manager_CameraManager__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
}


/***/ }),

/***/ "./src/script/common/ResDefine.ts":
/*!****************************************!*\
  !*** ./src/script/common/ResDefine.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResDefine; });
class ResDefine {
    static FixPath(filePath) {
        return "res/export/Conventional/" + filePath + ".lh";
    }
}
ResDefine.camera_path = "main_camera";
ResDefine.light_path = "default_light";
ResDefine.floor_path = "follow_floor";
ResDefine.player_path = "player";


/***/ }),

/***/ "./src/script/config/AudioConfig.ts":
/*!******************************************!*\
  !*** ./src/script/config/AudioConfig.ts ***!
  \******************************************/
/*! exports provided: AudioConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioConfig", function() { return AudioConfig; });
var AudioConfig;
(function (AudioConfig) {
    class config {
    }
    AudioConfig.config = config;
    AudioConfig.path = "res/config/AudioConfig.json";
})(AudioConfig || (AudioConfig = {}));


/***/ }),

/***/ "./src/script/config/LevelConfig.ts":
/*!******************************************!*\
  !*** ./src/script/config/LevelConfig.ts ***!
  \******************************************/
/*! exports provided: LevelConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelConfig", function() { return LevelConfig; });
var LevelConfig;
(function (LevelConfig) {
    class config {
    }
    LevelConfig.config = config;
    LevelConfig.path = "res/config/LevelConfig.json";
})(LevelConfig || (LevelConfig = {}));


/***/ }),

/***/ "./src/script/config/PropConfig.ts":
/*!*****************************************!*\
  !*** ./src/script/config/PropConfig.ts ***!
  \*****************************************/
/*! exports provided: PropConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropConfig", function() { return PropConfig; });
var PropConfig;
(function (PropConfig) {
    class config {
    }
    PropConfig.config = config;
    PropConfig.path = "res/config/PropConfig.json";
})(PropConfig || (PropConfig = {}));


/***/ }),

/***/ "./src/script/manager/AudioManager.ts":
/*!********************************************!*\
  !*** ./src/script/manager/AudioManager.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AudioManager; });
/* harmony import */ var _config_AudioConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/AudioConfig */ "./src/script/config/AudioConfig.ts");

class AudioManager {
    constructor() {
        Laya.SoundManager.autoStopMusic = true;
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new AudioManager();
        }
        return this._instance;
    }
    PlayByPath(audioPath) {
        Laya.SoundManager.playMusic(audioPath);
    }
    PlayById(audioId) {
        let audioConfig = _config_AudioConfig__WEBPACK_IMPORTED_MODULE_0__["AudioConfig"].data[audioId];
        if (audioConfig == null) {
            console.error("不存在的音效id");
            return;
        }
        if (audioConfig.audio_type == 1) {
            // 音效
            Laya.SoundManager.playSound("res/audio/" + audioConfig.audio_path);
        }
        else {
            this.PlayByPath("res/audio/" + audioConfig.audio_path);
        }
    }
    StopById(audioId) {
    }
    StopAll() {
        Laya.SoundManager.stopAll();
    }
    Pause() {
    }
    Resume() {
    }
}


/***/ }),

/***/ "./src/script/manager/CameraManager.ts":
/*!*********************************************!*\
  !*** ./src/script/manager/CameraManager.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CameraManager; });
/* harmony import */ var _common_ResDefine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/ResDefine */ "./src/script/common/ResDefine.ts");
/* harmony import */ var _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/GlobalUnit */ "./src/script/common/GlobalUnit.ts");
/* harmony import */ var _LTGame_LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/LTUtils/LTUtils */ "./src/LTGame/LTUtils/LTUtils.ts");
/* harmony import */ var _LTGame_LTUtils_ColorEx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTGame/LTUtils/ColorEx */ "./src/LTGame/LTUtils/ColorEx.ts");
/* harmony import */ var _common_GameConst__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/GameConst */ "./src/script/common/GameConst.ts");





class CameraManager {
    Preload(urls) {
        urls.push(_common_ResDefine__WEBPACK_IMPORTED_MODULE_0__["default"].FixPath(_common_ResDefine__WEBPACK_IMPORTED_MODULE_0__["default"].camera_path));
    }
    CreateCamera() {
        if (this._cameraObj == null) {
            var loadObj = _LTGame_LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_2__["LTUtils"].GetRes(_common_ResDefine__WEBPACK_IMPORTED_MODULE_0__["default"].FixPath(_common_ResDefine__WEBPACK_IMPORTED_MODULE_0__["default"].camera_path), true);
            this._cameraObj = _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_1__["default"].s3d.addChild(loadObj);
            this._camera = this._cameraObj.getChildAt(0);
            this._camera.clearFlag = Laya.Camera.CLEARFLAG_SOLIDCOLOR;
            this._camera.clearColor = _LTGame_LTUtils_ColorEx__WEBPACK_IMPORTED_MODULE_3__["default"].ToV4(_LTGame_LTUtils_ColorEx__WEBPACK_IMPORTED_MODULE_3__["default"].HexToColor("242424"));
            this._camera.farPlane = 200;
        }
        else {
            _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_1__["default"].s3d.addChild(this._cameraObj);
        }
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_1__["default"].s3d.fogColor = _LTGame_LTUtils_ColorEx__WEBPACK_IMPORTED_MODULE_3__["default"].ToV3(_LTGame_LTUtils_ColorEx__WEBPACK_IMPORTED_MODULE_3__["default"].HexToColor("242424"));
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_1__["default"].s3d.fogStart = 150;
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_1__["default"].s3d.fogRange = 50;
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_1__["default"].s3d.enableFog = true;
        this._cameraObj.transform.localPositionZ = 0;
    }
    ClearCamera() {
        this._cameraObj.removeSelf();
    }
    LateUpdate(dt) {
        this._cameraObj.transform.localPositionZ += dt * _common_GameConst__WEBPACK_IMPORTED_MODULE_4__["default"].moveSpeedZ;
    }
}


/***/ }),

/***/ "./src/script/manager/GameManager.ts":
/*!*******************************************!*\
  !*** ./src/script/manager/GameManager.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameManager; });
/* harmony import */ var _common_ResDefine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/ResDefine */ "./src/script/common/ResDefine.ts");
/* harmony import */ var _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/GlobalUnit */ "./src/script/common/GlobalUnit.ts");
/* harmony import */ var _LTGame_LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/LTUtils/LTUtils */ "./src/LTGame/LTUtils/LTUtils.ts");
/* harmony import */ var _RoadManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RoadManager */ "./src/script/manager/RoadManager.ts");
/* harmony import */ var _PlayerManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlayerManager */ "./src/script/manager/PlayerManager.ts");
/* harmony import */ var _ui_UI_FightMediator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/UI_FightMediator */ "./src/script/ui/UI_FightMediator.ts");






class GameManager {
    constructor() {
        this.roadManager = new _RoadManager__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.playerManager = new _PlayerManager__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this._isRunning = false;
    }
    get isRunning() {
        return this._isRunning;
    }
    Preload(urls) {
        urls.push(_common_ResDefine__WEBPACK_IMPORTED_MODULE_0__["default"].FixPath(_common_ResDefine__WEBPACK_IMPORTED_MODULE_0__["default"].light_path));
        this.roadManager.Preload(urls);
        this.playerManager.Preload(urls);
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_1__["default"].cameraManager.Preload(urls);
    }
    CreateGame() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._lightObj == null) {
                this._lightObj = _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_1__["default"].s3d.addChild(_LTGame_LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_2__["LTUtils"].GetRes(_common_ResDefine__WEBPACK_IMPORTED_MODULE_0__["default"].FixPath(_common_ResDefine__WEBPACK_IMPORTED_MODULE_0__["default"].light_path), true));
            }
            else {
                _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_1__["default"].s3d.addChild(this._lightObj);
            }
            this.playerManager.CreatePlayer();
            yield this.roadManager.CreateRoad();
            _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_1__["default"].cameraManager.CreateCamera();
        });
    }
    ClearGame() {
        // 移除相机
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_1__["default"].cameraManager.ClearCamera();
        // 移除光照
        this._lightObj.removeSelf();
        // 销毁场景
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_1__["default"].s3d.destroyChildren();
    }
    StartGame() {
        this.roadManager.StartGame();
        this._isRunning = true;
    }
    StopGame() {
        this.roadManager.StopGame();
        this._isRunning = false;
        _ui_UI_FightMediator__WEBPACK_IMPORTED_MODULE_5__["UI_FightMediator"].instance.Hide();
    }
    LogicUpdate(dt) {
        if (!this._isRunning) {
            return;
        }
        this.roadManager.LogicUpdate(dt);
        this.playerManager.LogicUpdate(dt);
    }
    LateUpdate(dt) {
        if (!this._isRunning) {
            return;
        }
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_1__["default"].cameraManager.LateUpdate(dt);
    }
}


/***/ }),

/***/ "./src/script/manager/PlayerManager.ts":
/*!*********************************************!*\
  !*** ./src/script/manager/PlayerManager.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerManager; });
/* harmony import */ var _player_ModelPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../player/ModelPlayer */ "./src/script/player/ModelPlayer.ts");
/* harmony import */ var _common_ResDefine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/ResDefine */ "./src/script/common/ResDefine.ts");
/* harmony import */ var _LTGame_LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/LTUtils/LTUtils */ "./src/LTGame/LTUtils/LTUtils.ts");
/* harmony import */ var _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/GlobalUnit */ "./src/script/common/GlobalUnit.ts");




class PlayerManager {
    Preload(urls) {
        urls.push(_common_ResDefine__WEBPACK_IMPORTED_MODULE_1__["default"].FixPath(_common_ResDefine__WEBPACK_IMPORTED_MODULE_1__["default"].player_path));
    }
    CreatePlayer() {
        let getPlayer = _LTGame_LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_2__["LTUtils"].GetRes(_common_ResDefine__WEBPACK_IMPORTED_MODULE_1__["default"].FixPath(_common_ResDefine__WEBPACK_IMPORTED_MODULE_1__["default"].player_path));
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_3__["default"].s3d.addChild(getPlayer);
        this.mainPlayer = new _player_ModelPlayer__WEBPACK_IMPORTED_MODULE_0__["default"](getPlayer);
    }
    LogicUpdate(dt) {
        this.mainPlayer.LogicUpdate(dt);
    }
    ClearPlayer() {
    }
}


/***/ }),

/***/ "./src/script/manager/RoadManager.ts":
/*!*******************************************!*\
  !*** ./src/script/manager/RoadManager.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoadManager; });
/* harmony import */ var _common_ResDefine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/ResDefine */ "./src/script/common/ResDefine.ts");
/* harmony import */ var _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/GlobalUnit */ "./src/script/common/GlobalUnit.ts");
/* harmony import */ var _LTGame_LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/LTUtils/LTUtils */ "./src/LTGame/LTUtils/LTUtils.ts");
/* harmony import */ var _common_GameConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/GameConst */ "./src/script/common/GameConst.ts");
/* harmony import */ var _config_PropConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/PropConfig */ "./src/script/config/PropConfig.ts");
/* harmony import */ var _config_LevelConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/LevelConfig */ "./src/script/config/LevelConfig.ts");
/* harmony import */ var _common_GameData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/GameData */ "./src/script/common/GameData.ts");
/* harmony import */ var _AudioManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AudioManager */ "./src/script/manager/AudioManager.ts");
/* harmony import */ var _LTGame_Async_Awaiters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../LTGame/Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");
/* harmony import */ var _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../LTGame/Res/LTRes */ "./src/LTGame/Res/LTRes.ts");










class RoadManager {
    Preload(urls) {
        urls.push(_common_ResDefine__WEBPACK_IMPORTED_MODULE_0__["default"].FixPath(_common_ResDefine__WEBPACK_IMPORTED_MODULE_0__["default"].floor_path));
        let propList = _config_PropConfig__WEBPACK_IMPORTED_MODULE_4__["PropConfig"].dataList;
        for (let propConfig of propList) {
            urls.push(_common_ResDefine__WEBPACK_IMPORTED_MODULE_0__["default"].FixPath(propConfig.model_path));
        }
    }
    _GetDataConfigPath() {
        return "res/level/" + this._levelConfig.level_config;
    }
    CreateRoad() {
        return __awaiter(this, void 0, void 0, function* () {
            this._levelConfig = _config_LevelConfig__WEBPACK_IMPORTED_MODULE_5__["LevelConfig"].data[_common_GameData__WEBPACK_IMPORTED_MODULE_6__["default"].instance.levelId];
            if (this._levelConfig == null) {
                console.error("关卡不存在", _common_GameData__WEBPACK_IMPORTED_MODULE_6__["default"].instance.levelId, "初始化为第一关");
                this._levelConfig = _config_LevelConfig__WEBPACK_IMPORTED_MODULE_5__["LevelConfig"].dataList[0];
            }
            yield _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_9__["default"].Load2dAsync(this._GetDataConfigPath());
            this._followFloor = _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_1__["default"].s3d.addChild(_LTGame_LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_2__["LTUtils"].GetRes(_common_ResDefine__WEBPACK_IMPORTED_MODULE_0__["default"].FixPath(_common_ResDefine__WEBPACK_IMPORTED_MODULE_0__["default"].floor_path)));
            this._propContainer = new Laya.Sprite3D();
            _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_1__["default"].s3d.addChild(this._propContainer);
            this._followFloor.transform.localPositionZ = 0;
            let loadJson = Laya.loader.getRes(this._GetDataConfigPath());
            this.totalDistance = loadJson['length'] * _common_GameConst__WEBPACK_IMPORTED_MODULE_3__["default"].genRoadSpeed;
            let timeArray = loadJson['time'];
            let dataArray = loadJson['data'];
            for (let i = 0; i < timeArray.length; ++i) {
                let distance = timeArray[i] * _common_GameConst__WEBPACK_IMPORTED_MODULE_3__["default"].genRoadSpeed;
                let readData = dataArray[i];
                for (let j = 0; j < readData.length; ++j) {
                    let genId = readData[j];
                    let propConfig = _config_PropConfig__WEBPACK_IMPORTED_MODULE_4__["PropConfig"].data[genId];
                    if (propConfig == null) {
                        continue;
                    }
                    let addProp = this._propContainer.addChild(_LTGame_LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_2__["LTUtils"].GetRes(_common_ResDefine__WEBPACK_IMPORTED_MODULE_0__["default"].FixPath(propConfig.model_path)));
                    addProp.transform.localPositionZ = distance;
                    addProp.transform.localPositionX = (2 - j) * _common_GameConst__WEBPACK_IMPORTED_MODULE_3__["default"].halfRoadWidth / 2;
                    addProp.name = "" + genId;
                }
            }
            yield _LTGame_Async_Awaiters__WEBPACK_IMPORTED_MODULE_8__["default"].NextFrame();
            let bgm = loadJson['bgm'];
            this._cacheBgm = "res/bgm/" + bgm + ".mp3";
            yield _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_9__["default"].Load2dAsync(this._cacheBgm);
            // 销毁
            Laya.loader.clearRes(this._GetDataConfigPath());
        });
    }
    StartGame() {
        _AudioManager__WEBPACK_IMPORTED_MODULE_7__["default"].instance.PlayByPath(this._cacheBgm);
    }
    ClearRoad() {
    }
    LogicUpdate(dt) {
        this._followFloor.transform.localPositionZ += dt * _common_GameConst__WEBPACK_IMPORTED_MODULE_3__["default"].moveSpeedZ;
    }
    StopGame() {
        _AudioManager__WEBPACK_IMPORTED_MODULE_7__["default"].instance.StopAll();
    }
}


/***/ }),

/***/ "./src/script/player/ModelPlayer.ts":
/*!******************************************!*\
  !*** ./src/script/player/ModelPlayer.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModelPlayer; });
/* harmony import */ var _common_GameConst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/GameConst */ "./src/script/common/GameConst.ts");
/* harmony import */ var _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../LTGame/LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/GlobalUnit */ "./src/script/common/GlobalUnit.ts");
/* harmony import */ var _manager_AudioManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../manager/AudioManager */ "./src/script/manager/AudioManager.ts");
/* harmony import */ var _config_PropConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/PropConfig */ "./src/script/config/PropConfig.ts");
/* harmony import */ var _ui_UI_FightMediator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/UI_FightMediator */ "./src/script/ui/UI_FightMediator.ts");
/* harmony import */ var _ui_UI_DeadMediator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/UI_DeadMediator */ "./src/script/ui/UI_DeadMediator.ts");
/* harmony import */ var _ui_UI_PassMediator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/UI_PassMediator */ "./src/script/ui/UI_PassMediator.ts");








class ModelPlayer {
    constructor(obj) {
        this.posX = 0;
        this.posZ = 0;
        this._lastPosX = 0;
        this._lastPosZ = 0;
        this._viewObj = obj;
        this.comboCount = 0;
        this._checkFromPos = new Laya.Vector3(0, 0.5, 0);
        this._checkToPos = new Laya.Vector3(0, 0.5, 0);
        this._hitResults = [];
        let colliderObj = obj.getChildAt(1);
        let colliderCmp = colliderObj.getComponent(Laya.PhysicsCollider);
        this._checkShape = colliderCmp.colliderShape;
        colliderObj.active = false;
    }
    MoveX(xP) {
        if (!_common_GlobalUnit__WEBPACK_IMPORTED_MODULE_2__["default"].gameManager.isRunning)
            return;
        this.posX = _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_1__["default"].Clamp(this.posX + xP * _common_GameConst__WEBPACK_IMPORTED_MODULE_0__["default"].moveSpeedX, -_common_GameConst__WEBPACK_IMPORTED_MODULE_0__["default"].halfRoadWidth, _common_GameConst__WEBPACK_IMPORTED_MODULE_0__["default"].halfRoadWidth);
        this._viewObj.transform.localPositionX = this.posX;
    }
    LogicUpdate(dt) {
        this.posZ += dt * _common_GameConst__WEBPACK_IMPORTED_MODULE_0__["default"].moveSpeedZ;
        this._viewObj.transform.localPositionZ = this.posZ;
        // 检查碰撞
        this._checkFromPos.x = this._lastPosX;
        this._checkFromPos.z = this._lastPosZ;
        this._checkToPos.x = this.posX;
        this._checkToPos.z = this.posZ;
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_2__["default"].s3d.physicsSimulation.shapeCastAll(this._checkShape, this._checkFromPos, this._checkToPos, this._hitResults);
        for (let i = 0; i < this._hitResults.length; ++i) {
            let hitResult = this._hitResults[i];
            if (!hitResult.succeeded) {
                continue;
            }
            let ownerName = hitResult.collider.owner.name;
            switch (ownerName) {
                case "1":
                    // 销毁
                    hitResult.collider.owner.destroy();
                    let propConfig = _config_PropConfig__WEBPACK_IMPORTED_MODULE_4__["PropConfig"].data[1];
                    _manager_AudioManager__WEBPACK_IMPORTED_MODULE_3__["default"].instance.PlayById(propConfig.audio_id);
                    this.comboCount++;
                    _ui_UI_FightMediator__WEBPACK_IMPORTED_MODULE_5__["UI_FightMediator"].instance.UpdateComboCount(this.comboCount);
                    break;
                case "2":
                    // 游戏结束
                    _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_2__["default"].gameManager.StopGame();
                    _ui_UI_DeadMediator__WEBPACK_IMPORTED_MODULE_6__["UI_DeadMediator"].instance.Show();
                    break;
                default:
                    console.error("暂未处理的道具类型", ownerName);
                    break;
            }
        }
        this._lastPosZ = this.posZ;
        this._lastPosX = this.posX;
        if (this.posZ >= _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_2__["default"].gameManager.roadManager.totalDistance) {
            _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_2__["default"].gameManager.StopGame();
            _ui_UI_PassMediator__WEBPACK_IMPORTED_MODULE_7__["UI_PassMediator"].instance.Show();
        }
    }
}


/***/ }),

/***/ "./src/script/scene/ESceneType.ts":
/*!****************************************!*\
  !*** ./src/script/scene/ESceneType.ts ***!
  \****************************************/
/*! exports provided: ESceneType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESceneType", function() { return ESceneType; });
var ESceneType;
(function (ESceneType) {
    ESceneType[ESceneType["None"] = 0] = "None";
    ESceneType[ESceneType["Splash"] = 1] = "Splash";
    ESceneType[ESceneType["Main"] = 2] = "Main";
})(ESceneType || (ESceneType = {}));


/***/ }),

/***/ "./src/script/scene/MainScene.ts":
/*!***************************************!*\
  !*** ./src/script/scene/MainScene.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainScene; });
/* harmony import */ var _LTGame_Fsm_BaseState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/Fsm/BaseState */ "./src/LTGame/Fsm/BaseState.ts");
/* harmony import */ var _ESceneType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ESceneType */ "./src/script/scene/ESceneType.ts");
/* harmony import */ var _ui_UI_MainMediator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/UI_MainMediator */ "./src/script/ui/UI_MainMediator.ts");
/* harmony import */ var _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/GlobalUnit */ "./src/script/common/GlobalUnit.ts");




class MainScene extends _LTGame_Fsm_BaseState__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(_ESceneType__WEBPACK_IMPORTED_MODULE_1__["ESceneType"].Main);
    }
    _DoEnter() {
        _ui_UI_MainMediator__WEBPACK_IMPORTED_MODULE_2__["UI_MainMediator"].instance.Show();
    }
    _DoRunning() {
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_3__["default"].gameManager.LogicUpdate(this.deltaTime);
    }
    _DoLateUpdate() {
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_3__["default"].gameManager.LateUpdate(this.deltaTime);
    }
}


/***/ }),

/***/ "./src/script/scene/SplashScene.ts":
/*!*****************************************!*\
  !*** ./src/script/scene/SplashScene.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SplashScene; });
/* harmony import */ var _ui_Load_UI_splash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/Load/UI_splash */ "./src/ui/Load/UI_splash.ts");
/* harmony import */ var _LTGame_Start_LTSplashScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../LTGame/Start/LTSplashScene */ "./src/LTGame/Start/LTSplashScene.ts");
/* harmony import */ var _ui_Load_LoadBinder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/Load/LoadBinder */ "./src/ui/Load/LoadBinder.ts");
/* harmony import */ var _ui_Main_MainBinder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/Main/MainBinder */ "./src/ui/Main/MainBinder.ts");
/* harmony import */ var _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LTGame/Config/ConfigManager */ "./src/LTGame/Config/ConfigManager.ts");
/* harmony import */ var _config_LevelConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/LevelConfig */ "./src/script/config/LevelConfig.ts");
/* harmony import */ var _ESceneType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ESceneType */ "./src/script/scene/ESceneType.ts");
/* harmony import */ var _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/GlobalUnit */ "./src/script/common/GlobalUnit.ts");
/* harmony import */ var _config_AudioConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/AudioConfig */ "./src/script/config/AudioConfig.ts");
/* harmony import */ var _config_PropConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/PropConfig */ "./src/script/config/PropConfig.ts");










class SplashScene extends _LTGame_Start_LTSplashScene__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super();
        this._splashUIClass = _ui_Load_UI_splash__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
    _OnBindUI() {
        _ui_Load_LoadBinder__WEBPACK_IMPORTED_MODULE_2__["default"].bindAll();
        _ui_Main_MainBinder__WEBPACK_IMPORTED_MODULE_3__["default"].bindAll();
    }
    _OnSetLoadConfig() {
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_4__["ConfigManager"].AddConfig(_config_LevelConfig__WEBPACK_IMPORTED_MODULE_5__["LevelConfig"]);
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_4__["ConfigManager"].AddConfig(_config_AudioConfig__WEBPACK_IMPORTED_MODULE_8__["AudioConfig"]);
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_4__["ConfigManager"].AddConfig(_config_PropConfig__WEBPACK_IMPORTED_MODULE_9__["PropConfig"]);
    }
    _OnGameResPrepared(urls) {
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_7__["default"].InitAll();
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_7__["default"].gameManager.Preload(urls);
    }
    _OnGameResLoaded() {
        this.nextState = _ESceneType__WEBPACK_IMPORTED_MODULE_6__["ESceneType"].Main;
    }
}


/***/ }),

/***/ "./src/script/ui/UI_DeadMediator.ts":
/*!******************************************!*\
  !*** ./src/script/ui/UI_DeadMediator.ts ***!
  \******************************************/
/*! exports provided: UI_DeadMediator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_DeadMediator", function() { return UI_DeadMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _ui_Main_UI_Dead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/Main/UI_Dead */ "./src/ui/Main/UI_Dead.ts");
/* harmony import */ var _LTGame_UIExt_FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/FGuiEx */ "./src/LTGame/UIExt/FGui/FGuiEx.ts");
/* harmony import */ var _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/GlobalUnit */ "./src/script/common/GlobalUnit.ts");
/* harmony import */ var _UI_MainMediator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI_MainMediator */ "./src/script/ui/UI_MainMediator.ts");





class UI_DeadMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_DeadMediator();
        }
        return this._instance;
    }
    Show() {
        this._ui = _LTGame_UIExt_FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_2__["default"].AddUI(_ui_Main_UI_Dead__WEBPACK_IMPORTED_MODULE_1__["default"]);
        this._OnShow();
    }
    _OnShow() {
        super._OnShow();
        this.ui.m_btn_continue.onClick(this, this._OnClickContinue);
    }
    _OnClickContinue() {
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_3__["default"].gameManager.ClearGame();
        this.Hide();
        _UI_MainMediator__WEBPACK_IMPORTED_MODULE_4__["UI_MainMediator"].instance.Show();
    }
}


/***/ }),

/***/ "./src/script/ui/UI_FightMediator.ts":
/*!*******************************************!*\
  !*** ./src/script/ui/UI_FightMediator.ts ***!
  \*******************************************/
/*! exports provided: UI_FightMediator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_FightMediator", function() { return UI_FightMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _ui_Main_UI_Fight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/Main/UI_Fight */ "./src/ui/Main/UI_Fight.ts");
/* harmony import */ var _LTGame_UIExt_FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/FGuiEx */ "./src/LTGame/UIExt/FGui/FGuiEx.ts");
/* harmony import */ var _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/GlobalUnit */ "./src/script/common/GlobalUnit.ts");




class UI_FightMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_FightMediator();
        }
        return this._instance;
    }
    Show() {
        this._ui = _LTGame_UIExt_FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_2__["default"].AddUI(_ui_Main_UI_Fight__WEBPACK_IMPORTED_MODULE_1__["default"]);
        this._OnShow();
    }
    _OnShow() {
        super._OnShow();
        this.ui.m_bg.on(Laya.Event.MOUSE_DOWN, this, this._OnMouseDown);
        this.ui.m_bg.on(Laya.Event.MOUSE_MOVE, this, this._OnMouseMove);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this._OnMouseUp);
        this._lastPos = new Laya.Vector2();
        this._isPressed = false;
    }
    _OnMouseDown(event) {
        if (this._isPressed)
            return;
        this._isPressed = true;
        this._cacheTouchId = event.touchId;
        this._lastPos.x = event.stageX;
        this._lastPos.y = event.stageY;
    }
    _OnMouseMove(event) {
        if (!this._isPressed)
            return;
        if (event.touchId != this._cacheTouchId)
            return;
        let xOffset = event.stageX - this._lastPos.x;
        this._lastPos.x = event.stageX;
        let xProgress = -xOffset / Laya.stage.width;
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_3__["default"].gameManager.playerManager.mainPlayer.MoveX(xProgress);
    }
    _OnMouseUp(event) {
        if (!this._isPressed)
            return;
        if (event.touchId != this._cacheTouchId)
            return;
        this._isPressed = false;
    }
    UpdateComboCount(comboCount) {
        this.ui.m_text_combo.text = "combo:" + comboCount;
    }
}


/***/ }),

/***/ "./src/script/ui/UI_LoadMediator.ts":
/*!******************************************!*\
  !*** ./src/script/ui/UI_LoadMediator.ts ***!
  \******************************************/
/*! exports provided: UI_LoadMediator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_LoadMediator", function() { return UI_LoadMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _ui_Main_UI_Load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/Main/UI_Load */ "./src/ui/Main/UI_Load.ts");
/* harmony import */ var _LTGame_UIExt_FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/FGuiEx */ "./src/LTGame/UIExt/FGui/FGuiEx.ts");



class UI_LoadMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_LoadMediator();
        }
        return this._instance;
    }
    Show() {
        this._ui = _LTGame_UIExt_FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_2__["default"].AddUI(_ui_Main_UI_Load__WEBPACK_IMPORTED_MODULE_1__["default"]);
        this._OnShow();
    }
    _OnShow() {
        super._OnShow();
    }
}


/***/ }),

/***/ "./src/script/ui/UI_MainMediator.ts":
/*!******************************************!*\
  !*** ./src/script/ui/UI_MainMediator.ts ***!
  \******************************************/
/*! exports provided: UI_MainMediator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_MainMediator", function() { return UI_MainMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _ui_Main_UI_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/Main/UI_Main */ "./src/ui/Main/UI_Main.ts");
/* harmony import */ var _LTGame_UIExt_FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/FGuiEx */ "./src/LTGame/UIExt/FGui/FGuiEx.ts");
/* harmony import */ var _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/GlobalUnit */ "./src/script/common/GlobalUnit.ts");
/* harmony import */ var _UI_FightMediator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI_FightMediator */ "./src/script/ui/UI_FightMediator.ts");
/* harmony import */ var _UI_LoadMediator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI_LoadMediator */ "./src/script/ui/UI_LoadMediator.ts");
/* harmony import */ var _LTGame_Async_Awaiters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../LTGame/Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");







class UI_MainMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_MainMediator();
        }
        return this._instance;
    }
    Show() {
        this._ui = _LTGame_UIExt_FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_2__["default"].AddUI(_ui_Main_UI_Main__WEBPACK_IMPORTED_MODULE_1__["default"]);
        this._OnShow();
    }
    _OnShow() {
        super._OnShow();
        this.ui.m_btn_start.onClick(this, this._OnClickStart);
    }
    _OnClickStart() {
        return __awaiter(this, void 0, void 0, function* () {
            this.Hide();
            _UI_LoadMediator__WEBPACK_IMPORTED_MODULE_5__["UI_LoadMediator"].instance.Show();
            yield _LTGame_Async_Awaiters__WEBPACK_IMPORTED_MODULE_6__["default"].NextFrame();
            yield _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_3__["default"].gameManager.CreateGame();
            yield _LTGame_Async_Awaiters__WEBPACK_IMPORTED_MODULE_6__["default"].NextFrame();
            _UI_FightMediator__WEBPACK_IMPORTED_MODULE_4__["UI_FightMediator"].instance.Show();
            _UI_LoadMediator__WEBPACK_IMPORTED_MODULE_5__["UI_LoadMediator"].instance.Hide();
            _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_3__["default"].gameManager.StartGame();
        });
    }
}


/***/ }),

/***/ "./src/script/ui/UI_PassMediator.ts":
/*!******************************************!*\
  !*** ./src/script/ui/UI_PassMediator.ts ***!
  \******************************************/
/*! exports provided: UI_PassMediator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_PassMediator", function() { return UI_PassMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _ui_Main_UI_Pass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/Main/UI_Pass */ "./src/ui/Main/UI_Pass.ts");
/* harmony import */ var _LTGame_UIExt_FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/FGuiEx */ "./src/LTGame/UIExt/FGui/FGuiEx.ts");
/* harmony import */ var _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/GlobalUnit */ "./src/script/common/GlobalUnit.ts");
/* harmony import */ var _UI_MainMediator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI_MainMediator */ "./src/script/ui/UI_MainMediator.ts");





class UI_PassMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_PassMediator();
        }
        return this._instance;
    }
    Show() {
        this._ui = _LTGame_UIExt_FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_2__["default"].AddUI(_ui_Main_UI_Pass__WEBPACK_IMPORTED_MODULE_1__["default"]);
        this._OnShow();
    }
    _OnShow() {
        super._OnShow();
        this.ui.m_btn_continue.onClick(this, this._OnClickContinue);
    }
    _OnClickContinue() {
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_3__["default"].gameManager.ClearGame();
        this.Hide();
        _UI_MainMediator__WEBPACK_IMPORTED_MODULE_4__["UI_MainMediator"].instance.Show();
    }
}


/***/ }),

/***/ "./src/ui/Load/LoadBinder.ts":
/*!***********************************!*\
  !*** ./src/ui/Load/LoadBinder.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadBinder; });
/* harmony import */ var _UI_splash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI_splash */ "./src/ui/Load/UI_splash.ts");
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

class LoadBinder {
    static bindAll() {
        fgui.UIObjectFactory.setExtension(_UI_splash__WEBPACK_IMPORTED_MODULE_0__["default"].URL, _UI_splash__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }
}


/***/ }),

/***/ "./src/ui/Load/UI_splash.ts":
/*!**********************************!*\
  !*** ./src/ui/Load/UI_splash.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_splash; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_splash extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("Load", "splash"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
        this.m_progress = (this.getChildAt(1));
    }
}
UI_splash.URL = "ui://n3oedpp6nihr0";


/***/ }),

/***/ "./src/ui/Main/MainBinder.ts":
/*!***********************************!*\
  !*** ./src/ui/Main/MainBinder.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainBinder; });
/* harmony import */ var _UI_Fight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI_Fight */ "./src/ui/Main/UI_Fight.ts");
/* harmony import */ var _UI_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI_Main */ "./src/ui/Main/UI_Main.ts");
/* harmony import */ var _UI_Load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI_Load */ "./src/ui/Main/UI_Load.ts");
/* harmony import */ var _UI_Dead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI_Dead */ "./src/ui/Main/UI_Dead.ts");
/* harmony import */ var _UI_Pass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI_Pass */ "./src/ui/Main/UI_Pass.ts");
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/





class MainBinder {
    static bindAll() {
        fgui.UIObjectFactory.setExtension(_UI_Fight__WEBPACK_IMPORTED_MODULE_0__["default"].URL, _UI_Fight__WEBPACK_IMPORTED_MODULE_0__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_Main__WEBPACK_IMPORTED_MODULE_1__["default"].URL, _UI_Main__WEBPACK_IMPORTED_MODULE_1__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_Load__WEBPACK_IMPORTED_MODULE_2__["default"].URL, _UI_Load__WEBPACK_IMPORTED_MODULE_2__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_Dead__WEBPACK_IMPORTED_MODULE_3__["default"].URL, _UI_Dead__WEBPACK_IMPORTED_MODULE_3__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_Pass__WEBPACK_IMPORTED_MODULE_4__["default"].URL, _UI_Pass__WEBPACK_IMPORTED_MODULE_4__["default"]);
    }
}


/***/ }),

/***/ "./src/ui/Main/UI_Dead.ts":
/*!********************************!*\
  !*** ./src/ui/Main/UI_Dead.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_Dead; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_Dead extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("Main", "Dead"));
    }
    onConstruct() {
        this.m_btn_continue = (this.getChildAt(2));
    }
}
UI_Dead.URL = "ui://kk7g5mmmt3pe6";


/***/ }),

/***/ "./src/ui/Main/UI_Fight.ts":
/*!*********************************!*\
  !*** ./src/ui/Main/UI_Fight.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_Fight; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_Fight extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("Main", "Fight"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
        this.m_text_combo = (this.getChildAt(1));
    }
}
UI_Fight.URL = "ui://kk7g5mmmcc4x4";


/***/ }),

/***/ "./src/ui/Main/UI_Load.ts":
/*!********************************!*\
  !*** ./src/ui/Main/UI_Load.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_Load; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_Load extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("Main", "Load"));
    }
    onConstruct() {
        this.m_text_str = (this.getChildAt(1));
    }
}
UI_Load.URL = "ui://kk7g5mmmk28i5";


/***/ }),

/***/ "./src/ui/Main/UI_Main.ts":
/*!********************************!*\
  !*** ./src/ui/Main/UI_Main.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_Main; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_Main extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("Main", "Main"));
    }
    onConstruct() {
        this.m_title = (this.getChildAt(1));
        this.m_btn_start = (this.getChildAt(2));
    }
}
UI_Main.URL = "ui://kk7g5mmmjhmq1";


/***/ }),

/***/ "./src/ui/Main/UI_Pass.ts":
/*!********************************!*\
  !*** ./src/ui/Main/UI_Pass.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_Pass; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_Pass extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("Main", "Pass"));
    }
    onConstruct() {
        this.m_btn_continue = (this.getChildAt(2));
    }
}
UI_Pass.URL = "ui://kk7g5mmmt3pe7";


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map