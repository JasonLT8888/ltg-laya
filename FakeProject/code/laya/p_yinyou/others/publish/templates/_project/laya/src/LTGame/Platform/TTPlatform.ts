import WXPlatform from "./WXPlatform";
import { EPlatformType } from "./EPlatformType";
import LTPlatformData from "./Data/LTPlatformData";
import LTPlatform from "./LTPlatform";
import ShareManager from "./ShareManager";
import { ShareInfo } from "./ShareInfo";
import StringEx from "../LTUtils/StringEx";
import IRecordManager from "./IRecordManager";
import TTRecordManager from "./Impl/TT/TTRecordManager";

export default class TTPlatform extends WXPlatform {

    platform: EPlatformType = EPlatformType.TT;

    protected _showVideoLoad: boolean = false;

    recordManager: IRecordManager;

    Init(platformData: LTPlatformData) {
        this._base = window["tt"];
        if (this._base == null) {
            console.error("平台初始化错误");
            return;
        }

        this._platformData = platformData;
        this._InitLauchOption();
        // this._Login();
        this._InitShareInfo();
        this._InitSystemInfo();
        this._CreateBannerAd();
        this._CreateVideoAd();
        this._CreateInterstitalAd();

        this.recordManager = new TTRecordManager(this._base);

        window["iplatform"] = this;
    }

    protected _CreateBannerAd() {
        if (StringEx.IsNullOrEmpty(this._platformData.bannerId)) {
            console.log("无有效的banner广告ID,取消加载");
            return;
        }
        let windowWidth = this._base.getSystemInfoSync().windowWidth;
        let windowHeight = this._base.getSystemInfoSync().windowHeight;
        let bannerObj = {};
        bannerObj["adUnitId"] = this._platformData.bannerId; // "adunit-b48894d44d318e5a";
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

    ShareVideoInfo(onSuccess: Laya.Handler, onFailed: Laya.Handler) {
        if (this.recordManager.isRecordSuccess) {
            let shareData = {} as any;
            shareData.channel = "video";
            let getShareData = ShareManager.instance.GetShareInfo();
            shareData.title = getShareData.shareTitle;
            shareData.extra = {
                videoPath: this.recordManager.videoSavePath
            };
            shareData.success = () => {
                this._cacheOnShowHandle = Laya.Handler.create(null, () => {
                    console.log("分享成功");
                    if (onSuccess) {
                        onSuccess.run();
                    }
                })
            };
            shareData.fail = (e) => {
                this._cacheOnShowHandle = Laya.Handler.create(null, () => {
                    console.log("分享失败");
                    if (onFailed) {
                        onFailed.run();
                    }
                })
            }
            this._base.shareAppMessage(shareData);
        } else {
            console.log(LTPlatform.platformStr, "录屏发生错误,无法分享");
        }
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

}