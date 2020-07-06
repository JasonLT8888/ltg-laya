import { ITest } from "./ITest";
import LTRes from "../../LTGame/Res/LTRes";
import { EffectManager } from "../manager/EffectManager";
import UI_TestMediator from "../ui/UI_TestMediator";
import UI_FunctionTestMediator from "../ui/UI_FunctionTestMediator";

const scene_path = "res/export/Conventional/HeightFog.ls";

export class UIEffectTest implements ITest {

    name: string = "UI特效测试";

    private _s3d: Laya.Scene3D;

    async Create() {
        this._s3d = await LTRes.LoadAndGet(scene_path, true);
        Laya.stage.addChildAt(this._s3d, 1);

        
        UI_TestMediator.instance.Show(Laya.Handler.create(this, this.Clear));
        UI_TestMediator.instance.ui.m_img_bg.on(Laya.Event.MOUSE_DOWN, this, this._OnPressDown);
        UI_TestMediator.instance.ui.m_img_bg.color = "ffffffff";
    }

    private _OnPressDown(event: Laya.Event) {
        EffectManager.instance.PlayEffectById(2, 2, new Laya.Vector3(event.stageX, event.stageY));
    }

    Clear() {
        this._s3d.destroy();
        LTRes.Unload(scene_path);

        UI_FunctionTestMediator.instance.Show();
    }



}