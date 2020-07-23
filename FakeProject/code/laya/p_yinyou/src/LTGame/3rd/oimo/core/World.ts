import { Shape } from "../shape/Shape";
import { RigidBody } from "./RigidBody";
import { BruteForceBroadPhase } from "../collision/broadphase/BruteForceBroadPhase";
import { SAPBroadPhase } from "../collision/broadphase/sap/SAPBroadPhase";
import { DBVTBroadPhase } from "../collision/broadphase/dbvt/DBVTBroadPhase";
import { Vec3 } from "../math/Vec3";
import { SphereSphereCollisionDetector } from "../collision/narrophase/SphereSphereCollisionDetector";
import { SphereBoxCollisionDetector } from "../collision/narrophase/SphereBoxCollisionDectector";
import { BoxBoxCollisionDetector } from "../collision/narrophase/BoxBoxCollisionDetector";
import { CylinderCylinderCollisionDetector } from "../collision/narrophase/CylinderCylinderCollisionDetector";
import { BoxCylinderCollisionDetector } from "../collision/narrophase/BoxCylinderCollisionDetector";
import { SphereCylinderCollisionDetector } from "../collision/narrophase/SphereCylinderCollisionDetector";
import { SHAPE_SPHERE, SHAPE_BOX, SHAPE_CYLINDER, BODY_DYNAMIC, BODY_STATIC } from "../constants";
import { BroadPhase } from "../collision/broadphase/BroadPhase";
import { _Math } from "../math/_Math";
import { ShapeConfig } from "../shape/ShapeConfig";
import { Box } from "../shape/Box";
import { Quat } from "../math/Quat";
import { Contact } from "../constraint/contact/Contact";
import { JointConfig } from "../constraint/joint/JointConfig";
import { DistanceJoint } from "../constraint/joint/DistanceJoint";
import { ContactLink } from "../constraint/contact/ContactLink";
import { Joint } from "../constraint/joint/Joint";
import { Constraint } from "../constraint/Constraint";

export class World {

    World: true;

    scale: number;
    invScale: number;
    numRigidBodies: number;
    timeStep: any;
    timerate: number;
    timer: any;
    preLoop: any;
    postLoop: any;
    numIterations: any;
    broadPhase: BroadPhase;
    Btypes: string[];
    broadPhaseType: any;
    enableRandomizer: any;
    rigidBodies: RigidBody;
    contacts: Contact;
    unusedContacts: any;
    numContacts: number;
    numContactPoints: number;
    joints: any;
    numJoints: number;
    numIslands: number;
    gravity: Vec3;
    detectors: any[];
    randX: number;
    randA: number;
    randB: number;
    islandRigidBodies: any[];
    islandStack: any[];
    islandConstraints: any[];

