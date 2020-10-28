import StringEx from "../LTUtils/StringEx";
import LTUI from "../UIExt/LTUI";
import LTPlatformData from "./Data/LTPlatformData";
import { EPlatformType } from "./EPlatformType";
import { IDevice } from "./IDevice";
import TTDevice from "./Impl/TT/TTDevice";
import TTRecordManager from "./Impl/TT/TTRecordManager";
import IRecordManager from "./IRecordManager";
import LTPlatform from "./LTPlatform";
import { ShareInfo } from "./ShareInfo";
import WXPlatform from "./WXPlatform";
import Awaiters from "../Async/Awaiters";
import LTSDK from "../../SDK/LTSDK";
import GameData from "../../script/common/GameData";
import { PackConst } from "../../script/config/PackConst";
import CommonSaveData from "../Commom/CommonSaveData";

export default class TTPlatform extends WXPlatform {

    platform: EPlatformType = EPlatformType.TT;
    userInfo: LTGame.UserInfo;
    protected _showVideoLoad: boolean = false;

    recordManager: IRecordManager;
    device: IDevice;
    loginCode: string = null;
    public get isDouyin() {
        return this.systemInfo['appName'] == 'Douyin';
    }
    Init(platformData: LTPlatformData) {
        this._base = window["tt"];
        this.base = this._base;
        if (this._base == null) {
            console.error("平台初始化错误");
            return;
        }

        this.platformData = platformData;

        // 检测是否支持交叉推广
        let tt = this._base;
        let systemInfo = tt.getSystemInfoSync();
        if (systemInfo.platform == "ios") {
            this.isSupportJumpOther = false;
        }
        let [major, minor] = systemInfo.SDKVersion.split(".");
        if (major >= 1 && minor >= 33) {

        } else {
            this.isSupportJumpOther = false;
        }

        this._InitLauchOption();
        // TT禁止启动调用login 否则不能过审 参数 force=false时不强制登录
        this._Login();
        this._InitShareInfo();
        this._InitSystemInfo();
        this._CreateBannerAd();
        this._CreateVideoAd();
        this._CreateInterstitalAd();

        this.recordManager = new TTRecordManager(this._base);
        this.device = new TTDevice(this._base);

        window["iplatform"] = this;
    }
    protected _Login() {
        this.loginState = {
            isLogin: false,
            code: ""
        };
        let loginData = {
            force: false,
            success: (res) => {
                this.loginCode = res.code;
                this.loginState.isLogin = true;
                this.loginState.code = res.code;
                this._OnLoginSuccess(res);

            },
            fail: (res) => {
                console.error(LTPlatform.platformStr, "登录失败", res);
                this.loginState.isLogin = false;
                this.loginState.code = "";
            },
            complete: () => {
                if (this.onLoginEnd != null) {
                    this.onLoginEnd.run();
                }
            }
        };

        window["tt"].login(loginData);
    }
    getUserInfo() {
        console.log('开始授权')
        window["tt"].authorize({
            scope: "scope.userInfo",
            success: () => {
                console.log('授权成功')
                window["tt"].getUserInfo({
                    withCredentials: false,
                    lang: 'zh_CN',
                    success: (result) => {
                        console.log('获取信息成功')
                        console.log(result);
                        this.userInfo = { avatarUrl: result.avatarUrl, nickName: result.nickName }
                    },
                    fail: () => {
                        console.log('获取信息失败')
                    },
                    complete: () => {
                        console.log('获取信息comp')
                    }
                })
            },
        });

    }

    protected _OnLoginSuccess(res: LTGame.LoginSuccessRes) {
        console.log(LTPlatform.platformStr, "登录成功", res);
        LTUI.Toast('登录成功');
        this.getUserInfo();
        // this.loginState.isLogin = true;
        // this.loginState.code = res.code;
    }

