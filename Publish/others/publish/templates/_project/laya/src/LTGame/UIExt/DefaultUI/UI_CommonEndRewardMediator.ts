import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_CommonEndReward from "./UI/LTGame/UI_CommonEndReward";
import EndRewardOpenData from "./Data/EndRewardOpenData";
import LTPlatform from "../../Platform/LTPlatform";
import LTUI from "../LTUI";
import LTSDK from "../../../SDK/LTSDK";
import UI_view_item_game from "./UI/LTGame/UI_view_item_game";
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
        this.ui.m_c1.selectedIndex = this._openData.enableShowGames ? 0 : 1;

        this.ui.m_btn_normal_get.onClick(this, this._OnClickNormalGet);
        this.ui.m_btn_double_get.onClick(this, this._OnClickDoubleGet);
        this.ui.m_view_moregames.onClick(this, this._OnClickGames);

        if (this._openData.enableShowGames) {
            this._cacheAds = LTSDK.instance.adManager.GetADListByLocationId(0);
            this.ui.m_view_moregames.m_list_games.setVirtual();
            this.ui.m_view_moregames.m_list_games.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
            this.ui.m_view_moregames.m_list_games.numItems = this._cacheAds.length;
        }

        this.ui.m_view_reward.m_text_count.text = "x" + this._openData.rewardCount;

        this.ui.m_btn_normal_get.m_btn_type.selectedIndex = 2;

        this.ui.m_btn_double_get.m_bg_type.selectedIndex = 1;
    }

    private _OnAdItemRender(index: number, adUI: UI_view_item_game) {
        let adData = this._cacheAds[index];
        adUI.m_icon.m_icon.url = adData.ad_img;
        adUI.m_text_name.text = adData.ad_name;
    }

    private _OnClickNormalGet() {

        if (this._openData.onClose) {
            this._openData.onClose.runWith([0, this.ui.m_view_reward.m_icon]);
        }

        this.Hide();
    }

    private async _OnClickDoubleGet() {
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            if (this._openData.onClose) {
                this._openData.onClose.runWith([1, this.ui.m_view_reward.m_icon]);
            }
            this.Hide();
        } else {
            LTUI.Toast("跳过广告无法获得奖励");
        }
    }

    private _OnClickGames() {
        let appIds: string[] = [];
        for (let ad of this._cacheAds) {
            appIds.push(ad.ad_appid);
        }
        LTPlatform.instance.OpenGameBox(appIds);
    }

}