import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import StringEx from "../../LTGame/LTUtils/StringEx";
import { LTG_Com_WinData } from "../Data/LTG_Com_WinData";
import LTG_UI_Win from "../UI/LTCom/LTG_UI_Win";
import LTSDK from "../../SDK/LTSDK";
import { ECheckState } from "../../SDK/common/ECheckState";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import { EPlatformType } from "../../LTGame/Platform/EPlatformType";
import GameData from "../../script/common/GameData";
import LTUI from "../../LTGame/UIExt/LTUI";
import MathEx from "../../LTGame/LTUtils/MathEx";
import CommonSaveData from "../../LTGame/Commom/CommonSaveData";

export default class LTG_UI_WinMediator extends BaseUIMediator<LTG_UI_Win> {

    private static _instance: LTG_UI_WinMediator;
    public static get instance(): LTG_UI_WinMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_WinMediator();
            this._instance._classDefine = LTG_UI_Win;
        }
        return this._instance;
    }
    private openData: LTG_Com_WinData;
    private canTouch: boolean = true;
    _OnShow() {
        super._OnShow();
        this.canTouch = true;
        // your code

        let openData = this._openParam as LTG_Com_WinData;
        if (openData == null) {
            throw new Error("请调用LTG_Com_WinData进行界面打开操作");
        }
        this.openData = openData;
        if (openData.progressUnlockEnable) {
            this.ui.m_unlock_progress.m_bg.url = openData.iconUrl;
            (this.ui.m_unlock_progress.getChildAt(1) as fgui.GLoader).url = openData.iconUrl;
            this.ui.m_unlock_progress.value = openData.progressUnlockValue;
            if (openData.progressUnlockValue >= 100 && openData.onProgressItemUnlocked) {
                openData.onProgressItemUnlocked.run();
            }
        } else {
            this.ui.m_unlock_progress.visible = false;
        }
        this.initBtns();
        this.ui.m_btn_multiget.onClick(this, this._onClickWatchAd);
        this.ui.m_btn_normalget.onClick(this, this._onClickNormal);
        if (LTPlatform.instance.platform == EPlatformType.Oppo || LTPlatform.instance.platform == EPlatformType.Vivo) {
            if (GameData.instance.levelId % 2 == 0) {
                LTPlatform.instance.createShortcut();
            }
        }
    }
    async  _onClickWatchAd(evt: Laya.Event) {
        evt.stopPropagation()
        let res = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (res) {
            this.AddReward(this.openData.multiRate);
        }
    }
    _onClickNormal(evt: Laya.Event) {
        evt.stopPropagation()
        if (this.canTouch && MathEx.RandomRatio(LTSDK.instance.configs.payRate)) {
            this.canTouch = false;
            this._onClickWatchAd(evt);
        } else {
            this.fakeTouchAd();
            this.AddReward();
        }
    }/**
     * 
     * @param multi 奖励倍数
     */
    private AddReward(multi: number = 1) {
        let reward = this.openData.winCoin * multi;
        GameData.instance.coinCount += reward;
        GameData.SaveToDisk();
        LTUI.Toast(`获得金币+${reward}`);
        this.Hide();
    }
    _OnHide() {
        this.openData.onNextLevel?.run();
    }

    initBtns() {
        this.ui.m_btn_multiget.m_rate.text = `x${this.openData.multiRate}`;
        this.ui.m_btn_multiget.m_text_value.text = "+" + (this.openData.winCoin * this.openData.multiRate).toFixed(0);
        this.ui.m_btn_multiget.m_img_coin.url = this.openData.coinIconUrl;
        this.ui.m_btn_normalget.m_text_value.text = "+" + (this.openData.winCoin).toFixed(0);
        this.ui.m_btn_normalget.m_img_coin.url = this.openData.coinIconUrl;
        if (LTSDK.instance.checkState == ECheckState.InCheck) {
            this.ui.m_btn_normalget.m_color.selectedIndex = 1;
            this.ui.m_btn_multiget.m_color.selectedIndex = 0;
            if (LTPlatform.instance.platform == EPlatformType.Vivo) {
                this.ui.m_state.selectedIndex = 2;
            }
            return;
        }

        switch (LTPlatform.instance.platform) {
            case EPlatformType.TT:
            case EPlatformType.Web:
                if (GameData.instance.levelId % 2 == 0) {
                    this.ui.m_btn_normalget.m_color.selectedIndex = 0;
                    this.ui.m_btn_multiget.m_color.selectedIndex = 1;
                    this.ui.m_state.selectedIndex = 1;
                } else {
                    this.ui.m_btn_normalget.m_color.selectedIndex = 1;
                    this.ui.m_btn_multiget.m_color.selectedIndex = 0;
                }
                break;
            case EPlatformType.Oppo:
            case EPlatformType.Vivo:
                this.ui.m_state.selectedIndex = 0;
                this.ui.m_btn_multiget.m_color.selectedIndex = 1;
                this.ui.m_btn_normalget.m_color.selectedIndex = 2;
                break;
            default:
                this.ui.m_state.selectedIndex = 0;
                this.ui.m_btn_multiget.m_color.selectedIndex = 0;
                this.ui.m_btn_normalget.m_color.selectedIndex = 2;
                break;
        }

    }
    fakeTouchAd() {
        if (this.ui.m___nativeinpage && this.ui.m___nativeinpage.visible
            && MathEx.RandomRatio(LTSDK.instance.configs.nativePayRate)
            && CommonSaveData.instance.nativeClickCount < LTSDK.instance.configs.nativeClickCount) {
            CommonSaveData.instance.nativeClickCount++;
            this.ui.m___nativeinpage["ClickAd"]();
            CommonSaveData.SaveToDisk();
        }
    }


}