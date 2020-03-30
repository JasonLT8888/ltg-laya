import { ISDK } from "../Interface/ISDK";
import SDKADManager from "../SDKADManager";
import LTHttp from "../../LTGame/Net/LTHttp";
import { ShareInfo } from "../../LTGame/Platform/ShareInfo";
import ShareManager from "../../LTGame/Platform/ShareManager";
import { CommonEventId } from "../../LTGame/Commom/CommonEventId";
import FakeAdDefine from "../common/FakeAdDefine";

export default class SDK_CQ implements ISDK {

    isADConfigInited: boolean;
    isADEnable: boolean;
    isConfigEnable: boolean;
    flg: string;
    channel: string;
    appId: string;
    controlVersion: string;
    adManager: SDKADManager;
    uid: string = "sdk_test";

    enableDebug: boolean = true;

    private _headPrefix = "https://gamer.api.gugudang.com";

    Init(flg: string, channel: string, controlVersion: string, appId: string) {
        this.flg = flg;
        this.channel = channel;
        this.controlVersion = controlVersion;
        this.appId = appId;

        this.isADEnable = false;
        this.isConfigEnable = false;
        this.isADConfigInited = false;

        this.adManager = new SDKADManager();

        this._RequestShareInfo();
        this._RequestSelfAdInfo();
    }

    private _RequestSelfAdInfo() {
        LTHttp.Send("https://hs.yz061.com/res/down/public/configs/SelfAdConfig.json", Laya.Handler.create(this, this._OnGetSelfAdInfos),
            Laya.Handler.create(this, this._OnGetSelfAdInfosFailed), true);
    }

    private _OnGetSelfAdInfosFailed(res: string) {
        console.error("拉取到广告信息失败", res);
    }

    private _OnGetSelfAdInfos(res: string) {
        let adJson = JSON.parse(res) as FakeAdDefine[];
        console.log("拉取到广告信息", adJson.length, "条");
        let fakePosId = 0;
        let adList = [];
        for (let fakeAd of adJson) {
            let adData = {} as SDK.ADInfoData;
            adData.ad_appid = fakeAd.id;
            adData.ad_img = fakeAd.icon;
            adData.ad_name = fakeAd.title;
            adList.push(adData);
        }

        // 加入广告控制器
        this.adManager.InitADs(fakePosId, adList);
    }

    private _RequestShareInfo() {
        let sendData = {
            appid: this.appId
        };
        LTHttp.Send(this._headPrefix + "/api/shares", Laya.Handler.create(this, this._OnRequestShareInfo), Laya.Handler.create(this, (res) => {
            console.log("获取分享接口访问失败", res);
        }), true, sendData);
    }

    private _OnRequestShareInfo(res) {
        let getObj = JSON.parse(res);
        if (this.enableDebug) {
            console.log("分享返回消息", getObj);
        }
        if (getObj.code == 1) {
            let shareInfo = getObj.data as SDK.ShareData_CQ;
            if (shareInfo == null) {
                console.log("未获取到配置的分享信息");
                return;
            }
            let wrapShareInfo = new ShareInfo();
            wrapShareInfo.shareId = shareInfo.id;
            wrapShareInfo.shareImg = shareInfo.picurl;
            wrapShareInfo.shareTitle = shareInfo.title;
            ShareManager.instance.AddShareInfo(wrapShareInfo);
        } else {
            console.error("分享接口返回错误", getObj);
        }
    }

    RecordShowAd(adList: SDK.ADRecordShowData[]) {
        console.log("功能暂未实现");
    }

    RecordClickAd(adInfo: SDK.ADInfoData, locationId: number, jumpSuccess: boolean) {
        console.log("功能暂未实现");
    }

    RequestADList() {
        console.log("功能暂未实现");
    }

    RequestRemoteConfig() {
        let sendData = {
            appid: this.appId
        }

        LTHttp.Send(this._headPrefix + "/api/game/config", Laya.Handler.create(this, this._OnRemoteConfigBack), Laya.Handler.create(this, (res) => {
            console.log("云控HTTP访问失败", res);
        }), true, sendData);
    }

    /**
     * 获取云控配置回调
     * @param res 
     */
    private _OnRemoteConfigBack(res: any) {
        // 防止后台配置错误
        if (res.status == null) {
            res = JSON.parse(res as string);
        }
        if (this.enableDebug)
            console.log("云控返回消息:", res);
        this.isADEnable = true;
        this.isConfigEnable = true;
        if (res.code == 1) {
            // 成功
            let result = res.data;
            let version = result["version"];
            if (this.controlVersion == version) {
                let config = result["config"];
                let ad = result["ad"];
                if (config) {
                    this.isConfigEnable = 1 == config;
                }
                if (ad) {
                    this.isADEnable = 1 == ad;
                }
            } else {
                console.log("未读取到后台信息,默认为打开状态");
            }
        }
        else {
            // 失败
            console.error("云控消息返回失败", res);
        }
        console.log("云控版本为:", this.controlVersion, "config:", this.isConfigEnable, "ad:", this.isADEnable);
        if (this.controlVersion) {
            this.RequestADList();
        }
        this.isADConfigInited = true;
        Laya.stage.event(CommonEventId.AD_CONFIG_GETTED);
    }

    Login(code: string, fromAppId: string) {
        let sendData = {
            flg: this.flg,
            code: code
        };
        if (this.channel) {
            sendData["channel"] = this.channel;
        }
        if (fromAppId) {
            sendData["fappid"] = fromAppId;
        }
        LTHttp.Send(this._headPrefix + "/api/login", Laya.Handler.create(this, this._OnAuthSuccess), Laya.Handler.create(this, (res) => {
            console.log("登录HTTP访问失败", res);
        }), true, sendData);
    }

    private _OnAuthSuccess(res: SDK.LoginResult) {
        if (this.enableDebug)
            console.log("SDK登录回调触发", res);
        if (res.result == 1) {
            // 成功
            this._OnLoginSuccess(res.result);
        } else {
            this._OnLoginFailed(res);
        }
    }

    private _OnLoginSuccess(res: SDK.LoginSuccessParam) {
        console.log("SDK登录成功", res);
        this.uid = res.openid;
        this.RecordDaily();
    }

    private _OnLoginFailed(res: SDK.LoginResult) {
        console.error("SDK登录失败", res);
    }

    RecordStat(isShare: boolean, sid: string) {
        console.log("功能暂未实现");
    }

    public RecordDaily() {
        console.log("功能暂未实现");
    }

}