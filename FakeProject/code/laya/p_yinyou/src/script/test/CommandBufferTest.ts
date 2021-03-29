import { ITest } from "./ITest";
import ResDefine from "../common/ResDefine";
import LTRes from "../../LTGame/Res/LTRes";
import LTUI from "../../LTGame/UIExt/LTUI";
import UI_TestMediator from "../ui/UI_TestMediator";
import UI_FunctionTestMediator from "../ui/UI_FunctionTestMediator";

export class CommandBufferTest implements ITest {

    name: string = "CommandBuffer";

    private _s3d: Laya.Scene3D;
    private _camera: Laya.Camera;

    private _cmdBuffer: Laya.CommandBuffer;

    Create() {
        this._AsyncAction();
    }

    private async _AsyncAction() {
        LTUI.ShowLoading('资源加载中', true);
        let scenePath = ResDefine.FixScene('CommandBuffer');
        let cacheLoadUrls = [];
        cacheLoadUrls.push(scenePath);
        await LTRes.LoadAsync(cacheLoadUrls);
        this._s3d = LTRes.Get(scenePath, true);
        Laya.stage.addChildAt(this._s3d, 0);

        let light = this._s3d.getChildByName('Directional Light') as Laya.DirectionLight;
        light.shadowMode = Laya.ShadowMode.Hard;

        this._camera = this._s3d.getChildByName('Main Camera') as Laya.Camera;
        this._CreateCommandBuffer();

        LTUI.HideLoading();

        UI_TestMediator.instance.Show(Laya.Handler.create(this, this.Clear));
    }

    private _CreateCommandBuffer() {
        this._camera.enableBuiltInRenderTexture = true;
        let cmdbuffer = new Laya.CommandBuffer();
        let cube = this._s3d.getChildByName('Cube') as Laya.MeshSprite3D;
        cube.active = false;
        cmdbuffer.drawRender(cube.meshRenderer, cube.meshRenderer.sharedMaterial, 0);
        this._camera.addCommandBuffer(Laya.CameraEventFlags.BeforeImageEffect, cmdbuffer);
        this._cmdBuffer = cmdbuffer;
    }

    Clear() {
        this._camera.removeCommandBuffer(Laya.CameraEventFlags.BeforeImageEffect, this._cmdBuffer);
        this._s3d.destroy();
        let scenePath = ResDefine.FixScene('CommandBuffer');
        LTRes.Unload(scenePath);
        UI_FunctionTestMediator.instance.Show();
    }

}