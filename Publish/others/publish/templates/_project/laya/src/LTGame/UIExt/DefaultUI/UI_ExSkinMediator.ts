import { ECheckState } from "../../../SDK/common/ECheckState";
import LTSDK from "../../../SDK/LTSDK";
import CommonSaveData from "../../Commom/CommonSaveData";
import { EPlatformType } from "../../Platform/EPlatformType";
import LTPlatform from "../../Platform/LTPlatform";
import BaseUIMediator from "../FGui/BaseUIMediator";
import LTUI from "../LTUI";
import { CommonRewardData } from "./Data/CommonRewardData";
import UI_ExSkin from "./UI/LTGame/UI_ExSkin";
import UI_tog_progress from "./UI/LTGame/UI_tog_progress";



/**限定皮肤 */
export class UI_ExSkinMediator extends BaseUIMediator<UI_ExSkin> {
    private static _instance: UI_ExSkinMediator;
    public get ui(): UI_ExSkin {
        return this._ui;
    }
    private _openData: CommonRewardData;
    public static get instance(): UI_ExSkinMediator {
        if (this._instance == null) {
            this._instance = new UI_ExSkinMediator();
            this._instance._classDefine = UI_ExSkin;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        this._openData = new CommonRewardData();
        if (this._openParam == null) {
            console.error("请传入CommonRewardData用于初始化限定皮肤界面");
        } else {
            for (let key in this._openParam) {
                this._openData[key] = this._openParam[key];
            }
        }
        if (this._openData && this._openData.datas) {
            this.ui.m_icon.url = this._openData.datas[0].icon;
        }
        if (CommonSaveData.instance.ExSkinAdCount >= 3) {
            CommonSaveData.instance.ExSkinAdCount = 0;
            CommonSaveData.SaveToDisk();
        }
        this.ui.m_list_pro.setVirtual();
        this.ui.m_list_pro.itemRenderer = Laya.Handler.create(this, this.showProgress, null, false);
        this.ui.m_list_pro.numItems = 3;
        this.ui.m_list_pro.refreshVirtualList();
        this.ui.m_btn_close.onClick(this, () => {
            this.Hide();
        });

        this.ui.m_btn_ad.onClick(this, this.getReward);

        this.ui.m_tog.onClick(this, () => {
            this.ui.m_tog.m_selected.selectedIndex = (this.ui.m_tog.m_selected.selectedIndex + 1) % 2;
            this.ui.m_btn_ad.m_ad.selectedIndex = this.ui.m_tog.m_selected.selectedIndex;
        });
        if (LTPlatform.instance.platform == EPlatformType.Oppo) {
            this.ui.m_btn_close.visible = true;
            this.ui.m_tog.visible = false;
            this.ui.m_tog.m_selected.selectedIndex = 1;
        }
        if (LTSDK.instance.checkState == ECheckState.InCheck) {
            this.ui.m_tog.m_selected.selectedIndex = 0;
        } else {
            this.ui.m_tog.m_selected.selectedIndex = 1;
        }
        this.ui.m_btn_ad.m_ad.selectedIndex = this.ui.m_tog.m_selected.selectedIndex;


        LTPlatform.instance.ShowBannerAd();
    }
    async getReward() {
        if (this.ui.m_tog.m_selected.selectedIndex == 1) {
            let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
            if (result) {
                CommonSaveData.instance.ExSkinAdCount += 1;
                CommonSaveData.SaveToDisk();
                this.ui.m_list_pro.refreshVirtualList();
                if (CommonSaveData.instance.ExSkinAdCount >= 3) {
                    this.getSkin();
                }
            }
            else {
                LTUI.Toast("跳过广告无法获得奖励");
            }
        } else {
            this.Hide();
        }

    }
    private getSkin() {
        if (this._openData && this._openData.onGetSkin) {
            this._openData.onGetSkin();
        }
        CommonSaveData.instance.ExSkinAdCount = 0;
        CommonSaveData.SaveToDisk();
        this.Hide();
    }

    showProgress(index: number, item: UI_tog_progress) {
        if (index < CommonSaveData.instance.ExSkinAdCount) {
            item.m_select.selectedIndex = 1;
        } else {
            item.m_select.selectedIndex = 0;
        }
    }
    protected _OnHide() {
        LTPlatform.instance.HideBannerAd();
    }
}
