import Awaiters from "../Async/Awaiters";
import { CommonEventId } from "../Commom/CommonEventId";
import StringEx from "../LTUtils/StringEx";
import LTUI from "../UIExt/LTUI";
import LTPlatformData from "./Data/LTPlatformData";
import DefaultDevice from "./DefaultDevice";
import DefaultRecordManager from "./DefaultRecordManager";
import { EPlatformType } from "./EPlatformType";
import { IDevice } from "./IDevice";
import IPlatform from "./IPlatform";
import IRecordManager from "./IRecordManager";
import LTPlatform from "./LTPlatform";
import { ShareInfo } from "./ShareInfo";

export default class OppoPlatform implements IPlatform {

    onPause: Laya.Handler;
    appId: string;
    platform: EPlatformType = EPlatformType.Oppo;
    safeArea: LTGame.SafeArea = null;
    lauchOption: LTGame.LaunchOption;
    loginState: LTGame.LoginState;
    onLoginEnd: Laya.Handler;
    onResume: Laya.Handler;
    recordManager: IRecordManager = new DefaultRecordManager();
    device: IDevice = new DefaultDevice();

    protected _data: LTPlatformData;

    protected _bannerAd;
    protected _rewardVideo;
    protected _intersitialAd;
    protected _nativeAd;

    protected _isBannerLoaded: boolean = false;
    protected _isVideoLoaded: boolean = false;
    protected _isInterstitialLoaded: boolean = false;
    protected _nativeAdLoaded: boolean = false;
    protected _videoFailedCount: number;
    protected _interstitalFailedCount: number;
    protected _nativeAdFailedCount: number;

    protected _rewardSuccessed: Laya.Handler;
    protected _rewardSkipped: Laya.Handler;

    protected _cacheScreenScale: number;

    protected _shareVideoBtn;

    protected _base: any;

    protected _platformData: LTPlatformData;

    protected _cacheVideoAD: boolean = false;

    protected _cacheOnShowHandle: Laya.Handler;

    Init(platformData: LTPlatformData) {
        this._base = window["qg"];
        if (this._base == null) {
            console.error("平台初始化错误", LTPlatform.platformStr);
            return;
        }
        this._platformData = platformData;
        this._InitLauchOption();
        this._Login();
        this._InitSystemInfo();
        this._base.initAdService({
            appId: platformData.appId,
            isDebug: true,
            success: () => {
                console.log("oppo广告", "初始化广告服务成功", platformData);
                this._CreateBannerAd();
                this._CreateVideoAd();
                this._CreateInterstitalAd();
                this._CreateNativeAd();
            },
            fail: () => {
                console.error("oppo广告", "初始化广告服务失败")
            }
        });
        window["iplatform"] = this;
    }

    _CheckUpdate() {

    }

    protected _Login() {
        this.loginState = {
            isLogin: false,
            code: ""
        };
        let loginData = {} as LTGame.LoginData;
        loginData.success = (res) => {
            this._OnLoginSuccess(res);
        };
        loginData.fail = (res) => {
            console.error(LTPlatform.platformStr, "登录失败", res);
            this.loginState.isLogin = false;
            this.loginState.code = "";
        };
        loginData.complete = (res) => {
            if (this.onLoginEnd != null) {
                this.onLoginEnd.run();
            }
        };
        this._base.login(loginData);
    }

    protected _OnLoginSuccess(res: LTGame.LoginSuccessRes) {
        console.log(LTPlatform.platformStr, "登录成功", res);
        this.loginState.isLogin = true;
        this.loginState.code = res.code;
    }
    ShareAppMessage(obj: ShareInfo, onSuccess: Laya.Handler, onFailed: Laya.Handler) {

    }
    protected _InitLauchOption() {
        // 绑定onShow事件
        this._base.onShow(this._OnShow);
        this._base.onHide(this._OnHide);
        // 自动获取一次启动参数
        let res = this._base.getLaunchOptionsSync() as LTGame.LaunchOption;
        this._OnShow(res);
    }


