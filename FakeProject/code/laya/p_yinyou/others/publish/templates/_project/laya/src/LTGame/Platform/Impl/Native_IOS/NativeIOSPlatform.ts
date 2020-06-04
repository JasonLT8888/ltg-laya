import DefaultPlatform from "../../DefaultPlatform";
import { EPlatformType } from "../../EPlatformType";
import LTPlatformData from "../../Data/LTPlatformData";
import LTPlatform from "../../LTPlatform";

export class NativeIOSPlatform extends DefaultPlatform {

    platform: EPlatformType = EPlatformType.Native_IOS;

    isSupportJumpOther: boolean = false;

    private _isDebug: boolean = true;;

    Init(platformData: LTPlatformData) {
        this.platformData = platformData;

        let conchConfig = window['conchConfig'];
        let PlatformClass = window['PlatformClass'];
        let os = conchConfig.getOS();
        if (os == "Conch-ios") {
            this.base = PlatformClass.createClass("JSBridge");//创建脚步代理
        }
        console.log("平台初始化完成", LTPlatform.platformStr, this);

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

    ShowRewardVideoAd(onSuccess: Laya.Handler, onSkipped: Laya.Handler) {
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

    RecordEvent(eventId: string, param: object) {
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