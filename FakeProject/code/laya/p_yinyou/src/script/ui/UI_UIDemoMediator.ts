import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_UIDemo from "../../ui/Main/UI_UIDemo";
import { LTUtils } from "../../LTGame/LTUtils/LTUtils";
import MathEx from "../../LTGame/LTUtils/MathEx";

export default class UI_UIDemoMediator extends BaseUIMediator<UI_UIDemo> {

    private static _instance: UI_UIDemoMediator;
    public static get instance(): UI_UIDemoMediator {
        if (this._instance == null) {
            this._instance = new UI_UIDemoMediator();
            this._instance._classDefine = UI_UIDemo;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        // your code

        this.ui.m_btn_back.onClick(this, this._OnClickBack);
        this.ui.m_btn_toast.onClick(this, this._OnClickToast);
    }

    private _OnClickBack() {
        this.Hide();
    }

    private _OnClickToast() {
        LTUtils.Toast("显示通知" + MathEx.RandomInt(100, 500));
    }

}