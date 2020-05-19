import LTPlatform from "../../LTGame/Platform/LTPlatform";
import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTUI from "../../LTGame/UIExt/LTUI";
import UI_ADDemo from "../../ui/Main/UI_ADDemo";

export default class UI_ADDemoMediator extends BaseUIMediator<UI_ADDemo> {

    private static _instance: UI_ADDemoMediator;
    public static get instance(): UI_ADDemoMediator {
        if (this._instance == null) {
            this._instance = new UI_ADDemoMediator();
            this._instance._classDefine = UI_ADDemo;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_show_banner.onClick(this, this._OnClickShowBanner);
        this.ui.m_btn_back.onClick(this, this._OnClickBack);
        this.ui.m_btn_hide_banner.onClick(this, this._OnClickHideBanner);
        this.ui.m_btn_rewardvideo.onClick(this, this._OnClickRewardAd);
        this.ui.m_btn_intvideo.onClick(this, this._OnClickIntAd);
        this.ui.m_btn_native.onClick(this, this._OnClickNative);
        this.ui.m_btn_native_close.onClick(this, this._OnClickHideNative);
    }

    _OnClickNative() {
        // (LTPlatform.instance as OppoPlatform).ShowNativeAd();
    }
    _OnClickHideNative() {
        // (LTPlatform.instance as OppoPlatform).HideNativeAd();
    }

    private _OnClickBack() {
        this.Hide();
    }

    private _OnClickShowBanner() {
        LTPlatform.instance.ShowBannerAd();
    }

    private _OnClickHideBanner() {
        LTPlatform.instance.HideBannerAd();
    }

    private _OnClickRewardAd() {
        LTPlatform.instance.ShowRewardVideoAd(Laya.Handler.create(this, () => {
            LTUI.Toast("获得奖励");
        }), Laya.Handler.create(this, () => {
            LTUI.Toast("跳过视频");
        }));
    }

    private _OnClickIntAd() {
        LTPlatform.instance.ShowInterstitalAd();
    }

}