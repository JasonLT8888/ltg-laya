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

    private _s3d: Laya.Scene3D;
    private _cacheRt: Laya.RenderTexture;

    _OnShow() {
        super._OnShow();
        // your code

        this._cacheData = this._openParam as LTG_Com_TrySkinData;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_TrySkinData进行界面打开操作");
        }

        this.ui.m_view.m_loader_title.url = this._cacheData.tryConfig.intro_url;

        this.ui.m_view.m_btn_no.onClick(this, this._OnClickClose);
        this.ui.m_view.m_btn_try.onClick(this, this._OnClickWatchAd);
        this.ui.m_view.m_btn_no.m_bg.visible = LTPlatform.instance.platform == EPlatformType.TT;
        this._CreateView();
    }

    private async _CreateView() {
        this.ui.m_view.m_img_display.visible = false;

        LTUI.LockScreen();
        let needLoadUrls: string[] = [];
        needLoadUrls.push(ResDefine.FixPath(display_path));
        needLoadUrls.push(ResDefine.FixPath(this._cacheData.tryConfig.display_model_path));
        await LTRes.LoadAsync(needLoadUrls);
        this._s3d = new Laya.Scene3D();
        let loadDisplayObj = LTRes.Get(ResDefine.FixPath(display_path));
        this._s3d.addChild(loadDisplayObj);

        let pointPlayer = LTUtils.FindChild(loadDisplayObj, "point_player");
        let loadModel = LTRes.Get(ResDefine.FixPath(this._cacheData.tryConfig.display_model_path)) as Laya.Sprite3D;
        pointPlayer.addChild(loadModel);
        TransformEx.ResetLocalTrans(loadModel.transform);

        let camera = LTUtils.FindChild(loadDisplayObj, "watchCamera") as Laya.Camera;
        // 注意格式只能用r8g8b8a8否则ip6不支持
        this._cacheRt = new Laya.RenderTexture(this.ui.m_view.m_img_display.width,
            this.ui.m_view.m_img_display.height, Laya.RenderTextureFormat.R8G8B8A8,
            Laya.RenderTextureDepthFormat.DEPTH_16);
        let cacheImage = new fgui.GImage();
        this.ui.m_view.addChildAt(cacheImage,
            this.ui.m_view.getChildIndex(this.ui.m_view.m_img_display) + 1);
        cacheImage.image.texture = new Laya.Texture(this._cacheRt as any);
        cacheImage.setPivot(this.ui.m_view.m_img_display.pivotX, this.ui.m_view.m_img_display.pivotY,
            this.ui.m_view.m_img_display.pivotAsAnchor);
        cacheImage.setXY(this.ui.m_view.m_img_display.x, this.ui.m_view.m_img_display.y);

        camera.clearColor = new Laya.Vector4(0, 0, 0, 0);
        camera.clearFlag = Laya.CameraClearFlags.SolidColor;
        camera.renderTarget = this._cacheRt;

        Laya.stage.addChild(this._s3d);

        LTUI.UnlockScreen();


    }

    _OnHide() {
        this._s3d.destroy();
        if (this._cacheRt != null) {
            this._cacheRt.destroy();
        }
    }

    private _OnClickClose() {
        this.Hide();
        this._cacheData.onClose?.runWith(false);
    }

    private async _OnClickWatchAd() {
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            this.Hide();
            this._cacheData.onClose?.runWith(true);
        } else {
            LTUI.Toast('跳过广告无法获得奖励');
        }
    }

}