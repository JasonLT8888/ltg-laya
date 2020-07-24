import { Vec3 } from "../../math/Vec3";

export class ContactPointDataBuffer {
    nor: Vec3;
    tan: Vec3;
    bin: Vec3;
    norU1: Vec3;
    tanU1: Vec3;
    binU1: Vec3;
    norU2: Vec3;
    tanU2: Vec3;
    binU2: Vec3;
    norT1: Vec3;
    tanT1: Vec3;
    binT1: Vec3;
    norT2: Vec3;
    tanT2: Vec3;
    binT2: Vec3;
    norTU1: Vec3;
    tanTU1: Vec3;
    binTU1: Vec3;
    norTU2: Vec3;
    tanTU2: Vec3;
    binTU2: Vec3;
    norImp: number;
    tanImp: number;
    binImp: number;
    norDen: number;
    tanDen: number;
    binDen: number;
    norTar: number;
    next: ContactPointDataBuffer;
    last: boolean;

    constructor() {
        this.nor = new Vec3();
        this.tan = new Vec3();
        this.bin = new Vec3();

        this.norU1 = new Vec3();
        this.tanU1 = new Vec3();
        this.binU1 = new Vec3();

        this.norU2 = new Vec3();
        this.tanU2 = new Vec3();
        this.binU2 = new Vec3();

        this.norT1 = new Vec3();
        this.tanT1 = new Vec3();
        this.binT1 = new Vec3();

        this.norT2 = new Vec3();
        this.tanT2 = new Vec3();
        this.binT2 = new Vec3();

        this.norTU1 = new Vec3();
        this.tanTU1 = new Vec3();
        this.binTU1 = new Vec3();

        this.norTU2 = new Vec3();
        this.tanTU2 = new Vec3();
        this.binTU2 = new Vec3();

        this.norImp = 0;
        this.tanImp = 0;
        this.binImp = 0;

        this.norDen = 0;
        this.tanDen = 0;
        this.binDen = 0;

        this.norTar = 0;

        this.next = null;
        this.last = false;
    }

}