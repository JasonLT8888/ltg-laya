import { Shape } from "./Shape";
import { ShapeConfig } from "./ShapeConfig";
import { SHAPE_BOX, AABB_PROX } from "../constants";
import { MassInfo } from "./MassInfo";

export class Box extends Shape {

    width: number;
    height: number;
    depth: number;
    halfWidth: number;
    halfHeight: number;
    halfDepth: number;
    dimentions: Float32Array;
    elements: Float32Array;
    constructor(config: ShapeConfig, width: number, height: number, depth: number) {
        super(config);
        this.type = SHAPE_BOX;
        this.width = width;
        this.height = height;
        this.depth = depth;

        this.halfWidth = width * 0.5;
        this.halfHeight = height * 0.5;
        this.halfDepth = depth * 0.5;

        this.dimentions = new Float32Array(18);
        this.elements = new Float32Array(24);
    }

    calculateMassInfo(out: MassInfo) {

        let mass = this.width * this.height * this.depth * this.density;
        let divid = 1 / 12;
        out.mass = mass;
        out.inertia.set(
            mass * (this.height * this.height + this.depth * this.depth) * divid, 0, 0,
            0, mass * (this.width * this.width + this.depth * this.depth) * divid, 0,
            0, 0, mass * (this.width * this.width + this.height * this.height) * divid
        );

    }

    updateProxy() {

        let te = this.rotation.elements;
        let di = this.dimentions;
        // Width
        di[0] = te[0];
        di[1] = te[3];
        di[2] = te[6];
        // Height
        di[3] = te[1];
        di[4] = te[4];
        di[5] = te[7];
        // Depth
        di[6] = te[2];
        di[7] = te[5];
        di[8] = te[8];
        // half Width
        di[9] = te[0] * this.halfWidth;
        di[10] = te[3] * this.halfWidth;
        di[11] = te[6] * this.halfWidth;
        // half Height
        di[12] = te[1] * this.halfHeight;
        di[13] = te[4] * this.halfHeight;
        di[14] = te[7] * this.halfHeight;
        // half Depth
        di[15] = te[2] * this.halfDepth;
        di[16] = te[5] * this.halfDepth;
        di[17] = te[8] * this.halfDepth;

        let wx = di[9];
        let wy = di[10];
        let wz = di[11];
        let hx = di[12];
        let hy = di[13];
        let hz = di[14];
        let dx = di[15];
        let dy = di[16];
        let dz = di[17];

        let x = this.position.x;
        let y = this.position.y;
        let z = this.position.z;

        let v = this.elements;
        //v1
        v[0] = x + wx + hx + dx;
        v[1] = y + wy + hy + dy;
        v[2] = z + wz + hz + dz;
        //v2
        v[3] = x + wx + hx - dx;
        v[4] = y + wy + hy - dy;
        v[5] = z + wz + hz - dz;
        //v3
        v[6] = x + wx - hx + dx;
        v[7] = y + wy - hy + dy;
        v[8] = z + wz - hz + dz;
        //v4
        v[9] = x + wx - hx - dx;
        v[10] = y + wy - hy - dy;
        v[11] = z + wz - hz - dz;
        //v5
        v[12] = x - wx + hx + dx;
        v[13] = y - wy + hy + dy;
        v[14] = z - wz + hz + dz;
        //v6
        v[15] = x - wx + hx - dx;
        v[16] = y - wy + hy - dy;
        v[17] = z - wz + hz - dz;
        //v7
        v[18] = x - wx - hx + dx;
        v[19] = y - wy - hy + dy;
        v[20] = z - wz - hz + dz;
        //v8
        v[21] = x - wx - hx - dx;
        v[22] = y - wy - hy - dy;
        v[23] = z - wz - hz - dz;

        let w = di[9] < 0 ? -di[9] : di[9];
        let h = di[10] < 0 ? -di[10] : di[10];
        let d = di[11] < 0 ? -di[11] : di[11];

        w = di[12] < 0 ? w - di[12] : w + di[12];
        h = di[13] < 0 ? h - di[13] : h + di[13];
        d = di[14] < 0 ? d - di[14] : d + di[14];

        w = di[15] < 0 ? w - di[15] : w + di[15];
        h = di[16] < 0 ? h - di[16] : h + di[16];
        d = di[17] < 0 ? d - di[17] : d + di[17];

        let p = AABB_PROX;

        this.aabb.set(
            this.position.x - w - p, this.position.x + w + p,
            this.position.y - h - p, this.position.y + h + p,
            this.position.z - d - p, this.position.z + d + p
        );

        if (this.proxy != null) this.proxy.update();

    }

}