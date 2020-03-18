import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_Main from "../../ui/Main/UI_Main";
import FGuiEx from "../../LTGame/UIExt/FGui/FGuiEx";
import GlobalUnit from "../common/GlobalUnit";
import { UI_FightMediator } from "./UI_FightMediator";
import { UI_LoadMediator } from "./UI_LoadMediator";
import Awaiters from "../../LTGame/Async/Awaiters";

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
        this.ui.m_btn_start.onClick(this, this._OnClickStart);
    }

    private async _OnClickStart() {
        this.Hide();
        UI_LoadMediator.instance.Show();

        await Awaiters.NextFrame();

        await GlobalUnit.gameManager.CreateGame();

        await Awaiters.NextFrame();

        UI_FightMediator.instance.Show();
        UI_LoadMediator.instance.Hide();
        GlobalUnit.gameManager.StartGame();
    }

}