import { LTStart } from "../LTGame/Start/LTStart";
import SplashScene from "./scene/SplashScene";
import MainScene from "./scene/MainScene";
import { EPlatformType } from "../LTGame/Platform/EPlatformType";
import LTPlatformData from "../LTGame/Platform/Data/LTPlatformData";
import LTPlatform from "../LTGame/Platform/LTPlatform";
import LTRespackManager from "../LTGame/Res/LTRespackManager";
import LTSDK from "../SDK/LTSDK";
import SDK_CQ from "../SDK/Impl/SDK_CQ";

export default class MainStart extends LTStart {

    constructor() {
        super();
        this.enableStat = true;
    }

    private _appId: string = "ttbe90c82d21ba845b";

    _HandleInitPlatform(ePlatform: EPlatformType, platformData: LTPlatformData) {
        let version = "v0.0.1";
        switch (ePlatform) {
            case EPlatformType.Web:
                console.log("web平台,不做任何处理");
                break;
            case EPlatformType.TT:
                this._appId = "ttbe90c82d21ba845b";
                platformData.interstitialId = "1mdxrmurdy34bi2hql";
                platformData.bannerId = "1bhbt9cjpr9a35bd30";
                platformData.rewardVideoId = "6tnnb4e3em519ja6d2";
                LTRespackManager.instance.SetRemoteUrl("https://hs.yz061.com/res/down/public/p_yinyou/" + version + "_tt/");
                break;
            default:
                console.error("未处理平台内容", LTPlatform.platformStr, "请在MainStart中添加处理");
                break;
        }
    }

    _HandleSDK() {
        LTSDK.CreateInstace(SDK_CQ, "ltg", "1.0.0", this._appId);
    }

    _InitFsm() {
        this._fsm.Add(new SplashScene());
        this._fsm.Add(new MainScene());
    }

}