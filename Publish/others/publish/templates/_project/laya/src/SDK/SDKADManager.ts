import LTDictionary from "../LTGame/LTUtils/LTDictionary";

export default class SDKADManager {

    private _adDict: LTDictionary<number, Array<SDK.ADInfoData>>;

    constructor() {
        this._adDict = new LTDictionary<number, Array<SDK.ADInfoData>>();
    }

    /**
     * 初始化指定位置的广告
     * @param locationId 位置ID
     * @param adList 广告列表
     */
    public InitADs(locationId: number, adList: Array<SDK.ADInfoData>) {
        this._adDict[locationId] = adList;
        console.log("广告位置信息初始化完成,位置ID:", locationId, "广告信息:", adList);
    }

    /**
     * 响应广告点击,会自动跳转以及记录广告点击
     * @param adInfo 
     */
    public HandleClickAd(adInfo: SDK.ADInfoData) {

    }

    /**
     * 记录展示
     */
    public RecordShow(...adInfo : SDK.ADInfoData[]) {

    }

    /**
     * 根据广告位置id返回广告
     * @param locationId 
     */
    public GetADListByLocationId(locationId: number): SDK.ADInfoData[] {
        return null;
    }

}