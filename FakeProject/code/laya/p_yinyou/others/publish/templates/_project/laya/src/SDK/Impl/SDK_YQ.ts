import LTHttp from "../../LTGame/Net/LTHttp";
import SDKADManager from "../SDKADManager";
import StringEx from "../../LTGame/LTUtils/StringEx";

import CryptoJS from "./../Libs/hmac-sha256.js";
import md5 from "./../Libs/md5.js";
import ShareManager from "../../LTGame/Platform/ShareManager";
import { ShareInfo } from "../../LTGame/Platform/ShareInfo";
import SDK_Default from "./SDK_Default";

export default class SDK_YQ extends SDK_Default {

    isADEnable: boolean;
    isConfigEnable: boolean;
    flg: string;
    channel: string;
    controlVersion: string;
    appId: string;
    adManager: SDKADManager;
    uid: string = "sdk_test";

    enableDebug: boolean = false;

    Init(flg: string, channel: string, controlVersion: string, appId: string) {
        this.flg = flg;
        this.channel = channel;
        this.controlVersion = controlVersion;
        this.appId = appId;

        this.isADEnable = false;
        this.isConfigEnable = false;

        this.adManager = new SDKADManager();

    }

    RecordShowAd(adList: SDK.ADRecordShowData[]) {
        let reportData = {};
        reportData["gflg"] = this.flg;
        reportData["channel"] = this.channel;
        reportData["data"] = adList;
        LTHttp.Send("https://api.yz061.com/exposure", null, null, false, reportData);
    }

    RecordClickAd(adInfo: SDK.ADInfoData, locationId: number, jumpSuccess: boolean) {
        let reportData = {};
        reportData["gflg"] = this.flg;
        reportData["uid"] = this.uid;
        reportData["ad_id"] = adInfo.ad_id;
        reportData["location_id"] = locationId;
        reportData["channel"] = this.channel;
        if (jumpSuccess) {
            reportData["status"] = "cb";
        }
        LTHttp.Send("https://api.yz061.com/reportad", null, null, false, reportData);
    }

    RequestADList() {
        LTHttp.Send("https://api.yz061.com/game/" + this.flg, Laya.Handler.create(this, this._OnGetADList), Laya.Handler.create(this, (res) => {
            console.log("请求广告位HTTP访问失败", res);
        }), true);
    }

    /**
     * 获取广告位列表回调
     * @param res 
     */
    private _OnGetADList(res: any) {
        if (res.status == null) {
            res = JSON.parse(res);
        }
        if (this.enableDebug)
            console.log("获取到广告位信息:", res);
        if (res.status == 1) {
            for (let item of res.result) {
                let adItem = item as SDK.ADPosData;
                this._RequestADListOnPos(adItem);
            }
        } else {
            console.error("获取广告位信息失败", res);
        }
    }

    private _RequestADListOnPos(adPosData: SDK.ADPosData) {
        if (this.enableDebug)
            console.log("请求具体位置广告信息:", adPosData);
        // 广告
        if (adPosData.matter_type == 1) {
            LTHttp.Send(adPosData.url, Laya.Handler.create(this, (res) => {
                if (res.status == null) {
                    res = JSON.parse(res);
                }
                if (this.enableDebug)
                    console.log("获取到广告位具体信息:", res);
                if (res.status == 1) {
                    let adList = [];
                    for (let item of res.result) {
                        let adInfo = item as SDK.ADInfoData;
                        if (adInfo.ad_device == 0) {
                            // 全加入
                            adList.push(adInfo);
                        } else if (adInfo.ad_device == 1 && Laya.Browser.onAndroid) {
                            // android设备加入
                            adList.push(adInfo);
                        } else if (adInfo.ad_device == 2 && Laya.Browser.onIOS) {
                            // ios设备加入
                            adList.push(adInfo);
                        }
                    }
                    if (adList.length > 0) {
                        // 加入广告控制器
                        this.adManager.InitADs(adPosData.location_id, adList);
                    }
                } else {
                    console.error("获取广告位具体信息失败", res);
                }

            }), Laya.Handler.create(this, (res) => {
                console.log("请求具体广告信息HTTP访问失败", res);
            }), true, { uid: this.uid });
        } else if (adPosData.matter_type == 2) {
            // 分享
            LTHttp.Send(adPosData.url, Laya.Handler.create(this, (res) => {
                if (res.status == null) {
                    res = JSON.parse(res);
                }
                if (this.enableDebug)
                    console.log("获取到分享具体信息:", res);
                if (res.status == 1) {
                    for (let item of res.result) {
                        let shareInfo = item as SDK.ShareData;
                        let wrapShareInfo = new ShareInfo();
                        wrapShareInfo.shareId = shareInfo.share_id;
                        wrapShareInfo.shareImg = shareInfo.share_img;
                        wrapShareInfo.sharePath = shareInfo.share_path;
                        wrapShareInfo.shareTitle = shareInfo.share_title;
                        ShareManager.instance.AddShareInfo(wrapShareInfo);
                    }
                } else {
                    console.error("获取分享具体信息失败", res);
                }
            }), Laya.Handler.create(this, (res) => {
                console.log("请求分享信息HTTP访问失败", res);
            }), true, { uid: this.uid });
        }

    }

