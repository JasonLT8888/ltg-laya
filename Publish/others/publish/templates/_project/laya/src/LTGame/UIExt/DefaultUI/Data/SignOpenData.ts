/**
 * 签到数据
 */
export default class SignOpenData {

    /**
     * 当前是第几天,如果传null,则使用系统默认
     */
    public currentDayCount: number = null;
    /**
     * 是否已经签到,如果传null,则使用系统默认
     */
    public isSigned: boolean = null;

    /**
     * 展示图标列表,如果为空或者为null,则用默认的
     */
    public iconPaths: string[] = [];

    /**
     * 奖励数量,仅用作展示
     */
    public rewardCount: number[] = [50, 100, 150, 250, 300, 350, 500];

    /**
     * 关闭事件
     * closeType: number
     *      0 :  直接关闭
     *      1 :  普通领取
     *      2 :  双倍领取
     * fromObj: fgui.GObject
     *      用于作为飞金币的起点
     * dayCount: number
     *      当前是第几天,index,从0开始
     */
    public onClose: Laya.Handler = null;
}