    protected _InitSystemInfo() {
        try {
            let systemInfo = this._base.getSystemInfoSync();
            this.safeArea = systemInfo.safeArea as LTGame.SafeArea;
            this._cacheScreenScale = systemInfo.screenWidth / Laya.stage.width;
        } catch (e) {
            console.error(e);
            console.error("获取设备信息失败,执行默认初始化");
            this.safeArea = null;
        }
    }

    protected _CreateInterstitalAd() {
        if (StringEx.IsNullOrEmpty(this._platformData.interstitialId)) {
            console.log("无有效的插页广告ID,取消加载");
            return;
        }
        this._interstitalFailedCount = 0;
        let intAdObj = {};
        intAdObj["adUnitId"] = this._platformData.interstitialId;
        this._intersitialAd = this._base.createInsertAd(intAdObj);

        this._intersitialAd.onLoad(() => {
            console.log("插页广告加载成功");
            this._isInterstitialLoaded = true;
        });
        this._intersitialAd.onClose(() => {
            console.log("插页广告关闭");
            this._isInterstitialLoaded = false;
            this._intersitialAd.load();
        });
        this._intersitialAd.onError((err) => {
            this._interstitalFailedCount++;
            console.error("插页广告加载失败", err);
            if (this._interstitalFailedCount > 10) {
                console.log("第", this._interstitalFailedCount, "次重新加载插页广告");
                // 失败自动加载广告
                this._intersitialAd.load();
            }
        });
    }
    //#region NativeAD
    private ad_list: OppoNativeAdItem[] = [];
    private current_ad: OppoNativeAdItem = null;

    private view = new fairygui.GComponent();
    private image = new fairygui.GLoader();
    private tag = new fairygui.GLoader;
    protected _CreateNativeAd() {
        if (StringEx.IsNullOrEmpty(this._platformData.nativeId)) {
            console.log("无有效的原生广告ID,取消加载");
            return;
        }
        this._CreateNativeADComponent();
        this._InitNativeAd();

    }
    private _CreateNativeADComponent() {
        this.view.addChild(this.image);
        this.view.onClick(null, () => { if (this.current_ad) this._ReportNativeClick(this.current_ad); });
        this.image.autoSize = true;
        this.tag.autoSize = true;
        this.view.addChild(this.tag);
        this.view.setPivot(0.5, 0.5, true);
    }
    async _InitNativeAd() {
        this._nativeAd = qg.createNativeAd({ posId: this._platformData.nativeId });
        this._nativeAd.onLoad(this.onNativeLoad);
        this._nativeAd.onError(this.onNativeError);
        this._nativeAd.load();
    }
    async _DestroryAd() {
        this.view.removeFromParent();
        if (this._nativeAd) {
            this._nativeAd.offLoad(this.onNativeLoad);
            this._nativeAd.offError(this.onNativeError);
            this._nativeAd.destroy();
            this._nativeAd = null;
            this.current_ad = null;
        }
    }
    protected onNativeLoad = (res) => {
        console.log("OPPO广告:", "加载原生广告完成", res);
        this.ad_list = res.adList;
        this._nativeAdLoaded = true;
        this._SwitchNativeAd();
    }

    protected onNativeError = (err) => {
        this.ad_list = [];
        console.error("OPPO广告:", "加载原生广告出错", err);
        Laya.timer.once(5000, this._nativeAd, this._nativeAd.load);
    }
    protected async _SwitchNativeAd() {
        let idx = this.ad_list.indexOf(this.current_ad);
        if (idx < this.ad_list.length - 1 && this.ad_list.length) {
            this.current_ad = this.ad_list[idx + 1];
            if (this.current_ad.imgUrlList && this.current_ad.imgUrlList.length) {
                this.image.url = this.current_ad.imgUrlList[0];
            }
            this.tag.url = this.current_ad.logoUrl;

            console.log("OPPO广告:", "切换展示的广告", this.current_ad);
        } else {
            console.log("OPPO广告:", "重新拉取原生广告");
            await this._DestroryAd();
            await this._InitNativeAd();
        }
    }

    protected _ReportNativeShow(ad: OppoNativeAdItem) {
        if (this._nativeAd) {
            this._nativeAd.reportAdShow({ adId: ad.adId } as any);
            ad.show_reported = true;
            console.log("OPPO广告:", "上报广告展示", ad);
        }
    }

