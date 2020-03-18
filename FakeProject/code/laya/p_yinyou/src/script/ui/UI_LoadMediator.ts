import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_Load from "../../ui/Main/UI_Load";
import FGuiEx from "../../LTGame/UIExt/FGui/FGuiEx";

export class UI_LoadMediator extends BaseUIMediator<UI_Load> {

    private static _instance;
    public static get instance(): UI_LoadMediator {
        if (this._instance == null) {
            this._instance = new UI_LoadMediator();
        }
        return this._instance;
    }

    public Show() {
        this._ui = FGuiEx.AddUI(UI_Load) as UI_Load;
        this._OnShow();
    }

    _OnShow() {
        super._OnShow();
    }

}