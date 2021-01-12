import DefaultPlatform from "../../DefaultPlatform";
import { EPlatformType } from "../../EPlatformType";
import LTPlatformData from "../../Data/LTPlatformData";
import LTPlatform from "../../LTPlatform";
import LTSDK from "../../../../SDK/LTSDK";
import { ECheckState } from "../../../../SDK/common/ECheckState";

export class NativeAndroidPlatform extends DefaultPlatform {
    platform: EPlatformType = EPlatformType.Native_Android;
    safeArea: LTGame.SafeArea = null;
    bridge: any;
    private _isDebug: boolean = true;;
    protected _cacheScreenScale: number;
    Init(platformData: LTPlatformData) {
        this.platformData = platformData;
        let conchConfig = window['conchConfig'];
        let PlatformClass = window['PlatformClass'];
        let os = conchConfig.getOS();
        if (os == "Conch-android") {
            this.bridge = PlatformClass.createClass("demo.JSBridge");//创建脚步代理
        }
        console.log("平台初始化完成", LTPlatform.platformStr, this);

        this._InitSystemInfo();
        this.loginState = {
            isLogin: true,
            code: "111111111111"
        };
        this.userInfo = { nickName: '未登录用户666', avatarUrl: '66.png' }
        Laya.timer.once(500, this, this.FakeLoginEnd);

    }
    protected _InitSystemInfo() {
        try {
            this.safeArea = {} as LTGame.SafeArea;
            this.safeArea.left = 0;
            this.safeArea.right = 0;
            this.safeArea.bottom = 0;
            this.safeArea.top = 0;
            this.safeArea.width = 750;
            this.safeArea.height = 1334;
            this._cacheScreenScale = 750 / Laya.stage.width;
            console.log("初始化安全区域完成");
        } catch (e) {
            console.error(e);
            console.error("获取设备信息失败,执行默认初始化");
            this.safeArea = null;
        }
    }
    private FakeLoginEnd() {
        if (this.onLoginEnd)
            this.onLoginEnd.run();
    }
    ShowRewardVideoAd(onSuccess: Laya.Handler, onSkipped: Laya.Handler) {
        const obj = {}

        this.bridge.callWithBack(function (json) {
            console.log("激励广告事件:" + json);
            const data = JSON.parse(json);
            //  {event:"", value:""}
            switch (data.event) {
                case "onAdClose":
                    //  视频关闭
                    onSkipped.run();
                    break;
                case "onAdComplete":
                    //  视频播放完成
                    onSuccess.run();
                    break;
                case "onAdError":
                    //  视频报错
                    onSkipped.run();
                    break;
                case "onAdSkipped":
                    //  跳过
                    onSkipped.run();
                    break;
            }
        }, "RewardVideoAd", JSON.stringify(obj));

        this.bridge.call("ShowRewardAd");
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
        const obj = {};

        this.bridge.callWithBack(function (json) {
            console.log("全屏视频广告: " + json);
            const data = JSON.parse(json);
            //  {event:"", value:""}
            switch (data.event) {
                case "onAdClose":
                    //  视频关闭
                    break;
                case "onAdComplete":
                    //  视频播放完成
                    break;
                case "onAdError":
                    //  视频报错
                    break;
                case "onAdSkipped":
                    //  跳过
                    break;
            }
        }, "ShowFullScreenVideo", JSON.stringify(obj));
        this.bridge.call("ShowFullScreenVideo");
    }

    ShowBannerAd() {
        if (LTSDK.instance.checkState != ECheckState.InCheck) {
            this.bridge.call("ShowBanner");
        }
    }

    HideBannerAd() {
        this.bridge.call("RemoveBanner");
    }

}