import { Mat33 } from "./Mat33";
import { Quat } from "./Quat";
import { _Math } from "./_Math";

export class Vec3 {

    Vec3 = true;

    public x: number;
    public y: number;
    public z: number;

    constructor(x?: number, y?: number, z?: number) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }

    set(x: number, y: number, z: number): Vec3 {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }

    addVectors(a: Vec3, b: Vec3): Vec3 {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        this.z = a.z + b.z;
        return this;
    }

    add(a: Vec3, b?: Vec3): Vec3 {
        if (b !== undefined) return this.addVectors(a, b);
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;
        return this;
    }

    addEqual(v: Vec3): Vec3 {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }

    subVectors(a: Vec3, b: Vec3): Vec3 {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        this.z = a.z - b.z;
        return this;
    }

    sub(a: Vec3, b?: Vec3): Vec3 {
        if (b !== undefined) return this.subVectors(a, b);

        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z;
        return this;
    }

    subEqual(v: Vec3): Vec3 {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    }

    scale(v: Vec3, s: number): Vec3 {
        this.x = v.x * s;
        this.y = v.y * s;
        this.z = v.z * s;
        return this;
    }

    scaleEqual(s: number): Vec3 {
        this.x *= s;
        this.y *= s;
        this.z *= s;
        return this;
    }

    multiply(v: Vec3): Vec3 {
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;
        return this;
    }

    addScaledVector(v: Vec3, s: number): Vec3 {
        this.x += v.x * s;
        this.y += v.y * s;
        this.z += v.z * s;

        return this;
    }

    subScaledVector(v: Vec3, s: number): Vec3 {
        this.x -= v.x * s;
        this.y -= v.y * s;
        this.z -= v.z * s;

        return this;
    }

    cross(a: Vec3, b?: Vec3): Vec3 {
        if (b !== undefined) return this.crossVectors(a, b);

        let x = this.x, y = this.y, z = this.z;

        this.x = y * a.z - z * a.y;
        this.y = z * a.x - x * a.z;
        this.z = x * a.y - y * a.x;

        return this;
    }

    angleTo(v: Vec3): number {
        var normalized = this.clone().normalize();
        var normalized2 = v.clone().normalize();
        var num = Math.acos(_Math.Clamp(normalized.dot(normalized2), -1, 1)) * 57.29578;
        return num;
    }

    crossVectors(a: Vec3, b: Vec3): Vec3 {

        let ax = a.x, ay = a.y, az = a.z;
        let bx = b.x, by = b.y, bz = b.z;

        this.x = ay * bz - az * by;
        this.y = az * bx - ax * bz;
        this.z = ax * by - ay * bx;

        return this;

    }

    tangent(a: Vec3): Vec3 {
        let ax = a.x, ay = a.y, az = a.z;

        this.x = ay * ax - az * az;
        this.y = - az * ay - ax * ax;
        this.z = ax * az + ay * ay;

        return this;
    }

    invert(v: Vec3): Vec3 {

        this.x = -v.x;
        this.y = -v.y;
        this.z = -v.z;
        return this;

    }

    negate(): Vec3 {

        this.x = - this.x;
        this.y = - this.y;
        this.z = - this.z;

        return this;
    }

    dot(v: Vec3): number {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }

    addition(): number {

        return this.x + this.y + this.z;

    }

    lengthSq(): number {

        return this.x * this.x + this.y * this.y + this.z * this.z;

    }

    length() {

        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);

    }

    copy(v: Vec3): Vec3 {

        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        return this;

    }

    applyMatrix3(m: Mat33, transpose: boolean): Vec3 {

        //if( transpose ) m = m.clone().transpose();
        let x = this.x, y = this.y, z = this.z;
        let e = m.elements;

        if (transpose) {

            this.x = e[0] * x + e[1] * y + e[2] * z;
            this.y = e[3] * x + e[4] * y + e[5] * z;
            this.z = e[6] * x + e[7] * y + e[8] * z;

        } else {

            this.x = e[0] * x + e[3] * y + e[6] * z;
            this.y = e[1] * x + e[4] * y + e[7] * z;
            this.z = e[2] * x + e[5] * y + e[8] * z;
        }

        return this;

    }

    applyQuaternion(q: Quat): Vec3 {

        let x = this.x;
        let y = this.y;
        let z = this.z;

        let qx = q.x;
        let qy = q.y;
        let qz = q.z;
        let qw = q.w;

        // calculate quat * vector

        let ix = qw * x + qy * z - qz * y;
        let iy = qw * y + qz * x - qx * z;
        let iz = qw * z + qx * y - qy * x;
        let iw = - qx * x - qy * y - qz * z;

        // calculate result * inverse quat

        this.x = ix * qw + iw * - qx + iy * - qz - iz * - qy;
        this.y = iy * qw + iw * - qy + iz * - qx - ix * - qz;
        this.z = iz * qw + iw * - qz + ix * - qy - iy * - qx;

        return this;

    }

    testZero(): boolean {

        if (this.x !== 0 || this.y !== 0 || this.z !== 0) return true;
        else return false;

    }

    testDiff(v: Vec3): boolean {

        return this.equals(v) ? false : true;

    }

    equals(v: Vec3): boolean {

        return v.x === this.x && v.y === this.y && v.z === this.z;

    }

    clone(): Vec3 {

        return new Vec3(this.x, this.y, this.z);

    }

    toString(): string {

        return "Vec3[" + this.x.toFixed(4) + ", " + this.y.toFixed(4) + ", " + this.z.toFixed(4) + "]";

    }

    multiplyScalar(scalar: number): Vec3 {

        if (isFinite(scalar)) {
            this.x *= scalar;
            this.y *= scalar;
            this.z *= scalar;
        } else {
            this.x = 0;
            this.y = 0;
            this.z = 0;
        }

        return this;

    }

    divideScalar(scalar: number): Vec3 {

        return this.multiplyScalar(1 / scalar);

    }

    normalize(): Vec3 {

        return this.divideScalar(this.length());

    }

    toArray(array: Array<number>, offset?: number) {

        if (offset === undefined) offset = 0;

        array[offset] = this.x;
        array[offset + 1] = this.y;
        array[offset + 2] = this.z;

    }

    fromArray(array: Array<number>, offset?: number) {

        if (offset === undefined) offset = 0;

        this.x = array[offset];
        this.y = array[offset + 1];
        this.z = array[offset + 2];
        return this;

    }

}