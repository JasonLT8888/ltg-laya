import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTG_UI_EggDetail from "../UI/LTCom/LTG_UI_EggDetail";
import { EggConfig } from "../../script/config/EggConfig";
import { CmpSceneDisplay } from "../../LTGame/UIExt/Cmp/CmpSceneDisplay";
import { CmpSimpleLoader } from "../../LTGame/UIExt/Cmp/CmpSimpleLoader";
import { LTG_Com_EggWallData } from "../Data/LTG_Com_EggWallData";
import LTUI from "../../LTGame/UIExt/LTUI";
import { LTUtils } from "../../LTGame/LTUtils/LTUtils";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import LTG_UI_EggWallMediator from "./LTG_UI_EggWallMediator";
import GameData from "../../script/common/GameData";

export class LTG_UI_EggDetailMediator extends BaseUIMediator<LTG_UI_EggDetail> {
    private static _instance: LTG_UI_EggDetailMediator;
    public get ui(): LTG_UI_EggDetail {
        return this._ui;
    }

    public static get instance(): LTG_UI_EggDetailMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_EggDetailMediator();
            this._instance._classDefine = LTG_UI_EggDetail;
        }
        return this._instance;
    }

    private _cacheConfig: EggConfig.config;
    private _displayScene: CmpSceneDisplay;
    private _displayPlayer: CmpSimpleLoader;

    _OnShow() {
        super._OnShow();
        // your code

        this._cacheConfig = this._openParam;

        this._displayScene = new CmpSceneDisplay(this.ui.m_display);
 
        this.ui.m_txt_info.text = this._cacheConfig.code;
        this.ui.m_btn_ok.onClick(this, this._OnClickOk);
        LTPlatform.instance.ShowBannerAd();
        this._CreateScene();
    }
    private async _CreateScene() {
        LTUI.ShowLoading('资源加载中');

        await this._displayScene.LoadScene('ZS_EggUnlock');
        this._displayScene.camera.clearColor = new Laya.Vector4(0, 0, 0, 0);
        this._displayPlayer = new CmpSimpleLoader(LTUtils.FindChild(this._displayScene.s3d, 'ZS_01/xuanzhuan/jiaose') as Laya.Sprite3D);
        await this._displayPlayer.LoadObj(this._cacheConfig.model_path);
        this._displayPlayer.loadObj.transform.localScale = new Laya.Vector3(this._cacheConfig.scale[0], this._cacheConfig.scale[1], this._cacheConfig.scale[2]);
        LTUI.HideLoading();
    }

    _OnHide() {
        this._displayScene?.Dispose();
        LTPlatform.instance.HideBannerAd();
    }

    private _OnClickOk() {
        LTUI.TrigerBtnClick();
        this.Hide();
    }


}
