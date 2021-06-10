import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTG_UI_EggUnlock from "../UI/LTCom/LTG_UI_EggUnlock";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import LTUI from "../../LTGame/UIExt/LTUI";
import { EggConfig } from "../../script/config/EggConfig";
import { CmpSceneDisplay } from "../../LTGame/UIExt/Cmp/CmpSceneDisplay";
import { LTG_Com_EggWallData } from "../Data/LTG_Com_EggWallData";
import { CmpSimpleLoader } from "../../LTGame/UIExt/Cmp/CmpSimpleLoader";
import { LTUtils } from "../../LTGame/LTUtils/LTUtils";
import LTG_UI_EggWallMediator from "./LTG_UI_EggWallMediator";
import GameData from "../../script/common/GameData";

export default class LTG_UI_EggUnlockMediator extends BaseUIMediator<LTG_UI_EggUnlock> {

    private static _instance: LTG_UI_EggUnlockMediator;
    public static get instance(): LTG_UI_EggUnlockMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_EggUnlockMediator();
            this._instance._classDefine = LTG_UI_EggUnlock;
        }
        return this._instance;
    }

    private _cacheConfig: EggConfig.config;
    private _displayScene: CmpSceneDisplay;
    private _displayPlayer: CmpSimpleLoader;

    private _onUnlocked: Laya.Handler;

    _OnShow() {
        super._OnShow();
        // your code

        this._cacheConfig = this._openParam[0];
        this._onUnlocked = this._openParam[1];

        this._displayScene = new CmpSceneDisplay(this.ui.m_img_display);

        this.ui.m_view_unlock_progress.m_loader_01.url = this._cacheConfig.coin_icon;
        this.ui.m_view_unlock_progress.m_loader_02.url = this._cacheConfig.coin_icon;
        this.ui.m_view_unlock_progress.m_text_01.text = this._cacheConfig.reward_coin_value[0].toFixed(0);
        this.ui.m_view_unlock_progress.m_text_02.text = this._cacheConfig.reward_coin_value[1].toFixed(0);

        this.ui.m_btn_unlock_ad.m_text_value.text = LTG_Com_EggWallData.GetUnlockProgress(this._cacheConfig.id);

        this.ui.m_btn_giveup.onClick(this, this._OnClickGiveUp);
        this.ui.m_btn_unlock_ad.onClick(this, this._OnClickUnlock);

        this._CreateScene();
    }

    private async _CreateScene() {
        LTUI.ShowLoading('资源加载中');

        await this._displayScene.LoadScene('ZS_EggUnlock');
        this._displayScene.camera.clearColor = new Laya.Vector4(0, 0, 0, 0);
        this._displayPlayer = new CmpSimpleLoader(LTUtils.FindChild(this._displayScene.s3d, 'ZS_01/xuanzhuan/jiaose') as Laya.Sprite3D);
        await this._displayPlayer.LoadObj(this._cacheConfig.model_path);

        LTUI.HideLoading();
    }

    _OnHide() {
        this._displayScene.Dispose();
        if (this._onUnlocked != null) {
            this._onUnlocked.recover();
        }
    }

    private _OnClickGiveUp() {
        LTUI.TrigerBtnClick();
        this.Hide();
    }

    private async _OnClickUnlock() {
        LTUI.TrigerBtnClick();
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            LTG_Com_EggWallData.RecordWatchAD(this._cacheConfig.id);
            let count = LTG_Com_EggWallData.GetWatchedADCount(this._cacheConfig.id);
            LTG_UI_EggWallMediator.instance.RefreshUI();
            if (count >= this._cacheConfig.unlock_value) {
                this._onUnlocked?.run();
                this.Hide();
                return;
            } else {
                let coinIndex = count - 1;
                let getCoin = this._cacheConfig.reward_coin_value[coinIndex];
                if (getCoin != null) {
                    // TODO: 等待修改
                    GameData.instance.coinCount += getCoin;
                    GameData.SaveToDisk();
                    LTUI.Toast('获得' + getCoin + '钻石');
                }
            }

            this.ui.m_btn_unlock_ad.m_text_value.text = LTG_Com_EggWallData.GetUnlockProgress(this._cacheConfig.id);
        }
    }

}