import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_CommonUI from "../../ui/Main/UI_CommonUI";
import LTUI from "../../LTGame/UIExt/LTUI";
import SignOpenData from "../../LTGame/UIExt/DefaultUI/Data/SignOpenData";
import EndShareOpenData from "../../LTGame/UIExt/DefaultUI/Data/EndShareOpenData";
import EndRewardOpenData from "../../LTGame/UIExt/DefaultUI/Data/EndRewardOpenData";

export default class UI_CommonUIMediator extends BaseUIMediator<UI_CommonUI> {

    private static _instance: UI_CommonUIMediator;
    public static get instance(): UI_CommonUIMediator {
        if (this._instance == null) {
            this._instance = new UI_CommonUIMediator();
            this._instance._classDefine = UI_CommonUI;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_back.onClick(this, this._OnClickBack);
        this.ui.m_btn_sign.onClick(this, this._OnClickSign);
        this.ui.m_btn_endshare.onClick(this, this._OnClickEndShare);
        this.ui.m_btn_endreward.onClick(this, this._OnClickEndReward);
    }

    private _OnClickEndReward() {
        let openData = new EndRewardOpenData();
        openData.onClose = Laya.Handler.create(null, (type: number, fromObj: fgui.GObject) => {
            switch (type) {
                case 0:
                    LTUI.Toast("单倍领取");
                    LTUI.FlyCoinsTo(fromObj, this.ui.m_title);
                    break;
                case 1:
                    LTUI.Toast("双倍领取");
                    LTUI.FlyCoinsTo(fromObj, this.ui.m_title);
                    break;
                default:
                    LTUI.Toast("未处理相应类型" + type);
                    break;
            }
        });
        LTUI.ShowEndReward(openData);
    }

    private _OnClickEndShare() {
        let openData = new EndShareOpenData();
        openData.onClose = Laya.Handler.create(null, (type: number, fromObj: fgui.GObject) => {
            switch (type) {
                case 0:
                    LTUI.Toast("未分享");
                    break;
                case 1:
                    LTUI.Toast("已分享");
                    LTUI.FlyCoinsTo(fromObj, this.ui.m_title);
                    break;
                default:
                    LTUI.Toast("未处理相应类型" + type);
                    break;
            }
        });
        LTUI.ShowEndShare(openData);
    }

    private _OnClickSign() {
        let openData = new SignOpenData();
        // 强制未签到
        openData.isSigned = false;
        openData.onClose = Laya.Handler.create(null, (type: number, fromObj: fgui.GObject) => {
            switch (type) {
                case 0:
                    LTUI.Toast("点击了关闭按钮");
                    break;
                case 1:
                    LTUI.Toast("点击了普通领取按钮");
                    LTUI.FlyCoinsTo(fromObj, this.ui.m_title);
                    break;
                case 2:
                    LTUI.Toast("点击了双倍领取按钮");
                    LTUI.FlyCoinsTo(fromObj, this.ui.m_title);
                    break;
                default:
                    LTUI.Toast("未处理相应类型" + type);
                    break;
            }
        });
        LTUI.ShowSignUI(openData);
    }

    private _OnClickBack() {
        this.Hide();
    }

}