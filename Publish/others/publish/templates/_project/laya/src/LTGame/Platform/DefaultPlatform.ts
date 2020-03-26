import IPlatform from "./IPlatform";
import { EPlatformType } from "./EPlatformType";
import LTPlatformData from "./Data/LTPlatformData";
import { ShareInfo } from "./ShareInfo";
import LTPlatform from "./LTPlatform";
import UI_FakeBannerVMediator from "../UIExt/DefaultUI/UI_FakeBannerVMediator";
import UI_FakeRewardADMediator from "../UIExt/DefaultUI/UI_FakeRewardADMediator";
import UI_FakeInterstitalMediator from "../UIExt/DefaultUI/UI_FakeInterstitalMediator";
import IRecordManager from "./IRecordManager";
import DefaultRecordManager from "./DefaultRecordManager";
import LTUI from "../UIExt/LTUI";

export default class DefaultPlatform implements IPlatform {

    onPause: Laya.Handler;

    appId: string;
    platform: EPlatformType = EPlatformType.Web;
    safeArea: LTGame.SafeArea = null;
    lauchOption: LTGame.LaunchOption;
    loginState: LTGame.LoginState;
    onLoginEnd: Laya.Handler;
    onResume: Laya.Handler;
    recordManager: IRecordManager = new DefaultRecordManager();

    Init(platformData: LTPlatformData) {
        this.loginState = {
            isLogin: false,
            code: null
        };
        Laya.timer.once(500, this, this._FakeLoginEnd);
    }
    private _FakeLoginEnd() {
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
        UI_FakeBannerVMediator.instance.Show();
    }
    HideBannerAd() {
        console.log("调用HideBannerAd");
        UI_FakeBannerVMediator.instance.Hide();
    }
    ShowRewardVideoAd(onSuccess: Laya.Handler, onSkipped: Laya.Handler) {
        console.log("调用ShowRewardVideoAd");
        UI_FakeRewardADMediator.instance.Show([onSuccess, onSkipped]);
    }
    ShowRewardVideoAdAsync(): Promise<boolean> {
        return new Promise(function (resolve) {
            LTPlatform.instance.ShowRewardVideoAd(Laya.Handler.create(this, () => {
                resolve(true);
            }), Laya.Handler.create(this, () => {
                resolve(false);
            }));
        });
    }
    ShowInterstitalAd() {
        console.log("调用ShowInterstitalAd");
        UI_FakeInterstitalMediator.instance.Show();
    }
    GetFromAppId(): string {
        return null;
    }
    ShareAppMessage(obj: ShareInfo, onSuccess: Laya.Handler = null, onFailed: Laya.Handler = null) {
        console.log("分享消息", obj);
        if (onSuccess) {
            onSuccess.run();
        }
    }
    LoadSubpackage(name: string, onSuccess: Laya.Handler, onFailed: Laya.Handler) {
        if (onSuccess) {
            onSuccess.run();
        }
    }

    RecordEvent(eventId: string, param: object) {
        console.log("记录事件", eventId, param);
    }

    ShareVideoInfo() {
        console.log(LTPlatform.platformStr, "暂未实现录屏功能");
    }

    _CheckUpdate() {

    }

    ShowToast(str: string) {
        LTUI.Toast(str);
    }

    OpenGameBox() {
        console.error("当前平台", LTPlatform.platformStr, "暂不支持互推游戏盒子");
    }
}