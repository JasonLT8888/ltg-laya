import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTG_UI_Zhuawawa from "../UI/LTCom/LTG_UI_Zhuawawa";
import MonoHelper, { EActionType } from "../../LTGame/LTUtils/MonoHelper";
import MathEx from "../../LTGame/LTUtils/MathEx";
import { LTG_Com_ZhuaWawaData } from "../Data/LTG_Com_ZhuaWawaData";

export default class LTG_UI_ZhuawawaMediator extends BaseUIMediator<LTG_UI_Zhuawawa> {

    private static _instance: LTG_UI_ZhuawawaMediator;
    public static get instance(): LTG_UI_ZhuawawaMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_ZhuawawaMediator();
            this._instance._classDefine = LTG_UI_Zhuawawa;
        }
        return this._instance;
    }

    private _progress: number;

    private _upperY: number = 0;
    private _lowerY: number = 344;

    private _remainTime: number = 10;

    private _isStoped: boolean;

    private _cacheData: LTG_Com_ZhuaWawaData;

    _OnShow() {
        super._OnShow();
        // your code

        this._cacheData = this._openParam as LTG_Com_ZhuaWawaData;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_ZhuaWawaData进行界面打开操作");
        }

        this._isStoped = false;
        this._progress = 0;
        this._remainTime = 10;
        this.ui.m_view.m_btn_push.onClick(this, this._OnClickPush);
        this._UpdateView();

        MonoHelper.instance.AddAction(EActionType.Update, this, this._LogicUpdate);
    }

    _OnHide() {
        MonoHelper.instance.RemoveAction(EActionType.Update, this, this._LogicUpdate);
    }

    private _OnClickPush() {
        if (this._isStoped) return;
        this.ui.m_view.m_img_hand.visible = false;
        this._progress += 6;
    }

    private _LogicUpdate() {
        let dt = Laya.timer.delta / 1000;
        if (this._isStoped) {
            this._progress -= 50 * dt;
            if (this._progress < 0) {
                this._progress = 0;
                this._cacheData.onPickup?.run();
                this.Hide();
                return;
            }
            this._UpdateView();
        } else {
            if (this._progress >= 100) {
                this._progress = 100;
                this._UpdateView();
                this.ui.m_view.m_view_pick.m_state_pick.selectedIndex = 1;
                this._isStoped = true;
            } else {
                this._remainTime -= dt;
                this._progress -= dt * 4;
                this._UpdateView();
                if (this._remainTime < 0) {
                    this._cacheData.onTimeout?.run();
                    this.Hide();
                }
            }
        }
    }

    private _UpdateView() {
        this.ui.m_view.m_view_pick.y = MathEx.Lerp(this._upperY, this._lowerY, this._progress / 100);

        if (!this._isStoped) {
            this.ui.m_view.m_progress_push.value = this._progress;
            let seconds = Math.floor(this._remainTime);
            let secondsStr = seconds.toFixed(0);
            if (seconds < 10) {
                secondsStr = "0" + secondsStr;
            }
            let tick = Math.floor((this._remainTime - seconds) * 1000);
            this.ui.m_view.m_text_time.text = "00:" + secondsStr + "." + tick;
        }

    }

}