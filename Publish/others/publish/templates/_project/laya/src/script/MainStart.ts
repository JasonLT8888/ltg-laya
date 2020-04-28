import { LTStart } from "../LTGame/Start/LTStart";
import SplashScene from "./scene/SplashScene";
import MainScene from "./scene/MainScene";
import { EPlatformType } from "../LTGame/Platform/EPlatformType";
import LTPlatformData from "../LTGame/Platform/Data/LTPlatformData";
import LTPlatform from "../LTGame/Platform/LTPlatform";
import LTRespackManager from "../LTGame/Res/LTRespackManager";
import LTSDK from "../SDK/LTSDK";
import SDK_CQ from "../SDK/Impl/SDK_CQ";
import SDK_YQ from "../SDK/Impl/SDK_YQ";

export default class MainStart extends LTStart {

    constructor() {
        super();
        // this.enableStat = true;
    }

    private _appId: string = "ttbe90c82d21ba845b";
    _HandleInitPlatform(ePlatform: EPlatformType, platformData: LTPlatformData) {
        let version = "v0.0.1";
        switch (ePlatform) {
            case EPlatformType.Web:
                console.log("web平台,不做任何处理");
                break;
            case EPlatformType.TT:
                platformData.bannerId = "1bhbt9cjpr9a35bd30";
                platformData.rewardVideoId = "6tnnb4e3em519ja6d2";
                platformData.interstitialId = "8oe7qjl1pon2g930jf";
                platformData.appId = "ttbe90c82d21ba845b";
                version = "v0.0.1"
                LTRespackManager.instance.SetRemoteUrl("https://hs.yz061.com/res/down/public/p_ltg/" + version + "_tt/");
                break;
            case EPlatformType.WX:
                platformData.bannerId = "adunit-11a2571806b5fc5c";
                platformData.rewardVideoId = "adunit-fa6dd5b431c41ceb";
                platformData.interstitialId = "adunit-abe9d252f3a3956c";
                platformData.appId = "wx7bcca975ff17ebe9";
                version = "v0.0.1"
                LTRespackManager.instance.SetRemoteUrl("https://hs.yz061.com/res/down/public/p_ltg/" + version + "_wx/");
                break;
            case EPlatformType.Oppo:
                platformData.bannerId = "172417";
                platformData.rewardVideoId = "172442";
                platformData.interstitialId = "172441";
                platformData.nativeId = "172848";
                platformData.appId = "30258214";
                version = "v0.0.1"
                LTRespackManager.instance.SetRemoteUrl("https://hs.yz061.com/res/down/public/p_ltg/" + version + "_tt/");
                break;
            default:
                console.error("未处理平台内容", LTPlatform.platformStr, "请在MainStart中添加处理");
                break;
        }
        if (platformData.appId) {
            this._appId = platformData.appId;
        }
    }

    _HandleSDK() {
        switch (LTPlatform.instance.platform) {
            case EPlatformType.Oppo:
                LTSDK.CreateInstace(SDK_CQ, "ltg", "1.0.0", this._appId);
                break;
            case EPlatformType.WX:
                LTSDK.CreateInstace(SDK_YQ, "ltg", "1.0.0", this._appId);
                break;
            case EPlatformType.TT:
            default:
                LTSDK.CreateInstace(SDK_CQ, "ltg", "1.0.0", this._appId);
                break;
        }
    }

    _InitFsm() {
        this._fsm.Add(new SplashScene());
        this._fsm.Add(new MainScene());
    }

}