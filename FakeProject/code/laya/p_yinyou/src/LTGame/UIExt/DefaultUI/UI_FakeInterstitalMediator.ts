import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_FakeInterstital from "./UI/LTGame/UI_FakeInterstital";

export default class UI_FakeInterstitalMediator extends BaseUIMediator<UI_FakeInterstital> {

    private static _instance: UI_FakeInterstitalMediator;
    public static get instance(): UI_FakeInterstitalMediator {
        if (this._instance == null) {
            this._instance = new UI_FakeInterstitalMediator();
            this._instance._classDefine = UI_FakeInterstital;
        }
        return this._instance;
    }

    private _closeHandle: Laya.Handler;
    _sortOrder = Number.MAX_SAFE_INTEGER;

    _OnShow() {
        super._OnShow();
        // your code

        this._closeHandle = this._openParam;
        this.ui.m_btn_close.onClick(this, this._OnClickClose);
    }

    private _OnClickClose() {
        this.Hide();
        if (this._closeHandle) {
            this._closeHandle.run();
        }
    }

}