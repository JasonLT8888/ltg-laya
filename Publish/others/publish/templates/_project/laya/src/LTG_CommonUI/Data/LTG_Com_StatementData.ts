import { ILTG_Com_Data } from "./ILTG_Com_Data";
import LTG_UI_WinMediator from "../Mediator/LTG_UI_WinMediator";
import { LTG_UI_StatementMediator } from "../Mediator/LTG_UI_StatementMediator";


export class LTG_Com_StatementData implements ILTG_Com_Data {
    /**拒绝 */
    public onClose: Laya.Handler;
    /**接收 */
    public onConfirm: Laya.Handler;

    public Send(): number {
        LTG_UI_StatementMediator.instance.Show(this);
        return 0;
    }

}