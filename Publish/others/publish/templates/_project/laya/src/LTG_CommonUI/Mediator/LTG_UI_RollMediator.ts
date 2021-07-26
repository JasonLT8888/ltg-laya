import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTG_UI_Roll from "../UI/LTCom/LTG_UI_Roll";
import LTG_UI_item_view_roll from "../UI/LTCom/LTG_UI_item_view_roll";
import CommonSaveData from "../../LTGame/Commom/CommonSaveData";
import { GameConst } from "../../script/config/GameConst";
import LTUI from "../../LTGame/UIExt/LTUI";
import MathEx from "../../LTGame/LTUtils/MathEx";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import { RollConfig } from "../../script/config/RollConfig";
import { LTG_Com_RollData } from "../Data/LTG_Com_RollData";
import { EPlatformType } from "../../LTGame/Platform/EPlatformType";

export default class LTG_UI_RollMediator extends BaseUIMediator<LTG_UI_Roll> {

    private static _instance: LTG_UI_RollMediator;
    public static get instance(): LTG_UI_RollMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_RollMediator();
            this._instance._classDefine = LTG_UI_Roll;
        }
        return this._instance;
    }

    private _rollIndex: number[];
    private _rollWeight: number[];

    private _cacheFinalIndex: number;
    private _isSpecialRoll: boolean;

    private _cacheData: LTG_Com_RollData;

    _OnShow() {
        super._OnShow();
        // your code

        if (RollConfig.data == null) {
            throw new Error("请先加载配置表RollConfig");
        }

        this._cacheData = this._openParam as LTG_Com_RollData;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_RollData进行界面打开操作");
        }

        this.ui.m_plat.selectedIndex = LTPlatform.instance.platform == EPlatformType.TT ? 1 : 0;
        this.ui.m_btn_close.onClick(this, this._OnClickClose);
        this.ui.m_btn_no.onClick(this, this._OnClickClose);

        for (let i = 1; i <= 6; ++i) {
            let itemName = 'm_item_0' + i.toFixed(0);
            let itemUI = this.ui.m_view.m_view_roll[itemName] as LTG_UI_item_view_roll;
            let data = RollConfig.data[i];
            itemUI.m_text_name.text = data.show_str;
            itemUI.m_text_name.color = data.text_color;
            itemUI.m_loader_icon.url = data.icon_path;
        }

        // this.ui.m_view.m_.onClick(this, this._OnClickFreeRoll);
        this.ui.m_btn_roll.onClick(this, this._OnClickWatchAd);
        this._UpdateUI();

        this._rollIndex = [];
        this._rollWeight = [];
        for (let i = 0; i < 6; ++i) {
            this._rollIndex.push(i + 1);
            this._rollWeight.push(RollConfig.data[i + 1].roll_weight);
        }

        LTPlatform.instance.ShowBannerAd();
    }

    private _UpdateUI() {
        if (false && CommonSaveData.instance.freeRollCount > 0) {
            this.ui.m_btn_roll.m_adicon.visible = false;
        } else {
            this.ui.m_btn_roll.m_adicon.visible = true;
            this.ui.m_plat.selectedIndex = LTPlatform.instance.platform == EPlatformType.TT ? 1 : 0;
        }
        this.ui.m_btn_roll.visible = true;
        this.ui.m_btn_close.visible = true;
        let currentRollCount = CommonSaveData.instance.totalRollCount % GameConst.data.special_roll_count;
        if (CommonSaveData.instance.totalRollCount > 0 && currentRollCount == 0) {
            currentRollCount = GameConst.data.special_roll_count;
        }
        let remainCount = GameConst.data.special_roll_count - currentRollCount;
        if (remainCount > 0) {
            this._isSpecialRoll = false;
            this.ui.m_view.m_text_notice.text = remainCount + "次之后必得特殊奖励";
        } else {
            this.ui.m_view.m_text_notice.text = " 本次必得特殊奖励";
            this._isSpecialRoll = true;
        }
        let progress100 = (currentRollCount / GameConst.data.special_roll_count) * 100;
        this.ui.m_view.m_progress_supper.value = progress100;
    }

    private _DoRoll() {
        CommonSaveData.instance.totalRollCount++;
        CommonSaveData.SaveToDisk();
        LTUI.LockScreen();
        this.ui.m_btn_roll.visible = false;
        this.ui.m_btn_close.visible = false;
        if (CommonSaveData.instance.totalRollCount == 1) {
            //第一次转盘必然转到第一个奖励 
            this._cacheFinalIndex = 1;

        } else {
            this._cacheFinalIndex = MathEx.RandomFromWithWeight(this._rollIndex, this._rollWeight);
        }
        let targetRotate = -(this._cacheFinalIndex - 1) * 60 - 360 * 3;
        Laya.Tween.to(this.ui.m_view.m_view_roll, { rotation: targetRotate }, 2000, Laya.Ease.quadOut,
            Laya.Handler.create(this, this._OnRollEnd));
    }

    private _OnRollEnd() {
        this.ui.m_view.m_view_roll.rotation = this.ui.m_view.m_view_roll.rotation % 360;
        let rewardConfig = RollConfig.data[this._cacheFinalIndex];
        this._cacheData.onRolled?.runWith([rewardConfig]);

        if (this._isSpecialRoll) {
            let specialConfig = RollConfig.data[7];
            this._cacheData.onSpecial?.runWith([specialConfig]);
        }

        this._UpdateUI();
        LTUI.UnlockScreen();
    }

    private async _OnClickWatchAd() {
        if (this.ui.m_btn_roll.m_adicon.visible) {
            let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
            if (result) {
                this._DoRoll();
            }
        } else {
            this._OnClickFreeRoll();
        }

    }

    private _OnClickFreeRoll() {
        LTUI.TrigerBtnClick();
        CommonSaveData.instance.freeRollCount--;
        this._DoRoll();
    }
    private _OnClickClose() {
        LTUI.TrigerBtnClick();
        this.Hide();
    }
    _OnHide() {
        LTPlatform.instance.HideBannerAd();
    }

}