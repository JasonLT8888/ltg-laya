import { ILTG_Com_Data } from "./ILTG_Com_Data";
import LTG_UI_RewardCodeMediator from "../Mediator/LTG_UI_RewardCodeMediator";

/**
 * -兑换码界面-
 * @param onCodeEntered
 */
export class LTG_Com_RewardCodeData implements ILTG_Com_Data {

    /**
     * @param code string
     */
    public onCodeEntered: Laya.Handler;

    public Send(): number {
        LTG_UI_RewardCodeMediator.instance.Show(this);
        return 0;
    }

}