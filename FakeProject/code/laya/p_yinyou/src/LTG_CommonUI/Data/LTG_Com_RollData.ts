import { ILTG_Com_Data } from "./ILTG_Com_Data";
import LTG_UI_RollMediator from "../Mediator/LTG_UI_RollMediator";
import FGuiEx from "../../LTGame/UIExt/FGui/FGuiEx";

export class LTG_Com_RollData implements ILTG_Com_Data {

    /**
     * config: RollConfig.config
     */
    public onRolled: Laya.Handler;
    /**
   * config: RollConfig.config
   */
    public onSpecial: Laya.Handler;

    public Send(): number {
        LTG_UI_RollMediator.instance.Show(this);
        return 0;
    }

    public async WaitClose() {
        await FGuiEx.WaitUIClose(LTG_UI_RollMediator.instance);
    }

}