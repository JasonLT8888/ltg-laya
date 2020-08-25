declare module OIMO {

    export const REVISION: string;

    // BroadPhase
    export const BR_NULL: number;
    export const BR_BRUTE_FORCE: number;
    export const BR_SWEEP_AND_PRUNE: number;
    export const BR_BOUNDING_VOLUME_TREE: number;

    // Body type
    export const BODY_NULL: number;
    export const BODY_DYNAMIC: number;
    export const BODY_STATIC: number;
    export const BODY_KINEMATIC: number;
    export const BODY_GHOST: number;

    // Shape type
    export const SHAPE_NULL: number;
    export const SHAPE_SPHERE: number;
    export const SHAPE_BOX: number;
    export const SHAPE_CYLINDER: number;
    export const SHAPE_PLANE: number;
    export const SHAPE_PARTICLE: number;
    export const SHAPE_TETRA: number;

    // Joint type
    export const JOINT_NULL: number;
    export const JOINT_DISTANCE: number;
    export const JOINT_BALL_AND_SOCKET: number;
    export const JOINT_HINGE: number;
    export const JOINT_WHEEL: number;
    export const JOINT_SLIDER: number;
    export const JOINT_PRISMATIC: number;

    // AABB aproximation
    export const AABB_PROX: number;

    class InfoDisplay {
        parent: World;
        infos: number[];

        fps: number;

        broadPhaseTime: number;
        narrowPhaseTime: number;
        solvingTime: number;
        totalTime: number;
        updateTime: number;
        MaxBroadPhaseTime: number;
        MaxNarrowPhaseTime: number;
        MaxSolvingTime: number;
        MaxTotalTime: number;
        MaxUpdateTime: number;

        constructor(world: World);

        setTime(n: number);
        resetMax();
        calcBroadPhase();
        calcNarrowPhase();
        calcEnd();
        upfps();
        show();
        toArray(): number[];

    }

    export class Vec3 {
        constructor(x?: number, y?: number, z?: number);

        x: number;
        y: number;
        z: number;

        Vec3: boolean;

        set(x: number, y: number, z: number): this;

        add(a: Vec3, b: Vec3): this;

        addVectors(a: Vec3, b: Vec3): this;

        addEqual(v: Vec3): this;

        sub(a: Vec3, b: Vec3): this;

        subVectors(a: Vec3, b: Vec3): this;

        subEqual(v: Vec3): this;

        scale(v: Vec3, s: number): this;

        scaleEqual(s: number): this;

        multiply(v: Vec3): this;

        addScaledVector(v: Vec3, s: number): this;

        subScaledVector(v: Vec3, s: number): this;


        cross(a: Vec3, b?: Vec3): this;
        crossVectors(a: Vec3, b: Vec3): this;

        tangent(v: Vec3): this;
        invert(v: Vec3): this;

        negate(): this;
        dot(v: Vec3): number;
        addition(): number;

        lengthSq(): number;
        length(): number;

        copy(v: Vec3): this;

        applyMatrix3(m: Mat3, transpose: boolean): this;

        applyQuaternion(q: Quat): this;

        testZero(): boolean;
        testDiff(v: Vec3): boolean;
        equals(v: Vec3): boolean;
        clone(): Vec3;
        toString(): string;
        multiplyScalar(s: number): this;
        divideScalar(s: number): this;

        normalize(): this;

        toArray(array: number[], offset: number): void;
        fromArray(array: number[], offset: number): this;

    }

    export class Quat {
        constructor(x?: number, y?: number, z?: number, w?: number);

        x: number;
        y: number;
        z: number;
        w: number;

        Quat: boolean;
        set(x: number, y: number, z: number, w: number): this;

        addTime(v: Vec3, t: number): this;
        multiply(p: Quat, q: Quat): this;
        multiplyQuaternions(a: Quat, b: Quat): this;
        setFromUnitVectors(v1: Vec3, v2: Vec3): this;
        arc(v1: Vec3, v2: Vec3): this;

        normalize(): this;

        inverse(): this;

        invert(q: Quat): this;

        conjugate(): this;

        length(): number;

        lengthSq(): number;
        copy(q: Quat): this;
        clone(q: Quat): Quat;


        testDiff(q: Quat): boolean;
        equals(q: Quat): boolean;
        toString(): string;
        setFromEuler(x: number, y: number, z: number): this;

        setFromAxis(axis: Vec3, rad: number): this;

        setFromMat3(m: Mat3): this;

        toArray(array: number[], offset: number): void;
        fromArray(array: number[], offset: number): this;

    }

    export class Mat3 {
        constructor();
        Mat3: boolean;

        elements: number[];

        set(e00: number, e01: number, e02: number,
            e10: number, e11: number, e12: number,
            e20: number, e21: number, e22: number): this;

        add(a: Mat3, b: Mat3): this;

        addMatrixs(a: Mat3, b: Mat3): this;

        addEqual(m: Mat3): this;

        sub(a: Mat3, b: Mat3): this;

        subMatrixs(a: Mat3, b: Mat3): this;

        subEqual(m: Mat3): this;

        scale(m: Mat3, s: number): this;
        scaleEqual(s: number): this;

        multiplyMatrices(m1: Mat3, m2: Mat3, transpose: boolean): this;
        transpose(m: Mat3): this;

        setQuat(q: Quat): this;

        invert(m: Mat3): this;

        addOffset(m: Mat3, v: Vec3): this;

        subOffset(m: Mat3, v: Vec3): this;

        multiplyScalar(s: number): this;
        identity(): this;

        clone(): Mat3;

        copy(m: Mat3): this;

        determinant(): number;

        toArray(array: number[], offset: number): number[];
        fromArray(array: number[], offset: number): this;
        fromQuat(quat: Quat | Laya.Quaternion);

    }

    export class Math {
        /**
         * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
         * For example, the absolute value of -5 is the same as the absolute value of 5.
         * @param x A numeric expression for which the absolute value is needed.
         */
        static abs(x: number): number;
        /**
         * Returns the arc cosine (or inverse cosine) of a number.
         * @param x A numeric expression.
         */
        static acos(x: number): number;
        /**
         * Returns the arcsine of a number.
         * @param x A numeric expression.
         */
        static asin(x: number): number;
        /**
         * Returns the arctangent of a number.
         * @param x A numeric expression for which the arctangent is needed.
         */
        static atan(x: number): number;
        /**
         * Returns the angle (in radians) from the X axis to a point.
         * @param y A numeric expression representing the cartesian y-coordinate.
         * @param x A numeric expression representing the cartesian x-coordinate.
         */
        static atan2(y: number, x: number): number;
        /**
         * Returns the smallest number greater than or equal to its numeric argument.
         * @param x A numeric expression.
         */
        static ceil(x: number): number;
        /**
         * Returns the cosine of a number.
         * @param x A numeric expression that contains an angle measured in radians.
         */
        static cos(x: number): number;
        /**
         * Returns e (the base of natural logarithms) raised to a power.
         * @param x A numeric expression representing the power of e.
         */
        static exp(x: number): number;
        /**
         * Returns the greatest number less than or equal to its numeric argument.
         * @param x A numeric expression.
         */
        static floor(x: number): number;
        /**
         * Returns the natural logarithm (base e) of a number.
         * @param x A numeric expression.
         */
        static log(x: number): number;
        /**
         * Returns the larger of a set of supplied numeric expressions.
         * @param values Numeric expressions to be evaluated.
         */
        static max(...values: number[]): number;
        /**
         * Returns the smaller of a set of supplied numeric expressions.
         * @param values Numeric expressions to be evaluated.
         */
        static min(...values: number[]): number;
        /**
         * Returns the value of a base expression taken to a specified power.
         * @param x The base value of the expression.
         * @param y The exponent value of the expression.
         */
        static pow(x: number, y: number): number;
        /** Returns a pseudorandom number between 0 and 1. */
        static random(): number;
        /**
         * Returns a supplied numeric expression rounded to the nearest number.
         * @param x The value to be rounded to the nearest number.
         */
        static round(x: number): number;
        /**
         * Returns the sine of a number.
         * @param x A numeric expression that contains an angle measured in radians.
         */
        static sin(x: number): number;
        /**
         * Returns the square root of a number.
         * @param x A numeric expression.
         */
        static sqrt(x: number): number;
        /**
         * Returns the tangent of a number.
         * @param x A numeric expression that contains an angle measured in radians.
         */
        static stan(x: number): number;

        static degtorad: number;
        static radtodeg: number;
        static PI: number;
        static TwoPI: number;
        static PI90: number;
        static PI270: number;

        static INF: number;
        static EPZ: number;
        static EPZ2: number;

        static lerp(x: number, y: number, t: number): number;

        static randnumber(low: number, high: number): number;

        static rand(low: number, high: number): number;

        static generateUUID(): string;

        static int(x: number): number;

        static fix(x: number, n: number): number;

        static clamp(value: number, min: number, max: number): number;
        static distance(p1: number[], p2: number[]): number;

        static acosClamp(cos: number): number;

        static distanceVector(v1: Vec3, v2: Vec3): number;
        static dotVectors(v1: Vec3, v2: Vec3): number;


    }

    export class AABB {
        constructor(minX: number, maxX: number,
            minY: number, maxY: number,
            minZ: number, maxZ: number);

        AABB: boolean;

        elements: number[];

        set(minX: number, maxX: number,
            minY: number, maxY: number,
            minZ: number, maxZ: number): this;

        intersectTest(aabb: AABB): boolean;

        intersectTestTwo(aabb: AABB): boolean;

        clone(): AABB;
        copy(aabb: AABB, margin?: number);

        fromArray(array: number[]): this;

        combine(aabb1: AABB, aabb2: AABB): this;

        surfaceArea(): number;

        intersectsWithPoint(x: number, y: number, z: number): boolean;

        setFromPoints(arr: Vec3[]): void;

        makeEmpty(): void;
        expandByPoint(v: Vec3): void;

        expandByScalar(s: number): void;

    }

    export class Geometry {

    }

    export interface ContactCallback {

        /**
	 * This is called when two shapes start touching each other. `c` is the contact of
	 * the two shapes.
	 */
        beginContact(c: Contact);

        /**
         * This is called every frame **before** velocity solver iterations while two shapes
         * are touching. `c` is the contact for the two shapes.
         */
        preSolve(c: Contact);

        /**
         * This is called every frame **after** velocity solver iterations while two shapes
         * are touching. `c` is the contact for the two shapes.
         */
        postSolve(c: Contact);

        /**
         * This is called when two shapes end touching each other. `c` is the contact of
         * the two shapes.
         */
        endContact(c: Contact);

    }

    export class ShapeConfig {
        /**
         * The shape's local position relative to the parent rigid body's origin.
         */
        public position: Vec3;

        /**
         * The shape's local rotation matrix relative to the parent rigid body's
         * rotation.
         */
        public rotation: Mat3;

        /**
         * The coefficient of friction of the shape.
         */
        public friction: number;

        /**
         * The coefficient of restitution of the shape.
         */
        public restitution: number;

        /**
         * The density of the shape, usually in Kg/m^3.
         */
        public density: number;

        /**
         * The collision geometry of the shape.
         */
        public geometry: Geometry;

        /**
         * The collision group bits the shape belongs to. This is used for collision
         * filtering.
         *
         * Two shapes `shape1` and `shape2` will collide only if both
         * `shape1.collisionGroup & shape2.collisionMask` and
         * `shape2.collisionGroup & shape1.collisionMask` are not zero.
         */
        public collisionGroup: number;

        /**
         * The collision mask bits of the shape. This is used for collision
         * filtering.
         *
         * Two shapes `shape1` and `shape2` will collide only if both
         * `shape1.collisionGroup & shape2.collisionMask` and
         * `shape2.collisionGroup & shape1.collisionMask` are not zero.
         */
        public collisionMask: number;

        /**
         * The contact callback of the shape. The callback methods are called
         * when contact events the shape is involved occurred.
         */
        public contactCallback: ContactCallback;


    }

    export class JointConfig {
        scale: number;
        invScale: number;
        body1: RigidBody;
        body2: RigidBody;
        localAnchorPoint1: Vec3;
        localAnchorPoint2: Vec3;
        localAxis1: Vec3;
        localAxis2: Vec3;
        allowCollision: boolean;

    }

    export class MassInfo {
        mass: number;
        inertia: Mat3;
    }

    export class Proxy {
        shape: Shape;
        aabb: AABB;

        constructor(shape: Shape);
    }

    export class Shape {
        type: number;

        Shape: boolean;

        id: number;

        prev: Shape;

        next: Shape;

        proxy: Proxy;

        parent: RigidBody;

        contactLink: ContactLink;

        numContacts: number;

        position: Vec3;

        rotation: Mat3;

        relativePosition: Vec3;

        relativeRotation: Mat3;

        aabb: AABB;

        density: number;
        friction: number;
        restitution: number;
        belongsTo: number;
        collidesWith: number;

        constructor(config: ShapeConfig);

        calculateMassInfo(out: MassInfo);
        updateProxy();
    }

    export class BoxGeometry extends Geometry {
        constructor(halfExt: Vec3 | Laya.Vector3);
    }

    export enum RigidBodyType {
        DYNAMIC = 0,
        STATIC = 1,
        KINEMATIC = 2
    }

    export class Box extends Shape {
        width: number;
        height: number;
        depth: number;
        dimentions: number[];
        elements: number[];

        constructor(config: ShapeConfig,
            Width: number, Height: number, Depth: number);



    }

    export class Sphere extends Shape {
        radius: number;

        constructor(config: ShapeConfig, radius: number);

        volume(): number;
    }

    export class Cylinder extends Shape {
        radius: number;
        height: number;
        normalDirection: Vec3;
    }

    export class Plane extends Shape {
        normal: Vec3;
        volume(): number;

    }

    export class Particle extends Shape {
        volume(): number;

    }

    export class LimitMotor {
        LimitMotor: boolean;

        axis: Vec3;
        angle: number;
        lowerLimit: number;
        upperLimit: number;
        motorSpeed: number;
        maxMotorForce: number;
        frequency: number;
        dampingRatio: number;

        constructor(axis: Vec3, fixed?: boolean);

        setLimit(lowerLimit: number, upperLimit: number);
        setMotor(motorSpeed: number, maxMotorForce: number);
        setSpring(frequency: number, dampingRatio: number);
    }

    class Constraint {
        Constraint: boolean;

        parent: World;
        body1: RigidBody;
        body2: RigidBody;

        addedToIsland: boolean;

        preSolve(timeStep: number, invTimeStep: number);
        solve();
        postSolve();
    }

    export class JointLink extends Constraint {
        prev: JointLink;
        next: JointLink;

        joint: Joint;

        constructor(j: Joint);

    }

    class Joint extends Constraint {
        scale: number;
        name: string;
        id: number;

        type: number;

        prev: Joint;
        next: Joint;

        body1: RigidBody;
        body2: RigidBody;

        localAnchorPoint1: Vec3;
        localAnchorPoint2: Vec3;

        relativeAnchorPoint1: Vec3;
        relativeAnchorPoint2: Vec3;

        anchorPoint1: Vec3;
        anchorPoint2: Vec3;

        allowCollision: boolean;

        b1Link: JointLink;
        b2Link: JointLink;


        constructor(config: JointConfig);

        setId(n: number | string);

        setParent(world: World);
        updateAnchorPoints();

        attach(isX?: boolean);

        detach(isX?: boolean);

        awake();

        preSolve(timeStep: number, invTimeStep: number);
        solve();
        postSolve();
        remove();
        dispose();

        getPosition(): Vec3[];
    }

    export class WheelJoint extends Joint {

    }

    export class SliderJoint extends Joint {
        constructor(config: JointConfig,
            lowerTranslation: number,
            upperTranslation: number);

    }

    export class PrismaticJoint extends Joint {
        constructor(config: JointConfig,
            lowerTranslation: number,
            upperTranslation: number);
    }

    export class DistanceJoint extends Joint {
        constructor(config: JointConfig,
            minDistance: number,
            maxDistance: number);
    }

    export class BallAndSocketJoint extends Joint {

    }

    export class HingeJoint extends Joint {
        constructor(config: JointConfig,
            lowerAngleLimit: number,
            upperAngleLimit: number);
    }

    class Pair {
        shape1: Shape;
        shape2: Shape;

        constructor(s1?: Shape, s2?: Shape);
    }

    class BroadPhase {
        type: number;
        numPairChecks: number;
        numPairs: number;
        pairs: Pair[];

    }

    class ContactLink {
        prev: ContactLink;
        next: ContactLink;
        shape: Shape;
        body: RigidBody;
        contact: Contact;

        constructor(contact: Contact);

    }

    class ManifoldPoint {
        warmStarted: boolean;
        position: Vec3;
        localPoint1: Vec3;
        localPoint2: Vec3;
        normal: Vec3;
        tangent: Vec3;
        binormal: Vec3;
        normalImpulse: number;
        tangentImpulse: number;
        binormalImpulse: number;
        normalDenominator: number;
        tangentDenominator: number;
        binormalDenominator: number;
        penetration: number;

    }
    class ContactManifold {
        body1: RigidBody;
        body2: RigidBody;
        numPoints: number;
        points: ManifoldPoint[];
    }

    class Contact {
        //  TODO: 待补充
    }

    export class RigidBodyConfig {
        /**
         * The world position of the rigid body's center of gravity.
         */
        public position: Vec3;

        /**
         * The rotation matrix of the rigid body.
         */
        public rotation: Mat3;

        /**
         * The initial value of the rigid body's linear velocity.
         */
        public linearVelocity: Vec3;

        /**
         * The initial value of the rigid body's angular velocity.
         */
        public angularVelocity: Vec3;

        /**
         * The rigid body's motion type. See `RigidBodyType` for details.
         */
        public type: number;

        /**
         * Whether to automatically sleep the rigid body when it stops moving
         * for a certain period of time, namely `Setting.sleepingTimeThreshold`.
         */
        public autoSleep: boolean;

        /**
         * The damping coefficient of the linear velocity. Set positive values to
         * gradually reduce the linear velocity.
         */
        public linearDamping: number;

        /**
         * The damping coefficient of the angular velocity. Set positive values to
         * gradually reduce the angular velocity.
         */
        public angularDamping: number;
    }

    export class Transform {

        public _position: Vec3;
        public _rotation: Mat3;

        constructor();

        /**
         * Sets the transformation to identity and returns `this`.
         */
        public identity(): Transform;

        /**
         * Returns the position of the transformation.
         */
        public getPosition(): Vec3;

        /**
         * Sets `position` to the position of the transformation.
         *
         * This does not create a new instance of `Vec3`.
         */
        public getPositionTo(position: Vec3);

        /**
         * Sets the position of the transformation to `position` and returns `this`.
         */
        public setPosition(position: Vec3): Transform;

        /**
         * Translates the position by `translation`.
         */
        public translate(translation: Vec3);

        /**
         * Returns the rotation matrix.
         */
        public getRotation(): Mat3;

        /**
         * Sets `out` to the rotation matrix.
         *
         * This does not create a new instance of `Mat3`.
         */
        public getRotationTo(out: Mat3);

        /**
         * Sets the rotation matrix to `rotation` and returns `this`.
         */
        public setRotation(rotation: Mat3): Transform;

        /**
         * Sets the rotation by Euler angles `eulerAngles` in radians.
         */
        public setRotationXyz(eulerAngles: Vec3);

        /**
         * Applies rotation by the rotation matrix `rotation`.
         */
        public rotate(rotation: Mat3);

        /**
         * Applies the rotation by Euler angles `eulerAngles` in radians.
         */
        public rotateXyz(eulerAngles: Vec3);

        /**
         * Returns the rotation as a quaternion.
         */
        public getOrientation(): Quat;

        /**
         * Sets `orientation` to the quaternion representing the rotation.
         *
         * This does not create a new instance of `Quat`.
         */
        public getOrientationTo(orientation: Quat);

        /**
         * Sets the rotation from a quaternion `quaternion` and returns `this`.
         */
        public setOrientation(quaternion: Quat): Transform;
        /**
         * Returns a clone of the transformation.
         */
        public clone(): Transform;

        /**
         * Sets the transformation to `transform` and returns `this`.
         */
        public copyFrom(transform: Transform): Transform;

    }

    export class MassData {
        /**
         * Mass. `0` for a non-dynamic rigid body.
         */
        public mass: number;

        /**
         * Inertia tensor in local space. Zero matrix for a non-dynamic rigid body.
         */
        public localInertia: Mat3;

        constructor();
    }


    export class RigidBody {
        public _next: RigidBody;
        public _prev: RigidBody;

        public _shapeList: Shape;
        public _shapeListLast: Shape;
        public _numShapes: number;

        public _vel: Vec3;
        public _angVel: Vec3;

        public _pseudoVel: Vec3;
        public _angPseudoVel: Vec3;

        public _ptransform: Transform;
        public _transform: Transform;

        public _type: number;

        public _sleepTime: number;
        public _sleeping: boolean;
        public _autoSleep: boolean;

        public _mass: number;
        public _invMass: number;
        public _localInertia: Mat3;
        public _rotFactor: Vec3;
        public _invLocalInertia: Mat3;
        public _invLocalInertiaWithoutRotFactor: Mat3;
        public _invInertia: Mat3;

        public _linearDamping: number;
        public _angularDamping: number;

        public _force: Vec3;
        public _torque: Vec3;

        public _world: World;

        public _contactLinkList: ContactLink;
        public _contactLinkListLast: ContactLink;
        public _numContactLinks: number;

        public _jointLinkList: JointLink;
        public _jointLinkListLast: JointLink;
        public _numJointLinks: number;

        public _addedToIsland: boolean;
        public _gravityScale: number;

        /**
         * Extra field that users can use for their own purposes.
         */
        public userData: any;


        constructor(config: RigidBodyConfig);


        // --- public ---

        /**
         * Returns the world position of the rigid body.
         */
        public getPosition(): Vec3;

        /**
         * Sets `position` to the world position of the rigid body.
         *
         * This does not create a new instance of `Vec3`.
         */
        public getPositionTo(position: Vec3): void;

        /**
         * Sets the world position of the rigid body to `position`.
         */
        public setPosition(position: Vec3): void;

        /**
         * Translates the position of the rigid body by `translation`.
         */
        public translate(translation: Vec3): void;

        /**
         * Returns the rotation matrix of the rigid body.
         */
        public getRotation(): Mat3;

        /**
         * Sets `rotation` to the rotation matrix of the rigid body.
         *
         * This does not create a new instance of `Mat3`.
         */
        public getRotationTo(rotation: Mat3): void;

        /**
         * Sets the rotation matrix of the rigid body to `rotation`.
         */
        public setRotation(rotation: Mat3): void;

        /**
         * Sets the rotation of the rigid body by Euler angles `eulerAngles` in radians.
         */
        public setRotationXyz(eulerAngles: Vec3): void;

        /**
         * Rotates the rigid body by the rotation matrix `rotation`.
         */
        public rotate(rotation: Mat3): void;

        /**
         * Rotates the rigid body by Euler angles `eulerAngles` in radians.
         */
        public rotateXyz(eulerAngles: Vec3): void;

        /**
         * Returns the rotation of the rigid body as a quaternion.
         */
        public getOrientation(): Quat;

        /**
         * Sets `orientation` to the rotation quaternion of the rigid body.
         *
         * This does not create a new instance of `Quat`.
         */
        public getOrientationTo(orientation: Quat): void;

        /**
         * Sets the rotation of the rigid body from a quaternion `quaternion`.
         */
        public setOrientation(quaternion: Quat): void;

        /**
         * Returns the transform of the rigid body.
         */
        public getTransform(): Transform;

        /**
         * Sets `transform` to the transform of the rigid body.
         *
         * This does not create a new instance of `Transform`.
         */
        public getTransformTo(transform: Transform): void;

        /**
         * Sets the transform of the rigid body to `transform`.
         *
         * This does not keep any references to `transform`.
         */
        public setTransform(transform: Transform): void;

        /**
         * Returns the mass of the rigid body.
         *
         * If the rigid body has infinite mass, `0` will be returned.
         */
        public getMass(): number;

        /**
         * Returns the moment of inertia tensor in local space.
         */
        public getLocalInertia(): Mat3;

        /**
         * Sets `inertia` to the moment of inertia tensor in local space.
         *
         * This does not create a new instance of `Mat3`
         */
        public getLocalInertiaTo(inertia: Mat3): void;

        /**
         * Returns the mass data of the rigid body.
         */
        public getMassData(): MassData;

        /**
         * Sets `massData` to the mass data of the rigid body.
         *
         * This does not create a new instance of `MassData`.
         */
        public getMassDataTo(massData: MassData): void;

        /**
         * Sets the mass and moment of inertia of the rigid body by the mass data `massData`.
         * The properties set by this will be overwritten when
         *
         * - some shapes are added or removed
         * - the type of the rigid body is changed
         */
        public setMassData(massData: MassData): void;

        /**
         * Returns the rotation factor of the rigid body.
         */
        public getRotationFactor(): Vec3;

        /**
         * Sets the rotation factor of the rigid body to `rotationFactor`.
         *
         * This changes moment of inertia internally, so that the change of
         * angular velocity in **global space** along X, Y and Z axis will scale by `rotationFactor.x`,
         * `rotationFactor.y` and `rotationFactor.z` times respectively.
         */
        public setRotationFactor(rotationFactor: Vec3): void;

        /**
         * Returns the linear velocity of the rigid body.
         */
        public getLinearVelocity(): Vec3;

        /**
         * Sets `linearVelocity` to the linear velocity of the rigid body.
         *
         * This does not create a new intrance of `Vec3`.
         */
        public getLinearVelocityTo(linearVelocity: Vec3): void;

        /**
         * Sets the linear velocity of the rigid body.
         */
        public setLinearVelocity(linearVelocity: Vec3): void;

        /**
         * Returns the angular velocity of the rigid body.
         */
        public getAngularVelocity(): Vec3;

        /**
         * Sets `angularVelocity` to the angular velocity of the rigid body.
         *
         * This does not create a new intrance of `Vec3`.
         */
        public getAngularVelocityTo(angularVelocity: Vec3): void;

        /**
         * Sets the angular velocity of the rigid body.
         */
        public setAngularVelocity(angularVelocity: Vec3): void;

        /**
         * Adds `linearVelocityChange` to the linear velcity of the rigid body.
         */
        public addLinearVelocity(linearVelocityChange: Vec3): void;

        /**
         * Adds `angularVelocityChange` to the angular velcity of the rigid body.
         */
        public addAngularVelocity(angularVelocityChange: Vec3): void;

        /**
         * Applies the impulse `impulse` to the rigid body at `positionInWorld` in world position.
         *
         * This changes both the linear velocity and the angular velocity.
         */
        public applyImpulse(impulse: Vec3, positionInWorld: Vec3): void;

        /**
         * Applies the linear impulse `impulse` to the rigid body.
         *
         * This does not change the angular velocity.
         */
        public applyLinearImpulse(impulse: Vec3): void;

        /**
         * Applies the angular impulse `impulse` to the rigid body.
         *
         * This does not change the linear velocity.
         */
        public applyAngularImpulse(impulse: Vec3): void;

        /**
         * Applies the force `force` to `positionInWorld` in world position.
         */
        public applyForce(force: Vec3, positionInWorld: Vec3): void;

        /**
         * Applies the force `force` to the center of mass.
         */
        public applyForceToCenter(force: Vec3): void;

        /**
         * Applies the torque `torque`.
         */
        public applyTorque(torque: Vec3): void;

        /**
         * Returns the gravity scaling factor of the rigid body.
         */
        public getGravityScale(): number;

        /**
         * Sets the gravity scaling factor of the rigid body to `gravityScale`.
         *
         * If `0` is set, the rigid body will not be affected by gravity.
         */
        public setGravityScale(gravityScale: number): void;

        /**
         * Returns the local coordinates of the point `worldPoint` in world coodinates.
         */
        public getLocalPoint(worldPoint: Vec3): Vec3;

        /**
         * Sets `localPoint` to the local coordinates of the point `worldPoint` in world coodinates.
         *
         * This does not create a new instance of `Vec3`.
         */
        public getLocalPointTo(worldPoint: Vec3, localPoint: Vec3): void;

        /**
         * Returns the local coordinates of the vector `worldVector` in world coodinates.
         */
        public getLocalVector(worldVector: Vec3): Vec3;

        /**
         * Sets `localVector` to the local coordinates of the vector `worldVector` in world coodinates.
         *
         * This does not create a new instance of `Vec3`.
         */
        public getLocalVectorTo(worldVector: Vec3, localVector: Vec3): void;

        /**
         * Returns the world coordinates of the point `localPoint` in local coodinates.
         */
        public getWorldPoint(localPoint: Vec3): Vec3;

        /**
         * Sets `worldPoint` to the world coordinates of the point `localPoint` in local coodinates.
         *
         * This does not create a new instance of `Vec3`.
         */
        public getWorldPointTo(localPoint: Vec3, worldPoint: Vec3): void;

        /**
         * Returns the world coordinates of the vector `localVector` in local coodinates.
         */
        public getWorldVector(localVector: Vec3): Vec3;

        /**
         * Sets `worldVector` to the world coordinates of the vector `localVector` in local coodinates.
         *
         * This does not create a new instance of `Vec3`.
         */
        public getWorldVectorTo(localVector: Vec3, worldVector: Vec3): void;

        /**
         * Returns the number of the shapes added.
         */
        public getNumShapes(): number;

        /**
         * Returns the list of the shapes of the rigid body.
         */
        public getShapeList(): Shape;

        /**
         * Returns the number of the contact lists the rigid body is involved.
         */
        public getNumContectLinks(): number;

        /**
         * Returns the list of the contact links the rigid body is involved.
         */
        public getContactLinkList(): ContactLink;

        /**
         * Returns the number of the joint links the rigid body is attached.
         */
        public getNumJointLinks(): number;

        /**
         * Returns the list of the joint links the rigid body is attached.
         */
        public getJointLinkList(): JointLink;

        /**
         * Adds the shape to the rigid body.
         */
        public addShape(shape: Shape): void;

        /**
         * Removes the shape from the rigid body.
         */
        public removeShape(shape: Shape): void;

        /**
         * Returns the rigid body's type of behaviour.
         *
         * See `RigidBodyType` class for details.
         */
        public getType(): number;

        /**
         * Sets the rigid body's type of behaviour.
         *
         * See `RigidBodyType` class for details.
         */
        public setType(type: number): void;

        /**
         * Sets the rigid body's sleep flag false.
         *
         * This also resets the sleeping timer of the rigid body.
         */
        public wakeUp(): void;

        /**
         * Sets the rigid body's sleep flag true.
         *
         * This also resets the sleeping timer of the rigid body.
         */
        public sleep(): void;

        /**
         * Returns whether the rigid body is sleeping.
         */
        public isSleeping(): boolean;

        /**
         * Returns how long the rigid body is stopping moving. This returns `0` if the body
         * has already slept.
         */
        public getSleepTime(): number;

        /**
         * Sets the rigid body's auto sleep flag.
         *
         * If auto sleep is enabled, the rigid body will automatically sleep when needed.
         */
        public setAutoSleep(autoSleepEnabled: boolean): void; Up();

        /**
         * Returns the linear damping.
         */
        public getLinearDamping(): number;

        /**
         * Sets the linear damping to `damping`.
         */
        public setLinearDamping(damping: number): void;

        /**
         * Returns the angular damping.
         */
        public getAngularDamping(): number;

        /**
         * Sets the angular damping to `damping`.
         */
        public setAngularDamping(damping: number): void;

        /**
         * Returns the previous rigid body in the world.
         *
         * If the previous one does not exist, `null` will be returned.
         */
        public getPrev(): RigidBody;

        /**
         * Returns the next rigid body in the world.
         *
         * If the next one does not exist, `null` will be returned.
         */
        public getNext(): RigidBody;

    }

    class CollisionDetector {
        flip: boolean;

        detectCollision(shape1: Shape, shape2: Shape, manifold: ContactManifold);
    }

    interface IWorldConfig {
        timestep: number;
        iterations: number;
        broadphase: number;
        worldscale: number;
        random: boolean;
        info: boolean;
        gravity: number[];
    }

    export enum BroadPhaseType {
        BRUTE_FORCE = 1,
        BVH = 2,
    }

    export class World {
        World: boolean;

        scale: number;
        invScale: number;
        timeStep: number;
        timerate: number;

        timer: number;
        preLoop: () => void;
        postLoop: () => void;

        numIterations: number;

        broadphase: BroadPhase;

        Btypes: string[];
        broadPhaseType: string;
        performance: InfoDisplay;
        isStat: boolean;
        enableRandomizer: boolean;

        rigidBodies: RigidBody[];
        numRigidBodies: number;

        contacts: Contact[];
        unusedContacts: Contact[];
        numContacts: number;
        numContactPoints: number;
        joints: Joint[];
        numJoints: number;
        numIslands: number;
        gravity: Vec3;

        detectors: CollisionDetector[];
        islandRigidBodies: RigidBody[];
        islandStack: any[];
        islandConstraints: Constraint[];

        constructor(broadPhaseType: BroadPhaseType, gravity: Vec3);

        play();

        stop();

        setGravity(arr: number[]);
        getInfo(): string;
        clear();
        addRigidBody(body: RigidBody);
        removeRigidBody(body: RigidBody);

        getByName(name: string): any;

        addShape(shape: Shape);
        removeShape(shape: Shape);
        addJoint(joint: Joint);
        removeJoint(joint: Joint);

        addContact(s1: Shape, s2: Shape);
        removeContact(contact: Contact);

        getContact(b1: RigidBody | string, b2: RigidBody | string);
        checkContact(name1: string, name2: string);

        callSleep(body: RigidBody): boolean;

        step(dt: number);

    }

}