    constructor(o) {
        if (!(o instanceof Object)) o = {};

        // this world scale defaut is 0.1 to 10 meters max for dynamique body
        this.scale = o.worldscale || 1;
        this.invScale = 1 / this.scale;

        // The time between each step
        this.timeStep = o.timestep || 0.01666; // 1/60;
        this.timerate = this.timeStep * 1000;
        this.timer = null;

        this.preLoop = null;//function(){};
        this.postLoop = null;//function(){};

        // The number of iterations for constraint solvers.
        this.numIterations = o.iterations || 8;

        // It is a wide-area collision judgment that is used in order to reduce as much as possible a detailed collision judgment.
        switch (o.broadphase || 2) {
            case 1: this.broadPhase = new BruteForceBroadPhase(); break;
            case 2: default: this.broadPhase = new SAPBroadPhase(); break;
            case 3: this.broadPhase = new DBVTBroadPhase(); break;
        }

        this.Btypes = ['None', 'BruteForce', 'Sweep & Prune', 'Bounding Volume Tree'];
        this.broadPhaseType = this.Btypes[o.broadphase || 2];

        /**
         * Whether the constraints randomizer is enabled or not.
         *
         * @property enableRandomizer
         * @type {Boolean}
         */
        this.enableRandomizer = o.random !== undefined ? o.random : true;

        // The rigid body list
        this.rigidBodies = null;
        // number of rigid body
        this.numRigidBodies = 0;
        // The contact list
        this.contacts = null;
        this.unusedContacts = null;
        // The number of contact
        this.numContacts = 0;
        // The number of contact points
        this.numContactPoints = 0;
        //  The joint list
        this.joints = null;
        // The number of joints.
        this.numJoints = 0;
        // The number of simulation islands.
        this.numIslands = 0;

        // The gravity in the world.
        this.gravity = new Vec3(0, - 9.8, 0);
        if (o.gravity !== undefined) this.gravity.fromArray(o.gravity);

        let numShapeTypes = 5;//4;//3;
        this.detectors = [];
        this.detectors.length = numShapeTypes;
        let i = numShapeTypes;
        while (i--) {
            this.detectors[i] = [];
            this.detectors[i].length = numShapeTypes;
        }

        this.detectors[SHAPE_SPHERE][SHAPE_SPHERE] = new SphereSphereCollisionDetector();
        this.detectors[SHAPE_SPHERE][SHAPE_BOX] = new SphereBoxCollisionDetector(false);
        this.detectors[SHAPE_BOX][SHAPE_SPHERE] = new SphereBoxCollisionDetector(true);
        this.detectors[SHAPE_BOX][SHAPE_BOX] = new BoxBoxCollisionDetector();

        // CYLINDER add
        this.detectors[SHAPE_CYLINDER][SHAPE_CYLINDER] = new CylinderCylinderCollisionDetector();

        this.detectors[SHAPE_CYLINDER][SHAPE_BOX] = new BoxCylinderCollisionDetector(true);
        this.detectors[SHAPE_BOX][SHAPE_CYLINDER] = new BoxCylinderCollisionDetector(false);

        this.detectors[SHAPE_CYLINDER][SHAPE_SPHERE] = new SphereCylinderCollisionDetector(true);
        this.detectors[SHAPE_SPHERE][SHAPE_CYLINDER] = new SphereCylinderCollisionDetector(false);


        this.randX = 65535;
        this.randA = 98765;
        this.randB = 123456789;

        this.islandRigidBodies = [];
        this.islandStack = [];
        this.islandConstraints = [];
    }

    setGravity(ar: Array<number>) {
        this.gravity.fromArray(ar);
    }

    clear() {

        this.preLoop = null;
        this.postLoop = null;

        this.randX = 65535;

        while (this.joints !== null) {
            this.removeJoint(this.joints);
        }
        while (this.contacts !== null) {
            this.removeContact(this.contacts);
        }
        while (this.rigidBodies !== null) {
            this.removeRigidBody(this.rigidBodies);
        }

    }
    /**
    * I'll add a rigid body to the world.
    * Rigid body that has been added will be the operands of each step.
    * @param  rigidBody  Rigid body that you want to add
    */
    addRigidBody(rigidBody: RigidBody) {

        if (rigidBody.parent) {
            console.error("World", "It is not possible to be added to more than one world one of the rigid body");
        }

        rigidBody.setParent(this);
        //rigidBody.awake();

        for (let shape = rigidBody.shapes; shape !== null; shape = shape.next) {
            this.addShape(shape);
        }
        if (this.rigidBodies !== null) (this.rigidBodies.prev = rigidBody).next = this.rigidBodies;
        this.rigidBodies = rigidBody;
        this.numRigidBodies++;

    }
    /**
    * I will remove the rigid body from the world.
    * Rigid body that has been deleted is excluded from the calculation on a step-by-step basis.
    * @param  rigidBody  Rigid body to be removed
    */
    removeRigidBody(rigidBody) {

        let remove = rigidBody;
        if (remove.parent !== this) return;
        remove.awake();
        let js = remove.jointLink;
        while (js != null) {
            let joint = js.joint;
            js = js.next;
            this.removeJoint(joint);
        }
        for (let shape = rigidBody.shapes; shape !== null; shape = shape.next) {
            this.removeShape(shape);
        }
        let prev = remove.prev;
        let next = remove.next;
        if (prev !== null) prev.next = next;
        if (next !== null) next.prev = prev;
        if (this.rigidBodies == remove) this.rigidBodies = next;
        remove.prev = null;
        remove.next = null;
        remove.parent = null;
        this.numRigidBodies--;

    }