    protected _ReportNativeClick(ad: OppoNativeAdItem) {
        if (this._nativeAd) {
            this._nativeAd.reportAdClick({ adId: ad.adId } as any);
            console.log("OPPO广告:", "上报广告点击", ad);
            this._SwitchNativeAd();
        }
    }
    async _ShowNative(pos?: Laya.Vector2, scale = 1) {
        if (this._nativeAd) {
            this.view.removeFromParent();

            if (this.current_ad) {
                if (!this.current_ad.show_reported) {
                    this._ReportNativeShow(this.current_ad);
                }
                this.view.setSize(this.image.width, this.image.height);
                fairygui.GRoot.inst.addChild(this.view);
                if (pos) {
                    this.view.setXY(pos.x, pos.y);
                } else {
                    this.view.setXY(Laya.stage.width / 2, Laya.stage.height / 2);
                }
                this.tag.setXY(this.image.width - this.tag.width, this.image.height - this.tag.height);
                this.view.setScale(scale, scale);
            }

        } else {
            console.error('没有原生广告');
        }
    }

    async _HideNative() {
        this.view.removeFromParent();
    };
    //#endregion

    protected _CreateVideoAd() {
        if (!this._cacheVideoAD) {
            console.log("当前策略为不缓存视频广告");
            return;
        }
        let createRewardedVideoAd = this._base["createRewardedVideoAd"];
        if (createRewardedVideoAd == null) {
            console.error("无createRewardedVideoAd方法,跳过初始化");
            return;
        }
        if (StringEx.IsNullOrEmpty(this._platformData.rewardVideoId)) {
            console.log("无有效的视频广告ID,取消加载");
            return;
        }
        this._videoFailedCount = 0;
        let videoObj = {};
        videoObj["adUnitId"] = this._platformData.rewardVideoId;
        this._rewardVideo = createRewardedVideoAd(videoObj);
        this._rewardVideo.onLoad(() => {
            console.log("视频广告加载成功");
            this._isVideoLoaded = true;
        });
        this._rewardVideo.onError((res) => {
            this._videoFailedCount++;
            console.error("视频广告加载失败", res);
            if (this._videoFailedCount > 10) {
                console.log("第", this._videoFailedCount, "次重新加载视频广告");
                // 失败自动加载广告
                this._rewardVideo.load();
            }
        });
        this._rewardVideo.onClose((res) => {
            Laya.stage.event(CommonEventId.RESUM_AUDIO);
            console.log("视频回调", res);

            let isEnd = res["isEnded"] as boolean;
            // 修复广告bug
            Awaiters.NextFrame().then(() => {
                if (isEnd) {
                    if (this._rewardSuccessed) this._rewardSuccessed.run();
                } else {
                    if (this._rewardSkipped) this._rewardSkipped.run();
                }
            });
        });
    }


    protected _CreateBannerAd() {
        if (StringEx.IsNullOrEmpty(this._platformData.bannerId)) {
            console.log("无有效的banner广告ID,取消加载");
            return;
        }
        console.log('开始创建banner')
        let windowWidth = this._base.getSystemInfoSync().windowWidth;
        let windowHeight = this._base.getSystemInfoSync().windowHeight;
        this._bannerAd = this._base.createBannerAd(
            {
                adUnitId: this._platformData.bannerId,
                adIntervals: 30,
                style: {
                    top: 300,
                    left: 0,
                    width: 900,
                    height: 300
                }
            });
        this._bannerAd.onLoad(() => {
            console.log("banner加载成功", this._bannerAd);
            this._isBannerLoaded = true;
        });

        this._bannerAd.onError((res) => {
            console.error("banner广告加载失败", res);
            this._bannerAd == null;
        });

        this._bannerAd.onResize((size) => {
            this._bannerAd.style.top = windowHeight - size.height;
            this._bannerAd.style.left = (windowWidth - size.width) / 2;
        });
    }

    IsBannerAvaliable() {
        return this._isBannerLoaded;
    }
    IsVideoAvaliable() {
        return this._isVideoLoaded;
    }
    IsInterstitalAvaliable() {
        return this._isInterstitialLoaded;
    }

