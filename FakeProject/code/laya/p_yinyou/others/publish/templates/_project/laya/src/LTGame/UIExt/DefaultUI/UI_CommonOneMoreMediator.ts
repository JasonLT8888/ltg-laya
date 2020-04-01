import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_CommonOneMore from "./UI/LTGame/UI_CommonOneMore";
import OneMoreOpenData from "./Data/OneMoreOpenData";
import LTPlatform from "../../Platform/LTPlatform";
import LTUI from "../LTUI";

export default class UI_CommonOneMoreMediator extends BaseUIMediator<UI_CommonOneMore> {

    private static _instance: UI_CommonOneMoreMediator;
    public static get instance(): UI_CommonOneMoreMediator {
        if (this._instance == null) {
            this._instance = new UI_CommonOneMoreMediator();
            this._instance._classDefine = UI_CommonOneMore;
        }
        return this._instance;
    }

    private _openData: OneMoreOpenData;

    _OnShow() {
        super._OnShow();
        // your code
        this._openData = new OneMoreOpenData();
        if (this._openParam == null) {
            console.error("请传入OneMoreOpenData用于再来一份界面");
        } else {
            for (let key in this._openParam) {
                this._openData[key] = this._openParam[key];
            }
        }

        this.ui.m_view.m_btn_close.onClick(this, this._OnClickClose);
        this.ui.m_view.m_btn_normal_get.onClick(this, this._OnClickNormalGet);
        this.ui.m_view.m_btn_double_get.onClick(this, this._OnClickDoubleGet);

        if (this._openData.rewardIcon) {
            this.ui.m_view.m_icon.url = this._openData.rewardIcon;
        }
        if (this._openData.rewardText) {
            this.ui.m_view.m_text_value.text = this._openData.rewardText;
        }
    }

    private _OnClickClose() {
        if (this._openData.onClose) {
            this._openData.onClose.runWith(0);
        }

        this.Hide();
    }

    private _OnClickNormalGet() {
        if (this._openData.onClose) {
            this._openData.onClose.runWith([1, this.ui.m_view.m_icon]);
        }

        this.Hide();
    }

    private async _OnClickDoubleGet() {
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            if (this._openData.onClose) {
                this._openData.onClose.runWith([2, this.ui.m_view.m_icon]);
            }
            this.Hide();
        } else {
            LTUI.Toast("跳过广告无法获得奖励");
        }
    }

}