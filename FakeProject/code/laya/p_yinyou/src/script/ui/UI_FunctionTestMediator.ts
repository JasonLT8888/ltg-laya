import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_FunctionTest from "../../ui/Main/UI_FunctionTest";
import { UI_MainMediator } from "./UI_MainMediator";
import UI_TestMediator from "./UI_TestMediator";
import { PBRTest } from "../test/PBRTest";

export default class UI_FunctionTestMediator extends BaseUIMediator<UI_FunctionTest> {

    private static _instance: UI_FunctionTestMediator;
    public static get instance(): UI_FunctionTestMediator {
        if (this._instance == null) {
            this._instance = new UI_FunctionTestMediator();
            this._instance._classDefine = UI_FunctionTest;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_back.onClick(this, this._OnClickClose);
        this.ui.m_btn_pbr.onClick(this, this._OnClickPBR);
    }

    private async _OnClickPBR() {
        this.Hide();

        let test = new PBRTest();
        await test.Create();
        UI_TestMediator.instance.Show(Laya.Handler.create(null, () => {
            test.Clear();
            UI_FunctionTestMediator.instance.Show();
        }));
    }

    private _OnClickClose() {
        this.Hide();
        UI_MainMediator.instance.Show();
    }

}