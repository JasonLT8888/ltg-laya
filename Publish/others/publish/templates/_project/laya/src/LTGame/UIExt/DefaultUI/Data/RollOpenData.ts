export default class RollOpenData {

    /**
     * 图标列表
     */
    public iconList: string[] = [];
    /**
     * 名字列表
     */
    public titleList: string[] = [];
    /**
     * 随机权重
     */
    public rollWeight: number[] = [1, 1, 1, 1, 1, 1, 1];

    /**
     * 转中回调
     * index: number 转中的index
     * fromObj: fgui.GObject 用于做飞行起点的物体
     */
    public onRolled: Laya.Handler;

}