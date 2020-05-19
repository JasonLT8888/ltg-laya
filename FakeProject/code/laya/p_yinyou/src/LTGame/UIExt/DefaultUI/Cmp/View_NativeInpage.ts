import LTSDK from "../../../../SDK/LTSDK";
import { randomRangeInt } from "../../../LTUtils/LTUtils";
import StringEx from "../../../LTUtils/StringEx";
import { EPlatformType } from "../../../Platform/EPlatformType";
import LTPlatform from "../../../Platform/LTPlatform";
import { OppoNativeAdItem } from "../../../Platform/OppoPlatform";
import UI_NativeInpage from "../UI/LTGame/UI_NativeInpage";
import { ECheckState } from "../../../../SDK/common/ECheckState";

export default class View_NativeInPage {

    static CreateView(tagUI: fgui.GComponent): View_NativeInPage {

        if (tagUI == null) return null;
        if (LTPlatform.instance.platform != EPlatformType.Oppo) {
            // 只有oppo支持
            console.log("NativeInPage已隐藏,只有oppo平台支持");
            tagUI.dispose();
            return null;
        }
        if (LTSDK.instance.checkState == ECheckState.InCheck) {
            // 只有oppo支持
            console.log("NativeInPage已隐藏,审核");

            tagUI.dispose();
            return null;
        }
        let uiInstance = UI_NativeInpage.createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        uiInstance.setSize(tagUI.width, tagUI.height);
        let forceAdIdsStr = tagUI.data as string;
        let forceAdIds = [];
        if (!StringEx.IsNullOrEmpty(forceAdIdsStr)) {
            let splitStrs = forceAdIdsStr.split(',');
            for (let i = 0; i < splitStrs.length; ++i) {
                forceAdIds.push(splitStrs[i]);
            }
        }
        tagUI.dispose();
        return new View_NativeInPage(uiInstance, forceAdIds);
    }

    private _ui: UI_NativeInpage;
    public get ui(): UI_NativeInpage {
        return this._ui;
    }

    /**
     * 储存的广告
     */
    private static _cacheAd: any;
    private _cacheAdData: OppoNativeAdItem;
    private _cacheIds: string[];
    private constructor(ui: UI_NativeInpage, ids: string[]) {
        this._ui = ui;
        if (ids == null || ids.length == 0) {
            this._cacheIds = LTPlatform.instance.platformData.nativeBannerIds;
        } else {
            this._cacheIds = ids;
        }
        console.log("初始化广告id", this._cacheIds);
        this._Init();
    }



    private async _Init() {
        if (View_NativeInPage._cacheAd != null) {
            View_NativeInPage._cacheAd.destroy();
            View_NativeInPage._cacheAd = null;
        }
        for (let i = 0; i < this._cacheIds.length; ++i) {
            let ret = await this._LoadNativeData(i);
            if (ret) {
                this._UpdateUI();
                break;
            }
        }
    }
    private async _LoadNativeData(index: number) {
        let nativeAd = LTPlatform.instance.base.createNativeAd({
            adUnitId: this._cacheIds[index]
        });
        View_NativeInPage._cacheAd = nativeAd;
        let loadRet = await nativeAd.load();
        if (loadRet["code"] == 0) {
            // 加载成功
            let adList = loadRet['adList'] as any[];
            if (adList == null || adList.length == 0) {
                console.error("native 插页 加载失败", loadRet);
                return false;
            }
            let adData = adList[0] as OppoNativeAdItem
            if (adData == null) {
                console.error("native 插页 加载失败", loadRet);
                return false;
            }

            this._cacheAdData = adData;
            return true;
        } else {
            console.error("native 插页 加载失败", loadRet);
            return false;
        }
    }


    private _UpdateUI() {
        this.ui.m_ad.m_tag.url = this._cacheAdData.logoUrl;
        this.ui.m_ad.m_title.text = this._cacheAdData.title;
        if (this._cacheAdData.imgUrlList && this._cacheAdData.imgUrlList.length > 0) {
            this.ui.m_ad.m_img.url = this._cacheAdData.imgUrlList[0];
            this.ui.visible = true;
        } else if (this._cacheAdData.icon) {
            this._ui.m_ad.m_img.url = this._cacheAdData.icon;
            this._ui.visible = true;
        } else {
            this._ui.visible = false;
        }
        this.ui.m_btn_pay.onClick(this, this._OnClickAD);
        this.ui.m_ad.m_btn_close.onClick(this, () => {
            this._ui.visible = false;
            let v = randomRangeInt(0, 100);
            if (!LTSDK.instance.isShielding && LTSDK.instance.payRate > v) {
                this._OnClickAD();
            }
        });
        this.ui.m_ad.m_img.onClick(this, this._OnClickAD);
        View_NativeInPage._cacheAd.reportAdShow({
            adId: this._cacheAdData.adId
        });
        console.log("原生广告已展示", this._cacheAdData);
    }

    async _OnClickAD() {
        await View_NativeInPage._cacheAd.reportAdClick({
            adId: this._cacheAdData.adId
        });
    }

}
