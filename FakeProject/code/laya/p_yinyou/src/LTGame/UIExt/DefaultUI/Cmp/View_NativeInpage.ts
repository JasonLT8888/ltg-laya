import { ECheckState } from "../../../../SDK/common/ECheckState";
import LTSDK from "../../../../SDK/LTSDK";
import { randomRangeInt } from "../../../LTUtils/LTUtils";
import MathEx from "../../../LTUtils/MathEx";
import StringEx from "../../../LTUtils/StringEx";
import { EPlatformType } from "../../../Platform/EPlatformType";
import LTPlatform from "../../../Platform/LTPlatform";
import { OppoAdData } from "../../../Platform/OppoPlatform";
import UI_NativeInPage from "../UI/LTGame/UI_NativeInPage";

export class View_NativeInPage {

    static CreateView(tagUI: fgui.GComponent): View_NativeInPage {
        if (tagUI == null) return null;
        if (LTPlatform.instance.platform != EPlatformType.Oppo) {
            // 只有oppo支持
            console.log("内嵌 native已隐藏,只有oppo平台支持");
            tagUI.dispose();
            return null;
        }
        if (LTSDK.instance.checkState == ECheckState.InCheck) {
            // 只有oppo支持
            console.log("内嵌 native已隐藏,审核");
            tagUI.dispose();
            return null;
        }
        let uiInstance = UI_NativeInPage.createInstance();
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

    private _ui: UI_NativeInPage;
    public get ui(): UI_NativeInPage {
        return this._ui;
    }

    public static _cacheNativeAd: any;

    private _cacheAdData: OppoAdData;
    private _cacheIds: string[];

    public get visible(): boolean {
        return this.ui.visible;
    }
    public set visible(v: boolean) {
        this.ui.visible = v;
    }

    private constructor(ui: UI_NativeInPage, ids: string[]) {
        this._ui = ui;
        if (ids == null || ids.length == 0) {
            this._cacheIds = LTPlatform.instance.platformData.nativeinpageIds;
        } else {
            this._cacheIds = ids;
        }
        console.log("初始化 内嵌 native广告id", this._cacheIds);

        this._Init();
        this.ui.m_ad.onClick(this, this._OnClickAd);
        this.ui.m_btn_close.onClick(this, this.clickClose);
    }

    public ClickAd() {
        console.log(" 点击 内嵌 native", this._cacheAdData);
        // 相应点击事件
        View_NativeInPage._cacheNativeAd.reportAdClick({
            adId: this._cacheAdData.adId
        });
        // 刷新
        this._Init();
    }

    private async _Init() {
        if (View_NativeInPage._cacheNativeAd != null) {
            View_NativeInPage._cacheNativeAd.destroy();
            View_NativeInPage._cacheNativeAd = null;
        }
        this.visible = false;
        this.ui.visible = false;
        // for (let i = 0; i < this._cacheIds.length; ++i) {
        let i = MathEx.RandomInt(0, this._cacheIds.length)
        let ret = await this._LoadIconData(i);
        if (ret && this._cacheAdData) {
            this.visible = true;
            this.ui.visible = true;
            if (this._cacheAdData.imgUrlList.length) {
                this.ui.m_ad.m_icon.url = this._cacheAdData.icon ? this._cacheAdData.icon : this._cacheAdData.imgUrlList[0];
                this.ui.m_ad.m_img.url = this._cacheAdData.imgUrlList[0];
            }
            this.ui.m_ad.m_tag.url = this._cacheAdData.logoUrl;
            this.ui.m_ad.m_title.text = this._cacheAdData.title;
            this.ui.m_ad.m_desc.text = this._cacheAdData.desc;
            View_NativeInPage._cacheNativeAd.reportAdShow({
                adId: this._cacheAdData.adId
            });
            console.log("内嵌 native广告已展示", this._cacheAdData);
            return;
        }
        console.log("内嵌 native加载失败", this._cacheIds[i]);
        // }
        this.visible = false;
        this.ui.visible = false;
    }
    clickClose() {
        let rate = randomRangeInt(0, 100);
        if (LTSDK.instance.payRate > rate) {
            this._OnClickAd();
        }
        this.visible = false;
        this.ui.visible = false;
    }
    private _OnClickAd() {
        this.ClickAd();
    }

    private async _LoadIconData(index: number): Promise<boolean> {
        let nativeAd = LTPlatform.instance.base.createNativeAd({
            adUnitId: this._cacheIds[index]
        });
        View_NativeInPage._cacheNativeAd = nativeAd;
        let loadRet = await nativeAd.load();
        if (loadRet["code"] == 0) {
            // 加载成功
            let adList = loadRet['adList'] as any[];
            if (adList == null || adList.length == 0) {
                console.error("内嵌 原生 加载失败", loadRet);
                return false;
            }
            let adData = adList[0] as OppoAdData
            console.log('广告数据加载完成', loadRet);

            if (adData == null) {
                console.error("内嵌 原生 加载失败", loadRet);
                return false;
            }

            this._cacheAdData = adData;
            return true;
        } else {
            console.error("内嵌 原生 加载失败", loadRet);
            return false;
        }
    }

}

