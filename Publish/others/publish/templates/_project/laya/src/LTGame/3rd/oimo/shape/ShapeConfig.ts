import { Vec3 } from "../math/Vec3";
import { Mat33 } from "../math/Mat33";

export class ShapeConfig {

    // position of the shape in parent's coordinate system.
    relativePosition = new Vec3();
    // rotation matrix of the shape in parent's coordinate system.
    relativeRotation = new Mat33();
    // coefficient of friction of the shape.
    friction = 0.2; // 0.4
    // coefficient of restitution of the shape.
    restitution = 0.2;
    // density of the shape.
    density = 1;
    // bits of the collision groups to which the shape belongs.
    belongsTo = 1;
    // bits of the collision groups with which the shape collides.
    collidesWith = 0xffffffff;

}