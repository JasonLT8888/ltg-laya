import AudioManager from "../../script/manager/AudioManager";
import Awaiters from "../Async/Awaiters";
import LTUI from "../UIExt/LTUI";
import LTPlatformData from "./Data/LTPlatformData";
import DefaultDevice, { VivoDevice, OppoDevice } from "./DefaultDevice";
import { EPlatformType } from "./EPlatformType";
import { IDevice } from "./IDevice";
import { WebRecordManager } from "./Impl/Web/WebRecordManager";
import IPlatform from "./IPlatform";
import IRecordManager from "./IRecordManager";
import LTPlatform from "./LTPlatform";
import { ShareInfo } from "./ShareInfo";
import DefaultPlatform from "./DefaultPlatform";
import StringEx from "../LTUtils/StringEx";
import { View_NativeInPage } from "../UIExt/DefaultUI/Cmp/View_NativeInpage";

export default class HWPlatform extends DefaultPlatform {
    userInfo: LTGame.UserInfo;
    isIOS: boolean = false;
    base: any;
    platformData: LTPlatformData;
    onPause: Laya.Handler;
    appId: string;
    platform: EPlatformType = EPlatformType.HW;
    safeArea: LTGame.SafeArea = null;
    lauchOption: LTGame.LaunchOption;
    loginState: LTGame.LoginState;
    onLoginEnd: Laya.Handler;
    onResume: Laya.Handler;
    recordManager: IRecordManager = new WebRecordManager();
    device: IDevice = new OppoDevice();
    systemInfo: any = null;
    private _banner: any;
    private _rewardVideo: any;

    /**
     * 是否支持直接跳转到其他小程序
     * 默认平台进行强制fake true,方便进行调试
     */
    isSupportJumpOther: boolean = true;
    _cacheScreenScale: number;
    _rewardSuccessed: Laya.Handler;
    _rewardSkipped: Laya.Handler;

    Init(platformData: LTPlatformData) {
        this.loginState = {
            isLogin: false,
            code: null
        };
        this.base = window["qg"];
        if (this.base == null) {
            console.error("平台初始化错误", LTPlatform.platformStr);
            return;
        }
        this.platformData = platformData;
        this._InitLauchOption();
        this._Login();
        this._InitAdService();
        this.getSystemInfo();

    }

    protected _InitLauchOption() {
        // 绑定onShow事件
        this.base.onShow(this._OnShow);
        this.base.onHide(this._OnHide);
        // 自动获取一次启动参数
        let res = this.base.getLaunchOptionsSync() as LTGame.LaunchOption;
        this._OnShow(res);
    }
    /**
     * 小游戏回到前台的事件
     */
    protected _OnShow(res: LTGame.LaunchOption) {
        console.log(LTPlatform.platformStr, "OnShow", res);
        LTPlatform.instance.lauchOption = res;
        LTPlatform.instance._CheckUpdate();
        AudioManager.instance.Resume();
        Awaiters.NextFrame().then(() => {
            if (LTPlatform.instance.onResume) {
                LTPlatform.instance.onResume.runWith(res);
            }
            if (View_NativeInPage.Inst && View_NativeInPage.Inst.visible) {
                View_NativeInPage.Inst.ReportShow();
            }
            let cacheOnShow = LTPlatform.instance["_cacheOnShowHandle"];
            console.log(cacheOnShow);
            if (cacheOnShow) {
                cacheOnShow.run();
                LTPlatform.instance["_cacheOnShowHandle"] = null;
            }
        });
    }

    protected _Login() {

        this.loginState = {
            isLogin: false,
            code: ""
        };
        this.base.gameLoginWithReal({
            forceLogin: 1, //强制登录，未登录时会弹出登录对话框
            appid: this.platformData.appId, //appid需要与华为开发者联盟后台配置一致
            success: (data) => {
                console.log("Game login success:" + data);
                this.base.savePlayerInfoWithReal({
                    rank: "1",
                    role: "a",
                    area: "cn",
                    sociaty: "1",
                    success: (data) => { console.log("save player info with real success:" + data); },
                    fail: (data, code) => { console.log("save player info with real fail:" + data + ", code:" + code); }
                });
            },
            fail: (data, code) => {
                console.log("on gameLogin fail: " + data + "," + code);
            },
            complete: () => {
                console.log("on gameLogin: complete");
            }
        });
    }

    protected _InitAdService() {
        this.base.setUnderAgeOfPromise(false);
        //更新用户意见状态
        // this.base.requestConsentUpdate({
        //     success: (data) => {
        //         console.log('requestConsentUpdate success data ' + JSON.stringify(data));
        //         if (data.isNeedConsent && data.consentStatus == 2) {
        //             //征求用户意见

        //         }
        //     },
        //     fail: (data) => {
        //         console.log('requestConsentUpdate fail data ' + JSON.stringify(data))
        //     },
        //     complete: () => {
        //         this.base.setConsentStatus(0);
        //     },
        // })
    }
    /**
    * 小游戏退出前台的事件
    */
    protected _OnHide(res: LTGame.LaunchOption) {
        console.log(LTPlatform.platformStr, "OnHide", res);
        AudioManager.instance.Pause();
        if (LTPlatform.instance.onPause) {
            LTPlatform.instance.onPause.runWith(res);
        }

    }
    getSystemInfo() {
        this.base.getSystemInfo({
            success: (res) => {
                this.systemInfo = res;
                console.log('systeminfo', JSON.stringify(this.systemInfo));
                if (!this.safeArea) {
                    this.safeArea = { top: res['statusBarHeight'], bottom: res['screenHeight'], left: 0, right: res['screenWidth'], height: res['screenHeight'], width: res['screenWidth'] }
                }
                this._cacheScreenScale = this.systemInfo.screenWidth / Laya.stage.width;
                console.log(this.safeArea);

            },
            fail: () => { },
            complete: () => { }
        });
    }



