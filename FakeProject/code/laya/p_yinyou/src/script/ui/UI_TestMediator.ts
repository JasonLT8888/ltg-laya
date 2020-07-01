import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_Test from "../../ui/Main/UI_Test";

export default class UI_TestMediator extends BaseUIMediator<UI_Test> {

    private static _instance: UI_TestMediator;
    public static get instance(): UI_TestMediator {
        if (this._instance == null) {
            this._instance = new UI_TestMediator();
            this._instance._classDefine = UI_Test;
        }
        return this._instance;
    }

    private _onCloseAction: Laya.Handler;

    _OnShow() {
        super._OnShow();
        // your code
        this._onCloseAction = this._openParam;
        this.ui.m_btn_back.onClick(this, this._OnClickClose);
    }

    private _OnClickClose() {
        this.Hide();
        this._onCloseAction?.run();
    }

}