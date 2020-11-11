
import SDK_YQ from "../../../../SDK/Impl/SDK_YQ";
import LTSDK from "../../../../SDK/LTSDK";
import { CommonEventId } from "../../../Commom/CommonEventId";
import { EPlatformType } from "../../../Platform/EPlatformType";
import LTPlatform from "../../../Platform/LTPlatform";
import UI_EndSlideGames from "../UI/LTGame/UI_EndSlideGames";
import UI_view_item_game140 from "../UI/LTGame/UI_view_item_game140";
import { ECheckState } from "../../../../SDK/common/ECheckState";
/**
 * 结算页滑动导出位 __endSG
 */
export default class View_EndSlideGames {

    static CreateView(tagUI: fgui.GComponent): View_EndSlideGames {
        if (tagUI == null) return null;

        // 额外判定一次是否支持交叉推广,如果不支持,则隐藏交叉推广
        if (!LTPlatform.instance.isSupportJumpOther) {
            tagUI.dispose();
            return null;
        }
        if (!LTSDK.instance.isNavEnable) {
            tagUI.dispose();
            return null;
        }
        if (LTPlatform.instance.platform == EPlatformType.Oppo && LTSDK.instance.checkState == ECheckState.InCheck) {
            console.log("审核");
            tagUI.dispose();
            return null;
        }
        if (LTPlatform.instance.platform == EPlatformType.QQ) {
            // 只有oppo支持
            console.log("QQ暂无矩阵");
            tagUI.dispose();
            return null;
        }

        if (tagUI instanceof UI_EndSlideGames) {
            return new View_EndSlideGames(tagUI);
        }
        let uiInstance = UI_EndSlideGames.createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_EndSlideGames(uiInstance);
    }

    private _ui: UI_EndSlideGames;
    public get ui(): UI_EndSlideGames {
        return this._ui;
    }

    /**
     * 储存的广告
     */
    private _cacheAds: SDK.ADInfoData[];

    private _posId: number = 0;

    private sortArrr: number[][] = [
        [1, 2, 3, 9, 10, 6, 7],
        [4, 5, 11, 1, 2, 3, 8],
        [7, 12, 13, 8, 4, 5, 6]
    ];//oppo 必须只能为13个
    private constructor(ui: UI_EndSlideGames) {
        this._ui = ui;
        this._Init();
    }

    private _Init() {
        if (LTSDK.instance instanceof SDK_YQ) {
            this._posId = 5;
        } else {
            this._posId = 6;
        }
        this._cacheAds = LTSDK.instance.adManager.GetADListByLocationId(this._posId);
        if (!this._cacheAds || !this._cacheAds.length) {
            this.ui.visible = false;
            Laya.stage.on(CommonEventId.SELF_AD_INITED, this, this._OnAdInited);
        } else {
            for (let i = 0; i < 3; i++) {
                this.initLists(i);
            }
            let ads = [];
            this._cacheAds.forEach(adData => {
                let ad: any = {};
                ad.ad_id = adData.ad_id;
                ad.location_id = this._posId;
                ad.num = 1;
                ads.push(ad);
            })
            LTSDK.instance.ReportShowAd(ads);
        }
    }

    private initLists(index: number) {
        this.ui.m_ad[`m_list${index}`].setVirtualAndLoop();
        this.ui.m_ad[`m_list${index}`].scrollPane.bouncebackEffect = false;
        this.ui.m_ad[`m_list${index}`].itemRenderer = Laya.Handler.create(this, (id: number, adUI: UI_view_item_game140) => this._OnAdItemRender(id, adUI, index), null, false);
        this.ui.m_ad[`m_list${index}`].numItems = (LTPlatform.instance.platform == EPlatformType.Oppo) ? 7 : this._cacheAds.length;
        this.ui.m_ad[`m_list${index}`].on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
        Laya.timer.loop(25, this, () => {
            this.ui.m_ad[`m_list${index}`].scrollPane.scrollRight(0.01, true);
        });
    }

    private _OnAdInited(posId: number) {
        if (posId != this._posId) return;
        this.ui.visible = true;
        this._cacheAds = LTSDK.instance.adManager.GetADListByLocationId(this._posId);
        for (let i = 0; i < 3; i++) {
            this.initLists(i);
        }
    }

    private _OnAdItemRender(index: number, adUI: UI_view_item_game140, rowId: number) {
        let ind = (4 * rowId + index) % this._cacheAds.length;
        if (LTPlatform.instance.platform == EPlatformType.Oppo) {
            ind = this.sortArrr[rowId][index % 7] - 1;

        }
        let adData = this._cacheAds[ind];
        adUI.data = ind;
        adUI.m_icon.m_icon.url = adData.ad_img;
        adUI.m_text_name.text = '';
        // let ad: any = {};
        // ad.ad_id = adData.ad_id;
        // ad.location_id = 5;
        // ad.num = 1;
        // LTSDK.instance.RecordShowAd([ad]);
    }

    private _OnClickGameItem(item: UI_view_item_game140) {
        let data = this._cacheAds[item.data as number];
        LTSDK.instance.ReportClickAd(data.ad_id, this._posId, true, '结算界面');
        let uid = data.ad_appid;
        switch (LTPlatform.instance.platform) {
            case EPlatformType.Oppo:
            case EPlatformType.Vivo:
                uid = data.ad_package;
                break;
            default:
                break;
        }
        LTPlatform.instance.NavigateToApp(uid, data.ad_path, null, true, false, data.ad_id);
    }

}