import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_CommonEndReward from "./UI/LTGame/UI_CommonEndReward";
import EndRewardOpenData from "./Data/EndRewardOpenData";
import LTPlatform from "../../Platform/LTPlatform";
import LTUI from "../LTUI";
import LTSDK from "../../../SDK/LTSDK";
import { ECheckState } from "../../../SDK/common/ECheckState";
import View_OtherGames from "./Cmp/View_OtherGames";
import CommonSaveData from "../../Commom/CommonSaveData";

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

    private get _needWatchAd(): boolean {
        switch (LTSDK.instance.checkState) {
            case ECheckState.NoGame:
                if (CommonSaveData.instance.endRewardMissMode == 0) {
                    return this._isChecked;
                } else {
                    return !this._isChecked;
                }
            default:
                return this._isChecked;
        }
    }

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
        CommonSaveData.instance.endRewardMissMode = 1 - CommonSaveData.instance.endRewardMissMode;
        CommonSaveData.SaveToDisk();

        this._openData.enableShowGames = LTPlatform.instance.isSupportJumpOther && this._openData.enableShowGames;

        switch (LTSDK.instance.checkState) {
            case ECheckState.InCheck:
                // 肖张飞策划案修改
                // this.ui.m_btn_toggle_watchad.visible = false;
                this._isChecked = false;
                break;
            case ECheckState.Normal:
                this._isChecked = true;
                break;
            case ECheckState.NoGame:
                if (CommonSaveData.instance.endRewardMissMode == 0) {
                    this._isChecked = true;
                } else {
                    this._isChecked = false;
                }
                break;
        }

        if (this._openData.showText != null) {
            this.ui.m_text_str.text = this._openData.showText;
        }
        if (this._openData.iconPath != null) {
            this.ui.m_icon_reward.url = this._openData.iconPath;
        }
        this.ui.m_text_add.text = "+" + this._openData.rewardCount;

        this.ui.m_btn_get.onClick(this, this._OnClickNormalGet);

        this.ui.m_btn_toggle_watchad.onClick(this, this._OnClickToggle);
        this._UpdateToggle();
        LTPlatform.instance.ShowBannerAd();
    }

    private _OnClickToggle() {
        this._isChecked = !this._isChecked;
        this._UpdateToggle();
    }

    private _UpdateToggle() {
        switch (LTSDK.instance.checkState) {
            case ECheckState.NoGame:
                this.ui.m_btn_toggle_watchad.text = this._needWatchAd ? "观看视频五倍领取奖励" : "不看视频领取奖励";
                break;
            default:
                this.ui.m_btn_toggle_watchad.text = this._isChecked ? "观看视频五倍领取奖励" : "不看视频领取奖励";
                break;
        }
        this.ui.m_btn_toggle_watchad.m_selected.selectedIndex = this._isChecked ? 1 : 0;
        this.ui.m_btn_get.m_btn_type.selectedIndex = this._needWatchAd ? 0 : 3;
    }

    private _OnClickBack() {
        if (this._openData.onClose) {
            this._openData.onClose.runWith([2, this.ui.m_icon_reward]);
        }
        this.Hide();
    }

    private _OnClickNormalGet() {

        if (this._needWatchAd) {
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

    _OnHide() {
        LTPlatform.instance.HideBannerAd();
    }
}