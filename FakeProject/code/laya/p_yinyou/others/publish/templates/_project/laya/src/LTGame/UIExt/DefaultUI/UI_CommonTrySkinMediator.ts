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

    private _isChecked: boolean = true;

    private get _needWatchAd(): boolean {
        switch (LTSDK.instance.checkState) {
            case ECheckState.NoGame:
                if (CommonSaveData.instance.trySignMissMode == 0) {
                    return this._isChecked;
                } else {
                    return !this._isChecked;
                }
            default:
                return this._isChecked;
        }
    }

    _OnShow() {
        super._OnShow();
        // your code
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

        switch (LTSDK.instance.checkState) {
            case ECheckState.InCheck:
                // 肖张飞策划案修改
                // this.ui.m_btn_toggle_check.visible = false;
                this._isChecked = false;
                break;
            case ECheckState.Normal:
                this._isChecked = true;
                break;
            case ECheckState.NoGame:
                if (CommonSaveData.instance.trySignMissMode == 0) {
                    this._isChecked = true;
                } else {
                    this._isChecked = false;
                }
                break;
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

        this.ui.m_btn_toggle_check.onClick(this, this._OnClickToggle);



        this._UpdateToggle();

    }

    private _OnClickToggle() {
        this._isChecked = !this._isChecked;
        this._UpdateToggle();
    }

    private _UpdateToggle() {
        switch (LTSDK.instance.checkState) {
            case ECheckState.NoGame:
                this.ui.m_btn_toggle_check.text = this._needWatchAd ? "看视频随机试用皮肤" : "不要视频皮肤";
                this.ui.m_btn_thanks.text = this._needWatchAd ? "暂时试用" : "暂不试用";
                break;
            case ECheckState.InCheck:
            case ECheckState.Normal:
                this.ui.m_btn_toggle_check.text = "随机体验皮肤";
                this.ui.m_btn_thanks.text = this._needWatchAd ? "暂时试用" : "暂不试用";
                break;
        }
        this.ui.m_btn_toggle_check.m_selected.selectedIndex = this._isChecked ? 1 : 0;
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
        if (this._needWatchAd) {
            let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
            if (result) {
                if (this._openData.onClose) {
                    this._openData.onClose.runWith(MathEx.RandomInt(0, 4));
                }
                this.Hide();
            } else {
                LTUI.Toast("跳过视频无法获得奖励");
            }

        } else {
            if (this._openData.onClose) {
                this._openData.onClose.runWith(-1);
            }
            this.Hide();
        }
    }

}