import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_ImageBanner from "./UI/LTGame/UI_ImageBanner";
import LTPlatform from "../../Platform/LTPlatform";

export default class UI_ImageBannerMediator extends BaseUIMediator<UI_ImageBanner> {

    private static _instance: UI_ImageBannerMediator;
    public static get instance(): UI_ImageBannerMediator {
        if (this._instance == null) {
            this._instance = new UI_ImageBannerMediator();
            this._instance._classDefine = UI_ImageBanner;
        }
        return this._instance;
    }

    private _fakeBannerData: FakeBannerData;

    _OnShow() {
        super._OnShow();
        // your code

        this._sortOrder = 500;
        this._fakeBannerData = this._openParam as FakeBannerData;
        this.ui.m_img_banner.url = this._fakeBannerData.imgPath;
        this.ui.m_img_adnotice.url = this._fakeBannerData.noticePath;

        this.ui.m_img_banner.onClick(this, this._OnClickBanner);
        this.ui.m_btn_close.onClick(this, this._OnClickClose);

        // 上报广告曝光
        this._fakeBannerData.owner.reportAdShow({
            adId: this._fakeBannerData.adId
        });
    }

    private _OnClickBanner() {
        console.log("点击banner", this._fakeBannerData);
        // 相应点击事件
        this._fakeBannerData.owner.reportAdClick({
            adId: this._fakeBannerData.adId
        });
        // 更换广告
        LTPlatform.instance.ShowBannerAd();
    }

    private _OnClickClose() {
        console.log("点击关闭banner", this._fakeBannerData);
        this.Hide();
    }

}

export class FakeBannerData {
    owner: any;
    imgPath: string;
    noticePath: string;
    iconPath: string;
    adId: string;
}