import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_Load from "../../ui/Main/UI_Load";
import FGuiEx from "../../LTGame/UIExt/FGui/FGuiEx";

export class UI_LoadMediator extends BaseUIMediator<UI_Load> {

    private static _instance;
    public static get instance(): UI_LoadMediator {
        if (this._instance == null) {
            this._instance = new UI_LoadMediator();
            this._instance._classDefine = UI_Load;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
    }

}