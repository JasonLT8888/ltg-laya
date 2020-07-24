import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_NativeDemo from "../../ui/Main/UI_NativeDemo";

export default class UI_NativeDemoMediator extends BaseUIMediator<UI_NativeDemo> {

    private static _instance: UI_NativeDemoMediator;
    public static get instance(): UI_NativeDemoMediator {
        if (this._instance == null) {
            this._instance = new UI_NativeDemoMediator();
            this._instance._classDefine = UI_NativeDemo;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_back.onClick(this, this._OnClickBack);
    }

    private _OnClickBack() {
        this.Hide();
    }

}