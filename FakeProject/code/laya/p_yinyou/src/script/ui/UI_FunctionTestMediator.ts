import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_FunctionTest from "../../ui/Main/UI_FunctionTest";
import { UI_MainMediator } from "./UI_MainMediator";
import { PBRTest } from "../test/PBRTest";
import { ITest } from "../test/ITest";
import { HeightFogTest } from "../test/HeightFogTest";
import { RenderTextureTest } from "../test/RenderTextureTest";
import { UIEffectTest } from "../test/UIEffectTest";
import { PhysicTest } from "../test/PhysicTest";
import { HXOimoPhysicTest } from "../test/HXOimoPhysicTest";
import { BasicTest } from "../test/OimoTest/BasicTest";
import { CompoundShapeTest } from "../test/OimoTest/CompoundShapeTest";

export default class UI_FunctionTestMediator extends BaseUIMediator<UI_FunctionTest> {

    private static _instance: UI_FunctionTestMediator;
    public static get instance(): UI_FunctionTestMediator {
        if (this._instance == null) {
            this._instance = new UI_FunctionTestMediator();
            this._instance._classDefine = UI_FunctionTest;
        }
        return this._instance;
    }

    private _sampleList: ITest[] = [
        new PBRTest(),
        new HeightFogTest(),
        new RenderTextureTest(),
        new UIEffectTest(),
        new PhysicTest(),
        new HXOimoPhysicTest(),
        new BasicTest(),
        new CompoundShapeTest(),
    ];

    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_back.onClick(this, this._OnClickClose);
        this.ui.m_list_btns.setVirtual();
        this.ui.m_list_btns.itemRenderer = Laya.Handler.create(this, this._OnItemBtnsRender, null, false);
        this.ui.m_list_btns.numItems = this._sampleList.length;
    }

    private _OnItemBtnsRender(index: number, itemUI: fgui.GButton) {
        let data = this._sampleList[index];
        itemUI.text = data.name;
        itemUI.onClick(this, this._OnClickBtns, [index]);
    }

    private _OnClickBtns(index: number) {
        this.Hide()
        let data = this._sampleList[index];
        data.Create();
    }

    private _OnClickClose() {
        this.Hide();
        UI_MainMediator.instance.Show();
    }

}