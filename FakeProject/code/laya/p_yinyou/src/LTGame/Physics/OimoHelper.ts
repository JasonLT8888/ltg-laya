export class OimoHelper {

    private static _isInited: boolean = false;
    private static _cacheVec3: OIMO.Vec3;

    private static _cacheTransPos: Laya.Vector3 = new Laya.Vector3();
    private static _cacheTransQuat: Laya.Quaternion = new Laya.Quaternion();
    private static _cacheRigMat3: OIMO.Mat3 = new OIMO.Mat3();
    private static _cacheRigPos: OIMO.Vec3 = new OIMO.Vec3();
    private static _cacheRigQuat: OIMO.Quat = new OIMO.Quat();

    private static _Init() {
        if (this._isInited) return;
        this._isInited = true;
        this._cacheVec3 = new OIMO.Vec3();
    }

    public static CreateRigbody(pos: Laya.Vector3 = null, rot: Laya.Quaternion = null,
        type: OIMO.RigidBodyType = 0): OIMO.RigidBody {
        let rigConfig = new OIMO.RigidBodyConfig();
        rigConfig.type = type;
        if (pos != null) {
            rigConfig.position.init(pos.x, pos.y, pos.z);
        }
        if (rot != null) {
            rigConfig.rotation.fromQuat(rot);
        }
        let rig = new OIMO.RigidBody(rigConfig);
        return rig;
    }

    public static CreateCapsule(radius: number, height: number, layer: number = 1, mask: number = 1,
        localPos: Laya.Vector3 = null, localRot: Laya.Quaternion = null) {
        this._Init();

        let boxGeo = new OIMO.CapsuleGeometry(radius, height / 2);
        let shapeConfig = new OIMO.ShapeConfig();
        shapeConfig.geometry = boxGeo;
        shapeConfig.collisionGroup = layer;
        shapeConfig.collisionMask = mask;
        if (localPos != null) {
            shapeConfig.position.init(localPos.x, localPos.y, localPos.z);
        }
        if (localRot != null) {
            shapeConfig.rotation.fromQuat(localRot);
        }
        let shape = new OIMO.Shape(shapeConfig);
        return shape;
    }

    public static CreateSphere(radius: number, layer: number = 1, mask: number = 1,
        localPos: Laya.Vector3 = null, localRot: Laya.Quaternion = null): OIMO.Shape {
        this._Init();

        let boxGeo = new OIMO.SphereGeometry(radius);
        let shapeConfig = new OIMO.ShapeConfig();
        shapeConfig.geometry = boxGeo;
        shapeConfig.collisionGroup = layer;
        shapeConfig.collisionMask = mask;
        if (localPos != null) {
            shapeConfig.position.init(localPos.x, localPos.y, localPos.z);
        }
        if (localRot != null) {
            shapeConfig.rotation.fromQuat(localRot);
        }
        let shape = new OIMO.Shape(shapeConfig);
        return shape;
    }

    public static CreateBox(size: Laya.Vector3, layer: number = 1, mask: number = 1,
        localPos: Laya.Vector3 = null, localRot: Laya.Quaternion = null): OIMO.Shape {
        this._Init();

        this._cacheVec3.init(size.x / 2, size.y / 2, size.z / 2);
        let boxGeo = new OIMO.BoxGeometry(this._cacheVec3);
        let shapeConfig = new OIMO.ShapeConfig();
        shapeConfig.geometry = boxGeo;
        shapeConfig.collisionGroup = layer;
        shapeConfig.collisionMask = mask;
        if (localPos != null) {
            shapeConfig.position.init(localPos.x, localPos.y, localPos.z);
        }
        if (localRot != null) {
            shapeConfig.rotation.fromQuat(localRot);
        }
        let shape = new OIMO.Shape(shapeConfig);
        return shape;
    }

    static SyncTransToRig(trans: Laya.Transform3D, rig: OIMO.RigidBody) {
        rig.setPosition(trans.position);
        this._cacheRigMat3.fromQuat(trans.rotation);
        rig.setRotation(this._cacheRigMat3);
    }

    static SyncTransFromRig(trans: Laya.Transform3D, rig: OIMO.RigidBody, onlyPos: boolean = false) {
        rig.getPositionTo(this._cacheRigPos);
        this._cacheTransPos.setValue(this._cacheRigPos.x, this._cacheRigPos.y, this._cacheRigPos.z);
        trans.position = this._cacheTransPos;
        if (!onlyPos) {
            rig.getOrientationTo(this._cacheRigQuat);
            this._cacheTransQuat.x = this._cacheRigQuat.x;
            this._cacheTransQuat.y = this._cacheRigQuat.y;
            this._cacheTransQuat.z = this._cacheRigQuat.z;
            this._cacheTransQuat.w = this._cacheRigQuat.w;
            trans.rotation = this._cacheTransQuat;
        }
    }

    static CreateShapeByObj(obj: Laya.Sprite3D, layer: number, mask: number,
        posOffset: Laya.Vector3 = null, rotOffset: Laya.Quaternion = null): OIMO.Shape {
        let colliderCmp = obj.getComponent(Laya.PhysicsCollider) as Laya.PhysicsCollider;
        if (colliderCmp == null || colliderCmp.colliderShape instanceof Laya.BoxColliderShape) {
            let boxShape = OimoHelper.CreateBox(obj.transform.localScale, layer, mask,
                posOffset, rotOffset);
            return boxShape;
        } else if (colliderCmp.colliderShape instanceof Laya.SphereColliderShape) {
            let oldCmp = colliderCmp.colliderShape as Laya.SphereColliderShape;
            let sphereShape = OimoHelper.CreateSphere(obj.transform.localScale.x * oldCmp.radius, layer, mask,
                posOffset, rotOffset);
            return sphereShape;
        } else if (colliderCmp.colliderShape instanceof Laya.CapsuleColliderShape) {
            let origShape = colliderCmp.colliderShape as Laya.CapsuleColliderShape;
            let capsuleShape = OimoHelper.CreateCapsule(obj.transform.localScale.x * origShape.radius,
                obj.transform.localScale.y * origShape.length);
            return capsuleShape;
        } else {
            console.error("未识别的碰撞盒类型", colliderCmp);
        }
        if (colliderCmp != null) {
            colliderCmp.destroy();
        }
    }

}