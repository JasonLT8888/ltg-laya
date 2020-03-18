import ResDefine from "../common/ResDefine";
import GlobalUnit from "../common/GlobalUnit";
import { LTUtils } from "../../LTGame/LTUtils/LTUtils";
import ColorEx from "../../LTGame/LTUtils/ColorEx";
import GameConst from "../common/GameConst";

export default class CameraManager {

    private _cameraObj: Laya.Sprite3D;
    private _camera: Laya.Camera;

    public Preload(urls: string[]) {
        urls.push(ResDefine.FixPath(ResDefine.camera_path));
    }

    public CreateCamera() {
        if (this._cameraObj == null) {
            var loadObj = LTUtils.GetRes(ResDefine.FixPath(ResDefine.camera_path), true);
            this._cameraObj = GlobalUnit.s3d.addChild(loadObj) as Laya.Sprite3D;
            this._camera = this._cameraObj.getChildAt(0) as Laya.Camera;

            this._camera.clearFlag = Laya.Camera.CLEARFLAG_SOLIDCOLOR;
            this._camera.clearColor = ColorEx.ToV4(ColorEx.HexToColor("242424"));

            this._camera.farPlane = 200;
        } else {
            GlobalUnit.s3d.addChild(this._cameraObj);
        }

        GlobalUnit.s3d.fogColor = ColorEx.ToV3(ColorEx.HexToColor("242424"));
        GlobalUnit.s3d.fogStart = 150;
        GlobalUnit.s3d.fogRange = 50;
        GlobalUnit.s3d.enableFog = true;
        this._cameraObj.transform.localPositionZ = 0;
    }

    public ClearCamera() {
        this._cameraObj.removeSelf();
    }

    public LateUpdate(dt: number) {
        this._cameraObj.transform.localPositionZ += dt * GameConst.moveSpeedZ;
    }

}