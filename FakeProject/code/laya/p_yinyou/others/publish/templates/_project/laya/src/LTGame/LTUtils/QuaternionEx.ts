import MathEx from "./MathEx";
import Vector3Ex from "./Vector3Ex";

export default class QuaternionEx {

    public static get identify(): Laya.Quaternion { return QuaternionEx.FromEulerAngle(0, 0, 0); }

    static cacheVec0: Laya.Quaternion = new Laya.Quaternion();

    public static FromVector3(elurAngle: Laya.Vector3) {
        return this.FromEulerAngle(elurAngle.x, elurAngle.y, elurAngle.z);
    }

    private static _angleToRandin = 180 / Math.PI;
    public static ToEulerAngle(q: Laya.Quaternion): Laya.Vector3 {
        var eulerE = new Laya.Vector3();
        q.getYawPitchRoll(eulerE);
        var rotationEulerE = new Laya.Vector3();
        rotationEulerE.x = eulerE.y * QuaternionEx._angleToRandin;
        rotationEulerE.y = eulerE.x * QuaternionEx._angleToRandin;
        rotationEulerE.z = eulerE.z * QuaternionEx._angleToRandin;
        return rotationEulerE;
    }

    public static WrapFromUnity(x: number, y: number, z: number, w: number): Laya.Quaternion {
        return new Laya.Quaternion(-x, y, z, -w);
    }

    public static ConvertFromUnity(q: Laya.Quaternion): Laya.Quaternion {
        return new Laya.Quaternion(-q.x, q.y, q.z, -q.w);
    }

    public static Euler(x: number, y: number, z: number): Laya.Quaternion {
        return this.FromEulerAngle(x, y, z);
    }

    public static EulerAngleTo(x: number, y: number, z: number, to: Laya.Quaternion) {
        var eulerX = x / 2 * MathEx.Deg2Rad;
        var cX = Math.cos(eulerX);
        var sX = Math.sin(eulerX);
        var eulerY = y / 2 * MathEx.Deg2Rad;
        var cY = Math.cos(eulerY);
        var sY = Math.sin(eulerY);
        var eulerZ = z / 2 * MathEx.Deg2Rad;
        var cZ = Math.cos(eulerZ);
        var sZ = Math.sin(eulerZ);

        var ix = sX * cY * cZ - cX * sY * sZ;
        var iy = cX * sY * cZ + sX * cY * sZ;
        var iz = cX * cY * sZ - sX * sY * cZ;
        var iw = cX * cY * cZ + sX * sY * sZ;
        
        to.x = ix;
        to.y = iy;
        to.z = iz;
        to.w = iw;
    }

    public static FromEulerAngle(x: number, y: number, z: number): Laya.Quaternion {
        var eulerX = x / 2 * MathEx.Deg2Rad;
        var cX = Math.cos(eulerX);
        var sX = Math.sin(eulerX);
        var eulerY = y / 2 * MathEx.Deg2Rad;
        var cY = Math.cos(eulerY);
        var sY = Math.sin(eulerY);
        var eulerZ = z / 2 * MathEx.Deg2Rad;
        var cZ = Math.cos(eulerZ);
        var sZ = Math.sin(eulerZ);

        var ix = sX * cY * cZ - cX * sY * sZ;
        var iy = cX * sY * cZ + sX * cY * sZ;
        var iz = cX * cY * sZ - sX * sY * cZ;
        var iw = cX * cY * cZ + sX * sY * sZ;
        var q = new Laya.Quaternion(ix, iy, iz, iw);

        return q;
    }

    public static MultiplyQ(r1: Laya.Quaternion, r2: Laya.Quaternion): Laya.Quaternion {
        var result = Laya.Quaternion.DEFAULT;
        Laya.Quaternion.multiply(r1, r2, result);
        return result;
    }

    public static Copy(src: Laya.Quaternion): Laya.Quaternion {
        return new Laya.Quaternion(src.x, src.y, src.z, src.w);
    }

    public static MultiplyTo(r: Laya.Quaternion, v: Laya.Vector3, to: Laya.Vector3) {
        let x = r.x + r.x;
        let y = r.y + r.y;
        let z = r.z + r.z;
        let xx = r.x * x;
        let yy = r.y * y;
        let zz = r.z * z;
        let xy = r.x * y;
        let xz = r.x * z;
        let yz = r.y * z;
        let wx = r.w * x;
        let wy = r.w * y;
        let wz = r.w * z;

        let res = to;
        res.x = (((1 - (yy + zz)) * v.x
            + (xy - wz) * v.y
            + (xz + wy) * v.z));

        res.y = (((xy + wz) * v.x
            + (1 - (xx + zz)) * v.y
            + (yz - wx) * v.z));

        res.z = (((xz - wy) * v.x
            + (yz + wx) * v.y
            + (1 - (xx + yy)) * v.z));
    }

    public static Multiply(r: Laya.Quaternion, v: Laya.Vector3): Laya.Vector3 {
        let to = new Laya.Vector3();
        this.MultiplyTo(r, v, to);
        return to;
    }

    public static Lerp(from: Laya.Quaternion, to: Laya.Quaternion, value: number): Laya.Quaternion {
        var q = Laya.Quaternion.DEFAULT;
        Laya.Quaternion.lerp(from, to, value, q);
        return q;
    }

}