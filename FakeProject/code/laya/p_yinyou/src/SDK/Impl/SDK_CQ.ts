import { CommonEventId } from "../../LTGame/Commom/CommonEventId";
import LTHttp from "../../LTGame/Net/LTHttp";
import { EPlatformType } from "../../LTGame/Platform/EPlatformType";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import { ShareInfo } from "../../LTGame/Platform/ShareInfo";
import ShareManager from "../../LTGame/Platform/ShareManager";
import { ECheckState } from "../common/ECheckState";
import SDKADManager from "../SDKADManager";
import SDK_Default from "./SDK_Default";

export default class SDK_CQ extends SDK_Default {

    isADConfigInited: boolean;
    isConfigEnable: boolean;
    flg: string;
    channel: string;
    appId: string;
    controlVersion: string;
    adManager: SDKADManager;
    uid: string = "sdk_test";
    enableDebug: boolean = true;
    dateInfo: DateInfo[] = [];

    private _headPrefix = "https://gamer.api.gugudang.com";

    Init(flg: string, channel: string, controlVersion: string, appId: string) {
        super.Init(flg, channel, controlVersion, appId);
        this._RequestShareInfo();
        this._RecordRankInfo(1, 0);
    }

    private _RequestShareInfo() {
        let uid = this.appId;
        if (LTPlatform.instance.platform == EPlatformType.Oppo) {
            uid = LTPlatform.instance.platformData.appKey
        }
        let sendData = {
            appid: uid,
        };
        LTHttp.Send(this._headPrefix + "/api/shares", Laya.Handler.create(this, this._OnRequestShareInfo), Laya.Handler.create(this, (res) => {
            console.log("获取分享接口访问失败", res);
        }), true, sendData);
    }
    /**
     * 按关卡上报排名 
     * @param levelID 关卡
     * @param score 分数/时长
     */
    private _RecordRankInfo(levelID: number, score: number) {
        let uid = this.appId;
        if (LTPlatform.instance.platform == EPlatformType.Oppo) {
            uid = LTPlatform.instance.platformData.appKey
        }

        let sendData = {
            appid: uid,
            openId: LTPlatform.instance.loginState.code,
            times: score,
            nickname: LTPlatform.instance.userInfo.nickName,
            avatar: LTPlatform.instance.userInfo.avatarUrl,
            type: levelID
        };
        LTHttp.Send(this._headPrefix + "/api/rank/times", Laya.Handler.create(this, this._OnRcordRank), Laya.Handler.create(this, (res) => {
            console.log("上报排名接口失败", res);
        }), true, sendData);
    }
    /**查询周排名 
     * @param levelID 关卡
     * @param score 分数/时长
    * @param onGetList 回调处理
     */
    getWeekRankList(levelID: number, score: number, onGetList: Function) {
        let uid = this.appId;
        if (LTPlatform.instance.platform == EPlatformType.Oppo) {
            uid = LTPlatform.instance.platformData.appKey
        }
        let sendData = {
            appid: uid,
            openId: LTPlatform.instance.loginState.code,
            times: score,
            nickname: LTPlatform.instance.userInfo.nickName,
            avatar: LTPlatform.instance.userInfo.avatarUrl,
            type: levelID
        };
        // LTHttp.Send(this._headPrefix + "/api/rank/week/time", Laya.Handler.create(this, this._OnGetRankList), Laya.Handler.create(this, (res) => {
        //     console.log("获取单日排行接口访问失败", res);
        // }), true, sendData);
        LTHttp.Send(this._headPrefix + "/api/rank/week/time", Laya.Handler.create(this, onGetList), Laya.Handler.create(this, (res) => {
            console.log("获取单日排行接口访问失败", res);
        }), true, sendData);
    }
    /**
     * 查询日排名 
     * @param levelID 关卡
     * @param score 分数/时长
     * @param onGetList 回调处理
     */
    getDayRankList(levelID: number, score: number, onGetList: Function) {
        let uid = this.appId;
        if (LTPlatform.instance.platform == EPlatformType.Oppo) {
            uid = LTPlatform.instance.platformData.appKey
        }
        let sendData = {
            appid: uid,
            openId: LTPlatform.instance.loginState.code,
            times: score,
            nickname: LTPlatform.instance.userInfo.nickName,
            avatar: LTPlatform.instance.userInfo.avatarUrl,
            type: levelID
        };
        LTHttp.Send(this._headPrefix + "/api/rank/day/time", Laya.Handler.create(this, onGetList), Laya.Handler.create(this, (res) => {
            console.log("获取本周排行接口访问失败", res);
        }), true, sendData);
        // LTHttp.Send(this._headPrefix + "/api/rank/day/time", Laya.Handler.create(this, this._OnGetRankList), Laya.Handler.create(this, (res) => {
        //     console.log("获取本周排行接口访问失败", res);
        // }), true, sendData);
    }

