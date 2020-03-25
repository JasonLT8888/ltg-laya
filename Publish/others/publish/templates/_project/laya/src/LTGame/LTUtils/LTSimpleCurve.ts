import MathEx from "./MathEx";

export default class LTSimpleCurve {

    private _keyList: number[];
    private _valueList: number[];

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

    public SetKey(progress: number, value: number) {
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

    public Evaluate(progress: number, initIndex: number): number[] {
        if (this._keyList.length < 2) {
            console.error(this);
            console.error("数据长度不足,无法进行插值");
            return [0, 0];
        }
        if (progress < this._minKey) return [0, this._valueList[0]];
        if (progress > this._maxKey) return [this._keyList.length - 2, this._valueList[this._valueList.length - 1]];
        var preIndex = initIndex > 1 ? initIndex - 1 : 0;
        var behindIndex = preIndex + 1;
        for (; behindIndex < this._keyList.length; ++behindIndex, ++preIndex) {
            var preProgress = this._keyList[preIndex];
            if (preProgress == progress) {
                return [preIndex - 1, this._valueList[preIndex]];
            }
            var behindProgress = this._keyList[behindIndex];
            if (behindProgress == progress) {
                return [preIndex, this._valueList[behindIndex]];
            }
            if (this._keyList[preIndex] < progress && this._keyList[behindIndex] > progress) {
                var lerpProgress = (progress - preProgress) / (behindProgress - preProgress);
                return [preIndex - 1, MathEx.Lerp(this._valueList[preIndex], this._valueList[behindIndex], lerpProgress)];
            }
        }

        console.error(this);
        console.error("插值失败progress:" + progress);
        return [0, 0];
    }

}