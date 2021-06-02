import DefaultPlatform from "../../DefaultPlatform";
import { EPlatformType } from "../../EPlatformType";
import LTPlatformData from "../../Data/LTPlatformData";
import LTPlatform from "../../LTPlatform";
import LTUI from "../../../UIExt/LTUI";

export class NativeIOSPlatform extends DefaultPlatform {

    platform: EPlatformType = EPlatformType.Native_IOS;

    useWAV = true;

    isSupportJumpOther: boolean = false;

    private _isDebug: boolean = false;

    Init(platformData: LTPlatformData) {
        this.platformData = platformData;

        let conchConfig = window['conchConfig'];
        let PlatformClass = window['PlatformClass'];
        let os = conchConfig.getOS();
        if (os == "Conch-ios") {
            this.base = PlatformClass.createClass("JSBridge");//创建脚本代理
        }
        console.log("平台初始化完成", LTPlatform.platformStr, this);
        this._InitSystemInfo();
        if (this._isDebug) {
            console.log("js 调用 InitAppId");
        }
        // this.base.call("InitAppId", platformData.appId);
    }

    protected _InitSystemInfo() {
        try {
            this.safeArea = {} as LTGame.SafeArea;
            this.safeArea.left = 0;
            this.safeArea.right = 0;
            this.safeArea.bottom = 0;
            this.safeArea.top = 0;
            this.safeArea.width = 750;
            this.safeArea.height = 1334;
            console.log("初始化安全区域完成");
        } catch (e) {
            console.error(e);
            console.error("获取设备信息失败,执行默认初始化");
            this.safeArea = null;
        }
    }

    ShowBannerAd() {
        if (this._isDebug) {
            console.log("js 调用 ShowBannerAd");
        }
        this._AsyncBack("ShowBannerAd", null);
    }

    HideBannerAd() {
        if (this._isDebug) {
            console.log("js 调用 HideBannerAd");
        }
        this._AsyncBack("HideBannerAd", null);
    }

    ShowRewardVideoAd(onSuccess: Laya.Handler, onSkipped: Laya.Handler, onFailed: Laya.Handler) {
        if (this._isDebug) {
            console.log("js 调用 ShowRewardVideoAd");
        }
        LTUI.ShowLoading("广告加载中");
        let isSuccessed: boolean = true;
        this._AsyncBack("ShowRewardVideoAd",
            (value: string) => {
                LTUI.HideLoading();
                if (this._isDebug) {
                    console.log("二次转接" + value);
                }
                switch (value) {
                    case "Failed":
                        onFailed?.run();
                        break;
                    case "Close":
                        if (isSuccessed) {
                            onSuccess?.run();
                        } else {
                            onSkipped?.run();
                        }
                        break;
                    case "Skip":
                        isSuccessed = true;
                        break;
                    case "Success":
                        isSuccessed = true;
                        break;
                }
            });

    }

    _AsyncBack(msg: string, action: Function) {
        this.base.callWithBack(
            function (value: string) {
                if (this._isDebug) {
                    console.log("接收到OC消息", value);
                }
                action(value);
            }, "_AsyncBack:", msg
        );
    }

    ShowInterstitalAd() {
        if (this._isDebug) {
            console.log("js 调用 ShowInterstitalAd");
        }
        this._AsyncBack("ShowIntersital", null);
    }

    RecordEvent(eventId: string, param: object) {
        let paramStr = "";
        if (param != null) {
            paramStr = JSON.stringify(param);
        }
        if (this._isDebug) {
            console.log("js 调用 RecordEvent");
        }
        this.base.call("RecordEvent:", eventId + "|" + paramStr);
    }

    ShowFullScreenAd() {
        if (this._isDebug) {
            console.log("js 调用 ShowFullScreen");
        }
        this._AsyncBack("ShowFullScreen", null);
    }

}