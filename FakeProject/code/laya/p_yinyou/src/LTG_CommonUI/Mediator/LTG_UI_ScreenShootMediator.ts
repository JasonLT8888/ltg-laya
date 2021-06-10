import LTPlatform from "../../LTGame/Platform/LTPlatform";
import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTUI from "../../LTGame/UIExt/LTUI";
import { LTG_Com_ShareVideoData } from "../Data/LTG_Com_ShareVideoData";
import LTG_UI_ScreenShoot from "../UI/LTCom/LTG_UI_ScreenShoot";

export default class LTG_UI_ScreenShootMediator extends BaseUIMediator<LTG_UI_ScreenShoot> {

    private static _instance: LTG_UI_ScreenShootMediator;
    public static get instance(): LTG_UI_ScreenShootMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_ScreenShootMediator();
            this._instance._classDefine = LTG_UI_ScreenShoot;
        }
        return this._instance;
    }

    private _cacheData: LTG_Com_ShareVideoData;

    private _cacheImage: fgui.GImage;
    private _cacheRT: Laya.RenderTexture;

    _OnShow() {
        super._OnShow();
        // your code

        this._cacheData = this._openParam as LTG_Com_ShareVideoData;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_ShareVideoData进行界面打开操作");
        }

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

        if (this._cacheData.camera != null) {
            this._cacheData.camera.renderTarget = this._cacheRT;
            this._cacheData.camera.render();
            this._cacheData.camera.renderTarget = null;
        }


        this.ui.m_view.m_view_play.onClick(this, this._OnClickShare);
        this.ui.m_view.m_btn_close.onClick(this, this._OnClickClose);
        this.ui.m_view.m_btn_share.onClick(this, this._OnClickShare);
    }

    private _OnClickShare() {
        LTUI.TrigerBtnClick();
        LTPlatform.instance.recordManager.ShareVideo(Laya.Handler.create(null, () => {
            this.Hide();
            this._cacheData.onClosed?.runWith([1]);
        }), Laya.Handler.create(null, () => {
            LTUI.Toast("跳过分享无法获得奖励");
        }), Laya.Handler.create(null, () => {
            LTUI.Toast("分享发生错误");
        }));
    }

    private _OnClickClose() {
        LTUI.TrigerBtnClick();
        this.Hide();
        this._cacheData.onClosed?.runWith([0]);
    }

}