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

/***/ "./src/LTG_CommonUI/Data/LTG_Com_AddShortcutData.ts":
/*!**********************************************************!*\
  !*** ./src/LTG_CommonUI/Data/LTG_Com_AddShortcutData.ts ***!
  \**********************************************************/
/*! exports provided: LTG_Com_AddShortcutData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTG_Com_AddShortcutData", function() { return LTG_Com_AddShortcutData; });
/* harmony import */ var _Mediator_LTG_UI_AddShortcutMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mediator/LTG_UI_AddShortcutMediator */ "./src/LTG_CommonUI/Mediator/LTG_UI_AddShortcutMediator.ts");

/**
 * -添加桌面-
 * @param icon_url 可以修改图片(不建议使用),最好通过UI工程修改图片
 */
class LTG_Com_AddShortcutData {
    constructor() {
        this.icon_url = null;
    }
    Send() {
        _Mediator_LTG_UI_AddShortcutMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Show(this);
        return 0;
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Data/LTG_Com_EggNoticeData.ts":
/*!********************************************************!*\
  !*** ./src/LTG_CommonUI/Data/LTG_Com_EggNoticeData.ts ***!
  \********************************************************/
/*! exports provided: LTG_Com_EggNoticeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTG_Com_EggNoticeData", function() { return LTG_Com_EggNoticeData; });
/* harmony import */ var _Mediator_LTG_UI_EggNoticeMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mediator/LTG_UI_EggNoticeMediator */ "./src/LTG_CommonUI/Mediator/LTG_UI_EggNoticeMediator.ts");

class LTG_Com_EggNoticeData {
    Send() {
        _Mediator_LTG_UI_EggNoticeMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Show(this);
        return 0;
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Data/LTG_Com_EggWallData.ts":
/*!******************************************************!*\
  !*** ./src/LTG_CommonUI/Data/LTG_Com_EggWallData.ts ***!
  \******************************************************/
/*! exports provided: LTG_Com_EggWallData, EggWallData, EEggState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTG_Com_EggWallData", function() { return LTG_Com_EggWallData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EggWallData", function() { return EggWallData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EEggState", function() { return EEggState; });
/* harmony import */ var _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/Commom/CommonSaveData */ "./src/LTGame/Commom/CommonSaveData.ts");
/* harmony import */ var _Mediator_LTG_UI_EggWallMediator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Mediator/LTG_UI_EggWallMediator */ "./src/LTG_CommonUI/Mediator/LTG_UI_EggWallMediator.ts");


/**
 * -彩蛋墙-
 */
class LTG_Com_EggWallData {
    constructor() {
        this.eggWallDatas = [];
    }
    static UnlockEgg(id) {
        let index = _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_0__["default"].instance.eggWallIds.indexOf(id);
        if (index > -1) {
            _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_0__["default"].instance.eggWallStates[index] = EEggState.Unlocked;
        }
        else {
            _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_0__["default"].instance.eggWallIds.push(id);
            _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_0__["default"].instance.eggWallStates.push(EEggState.Unlocked);
        }
        _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_0__["default"].SaveToDisk();
    }
    static UpdateEggState(id, state) {
        let index = _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_0__["default"].instance.eggWallIds.indexOf(id);
        if (index > -1) {
            _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_0__["default"].instance.eggWallStates[index] = state;
        }
        else {
            _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_0__["default"].instance.eggWallIds.push(id);
            _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_0__["default"].instance.eggWallStates.push(state);
        }
        _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_0__["default"].SaveToDisk();
    }
    static GetEggState(id) {
        let index = _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_0__["default"].instance.eggWallIds.indexOf(id);
        if (index > -1) {
            return _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_0__["default"].instance.eggWallStates[index];
        }
        else {
            _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_0__["default"].instance.eggWallIds.push(id);
            _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_0__["default"].instance.eggWallStates.push(EEggState.Locked);
            _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_0__["default"].SaveToDisk();
            return EEggState.Locked;
        }
    }
    Send() {
        _Mediator_LTG_UI_EggWallMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.Show(this);
        return 0;
    }
}
class EggWallData {
}
var EEggState;
(function (EEggState) {
    EEggState[EEggState["Locked"] = 0] = "Locked";
    EEggState[EEggState["Unlocked"] = 1] = "Unlocked";
    EEggState[EEggState["CanHint"] = 2] = "CanHint";
})(EEggState || (EEggState = {}));


/***/ }),

/***/ "./src/LTG_CommonUI/Data/LTG_Com_FindGameData.ts":
/*!*******************************************************!*\
  !*** ./src/LTG_CommonUI/Data/LTG_Com_FindGameData.ts ***!
  \*******************************************************/
/*! exports provided: LTG_Com_FindGameData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTG_Com_FindGameData", function() { return LTG_Com_FindGameData; });
/* harmony import */ var _Mediator_LTG_UI_FindGameMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mediator/LTG_UI_FindGameMediator */ "./src/LTG_CommonUI/Mediator/LTG_UI_FindGameMediator.ts");

/**
 * -找回游戏-
 * @param icon_url 可以修改图片(不建议使用),最好通过UI工程修改图片
 */
class LTG_Com_FindGameData {
    constructor() {
        this.icon_url = null;
    }
    Send() {
        _Mediator_LTG_UI_FindGameMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Show(this);
        return 0;
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Data/LTG_Com_LimitSkinData.ts":
/*!********************************************************!*\
  !*** ./src/LTG_CommonUI/Data/LTG_Com_LimitSkinData.ts ***!
  \********************************************************/
/*! exports provided: LTG_Com_LimitSkinData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTG_Com_LimitSkinData", function() { return LTG_Com_LimitSkinData; });
/* harmony import */ var _Mediator_LTG_UI_LimitSkinMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mediator/LTG_UI_LimitSkinMediator */ "./src/LTG_CommonUI/Mediator/LTG_UI_LimitSkinMediator.ts");

/**
 * -限定皮肤-
 */
class LTG_Com_LimitSkinData {
    constructor() {
        this.iconUrl = null;
        this.textUrl = null;
        this.watchCount = 0;
        this.onWatchedAd = null;
    }
    Send() {
        _Mediator_LTG_UI_LimitSkinMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Show(this);
        return 0;
    }
    static UpdateCount(count) {
        if (!_Mediator_LTG_UI_LimitSkinMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.isShow)
            return;
        _Mediator_LTG_UI_LimitSkinMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Refresh(count);
    }
    static Hide() {
        _Mediator_LTG_UI_LimitSkinMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Hide();
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Data/LTG_Com_MyGameData.ts":
/*!*****************************************************!*\
  !*** ./src/LTG_CommonUI/Data/LTG_Com_MyGameData.ts ***!
  \*****************************************************/
/*! exports provided: LTG_Com_MyGameData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTG_Com_MyGameData", function() { return LTG_Com_MyGameData; });
/* harmony import */ var _Mediator_LTG_UI_MyGameMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mediator/LTG_UI_MyGameMediator */ "./src/LTG_CommonUI/Mediator/LTG_UI_MyGameMediator.ts");

/**
 * -我的小程序-
 */
class LTG_Com_MyGameData {
    Send() {
        _Mediator_LTG_UI_MyGameMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Show(this);
        return 0;
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Data/LTG_Com_NoticeData.ts":
/*!*****************************************************!*\
  !*** ./src/LTG_CommonUI/Data/LTG_Com_NoticeData.ts ***!
  \*****************************************************/
/*! exports provided: LTG_Com_NoticeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTG_Com_NoticeData", function() { return LTG_Com_NoticeData; });
/* harmony import */ var _Mediator_LTG_UI_NoticeMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mediator/LTG_UI_NoticeMediator */ "./src/LTG_CommonUI/Mediator/LTG_UI_NoticeMediator.ts");

/**
 * -公告界面-
 * @param content 公告内容,支付富文本
 */
class LTG_Com_NoticeData {
    constructor() {
        this.content = "<font color='#ff0000'>游戏公告</font>七个字";
    }
    Send() {
        _Mediator_LTG_UI_NoticeMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Show(this);
        return 0;
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Data/LTG_Com_RewardCodeData.ts":
/*!*********************************************************!*\
  !*** ./src/LTG_CommonUI/Data/LTG_Com_RewardCodeData.ts ***!
  \*********************************************************/
/*! exports provided: LTG_Com_RewardCodeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTG_Com_RewardCodeData", function() { return LTG_Com_RewardCodeData; });
/* harmony import */ var _Mediator_LTG_UI_RewardCodeMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mediator/LTG_UI_RewardCodeMediator */ "./src/LTG_CommonUI/Mediator/LTG_UI_RewardCodeMediator.ts");

/**
 * -兑换码界面-
 * @param onCodeEntered
 */
class LTG_Com_RewardCodeData {
    Send() {
        _Mediator_LTG_UI_RewardCodeMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Show(this);
        return 0;
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Data/LTG_Com_RollData.ts":
/*!***************************************************!*\
  !*** ./src/LTG_CommonUI/Data/LTG_Com_RollData.ts ***!
  \***************************************************/
/*! exports provided: LTG_Com_RollData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTG_Com_RollData", function() { return LTG_Com_RollData; });
/* harmony import */ var _Mediator_LTG_UI_RollMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mediator/LTG_UI_RollMediator */ "./src/LTG_CommonUI/Mediator/LTG_UI_RollMediator.ts");

class LTG_Com_RollData {
    Send() {
        _Mediator_LTG_UI_RollMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Show(this);
        return 0;
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Data/LTG_Com_SetData.ts":
/*!**************************************************!*\
  !*** ./src/LTG_CommonUI/Data/LTG_Com_SetData.ts ***!
  \**************************************************/
/*! exports provided: LTG_Com_SetData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTG_Com_SetData", function() { return LTG_Com_SetData; });
/* harmony import */ var _Mediator_LTG_UI_SetMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mediator/LTG_UI_SetMediator */ "./src/LTG_CommonUI/Mediator/LTG_UI_SetMediator.ts");

/**
 * -设置界面-
 */
class LTG_Com_SetData {
    Send() {
        _Mediator_LTG_UI_SetMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Show(this);
        return 0;
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Data/LTG_Com_ShareVideoData.ts":
/*!*********************************************************!*\
  !*** ./src/LTG_CommonUI/Data/LTG_Com_ShareVideoData.ts ***!
  \*********************************************************/
/*! exports provided: LTG_Com_ShareVideoData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTG_Com_ShareVideoData", function() { return LTG_Com_ShareVideoData; });
/* harmony import */ var _Mediator_LTG_UI_ShareVideoMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mediator/LTG_UI_ShareVideoMediator */ "./src/LTG_CommonUI/Mediator/LTG_UI_ShareVideoMediator.ts");

/**
 * -分享视频-
 * @param iconPath 图标路径,建议工程内替换
 * @param textPath 文字路径,建议工程内替换
 */
class LTG_Com_ShareVideoData {
    constructor() {
        this.iconPath = null;
        this.textPath = null;
        /**
         * code: int 0 未分享, 1 已分享
         */
        this.onClosed = null;
    }
    Send() {
        _Mediator_LTG_UI_ShareVideoMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Show(this);
        return 0;
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Data/LTG_Com_SignData.ts":
/*!***************************************************!*\
  !*** ./src/LTG_CommonUI/Data/LTG_Com_SignData.ts ***!
  \***************************************************/
/*! exports provided: LTG_Com_SignData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTG_Com_SignData", function() { return LTG_Com_SignData; });
/* harmony import */ var _Mediator_LTG_UI_SignMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mediator/LTG_UI_SignMediator */ "./src/LTG_CommonUI/Mediator/LTG_UI_SignMediator.ts");

/**
 * -签到界面-
 * 签到数据由signconfig控制
 * @param onSign 签到回调
 */
class LTG_Com_SignData {
    Send() {
        _Mediator_LTG_UI_SignMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Show(this);
        return 0;
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Data/LTG_Com_WatchDYData.ts":
/*!******************************************************!*\
  !*** ./src/LTG_CommonUI/Data/LTG_Com_WatchDYData.ts ***!
  \******************************************************/
/*! exports provided: LTG_Com_WatchDYData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTG_Com_WatchDYData", function() { return LTG_Com_WatchDYData; });
/* harmony import */ var _Mediator_LTG_UI_WatchDYMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mediator/LTG_UI_WatchDYMediator */ "./src/LTG_CommonUI/Mediator/LTG_UI_WatchDYMediator.ts");

/**
 * -关注抖音号-
 * @param dyId 抖音号
 * @param iconUrl 素材图标,建议在工程内替换
 */
class LTG_Com_WatchDYData {
    constructor() {
        this.dyId = "wysgs";
        this.iconUrl = null;
    }
    Send() {
        _Mediator_LTG_UI_WatchDYMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Show(this);
        return 0;
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Data/LTG_Com_WatchGuideData.ts":
/*!*********************************************************!*\
  !*** ./src/LTG_CommonUI/Data/LTG_Com_WatchGuideData.ts ***!
  \*********************************************************/
/*! exports provided: LTG_Com_WatchGuideData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTG_Com_WatchGuideData", function() { return LTG_Com_WatchGuideData; });
/* harmony import */ var _Mediator_LTG_UI_WatchGuideMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mediator/LTG_UI_WatchGuideMediator */ "./src/LTG_CommonUI/Mediator/LTG_UI_WatchGuideMediator.ts");

/**
 * -关注抖音指引-
 * @param iconUrl 素材图标,建议在工程内替换
 */
class LTG_Com_WatchGuideData {
    constructor() {
        this.iconUrl = null;
    }
    Send() {
        _Mediator_LTG_UI_WatchGuideMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Show(this);
        return 0;
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Data/LTG_Com_ZhuaWawaData.ts":
/*!*******************************************************!*\
  !*** ./src/LTG_CommonUI/Data/LTG_Com_ZhuaWawaData.ts ***!
  \*******************************************************/
/*! exports provided: LTG_Com_ZhuaWawaData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTG_Com_ZhuaWawaData", function() { return LTG_Com_ZhuaWawaData; });
/* harmony import */ var _Mediator_LTG_UI_ZhuawawaMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mediator/LTG_UI_ZhuawawaMediator */ "./src/LTG_CommonUI/Mediator/LTG_UI_ZhuawawaMediator.ts");

/**
 * -抓娃娃机-
 * @param onTimeout 超时回调
 * @param onPickup 拿出东西
 */
class LTG_Com_ZhuaWawaData {
    Send() {
        _Mediator_LTG_UI_ZhuawawaMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Show(this);
        return 0;
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Mediator/LTG_UI_AddShortcutMediator.ts":
/*!*****************************************************************!*\
  !*** ./src/LTG_CommonUI/Mediator/LTG_UI_AddShortcutMediator.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_AddShortcutMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTCom_LTG_UI_AddShortcut__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/LTCom/LTG_UI_AddShortcut */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_AddShortcut.ts");
/* harmony import */ var _LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");



class LTG_UI_AddShortcutMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new LTG_UI_AddShortcutMediator();
            this._instance._classDefine = _UI_LTCom_LTG_UI_AddShortcut__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        let openData = this._openParam;
        if (openData == null) {
            throw new Error("请调用LTG_Com_AddShortcutData进行界面打开操作");
        }
        if (!_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(openData.icon_url)) {
            this.ui.m_view.m_loader_icon.url = openData.icon_url;
        }
        this.ui.m_view.m_btn_close.onClick(this, this._OnClickClose);
        this.ui.m_view.m_btn_ok.onClick(this, this._OnClickClose);
    }
    _OnClickClose() {
        this.Hide();
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Mediator/LTG_UI_EggNoticeMediator.ts":
/*!***************************************************************!*\
  !*** ./src/LTG_CommonUI/Mediator/LTG_UI_EggNoticeMediator.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_EggNoticeMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTCom_LTG_UI_EggNotice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/LTCom/LTG_UI_EggNotice */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_EggNotice.ts");
/* harmony import */ var _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTGame/UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _Data_LTG_Com_EggWallData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Data/LTG_Com_EggWallData */ "./src/LTG_CommonUI/Data/LTG_Com_EggWallData.ts");
/* harmony import */ var _LTG_UI_EggWallMediator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LTG_UI_EggWallMediator */ "./src/LTG_CommonUI/Mediator/LTG_UI_EggWallMediator.ts");






class LTG_UI_EggNoticeMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new LTG_UI_EggNoticeMediator();
            this._instance._classDefine = _UI_LTCom_LTG_UI_EggNotice__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this._cacheData = this._openParam;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_EggNoticeData进行界面打开操作");
        }
        this.ui.m_view.m_text_notice.text = this._cacheData.eggData.noticeStr;
        this.ui.m_view.m_btn_close.onClick(this, this._OnClickClose);
        this.ui.m_view.m_btn_get_imd.onClick(this, this._OnClickWatchAd);
    }
    _OnClickWatchAd() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.ShowRewardVideoAdAsync();
            if (result) {
                _Data_LTG_Com_EggWallData__WEBPACK_IMPORTED_MODULE_4__["LTG_Com_EggWallData"].UnlockEgg(this._cacheData.eggData.eggId);
                _LTG_UI_EggWallMediator__WEBPACK_IMPORTED_MODULE_5__["default"].instance.ui.m_list_view.refreshVirtualList();
                (_a = this._cacheData.onEggLocked) === null || _a === void 0 ? void 0 : _a.runWith([this._cacheData.eggData]);
                this.Hide();
            }
            else {
                _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].Toast("跳过广告无法获得奖励");
            }
        });
    }
    _OnClickClose() {
        this.Hide();
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Mediator/LTG_UI_EggWallMediator.ts":
/*!*************************************************************!*\
  !*** ./src/LTG_CommonUI/Mediator/LTG_UI_EggWallMediator.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_EggWallMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTCom_LTG_UI_EggWall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/LTCom/LTG_UI_EggWall */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_EggWall.ts");
/* harmony import */ var _Data_LTG_Com_EggWallData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Data/LTG_Com_EggWallData */ "./src/LTG_CommonUI/Data/LTG_Com_EggWallData.ts");
/* harmony import */ var _LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTGame/LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LTGame/Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../LTGame/UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _Data_LTG_Com_EggNoticeData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Data/LTG_Com_EggNoticeData */ "./src/LTG_CommonUI/Data/LTG_Com_EggNoticeData.ts");







class LTG_UI_EggWallMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new LTG_UI_EggWallMediator();
            this._instance._classDefine = _UI_LTCom_LTG_UI_EggWall__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this._cacheData = this._openParam;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_EggWallData进行界面打开操作");
        }
        this._showIndex = -1;
        let data = this._cacheData.eggWallDatas[0];
        if (data.canShow) {
            let lockState = _Data_LTG_Com_EggWallData__WEBPACK_IMPORTED_MODULE_2__["LTG_Com_EggWallData"].GetEggState(data.eggId);
            if (lockState == _Data_LTG_Com_EggWallData__WEBPACK_IMPORTED_MODULE_2__["EEggState"].Unlocked) {
                this._showIndex = 0;
                if (!_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__["default"].IsNullOrEmpty(data.displayIcon)) {
                    this.ui.m_loader_display.url = data.displayIcon;
                }
            }
        }
        if (this._showIndex == -1) {
            this.ui.m_loader_display.visible = false;
            this.ui.m_img_grow.visible = false;
        }
        this.ui.m_list_view.setVirtual();
        this.ui.m_list_view.itemRenderer = Laya.Handler.create(this, this._OnItemRender, null, false);
        this.ui.m_list_view.numItems = this._cacheData.eggWallDatas.length;
        this.ui.m_btn_back.onClick(this, this._OnClickBack);
    }
    _OnItemRender(index, itemUI) {
        let data = this._cacheData.eggWallDatas[index];
        if (!_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__["default"].IsNullOrEmpty(data.iconPath)) {
            itemUI.m_loader_icon.url = data.iconPath;
        }
        if (!_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__["default"].IsNullOrEmpty(data.maskPath)) {
            itemUI.m_loader_mask.url = data.maskPath;
        }
        if (data.canShow) {
            let lockState = _Data_LTG_Com_EggWallData__WEBPACK_IMPORTED_MODULE_2__["LTG_Com_EggWallData"].GetEggState(data.eggId);
            switch (lockState) {
                case _Data_LTG_Com_EggWallData__WEBPACK_IMPORTED_MODULE_2__["EEggState"].Unlocked:
                    itemUI.m_btn_get_tip.visible = false;
                    itemUI.m_btn_show_tip.visible = false;
                    itemUI.m_text_unlocked.visible = true;
                    break;
                case _Data_LTG_Com_EggWallData__WEBPACK_IMPORTED_MODULE_2__["EEggState"].Locked:
                    itemUI.m_btn_get_tip.visible = true;
                    itemUI.m_btn_show_tip.visible = false;
                    itemUI.m_text_unlocked.visible = false;
                    break;
                case _Data_LTG_Com_EggWallData__WEBPACK_IMPORTED_MODULE_2__["EEggState"].CanHint:
                    itemUI.m_btn_get_tip.visible = false;
                    itemUI.m_btn_show_tip.visible = true;
                    itemUI.m_text_unlocked.visible = false;
                    break;
            }
            itemUI.m_img_comming.visible = false;
            itemUI.m_loader_mask.visible = false;
            itemUI.m_loader_icon.visible = true;
        }
        else {
            itemUI.m_btn_get_tip.visible = false;
            itemUI.m_btn_show_tip.visible = false;
            itemUI.m_text_unlocked.visible = false;
            itemUI.m_img_comming.visible = true;
            itemUI.m_loader_mask.visible = true;
            itemUI.m_loader_icon.visible = false;
        }
        itemUI.m_btn_get_tip.onClick(this, this._OnClickUnlockHint, [index]);
        itemUI.m_btn_show_tip.onClick(this, this._OnClickShowHint, [index]);
        itemUI.m_loader_icon.onClick(this, this._OnClickItem, [index]);
    }
    _OnClickItem(index) {
        let data = this._cacheData.eggWallDatas[index];
        if (!data.canShow) {
            _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_5__["default"].Toast("彩蛋尚未解锁");
            return;
        }
        let lockState = _Data_LTG_Com_EggWallData__WEBPACK_IMPORTED_MODULE_2__["LTG_Com_EggWallData"].GetEggState(data.eggId);
        if (lockState != _Data_LTG_Com_EggWallData__WEBPACK_IMPORTED_MODULE_2__["EEggState"].Unlocked) {
            _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_5__["default"].Toast("彩蛋尚未解锁");
            return;
        }
        if (!_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__["default"].IsNullOrEmpty(data.displayIcon)) {
            this.ui.m_loader_display.url = data.displayIcon;
        }
        this.ui.m_loader_display.visible = true;
        this.ui.m_img_grow.visible = true;
    }
    _OnClickShowHint(index) {
        let data = this._cacheData.eggWallDatas[index];
        if (!data.canShow)
            return;
        let lockState = _Data_LTG_Com_EggWallData__WEBPACK_IMPORTED_MODULE_2__["LTG_Com_EggWallData"].GetEggState(data.eggId);
        if (lockState != _Data_LTG_Com_EggWallData__WEBPACK_IMPORTED_MODULE_2__["EEggState"].CanHint)
            return;
        let uiData = new _Data_LTG_Com_EggNoticeData__WEBPACK_IMPORTED_MODULE_6__["LTG_Com_EggNoticeData"]();
        uiData.eggData = data;
        uiData.onEggLocked = this._cacheData.onUnlockEgg;
        uiData.Send();
    }
    _OnClickUnlockHint(index) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = this._cacheData.eggWallDatas[index];
            if (!data.canShow)
                return;
            let lockState = _Data_LTG_Com_EggWallData__WEBPACK_IMPORTED_MODULE_2__["LTG_Com_EggWallData"].GetEggState(data.eggId);
            if (lockState != _Data_LTG_Com_EggWallData__WEBPACK_IMPORTED_MODULE_2__["EEggState"].Locked)
                return;
            let result = yield _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.ShowRewardVideoAdAsync();
            if (result) {
                _Data_LTG_Com_EggWallData__WEBPACK_IMPORTED_MODULE_2__["LTG_Com_EggWallData"].UpdateEggState(data.eggId, _Data_LTG_Com_EggWallData__WEBPACK_IMPORTED_MODULE_2__["EEggState"].CanHint);
                this.ui.m_list_view.refreshVirtualList();
            }
            else {
                _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_5__["default"].Toast("跳过广告无法获得奖励");
            }
        });
    }
    _OnClickBack() {
        this.Hide();
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Mediator/LTG_UI_FindGameMediator.ts":
/*!**************************************************************!*\
  !*** ./src/LTG_CommonUI/Mediator/LTG_UI_FindGameMediator.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_FindGameMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTCom_LTG_UI_FindGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/LTCom/LTG_UI_FindGame */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_FindGame.ts");
/* harmony import */ var _LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");



class LTG_UI_FindGameMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new LTG_UI_FindGameMediator();
            this._instance._classDefine = _UI_LTCom_LTG_UI_FindGame__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        let openData = this._openParam;
        if (openData == null) {
            throw new Error("请调用LTG_Com_FindGameData进行界面打开操作");
        }
        if (!_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(openData.icon_url)) {
            this.ui.m_view.m_loader_icon.url = openData.icon_url;
        }
        this.ui.m_view.m_btn_ok.onClick(this, this._OnClickClose);
        this.ui.m_view.m_btn_close.onClick(this, this._OnClickClose);
    }
    _OnClickClose() {
        this.Hide();
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Mediator/LTG_UI_HideMenuMediator.ts":
/*!**************************************************************!*\
  !*** ./src/LTG_CommonUI/Mediator/LTG_UI_HideMenuMediator.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_HideMenuMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTCom_LTG_UI_HideMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/LTCom/LTG_UI_HideMenu */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_HideMenu.ts");
/* harmony import */ var _Data_LTG_Com_NoticeData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Data/LTG_Com_NoticeData */ "./src/LTG_CommonUI/Data/LTG_Com_NoticeData.ts");
/* harmony import */ var _Data_LTG_Com_AddShortcutData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Data/LTG_Com_AddShortcutData */ "./src/LTG_CommonUI/Data/LTG_Com_AddShortcutData.ts");
/* harmony import */ var _Data_LTG_Com_FindGameData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Data/LTG_Com_FindGameData */ "./src/LTG_CommonUI/Data/LTG_Com_FindGameData.ts");





class LTG_UI_HideMenuMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new LTG_UI_HideMenuMediator();
            this._instance._classDefine = _UI_LTCom_LTG_UI_HideMenu__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_view_menu.visible = false;
        this.ui.m_btn_show.onClick(this, this._OnClickShow);
        this.ui.m_view_menu.m_btn_hide.onClick(this, this._OnClickHide);
        this.ui.m_view_menu.m_btn_notice.onClick(this, this._OnClickNotice);
        this.ui.m_view_menu.m_btn_addshortcut.onClick(this, this._OnClickAddShortcut);
        this.ui.m_view_menu.m_btn_findgame.onClick(this, this._OnClickFindGame);
    }
    _OnClickShow() {
        this.ui.m_anim_show_menu.play();
    }
    _OnClickHide() {
        this.ui.m_anim_hide_menu.play();
    }
    _OnClickNotice() {
        let data = new _Data_LTG_Com_NoticeData__WEBPACK_IMPORTED_MODULE_2__["LTG_Com_NoticeData"]();
        data.Send();
    }
    _OnClickAddShortcut() {
        let data = new _Data_LTG_Com_AddShortcutData__WEBPACK_IMPORTED_MODULE_3__["LTG_Com_AddShortcutData"]();
        data.Send();
    }
    _OnClickFindGame() {
        let data = new _Data_LTG_Com_FindGameData__WEBPACK_IMPORTED_MODULE_4__["LTG_Com_FindGameData"]();
        data.Send();
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Mediator/LTG_UI_LimitSkinMediator.ts":
/*!***************************************************************!*\
  !*** ./src/LTG_CommonUI/Mediator/LTG_UI_LimitSkinMediator.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_LimitSkinMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTCom_LTG_UI_LimitSkin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/LTCom/LTG_UI_LimitSkin */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_LimitSkin.ts");
/* harmony import */ var _LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTGame/Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LTGame/UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../SDK/common/ECheckState */ "./src/SDK/common/ECheckState.ts");







class LTG_UI_LimitSkinMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new LTG_UI_LimitSkinMediator();
            this._instance._classDefine = _UI_LTCom_LTG_UI_LimitSkin__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this._cacheData = this._openParam;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_LimitSkinData进行界面打开操作");
        }
        if (!_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(this._cacheData.iconUrl)) {
            this.ui.m_view.m_loader_icon.url = this._cacheData.iconUrl;
        }
        if (!_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(this._cacheData.textUrl)) {
            this.ui.m_view.m_loader_text.url = this._cacheData.textUrl;
        }
        this.Refresh(this._cacheData.watchCount);
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_5__["default"].instance.checkState == _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_6__["ECheckState"].InCheck) {
            this._isToggleOn = false;
        }
        else {
            this._isToggleOn = true;
        }
        this._UpdateUI();
        this.ui.m_btn_get.onClick(this, this._OnClickBtn);
        this.ui.m_toggle_watchad.onClick(this, this._OnClickToggle);
    }
    _OnClickToggle() {
        this._isToggleOn = !this._isToggleOn;
        this._UpdateUI();
    }
    _UpdateUI() {
        this.ui.m_toggle_watchad.m_state_toggle.selectedIndex = this._isToggleOn ? 1 : 0;
        this.ui.m_btn_get.text = this._isToggleOn ? "获取+1" : "不，谢谢";
    }
    Refresh(count) {
        switch (count) {
            case 0:
                this.ui.m_view_ad_progress.m_toggle_01.m_state_toggle.selectedIndex = 0;
                this.ui.m_view_ad_progress.m_toggle_02.m_state_toggle.selectedIndex = 0;
                this.ui.m_view_ad_progress.m_toggle_03.m_state_toggle.selectedIndex = 0;
                break;
            case 1:
                this.ui.m_view_ad_progress.m_toggle_01.m_state_toggle.selectedIndex = 1;
                this.ui.m_view_ad_progress.m_toggle_02.m_state_toggle.selectedIndex = 0;
                this.ui.m_view_ad_progress.m_toggle_03.m_state_toggle.selectedIndex = 0;
                break;
            case 2:
                this.ui.m_view_ad_progress.m_toggle_01.m_state_toggle.selectedIndex = 1;
                this.ui.m_view_ad_progress.m_toggle_02.m_state_toggle.selectedIndex = 1;
                this.ui.m_view_ad_progress.m_toggle_03.m_state_toggle.selectedIndex = 0;
                break;
            case 3:
            default:
                this.ui.m_view_ad_progress.m_toggle_01.m_state_toggle.selectedIndex = 1;
                this.ui.m_view_ad_progress.m_toggle_02.m_state_toggle.selectedIndex = 1;
                this.ui.m_view_ad_progress.m_toggle_03.m_state_toggle.selectedIndex = 1;
                break;
        }
    }
    _OnClickBtn() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (this._isToggleOn) {
                let result = yield _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.ShowRewardVideoAdAsync();
                if (result) {
                    (_a = this._cacheData.onWatchedAd) === null || _a === void 0 ? void 0 : _a.run();
                }
                else {
                    _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_4__["default"].Toast("跳过广告无法获得奖励");
                }
            }
            else {
                this.Hide();
            }
        });
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Mediator/LTG_UI_MyGameMediator.ts":
/*!************************************************************!*\
  !*** ./src/LTG_CommonUI/Mediator/LTG_UI_MyGameMediator.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_MyGameMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTCom_LTG_UI_MyGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/LTCom/LTG_UI_MyGame */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_MyGame.ts");


class LTG_UI_MyGameMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new LTG_UI_MyGameMediator();
            this._instance._classDefine = _UI_LTCom_LTG_UI_MyGame__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_view.m_btn_back.onClick(this, this._OnClickBack);
    }
    _OnClickBack() {
        this.Hide();
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Mediator/LTG_UI_NoticeMediator.ts":
/*!************************************************************!*\
  !*** ./src/LTG_CommonUI/Mediator/LTG_UI_NoticeMediator.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_NoticeMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTCom_LTG_UI_Notice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/LTCom/LTG_UI_Notice */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Notice.ts");


class LTG_UI_NoticeMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new LTG_UI_NoticeMediator();
            this._instance._classDefine = _UI_LTCom_LTG_UI_Notice__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        let openData = this._openParam;
        if (openData == null) {
            throw new Error("请调用LTG_Com_NoticeData进行界面打开操作");
        }
        this.ui.m_view.m_text_notice.text = openData.content;
        this.ui.m_view.m_btn_close.onClick(this, this._OnClickClose);
    }
    _OnClickClose() {
        this.Hide();
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Mediator/LTG_UI_RewardCodeMediator.ts":
/*!****************************************************************!*\
  !*** ./src/LTG_CommonUI/Mediator/LTG_UI_RewardCodeMediator.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_RewardCodeMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTCom_LTG_UI_RewardCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/LTCom/LTG_UI_RewardCode */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_RewardCode.ts");


class LTG_UI_RewardCodeMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new LTG_UI_RewardCodeMediator();
            this._instance._classDefine = _UI_LTCom_LTG_UI_RewardCode__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this._cacheData = this._openParam;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_RewardCodeData进行界面打开操作");
        }
        this.ui.m_view.m_btn_cancel.onClick(this, this._OnClickCancel);
        this.ui.m_view.m_btn_confirm.onClick(this, this._OnClickOk);
    }
    _OnClickOk() {
        var _a;
        this.Hide();
        (_a = this._cacheData.onCodeEntered) === null || _a === void 0 ? void 0 : _a.runWith([this.ui.m_view.m_text_input.text]);
    }
    _OnClickCancel() {
        this.Hide();
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Mediator/LTG_UI_RollMediator.ts":
/*!**********************************************************!*\
  !*** ./src/LTG_CommonUI/Mediator/LTG_UI_RollMediator.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_RollMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTCom_LTG_UI_Roll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/LTCom/LTG_UI_Roll */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Roll.ts");
/* harmony import */ var _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/Commom/CommonSaveData */ "./src/LTGame/Commom/CommonSaveData.ts");
/* harmony import */ var _script_config_GameConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../script/config/GameConst */ "./src/script/config/GameConst.ts");
/* harmony import */ var _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LTGame/UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../LTGame/LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../LTGame/Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _script_config_RollConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../script/config/RollConfig */ "./src/script/config/RollConfig.ts");








class LTG_UI_RollMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new LTG_UI_RollMediator();
            this._instance._classDefine = _UI_LTCom_LTG_UI_Roll__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        if (_script_config_RollConfig__WEBPACK_IMPORTED_MODULE_7__["RollConfig"].data == null) {
            throw new Error("请先加载配置表RollConfig");
        }
        this._cacheData = this._openParam;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_RollData进行界面打开操作");
        }
        this.ui.m_btn_close.onClick(this, this._OnClickClose);
        for (let i = 1; i <= 6; ++i) {
            let itemName = 'm_item_0' + i.toFixed(0);
            let itemUI = this.ui.m_view.m_view_roll[itemName];
            let data = _script_config_RollConfig__WEBPACK_IMPORTED_MODULE_7__["RollConfig"].data[i];
            itemUI.m_text_name.text = data.show_str;
            itemUI.m_text_name.color = data.text_color;
            itemUI.m_loader_icon.url = data.icon_path;
        }
        this.ui.m_view.m_btn_freeget.onClick(this, this._OnClickFreeRoll);
        this.ui.m_view.m_btn_watchad.onClick(this, this._OnClickWatchAd);
        this._UpdateUI();
        this._rollIndex = [];
        this._rollWeight = [];
        for (let i = 0; i < 6; ++i) {
            this._rollIndex.push(i + 1);
            this._rollWeight.push(_script_config_RollConfig__WEBPACK_IMPORTED_MODULE_7__["RollConfig"].data[i + 1].roll_weight);
        }
    }
    _UpdateUI() {
        if (_LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].instance.freeRollCount > 0) {
            this.ui.m_view.m_btn_freeget.visible = true;
            this.ui.m_view.m_btn_watchad.visible = false;
        }
        else {
            this.ui.m_view.m_btn_freeget.visible = false;
            this.ui.m_view.m_btn_watchad.visible = true;
        }
        let currentRollCount = _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].instance.totalRollCount % _script_config_GameConst__WEBPACK_IMPORTED_MODULE_3__["GameConst"].data.special_roll_count;
        if (_LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].instance.totalRollCount > 0 && currentRollCount == 0) {
            currentRollCount = _script_config_GameConst__WEBPACK_IMPORTED_MODULE_3__["GameConst"].data.special_roll_count;
        }
        let remainCount = _script_config_GameConst__WEBPACK_IMPORTED_MODULE_3__["GameConst"].data.special_roll_count - currentRollCount;
        if (remainCount > 0) {
            this._isSpecialRoll = false;
            this.ui.m_view.m_text_notice.text = remainCount + "次之后必得特殊奖励";
        }
        else {
            this.ui.m_view.m_text_notice.text = " 本次必得特殊奖励";
            this._isSpecialRoll = true;
        }
        let progress100 = (currentRollCount / _script_config_GameConst__WEBPACK_IMPORTED_MODULE_3__["GameConst"].data.special_roll_count) * 100;
        this.ui.m_view.m_progress_supper.value = progress100;
    }
    _DoRoll() {
        _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].instance.totalRollCount++;
        _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_4__["default"].LockScreen();
        this.ui.m_view.m_btn_freeget.visible = false;
        this.ui.m_view.m_btn_watchad.visible = false;
        this._cacheFinalIndex = _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_5__["default"].RandomFromWithWeight(this._rollIndex, this._rollWeight);
        let targetRotate = -(this._cacheFinalIndex - 1) * 60 - 360 * 3;
        Laya.Tween.to(this.ui.m_view.m_view_roll, { rotation: targetRotate }, 2000, Laya.Ease.quadOut, Laya.Handler.create(this, this._OnRollEnd));
    }
    _OnRollEnd() {
        var _a, _b;
        this.ui.m_view.m_view_roll.rotation = this.ui.m_view.m_view_roll.rotation % 360;
        let rewardConfig = _script_config_RollConfig__WEBPACK_IMPORTED_MODULE_7__["RollConfig"].data[this._cacheFinalIndex];
        (_a = this._cacheData.onRolled) === null || _a === void 0 ? void 0 : _a.runWith([rewardConfig]);
        if (this._isSpecialRoll) {
            let specialConfig = _script_config_RollConfig__WEBPACK_IMPORTED_MODULE_7__["RollConfig"].data[7];
            (_b = this._cacheData.onSpecial) === null || _b === void 0 ? void 0 : _b.runWith([specialConfig]);
        }
        this._UpdateUI();
        _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_4__["default"].UnlockScreen();
    }
    _OnClickWatchAd() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.ShowRewardVideoAdAsync();
            if (result) {
                this._DoRoll();
            }
            else {
                _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_4__["default"].Toast("跳过广告无法获得奖励");
            }
        });
    }
    _OnClickFreeRoll() {
        _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].instance.freeRollCount--;
        this._DoRoll();
    }
    _OnClickClose() {
        this.Hide();
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Mediator/LTG_UI_SetMediator.ts":
/*!*********************************************************!*\
  !*** ./src/LTG_CommonUI/Mediator/LTG_UI_SetMediator.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_SetMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTCom_LTG_UI_Set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/LTCom/LTG_UI_Set */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Set.ts");
/* harmony import */ var _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/Commom/CommonSaveData */ "./src/LTGame/Commom/CommonSaveData.ts");
/* harmony import */ var _Data_LTG_Com_RewardCodeData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Data/LTG_Com_RewardCodeData */ "./src/LTG_CommonUI/Data/LTG_Com_RewardCodeData.ts");




class LTG_UI_SetMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new LTG_UI_SetMediator();
            this._instance._classDefine = _UI_LTCom_LTG_UI_Set__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this._cacheData = this._openParam;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_SetData进行界面打开操作");
        }
        this.ui.m_view.m_btn_close.onClick(this, this._OnClickClose);
        this.ui.m_view.m_toggle_music.onClick(this, this._OnClickMusic);
        this.ui.m_view.m_toggle_shake.onClick(this, this._OnClickShake);
        this.ui.m_view.m_btn_code.onClick(this, this._OnClickCode);
        this.ui.m_view.m_toggle_music.m_toggle_state.selectedIndex = _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].instance.isMusicOn ? 1 : 0;
        this.ui.m_view.m_toggle_shake.m_toggle_state.selectedIndex = _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].instance.isShakeOn ? 1 : 0;
    }
    _OnClickCode() {
        this.Hide();
        let data = new _Data_LTG_Com_RewardCodeData__WEBPACK_IMPORTED_MODULE_3__["LTG_Com_RewardCodeData"]();
        data.onCodeEntered = this._cacheData.onCodeEntered;
        data.Send();
    }
    _OnClickMusic() {
        var _a;
        _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].instance.isMusicOn = !_LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].instance.isMusicOn;
        _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].SaveToDisk();
        this.ui.m_view.m_toggle_music.m_toggle_state.selectedIndex = _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].instance.isMusicOn ? 1 : 0;
        (_a = this._cacheData.onMusicToggled) === null || _a === void 0 ? void 0 : _a.run();
    }
    _OnClickShake() {
        var _a;
        _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].instance.isShakeOn = !_LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].instance.isShakeOn;
        _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].SaveToDisk();
        this.ui.m_view.m_toggle_shake.m_toggle_state.selectedIndex = _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_2__["default"].instance.isShakeOn ? 1 : 0;
        (_a = this._cacheData.onShakeToggled) === null || _a === void 0 ? void 0 : _a.run();
    }
    _OnClickClose() {
        this.Hide();
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Mediator/LTG_UI_ShareVideoMediator.ts":
/*!****************************************************************!*\
  !*** ./src/LTG_CommonUI/Mediator/LTG_UI_ShareVideoMediator.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_ShareVideoMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTCom_LTG_UI_ShareVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/LTCom/LTG_UI_ShareVideo */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_ShareVideo.ts");
/* harmony import */ var _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTGame/UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LTGame/LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");





class LTG_UI_ShareVideoMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new LTG_UI_ShareVideoMediator();
            this._instance._classDefine = _UI_LTCom_LTG_UI_ShareVideo__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this._cacheData = this._openParam;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_ShareVideoData进行界面打开操作");
        }
        if (!_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_4__["default"].IsNullOrEmpty(this._cacheData.iconPath)) {
            this.ui.m_view.m_loader_icon.url = this._cacheData.iconPath;
        }
        if (!_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_4__["default"].IsNullOrEmpty(this._cacheData.textPath)) {
            this.ui.m_view.m_loader_text.url = this._cacheData.textPath;
        }
        this.ui.m_view.m_btn_close.onClick(this, this._OnClickClose);
        this.ui.m_view.m_btn_share.onClick(this, this._OnClickShare);
    }
    _OnClickClose() {
        var _a;
        (_a = this._cacheData.onClosed) === null || _a === void 0 ? void 0 : _a.runWith([0]);
        this.Hide();
    }
    _OnClickShare() {
        return __awaiter(this, void 0, void 0, function* () {
            _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.recordManager.ShareVideo(Laya.Handler.create(null, () => {
                var _a;
                (_a = this._cacheData.onClosed) === null || _a === void 0 ? void 0 : _a.runWith([1]);
                this.Hide();
            }), Laya.Handler.create(null, () => {
                _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].Toast("取消分享无法获得奖励");
            }), Laya.Handler.create(null, () => {
                _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].Toast("分享错误");
            }));
        });
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Mediator/LTG_UI_SignMediator.ts":
/*!**********************************************************!*\
  !*** ./src/LTG_CommonUI/Mediator/LTG_UI_SignMediator.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_SignMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTCom_LTG_UI_Sign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/LTCom/LTG_UI_Sign */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Sign.ts");
/* harmony import */ var _script_config_SignConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../script/config/SignConfig */ "./src/script/config/SignConfig.ts");
/* harmony import */ var _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTGame/UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LTGame/Commom/CommonSaveData */ "./src/LTGame/Commom/CommonSaveData.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../SDK/common/ECheckState */ "./src/SDK/common/ECheckState.ts");
/* harmony import */ var _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../LTGame/Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");








class LTG_UI_SignMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new LTG_UI_SignMediator();
            this._instance._classDefine = _UI_LTCom_LTG_UI_Sign__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this._cacheConfig = this._openParam;
        if (this._cacheConfig == null) {
            throw new Error("请调用LTG_Com_SignData进行界面打开操作");
        }
        this.ui.m_btn_close.onClick(this, this._OnClickClose);
        this.ui.m_view.m_day_1.m_text_name.text = _script_config_SignConfig__WEBPACK_IMPORTED_MODULE_2__["SignConfig"].data[1].show_str;
        this.ui.m_view.m_day_2.m_text_name.text = _script_config_SignConfig__WEBPACK_IMPORTED_MODULE_2__["SignConfig"].data[2].show_str;
        this.ui.m_view.m_day_3.m_text_name.text = _script_config_SignConfig__WEBPACK_IMPORTED_MODULE_2__["SignConfig"].data[3].show_str;
        this.ui.m_view.m_day_4.m_text_name.text = _script_config_SignConfig__WEBPACK_IMPORTED_MODULE_2__["SignConfig"].data[4].show_str;
        this.ui.m_view.m_day_5.m_text_name.text = _script_config_SignConfig__WEBPACK_IMPORTED_MODULE_2__["SignConfig"].data[5].show_str;
        this.ui.m_view.m_day_6.m_text_name.text = _script_config_SignConfig__WEBPACK_IMPORTED_MODULE_2__["SignConfig"].data[6].show_str;
        this.ui.m_view.m_day_1.m_loader_icon.url = _script_config_SignConfig__WEBPACK_IMPORTED_MODULE_2__["SignConfig"].data[1].show_icon;
        this.ui.m_view.m_day_2.m_loader_icon.url = _script_config_SignConfig__WEBPACK_IMPORTED_MODULE_2__["SignConfig"].data[2].show_icon;
        this.ui.m_view.m_day_3.m_loader_icon.url = _script_config_SignConfig__WEBPACK_IMPORTED_MODULE_2__["SignConfig"].data[3].show_icon;
        this.ui.m_view.m_day_4.m_loader_icon.url = _script_config_SignConfig__WEBPACK_IMPORTED_MODULE_2__["SignConfig"].data[4].show_icon;
        this.ui.m_view.m_day_5.m_loader_icon.url = _script_config_SignConfig__WEBPACK_IMPORTED_MODULE_2__["SignConfig"].data[5].show_icon;
        this.ui.m_view.m_day_6.m_loader_icon.url = _script_config_SignConfig__WEBPACK_IMPORTED_MODULE_2__["SignConfig"].data[6].show_icon;
        this.ui.m_view.m_day_7.m_loader_icon.url = _script_config_SignConfig__WEBPACK_IMPORTED_MODULE_2__["SignConfig"].data[7].show_icon;
        this.ui.m_view.m_state.selectedIndex = _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_4__["default"].instance.isSigned ? 1 : 0;
        if (_LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_4__["default"].instance.isSigned) {
            let displayDay = _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_4__["default"].instance.signDayCount % 7;
            for (let i = 0; i < displayDay; ++i) {
                let itemUI = this.ui.m_view['m_day_' + (i + 1)];
                itemUI.m_state_get.selectedIndex = 2;
            }
            this.ui.m_view.m_btn_watchad.visible = false;
        }
        else {
            let displayDay = _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_4__["default"].instance.signDayCount % 7;
            for (let i = 0; i < displayDay; ++i) {
                let itemUI = this.ui.m_view['m_day_' + (i + 1)];
                itemUI.m_state_get.selectedIndex = 2;
            }
            let itemUI = this.ui.m_view['m_day_' + (displayDay + 1)];
            itemUI.m_state_get.selectedIndex = 1;
            this._currentReward = _script_config_SignConfig__WEBPACK_IMPORTED_MODULE_2__["SignConfig"].data[displayDay + 1];
            this._cacheUIItem = itemUI;
            this.ui.m_view.m_text_signed.visible = false;
            this.ui.m_view.m_btn_watchad.onClick(this, this._OnClickGet);
        }
        this._isToggled = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_5__["default"].instance.checkState == _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_6__["ECheckState"].InCheck ? false : true;
        this.ui.m_view.m_tog.m_selected.selectedIndex = this._isToggled ? 1 : 0;
        this.ui.m_view.m_tog.onClick(this, this._OnClickToggle);
    }
    _OnClickToggle() {
        this._isToggled = !this._isToggled;
        this.ui.m_view.m_tog.m_selected.selectedIndex = this._isToggled ? 1 : 0;
    }
    _OnClickGet() {
        var _a;
        if (this.ui.m_view.m_tog.m_selected.selectedIndex == 1) {
            this._OnClickWatchAd();
        }
        else {
            _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_4__["default"].instance.isSigned = true;
            _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_4__["default"].instance.signDayCount++;
            _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_4__["default"].SaveToDisk();
            (_a = this._cacheConfig.onSign) === null || _a === void 0 ? void 0 : _a.runWith([this._currentReward, false]);
            this.Hide();
        }
    }
    _OnClickWatchAd() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.RecordEvent('ad_sign', {});
            let result = yield _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.ShowRewardVideoAdAsync();
            if (result) {
                _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_4__["default"].instance.isSigned = true;
                _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_4__["default"].instance.signDayCount++;
                _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_4__["default"].SaveToDisk();
                (_a = this._cacheConfig.onSign) === null || _a === void 0 ? void 0 : _a.runWith([this._currentReward, true]);
                this.Hide();
            }
            else {
                _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].Toast("跳过广告无法获得奖励");
            }
        });
    }
    _OnClickClose() {
        this.Hide();
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Mediator/LTG_UI_WatchDYMediator.ts":
/*!*************************************************************!*\
  !*** ./src/LTG_CommonUI/Mediator/LTG_UI_WatchDYMediator.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_WatchDYMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTCom_LTG_UI_WatchDY__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/LTCom/LTG_UI_WatchDY */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_WatchDY.ts");
/* harmony import */ var _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTGame/Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _Data_LTG_Com_WatchGuideData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Data/LTG_Com_WatchGuideData */ "./src/LTG_CommonUI/Data/LTG_Com_WatchGuideData.ts");





class LTG_UI_WatchDYMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new LTG_UI_WatchDYMediator();
            this._instance._classDefine = _UI_LTCom_LTG_UI_WatchDY__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this._cacheData = this._openParam;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_ZhuaWawaData进行界面打开操作");
        }
        this.ui.m_view.m_text_code.text = this._cacheData.dyId;
        this.ui.m_view.m_btn_close.onClick(this, this._OnClickClose);
        this.ui.m_view.m_btn_copy.onClick(this, this._OnClickCopy);
        this.ui.m_view.m_btn_watch.onClick(this, this._OnClickWatch);
    }
    _OnClickCopy() {
        _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_2__["default"].Toast("已拷贝到剪切板");
        _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.SetClipboardData(this._cacheData.dyId);
    }
    _OnClickClose() {
        this.Hide();
    }
    _OnClickWatch() {
        let data = new _Data_LTG_Com_WatchGuideData__WEBPACK_IMPORTED_MODULE_4__["LTG_Com_WatchGuideData"]();
        data.iconUrl = this._cacheData.iconUrl;
        data.Send();
        this.Hide();
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Mediator/LTG_UI_WatchGuideMediator.ts":
/*!****************************************************************!*\
  !*** ./src/LTG_CommonUI/Mediator/LTG_UI_WatchGuideMediator.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_WatchGuideMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTCom_LTG_UI_WatchGuide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/LTCom/LTG_UI_WatchGuide */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_WatchGuide.ts");
/* harmony import */ var _LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");



class LTG_UI_WatchGuideMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new LTG_UI_WatchGuideMediator();
            this._instance._classDefine = _UI_LTCom_LTG_UI_WatchGuide__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        let openData = this._openParam;
        if (openData == null) {
            throw new Error("请调用LTG_Com_WatchGuideData进行界面打开操作");
        }
        if (!_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(openData.iconUrl)) {
            this.ui.m_view.m_loader_icon.url = openData.iconUrl;
        }
        this.ui.m_view.m_btn_close.onClick(this, this._OnClickClose);
    }
    _OnClickClose() {
        this.Hide();
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/Mediator/LTG_UI_ZhuawawaMediator.ts":
/*!**************************************************************!*\
  !*** ./src/LTG_CommonUI/Mediator/LTG_UI_ZhuawawaMediator.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_ZhuawawaMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTCom_LTG_UI_Zhuawawa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/LTCom/LTG_UI_Zhuawawa */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Zhuawawa.ts");
/* harmony import */ var _LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/LTUtils/MonoHelper */ "./src/LTGame/LTUtils/MonoHelper.ts");
/* harmony import */ var _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTGame/LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SDK/common/ECheckState */ "./src/SDK/common/ECheckState.ts");
/* harmony import */ var _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../LTGame/Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");







class LTG_UI_ZhuawawaMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this._upperY = 0;
        this._lowerY = 344;
        this._remainTime = 10;
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new LTG_UI_ZhuawawaMediator();
            this._instance._classDefine = _UI_LTCom_LTG_UI_Zhuawawa__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this._cacheData = this._openParam;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_ZhuaWawaData进行界面打开操作");
        }
        this._isStoped = false;
        this._progress = 0;
        this._remainTime = 10;
        this.ui.m_view.m_btn_push.onClick(this, this._OnClickPush);
        this._UpdateView();
        _LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_2__["default"].instance.AddAction(_LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_2__["EActionType"].Update, this, this._LogicUpdate);
    }
    _OnHide() {
        _LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_2__["default"].instance.RemoveAction(_LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_2__["EActionType"].Update, this, this._LogicUpdate);
    }
    _OnClickPush() {
        if (this._isStoped)
            return;
        this.ui.m_view.m_img_hand.visible = false;
        this._progress += 6;
    }
    _LogicUpdate() {
        var _a, _b;
        let dt = Laya.timer.delta / 1000;
        if (this._isStoped) {
            this._progress -= 50 * dt;
            if (this._progress < 0) {
                this._progress = 0;
                (_a = this._cacheData.onPickup) === null || _a === void 0 ? void 0 : _a.run();
                this.Hide();
                return;
            }
            this._UpdateView();
        }
        else {
            if (this._progress >= 100) {
                this._progress = 100;
                this._UpdateView();
                this.ui.m_view.m_view_pick.m_state_pick.selectedIndex = 1;
                this._isStoped = true;
                if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_4__["default"].instance.checkState != _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_5__["ECheckState"].InCheck) {
                    _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.ShowInterstitalAd();
                }
            }
            else {
                this._remainTime -= dt;
                this._progress -= dt * 4;
                this._UpdateView();
                if (this._remainTime < 0) {
                    (_b = this._cacheData.onTimeout) === null || _b === void 0 ? void 0 : _b.run();
                    this.Hide();
                }
            }
        }
    }
    _UpdateView() {
        this.ui.m_view.m_view_pick.y = _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Lerp(this._upperY, this._lowerY, this._progress / 100);
        if (!this._isStoped) {
            this.ui.m_view.m_progress_push.value = this._progress;
            let seconds = Math.floor(this._remainTime);
            let secondsStr = seconds.toFixed(0);
            if (seconds < 10) {
                secondsStr = "0" + secondsStr;
            }
            let tick = Math.floor((this._remainTime - seconds) * 1000);
            this.ui.m_view.m_text_time.text = "00:" + secondsStr + "." + tick;
        }
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTComBinder.ts":
/*!**************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTComBinder.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTComBinder; });
/* harmony import */ var _LTG_UI_Set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LTG_UI_Set */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Set.ts");
/* harmony import */ var _LTG_UI_Notice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LTG_UI_Notice */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Notice.ts");
/* harmony import */ var _LTG_UI_view_notice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LTG_UI_view_notice */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_notice.ts");
/* harmony import */ var _LTG_UI_AddShortcut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LTG_UI_AddShortcut */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_AddShortcut.ts");
/* harmony import */ var _LTG_UI_view_addshortcut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LTG_UI_view_addshortcut */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_addshortcut.ts");
/* harmony import */ var _LTG_UI_FindGame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LTG_UI_FindGame */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_FindGame.ts");
/* harmony import */ var _LTG_UI_view_findgame__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LTG_UI_view_findgame */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_findgame.ts");
/* harmony import */ var _LTG_UI_MyGame__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LTG_UI_MyGame */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_MyGame.ts");
/* harmony import */ var _LTG_UI_view_mygame__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LTG_UI_view_mygame */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_mygame.ts");
/* harmony import */ var _LTG_UI_Zhuawawa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LTG_UI_Zhuawawa */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Zhuawawa.ts");
/* harmony import */ var _LTG_UI_view_zhuazi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LTG_UI_view_zhuazi */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_zhuazi.ts");
/* harmony import */ var _LTG_UI_view_zww__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LTG_UI_view_zww */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_zww.ts");
/* harmony import */ var _LTG_UI_EggWall__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LTG_UI_EggWall */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_EggWall.ts");
/* harmony import */ var _LTG_UI_item_view_eggwall__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./LTG_UI_item_view_eggwall */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_item_view_eggwall.ts");
/* harmony import */ var _LTG_UI_view_grow_01__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./LTG_UI_view_grow_01 */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_grow_01.ts");
/* harmony import */ var _LTG_UI_EggNotice__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LTG_UI_EggNotice */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_EggNotice.ts");
/* harmony import */ var _LTG_UI_view_egg_notice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LTG_UI_view_egg_notice */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_egg_notice.ts");
/* harmony import */ var _LTG_UI_LimitSkin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./LTG_UI_LimitSkin */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_LimitSkin.ts");
/* harmony import */ var _LTG_UI_toggle_02__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./LTG_UI_toggle_02 */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_toggle_02.ts");
/* harmony import */ var _LTG_UI_view_watchad_progress__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./LTG_UI_view_watchad_progress */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_watchad_progress.ts");
/* harmony import */ var _LTG_UI_toggle_03__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./LTG_UI_toggle_03 */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_toggle_03.ts");
/* harmony import */ var _LTG_UI_Roll__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./LTG_UI_Roll */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Roll.ts");
/* harmony import */ var _LTG_UI_item_view_roll__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./LTG_UI_item_view_roll */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_item_view_roll.ts");
/* harmony import */ var _LTG_UI_view_roll_panel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./LTG_UI_view_roll_panel */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_roll_panel.ts");
/* harmony import */ var _LTG_UI_view_roll__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./LTG_UI_view_roll */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_roll.ts");
/* harmony import */ var _LTG_UI_view_limit_skin__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./LTG_UI_view_limit_skin */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_limit_skin.ts");
/* harmony import */ var _LTG_UI_WatchDY__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./LTG_UI_WatchDY */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_WatchDY.ts");
/* harmony import */ var _LTG_UI_view_watchdy__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./LTG_UI_view_watchdy */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_watchdy.ts");
/* harmony import */ var _LTG_UI_ShareVideo__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./LTG_UI_ShareVideo */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_ShareVideo.ts");
/* harmony import */ var _LTG_UI_view_sharevideo__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./LTG_UI_view_sharevideo */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_sharevideo.ts");
/* harmony import */ var _LTG_UI_Sign__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./LTG_UI_Sign */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Sign.ts");
/* harmony import */ var _LTG_UI_view_sign__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./LTG_UI_view_sign */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_sign.ts");
/* harmony import */ var _LTG_UI_view_item_sign_01__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./LTG_UI_view_item_sign_01 */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_01.ts");
/* harmony import */ var _LTG_UI_view_item_sign_02__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./LTG_UI_view_item_sign_02 */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_02.ts");
/* harmony import */ var _LTG_UI_view_item_sign_03__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./LTG_UI_view_item_sign_03 */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_03.ts");
/* harmony import */ var _LTG_UI_view_item_sign_05__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./LTG_UI_view_item_sign_05 */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_05.ts");
/* harmony import */ var _LTG_UI_view_item_sign_06__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./LTG_UI_view_item_sign_06 */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_06.ts");
/* harmony import */ var _LTG_UI_view_item_sign_07__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./LTG_UI_view_item_sign_07 */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_07.ts");
/* harmony import */ var _LTG_UI_btn_tog__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./LTG_UI_btn_tog */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_btn_tog.ts");
/* harmony import */ var _LTG_UI_HideMenu__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./LTG_UI_HideMenu */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_HideMenu.ts");
/* harmony import */ var _LTG_UI_view_hidemenu__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./LTG_UI_view_hidemenu */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_hidemenu.ts");
/* harmony import */ var _LTG_UI_toggle_01__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./LTG_UI_toggle_01 */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_toggle_01.ts");
/* harmony import */ var _LTG_UI_view_set__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./LTG_UI_view_set */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_set.ts");
/* harmony import */ var _LTG_UI_RewardCode__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./LTG_UI_RewardCode */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_RewardCode.ts");
/* harmony import */ var _LTG_UI_view_rewardcode__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./LTG_UI_view_rewardcode */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_rewardcode.ts");
/* harmony import */ var _LTG_UI_WatchGuide__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./LTG_UI_WatchGuide */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_WatchGuide.ts");
/* harmony import */ var _LTG_UI_view_watchguide__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./LTG_UI_view_watchguide */ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_watchguide.ts");
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/















































class LTComBinder {
    static bindAll() {
        fgui.UIObjectFactory.setExtension(_LTG_UI_Set__WEBPACK_IMPORTED_MODULE_0__["default"].URL, _LTG_UI_Set__WEBPACK_IMPORTED_MODULE_0__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_Notice__WEBPACK_IMPORTED_MODULE_1__["default"].URL, _LTG_UI_Notice__WEBPACK_IMPORTED_MODULE_1__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_notice__WEBPACK_IMPORTED_MODULE_2__["default"].URL, _LTG_UI_view_notice__WEBPACK_IMPORTED_MODULE_2__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_AddShortcut__WEBPACK_IMPORTED_MODULE_3__["default"].URL, _LTG_UI_AddShortcut__WEBPACK_IMPORTED_MODULE_3__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_addshortcut__WEBPACK_IMPORTED_MODULE_4__["default"].URL, _LTG_UI_view_addshortcut__WEBPACK_IMPORTED_MODULE_4__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_FindGame__WEBPACK_IMPORTED_MODULE_5__["default"].URL, _LTG_UI_FindGame__WEBPACK_IMPORTED_MODULE_5__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_findgame__WEBPACK_IMPORTED_MODULE_6__["default"].URL, _LTG_UI_view_findgame__WEBPACK_IMPORTED_MODULE_6__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_MyGame__WEBPACK_IMPORTED_MODULE_7__["default"].URL, _LTG_UI_MyGame__WEBPACK_IMPORTED_MODULE_7__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_mygame__WEBPACK_IMPORTED_MODULE_8__["default"].URL, _LTG_UI_view_mygame__WEBPACK_IMPORTED_MODULE_8__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_Zhuawawa__WEBPACK_IMPORTED_MODULE_9__["default"].URL, _LTG_UI_Zhuawawa__WEBPACK_IMPORTED_MODULE_9__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_zhuazi__WEBPACK_IMPORTED_MODULE_10__["default"].URL, _LTG_UI_view_zhuazi__WEBPACK_IMPORTED_MODULE_10__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_zww__WEBPACK_IMPORTED_MODULE_11__["default"].URL, _LTG_UI_view_zww__WEBPACK_IMPORTED_MODULE_11__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_EggWall__WEBPACK_IMPORTED_MODULE_12__["default"].URL, _LTG_UI_EggWall__WEBPACK_IMPORTED_MODULE_12__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_item_view_eggwall__WEBPACK_IMPORTED_MODULE_13__["default"].URL, _LTG_UI_item_view_eggwall__WEBPACK_IMPORTED_MODULE_13__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_grow_01__WEBPACK_IMPORTED_MODULE_14__["default"].URL, _LTG_UI_view_grow_01__WEBPACK_IMPORTED_MODULE_14__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_EggNotice__WEBPACK_IMPORTED_MODULE_15__["default"].URL, _LTG_UI_EggNotice__WEBPACK_IMPORTED_MODULE_15__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_egg_notice__WEBPACK_IMPORTED_MODULE_16__["default"].URL, _LTG_UI_view_egg_notice__WEBPACK_IMPORTED_MODULE_16__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_LimitSkin__WEBPACK_IMPORTED_MODULE_17__["default"].URL, _LTG_UI_LimitSkin__WEBPACK_IMPORTED_MODULE_17__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_toggle_02__WEBPACK_IMPORTED_MODULE_18__["default"].URL, _LTG_UI_toggle_02__WEBPACK_IMPORTED_MODULE_18__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_watchad_progress__WEBPACK_IMPORTED_MODULE_19__["default"].URL, _LTG_UI_view_watchad_progress__WEBPACK_IMPORTED_MODULE_19__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_toggle_03__WEBPACK_IMPORTED_MODULE_20__["default"].URL, _LTG_UI_toggle_03__WEBPACK_IMPORTED_MODULE_20__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_Roll__WEBPACK_IMPORTED_MODULE_21__["default"].URL, _LTG_UI_Roll__WEBPACK_IMPORTED_MODULE_21__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_item_view_roll__WEBPACK_IMPORTED_MODULE_22__["default"].URL, _LTG_UI_item_view_roll__WEBPACK_IMPORTED_MODULE_22__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_roll_panel__WEBPACK_IMPORTED_MODULE_23__["default"].URL, _LTG_UI_view_roll_panel__WEBPACK_IMPORTED_MODULE_23__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_roll__WEBPACK_IMPORTED_MODULE_24__["default"].URL, _LTG_UI_view_roll__WEBPACK_IMPORTED_MODULE_24__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_limit_skin__WEBPACK_IMPORTED_MODULE_25__["default"].URL, _LTG_UI_view_limit_skin__WEBPACK_IMPORTED_MODULE_25__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_WatchDY__WEBPACK_IMPORTED_MODULE_26__["default"].URL, _LTG_UI_WatchDY__WEBPACK_IMPORTED_MODULE_26__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_watchdy__WEBPACK_IMPORTED_MODULE_27__["default"].URL, _LTG_UI_view_watchdy__WEBPACK_IMPORTED_MODULE_27__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_ShareVideo__WEBPACK_IMPORTED_MODULE_28__["default"].URL, _LTG_UI_ShareVideo__WEBPACK_IMPORTED_MODULE_28__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_sharevideo__WEBPACK_IMPORTED_MODULE_29__["default"].URL, _LTG_UI_view_sharevideo__WEBPACK_IMPORTED_MODULE_29__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_Sign__WEBPACK_IMPORTED_MODULE_30__["default"].URL, _LTG_UI_Sign__WEBPACK_IMPORTED_MODULE_30__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_sign__WEBPACK_IMPORTED_MODULE_31__["default"].URL, _LTG_UI_view_sign__WEBPACK_IMPORTED_MODULE_31__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_item_sign_01__WEBPACK_IMPORTED_MODULE_32__["default"].URL, _LTG_UI_view_item_sign_01__WEBPACK_IMPORTED_MODULE_32__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_item_sign_02__WEBPACK_IMPORTED_MODULE_33__["default"].URL, _LTG_UI_view_item_sign_02__WEBPACK_IMPORTED_MODULE_33__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_item_sign_03__WEBPACK_IMPORTED_MODULE_34__["default"].URL, _LTG_UI_view_item_sign_03__WEBPACK_IMPORTED_MODULE_34__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_item_sign_05__WEBPACK_IMPORTED_MODULE_35__["default"].URL, _LTG_UI_view_item_sign_05__WEBPACK_IMPORTED_MODULE_35__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_item_sign_06__WEBPACK_IMPORTED_MODULE_36__["default"].URL, _LTG_UI_view_item_sign_06__WEBPACK_IMPORTED_MODULE_36__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_item_sign_07__WEBPACK_IMPORTED_MODULE_37__["default"].URL, _LTG_UI_view_item_sign_07__WEBPACK_IMPORTED_MODULE_37__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_btn_tog__WEBPACK_IMPORTED_MODULE_38__["default"].URL, _LTG_UI_btn_tog__WEBPACK_IMPORTED_MODULE_38__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_HideMenu__WEBPACK_IMPORTED_MODULE_39__["default"].URL, _LTG_UI_HideMenu__WEBPACK_IMPORTED_MODULE_39__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_hidemenu__WEBPACK_IMPORTED_MODULE_40__["default"].URL, _LTG_UI_view_hidemenu__WEBPACK_IMPORTED_MODULE_40__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_toggle_01__WEBPACK_IMPORTED_MODULE_41__["default"].URL, _LTG_UI_toggle_01__WEBPACK_IMPORTED_MODULE_41__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_set__WEBPACK_IMPORTED_MODULE_42__["default"].URL, _LTG_UI_view_set__WEBPACK_IMPORTED_MODULE_42__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_RewardCode__WEBPACK_IMPORTED_MODULE_43__["default"].URL, _LTG_UI_RewardCode__WEBPACK_IMPORTED_MODULE_43__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_rewardcode__WEBPACK_IMPORTED_MODULE_44__["default"].URL, _LTG_UI_view_rewardcode__WEBPACK_IMPORTED_MODULE_44__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_WatchGuide__WEBPACK_IMPORTED_MODULE_45__["default"].URL, _LTG_UI_WatchGuide__WEBPACK_IMPORTED_MODULE_45__["default"]);
        fgui.UIObjectFactory.setExtension(_LTG_UI_view_watchguide__WEBPACK_IMPORTED_MODULE_46__["default"].URL, _LTG_UI_view_watchguide__WEBPACK_IMPORTED_MODULE_46__["default"]);
    }
}


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_AddShortcut.ts":
/*!*********************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_AddShortcut.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_AddShortcut; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_AddShortcut extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "AddShortcut"));
    }
    onConstruct() {
        this.m_img_bg = (this.getChildAt(0));
        this.m_view = (this.getChildAt(1));
    }
}
LTG_UI_AddShortcut.URL = "ui://hbq27te38gel17";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_EggNotice.ts":
/*!*******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_EggNotice.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_EggNotice; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_EggNotice extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "EggNotice"));
    }
    onConstruct() {
        this.m_img_bg = (this.getChildAt(0));
        this.m_view = (this.getChildAt(1));
    }
}
LTG_UI_EggNotice.URL = "ui://hbq27te38gel2w";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_EggWall.ts":
/*!*****************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_EggWall.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_EggWall; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_EggWall extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "EggWall"));
    }
    onConstruct() {
        this.m_img_bg = (this.getChildAt(0));
        this.m_img_grow = (this.getChildAt(1));
        this.m_btn_back = (this.getChildAt(2));
        this.m_loader_display = (this.getChildAt(4));
        this.m_list_view = (this.getChildAt(5));
    }
}
LTG_UI_EggWall.URL = "ui://hbq27te38gel2c";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_FindGame.ts":
/*!******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_FindGame.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_FindGame; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_FindGame extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "FindGame"));
    }
    onConstruct() {
        this.m_img_bg = (this.getChildAt(0));
        this.m_view = (this.getChildAt(1));
    }
}
LTG_UI_FindGame.URL = "ui://hbq27te38gel1f";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_HideMenu.ts":
/*!******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_HideMenu.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_HideMenu; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_HideMenu extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "HideMenu"));
    }
    onConstruct() {
        this.m_btn_show = (this.getChildAt(0));
        this.m_view_menu = (this.getChildAt(1));
        this.m_anim_show_menu = this.getTransitionAt(0);
        this.m_anim_hide_menu = this.getTransitionAt(1);
    }
}
LTG_UI_HideMenu.URL = "ui://hbq27te38gel60";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_LimitSkin.ts":
/*!*******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_LimitSkin.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_LimitSkin; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_LimitSkin extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "LimitSkin"));
    }
    onConstruct() {
        this.m_img_bg = (this.getChildAt(0));
        this.m_view = (this.getChildAt(1));
        this.m_view_ad_progress = (this.getChildAt(2));
        this.m_toggle_watchad = (this.getChildAt(3));
        this.m_btn_get = (this.getChildAt(4));
    }
}
LTG_UI_LimitSkin.URL = "ui://hbq27te38gel35";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_MyGame.ts":
/*!****************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_MyGame.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_MyGame; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_MyGame extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "MyGame"));
    }
    onConstruct() {
        this.m_img_bg = (this.getChildAt(0));
        this.m_view = (this.getChildAt(1));
    }
}
LTG_UI_MyGame.URL = "ui://hbq27te38gel1k";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Notice.ts":
/*!****************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_Notice.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_Notice; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_Notice extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "Notice"));
    }
    onConstruct() {
        this.m_img_bg = (this.getChildAt(0));
        this.m_view = (this.getChildAt(1));
    }
}
LTG_UI_Notice.URL = "ui://hbq27te38gel10";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_RewardCode.ts":
/*!********************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_RewardCode.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_RewardCode; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_RewardCode extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "RewardCode"));
    }
    onConstruct() {
        this.m_img_bg = (this.getChildAt(0));
        this.m_view = (this.getChildAt(1));
    }
}
LTG_UI_RewardCode.URL = "ui://hbq27te38gelp";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Roll.ts":
/*!**************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_Roll.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_Roll; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_Roll extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "Roll"));
    }
    onConstruct() {
        this.m_img_bg = (this.getChildAt(0));
        this.m_btn_close = (this.getChildAt(1));
        this.m_view = (this.getChildAt(2));
    }
}
LTG_UI_Roll.URL = "ui://hbq27te38gel3k";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Set.ts":
/*!*************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_Set.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_Set; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_Set extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "Set"));
    }
    onConstruct() {
        this.m_img_bg = (this.getChildAt(0));
        this.m_view = (this.getChildAt(1));
    }
}
LTG_UI_Set.URL = "ui://hbq27te38gel1";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_ShareVideo.ts":
/*!********************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_ShareVideo.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_ShareVideo; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_ShareVideo extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "ShareVideo"));
    }
    onConstruct() {
        this.m_img_bg = (this.getChildAt(0));
        this.m_view = (this.getChildAt(1));
    }
}
LTG_UI_ShareVideo.URL = "ui://hbq27te38gel4h";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Sign.ts":
/*!**************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_Sign.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_Sign; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_Sign extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "Sign"));
    }
    onConstruct() {
        this.m_img_bg = (this.getChildAt(0));
        this.m_view = (this.getChildAt(1));
        this.m_btn_close = (this.getChildAt(2));
        this.m_anim_enter = this.getTransitionAt(0);
        this.m_anim_exit = this.getTransitionAt(1);
    }
}
LTG_UI_Sign.URL = "ui://hbq27te38gel4v";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_WatchDY.ts":
/*!*****************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_WatchDY.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_WatchDY; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_WatchDY extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "WatchDY"));
    }
    onConstruct() {
        this.m_img_bg = (this.getChildAt(0));
        this.m_view = (this.getChildAt(1));
    }
}
LTG_UI_WatchDY.URL = "ui://hbq27te38gel46";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_WatchGuide.ts":
/*!********************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_WatchGuide.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_WatchGuide; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_WatchGuide extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "WatchGuide"));
    }
    onConstruct() {
        this.m_img_bg = (this.getChildAt(0));
        this.m_view = (this.getChildAt(1));
    }
}
LTG_UI_WatchGuide.URL = "ui://hbq27te3odt06e";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_Zhuawawa.ts":
/*!******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_Zhuawawa.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_Zhuawawa; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_Zhuawawa extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "Zhuawawa"));
    }
    onConstruct() {
        this.m_img_bg = (this.getChildAt(0));
        this.m_view = (this.getChildAt(1));
    }
}
LTG_UI_Zhuawawa.URL = "ui://hbq27te38gel1u";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_btn_tog.ts":
/*!*****************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_btn_tog.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_btn_tog; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_btn_tog extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "btn_tog"));
    }
    onConstruct() {
        this.m_selected = this.getControllerAt(0);
    }
}
LTG_UI_btn_tog.URL = "ui://hbq27te38gel5p";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_item_view_eggwall.ts":
/*!***************************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_item_view_eggwall.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_item_view_eggwall; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_item_view_eggwall extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "item_view_eggwall"));
    }
    onConstruct() {
        this.m_loader_mask = (this.getChildAt(1));
        this.m_loader_icon = (this.getChildAt(2));
        this.m_btn_get_tip = (this.getChildAt(3));
        this.m_img_comming = (this.getChildAt(4));
        this.m_btn_show_tip = (this.getChildAt(5));
        this.m_text_unlocked = (this.getChildAt(6));
    }
}
LTG_UI_item_view_eggwall.URL = "ui://hbq27te38gel2u";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_item_view_roll.ts":
/*!************************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_item_view_roll.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_item_view_roll; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_item_view_roll extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "item_view_roll"));
    }
    onConstruct() {
        this.m_text_name = (this.getChildAt(0));
        this.m_loader_icon = (this.getChildAt(1));
    }
}
LTG_UI_item_view_roll.URL = "ui://hbq27te38gel40";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_toggle_01.ts":
/*!*******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_toggle_01.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_toggle_01; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_toggle_01 extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "toggle_01"));
    }
    onConstruct() {
        this.m_toggle_state = this.getControllerAt(0);
    }
}
LTG_UI_toggle_01.URL = "ui://hbq27te38gelc";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_toggle_02.ts":
/*!*******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_toggle_02.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_toggle_02; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_toggle_02 extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "toggle_02"));
    }
    onConstruct() {
        this.m_state_toggle = this.getControllerAt(0);
    }
}
LTG_UI_toggle_02.URL = "ui://hbq27te38gel3c";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_toggle_03.ts":
/*!*******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_toggle_03.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_toggle_03; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_toggle_03 extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "toggle_03"));
    }
    onConstruct() {
        this.m_state_toggle = this.getControllerAt(0);
    }
}
LTG_UI_toggle_03.URL = "ui://hbq27te38gel3j";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_addshortcut.ts":
/*!**************************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_addshortcut.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_addshortcut; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_addshortcut extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_addshortcut"));
    }
    onConstruct() {
        this.m_loader_icon = (this.getChildAt(4));
        this.m_btn_close = (this.getChildAt(5));
        this.m_btn_ok = (this.getChildAt(6));
    }
}
LTG_UI_view_addshortcut.URL = "ui://hbq27te38gel1e";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_egg_notice.ts":
/*!*************************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_egg_notice.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_egg_notice; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_egg_notice extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_egg_notice"));
    }
    onConstruct() {
        this.m_btn_close = (this.getChildAt(2));
        this.m_btn_get_imd = (this.getChildAt(4));
        this.m_text_notice = (this.getChildAt(5));
    }
}
LTG_UI_view_egg_notice.URL = "ui://hbq27te38gel34";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_findgame.ts":
/*!***********************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_findgame.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_findgame; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_findgame extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_findgame"));
    }
    onConstruct() {
        this.m_loader_icon = (this.getChildAt(4));
        this.m_btn_close = (this.getChildAt(5));
        this.m_btn_ok = (this.getChildAt(6));
    }
}
LTG_UI_view_findgame.URL = "ui://hbq27te38gel1j";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_grow_01.ts":
/*!**********************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_grow_01.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_grow_01; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_grow_01 extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_grow_01"));
    }
    onConstruct() {
        this.m_t0 = this.getTransitionAt(0);
    }
}
LTG_UI_view_grow_01.URL = "ui://hbq27te38gel2v";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_hidemenu.ts":
/*!***********************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_hidemenu.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_hidemenu; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_hidemenu extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_hidemenu"));
    }
    onConstruct() {
        this.m_btn_notice = (this.getChildAt(1));
        this.m_btn_addshortcut = (this.getChildAt(2));
        this.m_btn_findgame = (this.getChildAt(3));
        this.m_btn_hide = (this.getChildAt(4));
    }
}
LTG_UI_view_hidemenu.URL = "ui://hbq27te38gel67";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_01.ts":
/*!***************************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_01.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_item_sign_01; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_item_sign_01 extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_item_sign_01"));
    }
    onConstruct() {
        this.m_state_get = this.getControllerAt(0);
        this.m_img_bg = (this.getChildAt(0));
        this.m_img_can_get = (this.getChildAt(1));
        this.m_img_got = (this.getChildAt(2));
        this.m_loader_icon = (this.getChildAt(3));
        this.m_text_day = (this.getChildAt(4));
        this.m_text_name = (this.getChildAt(5));
    }
}
LTG_UI_view_item_sign_01.URL = "ui://hbq27te38gel4z";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_02.ts":
/*!***************************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_02.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_item_sign_02; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_item_sign_02 extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_item_sign_02"));
    }
    onConstruct() {
        this.m_state_get = this.getControllerAt(0);
        this.m_img_bg = (this.getChildAt(0));
        this.m_img_can_get = (this.getChildAt(2));
        this.m_img_got = (this.getChildAt(3));
        this.m_loader_icon = (this.getChildAt(4));
        this.m_text_day = (this.getChildAt(5));
        this.m_text_name = (this.getChildAt(6));
    }
}
LTG_UI_view_item_sign_02.URL = "ui://hbq27te38gel53";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_03.ts":
/*!***************************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_03.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_item_sign_03; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_item_sign_03 extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_item_sign_03"));
    }
    onConstruct() {
        this.m_state_get = this.getControllerAt(0);
        this.m_img_can_get = (this.getChildAt(2));
        this.m_img_got = (this.getChildAt(3));
        this.m_loader_icon = (this.getChildAt(4));
        this.m_text_day = (this.getChildAt(5));
        this.m_text_name = (this.getChildAt(6));
    }
}
LTG_UI_view_item_sign_03.URL = "ui://hbq27te38gel55";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_05.ts":
/*!***************************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_05.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_item_sign_05; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_item_sign_05 extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_item_sign_05"));
    }
    onConstruct() {
        this.m_state_get = this.getControllerAt(0);
        this.m_img_can_get = (this.getChildAt(2));
        this.m_img_got = (this.getChildAt(3));
        this.m_loader_icon = (this.getChildAt(4));
        this.m_text_day = (this.getChildAt(5));
        this.m_text_name = (this.getChildAt(6));
    }
}
LTG_UI_view_item_sign_05.URL = "ui://hbq27te38gel59";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_06.ts":
/*!***************************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_06.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_item_sign_06; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_item_sign_06 extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_item_sign_06"));
    }
    onConstruct() {
        this.m_state_get = this.getControllerAt(0);
        this.m_img_bg = (this.getChildAt(0));
        this.m_img_can_get = (this.getChildAt(2));
        this.m_img_got = (this.getChildAt(3));
        this.m_loader_icon = (this.getChildAt(4));
        this.m_text_day = (this.getChildAt(5));
        this.m_text_name = (this.getChildAt(6));
    }
}
LTG_UI_view_item_sign_06.URL = "ui://hbq27te38gel5a";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_07.ts":
/*!***************************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_item_sign_07.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_item_sign_07; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_item_sign_07 extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_item_sign_07"));
    }
    onConstruct() {
        this.m_state_get = this.getControllerAt(0);
        this.m_img_can_get = (this.getChildAt(2));
        this.m_loader_icon = (this.getChildAt(3));
        this.m_loader_title = (this.getChildAt(5));
        this.m_img_got = (this.getChildAt(8));
    }
}
LTG_UI_view_item_sign_07.URL = "ui://hbq27te38gel5b";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_limit_skin.ts":
/*!*************************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_limit_skin.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_limit_skin; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_limit_skin extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_limit_skin"));
    }
    onConstruct() {
        this.m_loader_icon = (this.getChildAt(1));
        this.m_loader_text = (this.getChildAt(2));
    }
}
LTG_UI_view_limit_skin.URL = "ui://hbq27te38gel45";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_mygame.ts":
/*!*********************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_mygame.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_mygame; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_mygame extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_mygame"));
    }
    onConstruct() {
        this.m_btn_back = (this.getChildAt(0));
        this.m_t0 = this.getTransitionAt(0);
    }
}
LTG_UI_view_mygame.URL = "ui://hbq27te38gel1t";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_notice.ts":
/*!*********************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_notice.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_notice; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_notice extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_notice"));
    }
    onConstruct() {
        this.m_text_notice = (this.getChildAt(4));
        this.m_btn_close = (this.getChildAt(5));
    }
}
LTG_UI_view_notice.URL = "ui://hbq27te38gel16";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_rewardcode.ts":
/*!*************************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_rewardcode.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_rewardcode; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_rewardcode extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_rewardcode"));
    }
    onConstruct() {
        this.m_btn_confirm = (this.getChildAt(4));
        this.m_btn_cancel = (this.getChildAt(5));
        this.m_text_input = (this.getChildAt(7));
    }
}
LTG_UI_view_rewardcode.URL = "ui://hbq27te38gely";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_roll.ts":
/*!*******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_roll.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_roll; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_roll extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_roll"));
    }
    onConstruct() {
        this.m_view_roll = (this.getChildAt(0));
        this.m_progress_supper = (this.getChildAt(3));
        this.m_btn_watchad = (this.getChildAt(5));
        this.m_btn_freeget = (this.getChildAt(6));
        this.m_text_notice = (this.getChildAt(7));
    }
}
LTG_UI_view_roll.URL = "ui://hbq27te38gel42";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_roll_panel.ts":
/*!*************************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_roll_panel.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_roll_panel; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_roll_panel extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_roll_panel"));
    }
    onConstruct() {
        this.m_item_01 = (this.getChildAt(1));
        this.m_item_02 = (this.getChildAt(2));
        this.m_item_03 = (this.getChildAt(3));
        this.m_item_04 = (this.getChildAt(4));
        this.m_item_05 = (this.getChildAt(5));
        this.m_item_06 = (this.getChildAt(6));
    }
}
LTG_UI_view_roll_panel.URL = "ui://hbq27te38gel41";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_set.ts":
/*!******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_set.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_set; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_set extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_set"));
    }
    onConstruct() {
        this.m_toggle_music = (this.getChildAt(4));
        this.m_toggle_shake = (this.getChildAt(5));
        this.m_btn_code = (this.getChildAt(10));
        this.m_btn_close = (this.getChildAt(11));
    }
}
LTG_UI_view_set.URL = "ui://hbq27te38gelo";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_sharevideo.ts":
/*!*************************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_sharevideo.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_sharevideo; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_sharevideo extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_sharevideo"));
    }
    onConstruct() {
        this.m_loader_text = (this.getChildAt(2));
        this.m_loader_icon = (this.getChildAt(3));
        this.m_btn_share = (this.getChildAt(5));
        this.m_btn_close = (this.getChildAt(6));
    }
}
LTG_UI_view_sharevideo.URL = "ui://hbq27te38gel4t";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_sign.ts":
/*!*******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_sign.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_sign; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_sign extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_sign"));
    }
    onConstruct() {
        this.m_state = this.getControllerAt(0);
        this.m_day_1 = (this.getChildAt(2));
        this.m_day_2 = (this.getChildAt(3));
        this.m_day_3 = (this.getChildAt(4));
        this.m_day_4 = (this.getChildAt(5));
        this.m_day_5 = (this.getChildAt(6));
        this.m_day_6 = (this.getChildAt(7));
        this.m_day_7 = (this.getChildAt(8));
        this.m_text_signed = (this.getChildAt(9));
        this.m_btn_watchad = (this.getChildAt(10));
        this.m_tog = (this.getChildAt(11));
    }
}
LTG_UI_view_sign.URL = "ui://hbq27te38gel4w";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_watchad_progress.ts":
/*!*******************************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_watchad_progress.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_watchad_progress; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_watchad_progress extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_watchad_progress"));
    }
    onConstruct() {
        this.m_toggle_01 = (this.getChildAt(1));
        this.m_toggle_02 = (this.getChildAt(3));
        this.m_toggle_03 = (this.getChildAt(4));
    }
}
LTG_UI_view_watchad_progress.URL = "ui://hbq27te38gel3d";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_watchdy.ts":
/*!**********************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_watchdy.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_watchdy; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_watchdy extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_watchdy"));
    }
    onConstruct() {
        this.m_btn_copy = (this.getChildAt(1));
        this.m_btn_close = (this.getChildAt(2));
        this.m_text_code = (this.getChildAt(3));
        this.m_btn_watch = (this.getChildAt(4));
    }
}
LTG_UI_view_watchdy.URL = "ui://hbq27te38gel4g";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_watchguide.ts":
/*!*************************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_watchguide.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_watchguide; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_watchguide extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_watchguide"));
    }
    onConstruct() {
        this.m_btn_close = (this.getChildAt(1));
        this.m_loader_icon = (this.getChildAt(3));
    }
}
LTG_UI_view_watchguide.URL = "ui://hbq27te3odt06j";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_zhuazi.ts":
/*!*********************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_zhuazi.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_zhuazi; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_zhuazi extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_zhuazi"));
    }
    onConstruct() {
        this.m_state_pick = this.getControllerAt(0);
    }
}
LTG_UI_view_zhuazi.URL = "ui://hbq27te38gel27";


/***/ }),

/***/ "./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_zww.ts":
/*!******************************************************!*\
  !*** ./src/LTG_CommonUI/UI/LTCom/LTG_UI_view_zww.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTG_UI_view_zww; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class LTG_UI_view_zww extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTCom", "view_zww"));
    }
    onConstruct() {
        this.m_btn_push = (this.getChildAt(0));
        this.m_progress_push = (this.getChildAt(1));
        this.m_view_pick = (this.getChildAt(4));
        this.m_text_time = (this.getChildAt(7));
        this.m_img_hand = (this.getChildAt(8));
        this.m_t0 = this.getTransitionAt(0);
    }
}
LTG_UI_view_zww.URL = "ui://hbq27te38gel29";


/***/ }),

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
CommonEventId.SELF_AD_INITED = "SELF_AD_INITED";


/***/ }),

/***/ "./src/LTGame/Commom/CommonSaveData.ts":
/*!*********************************************!*\
  !*** ./src/LTGame/Commom/CommonSaveData.ts ***!
  \*********************************************/
/*! exports provided: SaveData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveData", function() { return SaveData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommonSaveData; });
/* harmony import */ var _LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LTUtils/LTUtils */ "./src/LTGame/LTUtils/LTUtils.ts");
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");


class SaveData {
    constructor() {
        /**
         * 最后一次打开时间戳
         */
        this.lastOpenTick = 0;
        /**
         * 是否是新的一天
         */
        this.isNewDay = true;
        /**
         * 是否已签到
         */
        this.isSigned = false;
        /**
         * 签到天数
         */
        this.signDayCount = 0;
        /**
         * 音乐是否开启
         */
        this.isMusicOn = true;
        /**
         * 振动是否开启
         */
        this.isShakeOn = true;
        /**
         * 原生插屏展示次数
         */
        this.interstitialCount = 0;
        /**
         * 皮肤试用误点
         * 0 勾中看视频
         * 1 勾中不看视频
         */
        this.trySignMissMode = 0;
        /**
        * 界面开关 误点套路
        */
        this.checkFlag = true;
        /**
         * 结算界面误点
         * 0 勾中看视频
         * 1 勾中不看视频
         */
        this.endRewardMissMode = 0;
        /**
         * 免费抽奖次数
         */
        this.freeRollCount = 1;
        this.totalRollCount = 0;
        /**
        * 彩蛋获得数据
        */
        this.EggPassIds = [];
        /**
        * 彩蛋密语数据
        */
        this.EggSecretIds = [];
        /**
        * 彩蛋暗号数据
        */
        this.EggPasswordIds = [];
        /**
         * 彩蛋ID
         */
        this.eggWallIds = [];
        this.eggWallStates = [];
    }
}
class CommonSaveData {
    constructor() {
        this._savePath = "ltg-common-save.sav";
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new CommonSaveData();
            this._instance._ReadFromFile();
            this._instance._InitData();
        }
        return this._instance._saveData;
    }
    static SaveToDisk() {
        if (!this._instance)
            return;
        let json = JSON.stringify(this._instance._saveData);
        Laya.LocalStorage.setJSON(this._instance._savePath, json);
    }
    _InitData() {
        this._saveData.isNewDay = false;
        if (this._saveData.lastOpenTick == 0) {
            this._saveData.isNewDay = true;
        }
        else {
            let lastOpenDayCount = _LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_0__["LTUtils"].GetCurrentDayCount(this._saveData.lastOpenTick);
            let currentOpenDayCount = _LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_0__["LTUtils"].GetCurrentDayCount(Date.now());
            if (currentOpenDayCount != lastOpenDayCount) {
                this._saveData.isNewDay = true;
                this._saveData.interstitialCount = 0;
            }
        }
        this._saveData.lastOpenTick = Date.now();
        if (this._saveData.isNewDay) {
            this._saveData.isSigned = false;
            this._saveData.freeRollCount = 1;
        }
        CommonSaveData.SaveToDisk();
    }
    _ReadFromFile() {
        let readStr = Laya.LocalStorage.getJSON(this._savePath);
        this._saveData = new SaveData();
        if (!_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_1__["default"].IsNullOrEmpty(readStr)) {
            let jsonData = JSON.parse(readStr);
            for (let key in jsonData) {
                this._saveData[key] = jsonData[key];
            }
        }
        console.log('common savedata:', this._saveData);
    }
}


/***/ }),

/***/ "./src/LTGame/Commom/EScreenOrientation.ts":
/*!*************************************************!*\
  !*** ./src/LTGame/Commom/EScreenOrientation.ts ***!
  \*************************************************/
/*! exports provided: EScreenOrientation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EScreenOrientation", function() { return EScreenOrientation; });
var EScreenOrientation;
(function (EScreenOrientation) {
    /**
     * 竖屏
     */
    EScreenOrientation[EScreenOrientation["Portrait"] = 0] = "Portrait";
    /**
     * 横屏
     */
    EScreenOrientation[EScreenOrientation["Landscape"] = 1] = "Landscape";
})(EScreenOrientation || (EScreenOrientation = {}));


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
                if (configName.dataList.length > 0) {
                    configName.lastData = configName.dataList[configName.dataList.length - 1];
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
    LogicUpdate(dt) {
        let nextState = this.currState.GetNextState();
        if (nextState != 0) {
            this.ChangeState(nextState);
        }
        this.OnRunning(null, dt);
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

/***/ "./src/LTGame/LTUtils/ArrayEx.ts":
/*!***************************************!*\
  !*** ./src/LTGame/LTUtils/ArrayEx.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArrayEx; });
class ArrayEx {
    static Replace(arr, oldObj, newObj) {
        let index = arr.indexOf(oldObj);
        if (index < 0)
            return false;
        arr.splice(index, 1, newObj);
        return true;
    }
    static Remove(arr, obj) {
        let index = arr.indexOf(obj);
        if (index < 0)
            return false;
        arr.splice(index, 1);
        return true;
    }
    static RemoveAt(arr, index) {
        if (arr.length <= index)
            return false;
        arr.splice(index, 1);
        return true;
    }
    static Contains(arr, obj) {
        let index = arr.indexOf(obj);
        return index >= 0;
    }
    static Copy(arr) {
        let result = [];
        for (let i = 0; i < arr.length; ++i) {
            result.push(arr[i]);
        }
        return result;
    }
}


/***/ }),

/***/ "./src/LTGame/LTUtils/CameraEx.ts":
/*!****************************************!*\
  !*** ./src/LTGame/LTUtils/CameraEx.ts ***!
  \****************************************/
/*! exports provided: CameraEx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraEx", function() { return CameraEx; });
/* harmony import */ var _Vector3Ex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector3Ex */ "./src/LTGame/LTUtils/Vector3Ex.ts");

class CameraEx {
    static ScreenPosToWorldPos(camera, screenPos, fakeYPos) {
        let ray = new Laya.Ray(_Vector3Ex__WEBPACK_IMPORTED_MODULE_0__["default"].zero, _Vector3Ex__WEBPACK_IMPORTED_MODULE_0__["default"].zero);
        camera.viewportPointToRay(screenPos, ray);
        let downVec = _Vector3Ex__WEBPACK_IMPORTED_MODULE_0__["default"].s_down;
        let dotValue = _Vector3Ex__WEBPACK_IMPORTED_MODULE_0__["default"].Dot(downVec, ray.direction);
        let heightValue = ray.origin.y;
        let scaleValue = heightValue / dotValue;
        let finalDir = _Vector3Ex__WEBPACK_IMPORTED_MODULE_0__["default"].Scale(ray.direction, scaleValue);
        return _Vector3Ex__WEBPACK_IMPORTED_MODULE_0__["default"].Add(ray.origin, finalDir);
    }
    static ScreenPosToRay(camera, screenPos) {
        let ray = new Laya.Ray(_Vector3Ex__WEBPACK_IMPORTED_MODULE_0__["default"].zero, _Vector3Ex__WEBPACK_IMPORTED_MODULE_0__["default"].zero);
        let clickPoint = new Laya.Vector2(screenPos.x / Laya.stage.width, screenPos.y / Laya.stage.height);
        camera.normalizedViewportPointToRay(clickPoint, ray);
        return ray;
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
/*! exports provided: LTUtils, randomRangeInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTUtils", function() { return LTUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomRangeInt", function() { return randomRangeInt; });
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Commom/CommonSaveData */ "./src/LTGame/Commom/CommonSaveData.ts");


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
        }
        let skinnedMeshRenderer = obj.skinnedMeshRenderer;
        if (skinnedMeshRenderer != null) {
            skinnedMeshRenderer.castShadow = castShadow;
            skinnedMeshRenderer.receiveShadow = receiveShadow;
        }
        let node = obj;
        for (let i = 0; i < node.numChildren; ++i) {
            let getChild = node.getChildAt(i);
            this.SetShadow(getChild, castShadow, receiveShadow);
        }
    }
    static GetComponentsInChildren(obj, cmp) {
        let result = [];
        this._GetComponentsInChildrenHelper(obj, cmp, result);
        return result;
    }
    static _GetComponentsInChildrenHelper(obj, cmp, result) {
        let cmps = obj.getComponents(cmp);
        if (cmps != null) {
            for (let i = 0; i < cmps.length; ++i) {
                result.push(cmps[i]);
            }
        }
        for (let i = 0; i < obj.numChildren; ++i) {
            let getChild = obj.getChildAt(i);
            this._GetComponentsInChildrenHelper(getChild, cmp, result);
        }
    }
    static EnableShadow(directionLight, farDistance) {
        //灯光开启阴影
        directionLight.shadowMode = Laya.ShadowMode.Hard;
        //可见阴影距离
        directionLight.shadowDistance = farDistance;
        //生成阴影贴图尺寸
        directionLight.shadowResolution = 512;
        //生成阴影贴图数量
        directionLight.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;
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
    /**
     * 设置层级
     * @param obj
     * @param layerIndex
     */
    static SetLayer(obj, layerIndex) {
        obj.layer = layerIndex;
        for (let i = 0; i < obj.numChildren; ++i) {
            let getChild = obj.getChildAt(i);
            this.SetLayer(getChild, layerIndex);
        }
    }
    /**
     * 调用震动
     * @param isLong 是否是长震动
     */
    static Vibrate(isLong = true) {
        if (_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_1__["default"].instance.isShakeOn) {
            _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.device.Vibrate(isLong);
        }
    }
}
/**
* 时间转换
*/
LTUtils.ONE_YEAR = 60 * 60 * 24 * 365;
LTUtils.ONE_DAY = 60 * 60 * 24;
function randomRangeInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


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
/* harmony import */ var _ArrayEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrayEx */ "./src/LTGame/LTUtils/ArrayEx.ts");

class MathEx {
    static ToHex(num) {
        return num.toString(16);
    }
    static RandomFromArrayExcept(numArr, except) {
        let fakeRandomList = [];
        for (let i = 0; i < numArr.length; ++i) {
            if (except == numArr[i])
                continue;
            fakeRandomList.push(numArr[i]);
        }
        return this.RandomFromArray(fakeRandomList);
    }
    static RandomFromArray(numArr) {
        let randomIndex = MathEx.RandomInt(0, numArr.length);
        return numArr[randomIndex];
    }
    static RandomArrayFromArray(arr, count) {
        let result = [];
        let indexList = [];
        for (let i = 0; i < arr.length; ++i) {
            indexList.push(i);
        }
        for (let i = 0; i < count; ++i) {
            let randomIndex = MathEx.RandomInt(0, indexList.length);
            let getIndex = indexList[randomIndex];
            _ArrayEx__WEBPACK_IMPORTED_MODULE_0__["default"].RemoveAt(indexList, randomIndex);
            result.push(arr[getIndex]);
        }
        return result;
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
    /**
     * 判定概率命中
     * @param ratio 概率，百分数
     */
    static RandomRatio(ratio) {
        let v = MathEx.RandomInt(0, 10000) * 0.01;
        if (ratio > v) {
            return true;
        }
        return false;
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
        return from + (to - from) * MathEx.Clamp01(progress);
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

/***/ "./src/LTGame/LTUtils/QuaternionEx.ts":
/*!********************************************!*\
  !*** ./src/LTGame/LTUtils/QuaternionEx.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuaternionEx; });
/* harmony import */ var _MathEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _Vector3Ex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector3Ex */ "./src/LTGame/LTUtils/Vector3Ex.ts");


class QuaternionEx {
    static get identify() { return QuaternionEx.FromEulerAngle(0, 0, 0); }
    static FromVector3(elurAngle) {
        return this.FromEulerAngle(elurAngle.x, elurAngle.y, elurAngle.z);
    }
    static ToEulerAngle(q) {
        var eulerE = new Laya.Vector3();
        q.getYawPitchRoll(eulerE);
        var rotationEulerE = new Laya.Vector3();
        rotationEulerE.x = eulerE.y * QuaternionEx._angleToRandin;
        rotationEulerE.y = eulerE.x * QuaternionEx._angleToRandin;
        rotationEulerE.z = eulerE.z * QuaternionEx._angleToRandin;
        return rotationEulerE;
    }
    static WrapFromUnity(x, y, z, w) {
        return new Laya.Quaternion(-x, y, z, -w);
    }
    static ConvertFromUnity(q) {
        return new Laya.Quaternion(-q.x, q.y, q.z, -q.w);
    }
    static Euler(x, y, z) {
        return this.FromEulerAngle(x, y, z);
    }
    static FromEulerAngle(x, y, z) {
        var eulerX = x / 2 * _MathEx__WEBPACK_IMPORTED_MODULE_0__["default"].Deg2Rad;
        var cX = Math.cos(eulerX);
        var sX = Math.sin(eulerX);
        var eulerY = y / 2 * _MathEx__WEBPACK_IMPORTED_MODULE_0__["default"].Deg2Rad;
        var cY = Math.cos(eulerY);
        var sY = Math.sin(eulerY);
        var eulerZ = z / 2 * _MathEx__WEBPACK_IMPORTED_MODULE_0__["default"].Deg2Rad;
        var cZ = Math.cos(eulerZ);
        var sZ = Math.sin(eulerZ);
        var ix = sX * cY * cZ - cX * sY * sZ;
        var iy = cX * sY * cZ + sX * cY * sZ;
        var iz = cX * cY * sZ - sX * sY * cZ;
        var iw = cX * cY * cZ + sX * sY * sZ;
        var q = new Laya.Quaternion(ix, iy, iz, iw);
        return q;
    }
    static MultiplyQ(r1, r2) {
        var result = Laya.Quaternion.DEFAULT;
        Laya.Quaternion.multiply(r1, r2, result);
        return result;
    }
    static Copy(src) {
        return new Laya.Quaternion(src.x, src.y, src.z, src.w);
    }
    static Multiply(r, v) {
        var x = r.x + r.x;
        var y = r.y + r.y;
        var z = r.z + r.z;
        var xx = r.x * x;
        var yy = r.y * y;
        var zz = r.z * z;
        var xy = r.x * y;
        var xz = r.x * z;
        var yz = r.y * z;
        var wx = r.w * x;
        var wy = r.w * y;
        var wz = r.w * z;
        var res = _Vector3Ex__WEBPACK_IMPORTED_MODULE_1__["default"].zero;
        res.x = (((1 - (yy + zz)) * v.x
            + (xy - wz) * v.y
            + (xz + wy) * v.z));
        res.y = (((xy + wz) * v.x
            + (1 - (xx + zz)) * v.y
            + (yz - wx) * v.z));
        res.z = (((xz - wy) * v.x
            + (yz + wx) * v.y
            + (1 - (xx + yy)) * v.z));
        return res;
    }
    static Lerp(from, to, value) {
        var q = Laya.Quaternion.DEFAULT;
        Laya.Quaternion.lerp(from, to, value, q);
        return q;
    }
}
QuaternionEx.cacheVec0 = new Laya.Quaternion();
QuaternionEx._angleToRandin = 180 / Math.PI;


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

/***/ "./src/LTGame/LTUtils/Vector3Ex.ts":
/*!*****************************************!*\
  !*** ./src/LTGame/LTUtils/Vector3Ex.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector3Ex; });
/* harmony import */ var _MathEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathEx */ "./src/LTGame/LTUtils/MathEx.ts");

class Vector3Ex {
    static get temp() {
        if (!Vector3Ex.__temp__) {
            Vector3Ex.__temp__ = Vector3Ex.zero;
        }
        Vector3Ex.__temp__.setValue(0, 0, 0);
        return Vector3Ex.__temp__;
    }
    static get s_up() {
        if (!Vector3Ex.__up__) {
            Vector3Ex.__up__ = Vector3Ex.up;
        }
        Vector3Ex.__up__.setValue(0, 1, 0);
        return Vector3Ex.__up__;
    }
    static get s_down() {
        if (!Vector3Ex.__down__) {
            Vector3Ex.__down__ = Vector3Ex.down;
        }
        Vector3Ex.__down__.setValue(0, -1, 0);
        return Vector3Ex.__down__;
    }
    static get s_forward() {
        if (!Vector3Ex.__forward__) {
            Vector3Ex.__forward__ = Vector3Ex.forward;
        }
        Vector3Ex.__forward__.setValue(0, 0, 1);
        return Vector3Ex.__forward__;
    }
    static get s_zero() {
        if (!Vector3Ex.__zero__) {
            Vector3Ex.__zero__ = Vector3Ex.zero;
        }
        Vector3Ex.__zero__.setValue(0, 0, 0);
        return Vector3Ex.__zero__;
    }
    static get s_one() {
        if (!Vector3Ex.__one__) {
            Vector3Ex.__one__ = Vector3Ex.one;
        }
        Vector3Ex.__one__.setValue(1, 1, 1);
        return Vector3Ex.__one__;
    }
    static get up() {
        return new Laya.Vector3(0, 1, 0);
    }
    static get down() {
        return new Laya.Vector3(0, -1, 0);
    }
    static get forward() {
        return new Laya.Vector3(0, 0, 1);
    }
    static get zero() {
        return new Laya.Vector3(0, 0, 0);
    }
    static get one() {
        return new Laya.Vector3(1, 1, 1);
    }
    static get back() {
        return new Laya.Vector3(0, 0, -1);
    }
    static get left() {
        return new Laya.Vector3(-1, 0, 0);
    }
    static get right() {
        return new Laya.Vector3(1, 0, 0);
    }
    static Cross(right, left) {
        var result = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.cross(right, left, result);
        return result;
    }
    static Subtract(right, left) {
        var result = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.subtract(right, left, result);
        return result;
    }
    static ClampMagnitude(vector, maxLength) {
        var result = new Laya.Vector3(0, 0, 0);
        var sqrMagnitude = 0;
        if (Laya.Vector3.distanceSquared(vector, result) > maxLength * maxLength) {
            result = Vector3Ex.Scale(Vector3Ex.Normalize(vector), maxLength);
        }
        else {
            result = vector;
        }
        return result;
    }
    static Normalize(vec) {
        var result = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.normalize(vec, result);
        return result;
    }
    static Add(...vecs) {
        var result = new Laya.Vector3(0, 0, 0);
        for (var i = 0; i < vecs.length; ++i) {
            var vec = vecs[i];
            result.x += vec.x;
            result.y += vec.y;
            result.z += vec.z;
        }
        return result;
    }
    static Scale(vec, scale) {
        var result = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.scale(vec, scale, result);
        return result;
    }
    static ScaleV3(vec, scale) {
        var result = new Laya.Vector3(vec.x * scale.x, vec.y * scale.y, vec.z * scale.z);
        return result;
    }
    static Dot(left, right) {
        return Laya.Vector3.dot(left, right);
    }
    static Lerp(from, to, v) {
        var result = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.lerp(from, to, v, result);
        return result;
    }
    static MagnitudeSqrt(v3) {
        return v3.x * v3.x + v3.y * v3.y + v3.z * v3.z;
    }
    static Magnitude(v3) {
        return Math.sqrt(this.MagnitudeSqrt(v3));
    }
    static Magnitude2D(v3) {
        return Math.sqrt(v3.x * v3.x + v3.z * v3.z);
    }
    static Distance(from, to) {
        var offset = Vector3Ex.Subtract(from, to);
        return Vector3Ex.Magnitude(offset);
    }
    static Distance2D(from, to) {
        let xOffset = from.x - to.x;
        let zOffset = from.z - to.z;
        return Math.sqrt(xOffset * xOffset + zOffset * zOffset);
    }
    static DistanceSqrt(from, to) {
        let offset = Vector3Ex.Subtract(from, to);
        return offset.x * offset.x + offset.y * offset.y + offset.z * offset.z;
    }
    static DistanceSqrt2D(from, to) {
        let offset = Vector3Ex.Subtract(from, to);
        return offset.x * offset.x + offset.z * offset.z;
    }
    /**
     * 计算在指定轴上的旋转,带符号
     * @param from
     * @param to
     * @param asix
     */
    static SignAngleAsix(from, to, asix) {
        let normalAsix = Vector3Ex.Normalize(asix);
        let dotFrom = Vector3Ex.Dot(from, normalAsix);
        let wrapFrom = Vector3Ex.Subtract(from, Vector3Ex.Scale(normalAsix, dotFrom));
        let dotTo = Vector3Ex.Dot(to, normalAsix);
        let wrapTo = Vector3Ex.Subtract(to, Vector3Ex.Scale(normalAsix, dotTo));
        let normalized = Vector3Ex.Normalize(wrapFrom);
        let normalized2 = Vector3Ex.Normalize(wrapTo);
        let num = Math.acos(_MathEx__WEBPACK_IMPORTED_MODULE_0__["default"].Clamp(Laya.Vector3.dot(normalized, normalized2), -1, 1)) * 57.29578;
        let cross = Vector3Ex.Cross(normalized, normalized2);
        let num2 = _MathEx__WEBPACK_IMPORTED_MODULE_0__["default"].Sign(Laya.Vector3.dot(asix, cross));
        return num * num2;
    }
    static SignedAngle(from, to, asix) {
        var normalized = Vector3Ex.Normalize(from);
        var normalized2 = Vector3Ex.Normalize(to);
        var num = Math.acos(_MathEx__WEBPACK_IMPORTED_MODULE_0__["default"].Clamp(Laya.Vector3.dot(normalized, normalized2), -1, 1)) * 57.29578;
        var cross = Vector3Ex.Cross(normalized, normalized2);
        var num2 = _MathEx__WEBPACK_IMPORTED_MODULE_0__["default"].Sign(Laya.Vector3.dot(asix, cross));
        return num * num2;
    }
    static Angle(from, to, asix) {
        var normalized = Vector3Ex.Normalize(from);
        var normalized2 = Vector3Ex.Normalize(to);
        var num = Math.acos(_MathEx__WEBPACK_IMPORTED_MODULE_0__["default"].Clamp(Laya.Vector3.dot(normalized, normalized2), -1, 1)) * 57.29578;
        return num;
    }
    static SmoothDamp(current, target, currentVelocity, smoothTime, maxSpeed, deltaTime) {
        var num = 2 / smoothTime;
        var num2 = num * deltaTime;
        var d = 1 / (1 + num2 + 0.48 * num2 * num2 + 0.235 * num2 * num2 * num2);
        var vector = Vector3Ex.Subtract(current, target);
        var vector2 = target.clone();
        var maxLength = maxSpeed * smoothTime;
        vector = Vector3Ex.ClampMagnitude(vector, maxLength);
        var target2 = Vector3Ex.Subtract(current, vector);
        var vector3 = Vector3Ex.Scale(Vector3Ex.Add(currentVelocity, Vector3Ex.Scale(vector, num)), deltaTime);
        var cacheV = Vector3Ex.Scale(Vector3Ex.Subtract(currentVelocity, Vector3Ex.Scale(vector3, num)), d);
        currentVelocity.x = cacheV.x;
        currentVelocity.y = cacheV.y;
        currentVelocity.z = cacheV.z;
        var vector4 = Vector3Ex.Add(target2, Vector3Ex.Scale(Vector3Ex.Add(vector, vector3), d));
        if (Vector3Ex.Dot(Vector3Ex.Subtract(vector2, current), Vector3Ex.Subtract(vector4, vector2)) > 0) {
            vector4 = vector2;
            currentVelocity.x = 0;
            currentVelocity.y = 0;
            currentVelocity.z = 0;
        }
        return vector4;
    }
    static Fix(vec, limit) {
        if (Math.abs(vec.x) < limit) {
            vec.x = 0;
        }
        if (Math.abs(vec.y) < limit) {
            vec.y = 0;
        }
        if (Math.abs(vec.z) < limit) {
            vec.z = 0;
        }
    }
    static IsSame(v1, v2) {
        return v1.x == v2.x && v1.y == v2.y && v1.z == v2.z;
    }
    static WrapFromUnity(x, y, z) {
        return new Laya.Vector3(-x, y, z);
    }
    /**
     * 计算带加速度的移动位置
     * @param time
     * @param startVelocity
     * @param aSpeed
     * @param startPos
     */
    static CalcPosWithASpeed(time, startVelocity, aSpeed, startPos) {
        let xt = Vector3Ex.Scale(startVelocity, time);
        let at2 = Vector3Ex.Scale(aSpeed, time * time / 2);
        return Vector3Ex.Add(xt, at2, startPos);
    }
    /**
     * 重置空间信息
     * @param trs
     */
    static InitialTransform(trs) {
        trs.localPosition = Vector3Ex.s_zero;
        trs.localScale = Vector3Ex.s_one;
        trs.rotationEuler = Vector3Ex.s_zero;
    }
    /**
     * 判定目标点，是否在以中心点为扇心，指定扇形内
     * @param center 扇形中心点
     * @param target 目标点
     * @param range 扇形半径
     * @param halfAngle 扇形半角
     * @param forward 扇形正向
     * @param axis 垂直于扇面的轴向
     */
    static InSector(center, target, range, halfAngle, forward, axis) {
        let dir = Vector3Ex.temp;
        dir.setValue((target.x - center.x) * (1 - axis.x), (target.y - center.y) * (1 - axis.y), (target.z - center.z) * (1 - axis.z));
        if (Vector3Ex.MagnitudeSqrt(dir) <= range * range) {
            let angle = Vector3Ex.Angle(forward, dir, axis);
            if (angle <= halfAngle) {
                return true;
            }
        }
        return false;
    }
}
Vector3Ex.cacheVec0 = new Laya.Vector3();


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

/***/ "./src/LTGame/Material/HeightFogManager.ts":
/*!*************************************************!*\
  !*** ./src/LTGame/Material/HeightFogManager.ts ***!
  \*************************************************/
/*! exports provided: HeightFogManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeightFogManager", function() { return HeightFogManager; });
/* harmony import */ var _LTUtils_Vector3Ex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LTUtils/Vector3Ex */ "./src/LTGame/LTUtils/Vector3Ex.ts");

class HeightFogManager {
    constructor() {
        this._fogColor = new Laya.Vector3(0, 0, 0);
        this._fogStartHeight = 5;
        this._fogDistance = 5;
        this._matList = [];
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new HeightFogManager();
        }
        return this._instance;
    }
    get fogColor() {
        return this._fogColor;
    }
    set fogColor(value) {
        if (_LTUtils_Vector3Ex__WEBPACK_IMPORTED_MODULE_0__["default"].IsSame(this._fogColor, value))
            return;
        this._fogColor = value;
        for (let i = 0; i < this._matList.length; ++i) {
            let mat = this._matList[i];
            if (mat != null) {
                mat.heightFogColor = this._fogColor;
            }
        }
    }
    get fogStartHeight() {
        return this._fogStartHeight;
    }
    set fogStartHeight(value) {
        if (this._fogStartHeight == value)
            return;
        this._fogStartHeight = value;
        for (let i = 0; i < this._matList.length; ++i) {
            let mat = this._matList[i];
            if (mat != null) {
                mat.heightFogStartY = this._fogStartHeight;
            }
        }
    }
    get fogDistance() {
        return this._fogDistance;
    }
    set fogDistance(value) {
        if (this._fogDistance == value)
            return;
        this._fogDistance = value;
        for (let i = 0; i < this._matList.length; ++i) {
            let mat = this._matList[i];
            if (mat != null) {
                mat.heightFogDistance = this._fogDistance;
            }
        }
    }
    RegistFogMat(mat) {
        this._matList.push(mat);
        mat.heightFogColor = this._fogColor;
        mat.heightFogStartY = this._fogStartHeight;
        mat.heightFogDistance = this._fogDistance;
    }
}


/***/ }),

/***/ "./src/LTGame/Material/LTBlinnPhong_HeightFog.ts":
/*!*******************************************************!*\
  !*** ./src/LTGame/Material/LTBlinnPhong_HeightFog.ts ***!
  \*******************************************************/
/*! exports provided: LTBlinnPhong_HeightFog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTBlinnPhong_HeightFog", function() { return LTBlinnPhong_HeightFog; });
/* harmony import */ var _shader_LT_Mesh_BlinnPhong_DepthFog_vs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shader/LT-Mesh-BlinnPhong-DepthFog.vs */ "./src/LTGame/Material/shader/LT-Mesh-BlinnPhong-DepthFog.vs");
/* harmony import */ var _shader_LT_Mesh_BlinnPhong_DepthFog_fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shader/LT-Mesh-BlinnPhong-DepthFog.fs */ "./src/LTGame/Material/shader/LT-Mesh-BlinnPhong-DepthFog.fs");
/* harmony import */ var _shader_Mesh_BlinnPhongShadowCaster_vs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shader/Mesh-BlinnPhongShadowCaster.vs */ "./src/LTGame/Material/shader/Mesh-BlinnPhongShadowCaster.vs");
/* harmony import */ var _shader_Mesh_BlinnPhongShadowCaster_fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shader/Mesh-BlinnPhongShadowCaster.fs */ "./src/LTGame/Material/shader/Mesh-BlinnPhongShadowCaster.fs");
/* harmony import */ var _HeightFogManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeightFogManager */ "./src/LTGame/Material/HeightFogManager.ts");





class LTBlinnPhong_HeightFog extends Laya.Material {
    /**
     * 创建一个 <code>BlinnPhongMaterial</code> 实例。
     */
    constructor() {
        super();
        this._enableVertexColor = false;
        LTBlinnPhong_HeightFog.InitShader();
        this.setShaderName(LTBlinnPhong_HeightFog._shaderName);
        this._albedoIntensity = 1.0;
        this._albedoColor = new Laya.Vector4(1.0, 1.0, 1.0, 1.0);
        let sv = this._shaderValues;
        sv.setVector(LTBlinnPhong_HeightFog.ALBEDO_COLOR, new Laya.Vector4(1.0, 1.0, 1.0, 1.0));
        sv.setVector(LTBlinnPhong_HeightFog.MATERIAL_SPECULAR, new Laya.Vector4(1.0, 1.0, 1.0, 1.0));
        sv.setNumber(LTBlinnPhong_HeightFog.SHININESS, 0.078125);
        sv.setNumber(Laya.Material.ALPHATESTVALUE, 0.5);
        sv.setVector(LTBlinnPhong_HeightFog.TILING_OFFSET, new Laya.Vector4(1.0, 1.0, 0.0, 0.0));
        this._enableLighting = true;
        this.renderMode = LTBlinnPhong_HeightFog.RENDERMODE_OPAQUE;
        _HeightFogManager__WEBPACK_IMPORTED_MODULE_4__["HeightFogManager"].instance.RegistFogMat(this);
    }
    /**
     * @internal
     */
    static __initDefine__() {
        LTBlinnPhong_HeightFog.SHADERDEFINE_DIFFUSEMAP = Laya.Shader3D.getDefineByName("DIFFUSEMAP");
        LTBlinnPhong_HeightFog.SHADERDEFINE_NORMALMAP = Laya.Shader3D.getDefineByName("NORMALMAP");
        LTBlinnPhong_HeightFog.SHADERDEFINE_SPECULARMAP = Laya.Shader3D.getDefineByName("SPECULARMAP");
        LTBlinnPhong_HeightFog.SHADERDEFINE_TILINGOFFSET = Laya.Shader3D.getDefineByName("TILINGOFFSET");
        LTBlinnPhong_HeightFog.SHADERDEFINE_ENABLEVERTEXCOLOR = Laya.Shader3D.getDefineByName("ENABLEVERTEXCOLOR");
    }
    /**
     * 高度雾范围
     */
    get heightFogDistance() {
        return this._heightFogDistance;
    }
    set heightFogDistance(value) {
        this._heightFogDistance = value;
        this._shaderValues.setNumber(LTBlinnPhong_HeightFog.HEIGHT_FOG_DISTANCE, value);
    }
    /**
     * 高度雾开始高度
     */
    get heightFogStartY() {
        return this._heightFogStartY;
    }
    set heightFogStartY(value) {
        this._heightFogStartY = value;
        this._shaderValues.setNumber(LTBlinnPhong_HeightFog.HEIGHT_FOG_STARTY, value);
    }
    /**
     * 高度雾颜色
     */
    get heightFogColor() {
        return this._heightFogColor;
    }
    set heightFogColor(value) {
        this._heightFogColor = value;
        this._shaderValues.setVector3(LTBlinnPhong_HeightFog.HEIGHT_FOG_COLOR, value);
    }
    /**
     * @internal
     */
    get _ColorR() {
        return this._albedoColor.x;
    }
    set _ColorR(value) {
        this._albedoColor.x = value;
        this.albedoColor = this._albedoColor;
    }
    /**
     * @internal
     */
    get _ColorG() {
        return this._albedoColor.y;
    }
    set _ColorG(value) {
        this._albedoColor.y = value;
        this.albedoColor = this._albedoColor;
    }
    /**
     * @internal
     */
    get _ColorB() {
        return this._albedoColor.z;
    }
    set _ColorB(value) {
        this._albedoColor.z = value;
        this.albedoColor = this._albedoColor;
    }
    /**
     * @internal
     */
    get _ColorA() {
        return this._albedoColor.w;
    }
    set _ColorA(value) {
        this._albedoColor.w = value;
        this.albedoColor = this._albedoColor;
    }
    /**
     * @internal
     */
    get _Color() {
        return this._shaderValues.getVector(LTBlinnPhong_HeightFog.ALBEDO_COLOR);
    }
    set _Color(value) {
        this.albedoColor = value;
    }
    /**
     * @internal
     */
    get _SpecColorR() {
        return this._shaderValues.getVector(LTBlinnPhong_HeightFog.MATERIAL_SPECULAR).x;
    }
    set _SpecColorR(value) {
        this._shaderValues.getVector(LTBlinnPhong_HeightFog.MATERIAL_SPECULAR).x = value;
    }
    /**
     * @internal
     */
    get _SpecColorG() {
        return this._shaderValues.getVector(LTBlinnPhong_HeightFog.MATERIAL_SPECULAR).y;
    }
    set _SpecColorG(value) {
        this._shaderValues.getVector(LTBlinnPhong_HeightFog.MATERIAL_SPECULAR).y = value;
    }
    /**
     * @internal
     */
    get _SpecColorB() {
        return this._shaderValues.getVector(LTBlinnPhong_HeightFog.MATERIAL_SPECULAR).z;
    }
    set _SpecColorB(value) {
        this._shaderValues.getVector(LTBlinnPhong_HeightFog.MATERIAL_SPECULAR).z = value;
    }
    /**
     * @internal
     */
    get _SpecColorA() {
        return this._shaderValues.getVector(LTBlinnPhong_HeightFog.MATERIAL_SPECULAR).w;
    }
    set _SpecColorA(value) {
        this._shaderValues.getVector(LTBlinnPhong_HeightFog.MATERIAL_SPECULAR).w = value;
    }
    /**
     * @internal
     */
    get _SpecColor() {
        return this._shaderValues.getVector(LTBlinnPhong_HeightFog.MATERIAL_SPECULAR);
    }
    set _SpecColor(value) {
        this.specularColor = value;
    }
    /**
     * @internal
     */
    get _AlbedoIntensity() {
        return this._albedoIntensity;
    }
    set _AlbedoIntensity(value) {
        if (this._albedoIntensity !== value) {
            var finalAlbedo = this._shaderValues.getVector(LTBlinnPhong_HeightFog.ALBEDO_COLOR);
            Laya.Vector4.scale(this._albedoColor, value, finalAlbedo);
            this._albedoIntensity = value;
            this._shaderValues.setVector(LTBlinnPhong_HeightFog.ALBEDO_COLOR, finalAlbedo); //修改值后必须调用此接口,否则NATIVE不生效
        }
    }
    /**
     * @internal
     */
    get _Shininess() {
        return this._shaderValues.getNumber(LTBlinnPhong_HeightFog.SHININESS);
    }
    set _Shininess(value) {
        value = Math.max(0.0, Math.min(1.0, value));
        this._shaderValues.setNumber(LTBlinnPhong_HeightFog.SHININESS, value);
    }
    /**
     * @internal
     */
    get _MainTex_STX() {
        return this._shaderValues.getVector(LTBlinnPhong_HeightFog.TILING_OFFSET).x;
    }
    set _MainTex_STX(x) {
        var tilOff = this._shaderValues.getVector(LTBlinnPhong_HeightFog.TILING_OFFSET);
        tilOff.x = x;
        this.tilingOffset = tilOff;
    }
    /**
     * @internal
     */
    get _MainTex_STY() {
        return this._shaderValues.getVector(LTBlinnPhong_HeightFog.TILING_OFFSET).y;
    }
    set _MainTex_STY(y) {
        var tilOff = this._shaderValues.getVector(LTBlinnPhong_HeightFog.TILING_OFFSET);
        tilOff.y = y;
        this.tilingOffset = tilOff;
    }
    /**
     * @internal
     */
    get _MainTex_STZ() {
        return this._shaderValues.getVector(LTBlinnPhong_HeightFog.TILING_OFFSET).z;
    }
    set _MainTex_STZ(z) {
        var tilOff = this._shaderValues.getVector(LTBlinnPhong_HeightFog.TILING_OFFSET);
        tilOff.z = z;
        this.tilingOffset = tilOff;
    }
    /**
     * @internal
     */
    get _MainTex_STW() {
        return this._shaderValues.getVector(LTBlinnPhong_HeightFog.TILING_OFFSET).w;
    }
    set _MainTex_STW(w) {
        var tilOff = this._shaderValues.getVector(LTBlinnPhong_HeightFog.TILING_OFFSET);
        tilOff.w = w;
        this.tilingOffset = tilOff;
    }
    /**
     * @internal
     */
    get _MainTex_ST() {
        return this._shaderValues.getVector(LTBlinnPhong_HeightFog.TILING_OFFSET);
    }
    set _MainTex_ST(value) {
        this.tilingOffset = value;
    }
    /**
     * @internal
     */
    get _Cutoff() {
        return this.alphaTestValue;
    }
    set _Cutoff(value) {
        this.alphaTestValue = value;
    }
    /**
     * 设置渲染模式。
     */
    set renderMode(value) {
        switch (value) {
            case LTBlinnPhong_HeightFog.RENDERMODE_OPAQUE:
                this.alphaTest = false;
                this.renderQueue = Laya.Material.RENDERQUEUE_OPAQUE;
                this.depthWrite = true;
                this.cull = Laya.RenderState.CULL_BACK;
                this.blend = Laya.RenderState.BLEND_DISABLE;
                this.depthTest = Laya.RenderState.DEPTHTEST_LESS;
                break;
            case LTBlinnPhong_HeightFog.RENDERMODE_CUTOUT:
                this.renderQueue = Laya.Material.RENDERQUEUE_ALPHATEST;
                this.alphaTest = true;
                this.depthWrite = true;
                this.cull = Laya.RenderState.CULL_BACK;
                this.blend = Laya.RenderState.BLEND_DISABLE;
                this.depthTest = Laya.RenderState.DEPTHTEST_LESS;
                break;
            case LTBlinnPhong_HeightFog.RENDERMODE_TRANSPARENT:
                this.renderQueue = Laya.Material.RENDERQUEUE_TRANSPARENT;
                this.alphaTest = false;
                this.depthWrite = false;
                this.cull = Laya.RenderState.CULL_BACK;
                this.blend = Laya.RenderState.BLEND_ENABLE_ALL;
                this.blendSrc = Laya.RenderState.BLENDPARAM_SRC_ALPHA;
                this.blendDst = Laya.RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA;
                this.depthTest = Laya.RenderState.DEPTHTEST_LESS;
                break;
            default:
                throw new Error("Material:renderMode value error.");
        }
    }
    /**
     * 是否支持顶点色。
     */
    get enableVertexColor() {
        return this._enableVertexColor;
    }
    set enableVertexColor(value) {
        this._enableVertexColor = value;
        if (value)
            this._shaderValues.addDefine(LTBlinnPhong_HeightFog.SHADERDEFINE_ENABLEVERTEXCOLOR);
        else
            this._shaderValues.removeDefine(LTBlinnPhong_HeightFog.SHADERDEFINE_ENABLEVERTEXCOLOR);
    }
    /**
     * 纹理平铺和偏移X分量。
     */
    get tilingOffsetX() {
        return this._MainTex_STX;
    }
    set tilingOffsetX(x) {
        this._MainTex_STX = x;
    }
    /**
     * 纹理平铺和偏移Y分量。
     */
    get tilingOffsetY() {
        return this._MainTex_STY;
    }
    set tilingOffsetY(y) {
        this._MainTex_STY = y;
    }
    /**
     * 纹理平铺和偏移Z分量。
     */
    get tilingOffsetZ() {
        return this._MainTex_STZ;
    }
    set tilingOffsetZ(z) {
        this._MainTex_STZ = z;
    }
    /**
     * 纹理平铺和偏移W分量。
     */
    get tilingOffsetW() {
        return this._MainTex_STW;
    }
    set tilingOffsetW(w) {
        this._MainTex_STW = w;
    }
    /**
     * 纹理平铺和偏移。
     */
    get tilingOffset() {
        return this._shaderValues.getVector(LTBlinnPhong_HeightFog.TILING_OFFSET);
    }
    set tilingOffset(value) {
        if (value) {
            if (value.x != 1 || value.y != 1 || value.z != 0 || value.w != 0)
                this._shaderValues.addDefine(LTBlinnPhong_HeightFog.SHADERDEFINE_TILINGOFFSET);
            else
                this._shaderValues.removeDefine(LTBlinnPhong_HeightFog.SHADERDEFINE_TILINGOFFSET);
        }
        else {
            this._shaderValues.removeDefine(LTBlinnPhong_HeightFog.SHADERDEFINE_TILINGOFFSET);
        }
        this._shaderValues.setVector(LTBlinnPhong_HeightFog.TILING_OFFSET, value);
    }
    /**
     * 反照率颜色R分量。
     */
    get albedoColorR() {
        return this._ColorR;
    }
    set albedoColorR(value) {
        this._ColorR = value;
    }
    /**
     * 反照率颜色G分量。
     */
    get albedoColorG() {
        return this._ColorG;
    }
    set albedoColorG(value) {
        this._ColorG = value;
    }
    /**
     * 反照率颜色B分量。
     */
    get albedoColorB() {
        return this._ColorB;
    }
    set albedoColorB(value) {
        this._ColorB = value;
    }
    /**
     * 反照率颜色Z分量。
     */
    get albedoColorA() {
        return this._ColorA;
    }
    set albedoColorA(value) {
        this._ColorA = value;
    }
    /**
     * 反照率颜色。
     */
    get albedoColor() {
        return this._albedoColor;
    }
    set albedoColor(value) {
        var finalAlbedo = this._shaderValues.getVector(LTBlinnPhong_HeightFog.ALBEDO_COLOR);
        Laya.Vector4.scale(value, this._albedoIntensity, finalAlbedo);
        this._albedoColor = value;
        this._shaderValues.setVector(LTBlinnPhong_HeightFog.ALBEDO_COLOR, finalAlbedo); //修改值后必须调用此接口,否则NATIVE不生效
    }
    /**
     * 反照率强度。
     */
    get albedoIntensity() {
        return this._albedoIntensity;
    }
    set albedoIntensity(value) {
        this._AlbedoIntensity = value;
    }
    /**
     * 高光颜色R轴分量。
     */
    get specularColorR() {
        return this._SpecColorR;
    }
    set specularColorR(value) {
        this._SpecColorR = value;
    }
    /**
     * 高光颜色G分量。
     */
    get specularColorG() {
        return this._SpecColorG;
    }
    set specularColorG(value) {
        this._SpecColorG = value;
    }
    /**
     * 高光颜色B分量。
     */
    get specularColorB() {
        return this._SpecColorB;
    }
    set specularColorB(value) {
        this._SpecColorB = value;
    }
    /**
     * 高光颜色A分量。
     */
    get specularColorA() {
        return this._SpecColorA;
    }
    set specularColorA(value) {
        this._SpecColorA = value;
    }
    /**
     * 高光颜色。
     */
    get specularColor() {
        return this._shaderValues.getVector(LTBlinnPhong_HeightFog.MATERIAL_SPECULAR);
    }
    set specularColor(value) {
        this._shaderValues.setVector(LTBlinnPhong_HeightFog.MATERIAL_SPECULAR, value);
    }
    /**
     * 高光强度,范围为0到1。
     */
    get shininess() {
        return this._Shininess;
    }
    set shininess(value) {
        this._Shininess = value;
    }
    /**
     * 反照率贴图。
     */
    get albedoTexture() {
        return this._shaderValues.getTexture(LTBlinnPhong_HeightFog.DIFFUSE_TEXTURE);
    }
    set albedoTexture(value) {
        if (value)
            this._shaderValues.addDefine(LTBlinnPhong_HeightFog.SHADERDEFINE_DIFFUSEMAP);
        else
            this._shaderValues.removeDefine(LTBlinnPhong_HeightFog.SHADERDEFINE_DIFFUSEMAP);
        this._shaderValues.setTexture(LTBlinnPhong_HeightFog.DIFFUSE_TEXTURE, value);
    }
    /**
     * 法线贴图。
     */
    get normalTexture() {
        return this._shaderValues.getTexture(LTBlinnPhong_HeightFog.NORMAL_TEXTURE);
    }
    set normalTexture(value) {
        if (value)
            this._shaderValues.addDefine(LTBlinnPhong_HeightFog.SHADERDEFINE_NORMALMAP);
        else
            this._shaderValues.removeDefine(LTBlinnPhong_HeightFog.SHADERDEFINE_NORMALMAP);
        this._shaderValues.setTexture(LTBlinnPhong_HeightFog.NORMAL_TEXTURE, value);
    }
    /**
     * 高光贴图。
     */
    get specularTexture() {
        return this._shaderValues.getTexture(LTBlinnPhong_HeightFog.SPECULAR_TEXTURE);
    }
    set specularTexture(value) {
        if (value)
            this._shaderValues.addDefine(LTBlinnPhong_HeightFog.SHADERDEFINE_SPECULARMAP);
        else
            this._shaderValues.removeDefine(LTBlinnPhong_HeightFog.SHADERDEFINE_SPECULARMAP);
        this._shaderValues.setTexture(LTBlinnPhong_HeightFog.SPECULAR_TEXTURE, value);
    }
    /**
     * 是否写入深度。
     */
    get depthWrite() {
        return this._shaderValues.getBool(LTBlinnPhong_HeightFog.DEPTH_WRITE);
    }
    set depthWrite(value) {
        this._shaderValues.setBool(LTBlinnPhong_HeightFog.DEPTH_WRITE, value);
    }
    /**
     * 剔除方式。
     */
    get cull() {
        return this._shaderValues.getInt(LTBlinnPhong_HeightFog.CULL);
    }
    set cull(value) {
        this._shaderValues.setInt(LTBlinnPhong_HeightFog.CULL, value);
    }
    /**
     * 混合方式。
     */
    get blend() {
        return this._shaderValues.getInt(LTBlinnPhong_HeightFog.BLEND);
    }
    set blend(value) {
        this._shaderValues.setInt(LTBlinnPhong_HeightFog.BLEND, value);
    }
    /**
     * 混合源。
     */
    get blendSrc() {
        return this._shaderValues.getInt(LTBlinnPhong_HeightFog.BLEND_SRC);
    }
    set blendSrc(value) {
        this._shaderValues.setInt(LTBlinnPhong_HeightFog.BLEND_SRC, value);
    }
    /**
     * 混合目标。
     */
    get blendDst() {
        return this._shaderValues.getInt(LTBlinnPhong_HeightFog.BLEND_DST);
    }
    set blendDst(value) {
        this._shaderValues.setInt(LTBlinnPhong_HeightFog.BLEND_DST, value);
    }
    /**
     * 深度测试方式。
     */
    get depthTest() {
        return this._shaderValues.getInt(LTBlinnPhong_HeightFog.DEPTH_TEST);
    }
    set depthTest(value) {
        this._shaderValues.setInt(LTBlinnPhong_HeightFog.DEPTH_TEST, value);
    }
    static InitShader() {
        if (this._isInited)
            return;
        this._isInited = true;
        this.__initDefine__();
        //BLINNPHONG
        let attributeMap = {
            'a_Position': Laya.VertexMesh.MESH_POSITION0,
            'a_Color': Laya.VertexMesh.MESH_COLOR0,
            'a_Normal': Laya.VertexMesh.MESH_NORMAL0,
            'a_Texcoord0': Laya.VertexMesh.MESH_TEXTURECOORDINATE0,
            'a_Texcoord1': Laya.VertexMesh.MESH_TEXTURECOORDINATE1,
            'a_BoneWeights': Laya.VertexMesh.MESH_BLENDWEIGHT0,
            'a_BoneIndices': Laya.VertexMesh.MESH_BLENDINDICES0,
            'a_Tangent0': Laya.VertexMesh.MESH_TANGENT0,
            'a_MvpMatrix': Laya.VertexMesh.MESH_MVPMATRIX_ROW0,
            'a_WorldMat': Laya.VertexMesh.MESH_WORLDMATRIX_ROW0
        };
        let uniformMap = {
            'u_HeightFogColor': Laya.Shader3D.PERIOD_MATERIAL,
            'u_HeightFogStartY': Laya.Shader3D.PERIOD_MATERIAL,
            'u_HeightFogDistance': Laya.Shader3D.PERIOD_MATERIAL,
            'u_Bones': Laya.Shader3D.PERIOD_CUSTOM,
            'u_DiffuseTexture': Laya.Shader3D.PERIOD_MATERIAL,
            'u_SpecularTexture': Laya.Shader3D.PERIOD_MATERIAL,
            'u_NormalTexture': Laya.Shader3D.PERIOD_MATERIAL,
            'u_AlphaTestValue': Laya.Shader3D.PERIOD_MATERIAL,
            'u_DiffuseColor': Laya.Shader3D.PERIOD_MATERIAL,
            'u_MaterialSpecular': Laya.Shader3D.PERIOD_MATERIAL,
            'u_Shininess': Laya.Shader3D.PERIOD_MATERIAL,
            'u_TilingOffset': Laya.Shader3D.PERIOD_MATERIAL,
            'u_WorldMat': Laya.Shader3D.PERIOD_SPRITE,
            'u_MvpMatrix': Laya.Shader3D.PERIOD_SPRITE,
            'u_LightmapScaleOffset': Laya.Shader3D.PERIOD_SPRITE,
            'u_LightMap': Laya.Shader3D.PERIOD_SPRITE,
            'u_LightMapDirection': Laya.Shader3D.PERIOD_SPRITE,
            'u_CameraPos': Laya.Shader3D.PERIOD_CAMERA,
            'u_Viewport': Laya.Shader3D.PERIOD_CAMERA,
            'u_ProjectionParams': Laya.Shader3D.PERIOD_CAMERA,
            'u_View': Laya.Shader3D.PERIOD_CAMERA,
            'u_ViewProjection': Laya.Shader3D.PERIOD_CAMERA,
            'u_ReflectTexture': Laya.Shader3D.PERIOD_SCENE,
            'u_ReflectIntensity': Laya.Shader3D.PERIOD_SCENE,
            'u_FogStart': Laya.Shader3D.PERIOD_SCENE,
            'u_FogRange': Laya.Shader3D.PERIOD_SCENE,
            'u_FogColor': Laya.Shader3D.PERIOD_SCENE,
            'u_DirationLightCount': Laya.Shader3D.PERIOD_SCENE,
            'u_LightBuffer': Laya.Shader3D.PERIOD_SCENE,
            'u_LightClusterBuffer': Laya.Shader3D.PERIOD_SCENE,
            'u_AmbientColor': Laya.Shader3D.PERIOD_SCENE,
            'u_ShadowBias': Laya.Shader3D.PERIOD_SCENE,
            'u_ShadowLightDirection': Laya.Shader3D.PERIOD_SCENE,
            'u_ShadowMap': Laya.Shader3D.PERIOD_SCENE,
            'u_ShadowParams': Laya.Shader3D.PERIOD_SCENE,
            'u_ShadowSplitSpheres': Laya.Shader3D.PERIOD_SCENE,
            'u_ShadowMatrices': Laya.Shader3D.PERIOD_SCENE,
            'u_ShadowMapSize': Laya.Shader3D.PERIOD_SCENE,
            'u_SpotShadowMap': Laya.Shader3D.PERIOD_SCENE,
            'u_SpotViewProjectMatrix': Laya.Shader3D.PERIOD_SCENE,
            'u_ShadowLightPosition': Laya.Shader3D.PERIOD_SCENE,
            //GI
            'u_AmbientSHAr': Laya.Shader3D.PERIOD_SCENE,
            'u_AmbientSHAg': Laya.Shader3D.PERIOD_SCENE,
            'u_AmbientSHAb': Laya.Shader3D.PERIOD_SCENE,
            'u_AmbientSHBr': Laya.Shader3D.PERIOD_SCENE,
            'u_AmbientSHBg': Laya.Shader3D.PERIOD_SCENE,
            'u_AmbientSHBb': Laya.Shader3D.PERIOD_SCENE,
            'u_AmbientSHC': Laya.Shader3D.PERIOD_SCENE,
            //legacy lighting
            'u_DirectionLight.color': Laya.Shader3D.PERIOD_SCENE,
            'u_DirectionLight.direction': Laya.Shader3D.PERIOD_SCENE,
            'u_PointLight.position': Laya.Shader3D.PERIOD_SCENE,
            'u_PointLight.range': Laya.Shader3D.PERIOD_SCENE,
            'u_PointLight.color': Laya.Shader3D.PERIOD_SCENE,
            'u_SpotLight.position': Laya.Shader3D.PERIOD_SCENE,
            'u_SpotLight.direction': Laya.Shader3D.PERIOD_SCENE,
            'u_SpotLight.range': Laya.Shader3D.PERIOD_SCENE,
            'u_SpotLight.spot': Laya.Shader3D.PERIOD_SCENE,
            'u_SpotLight.color': Laya.Shader3D.PERIOD_SCENE
        };
        let stateMap = {
            's_Cull': Laya.Shader3D.RENDER_STATE_CULL,
            's_Blend': Laya.Shader3D.RENDER_STATE_BLEND,
            's_BlendSrc': Laya.Shader3D.RENDER_STATE_BLEND_SRC,
            's_BlendDst': Laya.Shader3D.RENDER_STATE_BLEND_DST,
            's_DepthTest': Laya.Shader3D.RENDER_STATE_DEPTH_TEST,
            's_DepthWrite': Laya.Shader3D.RENDER_STATE_DEPTH_WRITE
        };
        let customShader = Laya.Shader3D.add(LTBlinnPhong_HeightFog._shaderName, null, null, true);
        let subShader = new Laya.SubShader(attributeMap, uniformMap);
        customShader.addSubShader(subShader);
        subShader.addShaderPass(_shader_LT_Mesh_BlinnPhong_DepthFog_vs__WEBPACK_IMPORTED_MODULE_0__["default"], _shader_LT_Mesh_BlinnPhong_DepthFog_fs__WEBPACK_IMPORTED_MODULE_1__["default"], stateMap, "Forward");
        let shaderPass = subShader.addShaderPass(_shader_Mesh_BlinnPhongShadowCaster_vs__WEBPACK_IMPORTED_MODULE_2__["default"], _shader_Mesh_BlinnPhongShadowCaster_fs__WEBPACK_IMPORTED_MODULE_3__["default"], stateMap, "ShadowCaster");
    }
    static CreateFromBlinnPhong(mat) {
        let newMat = new LTBlinnPhong_HeightFog();
        newMat.albedoColor = mat.albedoColor;
        newMat.albedoIntensity = mat.albedoIntensity;
        newMat.albedoTexture = mat.albedoTexture;
        newMat.normalTexture = mat.normalTexture;
        newMat.specularColor = mat.specularColor;
        newMat.specularTexture = mat.specularTexture;
        return newMat;
    }
    /**
     * 克隆。
     * @return	 克隆副本。
     * @override
     */
    clone() {
        var dest = new LTBlinnPhong_HeightFog();
        this.cloneTo(dest);
        return dest;
    }
    /**
     * @inheritDoc
     * @override
     */
    cloneTo(destObject) {
        super.cloneTo(destObject);
        var destMaterial = destObject;
        destMaterial._enableLighting = this._enableLighting;
        destMaterial._albedoIntensity = this._albedoIntensity;
        destMaterial._enableVertexColor = this._enableVertexColor;
        this._albedoColor.cloneTo(destMaterial._albedoColor);
    }
}
/**渲染状态_不透明。*/
LTBlinnPhong_HeightFog.RENDERMODE_OPAQUE = 0;
/**渲染状态_阿尔法测试。*/
LTBlinnPhong_HeightFog.RENDERMODE_CUTOUT = 1;
/**渲染状态_透明混合。*/
LTBlinnPhong_HeightFog.RENDERMODE_TRANSPARENT = 2;
LTBlinnPhong_HeightFog.DIFFUSE_TEXTURE = Laya.Shader3D.propertyNameToID("u_DiffuseTexture");
LTBlinnPhong_HeightFog.NORMAL_TEXTURE = Laya.Shader3D.propertyNameToID("u_NormalTexture");
LTBlinnPhong_HeightFog.SPECULAR_TEXTURE = Laya.Shader3D.propertyNameToID("u_SpecularTexture");
LTBlinnPhong_HeightFog.ALBEDO_COLOR = Laya.Shader3D.propertyNameToID("u_DiffuseColor");
LTBlinnPhong_HeightFog.MATERIAL_SPECULAR = Laya.Shader3D.propertyNameToID("u_MaterialSpecular");
LTBlinnPhong_HeightFog.SHININESS = Laya.Shader3D.propertyNameToID("u_Shininess");
LTBlinnPhong_HeightFog.TILING_OFFSET = Laya.Shader3D.propertyNameToID("u_TilingOffset");
LTBlinnPhong_HeightFog.CULL = Laya.Shader3D.propertyNameToID("s_Cull");
LTBlinnPhong_HeightFog.BLEND = Laya.Shader3D.propertyNameToID("s_Blend");
LTBlinnPhong_HeightFog.BLEND_SRC = Laya.Shader3D.propertyNameToID("s_BlendSrc");
LTBlinnPhong_HeightFog.BLEND_DST = Laya.Shader3D.propertyNameToID("s_BlendDst");
LTBlinnPhong_HeightFog.DEPTH_TEST = Laya.Shader3D.propertyNameToID("s_DepthTest");
LTBlinnPhong_HeightFog.DEPTH_WRITE = Laya.Shader3D.propertyNameToID("s_DepthWrite");
LTBlinnPhong_HeightFog.HEIGHT_FOG_COLOR = Laya.Shader3D.propertyNameToID("u_HeightFogColor");
LTBlinnPhong_HeightFog.HEIGHT_FOG_STARTY = Laya.Shader3D.propertyNameToID("u_HeightFogStartY");
LTBlinnPhong_HeightFog.HEIGHT_FOG_DISTANCE = Laya.Shader3D.propertyNameToID("u_HeightFogDistance");
LTBlinnPhong_HeightFog._shaderName = "LTBlinnPhong_HeightFog";


/***/ }),

/***/ "./src/LTGame/Material/shader/LT-Mesh-BlinnPhong-DepthFog.fs":
/*!*******************************************************************!*\
  !*** ./src/LTGame/Material/shader/LT-Mesh-BlinnPhong-DepthFog.fs ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#ifdef GL_FRAGMENT_PRECISION_HIGH\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n\r\n#include \"Lighting.glsl\";\r\n#include \"Shadow.glsl\"\r\n\r\nuniform vec4 u_DiffuseColor;\r\n\r\n#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\r\n\tvarying vec4 v_Color;\r\n#endif\r\n\r\n#ifdef ALPHATEST\r\n\tuniform float u_AlphaTestValue;\r\n#endif\r\n\r\n#ifdef DIFFUSEMAP\r\n\tuniform sampler2D u_DiffuseTexture;\r\n#endif\r\n\r\n\r\n#if defined(DIFFUSEMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))\r\n\tvarying vec2 v_Texcoord0;\r\n#endif\r\n\r\n#ifdef LIGHTMAP\r\n\tvarying vec2 v_LightMapUV;\r\n\tuniform sampler2D u_LightMap;\r\n#endif\r\n\r\nvarying vec3 v_Normal;\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\tvarying vec3 v_ViewDir; \r\n\r\n\tuniform vec3 u_MaterialSpecular;\r\n\tuniform float u_Shininess;\r\n\r\n\t#ifdef LEGACYSINGLELIGHTING\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\tuniform DirectionLight u_DirectionLight;\r\n\t\t#endif\r\n\t\t#ifdef POINTLIGHT\r\n\t\t\tuniform PointLight u_PointLight;\r\n\t\t#endif\r\n\t\t#ifdef SPOTLIGHT\r\n\t\t\tuniform SpotLight u_SpotLight;\r\n\t\t#endif\r\n\t#else\r\n\t\tuniform mat4 u_View;\r\n\t\tuniform vec4 u_ProjectionParams;\r\n\t\tuniform vec4 u_Viewport;\r\n\t\tuniform int u_DirationLightCount;\r\n\t\tuniform sampler2D u_LightBuffer;\r\n\t\tuniform sampler2D u_LightClusterBuffer;\r\n\t#endif\r\n\r\n\t#ifdef SPECULARMAP \r\n\t\tuniform sampler2D u_SpecularTexture;\r\n\t#endif\r\n#endif\r\n\r\n#ifdef NORMALMAP \r\n\tuniform sampler2D u_NormalTexture;\r\n\tvarying vec3 v_Tangent;\r\n\tvarying vec3 v_Binormal;\r\n#endif\r\n\r\n#ifdef FOG\r\n\tuniform float u_FogStart;\r\n\tuniform float u_FogRange;\r\n\tuniform vec3 u_FogColor;\r\n#endif\r\n\r\n#if defined(POINTLIGHT)||defined(SPOTLIGHT)||(defined(CALCULATE_SHADOWS)&&defined(SHADOW_CASCADE))||defined(CALCULATE_SPOTSHADOWS)\r\n\tvarying vec3 v_PositionWorld;\r\n#endif\r\n\r\n\r\n#include \"GlobalIllumination.glsl\";//\"GlobalIllumination.glsl use uniform should at front of this\r\n\r\n#if defined(CALCULATE_SHADOWS)&&!defined(SHADOW_CASCADE)\r\n\tvarying vec4 v_ShadowCoord;\r\n#endif\r\n\r\n#ifdef CALCULATE_SPOTSHADOWS\r\n\tvarying vec4 v_SpotShadowCoord;\r\n#endif\r\n\r\nvarying vec3 v_WolrdPos;\r\nuniform vec3 u_HeightFogColor;\r\nuniform float u_HeightFogStartY;\r\nuniform float u_HeightFogDistance;\r\n\r\nvoid main()\r\n{\r\n\tvec3 normal;//light and SH maybe use normal\r\n\t#if defined(NORMALMAP)\r\n\t\tvec3 normalMapSample = texture2D(u_NormalTexture, v_Texcoord0).rgb;\r\n\t\tnormal = normalize(NormalSampleToWorldSpace(normalMapSample, v_Normal, v_Tangent,v_Binormal));\r\n\t#else\r\n\t\tnormal = normalize(v_Normal);\r\n\t#endif\r\n\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\tvec3 viewDir= normalize(v_ViewDir);\r\n\t#endif\r\n\r\n\tLayaGIInput giInput;\r\n\t#ifdef LIGHTMAP\t\r\n\t\tgiInput.lightmapUV=v_LightMapUV;\r\n\t#endif\r\n\tvec3 globalDiffuse=layaGIBase(giInput,1.0,normal);\r\n\t\r\n\tvec4 mainColor=u_DiffuseColor;\r\n\t#ifdef DIFFUSEMAP\r\n\t\tvec4 difTexColor=texture2D(u_DiffuseTexture, v_Texcoord0);\r\n\t\tmainColor=mainColor*difTexColor;\r\n\t#endif \r\n\t#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\r\n\t\tmainColor=mainColor*v_Color;\r\n\t#endif \r\n    \r\n\t#ifdef ALPHATEST\r\n\t\tif(mainColor.a<u_AlphaTestValue)\r\n\t\t\tdiscard;\r\n\t#endif\r\n  \r\n\t\r\n\tvec3 diffuse = vec3(0.0);\r\n\tvec3 specular= vec3(0.0);\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\tvec3 dif,spe;\r\n\t\t#ifdef SPECULARMAP\r\n\t\t\tvec3 gloss=texture2D(u_SpecularTexture, v_Texcoord0).rgb;\r\n\t\t#else\r\n\t\t\t#ifdef DIFFUSEMAP\r\n\t\t\t\tvec3 gloss=vec3(difTexColor.a);\r\n\t\t\t#else\r\n\t\t\t\tvec3 gloss=vec3(1.0);\r\n\t\t\t#endif\r\n\t\t#endif\r\n\t#endif\r\n\r\n\t\r\n\t\r\n\t#ifdef LEGACYSINGLELIGHTING\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\tLayaAirBlinnPhongDiectionLight(u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,u_DirectionLight,dif,spe);\r\n\t\t\t#ifdef CALCULATE_SHADOWS\r\n\t\t\t\t#ifdef SHADOW_CASCADE\r\n\t\t\t\t\tvec4 shadowCoord = getShadowCoord(vec4(v_PositionWorld,1.0));\r\n\t\t\t\t#else\r\n\t\t\t\t\tvec4 shadowCoord = v_ShadowCoord;\r\n\t\t\t\t#endif\r\n\t\t\t\tfloat shadowAttenuation=sampleShadowmap(shadowCoord);\r\n\t\t\t\tdif *= shadowAttenuation;\r\n\t\t\t\tspe *= shadowAttenuation;\r\n\t\t\t#endif\r\n\t\t\tdiffuse+=dif;\r\n\t\t\tspecular+=spe;\r\n\t\t#endif\r\n\t\r\n\t\t#ifdef POINTLIGHT\r\n\t\t\tLayaAirBlinnPhongPointLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,u_PointLight,dif,spe);\r\n\t\t\tdiffuse+=dif;\r\n\t\t\tspecular+=spe;\r\n\t\t#endif\r\n\r\n\t\t#ifdef SPOTLIGHT\r\n\t\t\tLayaAirBlinnPhongSpotLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,u_SpotLight,dif,spe);\r\n\t\t\t#ifdef CALCULATE_SPOTSHADOWS\r\n\t\t\t\tvec4 spotShadowcoord = v_SpotShadowCoord;\r\n\t\t\t\tfloat spotShadowAttenuation = sampleSpotShadowmap(spotShadowcoord);\r\n\t\t\t\tdif *= shadowAttenuation;\r\n\t\t\t\tspe *= shadowAttenuation;\r\n\t\t\t#endif\r\n\t\t\tdiffuse+=dif;\r\n\t\t\tspecular+=spe;\r\n\t\t#endif\r\n\t#else\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \r\n\t\t\t{\r\n\t\t\t\tif(i >= u_DirationLightCount)\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tDirectionLight directionLight = getDirectionLight(u_LightBuffer,i);\r\n\t\t\t\t#ifdef CALCULATE_SHADOWS\r\n\t\t\t\t\tif(i == 0)\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\t#ifdef SHADOW_CASCADE\r\n\t\t\t\t\t\t\tvec4 shadowCoord = getShadowCoord(vec4(v_PositionWorld,1.0));\r\n\t\t\t\t\t\t#else\r\n\t\t\t\t\t\t\tvec4 shadowCoord = v_ShadowCoord;\r\n\t\t\t\t\t\t#endif\r\n\t\t\t\t\t\tdirectionLight.color *= sampleShadowmap(shadowCoord);\r\n\t\t\t\t\t}\r\n\t\t\t\t#endif\r\n\t\t\t\tLayaAirBlinnPhongDiectionLight(u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,directionLight,dif,spe);\r\n\t\t\t\tdiffuse+=dif;\r\n\t\t\t\tspecular+=spe;\r\n\t\t\t}\r\n\t\t#endif\r\n\t\t#if defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\t\tivec4 clusterInfo =getClusterInfo(u_LightClusterBuffer,u_View,u_Viewport, v_PositionWorld,gl_FragCoord,u_ProjectionParams);\r\n\t\t\t#ifdef POINTLIGHT\r\n\t\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \r\n\t\t\t\t{\r\n\t\t\t\t\tif(i >= clusterInfo.x)//PointLightCount\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tPointLight pointLight = getPointLight(u_LightBuffer,u_LightClusterBuffer,clusterInfo,i);\r\n\t\t\t\t\tLayaAirBlinnPhongPointLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,pointLight,dif,spe);\r\n\t\t\t\t\tdiffuse+=dif;\r\n\t\t\t\t\tspecular+=spe;\r\n\t\t\t\t}\r\n\t\t\t#endif\r\n\t\t\t#ifdef SPOTLIGHT\r\n\t\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \r\n\t\t\t\t{\r\n\t\t\t\t\tif(i >= clusterInfo.y)//SpotLightCount\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tSpotLight spotLight = getSpotLight(u_LightBuffer,u_LightClusterBuffer,clusterInfo,i);\r\n\t\t\t\t\t#ifdef CALCULATE_SPOTSHADOWS\r\n\t\t\t\t\t\tif(i == 0)\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\tvec4 spotShadowcoord = v_SpotShadowCoord;\r\n\t\t\t\t\t\t\tspotLight.color *= sampleSpotShadowmap(spotShadowcoord);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t#endif\r\n\t\t\t\t\tLayaAirBlinnPhongSpotLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,spotLight,dif,spe);\r\n\t\t\t\t\tdiffuse+=dif;\r\n\t\t\t\t\tspecular+=spe;\r\n\t\t\t\t}\r\n\t\t\t#endif\r\n\t\t#endif\r\n\t#endif\r\n\r\n\tgl_FragColor =vec4(mainColor.rgb*(globalDiffuse + diffuse),mainColor.a);\r\n\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\tgl_FragColor.rgb+=specular;\r\n\t#endif\r\n\t  \r\n\t#ifdef FOG\r\n\t\tfloat lerpFact=clamp((1.0/gl_FragCoord.w-u_FogStart)/u_FogRange,0.0,1.0);\r\n\t\tgl_FragColor.rgb=mix(gl_FragColor.rgb,u_FogColor,lerpFact);\r\n\t#endif\r\n\r\n    float heightLerp = clamp((u_HeightFogStartY - v_WolrdPos.y) / u_HeightFogDistance, 0.0, 1.0);\r\n    gl_FragColor.rgb = mix(gl_FragColor.rgb, u_HeightFogColor, heightLerp);\r\n}\r\n\r\n");

/***/ }),

/***/ "./src/LTGame/Material/shader/LT-Mesh-BlinnPhong-DepthFog.vs":
/*!*******************************************************************!*\
  !*** ./src/LTGame/Material/shader/LT-Mesh-BlinnPhong-DepthFog.vs ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#include \"Lighting.glsl\";\r\n#include \"Shadow.glsl\";\r\n\r\nattribute vec4 a_Position;\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_MvpMatrix;\r\n#else\r\n\tuniform mat4 u_MvpMatrix;\r\n#endif\r\n\r\n#if defined(DIFFUSEMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))||(defined(LIGHTMAP)&&defined(UV))\r\n\tattribute vec2 a_Texcoord0;\r\n\tvarying vec2 v_Texcoord0;\r\n#endif\r\n\r\n#if defined(LIGHTMAP)&&defined(UV1)\r\n\tattribute vec2 a_Texcoord1;\r\n#endif\r\n\r\n#ifdef LIGHTMAP\r\n\tuniform vec4 u_LightmapScaleOffset;\r\n\tvarying vec2 v_LightMapUV;\r\n#endif\r\n\r\n#ifdef COLOR\r\n\tattribute vec4 a_Color;\r\n\tvarying vec4 v_Color;\r\n#endif\r\n\r\n#ifdef BONE\r\n\tconst int c_MaxBoneCount = 24;\r\n\tattribute vec4 a_BoneIndices;\r\n\tattribute vec4 a_BoneWeights;\r\n\tuniform mat4 u_Bones[c_MaxBoneCount];\r\n#endif\r\n\r\nattribute vec3 a_Normal;\r\nvarying vec3 v_Normal; \r\n\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\tuniform vec3 u_CameraPos;\r\n\tvarying vec3 v_ViewDir; \r\n#endif\r\n\r\n#if defined(NORMALMAP)\r\n\tattribute vec4 a_Tangent0;\r\n\tvarying vec3 v_Tangent;\r\n\tvarying vec3 v_Binormal;\r\n#endif\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_WorldMat;\r\n#else\r\n\tuniform mat4 u_WorldMat;\r\n#endif\r\n\r\n#if defined(POINTLIGHT)||defined(SPOTLIGHT)||(defined(CALCULATE_SHADOWS)&&defined(SHADOW_CASCADE))||defined(CALCULATE_SPOTSHADOWS)\r\n\tvarying vec3 v_PositionWorld;\r\n#endif\r\n\r\n#if defined(CALCULATE_SHADOWS)&&!defined(SHADOW_CASCADE)\r\n\tvarying vec4 v_ShadowCoord;\r\n#endif\r\n\r\n#ifdef CALCULATE_SPOTSHADOWS\r\n\tvarying vec4 v_SpotShadowCoord;\r\n#endif\r\n\r\n#ifdef TILINGOFFSET\r\n\tuniform vec4 u_TilingOffset;\r\n#endif\r\n\r\nvarying vec3 v_WolrdPos;\r\n\r\nvoid main()\r\n{\r\n\tvec4 position;\r\n\t#ifdef BONE\r\n\t\tmat4 skinTransform = u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\r\n\t\tposition=skinTransform*a_Position;\r\n\t#else\r\n\t\tposition=a_Position;\r\n\t#endif\r\n\r\n\t#ifdef GPU_INSTANCE\r\n\t\tgl_Position = a_MvpMatrix * position;\r\n\t#else\r\n\t\tgl_Position = u_MvpMatrix * position;\r\n\t#endif\r\n\r\n    \r\n\t\r\n\tmat4 worldMat;\r\n\t#ifdef GPU_INSTANCE\r\n\t\tworldMat = a_WorldMat;\r\n\t#else\r\n\t\tworldMat = u_WorldMat;\r\n\t#endif\r\n\r\n\tmat3 worldInvMat;\r\n\t#ifdef BONE\r\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat*skinTransform));\r\n\t#else\r\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat));\r\n\t#endif  \r\n\tv_Normal=normalize(a_Normal*worldInvMat);\r\n\t#if defined(NORMALMAP)\r\n\t\tv_Tangent=normalize(a_Tangent0.xyz*worldInvMat);\r\n\t\tv_Binormal=cross(v_Normal,v_Tangent)*a_Tangent0.w;\r\n\t#endif\r\n\r\n    v_WolrdPos = (worldMat*position).xyz;\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||(defined(CALCULATE_SHADOWS)&&defined(SHADOW_CASCADE))||defined(CALCULATE_SPOTSHADOWS)\r\n\t\tvec3 positionWS = v_WolrdPos;\r\n\t\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\t\tv_ViewDir = u_CameraPos-positionWS;\r\n\t\t#endif\r\n\t\t#if defined(POINTLIGHT)||defined(SPOTLIGHT)||(defined(CALCULATE_SHADOWS)&&defined(SHADOW_CASCADE))||defined(CALCULATE_SPOTSHADOWS)\r\n\t\t\tv_PositionWorld = positionWS;\r\n\t\t#endif\r\n\t#endif\r\n\r\n\t#if defined(DIFFUSEMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))\r\n\t\t#ifdef TILINGOFFSET\r\n\t\t\tv_Texcoord0=TransformUV(a_Texcoord0,u_TilingOffset);\r\n\t\t#else\r\n\t\t\tv_Texcoord0=a_Texcoord0;\r\n\t\t#endif\r\n\t#endif\r\n\r\n\t#ifdef LIGHTMAP\r\n\t\t#ifdef UV1\r\n\t\t\tv_LightMapUV=vec2(a_Texcoord1.x,1.0-a_Texcoord1.y)*u_LightmapScaleOffset.xy+u_LightmapScaleOffset.zw;\r\n\t\t#else\r\n\t\t\tv_LightMapUV=vec2(a_Texcoord0.x,1.0-a_Texcoord0.y)*u_LightmapScaleOffset.xy+u_LightmapScaleOffset.zw;\r\n\t\t#endif \r\n\t\tv_LightMapUV.y=1.0-v_LightMapUV.y;\r\n\t#endif\r\n\r\n\t#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\r\n\t\tv_Color=a_Color;\r\n\t#endif\r\n\r\n\t#if defined(CALCULATE_SHADOWS)&&!defined(SHADOW_CASCADE)\r\n\t\tv_ShadowCoord =getShadowCoord(vec4(positionWS,1.0));\r\n\t#endif\r\n\r\n\t#ifdef CALCULATE_SPOTSHADOWS\r\n\t\tv_SpotShadowCoord = u_SpotViewProjectMatrix*vec4(positionWS,1.0);\r\n\t#endif\r\n\r\n\tgl_Position = remapGLPositionZ(gl_Position);\r\n}");

/***/ }),

/***/ "./src/LTGame/Material/shader/Mesh-BlinnPhongShadowCaster.fs":
/*!*******************************************************************!*\
  !*** ./src/LTGame/Material/shader/Mesh-BlinnPhongShadowCaster.fs ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#ifdef GL_FRAGMENT_PRECISION_HIGH\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n\r\n#include \"ShadowCasterFS.glsl\"\r\n\r\nvoid main()\r\n{\r\n\tgl_FragColor = shadowCasterFragment();\r\n}");

/***/ }),

/***/ "./src/LTGame/Material/shader/Mesh-BlinnPhongShadowCaster.vs":
/*!*******************************************************************!*\
  !*** ./src/LTGame/Material/shader/Mesh-BlinnPhongShadowCaster.vs ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#include \"ShadowCasterVS.glsl\"\r\n\r\nvoid main()\r\n{\r\n\tvec4 positionCS = shadowCasterVertex();\r\n\tgl_Position = remapGLPositionZ(positionCS);\r\n}");

/***/ }),

/***/ "./src/LTGame/Net/LTHttp.ts":
/*!**********************************!*\
  !*** ./src/LTGame/Net/LTHttp.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTHttp; });
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");

class LTHttp {
    /**
     * 专业发起HTTP请求,不会自动转get/post,完全按传入参数调用
     * @param url
     * @param onSuccess
     * @param onFailed
     * @param isGet
     * @param data
     * @param responseType
     * @param headers
     */
    static SendPro(url, onSuccess = null, onFailed = null, method = "get", data = null, responseType = "json", headers = ["Content-Type", "application/json"]) {
        let xhr = new Laya.HttpRequest();
        xhr.http.timeout = 10000; //设置超时时间
        if (onSuccess != null) {
            xhr.once(Laya.Event.COMPLETE, onSuccess.caller, onSuccess.method);
        }
        if (onFailed != null) {
            xhr.once(Laya.Event.ERROR, onFailed.caller, onFailed.method);
        }
        xhr.send(url, JSON.stringify(data), method, responseType, headers);
        if (this.enableDebug) {
            console.log(url, data, method, responseType, headers);
        }
    }
    /**
     * 发起HTTP请求,会自动转get/post
     * @param url
     * @param onSuccess
     * @param onFailed
     * @param isGet 默认为false
     * @param data
     * @param responseType
     * @param headers
     */
    static Send(url, onSuccess = null, onFailed = null, isGet = false, data = null, responseType = "text", headers) {
        let splitUrl = url.split(this._url_split);
        let origUrl = splitUrl[0];
        let param = splitUrl[1];
        if (param == null) {
            param = "";
        }
        if (isGet) {
            if (data != null) {
                if (!_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__["default"].IsNullOrEmpty(param)) {
                    param += this._param_split;
                }
                for (let i in data) {
                    param += i + this._value_split + data[i] + this._param_split;
                }
                param = param.slice(0, param.length - 1);
            }
            let combieUrl = origUrl;
            if (!_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__["default"].IsNullOrEmpty(param)) {
                combieUrl = origUrl + this._url_split + param;
            }
            this.SendPro(combieUrl, onSuccess, onFailed, this._get_method, null, responseType, headers);
        }
        else {
            if (!_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__["default"].IsNullOrEmpty(param)) {
                if (data == null) {
                    data = {};
                }
                let splitParam = param.split(this._param_split);
                for (let singleParam of splitParam) {
                    let kv = singleParam.split(this._value_split);
                    data[kv[0]] = kv[1];
                }
            }
            this.SendPro(origUrl, onSuccess, onFailed, this._post_method, data, responseType, headers);
        }
    }
}
LTHttp._post_method = "post";
LTHttp._get_method = "get";
LTHttp._url_split = "?";
LTHttp._param_split = "&";
LTHttp._value_split = "=";
LTHttp.enableDebug = false;


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
        this.platformData = platformData;
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
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(this.platformData.bannerId)) {
            console.log("无有效的banner广告ID,取消加载");
            return;
        }
        let windowWidth = this._base.getSystemInfoSync().windowWidth;
        let windowHeight = this._base.getSystemInfoSync().windowHeight;
        let bannerObj = {};
        bannerObj["adUnitId"] = this.platformData.bannerId; // "adunit-b48894d44d318e5a";
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
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(this.platformData.rewardVideoId)) {
            console.log("无有效的视频广告ID,取消加载");
            return;
        }
        this._videoFailedCount = 0;
        let videoObj = {};
        videoObj["adUnitId"] = this.platformData.rewardVideoId; // "adunit-5631637236cf16b6";
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
        this.appId = "";
        this.appKey = "";
        this.bannerId = "";
        this.rewardVideoId = "";
        this.interstitialId = "";
        this.nativeId = "";
        this.nativeBannerIds = [];
        this.nativeIconIds = [];
        this.nativeinterstitialIds = [];
        this.nativeinpageIds = [];
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/DefaultDevice.ts":
/*!**********************************************!*\
  !*** ./src/LTGame/Platform/DefaultDevice.ts ***!
  \**********************************************/
/*! exports provided: default, OppoDevice, VivoDevice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OppoDevice", function() { return OppoDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VivoDevice", function() { return VivoDevice; });
class DefaultDevice {
    Vibrate(isLong) {
        console.log("调用震动", isLong);
    }
}
class OppoDevice {
    constructor() {
        this.base = qg;
        console.log('QGDIVCE INIT', this.base);
    }
    Vibrate(isLong) {
        console.log('调用振动', isLong);
        if (this.base) {
            if (isLong) {
                this.base.vibrateLong({
                    success: (res) => {
                        console.log('振动');
                    },
                    fail: (res) => { console.log('振动失败'); },
                    complete: (res) => { }
                });
            }
            else {
                this.base.vibrateShort({
                    success: (res) => { console.log('短振动'); },
                    fail: (res) => { console.log('短振动失败'); },
                    complete: (res) => { }
                });
            }
        }
    }
}
class VivoDevice {
    constructor() {
        this.base = qg;
        console.log('QGDIVCE INIT', this.base);
    }
    Vibrate(isLong) {
        console.log('调用振动', isLong);
        if (this.base) {
            if (isLong) {
                this.base.vibrateLong();
            }
            else {
                this.base.vibrateShort();
            }
        }
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
/* harmony import */ var _UIExt_DefaultUI_UI_FakeBannerVMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UIExt/DefaultUI/UI_FakeBannerVMediator */ "./src/LTGame/UIExt/DefaultUI/UI_FakeBannerVMediator.ts");
/* harmony import */ var _UIExt_DefaultUI_UI_FakeInterstitalMediator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UIExt/DefaultUI/UI_FakeInterstitalMediator */ "./src/LTGame/UIExt/DefaultUI/UI_FakeInterstitalMediator.ts");
/* harmony import */ var _UIExt_DefaultUI_UI_FakeRewardADMediator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UIExt/DefaultUI/UI_FakeRewardADMediator */ "./src/LTGame/UIExt/DefaultUI/UI_FakeRewardADMediator.ts");
/* harmony import */ var _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _DefaultDevice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DefaultDevice */ "./src/LTGame/Platform/DefaultDevice.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Impl_Web_WebRecordManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Impl/Web/WebRecordManager */ "./src/LTGame/Platform/Impl/Web/WebRecordManager.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");








class DefaultPlatform {
    constructor() {
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_5__["EPlatformType"].Web;
        this.safeArea = null;
        this.recordManager = new _Impl_Web_WebRecordManager__WEBPACK_IMPORTED_MODULE_6__["WebRecordManager"]();
        this.device = new _DefaultDevice__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.systemInfo = null;
        /**
         * 是否支持直接跳转到其他小程序
         * 默认平台进行强制fake true,方便进行调试
         */
        this.isSupportJumpOther = true;
    }
    Init(platformData) {
        this.loginState = {
            isLogin: true,
            code: "111111111111"
        };
        this.userInfo = { nickName: '未登录用户666', avatarUrl: '66.png' };
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
        _UIExt_DefaultUI_UI_FakeBannerVMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Show();
    }
    HideBannerAd() {
        console.log("调用HideBannerAd");
        _UIExt_DefaultUI_UI_FakeBannerVMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Hide();
    }
    ShowRewardVideoAd(onSuccess, onSkipped) {
        console.log("调用ShowRewardVideoAd");
        _UIExt_DefaultUI_UI_FakeRewardADMediator__WEBPACK_IMPORTED_MODULE_2__["default"].instance.Show([onSuccess, onSkipped]);
    }
    ShowRewardVideoAdAsync() {
        return new Promise(function (resolve) {
            _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.ShowRewardVideoAd(Laya.Handler.create(this, () => {
                resolve(true);
            }), Laya.Handler.create(this, () => {
                resolve(false);
            }));
        });
    }
    ShowInterstitalAd() {
        console.log("调用ShowInterstitalAd");
        _UIExt_DefaultUI_UI_FakeInterstitalMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.Show();
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
    ShareVideoInfo() {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].platformStr, "暂未实现录屏功能");
    }
    _CheckUpdate() {
    }
    ShowToast(str) {
        _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].Toast(str);
    }
    OpenGameBox() {
        console.error("当前平台", _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].platformStr, "暂不支持互推游戏盒子");
    }
    NavigateToApp(appid, path, extra) {
        return new Promise((resolve, reject) => {
            console.error("当前平台", _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].platformStr, `暂不支持小程序跳转appid:${appid}`);
            // 这里使用resolve
            resolve(false);
        });
    }
    createShortcut() {
        console.log('创建桌面图标');
    }
    GetStorage(key) {
        console.log('读本地存储');
        return Laya.LocalStorage.getItem(key);
    }
    SetStorage(key, data) {
        console.log('写本地存储');
        Laya.LocalStorage.setItem(key, data);
    }
    followOfficialAccount() {
        console.error("当前平台", _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].platformStr, "暂不支持关注");
    }
    checkFollowState() {
        console.error("当前平台", _LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].platformStr, "暂不支持关注");
    }
    SetClipboardData(str) {
        console.log("暂不支持拷贝剪切板", str);
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/DefaultRecordManager.ts":
/*!*****************************************************!*\
  !*** ./src/LTGame/Platform/DefaultRecordManager.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultRecordManager; });
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");

class DefaultRecordManager {
    constructor() {
        this.supportRecord = false;
        this.isRecording = false;
        this.isPausing = false;
        this.isRecordSuccess = false;
    }
    StartRecord(onStart, onOverTime) {
        console.log("该平台" + _LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].platformStr + "不支持录制视频");
    }
    StopRecord(onStop) {
        console.log("该平台" + _LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].platformStr + "不支持录制视频");
    }
    Pause(onPause) {
        console.log("该平台" + _LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].platformStr + "不支持录制视频");
    }
    Resume(onReume) {
        console.log("该平台" + _LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].platformStr + "不支持录制视频");
    }
    RecordClip(timeRange) {
        console.log("该平台" + _LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].platformStr + "不支持录制视频");
    }
    ShareVideo(onSuccess, onCancel, onFailed) {
        if (onFailed) {
            onFailed.run();
        }
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
    EPlatformType[EPlatformType["Native_IOS"] = 9] = "Native_IOS";
})(EPlatformType || (EPlatformType = {}));


/***/ }),

/***/ "./src/LTGame/Platform/Impl/Native_IOS/NativeIOSPlatform.ts":
/*!******************************************************************!*\
  !*** ./src/LTGame/Platform/Impl/Native_IOS/NativeIOSPlatform.ts ***!
  \******************************************************************/
/*! exports provided: NativeIOSPlatform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeIOSPlatform", function() { return NativeIOSPlatform; });
/* harmony import */ var _DefaultPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DefaultPlatform */ "./src/LTGame/Platform/DefaultPlatform.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");



class NativeIOSPlatform extends _DefaultPlatform__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].Native_IOS;
        this.isSupportJumpOther = false;
        this._isDebug = true;
    }
    ;
    Init(platformData) {
        this.platformData = platformData;
        let conchConfig = window['conchConfig'];
        let PlatformClass = window['PlatformClass'];
        let os = conchConfig.getOS();
        if (os == "Conch-ios") {
            this.base = PlatformClass.createClass("JSBridge"); //创建脚步代理
        }
        console.log("平台初始化完成", _LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr, this);
        if (this._isDebug) {
            console.log("js 调用 InitAppId");
        }
        this.base.call("InitAppId", platformData.appId);
    }
    ShowBannerAd() {
        if (this._isDebug) {
            console.log("js 调用 ShowBannerAd");
        }
        this.base.call("ShowBannerAd");
    }
    HideBannerAd() {
        if (this._isDebug) {
            console.log("js 调用 HideBannerAd");
        }
        this.base.call("HideBannerAd");
    }
    ShowRewardVideoAd(onSuccess, onSkipped) {
        if (this._isDebug) {
            console.log("js 调用 ShowRewardVideoAd");
        }
        this.base.call("ShowRewardVideoAd");
    }
    ShowInterstitalAd() {
        if (this._isDebug) {
            console.log("js 调用 ShowInterstitalAd");
        }
        this.base.call("ShowInterstitalAd");
    }
    RecordEvent(eventId, param) {
        let paramStr = "";
        if (param != null) {
            paramStr = JSON.stringify(param);
        }
        if (this._isDebug) {
            console.log("js 调用 RecordEvent");
        }
        this.base.call("RecordEvent", eventId, paramStr);
    }
    ShowNormalVideoAd() {
        if (this._isDebug) {
            console.log("js 调用 ShowNormalVideoAd");
        }
        this.base.call("ShowNormalVideoAd");
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/Impl/TT/TTDevice.ts":
/*!*************************************************!*\
  !*** ./src/LTGame/Platform/Impl/TT/TTDevice.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TTDevice; });
/* harmony import */ var _DefaultDevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DefaultDevice */ "./src/LTGame/Platform/DefaultDevice.ts");

class TTDevice extends _DefaultDevice__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(base) {
        super();
        this._base = base;
    }
    Vibrate(isLong) {
        console.log("调用震动", isLong);
        if (isLong) {
            this._base.vibrateLong({
                success(res) { },
                fail(res) {
                    console.error("调用震动失败", res);
                },
                complete(res) { }
            });
        }
        else {
            this._base.vibrateShort({
                success(res) { },
                fail(res) {
                    console.error("调用震动失败", res);
                },
                complete(res) { }
            });
        }
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/Impl/TT/TTRecordManager.ts":
/*!********************************************************!*\
  !*** ./src/LTGame/Platform/Impl/TT/TTRecordManager.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TTRecordManager; });
/* harmony import */ var _script_config_PackConst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../script/config/PackConst */ "./src/script/config/PackConst.ts");
/* harmony import */ var _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DefaultRecordManager */ "./src/LTGame/Platform/DefaultRecordManager.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");



class TTRecordManager extends _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(base) {
        super();
        this.supportRecord = true;
        this._base = base;
        if (_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.systemInfo['appName'] == "devtools") {
            this.supportRecord = false;
        }
        this.isRecording = false;
        this.isRecordSuccess = false;
        this.isPausing = false;
        this._nativeManager = this._base.getGameRecorderManager();
        this._nativeManager.onStart((res) => {
            console.log("平台开始录制", res);
            this.isRecording = true;
            this.isRecordSuccess = false;
            this._cacheStartHandle && this._cacheStartHandle.run();
        });
        this._nativeManager.onStop((res) => {
            console.log("平台停止录制", res);
            this.videoSavePath = res.videoPath;
            this.isRecording = false;
            this.isRecordSuccess = true;
            if (this._cacheStopHandle) {
                this._cacheStopHandle.run();
            }
            else if (this._cacheOverTimeHandle) {
                this._cacheOverTimeHandle.run();
            }
        });
        this._nativeManager.onError((err) => {
            console.log("录制发生错误", err);
            this.isRecordSuccess = false;
            this.isRecording = false;
        });
        this._nativeManager.onPause((res) => {
            console.log("暂停录制视频", res);
            this.isPausing = true;
            this._cachePauseHandle && this._cachePauseHandle.run();
        });
        this._nativeManager.onResume((res) => {
            console.log("暂停录制视频", res);
            this.isPausing = false;
            this._cacheResumeHandle && this._cacheResumeHandle.run();
        });
    }
    StartRecord(onStart, onOverTime) {
        if (!this.supportRecord) {
            console.log("不支持录屏");
            return;
        }
        console.log("调用开始录屏");
        this._cacheStartHandle = onStart;
        this._cacheOverTimeHandle = onOverTime;
        this._cacheStopHandle = null;
        this._nativeManager.start({ duration: 300 });
    }
    Pause(onPause) {
        if (!this.isRecording) {
            console.error("当前未开始录制,无法暂停录制");
            return;
        }
        if (this.isPausing) {
            console.log("当前录制状态已暂停");
            return;
        }
        console.log("调用暂停录制");
        this._cachePauseHandle = onPause;
        this._nativeManager.pause();
    }
    Resume(onReume) {
        if (!this.isRecording) {
            console.error("当前未开始录制,无法恢复录制");
            return;
        }
        if (!this.isPausing) {
            console.log("当前录制状态正在进行中");
            return;
        }
        console.log("调用恢复录制");
        this._cacheResumeHandle = onReume;
        this._nativeManager.resume();
    }
    RecordClip(timeRange) {
        if (!this.isRecording) {
            console.error("当前未开始录制,无法记录精彩时刻");
            return;
        }
        if (this.isPausing) {
            console.log("当前录制状态已暂停,无法记录精彩时刻");
            return;
        }
        if (timeRange == null) {
            this._nativeManager.recordClip({});
        }
        else {
            this._nativeManager.recordClip({ timeRange: timeRange });
        }
    }
    StopRecord(onStop) {
        console.log("调用结束录屏");
        this._cacheStopHandle = onStop;
        this._nativeManager.stop();
    }
    ShareVideo(onSuccess, onCancel, onFailed) {
        console.log(_script_config_PackConst__WEBPACK_IMPORTED_MODULE_0__["PackConst"].data);
        if (this.isRecordSuccess) {
            let shareData = {
                channel: "video",
                title: "",
                desc: "",
                imageUrl: "",
                templateId: _script_config_PackConst__WEBPACK_IMPORTED_MODULE_0__["PackConst"].data.share_id,
                query: "",
                extra: {
                    videoPath: this.videoSavePath,
                    videoTopics: _script_config_PackConst__WEBPACK_IMPORTED_MODULE_0__["PackConst"].data.topics // ['小游戏', '学生党', '钻石方块']
                },
                success() {
                    _LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance['_cacheOnShowHandle'] = Laya.Handler.create(null, () => {
                        console.log("分享成功");
                        if (onSuccess) {
                            onSuccess.run();
                        }
                    });
                },
                fail(e) {
                    _LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance['_cacheOnShowHandle'] = Laya.Handler.create(null, () => {
                        console.log("取消分享");
                        if (onCancel) {
                            onCancel.run();
                        }
                    });
                }
            };
            this._base.shareAppMessage(shareData);
        }
        else {
            console.log("无视频可以分享");
            if (onFailed) {
                onFailed.run();
            }
        }
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/Impl/Web/WebRecordManager.ts":
/*!**********************************************************!*\
  !*** ./src/LTGame/Platform/Impl/Web/WebRecordManager.ts ***!
  \**********************************************************/
/*! exports provided: WebRecordManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRecordManager", function() { return WebRecordManager; });
/* harmony import */ var _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DefaultRecordManager */ "./src/LTGame/Platform/DefaultRecordManager.ts");

class WebRecordManager extends _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.supportRecord = false;
    }
    ShareVideo(onSuccess, onCancel, onFailed) {
        if (this.supportRecord) {
            console.log("强制模拟成功");
            if (onSuccess) {
                onSuccess.run();
            }
        }
        else {
            console.log("强制模拟失败");
            if (onFailed) {
                onFailed.run();
            }
        }
    }
}


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
        window['LTPlatform'] = this._instance;
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
            case _EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].Native_IOS:
                return "IOS原生";
            default:
                return "未定义" + platformEnum;
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
/* harmony import */ var _OppoPlatform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OppoPlatform */ "./src/LTGame/Platform/OppoPlatform.ts");
/* harmony import */ var _Impl_Native_IOS_NativeIOSPlatform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Impl/Native_IOS/NativeIOSPlatform */ "./src/LTGame/Platform/Impl/Native_IOS/NativeIOSPlatform.ts");
/* harmony import */ var _VivoPlatform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VivoPlatform */ "./src/LTGame/Platform/VivoPlatform.ts");









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
        else if (Laya.Browser.onQGMiniGame) {
            result = new _OppoPlatform__WEBPACK_IMPORTED_MODULE_6__["default"]();
        }
        else if (Laya.Browser.onVVMiniGame) {
            result = new _VivoPlatform__WEBPACK_IMPORTED_MODULE_8__["default"]();
        }
        else if (window['conch']) {
            let conchConfig = window['conchConfig'];
            let os = conchConfig.getOS();
            if (os == 'Conch-ios') {
                result = new _Impl_Native_IOS_NativeIOSPlatform__WEBPACK_IMPORTED_MODULE_7__["NativeIOSPlatform"]();
            }
            else if (os == 'Conch-android') {
                result = new _DefaultPlatform__WEBPACK_IMPORTED_MODULE_5__["default"]();
                console.error("android native平台暂未接入");
            }
        }
        else {
            console.log("未识别平台,默认创建为web", Laya.Browser.userAgent);
            result = new _DefaultPlatform__WEBPACK_IMPORTED_MODULE_5__["default"]();
        }
        return result;
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/OppoPlatform.ts":
/*!*********************************************!*\
  !*** ./src/LTGame/Platform/OppoPlatform.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OppoPlatform; });
/* harmony import */ var _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../SDK/common/ECheckState */ "./src/SDK/common/ECheckState.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Async_Awaiters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _UIExt_DefaultUI_UI_ImageBannerMediator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UIExt/DefaultUI/UI_ImageBannerMediator */ "./src/LTGame/UIExt/DefaultUI/UI_ImageBannerMediator.ts");
/* harmony import */ var _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _DefaultDevice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DefaultDevice */ "./src/LTGame/Platform/DefaultDevice.ts");
/* harmony import */ var _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DefaultRecordManager */ "./src/LTGame/Platform/DefaultRecordManager.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _WXPlatform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./WXPlatform */ "./src/LTGame/Platform/WXPlatform.ts");












class OppoPlatform extends _WXPlatform__WEBPACK_IMPORTED_MODULE_11__["default"] {
    constructor() {
        super(...arguments);
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_9__["EPlatformType"].Oppo;
        this.safeArea = null;
        this.recordManager = new _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_8__["default"]();
        this.device = new _DefaultDevice__WEBPACK_IMPORTED_MODULE_7__["OppoDevice"]();
        /**
         * 是否支持直接跳转到其他小程序
         */
        this.isSupportJumpOther = true;
        this._isBannerLoaded = false;
        this._isVideoLoaded = false;
        this._isInterstitialLoaded = false;
        this._isInterstitialCanShow = true;
        this._nativeAdLoaded = false;
        this._cacheVideoAD = false;
    }
    Init(platformData) {
        this._base = window["qg"];
        if (this._base == null) {
            console.error("平台初始化错误", _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].platformStr);
            return;
        }
        this.platformData = platformData;
        this._InitLauchOption();
        this._Login();
        this._InitSystemInfo();
        this.getSystemInfo();
        if (this.systemInfo.platformVersion >= 1051) {
            // 不需要在进行initAdService
        }
        else {
            this._base.initAdService({
                appId: platformData.appId,
                isDebug: true,
                success: () => {
                    console.log("oppo广告", "初始化广告服务成功", platformData);
                    // 不提前进行预加载
                    // this._CreateBannerAd();
                    this._CreateVideoAd();
                    // this._CreateInterstitalAd();
                    // this.intersitialAd = new NativeADUnit(platformData.interstitialId);
                    // this.iconNative = new NativeADUnit(platformData.nativeId);
                    // this.nativeAd = new NativeADUnit(platformData.nativeId);
                },
                fail: () => {
                    console.error("oppo广告", "初始化广告服务失败");
                }
            });
        }
        window["iplatform"] = this;
    }
    getSystemInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            this.base = this._base;
            this._base.getSystemInfo({
                success: (res) => {
                    this.systemInfo = res;
                    console.log('systeminfo', this.systemInfo);
                    if (!this.safeArea) {
                        this.safeArea = { top: res['notchHeight'], bottom: res['screenHeight'] - res['notchHeight'], left: 0, right: res['screenWidth'], height: res['screenHeight'], width: res['screenWidth'] };
                    }
                    this._cacheScreenScale = this.systemInfo.screenWidth / Laya.stage.width;
                    console.log(this.safeArea);
                },
                fail: () => { },
                complete: () => { }
            });
        });
    }
    /**
     * 上报数据
     */
    reportMonitor() {
        console.log('oppo上报数据', this.systemInfo);
        if (this.systemInfo && this.systemInfo.platformVersion >= 1060) {
            this._base.reportMonitor('game_scene', 0);
        }
    }
    _CheckUpdate() {
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
            console.error(_LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].platformStr, "登录失败", res);
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
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].platformStr, "登录成功", res);
        this.loginState.isLogin = true;
        this.loginState.code = res.token;
    }
    ShareAppMessage(obj, onSuccess, onFailed) {
    }
    _InitLauchOption() {
        // 绑定onShow事件
        this._base.onShow(this._OnShow);
        this._base.onHide(this._OnHide);
        // 自动获取一次启动参数
        let res = this._base.getLaunchOptionsSync();
        this._OnShow(res);
    }
    /**
     * 是否可以创建桌面图标
     */
    canCreateShortcut() {
        return new Promise((resolve, reject) => {
            qg['hasShortcutInstalled']({
                success: function (res) {
                    // 判断图标是否存在  
                    resolve(res);
                },
                fail: function (err) {
                    reject();
                },
                complete: function () {
                }
            });
        });
    }
    /** 发起创建桌面图标请求 */
    createShortcut() {
        return new Promise((resolve, reject) => {
            qg['hasShortcutInstalled']({
                success: function (res) {
                    // 判断图标未存在时，创建图标
                    if (res == false) {
                        qg['installShortcut']({
                            success: function () {
                                resolve();
                            },
                            fail: function (err) {
                                reject();
                            },
                            complete: function () { }
                        });
                    }
                    else {
                        resolve();
                    }
                },
                fail: function (err) {
                    reject();
                },
                complete: function () { }
            });
        });
    }
    _CreateInterstitalAd() {
        // if (StringEx.IsNullOrEmpty(this._platformData.interstitialId)) {
        //     console.log("无有效的插页广告ID,取消加载");
        //     return;
        // }
        // this._interstitalFailedCount = 0;
        // let intAdObj = {};
        // intAdObj["adUnitId"] = this._platformData.interstitialId;
        // this._intersitialAd = this._base.createInsertAd(intAdObj);
        // this._intersitialAd.onLoad(() => {
        //     console.log("插页广告加载成功");
        //     this._isInterstitialLoaded = true;
        // });
        // this._intersitialAd.onClose(() => {
        //     console.log("插页广告关闭");
        //     this._isInterstitialLoaded = false;
        //     this._intersitialAd.load();
        // });
        // this._intersitialAd.onError((err) => {
        //     this._interstitalFailedCount++;
        //     console.error("插页广告加载失败", err);
        //     if (this._interstitalFailedCount > 10) {
        //         console.log("第", this._interstitalFailedCount, "次重新加载插页广告");
        //         // 失败自动加载广告
        //         this._intersitialAd.load();
        //     }
        // });
    }
    _CreateVideoAd() {
        if (!this._cacheVideoAD) {
            console.log("当前策略为不缓存视频广告");
            return;
        }
        let createRewardedVideoAd = this._base["createRewardedVideoAd"];
        if (createRewardedVideoAd == null) {
            console.error("无createRewardedVideoAd方法,跳过初始化");
            return;
        }
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_4__["default"].IsNullOrEmpty(this.platformData.rewardVideoId)) {
            console.log("无有效的视频广告ID,取消加载");
            return;
        }
        this._videoFailedCount = 0;
        let videoObj = {};
        videoObj["adUnitId"] = this.platformData.rewardVideoId;
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
            Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_3__["CommonEventId"].RESUM_AUDIO);
            console.log("视频回调", res);
            let isEnd = res["isEnded"];
            // 修复广告bug
            _Async_Awaiters__WEBPACK_IMPORTED_MODULE_2__["default"].NextFrame().then(() => {
                if (isEnd) {
                    if (this._rewardSuccessed)
                        this._rewardSuccessed.run();
                }
                else {
                    if (this._rewardSkipped)
                        this._rewardSkipped.run();
                }
            });
        });
    }
    IsBannerAvaliable() {
        return this._isBannerLoaded;
    }
    IsVideoAvaliable() {
        return this._isVideoLoaded;
    }
    IsInterstitalAvaliable() {
        return false; // LTSDK.instance.isADEnable && this._isInterstitialCanShow && CommonSaveData.instance.interstitialCount < 888;
    }
    IsNativeAvaliable() {
        return this._nativeAdLoaded;
    }
    ShowBannerAd() {
        return __awaiter(this, void 0, void 0, function* () {
            // 先尝试展示普通banner
            if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.checkState == _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_0__["ECheckState"].InCheck) {
                console.log('审核中');
                return;
            }
            if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_4__["default"].IsNullOrEmpty(this.platformData.bannerId)) {
                console.log("无有效的banner广告ID,取消加载");
                return;
            }
            if (this._bannerAd) {
                this._bannerAd.show();
                console.log('展示已有banner');
                return;
            }
            this.HideBannerAd();
            this._bannerAd = this._base.createBannerAd({
                adUnitId: this.platformData.bannerId
            });
            let isBannerLoading = true;
            let loadSuccess = false;
            this._bannerAd.show().then((res) => {
                console.log("banner加载成功", res);
                if (res['code'] == 0) {
                    loadSuccess = true;
                }
                isBannerLoading = false;
            }).catch((res) => {
                console.error("banner加载失败", res);
                isBannerLoading = false;
            });
            while (isBannerLoading) {
                yield _Async_Awaiters__WEBPACK_IMPORTED_MODULE_2__["default"].NextFrame();
            }
            if (loadSuccess)
                return;
            console.log("banner展示失败,展示native广告");
            // 销毁广告
            if (this._bannerAd) {
                this._bannerAd.destroy();
                this._bannerAd = null;
            }
            // 没有则展示原生
            for (let i = 0; i < this.platformData.nativeIconIds.length; ++i) {
                let ret = yield this._ShowNativeBanner(i);
                if (ret) {
                    break;
                }
                this._bannerAd.destroy();
            }
        });
    }
    _ShowNativeBanner(index) {
        return __awaiter(this, void 0, void 0, function* () {
            let nativeBanner = this.base.createNativeAd({
                adUnitId: this.platformData.nativeBannerIds[index]
            });
            // 转接对象
            this._bannerAd = nativeBanner;
            let loadRet = yield nativeBanner.load();
            if (loadRet["code"] == 0) {
                // 加载成功
                let adList = loadRet['adList'];
                if (adList == null || adList.length == 0) {
                    console.error("native banner加载失败", loadRet);
                    return false;
                }
                let adData = adList[0];
                if (adData == null) {
                    console.error("native banner加载失败", loadRet);
                    return false;
                }
                let fakeData = new _UIExt_DefaultUI_UI_ImageBannerMediator__WEBPACK_IMPORTED_MODULE_5__["FakeBannerData"]();
                fakeData.imgPath = adData.imgUrlList[0];
                fakeData.noticePath = adData.logoUrl;
                fakeData.adId = adData.adId;
                fakeData.owner = this._bannerAd;
                fakeData.iconPath = adData.icon;
                _UIExt_DefaultUI_UI_ImageBannerMediator__WEBPACK_IMPORTED_MODULE_5__["default"].instance.Show(fakeData);
                return true;
            }
            else {
                console.error("native banner加载失败", loadRet);
                return false;
            }
        });
    }
    HideBannerAd() {
        if (this._bannerAd) {
            this._bannerAd.destroy();
            this._bannerAd = null;
        }
        _UIExt_DefaultUI_UI_ImageBannerMediator__WEBPACK_IMPORTED_MODULE_5__["default"].instance.Hide();
    }
    ShowNativeAd() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.IsNativeAvaliable()) {
                return;
            }
            // await this._ShowNative();
        });
    }
    HideNativeAd() {
        if (!this.IsNativeAvaliable()) {
            return;
        }
        // this._HideNative();
    }
    // isNativeInterstitialAvaliable(){
    //     return this.intersitialAd.canShowAD
    // }
    _DoCacheShowVideo(onSuccess, onSkipped) {
        if (!this._isVideoLoaded) {
            console.error("视频广告尚未加载好");
            return;
        }
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        this._isVideoLoaded = false;
        Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_3__["CommonEventId"].PAUSE_AUDIO);
        this._rewardVideo.show();
    }
    _DoNoCacheShowVideo(onSuccess, onSkipped) {
        var _a, _b;
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_4__["default"].IsNullOrEmpty(this.platformData.rewardVideoId)) {
            console.log("无有效的视频广告ID,取消加载");
            (_a = this._rewardSkipped) === null || _a === void 0 ? void 0 : _a.run();
            return;
        }
        let createRewardedVideoAd = this._base["createRewardedVideoAd"];
        if (createRewardedVideoAd == null) {
            console.error("无createRewardedVideoAd方法,跳过初始化");
            (_b = this._rewardSkipped) === null || _b === void 0 ? void 0 : _b.run();
            return;
        }
        if (this._rewardVideo) {
            this._rewardVideo.destroy();
        }
        _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_6__["default"].ShowLoading("广告拉取中...");
        let videoObj = {};
        videoObj["adUnitId"] = this.platformData.rewardVideoId; // "adunit-5631637236cf16b6";
        this._rewardVideo = createRewardedVideoAd(videoObj);
        console.log("广告创建完成", videoObj);
        this._rewardVideo.onClose((res) => {
            Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_3__["CommonEventId"].RESUM_AUDIO);
            console.log("视频回调", res);
            let isEnd = res["isEnded"];
            _Async_Awaiters__WEBPACK_IMPORTED_MODULE_2__["default"].NextFrame().then(() => {
                if (isEnd) {
                    if (this._rewardSuccessed)
                        this._rewardSuccessed.run();
                }
                else {
                    if (this._rewardSkipped)
                        this._rewardSkipped.run();
                }
            });
        });
        this._rewardVideo.onError((err) => {
            console.log("广告组件出现问题", err);
            _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_6__["default"].HideLoading();
            if (this._rewardSkipped)
                this._rewardSkipped.run();
        });
        this._rewardVideo.onLoad((res) => {
            console.log("广告加载成功", res);
            _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_6__["default"].HideLoading();
        });
        this._rewardVideo.load().then(() => {
            this._rewardVideo.show();
        });
    }
    ShowRewardVideoAd(onSuccess, onSkipped) {
        if (this._cacheVideoAD) {
            this._DoCacheShowVideo(onSuccess, onSkipped);
        }
        else {
            this._DoNoCacheShowVideo(onSuccess, onSkipped);
        }
    }
    ShowRewardVideoAdAsync() {
        return new Promise(function (resolve) {
            _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].instance.ShowRewardVideoAd(Laya.Handler.create(this, () => {
                resolve(true);
            }), Laya.Handler.create(this, () => {
                resolve(false);
            }));
        });
    }
    _ShowNativeInterstital(index) {
        return __awaiter(this, void 0, void 0, function* () {
            return;
            // let nativeAd = this._base.createNativeAd({
            //     adUnitId: this.platformData.nativeinterstitialIds[index]
            // });
            // // 转接对象
            // this._intersitialAd = nativeAd;
            // let loadRet = await nativeAd.load();
            // if (loadRet["code"] == 0) {
            //     // 加载成功
            //     let adList = loadRet['adList'] as any[];
            //     if (adList == null || adList.length == 0) {
            //         console.error("native 插页 加载失败", loadRet);
            //         return false;
            //     }
            //     let adData = adList[0] as {
            //         adId: string,
            //         imgUrlList: string[],
            //         logoUrl: string,
            //         icon: string,
            //         title: string,
            //         desc: string
            //     };
            //     console.log('广告数据加载完成', loadRet);
            //     if (adData == null) {
            //         console.error("native 插页 加载失败", loadRet);
            //         return false;
            //     }
            //     let fakeData = new FakeInterstitalData();
            //     fakeData.imgPath = adData.imgUrlList[0];
            //     fakeData.noticePath = adData.logoUrl;
            //     fakeData.adId = adData.adId;
            //     fakeData.desc = adData.desc;
            //     fakeData.iconPath = adData.icon;
            //     fakeData.title = adData.title;
            //     fakeData.owner = nativeAd;
            //     UI_NativeInterstitialMediator.instance.Show(fakeData);
            //     return true;
            // } else {
            //     console.error("native 插页 加载失败", loadRet);
            //     return false;
            // }
        });
    }
    _ShowNormalInterstitalAd() {
        return __awaiter(this, void 0, void 0, function* () {
            return;
            // if (this._intersitialAd) {
            //     this._intersitialAd.destroy();
            // }
            // if (this.systemInfo.platformVersion < 1061) {
            //     console.log("平台版本号不足1061,无法创建普通插页", this.systemInfo.platformVersion);
            //     return false;
            // }
            // console.log("创建普通插页", this.platformData.interstitialId);
            // this._intersitialAd = this._base.createInterstitialAd(
            //     {
            //         adUnitId: this.platformData.interstitialId
            //     }
            // );
            // let isloading = true;
            // let isSuccess = false;
            // this._intersitialAd.load()
            //     .then((res) => {
            //         console.log("普通插页加载成功", res);
            //         isloading = false;
            //         isSuccess = res['code'] == 0;
            //     })
            //     .catch((res) => {
            //         console.error("普通插页加载失败", res);
            //         isloading = false;
            //         isSuccess = false;
            //     });
            // while (isloading) {
            //     await Awaiters.Frames(1);
            // }
            // if (!isSuccess) {
            //     return false;
            // }
            // isloading = true;
            // this._intersitialAd.show()
            //     .then((res) => {
            //         console.log("普通插页展示成功", res);
            //         isloading = false;
            //         isSuccess = res['code'] == 0;
            //     })
            //     .catch((res) => {
            //         console.error("普通插页展示失败", res);
            //         isloading = false;
            //         isSuccess = false;
            //     });
            // while (isloading) {
            //     await Awaiters.Frames(1);
            // }
            // return isSuccess;
        });
    }
    ShowInterstitalAd() {
        return __awaiter(this, void 0, void 0, function* () {
            return;
            // if (!this.IsInterstitalAvaliable()) {
            //     console.error(`插页广告不能展示 冷却中：${this._isInterstitialCanShow} 展示次数${CommonSaveData.instance.interstitialCount}`);
            //     return;
            // }
            // if (this._intersitialAd) {
            //     this._intersitialAd.destroy();
            //     UI_NativeInterstitialMediator.instance.Hide();
            // }
            // // 先拉去原生插屏(一个)
            // if (this.platformData.nativeinterstitialIds.length > 0) {
            //     let ret = await this._ShowNativeInterstital(0);
            //     if (ret) {
            //         this._DisableInterstitalAd();
            //         return;
            //     }
            // }
            // // 失败则拉取正常插屏
            // let ret = await this._ShowNormalInterstitalAd();
            // if (ret) {
            //     CommonSaveData.instance.interstitialCount++;
            //     CommonSaveData.SaveToDisk();
            //     this._DisableInterstitalAd();
            //     return;
            // }
            // // 失败再继续拉取剩余原生插屏
            // for (let i = 1; i < this.platformData.nativeinterstitialIds.length; ++i) {
            //     let ret = await this._ShowNativeInterstital(i);
            //     if (ret) {
            //         this._DisableInterstitalAd();
            //         return;
            //     }
            // }
        });
    }
    _DisableInterstitalAd() {
        return __awaiter(this, void 0, void 0, function* () {
            this._isInterstitialCanShow = false;
            yield _Async_Awaiters__WEBPACK_IMPORTED_MODULE_2__["default"].Seconds(60);
            this._isInterstitialCanShow = true;
        });
    }
    GetFromAppId() {
        if (this.lauchOption.referrerInfo == null) {
            return null;
        }
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_4__["default"].IsNullOrEmpty(this.lauchOption.referrerInfo.appId)) {
            return null;
        }
        return this.lauchOption.referrerInfo.appId;
    }
    /** 发起创建桌面图标请求 */
    CreatShortcut() {
        return new Promise((resolve, reject) => {
            qg['hasShortcutInstalled']({
                success: function (res) {
                    // 判断图标未存在时，创建图标
                    if (res == false) {
                        qg['installShortcut']({
                            success: function () {
                                resolve();
                            },
                            fail: function (err) {
                                reject();
                            },
                            complete: function () { }
                        });
                    }
                    else {
                        resolve();
                    }
                },
                fail: function (err) {
                    reject();
                },
                complete: function () { }
            });
        });
    }
    /**
     * 小游戏回到前台的事件
     */
    _OnShow(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].platformStr, "OnShow", res);
        _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].instance.lauchOption = res;
        _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].instance._CheckUpdate();
        _Async_Awaiters__WEBPACK_IMPORTED_MODULE_2__["default"].NextFrame().then(() => {
            if (_LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].instance.onResume) {
                _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].instance.onResume.runWith(res);
            }
            let cacheOnShow = _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].instance["_cacheOnShowHandle"];
            if (cacheOnShow) {
                cacheOnShow.run();
                _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].instance["_cacheOnShowHandle"] = null;
            }
        });
    }
    /**
     * 小游戏退出前台的事件
     */
    _OnHide(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].platformStr, "OnHide", res);
        if (_LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].instance.onPause) {
            _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].instance.onPause.runWith(res);
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
            console.log("分包加载进度", res);
            if (onProgress) {
                onProgress.runWith(res.progress / 100);
            }
        });
    }
    RecordEvent(eventId, param) {
        console.log("[记录事件]", eventId, param);
    }
    /**
     * 创建分享视频按钮
     * @param x
     * @param y
     * @param width
     * @param height
     */
    CreateShareVideoBtn(x, y, width, height) {
    }
    /**
     * 隐藏分享视频按钮
     */
    HideShareVideoBtn() {
        if (this._shareVideoBtn != null) {
            this._shareVideoBtn.hide();
        }
    }
    ShowToast(str) {
        this._base.showToast({
            title: str,
            duration: 2000
        });
    }
    OpenGameBox(appIds) {
        console.error("当前平台", _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].platformStr, "暂不支持互推游戏盒子");
    }
    /**
     * @param appId oppo vivo传包名
     */
    NavigateToApp(appId, path, extra) {
        return new Promise((resolve, reject) => {
            Laya.Browser.window.qg.navigateToMiniGame({
                pkgName: appId,
                path: path,
                extraData: extra,
                success: function () {
                    resolve(true);
                    console.log('oppo小游戏跳转成功');
                },
                fail: function (res) {
                    reject(false);
                    console.log('oppo小游戏跳转失败：', JSON.stringify(res));
                }
            });
        });
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
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");






class QQPlatform extends _WXPlatform__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].QQ;
        this.isBannerShowing = false;
    }
    Init(platformData) {
        this._base = window["qq"];
        if (this._base == null) {
            console.error("平台初始化错误", _LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr);
            return;
        }
        this.platformData = platformData;
        this._InitLauchOption();
        this._Login();
        this._InitShareInfo();
        this._InitSystemInfo();
        this._CreateBannerAd();
        this._CreateVideoAd();
        this._CreateInterstitalAd();
        window["iplatform"] = this;
        console.error("平台初始化完成", _LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr);
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
    _CreateBannerAd(show) {
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__["default"].IsNullOrEmpty(this.platformData.bannerId)) {
            console.log("无有效的banner广告ID,取消加载");
            return;
        }
        let windowWidth = this._base.getSystemInfoSync().windowWidth;
        let windowHeight = this._base.getSystemInfoSync().windowHeight;
        let bannerObj = {};
        bannerObj["adUnitId"] = this.platformData.bannerId; // "adunit-b48894d44d318e5a";
        let styleObj = {};
        styleObj["top"] = windowHeight - 80;
        styleObj["width"] = 300;
        styleObj["left"] = (windowWidth - styleObj["width"]) / 2;
        bannerObj["style"] = styleObj;
        this._bannerAd = this._base.createBannerAd(bannerObj);
        this._isBannerLoaded = false;
        this._bannerAd.onLoad(() => {
            console.log("qq banner加载成功", this._bannerAd);
            this._isBannerLoaded = true;
            if (show) {
                this._bannerAd.show();
            }
        });
        this._bannerAd.onError((res) => {
            console.error("banner广告加载失败", res);
        });
        this._bannerAd.onResize((size) => {
            console.log("onResize", size);
            this._bannerAd.style.top = windowHeight - 80;
            this._bannerAd.style.left = (windowWidth - 300) / 2;
            console.log("onResize", this._bannerAd);
        });
        // super._CreateBannerAd();
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
        this.isBannerShowing = true;
        Laya.timer.loop(15 * 1000, this, this.refreshBanner);
    }
    refreshBanner() {
        if (this.isBannerShowing) {
            console.log('refresh banner');
            this._bannerAd.hide();
            this._CreateBannerAd(true);
        }
    }
    HideBannerAd() {
        if (!this.IsBannerAvaliable())
            return;
        if (this._bannerAd) {
            this._bannerAd.hide();
            Laya.timer.clear(this, this.refreshBanner);
            this.isBannerShowing = false;
        }
        this._CreateBannerAd();
    }
    _DoCacheShowVideo(onSuccess, onSkipped) {
        if (!this._isVideoLoaded) {
            console.error("视频广告尚未加载好");
            return;
        }
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        this._isVideoLoaded = false;
        Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_4__["CommonEventId"].PAUSE_AUDIO);
        this._rewardVideo.show();
    }
    _DoNoCacheShowVideo(onSuccess, onSkipped) {
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        if (!this._isVideoLoaded || !this._rewardVideo) {
            if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__["default"].IsNullOrEmpty(this.platformData.rewardVideoId)) {
                console.log("无有效的视频广告ID,取消加载");
                onSkipped.run();
                return;
            }
            let createRewardedVideoAd = this._base["createRewardedVideoAd"];
            if (createRewardedVideoAd == null) {
                console.error("无createRewardedVideoAd方法,跳过初始化");
                onSkipped.run();
                return;
            }
            _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_5__["default"].ShowLoading("广告拉取中...");
            this._videoFailedCount = 0;
            let videoObj = {};
            videoObj["adUnitId"] = this.platformData.rewardVideoId; // "adunit-5631637236cf16b6";
            this._rewardVideo = createRewardedVideoAd(videoObj);
            this._rewardVideo.onLoad(() => {
                console.log("视频广告加载成功");
                this._isVideoLoaded = true;
            });
            this._rewardVideo.onError((res) => {
                this._videoFailedCount++;
                console.error("视频广告加载失败", res, this._videoFailedCount);
            });
            this._rewardVideo.onClose((res) => {
                Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_4__["CommonEventId"].RESUM_AUDIO);
                console.log(" NoCache - 视频回调", res);
                let isEnd = res["isEnded"];
                console.log("noCache---", isEnd, "----", !!this._rewardSuccessed, "-----", !!this._rewardSkipped);
                if (isEnd) {
                    if (this._rewardSuccessed)
                        this._rewardSuccessed.run();
                }
                else {
                    if (this._rewardSkipped)
                        this._rewardSkipped.run();
                }
            });
        }
        this._rewardVideo.show().then(() => {
            _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_5__["default"].HideLoading();
        }).catch(err => {
            console.log("广告组件出现问题", err);
            // 可以手动加载一次
            this._rewardVideo.load().then(() => {
                console.log("手动加载成功");
                // 加载成功后需要再显示广告
                return this._rewardVideo.show().then(() => {
                    _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_5__["default"].HideLoading();
                });
            });
        });
        ;
    }
    ShowRewardVideoAd(onSuccess, onSkipped) {
        if (this._cacheVideoAD) {
            this._DoCacheShowVideo(onSuccess, onSkipped);
        }
        else {
            this._DoNoCacheShowVideo(onSuccess, onSkipped);
        }
    }
    ShowRewardVideoAdAsync() {
        return new Promise(function (resolve) {
            _LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.ShowRewardVideoAd(Laya.Handler.create(this, () => {
                resolve(true);
            }, null, true), Laya.Handler.create(this, () => {
                resolve(false);
            }, null, true));
        });
    }
    ShowInterstitalAd() {
        if (!this._isInterstitialLoaded) {
            console.error("插页广告尚未加载好");
            return;
        }
        this._intersitialAd.show();
    }
    OpenGameBox(appIds = []) {
        this.showAppBox();
    }
    /**
     * 盒子广告
     */
    showAppBox() {
        if (this.appBox) {
            this.appBox.show();
        }
    }
    createAppBox(show) {
        if (!this.appBox) {
            this.appBox = this._base.createAppBox({
                adUnitId: '54b23210b2bf2e85c874beb4bae96003'
            });
        }
        this.appBox.load().then(() => {
            if (show) {
                this.appBox.show();
            }
        });
        this.appBox.onClose(() => {
            console.log('关闭盒子');
        });
    }
    hideAppBox() {
        if (this.appBox) {
            this.appBox.destroy();
        }
    }
    /**
     * 积木广告 1-5
     */
    showBlockAd(count = 1) {
        let obj = {
            adUnitId: "2f0aa99d54d9aedb40bbca4c21065c03",
            style: { left: 55, top: Laya.stage.height / 2 },
            size: count,
            orientation: 'vertical' //landscape 或者 vertical，积木广告横向展示或者竖向展示
        };
        this.blockAd = this._base.createBlockAd(obj);
        this.blockAd.onLoad(() => {
            console.log('积木广告加载完成');
            this.blockAd.show().then(() => { console.log('积木展示成功'); }).catch(e => {
                console.error('积木展示失败', e);
            });
        });
        this.blockAd.onError((err) => {
            console.error('积木广告加载错误', err);
        });
        this.blockAd.onResize((res) => {
            console.log('积木resize', res);
        });
    }
    hideBlockAd() {
        if (this.blockAd) {
            this.blockAd.hide();
            this.blockAd.destroy();
        }
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
        this.platformData = platformData;
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
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Impl_TT_TTDevice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Impl/TT/TTDevice */ "./src/LTGame/Platform/Impl/TT/TTDevice.ts");
/* harmony import */ var _Impl_TT_TTRecordManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Impl/TT/TTRecordManager */ "./src/LTGame/Platform/Impl/TT/TTRecordManager.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _WXPlatform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WXPlatform */ "./src/LTGame/Platform/WXPlatform.ts");
/* harmony import */ var _Async_Awaiters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");








class TTPlatform extends _WXPlatform__WEBPACK_IMPORTED_MODULE_6__["default"] {
    constructor() {
        super(...arguments);
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].TT;
        this._showVideoLoad = false;
        this.loginCode = null;
    }
    Init(platformData) {
        this._base = window["tt"];
        this.base = this._base;
        if (this._base == null) {
            console.error("平台初始化错误");
            return;
        }
        this.platformData = platformData;
        // 检测是否支持交叉推广
        let tt = this._base;
        let systemInfo = tt.getSystemInfoSync();
        if (systemInfo.platform == "ios") {
            this.isSupportJumpOther = false;
        }
        let [major, minor] = systemInfo.SDKVersion.split(".");
        if (major >= 1 && minor >= 33) {
        }
        else {
            this.isSupportJumpOther = false;
        }
        this._InitLauchOption();
        this._Login();
        this._InitShareInfo();
        this._InitSystemInfo();
        this._CreateBannerAd();
        this._CreateVideoAd();
        this._CreateInterstitalAd();
        this.recordManager = new _Impl_TT_TTRecordManager__WEBPACK_IMPORTED_MODULE_4__["default"](this._base);
        this.device = new _Impl_TT_TTDevice__WEBPACK_IMPORTED_MODULE_3__["default"](this._base);
        window["iplatform"] = this;
    }
    _Login() {
        this.loginState = {
            isLogin: false,
            code: ""
        };
        let loginData = {
            force: true,
            success: (res) => {
                this.loginCode = res.code;
                this.loginState.isLogin = true;
                this.loginState.code = res.code;
                this._OnLoginSuccess(res);
            },
            fail: (res) => {
                console.error(_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].platformStr, "登录失败", res);
                this.loginState.isLogin = false;
                this.loginState.code = "";
            },
            complete: () => {
                if (this.onLoginEnd != null) {
                    this.onLoginEnd.run();
                }
            }
        };
        window["tt"].login(loginData);
    }
    getUserInfo() {
        console.log('开始授权');
        window["tt"].authorize({
            scope: "scope.userInfo",
            success: () => {
                console.log('授权成功');
                window["tt"].getUserInfo({
                    withCredentials: false,
                    lang: 'zh_CN',
                    success: (result) => {
                        console.log('获取信息成功');
                        console.log(result);
                        this.userInfo = { avatarUrl: result.avatarUrl, nickName: result.nickName };
                    },
                    fail: () => {
                        console.log('获取信息失败');
                    },
                    complete: () => {
                        console.log('获取信息comp');
                    }
                });
            },
        });
    }
    _OnLoginSuccess(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].platformStr, "登录成功", res);
        _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_1__["default"].Toast('登录成功');
        this.getUserInfo();
        // this.loginState.isLogin = true;
        // this.loginState.code = res.code;
    }
    _InitLauchOption() {
        // 绑定onShow事件
        this._base.onShow(this._OnShow);
        this._base.onHide(this._OnHide);
        // 自动获取一次启动参数
        let res = this._base.getLaunchOptionsSync();
        this._OnShow(res);
    }
    /**
    * 小游戏回到前台的事件
    */
    _OnShow(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].platformStr, "OnShow", res);
        _LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.lauchOption = res;
        _LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance._CheckUpdate();
        _Async_Awaiters__WEBPACK_IMPORTED_MODULE_7__["default"].NextFrame().then(() => {
            if (_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.onResume) {
                _LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.onResume.runWith(res);
            }
            let cacheOnShow = _LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance["_cacheOnShowHandle"];
            if (cacheOnShow) {
                cacheOnShow.run();
                _LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance["_cacheOnShowHandle"] = null;
            }
        });
    }
    /**
     * 小游戏退出前台的事件
     */
    _OnHide(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].platformStr, "OnHide", res);
        if (_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.onPause) {
            _LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.onPause.runWith(res);
        }
    }
    _CreateBannerAd() {
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_0__["default"].IsNullOrEmpty(this.platformData.bannerId)) {
            console.log("无有效的banner广告ID,取消加载");
            return;
        }
        let windowWidth = this._base.getSystemInfoSync().windowWidth;
        let windowHeight = this._base.getSystemInfoSync().windowHeight;
        let bannerObj = {};
        bannerObj["adUnitId"] = this.platformData.bannerId; // "adunit-b48894d44d318e5a";
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
    ShareAppMessage(shareInfo, onSuccess, onFailed) {
        console.log("分享消息", shareInfo);
        let shareObj = _WXPlatform__WEBPACK_IMPORTED_MODULE_6__["default"]._WrapShareInfo(shareInfo);
        shareObj["success"] = () => {
            this._cacheOnShowHandle = Laya.Handler.create(null, () => {
                console.log("分享成功");
                if (onSuccess) {
                    onSuccess.run();
                }
            });
        };
        shareObj["fail"] = () => {
            this._cacheOnShowHandle = Laya.Handler.create(null, () => {
                console.log("分享失败");
                if (onFailed) {
                    onFailed.run();
                }
            });
        };
        this._base.shareAppMessage(shareObj);
    }
    OpenGameBox(appIds) {
        let openData = [];
        for (let i = 0; i < appIds.length; ++i) {
            openData.push({
                appId: appIds[i]
            });
        }
        this._base.showMoreGamesModal({
            appLaunchOptions: openData
        });
    }
    NavigateToApp(appid, path, extra) {
        return new Promise((resolve, reject) => {
            if (!this.isSupportJumpOther) {
                reject(false);
                console.log("当前平台不支持小游戏跳转", this);
            }
            else {
                this._base.showMoreGamesModal({
                    appLaunchOptions: [
                        {
                            appId: this.platformData.appId,
                            query: "foo=bar&baz=qux",
                            extraData: {}
                        }
                    ],
                    success(res) {
                        resolve(true);
                        console.log("跳转小游戏成功", appid);
                    },
                    fail(err) {
                        reject(false);
                        console.log("跳转小游戏失败", appid);
                    }
                });
            }
        });
    }
    followOfficialAccount() {
        return new Promise((resolve, reject) => {
            this.base.followOfficialAccount({
                success(res) {
                    if (res.errCode === 0) {
                        resolve(true);
                    }
                    else {
                        console.log(res.errMsg);
                        resolve(false);
                    }
                },
            });
        });
    }
    checkFollowState() {
        return new Promise((resolve, reject) => {
            this.base.checkFollowState({
                success(res) {
                    if (res.result) {
                        resolve(true);
                    }
                    else {
                        resolve(false);
                    }
                    console.log(res.result); // true:已关注 /  false:未关注
                },
            });
        });
    }
}


/***/ }),

/***/ "./src/LTGame/Platform/VivoPlatform.ts":
/*!*********************************************!*\
  !*** ./src/LTGame/Platform/VivoPlatform.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VivoPlatform; });
/* harmony import */ var _script_manager_AudioManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../script/manager/AudioManager */ "./src/script/manager/AudioManager.ts");
/* harmony import */ var _Async_Awaiters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");
/* harmony import */ var _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _DefaultDevice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultDevice */ "./src/LTGame/Platform/DefaultDevice.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Impl_Web_WebRecordManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Impl/Web/WebRecordManager */ "./src/LTGame/Platform/Impl/Web/WebRecordManager.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");







class VivoPlatform {
    constructor() {
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].Vivo;
        this.safeArea = null;
        this.recordManager = new _Impl_Web_WebRecordManager__WEBPACK_IMPORTED_MODULE_5__["WebRecordManager"]();
        this.device = new _DefaultDevice__WEBPACK_IMPORTED_MODULE_3__["VivoDevice"]();
        this.systemInfo = null;
        /**
         * 是否支持直接跳转到其他小程序
         * 默认平台进行强制fake true,方便进行调试
         */
        this.isSupportJumpOther = true;
    }
    Init(platformData) {
        this.loginState = {
            isLogin: false,
            code: null
        };
        this.base = window["qg"];
        if (this.base == null) {
            console.error("平台初始化错误", _LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].platformStr);
            return;
        }
        this.platformData = platformData;
        this._InitLauchOption();
        this.getSystemInfo();
        this.createVideo();
    }
    _InitLauchOption() {
        // 绑定onShow事件
        this.base.onShow(this._OnShow);
        this.base.onHide(this._OnHide);
        // 自动获取一次启动参数
        let res = this.base.getLaunchOptionsSync();
        this._OnShow(res);
    }
    /**
     * 小游戏回到前台的事件
     */
    _OnShow(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].platformStr, "OnShow", res);
        _LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.lauchOption = res;
        _LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance._CheckUpdate();
        _script_manager_AudioManager__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Resume();
        _Async_Awaiters__WEBPACK_IMPORTED_MODULE_1__["default"].NextFrame().then(() => {
            if (_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.onResume) {
                _LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.onResume.runWith(res);
            }
            let cacheOnShow = _LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance["_cacheOnShowHandle"];
            console.log(cacheOnShow);
            if (cacheOnShow) {
                cacheOnShow.run();
                _LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance["_cacheOnShowHandle"] = null;
            }
        });
    }
    /**
    * 小游戏退出前台的事件
    */
    _OnHide(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].platformStr, "OnHide", res);
        _script_manager_AudioManager__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Pause();
        if (_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.onPause) {
            _LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.onPause.runWith(res);
        }
    }
    getSystemInfo() {
        this.base.getSystemInfo({
            success: (res) => {
                this.systemInfo = res;
                console.log('systeminfo', this.systemInfo);
                if (!this.safeArea) {
                    this.safeArea = { top: res['statusBarHeight'], bottom: res['screenHeight'], left: 0, right: res['screenWidth'], height: res['screenHeight'], width: res['screenWidth'] };
                }
                this._cacheScreenScale = this.systemInfo.screenWidth / Laya.stage.width;
                console.log(this.safeArea);
                if (res['platformVersionCode'] >= 1053) {
                    this.base.login({
                        success: (res) => {
                            console.log('vovo登陆成功', res);
                            this.loginState.isLogin = true;
                            this.loginState.code = res.token;
                            this.onLoginEnd && this.onLoginEnd.run();
                        },
                        fail: () => {
                            console.log('vovo登陆失败');
                        }
                    });
                }
            },
            fail: () => { },
            complete: () => { }
        });
    }
    IsBannerAvaliable() {
        return;
    }
    IsVideoAvaliable() {
        return;
    }
    IsInterstitalAvaliable() {
        return;
    }
    ShowInterstitalAd() {
        console.log('todo');
        let interad = this.base.createInterstitialAd({
            posId: this.platformData.interstitialId
        });
        if (interad) {
            interad.show();
        }
    }
    ShowBannerAd() {
        if (this._banner) {
            this._banner.show();
            console.log('展示已有banner');
            return;
        }
        this.HideBannerAd();
        this._banner = this.base.createBannerAd({
            posId: this.platformData.bannerId
        });
        let isBannerLoading = true;
        let loadSuccess = false;
        this._banner.show().then((res) => {
            console.log("banner加载成功", res);
            if (res['code'] == 0) {
                loadSuccess = true;
            }
            isBannerLoading = false;
        }).catch((res) => {
            console.error("banner加载失败", res);
            isBannerLoading = false;
        });
    }
    HideBannerAd() {
        if (this._banner) {
            this._banner.hide();
        }
    }
    ShowRewardVideoAd(onSuccess, onSkipped) {
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (this._rewardVideo) {
                yield this._rewardVideo.load();
                this._rewardVideo.show().then(() => {
                    resolve();
                }).catch(() => {
                    reject();
                });
            }
            else {
                this._rewardVideo = window['qg'].createRewardedVideoAd({
                    posId: this.platformData.rewardVideoId
                });
                this._rewardVideo.onLoad(() => {
                    console.log("视频广告加载成功");
                });
                this._rewardVideo.onError((res) => {
                    console.error("视频广告加载失败", res);
                });
                this._rewardVideo.onClose((res) => {
                    let isEnd = res["isEnded"];
                    _Async_Awaiters__WEBPACK_IMPORTED_MODULE_1__["default"].NextFrame().then(() => {
                        if (isEnd) {
                            if (this._rewardSuccessed)
                                this._rewardSuccessed.run();
                        }
                        else {
                            if (this._rewardSkipped)
                                this._rewardSkipped.run();
                        }
                    });
                });
                yield this._rewardVideo.load();
                this._rewardVideo.show().then(() => {
                    resolve();
                }).catch(() => {
                    reject();
                });
            }
        }));
    }
    createVideo() {
        this._rewardVideo = this.base.createRewardedVideoAd({
            posId: this.platformData.rewardVideoId
        });
        this._rewardVideo.onLoad(() => {
            console.log("视频广告加载成功");
        });
        this._rewardVideo.onError((res) => {
            console.error("视频广告加载失败", res);
        });
        this._rewardVideo.onClose((res) => {
            console.log("视频回调", res);
            let isEnd = res["isEnded"];
            _Async_Awaiters__WEBPACK_IMPORTED_MODULE_1__["default"].NextFrame().then(() => {
                if (isEnd) {
                    if (this._rewardSuccessed)
                        this._rewardSuccessed.run();
                }
                else {
                    if (this._rewardSkipped)
                        this._rewardSkipped.run();
                }
            });
        });
    }
    ShowRewardVideoAdAsync() {
        return new Promise(function (resolve) {
            _LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.ShowRewardVideoAd(Laya.Handler.create(this, () => {
                resolve(true);
            }), Laya.Handler.create(this, () => {
                resolve(false);
            }));
        });
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
    ShareVideoInfo() {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].platformStr, "暂未实现录屏功能");
    }
    _CheckUpdate() {
    }
    ShowToast(str) {
        _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_2__["default"].Toast(str);
    }
    OpenGameBox() {
        console.error("当前平台", _LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].platformStr, "暂不支持互推游戏盒子");
    }
    NavigateToApp(appid, path, extra) {
        return new Promise((resolve, reject) => {
            console.error("当前平台", _LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].platformStr, `暂不支持小程序跳转appid:${appid}`);
            // 这里使用resolve
            resolve(false);
        });
    }
    createShortcut() {
        console.log('创建桌面图标');
        return;
    }
    GetStorage(key) {
        console.log('读本地存储');
        return Laya.LocalStorage.getItem(key);
    }
    SetStorage(key, data) {
        console.log('写本地存储');
        Laya.LocalStorage.setItem(key, data);
    }
    followOfficialAccount() {
        console.log('暂不支持');
        return;
    }
    checkFollowState() {
        console.log('暂不支持');
        return;
    }
    SetClipboardData(str) {
        this.base.setClipboardData({ data: str });
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
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Async_Awaiters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _UIExt_DefaultUI_UI_GameCenterMediator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UIExt/DefaultUI/UI_GameCenterMediator */ "./src/LTGame/UIExt/DefaultUI/UI_GameCenterMediator.ts");
/* harmony import */ var _UIExt_DefaultUI_UI_SelfBannerMediator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UIExt/DefaultUI/UI_SelfBannerMediator */ "./src/LTGame/UIExt/DefaultUI/UI_SelfBannerMediator.ts");
/* harmony import */ var _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _DefaultDevice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DefaultDevice */ "./src/LTGame/Platform/DefaultDevice.ts");
/* harmony import */ var _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DefaultRecordManager */ "./src/LTGame/Platform/DefaultRecordManager.ts");
/* harmony import */ var _EPlatformType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTPlatform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _ShareManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ShareManager */ "./src/LTGame/Platform/ShareManager.ts");












class WXPlatform {
    constructor() {
        this.platform = _EPlatformType__WEBPACK_IMPORTED_MODULE_9__["EPlatformType"].WX;
        this.safeArea = null;
        this.recordManager = new _DefaultRecordManager__WEBPACK_IMPORTED_MODULE_8__["default"]();
        this.device = new _DefaultDevice__WEBPACK_IMPORTED_MODULE_7__["default"]();
        this.loginCode = null;
        /**
         * 是否支持直接跳转到其他小程序
         */
        this.isSupportJumpOther = true;
        this._isBannerLoaded = false;
        this._isVideoLoaded = false;
        this._isInterstitialLoaded = false;
        this._cacheVideoAD = false;
        this.NavigateToAppSuccess = null;
    }
    Init(platformData) {
        this._base = window["wx"];
        if (this._base == null) {
            console.error("平台初始化错误", _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].platformStr);
            return;
        }
        this.platformData = platformData;
        this._InitLauchOption();
        this._Login();
        this._InitShareInfo();
        this._InitSystemInfo();
        this._CreateBannerAd();
        this._CreateVideoAd();
        this._CreateInterstitalAd();
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
                _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].instance.base.showToast({
                    title: "即将有更新请留意"
                });
            }
        });
        updateManager.onUpdateReady(() => {
            _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].instance.base.showModal({
                title: "更新提示",
                content: "新版本已经准备好，是否立即使用？",
                success: function (res) {
                    if (res.confirm) {
                        // 调用 applyUpdate 应用新版本并重启
                        let updateManager = _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].instance.base.getUpdateManager();
                        updateManager.applyUpdate();
                    }
                    else {
                        _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].instance.base.showToast({
                            icon: "none",
                            title: "小程序下一次「冷启动」时会使用新版本"
                        });
                    }
                }
            });
        });
        updateManager.onUpdateFailed(() => {
            _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].instance.base.showToast({
                title: "更新失败，下次启动继续..."
            });
        });
    }
    _Login() {
        this.loginState = {
            isLogin: false,
            code: ""
        };
        let loginData = {};
        loginData.success = (res) => {
            this.loginCode = res.code;
            this._OnLoginSuccess(res);
            console.error(this.loginState);
            this.getUserInfo();
        };
        loginData.fail = (res) => {
            console.error(_LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].platformStr, "登录失败", res);
            this.loginState.isLogin = false;
            this.loginState.code = "";
        };
        loginData.complete = () => {
            if (this.onLoginEnd != null) {
                this.onLoginEnd.run();
            }
        };
        this._base.login(loginData);
    }
    getUserInfo() {
        this.base.getUserInfo({
            withCredentials: true,
            lang: 'zh_CN',
            success: (result) => {
                console.log(result);
            },
            fail: () => { },
            complete: () => { }
        });
    }
    _OnLoginSuccess(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].platformStr, "登录成功", res);
        _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_6__["default"].Toast('登录成功');
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
            let shareInfo = _ShareManager__WEBPACK_IMPORTED_MODULE_11__["default"].instance.GetShareInfo();
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
        this.base = this._base;
        try {
            this.systemInfo = this._base.getSystemInfoSync();
            console.log("系统信息已获取", this.systemInfo);
            this.safeArea = this.systemInfo.safeArea;
            this._cacheScreenScale = this.systemInfo.screenWidth / Laya.stage.width;
        }
        catch (e) {
            console.error(e);
            console.error("获取设备信息失败,执行默认初始化");
            this.safeArea = null;
        }
    }
    _CreateInterstitalAd() {
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__["default"].IsNullOrEmpty(this.platformData.interstitialId)) {
            console.log("无有效的插页广告ID,取消加载");
            return;
        }
        this._interstitalFailedCount = 0;
        let intAdObj = {};
        intAdObj["adUnitId"] = this.platformData.interstitialId;
        this._intersitialAd = this._base.createInterstitialAd(intAdObj);
        if (this._intersitialAd == null) {
            console.error("createInterstitialAd返回值为null,取消初始化");
            return;
        }
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
        if (!this._cacheVideoAD) {
            console.log("当前策略为不缓存视频广告");
            return;
        }
        let createRewardedVideoAd = this._base["createRewardedVideoAd"];
        if (createRewardedVideoAd == null) {
            console.error("无createRewardedVideoAd方法,跳过初始化");
            return;
        }
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__["default"].IsNullOrEmpty(this.platformData.rewardVideoId)) {
            console.log("无有效的视频广告ID,取消加载");
            return;
        }
        this._videoFailedCount = 0;
        let videoObj = {};
        videoObj["adUnitId"] = this.platformData.rewardVideoId; // "adunit-5631637236cf16b6";
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
            Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__["CommonEventId"].RESUM_AUDIO);
            console.log("视频回调", res);
            let isEnd = res["isEnded"];
            // 修复广告bug
            _Async_Awaiters__WEBPACK_IMPORTED_MODULE_1__["default"].NextFrame().then(() => {
                if (isEnd) {
                    if (this._rewardSuccessed)
                        this._rewardSuccessed.run();
                }
                else {
                    if (this._rewardSkipped)
                        this._rewardSkipped.run();
                }
            });
        });
    }
    _CreateBannerAd() {
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__["default"].IsNullOrEmpty(this.platformData.bannerId)) {
            console.log("无有效的banner广告ID,取消加载");
            return;
        }
        let windowWidth = this._base.getSystemInfoSync().windowWidth;
        let windowHeight = this._base.getSystemInfoSync().windowHeight;
        let bannerObj = {};
        bannerObj["adUnitId"] = this.platformData.bannerId; // "adunit-b48894d44d318e5a";
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
            _UIExt_DefaultUI_UI_SelfBannerMediator__WEBPACK_IMPORTED_MODULE_5__["UI_SelfBannerMediator"].instance.Show();
            return;
        }
        this._bannerAd.show();
    }
    HideBannerAd() {
        _UIExt_DefaultUI_UI_SelfBannerMediator__WEBPACK_IMPORTED_MODULE_5__["UI_SelfBannerMediator"].instance.Hide();
        this._bannerAd.hide();
    }
    _DoCacheShowVideo(onSuccess, onSkipped) {
        if (!this._isVideoLoaded) {
            console.error("视频广告尚未加载好");
            return;
        }
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        this._isVideoLoaded = false;
        Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__["CommonEventId"].PAUSE_AUDIO);
        this._rewardVideo.show();
    }
    _DoNoCacheShowVideo(onSuccess, onSkipped) {
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__["default"].IsNullOrEmpty(this.platformData.rewardVideoId)) {
            console.log("无有效的视频广告ID,取消加载");
            onSkipped.run();
            return;
        }
        let createRewardedVideoAd = this._base["createRewardedVideoAd"];
        if (createRewardedVideoAd == null) {
            console.error("无createRewardedVideoAd方法,跳过初始化");
            onSkipped.run();
            return;
        }
        _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_6__["default"].ShowLoading("广告拉取中...");
        this._videoFailedCount = 0;
        let videoObj = {};
        videoObj["adUnitId"] = this.platformData.rewardVideoId; // "adunit-5631637236cf16b6";
        this._rewardVideo = createRewardedVideoAd(videoObj);
        this._rewardVideo.onLoad(() => {
            console.log("视频广告加载成功");
            this._isVideoLoaded = true;
        });
        this._rewardVideo.onError((res) => {
            this._videoFailedCount++;
            console.error("视频广告加载失败", res, this._videoFailedCount);
        });
        this._rewardVideo.onClose((res) => {
            Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__["CommonEventId"].RESUM_AUDIO);
            console.log("视频回调", res);
            let isEnd = res["isEnded"];
            _Async_Awaiters__WEBPACK_IMPORTED_MODULE_1__["default"].NextFrame().then(() => {
                if (isEnd) {
                    if (this._rewardSuccessed)
                        this._rewardSuccessed.run();
                }
                else {
                    if (this._rewardSkipped)
                        this._rewardSkipped.run();
                }
            });
        });
        this._rewardVideo.show().then(() => {
            _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_6__["default"].HideLoading();
        }).catch(err => {
            console.log("广告组件出现问题", err);
            // 可以手动加载一次
            this._rewardVideo.load().then(() => {
                console.log("手动加载成功");
                // 加载成功后需要再显示广告
                return this._rewardVideo.show().then(() => {
                    _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_6__["default"].HideLoading();
                }).catch((err) => {
                    console.error(err);
                    _UIExt_LTUI__WEBPACK_IMPORTED_MODULE_6__["default"].HideLoading();
                });
                ;
            });
        });
        ;
    }
    onVideoClose(res) {
        Laya.stage.event(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__["CommonEventId"].RESUM_AUDIO);
        console.log("视频回调", res);
        let isEnd = res["isEnded"];
        _Async_Awaiters__WEBPACK_IMPORTED_MODULE_1__["default"].NextFrame().then(() => {
            if (isEnd) {
                if (this._rewardSuccessed)
                    this._rewardSuccessed.run();
            }
            else {
                if (this._rewardSkipped)
                    this._rewardSkipped.run();
            }
        });
    }
    ShowRewardVideoAd(onSuccess, onSkipped) {
        if (this._cacheVideoAD) {
            this._DoCacheShowVideo(onSuccess, onSkipped);
        }
        else {
            this._DoNoCacheShowVideo(onSuccess, onSkipped);
        }
    }
    ShowRewardVideoAdAsync() {
        return new Promise(function (resolve) {
            _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].instance.ShowRewardVideoAd(Laya.Handler.create(this, () => {
                resolve(true);
            }), Laya.Handler.create(this, () => {
                resolve(false);
            }));
        });
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
        if (_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_3__["default"].IsNullOrEmpty(this.lauchOption.referrerInfo.appId)) {
            return null;
        }
        return this.lauchOption.referrerInfo.appId;
    }
    /**
     * 小游戏回到前台的事件
     */
    _OnShow(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].platformStr, "OnShow", res);
        _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].instance.lauchOption = res;
        _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].instance._CheckUpdate();
        // this.NavigateToAppSuccess = null;//wx
        _Async_Awaiters__WEBPACK_IMPORTED_MODULE_1__["default"].NextFrame().then(() => {
            if (_LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].instance.onResume) {
                _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].instance.onResume.runWith(res);
            }
            let cacheOnShow = _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].instance["_cacheOnShowHandle"];
            if (cacheOnShow) {
                cacheOnShow.run();
                _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].instance["_cacheOnShowHandle"] = null;
            }
        });
    }
    /**
     * 小游戏退出前台的事件
     */
    _OnHide(res) {
        console.log(_LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].platformStr, "OnHide", res);
        if (_LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].instance.onPause) {
            _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].instance.onPause.runWith(res);
        }
        //wx
        // if (this.NavigateToAppSuccess) {
        //     this.NavigateToAppSuccess();
        // }
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
        if (this._base['loadSubpackage'] == null) {
            console.log("无加载子包方法,跳过加载子包", name);
            if (onSuccess) {
                onSuccess.run();
            }
            return;
        }
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
    ShowToast(str) {
        this._base.showToast({
            title: str,
            duration: 2000
        });
    }
    OpenGameBox(appIds) {
        console.error("当前平台", _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].platformStr, "暂不支持互推游戏盒子");
    }
    NavigateToApp(appid, path, extra, showGC, isbanner, adid) {
        return new Promise((resolve, reject) => {
            if (showGC) {
                // GlobalUnit.gameManager.GameOver();
            }
            // this.NavigateToAppSuccess = null;
            wx.navigateToMiniProgram({
                appId: appid,
                path: path,
                extraData: extra,
                envVersion: '',
                success: (res) => {
                    if (isbanner) {
                        _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ReportClickAd(adid, 19, true);
                    }
                    else {
                        _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ReportClickAd(adid, 5, true);
                    }
                    console.log('小游戏跳转成功', res);
                    // this.NavigateToAppSuccess = () => {
                    // };
                    resolve(true);
                },
                fail: () => {
                    console.log('小游戏跳转失败：');
                    if (isbanner) {
                        _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ReportClickAd(adid, 19, false);
                    }
                    else {
                        _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ReportClickAd(adid, 5, false);
                    }
                    reject(false);
                    if (showGC) {
                        _UIExt_DefaultUI_UI_GameCenterMediator__WEBPACK_IMPORTED_MODULE_4__["UI_GameCenterMediator"].instance.Show();
                    }
                },
                complete: () => { }
            });
        });
    }
    createShortcut() {
        console.log('暂未实现');
    }
    GetStorage(key) {
        if (this.base && this.base.getStorageSync && key) {
            try {
                return this.base.getStorageSync(key);
            }
            catch (error) {
                console.log('getStorageSync error: ', JSON.stringify(error));
                return null;
            }
        }
    }
    SetStorage(key, data) {
        if (this.base && this.base.getStorageSync && key) {
            try {
                return this.base.setStorageSync(key, data);
            }
            catch (error) {
                console.log('setStorageSync error: ', JSON.stringify(error));
            }
        }
    }
    followOfficialAccount() {
        console.error("当前平台", _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].platformStr, "暂不支持关注");
    }
    checkFollowState() {
        console.error("当前平台", _LTPlatform__WEBPACK_IMPORTED_MODULE_10__["default"].platformStr, "暂不支持关注");
    }
    SetClipboardData(str) {
        this._base.setClipboardData({ data: str });
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
        if (onProgress && onProgress.once) {
            onProgress.once = false;
        }
        Laya.loader.create(urls, onCompleted, onProgress);
    }
    static Load2d(urls, onCompleted, onProgress = null) {
        if (onProgress && onProgress.once) {
            onProgress.once = false;
        }
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
    static Get(resUrl, noClone = false) {
        let getRes = Laya.loader.getRes(resUrl);
        if (getRes == null) {
            console.error("资源尚未加载", resUrl);
            return null;
        }
        return noClone ? getRes : getRes.clone();
    }
    static LoadAndGet(resUrl, noClone = false) {
        return __awaiter(this, void 0, void 0, function* () {
            yield LTRes.LoadAsync(resUrl);
            return LTRes.Get(resUrl, noClone);
        });
    }
    static Unload(resUrl) {
        Laya.loader.clearRes(resUrl);
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
    InitLoadSet() {
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
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Oppo:
                adapter = Laya.QGMiniAdapter;
                break;
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Vivo:
                adapter = Laya.VVMiniAdapter;
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
    SetRemoteUrl(baseUrl) {
        this._baseUrl = baseUrl;
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
                _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.LoadSubpackage(pack.name, Laya.Handler.create(this, () => {
                    this._subpackLoaded[cacheIndex] = true;
                    for (let i = 0; i < this._subpackLoaded.length; ++i) {
                        if (!this._subpackLoaded[i])
                            return;
                    }
                    if (onComplete) {
                        onComplete.run();
                    }
                }), Laya.Handler.create(this, () => {
                    console.error("分包加载失败", pack);
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

/***/ "./src/LTGame/Start/ESceneType.ts":
/*!****************************************!*\
  !*** ./src/LTGame/Start/ESceneType.ts ***!
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

/***/ "./src/LTGame/Start/LTMain.ts":
/*!************************************!*\
  !*** ./src/LTGame/Start/LTMain.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTMain; });
/* harmony import */ var _Commom_EScreenOrientation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Commom/EScreenOrientation */ "./src/LTGame/Commom/EScreenOrientation.ts");

class LTMain {
    constructor(mainLogicClass) {
        this._mainLogic = new mainLogicClass();
        let config3D = new Config3D();
        config3D.octreeCulling = false;
        config3D.enableMultiLight = false;
        config3D.isAntialias = true;
        //根据IDE设置初始化引擎
        Laya3D.init(this._mainLogic.designWidth, this._mainLogic.designHeight, config3D, Laya.Handler.create(null, () => {
            switch (this._mainLogic.screenOrientation) {
                case _Commom_EScreenOrientation__WEBPACK_IMPORTED_MODULE_0__["EScreenOrientation"].Landscape:
                    Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
                    break;
                case _Commom_EScreenOrientation__WEBPACK_IMPORTED_MODULE_0__["EScreenOrientation"].Portrait:
                    Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
                    break;
                default:
                    console.error("未处理的屏幕初始化方向", this._mainLogic.screenOrientation);
                    break;
            }
            Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
            Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
            //兼容微信不支持加载scene后缀场景
            Laya.URL.exportSceneToJson = true;
            //打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
            // if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
            // if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
            if (this._mainLogic.enableStat) {
                Laya.Stat.show(0, 100);
            }
            Laya.alertGlobalError(false);
            this._mainLogic.InitGame();
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
/* harmony import */ var _UIExt_FGui_LoadUIPack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UIExt/FGui/LoadUIPack */ "./src/LTGame/UIExt/FGui/LoadUIPack.ts");
/* harmony import */ var _ESceneType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ESceneType */ "./src/LTGame/Start/ESceneType.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Res/LTRespackManager */ "./src/LTGame/Res/LTRespackManager.ts");
/* harmony import */ var _UIExt_DefaultUI_UI_LTGame_LTGameBinder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UIExt/DefaultUI/UI/LTGame/LTGameBinder */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/LTGameBinder.ts");
/* harmony import */ var _UIExt_FGui_FGuiData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UIExt/FGui/FGuiData */ "./src/LTGame/UIExt/FGui/FGuiData.ts");
/* harmony import */ var _UIExt_FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../UIExt/FGui/FGuiEx */ "./src/LTGame/UIExt/FGui/FGuiEx.ts");
/* harmony import */ var _Config_ConfigManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Config/ConfigManager */ "./src/LTGame/Config/ConfigManager.ts");
/* harmony import */ var _UIExt_DefaultUI_UI_FlyPanelMediator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../UIExt/DefaultUI/UI_FlyPanelMediator */ "./src/LTGame/UIExt/DefaultUI/UI_FlyPanelMediator.ts");
/* harmony import */ var _UIExt_DefaultUI_UI_LTUI_LTUIBinder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../UIExt/DefaultUI/UI/LTUI/LTUIBinder */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/LTUIBinder.ts");
/* harmony import */ var _LTG_CommonUI_UI_LTCom_LTComBinder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../LTG_CommonUI/UI/LTCom/LTComBinder */ "./src/LTG_CommonUI/UI/LTCom/LTComBinder.ts");













class LTSplashScene extends _Fsm_BaseState__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(_ESceneType__WEBPACK_IMPORTED_MODULE_2__["ESceneType"].Splash);
        /**
         * 用于初始化的ui包
         */
        this._initUiPack = new _UIExt_FGui_LoadUIPack__WEBPACK_IMPORTED_MODULE_1__["LoadUIPack"]("res/fgui_load/Load");
        /**
         * 需要加载的其他UI包
         */
        this._needLoadOtherUIPack = [
            new _UIExt_FGui_LoadUIPack__WEBPACK_IMPORTED_MODULE_1__["LoadUIPack"]("res/fgui/Main")
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
        this._jsonPath = "subpack.json";
        this._useCommonUI = false;
        switch (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platform) {
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].WX:
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].QQ:
                this._loadProgressWeight = [10, 1, 5, 2];
                break;
            default:
                this._loadProgressWeight = [1, 1, 5, 2];
                break;
        }
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
        this._needLoadOtherUIPack.push(new _UIExt_FGui_LoadUIPack__WEBPACK_IMPORTED_MODULE_1__["LoadUIPack"]("res/ltgame/ui/LTGame"));
        if (this._useCommonUI) {
            this._needLoadOtherUIPack.push(new _UIExt_FGui_LoadUIPack__WEBPACK_IMPORTED_MODULE_1__["LoadUIPack"]("res/ltgame/ui/LTCom", 2));
        }
        Laya.loader.load(this._jsonPath, Laya.Handler.create(this, this._OnJsonLoaded));
    }
    _OnJsonLoaded() {
        let loadJson = Laya.loader.getRes(this._jsonPath);
        Laya.loader.clearRes(this._jsonPath);
        if (loadJson != null) {
            for (let i = 0; i < loadJson.length; ++i) {
                let jsonData = loadJson[i];
                console.log("自动设置分包", jsonData);
                _Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_5__["default"].instance.AddPackData(jsonData);
            }
        }
        _Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_5__["default"].instance.InitLoadSet();
        this._InitUI();
    }
    _InitUI() {
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.RecordEvent("开始初始化启动界面", null);
        _UIExt_DefaultUI_UI_LTGame_LTGameBinder__WEBPACK_IMPORTED_MODULE_6__["default"].bindAll();
        _UIExt_DefaultUI_UI_LTUI_LTUIBinder__WEBPACK_IMPORTED_MODULE_11__["default"].bindAll();
        if (this._useCommonUI) {
            _LTG_CommonUI_UI_LTCom_LTComBinder__WEBPACK_IMPORTED_MODULE_12__["default"].bindAll();
        }
        this._OnBindUI();
        let loadUrl = [];
        this._initUiPack.PushUrl(loadUrl);
        Laya.loader.load(loadUrl, Laya.Handler.create(this, this._OnUILoaded));
    }
    _OnBindUI() { }
    _OnUILoaded() {
        this._initUiPack.AddPackage();
        // 打开界面
        let needFit = new _UIExt_FGui_FGuiData__WEBPACK_IMPORTED_MODULE_7__["default"]();
        needFit.needFitScreen = false;
        this._ui = _UIExt_FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_8__["default"].AddUI(this._splashUIClass, needFit);
        this._ui.sortingOrder = Number.MAX_SAFE_INTEGER;
        this._progressUI = this._ui["m_progress"];
        this._progressUI.value = 0;
        this._isUIShowed = true;
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.RecordEvent("启动界面初始化完成", null);
        if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_4__["EPlatformType"].Oppo) {
            _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.reportMonitor();
        }
        _Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_5__["default"].instance.LoadSubPack(Laya.Handler.create(this, this._OnPackLoaded), Laya.Handler.create(this, this._OnPackProgress, null, false));
    }
    _OnPackProgress(value) {
        this._subPackProgress = value;
    }
    _OnPackLoaded() {
        this._StartLoad();
    }
    _StartLoad() {
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.RecordEvent("开始加载配置表", null);
        this._OnSetLoadConfig();
        if (_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_9__["ConfigManager"].needLoadCount <= 0) {
            this._configProgress = 1;
            this._OnConfigLoaded();
            return;
        }
        _Config_ConfigManager__WEBPACK_IMPORTED_MODULE_9__["ConfigManager"].StartLoad(Laya.Handler.create(this, this._OnConfigLoaded), Laya.Handler.create(this, this._OnConfigProgress, null, false));
    }
    _OnSetLoadConfig() {
    }
    _OnConfigProgress(value) {
        this._configProgress = value;
    }
    _OnConfigLoaded() {
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.RecordEvent("开始加载剩余UI资源", null);
        if (this._needLoadOtherUIPack.length == 0) {
            this._OnOtherUILoaded();
            return;
        }
        let uiLoadData = [];
        for (let i = 0; i < this._needLoadOtherUIPack.length; ++i) {
            let otherUIPack = this._needLoadOtherUIPack[i];
            otherUIPack.PushUrl(uiLoadData);
        }
        Laya.loader.load(uiLoadData, Laya.Handler.create(this, this._OnOtherUILoaded), Laya.Handler.create(this, this._OnOtherUIProgress, null, false));
    }
    _OnOtherUIProgress(value) {
        this._otherUIProgress = value;
    }
    _OnOtherUILoaded() {
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.RecordEvent("开始加载剩余游戏资源", null);
        for (let i = 0; i < this._needLoadOtherUIPack.length; ++i) {
            let otherUIPack = this._needLoadOtherUIPack[i];
            otherUIPack.AddPackage();
            console.log(otherUIPack, "已加载");
        }
        _UIExt_DefaultUI_UI_FlyPanelMediator__WEBPACK_IMPORTED_MODULE_10__["default"].instance.Show();
        let loadUrls = [];
        this._OnGameResPrepared(loadUrls);
        if (loadUrls.length == 0) {
            this._resProgress = 1;
            this._OnResLoaded();
            return;
        }
        Laya.loader.create(loadUrls, Laya.Handler.create(this, this._OnResLoaded), Laya.Handler.create(this, this._OnResProgress, null, false));
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
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.RecordEvent("进入游戏", null);
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
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _UIExt_FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UIExt/FGui/FGuiEx */ "./src/LTGame/UIExt/FGui/FGuiEx.ts");
/* harmony import */ var _LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LTUtils/MonoHelper */ "./src/LTGame/LTUtils/MonoHelper.ts");
/* harmony import */ var _LTVersion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../LTVersion */ "./src/LTGame/LTVersion.ts");
/* harmony import */ var _Commom_EScreenOrientation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Commom/EScreenOrientation */ "./src/LTGame/Commom/EScreenOrientation.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _SDK_Impl_SDK_Default__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../SDK/Impl/SDK_Default */ "./src/SDK/Impl/SDK_Default.ts");
/* harmony import */ var _Async_Awaiters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");











class LTStart {
    constructor() {
        this.enableStat = false;
        this.screenOrientation = _Commom_EScreenOrientation__WEBPACK_IMPORTED_MODULE_7__["EScreenOrientation"].Portrait;
    }
    get _currentState() {
        return this._fsm.currState;
    }
    get designWidth() {
        switch (this.screenOrientation) {
            case _Commom_EScreenOrientation__WEBPACK_IMPORTED_MODULE_7__["EScreenOrientation"].Portrait:
                return 750;
            case _Commom_EScreenOrientation__WEBPACK_IMPORTED_MODULE_7__["EScreenOrientation"].Landscape:
                return 1334;
            default:
                console.error("未处理的屏幕初始化方向", this.screenOrientation);
                return 0;
        }
    }
    get designHeight() {
        switch (this.screenOrientation) {
            case _Commom_EScreenOrientation__WEBPACK_IMPORTED_MODULE_7__["EScreenOrientation"].Portrait:
                return 1334;
            case _Commom_EScreenOrientation__WEBPACK_IMPORTED_MODULE_7__["EScreenOrientation"].Landscape:
                return 750;
            default:
                console.error("未处理的屏幕初始化方向", this.screenOrientation);
                return 0;
        }
    }
    InitGame() {
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].CreateInstance();
        console.log("游戏开始初始化,当前框架版本号", _LTVersion__WEBPACK_IMPORTED_MODULE_6__["default"].version);
        this._Init();
    }
    _Init() {
        return __awaiter(this, void 0, void 0, function* () {
            let platformData = new _Platform_Data_LTPlatformData__WEBPACK_IMPORTED_MODULE_2__["default"]();
            this._HandleInitPlatform(_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.platform, platformData);
            _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.Init(platformData);
            this._HandleSDK();
            if (!_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_8__["default"].isInited) {
                _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_8__["default"].CreateInstace(_SDK_Impl_SDK_Default__WEBPACK_IMPORTED_MODULE_9__["default"], "default", "default", "default");
            }
            /* 2.6.0 版本之后 该设置已经变为默认false,无需手动禁用,如果后期调整,再进行打开
            // 非web平台禁用debug模式
            if (LTPlatform.instance.platform != EPlatformType.Web) {
                Laya.Shader3D.debugMode = false;
            }
            */
            if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Web) {
                while (!_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.safeArea) {
                    yield _Async_Awaiters__WEBPACK_IMPORTED_MODULE_10__["default"].NextFrame();
                }
            }
            _UIExt_FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_4__["default"].Init(_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.safeArea);
            Laya.timer.frameOnce(1, this, this._NextFramUpdate);
        });
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
        _LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_5__["default"].instance.AddAction(_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_5__["EActionType"].Update, this, this._LogicUpdate);
        _LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_5__["default"].instance.AddAction(_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_5__["EActionType"].LateUpdate, this, this._LateUpdate);
    }
    _UnRegistUpdate() {
        _LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_5__["default"].instance.RemoveAction(_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_5__["EActionType"].Update, this, this._LogicUpdate);
        _LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_5__["default"].instance.RemoveAction(_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_5__["EActionType"].LateUpdate, this, this._LateUpdate);
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

/***/ "./src/LTGame/UIExt/DefaultUI/Cmp/View_BottomGames.ts":
/*!************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/Cmp/View_BottomGames.ts ***!
  \************************************************************/
/*! exports provided: ON_BANNER_SHOWN, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_BANNER_SHOWN", function() { return ON_BANNER_SHOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_BottomGames; });
/* harmony import */ var _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../SDK/Impl/SDK_YQ */ "./src/SDK/Impl/SDK_YQ.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _UI_LTGame_UI_bottomGames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/LTGame/UI_bottomGames */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_bottomGames.ts");
/* harmony import */ var _UI_LTGame_UI_CommonEndSliderADs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UI/LTGame/UI_CommonEndSliderADs */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonEndSliderADs.ts");







const ON_BANNER_SHOWN = "ON_BANNER_RESIZE";
class View_BottomGames {
    constructor(ui) {
        this._posId = 0;
        this._ui = ui;
        this._Init();
    }
    static CreateView(tagUI) {
        if (tagUI == null)
            return null;
        // 额外判定一次是否支持交叉推广,如果不支持,则隐藏交叉推广
        if (!_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.isSupportJumpOther) {
            tagUI.dispose();
            return null;
        }
        if (tagUI instanceof _UI_LTGame_UI_bottomGames__WEBPACK_IMPORTED_MODULE_5__["default"]) {
            return new View_BottomGames(tagUI);
        }
        if (tagUI instanceof _UI_LTGame_UI_CommonEndSliderADs__WEBPACK_IMPORTED_MODULE_6__["default"]) {
            return new View_BottomGames(tagUI);
        }
        let uiInstance = null;
        if (tagUI.height < 140) {
            uiInstance = _UI_LTGame_UI_bottomGames__WEBPACK_IMPORTED_MODULE_5__["default"].createInstance();
        }
        else {
            uiInstance = _UI_LTGame_UI_CommonEndSliderADs__WEBPACK_IMPORTED_MODULE_6__["default"].createInstance();
        }
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_BottomGames(uiInstance);
    }
    get ui() {
        return this._ui;
    }
    _Init() {
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance instanceof _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            this._posId = 5;
        }
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.adManager.GetADListByLocationId(this._posId);
        if (this._cacheAds == null) {
            Laya.stage.on(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__["CommonEventId"].SELF_AD_INITED, this, this._OnAdInited);
            this.ui.visible = false;
        }
        else {
            this.ui.m_list.setVirtualAndLoop();
            this.ui.m_list.scrollPane.bouncebackEffect = false;
            this.ui.m_list.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
            this.ui.m_list.numItems = this._cacheAds.length;
            this.ui.m_list.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
            Laya.timer.loop(5000, this, () => {
                if (this.ui.height < 140) {
                    this.ui.m_list.scrollPane.scrollRight(133 / 128, true);
                }
                else {
                    this.ui.m_list.scrollPane.scrollRight(169 / 150, true);
                }
            });
            let ads = [];
            for (let i = 0; i < this._cacheAds.length; i++) {
                const adData = this._cacheAds[i];
                let ad = {};
                ad.ad_id = adData.ad_id;
                ad.location_id = this._posId;
                ad.num = 1;
                ads.push(ad);
            }
            console.log('bottom', this._cacheAds, ads);
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ReportShowAd(ads);
        }
        // Laya.stage.on(ON_BANNER_SHOWN, this, this.resetPos);
    }
    resetPos(bannerHight) {
        this.ui.y = Laya.stage.height - bannerHight - this.ui.height;
    }
    _OnAdInited(posId) {
        if (posId != this._posId)
            return;
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.adManager.GetADListByLocationId(this._posId);
        this.ui.m_list.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
        this.ui.m_list.numItems = this._cacheAds.length;
        this.ui.m_list.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
        this.ui.visible = true;
    }
    _OnAdItemRender(index, adUI) {
        let adData = this._cacheAds[index];
        adUI.data = index;
        adUI.m_icon.m_icon.url = adData.ad_img;
        adUI.m_text_name.text = adData.ad_name;
    }
    _OnClickGameItem(item) {
        let data = this._cacheAds[item.data];
        let uid = data.ad_appid;
        switch (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform) {
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Oppo:
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Vivo:
                uid = data.ad_package;
                break;
            default:
                break;
        }
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.NavigateToApp(uid, data.ad_path, null, true, false, data.ad_id);
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/Cmp/View_End3X3Games.ts":
/*!************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/Cmp/View_End3X3Games.ts ***!
  \************************************************************/
/*! exports provided: ON_BANNER_SHOWN, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_BANNER_SHOWN", function() { return ON_BANNER_SHOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_End3X3Games; });
/* harmony import */ var _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../SDK/Impl/SDK_YQ */ "./src/SDK/Impl/SDK_YQ.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _UI_LTGame_UI_End3X3Ad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/LTGame/UI_End3X3Ad */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_End3X3Ad.ts");






const ON_BANNER_SHOWN = "ON_BANNER_RESIZE";
class View_End3X3Games {
    constructor(ui) {
        this._posId = 0;
        this._ui = ui;
        this._Init();
    }
    static CreateView(tagUI) {
        if (tagUI == null)
            return null;
        // 额外判定一次是否支持交叉推广,如果不支持,则隐藏交叉推广
        if (!_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.isSupportJumpOther) {
            tagUI.dispose();
            return null;
        }
        if (tagUI instanceof _UI_LTGame_UI_End3X3Ad__WEBPACK_IMPORTED_MODULE_5__["default"]) {
            return new View_End3X3Games(tagUI);
        }
        let uiInstance = _UI_LTGame_UI_End3X3Ad__WEBPACK_IMPORTED_MODULE_5__["default"].createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_End3X3Games(uiInstance);
    }
    get ui() {
        return this._ui;
    }
    _Init() {
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance instanceof _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            this._posId = 5;
        }
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.adManager.GetADListByLocationId(this._posId);
        if (this._cacheAds == null) {
            Laya.stage.on(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__["CommonEventId"].SELF_AD_INITED, this, this._OnAdInited);
            this.ui.visible = false;
        }
        else {
            this.ui.m_list.setVirtual();
            this.ui.m_list.scrollPane.bouncebackEffect = false;
            this.ui.m_list.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
            this.ui.m_list.numItems = this._cacheAds.length;
            this.ui.m_list.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
            Laya.timer.loop(200, this, () => {
                this.ui.m_list.scrollPane.scrollDown(0.02, true);
            });
            let ads = [];
            for (let i = 0; i < this._cacheAds.length; i++) {
                const adData = this._cacheAds[i];
                let ad = {};
                ad.ad_id = adData.ad_id;
                ad.location_id = this._posId;
                ad.num = 1;
                ads.push(ad);
            }
            console.log('bottom', this._cacheAds, ads);
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ReportShowAd(ads);
        }
        // Laya.stage.on(ON_BANNER_SHOWN, this, this.resetPos);
    }
    resetPos(bannerHight) {
        this.ui.y = Laya.stage.height - bannerHight - this.ui.height;
    }
    _OnAdInited(posId) {
        if (posId != this._posId)
            return;
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.adManager.GetADListByLocationId(this._posId);
        this.ui.m_list.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
        this.ui.m_list.numItems = this._cacheAds.length;
        this.ui.m_list.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
        this.ui.visible = true;
    }
    _OnAdItemRender(index, adUI) {
        let adData = this._cacheAds[index];
        adUI.data = index;
        adUI.m_icon.m_icon.url = adData.ad_img;
        adUI.m_title.text = adData.ad_name;
    }
    _OnClickGameItem(item) {
        let data = this._cacheAds[item.data];
        let uid = data.ad_appid;
        switch (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform) {
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Oppo:
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Vivo:
                uid = data.ad_package;
                break;
            default:
                break;
        }
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.NavigateToApp(uid, data.ad_path, null, true, false, data.ad_id);
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/Cmp/View_EndSlideGames.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/Cmp/View_EndSlideGames.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_EndSlideGames; });
/* harmony import */ var _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../SDK/Impl/SDK_YQ */ "./src/SDK/Impl/SDK_YQ.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _UI_LTGame_UI_EndSlideGames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/LTGame/UI_EndSlideGames */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_EndSlideGames.ts");






/**
 * 结算页滑动导出位 __endSG
 */
class View_EndSlideGames {
    constructor(ui) {
        this._posId = 0;
        this._ui = ui;
        this._Init();
    }
    static CreateView(tagUI) {
        if (tagUI == null)
            return null;
        // 额外判定一次是否支持交叉推广,如果不支持,则隐藏交叉推广
        if (!_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.isSupportJumpOther) {
            tagUI.dispose();
            return null;
        }
        if (tagUI instanceof _UI_LTGame_UI_EndSlideGames__WEBPACK_IMPORTED_MODULE_5__["default"]) {
            return new View_EndSlideGames(tagUI);
        }
        let uiInstance = _UI_LTGame_UI_EndSlideGames__WEBPACK_IMPORTED_MODULE_5__["default"].createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_EndSlideGames(uiInstance);
    }
    get ui() {
        return this._ui;
    }
    _Init() {
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance instanceof _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            this._posId = 5;
        }
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.adManager.GetADListByLocationId(this._posId);
        if (this._cacheAds == null) {
            Laya.stage.on(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__["CommonEventId"].SELF_AD_INITED, this, this._OnAdInited);
        }
        else {
            for (let i = 0; i < 3; i++) {
                this.initLists(i);
            }
            let ads = [];
            this._cacheAds.forEach(adData => {
                let ad = {};
                ad.ad_id = adData.ad_id;
                ad.location_id = this._posId;
                ad.num = 1;
                ads.push(ad);
            });
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ReportShowAd(ads);
        }
    }
    initLists(index) {
        this.ui.m_ad[`m_list${index}`].setVirtualAndLoop();
        this.ui.m_ad[`m_list${index}`].scrollPane.bouncebackEffect = false;
        this.ui.m_ad[`m_list${index}`].itemRenderer = Laya.Handler.create(this, (id, adUI) => this._OnAdItemRender(id, adUI, index), null, false);
        this.ui.m_ad[`m_list${index}`].numItems = this._cacheAds.length;
        this.ui.m_ad[`m_list${index}`].on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
        Laya.timer.loop(100, this, () => {
            this.ui.m_ad[`m_list${index}`].scrollPane.scrollRight(0.01, true);
        });
    }
    _OnAdInited(posId) {
        if (posId != this._posId)
            return;
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.adManager.GetADListByLocationId(this._posId);
        for (let i = 0; i < 3; i++) {
            this.initLists(i);
        }
    }
    _OnAdItemRender(index, adUI, rowId) {
        let ind = (4 * rowId + index) % this._cacheAds.length;
        let adData = this._cacheAds[ind];
        adUI.data = ind;
        adUI.m_icon.m_icon.url = adData.ad_img;
        adUI.m_text_name.text = '';
        // let ad: any = {};
        // ad.ad_id = adData.ad_id;
        // ad.location_id = 5;
        // ad.num = 1;
        // LTSDK.instance.RecordShowAd([ad]);
    }
    _OnClickGameItem(item) {
        let data = this._cacheAds[item.data];
        let uid = data.ad_appid;
        switch (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform) {
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Oppo:
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Vivo:
                uid = data.ad_package;
                break;
            default:
                break;
        }
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.NavigateToApp(uid, data.ad_path, null, true, false, data.ad_id);
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/Cmp/View_HotGame.ts":
/*!********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/Cmp/View_HotGame.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_HotGame; });
/* harmony import */ var _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../SDK/common/ECheckState */ "./src/SDK/common/ECheckState.ts");
/* harmony import */ var _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../SDK/Impl/SDK_YQ */ "./src/SDK/Impl/SDK_YQ.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Async_Awaiters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _UI_LTGame_UI_hot_game__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../UI/LTGame/UI_hot_game */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_hot_game.ts");









class View_HotGame {
    constructor(ui) {
        /**
         * 每五秒更新一次
         */
        this._updateTime = 5000;
        this._posId = 0;
        this._ui = ui;
        this._Init();
    }
    static CreateView(tagUI) {
        if (tagUI == null)
            return null;
        // 额外判定一次是否支持交叉推广,如果不支持,则隐藏交叉推广
        if (!_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.isSupportJumpOther) {
            tagUI.dispose();
            return null;
        }
        if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_6__["EPlatformType"].Oppo && _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__["default"].instance.checkState == _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_0__["ECheckState"].InCheck) {
            // 只有oppo支持
            console.log("hotgame,审核");
            tagUI.dispose();
            return null;
        }
        if (tagUI instanceof _UI_LTGame_UI_hot_game__WEBPACK_IMPORTED_MODULE_8__["default"]) {
            return new View_HotGame(tagUI);
        }
        let uiInstance = _UI_LTGame_UI_hot_game__WEBPACK_IMPORTED_MODULE_8__["default"].createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_HotGame(uiInstance);
    }
    get ui() {
        return this._ui;
    }
    _Init() {
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__["default"].instance instanceof _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            this._posId = 5;
        }
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__["default"].instance.adManager.GetADListByLocationId(this._posId);
        if (this._cacheAds == null) {
            Laya.stage.on(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_4__["CommonEventId"].SELF_AD_INITED, this, this._OnAdInited);
        }
        else {
            this._cacheIndex = _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_5__["default"].RandomInt(0, this._cacheAds.length);
            this.ui.onClick(this, this._OnClickAD);
            this._UpdateUI();
            this._LoopUpdate();
        }
    }
    _OnAdInited(posId) {
        if (posId != this._posId)
            return;
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__["default"].instance.adManager.GetADListByLocationId(this._posId);
        this._cacheIndex = _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_5__["default"].RandomInt(0, this._cacheAds.length);
        this.ui.onClick(this, this._OnClickAD);
        this._UpdateUI();
        this._LoopUpdate();
    }
    _LoopUpdate() {
        return __awaiter(this, void 0, void 0, function* () {
            while (this.ui && !this.ui.isDisposed) {
                yield _Async_Awaiters__WEBPACK_IMPORTED_MODULE_3__["default"].Frames(1);
                this._remainUpdateTime -= Laya.timer.delta;
                if (this._remainUpdateTime < 0) {
                    this._UpdateUI();
                }
            }
        });
    }
    _UpdateUI() {
        this._showAd = this._cacheAds[this._cacheIndex];
        this._cacheIndex++;
        if (this._cacheIndex >= this._cacheAds.length) {
            this._cacheIndex = 0;
        }
        this.ui.m_ic.m_icon.url = this._showAd.ad_img;
        this._remainUpdateTime = this._updateTime;
        let ad = {};
        ad.ad_id = this._showAd.ad_id;
        ad.location_id = this._posId;
        ad.num = 1;
        _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__["default"].instance.ReportShowAd([ad]);
    }
    _OnClickAD() {
        let uid = this._showAd.ad_appid;
        switch (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.platform) {
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_6__["EPlatformType"].Oppo:
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_6__["EPlatformType"].Vivo:
                uid = this._showAd.ad_package;
                break;
            default:
                break;
        }
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_7__["default"].instance.NavigateToApp(uid, this._showAd.ad_path, null, true, false, this._showAd.ad_id);
        this._UpdateUI();
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/Cmp/View_NativeIcon.ts":
/*!***********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/Cmp/View_NativeIcon.ts ***!
  \***********************************************************/
/*! exports provided: View_NativeIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NativeIcon", function() { return View_NativeIcon; });
/* harmony import */ var _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../SDK/common/ECheckState */ "./src/SDK/common/ECheckState.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _UI_LTGame_UI_NativeIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/LTGame/UI_NativeIcon */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeIcon.ts");
/* harmony import */ var _LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../LTUtils/LTUtils */ "./src/LTGame/LTUtils/LTUtils.ts");
/* harmony import */ var _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _LTUI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../LTUI */ "./src/LTGame/UIExt/LTUI.ts");









class View_NativeIcon {
    constructor(ui, ids) {
        this._ui = ui;
        if (ids == null || ids.length == 0) {
            this._cacheIds = _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platformData.nativeIconIds;
        }
        else {
            this._cacheIds = ids;
        }
        console.log("初始化广告id", this._cacheIds);
        this._Init();
    }
    static CreateView(tagUI) {
        if (tagUI == null)
            return null;
        if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Oppo && _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Vivo) {
            console.log("native_icon 已隐藏,只有oppo vivo平台支持");
            tagUI.dispose();
            return null;
        }
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.checkState == _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_0__["ECheckState"].InCheck) {
            // 只有oppo支持
            console.log("native_iconLong已隐藏,审核");
            tagUI.dispose();
            return null;
        }
        let uiInstance = _UI_LTGame_UI_NativeIcon__WEBPACK_IMPORTED_MODULE_5__["default"].createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        uiInstance.setSize(tagUI.width, tagUI.height);
        let forceAdIdsStr = tagUI.data;
        let forceAdIds = [];
        if (!_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(forceAdIdsStr)) {
            let splitStrs = forceAdIdsStr.split(',');
            for (let i = 0; i < splitStrs.length; ++i) {
                forceAdIds.push(splitStrs[i]);
            }
        }
        tagUI.dispose();
        return new View_NativeIcon(uiInstance, forceAdIds);
    }
    get ui() {
        return this._ui;
    }
    get visible() {
        return this.ui.visible;
    }
    set visible(v) {
        this.ui.visible = v;
    }
    ClickAd() {
        console.log("点击Icon", this._cacheAdData);
        if (this._cacheAdData) {
            // 相应点击事件
            View_NativeIcon._cacheNativeAd.reportAdClick({
                adId: this._cacheAdData.adId
            });
            // 刷新
            this._Init();
        }
        else {
            this.ui.visible = false;
            _LTUI__WEBPACK_IMPORTED_MODULE_8__["default"].Toast('暂时没有广告');
        }
    }
    _Init() {
        return __awaiter(this, void 0, void 0, function* () {
            if (View_NativeIcon._cacheNativeAd != null) {
                View_NativeIcon._cacheNativeAd.destroy();
                View_NativeIcon._cacheNativeAd = null;
            }
            this.visible = false;
            this.ui.visible = false;
            let i = _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_7__["default"].RandomInt(0, this._cacheIds.length);
            // for (let i = 0; i < this._cacheIds.length; ++i) {
            let ret = yield this._LoadIconData(i);
            if (ret && this._cacheAdData) {
                this.visible = true;
                this.ui.visible = true;
                let icon = this._cacheAdData.icon;
                if (!icon && this._cacheAdData.imgUrlList.length) {
                    icon = this._cacheAdData.imgUrlList[0];
                }
                this.ui.m_icon_img.url = icon;
                this.ui.m_icon_tip.url = this._cacheAdData.logoUrl;
                // this.ui.m_title.text = this._cacheAdData.title;
                // this.ui.m_desc.text = this._cacheAdData.desc;
                View_NativeIcon._cacheNativeAd.reportAdShow({
                    adId: this._cacheAdData.adId
                });
                console.log("原生icon广告已展示", this._cacheAdData);
                return;
            }
            // }
        });
    }
    _OnClickAd() {
        this.ClickAd();
    }
    clickClose() {
        let rate = Object(_LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_6__["randomRangeInt"])(0, 100);
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.payRate > rate) {
            this._OnClickAd();
        }
        this.visible = false;
        this.ui.visible = false;
    }
    _LoadIconData(index) {
        return __awaiter(this, void 0, void 0, function* () {
            let nativeAd = null;
            if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Oppo) {
                nativeAd = _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.base.createNativeAd({
                    adUnitId: this._cacheIds[index]
                });
                View_NativeIcon._cacheNativeAd = nativeAd;
                let loadRet = yield nativeAd.load();
                if (loadRet["code"] == 0) {
                    // 加载成功
                    let adList = loadRet['adList'];
                    if (adList == null || adList.length == 0) {
                        console.error("native icon 加载失败", loadRet);
                        return false;
                    }
                    let adData = adList[0];
                    console.log('广告数据加载完成', loadRet);
                    if (adData == null) {
                        console.error("native icon 加载失败", loadRet);
                        return false;
                    }
                    this._cacheAdData = adData;
                    return true;
                }
                else {
                    console.error("native icon 加载失败", loadRet);
                    return false;
                }
            }
            else {
                nativeAd = _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.base.createNativeAd({
                    posId: this._cacheIds[index],
                });
                View_NativeIcon._cacheNativeAd = nativeAd;
                nativeAd.onLoad((res) => {
                    console.log('原生广告加载完成-onload触发', JSON.stringify(res));
                    if (res && res.adList) {
                        this._cacheAdData = res.adList.pop();
                    }
                });
                nativeAd.onError(err => {
                    console.log("原生广告加载异常", err);
                });
                yield nativeAd.load();
            }
        });
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/Cmp/View_NativeIconLong.ts":
/*!***************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/Cmp/View_NativeIconLong.ts ***!
  \***************************************************************/
/*! exports provided: View_NativeIconLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NativeIconLong", function() { return View_NativeIconLong; });
/* harmony import */ var _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../SDK/common/ECheckState */ "./src/SDK/common/ECheckState.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _UI_LTGame_UI_NativeIconLong__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/LTGame/UI_NativeIconLong */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeIconLong.ts");
/* harmony import */ var _LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../LTUtils/LTUtils */ "./src/LTGame/LTUtils/LTUtils.ts");
/* harmony import */ var _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _LTUI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../LTUI */ "./src/LTGame/UIExt/LTUI.ts");









class View_NativeIconLong {
    constructor(ui, ids) {
        this._ui = ui;
        if (ids == null || ids.length == 0) {
            this._cacheIds = _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platformData.nativeIconIds;
        }
        else {
            this._cacheIds = ids;
        }
        console.log("初始化广告id", this._cacheIds);
        this._Init();
        this.ui.m_ad.onClick(this, this._OnClickAd);
        this.ui.m_btn_close.onClick(this, this.clickClose);
    }
    static CreateView(tagUI) {
        if (tagUI == null)
            return null;
        if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Oppo && _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Vivo) {
            console.log("native_iconLong已隐藏,只有oppo vivo平台支持");
            tagUI.dispose();
            return null;
        }
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.checkState == _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_0__["ECheckState"].InCheck) {
            // 只有oppo支持
            console.log("native_iconLong已隐藏,审核");
            tagUI.dispose();
            return null;
        }
        let uiInstance = _UI_LTGame_UI_NativeIconLong__WEBPACK_IMPORTED_MODULE_5__["default"].createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        uiInstance.setSize(tagUI.width, tagUI.height);
        let forceAdIdsStr = tagUI.data;
        let forceAdIds = [];
        if (!_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(forceAdIdsStr)) {
            let splitStrs = forceAdIdsStr.split(',');
            for (let i = 0; i < splitStrs.length; ++i) {
                forceAdIds.push(splitStrs[i]);
            }
        }
        tagUI.dispose();
        return new View_NativeIconLong(uiInstance, forceAdIds);
    }
    get ui() {
        return this._ui;
    }
    get visible() {
        return this.ui.visible;
    }
    set visible(v) {
        this.ui.visible = v;
    }
    ClickAd() {
        console.log("点击Icon", this._cacheAdData);
        if (this._cacheAdData) {
            // 相应点击事件
            View_NativeIconLong._cacheNativeAd.reportAdClick({
                adId: this._cacheAdData.adId
            });
            // 刷新
            this._Init();
        }
        else {
            this.ui.visible = false;
            _LTUI__WEBPACK_IMPORTED_MODULE_8__["default"].Toast('暂时没有广告');
        }
    }
    clickClose() {
        let rate = Object(_LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_6__["randomRangeInt"])(0, 100);
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.payRate > rate) {
            this._OnClickAd();
        }
        this.visible = false;
        this.ui.visible = false;
    }
    _Init() {
        return __awaiter(this, void 0, void 0, function* () {
            if (View_NativeIconLong._cacheNativeAd != null) {
                View_NativeIconLong._cacheNativeAd.destroy();
                View_NativeIconLong._cacheNativeAd = null;
            }
            this.visible = false;
            this.ui.visible = false;
            let i = _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_7__["default"].RandomInt(0, this._cacheIds.length);
            // for (let i = 0; i < this._cacheIds.length; ++i) {
            let ret = yield this._LoadIconData(i);
            if (ret && this._cacheAdData) {
                this.showInfo();
                return;
            }
            // }
        });
    }
    showInfo() {
        this.visible = true;
        this.ui.visible = true;
        let icon = this._cacheAdData.icon;
        if (!icon && this._cacheAdData.imgUrlList.length) {
            icon = this._cacheAdData.imgUrlList[0];
        }
        this.ui.m_ad.m_icon.url = icon;
        this.ui.m_ad.m_tag.url = this._cacheAdData.logoUrl;
        this.ui.m_ad.m_title.text = this._cacheAdData.title;
        this.ui.m_ad.m_desc.text = this._cacheAdData.desc;
        if (!this._cacheAdData.show_reported) {
            View_NativeIconLong._cacheNativeAd.reportAdShow({
                adId: this._cacheAdData.adId
            });
            this._cacheAdData.show_reported = true;
            console.log("原生icon广告已展示", this._cacheAdData);
        }
    }
    _OnClickAd() {
        this.ClickAd();
    }
    _LoadIconData(index) {
        return __awaiter(this, void 0, void 0, function* () {
            let nativeAd = null;
            if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Oppo) {
                nativeAd = _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.base.createNativeAd({
                    adUnitId: this._cacheIds[index]
                });
                View_NativeIconLong._cacheNativeAd = nativeAd;
                let loadRet = yield nativeAd.load();
                if (loadRet["code"] == 0) {
                    // 加载成功
                    let adList = loadRet['adList'];
                    if (adList == null || adList.length == 0) {
                        console.error("native icon 加载失败", loadRet);
                        return false;
                    }
                    let adData = adList[0];
                    console.log('广告数据加载完成', loadRet);
                    if (adData == null) {
                        console.error("native icon 加载失败", loadRet);
                        return false;
                    }
                    this._cacheAdData = adData;
                    return true;
                }
                else {
                    console.error("native icon 加载失败", loadRet);
                    return false;
                }
            }
            else {
                nativeAd = _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.base.createNativeAd({
                    posId: this._cacheIds[index],
                });
                View_NativeIconLong._cacheNativeAd = nativeAd;
                nativeAd.onLoad((res) => {
                    console.log(' 原生广告加载完成 触发', JSON.stringify(res));
                    if (res && res.adList) {
                        this._cacheAdData = res.adList.pop();
                        this.showInfo();
                    }
                });
                nativeAd.onError(err => {
                    console.log("原生广告加载异常", err);
                    this.ui.visible = false;
                });
                yield nativeAd.load();
            }
        });
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/Cmp/View_NativeInpage.ts":
/*!*************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/Cmp/View_NativeInpage.ts ***!
  \*************************************************************/
/*! exports provided: View_NativeInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NativeInPage", function() { return View_NativeInPage; });
/* harmony import */ var _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../SDK/common/ECheckState */ "./src/SDK/common/ECheckState.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../LTUtils/LTUtils */ "./src/LTGame/LTUtils/LTUtils.ts");
/* harmony import */ var _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _UI_LTGame_UI_NativeInPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UI/LTGame/UI_NativeInPage */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeInPage.ts");








class View_NativeInPage {
    constructor(ui, ids) {
        this._ui = ui;
        if (ids == null || ids.length == 0) {
            this._cacheIds = _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.platformData.nativeinpageIds;
        }
        else {
            this._cacheIds = ids;
        }
        console.log("初始化 内嵌 native广告id", this._cacheIds);
        this._Init();
        this.ui.m_ad.onClick(this, this._OnClickAd);
        this.ui.m_btn_close.onClick(this, this.clickClose);
    }
    static CreateView(tagUI) {
        if (tagUI == null)
            return null;
        if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_5__["EPlatformType"].Oppo && _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_5__["EPlatformType"].Vivo) {
            console.log("NativeInPage已隐藏,只有oppo vivo平台支持");
            tagUI.dispose();
            return null;
        }
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.checkState == _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_0__["ECheckState"].InCheck) {
            // 只有oppo支持
            console.log("内嵌 native已隐藏,审核");
            tagUI.dispose();
            return null;
        }
        let uiInstance = _UI_LTGame_UI_NativeInPage__WEBPACK_IMPORTED_MODULE_7__["default"].createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        uiInstance.setSize(tagUI.width, tagUI.height);
        let forceAdIdsStr = tagUI.data;
        let forceAdIds = [];
        if (!_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_4__["default"].IsNullOrEmpty(forceAdIdsStr)) {
            let splitStrs = forceAdIdsStr.split(',');
            for (let i = 0; i < splitStrs.length; ++i) {
                forceAdIds.push(splitStrs[i]);
            }
        }
        tagUI.dispose();
        return new View_NativeInPage(uiInstance, forceAdIds);
    }
    get ui() {
        return this._ui;
    }
    get visible() {
        return this.ui.visible;
    }
    set visible(v) {
        this.ui.visible = v;
    }
    ClickAd() {
        console.log(" 点击 内嵌 native", this._cacheAdData);
        // 相应点击事件
        View_NativeInPage._cacheNativeAd.reportAdClick({
            adId: this._cacheAdData.adId
        });
        // 刷新
        this._Init();
    }
    _Init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.visible = false;
            this.ui.visible = false;
            // for (let i = 0; i < this._cacheIds.length; ++i) {
            let i = _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].RandomInt(0, this._cacheIds.length);
            let ret = yield this._LoadIconData(i);
            if (ret && this._cacheAdData) {
                this.showAdInfo();
            }
            else {
                console.log("内嵌 native加载失败", this._cacheIds[i]);
                // } 
            }
        });
    }
    showAdInfo() {
        this.visible = true;
        this.ui.visible = true;
        if (this._cacheAdData.imgUrlList.length) {
            this.ui.m_ad.m_icon.url = this._cacheAdData.icon ? this._cacheAdData.icon : this._cacheAdData.imgUrlList[0];
            this.ui.m_ad.m_img.url = this._cacheAdData.imgUrlList[0];
        }
        this.ui.m_ad.m_tag.url = this._cacheAdData.logoUrl;
        this.ui.m_ad.m_title.text = this._cacheAdData.title;
        this.ui.m_ad.m_desc.text = this._cacheAdData.desc;
        View_NativeInPage._cacheNativeAd.reportAdShow({
            adId: this._cacheAdData.adId
        });
        console.log("内嵌 native广告已展示", this._cacheAdData);
    }
    clickClose() {
        let rate = Object(_LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_2__["randomRangeInt"])(0, 100);
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.payRate > rate) {
            this._OnClickAd();
        }
        this.visible = false;
        this.ui.visible = false;
    }
    _OnClickAd() {
        this.ClickAd();
    }
    _LoadIconData(index) {
        return __awaiter(this, void 0, void 0, function* () {
            if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_5__["EPlatformType"].Oppo) {
                if (View_NativeInPage._cacheNativeAd != null) {
                    View_NativeInPage._cacheNativeAd.destroy();
                    View_NativeInPage._cacheNativeAd = null;
                }
                let nativeAd = null;
                nativeAd = _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.base.createNativeAd({
                    adUnitId: this._cacheIds[index]
                });
                View_NativeInPage._cacheNativeAd = nativeAd;
                let loadRet = yield nativeAd.load();
                if (loadRet["code"] == 0) {
                    // 加载成功
                    let adList = loadRet['adList'];
                    if (adList == null || adList.length == 0) {
                        console.error("native icon 加载失败", loadRet);
                        return false;
                    }
                    let adData = adList[0];
                    console.log('广告数据加载完成', loadRet);
                    if (adData == null) {
                        console.error("native icon 加载失败", loadRet);
                        return false;
                    }
                    this._cacheAdData = adData;
                    return true;
                }
                else {
                    console.error("native icon 加载失败", loadRet);
                    return false;
                }
            }
            else {
                if (!View_NativeInPage._cacheNativeAd) {
                    View_NativeInPage._cacheNativeAd = _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_6__["default"].instance.base.createNativeAd({
                        adUnitId: this._cacheIds[index],
                    });
                }
                View_NativeInPage._cacheNativeAd.onLoad((res) => {
                    console.log('原生广告加载完成 触发', JSON.stringify(res));
                    if (res && res.adList) {
                        this._cacheAdData = res.adList.pop();
                        this.showAdInfo();
                    }
                });
                View_NativeInPage._cacheNativeAd.onError(err => {
                    console.log("原生广告加载异常", err);
                });
                yield View_NativeInPage._cacheNativeAd.load();
            }
        });
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/Cmp/View_OtherGames.ts":
/*!***********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/Cmp/View_OtherGames.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_OtherGames; });
/* harmony import */ var _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../SDK/Impl/SDK_YQ */ "./src/SDK/Impl/SDK_YQ.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _UI_LTGame_UI_view_sharegames_big__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/LTGame/UI_view_sharegames_big */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_sharegames_big.ts");






class View_OtherGames {
    constructor(ui) {
        this._posId = 0;
        this._ui = ui;
        this._Init();
    }
    static CreateView(tagUI) {
        if (tagUI == null)
            return null;
        // 额外判定一次是否支持交叉推广,如果不支持,则隐藏交叉推广
        if (!_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.isSupportJumpOther && _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Web) {
            tagUI.dispose();
            return null;
        }
        if (tagUI instanceof _UI_LTGame_UI_view_sharegames_big__WEBPACK_IMPORTED_MODULE_5__["default"]) {
            return new View_OtherGames(tagUI);
        }
        let uiInstance = _UI_LTGame_UI_view_sharegames_big__WEBPACK_IMPORTED_MODULE_5__["default"].createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_OtherGames(uiInstance);
    }
    get ui() {
        return this._ui;
    }
    _Init() {
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance instanceof _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            this._posId = 5;
        }
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.adManager.GetADListByLocationId(this._posId);
        if (this._cacheAds == null) {
            Laya.stage.on(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_2__["CommonEventId"].SELF_AD_INITED, this, this._OnAdInited);
        }
        else {
            this.ui.m_list_games.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
            this.ui.m_list_games.numItems = this._cacheAds.length;
            this.ui.m_list_games.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
            let ads = [];
            this._cacheAds.forEach(adData => {
                let ad = {};
                ad.ad_id = adData.ad_id;
                ad.location_id = this._posId;
                ad.num = 1;
                ads.push(ad);
            });
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ReportShowAd(ads);
            Laya.timer.loop(100, this, () => {
                this.ui.m_list_games.scrollPane.scrollDown(0.1, true);
            });
        }
    }
    _OnAdInited(posId) {
        if (posId != this._posId)
            return;
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_1__["default"].instance.adManager.GetADListByLocationId(this._posId);
        this.ui.m_list_games.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
        this.ui.m_list_games.numItems = this._cacheAds.length;
        this.ui.m_list_games.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
    }
    _OnAdItemRender(index, adUI) {
        let adData = this._cacheAds[index];
        adUI.data = index;
        adUI.m_icon.m_icon.url = adData.ad_img;
        adUI.m_text_name.text = adData.ad_name;
        // let ad: any = {};
        // ad.ad_id = adData.ad_id;
        // ad.location_id = 5;
        // ad.num = 1;
        // LTSDK.instance.RecordShowAd([ad]);
    }
    _OnClickGameItem(item) {
        let data = this._cacheAds[item.data];
        let uid = data.ad_appid;
        switch (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.platform) {
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Oppo:
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_3__["EPlatformType"].Vivo:
                uid = data.ad_package;
                break;
            default:
                break;
        }
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.NavigateToApp(uid, data.ad_path, null, true, false, data.ad_id);
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/Cmp/View_SideGames.ts":
/*!**********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/Cmp/View_SideGames.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_SideGames; });
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _UI_LTGame_UI_SideGames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/LTGame/UI_SideGames */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_SideGames.ts");
/* harmony import */ var _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../SDK/common/ECheckState */ "./src/SDK/common/ECheckState.ts");
/* harmony import */ var _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../SDK/Impl/SDK_YQ */ "./src/SDK/Impl/SDK_YQ.ts");







/** __sidegames 100*100 */
class View_SideGames {
    constructor(ui) {
        this._posId = 0;
        this._ui = ui;
        this._Init();
    }
    static CreateView(tagUI) {
        if (tagUI == null)
            return null;
        // 额外判定一次是否支持交叉推广,如果不支持,则隐藏交叉推广
        if (!_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.isSupportJumpOther || (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Oppo && _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Web)) {
            tagUI.dispose();
            return null;
        }
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.checkState == _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_5__["ECheckState"].InCheck) {
            // 只有oppo支持
            console.log("sidegames,审核");
            tagUI.dispose();
            return null;
        }
        if (tagUI instanceof _UI_LTGame_UI_SideGames__WEBPACK_IMPORTED_MODULE_4__["default"]) {
            return new View_SideGames(tagUI);
        }
        let uiInstance = _UI_LTGame_UI_SideGames__WEBPACK_IMPORTED_MODULE_4__["default"].createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_SideGames(uiInstance);
    }
    get ui() {
        return this._ui;
    }
    _Init() {
        if (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.platform == _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].TT) {
            this.ui.m_ads.dispose();
            this.ui.m_btn_show.onClick(this, () => {
                this.ui.m_red.visible = false;
                _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.OpenGameBox([]);
            });
            return;
        }
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance instanceof _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_6__["default"]) {
            this._posId = 5;
        }
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.adManager.GetADListByLocationId(this._posId);
        if (this._cacheAds == null) {
            Laya.stage.on(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_3__["CommonEventId"].SELF_AD_INITED, this, this._OnAdInited);
        }
        else {
            this.ui.m_ads.m_list.setVirtual();
            this.ui.m_ads.m_list.scrollPane.bouncebackEffect = false;
            this.ui.m_ads.m_list.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
            this.ui.m_ads.m_list.numItems = this._cacheAds.length;
            this.ui.m_ads.m_list.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
            Laya.timer.loop(100, this, () => {
                this.ui.m_ads.m_list.scrollPane.scrollDown(0.01, true);
            });
            this.ui.displayObject.zOrder = 99999;
            this.ui.m_btn_show.onClick(this, () => {
                this.ui.m_red.visible = false;
                this.ui.m_show.selectedIndex = 1;
            });
            this.ui.m_ads.m_btn_return.onClick(this, () => {
                this.ui.m_show.selectedIndex = 0;
            });
            this.ui.m_bg.onClick(this, () => {
                this.ui.m_show.selectedIndex = 0;
            });
            let ads = [];
            this._cacheAds.forEach(adData => {
                let ad = {};
                ad.ad_id = adData.ad_id;
                ad.location_id = this._posId;
                ad.num = 1;
                ads.push(ad);
            });
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ReportShowAd(ads);
        }
    }
    _OnAdInited(posId) {
        if (posId != this._posId)
            return;
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.adManager.GetADListByLocationId(this._posId);
        this.ui.m_ads.m_list.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
        this.ui.m_ads.m_list.numItems = this._cacheAds.length;
        this.ui.m_ads.m_list.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
    }
    _OnAdItemRender(index, adUI) {
        let adData = this._cacheAds[index];
        adUI.data = index;
        adUI.m_icon.m_icon.url = adData.ad_img;
        adUI.m_text_name.text = adData.ad_name;
    }
    _OnClickGameItem(item) {
        let data = this._cacheAds[item.data];
        let uid = data.ad_appid;
        switch (_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.platform) {
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Oppo:
            case _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Vivo:
                uid = data.ad_package;
                break;
            default:
                break;
        }
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.NavigateToApp(uid, data.ad_path, null, true, false, data.ad_id);
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/Cmp/View_WxSideGames.ts":
/*!************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/Cmp/View_WxSideGames.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_WxSideGames; });
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _UI_LTGame_UI_WxSideGames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/LTGame/UI_WxSideGames */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_WxSideGames.ts");
/* harmony import */ var _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../SDK/Impl/SDK_YQ */ "./src/SDK/Impl/SDK_YQ.ts");






/**__wxSG 750*280  */
class View_WxSideGames {
    constructor(ui) {
        this.showingIndexs = [0, 1, 2, 3];
        this._posId = 0;
        this._ui = ui;
        this._Init();
    }
    static CreateView(tagUI) {
        if (tagUI == null)
            return null;
        // 额外判定一次是否支持交叉推广,如果不支持,则隐藏交叉推广
        if (!_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.isSupportJumpOther && _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.platform != _Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Web) {
            console.log('不支持跳转');
            tagUI.dispose();
            return null;
        }
        // if (LTPlatform.instance.platform != EPlatformType.WX && LTPlatform.instance.platform != EPlatformType.Web) {
        //     tagUI.dispose();
        //     return null;
        // }
        if (tagUI instanceof _UI_LTGame_UI_WxSideGames__WEBPACK_IMPORTED_MODULE_4__["default"]) {
            return new View_WxSideGames(tagUI);
        }
        let uiInstance = _UI_LTGame_UI_WxSideGames__WEBPACK_IMPORTED_MODULE_4__["default"].createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_WxSideGames(uiInstance);
    }
    get ui() {
        return this._ui;
    }
    _Init() {
        if (_SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance instanceof _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_5__["default"]) {
            this._posId = 5;
        }
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.adManager.GetADListByLocationId(this._posId);
        if (this._cacheAds == null) {
            Laya.stage.on(_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_3__["CommonEventId"].SELF_AD_INITED, this, this._OnAdInited);
            this.ui.visible = false;
        }
        else {
            Laya.timer.loop(5000, this, () => {
                this.refresh();
            });
            this.refresh();
            for (let i = 0; i < this.showingIndexs.length; i++) {
                this.renderItem(i, this.ui[`m_ad${i}`]);
                this.ui[`m_ad${i}`].onClick(this, () => this.clickItem(i));
            }
            let ads = [];
            this._cacheAds.forEach(adData => {
                let ad = {};
                ad.ad_id = adData.ad_id;
                ad.location_id = this._posId;
                ad.num = 1;
                ads.push(ad);
            });
            _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ReportShowAd(ads);
        }
    }
    refresh() {
        if (this.ui && !this.ui.isDisposed) {
            this.ui.visible = true;
            console.log('wxsg 刷新');
            const first = this.showingIndexs[this.showingIndexs.length - 1];
            this.showingIndexs = [];
            for (let i = 0; i < 4; i++) {
                let ind = (first + i) % this._cacheAds.length;
                this.showingIndexs.push(ind);
                this.renderItem(i, this.ui[`m_ad${i}`]);
            }
        }
        else {
            Laya.timer.clearAll(this);
        }
    }
    _OnAdInited(posId) {
        if (posId != this._posId)
            return;
        this._cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_0__["default"].instance.adManager.GetADListByLocationId(this._posId);
        // this.ui.m_list.itemRenderer = Laya.Handler.create(this, this.renderItem, null, false);
        // this.ui.m_list.numItems = this._cacheAds.length;
        // this.ui.m_list.on(fairygui.Events.CLICK_ITEM, this, this.clickItem);
        this.ui.visible = true;
    }
    clickItem(index) {
        let data = this._cacheAds[this.showingIndexs[index]];
        ;
        console.log(data.ad_name);
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.NavigateToApp(data.ad_appid, data.ad_path, null, true, false, data.ad_id);
    }
    renderItem(index, item) {
        let ind = this.showingIndexs[index];
        let data = this._cacheAds[ind];
        item.m_title.text = data.ad_name;
        item.m_icon.m_icon.url = data.ad_img;
        item.m_red.visible = data.ad_dot == 1;
        item.m_shake.play();
        // item.onClick(item, () => this.clickItem(index));
        // let ad: any = {};
        // ad.ad_id = data.ad_id;
        // ad.location_id = 5;
        // ad.num = 1;
        // LTSDK.instance.RecordShowAd([ad]);
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/LTGameBinder.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/LTGameBinder.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTGameBinder; });
/* harmony import */ var _UI_side_ads__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI_side_ads */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_side_ads.ts");
/* harmony import */ var _UI_hot_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI_hot_game */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_hot_game.ts");
/* harmony import */ var _UI_NativeInPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI_NativeInPage */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeInPage.ts");
/* harmony import */ var _UI_AdInpageComp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI_AdInpageComp */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_AdInpageComp.ts");
/* harmony import */ var _UI_iconLongComp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI_iconLongComp */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_iconLongComp.ts");
/* harmony import */ var _UI_OpenAds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI_OpenAds */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_OpenAds.ts");
/* harmony import */ var _UI_view_game_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UI_view_game_icon */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_game_icon.ts");
/* harmony import */ var _UI_view_end_games__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UI_view_end_games */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_end_games.ts");
/* harmony import */ var _UI_SideGames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UI_SideGames */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_SideGames.ts");
/* harmony import */ var _UI_FlyPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UI_FlyPanel */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FlyPanel.ts");
/* harmony import */ var _UI_view_fly_coin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./UI_view_fly_coin */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_fly_coin.ts");
/* harmony import */ var _UI_NativeIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./UI_NativeIcon */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeIcon.ts");
/* harmony import */ var _UI_CommonLockScreen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./UI_CommonLockScreen */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonLockScreen.ts");
/* harmony import */ var _UI_End3X3Ad__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./UI_End3X3Ad */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_End3X3Ad.ts");
/* harmony import */ var _UI_CommonEndSliderADs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./UI_CommonEndSliderADs */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonEndSliderADs.ts");
/* harmony import */ var _UI_btn_normal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./UI_btn_normal */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_btn_normal.ts");
/* harmony import */ var _UI_CommonLoad__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./UI_CommonLoad */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonLoad.ts");
/* harmony import */ var _UI_view_load__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./UI_view_load */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_load.ts");
/* harmony import */ var _UI_NativeIconLong__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./UI_NativeIconLong */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeIconLong.ts");
/* harmony import */ var _UI_FakeBanner_V__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./UI_FakeBanner_V */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeBanner_V.ts");
/* harmony import */ var _UI_CommonToast__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./UI_CommonToast */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonToast.ts");
/* harmony import */ var _UI_view_toast__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./UI_view_toast */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_toast.ts");
/* harmony import */ var _UI_FakeRewardVideo__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./UI_FakeRewardVideo */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeRewardVideo.ts");
/* harmony import */ var _UI_FakeInterstital__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./UI_FakeInterstital */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeInterstital.ts");
/* harmony import */ var _UI_EndSlideGames__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./UI_EndSlideGames */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_EndSlideGames.ts");
/* harmony import */ var _UI_slideAds__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./UI_slideAds */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_slideAds.ts");
/* harmony import */ var _UI_view_item_game__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./UI_view_item_game */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_item_game.ts");
/* harmony import */ var _UI_view_item_game140__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./UI_view_item_game140 */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_item_game140.ts");
/* harmony import */ var _UI_ImageBanner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./UI_ImageBanner */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_ImageBanner.ts");
/* harmony import */ var _UI_SelfBanner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./UI_SelfBanner */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_SelfBanner.ts");
/* harmony import */ var _UI_GameCenter__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./UI_GameCenter */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_GameCenter.ts");
/* harmony import */ var _UI_item_game__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./UI_item_game */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_game.ts");
/* harmony import */ var _UI_item_gameBig__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./UI_item_gameBig */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_gameBig.ts");
/* harmony import */ var _UI_GameIconF__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./UI_GameIconF */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_GameIconF.ts");
/* harmony import */ var _UI_WxSideGames__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./UI_WxSideGames */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_WxSideGames.ts");
/* harmony import */ var _UI_item_gameSmall__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./UI_item_gameSmall */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_gameSmall.ts");
/* harmony import */ var _UI_bottomGames__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./UI_bottomGames */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_bottomGames.ts");
/* harmony import */ var _UI_view_item_game128__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./UI_view_item_game128 */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_item_game128.ts");
/* harmony import */ var _UI_sliderADs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./UI_sliderADs */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_sliderADs.ts");
/* harmony import */ var _UI_view_sharegames_big__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./UI_view_sharegames_big */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_sharegames_big.ts");
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/








































class LTGameBinder {
    static bindAll() {
        fgui.UIObjectFactory.setExtension(_UI_side_ads__WEBPACK_IMPORTED_MODULE_0__["default"].URL, _UI_side_ads__WEBPACK_IMPORTED_MODULE_0__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_hot_game__WEBPACK_IMPORTED_MODULE_1__["default"].URL, _UI_hot_game__WEBPACK_IMPORTED_MODULE_1__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_NativeInPage__WEBPACK_IMPORTED_MODULE_2__["default"].URL, _UI_NativeInPage__WEBPACK_IMPORTED_MODULE_2__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_AdInpageComp__WEBPACK_IMPORTED_MODULE_3__["default"].URL, _UI_AdInpageComp__WEBPACK_IMPORTED_MODULE_3__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_iconLongComp__WEBPACK_IMPORTED_MODULE_4__["default"].URL, _UI_iconLongComp__WEBPACK_IMPORTED_MODULE_4__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_OpenAds__WEBPACK_IMPORTED_MODULE_5__["default"].URL, _UI_OpenAds__WEBPACK_IMPORTED_MODULE_5__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_view_game_icon__WEBPACK_IMPORTED_MODULE_6__["default"].URL, _UI_view_game_icon__WEBPACK_IMPORTED_MODULE_6__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_view_end_games__WEBPACK_IMPORTED_MODULE_7__["default"].URL, _UI_view_end_games__WEBPACK_IMPORTED_MODULE_7__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_SideGames__WEBPACK_IMPORTED_MODULE_8__["default"].URL, _UI_SideGames__WEBPACK_IMPORTED_MODULE_8__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_FlyPanel__WEBPACK_IMPORTED_MODULE_9__["default"].URL, _UI_FlyPanel__WEBPACK_IMPORTED_MODULE_9__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_view_fly_coin__WEBPACK_IMPORTED_MODULE_10__["default"].URL, _UI_view_fly_coin__WEBPACK_IMPORTED_MODULE_10__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_NativeIcon__WEBPACK_IMPORTED_MODULE_11__["default"].URL, _UI_NativeIcon__WEBPACK_IMPORTED_MODULE_11__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_CommonLockScreen__WEBPACK_IMPORTED_MODULE_12__["default"].URL, _UI_CommonLockScreen__WEBPACK_IMPORTED_MODULE_12__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_End3X3Ad__WEBPACK_IMPORTED_MODULE_13__["default"].URL, _UI_End3X3Ad__WEBPACK_IMPORTED_MODULE_13__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_CommonEndSliderADs__WEBPACK_IMPORTED_MODULE_14__["default"].URL, _UI_CommonEndSliderADs__WEBPACK_IMPORTED_MODULE_14__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_btn_normal__WEBPACK_IMPORTED_MODULE_15__["default"].URL, _UI_btn_normal__WEBPACK_IMPORTED_MODULE_15__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_CommonLoad__WEBPACK_IMPORTED_MODULE_16__["default"].URL, _UI_CommonLoad__WEBPACK_IMPORTED_MODULE_16__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_view_load__WEBPACK_IMPORTED_MODULE_17__["default"].URL, _UI_view_load__WEBPACK_IMPORTED_MODULE_17__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_NativeIconLong__WEBPACK_IMPORTED_MODULE_18__["default"].URL, _UI_NativeIconLong__WEBPACK_IMPORTED_MODULE_18__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_FakeBanner_V__WEBPACK_IMPORTED_MODULE_19__["default"].URL, _UI_FakeBanner_V__WEBPACK_IMPORTED_MODULE_19__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_CommonToast__WEBPACK_IMPORTED_MODULE_20__["default"].URL, _UI_CommonToast__WEBPACK_IMPORTED_MODULE_20__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_view_toast__WEBPACK_IMPORTED_MODULE_21__["default"].URL, _UI_view_toast__WEBPACK_IMPORTED_MODULE_21__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_FakeRewardVideo__WEBPACK_IMPORTED_MODULE_22__["default"].URL, _UI_FakeRewardVideo__WEBPACK_IMPORTED_MODULE_22__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_FakeInterstital__WEBPACK_IMPORTED_MODULE_23__["default"].URL, _UI_FakeInterstital__WEBPACK_IMPORTED_MODULE_23__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_EndSlideGames__WEBPACK_IMPORTED_MODULE_24__["default"].URL, _UI_EndSlideGames__WEBPACK_IMPORTED_MODULE_24__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_slideAds__WEBPACK_IMPORTED_MODULE_25__["default"].URL, _UI_slideAds__WEBPACK_IMPORTED_MODULE_25__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_view_item_game__WEBPACK_IMPORTED_MODULE_26__["default"].URL, _UI_view_item_game__WEBPACK_IMPORTED_MODULE_26__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_view_item_game140__WEBPACK_IMPORTED_MODULE_27__["default"].URL, _UI_view_item_game140__WEBPACK_IMPORTED_MODULE_27__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_ImageBanner__WEBPACK_IMPORTED_MODULE_28__["default"].URL, _UI_ImageBanner__WEBPACK_IMPORTED_MODULE_28__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_SelfBanner__WEBPACK_IMPORTED_MODULE_29__["default"].URL, _UI_SelfBanner__WEBPACK_IMPORTED_MODULE_29__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_GameCenter__WEBPACK_IMPORTED_MODULE_30__["default"].URL, _UI_GameCenter__WEBPACK_IMPORTED_MODULE_30__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_item_game__WEBPACK_IMPORTED_MODULE_31__["default"].URL, _UI_item_game__WEBPACK_IMPORTED_MODULE_31__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_item_gameBig__WEBPACK_IMPORTED_MODULE_32__["default"].URL, _UI_item_gameBig__WEBPACK_IMPORTED_MODULE_32__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_GameIconF__WEBPACK_IMPORTED_MODULE_33__["default"].URL, _UI_GameIconF__WEBPACK_IMPORTED_MODULE_33__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_WxSideGames__WEBPACK_IMPORTED_MODULE_34__["default"].URL, _UI_WxSideGames__WEBPACK_IMPORTED_MODULE_34__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_item_gameSmall__WEBPACK_IMPORTED_MODULE_35__["default"].URL, _UI_item_gameSmall__WEBPACK_IMPORTED_MODULE_35__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_bottomGames__WEBPACK_IMPORTED_MODULE_36__["default"].URL, _UI_bottomGames__WEBPACK_IMPORTED_MODULE_36__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_view_item_game128__WEBPACK_IMPORTED_MODULE_37__["default"].URL, _UI_view_item_game128__WEBPACK_IMPORTED_MODULE_37__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_sliderADs__WEBPACK_IMPORTED_MODULE_38__["default"].URL, _UI_sliderADs__WEBPACK_IMPORTED_MODULE_38__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_view_sharegames_big__WEBPACK_IMPORTED_MODULE_39__["default"].URL, _UI_view_sharegames_big__WEBPACK_IMPORTED_MODULE_39__["default"]);
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_AdInpageComp.ts":
/*!*****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_AdInpageComp.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_AdInpageComp; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_AdInpageComp extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "AdInpageComp"));
    }
    onConstruct() {
        this.m_img = (this.getChildAt(1));
        this.m_icon = (this.getChildAt(2));
        this.m_tag = (this.getChildAt(3));
        this.m_title = (this.getChildAt(4));
        this.m_desc = (this.getChildAt(5));
    }
}
UI_AdInpageComp.URL = "ui://75kiu87k92486w";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonEndSliderADs.ts":
/*!***********************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonEndSliderADs.ts ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_CommonEndSliderADs; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_CommonEndSliderADs extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "CommonEndSliderADs"));
    }
    onConstruct() {
        this.m_list = (this.getChildAt(1));
    }
}
UI_CommonEndSliderADs.URL = "ui://75kiu87kj9at6j";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonLoad.ts":
/*!***************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonLoad.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_CommonLoad; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_CommonLoad extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "CommonLoad"));
    }
    onConstruct() {
        this.m_big_bg = (this.getChildAt(0));
        this.m_small_bg = (this.getChildAt(1));
        this.m_load = (this.getChildAt(2));
    }
}
UI_CommonLoad.URL = "ui://75kiu87kmhasc";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonLockScreen.ts":
/*!*********************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonLockScreen.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_CommonLockScreen; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_CommonLockScreen extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "CommonLockScreen"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
    }
}
UI_CommonLockScreen.URL = "ui://75kiu87ki2wq2s";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonToast.ts":
/*!****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonToast.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_CommonToast; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_CommonToast extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "CommonToast"));
    }
    onConstruct() {
        this.m_toast = (this.getChildAt(0));
    }
}
UI_CommonToast.URL = "ui://75kiu87kovsy7";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_End3X3Ad.ts":
/*!*************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_End3X3Ad.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_End3X3Ad; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_End3X3Ad extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "End3X3Ad"));
    }
    onConstruct() {
        this.m_list = (this.getChildAt(1));
    }
}
UI_End3X3Ad.URL = "ui://75kiu87ki816ae";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_EndSlideGames.ts":
/*!******************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_EndSlideGames.ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_EndSlideGames; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_EndSlideGames extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "EndSlideGames"));
    }
    onConstruct() {
        this.m_ad = (this.getChildAt(0));
    }
}
UI_EndSlideGames.URL = "ui://75kiu87kp2ld6k";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeBanner_V.ts":
/*!*****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeBanner_V.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_FakeBanner_V; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_FakeBanner_V extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "FakeBanner_V"));
    }
    onConstruct() {
        this.m_banner = (this.getChildAt(0));
    }
}
UI_FakeBanner_V.URL = "ui://75kiu87kovsy4";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeInterstital.ts":
/*!********************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeInterstital.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_FakeInterstital; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_FakeInterstital extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "FakeInterstital"));
    }
    onConstruct() {
        this.m_btn_close = (this.getChildAt(2));
    }
}
UI_FakeInterstital.URL = "ui://75kiu87kovsyb";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeRewardVideo.ts":
/*!********************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeRewardVideo.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_FakeRewardVideo; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_FakeRewardVideo extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "FakeRewardVideo"));
    }
    onConstruct() {
        this.m_btn_reward = (this.getChildAt(1));
        this.m_btn_skip = (this.getChildAt(3));
    }
}
UI_FakeRewardVideo.URL = "ui://75kiu87kovsy9";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FlyPanel.ts":
/*!*************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FlyPanel.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_FlyPanel; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_FlyPanel extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "FlyPanel"));
    }
    onConstruct() {
        this.m_test = (this.getChildAt(0));
    }
}
UI_FlyPanel.URL = "ui://75kiu87kh75rf";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_GameCenter.ts":
/*!***************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_GameCenter.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_GameCenter; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_GameCenter extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "GameCenter"));
    }
    onConstruct() {
        this.m_topList = (this.getChildAt(5));
        this.m_centerList = (this.getChildAt(6));
        this.m_btn_close = (this.getChildAt(7));
        this.m_btn_back = (this.getChildAt(8));
        this.m_anim_enter = this.getTransitionAt(0);
    }
}
UI_GameCenter.URL = "ui://75kiu87kr3yg75";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_GameIconF.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_GameIconF.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_GameIconF; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_GameIconF extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "GameIconF"));
    }
    onConstruct() {
        this.m_mask = (this.getChildAt(0));
        this.m_icon = (this.getChildAt(1));
        this.m_title = (this.getChildAt(2));
    }
}
UI_GameIconF.URL = "ui://75kiu87kr3yg7g";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_ImageBanner.ts":
/*!****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_ImageBanner.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_ImageBanner; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_ImageBanner extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "ImageBanner"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
        this.m_img_banner = (this.getChildAt(1));
        this.m_img_icon = (this.getChildAt(2));
        this.m_img_adnotice = (this.getChildAt(3));
        this.m_btn_close = (this.getChildAt(4));
    }
}
UI_ImageBanner.URL = "ui://75kiu87kqdeh5t";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeIcon.ts":
/*!***************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeIcon.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_NativeIcon; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_NativeIcon extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "NativeIcon"));
    }
    onConstruct() {
        this.m_icon_img = (this.getChildAt(0));
        this.m_icon_tip = (this.getChildAt(1));
    }
}
UI_NativeIcon.URL = "ui://75kiu87kh8ea5w";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeIconLong.ts":
/*!*******************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeIconLong.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_NativeIconLong; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_NativeIconLong extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "NativeIconLong"));
    }
    onConstruct() {
        this.m_bg1 = (this.getChildAt(0));
        this.m_ad = (this.getChildAt(1));
        this.m_btn_close = (this.getChildAt(2));
    }
}
UI_NativeIconLong.URL = "ui://75kiu87kocvx6t";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeInPage.ts":
/*!*****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_NativeInPage.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_NativeInPage; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_NativeInPage extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "NativeInPage"));
    }
    onConstruct() {
        this.m_bg1 = (this.getChildAt(0));
        this.m_ad = (this.getChildAt(1));
        this.m_btn_close = (this.getChildAt(2));
    }
}
UI_NativeInPage.URL = "ui://75kiu87k92486v";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_OpenAds.ts":
/*!************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_OpenAds.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_OpenAds; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_OpenAds extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "OpenAds"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
        this.m_centerList = (this.getChildAt(2));
        this.m_btn_close = (this.getChildAt(3));
    }
}
UI_OpenAds.URL = "ui://75kiu87k9vu5ag";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_SelfBanner.ts":
/*!***************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_SelfBanner.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_SelfBanner; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_SelfBanner extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "SelfBanner"));
    }
    onConstruct() {
        this.m_banner = (this.getChildAt(0));
    }
}
UI_SelfBanner.URL = "ui://75kiu87kr3yg74";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_SideGames.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_SideGames.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_SideGames; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_SideGames extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "SideGames"));
    }
    onConstruct() {
        this.m_show = this.getControllerAt(0);
        this.m_bg = (this.getChildAt(0));
        this.m_btn_show = (this.getChildAt(1));
        this.m_red = (this.getChildAt(2));
        this.m_ads = (this.getChildAt(3));
    }
}
UI_SideGames.URL = "ui://75kiu87keq3z6e";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_WxSideGames.ts":
/*!****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_WxSideGames.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_WxSideGames; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_WxSideGames extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "WxSideGames"));
    }
    onConstruct() {
        this.m_ad0 = (this.getChildAt(0));
        this.m_ad1 = (this.getChildAt(1));
        this.m_ad2 = (this.getChildAt(2));
        this.m_ad3 = (this.getChildAt(3));
    }
}
UI_WxSideGames.URL = "ui://75kiu87kr3yg7h";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_bottomGames.ts":
/*!****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_bottomGames.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_bottomGames; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_bottomGames extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "bottomGames"));
    }
    onConstruct() {
        this.m_list = (this.getChildAt(1));
    }
}
UI_bottomGames.URL = "ui://75kiu87kt3oybk";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_btn_normal.ts":
/*!***************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_btn_normal.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_btn_normal; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_btn_normal extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "btn_normal"));
    }
    onConstruct() {
        this.m_t0 = this.getTransitionAt(0);
    }
}
UI_btn_normal.URL = "ui://75kiu87kl2ax4l";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_hot_game.ts":
/*!*************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_hot_game.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_hot_game; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_hot_game extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "hot_game"));
    }
    onConstruct() {
        this.m_ic = (this.getChildAt(1));
        this.m_anim_idle = this.getTransitionAt(0);
    }
}
UI_hot_game.URL = "ui://75kiu87k74v84g";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_iconLongComp.ts":
/*!*****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_iconLongComp.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_iconLongComp; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_iconLongComp extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "iconLongComp"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(0));
        this.m_tag = (this.getChildAt(1));
        this.m_title = (this.getChildAt(2));
        this.m_desc = (this.getChildAt(3));
    }
}
UI_iconLongComp.URL = "ui://75kiu87k92486x";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_game.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_game.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_item_game; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_item_game extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "item_game"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(1));
        this.m_title = (this.getChildAt(2));
        this.m_red = (this.getChildAt(3));
    }
}
UI_item_game.URL = "ui://75kiu87kr3yg7b";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_gameBig.ts":
/*!*****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_gameBig.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_item_gameBig; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_item_gameBig extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "item_gameBig"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(1));
        this.m_title = (this.getChildAt(2));
        this.m_player = (this.getChildAt(3));
        this.m_red = (this.getChildAt(4));
    }
}
UI_item_gameBig.URL = "ui://75kiu87kr3yg7d";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_gameSmall.ts":
/*!*******************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_gameSmall.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_item_gameSmall; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_item_gameSmall extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "item_gameSmall"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(1));
        this.m_title = (this.getChildAt(2));
        this.m_red = (this.getChildAt(3));
        this.m_shake = this.getTransitionAt(0);
    }
}
UI_item_gameSmall.URL = "ui://75kiu87kr3yg7i";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_side_ads.ts":
/*!*************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_side_ads.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_side_ads; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_side_ads extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "side_ads"));
    }
    onConstruct() {
        this.m_list = (this.getChildAt(2));
        this.m_btn_return = (this.getChildAt(3));
    }
}
UI_side_ads.URL = "ui://75kiu87k74v84c";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_slideAds.ts":
/*!*************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_slideAds.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_slideAds; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_slideAds extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "slideAds"));
    }
    onConstruct() {
        this.m_list0 = (this.getChildAt(0));
        this.m_list1 = (this.getChildAt(1));
        this.m_list2 = (this.getChildAt(2));
    }
}
UI_slideAds.URL = "ui://75kiu87kp2ld6n";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_sliderADs.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_sliderADs.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_sliderADs; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_sliderADs extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "sliderADs"));
    }
    onConstruct() {
        this.m_list = (this.getChildAt(1));
    }
}
UI_sliderADs.URL = "ui://75kiu87kulgb5x";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_end_games.ts":
/*!*******************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_end_games.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_end_games; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_end_games extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "view_end_games"));
    }
    onConstruct() {
        this.m_sharegames = (this.getChildAt(0));
    }
}
UI_view_end_games.URL = "ui://75kiu87kbg001k";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_fly_coin.ts":
/*!******************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_fly_coin.ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_fly_coin; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_fly_coin extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "view_fly_coin"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(0));
    }
}
UI_view_fly_coin.URL = "ui://75kiu87kh75rh";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_game_icon.ts":
/*!*******************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_game_icon.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_game_icon; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_game_icon extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "view_game_icon"));
    }
    onConstruct() {
        this.m_mask = (this.getChildAt(1));
        this.m_icon = (this.getChildAt(2));
    }
}
UI_view_game_icon.URL = "ui://75kiu87kbg001h";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_item_game.ts":
/*!*******************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_item_game.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_item_game; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_item_game extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "view_item_game"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(1));
        this.m_text_name = (this.getChildAt(2));
    }
}
UI_view_item_game.URL = "ui://75kiu87kp2ld6o";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_item_game128.ts":
/*!**********************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_item_game128.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_item_game128; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_item_game128 extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "view_item_game128"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(0));
        this.m_text_name = (this.getChildAt(1));
    }
}
UI_view_item_game128.URL = "ui://75kiu87kt3oybl";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_item_game140.ts":
/*!**********************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_item_game140.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_item_game140; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_item_game140 extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "view_item_game140"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(0));
        this.m_text_name = (this.getChildAt(1));
    }
}
UI_view_item_game140.URL = "ui://75kiu87kp2ld6p";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_load.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_load.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_load; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_load extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "view_load"));
    }
    onConstruct() {
        this.m_text_load = (this.getChildAt(2));
        this.m_rotate = this.getTransitionAt(0);
    }
}
UI_view_load.URL = "ui://75kiu87kmhase";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_sharegames_big.ts":
/*!************************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_sharegames_big.ts ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_sharegames_big; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_sharegames_big extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "view_sharegames_big"));
    }
    onConstruct() {
        this.m_img_game_bg = (this.getChildAt(0));
        this.m_list_games = (this.getChildAt(1));
    }
}
UI_view_sharegames_big.URL = "ui://75kiu87kwjpo4i";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_toast.ts":
/*!***************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_toast.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_toast; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_toast extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTGame", "view_toast"));
    }
    onConstruct() {
        this.m_toast_str = (this.getChildAt(1));
        this.m_show = this.getTransitionAt(0);
    }
}
UI_view_toast.URL = "ui://75kiu87kovsy8";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/LTUIBinder.ts":
/*!**********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/LTUIBinder.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTUIBinder; });
/* harmony import */ var _UI_view_common_sign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI_view_common_sign */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_view_common_sign.ts");
/* harmony import */ var _UI_view_item_sign_big__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI_view_item_sign_big */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_view_item_sign_big.ts");
/* harmony import */ var _UI_view_item_sign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI_view_item_sign */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_view_item_sign.ts");
/* harmony import */ var _UI_btn_toggle_02__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI_btn_toggle_02 */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_toggle_02.ts");
/* harmony import */ var _UI_btn_double_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI_btn_double_get */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_double_get.ts");
/* harmony import */ var _UI_tog_key__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI_tog_key */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_tog_key.ts");
/* harmony import */ var _UI_BonusItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UI_BonusItem */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_BonusItem.ts");
/* harmony import */ var _UI_btn_normal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UI_btn_normal */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_normal.ts");
/* harmony import */ var _UI_hander_grip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UI_hander_grip */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_hander_grip.ts");
/* harmony import */ var _UI_info__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UI_info */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_info.ts");
/* harmony import */ var _UI_btn_getegg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./UI_btn_getegg */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_getegg.ts");
/* harmony import */ var _UI_eggItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./UI_eggItem */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_eggItem.ts");
/* harmony import */ var _UI_eggIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./UI_eggIcon */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_eggIcon.ts");
/* harmony import */ var _UI_CommonSign__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./UI_CommonSign */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_CommonSign.ts");
/* harmony import */ var _UI_CommonUnlockProgress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./UI_CommonUnlockProgress */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_CommonUnlockProgress.ts");
/* harmony import */ var _UI_CommonSign2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./UI_CommonSign2 */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_CommonSign2.ts");
/* harmony import */ var _UI_btn_normal0__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./UI_btn_normal0 */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_normal0.ts");
/* harmony import */ var _UI_SignItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./UI_SignItem */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_SignItem.ts");
/* harmony import */ var _UI_ExSkin__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./UI_ExSkin */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_ExSkin.ts");
/* harmony import */ var _UI_btn_twoIcon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./UI_btn_twoIcon */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_twoIcon.ts");
/* harmony import */ var _UI_tog_progress__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./UI_tog_progress */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_tog_progress.ts");
/* harmony import */ var _UI_BonusBox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./UI_BonusBox */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_BonusBox.ts");
/* harmony import */ var _UI_btn_watch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./UI_btn_watch */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_watch.ts");
/* harmony import */ var _UI_Roll__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./UI_Roll */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_Roll.ts");
/* harmony import */ var _UI_view_roll_bg_new__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./UI_view_roll_bg_new */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_view_roll_bg_new.ts");
/* harmony import */ var _UI_item_roll__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./UI_item_roll */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_item_roll.ts");
/* harmony import */ var _UI_btn_rollClose__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./UI_btn_rollClose */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_rollClose.ts");
/* harmony import */ var _UI_btn_roll__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./UI_btn_roll */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_roll.ts");
/* harmony import */ var _UI_player__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./UI_player */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_player.ts");
/* harmony import */ var _UI_progress_roll__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./UI_progress_roll */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_progress_roll.ts");
/* harmony import */ var _UI_btn_rollReward__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./UI_btn_rollReward */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_rollReward.ts");
/* harmony import */ var _UI_TrySkin__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./UI_TrySkin */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_TrySkin.ts");
/* harmony import */ var _UI_toggle_nogame__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./UI_toggle_nogame */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_toggle_nogame.ts");
/* harmony import */ var _UI_CommonGameEgg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./UI_CommonGameEgg */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_CommonGameEgg.ts");
/* harmony import */ var _UI_BonusGame__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./UI_BonusGame */ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_BonusGame.ts");
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



































class LTUIBinder {
    static bindAll() {
        fgui.UIObjectFactory.setExtension(_UI_view_common_sign__WEBPACK_IMPORTED_MODULE_0__["default"].URL, _UI_view_common_sign__WEBPACK_IMPORTED_MODULE_0__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_view_item_sign_big__WEBPACK_IMPORTED_MODULE_1__["default"].URL, _UI_view_item_sign_big__WEBPACK_IMPORTED_MODULE_1__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_view_item_sign__WEBPACK_IMPORTED_MODULE_2__["default"].URL, _UI_view_item_sign__WEBPACK_IMPORTED_MODULE_2__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_btn_toggle_02__WEBPACK_IMPORTED_MODULE_3__["default"].URL, _UI_btn_toggle_02__WEBPACK_IMPORTED_MODULE_3__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_btn_double_get__WEBPACK_IMPORTED_MODULE_4__["default"].URL, _UI_btn_double_get__WEBPACK_IMPORTED_MODULE_4__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_tog_key__WEBPACK_IMPORTED_MODULE_5__["default"].URL, _UI_tog_key__WEBPACK_IMPORTED_MODULE_5__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_BonusItem__WEBPACK_IMPORTED_MODULE_6__["default"].URL, _UI_BonusItem__WEBPACK_IMPORTED_MODULE_6__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_btn_normal__WEBPACK_IMPORTED_MODULE_7__["default"].URL, _UI_btn_normal__WEBPACK_IMPORTED_MODULE_7__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_hander_grip__WEBPACK_IMPORTED_MODULE_8__["default"].URL, _UI_hander_grip__WEBPACK_IMPORTED_MODULE_8__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_info__WEBPACK_IMPORTED_MODULE_9__["default"].URL, _UI_info__WEBPACK_IMPORTED_MODULE_9__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_btn_getegg__WEBPACK_IMPORTED_MODULE_10__["default"].URL, _UI_btn_getegg__WEBPACK_IMPORTED_MODULE_10__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_eggItem__WEBPACK_IMPORTED_MODULE_11__["default"].URL, _UI_eggItem__WEBPACK_IMPORTED_MODULE_11__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_eggIcon__WEBPACK_IMPORTED_MODULE_12__["default"].URL, _UI_eggIcon__WEBPACK_IMPORTED_MODULE_12__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_CommonSign__WEBPACK_IMPORTED_MODULE_13__["default"].URL, _UI_CommonSign__WEBPACK_IMPORTED_MODULE_13__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_CommonUnlockProgress__WEBPACK_IMPORTED_MODULE_14__["default"].URL, _UI_CommonUnlockProgress__WEBPACK_IMPORTED_MODULE_14__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_CommonSign2__WEBPACK_IMPORTED_MODULE_15__["default"].URL, _UI_CommonSign2__WEBPACK_IMPORTED_MODULE_15__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_btn_normal0__WEBPACK_IMPORTED_MODULE_16__["default"].URL, _UI_btn_normal0__WEBPACK_IMPORTED_MODULE_16__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_SignItem__WEBPACK_IMPORTED_MODULE_17__["default"].URL, _UI_SignItem__WEBPACK_IMPORTED_MODULE_17__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_ExSkin__WEBPACK_IMPORTED_MODULE_18__["default"].URL, _UI_ExSkin__WEBPACK_IMPORTED_MODULE_18__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_btn_twoIcon__WEBPACK_IMPORTED_MODULE_19__["default"].URL, _UI_btn_twoIcon__WEBPACK_IMPORTED_MODULE_19__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_tog_progress__WEBPACK_IMPORTED_MODULE_20__["default"].URL, _UI_tog_progress__WEBPACK_IMPORTED_MODULE_20__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_BonusBox__WEBPACK_IMPORTED_MODULE_21__["default"].URL, _UI_BonusBox__WEBPACK_IMPORTED_MODULE_21__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_btn_watch__WEBPACK_IMPORTED_MODULE_22__["default"].URL, _UI_btn_watch__WEBPACK_IMPORTED_MODULE_22__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_Roll__WEBPACK_IMPORTED_MODULE_23__["default"].URL, _UI_Roll__WEBPACK_IMPORTED_MODULE_23__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_view_roll_bg_new__WEBPACK_IMPORTED_MODULE_24__["default"].URL, _UI_view_roll_bg_new__WEBPACK_IMPORTED_MODULE_24__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_item_roll__WEBPACK_IMPORTED_MODULE_25__["default"].URL, _UI_item_roll__WEBPACK_IMPORTED_MODULE_25__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_btn_rollClose__WEBPACK_IMPORTED_MODULE_26__["default"].URL, _UI_btn_rollClose__WEBPACK_IMPORTED_MODULE_26__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_btn_roll__WEBPACK_IMPORTED_MODULE_27__["default"].URL, _UI_btn_roll__WEBPACK_IMPORTED_MODULE_27__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_player__WEBPACK_IMPORTED_MODULE_28__["default"].URL, _UI_player__WEBPACK_IMPORTED_MODULE_28__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_progress_roll__WEBPACK_IMPORTED_MODULE_29__["default"].URL, _UI_progress_roll__WEBPACK_IMPORTED_MODULE_29__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_btn_rollReward__WEBPACK_IMPORTED_MODULE_30__["default"].URL, _UI_btn_rollReward__WEBPACK_IMPORTED_MODULE_30__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_TrySkin__WEBPACK_IMPORTED_MODULE_31__["default"].URL, _UI_TrySkin__WEBPACK_IMPORTED_MODULE_31__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_toggle_nogame__WEBPACK_IMPORTED_MODULE_32__["default"].URL, _UI_toggle_nogame__WEBPACK_IMPORTED_MODULE_32__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_CommonGameEgg__WEBPACK_IMPORTED_MODULE_33__["default"].URL, _UI_CommonGameEgg__WEBPACK_IMPORTED_MODULE_33__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_BonusGame__WEBPACK_IMPORTED_MODULE_34__["default"].URL, _UI_BonusGame__WEBPACK_IMPORTED_MODULE_34__["default"]);
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_BonusBox.ts":
/*!***********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_BonusBox.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_BonusBox; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_BonusBox extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "BonusBox"));
    }
    onConstruct() {
        this.m_canclose = this.getControllerAt(0);
        this.m_bg = (this.getChildAt(0));
        this.m_btn_close = (this.getChildAt(5));
        this.m_tog = (this.getChildAt(6));
        this.m_boxList = (this.getChildAt(7));
        this.m_keyList = (this.getChildAt(8));
        this.m_btn_ad = (this.getChildAt(9));
        this.m_txt_count = (this.getChildAt(10));
        this.m_t1 = this.getTransitionAt(0);
        this.m_delay = this.getTransitionAt(1);
    }
}
UI_BonusBox.URL = "ui://xwcraheakntfin";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_BonusGame.ts":
/*!************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_BonusGame.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_BonusGame; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_BonusGame extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "BonusGame"));
    }
    onConstruct() {
        this.m_progress = (this.getChildAt(1));
        this.m_btn_play = (this.getChildAt(2));
        this.m_tap = (this.getChildAt(3));
        this.m_timer = (this.getChildAt(5));
        this.m_proHand = (this.getChildAt(7));
        this.m_hand = (this.getChildAt(8));
        this.m_t0 = this.getTransitionAt(0);
    }
}
UI_BonusGame.URL = "ui://xwcraheakntfkb";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_BonusItem.ts":
/*!************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_BonusItem.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_BonusItem; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_BonusItem extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "BonusItem"));
    }
    onConstruct() {
        this.m_ad = this.getControllerAt(0);
        this.m_isclicked = this.getControllerAt(1);
        this.m_icon = (this.getChildAt(2));
        this.m_title = (this.getChildAt(3));
        this.m_adicon = (this.getChildAt(4));
        this.m_lock = (this.getChildAt(5));
    }
}
UI_BonusItem.URL = "ui://xwcraheakntfee";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_CommonGameEgg.ts":
/*!****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_CommonGameEgg.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_CommonGameEgg; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_CommonGameEgg extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "CommonGameEgg"));
    }
    onConstruct() {
        this.m_noEgg = this.getControllerAt(0);
        this.m_bg = (this.getChildAt(0));
        this.m_eggLsit = (this.getChildAt(8));
        this.m_info = (this.getChildAt(9));
        this.m_btn_close = (this.getChildAt(10));
        this.m_txt_eggName = (this.getChildAt(11));
        this.m_txt_getState = (this.getChildAt(12));
        this.m_btn_getSec = (this.getChildAt(13));
        this.m_btn_getPass = (this.getChildAt(14));
        this.m_txt_disable = (this.getChildAt(16));
    }
}
UI_CommonGameEgg.URL = "ui://xwcraheakntfka";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_CommonSign.ts":
/*!*************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_CommonSign.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_CommonSign; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_CommonSign extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "CommonSign"));
    }
    onConstruct() {
        this.m_view = (this.getChildAt(1));
        this.m___nativeinpage = (this.getChildAt(2));
    }
}
UI_CommonSign.URL = "ui://xwcraheakntfha";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_CommonSign2.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_CommonSign2.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_CommonSign2; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_CommonSign2 extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "CommonSign2"));
    }
    onConstruct() {
        this.m_isSigned = this.getControllerAt(0);
        this.m_btn_videoRwd = (this.getChildAt(3));
        this.m_btn_nornalRwd = (this.getChildAt(4));
        this.m_btn_close = (this.getChildAt(5));
        this.m_dayList = (this.getChildAt(6));
    }
}
UI_CommonSign2.URL = "ui://xwcraheakntfhu";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_CommonUnlockProgress.ts":
/*!***********************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_CommonUnlockProgress.ts ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_CommonUnlockProgress; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_CommonUnlockProgress extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "CommonUnlockProgress"));
    }
    onConstruct() {
        this.m_check_state = this.getControllerAt(0);
        this.m_bg = (this.getChildAt(0));
        this.m_btn_get = (this.getChildAt(2));
        this.m_icon_bg = (this.getChildAt(3));
        this.m_text_progress = (this.getChildAt(4));
        this.m_btn_nothanks = (this.getChildAt(5));
        this.m_show_close = this.getTransitionAt(0);
    }
}
UI_CommonUnlockProgress.URL = "ui://xwcraheakntfhs";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_ExSkin.ts":
/*!*********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_ExSkin.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_ExSkin; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_ExSkin extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "ExSkin"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(3));
        this.m_btn_close = (this.getChildAt(5));
        this.m_btn_ad = (this.getChildAt(6));
        this.m_list_pro = (this.getChildAt(7));
        this.m_tog = (this.getChildAt(9));
        this.m_anim_enter = this.getTransitionAt(0);
        this.m_t1 = this.getTransitionAt(1);
    }
}
UI_ExSkin.URL = "ui://xwcraheakntfie";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_Roll.ts":
/*!*******************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_Roll.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_Roll; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_Roll extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "Roll"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
        this.m_view_roll = (this.getChildAt(1));
        this.m_pointer = (this.getChildAt(2));
        this.m_btn_close = (this.getChildAt(3));
        this.m_btn_roll = (this.getChildAt(4));
        this.m_player = (this.getChildAt(5));
        this.m_progress_roll = (this.getChildAt(6));
        this.m_btn_reward = (this.getChildAt(7));
        this.m_progress = (this.getChildAt(8));
        this.m_lbl_count = (this.getChildAt(10));
        this.m_text = (this.getChildAt(11));
        this.m_tween_rotate = this.getTransitionAt(0);
    }
}
UI_Roll.URL = "ui://xwcraheakntfiw";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_SignItem.ts":
/*!***********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_SignItem.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_SignItem; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_SignItem extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "SignItem"));
    }
    onConstruct() {
        this.m_type = this.getControllerAt(0);
        this.m_state = this.getControllerAt(1);
        this.m_bg1 = (this.getChildAt(2));
        this.m_d7 = (this.getChildAt(3));
        this.m_day = (this.getChildAt(4));
        this.m_title = (this.getChildAt(5));
        this.m_icon = (this.getChildAt(6));
    }
}
UI_SignItem.URL = "ui://xwcraheakntfi3";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_TrySkin.ts":
/*!**********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_TrySkin.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_TrySkin; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_TrySkin extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "TrySkin"));
    }
    onConstruct() {
        this.m_check_type = this.getControllerAt(0);
        this.m_oppo = this.getControllerAt(1);
        this.m_bg = (this.getChildAt(0));
        this.m_haro = (this.getChildAt(1));
        this.m_icon = (this.getChildAt(4));
        this.m_btn_pay = (this.getChildAt(5));
        this.m_btn_watch = (this.getChildAt(6));
        this.m_btn_close = (this.getChildAt(7));
        this.m_btn_no = (this.getChildAt(8));
        this.m_btn_try = (this.getChildAt(9));
        this.m___bottomgames = (this.getChildAt(10));
        this.m_t0 = this.getTransitionAt(0);
        this.m_anim_enter = this.getTransitionAt(1);
    }
}
UI_TrySkin.URL = "ui://xwcraheakntfju";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_double_get.ts":
/*!*****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_double_get.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_btn_double_get; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_btn_double_get extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "btn_double_get"));
    }
    onConstruct() {
        this.m_btn_type = this.getControllerAt(0);
        this.m_bg_type = this.getControllerAt(1);
    }
}
UI_btn_double_get.URL = "ui://xwcraheakntfd4";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_getegg.ts":
/*!*************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_getegg.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_btn_getegg; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_btn_getegg extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "btn_getegg"));
    }
    onConstruct() {
        this.m_lockState = this.getControllerAt(0);
    }
}
UI_btn_getegg.URL = "ui://xwcraheakntfg5";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_normal.ts":
/*!*************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_normal.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_btn_normal; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_btn_normal extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "btn_normal"));
    }
    onConstruct() {
        this.m_t0 = this.getTransitionAt(0);
    }
}
UI_btn_normal.URL = "ui://xwcraheakntff3";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_normal0.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_normal0.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_btn_normal0; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_btn_normal0 extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "btn_normal0"));
    }
    onConstruct() {
        this.m_ad = this.getControllerAt(0);
    }
}
UI_btn_normal0.URL = "ui://xwcraheakntfi0";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_roll.ts":
/*!***********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_roll.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_btn_roll; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_btn_roll extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "btn_roll"));
    }
    onConstruct() {
        this.m_isFree = this.getControllerAt(0);
        this.m_btn_bg = (this.getChildAt(0));
        this.m_sp_watch = (this.getChildAt(1));
        this.m_sp_title = (this.getChildAt(2));
    }
}
UI_btn_roll.URL = "ui://xwcraheakntfj5";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_rollClose.ts":
/*!****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_rollClose.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_btn_rollClose; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_btn_rollClose extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "btn_rollClose"));
    }
    onConstruct() {
        this.m_btn_close = (this.getChildAt(0));
    }
}
UI_btn_rollClose.URL = "ui://xwcraheakntfj3";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_rollReward.ts":
/*!*****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_rollReward.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_btn_rollReward; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_btn_rollReward extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "btn_rollReward"));
    }
    onConstruct() {
        this.m_btn_reward = (this.getChildAt(0));
    }
}
UI_btn_rollReward.URL = "ui://xwcraheakntfjf";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_toggle_02.ts":
/*!****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_toggle_02.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_btn_toggle_02; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_btn_toggle_02 extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "btn_toggle_02"));
    }
    onConstruct() {
        this.m_selected = this.getControllerAt(0);
    }
}
UI_btn_toggle_02.URL = "ui://xwcraheakntfcp";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_twoIcon.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_twoIcon.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_btn_twoIcon; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_btn_twoIcon extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "btn_twoIcon"));
    }
    onConstruct() {
        this.m_ad = this.getControllerAt(0);
        this.m_anim = this.getTransitionAt(0);
    }
}
UI_btn_twoIcon.URL = "ui://xwcraheakntfig";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_watch.ts":
/*!************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_btn_watch.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_btn_watch; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_btn_watch extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "btn_watch"));
    }
    onConstruct() {
        this.m_ad = this.getControllerAt(0);
    }
}
UI_btn_watch.URL = "ui://xwcraheakntfit";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_eggIcon.ts":
/*!**********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_eggIcon.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_eggIcon; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_eggIcon extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "eggIcon"));
    }
    onConstruct() {
        this.m_lockState = this.getControllerAt(0);
        this.m_selected = this.getControllerAt(1);
        this.m_icon = (this.getChildAt(4));
    }
}
UI_eggIcon.URL = "ui://xwcraheakntfg8";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_eggItem.ts":
/*!**********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_eggItem.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_eggItem; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_eggItem extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "eggItem"));
    }
    onConstruct() {
        this.m_type = this.getControllerAt(0);
        this.m_icon = (this.getChildAt(0));
        this.m_shake = this.getTransitionAt(0);
    }
}
UI_eggItem.URL = "ui://xwcraheakntfg7";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_hander_grip.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_hander_grip.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_hander_grip; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_hander_grip extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "hander_grip"));
    }
    onConstruct() {
        this.m_win = this.getControllerAt(0);
        this.m_t0 = this.getTransitionAt(0);
    }
}
UI_hander_grip.URL = "ui://xwcraheakntff9";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_info.ts":
/*!*******************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_info.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_info; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_info extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "info"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(1));
    }
}
UI_info.URL = "ui://xwcraheakntfg4";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_item_roll.ts":
/*!************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_item_roll.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_item_roll; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_item_roll extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "item_roll"));
    }
    onConstruct() {
        this.m_icon = (this.getChildAt(0));
        this.m_text_title = (this.getChildAt(1));
    }
}
UI_item_roll.URL = "ui://xwcraheakntfj0";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_player.ts":
/*!*********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_player.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_player; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_player extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "player"));
    }
    onConstruct() {
        this.m_sp_player_bg = (this.getChildAt(0));
        this.m_sp_zuanshi = (this.getChildAt(1));
        this.m_lbl_playerMoney = (this.getChildAt(2));
    }
}
UI_player.URL = "ui://xwcraheakntfj9";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_progress_roll.ts":
/*!****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_progress_roll.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_progress_roll; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_progress_roll extends fgui.GProgressBar {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "progress_roll"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
    }
}
UI_progress_roll.URL = "ui://xwcraheakntfjc";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_tog_key.ts":
/*!**********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_tog_key.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_tog_key; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_tog_key extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "tog_key"));
    }
    onConstruct() {
        this.m_select = this.getControllerAt(0);
    }
}
UI_tog_key.URL = "ui://xwcraheakntfe8";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_tog_progress.ts":
/*!***************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_tog_progress.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_tog_progress; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_tog_progress extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "tog_progress"));
    }
    onConstruct() {
        this.m_select = this.getControllerAt(0);
    }
}
UI_tog_progress.URL = "ui://xwcraheakntfik";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_toggle_nogame.ts":
/*!****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_toggle_nogame.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_toggle_nogame; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_toggle_nogame extends fgui.GButton {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "toggle_nogame"));
    }
    onConstruct() {
        this.m_select = this.getControllerAt(0);
        this.m_type = this.getControllerAt(1);
    }
}
UI_toggle_nogame.URL = "ui://xwcraheakntfjz";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_view_common_sign.ts":
/*!*******************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_view_common_sign.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_common_sign; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_common_sign extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "view_common_sign"));
    }
    onConstruct() {
        this.m_check_state = this.getControllerAt(0);
        this.m_signed = this.getControllerAt(1);
        this.m_view_day7 = (this.getChildAt(3));
        this.m_list_day = (this.getChildAt(4));
        this.m_toggle_watchad = (this.getChildAt(5));
        this.m_btn_get = (this.getChildAt(6));
        this.m_btn_close = (this.getChildAt(7));
        this.m_btn_watchad = (this.getChildAt(8));
    }
}
UI_view_common_sign.URL = "ui://xwcraheakntfcd";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_view_item_sign.ts":
/*!*****************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_view_item_sign.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_item_sign; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_item_sign extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "view_item_sign"));
    }
    onConstruct() {
        this.m_c1 = this.getControllerAt(0);
        this.m_text_day = (this.getChildAt(3));
        this.m_icon_reward = (this.getChildAt(4));
        this.m_text_reward = (this.getChildAt(5));
    }
}
UI_view_item_sign.URL = "ui://xwcraheakntfco";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_view_item_sign_big.ts":
/*!*********************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_view_item_sign_big.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_item_sign_big; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_item_sign_big extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "view_item_sign_big"));
    }
    onConstruct() {
        this.m_c1 = this.getControllerAt(0);
        this.m_text_day = (this.getChildAt(3));
        this.m_icon_reward = (this.getChildAt(4));
        this.m_text_reward = (this.getChildAt(5));
    }
}
UI_view_item_sign_big.URL = "ui://xwcraheakntfch";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_view_roll_bg_new.ts":
/*!*******************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI/LTUI/UI_view_roll_bg_new.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_view_roll_bg_new; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_view_roll_bg_new extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("LTUI", "view_roll_bg_new"));
    }
    onConstruct() {
        this.m_bg = (this.getChildAt(0));
        this.m_item_1 = (this.getChildAt(1));
        this.m_item_2 = (this.getChildAt(2));
        this.m_item_3 = (this.getChildAt(3));
        this.m_item_4 = (this.getChildAt(4));
        this.m_item_5 = (this.getChildAt(5));
        this.m_item_6 = (this.getChildAt(6));
        this.m_item_7 = (this.getChildAt(7));
        this.m_item_8 = (this.getChildAt(8));
    }
}
UI_view_roll_bg_new.URL = "ui://xwcraheakntfiy";


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI_CommomToastMediator.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI_CommomToastMediator.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_CommomToastMediator; });
/* harmony import */ var _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTGame_UI_CommonToast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/LTGame/UI_CommonToast */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonToast.ts");
/* harmony import */ var _FGui_FGuiData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FGui/FGuiData */ "./src/LTGame/UIExt/FGui/FGuiData.ts");
/* harmony import */ var _FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FGui/FGuiEx */ "./src/LTGame/UIExt/FGui/FGuiEx.ts");
/* harmony import */ var _UI_LTGame_UI_view_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI/LTGame/UI_view_toast */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_toast.ts");





class UI_CommomToastMediator extends _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_CommomToastMediator();
            this._instance._classDefine = _UI_LTGame_UI_CommonToast__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    Show(obj = null) {
        this._openParam = obj;
        if (this._ui == null) {
            let uiData = new _FGui_FGuiData__WEBPACK_IMPORTED_MODULE_2__["default"]();
            this._ui = _FGui_FGuiEx__WEBPACK_IMPORTED_MODULE_3__["default"].AddUI(this._classDefine, uiData);
            this._ui.sortingOrder = Number.MAX_SAFE_INTEGER;
            this.ui.m_toast.visible = false;
            this._OnShow();
        }
        this._DoToast(this._openParam);
    }
    _DoToast(str) {
        let createToast = _UI_LTGame_UI_view_toast__WEBPACK_IMPORTED_MODULE_4__["default"].createInstance();
        this.ui.addChild(createToast);
        createToast.setXY(this.ui.m_toast.x, this.ui.m_toast.y);
        createToast.m_toast_str.text = str;
        createToast.m_show.play(Laya.Handler.create(this, () => {
            createToast.dispose();
        }));
    }
    Hide(dispose = true) {
        // 该界面一旦打开,永不关闭
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI_CommonLoadMediator.ts":
/*!*************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI_CommonLoadMediator.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_CommondLoadMediator; });
/* harmony import */ var _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTGame_UI_CommonLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/LTGame/UI_CommonLoad */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonLoad.ts");


class UI_CommondLoadMediator extends _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_CommondLoadMediator();
            this._instance._classDefine = _UI_LTGame_UI_CommonLoad__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        this._sortOrder = Number.MAX_SAFE_INTEGER;
        super._OnShow();
        // your code
        let openStr = this._openParam[0];
        let isBig = this._openParam[1];
        this.ui.m_load.m_text_load.text = openStr;
        if (isBig) {
            this.ui.m_small_bg.visible = false;
            this.ui.m_big_bg.visible = true;
        }
        else {
            this.ui.m_small_bg.visible = true;
            this.ui.m_big_bg.visible = false;
        }
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI_CommonLockScreenMediator.ts":
/*!*******************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI_CommonLockScreenMediator.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_CommonLockScreenMediator; });
/* harmony import */ var _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTGame_UI_CommonLockScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/LTGame/UI_CommonLockScreen */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_CommonLockScreen.ts");


class UI_CommonLockScreenMediator extends _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_CommonLockScreenMediator();
            this._instance._classDefine = _UI_LTGame_UI_CommonLockScreen__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        this._sortOrder = Number.MAX_SAFE_INTEGER;
        super._OnShow();
        // your code
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI_FakeBannerVMediator.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI_FakeBannerVMediator.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_FakeBannerVMediator; });
/* harmony import */ var _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTGame_UI_FakeBanner_V__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/LTGame/UI_FakeBanner_V */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeBanner_V.ts");


class UI_FakeBannerVMediator extends _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_FakeBannerVMediator();
            this._instance._classDefine = _UI_LTGame_UI_FakeBanner_V__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        this._sortOrder = Number.MAX_SAFE_INTEGER;
        super._OnShow();
        // your code
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI_FakeInterstitalMediator.ts":
/*!******************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI_FakeInterstitalMediator.ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_FakeInterstitalMediator; });
/* harmony import */ var _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTGame_UI_FakeInterstital__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/LTGame/UI_FakeInterstital */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeInterstital.ts");


class UI_FakeInterstitalMediator extends _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_FakeInterstitalMediator();
            this._instance._classDefine = _UI_LTGame_UI_FakeInterstital__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        this._sortOrder = Number.MAX_SAFE_INTEGER;
        super._OnShow();
        // your code
        this._closeHandle = this._openParam;
        this.ui.m_btn_close.onClick(this, this._OnClickClose);
    }
    _OnClickClose() {
        this.Hide();
        if (this._closeHandle) {
            this._closeHandle.run();
        }
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI_FakeRewardADMediator.ts":
/*!***************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI_FakeRewardADMediator.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_FakeRewardADMediator; });
/* harmony import */ var _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTGame_UI_FakeRewardVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/LTGame/UI_FakeRewardVideo */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FakeRewardVideo.ts");


class UI_FakeRewardADMediator extends _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_FakeRewardADMediator();
            this._instance._classDefine = _UI_LTGame_UI_FakeRewardVideo__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        this._sortOrder = Number.MAX_SAFE_INTEGER;
        super._OnShow();
        // your code
        this._rewardHandle = this._openParam[0];
        this._skipHandle = this._openParam[1];
        this.ui.m_btn_reward.onClick(this, this._OnClickReward);
        this.ui.m_btn_skip.onClick(this, this._OnClickSkip);
    }
    _OnClickReward() {
        this.Hide();
        if (this._rewardHandle) {
            this._rewardHandle.run();
        }
    }
    _OnClickSkip() {
        this.Hide();
        if (this._skipHandle) {
            this._skipHandle.run();
        }
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI_FlyPanelMediator.ts":
/*!***********************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI_FlyPanelMediator.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_FlyPanelMediator; });
/* harmony import */ var _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTGame_UI_FlyPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/LTGame/UI_FlyPanel */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_FlyPanel.ts");
/* harmony import */ var _UI_LTGame_UI_view_fly_coin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI/LTGame/UI_view_fly_coin */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_view_fly_coin.ts");
/* harmony import */ var _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _Async_Awaiters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");





class UI_FlyPanelMediator extends _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_FlyPanelMediator();
            this._instance._classDefine = _UI_LTGame_UI_FlyPanel__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        // your code
        this._sortOrder = Number.MAX_SAFE_INTEGER - 1;
        super._OnShow();
        this.ui.m_test.dispose();
    }
    BoomObjs(fromObj, boomCount, flyTime = 1, circleRadius = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            let startPos = fromObj.localToGlobal();
            startPos.x -= fromObj.width / 2;
            startPos.y -= fromObj.height / 2;
            let cacheTime = flyTime * 1000;
            for (let i = 0; i < boomCount; ++i) {
                let flyCoin = _UI_LTGame_UI_view_fly_coin__WEBPACK_IMPORTED_MODULE_2__["default"].createInstance();
                this.ui.addChild(flyCoin);
                if (fromObj['url'] != null) {
                    flyCoin.m_icon.url = fromObj['url'];
                }
                else if (fromObj['resourceURL'] != null) {
                    flyCoin.m_icon.url = fromObj['resourceURL'];
                }
                flyCoin.m_icon.setSize(fromObj.width, fromObj.height);
                flyCoin.setPivot(fromObj.pivotX, fromObj.pivotY);
                flyCoin.setXY(startPos.x, startPos.y);
                let cachePos = new Laya.Vector2(startPos.x + _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(-circleRadius, circleRadius), startPos.y + _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(-circleRadius, circleRadius));
                Laya.Tween.to(flyCoin, { x: cachePos.x, y: cachePos.y }, cacheTime, Laya.Ease.quadOut, Laya.Handler.create(this, () => {
                    flyCoin.dispose();
                }));
            }
            yield _Async_Awaiters__WEBPACK_IMPORTED_MODULE_4__["default"].Seconds(flyTime);
        });
    }
    /**
     * 爆炸金币,用于没有可飞行位置的时候
     * @param fromObj
     * @param flyIcon
     * @param flyCount
     * @param flyTime
     * @param circleRadius
     */
    BoomCoins(fromObj, flyIcon = null, flyCount = 100, flyTime = 1, circleRadius = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            let startPos = fromObj.localToGlobal();
            let cacheTime = flyTime * 1000;
            for (let i = 0; i < flyCount; ++i) {
                let flyCoin = _UI_LTGame_UI_view_fly_coin__WEBPACK_IMPORTED_MODULE_2__["default"].createInstance();
                this.ui.addChild(flyCoin);
                if (flyIcon != null) {
                    flyCoin.m_icon.url = flyIcon;
                }
                flyCoin.setXY(startPos.x, startPos.y);
                let cachePos = new Laya.Vector2(startPos.x + _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(-circleRadius, circleRadius), startPos.y + _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(-circleRadius, circleRadius));
                Laya.Tween.to(flyCoin, { x: cachePos.x, y: cachePos.y }, cacheTime, Laya.Ease.quadInOut, Laya.Handler.create(this, () => {
                    flyCoin.dispose();
                }));
            }
            yield _Async_Awaiters__WEBPACK_IMPORTED_MODULE_4__["default"].Seconds(flyTime);
        });
    }
    FlyObjs(fromObj, toObj, flyCount, flyTime, circleRadius) {
        return __awaiter(this, void 0, void 0, function* () {
            let startPos = fromObj.localToGlobal();
            startPos.x -= fromObj.width / 2;
            startPos.y -= fromObj.height / 2;
            let stopPos = toObj.localToGlobal();
            let cacheTime = flyTime * 0.6 * 1000;
            let finalTime = flyTime * 0.4 * 1000;
            for (let i = 0; i < flyCount; ++i) {
                let flyCoin = _UI_LTGame_UI_view_fly_coin__WEBPACK_IMPORTED_MODULE_2__["default"].createInstance();
                this.ui.addChild(flyCoin);
                if (fromObj['url'] != null) {
                    flyCoin.m_icon.url = fromObj['url'];
                }
                else if (fromObj['resourceURL'] != null) {
                    flyCoin.m_icon.url = fromObj['resourceURL'];
                }
                flyCoin.m_icon.setSize(fromObj.width, fromObj.height);
                flyCoin.setPivot(fromObj.pivotX, fromObj.pivotY);
                flyCoin.setXY(startPos.x, startPos.y);
                let cachePos = new Laya.Vector2(startPos.x + _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(-circleRadius, circleRadius), startPos.y + _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(-circleRadius, circleRadius));
                Laya.Tween.to(flyCoin, { x: cachePos.x, y: cachePos.y }, cacheTime, Laya.Ease.quadInOut, Laya.Handler.create(this, () => {
                    Laya.Tween.to(flyCoin, { x: stopPos.x, y: stopPos.y }, finalTime, Laya.Ease.quadInOut, Laya.Handler.create(this, () => {
                        flyCoin.dispose();
                    }));
                }));
            }
            yield _Async_Awaiters__WEBPACK_IMPORTED_MODULE_4__["default"].Seconds(flyTime);
        });
    }
    /**
     * 先往外扩,然后飞到指定位置
     * @param fromObj
     * @param toObj
     * @param flyIcon
     * @param flyCount
     * @param flyTime
     */
    FlyCoins(fromObj, toObj, flyIcon = null, flyCount = 100, flyTime = 1, circleRadius = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            let startPos = fromObj.localToGlobal();
            let stopPos = toObj.localToGlobal();
            let cacheTime = flyTime * 0.6 * 1000;
            let finalTime = flyTime * 0.4 * 1000;
            for (let i = 0; i < flyCount; ++i) {
                let flyCoin = _UI_LTGame_UI_view_fly_coin__WEBPACK_IMPORTED_MODULE_2__["default"].createInstance();
                this.ui.addChild(flyCoin);
                if (flyIcon != null) {
                    flyCoin.m_icon.url = flyIcon;
                }
                flyCoin.setXY(startPos.x, startPos.y);
                let cachePos = new Laya.Vector2(startPos.x + _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(-circleRadius, circleRadius), startPos.y + _LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(-circleRadius, circleRadius));
                Laya.Tween.to(flyCoin, { x: cachePos.x, y: cachePos.y }, cacheTime, Laya.Ease.quadInOut, Laya.Handler.create(this, () => {
                    Laya.Tween.to(flyCoin, { x: stopPos.x, y: stopPos.y }, finalTime, Laya.Ease.quadInOut, Laya.Handler.create(this, () => {
                        flyCoin.dispose();
                    }));
                }));
            }
            yield _Async_Awaiters__WEBPACK_IMPORTED_MODULE_4__["default"].Seconds(flyTime);
        });
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI_GameCenterMediator.ts":
/*!*************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI_GameCenterMediator.ts ***!
  \*************************************************************/
/*! exports provided: UI_GameCenterMediator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_GameCenterMediator", function() { return UI_GameCenterMediator; });
/* harmony import */ var _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTGame_UI_GameCenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/LTGame/UI_GameCenter */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_GameCenter.ts");
/* harmony import */ var _UI_LTGame_UI_item_gameBig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI/LTGame/UI_item_gameBig */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_item_gameBig.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");





class UI_GameCenterMediator extends _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this._posId = 5;
    }
    get ui() {
        return this._ui;
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_GameCenterMediator();
            this._instance._classDefine = _UI_LTGame_UI_GameCenter__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        this._needFilScreen = false;
        super._OnShow();
        this.cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_3__["default"].instance.adManager.GetADListByLocationId(this._posId);
        if (!this.cacheAds) {
            console.error('获取广告ID失败GameCenter');
            this.Hide();
            return;
        }
        this.ui.m_topList.setVirtualAndLoop();
        this.ui.m_topList.itemRenderer = Laya.Handler.create(this, this.renderItem, null, false);
        this.ui.m_topList.on(fairygui.Events.CLICK_ITEM, this, this.clickItem);
        this.ui.m_topList.numItems = this.cacheAds.length;
        this.ui.m_topList.refreshVirtualList();
        Laya.timer.loop(1000 * 5, this, () => {
            this.ui.m_topList.scrollPane.scrollRight(148 / 128, true); //148/697*4
        });
        this.ui.m_centerList.setVirtual();
        this.ui.m_centerList.itemRenderer = Laya.Handler.create(this, this.renderItem, null, false);
        this.ui.m_centerList.on(fairygui.Events.CLICK_ITEM, this, this.clickItem);
        this.ui.m_centerList.numItems = this.cacheAds.length;
        this.ui.m_centerList.refreshVirtualList();
        Laya.timer.loop(100, this, () => {
            this.ui.m_centerList.scrollPane.scrollDown(0.005, true);
        });
        this.ui.m_btn_close.onClick(this, this.Hide);
        this.ui.m_btn_back.onClick(this, this.Hide);
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.HideBannerAd();
        this.ui.m_btn_close.visible = false;
        Laya.timer.once(3000, this, () => {
            this.ui.m_btn_close.visible = true;
        });
        let ads = [];
        this.cacheAds.forEach(adData => {
            let ad = {};
            ad.ad_id = adData.ad_id;
            ad.location_id = this._posId;
            ad.num = 1;
            ads.push(ad);
        });
        _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_3__["default"].instance.ReportShowAd(ads);
    }
    clickItem(item) {
        let uid = item.data['id'];
        let path = item.data['path'];
        let adid = item.data['adid'];
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_4__["default"].instance.NavigateToApp(uid, path, null, false, false, adid);
    }
    renderItem(index, item) {
        let data = this.cacheAds[index];
        let info = {
            id: data.ad_appid,
            path: data.ad_path,
            adid: data.ad_id
        };
        item.data = info;
        item.m_title.text = data.ad_name;
        item.m_icon.m_icon.url = data.ad_img;
        item.m_red.visible = data.ad_dot == 1;
        if (item instanceof _UI_LTGame_UI_item_gameBig__WEBPACK_IMPORTED_MODULE_2__["default"]) {
            item.m_player.text = `${data.ad_count}人玩`;
        }
    }
    _OnHide() {
        Laya.timer.clearAll(this);
        // LTPlatform.instance.ShowBannerAd();
        if (this._openParam) {
            this._openParam();
        }
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI_ImageBannerMediator.ts":
/*!**************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI_ImageBannerMediator.ts ***!
  \**************************************************************/
/*! exports provided: default, FakeBannerData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_ImageBannerMediator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBannerData", function() { return FakeBannerData; });
/* harmony import */ var _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTGame_UI_ImageBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/LTGame/UI_ImageBanner */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_ImageBanner.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");



class UI_ImageBannerMediator extends _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_ImageBannerMediator();
            this._instance._classDefine = _UI_LTGame_UI_ImageBanner__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        this._sortOrder = 500;
        super._OnShow();
        // your code
        this._fakeBannerData = this._openParam;
        this.ui.m_img_banner.url = this._fakeBannerData.imgPath;
        this.ui.m_img_adnotice.url = this._fakeBannerData.noticePath;
        this.ui.m_img_banner.onClick(this, this._OnClickBanner);
        this.ui.m_btn_close.onClick(this, this._OnClickClose);
        // 上报广告曝光
        this._fakeBannerData.owner.reportAdShow({
            adId: this._fakeBannerData.adId
        });
    }
    _OnClickBanner() {
        console.log("点击banner", this._fakeBannerData);
        // 相应点击事件
        this._fakeBannerData.owner.reportAdClick({
            adId: this._fakeBannerData.adId
        });
        // 更换广告
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.ShowBannerAd();
    }
    _OnClickClose() {
        console.log("点击关闭banner", this._fakeBannerData);
        this.Hide();
    }
}
class FakeBannerData {
}


/***/ }),

/***/ "./src/LTGame/UIExt/DefaultUI/UI_SelfBannerMediator.ts":
/*!*************************************************************!*\
  !*** ./src/LTGame/UIExt/DefaultUI/UI_SelfBannerMediator.ts ***!
  \*************************************************************/
/*! exports provided: UI_SelfBannerMediator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_SelfBannerMediator", function() { return UI_SelfBannerMediator; });
/* harmony import */ var _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _UI_LTGame_UI_SelfBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/LTGame/UI_SelfBanner */ "./src/LTGame/UIExt/DefaultUI/UI/LTGame/UI_SelfBanner.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../SDK/common/ECheckState */ "./src/SDK/common/ECheckState.ts");





class UI_SelfBannerMediator extends _FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this._posId = 19;
        this.showingIndex = 0;
    }
    get ui() {
        return this._ui;
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_SelfBannerMediator();
            this._instance._classDefine = _UI_LTGame_UI_SelfBanner__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        this.cacheAds = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__["default"].instance.adManager.GetADListByLocationId(this._posId);
        if (!this.cacheAds || _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_2__["default"].instance.checkState == _SDK_common_ECheckState__WEBPACK_IMPORTED_MODULE_4__["ECheckState"].InCheck) {
            this.Hide();
            console.error('获取广告ID失败Banner');
            return;
        }
        this.ui.sortingOrder = Number.MAX_SAFE_INTEGER;
        this.refresh();
        Laya.timer.loop(15 * 1000, this, this.refresh);
        this.ui.m_banner.onClick(this, this.clickBanner);
    }
    clickBanner() {
        let ad = this.cacheAds[this.showingIndex % this.cacheAds.length];
        _Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.NavigateToApp(ad.ad_appid, ad.ad_path);
        this.refresh();
    }
    refresh() {
        this.showingIndex++;
        let id = this.showingIndex % this.cacheAds.length;
        let data = this.cacheAds[id];
        this.ui.m_banner.icon = data.ad_img;
    }
    _OnHide() { }
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
/* harmony import */ var _FGuiEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FGuiEx */ "./src/LTGame/UIExt/FGui/FGuiEx.ts");
/* harmony import */ var _FGuiData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FGuiData */ "./src/LTGame/UIExt/FGui/FGuiData.ts");
/* harmony import */ var _DefaultUI_Cmp_View_OtherGames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DefaultUI/Cmp/View_OtherGames */ "./src/LTGame/UIExt/DefaultUI/Cmp/View_OtherGames.ts");
/* harmony import */ var _DefaultUI_Cmp_View_HotGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DefaultUI/Cmp/View_HotGame */ "./src/LTGame/UIExt/DefaultUI/Cmp/View_HotGame.ts");
/* harmony import */ var _DefaultUI_Cmp_View_NativeIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DefaultUI/Cmp/View_NativeIcon */ "./src/LTGame/UIExt/DefaultUI/Cmp/View_NativeIcon.ts");
/* harmony import */ var _DefaultUI_Cmp_View_BottomGames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DefaultUI/Cmp/View_BottomGames */ "./src/LTGame/UIExt/DefaultUI/Cmp/View_BottomGames.ts");
/* harmony import */ var _DefaultUI_Cmp_View_SideGames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DefaultUI/Cmp/View_SideGames */ "./src/LTGame/UIExt/DefaultUI/Cmp/View_SideGames.ts");
/* harmony import */ var _DefaultUI_Cmp_View_EndSlideGames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../DefaultUI/Cmp/View_EndSlideGames */ "./src/LTGame/UIExt/DefaultUI/Cmp/View_EndSlideGames.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _DefaultUI_Cmp_View_NativeIconLong__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../DefaultUI/Cmp/View_NativeIconLong */ "./src/LTGame/UIExt/DefaultUI/Cmp/View_NativeIconLong.ts");
/* harmony import */ var _DefaultUI_Cmp_View_NativeInpage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../DefaultUI/Cmp/View_NativeInpage */ "./src/LTGame/UIExt/DefaultUI/Cmp/View_NativeInpage.ts");
/* harmony import */ var _DefaultUI_Cmp_View_WxSideGames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../DefaultUI/Cmp/View_WxSideGames */ "./src/LTGame/UIExt/DefaultUI/Cmp/View_WxSideGames.ts");
/* harmony import */ var _DefaultUI_Cmp_View_End3X3Games__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../DefaultUI/Cmp/View_End3X3Games */ "./src/LTGame/UIExt/DefaultUI/Cmp/View_End3X3Games.ts");













class BaseUIMediator {
    constructor() {
        this._scaleSmall = 0.8;
        this._tweenTime = 180;
        /**
         * 是否适配顶部刘海屏
         */
        this._needFilScreen = true;
        this._isShow = false;
        this._sortOrder = 10;
    }
    get ui() {
        return this._ui;
    }
    get isShow() {
        return this._isShow;
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
    Show(obj = null) {
        if (this._isShow) {
            return;
        }
        this._isShow = true;
        this._openParam = obj;
        let uiData = new _FGuiData__WEBPACK_IMPORTED_MODULE_1__["default"]();
        uiData.needFitScreen = this._needFilScreen;
        this._ui = _FGuiEx__WEBPACK_IMPORTED_MODULE_0__["default"].AddUI(this._classDefine, uiData);
        this._InitSelfAd();
        this._ui.sortingOrder = this._sortOrder;
        this._OnShow();
        const anim_enter = "m_anim_enter";
        if (this._ui[anim_enter] && _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_8__["default"].instance.isDelayClose) {
            let anim = this._ui[anim_enter];
            anim.play(Laya.Handler.create(this, this._CallEnterAnimEnd));
        }
    }
    _CallEnterAnimEnd() {
        this._OnEnterAnimEnd();
    }
    _OnEnterAnimEnd() {
    }
    _InitSelfAd() {
        let othergames = _DefaultUI_Cmp_View_OtherGames__WEBPACK_IMPORTED_MODULE_2__["default"].CreateView(this._ui['m___othergames']);
        if (othergames) {
            this._ui['m___othergames'] = othergames.ui;
        }
        else {
            this._ui['m___othergames'] = null;
        }
        let hotGame = _DefaultUI_Cmp_View_HotGame__WEBPACK_IMPORTED_MODULE_3__["default"].CreateView(this._ui['m___hotgame']);
        if (hotGame) {
            this._ui['m___hotgame'] = hotGame.ui;
        }
        else {
            this._ui['m___hotgame'] = null;
        }
        let nativeIcon = _DefaultUI_Cmp_View_NativeIcon__WEBPACK_IMPORTED_MODULE_4__["View_NativeIcon"].CreateView(this._ui['m___nativeicon']);
        if (nativeIcon) {
            this._ui['m___nativeicon'] = nativeIcon;
        }
        else {
            this._ui['m___nativeicon'] = null;
        }
        let nativeIconL = _DefaultUI_Cmp_View_NativeIconLong__WEBPACK_IMPORTED_MODULE_9__["View_NativeIconLong"].CreateView(this._ui['m___nativeiconL']);
        if (nativeIconL) {
            this._ui['m___nativeiconL'] = nativeIconL;
        }
        else {
            this._ui['m___nativeiconL'] = null;
        }
        let nativeinpage = _DefaultUI_Cmp_View_NativeInpage__WEBPACK_IMPORTED_MODULE_10__["View_NativeInPage"].CreateView(this._ui['m___nativeinpage']);
        if (nativeinpage) {
            this._ui['m___nativeinpage'] = nativeinpage;
        }
        else {
            this._ui['m___nativeinpage'] = null;
        }
        let bottomgames = _DefaultUI_Cmp_View_BottomGames__WEBPACK_IMPORTED_MODULE_5__["default"].CreateView(this._ui['m___bottomgames']);
        if (bottomgames) {
            this._ui['m___bottomgames'] = bottomgames.ui;
        }
        else {
            this._ui['m___bottomgames'] = null;
        }
        let sidegames = _DefaultUI_Cmp_View_SideGames__WEBPACK_IMPORTED_MODULE_6__["default"].CreateView(this._ui['m___sidegames']);
        if (sidegames) {
            this._ui['m___sidegames'] = sidegames.ui;
        }
        else {
            this._ui['m___sidegames'] = null;
        }
        let endslide = _DefaultUI_Cmp_View_EndSlideGames__WEBPACK_IMPORTED_MODULE_7__["default"].CreateView(this._ui['m___endSG']);
        if (endslide) {
            this._ui['m___endSG'] = endslide.ui;
        }
        else {
            this._ui['m___endSG'] = null;
        }
        let m___wxSG = _DefaultUI_Cmp_View_WxSideGames__WEBPACK_IMPORTED_MODULE_11__["default"].CreateView(this._ui['m___wxSG']);
        if (m___wxSG) {
            this._ui['m___wxSG'] = m___wxSG.ui;
        }
        else {
            this._ui['m___wxSG'] = null;
        }
        let end3x3 = _DefaultUI_Cmp_View_End3X3Games__WEBPACK_IMPORTED_MODULE_12__["default"].CreateView(this._ui['m___end3x3']);
        if (end3x3) {
            this._ui['m___end3x3'] = end3x3.ui;
        }
        else {
            this._ui['m___end3x3'] = null;
        }
    }
    _OnShow() {
    }
    Hide(dispose = true) {
        if (this._ui == null)
            return;
        if (this._ui.isDisposed)
            return;
        this._isShow = false;
        this._OnHide();
        const anim_exit = "m_anim_exit";
        if (this._ui[anim_exit]) {
            let anim = this._ui[anim_exit];
            anim.play(Laya.Handler.create(this, this._DoHide, [dispose]));
        }
        else {
            this._DoHide(dispose);
        }
    }
    _DoHide(dispose) {
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
            this.bottom = this.safeArea.bottom - this.safeArea.height - this.safeArea.top * scale;
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

/***/ "./src/LTGame/UIExt/FGui/LoadUIPack.ts":
/*!*********************************************!*\
  !*** ./src/LTGame/UIExt/FGui/LoadUIPack.ts ***!
  \*********************************************/
/*! exports provided: LoadUIPack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadUIPack", function() { return LoadUIPack; });
class LoadUIPack {
    constructor(packPath, atliasCount = 1) {
        this.packPath = packPath;
        this.atliasCount = atliasCount;
    }
    PushUrl(urls) {
        urls.push({ url: this.packPath + ".bin", type: Laya.Loader.BUFFER });
        if (this.atliasCount == 0)
            return;
        urls.push({ url: this.packPath + "_atlas0.png", type: Laya.Loader.IMAGE });
        for (let i = 1; i < this.atliasCount; ++i) {
            urls.push({ url: this.packPath + "_atlas0_" + i + ".png", type: Laya.Loader.IMAGE });
        }
    }
    AddPackage() {
        fgui.UIPackage.addPackage(this.packPath);
    }
}


/***/ }),

/***/ "./src/LTGame/UIExt/LTUI.ts":
/*!**********************************!*\
  !*** ./src/LTGame/UIExt/LTUI.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTUI; });
/* harmony import */ var _DefaultUI_UI_CommomToastMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultUI/UI_CommomToastMediator */ "./src/LTGame/UIExt/DefaultUI/UI_CommomToastMediator.ts");
/* harmony import */ var _DefaultUI_UI_CommonLoadMediator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultUI/UI_CommonLoadMediator */ "./src/LTGame/UIExt/DefaultUI/UI_CommonLoadMediator.ts");
/* harmony import */ var _DefaultUI_UI_CommonLockScreenMediator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultUI/UI_CommonLockScreenMediator */ "./src/LTGame/UIExt/DefaultUI/UI_CommonLockScreenMediator.ts");
/* harmony import */ var _DefaultUI_UI_FlyPanelMediator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultUI/UI_FlyPanelMediator */ "./src/LTGame/UIExt/DefaultUI/UI_FlyPanelMediator.ts");




class LTUI {
    static Toast(str) {
        console.log("[Toast]" + str);
        _DefaultUI_UI_CommomToastMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Show(str);
    }
    static ShowLoading(str, isBig = false) {
        if (_DefaultUI_UI_CommonLoadMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.isShow) {
            console.log("加载弹窗界面已打开");
            return;
        }
        _DefaultUI_UI_CommonLoadMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.Show([str, isBig]);
    }
    static HideLoading() {
        _DefaultUI_UI_CommonLoadMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.Hide();
    }
    static BoomObjs(fromObj, boomCount = 10, flyTime = 1, circleRadius = 60) {
        return __awaiter(this, void 0, void 0, function* () {
            yield _DefaultUI_UI_FlyPanelMediator__WEBPACK_IMPORTED_MODULE_3__["default"].instance.BoomObjs(fromObj, boomCount, flyTime, circleRadius);
        });
    }
    static FlyObjsTo(fromObj, toObj, flyCount = 10, flyTime = 1, circleRadius = 60) {
        return __awaiter(this, void 0, void 0, function* () {
            yield _DefaultUI_UI_FlyPanelMediator__WEBPACK_IMPORTED_MODULE_3__["default"].instance.FlyObjs(fromObj, toObj, flyCount, flyTime, circleRadius);
        });
    }
    static FlyCoinsTo(fromObj, toObj, flyIcon = null, flyCount = 10, flyTime = 1, circleRadius = 60) {
        return __awaiter(this, void 0, void 0, function* () {
            yield _DefaultUI_UI_FlyPanelMediator__WEBPACK_IMPORTED_MODULE_3__["default"].instance.FlyCoins(fromObj, toObj, flyIcon, flyCount, flyTime, circleRadius);
        });
    }
    static BoomCoins(fromObj, flyIcon = null, flyCount = 10, flyTime = 1, circleRadius = 60) {
        return __awaiter(this, void 0, void 0, function* () {
            yield _DefaultUI_UI_FlyPanelMediator__WEBPACK_IMPORTED_MODULE_3__["default"].instance.BoomCoins(fromObj, flyIcon, flyCount, flyTime, circleRadius);
        });
    }
    static LockScreen() {
        _DefaultUI_UI_CommonLockScreenMediator__WEBPACK_IMPORTED_MODULE_2__["default"].instance.Show();
    }
    static UnlockScreen() {
        _DefaultUI_UI_CommonLockScreenMediator__WEBPACK_IMPORTED_MODULE_2__["default"].instance.Hide();
    }
}


/***/ }),

/***/ "./src/SDK/Impl/SDK_CQ.ts":
/*!********************************!*\
  !*** ./src/SDK/Impl/SDK_CQ.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SDK_CQ; });
/* harmony import */ var _LTGame_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");
/* harmony import */ var _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../LTGame/Net/LTHttp */ "./src/LTGame/Net/LTHttp.ts");
/* harmony import */ var _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTGame/Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _LTGame_Platform_ShareInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LTGame/Platform/ShareInfo */ "./src/LTGame/Platform/ShareInfo.ts");
/* harmony import */ var _LTGame_Platform_ShareManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../LTGame/Platform/ShareManager */ "./src/LTGame/Platform/ShareManager.ts");
/* harmony import */ var _common_ECheckState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/ECheckState */ "./src/SDK/common/ECheckState.ts");
/* harmony import */ var _SDK_Default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SDK_Default */ "./src/SDK/Impl/SDK_Default.ts");








class SDK_CQ extends _SDK_Default__WEBPACK_IMPORTED_MODULE_7__["default"] {
    constructor() {
        super(...arguments);
        this.uid = "sdk_test";
        this.enableDebug = true;
        this.dateInfo = [];
        this._headPrefix = "https://gamer.api.gugudang.com";
    }
    Init(flg, channel, controlVersion, appId) {
        super.Init(flg, channel, controlVersion, appId);
        this._RequestShareInfo();
        // this.RecordRankInfo(1, 0);
    }
    _RequestShareInfo() {
        let uid = this.appId;
        if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Oppo) {
            uid = _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platformData.appKey;
        }
        let sendData = {
            appid: uid,
        };
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_1__["default"].Send(this._headPrefix + "/api/shares", Laya.Handler.create(this, this._OnRequestShareInfo), Laya.Handler.create(this, (res) => {
            console.log("获取分享接口访问失败", res);
        }), true, sendData);
    }
    /**
     * 按关卡上报排名
     * @param levelID 关卡
     * @param score 分数/时长
     */
    RecordRankInfo(levelID, score) {
        if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.loginState && _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.loginState.code) {
            console.error('登录信息未获取');
        }
        else {
            let uid = this.appId;
            if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Oppo) {
                uid = _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platformData.appKey;
            }
            let sendData = {
                appid: uid,
                openId: _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.loginState.code,
                times: score,
                nickname: _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.userInfo.nickName,
                avatar: _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.userInfo.avatarUrl,
                type: levelID
            };
            _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_1__["default"].Send(this._headPrefix + "/api/rank/times", Laya.Handler.create(this, this._OnRcordRank), Laya.Handler.create(this, (res) => {
                console.log("上报排名接口失败", res);
            }), true, sendData);
        }
    }
    /**查询周排名
     * @param levelID 关卡
     * @param score 分数/时长
    * @param onGetList 回调处理
     */
    getWeekRankList(levelID, score, onGetList) {
        if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.loginState && _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.loginState.code) {
            console.error('登录信息未获取');
        }
        else {
            let uid = this.appId;
            if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Oppo) {
                uid = _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platformData.appKey;
            }
            let sendData = {
                appid: uid,
                openId: _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.loginState.code,
                times: score,
                nickname: _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.userInfo.nickName,
                avatar: _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.userInfo.avatarUrl,
                type: levelID
            };
            // LTHttp.Send(this._headPrefix + "/api/rank/week/time", Laya.Handler.create(this, this._OnGetRankList), Laya.Handler.create(this, (res) => {
            //     console.log("获取单日排行接口访问失败", res);
            // }), true, sendData);
            _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_1__["default"].Send(this._headPrefix + "/api/rank/week/time", Laya.Handler.create(this, onGetList), Laya.Handler.create(this, (res) => {
                console.log("获取周排行接口访问失败", res);
            }), true, sendData);
        }
    }
    /**
     * 查询日排名
     * @param levelID 关卡
     * @param score 分数/时长
     * @param onGetList 回调处理
     */
    getDayRankList(levelID, score, onGetList) {
        if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.loginState && _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.loginState.code) {
            console.error('登录信息未获取');
        }
        else {
            let uid = this.appId;
            if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Oppo) {
                uid = _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platformData.appKey;
            }
            let sendData = {
                appid: uid,
                openId: _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.loginState.code,
                times: score,
                nickname: _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.userInfo.nickName,
                avatar: _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.userInfo.avatarUrl,
                type: levelID
            };
            _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_1__["default"].Send(this._headPrefix + "/api/rank/day/time", Laya.Handler.create(this, onGetList), Laya.Handler.create(this, (res) => {
                console.log("获取当天排行接口访问失败", res);
            }), true, sendData);
        }
    }
    _OnRcordRank(res) {
        let getObj = JSON.parse(res);
        if (this.enableDebug) {
            console.log("上报排名返回消息", getObj);
        }
        if (getObj.code == 1) {
            console.log('排名上报成功');
        }
        else {
            console.error("上报排名接口返回错误", getObj);
        }
    }
    _OnGetRankList(res) {
        let getObj = JSON.parse(res);
        if (this.enableDebug) {
            console.log("获取排名返回消息", getObj);
        }
        if (getObj.code == 1) {
            console.log('获取排名成功');
        }
        else {
            console.error("获取排名接口返回错误", getObj);
        }
    }
    _OnRequestShareInfo(res) {
        let getObj = JSON.parse(res);
        if (this.enableDebug) {
            console.log("分享返回消息", getObj);
        }
        if (getObj.code == 1) {
            let shareInfo = getObj.data;
            if (shareInfo == null) {
                console.log("未获取到配置的分享信息");
                return;
            }
            let wrapShareInfo = new _LTGame_Platform_ShareInfo__WEBPACK_IMPORTED_MODULE_4__["ShareInfo"]();
            wrapShareInfo.shareId = shareInfo.id;
            wrapShareInfo.shareImg = shareInfo.picurl;
            wrapShareInfo.shareTitle = shareInfo.title;
            _LTGame_Platform_ShareManager__WEBPACK_IMPORTED_MODULE_5__["default"].instance.AddShareInfo(wrapShareInfo);
        }
        else {
            console.error("分享接口返回错误", getObj);
        }
    }
    ReportShowAd(adList) {
        console.log("功能暂未实现");
    }
    ReportClickAd(adid, locationId, jumpSuccess) {
        console.log("功能暂未实现");
    }
    RequestADList() {
        console.log("功能暂未实现");
    }
    RequestRemoteConfig() {
        let uid = this.appId;
        if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Oppo || _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Vivo) {
            uid = _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platformData.appKey;
        }
        let sendData = {
            appid: uid,
            version: this.controlVersion
        };
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_1__["default"].Send(this._headPrefix + "/api/game/config", Laya.Handler.create(this, this._OnRemoteConfigBack), Laya.Handler.create(this, (res) => {
            console.log("云控HTTP访问失败", res);
        }), true, sendData);
    }
    /**
     * 获取云控配置回调
     * @param res
     */
    _OnRemoteConfigBack(res) {
        // 防止后台配置错误
        if (res.status == null) {
            res = JSON.parse(res);
        }
        if (this.enableDebug)
            console.log("云控返回消息:", res);
        this.isADEnable = false;
        this.isConfigEnable = true;
        if (res.code == 1) {
            // 成功
            let result = res.data;
            if (result) {
                console.log('如果需要在重庆后台配置参数 ');
                if (result['payRate']) {
                    this.payRate = parseInt(result['payRate']);
                }
                if (result['isDelayClose']) {
                    this.isDelayClose = parseInt(result['isDelayClose']) == 1;
                }
                if (result['isShielding']) {
                    this.isShielding = 1 == parseInt(result['isShielding']);
                }
                if (result["isADEnable"]) {
                    this.isADEnable = (1 == parseInt(result["isADEnable"]));
                }
                if (result['checkState']) {
                    this.checkState = parseInt(result['checkState']);
                }
                else {
                    this.checkState = _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Oppo ? _common_ECheckState__WEBPACK_IMPORTED_MODULE_6__["ECheckState"].InCheck : _common_ECheckState__WEBPACK_IMPORTED_MODULE_6__["ECheckState"].Normal;
                }
                if (result['nowtime']) {
                    this.severTime = new Date(result['nowtime']);
                }
                if (result['shieldHours']) {
                    this.shieldHours = result['shieldHours'].split(',');
                }
            }
            else {
                console.log("未读取到后台信息,默认为打开状态");
            }
        }
        else {
            // 失败
            console.error("云控消息返回失败", res);
        }
        if (this.controlVersion) {
            this.RequestADList();
        }
        this.RequestRemoteDateInfo();
        this.isADConfigInited = true;
        Laya.stage.event(_LTGame_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_0__["CommonEventId"].AD_CONFIG_GETTED);
    }
    Login(code, fromAppId) {
        console.error('登录参数：code:', code);
        let uid = (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Oppo || _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_2__["EPlatformType"].Vivo) ? _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_3__["default"].instance.platformData.appKey : this.appId;
        let sendData = {
            appid: uid,
            // flg: this.flg,
            code: code,
            channel: 'own',
            version: this.controlVersion
        };
        if (this.channel) {
            sendData["channel"] = this.channel;
        }
        if (fromAppId) {
            sendData["fappid"] = fromAppId;
        }
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_1__["default"].Send(this._headPrefix + "/api/login", Laya.Handler.create(this, this._OnAuthSuccess), Laya.Handler.create(this, (res) => {
            console.log("登录HTTP访问失败", res);
        }), true, sendData);
    }
    _OnAuthSuccess(res) {
        if (this.enableDebug)
            console.log("SDK登录回调触发", res);
        res = JSON.parse(res);
        if (res.code == 1) {
            // 成功
            this._OnLoginSuccess(res);
        }
        else {
            this._OnLoginFailed(res);
        }
    }
    _OnLoginSuccess(res) {
        console.log("SDK登录成功", res);
        this.uid = res.openid;
        this.ReportDaily();
    }
    _OnLoginFailed(res) {
        console.error("SDK登录失败", this.appId, res);
    }
    ReportStat(isShare, sid) {
        console.log("功能暂未实现");
    }
    ReportDaily() {
        console.log("上报日活 功能暂未实现");
    }
}


/***/ }),

/***/ "./src/SDK/Impl/SDK_Default.ts":
/*!*************************************!*\
  !*** ./src/SDK/Impl/SDK_Default.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SDK_Default; });
/* harmony import */ var _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/Net/LTHttp */ "./src/LTGame/Net/LTHttp.ts");
/* harmony import */ var _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../LTGame/Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _common_ECheckState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/ECheckState */ "./src/SDK/common/ECheckState.ts");
/* harmony import */ var _SDKADManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SDKADManager */ "./src/SDK/SDKADManager.ts");





class SDK_Default {
    constructor() {
        this.isShielding = false;
        this.uid = "sdk_test";
    }
    Init(flg, channel, controlVersion, appid) {
        this.isADConfigInited = true;
        this.isADEnable = false;
        this.isDelayClose = false;
        this.isShielding = false;
        this.payRate = 0;
        this.checkState = _common_ECheckState__WEBPACK_IMPORTED_MODULE_3__["ECheckState"].InCheck;
        this.isConfigEnable = true;
        this.flg = flg;
        this.channel = channel;
        this.controlVersion = controlVersion;
        this.appId = appid;
        this.severTime = new Date();
        this.shieldHours = [];
        this.adManager = new _SDKADManager__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this._RequestSelfAdInfo();
        console.log("SDK:Init", this);
    }
    /**CDN 节假日信息配置 年底需更新次年数据 */
    RequestRemoteDateInfo() {
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__["default"].Send(`https://hs.yz061.com/res/down/public/configs/DateInfo.json`, Laya.Handler.create(this, this.onGetDatesInfo), Laya.Handler.create(this, this.onGetDatesError), true);
    }
    onGetDatesError(res) {
        console.error('云 获取日历信息失败', res);
    }
    onGetDatesInfo(res) {
        let days = JSON.parse(res);
        let data = days;
        this.dateInfo = data.filter(e => e.type != 0);
        console.log('云 获取休息日信息', this.dateInfo);
        this._RequestCheckState();
    }
    _RequestSelfAdInfo() {
        let configFile = 'SelfAdConfig.json';
        if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].Oppo) {
            configFile = 'YTSelf.json';
        }
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__["default"].Send(`https://hs.yz061.com/res/down/public/configs/${configFile}`, Laya.Handler.create(this, this._OnGetSelfAdInfos), Laya.Handler.create(this, this._OnGetSelfAdInfosFailed), true);
    }
    _OnGetSelfAdInfosFailed(res) {
        console.error("拉取到广告信息失败", res);
    }
    _OnGetSelfAdInfos(res) {
        let adJson = JSON.parse(res);
        console.log("拉取到广告信息", adJson.length, "条");
        let fakePosId = 0;
        let adList = [];
        for (let fakeAd of adJson) {
            let adData = {};
            adData.ad_appid = fakeAd.id;
            adData.ad_img = fakeAd.icon;
            adData.ad_name = fakeAd.title;
            adData.ad_package = fakeAd.package;
            if (adData.ad_appid != this.appId) {
                adList.push(adData);
            }
        }
        // 加入广告控制器
        this.adManager.InitADs(fakePosId, adList);
    }
    _RequestCheckState() {
        // if (LTRespackManager.instance.baseUrl == null) {
        //     console.log("无cdn路径,跳过检测版本信息");
        //     return;
        // }
        console.log('审核状态由重庆后台配置', `审核状态:${_common_ECheckState__WEBPACK_IMPORTED_MODULE_3__["ECheckState"][this.checkState]}`);
        // let packConfigUrl = LTRespackManager.instance.baseUrl + "res/config/PackConst.json";
        // LTHttp.Send(packConfigUrl, Laya.Handler.create(null, (res) => {
        //     let parseData = JSON.parse(res);
        //     this.checkState = parseData['check_type'];
        //     console.log("检查状态更新", this.checkState);
        // }), Laya.Handler.create(null, (res) => {
        //     console.log("获取版本状态失败", res);
        // }), true);
        if (this.checkState == _common_ECheckState__WEBPACK_IMPORTED_MODULE_3__["ECheckState"].NoGame) {
            //工作时时段屏蔽
            let nowtime = this.severTime;
            let date = nowtime.toISOString().substring(0, 10).replace(/\-/g, '');
            let h = nowtime.getHours();
            h = nowtime.getHours();
            let today = this.dateInfo.filter(e => e.dayStr == date);
            let isWorkday = true;
            if (today && today.length) {
                isWorkday = today[0].type == 0; //type：0 工作日 1 周末  2 节假日 
            }
            //工作  时段  
            if (isWorkday && this.shieldHours && this.shieldHours.indexOf(h.toString()) >= 0) {
                console.log('工作', this.shieldHours, h);
                this.checkState = _common_ECheckState__WEBPACK_IMPORTED_MODULE_3__["ECheckState"].Normal;
            }
            else {
                console.log('休息', date, h);
            }
            if (this.isShielding) {
                //屏蔽洗钱
                this.checkState = _common_ECheckState__WEBPACK_IMPORTED_MODULE_3__["ECheckState"].Normal;
                this.payRate = 0;
            }
        }
        console.log(`${this.appId}---云控版本为:`, this.controlVersion, "config:", this.isConfigEnable, `广告开关:${this.isADEnable}, 审核状态:${_common_ECheckState__WEBPACK_IMPORTED_MODULE_3__["ECheckState"][this.checkState]},误触概率:${this.payRate},屏蔽状态:${this.isShielding},延迟按钮:${this.isDelayClose}`);
    }
    Login(code, fromAppId) {
        console.log("SDK:Login", code, fromAppId);
    }
    RequestRemoteConfig() {
        console.log("SDK:RequestRemoteConfig");
    }
    RequestADList() {
        console.log("SDK:RequestADList");
    }
    ReportClickAd(ad_id, locationId, jumpSuccess) {
        console.log("SDK:ReportClickAd", ad_id);
    }
    ReportShowAd(adList) {
        console.log("SDK:ReportShowAd", adList);
    }
    ReportStat(isShare, sid) {
        console.log("SDK:ReportStat", isShare, sid);
    }
    ReportLogin() {
    }
    /**查询周排名
* @param levelID 关卡
* @param score 分数/时长
* @param onGetList 回调处理
*/
    GetWeekRankList(levelID, score, onGetList) {
    }
    /**查询日排名
   * @param levelID 关卡
   * @param score 分数/时长
    *@param onGetList 回调处理
   */
    GetDayRankList(levelID, score, onGetList) {
    }
    /**
     * 按关卡上报排名
     * @param levelID 关卡
     * @param score 分数/时长
     */
    RecordRankInfo(levelID, score) {
    }
}


/***/ }),

/***/ "./src/SDK/Impl/SDK_YQ.ts":
/*!********************************!*\
  !*** ./src/SDK/Impl/SDK_YQ.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SDK_YQ; });
/* harmony import */ var _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/Net/LTHttp */ "./src/LTGame/Net/LTHttp.ts");
/* harmony import */ var _SDKADManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SDKADManager */ "./src/SDK/SDKADManager.ts");
/* harmony import */ var _LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/LTUtils/StringEx */ "./src/LTGame/LTUtils/StringEx.ts");
/* harmony import */ var _Libs_hmac_sha256_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Libs/hmac-sha256.js */ "./src/SDK/Libs/hmac-sha256.js");
/* harmony import */ var _Libs_md5_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Libs/md5.js */ "./src/SDK/Libs/md5.js");
/* harmony import */ var _LTGame_Platform_ShareManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../LTGame/Platform/ShareManager */ "./src/LTGame/Platform/ShareManager.ts");
/* harmony import */ var _LTGame_Platform_ShareInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../LTGame/Platform/ShareInfo */ "./src/LTGame/Platform/ShareInfo.ts");
/* harmony import */ var _SDK_Default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SDK_Default */ "./src/SDK/Impl/SDK_Default.ts");
/* harmony import */ var _common_ECheckState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/ECheckState */ "./src/SDK/common/ECheckState.ts");









class SDK_YQ extends _SDK_Default__WEBPACK_IMPORTED_MODULE_7__["default"] {
    constructor() {
        super(...arguments);
        this.uid = "sdk_test";
        this.enableDebug = false;
    }
    Init(flg, channel, controlVersion, appId) {
        this.flg = flg;
        this.channel = channel;
        this.controlVersion = controlVersion;
        this.appId = appId;
        this.isADEnable = false;
        this.isConfigEnable = false;
        this.checkState = _common_ECheckState__WEBPACK_IMPORTED_MODULE_8__["ECheckState"].Normal;
        this.adManager = new _SDKADManager__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    ReportShowAd(adList) {
        let reportData = {};
        reportData["gflg"] = this.flg;
        reportData["channel"] = this.channel;
        reportData["data"] = adList;
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__["default"].Send("https://api.yz061.com/exposure", Laya.Handler.create(this, (res) => { console.log('ad SHow', reportData, res); }), null, false, reportData);
    }
    ReportClickAd(ad_id, locationId, jumpSuccess) {
        let reportData = {};
        reportData["gflg"] = this.flg;
        reportData["uid"] = this.uid;
        reportData["ad_id"] = ad_id;
        reportData["location_id"] = locationId;
        reportData["channel"] = this.channel;
        if (jumpSuccess) {
            reportData["status"] = "cb";
        }
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__["default"].Send("https://api.yz061.com/reportad", Laya.Handler.create(this, (res) => { console.log('ad click', reportData, res); }), null, false, reportData);
    }
    RequestADList() {
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__["default"].Send("https://api.yz061.com/game/" + this.flg, Laya.Handler.create(this, this._OnGetADList), Laya.Handler.create(this, (res) => {
            console.log("请求广告位HTTP访问失败", res);
        }), true);
    }
    ReportLogin() {
        let reportData = {};
        reportData["flg"] = this.flg;
        reportData["uid"] = this.uid;
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__["default"].Send("https://api.yz061.com/matter/report", Laya.Handler.create(this, (res) => { console.log('report login', reportData, res); }), null, false, reportData);
    }
    /**
     * 获取广告位列表回调
     * @param res
     */
    _OnGetADList(res) {
        if (res.status == null) {
            res = JSON.parse(res);
        }
        if (this.enableDebug)
            console.log("获取到广告位信息:", res);
        if (res.status == 1) {
            for (let item of res.result) {
                let adItem = item;
                this._RequestADListOnPos(adItem);
            }
        }
        else {
            console.error("获取广告位信息失败", res);
        }
    }
    _RequestADListOnPos(adPosData) {
        if (this.enableDebug)
            console.log("请求具体位置广告信息:", adPosData);
        // 广告
        if (adPosData.matter_type == 1) {
            _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__["default"].Send(adPosData.url, Laya.Handler.create(this, (res) => {
                if (res.status == null) {
                    res = JSON.parse(res);
                }
                if (this.enableDebug)
                    console.log("获取到广告位具体信息:", res);
                if (res.status == 1) {
                    let adList = [];
                    for (let item of res.result) {
                        let adInfo = item;
                        if (adInfo.ad_device == 0) {
                            // 全加入
                            adList.push(adInfo);
                        }
                        else if (adInfo.ad_device == 1 && Laya.Browser.onAndroid) {
                            // android设备加入
                            adList.push(adInfo);
                        }
                        else if (adInfo.ad_device == 2 && Laya.Browser.onIOS) {
                            // ios设备加入
                            adList.push(adInfo);
                        }
                    }
                    if (adList.length > 0) {
                        // 加入广告控制器
                        this.adManager.InitADs(adPosData.location_id, adList);
                    }
                }
                else {
                    console.error("获取广告位具体信息失败", res);
                }
            }), Laya.Handler.create(this, (res) => {
                console.log("请求具体广告信息HTTP访问失败", res);
            }), true, { uid: this.uid });
        }
        else if (adPosData.matter_type == 2) {
            // 分享
            _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__["default"].Send(adPosData.url, Laya.Handler.create(this, (res) => {
                if (res != null) {
                    res = JSON.parse(res);
                }
                if (this.enableDebug)
                    console.log("获取到分享具体信息:", res);
                if (res.status == 1) {
                    for (let item of res.result) {
                        let shareInfo = item;
                        let wrapShareInfo = new _LTGame_Platform_ShareInfo__WEBPACK_IMPORTED_MODULE_6__["ShareInfo"]();
                        wrapShareInfo.shareId = shareInfo.share_id;
                        wrapShareInfo.shareImg = shareInfo.share_img;
                        wrapShareInfo.sharePath = shareInfo.share_path;
                        wrapShareInfo.shareTitle = shareInfo.share_title;
                        _LTGame_Platform_ShareManager__WEBPACK_IMPORTED_MODULE_5__["default"].instance.AddShareInfo(wrapShareInfo);
                    }
                }
                else {
                    console.error("获取分享具体信息失败", res);
                }
            }), Laya.Handler.create(this, (res) => {
                console.log("请求分享信息HTTP访问失败", res);
            }), true, { uid: this.uid });
        }
    }
    RequestRemoteConfig() {
        let sendData = {
            flg: this.flg
        };
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__["default"].Send("https://api.yz061.com/additional", Laya.Handler.create(this, this._OnRemoteConfigBack), Laya.Handler.create(this, (res) => {
            console.log("云控HTTP访问失败", res);
        }), true, sendData);
    }
    /**
     * 获取云控配置回调
     * @param res
     */
    _OnRemoteConfigBack(res) {
        // 防止后台配置错误
        if (res) {
            res = JSON.parse(res);
        }
        console.log("云控返回消息:", res);
        if (res.status == 1) {
            // 成功
            let result = res.result;
            if (result != null) {
                let config = result["config"];
                let ad = result["ad"];
                for (let key in config) {
                    if (key == this.controlVersion) {
                        this.isConfigEnable = config[key] == "1" && this.channel != "own";
                        break;
                    }
                }
                for (let key in ad) {
                    if (key == this.controlVersion) {
                        console.log('YQ ad:', key, ad[key]);
                        this.isADEnable = (ad[key] == "1");
                        break;
                    }
                }
            }
        }
        else {
            // 失败
            console.error("云控消息返回失败", res);
            this.isADEnable = false;
            this.isConfigEnable = false;
        }
        if (!this.isADEnable) {
            this.checkState = _common_ECheckState__WEBPACK_IMPORTED_MODULE_8__["ECheckState"].Normal;
        }
        console.log("云控版本为:", this.controlVersion, "config:", this.isConfigEnable, "ad:", this.isADEnable);
        if (this.controlVersion) {
            this.RequestADList();
        }
    }
    Login(code, fromAppId) {
        console.log('登录YQ', code, fromAppId);
        let sendData = {
            flg: this.flg,
            code: code
        };
        if (this.channel) {
            sendData["channel"] = this.channel;
        }
        if (fromAppId) {
            sendData["appid"] = fromAppId;
        }
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__["default"].Send("https://api.yz061.com/auth", Laya.Handler.create(this, this._OnAuthSuccess), Laya.Handler.create(this, (res) => {
            console.log("登录HTTP访问失败", res);
        }), true, sendData);
    }
    _OnAuthSuccess(res) {
        res = JSON.parse(res);
        if (this.enableDebug)
            console.log("SDK登录回调触发", res);
        if (res.status == 1) {
            // 成功
            this._OnLoginSuccess(res.result);
            this.ReportLogin();
        }
        else {
            this._OnLoginFailed(res);
        }
    }
    canShowAds() {
    }
    ReportDaily() {
        let recordData = {};
        recordData["flg"] = this.flg;
        recordData["uid"] = this.uid;
        recordData["channel"] = this.channel;
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__["default"].Send("https://api.yz061.com/daily", null, null, false, recordData);
    }
    ReportStat(isShare, sid) {
        let recordData = {};
        recordData["flg"] = this.flg;
        recordData["channel"] = this.channel;
        recordData["loc"] = isShare ? "share" : "video";
        recordData["uid"] = this.uid;
        if (!_LTGame_LTUtils_StringEx__WEBPACK_IMPORTED_MODULE_2__["default"].IsNullOrEmpty(sid)) {
            recordData["sid"] = sid;
        }
        let sign = this._CalcSign(recordData);
        _LTGame_Net_LTHttp__WEBPACK_IMPORTED_MODULE_0__["default"].SendPro("https://api.yz061.com/stat?sign=" + sign, Laya.Handler.create(null, (res) => {
            console.log("stat", res);
        }), null, "post", recordData);
    }
    _CalcSign(obj) {
        let keyList = Object.keys(obj).sort();
        let paramList = [];
        for (let key of keyList) {
            paramList.push(key + "=" + obj[key]);
        }
        let signStr = paramList.join("&");
        return _Libs_hmac_sha256_js__WEBPACK_IMPORTED_MODULE_3__["default"].HmacSHA256(signStr, _Libs_md5_js__WEBPACK_IMPORTED_MODULE_4__["default"].hex_md5(this.uid + this.flg)).toString();
    }
    _OnLoginSuccess(res) {
        console.log("SDK登录成功", res);
        this.uid = res.openid;
        this.ReportDaily();
    }
    _OnLoginFailed(res) {
        console.error("SDK登录失败", res);
    }
}


/***/ }),

/***/ "./src/SDK/LTSDK.ts":
/*!**************************!*\
  !*** ./src/SDK/LTSDK.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LTSDK; });
/* harmony import */ var _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LTGame/Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LTGame/Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");


class LTSDK {
    static get instance() {
        if (this._instance == null) {
            console.error("sdk尚未初始化,请先调用CreateInstance进行初始化");
            return null;
        }
        return this._instance;
    }
    static get isInited() {
        return this._instance != null;
    }
    /**
     *
     * @param sdkClass 初始化的类
     * @param identifyId 游戏标识
     * @param controlVersion 广告版本
     */
    static CreateInstace(sdkClass, identifyId, controlVersion, appId) {
        if (this._instance != null) {
            console.error("SDK不能反复进行初始化");
            return this._instance;
        }
        this._instance = new sdkClass();
        console.log('开始初始化SDK');
        // 初始化sdk
        let channel = LTSDK.getChannel();
        this._instance.Init(identifyId, channel, controlVersion, appId);
        console.log(`channel=${channel}`);
        // 请求云控信息
        this._instance.RequestRemoteConfig();
        // 自动sdk登录
        _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.onLoginEnd = Laya.Handler.create(null, () => {
            if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.platform == _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_1__["EPlatformType"].WX) {
                if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.loginCode) {
                    LTSDK.instance.Login(_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.loginCode, _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.GetFromAppId());
                }
                else {
                    console.log("wx平台未登录,跳过登录sdk");
                }
            }
            else {
                if (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.loginState.isLogin) {
                    LTSDK.instance.Login(_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.loginState.code, _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.GetFromAppId());
                }
                else {
                    console.log("平台未登录,跳过登录sdk");
                }
            }
        });
        return this._instance;
    }
    static getChannel() {
        let channel = _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.GetStorage('user_from_channel');
        let options = _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.lauchOption;
        console.log('本地channel', channel);
        if (!channel) {
            if (options && options.query) {
                channel = options.query['channel'];
                console.log('options channel', channel);
            }
            if (!channel) {
                console.log('没有本地数据,channel默认 own');
                channel = 'own';
            }
            _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.SetStorage('user_from_channel', channel);
        }
        return channel;
    }
}


/***/ }),

/***/ "./src/SDK/Libs/hmac-sha256.js":
/*!*************************************!*\
  !*** ./src/SDK/Libs/hmac-sha256.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS = CryptoJS || function (h, s) {
    var f = {},
        g = f.lib = {},
        q = function () {},
        m = g.Base = {
            extend: function (a) {
                q.prototype = this;
                var c = new q;
                a && c.mixIn(a);
                c.hasOwnProperty("init") || (c.init = function () {
                    c.$super.init.apply(this, arguments)
                });
                c.init.prototype = c;
                c.$super = this;
                return c
            },
            create: function () {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            },
            init: function () {},
            mixIn: function (a) {
                for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            },
            clone: function () {
                return this.init.prototype.extend(this)
            }
        },
        r = g.WordArray = m.extend({
            init: function (a, c) {
                a = this.words = a || [];
                this.sigBytes = c != s ? c : 4 * a.length
            },
            toString: function (a) {
                return (a || k).stringify(this)
            },
            concat: function (a) {
                var c = this.words,
                    d = a.words,
                    b = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (b % 4)
                    for (var e = 0; e < a; e++) c[b + e >>> 2] |= (d[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((b + e) % 4);
                else if (65535 < d.length)
                    for (e = 0; e < a; e += 4) c[b + e >>> 2] = d[e >>> 2];
                else c.push.apply(c, d);
                this.sigBytes += a;
                return this
            },
            clamp: function () {
                var a = this.words,
                    c = this.sigBytes;
                a[c >>> 2] &= 4294967295 <<
                    32 - 8 * (c % 4);
                a.length = h.ceil(c / 4)
            },
            clone: function () {
                var a = m.clone.call(this);
                a.words = this.words.slice(0);
                return a
            },
            random: function (a) {
                for (var c = [], d = 0; d < a; d += 4) c.push(4294967296 * h.random() | 0);
                return new r.init(c, a)
            }
        }),
        l = f.enc = {},
        k = l.Hex = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var d = [], b = 0; b < a; b++) {
                    var e = c[b >>> 2] >>> 24 - 8 * (b % 4) & 255;
                    d.push((e >>> 4).toString(16));
                    d.push((e & 15).toString(16))
                }
                return d.join("")
            },
            parse: function (a) {
                for (var c = a.length, d = [], b = 0; b < c; b += 2) d[b >>> 3] |= parseInt(a.substr(b,
                    2), 16) << 24 - 4 * (b % 8);
                return new r.init(d, c / 2)
            }
        },
        n = l.Latin1 = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var d = [], b = 0; b < a; b++) d.push(String.fromCharCode(c[b >>> 2] >>> 24 - 8 * (b % 4) & 255));
                return d.join("")
            },
            parse: function (a) {
                for (var c = a.length, d = [], b = 0; b < c; b++) d[b >>> 2] |= (a.charCodeAt(b) & 255) << 24 - 8 * (b % 4);
                return new r.init(d, c)
            }
        },
        j = l.Utf8 = {
            stringify: function (a) {
                try {
                    return decodeURIComponent(escape(n.stringify(a)))
                } catch (c) {
                    throw Error("Malformed UTF-8 data");
                }
            },
            parse: function (a) {
                return n.parse(unescape(encodeURIComponent(a)))
            }
        },
        u = g.BufferedBlockAlgorithm = m.extend({
            reset: function () {
                this._data = new r.init;
                this._nDataBytes = 0
            },
            _append: function (a) {
                "string" == typeof a && (a = j.parse(a));
                this._data.concat(a);
                this._nDataBytes += a.sigBytes
            },
            _process: function (a) {
                var c = this._data,
                    d = c.words,
                    b = c.sigBytes,
                    e = this.blockSize,
                    f = b / (4 * e),
                    f = a ? h.ceil(f) : h.max((f | 0) - this._minBufferSize, 0);
                a = f * e;
                b = h.min(4 * a, b);
                if (a) {
                    for (var g = 0; g < a; g += e) this._doProcessBlock(d, g);
                    g = d.splice(0, a);
                    c.sigBytes -= b
                }
                return new r.init(g, b)
            },
            clone: function () {
                var a = m.clone.call(this);
                a._data = this._data.clone();
                return a
            },
            _minBufferSize: 0
        });
    g.Hasher = u.extend({
        cfg: m.extend(),
        init: function (a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function () {
            u.reset.call(this);
            this._doReset()
        },
        update: function (a) {
            this._append(a);
            this._process();
            return this
        },
        finalize: function (a) {
            a && this._append(a);
            return this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function (a) {
            return function (c, d) {
                return (new a.init(d)).finalize(c)
            }
        },
        _createHmacHelper: function (a) {
            return function (c, d) {
                return (new t.HMAC.init(a,
                    d)).finalize(c)
            }
        }
    });
    var t = f.algo = {};
    return f
}(Math);
(function (h) {
    for (var s = CryptoJS, f = s.lib, g = f.WordArray, q = f.Hasher, f = s.algo, m = [], r = [], l = function (a) {
            return 4294967296 * (a - (a | 0)) | 0
        }, k = 2, n = 0; 64 > n;) {
        var j;
        a: {
            j = k;
            for (var u = h.sqrt(j), t = 2; t <= u; t++)
                if (!(j % t)) {
                    j = !1;
                    break a
                } j = !0
        }
        j && (8 > n && (m[n] = l(h.pow(k, 0.5))), r[n] = l(h.pow(k, 1 / 3)), n++);
        k++
    }
    var a = [],
        f = f.SHA256 = q.extend({
            _doReset: function () {
                this._hash = new g.init(m.slice(0))
            },
            _doProcessBlock: function (c, d) {
                for (var b = this._hash.words, e = b[0], f = b[1], g = b[2], j = b[3], h = b[4], m = b[5], n = b[6], q = b[7], p = 0; 64 > p; p++) {
                    if (16 > p) a[p] =
                        c[d + p] | 0;
                    else {
                        var k = a[p - 15],
                            l = a[p - 2];
                        a[p] = ((k << 25 | k >>> 7) ^ (k << 14 | k >>> 18) ^ k >>> 3) + a[p - 7] + ((l << 15 | l >>> 17) ^ (l << 13 | l >>> 19) ^ l >>> 10) + a[p - 16]
                    }
                    k = q + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & m ^ ~h & n) + r[p] + a[p];
                    l = ((e << 30 | e >>> 2) ^ (e << 19 | e >>> 13) ^ (e << 10 | e >>> 22)) + (e & f ^ e & g ^ f & g);
                    q = n;
                    n = m;
                    m = h;
                    h = j + k | 0;
                    j = g;
                    g = f;
                    f = e;
                    e = k + l | 0
                }
                b[0] = b[0] + e | 0;
                b[1] = b[1] + f | 0;
                b[2] = b[2] + g | 0;
                b[3] = b[3] + j | 0;
                b[4] = b[4] + h | 0;
                b[5] = b[5] + m | 0;
                b[6] = b[6] + n | 0;
                b[7] = b[7] + q | 0
            },
            _doFinalize: function () {
                var a = this._data,
                    d = a.words,
                    b = 8 * this._nDataBytes,
                    e = 8 * a.sigBytes;
                d[e >>> 5] |= 128 << 24 - e % 32;
                d[(e + 64 >>> 9 << 4) + 14] = h.floor(b / 4294967296);
                d[(e + 64 >>> 9 << 4) + 15] = b;
                a.sigBytes = 4 * d.length;
                this._process();
                return this._hash
            },
            clone: function () {
                var a = q.clone.call(this);
                a._hash = this._hash.clone();
                return a
            }
        });
    s.SHA256 = q._createHelper(f);
    s.HmacSHA256 = q._createHmacHelper(f)
})(Math);
(function () {
    var h = CryptoJS,
        s = h.enc.Utf8;
    h.algo.HMAC = h.lib.Base.extend({
        init: function (f, g) {
            f = this._hasher = new f.init;
            "string" == typeof g && (g = s.parse(g));
            var h = f.blockSize,
                m = 4 * h;
            g.sigBytes > m && (g = f.finalize(g));
            g.clamp();
            for (var r = this._oKey = g.clone(), l = this._iKey = g.clone(), k = r.words, n = l.words, j = 0; j < h; j++) k[j] ^= 1549556828, n[j] ^= 909522486;
            r.sigBytes = l.sigBytes = m;
            this.reset()
        },
        reset: function () {
            var f = this._hasher;
            f.reset();
            f.update(this._iKey)
        },
        update: function (f) {
            this._hasher.update(f);
            return this
        },
        finalize: function (f) {
            var g =
                this._hasher;
            f = g.finalize(f);
            g.reset();
            return g.finalize(this._oKey.clone().concat(f))
        }
    })
})();
/* harmony default export */ __webpack_exports__["default"] = (CryptoJS);


/***/ }),

/***/ "./src/SDK/Libs/md5.js":
/*!*****************************!*\
  !*** ./src/SDK/Libs/md5.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad  = ""; /* base-64 pad character. "=" for strict RFC compliance   */
var chrsz   = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_md5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}
function b64_md5(s){ return binl2b64(core_md5(str2binl(s), s.length * chrsz));}
function str_md5(s){ return binl2str(core_md5(str2binl(s), s.length * chrsz));}
function hex_hmac_md5(key, data) { return binl2hex(core_hmac_md5(key, data)); }
function b64_hmac_md5(key, data) { return binl2b64(core_hmac_md5(key, data)); }
function str_hmac_md5(key, data) { return binl2str(core_hmac_md5(key, data)); }

/*
 * Perform a simple self-test to see if the VM is working
 */
function md5_vm_test()
{
  return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length
 */
function core_md5(x, len)
{
  /* append padding */
  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);

}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t)
{
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

/*
 * Calculate the HMAC-MD5, of a key and some data
 */
function core_hmac_md5(key, data)
{
  var bkey = str2binl(key);
  if(bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

  var ipad = Array(16), opad = Array(16);
  for(var i = 0; i < 16; i++)
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
  return core_md5(opad.concat(hash), 512 + 128);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

/*
 * Convert a string to an array of little-endian words
 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
 */
function str2binl(str)
{
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
  return bin;
}

/*
 * Convert an array of little-endian words to a string
 */
function binl2str(bin)
{
  var str = "";
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < bin.length * 32; i += chrsz)
    str += String.fromCharCode((bin[i>>5] >>> (i % 32)) & mask);
  return str;
}

/*
 * Convert an array of little-endian words to a hex string.
 */
function binl2hex(binarray)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i++)
  {
    str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
  }
  return str;
}

/*
 * Convert an array of little-endian words to a base-64 string
 */
function binl2b64(binarray)
{
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i += 3)
  {
    var triplet = (((binarray[i   >> 2] >> 8 * ( i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
    }
  }
  return str;
}



/* harmony default export */ __webpack_exports__["default"] = ({hex_md5});


/***/ }),

/***/ "./src/SDK/SDKADManager.ts":
/*!*********************************!*\
  !*** ./src/SDK/SDKADManager.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SDKADManager; });
/* harmony import */ var _LTGame_LTUtils_LTDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LTGame/LTUtils/LTDictionary */ "./src/LTGame/LTUtils/LTDictionary.ts");
/* harmony import */ var _LTGame_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LTGame/Commom/CommonEventId */ "./src/LTGame/Commom/CommonEventId.ts");


class SDKADManager {
    constructor() {
        this._adDict = new _LTGame_LTUtils_LTDictionary__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    /**
     * 初始化指定位置的广告
     * @param locationId 位置ID
     * @param adList 广告列表
     */
    InitADs(locationId, adList) {
        this._adDict[locationId] = adList;
        console.log("广告位置信息初始化完成,位置ID:", locationId, "广告信息:", adList);
        Laya.stage.event(_LTGame_Commom_CommonEventId__WEBPACK_IMPORTED_MODULE_1__["CommonEventId"].SELF_AD_INITED, locationId);
    }
    /**
     * 响应广告点击,会自动跳转以及记录广告点击
     * @param adInfo
     */
    HandleClickAd(adInfo) {
    }
    /**
     * 记录展示
     */
    RecordShow(...adInfo) {
    }
    /**
     * 根据广告位置id返回广告
     * @param locationId
     */
    GetADListByLocationId(locationId) {
        return this._adDict[locationId];
    }
}


/***/ }),

/***/ "./src/SDK/common/ECheckState.ts":
/*!***************************************!*\
  !*** ./src/SDK/common/ECheckState.ts ***!
  \***************************************/
/*! exports provided: ECheckState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECheckState", function() { return ECheckState; });
var ECheckState;
(function (ECheckState) {
    /**
     * 正常状态
     */
    ECheckState[ECheckState["Normal"] = 0] = "Normal";
    /**
     * 审核状态
     */
    ECheckState[ECheckState["InCheck"] = 1] = "InCheck";
    /**
     * 不考虑游戏性的洗钱状态
     */
    ECheckState[ECheckState["NoGame"] = 2] = "NoGame";
})(ECheckState || (ECheckState = {}));


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
/* harmony import */ var _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LTGame/Platform/EPlatformType */ "./src/LTGame/Platform/EPlatformType.ts");
/* harmony import */ var _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LTGame/Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _LTGame_Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LTGame/Res/LTRespackManager */ "./src/LTGame/Res/LTRespackManager.ts");
/* harmony import */ var _LTGame_Start_LTStart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LTGame/Start/LTStart */ "./src/LTGame/Start/LTStart.ts");
/* harmony import */ var _SDK_Impl_SDK_CQ__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SDK/Impl/SDK_CQ */ "./src/SDK/Impl/SDK_CQ.ts");
/* harmony import */ var _SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SDK/Impl/SDK_YQ */ "./src/SDK/Impl/SDK_YQ.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _scene_MainScene__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scene/MainScene */ "./src/script/scene/MainScene.ts");
/* harmony import */ var _scene_SplashScene__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scene/SplashScene */ "./src/script/scene/SplashScene.ts");









class MainStart extends _LTGame_Start_LTStart__WEBPACK_IMPORTED_MODULE_3__["LTStart"] {
    constructor() {
        super();
        this._appId = "ttbe90c82d21ba845b";
        /**SDK云控版本名 */
        this._gameVersion = "1.0.0";
        /**资源版本 */
        this._resVersion = "0515";
        /**项目名 */
        this._gameName = "p_ltg";
        // this.enableStat = true;
    }
    _HandleInitPlatform(ePlatform, platformData) {
        switch (ePlatform) {
            case _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].Web:
                console.log("web平台,默认框架测试数据");
                this._gameVersion = '1.0.1'; //1.0.1 为全策略模式 
                platformData.appId = "11111111111"; //'88888888';
                platformData.appKey = '11111111111';
                break;
            case _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].TT:
                this._gameVersion = "v0.0.2";
                this._resVersion = 'v0.0.2';
                platformData.appId = "ttd60ba0b64931e10f";
                platformData.bannerId = "1bhbt9cjpr9a35bd30";
                platformData.rewardVideoId = "6tnnb4e3em519ja6d2";
                platformData.interstitialId = "8oe7qjl1pon2g930jf";
                _LTGame_Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_2__["default"].instance.SetRemoteUrl(`https://hs.yz061.com/res/down/public/${this._gameName}/${this._resVersion}_tt/`);
                break;
            case _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].WX:
                this._gameVersion = "v0.0.1";
                this._resVersion = 'v0.0.1';
                platformData.appId = "wx7bcca975ff17ebe9";
                platformData.bannerId = "adunit-11a2571806b5fc5c";
                platformData.rewardVideoId = "adunit-fa6dd5b431c41ceb";
                platformData.interstitialId = "adunit-abe9d252f3a3956c";
                _LTGame_Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_2__["default"].instance.SetRemoteUrl(`https://hs.yz061.com/res/down/public/${this._gameName}/${this._resVersion}_wx/`);
                break;
            case _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].Oppo:
                this._gameVersion = "1.0.2";
                this._resVersion = "0710";
                platformData.appId = "30302891";
                platformData.appKey = "6fyGQ6x2pzk8W84c0s04ows00";
                platformData.bannerId = "195984";
                platformData.rewardVideoId = "195985";
                platformData.nativeBannerIds = ['195994', '195995', '195998'];
                platformData.nativeIconIds = ['195986', '196003'];
                platformData.nativeinpageIds = ['195999', '196002', '196003'];
                _LTGame_Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_2__["default"].instance.SetRemoteUrl(`https://hs.yz061.com/res/down/public/${this._gameName}/${this._resVersion}_oppo/`);
                break;
            case _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].Vivo:
                this._gameVersion = "1.0.0";
                this._resVersion = "0723";
                platformData.appId = "100006589";
                platformData.appKey = "100006589"; // "4593206c07a95b1edf85";
                platformData.bannerId = "792dc45d716346679aed674122b687c4";
                platformData.rewardVideoId = "6f7ac05280f94772900d65f30b89b218";
                platformData.interstitialId = "5c199af4a8244a3991a22c9debe32ca9";
                platformData.nativeBannerIds = ['699d13284f5e4c769d59ba7ef2f4aa05', '9703bd90cbf74014853971a55cac7fe6'];
                platformData.nativeIconIds = ['91686cf4a42a4144b884f8843d947727', 'd987f0a85f724700aa098631c751ca7e'];
                platformData.nativeinpageIds = ['b82fb9b9d97d4a5c8281a943d41ea0aa', '4de349a96b6a432bb1b2f215493f1b07'];
                _LTGame_Res_LTRespackManager__WEBPACK_IMPORTED_MODULE_2__["default"].instance.SetRemoteUrl(`https://hs.yz061.com/res/down/public/${this._gameName}/vivo_${this._resVersion}/`);
                break;
            default:
                console.error("未处理平台内容", _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].platformStr, "请在MainStart中添加处理");
                break;
        }
        if (platformData.appId) {
            this._appId = platformData.appId;
        }
    }
    _HandleSDK() {
        switch (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_1__["default"].instance.platform) {
            case _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].WX:
                // case EPlatformType.Web:
                _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_6__["default"].CreateInstace(_SDK_Impl_SDK_YQ__WEBPACK_IMPORTED_MODULE_5__["default"], 'yfct', this._gameVersion, this._appId); //
                break;
            // LTSDK.CreateInstace(SDK_Default, this._gameName, this._gameVersion, this._appId);
            // break;
            case _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].Oppo:
            case _LTGame_Platform_EPlatformType__WEBPACK_IMPORTED_MODULE_0__["EPlatformType"].TT:
            default:
                _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_6__["default"].CreateInstace(_SDK_Impl_SDK_CQ__WEBPACK_IMPORTED_MODULE_4__["default"], this._gameName, this._gameVersion, this._appId);
                break;
        }
    }
    _InitFsm() {
        this._fsm.Add(new _scene_SplashScene__WEBPACK_IMPORTED_MODULE_8__["default"]());
        this._fsm.Add(new _scene_MainScene__WEBPACK_IMPORTED_MODULE_7__["default"]());
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
class GlobalUnit {
    static InitAll() {
        this.s3d = Laya.stage.addChildAt(new Laya.Scene3D(), 0);
        window['s3d'] = this.s3d;
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

/***/ "./src/script/config/EffectConfig.ts":
/*!*******************************************!*\
  !*** ./src/script/config/EffectConfig.ts ***!
  \*******************************************/
/*! exports provided: EffectConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectConfig", function() { return EffectConfig; });
var EffectConfig;
(function (EffectConfig) {
    class config {
    }
    EffectConfig.config = config;
    EffectConfig.path = "res/config/EffectConfig.json";
})(EffectConfig || (EffectConfig = {}));


/***/ }),

/***/ "./src/script/config/EggConfig.ts":
/*!****************************************!*\
  !*** ./src/script/config/EggConfig.ts ***!
  \****************************************/
/*! exports provided: EggConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EggConfig", function() { return EggConfig; });
var EggConfig;
(function (EggConfig) {
    class config {
    }
    EggConfig.config = config;
    EggConfig.path = "res/config/EggConfig.json";
})(EggConfig || (EggConfig = {}));


/***/ }),

/***/ "./src/script/config/GameConst.ts":
/*!****************************************!*\
  !*** ./src/script/config/GameConst.ts ***!
  \****************************************/
/*! exports provided: GameConst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameConst", function() { return GameConst; });
var GameConst;
(function (GameConst) {
    class config {
    }
    GameConst.config = config;
    GameConst.path = "res/config/GameConst.json";
})(GameConst || (GameConst = {}));


/***/ }),

/***/ "./src/script/config/PackConst.ts":
/*!****************************************!*\
  !*** ./src/script/config/PackConst.ts ***!
  \****************************************/
/*! exports provided: PackConst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackConst", function() { return PackConst; });
var PackConst;
(function (PackConst) {
    class config {
    }
    PackConst.config = config;
    PackConst.path = "res/config/PackConst.json";
})(PackConst || (PackConst = {}));


/***/ }),

/***/ "./src/script/config/RollConfig.ts":
/*!*****************************************!*\
  !*** ./src/script/config/RollConfig.ts ***!
  \*****************************************/
/*! exports provided: RollConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollConfig", function() { return RollConfig; });
var RollConfig;
(function (RollConfig) {
    class config {
    }
    RollConfig.config = config;
    RollConfig.path = "res/config/RollConfig.json";
})(RollConfig || (RollConfig = {}));


/***/ }),

/***/ "./src/script/config/SignConfig.ts":
/*!*****************************************!*\
  !*** ./src/script/config/SignConfig.ts ***!
  \*****************************************/
/*! exports provided: SignConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignConfig", function() { return SignConfig; });
var SignConfig;
(function (SignConfig) {
    class config {
    }
    SignConfig.config = config;
    SignConfig.path = "res/config/SignConfig.json";
})(SignConfig || (SignConfig = {}));


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
/* harmony import */ var _LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/LTUtils/MonoHelper */ "./src/LTGame/LTUtils/MonoHelper.ts");
/* harmony import */ var _LTGame_LTUtils_ArrayEx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../LTGame/LTUtils/ArrayEx */ "./src/LTGame/LTUtils/ArrayEx.ts");
/* harmony import */ var _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/Res/LTRes */ "./src/LTGame/Res/LTRes.ts");
/* harmony import */ var _config_AudioConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/AudioConfig */ "./src/script/config/AudioConfig.ts");
/* harmony import */ var _LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LTGame/Commom/CommonSaveData */ "./src/LTGame/Commom/CommonSaveData.ts");





class AudioManager {
    constructor() {
        this._isInited = false;
        Laya.SoundManager.autoStopMusic = true;
        this.Init();
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new AudioManager();
        }
        return this._instance;
    }
    Init() {
        if (this._isInited)
            return;
        this._isInited = true;
        this._needPlayAudioIds = [];
        _LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_0__["default"].instance.AddAction(_LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_0__["EActionType"].Update, this, this._LogicUpdate);
    }
    PlayByPath(audioPath) {
        return Laya.SoundManager.playMusic(audioPath);
    }
    PlayBgm(bgmPath) {
        return __awaiter(this, void 0, void 0, function* () {
            let formatUrl = Laya.URL.formatURL(bgmPath);
            if (Laya.SoundManager['_musicChannel'])
                Laya.SoundManager['_musicChannel'].stop();
            Laya.SoundManager['_bgMusic'] = formatUrl;
            yield _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_2__["default"].Load2dAsync(bgmPath);
            this._bgmAudio = AudioManager.instance.PlayByPath(bgmPath);
        });
    }
    StopBgm() {
        if (this._bgmAudio != null) {
            this._bgmAudio.stop();
        }
    }
    PlayById(audioId) {
        if (!_LTGame_Commom_CommonSaveData__WEBPACK_IMPORTED_MODULE_4__["default"].instance.isMusicOn)
            return;
        let audioConfig = _config_AudioConfig__WEBPACK_IMPORTED_MODULE_3__["AudioConfig"].data[audioId];
        if (audioConfig == null) {
            console.error("不存在的音效id");
            return;
        }
        if (audioConfig.audio_type == 1) {
            // 音效
            if (!_LTGame_LTUtils_ArrayEx__WEBPACK_IMPORTED_MODULE_1__["default"].Contains(this._needPlayAudioIds, audioConfig.id)) {
                this._needPlayAudioIds.push(audioConfig.id);
            }
        }
        else {
            this.PlayBgm("res/audio/" + audioConfig.audio_path);
            // this.PlayByPath("res/audio/" + audioConfig.audio_path);
        }
    }
    _LogicUpdate() {
        if (this._needPlayAudioIds.length > 0) {
            for (let id of this._needPlayAudioIds) {
                let audioConfig = _config_AudioConfig__WEBPACK_IMPORTED_MODULE_3__["AudioConfig"].data[id];
                Laya.SoundManager.playSound("res/audio/" + audioConfig.audio_path);
            }
            this._needPlayAudioIds = [];
        }
    }
    StopAll() {
        Laya.SoundManager.stopAll();
    }
    Pause() {
        if (this._bgmAudio) {
            this._bgmAudio.pause();
        }
    }
    Resume() {
        if (this._bgmAudio) {
            this._bgmAudio.resume();
        }
    }
}


/***/ }),

/***/ "./src/script/manager/EffectManager.ts":
/*!*********************************************!*\
  !*** ./src/script/manager/EffectManager.ts ***!
  \*********************************************/
/*! exports provided: EffectManager, EffectShowData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectManager", function() { return EffectManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectShowData", function() { return EffectShowData; });
/* harmony import */ var _LTGame_LTUtils_LTDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/LTUtils/LTDictionary */ "./src/LTGame/LTUtils/LTDictionary.ts");
/* harmony import */ var _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/GlobalUnit */ "./src/script/common/GlobalUnit.ts");
/* harmony import */ var _config_EffectConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/EffectConfig */ "./src/script/config/EffectConfig.ts");
/* harmony import */ var _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTGame/Res/LTRes */ "./src/LTGame/Res/LTRes.ts");
/* harmony import */ var _LTGame_Async_Awaiters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LTGame/Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");
/* harmony import */ var _LTGame_LTUtils_ArrayEx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../LTGame/LTUtils/ArrayEx */ "./src/LTGame/LTUtils/ArrayEx.ts");
/* harmony import */ var _common_ResDefine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/ResDefine */ "./src/script/common/ResDefine.ts");
/* harmony import */ var _LTGame_LTUtils_CameraEx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../LTGame/LTUtils/CameraEx */ "./src/LTGame/LTUtils/CameraEx.ts");
/* harmony import */ var _LTGame_LTUtils_Vector3Ex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../LTGame/LTUtils/Vector3Ex */ "./src/LTGame/LTUtils/Vector3Ex.ts");









class EffectManager {
    constructor() {
        this._Init();
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new EffectManager();
        }
        return this._instance;
    }
    get uiEffectScene() {
        return this._uiEffectScene;
    }
    get uiEffectCamera() {
        return this._uiEffectCamera;
    }
    _Init() {
        this._effectRoot = new Laya.Sprite3D("EffectManager");
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_1__["default"].s3d.addChild(this._effectRoot);
        this._effectMap = new _LTGame_LTUtils_LTDictionary__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this._continueEffects = [];
    }
    Preload(urls) {
        for (let i = 0; i < _config_EffectConfig__WEBPACK_IMPORTED_MODULE_2__["EffectConfig"].dataList.length; ++i) {
            let configItem = _config_EffectConfig__WEBPACK_IMPORTED_MODULE_2__["EffectConfig"].dataList[i];
            if (configItem.need_preload) {
                let effectPath = _common_ResDefine__WEBPACK_IMPORTED_MODULE_6__["default"].FixPath(configItem.model_path);
                urls.push(effectPath);
            }
        }
    }
    WarmEffects() {
        return __awaiter(this, void 0, void 0, function* () {
            this._uiEffectScene = new Laya.Scene3D();
            Laya.stage.addChild(this._uiEffectScene);
            this._uiEffectCamera = new Laya.Camera();
            this._uiEffectCamera.clearFlag = Laya.CameraClearFlags.DepthOnly;
            this._uiEffectScene.addChild(this._uiEffectCamera);
            let preloadEffects = [];
            for (let i = 0; i < _config_EffectConfig__WEBPACK_IMPORTED_MODULE_2__["EffectConfig"].dataList.length; ++i) {
                let configItem = _config_EffectConfig__WEBPACK_IMPORTED_MODULE_2__["EffectConfig"].dataList[i];
                if (configItem.need_preload) {
                    let effectPath = _common_ResDefine__WEBPACK_IMPORTED_MODULE_6__["default"].FixPath(configItem.model_path);
                    let getObj = _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_3__["default"].Get(effectPath, true);
                    if (getObj == null) {
                        console.log("特效", configItem, "不存在");
                        continue;
                    }
                    let effectObj = this._effectRoot.addChild(getObj);
                    preloadEffects.push(effectObj);
                    this._effectMap.set(configItem.id, effectObj);
                }
            }
            yield _LTGame_Async_Awaiters__WEBPACK_IMPORTED_MODULE_4__["default"].NextFrame();
            for (let effectObj of preloadEffects) {
                effectObj.removeSelf();
            }
        });
    }
    StopEffectByIndex(index) {
        if (index == null)
            return;
        if (index < 0)
            return;
        if (index >= this._continueEffects.length)
            return;
        let effectObj = this._continueEffects[index];
        effectObj.destroy();
        _LTGame_LTUtils_ArrayEx__WEBPACK_IMPORTED_MODULE_5__["default"].RemoveAt(this._continueEffects, index);
    }
    GetEffectObjById(effectId) {
        return __awaiter(this, void 0, void 0, function* () {
            let effectConfig = _config_EffectConfig__WEBPACK_IMPORTED_MODULE_2__["EffectConfig"].data[effectId];
            if (effectConfig == null) {
                console.error("无效的特效id", effectId);
                return null;
            }
            let effectObj = this._effectMap.Get(effectId);
            if (effectObj == null) {
                let effectPath = _common_ResDefine__WEBPACK_IMPORTED_MODULE_6__["default"].FixPath(effectConfig.model_path);
                yield _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_3__["default"].LoadAsync(effectPath);
                effectObj = _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_3__["default"].Get(effectPath);
                this._effectMap.set(effectConfig.id, effectObj);
            }
            let instEffect = effectObj.clone();
            return instEffect;
        });
    }
    PlayEffectByData(showData) {
        return __awaiter(this, void 0, void 0, function* () {
            let instEffect = yield this.GetEffectObjById(showData.effectId);
            if (showData.parent != null) {
                showData.parent.addChild(instEffect);
            }
            else {
                let effectConfig = _config_EffectConfig__WEBPACK_IMPORTED_MODULE_2__["EffectConfig"].data[showData.effectId];
                if (effectConfig.isUIEffect) {
                    this._uiEffectScene.addChild(instEffect);
                    if (showData.setPos != null) {
                        let ray = _LTGame_LTUtils_CameraEx__WEBPACK_IMPORTED_MODULE_7__["CameraEx"].ScreenPosToRay(this.uiEffectCamera, new Laya.Vector2(showData.setPos.x, showData.setPos.y));
                        showData.setPos = _LTGame_LTUtils_Vector3Ex__WEBPACK_IMPORTED_MODULE_8__["default"].Add(ray.origin, _LTGame_LTUtils_Vector3Ex__WEBPACK_IMPORTED_MODULE_8__["default"].Scale(ray.origin, 100));
                    }
                }
                else {
                    this._effectRoot.addChild(instEffect);
                }
            }
            if (showData.setPos != null) {
                instEffect.transform.position = showData.setPos.clone();
            }
            if (showData.setRot != null) {
                instEffect.transform.rotation = showData.setRot.clone();
            }
            if (showData.setScale != null) {
                instEffect.transform.setWorldLossyScale(showData.setScale);
            }
            if (showData.continueTime) {
                yield _LTGame_Async_Awaiters__WEBPACK_IMPORTED_MODULE_4__["default"].Seconds(showData.continueTime);
                instEffect.destroy();
            }
            else {
                this._continueEffects.push(instEffect);
                return this._continueEffects.length - 1;
            }
            return -1;
        });
    }
    PlayEffectById(effectId, duringTime = 2, pos = null, rot = null) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = new EffectShowData(effectId);
            data.continueTime = duringTime;
            data.setPos = pos;
            data.setRot = rot;
            return this.PlayEffectByData(data);
        });
    }
}
class EffectShowData {
    constructor(effectId) {
        /**
         * 特效持续时间
         */
        this.continueTime = 2;
        /**
         * 设置位置,world
         */
        this.setPos = null;
        /**
         * 设置旋转,world
         */
        this.setRot = null;
        /**
         * 设置缩放,world
         */
        this.setScale = null;
        /**
         * 创建父物体
         */
        this.parent = null;
        this.effectId = effectId;
    }
}


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
/* harmony import */ var _LTGame_Start_ESceneType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../LTGame/Start/ESceneType */ "./src/LTGame/Start/ESceneType.ts");
/* harmony import */ var _ui_UI_MainMediator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/UI_MainMediator */ "./src/script/ui/UI_MainMediator.ts");



class MainScene extends _LTGame_Fsm_BaseState__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(_LTGame_Start_ESceneType__WEBPACK_IMPORTED_MODULE_1__["ESceneType"].Main);
    }
    _DoEnter() {
        //     LTSDK.instance.checkState = ECheckState.NoGame;
        //     console.error("[测试功能]强制设置checkstate", LTSDK.instance.checkState);
        _ui_UI_MainMediator__WEBPACK_IMPORTED_MODULE_2__["UI_MainMediator"].instance.Show();
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
/* harmony import */ var _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/Config/ConfigManager */ "./src/LTGame/Config/ConfigManager.ts");
/* harmony import */ var _LTGame_Start_ESceneType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../LTGame/Start/ESceneType */ "./src/LTGame/Start/ESceneType.ts");
/* harmony import */ var _LTGame_Start_LTSplashScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/Start/LTSplashScene */ "./src/LTGame/Start/LTSplashScene.ts");
/* harmony import */ var _ui_Load_LoadBinder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/Load/LoadBinder */ "./src/ui/Load/LoadBinder.ts");
/* harmony import */ var _ui_Load_UI_splash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/Load/UI_splash */ "./src/ui/Load/UI_splash.ts");
/* harmony import */ var _ui_Main_MainBinder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/Main/MainBinder */ "./src/ui/Main/MainBinder.ts");
/* harmony import */ var _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/GlobalUnit */ "./src/script/common/GlobalUnit.ts");
/* harmony import */ var _config_AudioConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/AudioConfig */ "./src/script/config/AudioConfig.ts");
/* harmony import */ var _config_EffectConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/EffectConfig */ "./src/script/config/EffectConfig.ts");
/* harmony import */ var _config_EggConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/EggConfig */ "./src/script/config/EggConfig.ts");
/* harmony import */ var _config_GameConst__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config/GameConst */ "./src/script/config/GameConst.ts");
/* harmony import */ var _config_PackConst__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config/PackConst */ "./src/script/config/PackConst.ts");
/* harmony import */ var _config_SignConfig__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config/SignConfig */ "./src/script/config/SignConfig.ts");
/* harmony import */ var _manager_EffectManager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../manager/EffectManager */ "./src/script/manager/EffectManager.ts");
/* harmony import */ var _config_RollConfig__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../config/RollConfig */ "./src/script/config/RollConfig.ts");















class SplashScene extends _LTGame_Start_LTSplashScene__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor() {
        super();
        this._splashUIClass = _ui_Load_UI_splash__WEBPACK_IMPORTED_MODULE_4__["default"];
        this._useCommonUI = true;
    }
    _OnBindUI() {
        _ui_Load_LoadBinder__WEBPACK_IMPORTED_MODULE_3__["default"].bindAll();
        _ui_Main_MainBinder__WEBPACK_IMPORTED_MODULE_5__["default"].bindAll();
    }
    _OnSetLoadConfig() {
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_0__["ConfigManager"].AddConfig(_config_AudioConfig__WEBPACK_IMPORTED_MODULE_7__["AudioConfig"]);
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_0__["ConfigManager"].AddConfig(_config_EffectConfig__WEBPACK_IMPORTED_MODULE_8__["EffectConfig"]);
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_0__["ConfigManager"].AddConfig(_config_GameConst__WEBPACK_IMPORTED_MODULE_10__["GameConst"]);
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_0__["ConfigManager"].AddConfig(_config_PackConst__WEBPACK_IMPORTED_MODULE_11__["PackConst"]);
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_0__["ConfigManager"].AddConfig(_config_EggConfig__WEBPACK_IMPORTED_MODULE_9__["EggConfig"]);
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_0__["ConfigManager"].AddConfig(_config_SignConfig__WEBPACK_IMPORTED_MODULE_12__["SignConfig"]);
        _LTGame_Config_ConfigManager__WEBPACK_IMPORTED_MODULE_0__["ConfigManager"].AddConfig(_config_RollConfig__WEBPACK_IMPORTED_MODULE_14__["RollConfig"]);
    }
    _OnGameResPrepared(urls) {
        _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_6__["default"].InitAll();
        _manager_EffectManager__WEBPACK_IMPORTED_MODULE_13__["EffectManager"].instance.Preload(urls);
    }
    _OnGameResLoaded() {
        return __awaiter(this, void 0, void 0, function* () {
            yield _manager_EffectManager__WEBPACK_IMPORTED_MODULE_13__["EffectManager"].instance.WarmEffects();
            this.isFinished = true;
            this.nextState = _LTGame_Start_ESceneType__WEBPACK_IMPORTED_MODULE_1__["ESceneType"].Main;
        });
    }
}


/***/ }),

/***/ "./src/script/test/HXOimoPhysicTest.ts":
/*!*********************************************!*\
  !*** ./src/script/test/HXOimoPhysicTest.ts ***!
  \*********************************************/
/*! exports provided: HXOimoPhysicTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HXOimoPhysicTest", function() { return HXOimoPhysicTest; });
/* harmony import */ var _ui_UI_TestMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/UI_TestMediator */ "./src/script/ui/UI_TestMediator.ts");
/* harmony import */ var _ui_UI_FunctionTestMediator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/UI_FunctionTestMediator */ "./src/script/ui/UI_FunctionTestMediator.ts");
/* harmony import */ var _LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/LTUtils/MonoHelper */ "./src/LTGame/LTUtils/MonoHelper.ts");
/* harmony import */ var _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTGame/LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _LTGame_LTUtils_Vector3Ex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LTGame/LTUtils/Vector3Ex */ "./src/LTGame/LTUtils/Vector3Ex.ts");
/* harmony import */ var _LTGame_LTUtils_QuaternionEx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../LTGame/LTUtils/QuaternionEx */ "./src/LTGame/LTUtils/QuaternionEx.ts");






class HXOimoPhysicTest {
    constructor() {
        this.name = "HXOimo物理";
        this._isPressed = false;
        this._panelSize = 50;
    }
    Create() {
        this._s3d = new Laya.Scene3D();
        Laya.stage.addChildAt(this._s3d, 1);
        this._world = new OIMO.World(OIMO.BroadPhaseType.BRUTE_FORCE, new OIMO.Vec3(0, -9.8, 0));
        console.log(this._world);
        let panelMesh = Laya.PrimitiveMesh.createPlane(this._panelSize, this._panelSize, 1, 1);
        let panelMat = new Laya.BlinnPhongMaterial();
        panelMat.albedoColor = new Laya.Vector4(0.8, 0.8, 0.8, 1);
        let panelObj = new Laya.MeshSprite3D(panelMesh, "floor");
        panelObj.meshRenderer.material = panelMat;
        panelObj.meshRenderer.receiveShadow = true;
        this._s3d.addChild(panelObj);
        panelObj.transform.localPosition = new Laya.Vector3(0, 0, 0);
        let rigConfig = new OIMO.RigidBodyConfig();
        rigConfig.position = new OIMO.Vec3(0, -0.5, 0);
        let q = panelObj.transform.rotation;
        rigConfig.rotation.fromQuat(q);
        rigConfig.type = OIMO.RigidBodyType.STATIC;
        let rig = new OIMO.RigidBody(rigConfig);
        let boxGeometry = new OIMO.BoxGeometry(new OIMO.Vec3(this._panelSize / 2, 1, this._panelSize / 2));
        let shapeConfig = new OIMO.ShapeConfig();
        shapeConfig.geometry = boxGeometry;
        let shape = new OIMO.Shape(shapeConfig);
        rig.addShape(shape);
        this._world.addRigidBody(rig);
        let camera = new Laya.Camera();
        camera.name = "camera";
        this._s3d.addChild(camera);
        camera.transform.localPosition = new Laya.Vector3(0, this._panelSize * 1.2, this._panelSize * 1.2);
        camera.transform.localRotationEuler = new Laya.Vector3(-45, 0, 0);
        let light = new Laya.DirectionLight();
        this._s3d.addChild(light);
        light.transform.localRotationEuler = new Laya.Vector3(-75, 0, 0);
        light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;
        light.shadowMode = Laya.ShadowMode.SoftHigh;
        light.shadowDistance = 200;
        _LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_2__["default"].instance.AddAction(_LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_2__["EActionType"].Update, this, this._LogicUpdate);
        _ui_UI_TestMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Show(Laya.Handler.create(this, this.Clear));
        _ui_UI_TestMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ui.m_img_bg.on(Laya.Event.MOUSE_DOWN, this, this._OnMouseDown);
        _ui_UI_TestMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ui.on(Laya.Event.MOUSE_UP, this, this._OnMouseUp);
        _ui_UI_TestMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ui.on(Laya.Event.MOUSE_OUT, this, this._OnMouseUp);
        this._cacheMaterial = new Laya.BlinnPhongMaterial();
        this._cacheMaterial.albedoColor = new Laya.Vector4(0.1, 0.1, 0.6, 1);
        this._sleepMaterial = new Laya.BlinnPhongMaterial();
        this._sleepMaterial.albedoColor = new Laya.Vector4(0.5, 0.5, 0, 1);
        this._cacheMesh = Laya.PrimitiveMesh.createBox(1, 1, 1);
        this._cubeRigs = [];
        this._cubeObjs = [];
        this._s3d.physicsSimulation.maxSubSteps = 2;
        this._s3d.physicsSimulation.fixedTimeStep = 1 / 30;
    }
    _LogicUpdate() {
        let dt = Laya.timer.delta * 0.001;
        if (this._isPressed) {
            this._remainTime -= dt;
            if (this._remainTime < 0) {
                this._GenCube();
                this._remainTime = 0.1;
            }
        }
        this._world.step(dt);
        for (let i = 0; i < this._cubeObjs.length; ++i) {
            let cubeObj = this._cubeObjs[i];
            let rig = this._cubeRigs[i];
            let pos = rig.getPosition();
            _LTGame_LTUtils_Vector3Ex__WEBPACK_IMPORTED_MODULE_4__["default"].cacheVec0.setValue(pos.x, pos.y, pos.z);
            cubeObj.transform.position = _LTGame_LTUtils_Vector3Ex__WEBPACK_IMPORTED_MODULE_4__["default"].cacheVec0;
            let rot = rig.getOrientation();
            _LTGame_LTUtils_QuaternionEx__WEBPACK_IMPORTED_MODULE_5__["default"].cacheVec0.x = rot.x;
            _LTGame_LTUtils_QuaternionEx__WEBPACK_IMPORTED_MODULE_5__["default"].cacheVec0.y = rot.y;
            _LTGame_LTUtils_QuaternionEx__WEBPACK_IMPORTED_MODULE_5__["default"].cacheVec0.z = rot.z;
            _LTGame_LTUtils_QuaternionEx__WEBPACK_IMPORTED_MODULE_5__["default"].cacheVec0.w = rot.w;
            cubeObj.transform.rotation = _LTGame_LTUtils_QuaternionEx__WEBPACK_IMPORTED_MODULE_5__["default"].cacheVec0;
            cubeObj.meshRenderer.sharedMaterial = rig._sleeping ? this._sleepMaterial : this._cacheMaterial;
        }
    }
    _GenCube() {
        let cubeObj = new Laya.MeshSprite3D(this._cacheMesh, "cube");
        cubeObj.meshRenderer.sharedMaterial = this._cacheMaterial;
        this._s3d.addChild(cubeObj);
        let size = new Laya.Vector3(_LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(0.5, 2), _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(0.5, 2), _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(0.5, 2));
        let pos = new Laya.Vector3(_LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(-5, 5), this._panelSize, _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(-5, 5));
        cubeObj.transform.localPosition = pos;
        cubeObj.transform.localRotationEuler = new Laya.Vector3(_LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(0, 360), _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(0, 360), _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(0, 360));
        cubeObj.transform.localScale = size;
        cubeObj.meshRenderer.castShadow = true;
        cubeObj.meshRenderer.receiveShadow = true;
        let rigConfig = new OIMO.RigidBodyConfig();
        rigConfig.position = new OIMO.Vec3(pos.x, pos.y, pos.z);
        let q = cubeObj.transform.rotation;
        rigConfig.rotation.fromQuat(q);
        rigConfig.type = OIMO.RigidBodyType.DYNAMIC;
        let rig = new OIMO.RigidBody(rigConfig);
        let boxGeometry = new OIMO.BoxGeometry(new OIMO.Vec3(size.x / 2, size.y / 2, size.z / 2));
        let shapeConfig = new OIMO.ShapeConfig();
        shapeConfig.geometry = boxGeometry;
        let shape = new OIMO.Shape(shapeConfig);
        rig.addShape(shape);
        this._world.addRigidBody(rig);
        this._cubeObjs.push(cubeObj);
        this._cubeRigs.push(rig);
        _ui_UI_TestMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ui.m_text_notice.text = "物体数量:" + this._cubeObjs.length;
    }
    _OnMouseDown(event) {
        if (this._isPressed)
            return;
        this._isPressed = true;
        this._touchId = event.touchId;
        this._remainTime = 0;
    }
    _OnMouseUp(event) {
        if (!this._isPressed)
            return;
        if (this._touchId != event.touchId)
            return;
        this._isPressed = false;
    }
    Clear() {
        _LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_2__["default"].instance.RemoveAction(_LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_2__["EActionType"].Update, this, this._LogicUpdate);
        this._s3d.destroy();
        _ui_UI_FunctionTestMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.Show();
    }
}


/***/ }),

/***/ "./src/script/test/HeightFogTest.ts":
/*!******************************************!*\
  !*** ./src/script/test/HeightFogTest.ts ***!
  \******************************************/
/*! exports provided: HeightFogTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeightFogTest", function() { return HeightFogTest; });
/* harmony import */ var _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/Res/LTRes */ "./src/LTGame/Res/LTRes.ts");
/* harmony import */ var _ui_UI_FunctionTestMediator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/UI_FunctionTestMediator */ "./src/script/ui/UI_FunctionTestMediator.ts");
/* harmony import */ var _LTGame_Material_LTBlinnPhong_HeightFog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/Material/LTBlinnPhong_HeightFog */ "./src/LTGame/Material/LTBlinnPhong_HeightFog.ts");
/* harmony import */ var _LTGame_Material_HeightFogManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTGame/Material/HeightFogManager */ "./src/LTGame/Material/HeightFogManager.ts");
/* harmony import */ var _ui_UI_TestMediator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/UI_TestMediator */ "./src/script/ui/UI_TestMediator.ts");
/* harmony import */ var _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../LTGame/LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");






const scene_path = "res/export/Conventional/HeightFog.ls";
class HeightFogTest {
    constructor() {
        this.name = "高度雾测试";
    }
    Create() {
        return __awaiter(this, void 0, void 0, function* () {
            this._s3d = yield _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_0__["default"].LoadAndGet(scene_path, true);
            Laya.stage.addChildAt(this._s3d, 1);
            Laya.Shader3D.debugMode = true;
            _LTGame_Material_HeightFogManager__WEBPACK_IMPORTED_MODULE_3__["HeightFogManager"].instance.fogColor = new Laya.Vector3(_LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_5__["default"].Random(0, 1), _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_5__["default"].Random(0, 1), _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_5__["default"].Random(0, 1));
            _LTGame_Material_HeightFogManager__WEBPACK_IMPORTED_MODULE_3__["HeightFogManager"].instance.fogDistance = 10;
            _LTGame_Material_HeightFogManager__WEBPACK_IMPORTED_MODULE_3__["HeightFogManager"].instance.fogStartHeight = 10;
            let shareMat = null;
            let cubes = this._s3d.getChildByName("cubes");
            for (let i = 0; i < cubes.numChildren; ++i) {
                let getChild = cubes.getChildAt(i).getChildAt(0);
                if (shareMat == null) {
                    shareMat = _LTGame_Material_LTBlinnPhong_HeightFog__WEBPACK_IMPORTED_MODULE_2__["LTBlinnPhong_HeightFog"].CreateFromBlinnPhong(getChild.meshRenderer.sharedMaterial);
                }
                getChild.meshRenderer.sharedMaterial = shareMat;
            }
            let panel = this._s3d.getChildByName("Plane");
            panel.meshRenderer.material
                = _LTGame_Material_LTBlinnPhong_HeightFog__WEBPACK_IMPORTED_MODULE_2__["LTBlinnPhong_HeightFog"].CreateFromBlinnPhong(panel.meshRenderer.sharedMaterial);
            /*
            HeightFogManager.instance.fogColor = new Laya.Vector3(1, 0, 0);
            HeightFogManager.instance.fogDistance = 5;
            HeightFogManager.instance.fogStartHeight = 10;
            */
            _ui_UI_TestMediator__WEBPACK_IMPORTED_MODULE_4__["default"].instance.Show(Laya.Handler.create(this, this.Clear));
        });
    }
    Clear() {
        this._s3d.destroy();
        _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_0__["default"].Unload(scene_path);
        _ui_UI_FunctionTestMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.Show();
    }
}


/***/ }),

/***/ "./src/script/test/PBRTest.ts":
/*!************************************!*\
  !*** ./src/script/test/PBRTest.ts ***!
  \************************************/
/*! exports provided: PBRTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PBRTest", function() { return PBRTest; });
/* harmony import */ var _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/Res/LTRes */ "./src/LTGame/Res/LTRes.ts");
/* harmony import */ var _ui_UI_TestMediator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/UI_TestMediator */ "./src/script/ui/UI_TestMediator.ts");
/* harmony import */ var _ui_UI_FunctionTestMediator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/UI_FunctionTestMediator */ "./src/script/ui/UI_FunctionTestMediator.ts");



const scene_path = "res/export/Conventional/SkyBox.ls";
class PBRTest {
    constructor() {
        this.name = "PBR测试";
    }
    Create() {
        return __awaiter(this, void 0, void 0, function* () {
            this._s3d = yield _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_0__["default"].LoadAndGet(scene_path, true);
            Laya.stage.addChildAt(this._s3d, 1);
            this._s3d.reflection = this._s3d.skyRenderer.material.textureCube;
            let sphereMesh = Laya.PrimitiveMesh.createSphere(0.25, 32, 32);
            const row = 6;
            this.addSpheresSpecialMetallic(sphereMesh, new Laya.Vector3(0, 1.5, 2), this._s3d, row, new Laya.Vector4(186 / 255, 110 / 255, 64 / 255, 1.0), 1.0);
            this.addSpheresSmoothnessMetallic(sphereMesh, new Laya.Vector3(0, 0, 2), this._s3d, 3, row, new Laya.Vector4(1.0, 1.0, 1.0, 1.0));
            this.addSpheresSpecialMetallic(sphereMesh, new Laya.Vector3(0, -1.5, 2), this._s3d, row, new Laya.Vector4(0.0, 0.0, 0.0, 1.0), 0.0);
            _ui_UI_TestMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.Show(Laya.Handler.create(this, this.Clear));
        });
    }
    /**
     * Add some different smoothness with special metallic sphere.
     */
    addSpheresSpecialMetallic(sphereMesh, offset, scene, col, color, metallic = 0) {
        const width = col * 0.5;
        for (var i = 0, n = col; i < n; i++) { //diffenent smoothness
            var smoothness = i / (n - 1);
            // var metallic: number = metallic;
            var pos = new Laya.Vector3();
            pos.setValue(-width / 2 + i * width / (n - 1), 0, 3.0);
            Laya.Vector3.add(offset, pos, pos);
            this.addPBRSphere(sphereMesh, pos, scene, color, smoothness, metallic);
        }
    }
    /**
     * Add some different smoothness and metallic sphere.
     */
    addSpheresSmoothnessMetallic(sphereMesh, offset, scene, row, col, color) {
        const width = col * 0.5;
        const height = row * 0.5;
        for (var i = 0, n = col; i < n; i++) { //diffenent smoothness
            for (var j = 0, m = row; j < m; j++) { //diffenent metallic
                var smoothness = i / (n - 1);
                var metallic = 1.0 - j / (m - 1);
                var pos = new Laya.Vector3();
                pos.setValue(-width / 2 + i * width / (n - 1), height / 2 - j * height / (m - 1), 3.0);
                Laya.Vector3.add(offset, pos, pos);
                this.addPBRSphere(sphereMesh, pos, scene, color, smoothness, metallic);
            }
        }
    }
    /**
     * Add one with smoothness and metallic sphere.
     */
    addPBRSphere(sphereMesh, position, scene, color, smoothness, metallic) {
        var mat = new Laya.PBRStandardMaterial();
        mat.albedoColor = color;
        mat.smoothness = smoothness;
        mat.metallic = metallic;
        var meshSprite = new Laya.MeshSprite3D(sphereMesh);
        meshSprite.meshRenderer.sharedMaterial = mat;
        var transform = meshSprite.transform;
        transform.localPosition = position;
        scene.addChild(meshSprite);
        return mat;
    }
    Clear() {
        this._s3d.destroy();
        _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_0__["default"].Unload(scene_path);
        _ui_UI_FunctionTestMediator__WEBPACK_IMPORTED_MODULE_2__["default"].instance.Show();
    }
}


/***/ }),

/***/ "./src/script/test/PhysicTest.ts":
/*!***************************************!*\
  !*** ./src/script/test/PhysicTest.ts ***!
  \***************************************/
/*! exports provided: PhysicTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicTest", function() { return PhysicTest; });
/* harmony import */ var _ui_UI_TestMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/UI_TestMediator */ "./src/script/ui/UI_TestMediator.ts");
/* harmony import */ var _ui_UI_FunctionTestMediator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/UI_FunctionTestMediator */ "./src/script/ui/UI_FunctionTestMediator.ts");
/* harmony import */ var _LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/LTUtils/MonoHelper */ "./src/LTGame/LTUtils/MonoHelper.ts");
/* harmony import */ var _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTGame/LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _LTGame_Async_Awaiters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LTGame/Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");





class PhysicTest {
    constructor() {
        this.name = "Bullet物理";
        this._isPressed = false;
        this._panelSize = 50;
    }
    Create() {
        this._s3d = new Laya.Scene3D();
        Laya.stage.addChildAt(this._s3d, 1);
        let panelMesh = Laya.PrimitiveMesh.createPlane(this._panelSize, this._panelSize, 1, 1);
        let panelMat = new Laya.BlinnPhongMaterial();
        panelMat.albedoColor = new Laya.Vector4(0.8, 0.8, 0.8, 1);
        let panelObj = new Laya.MeshSprite3D(panelMesh, "floor");
        panelObj.meshRenderer.material = panelMat;
        panelObj.meshRenderer.receiveShadow = true;
        this._s3d.addChild(panelObj);
        panelObj.transform.localPosition = new Laya.Vector3(0, 0, 0);
        let colliderCmp = panelObj.addComponent(Laya.PhysicsCollider);
        colliderCmp.colliderShape = new Laya.BoxColliderShape(this._panelSize, 1, this._panelSize);
        colliderCmp.friction = 1;
        let camera = new Laya.Camera();
        camera.name = "camera";
        this._s3d.addChild(camera);
        camera.transform.localPosition = new Laya.Vector3(0, this._panelSize * 1.2, this._panelSize * 1.2);
        camera.transform.localRotationEuler = new Laya.Vector3(-45, 0, 0);
        let light = new Laya.DirectionLight();
        this._s3d.addChild(light);
        light.transform.localRotationEuler = new Laya.Vector3(-75, 0, 0);
        light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;
        light.shadowMode = Laya.ShadowMode.SoftHigh;
        light.shadowDistance = 200;
        _LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_2__["default"].instance.AddAction(_LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_2__["EActionType"].Update, this, this._LogicUpdate);
        _ui_UI_TestMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.Show(Laya.Handler.create(this, this.Clear));
        _ui_UI_TestMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ui.m_img_bg.on(Laya.Event.MOUSE_DOWN, this, this._OnMouseDown);
        _ui_UI_TestMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ui.on(Laya.Event.MOUSE_UP, this, this._OnMouseUp);
        _ui_UI_TestMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ui.on(Laya.Event.MOUSE_OUT, this, this._OnMouseUp);
        this._cacheMaterial = new Laya.BlinnPhongMaterial();
        this._cacheMaterial.albedoColor = new Laya.Vector4(0.1, 0.1, 0.6, 1);
        this._sleepMaterial = new Laya.BlinnPhongMaterial();
        this._sleepMaterial.albedoColor = new Laya.Vector4(0.5, 0.5, 0, 1);
        this._cacheMesh = Laya.PrimitiveMesh.createBox(1, 1, 1);
        this._cubeRigs = [];
        this._cubeObjs = [];
        this._s3d.physicsSimulation.maxSubSteps = 2;
        this._s3d.physicsSimulation.fixedTimeStep = 1 / 30;
    }
    _LogicUpdate() {
        let dt = Laya.timer.delta * 0.001;
        if (this._isPressed) {
            this._remainTime -= dt;
            if (this._remainTime < 0) {
                this._GenCube();
                this._remainTime = 0.1;
            }
        }
        for (let i = 0; i < this._cubeObjs.length; ++i) {
            let cubeObj = this._cubeObjs[i];
            let rig = this._cubeRigs[i];
            cubeObj.meshRenderer.sharedMaterial = rig.isSleeping ? this._sleepMaterial : this._cacheMaterial;
        }
    }
    _GenCube() {
        return __awaiter(this, void 0, void 0, function* () {
            let cubeObj = new Laya.MeshSprite3D(this._cacheMesh, "cube");
            cubeObj.meshRenderer.sharedMaterial = this._cacheMaterial;
            this._s3d.addChild(cubeObj);
            cubeObj.transform.localPosition = new Laya.Vector3(_LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(-5, 5), this._panelSize, _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(-5, 5));
            cubeObj.transform.localRotationEuler = new Laya.Vector3(_LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(0, 360), _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(0, 360), _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(0, 360));
            cubeObj.transform.localScale = new Laya.Vector3(_LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(0.5, 2), _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(0.5, 2), _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_3__["default"].Random(0.5, 2));
            cubeObj.meshRenderer.castShadow = true;
            cubeObj.meshRenderer.receiveShadow = true;
            yield _LTGame_Async_Awaiters__WEBPACK_IMPORTED_MODULE_4__["default"].NextFrame();
            let rig = cubeObj.addComponent(Laya.Rigidbody3D);
            rig.colliderShape = new Laya.BoxColliderShape(1, 1, 1);
            rig.sleepAngularVelocity = 0.1;
            rig.sleepLinearVelocity = 0.1;
            rig.ccdMotionThreshold = 0;
            rig.ccdSweptSphereRadius = 0;
            this._cubeObjs.push(cubeObj);
            this._cubeRigs.push(rig);
            _ui_UI_TestMediator__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ui.m_text_notice.text = "物体数量:" + this._cubeObjs.length;
        });
    }
    _OnMouseDown(event) {
        if (this._isPressed)
            return;
        this._isPressed = true;
        this._touchId = event.touchId;
        this._remainTime = 0;
    }
    _OnMouseUp(event) {
        if (!this._isPressed)
            return;
        if (this._touchId != event.touchId)
            return;
        this._isPressed = false;
    }
    Clear() {
        _LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_2__["default"].instance.RemoveAction(_LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_2__["EActionType"].Update, this, this._LogicUpdate);
        this._s3d.destroy();
        _ui_UI_FunctionTestMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.Show();
    }
}


/***/ }),

/***/ "./src/script/test/RenderTextureTest.ts":
/*!**********************************************!*\
  !*** ./src/script/test/RenderTextureTest.ts ***!
  \**********************************************/
/*! exports provided: RenderTextureTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderTextureTest", function() { return RenderTextureTest; });
/* harmony import */ var _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/Res/LTRes */ "./src/LTGame/Res/LTRes.ts");
/* harmony import */ var _ui_UI_TestRTMediator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/UI_TestRTMediator */ "./src/script/ui/UI_TestRTMediator.ts");
/* harmony import */ var _LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/LTUtils/MonoHelper */ "./src/LTGame/LTUtils/MonoHelper.ts");
/* harmony import */ var _ui_UI_FunctionTestMediator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/UI_FunctionTestMediator */ "./src/script/ui/UI_FunctionTestMediator.ts");




const scene_path = "res/export/Conventional/HeightFog.ls";
class RenderTextureTest {
    constructor() {
        this.name = "RT测试";
    }
    Create() {
        return __awaiter(this, void 0, void 0, function* () {
            this._s3d = yield _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_0__["default"].LoadAndGet(scene_path, true);
            Laya.stage.addChildAt(this._s3d, 1);
            _ui_UI_TestRTMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.Show();
            let getCamera = this._s3d.getChildByName("Main Camera");
            this._renderCamera = getCamera.clone();
            this._s3d.addChild(this._renderCamera);
            // 注意格式只能用r8g8b8a8否则ip6不支持
            this._cacheRT = new Laya.RenderTexture(_ui_UI_TestRTMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ui.m_img_display.width, _ui_UI_TestRTMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ui.m_img_display.height, Laya.RenderTextureFormat.R8G8B8A8, Laya.RenderTextureDepthFormat.DEPTH_16);
            this._renderCamera.renderTarget = this._cacheRT;
            this._renderCamera.enableRender = false;
            this._cacheImage = new fgui.GImage();
            _ui_UI_TestRTMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ui.addChildAt(this._cacheImage, _ui_UI_TestRTMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ui.getChildIndex(_ui_UI_TestRTMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ui.m_img_display) + 1);
            this._cacheImage.image.texture = new Laya.Texture(this._cacheRT);
            this._cacheImage.setPivot(_ui_UI_TestRTMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ui.m_img_display.pivotX, _ui_UI_TestRTMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ui.m_img_display.pivotY, _ui_UI_TestRTMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ui.m_img_display.pivotAsAnchor);
            _ui_UI_TestRTMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ui.m_img_display.draggable = true;
            _ui_UI_TestRTMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ui.m_btn_back.onClick(this, this.Clear);
            _LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_2__["default"].instance.AddAction(_LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_2__["EActionType"].Update, this, this._LogicUpdate);
        });
    }
    _LogicUpdate() {
        let dt = Laya.timer.delta / 1000;
        this._renderCamera.transform.localRotationEulerY += dt * 10;
        this._renderCamera.render();
        this._cacheImage.setXY(_ui_UI_TestRTMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ui.m_img_display.x, _ui_UI_TestRTMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.ui.m_img_display.y);
    }
    Clear() {
        this._cacheRT.destroy();
        _LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_2__["default"].instance.RemoveAction(_LTGame_LTUtils_MonoHelper__WEBPACK_IMPORTED_MODULE_2__["EActionType"].Update, this, this._LogicUpdate);
        this._s3d.destroy();
        _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_0__["default"].Unload(scene_path);
        _ui_UI_TestRTMediator__WEBPACK_IMPORTED_MODULE_1__["default"].instance.Hide();
        _ui_UI_FunctionTestMediator__WEBPACK_IMPORTED_MODULE_3__["default"].instance.Show();
    }
}


/***/ }),

/***/ "./src/script/test/UIEffectTest.ts":
/*!*****************************************!*\
  !*** ./src/script/test/UIEffectTest.ts ***!
  \*****************************************/
/*! exports provided: UIEffectTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIEffectTest", function() { return UIEffectTest; });
/* harmony import */ var _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/Res/LTRes */ "./src/LTGame/Res/LTRes.ts");
/* harmony import */ var _manager_EffectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager/EffectManager */ "./src/script/manager/EffectManager.ts");
/* harmony import */ var _ui_UI_TestMediator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/UI_TestMediator */ "./src/script/ui/UI_TestMediator.ts");
/* harmony import */ var _ui_UI_FunctionTestMediator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/UI_FunctionTestMediator */ "./src/script/ui/UI_FunctionTestMediator.ts");




const scene_path = "res/export/Conventional/HeightFog.ls";
class UIEffectTest {
    constructor() {
        this.name = "UI特效测试";
    }
    Create() {
        return __awaiter(this, void 0, void 0, function* () {
            this._s3d = yield _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_0__["default"].LoadAndGet(scene_path, true);
            Laya.stage.addChildAt(this._s3d, 1);
            _ui_UI_TestMediator__WEBPACK_IMPORTED_MODULE_2__["default"].instance.Show(Laya.Handler.create(this, this.Clear));
            _ui_UI_TestMediator__WEBPACK_IMPORTED_MODULE_2__["default"].instance.ui.m_img_bg.on(Laya.Event.MOUSE_DOWN, this, this._OnPressDown);
            _ui_UI_TestMediator__WEBPACK_IMPORTED_MODULE_2__["default"].instance.ui.m_img_bg.color = "ffffffff";
        });
    }
    _OnPressDown(event) {
        _manager_EffectManager__WEBPACK_IMPORTED_MODULE_1__["EffectManager"].instance.PlayEffectById(2, 2, new Laya.Vector3(event.stageX, event.stageY));
    }
    Clear() {
        this._s3d.destroy();
        _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_0__["default"].Unload(scene_path);
        _ui_UI_FunctionTestMediator__WEBPACK_IMPORTED_MODULE_3__["default"].instance.Show();
    }
}


/***/ }),

/***/ "./src/script/ui/UI_ADDemoMediator.ts":
/*!********************************************!*\
  !*** ./src/script/ui/UI_ADDemoMediator.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_ADDemoMediator; });
/* harmony import */ var _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _ui_Main_UI_ADDemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/Main/UI_ADDemo */ "./src/ui/Main/UI_ADDemo.ts");
/* harmony import */ var _UI_NativeDemoMediator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI_NativeDemoMediator */ "./src/script/ui/UI_NativeDemoMediator.ts");





class UI_ADDemoMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_ADDemoMediator();
            this._instance._classDefine = _ui_Main_UI_ADDemo__WEBPACK_IMPORTED_MODULE_3__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_show_banner.onClick(this, this._OnClickShowBanner);
        this.ui.m_btn_back.onClick(this, this._OnClickBack);
        this.ui.m_btn_hide_banner.onClick(this, this._OnClickHideBanner);
        this.ui.m_btn_rewardvideo.onClick(this, this._OnClickRewardAd);
        this.ui.m_btn_intvideo.onClick(this, this._OnClickIntAd);
        this.ui.m_btn_native.onClick(this, this._OnClickNative);
    }
    _OnClickNative() {
        // (LTPlatform.instance as OppoPlatform).ShowNativeAd();
        _UI_NativeDemoMediator__WEBPACK_IMPORTED_MODULE_4__["default"].instance.Show();
    }
    _OnClickBack() {
        this.Hide();
    }
    _OnClickShowBanner() {
        _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ShowBannerAd();
    }
    _OnClickHideBanner() {
        _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.HideBannerAd();
    }
    _OnClickRewardAd() {
        _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ShowRewardVideoAd(Laya.Handler.create(this, () => {
            _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_2__["default"].Toast("获得奖励");
        }), Laya.Handler.create(this, () => {
            _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_2__["default"].Toast("跳过视频");
        }));
    }
    _OnClickIntAd() {
        _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ShowInterstitalAd();
    }
}


/***/ }),

/***/ "./src/script/ui/UI_BoneAnimTestMediator.ts":
/*!**************************************************!*\
  !*** ./src/script/ui/UI_BoneAnimTestMediator.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_BoneAnimTestMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _ui_Main_UI_BoneAnimTest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/Main/UI_BoneAnimTest */ "./src/ui/Main/UI_BoneAnimTest.ts");
/* harmony import */ var _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/GlobalUnit */ "./src/script/common/GlobalUnit.ts");
/* harmony import */ var _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTGame/Res/LTRes */ "./src/LTGame/Res/LTRes.ts");
/* harmony import */ var _common_ResDefine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/ResDefine */ "./src/script/common/ResDefine.ts");





class UI_BoneAnimTestMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this._xBorder = [-10, 10];
        this._zBorder = [-10, 30];
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_BoneAnimTestMediator();
            this._instance._classDefine = _ui_Main_UI_BoneAnimTest__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_back.onClick(this, this._OnClickBack);
        this.ui.m_btn_add.onClick(this, this._OnClickAdd);
        this.ui.m_text_total.text = "场景正在初始化";
        this._CreateScene();
    }
    _CreateScene() {
        return __awaiter(this, void 0, void 0, function* () {
            this._fakeObj = new Laya.Sprite3D("fake_obj");
            _common_GlobalUnit__WEBPACK_IMPORTED_MODULE_2__["default"].s3d.addChild(this._fakeObj);
            yield _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_3__["default"].LoadAsync(_common_ResDefine__WEBPACK_IMPORTED_MODULE_4__["default"].FixPath("default_light"));
            yield _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_3__["default"].LoadAsync(_common_ResDefine__WEBPACK_IMPORTED_MODULE_4__["default"].FixPath("main_camera"));
            yield _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_3__["default"].LoadAsync(_common_ResDefine__WEBPACK_IMPORTED_MODULE_4__["default"].FixPath("floor"));
            yield _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_3__["default"].LoadAsync(_common_ResDefine__WEBPACK_IMPORTED_MODULE_4__["default"].FixPath("player_01"));
            yield _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_3__["default"].LoadAsync(_common_ResDefine__WEBPACK_IMPORTED_MODULE_4__["default"].FixPath("pengzhuang"));
            this._fakeObj.addChild(_LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_3__["default"].Get(_common_ResDefine__WEBPACK_IMPORTED_MODULE_4__["default"].FixPath("default_light"), true));
            this._fakeObj.addChild(_LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_3__["default"].Get(_common_ResDefine__WEBPACK_IMPORTED_MODULE_4__["default"].FixPath("main_camera"), true));
            this._fakeObj.addChild(_LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_3__["default"].Get(_common_ResDefine__WEBPACK_IMPORTED_MODULE_4__["default"].FixPath("floor"), true));
            this._sampleObj = this._fakeObj.addChild(_LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_3__["default"].Get(_common_ResDefine__WEBPACK_IMPORTED_MODULE_4__["default"].FixPath("player_01"), true));
            this._cacheAnims = [];
            this.ui.m_text_total.text = "当前总数量:" + (this._cacheAnims.length + 1);
        });
    }
    _OnClickAdd() {
        let addStr = this.ui.m_text_input.text;
        let addValue = parseInt(addStr);
        if (addValue > 0) {
            for (let i = 0; i < addValue; ++i) {
                let genPos = this._GetGenPos();
                let instObj = this._sampleObj.clone();
                this._cacheAnims.push(instObj);
                this._fakeObj.addChild(instObj);
                instObj.transform.position = genPos;
            }
        }
        else if (addValue < 0) {
            addValue = -addValue;
            for (let i = 0; i < addValue && this._cacheAnims.length > 0; ++i) {
                let popObj = this._cacheAnims.pop();
                popObj.destroy();
            }
        }
        this.ui.m_text_total.text = "当前总数量:" + (this._cacheAnims.length + 1);
    }
    _GetGenPos() {
        let xCount = this._xBorder[1] - this._xBorder[0];
        let zIndex = Math.floor(this._cacheAnims.length / xCount);
        let xIndex = this._cacheAnims.length % xCount;
        return new Laya.Vector3(xIndex + this._xBorder[0], 0, this._zBorder[0] + zIndex);
    }
    _OnClickBack() {
        this.Hide();
    }
    _OnHide() {
        this._fakeObj.destroy();
    }
}


/***/ }),

/***/ "./src/script/ui/UI_CommonUI2Mediator.ts":
/*!***********************************************!*\
  !*** ./src/script/ui/UI_CommonUI2Mediator.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_CommonUI2Mediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _ui_Main_UI_CommonUI2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/Main/UI_CommonUI2 */ "./src/ui/Main/UI_CommonUI2.ts");
/* harmony import */ var _UI_MainMediator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI_MainMediator */ "./src/script/ui/UI_MainMediator.ts");
/* harmony import */ var _LTG_CommonUI_Mediator_LTG_UI_HideMenuMediator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTG_CommonUI/Mediator/LTG_UI_HideMenuMediator */ "./src/LTG_CommonUI/Mediator/LTG_UI_HideMenuMediator.ts");
/* harmony import */ var _LTG_CommonUI_Data_LTG_Com_MyGameData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LTG_CommonUI/Data/LTG_Com_MyGameData */ "./src/LTG_CommonUI/Data/LTG_Com_MyGameData.ts");
/* harmony import */ var _LTG_CommonUI_Data_LTG_Com_ZhuaWawaData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../LTG_CommonUI/Data/LTG_Com_ZhuaWawaData */ "./src/LTG_CommonUI/Data/LTG_Com_ZhuaWawaData.ts");
/* harmony import */ var _LTG_CommonUI_Data_LTG_Com_LimitSkinData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../LTG_CommonUI/Data/LTG_Com_LimitSkinData */ "./src/LTG_CommonUI/Data/LTG_Com_LimitSkinData.ts");
/* harmony import */ var _LTG_CommonUI_Data_LTG_Com_RollData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../LTG_CommonUI/Data/LTG_Com_RollData */ "./src/LTG_CommonUI/Data/LTG_Com_RollData.ts");
/* harmony import */ var _LTG_CommonUI_Data_LTG_Com_WatchDYData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../LTG_CommonUI/Data/LTG_Com_WatchDYData */ "./src/LTG_CommonUI/Data/LTG_Com_WatchDYData.ts");
/* harmony import */ var _LTG_CommonUI_Data_LTG_Com_ShareVideoData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../LTG_CommonUI/Data/LTG_Com_ShareVideoData */ "./src/LTG_CommonUI/Data/LTG_Com_ShareVideoData.ts");
/* harmony import */ var _LTG_CommonUI_Data_LTG_Com_SignData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../LTG_CommonUI/Data/LTG_Com_SignData */ "./src/LTG_CommonUI/Data/LTG_Com_SignData.ts");
/* harmony import */ var _LTG_CommonUI_Data_LTG_Com_SetData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../LTG_CommonUI/Data/LTG_Com_SetData */ "./src/LTG_CommonUI/Data/LTG_Com_SetData.ts");
/* harmony import */ var _LTG_CommonUI_Data_LTG_Com_EggWallData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../LTG_CommonUI/Data/LTG_Com_EggWallData */ "./src/LTG_CommonUI/Data/LTG_Com_EggWallData.ts");













class UIDemoData {
    constructor(name, func) {
        this.name = name;
        this.func = func;
    }
}
class UI_CommonUI2Mediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this._demos = [
            new UIDemoData("隐藏菜单", () => {
                _LTG_CommonUI_Mediator_LTG_UI_HideMenuMediator__WEBPACK_IMPORTED_MODULE_3__["default"].instance.Show();
            }),
            new UIDemoData("我的小程序", () => {
                new _LTG_CommonUI_Data_LTG_Com_MyGameData__WEBPACK_IMPORTED_MODULE_4__["LTG_Com_MyGameData"]().Send();
            }),
            new UIDemoData("抓娃娃", () => {
                let data = new _LTG_CommonUI_Data_LTG_Com_ZhuaWawaData__WEBPACK_IMPORTED_MODULE_5__["LTG_Com_ZhuaWawaData"]();
                data.onPickup = Laya.Handler.create(null, () => {
                    console.log("抓娃娃完成");
                });
                data.onTimeout = Laya.Handler.create(null, () => {
                    console.log("超时退出");
                });
                data.Send();
            }),
            new UIDemoData("限定皮肤", () => {
                let data = new _LTG_CommonUI_Data_LTG_Com_LimitSkinData__WEBPACK_IMPORTED_MODULE_6__["LTG_Com_LimitSkinData"]();
                data.watchCount = 0;
                data.onWatchedAd = Laya.Handler.create(null, () => {
                    data.watchCount++;
                    if (data.watchCount >= 3) {
                        _LTG_CommonUI_Data_LTG_Com_LimitSkinData__WEBPACK_IMPORTED_MODULE_6__["LTG_Com_LimitSkinData"].Hide();
                        console.log("获取皮肤");
                    }
                    else {
                        _LTG_CommonUI_Data_LTG_Com_LimitSkinData__WEBPACK_IMPORTED_MODULE_6__["LTG_Com_LimitSkinData"].UpdateCount(data.watchCount);
                    }
                }, null, false);
                data.Send();
            }),
            new UIDemoData("大转盘", () => {
                let data = new _LTG_CommonUI_Data_LTG_Com_RollData__WEBPACK_IMPORTED_MODULE_7__["LTG_Com_RollData"]();
                data.onRolled = Laya.Handler.create(null, (config) => {
                    console.log("转到奖励", config);
                }, null, false);
                data.onSpecial = Laya.Handler.create(null, (config) => {
                    console.log("特殊奖励", config);
                }, null, false);
                data.Send();
            }),
            new UIDemoData("关注抖音号", () => {
                new _LTG_CommonUI_Data_LTG_Com_WatchDYData__WEBPACK_IMPORTED_MODULE_8__["LTG_Com_WatchDYData"]().Send();
            }),
            new UIDemoData("视频分享", () => {
                let data = new _LTG_CommonUI_Data_LTG_Com_ShareVideoData__WEBPACK_IMPORTED_MODULE_9__["LTG_Com_ShareVideoData"]();
                data.onClosed = Laya.Handler.create(null, (code) => {
                    switch (code) {
                        case 0:
                            console.log("未分享");
                            break;
                        case 1:
                            console.log("已分享");
                            break;
                    }
                });
                data.Send();
            }),
            new UIDemoData("签到", () => {
                let data = new _LTG_CommonUI_Data_LTG_Com_SignData__WEBPACK_IMPORTED_MODULE_10__["LTG_Com_SignData"]();
                data.onSign = Laya.Handler.create(null, (config, isWatched) => {
                    console.log("签到", config, "是否观看视频", isWatched);
                });
                data.Send();
            }),
            new UIDemoData("设置", () => {
                let data = new _LTG_CommonUI_Data_LTG_Com_SetData__WEBPACK_IMPORTED_MODULE_11__["LTG_Com_SetData"]();
                data.onCodeEntered = Laya.Handler.create(null, (code) => {
                    console.log("输入兑换码", code);
                });
                data.Send();
            }),
            new UIDemoData("彩蛋墙", () => {
                let data = new _LTG_CommonUI_Data_LTG_Com_EggWallData__WEBPACK_IMPORTED_MODULE_12__["LTG_Com_EggWallData"]();
                for (let i = 0; i < 10; ++i) {
                    let fakeData = new _LTG_CommonUI_Data_LTG_Com_EggWallData__WEBPACK_IMPORTED_MODULE_12__["EggWallData"]();
                    fakeData.eggId = i;
                    fakeData.noticeStr = "测试消息" + i;
                    fakeData.canShow = true;
                    data.eggWallDatas.push(fakeData);
                }
                data.eggWallDatas[9].canShow = false;
                data.Send();
            }),
        ];
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_CommonUI2Mediator();
            this._instance._classDefine = _ui_Main_UI_CommonUI2__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_back.onClick(this, this._OnClickBack);
        this.ui.m_list_btns.setVirtual();
        this.ui.m_list_btns.itemRenderer = Laya.Handler.create(this, this._OnItemRender, null, false);
        this.ui.m_list_btns.numItems = this._demos.length;
    }
    _OnItemRender(index, itemUI) {
        let data = this._demos[index];
        itemUI.text = data.name;
        itemUI.onClick(this, data.func);
    }
    _OnClickBack() {
        this.Hide();
        _UI_MainMediator__WEBPACK_IMPORTED_MODULE_2__["UI_MainMediator"].instance.Show();
    }
}


/***/ }),

/***/ "./src/script/ui/UI_CommonUIMediator.ts":
/*!**********************************************!*\
  !*** ./src/script/ui/UI_CommonUIMediator.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_CommonUIMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _ui_Main_UI_CommonUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/Main/UI_CommonUI */ "./src/ui/Main/UI_CommonUI.ts");
/* harmony import */ var _UI_MoudleDemoMediator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI_MoudleDemoMediator */ "./src/script/ui/UI_MoudleDemoMediator.ts");



class UI_CommonUIMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_CommonUIMediator();
            this._instance._classDefine = _ui_Main_UI_CommonUI__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_back.onClick(this, this._OnClickBack);
        this.ui.m_btn_moudle.onClick(this, this._OnClickModule);
    }
    _OnClickModule() {
        // LTUI.Toast('完善中');
        // return;
        _UI_MoudleDemoMediator__WEBPACK_IMPORTED_MODULE_2__["default"].instance.Show();
    }
    _OnClickBack() {
        this.Hide();
    }
}


/***/ }),

/***/ "./src/script/ui/UI_FunctionTestMediator.ts":
/*!**************************************************!*\
  !*** ./src/script/ui/UI_FunctionTestMediator.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_FunctionTestMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _ui_Main_UI_FunctionTest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/Main/UI_FunctionTest */ "./src/ui/Main/UI_FunctionTest.ts");
/* harmony import */ var _UI_MainMediator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI_MainMediator */ "./src/script/ui/UI_MainMediator.ts");
/* harmony import */ var _test_PBRTest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test/PBRTest */ "./src/script/test/PBRTest.ts");
/* harmony import */ var _test_HeightFogTest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../test/HeightFogTest */ "./src/script/test/HeightFogTest.ts");
/* harmony import */ var _test_RenderTextureTest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../test/RenderTextureTest */ "./src/script/test/RenderTextureTest.ts");
/* harmony import */ var _test_UIEffectTest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../test/UIEffectTest */ "./src/script/test/UIEffectTest.ts");
/* harmony import */ var _test_PhysicTest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../test/PhysicTest */ "./src/script/test/PhysicTest.ts");
/* harmony import */ var _test_HXOimoPhysicTest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../test/HXOimoPhysicTest */ "./src/script/test/HXOimoPhysicTest.ts");









class UI_FunctionTestMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this._sampleList = [
            new _test_PBRTest__WEBPACK_IMPORTED_MODULE_3__["PBRTest"](),
            new _test_HeightFogTest__WEBPACK_IMPORTED_MODULE_4__["HeightFogTest"](),
            new _test_RenderTextureTest__WEBPACK_IMPORTED_MODULE_5__["RenderTextureTest"](),
            new _test_UIEffectTest__WEBPACK_IMPORTED_MODULE_6__["UIEffectTest"](),
            new _test_PhysicTest__WEBPACK_IMPORTED_MODULE_7__["PhysicTest"](),
            //new OimoPhysicTest(),
            //new HybridPhysicTest(),
            //new CannonPhysicTest(),
            new _test_HXOimoPhysicTest__WEBPACK_IMPORTED_MODULE_8__["HXOimoPhysicTest"](),
        ];
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_FunctionTestMediator();
            this._instance._classDefine = _ui_Main_UI_FunctionTest__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_back.onClick(this, this._OnClickClose);
        this.ui.m_list_btns.setVirtual();
        this.ui.m_list_btns.itemRenderer = Laya.Handler.create(this, this._OnItemBtnsRender, null, false);
        this.ui.m_list_btns.numItems = this._sampleList.length;
    }
    _OnItemBtnsRender(index, itemUI) {
        let data = this._sampleList[index];
        itemUI.text = data.name;
        itemUI.onClick(this, this._OnClickBtns, [index]);
    }
    _OnClickBtns(index) {
        this.Hide();
        let data = this._sampleList[index];
        data.Create();
    }
    _OnClickClose() {
        this.Hide();
        _UI_MainMediator__WEBPACK_IMPORTED_MODULE_2__["UI_MainMediator"].instance.Show();
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
/* harmony import */ var _UI_ADDemoMediator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI_ADDemoMediator */ "./src/script/ui/UI_ADDemoMediator.ts");
/* harmony import */ var _UI_CommonUIMediator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI_CommonUIMediator */ "./src/script/ui/UI_CommonUIMediator.ts");
/* harmony import */ var _UI_FunctionTestMediator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI_FunctionTestMediator */ "./src/script/ui/UI_FunctionTestMediator.ts");
/* harmony import */ var _UI_OthersMediator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI_OthersMediator */ "./src/script/ui/UI_OthersMediator.ts");
/* harmony import */ var _UI_PerfomanceMediator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UI_PerfomanceMediator */ "./src/script/ui/UI_PerfomanceMediator.ts");
/* harmony import */ var _UI_RecordDemoMediator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UI_RecordDemoMediator */ "./src/script/ui/UI_RecordDemoMediator.ts");
/* harmony import */ var _UI_UIDemoMediator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UI_UIDemoMediator */ "./src/script/ui/UI_UIDemoMediator.ts");
/* harmony import */ var _UI_CommonUI2Mediator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UI_CommonUI2Mediator */ "./src/script/ui/UI_CommonUI2Mediator.ts");










class UI_MainMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_MainMediator();
            this._instance._classDefine = _ui_Main_UI_Main__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        this.ui.m_btn_ad.onClick(this, this._OnClickBtnAd);
        this.ui.m_btn_ui.onClick(this, this._OnClickBtnUI);
        this.ui.m_btn_record.onClick(this, this._OnClickRecord);
        this.ui.m_btn_common.onClick(this, this._OnClickCommon);
        this.ui.m_btn_others.onClick(this, this._OnClickOthers);
        this.ui.m_btn_performance.onClick(this, this._OnClickPerfomance);
        this.ui.m_btn_feature.onClick(this, this._OnClickFunctionTest);
        this.ui.m_btn_common2.onClick(this, this._OnClickCommon2);
    }
    _OnClickCommon2() {
        this.Hide();
        _UI_CommonUI2Mediator__WEBPACK_IMPORTED_MODULE_9__["default"].instance.Show();
    }
    _OnClickFunctionTest() {
        this.Hide();
        _UI_FunctionTestMediator__WEBPACK_IMPORTED_MODULE_4__["default"].instance.Show();
    }
    _OnClickPerfomance() {
        _UI_PerfomanceMediator__WEBPACK_IMPORTED_MODULE_6__["default"].instance.Show();
    }
    _OnClickOthers() {
        _UI_OthersMediator__WEBPACK_IMPORTED_MODULE_5__["default"].instance.Show();
    }
    _OnClickBtnAd() {
        _UI_ADDemoMediator__WEBPACK_IMPORTED_MODULE_2__["default"].instance.Show();
    }
    _OnClickBtnUI() {
        _UI_UIDemoMediator__WEBPACK_IMPORTED_MODULE_8__["default"].instance.Show();
    }
    _OnClickRecord() {
        _UI_RecordDemoMediator__WEBPACK_IMPORTED_MODULE_7__["default"].instance.Show();
    }
    _OnClickCommon() {
        _UI_CommonUIMediator__WEBPACK_IMPORTED_MODULE_3__["default"].instance.Show();
    }
}


/***/ }),

/***/ "./src/script/ui/UI_MoudleDemoMediator.ts":
/*!************************************************!*\
  !*** ./src/script/ui/UI_MoudleDemoMediator.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_MoudleDemoMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _ui_Main_UI_MoudleDemo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/Main/UI_MoudleDemo */ "./src/ui/Main/UI_MoudleDemo.ts");


class UI_MoudleDemoMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_MoudleDemoMediator();
            this._instance._classDefine = _ui_Main_UI_MoudleDemo__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_back.onClick(this, this._OnClickBack);
        console.log(this.ui.m___wxSG);
    }
    _OnClickBack() {
        this.Hide();
    }
}


/***/ }),

/***/ "./src/script/ui/UI_NativeDemoMediator.ts":
/*!************************************************!*\
  !*** ./src/script/ui/UI_NativeDemoMediator.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_NativeDemoMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _ui_Main_UI_NativeDemo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/Main/UI_NativeDemo */ "./src/ui/Main/UI_NativeDemo.ts");


class UI_NativeDemoMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_NativeDemoMediator();
            this._instance._classDefine = _ui_Main_UI_NativeDemo__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_back.onClick(this, this._OnClickBack);
    }
    _OnClickBack() {
        this.Hide();
    }
}


/***/ }),

/***/ "./src/script/ui/UI_OthersMediator.ts":
/*!********************************************!*\
  !*** ./src/script/ui/UI_OthersMediator.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_OthersMediator; });
/* harmony import */ var _LTGame_Platform_ShareManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/Platform/ShareManager */ "./src/LTGame/Platform/ShareManager.ts");
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _ui_Main_UI_Others__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/Main/UI_Others */ "./src/ui/Main/UI_Others.ts");
/* harmony import */ var _LTGame_LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTGame/LTUtils/LTUtils */ "./src/LTGame/LTUtils/LTUtils.ts");
/* harmony import */ var _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LTGame/UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../LTGame/Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../SDK/LTSDK */ "./src/SDK/LTSDK.ts");
/* harmony import */ var _config_GameConst__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/GameConst */ "./src/script/config/GameConst.ts");
/* harmony import */ var _manager_AudioManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../manager/AudioManager */ "./src/script/manager/AudioManager.ts");









class UI_OthersMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_OthersMediator();
            this._instance._classDefine = _ui_Main_UI_Others__WEBPACK_IMPORTED_MODULE_2__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_back.onClick(this, this._OnClickBack);
        this.ui.m_btn_othergame.onClick(this, this._OnClickMoreGames);
        this.ui.m_btn_share.onClick(this, this._OnClickShare);
        this.ui.m_btn_shake_long.onClick(this, this._OnClickShakeLong);
        this.ui.m_btn_shake_short.onClick(this, this._OnClickShakeShort);
        this.ui.m_btn_const.onClick(this, this._OnClickConst);
        this.ui.m_btn_jump.onClick(this, this._OnClickDirectJump);
        this.ui.m_btn_shake_playmusic.onClick(this, this._OnClickPlayBgm);
        this.ui.m_btn_shake_stopmusic.onClick(this, this._OnClickStopBgm);
        this.ui.m_btn_shake_playshort.onClick(this, this._OnClickPlayAudio);
    }
    _OnClickPlayBgm() {
        _manager_AudioManager__WEBPACK_IMPORTED_MODULE_8__["default"].instance.PlayById(2);
    }
    _OnClickStopBgm() {
        _manager_AudioManager__WEBPACK_IMPORTED_MODULE_8__["default"].instance.StopAll();
    }
    _OnClickPlayAudio() {
        _manager_AudioManager__WEBPACK_IMPORTED_MODULE_8__["default"].instance.PlayById(1);
    }
    _OnClickBack() {
        this.Hide();
    }
    _OnClickConst() {
        _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_4__["default"].Toast("读取到配置:" + _config_GameConst__WEBPACK_IMPORTED_MODULE_7__["GameConst"].data.game_version);
    }
    _OnClickShakeLong() {
        _LTGame_LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_3__["LTUtils"].Vibrate(true);
    }
    _OnClickShakeShort() {
        _LTGame_LTUtils_LTUtils__WEBPACK_IMPORTED_MODULE_3__["LTUtils"].Vibrate(false);
    }
    _OnClickShare() {
        _LTGame_Platform_ShareManager__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ShareAppMessage(_LTGame_Platform_ShareManager__WEBPACK_IMPORTED_MODULE_0__["default"].instance.GetShareInfo());
    }
    _OnClickMoreGames() {
        let adList = _SDK_LTSDK__WEBPACK_IMPORTED_MODULE_6__["default"].instance.adManager.GetADListByLocationId(0);
        let appidList = [];
        for (let i = 0; i < adList.length && i < 10; ++i) {
            appidList.push(adList[i].ad_appid);
        }
        let appids = [
            "ttce8db83051a7f459",
            "ttfdfc8b4162d6c8ab",
            "ttedfb9b4672d1d8ad",
            "tt4dcb3b76d2e178a7",
        ];
        _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance.OpenGameBox(appids);
    }
    _OnClickDirectJump() {
        let tt = _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_5__["default"].instance['_base'];
        tt['navigateToMiniProgram']({ appId: "ttce8db83051a7f459" });
        // LTPlatform.instance['_base']['navigateToMiniProgram']({ appId: "ttce8db83051a7f459" });
    }
}


/***/ }),

/***/ "./src/script/ui/UI_PerfomanceMediator.ts":
/*!************************************************!*\
  !*** ./src/script/ui/UI_PerfomanceMediator.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_PerfomanceMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _ui_Main_UI_PerfomanceDemo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/Main/UI_PerfomanceDemo */ "./src/ui/Main/UI_PerfomanceDemo.ts");
/* harmony import */ var _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/Res/LTRes */ "./src/LTGame/Res/LTRes.ts");
/* harmony import */ var _common_ResDefine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/ResDefine */ "./src/script/common/ResDefine.ts");
/* harmony import */ var _UI_BoneAnimTestMediator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI_BoneAnimTestMediator */ "./src/script/ui/UI_BoneAnimTestMediator.ts");
/* harmony import */ var _UI_MainMediator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI_MainMediator */ "./src/script/ui/UI_MainMediator.ts");






class UI_PerfomanceMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_PerfomanceMediator();
            this._instance._classDefine = _ui_Main_UI_PerfomanceDemo__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_back.onClick(this, this._OnClickBack);
        this.ui.m_btn_boneAnim.onClick(this, this._OnClickBoneTest);
        _UI_MainMediator__WEBPACK_IMPORTED_MODULE_5__["UI_MainMediator"].instance.Hide();
    }
    _OnClickBack() {
        this.Hide();
        _UI_MainMediator__WEBPACK_IMPORTED_MODULE_5__["UI_MainMediator"].instance.Show();
    }
    _OnClickBoneTest() {
        return __awaiter(this, void 0, void 0, function* () {
            this.Hide();
            _UI_BoneAnimTestMediator__WEBPACK_IMPORTED_MODULE_4__["default"].instance.Show();
        });
    }
    _OnClickTest() {
        return __awaiter(this, void 0, void 0, function* () {
            yield _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_2__["default"].LoadAsync(_common_ResDefine__WEBPACK_IMPORTED_MODULE_3__["default"].FixPath("floor"));
            let loadObj = _LTGame_Res_LTRes__WEBPACK_IMPORTED_MODULE_2__["default"].Get(_common_ResDefine__WEBPACK_IMPORTED_MODULE_3__["default"].FixPath("floor"), true);
            console.log(loadObj);
        });
    }
}


/***/ }),

/***/ "./src/script/ui/UI_RecordDemoMediator.ts":
/*!************************************************!*\
  !*** ./src/script/ui/UI_RecordDemoMediator.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_RecordDemoMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _ui_Main_UI_RecordDemo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/Main/UI_RecordDemo */ "./src/ui/Main/UI_RecordDemo.ts");
/* harmony import */ var _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/Platform/LTPlatform */ "./src/LTGame/Platform/LTPlatform.ts");
/* harmony import */ var _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTGame/UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");




class UI_RecordDemoMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_RecordDemoMediator();
            this._instance._classDefine = _ui_Main_UI_RecordDemo__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_back.onClick(this, this._OnClickBack);
        this.ui.m_btn_share_video.onClick(this, this._OnClickShareRecord);
        this.ui.m_btn_start_record.onClick(this, this._OnClickStartRecord);
        this.ui.m_btn_stop_record.onClick(this, this._OnClickStopRecord);
        this.ui.m_btn_pause_record.onClick(this, this._OnClickPause);
        this.ui.m_btn_resume_record.onClick(this, this._OnClickResume);
        this.ui.m_btn_record_clip.onClick(this, this._OnClickRecordClip);
        this._UpdateUI();
    }
    _UpdateUI() {
        this.ui.m_text_supportrecord.text = "当前平台:" + _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].platformStr
            + (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.recordManager.supportRecord ? "支持视频录制" : "不支持视频录制");
        this.ui.m_text_isrecording.text = "当前录制状态:" + (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.recordManager.isRecording ? "录制中" : "未录制");
        this.ui.m_text_pausestate.text = "录制暂停状态:" + (_LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.recordManager.isPausing ? "暂停中" : "未暂停");
        this.ui.m_text_savepath.text = _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.recordManager.isRecordSuccess ? "视频地址:" + _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.recordManager.videoSavePath
            : "等待录制完成";
    }
    _OnClickStartRecord() {
        _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.recordManager.StartRecord(Laya.Handler.create(null, () => {
            _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].Toast("开始录制视频");
            this._UpdateUI();
        }), Laya.Handler.create(null, () => {
            _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].Toast("录制视频超时结束");
            this._UpdateUI();
        }));
    }
    _OnClickStopRecord() {
        _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.recordManager.StopRecord(Laya.Handler.create(null, () => {
            _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].Toast("停止录制视频");
            this._UpdateUI();
        }));
    }
    _OnClickShareRecord() {
        _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.recordManager.ShareVideo(Laya.Handler.create(null, () => {
            _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].Toast("分享视频成功");
            this._UpdateUI();
        }), Laya.Handler.create(null, () => {
            _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].Toast("取消分享视频");
            this._UpdateUI();
        }), Laya.Handler.create(null, () => {
            _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].Toast("分享视频失败");
            this._UpdateUI();
        }));
    }
    _OnClickPause() {
        _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.recordManager.Pause(Laya.Handler.create(null, () => {
            _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].Toast("暂停录制视频");
            this._UpdateUI();
        }));
    }
    _OnClickResume() {
        _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.recordManager.Resume(Laya.Handler.create(null, () => {
            _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].Toast("恢复录制视频");
            this._UpdateUI();
        }));
    }
    _OnClickRecordClip() {
        _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.recordManager.RecordClip(null);
        _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].Toast("记录精彩时刻");
    }
    _OnClickBack() {
        this.Hide();
        _LTGame_Platform_LTPlatform__WEBPACK_IMPORTED_MODULE_2__["default"].instance.recordManager.StopRecord(null);
    }
}


/***/ }),

/***/ "./src/script/ui/UI_TestMediator.ts":
/*!******************************************!*\
  !*** ./src/script/ui/UI_TestMediator.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_TestMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _ui_Main_UI_Test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/Main/UI_Test */ "./src/ui/Main/UI_Test.ts");


class UI_TestMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_TestMediator();
            this._instance._classDefine = _ui_Main_UI_Test__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this._onCloseAction = this._openParam;
        this.ui.m_btn_back.onClick(this, this._OnClickClose);
    }
    _OnClickClose() {
        var _a;
        this.Hide();
        (_a = this._onCloseAction) === null || _a === void 0 ? void 0 : _a.run();
    }
}


/***/ }),

/***/ "./src/script/ui/UI_TestRTMediator.ts":
/*!********************************************!*\
  !*** ./src/script/ui/UI_TestRTMediator.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_TestRTMediator; });
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _ui_Main_UI_TestRT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/Main/UI_TestRT */ "./src/ui/Main/UI_TestRT.ts");


class UI_TestRTMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_TestRTMediator();
            this._instance._classDefine = _ui_Main_UI_TestRT__WEBPACK_IMPORTED_MODULE_1__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
    }
}


/***/ }),

/***/ "./src/script/ui/UI_UIDemoMediator.ts":
/*!********************************************!*\
  !*** ./src/script/ui/UI_UIDemoMediator.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_UIDemoMediator; });
/* harmony import */ var _LTGame_Async_Awaiters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LTGame/Async/Awaiters */ "./src/LTGame/Async/Awaiters.ts");
/* harmony import */ var _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../LTGame/LTUtils/MathEx */ "./src/LTGame/LTUtils/MathEx.ts");
/* harmony import */ var _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LTGame/UIExt/FGui/BaseUIMediator */ "./src/LTGame/UIExt/FGui/BaseUIMediator.ts");
/* harmony import */ var _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LTGame/UIExt/LTUI */ "./src/LTGame/UIExt/LTUI.ts");
/* harmony import */ var _ui_Main_UI_UIDemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/Main/UI_UIDemo */ "./src/ui/Main/UI_UIDemo.ts");





class UI_UIDemoMediator extends _LTGame_UIExt_FGui_BaseUIMediator__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static get instance() {
        if (this._instance == null) {
            this._instance = new UI_UIDemoMediator();
            this._instance._classDefine = _ui_Main_UI_UIDemo__WEBPACK_IMPORTED_MODULE_4__["default"];
        }
        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_back.onClick(this, this._OnClickBack);
        this.ui.m_btn_toast.onClick(this, this._OnClickToast);
        this.ui.m_btn_load.onClick(this, this._OnClickLoad);
        this.ui.m_btn_fly_cons.onClick(this, this._OnClickFlyCoins);
    }
    _OnClickBack() {
        this.Hide();
    }
    _OnClickToast() {
        _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].Toast("显示通知" + _LTGame_LTUtils_MathEx__WEBPACK_IMPORTED_MODULE_1__["default"].RandomInt(100, 500));
    }
    _OnClickFlyCoins() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("开始飞金币");
            yield _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].FlyCoinsTo(this.ui.m_btn_fly_cons, this.ui.m_title);
            console.log("飞金币结束,你可以在这里做金币接收动画");
        });
    }
    _OnClickLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].ShowLoading("展示5秒加载...");
            yield _LTGame_Async_Awaiters__WEBPACK_IMPORTED_MODULE_0__["default"].Seconds(5);
            _LTGame_UIExt_LTUI__WEBPACK_IMPORTED_MODULE_3__["default"].HideLoading();
        });
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
        this.m_text_logo = (this.getChildAt(2));
        this.m_text_progress = (this.getChildAt(3));
        this.m_text_laya = (this.getChildAt(4));
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
/* harmony import */ var _UI_CommonUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI_CommonUI */ "./src/ui/Main/UI_CommonUI.ts");
/* harmony import */ var _UI_ADDemo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI_ADDemo */ "./src/ui/Main/UI_ADDemo.ts");
/* harmony import */ var _UI_UIDemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI_UIDemo */ "./src/ui/Main/UI_UIDemo.ts");
/* harmony import */ var _UI_TestRT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI_TestRT */ "./src/ui/Main/UI_TestRT.ts");
/* harmony import */ var _UI_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI_Main */ "./src/ui/Main/UI_Main.ts");
/* harmony import */ var _UI_PerfomanceDemo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI_PerfomanceDemo */ "./src/ui/Main/UI_PerfomanceDemo.ts");
/* harmony import */ var _UI_BoneAnimTest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UI_BoneAnimTest */ "./src/ui/Main/UI_BoneAnimTest.ts");
/* harmony import */ var _UI_NativeDemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UI_NativeDemo */ "./src/ui/Main/UI_NativeDemo.ts");
/* harmony import */ var _UI_MoudleDemo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UI_MoudleDemo */ "./src/ui/Main/UI_MoudleDemo.ts");
/* harmony import */ var _UI_CommonUI2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UI_CommonUI2 */ "./src/ui/Main/UI_CommonUI2.ts");
/* harmony import */ var _UI_RecordDemo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./UI_RecordDemo */ "./src/ui/Main/UI_RecordDemo.ts");
/* harmony import */ var _UI_Others__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./UI_Others */ "./src/ui/Main/UI_Others.ts");
/* harmony import */ var _UI_FunctionTest__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./UI_FunctionTest */ "./src/ui/Main/UI_FunctionTest.ts");
/* harmony import */ var _UI_Test__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./UI_Test */ "./src/ui/Main/UI_Test.ts");
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/














class MainBinder {
    static bindAll() {
        fgui.UIObjectFactory.setExtension(_UI_CommonUI__WEBPACK_IMPORTED_MODULE_0__["default"].URL, _UI_CommonUI__WEBPACK_IMPORTED_MODULE_0__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_ADDemo__WEBPACK_IMPORTED_MODULE_1__["default"].URL, _UI_ADDemo__WEBPACK_IMPORTED_MODULE_1__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_UIDemo__WEBPACK_IMPORTED_MODULE_2__["default"].URL, _UI_UIDemo__WEBPACK_IMPORTED_MODULE_2__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_TestRT__WEBPACK_IMPORTED_MODULE_3__["default"].URL, _UI_TestRT__WEBPACK_IMPORTED_MODULE_3__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_Main__WEBPACK_IMPORTED_MODULE_4__["default"].URL, _UI_Main__WEBPACK_IMPORTED_MODULE_4__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_PerfomanceDemo__WEBPACK_IMPORTED_MODULE_5__["default"].URL, _UI_PerfomanceDemo__WEBPACK_IMPORTED_MODULE_5__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_BoneAnimTest__WEBPACK_IMPORTED_MODULE_6__["default"].URL, _UI_BoneAnimTest__WEBPACK_IMPORTED_MODULE_6__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_NativeDemo__WEBPACK_IMPORTED_MODULE_7__["default"].URL, _UI_NativeDemo__WEBPACK_IMPORTED_MODULE_7__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_MoudleDemo__WEBPACK_IMPORTED_MODULE_8__["default"].URL, _UI_MoudleDemo__WEBPACK_IMPORTED_MODULE_8__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_CommonUI2__WEBPACK_IMPORTED_MODULE_9__["default"].URL, _UI_CommonUI2__WEBPACK_IMPORTED_MODULE_9__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_RecordDemo__WEBPACK_IMPORTED_MODULE_10__["default"].URL, _UI_RecordDemo__WEBPACK_IMPORTED_MODULE_10__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_Others__WEBPACK_IMPORTED_MODULE_11__["default"].URL, _UI_Others__WEBPACK_IMPORTED_MODULE_11__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_FunctionTest__WEBPACK_IMPORTED_MODULE_12__["default"].URL, _UI_FunctionTest__WEBPACK_IMPORTED_MODULE_12__["default"]);
        fgui.UIObjectFactory.setExtension(_UI_Test__WEBPACK_IMPORTED_MODULE_13__["default"].URL, _UI_Test__WEBPACK_IMPORTED_MODULE_13__["default"]);
    }
}


/***/ }),

/***/ "./src/ui/Main/UI_ADDemo.ts":
/*!**********************************!*\
  !*** ./src/ui/Main/UI_ADDemo.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_ADDemo; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_ADDemo extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("Main", "ADDemo"));
    }
    onConstruct() {
        this.m_title = (this.getChildAt(1));
        this.m_btn_back = (this.getChildAt(2));
        this.m_btn_show_banner = (this.getChildAt(3));
        this.m_btn_hide_banner = (this.getChildAt(4));
        this.m_btn_rewardvideo = (this.getChildAt(5));
        this.m_btn_intvideo = (this.getChildAt(6));
        this.m_btn_moregame = (this.getChildAt(7));
        this.m_btn_hotgame = (this.getChildAt(8));
        this.m_btn_native = (this.getChildAt(9));
    }
}
UI_ADDemo.URL = "ui://kk7g5mmmgxfzb";


/***/ }),

/***/ "./src/ui/Main/UI_BoneAnimTest.ts":
/*!****************************************!*\
  !*** ./src/ui/Main/UI_BoneAnimTest.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_BoneAnimTest; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_BoneAnimTest extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("Main", "BoneAnimTest"));
    }
    onConstruct() {
        this.m_btn_back = (this.getChildAt(0));
        this.m_text_input = (this.getChildAt(1));
        this.m_btn_add = (this.getChildAt(3));
        this.m_text_total = (this.getChildAt(4));
    }
}
UI_BoneAnimTest.URL = "ui://kk7g5mmmmzx7i";


/***/ }),

/***/ "./src/ui/Main/UI_CommonUI.ts":
/*!************************************!*\
  !*** ./src/ui/Main/UI_CommonUI.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_CommonUI; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_CommonUI extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("Main", "CommonUI"));
    }
    onConstruct() {
        this.m_title = (this.getChildAt(1));
        this.m_btn_back = (this.getChildAt(2));
        this.m_btn_sign = (this.getChildAt(3));
        this.m_btn_endshare = (this.getChildAt(4));
        this.m_btn_endreward = (this.getChildAt(5));
        this.m_btn_endlose = (this.getChildAt(6));
        this.m_btn_tryskin = (this.getChildAt(7));
        this.m_btn_set = (this.getChildAt(8));
        this.m_btn_roll = (this.getChildAt(9));
        this.m_btn_onemore = (this.getChildAt(10));
        this.m_btn_moudle = (this.getChildAt(11));
        this.m_btn_offline = (this.getChildAt(12));
        this.m_btn_unlockprogress = (this.getChildAt(13));
        this.m_btn_exskin = (this.getChildAt(14));
        this.m_btn_bonus = (this.getChildAt(15));
    }
}
UI_CommonUI.URL = "ui://kk7g5mmmfkl1g";


/***/ }),

/***/ "./src/ui/Main/UI_CommonUI2.ts":
/*!*************************************!*\
  !*** ./src/ui/Main/UI_CommonUI2.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_CommonUI2; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_CommonUI2 extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("Main", "CommonUI2"));
    }
    onConstruct() {
        this.m_title = (this.getChildAt(1));
        this.m_btn_back = (this.getChildAt(2));
        this.m_list_btns = (this.getChildAt(3));
    }
}
UI_CommonUI2.URL = "ui://kk7g5mmmtsm1o";


/***/ }),

/***/ "./src/ui/Main/UI_FunctionTest.ts":
/*!****************************************!*\
  !*** ./src/ui/Main/UI_FunctionTest.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_FunctionTest; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_FunctionTest extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("Main", "FunctionTest"));
    }
    onConstruct() {
        this.m_btn_back = (this.getChildAt(1));
        this.m_list_btns = (this.getChildAt(2));
    }
}
UI_FunctionTest.URL = "ui://kk7g5mmmyllkk";


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
        this.m_btn_ad = (this.getChildAt(2));
        this.m_btn_ui = (this.getChildAt(3));
        this.m_btn_record = (this.getChildAt(4));
        this.m_btn_others = (this.getChildAt(5));
        this.m_btn_common = (this.getChildAt(6));
        this.m_btn_performance = (this.getChildAt(7));
        this.m_btn_feature = (this.getChildAt(8));
        this.m_btn_common2 = (this.getChildAt(9));
    }
}
UI_Main.URL = "ui://kk7g5mmmjhmq1";


/***/ }),

/***/ "./src/ui/Main/UI_MoudleDemo.ts":
/*!**************************************!*\
  !*** ./src/ui/Main/UI_MoudleDemo.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_MoudleDemo; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_MoudleDemo extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("Main", "MoudleDemo"));
    }
    onConstruct() {
        this.m___othergames = (this.getChildAt(1));
        this.m___hotgame = (this.getChildAt(2));
        this.m___sidegames = (this.getChildAt(3));
        this.m___endSG = (this.getChildAt(4));
        this.m___bottomgames = (this.getChildAt(5));
        this.m_btn_back = (this.getChildAt(6));
        this.m___wxSG = (this.getChildAt(7));
    }
}
UI_MoudleDemo.URL = "ui://kk7g5mmmsgapj";


/***/ }),

/***/ "./src/ui/Main/UI_NativeDemo.ts":
/*!**************************************!*\
  !*** ./src/ui/Main/UI_NativeDemo.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_NativeDemo; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_NativeDemo extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("Main", "NativeDemo"));
    }
    onConstruct() {
        this.m___nativeinpage = (this.getChildAt(1));
        this.m_btn_back = (this.getChildAt(2));
    }
}
UI_NativeDemo.URL = "ui://kk7g5mmmn4aun";


/***/ }),

/***/ "./src/ui/Main/UI_Others.ts":
/*!**********************************!*\
  !*** ./src/ui/Main/UI_Others.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_Others; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_Others extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("Main", "Others"));
    }
    onConstruct() {
        this.m_title = (this.getChildAt(1));
        this.m_btn_back = (this.getChildAt(2));
        this.m_btn_share = (this.getChildAt(3));
        this.m_btn_othergame = (this.getChildAt(4));
        this.m_btn_const = (this.getChildAt(5));
        this.m_btn_shake_long = (this.getChildAt(6));
        this.m_btn_shake_short = (this.getChildAt(7));
        this.m_btn_jump = (this.getChildAt(8));
        this.m_btn_shake_playmusic = (this.getChildAt(9));
        this.m_btn_shake_stopmusic = (this.getChildAt(10));
        this.m_btn_shake_playshort = (this.getChildAt(11));
    }
}
UI_Others.URL = "ui://kk7g5mmmx62bf";


/***/ }),

/***/ "./src/ui/Main/UI_PerfomanceDemo.ts":
/*!******************************************!*\
  !*** ./src/ui/Main/UI_PerfomanceDemo.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_PerfomanceDemo; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_PerfomanceDemo extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("Main", "PerfomanceDemo"));
    }
    onConstruct() {
        this.m_title = (this.getChildAt(1));
        this.m_btn_boneAnim = (this.getChildAt(2));
        this.m_btn_back = (this.getChildAt(3));
    }
}
UI_PerfomanceDemo.URL = "ui://kk7g5mmmmzx7h";


/***/ }),

/***/ "./src/ui/Main/UI_RecordDemo.ts":
/*!**************************************!*\
  !*** ./src/ui/Main/UI_RecordDemo.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_RecordDemo; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_RecordDemo extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("Main", "RecordDemo"));
    }
    onConstruct() {
        this.m_title = (this.getChildAt(1));
        this.m_btn_back = (this.getChildAt(2));
        this.m_btn_start_record = (this.getChildAt(3));
        this.m_btn_stop_record = (this.getChildAt(4));
        this.m_btn_pause_record = (this.getChildAt(5));
        this.m_btn_resume_record = (this.getChildAt(6));
        this.m_btn_record_clip = (this.getChildAt(7));
        this.m_text_supportrecord = (this.getChildAt(9));
        this.m_text_isrecording = (this.getChildAt(10));
        this.m_text_pausestate = (this.getChildAt(11));
        this.m_text_savepath = (this.getChildAt(12));
        this.m_btn_share_video = (this.getChildAt(13));
    }
}
UI_RecordDemo.URL = "ui://kk7g5mmmx62be";


/***/ }),

/***/ "./src/ui/Main/UI_Test.ts":
/*!********************************!*\
  !*** ./src/ui/Main/UI_Test.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_Test; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_Test extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("Main", "Test"));
    }
    onConstruct() {
        this.m_img_bg = (this.getChildAt(0));
        this.m_btn_back = (this.getChildAt(1));
        this.m_text_notice = (this.getChildAt(2));
    }
}
UI_Test.URL = "ui://kk7g5mmmyllkl";


/***/ }),

/***/ "./src/ui/Main/UI_TestRT.ts":
/*!**********************************!*\
  !*** ./src/ui/Main/UI_TestRT.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_TestRT; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_TestRT extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("Main", "TestRT"));
    }
    onConstruct() {
        this.m_img_display = (this.getChildAt(0));
        this.m_btn_back = (this.getChildAt(1));
    }
}
UI_TestRT.URL = "ui://kk7g5mmmhlhem";


/***/ }),

/***/ "./src/ui/Main/UI_UIDemo.ts":
/*!**********************************!*\
  !*** ./src/ui/Main/UI_UIDemo.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UI_UIDemo; });
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
class UI_UIDemo extends fgui.GComponent {
    constructor() {
        super();
    }
    static createInstance() {
        return (fgui.UIPackage.createObject("Main", "UIDemo"));
    }
    onConstruct() {
        this.m_title = (this.getChildAt(1));
        this.m_btn_back = (this.getChildAt(2));
        this.m_btn_toast = (this.getChildAt(3));
        this.m_btn_load = (this.getChildAt(4));
        this.m_btn_fly_cons = (this.getChildAt(5));
    }
}
UI_UIDemo.URL = "ui://kk7g5mmmgxfzd";


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map