    getByName(name) {

        let body = this.rigidBodies;
        while (body !== null) {
            if (body.name === name) return body;
            body = body.next;
        }

        let joint = this.joints;
        while (joint !== null) {
            if (joint.name === name) return joint;
            joint = joint.next;
        }

        return null;

    }

    /**
    * I'll add a shape to the world..
    * Add to the rigid world, and if you add a shape to a rigid body that has been added to the world,
    * Shape will be added to the world automatically, please do not call from outside this method.
    * @param  shape  Shape you want to add
    */
    addShape(shape: Shape) {

        if (!shape.parent || !shape.parent.parent) {
            console.error("World", "It is not possible to be added alone to shape world");
        }

        shape.proxy = this.broadPhase.createProxy(shape);
        shape.updateProxy();
        this.broadPhase.addProxy(shape.proxy);

    }

    /**
    * I will remove the shape from the world.
    * Add to the rigid world, and if you add a shape to a rigid body that has been added to the world,
    * Shape will be added to the world automatically, please do not call from outside this method.
    * @param  shape  Shape you want to delete
    */
    removeShape(shape) {

        this.broadPhase.removeProxy(shape.proxy);
        shape.proxy = null;

    }

    /**
    * I'll add a joint to the world.
    * Joint that has been added will be the operands of each step.
    * @param  shape Joint to be added
    */
    addJoint(joint) {

        if (joint.parent) {
            console.error("World", "It is not possible to be added to more than one world one of the joint");
        }
        if (this.joints != null) (this.joints.prev = joint).next = this.joints;
        this.joints = joint;
        joint.setParent(this);
        this.numJoints++;
        joint.awake();
        joint.attach();

    }

    /**
    * I will remove the joint from the world.
    * Joint that has been added will be the operands of each step.
    * @param  shape Joint to be deleted
    */
    removeJoint(joint) {

        let remove = joint;
        let prev = remove.prev;
        let next = remove.next;
        if (prev !== null) prev.next = next;
        if (next !== null) next.prev = prev;
        if (this.joints == remove) this.joints = next;
        remove.prev = null;
        remove.next = null;
        this.numJoints--;
        remove.awake();
        remove.detach();
        remove.parent = null;

    }

    addContact(s1, s2) {

        let newContact;
        if (this.unusedContacts !== null) {
            newContact = this.unusedContacts;
            this.unusedContacts = this.unusedContacts.next;
        } else {
            newContact = new Contact();
        }
        newContact.attach(s1, s2);
        newContact.detector = this.detectors[s1.type][s2.type];
        if (this.contacts) (this.contacts.prev = newContact).next = this.contacts;
        this.contacts = newContact;
        this.numContacts++;

    }

    removeContact(contact) {

        let prev = contact.prev;
        let next = contact.next;
        if (next) next.prev = prev;
        if (prev) prev.next = next;
        if (this.contacts == contact) this.contacts = next;
        contact.prev = null;
        contact.next = null;
        contact.detach();
        contact.next = this.unusedContacts;
        this.unusedContacts = contact;
        this.numContacts--;

    }

    getContact(b1, b2) {

        b1 = b1.constructor === RigidBody ? b1.name : b1;
        b2 = b2.constructor === RigidBody ? b2.name : b2;

        let n1, n2;
        let contact = this.contacts;
        while (contact !== null) {
            n1 = contact.body1.name;
            n2 = contact.body2.name;
            if ((n1 === b1 && n2 === b2) || (n2 === b1 && n1 === b2)) { if (contact.touching) return contact; else return null; }
            else contact = contact.next;
        }
        return null;

    }

