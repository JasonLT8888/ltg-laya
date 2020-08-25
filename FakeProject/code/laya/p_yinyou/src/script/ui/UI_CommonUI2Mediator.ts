import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_CommonUI2 from "../../ui/Main/UI_CommonUI2";
import { UI_MainMediator } from "./UI_MainMediator";
import LTG_UI_HideMenuMediator from "../../LTG_CommonUI/Mediator/LTG_UI_HideMenuMediator";
import { LTG_Com_MyGameData } from "../../LTG_CommonUI/Data/LTG_Com_MyGameData";

class UIDemoData {

    public name: string;
    public func: Function;

    constructor(name: string, func: Function) {
        this.name = name;
        this.func = func;
    }

}

export default class UI_CommonUI2Mediator extends BaseUIMediator<UI_CommonUI2> {

    private static _instance: UI_CommonUI2Mediator;
    public static get instance(): UI_CommonUI2Mediator {
        if (this._instance == null) {
            this._instance = new UI_CommonUI2Mediator();
            this._instance._classDefine = UI_CommonUI2;
        }
        return this._instance;
    }

    private _demos: UIDemoData[] = [
        new UIDemoData("隐藏菜单", () => {
            LTG_UI_HideMenuMediator.instance.Show();
        }),
        new UIDemoData("我的小程序", () => {
            new LTG_Com_MyGameData().Send();
        }),
    ];

    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_back.onClick(this, this._OnClickBack);

        this.ui.m_list_btns.setVirtual();
        this.ui.m_list_btns.itemRenderer = Laya.Handler.create(this, this._OnItemRender, null, false);
        this.ui.m_list_btns.numItems = this._demos.length;
    }

    private _OnItemRender(index: number, itemUI: fgui.GButton) {
        let data = this._demos[index];
        itemUI.text = data.name;
        itemUI.onClick(this, data.func);
    }

    private _OnClickBack() {
        this.Hide();
        UI_MainMediator.instance.Show();
    }

}
