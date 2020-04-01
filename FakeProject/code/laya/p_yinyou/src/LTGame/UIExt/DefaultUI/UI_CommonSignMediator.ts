import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_CommonSign from "./UI/LTGame/UI_CommonSign";
import SignOpenData from "./Data/SignOpenData";
import UI_view_item_sign from "./UI/LTGame/UI_view_item_sign";
import CommonSaveData from "../../Commom/CommonSaveData";
import LTPlatform from "../../Platform/LTPlatform";
import LTUI from "../LTUI";

export default class UI_CommonSignMediator extends BaseUIMediator<UI_CommonSign> {

    private static _instance: UI_CommonSignMediator;
    public static get instance(): UI_CommonSignMediator {
        if (this._instance == null) {
            this._instance = new UI_CommonSignMediator();
            this._instance._classDefine = UI_CommonSign;
        }
        return this._instance;
    }

    private _openData: SignOpenData;
    private _cacheRewardItem: UI_view_item_sign;

    _OnShow() {
        super._OnShow();
        // your code
        this._openData = new SignOpenData();
        if (this._openParam == null) {
            console.error("请传入SignOpenData用于初始化签到界面");
        } else {
            for (let key in this._openParam) {
                this._openData[key] = this._openParam[key];
            }
        }
        this.ui.m_view.m_btn_close.onClick(this, this._OnClickClose);
        this.ui.m_view.m_btn_normal_get.onClick(this, this._OnClickNormalGet);
        this.ui.m_view.m_btn_double_get.onClick(this, this._OnClickDoubleGet);

        this._UpdateUI();
    }

    private _UpdateUI() {
        let isSigned = CommonSaveData.instance.isSigned;
        if (this._openData.isSigned != null) {
            isSigned = this._openData.isSigned;
        }
        this.ui.m_view.m_btn_double_get.enabled = !isSigned;
        this.ui.m_view.m_btn_normal_get.enabled = !isSigned;

        let currentSignDay = CommonSaveData.instance.signDayCount;
        if (this._openData.currentDayCount != null) {
            currentSignDay = this._openData.currentDayCount;
        }
        let displayDay = currentSignDay % 7;

        // 更新6天内
        for (let i = 0; i < this.ui.m_view.m_list_day.numChildren; ++i) {
            let itemUI = this.ui.m_view.m_list_day.getChildAt(i) as UI_view_item_sign;
            itemUI.m_text_day.text = "第" + (i + 1) + "天";
            if (this._openData.iconPaths && this._openData.iconPaths[i]) {
                itemUI.m_icon_reward.url = this._openData.iconPaths[i];
            }
            if (i < displayDay || (displayDay == 0 && isSigned)) {
                itemUI.m_c1.selectedIndex = 1;
            } else {
                itemUI.m_c1.selectedIndex = 0;
            }
            itemUI.m_text_reward.text = this._openData.rewardCount[i].toFixed(0);
        }

        if (this._openData.iconPaths && this._openData.iconPaths[6]) {
            this.ui.m_view.m_view_day7.m_icon_reward.url = this._openData.iconPaths[6];
        }
        // 更新第七天
        this.ui.m_view.m_view_day7.m_text_day.text = "第七天";
        this.ui.m_view.m_view_day7.m_text_reward.text = this._openData.rewardCount[6].toFixed(0);
        if (displayDay == 0 && isSigned) {
            this.ui.m_view.m_view_day7.m_c1.selectedIndex = 1;
        } else {
            this.ui.m_view.m_view_day7.m_c1.selectedIndex = 0;
        }

        if (!isSigned) {
            if (displayDay < 6) {
                this._cacheRewardItem = this.ui.m_view.m_list_day.getChildAt(displayDay) as UI_view_item_sign;
            } else {
                this._cacheRewardItem = this.ui.m_view.m_view_day7;
            }
        }
    }

    private _OnClickNormalGet() {
        CommonSaveData.instance.isSigned = true;
        CommonSaveData.instance.signDayCount++;
        CommonSaveData.SaveToDisk();

        if (this._openData.onClose) {
            this._openData.onClose.runWith([1, this._cacheRewardItem.m_icon_reward, (CommonSaveData.instance.signDayCount - 1) % 7]);
        }

        this.Hide();
    }

    private async _OnClickDoubleGet() {
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            CommonSaveData.instance.isSigned = true;
            CommonSaveData.instance.signDayCount++;
            CommonSaveData.SaveToDisk();

            if (this._openData.onClose) {
                this._openData.onClose.runWith([2, this._cacheRewardItem.m_icon_reward, (CommonSaveData.instance.signDayCount - 1) % 7]);
            }

            this.Hide();
        } else {
            LTUI.Toast("跳过广告无法获得奖励");
        }

    }

    private _OnClickClose() {

        if (this._openData.onClose) {
            this._openData.onClose.runWith(0);
        }

        this.Hide();
    }

}