import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTG_UI_RewardCode from "../UI/LTCom/LTG_UI_RewardCode";
import { LTG_Com_RewardCodeData } from "../Data/LTG_Com_RewardCodeData";

export default class LTG_UI_RewardCodeMediator extends BaseUIMediator<LTG_UI_RewardCode> {

    private static _instance: LTG_UI_RewardCodeMediator;
    public static get instance(): LTG_UI_RewardCodeMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_RewardCodeMediator();
            this._instance._classDefine = LTG_UI_RewardCode;
        }
        return this._instance;
    }

    private _cacheData: LTG_Com_RewardCodeData;

    _OnShow() {
        super._OnShow();
        // your code

        this._cacheData = this._openParam as LTG_Com_RewardCodeData;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_RewardCodeData进行界面打开操作");
        }

        this.ui.m_view.m_btn_cancel.onClick(this, this._OnClickCancel);
        this.ui.m_view.m_btn_confirm.onClick(this, this._OnClickOk);
    }

    private _OnClickOk() {
        this.Hide();
        this._cacheData.onCodeEntered?.runWith([this.ui.m_view.m_text_input.text]);
    }

    private _OnClickCancel() {
        this.Hide();
    }

}