import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTG_UI_TrySkin from "../UI/LTCom/LTG_UI_TrySkin";
import { LTG_Com_TrySkinData } from "../Data/LTG_Com_TrySkinData";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import LTUI from "../../LTGame/UIExt/LTUI";
import ResDefine from "../../script/common/ResDefine";
import LTRes from "../../LTGame/Res/LTRes";
import { LTUtils } from "../../LTGame/LTUtils/LTUtils";
import { TransformEx } from "../../LTGame/LTUtils/TransformEx";
import { EPlatformType } from "../../LTGame/Platform/EPlatformType";
import LTSDK from "../../SDK/LTSDK";
import { CmpSceneDisplay } from "../../LTGame/UIExt/Cmp/CmpSceneDisplay";
import { CmpSimpleLoader } from "../../LTGame/UIExt/Cmp/CmpSimpleLoader";

const display_path = "try_display";

export default class LTG_UI_TrySkinMediator extends BaseUIMediator<LTG_UI_TrySkin> {

    private static _instance: LTG_UI_TrySkinMediator;
    public static get instance(): LTG_UI_TrySkinMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_TrySkinMediator();
            this._instance._classDefine = LTG_UI_TrySkin;
        }
        return this._instance;
    }

    private _cacheData: LTG_Com_TrySkinData;

    private _displayScene: CmpSceneDisplay;
    private _displayPlayer: CmpSimpleLoader;
    _OnShow() {
        super._OnShow();
        // your code

        this._cacheData = this._openParam as LTG_Com_TrySkinData;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_TrySkinData进行界面打开操作");
        }
        if (this._cacheData.tryProgress) {
            this.ui.m_view.m_progress.text = this._cacheData.tryProgress;
        } else {
            this.ui.m_view.visible = false;
        }
        // this.ui.m_view.m_loader_title.url = this._cacheData.tryConfig.intro_url;
        this._displayScene = new CmpSceneDisplay(this.ui.m_img_display);
        this.ui.m_btn_no.onClick(this, this._OnClickClose);
        this.ui.m_btn_try.onClick(this, this._OnClickWatchAd);
        this.ui.m_btn_no.m_bg.visible = LTPlatform.instance.platform == EPlatformType.TT || LTSDK.instance.isInCheck;
        this._CreateScene();
    }
    private async _CreateScene() {
        LTUI.ShowLoading('资源加载中');

        await this._displayScene.LoadScene('ZS_EggUnlock');
        this._displayScene.camera.clearColor = new Laya.Vector4(0, 0, 0, 0);
        this._displayPlayer = new CmpSimpleLoader(LTUtils.FindChild(this._displayScene.s3d, 'ZS_01/xuanzhuan/jiaose') as Laya.Sprite3D);
        await this._displayPlayer.LoadObj(this._cacheData.modelPath);
        //this._displayPlayer.loadObj.transform.localScale = new Laya.Vector3(1,1,1);
        LTUI.HideLoading();
    }


    _OnHide() {
        this._displayScene?.Dispose();
    }

    private _OnClickClose() {
        LTUI.TrigerBtnClick();
        this.Hide();
        this._cacheData.onClose?.runWith(false);
    }

    private async _OnClickWatchAd(evt: Laya.Event) {
        evt.stopPropagation();
        LTUI.TrigerBtnClick();
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            this.Hide();
            this._cacheData.onClose?.runWith(true);
        }
    }

}