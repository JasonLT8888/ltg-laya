import { Shape } from "../../shape/Shape";
import { ContactManifold } from "../../constraint/contact/ContactManifold";

export class CollisionDetector {
    CollisionDetector: true;

    flip: boolean;

    constructor() {
        this.flip = false;
    }

    detectCollision(shape1: Shape, shape2: Shape, manifold: ContactManifold) {

        console.error("CollisionDetector", "Inheritance error.");

    }

}