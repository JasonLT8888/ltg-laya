import { Shape } from "../../shape/Shape";
import { AABB } from "../../math/AABB";

var count = 0;
function ProxyIdCount() { return count++; }

export class Proxy {
    Proxy: true;

    shape: Shape;
    aabb: AABB;
    id: number;

    constructor(shape: Shape) {
        //The parent shape.
        this.shape = shape;

        //The axis-aligned bounding box.
        this.aabb = shape.aabb;

        this.id = ProxyIdCount();

    }

    update() {
    }

}