    protected _InitLauchOption() {
        // 绑定onShow事件
        this._base.onShow(this._OnShow);
        this._base.onHide(this._OnHide);
        // 自动获取一次启动参数
        let res = this._base.getLaunchOptionsSync() as LTGame.LaunchOption;
        this._OnShow(res);
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


    protected _CreateBannerAd() {
        if (StringEx.IsNullOrEmpty(this.platformData.bannerId)) {
            console.log("无有效的banner广告ID,取消加载");
            return;
        }
        let windowWidth = this._base.getSystemInfoSync().windowWidth;
        let windowHeight = this._base.getSystemInfoSync().windowHeight;
        let bannerObj = {};
        bannerObj["adUnitId"] = this.platformData.bannerId; // "adunit-b48894d44d318e5a";
        bannerObj["adIntervals"] = 30;
        let styleObj = {};
        styleObj["left"] = 0;
        styleObj["top"] = 0;
        styleObj["width"] = windowWidth;
        bannerObj["style"] = styleObj;

        this._bannerAd = this._base.createBannerAd(bannerObj);
        this._isBannerLoaded = false;

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

    RecordEvent(eventId: string, param: object) {
        let reportAnalytics = this._base["reportAnalytics"];
        if (reportAnalytics) {
            if (param == null) {
                param = {};
            }
            reportAnalytics(eventId, param);
        } else {
            console.error("reportAnalytics 方法不存在");
        }
    }

    ShowBannerAd() {
        if (!this.IsBannerAvaliable()) {
            return;
        }
        this._bannerAd.show();
    }

    ShareAppMessage(shareInfo: ShareInfo, onSuccess: Laya.Handler, onFailed: Laya.Handler) {
        console.log("分享消息", shareInfo);

        let shareObj = WXPlatform._WrapShareInfo(shareInfo);
        shareObj["success"] = () => {

            this._cacheOnShowHandle = Laya.Handler.create(null, () => {
                console.log("分享成功");
                if (onSuccess) {
                    onSuccess.run();
                }
            })

        }

        shareObj["fail"] = () => {

            this._cacheOnShowHandle = Laya.Handler.create(null, () => {
                console.log("分享失败");
                if (onFailed) {
                    onFailed.run();
                }
            })
        }

        this._base.shareAppMessage(shareObj);
    }

    OpenGameBox(appIds: string[]) {
        let openData = [];
        for (let i = 0; i < appIds.length; ++i) {
            openData.push({
                appId: appIds[i]
            });
        }
        this._base.showMoreGamesModal({
            appLaunchOptions: openData
        });
    }

    NavigateToApp(appid: string, path?: string, extra?: any): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (!this.isSupportJumpOther) {
                reject(false);
                console.log("当前平台不支持小游戏跳转", this);
            } else {
                this._base.showMoreGamesModal({
                    appLaunchOptions: [
                        {
                            appId: this.platformData.appId,
                            query: "foo=bar&baz=qux",
                            extraData: {}
                        }
                    ],
                    success(res) {
                        resolve(true);
                        console.log("跳转小游戏成功", appid);
                    },
                    fail(err) {
                        reject(false);
                        console.log("跳转小游戏失败", appid);
                    }
                });
            }
        });
    }

    followOfficialAccount(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.base.openAwemeUserProfile();
            // this.base.followOfficialAccount({
            //     success(res) {
            //         if (res.errCode === 0) {
            //             resolve(true);
            //         } else {
            //             console.log(res.errMsg);
            //             resolve(false);
            //         }
            //     },
            // });

        })
    }
    checkFollowState(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.base.checkFollowState({
                success(res) {
                    if (res.result) {
                        resolve(true);
                    } else {
                        resolve(false)
                    }
                    console.log(res.result); // true:已关注 /  false:未关注
                },
            });
        });
    }
    addShareListener() {
        console.log('监听分享 ');
        this._base.onShareAppMessage((res) => {
            console.log('分享', res);
            let shareId = `${LTSDK.instance.uid}${Date.now()}`
            return {
                title: "音速战姬",
                imageUrl: "https://sf1-ttcdn-tos.pstatp.com/img/developer/app/ttd60ba0b64931e10f/sia49060c~noop.image",
                query: `from=shareVideoBtn&openId=${LTSDK.instance.uid}&shareId=${shareId}&channelId=${GameData.instance.channelId}`,
                extra: {
                    videoTopics: PackConst.data.topics,// ['小游戏', '学生党', '钻石方块']
                    withVideoId: true,
                    hashtag_list: PackConst.data.topics
                },
                success: (rst) => {
                    console.log("分享成功", rst, LTSDK.instance.uid, GameData.instance.channelId);
                    if (rst.videoId) LTSDK.instance.reportShareInfo(rst.videoId, shareId);
                },
                fail: (e) => {
                    console.log("分享失败", e);
                },
            };
        });
    }

}