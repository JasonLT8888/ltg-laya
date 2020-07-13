import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_CommonTrySkin from "./UI/LTGame/UI_CommonTrySkin";
import TrySkinOpenData from "./Data/TrySkinOpenData";
import UI_view_item_try_skin from "./UI/LTGame/UI_view_item_try_skin";
import LTPlatform from "../../Platform/LTPlatform";
import LTUI from "../LTUI";
import LTSDK from "../../../SDK/LTSDK";
import { ECheckState } from "../../../SDK/common/ECheckState";
import MathEx from "../../LTUtils/MathEx";
import CommonSaveData from "../../Commom/CommonSaveData";

export default class UI_CommonTrySkinMediator extends BaseUIMediator<UI_CommonTrySkin> {

    private static _instance: UI_CommonTrySkinMediator;
    public static get instance(): UI_CommonTrySkinMediator {
        if (this._instance == null) {
            this._instance = new UI_CommonTrySkinMediator();
            this._instance._classDefine = UI_CommonTrySkin;
        }
        return this._instance;
    }

    private _openData: TrySkinOpenData;

    checkFlag: boolean = true;


    _OnShow() {
        if (LTSDK.instance.checkState != ECheckState.Normal) {
            LTSDK.instance.isDelayClose = false;
        }
        super._OnShow();
        // your code
        this.checkFlag = CommonSaveData.instance.checkFlag;
        this._openData = new TrySkinOpenData();
        if (this._openParam == null) {
            console.error("请传入TrySkinOpenData用于初始化皮肤试用界面");
        } else {
            for (let key in this._openParam) {
                this._openData[key] = this._openParam[key];
            }
        }
        CommonSaveData.instance.trySignMissMode = 1 - CommonSaveData.instance.trySignMissMode;
        CommonSaveData.SaveToDisk();

        if (LTSDK.instance.checkState == ECheckState.NoGame) {
            this.changeCheck();
            this.ui.m_btn_thanks.text = "暂时试用";
        } else {
            this.ui.m_btn_thanks.text = "暂不试用";
        }
        if (this._openData.iconPaths == null || this._openData.iconPaths.length != 4) {
            console.error("请传入试用皮肤图标");
        }
        for (let i = 0; i < this.ui.m_list_item.numChildren; ++i) {
            let getUI = this.ui.m_list_item.getChildAt(i) as UI_view_item_try_skin;
            if (this._openData.iconPaths && this._openData.iconPaths[i]) {
                getUI.m_icon.url = this._openData.iconPaths[i];
            }
            getUI.onClick(this, this._OnClickTrySkin, [i]);
        }

        this.ui.m_btn_thanks.onClick(this, this._OnClickNoThanks);
        if (LTSDK.instance.checkState == ECheckState.InCheck) {
            this.ui.m_btn_toggle_check.visible = false;
        }
        this.ui.m_btn_toggle_check.onClick(this, this._OnClickToggle);

        LTPlatform.instance.ShowBannerAd();
    }

    private _OnClickToggle() {
        this.ui.m_btn_toggle_check.m_selected.selectedIndex = (this.ui.m_btn_toggle_check.m_selected.selectedIndex + 1) % 2;
        if (LTSDK.instance.checkState == ECheckState.NoGame) {
            this.ui.m_btn_thanks.text = this.checkFlag ? (this.ui.m_btn_toggle_check.m_selected.selectedIndex == 1 ? "暂时试用" : "暂不试用") : (this.ui.m_btn_toggle_check.m_selected.selectedIndex == 0 ? "暂时试用" : "暂不试用");
        } else {
            this.ui.m_btn_thanks.text = this.ui.m_btn_toggle_check.m_selected.selectedIndex == 1 ? "暂时试用" : "暂不试用";
        }
    }


    changeCheck() {
        if (LTSDK.instance.checkState == ECheckState.NoGame) {
            this.ui.m_btn_toggle_check.title = CommonSaveData.instance.checkFlag ? '观看随机试用皮肤视频' : '不看随机试用皮肤视频';
            this.ui.m_btn_toggle_check.m_selected.selectedIndex = CommonSaveData.instance.checkFlag ? 1 : 0;
        }
    }

    private async _OnClickTrySkin(index: number) {
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {

            if (this._openData.onClose) {
                this._openData.onClose.runWith(index);
            }

            this.Hide();
        } else {
            LTUI.Toast("跳过视频无法获得奖励");
        }
    }

    private async _OnClickNoThanks() {
        if (LTSDK.instance.checkState != ECheckState.NoGame) {
            if (this.ui.m_btn_toggle_check.m_selected.selectedIndex == 1) {
                await this.randomRewardVideo();
            } else {
                this.noPayClose();
            }
        } else {
            if (this.ui.m_btn_toggle_check.m_selected.selectedIndex == 1) {
                if (this.checkFlag) {
                    await this.randomRewardVideo();
                } else {
                    this.noPayClose();
                }
            } else {
                if (this.checkFlag) {
                    this.noPayClose();
                } else {
                    await this.randomRewardVideo();
                }
            }
        }
    }
    private noPayClose() {
        if (this._openData.onClose) {
            this._openData.onClose.runWith(-1);
        }
        this.checkFlag = !this.checkFlag;
        this.Hide();
    }

    private async randomRewardVideo() {
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            if (this._openData.onClose) {
                this._openData.onClose.runWith(MathEx.RandomInt(0, 4));
            }
            this.Hide();
        }
        else {
            LTUI.Toast("跳过视频无法获得奖励");
        }
    }

    _OnHide() {
        LTPlatform.instance.HideBannerAd();
        if (LTSDK.instance.checkState == ECheckState.NoGame) {
            CommonSaveData.instance.checkFlag = this.checkFlag;
            CommonSaveData.SaveToDisk();
        }
    }
}