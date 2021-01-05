import AudioManager from "../../script/manager/AudioManager";
import Awaiters from "../Async/Awaiters";
import LTUI from "../UIExt/LTUI";
import LTPlatformData from "./Data/LTPlatformData";
import DefaultDevice from "./DefaultDevice";
import { EPlatformType } from "./EPlatformType";
import { IDevice } from "./IDevice";
import KSRecordManager from "./Impl/KS/KSRecordManager";
import IPlatform from "./IPlatform";
import IRecordManager from "./IRecordManager";
import LTPlatform from "./LTPlatform";
import { ShareInfo } from "./ShareInfo";
import DefaultPlatform from "./DefaultPlatform";

export default class KSPlatform extends DefaultPlatform {

    userInfo: any;

    base: any;
    platformData: LTPlatformData;
    onPause: Laya.Handler;
    appId: string;
    platform: EPlatformType = EPlatformType.KS;
    safeArea: LTGame.SafeArea = null;
    lauchOption: LTGame.LaunchOption;
    loginState: LTGame.LoginState;
    onLoginEnd: Laya.Handler;
    onResume: Laya.Handler;
    recordManager: IRecordManager;
    device: IDevice = new DefaultDevice();
    systemInfo: any = null;
    private _banner: any;
    private _rewardVideo: any;

    /**
     * 是否支持直接跳转到其他小程序
     * 默认平台进行强制fake true,方便进行调试
     */
    isSupportJumpOther: boolean = false;
    _cacheScreenScale: number;
    _rewardSuccessed: Laya.Handler;
    _rewardSkipped: Laya.Handler;

