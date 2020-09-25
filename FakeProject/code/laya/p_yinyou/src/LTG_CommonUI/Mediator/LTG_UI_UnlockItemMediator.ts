import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTG_UI_UnlockItem from "../UI/LTCom/LTG_UI_UnlockItem";
import { RewardCodeConfig } from "../../script/config/RewardCodeConfig";
import LTRes from "../../LTGame/Res/LTRes";
import ResDefine from "../../script/common/ResDefine";
import GlobalUnit from "../../script/common/GlobalUnit";
import LTUI from "../../LTGame/UIExt/LTUI";
import { TransformEx } from "../../LTGame/LTUtils/TransformEx";
import { LTUtils } from "../../LTGame/LTUtils/LTUtils";
import { AnimatorEx } from "../../LTGame/LTUtils/AnimatorEx";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import { LTG_Com_EggWallData } from "../Data/LTG_Com_EggWallData";
import { LTG_Com_UnlockItemData } from "../Data/LTG_Com_UnlockItemData";
import LTG_UI_EggWallMediator from "./LTG_UI_EggWallMediator";

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

    private _rootObj: Laya.Sprite3D;

    private _renderCamera: Laya.Camera;
    private _cacheImage: fgui.GImage;
    private _cacheRT: Laya.RenderTexture;

    private _playerParent: Laya.Sprite3D;

    _OnShow() {
        super._OnShow();
        // your code

        this._cacheData = this._openParam as LTG_Com_UnlockItemData;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_UnlockItemData进行界面打开操作");
        }

        this.ui.m_view.m_btn_no.onClick(this, this._OnClickNo);
        this.ui.m_view.m_btn_unlock.onClick(this, this._OnClickUnlock);
        this.ui.m_view.m_btn_unlock.m_text_progress.text = LTG_Com_EggWallData.GetCodeUnlockProgress(this._cacheData.rewardConfig.id);
        this.ui.m_view.m_loader_title.url = this._cacheData.rewardConfig.title_icon_path;

        this._CreateCamera();

    }

    private async _CreateCamera() {
        this._rootObj = await LTRes.LoadAndGet("res/ltgame/prefab/try_display.lh", true);
        GlobalUnit.s3d.addChild(this._rootObj);

        this._renderCamera = this._rootObj.getChildByName("watchCamera") as Laya.Camera;
        this._playerParent = this._rootObj.getChildByName("point_player") as Laya.Sprite3D;
        // 注意格式只能用r8g8b8a8否则ip6不支持
        this._cacheRT = new Laya.RenderTexture(this.ui.m_view.m_img_display.width,
            this.ui.m_view.m_img_display.height, Laya.RenderTextureFormat.R8G8B8A8,
            Laya.RenderTextureDepthFormat.DEPTH_16);

        this._cacheImage = new fgui.GImage();
        this.ui.m_view.addChildAt(this._cacheImage,
            this.ui.m_view.getChildIndex(this.ui.m_view.m_img_display) + 1);
        this._cacheImage.image.texture = new Laya.Texture(this._cacheRT as any);
        this._cacheImage.setPivot(this.ui.m_view.m_img_display.pivotX, this.ui.m_view.m_img_display.pivotY,
            this.ui.m_view.m_img_display.pivotAsAnchor);
        this._cacheImage.setXY(this.ui.m_view.m_img_display.x, this.ui.m_view.m_img_display.y);
        this.ui.m_view.m_img_display.dispose();

        this._renderCamera.renderTarget = this._cacheRT;
        this._renderCamera.enableRender = true;
        this._renderCamera.cullingMask = Math.pow(2, 3);

        this._LoadModel();
    }

    private async _OnClickUnlock() {
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            let isUnlocked = LTG_Com_EggWallData.RecordWatchAD(this._cacheData.rewardConfig.id);
            if (isUnlocked) {
                this.Hide();
                this._cacheData.onUnlocked.runWith([this._cacheData.rewardConfig.reward_type, this._cacheData.rewardConfig.reward_value]);
            } else {
                this.ui.m_view.m_btn_unlock.m_text_progress.text = LTG_Com_EggWallData.GetCodeUnlockProgress(this._cacheData.rewardConfig.id);
            }
        } else {
            LTUI.Toast("跳过广告无法获得奖励");
        }
    }

    private _OnClickNo() {
        this.Hide();
    }

    _OnHide() {
        this._playerParent.destroyChildren();
        this._cacheRT.destroy();
        this._rootObj.removeSelf();
        this._cacheData.onClose?.run();

        if (LTG_UI_EggWallMediator.instance.isShow) {
            LTG_UI_EggWallMediator.instance.ui.m_list_view.refreshVirtualList();
        }
    }

    private async _LoadModel() {

        LTUI.ShowLoading("资源加载中...");
        let playerObj = await LTRes.LoadAndGet(ResDefine.FixPath(this._cacheData.rewardConfig.model_path)) as Laya.Sprite3D;
        LTUI.HideLoading();
        if (playerObj == null) {
            console.error("无法加载资源,请检查资源及配置");
            return;
        }
        if (!this.isShow) {
            playerObj.destroy();
            return;
        }
        this._playerParent.addChild(playerObj);
        TransformEx.ResetLocalTrans(playerObj.transform);
        LTUtils.SetLayer(playerObj, 3);
        let animObj = playerObj.getChildByName("view").getChildAt(0);
        let animator = animObj.getComponent(Laya.Animator) as Laya.Animator;
        if (animator != null) {
            animator.play("idle");
        }

        this._cacheImage.visible = true;
    }

}