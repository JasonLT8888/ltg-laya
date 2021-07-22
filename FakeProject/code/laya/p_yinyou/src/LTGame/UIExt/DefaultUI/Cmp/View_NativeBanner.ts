import { ECheckState } from "../../../../SDK/common/ECheckState";
import LTSDK from "../../../../SDK/LTSDK";
import CommonSaveData from "../../../Commom/CommonSaveData";
import MathEx from "../../../LTUtils/MathEx";
import { EPlatformType } from "../../../Platform/EPlatformType";
import LTPlatform from "../../../Platform/LTPlatform";
import { OppoAdData } from "../../../Platform/OppoPlatform";
import UI_NativeBanner from "../UI/LTGame/UI_NativeBanner";

export class View_NativeBanner {
/**
 * 
 * @param tagUI 定位组件
 * @param btn 查看按钮
 * @param onHide 关闭回调
 */
    static CreateView(tagUI: fgui.GGraph, btn: fgui.GButton, onHide?: Laya.Handler): View_NativeBanner {
        if (tagUI == null) return null;
        if (LTPlatform.instance.platform != EPlatformType.Oppo && LTPlatform.instance.platform != EPlatformType.Vivo && LTPlatform.instance.platform != EPlatformType.HW) {
            console.log("NativeBanner已隐藏,只有oppo vivo平台支持");
            onHide?.run();
            tagUI.dispose();
            return null;
        }
        if (LTSDK.instance.checkState == ECheckState.InCheck) {
            // 只有oppo支持
            console.log("内嵌 native已隐藏,审核");
            onHide?.run();
            tagUI.dispose();
            return null;
        }
        let uiInstance = UI_NativeBanner.createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        uiInstance.setSize(tagUI.width, tagUI.height);  
        tagUI.dispose();
        return new View_NativeBanner(uiInstance, btn, onHide);
    }

    private _ui: UI_NativeBanner;
    public get ui(): UI_NativeBanner {
        return this._ui;
    }

    public _cacheNativeAd: any;

    public _cacheAdData: OppoAdData;
    private _cacheIds: string[];
    public cacheBtn: fgui.GComponent;
    private onHide: Laya.Handler;
    public get visible(): boolean {
        return this.ui.visible;
    }
    public set visible(v: boolean) {
        this.ui.visible = v;
    }
    /**
     * 
     * @param ui 
     * @param btn 外部按钮
     */
    private constructor(ui: UI_NativeBanner, btn: fgui.GButton, onHide?: Laya.Handler) {
        this._ui = ui;
        this._cacheIds = LTPlatform.instance.platformData.nativeinpageIds;

        console.log("初始化 内嵌 native广告id", this._cacheIds);
        if (this._cacheAdData && !this._cacheAdData.click_reported) {
            this.showAdInfo();
        } else {
            this._Init();
        }
        if (btn) {
            this.cacheBtn = btn;
            btn.onClick(this, this._OnClickAd);
        }
        this.onHide = onHide;
        this.ui.m_ad.onClick(this, this._OnClickAd);
        this.ui.m_ad.m_btn_close.onClick(this, this.clickClose);
    }

    public ClickAd() {
        console.log(" 点击 内嵌 native", this._cacheAdData);
        // 相应点击事件
        if (this._cacheAdData && this._cacheAdData.adId) {
            this._cacheNativeAd.reportAdClick({
                adId: this._cacheAdData.adId
            });
        }
        // 点击后直接隐藏
        this.Hide();
    }
    private async _Init() {
        this.visible = true;
        this.ui.visible = true;
        // for (let i = 0; i < this._cacheIds.length; ++i) {
        let i = MathEx.RandomInt(0, this._cacheIds.length);
        this._cacheAdData = null;
        let ret = await this._LoadIconData(i);
        if (ret && this._cacheAdData) {
            this.showAdInfo();
        } else {
            console.log("内嵌 native加载失败", this._cacheIds[i]);
            // }  
            this.ui.visible = false;
        }

    }
    private showAdInfo() {
        if (!this._cacheAdData) {
            console.log("广告数据为空");
            return this.ui.visible = false;
        }
        this.ui.visible = true;
        this.visible = true;
        if (this._cacheAdData.imgUrlList.length) {
            let img = this._cacheAdData.imgUrlList[0];
            if (!img) {
                img = this._cacheAdData.icon;
            }
            let jpg = img.split(".jpg");
            if (jpg.length > 0) {
                img = jpg[0] + ".jpg";
            }
            this.ui.m_ad.m_icon.url = this._cacheAdData.icon ? this._cacheAdData.icon : "";
            this.ui.m_ad.m_img.url = img;
        }
        this.ui.m_ad.m_title.text = this._cacheAdData.title;
        this.ui.m_ad.m_desc.text = this._cacheAdData.desc;
        if (this._cacheAdData && !this._cacheAdData.show_reported && this._cacheAdData.adId) {
            this._cacheNativeAd.reportAdShow({
                adId: this._cacheAdData.adId
            });
            this._cacheAdData.show_reported = true;
        }
        LTPlatform.instance.HideBannerAd();
        console.log("内嵌 native广告已展示", this._cacheAdData);
    }

    clickClose(evt: Laya.Event) {
        evt.stopPropagation();
        if (MathEx.RandomRatio(LTSDK.instance.configs.nativePayRate)
            && CommonSaveData.instance.nativeClickCount < LTSDK.instance.configs.nativeClickCount) {
            CommonSaveData.instance.nativeClickCount++;
            CommonSaveData.SaveToDisk();
            this.ClickAd();
        }
        this.Hide();
    }

    Hide() {
        this.visible = false;
        this.ui.visible = false;
        if (this.cacheBtn) {
            this.cacheBtn.visible = false;
        }
        this.onHide?.run();
        this.ui.dispose();
        this._cacheAdData = null;
    }
    private _OnClickAd(evt: Laya.Event) {
        evt.stopPropagation();
        this.ClickAd();
    }

    private async _LoadIconData(index: number): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let onLoad = (res) => {
                console.log('原生广告加载完成 触发', JSON.stringify(res));
                if (res && res.adList) {
                    this._cacheAdData = res.adList[0];
                    resolve(true);
                }
            };
            let onError = (err) => {
                console.log("原生广告加载异常", err);
                this.Hide();
                resolve(false);
            };

            if (LTPlatform.instance.platform == EPlatformType.Oppo) {
                if (this._cacheNativeAd) {
                    this._cacheNativeAd.offLoad(onLoad);
                    this._cacheNativeAd.offError(onError);
                    this._cacheNativeAd.destroy();
                    this._cacheNativeAd = null;
                }
                let nativeAd = null;
                nativeAd = LTPlatform.instance.base.createNativeAd({
                    adUnitId: this._cacheIds[index]
                });
                this._cacheNativeAd = nativeAd;
                nativeAd.onLoad(onLoad);
                nativeAd.onError(onError);
                nativeAd.load();
            } else {
                if (!this._cacheNativeAd) {
                    this._cacheNativeAd = LTPlatform.instance.base.createNativeAd({
                        adUnitId: this._cacheIds[index],
                    });
                }
                this._cacheNativeAd.offLoad(onLoad);
                this._cacheNativeAd.offError(onError);
                this._cacheNativeAd.onLoad(onLoad);
                this._cacheNativeAd.onError(onError);
                this._cacheNativeAd.load();
            }
        })

    }

}