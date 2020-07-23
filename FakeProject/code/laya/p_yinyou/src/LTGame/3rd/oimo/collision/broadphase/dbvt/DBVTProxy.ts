import { Shape } from "../../../shape/Shape";
import { DBVTNode } from "./DBVTNode";
import { Proxy } from "../Proxy";

export class DBVTProxy extends Proxy {
    leaf: DBVTNode;

    constructor(shape: Shape) {
        super(shape);
        // The leaf of the proxy.
        this.leaf = new DBVTNode();
        this.leaf.proxy = this;
    }

}