    IsNativeAvaliable() {
        return this._nativeAdLoaded;
    }
    ShowBannerAd() {
        console.log(1);
        if (!this.IsBannerAvaliable()) {
            console.log(this.IsBannerAvaliable())
            this._bannerAd.show().then(() => {
                console.log('展示banner 成功')
            }).catch((e) => {
                console.error('展示banner 错误', e);
            });
            return;
        }
        console.log(3)
        this._bannerAd.show().then(() => {
            console.log('展示banner 成功')
        }).catch((e) => {
            console.error('展示banner 错误', e);
        });
        console.log(4)
    }
    HideBannerAd() {
        if (!this.IsBannerAvaliable()) return;
        this._bannerAd.hide();
    }
    async  ShowNativeAd() {
        if (!this.IsNativeAvaliable()) {
            return;
        }
        await this._ShowNative();
    }
    HideNativeAd() {
        if (!this.IsNativeAvaliable()) {
            return;
        }
        this._HideNative();
    }

    protected _DoCacheShowVideo(onSuccess: Laya.Handler, onSkipped: Laya.Handler) {
        if (!this._isVideoLoaded) {
            console.error("视频广告尚未加载好");
            return;
        }
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        this._isVideoLoaded = false;
        Laya.stage.event(CommonEventId.PAUSE_AUDIO);
        this._rewardVideo.show();
    }

    protected _DoNoCacheShowVideo(onSuccess: Laya.Handler, onSkipped: Laya.Handler) {
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        if (StringEx.IsNullOrEmpty(this._platformData.rewardVideoId)) {
            console.log("无有效的视频广告ID,取消加载");
            onSkipped.run();
            return;
        }
        let createRewardedVideoAd = this._base["createRewardedVideoAd"];
        if (createRewardedVideoAd == null) {
            console.error("无createRewardedVideoAd方法,跳过初始化");
            onSkipped.run();
            return;
        }
        LTUI.ShowLoading("广告拉取中...");
        this._videoFailedCount = 0;
        let videoObj = {};
        videoObj["adUnitId"] = this._platformData.rewardVideoId; // "adunit-5631637236cf16b6";
        this._rewardVideo = createRewardedVideoAd(videoObj);
        this._rewardVideo.onLoad(() => {
            console.log("视频广告加载成功");
            this._isVideoLoaded = true;
        });
        this._rewardVideo.onError((res) => {
            this._videoFailedCount++;
            console.error("视频广告加载失败", res, this._videoFailedCount);
        });
        this._rewardVideo.onClose((res) => {
            Laya.stage.event(CommonEventId.RESUM_AUDIO);
            console.log("视频回调", res);
            let isEnd = res["isEnded"] as boolean;
            Awaiters.NextFrame().then(() => {
                if (isEnd) {
                    if (this._rewardSuccessed) this._rewardSuccessed.run();
                } else {
                    if (this._rewardSkipped) this._rewardSkipped.run();
                }
            });
        });
        this._rewardVideo.load().then(() => {
            this._rewardVideo.show().then(() => {
                LTUI.HideLoading();
            }).catch(err => {
                console.log("广告组件出现问题", err);
                // 可以手动加载一次
                this._rewardVideo.load().then(() => {
                    console.log("手动加载成功");
                    // 加载成功后需要再显示广告
                    return this._rewardVideo.show().then(() => {
                        LTUI.HideLoading();
                    }).catch((e) => {
                        console.error(e);
                        LTUI.HideLoading();
                    });
                });
            });;
        }).catch((e) => {
            console.error('视频加载出错', e);
            LTUI.HideLoading();
        });

    }

