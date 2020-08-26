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

export default class MainStart extends LTStart {

    constructor() {
        super();
        // this.enableStat = true;
    }

    private _appId: string = "ttbe90c82d21ba845b";
    /**SDK云控版本名 */
    private _gameVersion = "1.0.0";
    /**资源版本 */
    private _resVersion = "0515";
    /**项目名 */
    private _gameName = "p_ltg";

    _HandleInitPlatform(ePlatform: EPlatformType, platformData: LTPlatformData) {
        switch (ePlatform) {
            case EPlatformType.Web:
                console.log("web平台,默认框架测试数据");
                this._gameVersion = '1.0.1';//1.0.1 为全策略模式 
                platformData.appId = "11111111111"//'88888888';
                platformData.appKey = '11111111111';
                break;
            case EPlatformType.TT:
                this._gameVersion = "v0.0.2";
                this._resVersion = 'v0.0.2';
                platformData.appId = "ttd60ba0b64931e10f";
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
                this._gameVersion = "1.0.2";
                this._resVersion = "0710";
                platformData.appId = "30302891";
                platformData.appKey = "6fyGQ6x2pzk8W84c0s04ows00";
                platformData.bannerId = "195984";
                platformData.rewardVideoId = "195985";
                platformData.nativeBannerIds = ['195994', '195995', '195998'];
                platformData.nativeIconIds = ['195986', '196003'];
                platformData.nativeinpageIds = ['195999', '196002', '196003'];
                LTRespackManager.instance.SetRemoteUrl(`https://hs.yz061.com/res/down/public/${this._gameName}/${this._resVersion}_oppo/`);
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
                LTRespackManager.instance.SetRemoteUrl(`https://hs.yz061.com/res/down/public/${this._gameName}/vivo_${this._resVersion}/`);
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
                // case EPlatformType.Web:
                LTSDK.CreateInstace(SDK_YQ, 'yfct', this._gameVersion, this._appId);//
                break;
            // LTSDK.CreateInstace(SDK_Default, this._gameName, this._gameVersion, this._appId);
            // break;
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