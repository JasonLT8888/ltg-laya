import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_CommonEndLose from "./UI/LTGame/UI_CommonEndLose";
import { EndLoseOpenData } from "./Data/EndLoseOpenData";
import View_OtherGames from "./Cmp/View_OtherGames";
import LTPlatform from "../../Platform/LTPlatform";
import LTUI from "../LTUI";

export default class UI_CommonEndLoseMediator extends BaseUIMediator<UI_CommonEndLose> {

    private static _instance: UI_CommonEndLoseMediator;
    public static get instance(): UI_CommonEndLoseMediator {
        if (this._instance == null) {
            this._instance = new UI_CommonEndLoseMediator();
            this._instance._classDefine = UI_CommonEndLose;
        }
        return this._instance;
    }

    private _openData: EndLoseOpenData;

    _OnShow() {
        super._OnShow();
        // your code
        this._openData = new EndLoseOpenData();
        if (this._openParam == null) {
            console.error("请传入EndLoseOpenData用于初始化通关失败界面");
        } else {
            for (let key in this._openParam) {
                this._openData[key] = this._openParam[key];
            }
        }

        if (this._openData.showText != null) {
            this.ui.m_text_str.text = this._openData.showText;
        }

        this.ui.m_c1.selectedIndex = this._openData.enableShowGames ? 0 : 1;
        if (this._openData.enableShowGames) {
            View_OtherGames.CreateView(this.ui.m_view_othergames);
        }

        this.ui.m_btn_no.onClick(this, this._OnClickRestart);
        this.ui.m_btn_watchad.onClick(this, this._OnClickWatchAd);
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

    private _OnClickRestart() {

        if (this._openData.onClose) {
            this._openData.onClose.runWith([0]);
        }

        this.Hide();
    }

}