    checkContact(name1: string, name2: string): boolean {

        let n1, n2;
        let contact = this.contacts;
        while (contact !== null) {
            n1 = contact.body1.name || ' ';
            n2 = contact.body2.name || ' ';
            if ((n1 == name1 && n2 == name2) || (n2 == name1 && n1 == name2)) {
                if (contact.touching)
                    return true;
                else
                    return false;
            }
            else contact = contact.next;
        }
        return false;

    }

    callSleep(body: RigidBody): boolean {

        if (!body.allowSleep) return false;
        if (body.linearVelocity.lengthSq() > 0.04) return false;
        if (body.angularVelocity.lengthSq() > 0.25) return false;
        return true;

    }

    /**
    * I will proceed only time step seconds time of World.
    */
    step() {

        let body = this.rigidBodies;

        while (body !== null) {

            body.addedToIsland = false;

            if (body.sleeping) body.testWakeUp();

            body = body.next;

        }



        //------------------------------------------------------
        //   UPDATE BROADPHASE CONTACT
        //------------------------------------------------------

        this.broadPhase.detectPairs();
        let pairs = this.broadPhase.pairs;
        let i = this.broadPhase.numPairs;
        let contact: Contact;
        while (i--) {
            let pair = pairs[i];
            let s1: Shape;
            let s2: Shape;
            if (pair.shape1.id < pair.shape2.id) {
                s1 = pair.shape1;
                s2 = pair.shape2;
            } else {
                s1 = pair.shape2;
                s2 = pair.shape1;
            }

            let link: ContactLink;
            if (s1.numContacts < s2.numContacts)
                link = s1.contactLink;
            else
                link = s2.contactLink;

            let exists = false;
            while (link) {
                contact = link.contact;
                if (contact.shape1 == s1 && contact.shape2 == s2) {
                    contact.persisting = true;
                    exists = true;// contact already exists
                    break;
                }
                link = link.next;
            }
            if (!exists) {
                this.addContact(s1, s2);
            }
        }

        //------------------------------------------------------
        //   UPDATE NARROWPHASE CONTACT
        //------------------------------------------------------

        // update & narrow phase
        this.numContactPoints = 0;
        contact = this.contacts;
        while (contact !== null) {
            if (!contact.persisting) {
                if (contact.shape1.aabb.intersectTest(contact.shape2.aabb)) {
                    let next = contact.next;
                    this.removeContact(contact);
                    contact = next;
                    continue;
                }
            }
            let b1 = contact.body1;
            let b2 = contact.body2;

            if (b1.isDynamic && !b1.sleeping || b2.isDynamic && !b2.sleeping) contact.updateManifold();

            this.numContactPoints += contact.manifold.numPoints;
            contact.persisting = false;
            contact.constraint.addedToIsland = false;
            contact = contact.next;

        }

        //------------------------------------------------------
        //   SOLVE ISLANDS
        //------------------------------------------------------

        let invTimeStep = 1 / this.timeStep;
        let joint: Joint;
        let constraint: Constraint;

        for (joint = this.joints; joint !== null; joint = joint.next) {
            joint.addedToIsland = false;
        }


        // clear old island array
        this.islandRigidBodies = [];
        this.islandConstraints = [];
        this.islandStack = [];

        this.numIslands = 0;

        // build and solve simulation islands

        for (let base = this.rigidBodies; base !== null; base = base.next) {

            if (base.addedToIsland || base.isStatic || base.sleeping) continue;// ignore

            if (base.isLonely()) {// update single body
                if (base.isDynamic) {
                    base.linearVelocity.addScaledVector(this.gravity, this.timeStep);
                }
                if (this.callSleep(base)) {
                    base.sleepTime += this.timeStep;
                    if (base.sleepTime > 0.5) base.sleep();
                    else base.updatePosition(this.timeStep);
                } else {
                    base.sleepTime = 0;
                    base.updatePosition(this.timeStep);
                }
                this.numIslands++;
                continue;
            }

            let islandNumRigidBodies = 0;
            let islandNumConstraints = 0;
            let stackCount = 1;
            // add rigid body to stack
            this.islandStack[0] = base;
            base.addedToIsland = true;

            let next;
            // build an island
            do {
                // get rigid body from stack
                body = this.islandStack[--stackCount];
                this.islandStack[stackCount] = null;
                body.sleeping = false;
                // add rigid body to the island
                this.islandRigidBodies[islandNumRigidBodies++] = body;
                if (body.isStatic) continue;

                // search connections
                for (let cs = body.contactLink; cs !== null; cs = cs.next) {
                    let contact = cs.contact;
                    constraint = contact.constraint;
                    if (constraint.addedToIsland || !contact.touching) continue;// ignore

                    // add constraint to the island
                    this.islandConstraints[islandNumConstraints++] = constraint;
                    constraint.addedToIsland = true;
                    next = cs.body;

                    if (next.addedToIsland) continue;

                    // add rigid body to stack
                    this.islandStack[stackCount++] = next;
                    next.addedToIsland = true;
                }
                for (let js = body.jointLink; js !== null; js = js.next) {
                    constraint = js.joint;

                    if (constraint.addedToIsland) continue;// ignore

                    // add constraint to the island
                    this.islandConstraints[islandNumConstraints++] = constraint;
                    constraint.addedToIsland = true;
                    next = js.body;
                    if (next.addedToIsland || !next.isDynamic) continue;

                    // add rigid body to stack
                    this.islandStack[stackCount++] = next;
                    next.addedToIsland = true;
                }
            } while (stackCount != 0);

            // update velocities
            let gVel = new Vec3().addScaledVector(this.gravity, this.timeStep);
            /*let gx=this.gravity.x*this.timeStep;
            let gy=this.gravity.y*this.timeStep;
            let gz=this.gravity.z*this.timeStep;*/
            let j = islandNumRigidBodies;
            while (j--) {
                //or(let j=0, l=islandNumRigidBodies; j<l; j++){
                body = this.islandRigidBodies[j];
                if (body.isDynamic) {
                    body.linearVelocity.addEqual(gVel);
                    /*body.linearVelocity.x+=gx;
                    body.linearVelocity.y+=gy;
                    body.linearVelocity.z+=gz;*/
                }
            }

            // randomizing order
            if (this.enableRandomizer) {
                //for(let j=1, l=islandNumConstraints; j<l; j++){
                j = islandNumConstraints;
                while (j--) {
                    if (j !== 0) {
                        let swap = (this.randX = (this.randX * this.randA + this.randB & 0x7fffffff)) / 2147483648.0 * j | 0;
                        constraint = this.islandConstraints[j];
                        this.islandConstraints[j] = this.islandConstraints[swap];
                        this.islandConstraints[swap] = constraint;
                    }
                }
            }

            // solve contraints

            j = islandNumConstraints;
            while (j--) {
                //for(j=0, l=islandNumConstraints; j<l; j++){
                this.islandConstraints[j].preSolve(this.timeStep, invTimeStep);// pre-solve
            }
            let k = this.numIterations;
            while (k--) {
                //for(let k=0, l=this.numIterations; k<l; k++){
                j = islandNumConstraints;
                while (j--) {
                    //for(j=0, m=islandNumConstraints; j<m; j++){
                    this.islandConstraints[j].solve();// main-solve
                }
            }
            j = islandNumConstraints;
            while (j--) {
                //for(j=0, l=islandNumConstraints; j<l; j++){
                this.islandConstraints[j].postSolve();// post-solve
                this.islandConstraints[j] = null;// gc
            }

            // sleeping check

            let sleepTime = 10;
            j = islandNumRigidBodies;
            while (j--) {
                //for(j=0, l=islandNumRigidBodies;j<l;j++){
                body = this.islandRigidBodies[j];
                if (this.callSleep(body)) {
                    body.sleepTime += this.timeStep;
                    if (body.sleepTime < sleepTime) sleepTime = body.sleepTime;
                } else {
                    body.sleepTime = 0;
                    sleepTime = 0;
                    continue;
                }
            }
            if (sleepTime > 0.5) {
                // sleep the island
                j = islandNumRigidBodies;
                while (j--) {
                    //for(j=0, l=islandNumRigidBodies;j<l;j++){
                    this.islandRigidBodies[j].sleep();
                    this.islandRigidBodies[j] = null;// gc
                }
            } else {
                // update positions
                j = islandNumRigidBodies;
                while (j--) {
                    //for(j=0, l=islandNumRigidBodies;j<l;j++){
                    this.islandRigidBodies[j].updatePosition(this.timeStep);
                    this.islandRigidBodies[j] = null;// gc
                }
            }
            this.numIslands++;
        }

        //------------------------------------------------------
        //   END SIMULATION
        //------------------------------------------------------

        if (this.postLoop !== null) this.postLoop();

    }

