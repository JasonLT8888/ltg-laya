/**
 * 离线收益界面数据
 */
export default class OfflineOpenData {

    /**
     * 离线时间,分钟
     */
    public offlineMinutes: number = 0;

    /**
     * 离线奖励
     */
    public rewardCount: number = 1234;

    /**
     * 看视频倍数
     */
    public rewardScake: number = 3.5;

    /**
     * 关闭事件(部分平台数据为伪造数据)
     * closeType: number
     *      0 :  未分享
     *      1 :  已分享
     * fromObj: fgui.GObject
     *      用于作为飞金币的起点
     */
    public onClose: Laya.Handler = null;
}