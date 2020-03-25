import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_CommonSign from "./UI/LTGame/UI_CommonSign";
import SignOpenData from "./Data/SignOpenData";
import UI_view_item_sign from "./UI/LTGame/UI_view_item_sign";

export default class UI_CommonSignMediator extends BaseUIMediator<UI_CommonSign> {

    private static _instance: UI_CommonSignMediator;
    public static get instance(): UI_CommonSignMediator {
        if (this._instance == null) {
            this._instance = new UI_CommonSignMediator();
            this._instance._classDefine = UI_CommonSign;
        }
        return this._instance;
    }

    private _openData: SignOpenData;

    _OnShow() {
        super._OnShow();
        // your code
        this._openData = new SignOpenData();
        if (this._openParam == null) {
            console.error("请传入SignOpenData用于初始化签到界面");
        } else {
            for (let key in this._openParam) {
                this._openData[key] = this._openParam[key];
            }
        }
        this.ui.m_view.m_btn_close.onClick(this, this._OnClickClose);
        this.ui.m_view.m_btn_normal_get.onClick(this, this._OnClickNormalGet);
        this.ui.m_view.m_btn_double_get.onClick(this, this._OnClickDoubleGet);

        for (let i = 0; i < this.ui.m_view.m_list_day.numChildren; ++i) {
            let itemUI = this.ui.m_view.m_list_day.getChildAt(i) as UI_view_item_sign;
            itemUI.name = "第" + (i + 1) + "天";
        }
    }

    private _OnClickNormalGet() {

    }

    private _OnClickDoubleGet() {

    }

    private _OnClickClose() {
        this.Hide();
    }

}