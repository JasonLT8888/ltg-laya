import UI_CommonUnlockProgress from "./UI/LTGame/UI_CommonUnlockProgress";
import BaseUIMediator from "../FGui/BaseUIMediator";
import { UnlockProgressOpenData } from "./Data/UnlockProgressOpenData";
import Awaiters from "../../Async/Awaiters";
import MathEx from "../../LTUtils/MathEx";
import LTPlatform from "../../Platform/LTPlatform";
import LTUI from "../LTUI";
import LTSDK from "../../../SDK/LTSDK";
import { ECheckState } from "../../../SDK/common/ECheckState";

export default class UI_CommonUnlockProgressMediator extends BaseUIMediator<UI_CommonUnlockProgress> {

    private static _instance: UI_CommonUnlockProgressMediator;
    public static get instance(): UI_CommonUnlockProgressMediator {
        if (this._instance == null) {
            this._instance = new UI_CommonUnlockProgressMediator();
            this._instance._classDefine = UI_CommonUnlockProgress;
        }
        return this._instance;
    }

    private _openData: UnlockProgressOpenData;

    private _imgFront: fgui.GImage;

    _OnShow() {
        super._OnShow();
        // your code
        this._openData = new UnlockProgressOpenData();
        if (this._openParam == null) {
            console.error("请传入UnlockProgressOpenData用于初始化进度解锁界面");
        } else {
            for (let key in this._openParam) {
                this._openData[key] = this._openParam[key];
            }
        }

        let urlPath = this.ui.m_icon_bg.resourceURL;
        this.ui.m_icon_bg.visible = false;
        let index = this.ui.getChildIndex(this.ui.m_icon_bg) + 1;
        if (this._openData.iconPath) {
            urlPath = this._openData.iconPath;
            // this.ui.m_icon_bg.url = this._openData.iconPath;
            // this.ui.m_icon_front.url = this._openData.iconPath;
        }
        let imgbg = fgui.UIPackage.createObjectFromURL(urlPath).asImage;
        this.ui.addChildAt(imgbg, index);
        imgbg.setPivot(this.ui.m_icon_bg.pivotX, this.ui.m_icon_bg.pivotY, true);
        imgbg.setXY(this.ui.m_icon_bg.x, this.ui.m_icon_bg.y);
        imgbg.grayed = true;

        this._imgFront = fgui.UIPackage.createObjectFromURL(urlPath).asImage;
        this.ui.addChildAt(this._imgFront, index + 1);
        this._imgFront.setPivot(this.ui.m_icon_bg.pivotX, this.ui.m_icon_bg.pivotY, true);
        this._imgFront.setXY(this.ui.m_icon_bg.x, this.ui.m_icon_bg.y);
        this._imgFront.fillMethod = fgui.FillMethod.Vertical;
        this._imgFront.fillOrigin = fgui.FillOrigin.Bottom;
        this._imgFront.fillAmount = this._openData.startProgress * 0.01;
        this.ui.m_text_progress.text = this._openData.startProgress + "%";
        this._TweenProgress();

        switch (LTSDK.instance.checkState) {
            case ECheckState.InCheck:
                this.ui.m_check_state.selectedIndex = 1;
                break;
            case ECheckState.NoGame:
                this.ui.m_check_state.selectedIndex = 0;
                break;
            case ECheckState.Normal:
                this.ui.m_check_state.selectedIndex = 0;
                break;
        }

        if (this._openData.endProgress >= 100) {
            this.ui.m_btn_get.visible = true;
        } else {
            this.ui.m_btn_get.visible = false;
        }

        this.ui.m_btn_get.onClick(this, this._OnClickGet);
    }

    private async _TweenProgress() {
        let time: number = 0;
        while (time < this._openData.tweenTime) {
            await Awaiters.Frames(1);
            time += Laya.timer.delta / 1000;
            let progress = MathEx.Lerp(this._openData.startProgress, this._openData.endProgress,
                MathEx.Clamp01(time / this._openData.tweenTime));
            this._imgFront.fillAmount = 0.01 * progress;
            this.ui.m_text_progress.text = progress.toFixed(0) + "%";
        }
        if (this._openData.endProgress >= 0) {
            if (this._openData.onClose) {
                this._openData.onClose.runWith([0]);
            }
            this.Hide();
        }
    }


    private _OnClickGet() {
        if (LTSDK.instance.checkState == ECheckState.NoGame) {
            this._OnClickWatchAd();
        } else {
            if (this._openData.onClose) {
                this._openData.onClose.runWith([2]);
            }
            this.Hide();
        }
    }

    private async _OnClickWatchAd() {
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            if (this._openData.onClose) {
                this._openData.onClose.runWith([1]);
            }
            this.Hide();
        } else {
            LTUI.Toast("跳过广告无法获得奖励");
        }
    }

}