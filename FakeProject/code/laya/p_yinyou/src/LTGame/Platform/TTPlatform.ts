import WXPlatform from "./WXPlatform";
import { EPlatformType } from "./EPlatformType";
import LTPlatformData from "./Data/LTPlatformData";
import MathEx from "../LTUtils/MathEx";
import LTPlatform from "./LTPlatform";
import ShareManager from "./ShareManager";
import { ShareInfo } from "./ShareInfo";
import StringEx from "../LTUtils/StringEx";

export default class TTPlatform extends WXPlatform {

    platform: EPlatformType = EPlatformType.TT;

    protected _showVideoLoad: boolean = false;

    private _startCallBack: Laya.Handler;
    private _endCallBack: Laya.Handler;

    public is

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
        this._CreateRecordManager();

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

    protected _CreateRecordManager() {
        this._isRecording = false;
        this._isRecordSuccess = false;
        this._recorderManager = this._base.getGameRecorderManager();
        this._recorderManager.onStart((res) => {
            console.log("开始录制", res);
            this._isRecording = true;
            this._isRecordSuccess = false;
            this._startCallBack && this._startCallBack.run();
            this._startCallBack = null;
        });
        this._recorderManager.onStop((res) => {
            console.log("停止录制", res);
            this._cacheRecorderVideoPath = res.videoPath;
            this._isRecording = false;
            this._isRecordSuccess = true;
            this._endCallBack && this._endCallBack.run();
            this._endCallBack = null;
        });
        this._recorderManager.onError((err) => {
            console.log("录制发生错误", err);
            this._isRecordSuccess = false;
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

    StartRecord(maxTime: number, startCallBack: Laya.Handler, overCallBack: Laya.Handler) {
        if (this._isRecording) {
            console.log("视频已经在录制中,不能重复录制");
            return;
        }
        console.log("调用开始录屏");
        maxTime = MathEx.Clamp(maxTime, 3, 300);
        this._recorderManager.start(
            {
                duration: maxTime
            }
        );
        if (this._startCallBack) {
            this._startCallBack.recover();
            this._startCallBack = null;
        }
        this._startCallBack = startCallBack;
        if (this._endCallBack) {
            this._endCallBack.recover();
            this._endCallBack = null;
        }
        this._endCallBack = overCallBack;
    }

    StopRecord() {
        if (!this._isRecording) {
            console.log("没有视频正在录制中,无法停止录制");
            return;
        }
        console.log("调用停止录屏");
        this._recorderManager.stop();
    }

    ShareVideoInfo(onSuccess: Laya.Handler, onFailed: Laya.Handler) {
        if (this._isRecordSuccess) {
            let shareData = {} as any;
            shareData.channel = "video";
            let getShareData = ShareManager.instance.GetShareInfo();
            shareData.title = getShareData.shareTitle;
            shareData.extra = {
                videoPath: this._cacheRecorderVideoPath
            };
            shareData.success = () => {
                console.log("分享成功");
                if (onSuccess) {
                    onSuccess.run();
                }
            };
            shareData.fail = (e) => {
                console.log("分享失败", e);
                if (onFailed) {
                    onFailed.run();
                }
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
            console.log("分享成功");

            if (onSuccess) {
                onSuccess.run();
            }
        }

        shareObj["fail"] = () => {
            console.log("分享失败");

            if (onFailed) {
                onFailed.run();
            }
        }

        this._base.shareAppMessage(shareObj);
    }

}