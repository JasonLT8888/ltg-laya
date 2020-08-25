import { ILTG_Com_Data } from "./ILTG_Com_Data";
import LTG_UI_AddShortcutMediator from "../Mediator/LTG_UI_AddShortcutMediator";

/**
 * -添加桌面-
 * @param icon_url 可以修改图片(不建议使用),最好通过UI工程修改图片
 */
export class LTG_Com_AddShortcutData implements ILTG_Com_Data {

    public icon_url: string = null;

    Send(): number {
        LTG_UI_AddShortcutMediator.instance.Show(this);
        return 0;
    }

}