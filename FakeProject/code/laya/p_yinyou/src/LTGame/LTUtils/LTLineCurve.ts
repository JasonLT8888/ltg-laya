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

    constructor() {
        this._keys = [];
        this._posList = [];
        this._rotList = [];
        this._unitProgress = 1;
    }

    public PushDatas(keys: number[], posList: Laya.Vector3[], rotList: Laya.Quaternion[]) {
        this._keys.push(...keys)
        this._posList.push(...posList);
        this._rotList.push(...rotList);
        this._unitProgress = 1 / this._keys.length;
    }

    public EvaluatePos(distance: number, lastIndex: number = 0): [Laya.Vector3, number] {
        if (distance <= 0) return [this._posList[0].clone(), 0];
        if (distance >= this.totalLength) return [this._posList[this._posList.length - 1].clone(), this._keys.length];
        let searchIndex = Math.max(lastIndex - 5, 0);
        for (; searchIndex < this._keys.length; ++searchIndex) {
            if (this._keys[searchIndex] > distance) {
                break;
            }
        }
        let preIndex = Math.max(searchIndex - 1, 0);
        let behindIndex = Math.max(searchIndex, 1);
        let lerpProgress = (distance - this._keys[preIndex]) / (this._keys[behindIndex] - this._keys[preIndex]);
        let prePos = this._GetPos(preIndex);
        let behindPos = this._GetPos(behindIndex);
        return [Vector3Ex.Lerp(prePos, behindPos, lerpProgress), preIndex];
    }

    public EvaluateRot(distance: number, lastIndex: number = 0): Laya.Quaternion {
        if (distance <= 0) return this._rotList[0].clone();
        if (distance >= this.totalLength) return this._rotList[this._rotList.length - 1].clone();
        let searchIndex = Math.max(lastIndex - 5, 0);
        for (; searchIndex < this._keys.length; ++searchIndex) {
            if (this._keys[searchIndex] > distance) {
                break;
            }
        }
        let preIndex = Math.max(searchIndex - 1, 0);
        let behindIndex = Math.max(searchIndex, 1);
        let lerpProgress = (distance - this._keys[preIndex]) / (this._keys[behindIndex] - this._keys[preIndex]);
        let preRot = this._GetRot(preIndex);
        let behindRot = this._GetRot(behindIndex);
        return QuaternionEx.Lerp(preRot, behindRot, lerpProgress);
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

}