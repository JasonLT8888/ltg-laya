export class AABB {

    public elements: Float32Array;
    public AABB: true;

    constructor(minX?: number, maxX?: number, minY?: number, maxY?: number, minZ?: number, maxZ?: number) {
        this.elements = new Float32Array(6);
        var te = this.elements;

        te[0] = minX || 0; te[1] = minY || 0; te[2] = minZ || 0;
        te[3] = maxX || 0; te[4] = maxY || 0; te[5] = maxZ || 0;
    }

    set(minX: number, maxX: number, minY: number, maxY: number, minZ: number, maxZ: number) {
        let te = this.elements;
        te[0] = minX;
        te[3] = maxX;
        te[1] = minY;
        te[4] = maxY;
        te[2] = minZ;
        te[5] = maxZ;
        return this;
    }

    intersectTest(aabb: AABB) {
        let te = this.elements;
        let ue = aabb.elements;
        return te[0] > ue[3] || te[1] > ue[4] || te[2] > ue[5] || te[3] < ue[0] || te[4] < ue[1] || te[5] < ue[2];
    }

    intersectTestTwo(aabb: AABB) {
        let te = this.elements;
        let ue = aabb.elements;
        return te[0] < ue[0] || te[1] < ue[1] || te[2] < ue[2] || te[3] > ue[3] || te[4] > ue[4] || te[5] > ue[5] ? true : false;
    }

    copy(aabb: AABB, margin: number): AABB {
        let m = margin || 0;
        let me = aabb.elements;
        this.set(me[0] - m, me[3] + m, me[1] - m, me[4] + m, me[2] - m, me[5] + m);
        return this;
    }

    fromArray(array: ArrayLike<number>): AABB {
        this.elements.set(array);
        return this;
    }

    clone(): AABB {
        return new AABB().fromArray(this.elements);
    }

    combine(aabb1: AABB, aabb2: AABB): AABB {
        let a = aabb1.elements;
        let b = aabb2.elements;
        let te = this.elements;

        te[0] = a[0] < b[0] ? a[0] : b[0];
        te[1] = a[1] < b[1] ? a[1] : b[1];
        te[2] = a[2] < b[2] ? a[2] : b[2];

        te[3] = a[3] > b[3] ? a[3] : b[3];
        te[4] = a[4] > b[4] ? a[4] : b[4];
        te[5] = a[5] > b[5] ? a[5] : b[5];

        return this;
    }

    surfaceArea(): number {
        let te = this.elements;
        let a = te[3] - te[0];
        let h = te[4] - te[1];
        let d = te[5] - te[2];
        return 2 * (a * (h + d) + h * d);
    }

    intersectsWithPoint(x: number, y: number, z: number): boolean {
        let te = this.elements;
        return x >= te[0] && x <= te[3] && y >= te[1] && y <= te[4] && z >= te[2] && z <= te[5];
    }

    makeEmpty() {
        this.set(-Infinity, -Infinity, -Infinity, Infinity, Infinity, Infinity);
    }

    expandByPoint(pt) {
        let te = this.elements;
        this.set(
            Math.min(te[0], pt.x), Math.min(te[1], pt.y), Math.min(te[2], pt.z),
            Math.max(te[3], pt.x), Math.max(te[4], pt.y), Math.max(te[5], pt.z)
        );
    }

    setFromPoints(arr: ArrayLike<number>) {
        this.makeEmpty();
        for (var i = 0; i < arr.length; i++) {
            this.expandByPoint(arr[i]);
        }
    }

}