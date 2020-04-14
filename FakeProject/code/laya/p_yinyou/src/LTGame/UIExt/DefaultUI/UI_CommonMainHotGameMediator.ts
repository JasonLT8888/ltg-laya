import { ECheckState } from "../../../SDK/common/ECheckState";
import LTSDK from "../../../SDK/LTSDK";
import { EPlatformType } from "../../Platform/EPlatformType";
import LTPlatform from "../../Platform/LTPlatform";
import BaseUIMediator from "../FGui/BaseUIMediator";
import EndRewardOpenData from "./Data/EndRewardOpenData";
import UI_CommonMainHotGame from "./UI/LTGame/UI_CommonMainHotGame";
import UI_view_item_game from "./UI/LTGame/UI_view_item_game";
import UI_view_game_icon from "./UI/LTGame/UI_view_game_icon";

export default class UI_CommonMainHotGameMediator extends BaseUIMediator<UI_CommonMainHotGame> {

    private static _instance: UI_CommonMainHotGameMediator;
    public static get instance(): UI_CommonMainHotGameMediator {
        if (this._instance == null) {
            this._instance = new UI_CommonMainHotGameMediator();
            this._instance._classDefine = UI_CommonMainHotGame;
        }
        return this._instance;
    }

    private _openData: EndRewardOpenData;
    private _cacheAds: SDK.ADInfoData[];

    private _showAdIndex: number = 0;

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
                this.ui.m_hot_game.visible = false;
                break;
            case ECheckState.Normal:
                this.ui.m_hot_game.visible = true;

                break;
            case ECheckState.NoGame:
                this.ui.m_hot_game.visible = true;

                break;
        }
        if (this._openData.enableShowGames) {
            this._cacheAds = LTSDK.instance.adManager.GetADListByLocationId(0);
            this._OnAdItemRender(0);
            Laya.timer.loop(5000, this, this._UpdateItem);
            this.ui.onClick(this, this._OnClickGameItem)
        }



    }

    private _OnAdItemRender(index: number) {
        let adUI: UI_view_game_icon = this.ui.m_hot_game.m_ic;
        let adData = this._cacheAds[index];
        adUI.data = index;
        adUI.m_icon.url = adData.ad_img;
        this.ui.m_hot_game.m_t0.play();
    }
    private _UpdateItem() {
        let ad = (this._showAdIndex + 1) % this._cacheAds.length;
        this._showAdIndex = ad;
        this._OnAdItemRender(this._showAdIndex);
    }

    private _OnClickGameItem() {
        let data = this._cacheAds[this._showAdIndex];
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