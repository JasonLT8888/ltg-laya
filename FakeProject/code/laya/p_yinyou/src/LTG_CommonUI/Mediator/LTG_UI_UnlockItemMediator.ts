import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTG_UI_UnlockItem from "../UI/LTCom/LTG_UI_UnlockItem";
import LTRes from "../../LTGame/Res/LTRes";
import ResDefine from "../../script/common/ResDefine";
import LTUI from "../../LTGame/UIExt/LTUI";
import { TransformEx } from "../../LTGame/LTUtils/TransformEx";
import { LTUtils } from "../../LTGame/LTUtils/LTUtils";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import { LTG_Com_EggWallData } from "../Data/LTG_Com_EggWallData";
import { LTG_Com_UnlockItemData } from "../Data/LTG_Com_UnlockItemData";
import LTG_UI_EggWallMediator from "./LTG_UI_EggWallMediator";
import { EPlatformType } from "../../LTGame/Platform/EPlatformType";

const display_path = "try_display";

export default class LTG_UI_UnlockItemMediator extends BaseUIMediator<LTG_UI_UnlockItem> {

    private static _instance: LTG_UI_UnlockItemMediator;
    public static get instance(): LTG_UI_UnlockItemMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_UnlockItemMediator();
            this._instance._classDefine = LTG_UI_UnlockItem;
        }
        return this._instance;
    }

    private _cacheData: LTG_Com_UnlockItemData;

    private _s3d: Laya.Scene3D;
    private _cacheRt: Laya.RenderTexture;

    _OnShow() {
        super._OnShow();
        // your code

        this._cacheData = this._openParam as LTG_Com_UnlockItemData;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_UnlockItemData进行界面打开操作");
        }

        this.ui.m_view.m_btn_no.onClick(this, this._OnClickNo);
        this.ui.m_view.m_btn_unlock.onClick(this, this._OnClickUnlock);
        this.ui.m_view.m_btn_unlock.m_text_progress.text = LTG_Com_EggWallData.GetUnlockProgress(this._cacheData.rewardConfig.id);
        this.ui.m_view.m_loader_title.url = this._cacheData.rewardConfig.title_icon_path;
        this.ui.m_view.m_btn_no.m_bg.visible = LTPlatform.instance.platform == EPlatformType.TT;

        this._CreateView();
    }

    private async _CreateView() {
        this.ui.m_view.m_img_display.visible = false;

        LTUI.LockScreen();
        let needLoadUrls: string[] = [];
        needLoadUrls.push(ResDefine.FixPath(display_path));
        needLoadUrls.push(ResDefine.FixPath(this._cacheData.rewardConfig.model_path));
        await LTRes.LoadAsync(needLoadUrls);
        this._s3d = new Laya.Scene3D();
        let loadDisplayObj = LTRes.Get(ResDefine.FixPath(display_path));
        this._s3d.addChild(loadDisplayObj);

        let pointPlayer = LTUtils.FindChild(loadDisplayObj, "point_player");
        let loadModel = LTRes.Get(ResDefine.FixPath(this._cacheData.rewardConfig.model_path)) as Laya.Sprite3D;
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


    private async _OnClickUnlock() {
        LTUI.TrigerBtnClick();
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            let isUnlocked = LTG_Com_EggWallData.RecordWatchAD(this._cacheData.rewardConfig.id);
            if (isUnlocked) {
                this.Hide();
                this._cacheData.onUnlocked.runWith([this._cacheData.rewardConfig.reward_type, this._cacheData.rewardConfig.reward_value]);
            } else {
                this.ui.m_view.m_btn_unlock.m_text_progress.text = LTG_Com_EggWallData.GetUnlockProgress(this._cacheData.rewardConfig.id);
            }
        }
    }

    private _OnClickNo() {
        LTUI.TrigerBtnClick();
        this.Hide();
    }

    _OnHide() {
        this._s3d.destroy();
        if (this._cacheRt != null) {
            this._cacheRt.destroy();
        }

        this._cacheData.onClose?.run();

        if (LTG_UI_EggWallMediator.instance.isShow) {
            LTG_UI_EggWallMediator.instance.ui.m_list_view.refreshVirtualList();
        }
    }

}