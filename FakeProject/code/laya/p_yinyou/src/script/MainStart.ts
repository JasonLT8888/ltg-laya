import LTPlatformData from "../LTGame/Platform/Data/LTPlatformData";
import { EPlatformType } from "../LTGame/Platform/EPlatformType";
import LTPlatform from "../LTGame/Platform/LTPlatform";
import LTRespackManager from "../LTGame/Res/LTRespackManager";
import { LTStart } from "../LTGame/Start/LTStart";
import SDK_CQ from "../SDK/Impl/SDK_CQ";
import SDK_YQ from "../SDK/Impl/SDK_YQ";
import LTSDK from "../SDK/LTSDK";
import MainScene from "./scene/MainScene";
import SplashScene from "./scene/SplashScene";
import SDK_Default from "../SDK/Impl/SDK_Default";

export default class MainStart extends LTStart {

    constructor() {
        super();
        this.enableStat = true;
    }

    private _appId: string = "";
    /**SDK云控版本名 */
    private _gameVersion = "1.0.0";
    /**资源版本 */
    private _resVersion = "0515";
    /**项目名 */
    private _gameName = "p_ltg";

    _HandleInitPlatform(ePlatform: EPlatformType, platformData: LTPlatformData) {
        window["__GM"] = false;

        switch (ePlatform) {
            case EPlatformType.Web:
                console.log("web平台,默认框架测试数据");
                this._gameVersion = '0.0.1';//1.0.1 为全策略模式 
                platformData.appId = "wx149cdd1b3b19378f"//'88888888';
                platformData.appKey = '11111111111';
                break;
            case EPlatformType.TT:
                this._gameVersion = "0.0.1";
                this._resVersion = '0.0.1';
                platformData.appId = "tt738a0537eca00dfd";
                platformData.bannerId = "1bhbt9cjpr9a35bd30";
                platformData.rewardVideoId = "6tnnb4e3em519ja6d2";
                platformData.interstitialId = "8oe7qjl1pon2g930jf";
                LTRespackManager.instance.SetRemoteUrl(`https://file.gugudang.com/res/down/public/${this._gameName}/${this._resVersion}_tt/`);
                break;
            case EPlatformType.WX:
                this._gameVersion = "v0.0.1";
                this._resVersion = 'v0.0.1';
                platformData.appId = "wx7bcca975ff17ebe9";
                platformData.bannerId = "adunit-11a2571806b5fc5c";
                platformData.rewardVideoId = "adunit-fa6dd5b431c41ceb";
                platformData.interstitialId = "adunit-abe9d252f3a3956c";
                LTRespackManager.instance.SetRemoteUrl(`https://file.gugudang.com/res/down/public/${this._gameName}/${this._resVersion}_wx/`);
                break;
            case EPlatformType.Oppo:
                this._gameVersion = "0.1.2";
                this._resVersion = "0710";
                platformData.appId = "30484329";
                platformData.appKey = "3u674KJ5lkqoc8gGsGOwO0kgo";
                platformData.bannerId = "300972";
                platformData.rewardVideoId = "300976";
                platformData.gameBoxAdId = "314625";
                platformData.nativeinpageIds = ['300974'];
                LTRespackManager.instance.SetRemoteUrl(`https://file.gugudang.com/res/down/public/${this._gameName}/${this._resVersion}_oppo/`);
                break;
            case EPlatformType.Vivo:
                this._gameVersion = "1.0.0";
                this._resVersion = "0723";
                platformData.appId = "100006589";
                platformData.appKey = "100006589";// "4593206c07a95b1edf85";
                platformData.bannerId = "792dc45d716346679aed674122b687c4";
                platformData.rewardVideoId = "6f7ac05280f94772900d65f30b89b218";
                platformData.interstitialId = "5c199af4a8244a3991a22c9debe32ca9";
                platformData.nativeBannerIds = ['699d13284f5e4c769d59ba7ef2f4aa05', '9703bd90cbf74014853971a55cac7fe6'];
                platformData.nativeIconIds = ['91686cf4a42a4144b884f8843d947727', 'd987f0a85f724700aa098631c751ca7e'];
                platformData.nativeinpageIds = ['b82fb9b9d97d4a5c8281a943d41ea0aa', '4de349a96b6a432bb1b2f215493f1b07'];
                LTRespackManager.instance.SetRemoteUrl(`https://file.gugudang.com/res/down/public/${this._gameName}/vivo_${this._resVersion}/`);
                break;
            case EPlatformType.KS:
                this._gameVersion = "1.0.1";
                this._resVersion = "1.0.1";
                platformData.appId = "ks667940122780561072";
                platformData.rewardVideoId = "2300000737_01";
                LTRespackManager.instance.SetRemoteUrl(`https://file.gugudang.com/res/down/public/${this._gameName}/ks_${this._resVersion}/`);
                break;
            case EPlatformType.HW:
                this._gameVersion = "1.0.0";
                this._resVersion = "0723";
                platformData.appId = "104360501";
                platformData.appKey = "104360501";// "4593206c07a95b1edf85";
                //测试广告位
                platformData.bannerId = "j1pcnpx5tu";
                platformData.rewardVideoId = "e7hm5vx799";
                platformData.interstitialId = "testb4znbuh3n2";
                platformData.nativeinpageIds = ['u7m3hc4gvm'];
                // platformData.bannerId = "a3wlkri5qz";
                // platformData.rewardVideoId = "h2iup7j2ec ";
                // platformData.interstitialId = "c7xzj23ghu"; 
                // platformData.nativeinpageIds = ['u79peou9cx'];
                LTRespackManager.instance.SetRemoteUrl(`https://file.gugudang.com/res/down/public/${this._gameName}/vivo_${this._resVersion}/`);

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
            case EPlatformType.Native_IOS:
                LTSDK.CreateInstace(SDK_Default, this._gameName, this._gameVersion, this._appId);
                break;
            default:
                LTSDK.CreateInstace(SDK_CQ, this._gameName, this._gameVersion, this._appId);//
                break;
        }
    }

    _InitFsm() {
        this._fsm.Add(new SplashScene());
        this._fsm.Add(new MainScene());
    }

}