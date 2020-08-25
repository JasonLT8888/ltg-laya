import { Vec3 } from "../math/Vec3";
import { Quat } from "../math/Quat";
import { BODY_NULL, BODY_STATIC, BODY_DYNAMIC } from "../constants";
import { MassInfo } from "../shape/MassInfo";
import { Mat33 } from "../math/Mat33";
import { _Math } from "../math/_Math";
import { World } from "./World";
import { Shape } from "../shape/Shape";

export class RigidBody {

    position: Vec3;
    orientation: Quat;
    scale: number;
    invScale: number;
    mesh: any;
    id: number;
    name: string;
    prev: any;
    next: any;
    type: number;
    massInfo: MassInfo;
    newPosition: Vec3;
    controlPos: boolean;
    newOrientation: Quat;
    newRotation: Vec3;
    currentRotation: Vec3;
    controlRot: boolean;
    controlRotInTime: boolean;
    quaternion: Quat;
    pos: Vec3;
    linearVelocity: Vec3;
    angularVelocity: Vec3;
    parent: World;
    contactLink: any;
    numContacts: number;
    shapes: any;
    numShapes: number;
    jointLink: any;
    numJoints: number;
    sleepPosition: Vec3;
    sleepOrientation: Quat;
    isStatic: boolean;
    isDynamic: boolean;
    isKinematic: boolean;
    rotation: Mat33;
    mass: number;
    inverseMass: number;
    inverseInertia: Mat33;
    localInertia: Mat33;
    inverseLocalInertia: Mat33;
    tmpInertia: Mat33;
    addedToIsland: boolean;
    allowSleep: boolean;
    sleepTime: number;
    sleeping: boolean;


    constructor(position: Vec3, rotation: Quat) {
        this.position = position || new Vec3();
        this.orientation = rotation || new Quat();

        this.scale = 1;
        this.invScale = 1;

        // possible link to three Mesh;
        this.mesh = null;

        this.id = NaN;
        this.name = "";
        // The maximum number of shapes that can be added to a one rigid.
        //this.MAX_SHAPES = 64;//64;

        this.prev = null;
        this.next = null;

        // I represent the kind of rigid body.
        // Please do not change from the outside this variable.
        // If you want to change the type of rigid body, always
        // Please specify the type you want to set the arguments of setupMass method.
        this.type = BODY_NULL;

        this.massInfo = new MassInfo();

        this.newPosition = new Vec3();
        this.controlPos = false;
        this.newOrientation = new Quat();
        this.newRotation = new Vec3();
        this.currentRotation = new Vec3();
        this.controlRot = false;
        this.controlRotInTime = false;

        this.quaternion = new Quat();
        this.pos = new Vec3();



        // Is the translational velocity.
        this.linearVelocity = new Vec3();
        // Is the angular velocity.
        this.angularVelocity = new Vec3();

        //--------------------------------------------
        //  Please do not change from the outside this variables.
        //--------------------------------------------

        // It is a world that rigid body has been added.
        this.parent = null;
        this.contactLink = null;
        this.numContacts = 0;

        // An array of shapes that are included in the rigid body.
        this.shapes = null;
        // The number of shapes that are included in the rigid body.
        this.numShapes = 0;

        // It is the link array of joint that is connected to the rigid body.
        this.jointLink = null;
        // The number of joints that are connected to the rigid body.
        this.numJoints = 0;

        // It is the world coordinate of the center of gravity in the sleep just before.
        this.sleepPosition = new Vec3();
        // It is a quaternion that represents the attitude of sleep just before.
        this.sleepOrientation = new Quat();
        // I will show this rigid body to determine whether it is a rigid body static.
        this.isStatic = false;
        // I indicates that this rigid body to determine whether it is a rigid body dynamic.
        this.isDynamic = false;

        this.isKinematic = false;

        // It is a rotation matrix representing the orientation.
        this.rotation = new Mat33();

        //--------------------------------------------
        // It will be recalculated automatically from the shape, which is included.
        //--------------------------------------------

        // This is the weight.
        this.mass = 0;
        // It is the reciprocal of the mass.
        this.inverseMass = 0;
        // It is the inverse of the inertia tensor in the world system.
        this.inverseInertia = new Mat33();
        // It is the inertia tensor in the initial state.
        this.localInertia = new Mat33();
        // It is the inverse of the inertia tensor in the initial state.
        this.inverseLocalInertia = new Mat33();

        this.tmpInertia = new Mat33();


        // I indicates rigid body whether it has been added to the simulation Island.
        this.addedToIsland = false;
        // It shows how to sleep rigid body.
        this.allowSleep = true;
        // This is the time from when the rigid body at rest.
        this.sleepTime = 0;
        // I shows rigid body to determine whether it is a sleep state.
        this.sleeping = false;
    }

    setParent(world: World) {

        this.parent = world;
        this.scale = this.parent.scale;
        this.invScale = this.parent.invScale;
        this.id = this.parent.numRigidBodies;
        if (!this.name) this.name = this.id + "";

        this.updateMesh();

    }

