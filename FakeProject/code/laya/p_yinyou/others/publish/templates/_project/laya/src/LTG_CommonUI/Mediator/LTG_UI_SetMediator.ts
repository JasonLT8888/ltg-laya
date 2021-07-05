import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTG_UI_Set from "../UI/LTCom/LTG_UI_Set";
import { LTG_Com_SetData } from "../Data/LTG_Com_SetData";
import CommonSaveData from "../../LTGame/Commom/CommonSaveData";
import { LTG_Com_RewardCodeData } from "../Data/LTG_Com_RewardCodeData";
import LTUI from "../../LTGame/UIExt/LTUI";
import AudioManager from "../../script/manager/AudioManager";

export default class LTG_UI_SetMediator extends BaseUIMediator<LTG_UI_Set> {

    private static _instance: LTG_UI_SetMediator;
    public static get instance(): LTG_UI_SetMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_SetMediator();
            this._instance._classDefine = LTG_UI_Set;
        }
        return this._instance;
    }

    private _cacheData: LTG_Com_SetData;

    _OnShow() {
        super._OnShow();
        // your code
        this._cacheData = this._openParam as LTG_Com_SetData;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_SetData进行界面打开操作");
        }
        this.ui.m_view.m_btn_close.onClick(this, this._OnClickClose);
        this.ui.m_view.m_toggle_music.onClick(this, this._OnClickMusic);
        this.ui.m_view.m_toggle_shake.onClick(this, this._OnClickShake);
        this.ui.m_view.m_btn_code.onClick(this, this._OnClickCode);

        this.ui.m_view.m_toggle_music.m_toggle_state.selectedIndex = CommonSaveData.instance.isMusicOn ? 1 : 0;
        this.ui.m_view.m_toggle_shake.m_toggle_state.selectedIndex = CommonSaveData.instance.isShakeOn ? 1 : 0;
    }

    private _OnClickCode() {
        LTUI.TrigerBtnClick();
        this.Hide();
        let data = new LTG_Com_RewardCodeData();
        data.onCodeEntered = this._cacheData.onCodeEntered;
        data.Send();
    }

    private _OnClickMusic() {
        CommonSaveData.instance.isMusicOn = !CommonSaveData.instance.isMusicOn;
        CommonSaveData.SaveToDisk();
        LTUI.TrigerBtnClick();
        this.ui.m_view.m_toggle_music.m_toggle_state.selectedIndex = CommonSaveData.instance.isMusicOn ? 1 : 0;
        this._cacheData.onMusicToggled?.run();
        if (!CommonSaveData.instance.isMusicOn) {
            AudioManager.instance.StopAll();
        }
    }

    private _OnClickShake() {
        CommonSaveData.instance.isShakeOn = !CommonSaveData.instance.isShakeOn;
        CommonSaveData.SaveToDisk();
        LTUI.TrigerBtnClick();
        this.ui.m_view.m_toggle_shake.m_toggle_state.selectedIndex = CommonSaveData.instance.isShakeOn ? 1 : 0;
        this._cacheData.onShakeToggled?.run();
    }

    private _OnClickClose() {
        LTUI.TrigerBtnClick();
        this.Hide();
    }

}