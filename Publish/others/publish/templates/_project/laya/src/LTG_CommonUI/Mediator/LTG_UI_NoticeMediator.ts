import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTG_UI_Notice from "../UI/LTCom/LTG_UI_Notice";
import { LTG_Com_NoticeData } from "../Data/LTG_Com_NoticeData";
import LTUI from "../../LTGame/UIExt/LTUI";

export default class LTG_UI_NoticeMediator extends BaseUIMediator<LTG_UI_Notice> {

    private static _instance: LTG_UI_NoticeMediator;
    public static get instance(): LTG_UI_NoticeMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_NoticeMediator();
            this._instance._classDefine = LTG_UI_Notice;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        // your code
        let openData = this._openParam as LTG_Com_NoticeData;
        if (openData == null) {
            throw new Error("请调用LTG_Com_NoticeData进行界面打开操作");
        }
        this.ui.m_view.m_text_notice.text = openData.content;
        this.ui.m_view.m_btn_close.onClick(this, this._OnClickClose);
    }

    private _OnClickClose() {
        LTUI.TrigerBtnClick();
        this.Hide();
    }

}