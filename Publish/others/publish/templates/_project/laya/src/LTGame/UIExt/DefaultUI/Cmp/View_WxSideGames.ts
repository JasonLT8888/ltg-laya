
import LTSDK from "../../../../SDK/LTSDK";
import UI_view_item_game from "../UI/LTGame/UI_view_item_game";
import LTPlatform from "../../../Platform/LTPlatform";
import { EPlatformType } from "../../../Platform/EPlatformType";
import { CommonEventId } from "../../../Commom/CommonEventId";
import UI_WxSideGames from "../UI/LTGame/UI_WxSideGames";
import UI_item_gameSmall from "../UI/LTGame/UI_item_gameSmall";
import { UI_GameCenterMediator } from "../UI_GameCenterMediator";
/**__wxSG 750*280  */
export default class View_WxSideGames {

    static CreateView(tagUI: fgui.GComponent): View_WxSideGames {
        if (tagUI == null) return null;

        // 额外判定一次是否支持交叉推广,如果不支持,则隐藏交叉推广
        if (!LTPlatform.instance.isSupportJumpOther && LTPlatform.instance.platform != EPlatformType.Web) {
            console.log('不支持跳转')
            tagUI.dispose();
            return null;
        }
        // if (LTPlatform.instance.platform != EPlatformType.WX && LTPlatform.instance.platform != EPlatformType.Web) {
        //     tagUI.dispose();
        //     return null;
        // }

        if (tagUI instanceof UI_WxSideGames) {
            return new View_WxSideGames(tagUI);
        }
        let uiInstance = UI_WxSideGames.createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_WxSideGames(uiInstance);
    }

    private _ui: UI_WxSideGames;
    public get ui(): UI_WxSideGames {
        return this._ui;
    }

    /**
     * 储存的广告
     */
    private _cacheAds: SDK.ADInfoData[];
    private showingIndexs: number[] = [0, 1, 2, 3];

    private _posId: number = 0;

    private constructor(ui: UI_WxSideGames) {
        this._ui = ui;
        this._Init();
    }

    private _Init() {
        if (LTPlatform.instance.platform == EPlatformType.WX || LTPlatform.instance.platform == EPlatformType.Web) {
            this._posId = 5;
        }
        this._cacheAds = LTSDK.instance.adManager.GetADListByLocationId(this._posId);
        if (this._cacheAds == null) {
            Laya.stage.on(CommonEventId.SELF_AD_INITED, this, this._OnAdInited);
            this.ui.visible = false;
        } else {
            this.ui.m_list.setVirtual();
            this.ui.m_list.itemRenderer = Laya.Handler.create(this, this.renderItem, null, false);
            this.ui.m_list.numItems = 4;
            this.ui.m_list.on(fairygui.Events.CLICK_ITEM, this, this.clickItem);
            Laya.timer.loop(5000, this, () => {
                this.refresh();
            });
            this.refresh();
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
    refresh() {
        const first = this.showingIndexs[this.showingIndexs.length - 1];
        this.showingIndexs = [];
        for (let i = 0; i < 4; i++) {
            let ind = (first + i) % this._cacheAds.length;
            this.showingIndexs.push(ind);
        }
        this.ui.m_list.numItems = 4;
        this.ui.m_list.refreshVirtualList();
    }
    private _OnAdInited(posId: number) {
        if (posId != this._posId) return;
        this._cacheAds = LTSDK.instance.adManager.GetADListByLocationId(this._posId);
        this.ui.m_list.itemRenderer = Laya.Handler.create(this, this.renderItem, null, false);
        this.ui.m_list.numItems = this._cacheAds.length;
        this.ui.m_list.on(fairygui.Events.CLICK_ITEM, this, this.clickItem);
        this.ui.visible = true;

    }

    clickItem(item: UI_item_gameSmall) {
        let uid = item.data['id'];
        let path = item.data['path'];
        let adid = item.data['adid'];
        LTPlatform.instance.NavigateToApp(uid, path, null, true, false, adid);

    }
    renderItem(index: number, item: UI_item_gameSmall) {
        let ind = this.showingIndexs[index];
        let data = this._cacheAds[ind];
        let info = {
            id: data.ad_appid,
            path: data.ad_path,
            adid: data.ad_id
        }
        item.data = info;
        item.m_title.text = data.ad_name;
        item.m_icon.m_icon.url = data.ad_img;
        item.m_red.visible = data.ad_dot == 1;
        item.m_shake.play();
        // let ad: any = {};
        // ad.ad_id = data.ad_id;
        // ad.location_id = 5;
        // ad.num = 1;
        // LTSDK.instance.RecordShowAd([ad]);
    }

}