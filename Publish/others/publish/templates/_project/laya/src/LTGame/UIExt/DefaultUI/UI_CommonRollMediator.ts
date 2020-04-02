import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_CommonRoll from "./UI/LTGame/UI_CommonRoll";
import RollOpenData from "./Data/RollOpenData";
import UI_view_item_roll from "./UI/LTGame/UI_view_item_roll";
import MathEx from "../../LTUtils/MathEx";
import LTPlatform from "../../Platform/LTPlatform";
import LTUI from "../LTUI";

export default class UI_CommonRollMediator extends BaseUIMediator<UI_CommonRoll> {

    private static _instance: UI_CommonRollMediator;
    public static get instance(): UI_CommonRollMediator {
        if (this._instance == null) {
            this._instance = new UI_CommonRollMediator();
            this._instance._classDefine = UI_CommonRoll;
        }
        return this._instance;
    }

    private _isRolling: boolean = false;
    private _openData: RollOpenData;
    private _randomIndex: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
    private _unitDegree: number = 360 / 8;
    private _rotateTime: number = 4 * 1000;
    private _rotateCount: number = 5;
    private _cacheDegree: number;
    private _cacheIndex: number;

    _OnShow() {
        super._OnShow();
        // your code
        this._openData = new RollOpenData();
        if (this._openParam == null) {
            console.error("请传入RollOpenData用于初始化大转盘界面");
        } else {
            for (let key in this._openParam) {
                this._openData[key] = this._openParam[key];
            }
        }

        this.ui.m_btn_close.onClick(this, this._OnClickClose);
        this.ui.m_btn_roll.onClick(this, this._OnClickRoll);

        for (let i = 0; i < 8; ++i) {
            let getUI = this.ui.m_view_roll.getChildAt(i + 1) as UI_view_item_roll;
            if (this._openData.iconList[i]) {
                getUI.m_icon.url = this._openData.iconList[i];
            }
            if (this._openData.titleList[i]) {
                getUI.m_text_title.text = this._openData.titleList[i];
            } else {
                getUI.m_text_title.text = "测试数据" + i;
            }
        }

        this._isRolling = false;

    }

    private async _OnClickRoll() {
        if (this._isRolling) return;
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            this._DoRoll();
        } else {
            LTUI.Toast("跳过视频无法获得奖励");
        }
    }

    private _DoRoll() {
        this._isRolling = true;
        this._cacheIndex = MathEx.RandomFromWithWeight(this._randomIndex, this._openData.rollWeight);
        let centerDegree = this._cacheIndex * this._unitDegree;
        this._cacheDegree = centerDegree + MathEx.Random(-this._unitDegree, this._unitDegree) * 0.2;
        let targetDegree = 360 * this._rotateCount + this._cacheDegree;
        Laya.Tween.to(this.ui.m_view_roll, { rotation: targetDegree }, this._rotateTime, Laya.Ease.quadOut,
            Laya.Handler.create(this, this._OnRollEnd));
    }

    private _OnRollEnd() {
        this.ui.m_view_roll.rotation = this._cacheDegree;
        if (this._openData.onRolled) {
            this._openData.onRolled.runWith([this._cacheIndex, this.ui.m_pointer]);
        }
        this._isRolling = false;
    }

    private _OnClickClose() {
        if (this._isRolling) return;
        this.Hide();
    }

}