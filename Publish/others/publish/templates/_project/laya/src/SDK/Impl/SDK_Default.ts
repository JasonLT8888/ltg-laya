import { ISDK } from "../Interface/ISDK";
import SDKADManager from "../SDKADManager";
import { ECheckState } from "../common/ECheckState";
import LTRespackManager from "../../LTGame/Res/LTRespackManager";
import LTHttp from "../../LTGame/Net/LTHttp";
import FakeAdDefine from "../common/FakeAdDefine";
import { CommonEventId } from "../../LTGame/Commom/CommonEventId";

export default class SDK_Default implements ISDK {
    isShielding: boolean = false;
    checkState: ECheckState;
    isADConfigInited: boolean;
    isADEnable: boolean;
    isConfigEnable: boolean;
    flg: string;
    channel: string;
    appId: string;
    controlVersion: string;
    adManager: SDKADManager;
    uid: string = "sdk_test";

    Init(flg: string, channel: string, controlVersion: string, appid: string) {
        this.checkState = ECheckState.Normal;
        this.isADConfigInited = true;
        this.isADEnable = true;
        this.isConfigEnable = true;
        this.flg = flg;
        this.channel = channel;
        this.controlVersion = controlVersion;
        this.appId = appid;

        this.adManager = new SDKADManager();

        this._RequestCheckState();
        this._RequestSelfAdInfo();
        console.log("SDK:Init", this);
    }

    protected _RequestSelfAdInfo() {
        LTHttp.Send(`https://hs.yz061.com/res/down/public/configs/SelfAdConfig.json`, Laya.Handler.create(this, this._OnGetSelfAdInfos),
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
            adList.push(adData);
        }

        // 加入广告控制器
        this.adManager.InitADs(fakePosId, adList);

    }

    protected _RequestCheckState() {
        if (LTRespackManager.instance.baseUrl == null) {
            console.log("无cdn路径,跳过检测版本信息");
            return;
        }
        let packConfigUrl = LTRespackManager.instance.baseUrl + "res/config/PackConst.json";
        LTHttp.Send(packConfigUrl, Laya.Handler.create(null, (res) => {
            let parseData = JSON.parse(res);
            this.checkState = parseData['check_type'];
            console.log("检查状态更新", this.checkState);
        }), Laya.Handler.create(null, (res) => {
            console.log("获取版本状态失败", res);
        }), true);
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

    RecordClickAd(adInfo: SDK.ADInfoData, locationId: number, jumpSuccess: boolean) {
        console.log("SDK:RecordClickAd", adInfo, locationId, jumpSuccess);
    }

    RecordShowAd(adList: SDK.ADRecordShowData[]) {
        console.log("SDK:RecordShowAd", adList);
    }

    RecordStat(isShare: boolean, sid: string) {
        console.log("SDK:RecordStat", isShare, sid);
    }
}