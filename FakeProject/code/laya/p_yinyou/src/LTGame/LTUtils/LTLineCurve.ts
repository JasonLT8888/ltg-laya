import Vector3Ex from "./Vector3Ex";
import QuaternionEx from "./QuaternionEx";
import ArrayEx from "./ArrayEx";

/**
 * 路径动画曲线,必须是平滑曲线才能使用
 */
export class LTLineCurve {

    private _keys: number[];
    private _posList: Laya.Vector3[];
    private _rotList: Laya.Quaternion[];
    private _unitProgress: number;
    public totalLength: number;

    constructor(keys: number[], posList: Laya.Vector3[], rotList: Laya.Quaternion[]) {
        this._keys = ArrayEx.Copy(keys);
        this._posList = ArrayEx.Copy(posList);
        this._rotList = ArrayEx.Copy(rotList);
        this._unitProgress = 1 / this._keys.length;
    }

    public EvaluatePos(progress: number): Laya.Vector3 {
        let indexProgress = progress * this._keys.length;
        let preIndex = Math.floor(indexProgress);
        let behindIndex = preIndex + 1;
        let lerpProgress = (progress - (preIndex * this._unitProgress)) / this._unitProgress;
        let prePos = this._GetPos(preIndex);
        let behindPos = this._GetPos(behindIndex);
        return Vector3Ex.Lerp(prePos, behindPos, lerpProgress);
    }

    private _GetPos(index: number): Laya.Vector3 {
        if (index < 0) return this._posList[0];
        if (index > this._posList.length - 1) return this._posList[this._posList.length - 1];
        return this._posList[index];
    }

    private _GetRot(index: number): Laya.Quaternion {
        if (index < 0) return this._rotList[0];
        if (index > this._rotList.length - 1) return this._rotList[this._rotList.length - 1];
        return this._rotList[index];
    }

    public EvaluateRot(progress: number): Laya.Quaternion {
        let indexProgress = progress * this._keys.length;
        let preIndex = Math.floor(indexProgress);
        let behindIndex = preIndex + 1;
        let lerpProgress = (progress - (preIndex * this._unitProgress)) / this._unitProgress;
        let preRot = this._GetRot(preIndex);
        let behindRot = this._GetRot(behindIndex);
        return QuaternionEx.Lerp(preRot, behindRot, lerpProgress);
    }

}