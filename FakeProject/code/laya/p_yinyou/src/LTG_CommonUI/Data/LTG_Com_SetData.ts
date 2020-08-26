import { ILTG_Com_Data } from "./ILTG_Com_Data";
import LTG_UI_SetMediator from "../Mediator/LTG_UI_SetMediator";

/**
 * -设置界面-
 */
export class LTG_Com_SetData implements ILTG_Com_Data {

    public onMusicToggled: Laya.Handler;
    public onShakeToggled: Laya.Handler;
    /**
     * @param code string
     */
    public onCodeEntered: Laya.Handler;

    public Send(): number {
        LTG_UI_SetMediator.instance.Show(this);
        return 0;
    }

}