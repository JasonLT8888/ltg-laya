import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_GameCenterBig from "./UI/LTGame/UI_GameCenterBig";
import UI_item_game from "./UI/LTGame/UI_item_game";
import UI_item_gameBig from "./UI/LTGame/UI_item_gameBig";
import LTSDK from "../../../SDK/LTSDK";
import LTPlatform from "../../Platform/LTPlatform";
import UI_item_gameMax from "./UI/LTGame/UI_item_gameMax";
import { EPlatformType } from "../../Platform/EPlatformType";


/**
 * 猜你喜欢
 */
export class UI_GameCenterBigMediator extends BaseUIMediator<UI_GameCenterBig> {
    private static _instance: UI_GameCenterBigMediator;
    _posId: number = 5;
    cacheAds: SDK.ADInfoData[];
    public get ui(): UI_GameCenterBig {
        return this._ui;
    }

    public static get instance(): UI_GameCenterBigMediator {
        if (this._instance == null) {
            this._instance = new UI_GameCenterBigMediator();
            this._instance._classDefine = UI_GameCenterBig;
        }
        return this._instance;
    }

    _OnShow() {
        this._needFilScreen = false;
        super._OnShow();
        this._posId = 5;
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
        let appid = item.data['id'];
        let path = item.data['path']
        let adid = item.data['adid']
        switch (LTPlatform.instance.platform) {
            case EPlatformType.Oppo:
            case EPlatformType.Vivo:
                appid = path;
                break;
            default:
                break;
        }
        LTPlatform.instance.NavigateToApp(appid, null, null, true, false, adid).then(() => {
            LTSDK.instance.ReportClickAd(adid, this._posId, true, '游戏中心');
        }).catch(() => {
            LTSDK.instance.ReportClickAd(adid, this._posId, false, '游戏中心');
        });;
    }
    renderItem(index: number, item: any) {
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

        if (item instanceof UI_item_gameMax) {
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