    // remove someting to world

    remove(obj) {

    }

    add(o) {

        o = o || {};

        let type = o.type || "box";
        if (type.constructor === String) type = [type];
        let isJoint = type[0].substring(0, 5) === 'joint' ? true : false;

        if (isJoint) {
            return this.initJoint(type[0], o);
        }
        else {
            return this.initBody(type, o);
        }

    }

    initBody(type, o) {

        let invScale = this.invScale;

        // body dynamic or static
        let move = o.move || false;
        let kinematic = o.kinematic || false;

        // POSITION

        // body position
        let p = o.pos || [0, 0, 0];
        p = p.map(function (x) { return x * invScale; });

        // shape position
        let p2 = o.posShape || [0, 0, 0];
        p2 = p2.map(function (x) { return x * invScale; });

        // ROTATION

        // body rotation in degree
        let r = o.rot || [0, 0, 0];
        r = r.map(function (x) { return x * _Math.degtorad; });

        // shape rotation in degree
        let r2 = o.rotShape || [0, 0, 0];
        r2 = r.map(function (x) { return x * _Math.degtorad; });

        // SIZE

        // shape size
        let s = o.size === undefined ? [1, 1, 1] : o.size;
        if (s.length === 1) { s[1] = s[0]; }
        if (s.length === 2) { s[2] = s[0]; }
        s = s.map(function (x) { return x * invScale; });



        // body physics settings
        let sc = new ShapeConfig();
        // The density of the shape.
        if (o.density !== undefined) sc.density = o.density;
        // The coefficient of friction of the shape.
        if (o.friction !== undefined) sc.friction = o.friction;
        // The coefficient of restitution of the shape.
        if (o.restitution !== undefined) sc.restitution = o.restitution;
        // The bits of the collision groups to which the shape belongs.
        if (o.belongsTo !== undefined) sc.belongsTo = o.belongsTo;
        // The bits of the collision groups with which the shape collides.
        if (o.collidesWith !== undefined) sc.collidesWith = o.collidesWith;

        if (o.config !== undefined) {
            if (o.config[0] !== undefined) sc.density = o.config[0];
            if (o.config[1] !== undefined) sc.friction = o.config[1];
            if (o.config[2] !== undefined) sc.restitution = o.config[2];
            if (o.config[3] !== undefined) sc.belongsTo = o.config[3];
            if (o.config[4] !== undefined) sc.collidesWith = o.config[4];
        }


        /* if(o.massPos){
            o.massPos = o.massPos.map(function(x) { return x * invScale; });
            sc.relativePosition.set( o.massPos[0], o.massPos[1], o.massPos[2] );
        }
        if(o.massRot){
            o.massRot = o.massRot.map(function(x) { return x * _Math.degtorad; });
            let q = new Quat().setFromEuler( o.massRot[0], o.massRot[1], o.massRot[2] );
            sc.relativeRotation = new Mat33().setQuat( q );//_Math.EulerToMatrix( o.massRot[0], o.massRot[1], o.massRot[2] );
        }*/

        let position = new Vec3(p[0], p[1], p[2]);
        let rotation = new Quat().setFromEuler(r[0], r[1], r[2]);

        // rigidbody
        let body = new RigidBody(position, rotation);
        //let body = new RigidBody( p[0], p[1], p[2], r[0], r[1], r[2], r[3], this.scale, this.invScale );

        // SHAPES

        let shape, n;

        for (let i = 0; i < type.length; i++) {

            n = i * 3;

            if (p2[n] !== undefined) sc.relativePosition.set(p2[n], p2[n + 1], p2[n + 2]);
            if (r2[n] !== undefined) sc.relativeRotation.setQuat(new Quat().setFromEuler(r2[n], r2[n + 1], r2[n + 2]));

            switch (type[i]) {
                case "box": shape = new Box(sc, s[n], s[n + 1], s[n + 2]); break;
                default:
                    console.error("暂未实现的shape", type[i]);
                    break;
            }

            body.addShape(shape);
        }

        // body can sleep or not
        if (o.neverSleep || kinematic) body.allowSleep = false;
        else body.allowSleep = true;

        body.isKinematic = kinematic;

        // body static or dynamic
        if (move) {

            if (o.massPos || o.massRot) body.setupMass(BODY_DYNAMIC, false);
            else body.setupMass(BODY_DYNAMIC, true);

            // body can sleep or not
            //if( o.neverSleep ) body.allowSleep = false;
            //else body.allowSleep = true;

        } else {

            body.setupMass(BODY_STATIC);

        }

        if (o.name !== undefined) body.name = o.name;
        //else if( move ) body.name = this.numRigidBodies;

        // finaly add to physics world
        this.addRigidBody(body);

        // force sleep on not
        if (move) {
            if (o.sleep) body.sleep();
            else body.awake();
        }

        return body;


    }