    private _OnRcordRank(res) {
        let getObj = JSON.parse(res);
        if (this.enableDebug) {
            console.log("上报排名返回消息", getObj);
        }
        if (getObj.code == 1) {
            console.log('排名上报成功');
        } else {
            console.error("上报排名接口返回错误", getObj);
        }
    }
    private _OnGetRankList(res) {
        let getObj = JSON.parse(res);
        if (this.enableDebug) {
            console.log("获取排名返回消息", getObj);
        }
        if (getObj.code == 1) {
            console.log('获取排名成功');
        } else {
            console.error("获取排名接口返回错误", getObj);
        }
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


    ReportShowAd(adList: SDK.ADReportShowData[]) {
        console.log("功能暂未实现");
    }

    ReportClickAd(adid: number, locationId: number, jumpSuccess: boolean) {
        console.log("功能暂未实现");
    }

    RequestADList() {
        console.log("功能暂未实现");
    }

    RequestRemoteConfig() {
        let uid = this.appId;
        if (LTPlatform.instance.platform == EPlatformType.Oppo || LTPlatform.instance.platform == EPlatformType.Vivo) {
            uid = LTPlatform.instance.platformData.appKey;
        }
        let sendData = {
            appid: uid,
            version: this.controlVersion
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
        this.isADEnable = false;
        this.isConfigEnable = true;
        if (res.code == 1) {
            // 成功
            let result = res.data;
            if (result) {
                console.log('如果需要在重庆后台配置参数 ')

                if (result['payRate']) {
                    this.payRate = parseInt(result['payRate']);
                }
                if (result['isDelayClose']) {
                    this.isDelayClose = parseInt(result['isDelayClose']) == 1;
                }
                if (result['isShielding']) {
                    this.isShielding = 1 == parseInt(result['isShielding']);
                }
                if (result["isADEnable"]) {
                    this.isADEnable = (1 == parseInt(result["isADEnable"]));
                }
                if (result['checkState']) {
                    this.checkState = parseInt(result['checkState']) as ECheckState;
                } else {
                    this.checkState = LTPlatform.instance.platform == EPlatformType.Oppo ? ECheckState.InCheck : ECheckState.Normal;
                }
                if (result['nowtime']) {
                    this.severTime = new Date(result['nowtime']);
                }
                if (result['shieldHours']) {
                    this.shieldHours = result['shieldHours'].split(',');
                }
            } else {
                console.log("未读取到后台信息,默认为打开状态");
            }
        }
        else {
            // 失败
            console.error("云控消息返回失败", res);
        }
        if (this.controlVersion) {
            this.RequestADList();
        }
        this.RequestRemoteDateInfo();
        this.isADConfigInited = true;
        Laya.stage.event(CommonEventId.AD_CONFIG_GETTED);
    }

    Login(code: string, fromAppId: string) {
        console.error('登录参数：code:', code);
        let uid = (LTPlatform.instance.platform == EPlatformType.Oppo || LTPlatform.instance.platform == EPlatformType.Vivo) ? LTPlatform.instance.platformData.appKey : this.appId;
        let sendData = {
            appid: uid,
            // flg: this.flg,
            code: code,
            channel: 'own',
            version: this.controlVersion
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

    private _OnAuthSuccess(res: any) {
        if (this.enableDebug)
            console.log("SDK登录回调触发", res);

        res = JSON.parse(res);
        if (res.code == 1) {
            // 成功
            this._OnLoginSuccess(res);
        } else {
            this._OnLoginFailed(res);
        }
    }

    private _OnLoginSuccess(res: SDK.LoginSuccessParam) {
        console.log("SDK登录成功", res);
        this.uid = res.openid;
        this.ReportDaily();
    }

    private _OnLoginFailed(res: SDK.LoginResult) {
        console.error("SDK登录失败", this.appId, res);
    }

    ReportStat(isShare: boolean, sid: string) {
        console.log("功能暂未实现");
    }

    public ReportDaily() {
        console.log("上报日活 功能暂未实现");
    }

}
export interface DateInfo {
    dayStr: string;
    type: number;
}
