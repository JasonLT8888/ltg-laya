import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_CommonOffline from "./UI/LTGame/UI_CommonOffline";
import OfflineOpenData from "./Data/OfflineOpenData";
import { LTUtils } from "../../LTUtils/LTUtils";

export default class UI_CommonOfflineMediator extends BaseUIMediator<UI_CommonOffline> {

    private static _instance: UI_CommonOfflineMediator;
    public static get instance(): UI_CommonOfflineMediator {
        if (this._instance == null) {
            this._instance = new UI_CommonOfflineMediator();
            this._instance._classDefine = UI_CommonOffline;
        }
        return this._instance;
    }

    private _openData: OfflineOpenData;

    _OnShow() {
        super._OnShow();
        // your code
        this._openData = new OfflineOpenData();
        if (this._openParam == null) {
            console.error("请传入OfflineOpenData用于初始化离线奖励界面");
        } else {
            for (let key in this._openParam) {
                this._openData[key] = this._openParam[key];
            }
        }

        this.ui.m_text_offline_time.text = "离线时间" + this._GetOfflineTimStr(this._openData.offlineMinutes);
        this.ui.m_text_max_offline_time.text = "离线最多可获得2小时收益";
        this.ui.m_text_value.text = "+" + LTUtils.GetCoinStr(this._openData.rewardCount);
        this.ui.m_btn_double_get.text = "+" + LTUtils.GetCoinStr(this._openData.rewardCount);

        this.ui.m_btn_nothanks.onClick(this, this._OnClickNoThanks);
        this.ui.m_btn_double_get.onClick(this, this._OnClickDoubleGet);
    }

    private _GetOfflineTimStr(minutes: number): string {
        let minute = Math.floor(minutes % 60);
        let hours = Math.floor(minutes / 60);
        if (minute < 10) {
            return "0" + hours + "小时0" + minute + "分钟";
        } else {
            return "0" + hours + "小时" + minute + "分钟";
        }
    }

    private _OnClickDoubleGet() {

        if (this._openData.onClose) {
            this._openData.onClose.runWith([1, this.ui.m_icon]);
        }

        this.Hide();

    }

    private _OnClickNoThanks() {

        if (this._openData.onClose) {
            this._openData.onClose.runWith([0, this.ui.m_icon]);
        }

        this.Hide();
    }

}