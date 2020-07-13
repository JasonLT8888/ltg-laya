import { ITest } from "./ITest";
import LTRes from "../../LTGame/Res/LTRes";
import UI_TestRTMediator from "../ui/UI_TestRTMediator";
import MonoHelper, { EActionType } from "../../LTGame/LTUtils/MonoHelper";
import UI_FunctionTestMediator from "../ui/UI_FunctionTestMediator";

const scene_path = "res/export/Conventional/HeightFog.ls";

export class RenderTextureTest implements ITest {

    name: string = "RT测试";

    private _s3d: Laya.Scene3D;

    private _renderCamera: Laya.Camera;
    private _cacheImage: fgui.GImage;
    private _cacheRT: Laya.RenderTexture;

    async Create() {
        this._s3d = await LTRes.LoadAndGet(scene_path, true);
        Laya.stage.addChildAt(this._s3d, 1);

        UI_TestRTMediator.instance.Show();

        let getCamera = this._s3d.getChildByName("Main Camera") as Laya.Camera;
        this._renderCamera = getCamera.clone() as Laya.Camera;
        this._s3d.addChild(this._renderCamera);
        // 注意格式只能用r8g8b8a8否则ip6不支持
        this._cacheRT = new Laya.RenderTexture(UI_TestRTMediator.instance.ui.m_img_display.width,
            UI_TestRTMediator.instance.ui.m_img_display.height, Laya.RenderTextureFormat.R8G8B8A8,
            Laya.RenderTextureDepthFormat.DEPTH_16);
        this._renderCamera.renderTarget = this._cacheRT;
        this._renderCamera.enableRender = false;

        this._cacheImage = new fgui.GImage();
        UI_TestRTMediator.instance.ui.addChildAt(this._cacheImage,
            UI_TestRTMediator.instance.ui.getChildIndex(UI_TestRTMediator.instance.ui.m_img_display) + 1);
        this._cacheImage.image.texture = new Laya.Texture(this._cacheRT as any);
        this._cacheImage.setPivot(UI_TestRTMediator.instance.ui.m_img_display.pivotX, UI_TestRTMediator.instance.ui.m_img_display.pivotY,
            UI_TestRTMediator.instance.ui.m_img_display.pivotAsAnchor);

        UI_TestRTMediator.instance.ui.m_img_display.draggable = true;
        UI_TestRTMediator.instance.ui.m_btn_back.onClick(this, this.Clear);
        MonoHelper.instance.AddAction(EActionType.Update, this, this._LogicUpdate);
    }

    private _LogicUpdate() {
        let dt = Laya.timer.delta / 1000;
        this._renderCamera.transform.localRotationEulerY += dt * 10;
        this._renderCamera.render();
        this._cacheImage.setXY(UI_TestRTMediator.instance.ui.m_img_display.x, UI_TestRTMediator.instance.ui.m_img_display.y);
    }

    Clear() {
        this._cacheRT.destroy();
        MonoHelper.instance.RemoveAction(EActionType.Update, this, this._LogicUpdate);
        this._s3d.destroy();
        LTRes.Unload(scene_path);

        UI_TestRTMediator.instance.Hide();
        UI_FunctionTestMediator.instance.Show();
    }

}