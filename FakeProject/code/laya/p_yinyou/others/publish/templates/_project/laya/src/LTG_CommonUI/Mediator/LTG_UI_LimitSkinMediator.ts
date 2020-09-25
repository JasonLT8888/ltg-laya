/*
import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTG_UI_LimitSkin from "../UI/LTCom/LTG_UI_LimitSkin";
import { LTG_Com_LimitSkinData } from "../Data/LTG_Com_LimitSkinData";
import StringEx from "../../LTGame/LTUtils/StringEx";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import LTUI from "../../LTGame/UIExt/LTUI";
import LTSDK from "../../SDK/LTSDK";
import { ECheckState } from "../../SDK/common/ECheckState";

export default class LTG_UI_LimitSkinMediator extends BaseUIMediator<LTG_UI_LimitSkin> {

    private static _instance: LTG_UI_LimitSkinMediator;
    public static get instance(): LTG_UI_LimitSkinMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_LimitSkinMediator();
            this._instance._classDefine = LTG_UI_LimitSkin;
        }
        return this._instance;
    }

    private _cacheData: LTG_Com_LimitSkinData;

    private _isToggleOn: boolean;

    _OnShow() {
        super._OnShow();
        // your code

        this._cacheData = this._openParam as LTG_Com_LimitSkinData;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_LimitSkinData进行界面打开操作");
        }
        if (!StringEx.IsNullOrEmpty(this._cacheData.iconUrl)) {
            this.ui.m_view.m_loader_icon.url = this._cacheData.iconUrl;
        }
        if (!StringEx.IsNullOrEmpty(this._cacheData.textUrl)) {
            this.ui.m_view.m_loader_text.url = this._cacheData.textUrl;
        }

        this.Refresh(this._cacheData.watchCount);
        if (LTSDK.instance.checkState == ECheckState.InCheck) {
            this._isToggleOn = false;
        } else {
            this._isToggleOn = true;
        }
        this._UpdateUI();
        this.ui.m_btn_get.onClick(this, this._OnClickBtn);
        this.ui.m_toggle_watchad.onClick(this, this._OnClickToggle);
    }

    private _OnClickToggle() {
        this._isToggleOn = !this._isToggleOn;
        this._UpdateUI();
    }

    private _UpdateUI() {
        this.ui.m_toggle_watchad.m_state_toggle.selectedIndex = this._isToggleOn ? 1 : 0;
        this.ui.m_btn_get.text = this._isToggleOn ? "获取+1" : "不，谢谢";
    }

    public Refresh(count: number) {
        switch (count) {
            case 0:
                this.ui.m_view_ad_progress.m_toggle_01.m_state_toggle.selectedIndex = 0;
                this.ui.m_view_ad_progress.m_toggle_02.m_state_toggle.selectedIndex = 0;
                this.ui.m_view_ad_progress.m_toggle_03.m_state_toggle.selectedIndex = 0;
                break;
            case 1:
                this.ui.m_view_ad_progress.m_toggle_01.m_state_toggle.selectedIndex = 1;
                this.ui.m_view_ad_progress.m_toggle_02.m_state_toggle.selectedIndex = 0;
                this.ui.m_view_ad_progress.m_toggle_03.m_state_toggle.selectedIndex = 0;
                break;
            case 2:
                this.ui.m_view_ad_progress.m_toggle_01.m_state_toggle.selectedIndex = 1;
                this.ui.m_view_ad_progress.m_toggle_02.m_state_toggle.selectedIndex = 1;
                this.ui.m_view_ad_progress.m_toggle_03.m_state_toggle.selectedIndex = 0;
                break;
            case 3:
            default:
                this.ui.m_view_ad_progress.m_toggle_01.m_state_toggle.selectedIndex = 1;
                this.ui.m_view_ad_progress.m_toggle_02.m_state_toggle.selectedIndex = 1;
                this.ui.m_view_ad_progress.m_toggle_03.m_state_toggle.selectedIndex = 1;
                break;
        }
    }

    private async _OnClickBtn() {
        if (this._isToggleOn) {
            let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
            if (result) {
                this._cacheData.onWatchedAd?.run();
            } else {
                LTUI.Toast("跳过广告无法获得奖励");
            }
        } else {
            this.Hide();
        }
    }

}
*/