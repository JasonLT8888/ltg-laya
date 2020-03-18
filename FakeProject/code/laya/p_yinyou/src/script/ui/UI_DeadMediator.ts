import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_Dead from "../../ui/Main/UI_Dead";
import FGuiEx from "../../LTGame/UIExt/FGui/FGuiEx";
import GlobalUnit from "../common/GlobalUnit";
import { UI_MainMediator } from "./UI_MainMediator";

export class UI_DeadMediator extends BaseUIMediator<UI_Dead> {

    private static _instance;
    public static get instance(): UI_DeadMediator {
        if (this._instance == null) {
            this._instance = new UI_DeadMediator();
        }
        return this._instance;
    }

    public Show() {
        this._ui = FGuiEx.AddUI(UI_Dead) as UI_Dead;
        this._OnShow();
    }

    _OnShow() {
        super._OnShow();
        this.ui.m_btn_continue.onClick(this, this._OnClickContinue);
    }

    private _OnClickContinue() {
        GlobalUnit.gameManager.ClearGame();
        this.Hide();
        UI_MainMediator.instance.Show();
    }

}