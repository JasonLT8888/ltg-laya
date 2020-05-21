import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_OppoEndExGame from "./UI/LTGame/UI_OppoEndExGame";
import EndRewardOpenData from "./Data/EndRewardOpenData";
import LTUI from "../LTUI";
import GameData from "../../../script/common/GameData";
import LTPlatform from "../../Platform/LTPlatform";
import OppoPlatform from "../../Platform/OppoPlatform";
import AudioManager from "../../../script/manager/AudioManager";





export class UI_OppoEndExGameMediator extends BaseUIMediator<UI_OppoEndExGame> {
    private static _instance: UI_OppoEndExGameMediator;
    public get ui(): UI_OppoEndExGame {
        return this._ui;
    }
    private _openData: EndRewardOpenData;

    public static get instance(): UI_OppoEndExGameMediator {
        if (this._instance == null) {
            this._instance = new UI_OppoEndExGameMediator();
            this._instance._classDefine = UI_OppoEndExGame;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        this._openData = new EndRewardOpenData();
        if (this._openParam == null) {
            console.error("请传入EndRewardOpenData用于初始化结算界面");
        } else {
            for (let key in this._openParam) {
                this._openData[key] = this._openParam[key];
            }
        }
        this.ui.m_step.selectedIndex = 0;
        if (this._openData.iconPath != null) {
            this.ui.m_icon_reward.url = this._openData.iconPath;
        }
        this.ui.m_text_add.text = "+" + this._openData.rewardCount;

        this.ui.m_btn_next.onClick(this, this._OnClickNormalGet);
        this.ui.m_btn_reward.onClick(this, this._OnClickReward);
        this.ui.m_btn_adpay.onClick(this, this.onAdClick);
        this.ui.m_btn_continue.onClick(this, this.onContinue);
        if (this.ui.m___nativeinpage) {
            this.ui.m___nativeinpage.visible = false;
        }

        let plat = LTPlatform.instance as OppoPlatform;
        plat._ShowNormalInterstitalAd(); 
    }
    onAdClick() {
        this._ui['m___nativeinpage']['ClickAd']();
    }
    onContinue() {
        if (this._openData.onClose) {
            this._openData.onClose.runWith([0, this.ui.m_icon_reward]);
        }
        this.Hide();
    }

    private _OnClickNormalGet() {
        this.onNext();
        this.addMoney(1);
    }
    onNext() {
        this.ui.m_step.selectedIndex = 1;
        if (this.ui.m___nativeinpage) {
            this.ui.m___nativeinpage.visible = true;
        }
    }
    addMoney(multiple: number = 1) {
        LTUI.FlyCoinsTo(this.ui.m_icon_reward, this.ui.m_win, this._openData.iconPath, this._openData.rewardCount * multiple);
        GameData.instance.coinCount += (this._openData.rewardCount * multiple);
        GameData.SaveToDisk();
    }
    private async _OnClickReward() {
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            this.onNext();
            this.addMoney(5);
        } else {
            LTUI.Toast("跳过广告无法获得奖励");
        }
    }
    protected _OnHide() {
        LTPlatform.instance.ShowInterstitalAd();
    }
}
