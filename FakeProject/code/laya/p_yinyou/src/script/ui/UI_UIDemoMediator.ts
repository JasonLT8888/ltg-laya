import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_UIDemo from "../../ui/Main/UI_UIDemo";
import { LTUtils } from "../../LTGame/LTUtils/LTUtils";
import MathEx from "../../LTGame/LTUtils/MathEx";
import LTUI from "../../LTGame/UIExt/LTUI";
import Awaiters from "../../LTGame/Async/Awaiters";

export default class UI_UIDemoMediator extends BaseUIMediator<UI_UIDemo> {

    private static _instance: UI_UIDemoMediator;
    public static get instance(): UI_UIDemoMediator {
        if (this._instance == null) {
            this._instance = new UI_UIDemoMediator();
            this._instance._classDefine = UI_UIDemo;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        // your code

        this.ui.m_btn_back.onClick(this, this._OnClickBack);
        this.ui.m_btn_toast.onClick(this, this._OnClickToast);
        this.ui.m_btn_load.onClick(this, this._OnClickLoad);
        this.ui.m_btn_fly_cons.onClick(this, this._OnClickFlyCoins);
    }

    private _OnClickBack() {
        this.Hide();
    }

    private _OnClickToast() {
        LTUI.Toast("显示通知" + MathEx.RandomInt(100, 500));
    }

    private async _OnClickFlyCoins() {
        console.log("开始飞金币");
        
        await LTUI.FlyCoinsTo(this.ui.m_btn_fly_cons, this.ui.m_title);

        console.log("飞金币结束,你可以在这里做金币接收动画");
    }

    private async _OnClickLoad() {
        LTUI.ShowLoading("展示5秒加载...");
        await Awaiters.Seconds(5);
        LTUI.HideLoading();
    }

}