    /**
     * I'll add a shape to rigid body.
     * If you add a shape, please call the setupMass method to step up to the start of the next.
     * @param   shape shape to Add
     */
    addShape(shape: Shape) {

        if (shape.parent) {
            console.error("RigidBody", "It is not possible that you add a shape which already has an associated body.");
        }

        if (this.shapes != null) (this.shapes.prev = shape).next = this.shapes;
        this.shapes = shape;
        shape.parent = this;
        if (this.parent) this.parent.addShape(shape);
        this.numShapes++;

    }
    /**
     * I will delete the shape from the rigid body.
     * If you delete a shape, please call the setupMass method to step up to the start of the next.
     * @param shape {Shape} to delete
     * @return void
     */
    removeShape(shape: Shape) {

        let remove = shape;
        if (remove.parent != this) return;
        let prev = remove.prev;
        let next = remove.next;
        if (prev != null) prev.next = next;
        if (next != null) next.prev = prev;
        if (this.shapes == remove) this.shapes = next;
        remove.prev = null;
        remove.next = null;
        remove.parent = null;
        if (this.parent) this.parent.removeShape(remove);
        this.numShapes--;

    }

    remove() {
        this.dispose();
    }

    dispose() {
        this.parent.removeRigidBody(this);
    }

    checkContact(name: string): boolean {

        return this.parent.checkContact(this.name, name);

    }

    /**
     * Calulates mass datas(center of gravity, mass, moment inertia, etc...).
     * If the parameter type is set to BODY_STATIC, the rigid body will be fixed to the space.
     * If the parameter adjustPosition is set to true, the shapes' relative positions and
     * the rigid body's position will be adjusted to the center of gravity.
     * @param type
     * @param adjust
     * @return void
     */
    setupMass(type: number, adjust?: boolean) {

        let adjustPosition = (adjust !== undefined) ? adjust : true;

        this.type = type || BODY_STATIC;
        this.isDynamic = this.type === BODY_DYNAMIC;
        this.isStatic = this.type === BODY_STATIC;

        this.mass = 0;
        this.localInertia.set(0, 0, 0, 0, 0, 0, 0, 0, 0);


        let tmpM = new Mat33();
        let tmpV = new Vec3();

        for (let shape = this.shapes; shape !== null; shape = shape.next) {

            shape.calculateMassInfo(this.massInfo);
            let shapeMass = this.massInfo.mass;
            tmpV.addScaledVector(shape.relativePosition, shapeMass);
            this.mass += shapeMass;
            this.rotateInertia(shape.relativeRotation, this.massInfo.inertia, tmpM);
            this.localInertia.add(tmpM);

            // add offset inertia
            this.localInertia.addOffset(shapeMass, shape.relativePosition);

        }

        this.inverseMass = 1 / this.mass;
        tmpV.scaleEqual(this.inverseMass);

        if (adjustPosition) {
            this.position.add(tmpV);
            for (let shape = this.shapes; shape !== null; shape = shape.next) {
                shape.relativePosition.subEqual(tmpV);
            }

            // subtract offset inertia
            this.localInertia.subOffset(this.mass, tmpV);

        }

        this.inverseLocalInertia.invert(this.localInertia);

        //}

        if (this.type === BODY_STATIC) {
            this.inverseMass = 0;
            this.inverseLocalInertia.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        }

        this.syncShapes();
        this.awake();

    }
    /**
     * Awake the rigid body.
     */
    awake() {

        if (!this.allowSleep || !this.sleeping) return;
        this.sleeping = false;
        this.sleepTime = 0;
        // awake connected constraints
        let cs = this.contactLink;
        while (cs != null) {
            cs.body.sleepTime = 0;
            cs.body.sleeping = false;
            cs = cs.next;
        }
        let js = this.jointLink;
        while (js != null) {
            js.body.sleepTime = 0;
            js.body.sleeping = false;
            js = js.next;
        }
        for (let shape = this.shapes; shape != null; shape = shape.next) {
            shape.updateProxy();
        }

    }
    /**
     * Sleep the rigid body.
     */
    sleep() {

        if (!this.allowSleep || this.sleeping) return;

        this.linearVelocity.set(0, 0, 0);
        this.angularVelocity.set(0, 0, 0);
        this.sleepPosition.copy(this.position);
        this.sleepOrientation.copy(this.orientation);

        this.sleepTime = 0;
        this.sleeping = true;
        for (let shape = this.shapes; shape != null; shape = shape.next) {
            shape.updateProxy();
        }
    }

    testWakeUp() {

        if (this.linearVelocity.testZero()
            || this.angularVelocity.testZero()
            || this.position.testDiff(this.sleepPosition)
            || this.orientation.testDiff(this.sleepOrientation))
            this.awake(); // awake the body

    }

    /**
     * Get whether the rigid body has not any connection with others.
     */
    isLonely(): boolean {
        return this.numJoints == 0 && this.numContacts == 0;
    }

    /**
     * The time integration of the motion of a rigid body, you can update the information such as the shape.
     * This method is invoked automatically when calling the step of the World,
     * There is no need to call from outside usually.
     */

