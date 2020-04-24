import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_Main from "../../ui/Main/UI_Main";

export class UI_MainMediator extends BaseUIMediator<UI_Main> {

    private static _instance;
    public static get instance(): UI_MainMediator {
        if (this._instance == null) {
            this._instance = new UI_MainMediator();
            this._instance._classDefine = UI_Main;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
    }

}