import { ILTG_Com_Data } from "./ILTG_Com_Data";
import LTG_UI_NoticeMediator from "../Mediator/LTG_UI_NoticeMediator";

/**
 * -公告界面-
 * @param content 公告内容,支付富文本
 */
export class LTG_Com_NoticeData implements ILTG_Com_Data {

    public content: string = "<font color='#ff0000'>游戏公告</font>七个字";

    Send(): number {
        LTG_UI_NoticeMediator.instance.Show(this);
        return 0;
    }

}