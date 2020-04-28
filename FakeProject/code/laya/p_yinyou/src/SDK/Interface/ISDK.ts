import SDKADManager from "../SDKADManager";
import { ECheckState } from "../common/ECheckState";

export interface ISDK {
    isShielding: boolean;

    /**
     * 游戏唯一标识
     */
    flg: string;

    /**
     * 渠道信息,可能为null
     */
    channel: string;

    /**
     * 云控版本号
     */
    controlVersion: string;

    /**
     * uid 用户唯一id
     */
    uid: string;

    /**
     * 广告控制器
     */
    adManager: SDKADManager;

    /**
     * 程序APPID
     */
    appId: string;

    /**
     * 初始化sdk
     * @param flg 游戏唯一标识
     * @param channel 渠道号
     * @param controlVersion 版本控制信息
     */
    Init(flg: string, channel: string, controlVersion: string, appid: string, configFile?: string);

    /**
     * SDK登录,登录完成后会自动完成日活统计
     * @param code 微信返回的code
     * @param fromAppId 用户来源的appid，没有的情况下可以不传
     */
    Login(code: string, fromAppId: string);

    /**
     * ad 代表 banner 开关
     * 用于控制特殊操作,比如广告提拉等违规操作
     */
    isADEnable: boolean;

    /**
     * config 代表游戏开关
     * 用于控制常规交叉推广
     */
    isConfigEnable: boolean;

    /**
     * 游戏状态
     */
    checkState: ECheckState;

    /**
     * 请求远程开关信息
     */
    RequestRemoteConfig();

    /**
     * 请求广告位信息
     */
    RequestADList();

    /**
     * 记录广告点击
     * @param adInfo 广告数据
     * @param jumpSuccess 是否跳转成功
     */
    RecordClickAd(adInfo: SDK.ADInfoData, locationId: number, jumpSuccess: boolean);

    /**
     * 记录广告展示
     * @param adList 
     */
    RecordShowAd(adList: SDK.ADRecordShowData[]);

    /**
     * 记录看视频和分享
     */
    RecordStat(isShare: boolean, sid: string);

}