    initJoint(type, o) {

        //let type = type;
        let invScale = this.invScale;

        let axe1 = o.axe1 || [1, 0, 0];
        let axe2 = o.axe2 || [1, 0, 0];
        let pos1 = o.pos1 || [0, 0, 0];
        let pos2 = o.pos2 || [0, 0, 0];

        pos1 = pos1.map(function (x) { return x * invScale; });
        pos2 = pos2.map(function (x) { return x * invScale; });

        let min, max;
        if (type === "jointDistance") {
            min = o.min || 0;
            max = o.max || 10;
            min = min * invScale;
            max = max * invScale;
        } else {
            min = o.min || 57.29578;
            max = o.max || 0;
            min = min * _Math.degtorad;
            max = max * _Math.degtorad;
        }

        let limit = o.limit || null;
        let spring = o.spring || null;
        let motor = o.motor || null;

        // joint setting
        let jc = new JointConfig();
        jc.scale = this.scale;
        jc.invScale = this.invScale;
        jc.allowCollision = o.collision || false;
        jc.localAxis1.set(axe1[0], axe1[1], axe1[2]);
        jc.localAxis2.set(axe2[0], axe2[1], axe2[2]);
        jc.localAnchorPoint1.set(pos1[0], pos1[1], pos1[2]);
        jc.localAnchorPoint2.set(pos2[0], pos2[1], pos2[2]);

        let b1 = null;
        let b2 = null;

        if (o.body1 === undefined || o.body2 === undefined) return console.error('World', "Can't add joint if attach rigidbodys not define !");

        if (o.body1.constructor === String) { b1 = this.getByName(o.body1); }
        else if (o.body1.constructor === Number) { b1 = this.getByName(o.body1); }
        else if (o.body1.constructor === RigidBody) { b1 = o.body1; }

        if (o.body2.constructor === String) { b2 = this.getByName(o.body2); }
        else if (o.body2.constructor === Number) { b2 = this.getByName(o.body2); }
        else if (o.body2.constructor === RigidBody) { b2 = o.body2; }

        if (b1 === null || b2 === null) return console.error('World', "Can't add joint attach rigidbodys not find !");

        jc.body1 = b1;
        jc.body2 = b2;

        let joint;
        switch (type) {
            case "jointDistance": joint = new DistanceJoint(jc, min, max);
                if (spring !== null) joint.limitMotor.setSpring(spring[0], spring[1]);
                if (motor !== null) joint.limitMotor.setMotor(motor[0], motor[1]);
                break;
            default:
                console.error("未实现的joint", type);
                break;
        }

        joint.name = o.name || '';
        // finaly add to physics world
        this.addJoint(joint);

        return joint;

    }

}