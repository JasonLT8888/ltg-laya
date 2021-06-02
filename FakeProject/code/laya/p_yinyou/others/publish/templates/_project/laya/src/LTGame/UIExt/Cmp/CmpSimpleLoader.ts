import ResDefine from "../../../script/common/ResDefine";
import LTRes from "../../Res/LTRes";
import { TransformEx } from "../../LTUtils/TransformEx";

export class CmpSimpleLoader {

    public placePoint: Laya.Sprite3D;

    private _loadObj: Laya.Sprite3D;
    public get loadObj(): Laya.Sprite3D {
        return this._loadObj;
    }

    private _cachePath: string;

    constructor(placePoint: Laya.Sprite3D) {
        this.placePoint = placePoint;
    }

    public async LoadObj(objPath: string) {
        if (this._cachePath == objPath) return;
        this._cachePath = objPath;

        if (this._loadObj != null) {
            this._loadObj.destroy();
            this._loadObj = null;
        }
        let fullPath = ResDefine.FixPath(objPath);
        this._loadObj = await LTRes.LoadAndGet(fullPath);
        this.placePoint.addChild(this._loadObj);
        TransformEx.ResetLocalTrans(this._loadObj.transform);
    }

}