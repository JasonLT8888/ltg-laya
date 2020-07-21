import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_SelfBanner from "./UI/LTGame/UI_SelfBanner";
import LTSDK from "../../../SDK/LTSDK";
import LTPlatform from "../../Platform/LTPlatform";
import { ECheckState } from "../../../SDK/common/ECheckState";


export class UI_SelfBannerMediator extends BaseUIMediator<UI_SelfBanner> {
    private static _instance: UI_SelfBannerMediator;
    _posId: number = 19;
    cacheAds: SDK.ADInfoData[];
    showingIndex: number = 0;
    public get ui(): UI_SelfBanner {
        return this._ui;
    }

    public static get instance(): UI_SelfBannerMediator {
        if (this._instance == null) {
            this._instance = new UI_SelfBannerMediator();
            this._instance._classDefine = UI_SelfBanner;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        this.cacheAds = LTSDK.instance.adManager.GetADListByLocationId(this._posId);
        if (!this.cacheAds || LTSDK.instance.checkState == ECheckState.InCheck) {
            this.Hide();
            console.error('获取广告ID失败Banner');
            return;
        }
        this.ui.sortingOrder = Number.MAX_SAFE_INTEGER;
        this.refresh();
        Laya.timer.loop(15 * 1000, this, this.refresh);
        this.ui.m_banner.onClick(this, this.clickBanner)

    }
    clickBanner() {
        let ad = this.cacheAds[this.showingIndex % this.cacheAds.length];
        LTPlatform.instance.NavigateToApp(ad.ad_appid, ad.ad_path);
        this.refresh();
    }
    refresh() {
        this.showingIndex++;
        let id = this.showingIndex % this.cacheAds.length;
        let data = this.cacheAds[id];
        this.ui.m_banner.icon = data.ad_img;
    }
    protected _OnHide() { }
}