    IsBannerAvaliable(): boolean {
        return;
    }
    IsVideoAvaliable(): boolean {
        return;
    }
    IsInterstitalAvaliable(): boolean {
        return;
    }
    ShowInterstitalAd() {
        let interad = this.base.createInterstitialAd({
            adUnitId: this.platformData.interstitialId
        });
        interad.onLoad((data) => {
            interad.show();
        });
        if (interad) {
            interad.load();
        }
    }
    protected _CreateBannerAd() {
        if (StringEx.IsNullOrEmpty(this.platformData.bannerId)) {
            console.log("无有效的banner广告ID,取消加载");
            return;
        }
        let windowWidth = this.base.getSystemInfoSync().windowWidth;
        let windowHeight = this.base.getSystemInfoSync().windowHeight;
        this._banner = this.base.createBannerAd({
            adUnitId: this.platformData.bannerId,
            style: {
                top: windowHeight - 57,
                left: 0,
                height: 57,
                width: 360
            }
        });

        this._banner.onLoad(() => {
            console.log("banner加载成功", JSON.stringify(this._banner.style));
            // this._banner.style.top = windowHeight;
            // this._banner.style.left = 0;
        });

        this._banner.onError((res) => {
            console.error("banner广告加载失败", res);
        });

        // this._banner.onResize((size) => {
        //     console.log("banner resize", JSON.stringify(size));
        //     // this._banner.style.top = windowHeight - size.height;
        //     // this._banner.style.left = (windowWidth - size.width) / 2;
        // });
    }
    isBannerShow: boolean = false;
    ShowBannerAd() {
        if (!this._banner) {
            this._CreateBannerAd();
        }
        if (this.isBannerShow) return;
        this.isBannerShow = true;
        this._banner.show();
    }
    HideBannerAd() {
        if (this._banner && this.isBannerShow) {
            this.isBannerShow = false;
            this._banner.hide();
        }
    }

    ShowRewardVideoAd(onSuccess: Laya.Handler, onSkipped: Laya.Handler) {
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        return new Promise<void>(async (resolve, reject) => {
            AudioManager.instance.Pause();
            if (this._rewardVideo) {
                await this._rewardVideo.load();
            } else {
                this._rewardVideo = this.base.createRewardedVideoAd({
                    adUnitId: this.platformData.rewardVideoId,
                    success: (code) => {
                        console.log("ad demo : loadAndShowVideoAd createRewardedVideoAd: success");
                    },
                    fail: (data, code) => {
                        console.log("ad demo : loadAndShowVideoAd createRewardedVideoAd fail: " + data + "," + code);
                    },
                    complete: () => {
                        console.log("ad demo : loadAndShowVideoAd createRewardedVideoAd complete");
                    }
                });
                // this._rewardVideo.setTagForUnderAgeOfPromise(0);
                // this._rewardVideo.setNonPersonalizedAd(1);
                this._rewardVideo.onLoad(() => {
                    console.log("视频广告加载成功");
                    this._rewardVideo.show();
                });
                this._rewardVideo.onError((res) => {
                    console.error("视频广告加载失败", JSON.stringify(res));
                });
                this._rewardVideo.onClose((res) => {
                    console.error("视频广告关闭", JSON.stringify(res));

                    let isEnd = res["isEnded"] as boolean;
                    Awaiters.NextFrame().then(() => {
                        AudioManager.instance.Resume();
                        if (isEnd) {
                            if (this._rewardSuccessed) this._rewardSuccessed.run();
                        } else {
                            if (this._rewardSkipped) this._rewardSkipped.run();
                        }
                    });
                });
                await this._rewardVideo.load();
                // this._rewardVideo.show().then(() => {
                //     resolve();
                // }).catch(() => {
                //     reject();
                // });
            }
        });
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
        // this.base.loadSubpackage({
        //     subpackage: name,
        //     success: () => {
        //         console.log("华为分包加载完成", `${name}`);
        //         if (onSuccess) {
        //             onSuccess.run();
        //         }
        //     },
        //     fail: (err) => {
        //         console.error("华为分包加载出错", JSON.stringify(err));
        //         if (onFailed) {
        //             onFailed.run();
        //         }
        //     },
        //     complete: () => {
        //     }
        // });
        onSuccess?.run();
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
    NavigateToApp(appid: string, path?: string, extra?: any): Promise<boolean> {
        return new Promise((resolve, reject) => {
            console.error("当前平台", LTPlatform.platformStr, `暂不支持小程序跳转appid:${appid}`);
            // 这里使用resolve
            resolve(false);
        });
    }
    hasShortcutInstalled(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.base.hasShortcutInstalled({
                success: (status) => {
                    if (status) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                }
            })
        });
    }
    createShortcut(): Promise<boolean> {
        console.log('创建桌面图标');
        return new Promise<boolean>((resolve, reject) => {
            this.base.installShortcut({
                success: () => {
                    console.log('创建桌面图标成功');
                    resolve(true);
                }
            });
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
    followOfficialAccount(): Promise<boolean> {
        console.log('暂不支持');
        return;
    }
    checkFollowState(): Promise<boolean> {
        console.log('暂不支持');
        return;
    }

    SetClipboardData(str: string) {
        this.base.setClipboardData({ data: str });
    }

}