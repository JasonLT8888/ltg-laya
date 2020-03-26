/**
 * 结算奖励界面(导流)
 */
export default class EndRewardOpenData {

    /**
     * 是否显示导流位
     */
    public enableShowGames: boolean = true;

    /**
     * 奖励金币数量
     */
    public rewardCount: number = 30;

    /**
     * 关闭事件(部分平台数据为伪造数据)
     * closeType: number
     *      0 :  普通领取
     *      1 :  双倍领取
     * fromObj: fgui.GObject
     *      用于作为飞金币的起点
     */
    public onClose: Laya.Handler = null;

}