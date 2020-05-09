import Vector3Ex from "./Vector3Ex";

export class TransformEx {

    static ResetLocalTrans(trans: Laya.Transform3D) {
        trans.localPosition = Vector3Ex.zero;
        trans.localRotationEuler = Vector3Ex.zero;
        trans.localScale = Vector3Ex.one;
    }

}