    ShowRewardVideoAd(onSuccess: Laya.Handler, onSkipped: Laya.Handler) {
        if (this._cacheVideoAD) {
            this._DoCacheShowVideo(onSuccess, onSkipped);
        } else {
            this._DoNoCacheShowVideo(onSuccess, onSkipped);
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
    ShowInterstitalAd() {
        if (!this._isInterstitialLoaded) {
            console.error("插页广告尚未加载好");
            return;
        }
        this._intersitialAd.show();
    }

    GetFromAppId(): string {
        if (this.lauchOption.referrerInfo == null) {
            return null;
        }
        if (StringEx.IsNullOrEmpty(this.lauchOption.referrerInfo.appId)) {
            return null;
        }
        return this.lauchOption.referrerInfo.appId;
    }
    /** 发起创建桌面图标请求 */
    protected CreatShortcut() {
        return new Promise((resolve, reject) => {
            qg['hasShortcutInstalled']({
                success: function (res) {
                    // 判断图标未存在时，创建图标
                    if (res == false) {
                        qg['installShortcut']({
                            success: function () {
                                resolve();
                            },
                            fail: function (err) {
                                reject();
                            },
                            complete: function () { }
                        })
                    } else {
                        resolve();
                    }
                } as any,
                fail: function (err) {
                    reject();
                },
                complete: function () { }
            });
        });
    }
    /**
     * 小游戏回到前台的事件
     */
    protected _OnShow(res: LTGame.LaunchOption) {
        console.log(LTPlatform.platformStr, "OnShow", res);
        LTPlatform.instance.lauchOption = res;
        LTPlatform.instance._CheckUpdate();

        Awaiters.NextFrame().then(() => {
            if (LTPlatform.instance.onResume) {
                LTPlatform.instance.onResume.runWith(res);
            }
            let cacheOnShow = LTPlatform.instance["_cacheOnShowHandle"];
            if (cacheOnShow) {
                cacheOnShow.run();
                LTPlatform.instance["_cacheOnShowHandle"] = null;
            }
        });


    }

    /**
     * 小游戏退出前台的事件
     */
    protected _OnHide(res: LTGame.LaunchOption) {
        console.log(LTPlatform.platformStr, "OnHide", res);
        if (LTPlatform.instance.onPause) {
            LTPlatform.instance.onPause.runWith(res);
        }
    }



    LoadSubpackage(name: string, onSuccess: Laya.Handler, onFailed: Laya.Handler, onProgress: Laya.Handler) {
        let loadObj = {};
        loadObj["name"] = name;
        loadObj["success"] = () => {
            console.log("分包加载成功", name);
            if (onSuccess) {
                onSuccess.run();
            }
        };
        loadObj["fail"] = () => {
            console.error("分包加载失败", name);
            if (onFailed) {
                onFailed.run();
            }
        };
        let loadTask = this._base.loadSubpackage(loadObj);
        loadTask.onProgressUpdate((res) => {

            if (Laya.Browser.onMobile) {
                console.log("分包加载进度", res);
            }

            if (onProgress) {
                onProgress.runWith(res.progress / 100);
            }
        });
    }

    RecordEvent(eventId: string, param: object) {

    }

    /**
     * 创建分享视频按钮
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     */
    public CreateShareVideoBtn(x: number, y: number, width: number, height: number) {

    }

    /**
     * 隐藏分享视频按钮
     */
    public HideShareVideoBtn() {
        if (this._shareVideoBtn != null) {
            this._shareVideoBtn.hide();
        }
    }

    ShowToast(str: string) {
        this._base.showToast(
            {
                title: str,
                duration: 2000
            }
        );
    }

    OpenGameBox(appIds: string[]) {

        console.error("当前平台", LTPlatform.platformStr, "暂不支持互推游戏盒子");
    }
    /**
     * @param appId oppo vivo传包名
     */
    NavigateToApp(appId: string, path?: string, extra?: any) {
        return new Promise((resolve, reject) => {
            Laya.Browser.window.qg.navigateToMiniGame({
                pkgName: appId,
                path: path,
                extraData: extra,
                success: function () {
                    resolve();
                    console.log('oppo小游戏跳转成功');
                },
                fail: function (res) {
                    reject();
                    console.log('oppo小游戏跳转失败：', JSON.stringify(res));
                }
            });
        })
    }


}
interface OppoNativeAdItem {
    adId: string;
    clickBtnTxt: string;
    creativeType: number;
    desc: string;
    icon: string;
    iconUrlList: Array<string>;
    imgUrlList: Array<string>;
    interactionType: number;
    logoUrl: string;
    title: string;
    /** 是否已上报展示 */
    show_reported?: boolean,
    /** 是否已上报点击 */
    click_reported?: boolean,
}

