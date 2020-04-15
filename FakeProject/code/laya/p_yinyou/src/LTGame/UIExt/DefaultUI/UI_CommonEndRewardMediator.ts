import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_CommonEndReward from "./UI/LTGame/UI_CommonEndReward";
import EndRewardOpenData from "./Data/EndRewardOpenData";
import LTPlatform from "../../Platform/LTPlatform";
import LTUI from "../LTUI";
import LTSDK from "../../../SDK/LTSDK";
import UI_view_item_game from "./UI/LTGame/UI_view_item_game";
import { ECheckState } from "../../../SDK/common/ECheckState";
import { EPlatformType } from "../../Platform/EPlatformType";

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
    private _cacheAds: SDK.ADInfoData[];

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

        if (LTPlatform.instance.platform == EPlatformType.TT) {
            let tt = LTPlatform.instance['_base'];
            let systemInfo = tt.getSystemInfoSync();
            if (systemInfo.platform == "ios") {
                this._openData.enableShowGames = false;
            }
            let [major, minor] = systemInfo.SDKVersion.split(".");
            if (major >= 1 && minor >= 33) {

            } else {
                this._openData.enableShowGames = false;
            }
        }

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

        this.ui.m_c1.selectedIndex = this._openData.enableShowGames ? 0 : 1;

        this.ui.m_btn_normal_get.onClick(this, this._OnClickNormalGet);
        this.ui.m_btn_double_get.onClick(this, this._OnClickDoubleGet);
        this.ui.m_view_moregames.onClick(this, this._OnClickGames);
        this.ui.m_btn_open_roll.onClick(this, this._OnClickOpenRoll);

        if (this._openData.enableShowGames) {
            this._cacheAds = LTSDK.instance.adManager.GetADListByLocationId(0);
            // this.ui.m_view_moregames.m_sharegames.m_list_games.setVirtualAndLoop();
            this.ui.m_view_moregames.m_sharegames.m_list_games.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
            this.ui.m_view_moregames.m_sharegames.m_list_games.numItems = this._cacheAds.length;
            this.ui.m_view_moregames.m_sharegames.m_list_games.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem)
        }

        this.ui.m_btn_toggle_watchad.m_selected.selectedIndex = this._isChecked ? 1 : 0;
        this.ui.m_btn_normal_get.text = this._isChecked ? "五倍领取奖励" : "单倍领取奖励";
        this.ui.m_btn_normal_get.m_text_count.text = "x" + (this._isChecked ? this._openData.rewardCount * 5 : this._openData.rewardCount);
        this.ui.m_btn_toggle_watchad.onClick(this, this._OnClickToggle);

        this.ui.m_btn_open_roll.m_btn_type.selectedIndex = 2;
        this.ui.m_btn_double_get.m_bg_type.selectedIndex = 1;
    }

    private _OnAdItemRender(index: number, adUI: UI_view_item_game) {
        let adData = this._cacheAds[index];
        adUI.data = index;
        adUI.m_icon.m_icon.url = adData.ad_img;
        adUI.m_text_name.text = adData.ad_name;
    }

    private _OnClickOpenRoll() {
        if (this._openData.onClose) {
            this._openData.onClose.runWith(2);
        }
    }

    private _OnClickToggle() {
        this._isChecked = !this._isChecked;
        this.ui.m_btn_toggle_watchad.m_selected.selectedIndex = this._isChecked ? 1 : 0;
        this.ui.m_btn_normal_get.text = this._isChecked ? "五倍领取奖励" : "单倍领取奖励";
        this.ui.m_btn_normal_get.m_text_count.text = "x" + (this._isChecked ? this._openData.rewardCount * 5 : this._openData.rewardCount);
    }

    private _OnClickNormalGet() {

        if (this._isChecked) {
            this._OnClickDoubleGet();
            return;
        }

        if (this._openData.onClose) {
            this._openData.onClose.runWith([0, this.ui.m_btn_normal_get.m_icon_img]);
        }

        this.Hide();
    }

    private async _OnClickDoubleGet() {
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            if (this._openData.onClose) {
                this._openData.onClose.runWith([1, this.ui.m_btn_normal_get.m_icon_img]);
            }
            this.Hide();
        } else {
            LTUI.Toast("跳过广告无法获得奖励");
        }
    }

    private _OnClickGames() {
        let adList = this._cacheAds;
        let appidList = [];
        for (let i = 0; i < adList.length && i < 10; ++i) {
            appidList.push(adList[i].ad_appid);
        }
        LTPlatform.instance.OpenGameBox(appidList);
    }
    private _OnClickGameItem(item: UI_view_item_game) {
        let data = this._cacheAds[item.data as number];
        let uid = data.ad_appid;
        switch (LTPlatform.instance.platform) {
            case EPlatformType.Oppo:
            case EPlatformType.Vivo:
                uid = data.ad_package;
                break;
            default:
                break;
        }
        LTPlatform.instance.NavigateToApp(uid);
    }

}