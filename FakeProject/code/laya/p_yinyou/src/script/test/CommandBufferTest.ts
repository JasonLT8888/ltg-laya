import { ITest } from "./ITest";
import ResDefine from "../common/ResDefine";
import LTRes from "../../LTGame/Res/LTRes";
import LTUI from "../../LTGame/UIExt/LTUI";

export class CommandBufferTest implements ITest {

    name: string = "CommandBuffer";

    private _s3d: Laya.Scene3D;
    private _cacheLoadUrls: string[];

    Create() {
        this._AsyncAction();
    }

    private async _AsyncAction() {
        LTUI.ShowLoading('资源加载中', true);
        let scenePath = ResDefine.FixScene('CommandBuffer');
        this._cacheLoadUrls = [];
        this._cacheLoadUrls.push(scenePath);
        await LTRes.LoadAsync(this._cacheLoadUrls);
        this._s3d = LTRes.Get(scenePath, true);
        Laya.stage.addChildAt(this._s3d, 0);
        LTUI.HideLoading();
    }

    Clear() {
        this._s3d.destroy();
        for (let url of this._cacheLoadUrls) {
            LTRes.Unload(url);
        }
    }

}