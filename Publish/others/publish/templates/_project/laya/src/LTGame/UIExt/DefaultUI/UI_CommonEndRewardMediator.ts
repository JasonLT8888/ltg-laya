import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_CommonEndReward from "./UI/LTGame/UI_CommonEndReward";
import EndRewardOpenData from "./Data/EndRewardOpenData";
import LTPlatform from "../../Platform/LTPlatform";
import LTUI from "../LTUI";
import LTSDK from "../../../SDK/LTSDK";
import { ECheckState } from "../../../SDK/common/ECheckState";
import View_OtherGames from "./Cmp/View_OtherGames";

export default class UI_CommonEndRewardMediator extends BaseUIMediator<UI_CommonEndReward> {

    private static _instance: UI_CommonEndRewardMediator;
    public static get instance(): UI_CommonEndRewardMediator {
        if (this._instance == null) {
            this._instance = new UI_CommonEndRewardMediator();
            this._instance._classDefine = UI_CommonEndReward;
        }
        return this._instance;
    }

    private _openData: EndRewardOpenData;

    private _isChecked: boolean;

    _OnShow() {
        super._OnShow();
        // your code
        this._openData = new EndRewardOpenData();
        if (this._openParam == null) {
            console.error("请传入EndRewardOpenData用于初始化结算分享界面");
        } else {
            for (let key in this._openParam) {
                this._openData[key] = this._openParam[key];
            }
        }

        this._openData.enableShowGames = LTPlatform.instance.isSupportJumpOther && this._openData.enableShowGames;

        switch (LTSDK.instance.checkState) {
            case ECheckState.InCheck:
                this.ui.m_btn_toggle_watchad.visible = false;
                this._isChecked = false;
                break;
            case ECheckState.Normal:
                this._isChecked = false;
                break;
            case ECheckState.NoGame:
                this._isChecked = true;
                break;
        }

        if (this._openData.showText != null) {
            this.ui.m_text_str.text = this._openData.showText;
        }
        if (this._openData.iconPath != null) {
            this.ui.m_icon_reward.url = this._openData.iconPath;
        }
        this.ui.m_text_add.text = "+" + this._openData.rewardCount;
        this.ui.m_c1.selectedIndex = this._openData.enableShowGames ? 0 : 1;

        this.ui.m_btn_get.onClick(this, this._OnClickNormalGet);
        this.ui.m_btn_back.onClick(this, this._OnClickBack);

        if (this._openData.enableShowGames) {
            View_OtherGames.CreateView(this.ui.m_view_othergames);
        }

        this.ui.m_btn_toggle_watchad.m_selected.selectedIndex = this._isChecked ? 1 : 0;
        this.ui.m_btn_toggle_watchad.onClick(this, this._OnClickToggle);
    }

    private _OnClickToggle() {
        this._isChecked = !this._isChecked;
        this.ui.m_btn_toggle_watchad.m_selected.selectedIndex = this._isChecked ? 1 : 0;
    }

    private _OnClickBack() {
        if (this._openData.onClose) {
            this._openData.onClose.runWith([2, this.ui.m_icon_reward]);
        }
        this.Hide();
    }

    private _OnClickNormalGet() {

        if (this._isChecked) {
            this._OnClickDoubleGet();
            return;
        }

        if (this._openData.onClose) {
            this._openData.onClose.runWith([0, this.ui.m_icon_reward]);
        }

        this.Hide();
    }

    private async _OnClickDoubleGet() {
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            if (this._openData.onClose) {
                this._openData.onClose.runWith([1, this.ui.m_icon_reward]);
            }
            this.Hide();
        } else {
            LTUI.Toast("跳过广告无法获得奖励");
        }
    }


}