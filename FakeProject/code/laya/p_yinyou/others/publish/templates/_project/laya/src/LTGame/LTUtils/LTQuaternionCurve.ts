import LTSimpleCurve from "./LTSimpleCurve";
import QuaternionEx from "./QuaternionEx";

export default class LTQuaternionCurve {

    private _keyList: number[];
    private _valueList: Laya.Quaternion[];
    private _minKey: number;
    private _maxKey: number;

    public get Count() {
        return this._keyList.length;
    }

    constructor() {
        this._keyList = [];
        this._valueList = [];
        this._minKey = 99999;
        this._maxKey = -99999;
    }

    public SetKey(progress: number, value: Laya.Quaternion) {
        var searchIndex = 0;
        var isReplace = false;
        for (; searchIndex < this._keyList.length; ++searchIndex) {
            var keyValue = this._keyList[searchIndex];
            if (keyValue == progress) {
                isReplace = true;
                break;
            }
            if (keyValue > progress) {
                break;
            }
        }

        // 增加新元素
        var finalIndex = searchIndex;
        if (finalIndex < 0) {
            this._keyList[0] = progress;
            this._valueList[0] = value;
        } else {
            if (isReplace) {
                this._keyList[finalIndex] = progress;
                this._valueList[finalIndex] = value;
            } else {
                this._keyList.splice(finalIndex, 0, progress);
                this._valueList.splice(finalIndex, 0, value);
            }
        }

        if (progress < this._minKey) {
            this._minKey = progress;
        }
        if (progress > this._maxKey) {
            this._maxKey = progress;
        }
    }

    public Evaluate(progress: number, searchIndex: number): Laya.Quaternion {
        if (this._keyList.length < 2) {
            console.error(this);
            console.error("数据长度不足,无法进行插值");
            return Laya.Quaternion.DEFAULT;
        }
        if (progress < this._minKey) return this._valueList[0];
        if (progress > this._maxKey) return this._valueList[this._valueList.length - 1];
        var preIndex = searchIndex > 0 ? searchIndex : 0;
        var behindIndex = preIndex + 1;
        for (; behindIndex < this._keyList.length; ++behindIndex, ++preIndex) {
            var preProgress = this._keyList[preIndex];
            if (preProgress == progress) {
                return this._valueList[preIndex];
            }
            var behindProgress = this._keyList[behindIndex];
            if (behindProgress == progress) {
                return this._valueList[behindIndex];
            }
            if (this._keyList[preIndex] < progress && this._keyList[behindIndex] > progress) {
                var lerpProgress = (progress - preProgress) / (behindProgress - preProgress);
                return QuaternionEx.Lerp(this._valueList[preIndex], this._valueList[behindIndex], lerpProgress);
            }
        }

        console.error(this);
        console.error("插值失败progress:" + progress);
        return Laya.Quaternion.DEFAULT;
    }

}