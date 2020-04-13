import ShareManager from "../../LTGame/Platform/ShareManager";
import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_Others from "../../ui/Main/UI_Others";
import { LTUtils } from "../../LTGame/LTUtils/LTUtils";
import LTUI from "../../LTGame/UIExt/LTUI";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import LTSDK from "../../SDK/LTSDK";
import { GameConst } from "../config/GameConst";
import AudioManager from "../manager/AudioManager";

export default class UI_OthersMediator extends BaseUIMediator<UI_Others> {

    private static _instance: UI_OthersMediator;
    public static get instance(): UI_OthersMediator {
        if (this._instance == null) {
            this._instance = new UI_OthersMediator();
            this._instance._classDefine = UI_Others;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_back.onClick(this, this._OnClickBack);

        this.ui.m_btn_othergame.onClick(this, this._OnClickMoreGames);
        this.ui.m_btn_share.onClick(this, this._OnClickShare);
        this.ui.m_btn_shake_long.onClick(this, this._OnClickShakeLong);
        this.ui.m_btn_shake_short.onClick(this, this._OnClickShakeShort);
        this.ui.m_btn_const.onClick(this, this._OnClickConst);
        this.ui.m_btn_jump.onClick(this, this._OnClickDirectJump);
        this.ui.m_btn_shake_playmusic.onClick(this, this._OnClickPlayBgm);
        this.ui.m_btn_shake_stopmusic.onClick(this, this._OnClickStopBgm);
        this.ui.m_btn_shake_playshort.onClick(this, this._OnClickPlayAudio);
    }

    private _OnClickPlayBgm() {
        AudioManager.instance.PlayById(2);
    }

    private _OnClickStopBgm() {
        AudioManager.instance.StopAll();
    }

    private _OnClickPlayAudio() {
        AudioManager.instance.PlayById(1);
    }

    private _OnClickBack() {
        this.Hide();
    }

    private _OnClickConst() {
        LTUI.Toast("读取到配置:" + GameConst.data.game_version);
    }

    private _OnClickShakeLong() {
        LTUtils.Vibrate(true);
    }

    private _OnClickShakeShort() {
        LTUtils.Vibrate(false);
    }

    private _OnClickShare() {
        ShareManager.instance.ShareAppMessage(ShareManager.instance.GetShareInfo());
    }

    private _OnClickMoreGames() {
        let adList = LTSDK.instance.adManager.GetADListByLocationId(0);
        let appidList = [];
        for (let i = 0; i < adList.length && i < 10; ++i) {
            appidList.push(adList[i].ad_appid);
        }
        let appids = [
            "ttce8db83051a7f459",
            "ttfdfc8b4162d6c8ab",
            "ttedfb9b4672d1d8ad",
            "tt4dcb3b76d2e178a7",
        ];
        LTPlatform.instance.OpenGameBox(appids);
    }

    private _OnClickDirectJump() {
        let tt = LTPlatform.instance['_base'];
        tt['navigateToMiniProgram']({ appId: "ttce8db83051a7f459" });
        // LTPlatform.instance['_base']['navigateToMiniProgram']({ appId: "ttce8db83051a7f459" });
    }

}