import { ITest } from "./ITest";
import LTUI from "../../LTGame/UIExt/LTUI";
import ResDefine from "../common/ResDefine";
import LTRes from "../../LTGame/Res/LTRes";
import UI_TestMediator from "../ui/UI_TestMediator";
import UI_FunctionTestMediator from "../ui/UI_FunctionTestMediator";
import { GrassRenderManager } from "./GassTest/GassRenderManager";
import MonoHelper, { EActionType } from "../../LTGame/LTUtils/MonoHelper";

export class GassTest implements ITest {

    name: string = 'GrassTest';

    private _s3d: Laya.Scene3D;
    private _camera: Laya.Camera;

    public grassManager: GrassRenderManager;

    Create() {
        this._AsyncAction();
    }

    private async _AsyncAction() {
        LTUI.ShowLoading('资源加载中', true);
        let scenePath = ResDefine.FixScene('GrassTest');
        let cacheLoadUrls = [];
        cacheLoadUrls.push(scenePath);
        await LTRes.LoadAsync(cacheLoadUrls);
        this._s3d = LTRes.Get(scenePath, true);
        Laya.stage.addChildAt(this._s3d, 0);

        let light = this._s3d.getChildByName('Directional Light') as Laya.DirectionLight;
        light.shadowMode = Laya.ShadowMode.Hard;

        this._camera = this._s3d.getChildByName('Main Camera') as Laya.Camera;
        this._CreateGass();

        LTUI.HideLoading();

        UI_TestMediator.instance.Show(Laya.Handler.create(this, this.Clear));
    }

    private _CreateGass() {
        //渲染草
        this.grassManager = new GrassRenderManager(this._camera);
        var grasssize = this.grassManager.grassCellsize;

        for (let x = -10; x < 10; x += grasssize) {
            for (let z = -10; z < 10; z += grasssize) {
                this.grassManager.addGrassCell(new Laya.Vector3(x, 0, z));
            }
        }

        this.grassManager.enable = true;

        MonoHelper.instance.AddAction(EActionType.Update, this, this._Update);
    }

    private _Update() {
        this.grassManager.update(this._camera);
    }

    Clear() {
        MonoHelper.instance.RemoveAction(EActionType.Update, this, this._Update);
        this._s3d.destroy();
        let scenePath = ResDefine.FixScene('GrassTest');
        LTRes.Unload(scenePath);
        UI_FunctionTestMediator.instance.Show();
    }

}