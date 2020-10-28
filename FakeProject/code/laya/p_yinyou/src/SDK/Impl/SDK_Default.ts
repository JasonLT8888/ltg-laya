import LTHttp from "../../LTGame/Net/LTHttp";
import { EPlatformType } from "../../LTGame/Platform/EPlatformType";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import LTRespackManager from "../../LTGame/Res/LTRespackManager";
import { ECheckState } from "../common/ECheckState";
import FakeAdDefine from "../common/FakeAdDefine";
import { ISDK } from "../Interface/ISDK";
import SDKADManager from "../SDKADManager";
import { DateInfo } from "./SDK_CQ";
import StringEx from "../../LTGame/LTUtils/StringEx";
import GameData from "../../script/common/GameData";

export default class SDK_Default implements ISDK {

    shieldHours: string[];
    severTime: Date;
    isDelayClose: boolean;
    payRate: number;
    checkState: ECheckState;
    isShielding: boolean = false;
    isADEnable: boolean;
    isADConfigInited: boolean;
    isConfigEnable: boolean;
    flg: string;
    channel: string;
    appId: string;
    controlVersion: string;
    adManager: SDKADManager;
    uid: string = "";
    dateInfo: DateInfo[];
    token: string;

    Init(flg: string, channel: string, controlVersion: string, appid: string) {
        this.isADConfigInited = true;
        this.isADEnable = false;
        this.isDelayClose = false;
        this.isShielding = false;
        this.payRate = 0;
        this.checkState = ECheckState.InCheck;
        this.isConfigEnable = true;
        this.flg = flg;
        this.channel = channel;
        this.controlVersion = controlVersion;
        this.appId = appid;
        this.severTime = new Date();
        this.shieldHours = [];
        this.adManager = new SDKADManager();
        this._RequestSelfAdInfo();
        console.log("SDK:Init", this);
        if (StringEx.IsNullOrEmpty(GameData.instance.uid)) {
            GameData.instance.uid = 'YT_' + Number(Math.random().toString().substr(4, 3) + Date.now()).toString(36);
            GameData.SaveToDisk();
        }
        this.uid = GameData.instance.uid;
    }
    public getToken() {
        let sendData = {
            appid: LTPlatform.instance.platformData.appId
        };
        LTHttp.Send('https://games.api.gugudang.com//api/get/games/token', Laya.Handler.create(this, (res) => {
            console.log(res);
            res = JSON.parse(res);
            if (res && res.code == 0) {
                this.token = res.data.data.access_token;
            }
        }), null, true, sendData);
    }
    /**CDN 节假日信息配置 年底需更新次年数据 */
    RequestRemoteDateInfo() {
        LTHttp.Send(`https://hs.yz061.com/res/down/public/configs/DateInfo.json`, Laya.Handler.create(this, this.onGetDatesInfo),
            Laya.Handler.create(this, this.onGetDatesError), true);
    }
    onGetDatesError(res: string) {
        console.error('云 获取日历信息失败', res);

    }
    reportShareInfo(videoId: string, shareId: string) {

    }
    onGetDatesInfo(res: string) {
        let days = JSON.parse(res);
        let data = days as DateInfo[];
        this.dateInfo = data.filter(e => e.type != 0);
        console.log('云 获取休息日信息', this.dateInfo);
        this._RequestCheckState();
    }
    protected _RequestSelfAdInfo() {
        let configFile = 'SelfAdConfig.json';
        if (LTPlatform.instance.platform == EPlatformType.Oppo) {
            configFile = 'YTSelf.json';
        }
        LTHttp.Send(`https://hs.yz061.com/res/down/public/configs/${configFile}`, Laya.Handler.create(this, this._OnGetSelfAdInfos),
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
            adData.ad_package = fakeAd.package;
            if (adData.ad_appid != this.appId) {
                adList.push(adData);
            }
        }

        // 加入广告控制器
        this.adManager.InitADs(fakePosId, adList);

    }

    protected _RequestCheckState() {
        // if (LTRespackManager.instance.baseUrl == null) {
        //     console.log("无cdn路径,跳过检测版本信息");
        //     return;
        // }
        console.log('审核状态由重庆后台配置', `审核状态:${ECheckState[this.checkState]}`);
        // let packConfigUrl = LTRespackManager.instance.baseUrl + "res/config/PackConst.json";
        // LTHttp.Send(packConfigUrl, Laya.Handler.create(null, (res) => {
        //     let parseData = JSON.parse(res);
        //     this.checkState = parseData['check_type'];
        //     console.log("检查状态更新", this.checkState);
        // }), Laya.Handler.create(null, (res) => {
        //     console.log("获取版本状态失败", res);
        // }), true);
        if (this.checkState == ECheckState.NoGame) {
            //工作时时段屏蔽
            let nowtime = this.severTime;
            let date = nowtime.toISOString().substring(0, 10).replace(/\-/g, '');
            let h = nowtime.getHours();
            h = nowtime.getHours();
            let today = this.dateInfo.filter(e => e.dayStr == date);
            let isWorkday = true;
            if (today && today.length) {
                isWorkday = today[0].type == 0;//type：0 工作日 1 周末  2 节假日 
            }
            //工作  时段  
            if (isWorkday && this.shieldHours && this.shieldHours.indexOf(h.toString()) >= 0) {
                console.log('工作', this.shieldHours, h);
                this.checkState = ECheckState.Normal;
            } else {
                console.log('休息', date, h);
            }
            if (this.isShielding) {
                //屏蔽洗钱
                this.checkState = ECheckState.Normal;
                this.payRate = 0;
            }
        }
        console.log(`${this.appId}---云控版本为:`, this.controlVersion, "config:", this.isConfigEnable, `广告开关:${this.isADEnable}, 审核状态:${ECheckState[this.checkState]},误触概率:${this.payRate},屏蔽状态:${this.isShielding},延迟按钮:${this.isDelayClose}`);
    }
    Login(code: string, fromAppId: string) {
        console.log("SDK:Login", code, fromAppId);
    }

    RequestRemoteConfig() {
        console.log("SDK:RequestRemoteConfig");
    }

    RequestADList() {
        console.log("SDK:RequestADList");
    }

    ReportClickAd(ad_id: number, locationId: number, jumpSuccess: boolean) {
        console.log("SDK:ReportClickAd", ad_id);
    }

    ReportShowAd(adList: SDK.ADReportShowData[]) {
        console.log("SDK:ReportShowAd", adList);
    }

    ReportStat(isShare: boolean, sid: string) {
        console.log("SDK:ReportStat", isShare, sid);
    }
    ReportLogin() {

    }
    /**查询周排名 
* @param levelID 关卡
* @param score 分数/时长
* @param onGetList 回调处理
*/
    GetWeekRankList(levelID: number, score: number, onGetList: Function) {

    }
    /**查询日排名 
   * @param levelID 关卡
   * @param score 分数/时长
    *@param onGetList 回调处理
   */
    GetDayRankList(levelID: number, score: number, onGetList: Function) {

    }
    /**
     * 按关卡上报排名 
     * @param levelID 关卡
     * @param score 分数/时长
     */
    RecordRankInfo(levelID: number, score: number) {

    }
}