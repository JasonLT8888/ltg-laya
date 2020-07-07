import { ITest } from "./ITest";
import LTRes from "../../LTGame/Res/LTRes";
import UI_FunctionTestMediator from "../ui/UI_FunctionTestMediator";
import { LTBlinnPhong_HeightFog } from "../../LTGame/Material/LTBlinnPhong_HeightFog";
import Awaiters from "../../LTGame/Async/Awaiters";
import { HeightFogManager } from "../../LTGame/Material/HeightFogManager";
import UI_TestMediator from "../ui/UI_TestMediator";
import MathEx from "../../LTGame/LTUtils/MathEx";

const scene_path = "res/export/Conventional/HeightFog.ls";

export class HeightFogTest implements ITest {

    name: string = "高度雾测试";

    private _s3d: Laya.Scene3D;

    public async Create() {
        this._s3d = await LTRes.LoadAndGet(scene_path, true);
        Laya.stage.addChildAt(this._s3d, 1);
        Laya.Shader3D.debugMode = true;

        HeightFogManager.instance.fogColor = new Laya.Vector3(MathEx.Random(0, 1), MathEx.Random(0, 1), MathEx.Random(0, 1));
        HeightFogManager.instance.fogDistance = 10;
        HeightFogManager.instance.fogStartHeight = 10;

        let shareMat: LTBlinnPhong_HeightFog = null;
        let cubes = this._s3d.getChildByName("cubes");
        for (let i = 0; i < cubes.numChildren; ++i) {
            let getChild = cubes.getChildAt(i).getChildAt(0) as Laya.MeshSprite3D;
            if (shareMat == null) {
                shareMat = LTBlinnPhong_HeightFog.CreateFromBlinnPhong(getChild.meshRenderer.sharedMaterial as Laya.BlinnPhongMaterial);
            }
            getChild.meshRenderer.sharedMaterial = shareMat;
        }

        let panel = this._s3d.getChildByName("Plane") as Laya.MeshSprite3D;
        panel.meshRenderer.material
            = LTBlinnPhong_HeightFog.CreateFromBlinnPhong(panel.meshRenderer.sharedMaterial as Laya.BlinnPhongMaterial);

        /*
        HeightFogManager.instance.fogColor = new Laya.Vector3(1, 0, 0);
        HeightFogManager.instance.fogDistance = 5;
        HeightFogManager.instance.fogStartHeight = 10;
        */

        UI_TestMediator.instance.Show(Laya.Handler.create(this, this.Clear));
    }

    public Clear() {
        this._s3d.destroy();
        LTRes.Unload(scene_path);

        UI_FunctionTestMediator.instance.Show();
    }

}