import LTPlatform from "../../../Platform/LTPlatform";
import { EPlatformType } from "../../../Platform/EPlatformType";
import UI_NativeIcon from "../UI/LTGame/UI_NativeIcon";
import { FakeBannerData } from "../UI_ImageBannerMediator";
import StringEx from "../../../LTUtils/StringEx";

export class View_NativeIcon {

    static CreateView(tagUI: fgui.GComponent): View_NativeIcon {
        if (tagUI == null) return null;
        if (LTPlatform.instance.platform != EPlatformType.Oppo) {
            // 只有oppo支持
            console.log("native_icon已隐藏,只有oppo平台支持");

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

    private static _cacheNativeAd: any;

    private _cacheAdData: FakeIconData;
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
        console.log("初始化广告id");

        this._Init();
        this.ui.onClick(this, this._OnClickAd);
    }

    public ClickAd() {
        console.log("点击Icon", this._cacheAdData);
        // 相应点击事件
        this._cacheAdData.owner.reportAdClick({
            adId: this._cacheAdData.adId
        });
        // 刷新
        this._Init();
    }

    private async _Init() {
        if (View_NativeIcon._cacheNativeAd != null) {
            View_NativeIcon._cacheNativeAd.destroy();
            View_NativeIcon._cacheNativeAd = null;
        }
        for (let i = 0; i < this._cacheIds.length; ++i) {
            let ret = await this._LoadIconData(i);
            if (ret) {

                this.ui.m_icon_img.url = this._cacheAdData.iconPath;
                this.ui.m_icon_tip.url = this._cacheAdData.noticePath;

                this._cacheAdData.owner.reportAdShow({
                    adId: this._cacheAdData.adId
                });
                console.log("原生icon广告已展示", this._cacheAdData);
                return;
            }
        }
    }

    private _OnClickAd() {
        this.ClickAd();
    }

    private async _LoadIconData(index: number): Promise<boolean> {
        let nativeAd = LTPlatform.instance.base.createNativeAd({
            adUnitId: this._cacheIds[index]
        });
        View_NativeIcon._cacheNativeAd = nativeAd;
        let loadRet = await nativeAd.load();
        if (loadRet["code"] == 0) {
            // 加载成功
            let adList = loadRet['adList'] as any[];
            if (adList == null || adList.length == 0) {
                console.error("native 插页 加载失败", loadRet);
                return false;
            }
            let adData = adList[0] as {
                adId: string,
                logoUrl: string,
                icon: string,
            };
            console.log('广告数据加载完成', loadRet);

            if (adData == null) {
                console.error("native 插页 加载失败", loadRet);
                return false;
            }
            let fakeData = new FakeIconData();
            fakeData.noticePath = adData.logoUrl;
            fakeData.adId = adData.adId;
            fakeData.iconPath = adData.icon;
            fakeData.owner = nativeAd;
            this._cacheAdData = fakeData;
            return true;
        } else {
            console.error("native 插页 加载失败", loadRet);
            return false;
        }
    }

}

class FakeIconData {
    iconPath: string;
    noticePath: string;
    owner: any;
    adId: string;
}