import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_GameCenter from "./UI/LTGame/UI_GameCenter";
import UI_item_game from "./UI/LTGame/UI_item_game";
import UI_item_gameBig from "./UI/LTGame/UI_item_gameBig";
import LTSDK from "../../../SDK/LTSDK";
import LTPlatform from "../../Platform/LTPlatform";



export class UI_GameCenterMediator extends BaseUIMediator<UI_GameCenter> {
    private static _instance: UI_GameCenterMediator;
    _posId: number = 5;
    cacheAds: SDK.ADInfoData[];
    public get ui(): UI_GameCenter {
        return this._ui;
    }
    public static get instance(): UI_GameCenterMediator {
        if (this._instance == null) {
            this._instance = new UI_GameCenterMediator();
            this._instance._classDefine = UI_GameCenter;
        }
        return this._instance;
    }

    _OnShow() {
        this._needFilScreen = false;
        super._OnShow();
        this.cacheAds = LTSDK.instance.adManager.GetADListByLocationId(this._posId);
        if (!this.cacheAds) {
            console.error('获取广告ID失败GameCenter');
            this.Hide();
            return;
        }
        this.ui.m_topList.setVirtualAndLoop();
        this.ui.m_topList.itemRenderer = Laya.Handler.create(this, this.renderItem, null, false);
        this.ui.m_topList.on(fairygui.Events.CLICK_ITEM, this, this.clickItem);
        this.ui.m_topList.numItems = this.cacheAds.length;
        this.ui.m_topList.refreshVirtualList();
        Laya.timer.loop(1000 * 5, this, () => {
            this.ui.m_topList.scrollPane.scrollRight(148 / 128, true);//148/697*4
        });

        this.ui.m_centerList.setVirtual();
        this.ui.m_centerList.itemRenderer = Laya.Handler.create(this, this.renderItem, null, false);
        this.ui.m_centerList.on(fairygui.Events.CLICK_ITEM, this, this.clickItem);
        this.ui.m_centerList.numItems = this.cacheAds.length;
        this.ui.m_centerList.refreshVirtualList();
        Laya.timer.loop(100, this, () => {
            this.ui.m_centerList.scrollPane.scrollDown(0.005, true);
        });
        this.ui.m_btn_close.onClick(this, this.Hide);
        // this.ui.m_btn_back.onClick(this, this.Hide);
        LTPlatform.instance.HideBannerAd();
        this.ui.m_btn_close.visible = false;
        Laya.timer.once(3000, this, () => {
            this.ui.m_btn_close.visible = true;
        });
        let ads = [];
        this.cacheAds.forEach(adData => {
            let ad: any = {};
            ad.ad_id = adData.ad_id;
            ad.location_id = this._posId;
            ad.num = 1;
            ads.push(ad);
        })
        LTSDK.instance.ReportShowAd(ads);

    }
    clickItem(item: UI_item_gameBig | UI_item_game) {
        let uid = item.data['id'];
        let path = item.data['path']
        let adid = item.data['adid']
        LTPlatform.instance.NavigateToApp(uid, path, null, false, false, adid);
    }
    renderItem(index: number, item: UI_item_game | UI_item_gameBig) {
        let data = this.cacheAds[index];
        let info = {
            id: data.ad_appid,
            path: data.ad_path,
            adid: data.ad_id
        }
        item.data = info;
        item.m_title.text = data.ad_name;
        item.m_icon.m_icon.url = data.ad_img;
        item.m_red.visible = data.ad_dot == 1;
        if (item instanceof UI_item_gameBig) {
            item.m_player.text = `${data.ad_count}人玩`;
        }
    }
    protected _OnHide() {
        Laya.timer.clearAll(this);
        // LTPlatform.instance.ShowBannerAd();
        if (this._openParam) {
            this._openParam();
        }

    }
}
