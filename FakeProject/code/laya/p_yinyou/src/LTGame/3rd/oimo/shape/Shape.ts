import { SHAPE_NULL } from "../constants";
import { Vec3 } from "../math/Vec3";
import { Mat33 } from "../math/Mat33";
import { AABB } from "../math/AABB";
import { ShapeConfig } from "./ShapeConfig";
import { MassInfo } from "./MassInfo";
import { ContactLink } from "../constraint/contact/ContactLink";

var count = 0;
function ShapeIdCount() { return count++; }

export class Shape {

    public type = SHAPE_NULL;
    /**
     * global identification of the shape should be unique to the shape.
     */
    public id = ShapeIdCount();

    /**
     * previous shape in parent rigid body. Used for fast interations.
     */
    prev;
    /**
     * next shape in parent rigid body. Used for fast interations.
     */
    next;
    /**
     * proxy of the shape used for broad-phase collision detection.
     */
    proxy;
    /**
     * parent rigid body of the shape.
     */
    parent;
    /**
     * linked list of the contacts with the shape.
     */
    contactLink: ContactLink;
    /**
     * number of the contacts with the shape.
     */
    numContacts: number;
    /**
     * center of gravity of the shape in world coordinate system.
     */
    position: Vec3;
    /**
     * rotation matrix of the shape in world coordinate system.
     */
    rotation: Mat33;
    /**
     * position of the shape in parent's coordinate system.
     */
    relativePosition: Vec3;
    /**
     * rotation matrix of the shape in parent's coordinate system.
     */
    relativeRotation: Mat33;
    /**
     * axis-aligned bounding box of the shape.
     */
    aabb: AABB;
    /**
     * density of the shape.
     */
    density: number;
    /**
     * coefficient of friction of the shape.
     */
    friction: number;
    /**
     * coefficient of restitution of the shape.
     */
    restitution: number;
    /**
     * bits of the collision groups to which the shape belongs.
     */
    belongsTo: number;
    /**
     * bits of the collision groups with which the shape collides.
     */
    collidesWith: number;

    constructor(config: ShapeConfig) {

        this.type = SHAPE_NULL;

        // global identification of the shape should be unique to the shape.
        this.id = ShapeIdCount();

        // previous shape in parent rigid body. Used for fast interations.
        this.prev = null;

        // next shape in parent rigid body. Used for fast interations.
        this.next = null;

        // proxy of the shape used for broad-phase collision detection.
        this.proxy = null;

        // parent rigid body of the shape.
        this.parent = null;

        // linked list of the contacts with the shape.
        this.contactLink = null;

        // number of the contacts with the shape.
        this.numContacts = 0;

        // center of gravity of the shape in world coordinate system.
        this.position = new Vec3();

        // rotation matrix of the shape in world coordinate system.
        this.rotation = new Mat33();

        // position of the shape in parent's coordinate system.
        this.relativePosition = new Vec3().copy(config.relativePosition);

        // rotation matrix of the shape in parent's coordinate system.
        this.relativeRotation = new Mat33().copy(config.relativeRotation);

        // axis-aligned bounding box of the shape.
        this.aabb = new AABB();

        // density of the shape.
        this.density = config.density;

        // coefficient of friction of the shape.
        this.friction = config.friction;

        // coefficient of restitution of the shape.
        this.restitution = config.restitution;

        // bits of the collision groups to which the shape belongs.
        this.belongsTo = config.belongsTo;

        // bits of the collision groups with which the shape collides.
        this.collidesWith = config.collidesWith;

    }

    calculateMassInfo(out: MassInfo) {

        console.error("Shape", "Inheritance error.");

    }

    updateProxy() {
        console.error("Shape", "Inheritance error.");
    }


}