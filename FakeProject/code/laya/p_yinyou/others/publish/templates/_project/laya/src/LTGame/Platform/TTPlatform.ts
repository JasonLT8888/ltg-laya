import GameData from "../../script/common/GameData";
import { PackConst } from "../../script/config/PackConst";
import LTSDK from "../../SDK/LTSDK";
import Awaiters from "../Async/Awaiters";
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
import CommonSaveData from "../Commom/CommonSaveData";
import { GameConst } from "../../script/config/GameConst";
import WXOpenDataContext from "./Impl/WX/WXOpenDataContext";

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
        // this._CreateBannerAd();
        this._CreateVideoAd();
        this._CreateInterstitalAd();

        this.recordManager = new TTRecordManager(this._base);
        this.device = new TTDevice(this._base);

        window["iplatform"] = this;

    }
    setUserCloudStorage(key: string, value: number) {
        if (!key) {
            key = "score";
        }
        if (isNaN(value)) {
            value = 0;
        }
        const data = {
            ttgame: {
                score: "score",
                update_time: Date.now(),
            },
            progress: 10
        };

        this.base.setUserCloudStorage({
            KVDataList: [
                // key 需要在开发者后台配置，且配置为排行榜标识后，data 结构必须符合要求，否则会 set 失败
                { key: key, value: JSON.stringify(data) },
            ],
        });
    }

    getRankList(key: string) {
        if (!key) {
            key = "score";
        }
        this.base.getUserCloudStorage({
            keyList: ["score"], // 要获取的 key 列表
            success: (res) => {
                console.log("获取KV 成功");
                console.log(res.KVDataList);
            },
            fail: (res) => {
                console.log("获取KV调用失败");
            },
            complete: (res) => {
                console.log("获取KV调用完成");
            },
        });
        // this.base.getCloudStorageByRelation({
        //     type: "group",
        //     keyList: [key],
        //     extra: {
        //         sortKey: key, // 指定的key需要在后台配置过
        //         groupId: this.GROUPID, // 指定要获取的用户所属分组
        //     },
        //     success: (res) => {
        //         console.log(res);
        //     },
        //     fail: (e) => {
        //         console.log("获取数据失败");
        //     },
        //     complete: (res) => {
        //       console.log("调用完成");
        //     },
        // });
    }

    protected _Login() {
        this.loginState = {
            isLogin: false,
            code: ""
        };
        let loginData = {
            force: false,
            success: (res) => {
                console.log(LTPlatform.platformStr, "登录成功", res);
                this._OnLoginSuccess(res);
                this.loginCode = res.code;
                this.loginState.isLogin = true;
                this.loginState.code = res.code;

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
                this.addShareListener();
            }
        };

        window["tt"].login(loginData);
    }
    getUserInfo() {
        return new Promise<void>(() => {
            this.base.getSetting({
                success: (sucData): void => {
                    console.log("getSetting - > 成功 ", sucData);
                    if (sucData.authSetting["scope.userInfo"]) {
                        this.base.getUserInfo(
                            {
                                openIdList: ['selfOpenId'],
                                fail: (res): void => {
                                    console.log("getUserInfo - > 失败 ", res);

                                },
                                success: (successData): void => {
                                    console.log("getUserInfo - > 成功 ", successData);
                                    this.openDataContext.postMsg({ type: "userInfoData", data: successData });
                                }
                            });
                    }
                }
            });
        })

    }

    protected _OnLoginSuccess(res: LTGame.LoginSuccessRes) {
        this.openDataContext = new WXOpenDataContext(this.base);
        this.openDataContext.setUserGroup("test_group");
        // this.postMsg({ text: "login succeed" });
        // LTUI.Toast('登录成功');
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
        styleObj["width"] = Math.floor(windowWidth * 0.9);
        styleObj["left"] = (windowWidth - styleObj["width"]) / 2;
        styleObj["top"] = windowHeight - Math.floor(styleObj["width"] * 0.347);
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
            // this._bannerAd.style.left = (windowWidth - size.width) / 2;
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
        // return;
        // if (!this.IsBannerAvaliable()) {
        //     return;
        // }
        // this._bannerAd.show();
    }
    HideBannerAd() {

    }
    ShowInterstitalAd() {
        if (!this._intersitialAd) {
            this._CreateInterstitalAd();
        }
        this._intersitialAd?.load().then(() => {
            this._intersitialAd.show();
        });
    }
    _CreateInterstitalAd() {
        this._intersitialAd = this.base.createInterstitialAd({
            adUnitId: this.platformData.interstitialId
        });
        this._intersitialAd.onError((e) => {
            console.error("插页加载失败", e);
        })
        this._intersitialAd.onClose(() => {
            this._intersitialAd.destroy();
            this._intersitialAd = null;
        });
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

    OpenGameBox(appIds: string[] = []) {
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

    public NavigateToApp(appid: string, path?: string, extra?: any): Promise<boolean> {
        return new Promise((resolve, reject) => {
            // if (!this.isSupportJumpOther) {
            //     reject(false);
            //     console.log("当前平台不支持小游戏跳转", this);
            // } else {
            //     this._base.showMoreGamesModal({
            //         appLaunchOptions: [
            //             {
            //                 appId: this.platformData.appId,
            //                 query: "foo=bar&baz=qux",
            //                 extraData: {}
            //             }
            //         ],
            //         success(res) {
            //             resolve(true);
            //             console.log("跳转小游戏成功", appid);
            //         },
            //         fail(err) {
            //             reject(false);
            //             console.log("跳转小游戏失败", appid);
            //         }
            //     });
            // }
            this.navigateToVideo(appid);
            resolve(true);
        });
    }

    public followOfficialAccount(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.RecordEvent('follow', { id: 1 });
            if (this.isDouyin && this.loginCode && GameConst.data.officalAccountEnable) {
                //只有抖音支持
                this.base.openAwemeUserProfile();
            } else {
                this.navigateToVideo(this.OfficalVideoId);
            }
            //今日头条端 暂时没用 
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
    get OfficalVideoId(): string {
        switch (this.systemInfo.appName) {
            case EHostApp.Douyin:
                return GameConst.data.douyinVideoId;
            case EHostApp.Toutiao:
                return GameConst.data.toutiaoVideoId;
            default:
                return "";
        }
    }
    public checkFollowState(): Promise<boolean> {
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
    public addShareListener() {
        console.log('监听分享 ');
        if (CommonSaveData.instance.channelId == 'own') {
            console.log('无效 channel')
            return;
        }
        this._base.onShareAppMessage((res) => {
            console.log('分享', res);
            let shareId = `${LTSDK.instance.uid}${Date.now()}`
            return {
                title: "",
                imageUrl: "",
                query: `from=shareVideoBtn&openId=${LTSDK.instance.uid}&shareId=${shareId}&channelId=${CommonSaveData.instance.channelId}`,
                extra: {
                    videoTopics: PackConst.data.topics,// ['小游戏', '学生党', '钻石方块']
                    withVideoId: true,
                    videoTag: GameConst.data.douyin_id
                },
                success: (rst) => {
                    console.log("分享成功", rst, LTSDK.instance.uid, CommonSaveData.instance.channelId);

                    if (rst.videoId) {
                        LTSDK.instance.reportShareInfo(rst.videoId, shareId);
                        if (window["__GM"]) {
                            this.SetClipboardData(rst.videoId);
                        }
                    }
                },
                fail: (e) => {
                    console.log("分享失败", e);
                },
            };
        });
    }
    public navigateToVideo(videoId: string) {
        this._base.navigateToVideoView({
            videoId: videoId,
            success: (res) => {
                console.log("跳转成功", res);
            },
            fail: (err) => {
                if (err.errCode === 1006) {
                    this._base.showToast({
                        title: "something wrong with your network",
                    });
                }
            },
        });
    }
    public requestVideoList(byLike: boolean = true, count: number = 12): Promise<any> {
        return new Promise<VideoInfo[]>((resolve, reject) => {
            let url = byLike ? "get_top_video_ids_by_like" : "get_top_video_ids_by_time";
            this.base.request({
                url: `https://gate.snssdk.com/developer/api/${url}`,
                method: "POST",
                data: {
                    app_id: this.platformData.appId,
                    number_of_top: count,
                    access_token: LTSDK.instance.token,
                    tag: ""
                },
                success: (res) => {
                    if (res.statusCode == 200 && res.data) {
                        return resolve(res.data);
                    } else {
                        return resolve(null);
                    }
                    // 从res中获取所需视频信息（videoId数组索引与返回数据数组索引一一对应）
                },
            });
        })

    }
    public showFavoriteGuide() {
        this.base.showFavoriteGuide({
            type: "bar",
            content: "一键添加到我的小程序",
            position: "bottom",
            success(res) {
                console.log("引导组件展示成功");
            },
            fail(res) {
                console.log("引导组件展示失败");
            },
        });
    }
    public hasShortcutInstalled() {
        return new Promise<boolean>((resolve) => {

            this.base.checkShortcut({
                success: function (res) {
                    console.log(res);
                    if (res.status && res.status.exist) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                },
                fail: function (res) {
                    console.log(res);
                    resolve(false);
                }
            })
        });

    }
    public createShortcut() {
        return new Promise<boolean>((resolve) => {
            // this.base.showFavoriteGuide({
            //     type: "tip",
            //     content: "点击这里添加到桌面",
            //     success(res) {
            //         console.log("引导组件展示成功");
            //         resolve(true);
            //     },
            //     fail(res) {
            //         console.log("引导组件展示失败");
            //         resolve(false);
            //     },
            // });
            this.base.addShortcut({
                success: function (res) {
                    console.log(res);
                    resolve(true);
                },
                fail: function (res) {
                    console.log(res);
                    resolve(false);
                }
            })
        });

    }
}

export interface VideoInfo {
    cover_url: string;
    digg_count: string;
    rank: number;
    source: number;
    user_name: string;
    video_id: string;
    video_tag: string;
}
export enum EHostApp {
    Douyin = "Douyin",
    XiGua = "XiGua",
    Toutiao = "Toutiao",
    live_stream = "live_stream",//火"山
    news_article_lite = "news_article_lite",
    douyin_lite = "douyin_lite",
}