    RequestRemoteConfig() {
        let sendData = {
            flg: this.flg
        }
        LTHttp.Send("https://api.yz061.com/additional", Laya.Handler.create(this, this._OnRemoteConfigBack), Laya.Handler.create(this, (res) => {
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

        if (res.status == 1) {
            // 成功
            let result = res.result;
            if (result != null) {
                let config = result["config"];
                let ad = result["ad"];
                for (let key in config) {
                    if (key == this.controlVersion) {
                        this.isConfigEnable = config[key] == "1";
                        break;
                    }
                }
                for (let key in ad) {
                    if (key == this.controlVersion) {
                        this.isADEnable = (ad[key] == "1" && this.channel != "own");
                        break;
                    }
                }
            }
        }
        else {
            // 失败
            console.error("云控消息返回失败", res);
            this.isADEnable = false;
            this.isConfigEnable = false;
        }
        console.log("云控版本为:", this.controlVersion, "config:", this.isConfigEnable, "ad:", this.isADEnable);
        if (this.controlVersion) {
            this.RequestADList();
        }
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
            sendData["appid"] = fromAppId;
        }
        LTHttp.Send("https://api.yz061.com/auth", Laya.Handler.create(this, this._OnAuthSuccess), Laya.Handler.create(this, (res) => {
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
    private canShowAds() {

    }
    public RecordDaily() {
        let recordData = {};
        recordData["flg"] = this.flg;
        recordData["uid"] = this.uid;
        recordData["channel"] = this.channel;
        LTHttp.Send("https://api.yz061.com/daily", null, null, false, recordData);
    }

    RecordStat(isShare: boolean, sid: string) {
        let recordData = {};
        recordData["flg"] = this.flg;
        recordData["channel"] = this.channel;
        recordData["loc"] = isShare ? "share" : "video";
        recordData["uid"] = this.uid;
        if (!StringEx.IsNullOrEmpty(sid)) {
            recordData["sid"] = sid;
        }
        let sign = this._CalcSign(recordData);
        LTHttp.SendPro("https://api.yz061.com/stat?sign=" + sign, Laya.Handler.create(null, (res) => {
            console.log("stat", res);
        }), null, "post", recordData);
    }

    private _CalcSign(obj: object): string {
        let keyList = Object.keys(obj).sort();
        let paramList = [];
        for (let key of keyList) {
            paramList.push(key + "=" + obj[key]);
        }
        let signStr = paramList.join("&");

        return CryptoJS.HmacSHA256(signStr, md5.hex_md5(this.uid + this.flg)).toString();
    }

    private _OnLoginSuccess(res: SDK.LoginSuccessParam) {
        console.log("SDK登录成功", res);
        this.uid = res.openid;
        this.RecordDaily();
    }

    private _OnLoginFailed(res: SDK.LoginResult) {
        console.error("SDK登录失败", res);
    }

}