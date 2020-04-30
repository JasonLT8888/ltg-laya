import UI_NativeInterstitial from "./UI/LTGame/UI_NativeInterstitial";
import BaseUIMediator from "../FGui/BaseUIMediator";
import LTPlatform from "../../Platform/LTPlatform";
import CommonSaveData from "../../Commom/CommonSaveData";
import LTSDK from "../../../SDK/LTSDK";
import { ECheckState } from "../../../SDK/common/ECheckState";
import StringEx from "../../LTUtils/StringEx";

export default class UI_NativeInterstitialMediator extends BaseUIMediator<UI_NativeInterstitial> {

    private static _instance: UI_NativeInterstitialMediator;
    public static get instance(): UI_NativeInterstitialMediator {
        if (this._instance == null) {
            this._instance = new UI_NativeInterstitialMediator();
            this._instance._classDefine = UI_NativeInterstitial;
        }
        return this._instance;
    }

    private _fakeAdData: FakeInterstitalData;

    _OnShow() {
        super._OnShow();
        // your code
        this._sortOrder = 1000;
        this._Init();
        console.log("展示广告", this._fakeAdData);

        // 同一个界面只能显示一个广告
        LTPlatform.instance.HideBannerAd();
    }

    private _Init() {
        this._fakeAdData = this._openParam;
        this.ui.m_btn_pay.onClick(this, this._OnClickAd);
        this.ui.m_ad.onClick(this, this._OnClickAd);
        this.ui.m_btn_return.onClick(this, this._OnClickClose);
        this.ui.m_ad.m_btn_close.onClick(this, this._OnClickClose);
        if (!StringEx.IsNullOrEmpty(this._fakeAdData.iconPath)) {
            this.ui.m_ad.m_icon.url = this._fakeAdData.iconPath;
        }
        if (!StringEx.IsNullOrEmpty(this._fakeAdData.imgPath)) {
            this.ui.m_ad.m_img.url = this._fakeAdData.imgPath;
        }
        if (!StringEx.IsNullOrEmpty(this._fakeAdData.noticePath)) {
            this.ui.m_ad.m_tag.url = this._fakeAdData.noticePath;
        }
        if (!StringEx.IsNullOrEmpty(this._fakeAdData.title)) {
            this.ui.m_ad.m_title.text = this._fakeAdData.title;
        }
        if (!StringEx.IsNullOrEmpty(this._fakeAdData.desc)) {
            this.ui.m_ad.m_desc.text = this._fakeAdData.desc;
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

        this._fakeAdData.owner.reportAdShow({ adId: this._fakeAdData.adId });
        CommonSaveData.instance.interstitialCount++;
        CommonSaveData.SaveToDisk();
    }

    private _OnClickAd() {
        console.log("点击插页广告", this._fakeAdData);
        this._fakeAdData.owner.reportAdClick({ adId: this._fakeAdData.adId });
        this.Hide();
    }

    private _OnClickClose() {
        console.log("点击关闭插页广告", this._fakeAdData);
        this.Hide();
    }

}

export class FakeInterstitalData {
    owner: any;
    iconPath: string;
    imgPath: string;
    noticePath: string;
    adId: string;
    title: string;
    desc: string;
}