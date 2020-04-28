import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_NativeInterstitial from "./UI/LTGame/UI_NativeInterstitial";
import LTPlatform from "../../Platform/LTPlatform";
import OppoPlatform from "../../Platform/OppoPlatform";
import CommonSaveData from "../../Commom/CommonSaveData";
import LTSDK from "../../../SDK/LTSDK";
import { ECheckState } from "../../../SDK/common/ECheckState";

 

export class OpenInterstitialData {
    public onClosed: () => void;
}

export class UI_NativeInterstitialMediator extends BaseUIMediator<UI_NativeInterstitial> {
    private static _instance: UI_NativeInterstitialMediator;
    public get ui(): UI_NativeInterstitial {
        return this._ui;
    }

    public static get instance(): UI_NativeInterstitialMediator {
        if (this._instance == null) {
            this._instance = new UI_NativeInterstitialMediator();
            this._instance._classDefine = UI_NativeInterstitial;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        try {
            this.init();
        } catch (error) {
            console.error('插屏错误', error);
        }
        LTPlatform.instance.HideBannerAd();
    }
    private init() {
        let plat = LTPlatform.instance as OppoPlatform;
        if (plat && plat.intersitialAd && plat.intersitialAd.current_ad) {
            this.ui.displayObject.zOrder = 999;
            this.ui.m_btn_pay.onClick(this, () => {
                plat.intersitialAd.ReportNativeClick();
                this.Hide();
            });
            this.ui.m_ad.onClick(this, () => {
                plat.intersitialAd.ReportNativeClick();
                this.Hide();
            });
            this.ui.m_btn_return.onClick(this, () => {
                this.Hide();
            });
            this.ui.m_ad.m_btn_close.onClick(this, () => {
                this.Hide();
            });
            plat.intersitialAd.reportShow();
            CommonSaveData.instance.interstitialCount++;
            CommonSaveData.SaveToDisk();
            this.ui.m_ad.m_img.url = plat.intersitialAd.current_ad.imgUrlList[0];
            this.ui.m_ad.m_icon.url = plat.intersitialAd.current_ad.icon;
            this.ui.m_ad.m_tag.url = plat.intersitialAd.current_ad.logoUrl;
            this.ui.m_ad.m_title.text = plat.intersitialAd.current_ad.title;
        }
        switch (LTSDK.instance.checkState) {
            case ECheckState.InCheck:
                break;
            case ECheckState.Normal:
            case ECheckState.NoGame:
                if (!LTSDK.instance.isShielding && LTSDK.instance.isADEnable) {
                    this.ui.m_t0.play();
                }
                break;
        }
    }

    protected _OnHide() {
        if (this._openParam) {
            (this._openParam as OpenInterstitialData).onClosed();
        }
        // UI_OverMediator.instance.Show();
    }
}
