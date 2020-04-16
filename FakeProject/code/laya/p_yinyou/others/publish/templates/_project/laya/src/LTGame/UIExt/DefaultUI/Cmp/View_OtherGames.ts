import UI_view_sharegames_big from "../UI/LTGame/UI_view_sharegames_big";
import LTSDK from "../../../../SDK/LTSDK";
import UI_view_item_game from "../UI/LTGame/UI_view_item_game";
import LTPlatform from "../../../Platform/LTPlatform";
import { EPlatformType } from "../../../Platform/EPlatformType";

export default class View_OtherGames {

    static BindView(ui: UI_view_sharegames_big): View_OtherGames {
        let result = new View_OtherGames(ui);
        return result;
    }

    static CreateView(tagUI: fgui.GComponent): View_OtherGames {
        if (tagUI == null) return null;
        if (tagUI instanceof UI_view_sharegames_big) {
            return this.BindView(tagUI);
        }
        let uiInstance = UI_view_sharegames_big.createInstance();
        tagUI.parent.addChild(uiInstance);
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return this.BindView(uiInstance);
    }

    private _ui: UI_view_sharegames_big;
    public get ui(): UI_view_sharegames_big {
        return this._ui;
    }

    /**
     * 储存的广告ids
     */
    private _cacheAds: SDK.ADInfoData[];

    private constructor(ui: UI_view_sharegames_big) {
        this._ui = ui;
        this._Init();
    }

    private _Init() {
        this._cacheAds = LTSDK.instance.adManager.GetADListByLocationId(0);
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
            case EPlatformType.TT:
                this._OpenGameBox();
                return;
            default:
                break;
        }
        LTPlatform.instance.NavigateToApp(uid);
    }

    private _OpenGameBox() {
        let adList = this._cacheAds;
        let appidList = [];
        for (let i = 0; i < adList.length && i < 10; ++i) {
            appidList.push(adList[i].ad_appid);
        }
        LTPlatform.instance.OpenGameBox(appidList);
    }

}