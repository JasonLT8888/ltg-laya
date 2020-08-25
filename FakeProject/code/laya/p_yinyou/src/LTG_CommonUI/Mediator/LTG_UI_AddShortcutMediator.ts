import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTG_UI_AddShortcut from "../UI/LTCom/LTG_UI_AddShortcut";
import { LTG_Com_AddShortcutData } from "../Data/LTG_Com_AddShortcutData";
import StringEx from "../../LTGame/LTUtils/StringEx";

export default class LTG_UI_AddShortcutMediator extends BaseUIMediator<LTG_UI_AddShortcut> {

    private static _instance: LTG_UI_AddShortcutMediator;
    public static get instance(): LTG_UI_AddShortcutMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_AddShortcutMediator();
            this._instance._classDefine = LTG_UI_AddShortcut;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        // your code
        let openData = this._openParam as LTG_Com_AddShortcutData;
        if (openData == null) {
            throw new Error("请调用LTG_Com_AddShortcutData进行界面打开操作");
        }

        if (!StringEx.IsNullOrEmpty(openData.icon_url)) {
            this.ui.m_view.m_loader_icon.url = openData.icon_url;
        }

        this.ui.m_view.m_btn_close.onClick(this, this._OnClickClose);
        this.ui.m_view.m_btn_ok.onClick(this, this._OnClickClose);
    }

    private _OnClickClose() {
        this.Hide();
    }

}