import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_CommonEndShare from "./UI/LTGame/UI_CommonEndShare";
import EndShareOpenData from "./Data/EndShareOpenData";
import LTPlatform from "../../Platform/LTPlatform";
import LTUI from "../LTUI";

export default class UI_CommonEndShareMediator extends BaseUIMediator<UI_CommonEndShare> {

    private static _instance: UI_CommonEndShareMediator;
    public static get instance(): UI_CommonEndShareMediator {
        if (this._instance == null) {
            this._instance = new UI_CommonEndShareMediator();
            this._instance._classDefine = UI_CommonEndShare;
        }
        return this._instance;
    }

    private _openData: EndShareOpenData;

    _OnShow() {
        super._OnShow();
        // your code
        this._openData = new EndShareOpenData();
        if (this._openParam == null) {
            console.error("请传入EndShareOpenData用于初始化结算分享界面");
        } else {
            for (let key in this._openParam) {
                this._openData[key] = this._openParam[key];
            }
        }
        if (this._openData.noticeStr) {
            this.ui.m_view.m_text_info.text = this._openData.noticeStr;
        }
        if (this._openData.rewardIcon) {
            this.ui.m_view.m_icon_reward.url = this._openData.rewardIcon;
        }
        if (this._openData.rewardText) {
            this.ui.m_view.m_text_reward.text = this._openData.rewardText;
        }

        this.ui.m_view.m_btn_nothanks.onClick(this, this._OnClickClose);
        this.ui.m_view.m_btn_share.onClick(this, this._OnClickShare);
        this.ui.m_view.m_btn_share.m_btn_type.selectedIndex = 1;
    }

    private _OnClickShare() {
        LTPlatform.instance.recordManager.ShareVideo(Laya.Handler.create(null, () => {
            if (this._openData.onClose) {
                this._openData.onClose.runWith([1, this.ui.m_view.m_icon_reward]);
            }
            this.Hide();
        }), Laya.Handler.create(null, () => {
            LTUI.Toast("取消分享无法获得奖励");
        }), Laya.Handler.create(null, () => {
            LTUI.Toast("分享失败:无视频可分享");
        }));
    }

    private _OnClickClose() {
        if (this._openData.onClose) {
            this._openData.onClose.runWith([0, this.ui.m_view.m_icon_reward]);
        }
        this.Hide();
    }
}