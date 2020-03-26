/**
 * 皮肤试用界面数据
 */
export default class TrySkinOpenData {

    /**
     * 图标数据
     */
    public iconPaths: string[];

    /**
     * 关闭事件(部分平台数据为伪造数据)
     * closeType: number
     *      -1 :  不试用
     *      >=0 :  试用
     */
    public onClose: Laya.Handler = null;

}