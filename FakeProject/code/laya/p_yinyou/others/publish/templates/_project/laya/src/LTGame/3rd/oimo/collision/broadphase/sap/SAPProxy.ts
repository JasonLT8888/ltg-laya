import { Shape } from "../../../shape/Shape";
import { SAPElement } from "./SAPElement";
import { Proxy } from "../Proxy";
export class SAPProxy extends Proxy {
    belongsTo: number;
    max: any[];
    min: any[];
    sap: any;

    constructor(sap, shape: Shape) {
        super(shape);
        // Type of the axis to which the proxy belongs to. [0:none, 1:dynamic, 2:static]
        this.belongsTo = 0;
        // The maximum elements on each axis.
        this.max = [];
        // The minimum elements on each axis.
        this.min = [];

        this.sap = sap;
        this.min[0] = new SAPElement(this, false);
        this.max[0] = new SAPElement(this, true);
        this.min[1] = new SAPElement(this, false);
        this.max[1] = new SAPElement(this, true);
        this.min[2] = new SAPElement(this, false);
        this.max[2] = new SAPElement(this, true);
        this.max[0].pair = this.min[0];
        this.max[1].pair = this.min[1];
        this.max[2].pair = this.min[2];
        this.min[0].min1 = this.min[1];
        this.min[0].max1 = this.max[1];
        this.min[0].min2 = this.min[2];
        this.min[0].max2 = this.max[2];
        this.min[1].min1 = this.min[0];
        this.min[1].max1 = this.max[0];
        this.min[1].min2 = this.min[2];
        this.min[1].max2 = this.max[2];
        this.min[2].min1 = this.min[0];
        this.min[2].max1 = this.max[0];
        this.min[2].min2 = this.min[1];
        this.min[2].max2 = this.max[1];
    }

}