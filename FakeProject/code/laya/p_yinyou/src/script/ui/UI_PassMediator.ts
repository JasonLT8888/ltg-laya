import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_Pass from "../../ui/Main/UI_Pass";
import FGuiEx from "../../LTGame/UIExt/FGui/FGuiEx";
import GlobalUnit from "../common/GlobalUnit";
import { UI_MainMediator } from "./UI_MainMediator";

export class UI_PassMediator extends BaseUIMediator<UI_Pass> {

    private static _instance;
    public static get instance(): UI_PassMediator {
        if (this._instance == null) {
            this._instance = new UI_PassMediator();
        }
        return this._instance;
    }

    public Show() {
        this._ui = FGuiEx.AddUI(UI_Pass) as UI_Pass;
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