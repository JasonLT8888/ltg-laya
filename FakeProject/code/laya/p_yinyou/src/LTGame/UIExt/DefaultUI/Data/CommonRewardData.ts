export class CommonRewardData {
    /**数据*/
    datas: RewardItem[];
    /**获取金币 */
    onGetMoney: (coinCount: number) => void;
    /**获取皮肤 */
    onGetSkin: (skinId?: number) => void;
    /**关闭事件 */
    onClose: Laya.Handler;
}
export class RewardItem {
    /**金币/皮肤的图标 */
    icon: string;
    /**0=金币/1=皮肤 */
    type: number;
    /**金币数量 / 皮肤id */
    value: number;
}