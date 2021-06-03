import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_MiniGames from "./UI/LTGame/UI_MiniGames";
import LTPlatform from "../../Platform/LTPlatform";
import LTSDK from "../../../SDK/LTSDK";
import UI_rank_item from "./UI/LTGame/UI_rank_item";
import { EPlatformType } from "../../Platform/EPlatformType";
import UI_ttgame_items from "./UI/LTGame/UI_ttgame_items";



export class UI_MiniGamesMediator extends BaseUIMediator<UI_MiniGames> {
    private static _instance: UI_MiniGamesMediator;
    public get ui(): UI_MiniGames {
        return this._ui;
    }

    public static get instance(): UI_MiniGamesMediator {
        if (this._instance == null) {
            this._instance = new UI_MiniGamesMediator();
            this._instance._classDefine = UI_MiniGames;
        }
        return this._instance;
    }
    private topAds: SDK.ADInfoData[] = [];
    private midBannerAds: SDK.ADInfoData[] = [];
    private listAds: SDK.ADInfoData[] = [];
    _OnShow() {
        super._OnShow();
        // if (!LTSDK.instance.configs.isNavEnable) {
        //     this.Hide();
        // }
        LTPlatform.instance.HideBannerAd();
        this.ui.m_btn_close.onClick(this, this.Hide);
        this.topAds = LTSDK.instance.adManager.GetADListByLocationId(1);
        this.midBannerAds = LTSDK.instance.adManager.GetADListByLocationId(2);
        this.listAds = LTSDK.instance.adManager.GetADListByLocationId(3);
        if (this.topAds.length >= 2) {
            this.renderTopAd(this.ui.m_game_hot, this.topAds[0]);
            this.renderTopAd(this.ui.m_game_new, this.topAds[1]);
        }
        if (this.midBannerAds.length > 0) {
            let data = this.midBannerAds[0];
            this.ui.m_mid_banner.m_icon.icon = data.ad_img;
            this.ui.m_mid_banner.onClick(this, () => {
                console.log(data);
                LTPlatform.instance.NavigateToApp(data.ad_package).then(() => {
                    LTSDK.instance.ReportClickAd(data.ad_id, 3, true, '中部banner');
                }).catch(() => {
                    LTSDK.instance.ReportClickAd(data.ad_id, 3, false, '中部banner');
                });;
            });
        }
        if (this.listAds.length > 0) {
            this.ui.m_list.setVirtual();
            this.ui.m_list.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
            this.ui.m_list.on(fgui.Events.CLICK_ITEM, this, this.clickListItem);
            this.ui.m_list.numItems = this.listAds.length;
        }
    }
    clickListItem(item: UI_ttgame_items) {
        let index = parseInt(item.data.toString());
        let data = this.listAds[index];
        LTPlatform.instance.NavigateToApp(data.ad_package).then(() => {
            LTSDK.instance.ReportClickAd(data.ad_id, 3, true, '精选好游戏');
        }).catch(() => {
            LTSDK.instance.ReportClickAd(data.ad_id, 3, false, '精选好游戏');
        });
    }
    renderListItem(index: number, item: UI_ttgame_items) {
        let data = this.listAds[index];
        item.m_name.text = data.ad_name;
        item.m_icon.icon = data.ad_img;
        item.m_dot.selectedIndex = data.ad_device;
        item.data = index;
    }

    renderTopAd(item: UI_rank_item, data: SDK.ADInfoData) {
        item.m_name.text = data.ad_name;
        item.m_icon.icon = data.ad_img;
        item.onClick(this, () => {
            LTPlatform.instance.NavigateToApp(data.ad_package).then(() => {
                LTSDK.instance.ReportClickAd(data.ad_id, 3, true, '头条榜首');
            }).catch(() => {
                LTSDK.instance.ReportClickAd(data.ad_id, 3, false, '头条榜首');
            });
        });
    }
    protected _OnHide() {

    }
}
