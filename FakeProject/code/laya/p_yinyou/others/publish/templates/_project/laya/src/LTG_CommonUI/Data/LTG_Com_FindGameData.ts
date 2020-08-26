import { ILTG_Com_Data } from "./ILTG_Com_Data";
import LTG_UI_FindGameMediator from "../Mediator/LTG_UI_FindGameMediator";

/**
 * -找回游戏-
 * @param icon_url 可以修改图片(不建议使用),最好通过UI工程修改图片
 */
export class LTG_Com_FindGameData implements ILTG_Com_Data {

    public icon_url: string = null;

    public Send(): number {
        LTG_UI_FindGameMediator.instance.Show(this);
        return 0;
    }

}