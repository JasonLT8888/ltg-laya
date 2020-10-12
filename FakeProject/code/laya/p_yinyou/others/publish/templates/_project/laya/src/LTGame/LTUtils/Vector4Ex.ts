import MathEx from "./MathEx";

export class Vector4Ex {

    static cacheVec0: Laya.Vector4 = new Laya.Vector4();

    static Lerp(from: Laya.Vector4, to: Laya.Vector4, p: number, out: Laya.Vector4): Laya.Vector4 {
        if (!out) {
            out = new Laya.Vector4();
        }
        out.setValue(MathEx.Lerp(from.x, to.x, p),
            MathEx.Lerp(from.y, to.y, p),
            MathEx.Lerp(from.z, to.z, p),
            MathEx.Lerp(from.w, to.w, p));
        return out;
    }

}