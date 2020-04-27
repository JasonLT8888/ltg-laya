export class UnlockProgressOpenData {

    /**
     * 起始进度
     */
    public startProgress: number = 0;

    /**
     * 最终进度
     */
    public endProgress: number = 50;

    /**
     * 插值时间
     */
    public tweenTime: number = 1;

    /**
     * 解锁的图标
     */
    public iconPath: string = null;

    /**
     * 关闭事件
     * closeType: number
     *  0 :  直接关闭
     *  1 :  观看完广告
     *  2 :  点击领取关闭
     */
    public onClose: Laya.Handler = null;

}