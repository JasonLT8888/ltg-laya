import { Mat33 } from "../math/Mat33";

export class MassInfo {

    /**
     * Mass of the shape.
     */
    mass: number = 0;

    /**
     * The moment inertia of the shape.
     */
    inertia: Mat33 = new Mat33();

}