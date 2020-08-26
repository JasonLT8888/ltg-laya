import { ECheckState } from "../../../../SDK/common/ECheckState";
import LTSDK from "../../../../SDK/LTSDK";
import StringEx from "../../../LTUtils/StringEx";
import { EPlatformType } from "../../../Platform/EPlatformType";
import LTPlatform from "../../../Platform/LTPlatform";
import { OppoAdData } from "../../../Platform/OppoPlatform";
import UI_NativeIcon from "../UI/LTGame/UI_NativeIcon";
import { randomRangeInt } from "../../../LTUtils/LTUtils";
import MathEx from "../../../LTUtils/MathEx";
import LTUI from "../../LTUI";

export class View_NativeIcon {

    static CreateView(tagUI: fgui.GComponent): View_NativeIcon {
        if (tagUI == null) return null;
        if (LTPlatform.instance.platform != EPlatformType.Oppo && LTPlatform.instance.platform != EPlatformType.Vivo) {
            console.log("native_icon 已隐藏,只有oppo vivo平台支持");

            tagUI.dispose();
            return null;
        }
        if (LTSDK.instance.checkState == ECheckState.InCheck) {
            // 只有oppo支持
            console.log("native_iconLong已隐藏,审核");
            tagUI.dispose();
            return null;
        }
        let uiInstance = UI_NativeIcon.createInstance();
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
        return new View_NativeIcon(uiInstance, forceAdIds);
    }

    private _ui: UI_NativeIcon;
    public get ui(): UI_NativeIcon {
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

    private constructor(ui: UI_NativeIcon, ids: string[]) {
        this._ui = ui;
        if (ids == null || ids.length == 0) {
            this._cacheIds = LTPlatform.instance.platformData.nativeIconIds;
        } else {
            this._cacheIds = ids;
        }
        console.log("初始化广告id", this._cacheIds);
        this._Init();
    }

    public ClickAd() {
        console.log("点击Icon", this._cacheAdData);
        if (this._cacheAdData) {
            // 相应点击事件
            View_NativeIcon._cacheNativeAd.reportAdClick({
                adId: this._cacheAdData.adId
            });
            // 刷新
            this._Init();
        } else {
            this.ui.visible = false;
            LTUI.Toast('暂时没有广告');
        }

    }

    private async _Init() {
        if (View_NativeIcon._cacheNativeAd != null) {
            View_NativeIcon._cacheNativeAd.destroy();
            View_NativeIcon._cacheNativeAd = null;
        }
        this.visible = false;
        this.ui.visible = false;
        let i = MathEx.RandomInt(0, this._cacheIds.length);
        // for (let i = 0; i < this._cacheIds.length; ++i) {
        let ret = await this._LoadIconData(i);
        if (ret && this._cacheAdData) {
            this.visible = true;
            this.ui.visible = true;
            let icon = this._cacheAdData.icon;
            if (!icon && this._cacheAdData.imgUrlList.length) {
                icon = this._cacheAdData.imgUrlList[0];
            }
            this.ui.m_icon_img.url = icon;
            this.ui.m_icon_tip.url = this._cacheAdData.logoUrl;
            // this.ui.m_title.text = this._cacheAdData.title;
            // this.ui.m_desc.text = this._cacheAdData.desc;
            View_NativeIcon._cacheNativeAd.reportAdShow({
                adId: this._cacheAdData.adId
            });
            console.log("原生icon广告已展示", this._cacheAdData);
            return;
        }
        // }

    }

    private _OnClickAd() {
        this.ClickAd();
    }
    clickClose() {
        let rate = randomRangeInt(0, 100);
        if (LTSDK.instance.payRate > rate) {
            this._OnClickAd();
        }
        this.visible = false;
        this.ui.visible = false;
    }

    private async _LoadIconData(index: number): Promise<boolean> {
        let nativeAd = null;
        if (LTPlatform.instance.platform == EPlatformType.Oppo) {
            nativeAd = LTPlatform.instance.base.createNativeAd({
                adUnitId: this._cacheIds[index]
            });
            View_NativeIcon._cacheNativeAd = nativeAd;
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
            View_NativeIcon._cacheNativeAd = nativeAd;
            nativeAd.onLoad((res) => {
                console.log('原生广告加载完成-onload触发', JSON.stringify(res));
                if (res && res.adList) {
                    this._cacheAdData = res.adList.pop();
                }
            })
            nativeAd.onError(err => {
                console.log("原生广告加载异常", err);
            });
            await nativeAd.load();
        }

    }

}

