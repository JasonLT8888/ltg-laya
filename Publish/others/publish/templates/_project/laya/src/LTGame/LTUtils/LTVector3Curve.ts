import LTSimpleCurve from "./LTSimpleCurve";

export default class LTVectro3Curve {

    private _xCurve: LTSimpleCurve;
    private _yCurve: LTSimpleCurve;
    private _zCurve: LTSimpleCurve;

    public get xCurve(): LTSimpleCurve {
        return this._xCurve;
    }

    public get yCurve(): LTSimpleCurve {
        return this._yCurve;
    }

    public get zCurve(): LTSimpleCurve {
        return this._zCurve;
    }

    public get Count() {
        return this._xCurve.Count;
    }

    constructor() {
        this._xCurve = new LTSimpleCurve();
        this._yCurve = new LTSimpleCurve();
        this._zCurve = new LTSimpleCurve();
    }

    public SetKey(progress: number, value: Laya.Vector3) {
        this._xCurve.SetKey(progress, value.x);
        this._yCurve.SetKey(progress, value.y);
        this._zCurve.SetKey(progress, value.z);
    }

    public Evaluate(progress: number, searchIndex: number): [number, Laya.Vector3] {
        var xV = this._xCurve.Evaluate(progress, searchIndex);
        return [xV[0], new Laya.Vector3(
            xV[1],
            this._yCurve.Evaluate(progress, searchIndex)[1],
            this._zCurve.Evaluate(progress, searchIndex)[1]
        )];
    }
}