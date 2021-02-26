import UI_FakeBannerVMediator from "../UIExt/DefaultUI/UI_FakeBannerVMediator";
import UI_FakeInterstitalMediator from "../UIExt/DefaultUI/UI_FakeInterstitalMediator";
import UI_FakeRewardADMediator from "../UIExt/DefaultUI/UI_FakeRewardADMediator";
import LTUI from "../UIExt/LTUI";
import LTPlatformData from "./Data/LTPlatformData";
import DefaultDevice from "./DefaultDevice";
import { EPlatformType } from "./EPlatformType";
import { IDevice } from "./IDevice";
import { WebRecordManager } from "./Impl/Web/WebRecordManager";
import IPlatform from "./IPlatform";
import IRecordManager from "./IRecordManager";
import LTPlatform from "./LTPlatform";
import { ShareInfo } from "./ShareInfo";
import StringEx from "../LTUtils/StringEx";
import CommonSaveData from "../Commom/CommonSaveData";

export default class DefaultPlatform implements IPlatform {
    setUserCloudStorage(key: string, value: number) {
        console.log(`当前平台不支持上报排行key=${key}value=${value}`);
    }
    getRankList(key: string) {
        console.log(`当前平台不支持获取排行key=${key}`);
    }
    showGameBoxBannerAd() {

    }
    hideGameBoxBannerAd() {

    }
    getUserInfo() {
        return new Promise<void>((resolve, reject) => {
            if (StringEx.IsNullOrEmpty(CommonSaveData.instance.nickName) && !StringEx.IsNullOrEmpty(CommonSaveData.instance.uid)) {
                CommonSaveData.instance.nickName = "游客" + CommonSaveData.instance.uid.substr(2, 16);
                CommonSaveData.instance.avatarUrl = "https://sf1-ttcdn-tos.pstatp.com/obj/developer/app/ttd60ba0b64931e10f/iconed57a79";
                CommonSaveData.SaveToDisk();
                resolve();
            }
        });
    }

    userInfo: LTGame.UserInfo;
    base: any;
    platformData: LTPlatformData;
    onPause: Laya.Handler;
    appId: string;
    platform: EPlatformType = EPlatformType.Web;
    safeArea: LTGame.SafeArea = null;
    lauchOption: LTGame.LaunchOption;
    loginState: LTGame.LoginState;
    onLoginEnd: Laya.Handler;
    onResume: Laya.Handler;
    recordManager: IRecordManager = new WebRecordManager();
    device: IDevice = new DefaultDevice();
    systemInfo: any = null;

    /**
     * 是否支持直接跳转到其他小程序
     * 默认平台进行强制fake true,方便进行调试
     */
    isSupportJumpOther: boolean = true;

    Init(platformData: LTPlatformData) {
        this.loginState = {
            isLogin: true,
            code: "111111111111"
        };
        this.userInfo = { nickName: '未登录用户666', avatarUrl: '66.png' }
        Laya.timer.once(500, this, this._FakeLoginEnd);
        this._InitSystemInfo();
    }
    private _FakeLoginEnd() {
        if (this.onLoginEnd)
            this.onLoginEnd.run();
    }

    protected _InitSystemInfo() {
        try {
            console.log(window.innerWidth, window.innerHeight)
            this.safeArea = {} as LTGame.SafeArea;
            this.safeArea.left = 0;
            this.safeArea.right = 0;
            this.safeArea.bottom = window.innerHeight
            this.safeArea.top = 0;
            this.safeArea.width = window.innerWidth;
            this.safeArea.height = window.innerHeight - this.safeArea.top;
            console.log("初始化安全区域完成");
        } catch (e) {
            console.error(e);
            console.error("获取设备信息失败,执行默认初始化");
            this.safeArea = null;
        }
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
    LoadSubpackage(name: string, onSuccess: Laya.Handler, onFailed: Laya.Handler, onProgress: Laya.Handler) {
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

    OpenGameBox(ids?: any) {
        console.error("当前平台", LTPlatform.platformStr, "暂不支持互推游戏盒子");
    }
    NavigateToApp(appid: string, path?: string, extra?: any): Promise<boolean> {
        return new Promise((resolve, reject) => {
            console.error("当前平台", LTPlatform.platformStr, `暂不支持小程序跳转appid:${appid}`);
            // 这里使用resolve
            resolve(false);
        });
    }
    createShortcut(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            console.error("当前平台不支持创建桌面图标");
            resolve(true);
        });
    }
    /**是否已创建桌面图标 */
    hasShortcutInstalled(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            resolve(false);
        });
    }
    GetStorage(key: string) {
        console.log('读本地存储');
        return Laya.LocalStorage.getItem(key);
    }
    SetStorage(key: string, data: any): void {
        console.log('写本地存储');
        Laya.LocalStorage.setItem(key, data);

    }
    followOfficialAccount(): any {
        console.error("当前平台", LTPlatform.platformStr, "暂不支持关注");
    }
    checkFollowState(): any {
        console.error("当前平台", LTPlatform.platformStr, "暂不支持关注");
    }

    SetClipboardData(str: string) {
        console.log("暂不支持拷贝剪切板", str);
    }


}