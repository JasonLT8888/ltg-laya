import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_OpenAds from "./UI/LTGame/UI_OpenAds";
import UI_item_game from "./UI/LTGame/UI_item_game";
import UI_item_gameBig from "./UI/LTGame/UI_item_gameBig";
import LTSDK from "../../../SDK/LTSDK";
import LTPlatform from "../../Platform/LTPlatform";



export class UI_OpenAdsMediator extends BaseUIMediator<UI_OpenAds> {
    private static _instance: UI_OpenAdsMediator;
    _posId: number = 5;
    cacheAds: SDK.ADInfoData[];
    public get ui(): UI_OpenAds {
        return this._ui;
    }
    public static get instance(): UI_OpenAdsMediator {
        if (this._instance == null) {
            this._instance = new UI_OpenAdsMediator();
            this._instance._classDefine = UI_OpenAds;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        this.cacheAds = LTSDK.instance.adManager.GetADListByLocationId(this._posId);
        if (!this.cacheAds) {
            console.error('获取广告ID失败GameCenter');
            this.Hide();
            return;
        }
        this.ui.m_centerList.setVirtual();
        this.ui.m_centerList.itemRenderer = Laya.Handler.create(this, this.renderItem, null, false);
        this.ui.m_centerList.on(fairygui.Events.CLICK_ITEM, this, this.clickItem);
        this.ui.m_centerList.numItems = this.cacheAds.length;
        this.ui.m_centerList.refreshVirtualList();
        Laya.timer.loop(100, this, () => {
            this.ui.m_centerList.scrollPane.scrollDown(0.005, true);
        });
        this.ui.m_btn_close.onClick(this, this.Hide);
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
        let path = item.data['path'];
        let adid = item.data['adid'];
        LTPlatform.instance.NavigateToApp(uid, path, null, true, false, adid);

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
        // LTPlatform.instance.ShowBannerAd();
    }
}
