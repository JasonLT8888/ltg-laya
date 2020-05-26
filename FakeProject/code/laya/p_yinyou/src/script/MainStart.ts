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
    /**云控版本 A B 版本轮换（1.0.0 1.0.1） 一个为线上版本 领一个为审核版本，提审时 两个版本轮换使用 */
    private _gameVersion = "1.0.0";
    /**资源版本 */
    private _resVersion = "0515";
    /**项目名 */
    private _gameName = "p_ltg";

    _HandleInitPlatform(ePlatform: EPlatformType, platformData: LTPlatformData) {
        switch (ePlatform) {
            case EPlatformType.Web:
                console.log("web平台,默认框架测试数据");
                this._gameVersion = '1.0.0';//1.0.1 为全策略模式 
                this._appId = '88888888';
                break;
            case EPlatformType.TT:
                this._gameVersion = "v0.0.1";
                this._resVersion = 'v0.0.1';
                platformData.appId = "ttbe90c82d21ba845b";
                platformData.bannerId = "1bhbt9cjpr9a35bd30";
                platformData.rewardVideoId = "6tnnb4e3em519ja6d2";
                platformData.interstitialId = "8oe7qjl1pon2g930jf";
                LTRespackManager.instance.SetRemoteUrl(`https://hs.yz061.com/res/down/public/${this._gameName}/${this._resVersion}_tt/`);
                break;
            case EPlatformType.WX:
                this._gameVersion = "v0.0.1";
                this._resVersion = 'v0.0.1';
                platformData.appId = "wx7bcca975ff17ebe9";
                platformData.bannerId = "adunit-11a2571806b5fc5c";
                platformData.rewardVideoId = "adunit-fa6dd5b431c41ceb";
                platformData.interstitialId = "adunit-abe9d252f3a3956c";
                LTRespackManager.instance.SetRemoteUrl(`https://hs.yz061.com/res/down/public/${this._gameName}/${this._resVersion}_wx/`);
                break;
            case EPlatformType.Oppo:
                this._gameVersion = "v0.0.1";
                this._resVersion = 'v0.0.1';
                platformData.appId = "30260170";
                platformData.bannerId = "174341";
                platformData.interstitialId = "174344";
                platformData.rewardVideoId = "174349";
                platformData.nativeId = "174348";
                platformData.nativeBannerIds = ["178853"];
                platformData.nativeinterstitialIds = ["178854"];
                platformData.nativeIconIds = ["178855"];
                LTRespackManager.instance.SetRemoteUrl(`https://hs.yz061.com/res/down/public/${this._gameName}/${this._resVersion}_oppo/`);
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
            case EPlatformType.WX:
                LTSDK.CreateInstace(SDK_YQ, this._gameName, this._gameVersion, this._appId);
                break;
            case EPlatformType.Oppo:
            case EPlatformType.TT:
            default:
                LTSDK.CreateInstace(SDK_CQ, this._gameName, this._gameVersion, this._appId);
                break;
        }
    }

    _InitFsm() {
        this._fsm.Add(new SplashScene());
        this._fsm.Add(new MainScene());
    }

}