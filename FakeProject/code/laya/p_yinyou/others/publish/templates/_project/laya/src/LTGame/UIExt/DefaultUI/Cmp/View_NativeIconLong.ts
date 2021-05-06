import { ECheckState } from "../../../../SDK/common/ECheckState";
import LTSDK from "../../../../SDK/LTSDK";
import StringEx from "../../../LTUtils/StringEx";
import { EPlatformType } from "../../../Platform/EPlatformType";
import LTPlatform from "../../../Platform/LTPlatform";
import { OppoAdData } from "../../../Platform/OppoPlatform";
import UI_NativeIconLong from "../UI/LTGame/UI_NativeIconLong";
import { randomRangeInt } from "../../../LTUtils/LTUtils";
import MathEx from "../../../LTUtils/MathEx";
import LTUI from "../../LTUI";

export class View_NativeIconLong {
    static CreateView(tagUI: fgui.GComponent): View_NativeIconLong {
        if (tagUI == null) return null;
        if (LTPlatform.instance.platform != EPlatformType.Oppo && LTPlatform.instance.platform != EPlatformType.Vivo) {
            console.log("native_iconLong已隐藏,只有oppo vivo平台支持");

            tagUI.dispose();
            return null;
        }
        if (LTSDK.instance.checkState == ECheckState.InCheck) {
            // 只有oppo支持
            console.log("native_iconLong已隐藏,审核");
            tagUI.dispose();
            return null;
        }
        let uiInstance = UI_NativeIconLong.createInstance();
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
        return new View_NativeIconLong(uiInstance, forceAdIds);
    }

    private _ui: UI_NativeIconLong;
    public get ui(): UI_NativeIconLong {
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

    private constructor(ui: UI_NativeIconLong, ids: string[]) {
        this._ui = ui;
        if (ids == null || ids.length == 0) {
            this._cacheIds = LTPlatform.instance.platformData.nativeIconIds;
        } else {
            this._cacheIds = ids;
        }
        console.log("初始化广告id", this._cacheIds);

        this._Init();
        this.ui.m_ad.onClick(this, this._OnClickAd);
        this.ui.m_btn_close.onClick(this, this.clickClose)
    }

    public ClickAd() {
        console.log("点击Icon", this._cacheAdData);

        if (this._cacheAdData) {
            // 相应点击事件
            View_NativeIconLong._cacheNativeAd.reportAdClick({
                adId: this._cacheAdData.adId
            });
            // 刷新
            this._Init();
        } else {
            this.ui.visible = false;
            LTUI.Toast('暂时没有广告');
        }

    }
    clickClose() {
        let rate = randomRangeInt(0, 100);
        if (LTSDK.instance.configs.nativePayRate > rate) {
            this._OnClickAd();
        }
        this.visible = false;
        this.ui.visible = false;
    }

    private async _Init() {
        if (View_NativeIconLong._cacheNativeAd != null) {
            View_NativeIconLong._cacheNativeAd.destroy();
            View_NativeIconLong._cacheNativeAd = null;
        }
        this.visible = false;
        this.ui.visible = false;
        let i = MathEx.RandomInt(0, this._cacheIds.length);
        // for (let i = 0; i < this._cacheIds.length; ++i) {
        let ret = await this._LoadIconData(i);
        if (ret && this._cacheAdData) {
            this.showInfo();
            return;
        }
        // }

    }

    private showInfo() {
        this.visible = true;
        this.ui.visible = true;
        let icon = this._cacheAdData.icon;
        if (!icon && this._cacheAdData.imgUrlList.length) {
            icon = this._cacheAdData.imgUrlList[0];
        }
        this.ui.m_ad.m_icon.url = icon;
        this.ui.m_ad.m_tag.url = this._cacheAdData.logoUrl;
        this.ui.m_ad.m_title.text = this._cacheAdData.title;
        this.ui.m_ad.m_desc.text = this._cacheAdData.desc;
        if (!this._cacheAdData.show_reported) {
            View_NativeIconLong._cacheNativeAd.reportAdShow({
                adId: this._cacheAdData.adId
            });
            this._cacheAdData.show_reported = true;
            console.log("原生icon广告已展示", this._cacheAdData);
        }
    }

    private _OnClickAd() {
        this.ClickAd();
    }

    private async _LoadIconData(index: number): Promise<boolean> {
        let nativeAd = null;
        if (LTPlatform.instance.platform == EPlatformType.Oppo) {
            nativeAd = LTPlatform.instance.base.createNativeAd({
                adUnitId: this._cacheIds[index]
            });
            View_NativeIconLong._cacheNativeAd = nativeAd;
            let loadRet = await nativeAd.load();
            if (loadRet["code"] == 0) {
                // 加载成功
                let adList = loadRet['adList'] as any[];
                if (adList == null || adList.length == 0) {
                    console.error("native icon 加载失败", loadRet);
                    return false;
                }
                let adData = adList[0] as OppoAdData
                console.log('广告数据加载完成', loadRet);

                if (adData == null) {
                    console.error("native icon 加载失败", loadRet);
                    return false;
                }
                this._cacheAdData = adData;
                return true;
            } else {
                console.error("native icon 加载失败", loadRet);
                return false;
            }
        } else {
            nativeAd = LTPlatform.instance.base.createNativeAd({
                posId: this._cacheIds[index],
            });
            View_NativeIconLong._cacheNativeAd = nativeAd;
            nativeAd.onLoad((res) => {
                console.log(' 原生广告加载完成 触发', JSON.stringify(res));
                if (res && res.adList) {
                    this._cacheAdData = res.adList.pop();
                    this.showInfo();
                }
            })
            nativeAd.onError(err => {
                console.log("原生广告加载异常", err);
                this.ui.visible=false;
            });
            await nativeAd.load();
            
        }

    }

}

