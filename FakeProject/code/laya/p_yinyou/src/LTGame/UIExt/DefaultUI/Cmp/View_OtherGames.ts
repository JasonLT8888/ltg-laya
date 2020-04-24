import UI_view_sharegames_big from "../UI/LTGame/UI_view_sharegames_big";
import LTSDK from "../../../../SDK/LTSDK";
import UI_view_item_game from "../UI/LTGame/UI_view_item_game";
import LTPlatform from "../../../Platform/LTPlatform";
import { EPlatformType } from "../../../Platform/EPlatformType";
import { CommonEventId } from "../../../Commom/CommonEventId";

export default class View_OtherGames {

    static CreateView(tagUI: fgui.GComponent): View_OtherGames {
        if (tagUI == null) return null;

        // 额外判定一次是否支持交叉推广,如果不支持,则隐藏交叉推广
        if (!LTPlatform.instance.isSupportJumpOther) {
            tagUI.dispose();
            return null;
        }

        if (tagUI instanceof UI_view_sharegames_big) {
            return new View_OtherGames(tagUI);
        }
        let uiInstance = UI_view_sharegames_big.createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_OtherGames(uiInstance);
    }

    private _ui: UI_view_sharegames_big;
    public get ui(): UI_view_sharegames_big {
        return this._ui;
    }

    /**
     * 储存的广告
     */
    private _cacheAds: SDK.ADInfoData[];

    private _posId: number = 0;

    private constructor(ui: UI_view_sharegames_big) {
        this._ui = ui;
        this._Init();
    }

    private _Init() {
        this._cacheAds = LTSDK.instance.adManager.GetADListByLocationId(this._posId);
        if (this._cacheAds == null) {
            Laya.stage.on(CommonEventId.SELF_AD_INITED, this, this._OnAdInited);
        } else {
            this.ui.m_list_games.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
            this.ui.m_list_games.numItems = this._cacheAds.length;
            this.ui.m_list_games.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
        }

    }

    private _OnAdInited(posId: number) {
        if (posId != this._posId) return;
        this._cacheAds = LTSDK.instance.adManager.GetADListByLocationId(this._posId);
        this.ui.m_list_games.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
        this.ui.m_list_games.numItems = this._cacheAds.length;
        this.ui.m_list_games.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
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