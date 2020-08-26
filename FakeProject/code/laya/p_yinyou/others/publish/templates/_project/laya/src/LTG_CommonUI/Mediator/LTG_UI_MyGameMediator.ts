import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTG_UI_MyGame from "../UI/LTCom/LTG_UI_MyGame";

export default class LTG_UI_MyGameMediator extends BaseUIMediator<LTG_UI_MyGame> {

    private static _instance: LTG_UI_MyGameMediator;
    public static get instance(): LTG_UI_MyGameMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_MyGameMediator();
            this._instance._classDefine = LTG_UI_MyGame;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_view.m_btn_back.onClick(this, this._OnClickBack);
    }

    private _OnClickBack() {
        this.Hide();
    }

}