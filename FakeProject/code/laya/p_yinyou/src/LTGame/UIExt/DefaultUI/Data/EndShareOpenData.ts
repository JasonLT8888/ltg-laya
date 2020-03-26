/**
 * 结算分享界面
 */
export default class EndShareOpenData {

    /**
     * 提示信息
     */
    public noticeStr: string = "让所有人都知道你的厉害";
    /**
     * 奖励物品图标,如果为null则使用默认
     */
    public rewardIcon: string = null;
    /**
     * 奖励文字内容
     */
    public rewardText: string = "x500";
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