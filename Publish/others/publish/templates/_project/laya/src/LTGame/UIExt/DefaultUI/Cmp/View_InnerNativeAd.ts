import LTPlatform from "../../../Platform/LTPlatform";
import OppoPlatform, { NativeADUnit } from "../../../Platform/OppoPlatform";
import UI_NativeBigAd from "../UI/LTGame/UI_NativeBigAd";

export default class View_InnerNativeAd {

    static CreateView(tagUI: fgui.GComponent): View_InnerNativeAd {
        if (tagUI == null) return null;

        // 额外判定一次是否支持交叉推广,如果不支持,则隐藏交叉推广
        if (!LTPlatform.instance.isSupportJumpOther) {
            tagUI.dispose();
            return null;
        }

        if (tagUI instanceof UI_NativeBigAd) {
            return new View_InnerNativeAd(tagUI);
        }
        let uiInstance = UI_NativeBigAd.createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_InnerNativeAd(uiInstance);
    }

    private _ui: UI_NativeBigAd;
    public get ui(): UI_NativeBigAd {
        return this._ui;
    }

    private constructor(ui: UI_NativeBigAd) {
        this._ui = ui;
        this._Init();
    }

    /**
     * 储存的广告
     */
    private _cacheAd: NativeADUnit;
    private _closedTime: number;


    private _Init() {
        let plat = LTPlatform.instance as OppoPlatform;
        this._cacheAd = plat.nativeAd;
        this.ui.onClick(this, this._OnClickAD);
        this.ui.m_btn_close.onClick(this, () => {
            this.ui.visible = false;
        });
        this._UpdateUI();
        this._LoopUpdate();
    }

    private async _LoopUpdate() {

        // while (this.ui && !this.ui.isDisposed) {
        //     // await Awaiters.Frames(1);
        //     // this._remainUpdateTime -= Laya.timer.delta;
        //     // if (this._remainUpdateTime < 0) {
        //     //     this._UpdateUI();
        //     // }
        // }
    }

    private _UpdateUI() {
        this._cacheAd.reportShow();
        this.ui.m_img.url = this._cacheAd.current_ad.imgUrlList[0];
        this.ui.m_icon.url = this._cacheAd.current_ad.icon;
        this.ui.m_tag.url = this._cacheAd.current_ad.logoUrl;
        this.ui.m_title.text = this._cacheAd.current_ad.title;
    }

    private async _OnClickAD() {
        await this._cacheAd.ReportNativeClick();
        this._UpdateUI();
    }

}