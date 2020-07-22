import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_MoudleDemo from "../../ui/Main/UI_MoudleDemo";

export default class UI_MoudleDemoMediator extends BaseUIMediator<UI_MoudleDemo> {

    private static _instance: UI_MoudleDemoMediator;
    public static get instance(): UI_MoudleDemoMediator {
        if (this._instance == null) {
            this._instance = new UI_MoudleDemoMediator();
            this._instance._classDefine = UI_MoudleDemo;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_back.onClick(this, this._OnClickBack);
        console.log(this.ui.m___wxSG);
    }

    private _OnClickBack() {
        this.Hide();
    }

}