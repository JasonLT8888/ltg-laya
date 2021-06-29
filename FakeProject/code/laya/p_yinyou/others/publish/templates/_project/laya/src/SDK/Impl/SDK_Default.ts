import LTHttp from "../../LTGame/Net/LTHttp";
import { EPlatformType } from "../../LTGame/Platform/EPlatformType";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import LTRespackManager from "../../LTGame/Res/LTRespackManager";
import { ECheckState } from "../common/ECheckState";
import FakeAdDefine from "../common/FakeAdDefine";
import { ISDK, RemoteConfig } from "../Interface/ISDK";
import SDKADManager from "../SDKADManager";
import StringEx from "../../LTGame/LTUtils/StringEx";
import GameData from "../../script/common/GameData";
import CommonSaveData from "../../LTGame/Commom/CommonSaveData";
import md5 from "./../Libs/md5.js";

export default class SDK_Default implements ISDK {
    configs: RemoteConfig;
    checkState: ECheckState;
    get isShielding(): boolean {
        return this.configs.isShielding;
    }
    get isDelayClose(): boolean {
        return this.configs.isDelayClose;
    }
    get isADEnable(): boolean {
        return this.configs.isADEnable;
    }
    get isNavEnable(): boolean {
        return this.configs.isNavEnable;
    }
    get isInCheck() {
        return this.checkState == ECheckState.InCheck;
    }

    isADConfigInited: boolean;
    isConfigEnable: boolean;
    flg: string;
    channel: string;
    appId: string;
    controlVersion: string;
    adManager: SDKADManager;
    uid: string = "";
    navLevels: number[];
    token: string;
    timeRub: number;
    randomNum: string;
    Init(flg: string, channel: string, controlVersion: string, appid: string) {
        this.timeRub = Date.now();
        this.randomNum = Math.random().toString(36).substr(2, 8);
        this.configs = new RemoteConfig();
        this.isADConfigInited = true;
        this.navLevels = [];
        this.configs.payRate = 0;
        this.checkState = ECheckState.Normal;
        this.isConfigEnable = true;
        this.flg = flg;
        this.channel = channel;
        this.controlVersion = controlVersion;
        this.appId = appid;
        if (StringEx.IsNullOrEmpty(CommonSaveData.instance.uid)) {
            let uuid = md5.hex_md5(`${this.appId}#${this.timeRub}#${this.randomNum}#43b49394197b65540979c7143da7c8a8`);
            CommonSaveData.instance.uid = uuid;
            CommonSaveData.SaveToDisk();
        }
        this.uid = CommonSaveData.instance.uid;
        this.configs.severTime = "";
        this.configs.shieldHours = [];
        this.adManager = new SDKADManager();
        console.log("SDK:Init", this);
    }
    public getToken(): Promise<string> {
        return new Promise<string>((resolve, rej) => {
            if (this.token) {
                resolve(this.token);
            } else {
                let sendData = {
                    appid: LTPlatform.instance.platformData.appId
                };
                LTHttp.Send('https://games.api.gugudang.com//api/get/youxi/token', Laya.Handler.create(this, (res) => {
                    console.log(res);
                    res = JSON.parse(res);
                    if (res && res.code == 0) {
                        this.token = res.data.data.access_token;
                        resolve(this.token);
                    } else {
                        rej(null);
                    }
                }), null, true, sendData);
            }
        })
    }

    reportShareInfo(videoId: string, shareId: string) {

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

    Login(code: string, fromAppId: string) {
        console.log("SDK:Login", code, fromAppId);
    }

    RequestRemoteConfig() {
        console.log("SDK:RequestRemoteConfig");
    }

    /**导流用的图片 */
    RequestADList() {
        let configFile = 'SelfAdConfig.json';
        LTHttp.Send(`https://file.gugudang.com/res/down/public/configs/${configFile}`, Laya.Handler.create(this, this._OnGetSelfAdInfos),
            Laya.Handler.create(this, this._OnGetSelfAdInfosFailed), true);
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
    ReportDaily() { }
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