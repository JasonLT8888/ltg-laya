import { ILTG_Com_Data } from "./ILTG_Com_Data";
import LTG_UI_WinMediator from "../Mediator/LTG_UI_WinMediator";


export class LTG_Com_WinData implements ILTG_Com_Data {
    /**结算进度icon */
    public iconUrl: string = null;
    /**结算进度 */
    public progressUnlockValue: number = 0;
    /**进度解锁回调 */
    public onProgressItemUnlocked: Laya.Handler;
    /**结算金币数量 */
    public winCoin: number = 0;
    /**结算广告倍率 */
    public multiRate: number = 3;
    /**下一关回调 */
    public onNextLevel: Laya.Handler;
    /**金币icon */
    public coinIconUrl: string = "";
    public Send(): number {
        LTG_UI_WinMediator.instance.Show(this);
        return 0;
    }

}