    updatePosition(timeStep: number) {
        switch (this.type) {
            case BODY_STATIC:
                this.linearVelocity.set(0, 0, 0);
                this.angularVelocity.set(0, 0, 0);

                // ONLY FOR TEST
                if (this.controlPos) {
                    this.position.copy(this.newPosition);
                    this.controlPos = false;
                }
                if (this.controlRot) {
                    this.orientation.copy(this.newOrientation);
                    this.controlRot = false;
                }
                /*this.linearVelocity.x=0;
                this.linearVelocity.y=0;
                this.linearVelocity.z=0;
                this.angularVelocity.x=0;
                this.angularVelocity.y=0;
                this.angularVelocity.z=0;*/
                break;
            case BODY_DYNAMIC:

                if (this.isKinematic) {

                    this.linearVelocity.set(0, 0, 0);
                    this.angularVelocity.set(0, 0, 0);

                }

                if (this.controlPos) {

                    this.linearVelocity.subVectors(this.newPosition, this.position).multiplyScalar(1 / timeStep);
                    this.controlPos = false;

                }
                if (this.controlRot) {

                    this.angularVelocity.copy(this.getAxis());
                    this.orientation.copy(this.newOrientation);
                    this.controlRot = false;

                }

                this.position.addScaledVector(this.linearVelocity, timeStep);
                this.orientation.addTime(this.angularVelocity, timeStep);

                this.updateMesh();

                break;
            default:
                console.error("RigidBody", "无效rigbody类型", this.type);
        }

        this.syncShapes();
        this.updateMesh();

    }

    getAxis(): Vec3 {
        return new Vec3(0, 1, 0).applyMatrix3(this.inverseLocalInertia, true).normalize();
    }

    rotateInertia(rot: Mat33, inertia: Mat33, out: Mat33) {

        this.tmpInertia.multiplyMatrices(rot, inertia);
        out.multiplyMatrices(this.tmpInertia, rot, true);

    }

    syncShapes() {

        this.rotation.setQuat(this.orientation);
        this.rotateInertia(this.rotation, this.inverseLocalInertia, this.inverseInertia);

        for (let shape = this.shapes; shape != null; shape = shape.next) {

            shape.position.copy(shape.relativePosition).applyMatrix3(this.rotation, true).add(this.position);
            // add by QuaziKb
            shape.rotation.multiplyMatrices(this.rotation, shape.relativeRotation);
            shape.updateProxy();
        }
    }


    /**
     * APPLY IMPULSE FORCE
     * @param position 
     * @param force 
     */
    applyImpulse(position: Vec3, force: Vec3) {
        this.linearVelocity.addScaledVector(force, this.inverseMass);
        let rel = new Vec3().copy(position).sub(this.position).cross(force).applyMatrix3(this.inverseInertia, true);
        this.angularVelocity.add(rel);
    }

    setPosition(pos: Vec3) {
        this.newPosition.copy(pos).multiplyScalar(this.invScale);
        this.controlPos = true;
        if (!this.isKinematic) this.isKinematic = true;
    }

    setQuaternion(q: Quat) {
        this.newOrientation.set(q.x, q.y, q.z, q.w);
        this.controlRot = true;
        if (!this.isKinematic) this.isKinematic = true;
    }

    setRotation(rot: Vec3) {

        this.newOrientation = new Quat().setFromEuler(rot.x * _Math.degtorad, rot.y * _Math.degtorad, rot.z * _Math.degtorad);//this.rotationVectToQuad( rot );
        this.controlRot = true;

    }

    //---------------------------------------------
    // RESET DYNAMIQUE POSITION AND ROTATION
    //---------------------------------------------

    resetPosition(x: number, y: number, z: number) {

        this.linearVelocity.set(0, 0, 0);
        this.angularVelocity.set(0, 0, 0);
        this.position.set(x, y, z).multiplyScalar(this.invScale);
        //this.position.set( x*OIMO.WorldScale.invScale, y*OIMO.WorldScale.invScale, z*OIMO.WorldScale.invScale );
        this.awake();
    }

    resetQuaternion(q: Quat) {

        this.angularVelocity.set(0, 0, 0);
        this.orientation = new Quat(q.x, q.y, q.z, q.w);
        this.awake();

    }

    resetRotation(x: number, y: number, z: number) {

        this.angularVelocity.set(0, 0, 0);
        this.orientation = new Quat().setFromEuler(x * _Math.degtorad, y * _Math.degtorad, z * _Math.degtorad);//this.rotationVectToQuad( new Vec3(x,y,z) );
        this.awake();

    }

    //---------------------------------------------
    // GET POSITION AND ROTATION
    //---------------------------------------------

    getPosition() {

        return this.pos;

    }

    getQuaternion() {

        return this.quaternion;

    }

    //---------------------------------------------
    // AUTO UPDATE THREE MESH
    //---------------------------------------------

    connectMesh(mesh) {

        this.mesh = mesh;
        this.updateMesh();

    }

    updateMesh() {

        this.pos.scale(this.position, this.scale);
        this.quaternion.copy(this.orientation);

        if (this.mesh === null) return;

        this.mesh.position.copy(this.getPosition());
        this.mesh.quaternion.copy(this.getQuaternion());

    }

}