    Init(platformData: LTPlatformData) {
        this.loginState = {
            isLogin: false,
            code: null
        };
        this.base = window["kwaigame"];
        if (this.base == null) {
            console.error("平台初始化错误", LTPlatform.platformStr);
            return;
        } else {
            console.error("平台初始化", LTPlatform.platformStr);
        }
        this.platformData = platformData;
        // this._InitLauchOption(); 

        this.readyGo();
        this.base.init({ "appId": platformData.appId });

        this.recordManager = new KSRecordManager(this.base);

        try {
            this.getSystemInfo();

        } catch (error) {
            console.error('获取系统信息失败', JSON.stringify(error));
        }
        // console.log(112);


        // console.log(113);

        // this.createVideo();
    }
    public readyGo() {
        this.base.readyGo();
    }
    public willClose() {
        this.base.willClose();
    }
    protected _InitLauchOption() {
        // 绑定onShow事件
        // this.base.onShow(this._OnShow);
        // this.base.onHide(this._OnHide);
        // // 自动获取一次启动参数
        // let res = this.base.getLaunchOptionsSync() as LTGame.LaunchOption;
        // this._OnShow(res);
    }
    private _login() {
        this.base.login({
            success: (res) => {
                console.log('快手 登录成功', res);
                if (res.gameToken) {
                    this.loginState = { code: res.gameToken, isLogin: true };
                    this.onLoginEnd.run();
                }
            },
            fail: (err) => {
                console.error('快手 登录失败', err);
                this.loginState = { code: 'null', isLogin: false };
            }
        });
    }
    private authorize() {
        this.base.authorize({
            scope: "Scope.userInfo",
            success: () => {
                console.log("授权获取用户信息成功");
            },
            fail: (error) => {
                console.log("授权获取用户信息失败: " + JSON.stringify(error));
            },
            complete: () => {
                console.log("授权获取用户信息完成");
            }
        });

    }
    private getSetting() {
        this.base.getSetting({
            success: (result) => {
                console.log("查询授权结果成功：" + JSON.stringify(result));
            },
            fail: (error) => {
                console.log("查询授权结果失败: " + JSON.stringify(error));
            },
            complete: () => {
                console.log("查询授权结果完成");
            }
        });

    }
    private getUserInfo() {
        this.base.getUserInfo({
            success: (result) => {
                console.log("获取用户信息成功：" + JSON.stringify(result));
            },
            fail: (error) => {
                console.log("获取用户信息失败: " + JSON.stringify(error));
            },
            complete: () => {
                console.log("获取用户信息完成");
            }
        });

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
            let cacheOnShow = LTPlatform.instance["_cacheOnShowHandle"];
            console.log(cacheOnShow);
            if (cacheOnShow) {
                cacheOnShow.run();
                LTPlatform.instance["_cacheOnShowHandle"] = null;
            }
        });
    }

    SetClipboardData(str: string) {
        console.log('KS SetClipboardData 暂未实现');
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
        this.safeArea = { top: 80, bottom: Laya.stage.height, left: 0, right: Laya.stage.width, height: Laya.stage.height - 80, width: Laya.stage.width }
        window["kwaigame"].getSystemInfo({
            response: (res) => {
                this.systemInfo = res;
                console.log('systeminfo', JSON.stringify(res));
                // this.safeArea = res['safeArea']
                // this._cacheScreenScale = this.safeArea.width / Laya.stage.width;
                console.log(this.safeArea);
                // if (!this.safeArea) {
                // } 
            }
            // ,
            // fail: (err) => {
            //     console.error('systeminfo', JSON.stringify(err));
            // }
        });
    }

    IsBannerAvaliable(): boolean {
        return;
    }
    IsVideoAvaliable(): boolean {
        return this.base.isSupport(this.base.Support.features.RewardVideo);

    }
    IsInterstitalAvaliable(): boolean {
        return;
    }
    ShowInterstitalAd() {
        console.log('todo');
        let interad = this.base.createInterstitialAd({
            posId: this.platformData.interstitialId
        });
        if (interad) {
            interad.show();
        }
    }

    ShowBannerAd() {

    }
    HideBannerAd() {
    }

    ShowRewardVideoAd(onSuccess: Laya.Handler, onSkipped: Laya.Handler) {
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        return new Promise<void>(async (resolve, reject) => {
            if (this._rewardVideo) {
                this._rewardVideo.show({
                    success: () => {

                    },
                    fail: (error) => {

                    }
                });
            } else {
                this._rewardVideo = this.base.createRewardedVideoAd({
                    adUnitId: this.platformData.rewardVideoId
                });
                this._rewardVideo.onClose((res) => {
                    console.log("激励视频关闭: " + JSON.stringify(res));
                    if (this._rewardSkipped) this._rewardSkipped.run();
                });
                this._rewardVideo.onReward((result) => {
                    console.log("激励视频奖励回调: " + JSON.stringify(result));
                    if (this._rewardSuccessed) this._rewardSuccessed.run();
                });
                if (this._rewardVideo) {
                    this._rewardVideo.show({
                        success: () => {

                        },
                        fail: (error) => {

                        }
                    })
                } else {
                    console.log("请先获取激励视频组件");
                }

            }
        });
    }
    private createVideo() {
        this._rewardVideo = this.base.createRewardedVideoAd({
            adUnitId: this.platformData.rewardVideoId
        });
        if (this._rewardVideo) {
            console.log("激励广告组件获取成功");
            this._rewardVideo.onClose((result) => {
                console.log("激励视频关闭回调: " + JSON.stringify(result));
            });
            this._rewardVideo.onReward((result) => {
                console.log("激励视频奖励回调: " + JSON.stringify(result));
            });
        } else {
            console.log("激励广告组件获取失败");
        }


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
    GetFromAppId(): string {
        return null;
    }
    ShareAppMessage(obj: ShareInfo, onSuccess: Laya.Handler = null, onFailed: Laya.Handler = null) {
        console.log("分享消息", obj);
        let params = {
            title: "游戏名",
            desc: "游戏描述",
            iconUrl: "游戏icon",
            imageUrl: "分享图片",
            extension: {
                name: "test"
            },
            response: (result) => {
                console.log("分享完成: " + JSON.stringify(result));
                if (onSuccess) {
                    onSuccess.run();
                }
            }
        };
        this.base.shareToMsg(params);

    }
    LoadSubpackage(name: string, onSuccess: Laya.Handler, onFailed: Laya.Handler) {
        var subpackageSupport = this.base.isSupport(this.base.Support.features.Subpackage);
        console.log(`加载分包${name}`, subpackageSupport);
        if (!subpackageSupport) {
            //不支持信令，则是旧版本APP，自己加载子包路径中的main.js 即可，该路径为开发时设置的子包路径一致，我这里的子包未sence2，所以为sence2/main.js
            window.require(`${name}/main.js`);
            //执行你需要的逻辑，如加载场景    
            return;
        }
        let loadTask = this.base.loadSubpackage({
            name: name, success: function (res) {
                //执行你需要的逻辑，如加载场景	
                if (onSuccess) {
                    onSuccess.run();
                }
            }, fail: function (err) {
                console.log(err);
            }
        });
        loadTask.onProgressUpdate(res => {
            console.log(res);
        });
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
    createShortcut(): Promise<boolean> {
        console.log('创建桌面图标');
        return;
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

}