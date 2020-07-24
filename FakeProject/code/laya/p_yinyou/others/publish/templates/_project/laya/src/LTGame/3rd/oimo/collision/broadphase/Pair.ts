import { Shape } from "../../shape/Shape";

export class Pair {
    shape1: Shape;
    shape2: Shape;

    constructor(s1: Shape, s2: Shape) {
        // The first shape.
        this.shape1 = s1 || null;
        // The second shape.
        this.shape2 = s2 || null;
    }

}