import { ECheckState } from "../../../SDK/common/ECheckState";
import LTSDK from "../../../SDK/LTSDK";
import { EPlatformType } from "../../Platform/EPlatformType";
import LTPlatform from "../../Platform/LTPlatform";
import BaseUIMediator from "../FGui/BaseUIMediator";
import EndRewardOpenData from "./Data/EndRewardOpenData";
import UI_CommonMainMoreGameAds from "./UI/LTGame/UI_CommonMainMoreGameAds";
import UI_view_item_game from "./UI/LTGame/UI_view_item_game";

export default class UI_CommonMainMoreGameAdsMediator extends BaseUIMediator<UI_CommonMainMoreGameAds> {

    private static _instance: UI_CommonMainMoreGameAdsMediator;
    public static get instance(): UI_CommonMainMoreGameAdsMediator {
        if (this._instance == null) {
            this._instance = new UI_CommonMainMoreGameAdsMediator();
            this._instance._classDefine = UI_CommonMainMoreGameAds;
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
                this.ui.m_btn_show.visible = false;
                break;
            case ECheckState.Normal:
                this.ui.m_btn_show.visible = true;

                break;
            case ECheckState.NoGame:
                this.ui.m_btn_show.visible = true;

                break;
        }
        if (this._openData.enableShowGames) {
            this._cacheAds = LTSDK.instance.adManager.GetADListByLocationId(0);
            this.ui.m_ads.m_list.setVirtual();
            this.ui.m_ads.m_list.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
            this.ui.m_ads.m_list.numItems = this._cacheAds.length;
            this.ui.m_ads.m_list.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
        }
        this.ui.m_btn_show.onClick(this, () => {
            this.ui.m_show.selectedIndex = 1;
        });
        this.ui.m_ads.m_btn_return.onClick(this, () => {
            this.ui.m_show.selectedIndex = 0;
        });


    }

    private _OnAdItemRender(index: number, adUI: UI_view_item_game) {
        let adData = this._cacheAds[index];
        adUI.data = index;
        adUI.m_icon.m_icon.url = adData.ad_img;
        adUI.m_text_name.text = adData.ad_name;
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