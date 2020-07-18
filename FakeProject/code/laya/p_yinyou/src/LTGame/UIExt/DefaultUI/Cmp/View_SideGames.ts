
import LTSDK from "../../../../SDK/LTSDK";
import UI_view_item_game from "../UI/LTGame/UI_view_item_game";
import LTPlatform from "../../../Platform/LTPlatform";
import { EPlatformType } from "../../../Platform/EPlatformType";
import { CommonEventId } from "../../../Commom/CommonEventId";
import UI_SideGames from "../UI/LTGame/UI_SideGames";
import { ECheckState } from "../../../../SDK/common/ECheckState";
import { UI_GameCenterMediator } from "../UI_GameCenterMediator";
/** __sidegames 100*100 */
export default class View_SideGames {

    static CreateView(tagUI: fgui.GComponent): View_SideGames {
        if (tagUI == null) return null;

        // 额外判定一次是否支持交叉推广,如果不支持,则隐藏交叉推广
        if (!LTPlatform.instance.isSupportJumpOther || (LTPlatform.instance.platform != EPlatformType.Oppo && LTPlatform.instance.platform != EPlatformType.Web)) {
            tagUI.dispose();
            return null;
        }
        if (LTSDK.instance.checkState == ECheckState.InCheck) {
            // 只有oppo支持
            console.log("sidegames,审核");
            tagUI.dispose();
            return null;
        }
        if (tagUI instanceof UI_SideGames) {
            return new View_SideGames(tagUI);
        }
        let uiInstance = UI_SideGames.createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_SideGames(uiInstance);
    }

    private _ui: UI_SideGames;
    public get ui(): UI_SideGames {
        return this._ui;
    }

    /**
     * 储存的广告
     */
    private _cacheAds: SDK.ADInfoData[];

    private _posId: number = 0;

    private constructor(ui: UI_SideGames) {
        this._ui = ui;
        this._Init();
    }

    private _Init() {
        if (LTPlatform.instance.platform == EPlatformType.TT) {
            this.ui.m_ads.dispose();
            this.ui.m_btn_show.onClick(this, () => {
                this.ui.m_red.visible = false;
                LTPlatform.instance.OpenGameBox([]);
            });
            return;
        }
        if (LTPlatform.instance.platform == EPlatformType.WX || LTPlatform.instance.platform == EPlatformType.Web) {
            this._posId = 5;
        }
        this._cacheAds = LTSDK.instance.adManager.GetADListByLocationId(this._posId);
        if (this._cacheAds == null) {
            Laya.stage.on(CommonEventId.SELF_AD_INITED, this, this._OnAdInited);
        } else {
            this.ui.m_ads.m_list.setVirtual();
            this.ui.m_ads.m_list.scrollPane.bouncebackEffect = false;
            this.ui.m_ads.m_list.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
            this.ui.m_ads.m_list.numItems = this._cacheAds.length;
            this.ui.m_ads.m_list.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
            Laya.timer.loop(100, this, () => {
                this.ui.m_ads.m_list.scrollPane.scrollDown(0.01, true);
            });
            this.ui.displayObject.zOrder = 99999;
            this.ui.m_btn_show.onClick(this, () => {
                this.ui.m_red.visible = false;
                this.ui.m_show.selectedIndex = 1;
            });
            this.ui.m_ads.m_btn_return.onClick(this, () => {
                this.ui.m_show.selectedIndex = 0;
            });
            this.ui.m_bg.onClick(this, () => {
                this.ui.m_show.selectedIndex = 0;
            });
            let ads = [];
            this._cacheAds.forEach(adData => {
                let ad: any = {};
                ad.ad_id = adData.ad_id;
                ad.location_id = this._posId;
                ad.num = 1;
                ads.push(ad);
            });
            LTSDK.instance.ReportShowAd(ads);
        }

    }

    private _OnAdInited(posId: number) {
        if (posId != this._posId) return;
        this._cacheAds = LTSDK.instance.adManager.GetADListByLocationId(this._posId);
        this.ui.m_ads.m_list.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
        this.ui.m_ads.m_list.numItems = this._cacheAds.length;
        this.ui.m_ads.m_list.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);

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
        LTPlatform.instance.NavigateToApp(uid, data.ad_path, null, true, false, data.ad_id);
    }

}