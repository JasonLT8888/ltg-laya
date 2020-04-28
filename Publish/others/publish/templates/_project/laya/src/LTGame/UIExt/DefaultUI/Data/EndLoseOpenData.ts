export class EndLoseOpenData {

    /**
     * 是否显示导流位
     */
    public enableShowGames: boolean = true;

    /**
     * 展示文字
     */
    public showText: string = null;

    /**
     * 关闭事件
     * closeType: number
     *  0 :  重新开始
     *  1 :  观看完广告
     */
    public onClose: Laya.Handler = null;

}