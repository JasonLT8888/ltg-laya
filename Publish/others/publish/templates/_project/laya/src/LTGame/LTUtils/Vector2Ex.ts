import MathEx from "./MathEx";

export default class Vector2Ex {

    public static get up(): Laya.Vector2 { return new Laya.Vector2(0, 1); }

    public static Dot(left: Laya.Vector2, right: Laya.Vector2): number {
        return left.x * right.x + left.y * right.y;
    }

    public static Angle(from: Laya.Vector2, to: Laya.Vector2): number {
        let num = Math.sqrt((this.MagnitudeSqrt(from) * this.MagnitudeSqrt(to)));
        let flag = num < 1E-15;
        if (flag) {
            return 0;
        }
        else {
            let num2 = MathEx.Clamp(this.Dot(from, to) / num, -1, 1);
            return Math.acos(num2) * MathEx.Rad2Deg;
        }
    }

    public static SignedAngle(from: Laya.Vector2, to: Laya.Vector2): number {
        let num = this.Angle(from, to);
        let num2 = MathEx.Sign(from.x * to.y - from.y * to.x);
        return num * num2;
    }

    public static MagnitudeSqrt(vec: Laya.Vector2): number {
        return vec.x * vec.x + vec.y * vec.y;
    }

}