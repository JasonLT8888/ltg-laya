export default class OneMoreOpenData {

    public rewardText: string = "+300";
    public rewardIcon: string = null;
    
    /**
     * 关闭事件
     * closeType: number
     *      0 :  直接关闭
     *      1 :  普通领取
     *      2 :  双倍领取
     * fromObj: fgui.GObject
     *      用于作为飞金币的起点
     */
    public onClose: Laya.Handler = null;
}