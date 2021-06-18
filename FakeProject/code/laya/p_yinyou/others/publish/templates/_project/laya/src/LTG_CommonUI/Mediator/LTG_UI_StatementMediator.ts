import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTG_UI_Statement from "../UI/LTCom/LTG_UI_Statement";
import { LTG_Com_StatementData } from "../Data/LTG_Com_StatementData";



export class LTG_UI_StatementMediator extends BaseUIMediator<LTG_UI_Statement> {
    private static _instance: LTG_UI_StatementMediator;
    public get ui(): LTG_UI_Statement {
        return this._ui;
    }

    public static get instance(): LTG_UI_StatementMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_StatementMediator();
            this._instance._classDefine = LTG_UI_Statement;
        }
        return this._instance;
    }
    private cacheData: LTG_Com_StatementData;
    _OnShow() {
        super._OnShow();
        this.cacheData = this._openParam as LTG_Com_StatementData;
        this.ui.m_btn_cancel.onClick(this, this._OnClickCancel);
        this.ui.m_btn_confirm.onClick(this, this._OnClickConfirm);
    }
    _OnClickConfirm() {
        this.cacheData.onConfirm?.run();
        this.Hide();
    }
    _OnClickCancel() {
        this.cacheData.onClose?.run();
        this.Hide();
    }
    protected _OnHide() { }
}
