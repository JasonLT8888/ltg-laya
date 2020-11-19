import LTDictionary from "../../../../LTGame/LTUtils/LTDictionary";
import { ELTRagdollBodyPos } from "./ELTRagdollBodyPos";
import { LTRagdollBip } from "./LTRagdollBip";
import { OimoHelper } from "../../../../LTGame/Physics/OimoHelper";


const TO_RADIANS = Math.PI / 180;

export class LTRagdoll {

    private _rigMap: LTDictionary<ELTRagdollBodyPos, LTRagdollBip>;

    private _rootRig: OIMO.RigidBody;

    private _upForce: OIMO.Vec3;
    private _totalMass: number;

    private _cacheWorld: OIMO.World;

    constructor() {
        this._rigMap = new LTDictionary<ELTRagdollBodyPos, LTRagdollBip>();
        this._upForce = new OIMO.Vec3(0, 1, 0);
        this._totalMass = 0;
    }

    public BindRig(pos: ELTRagdollBodyPos, trans: Laya.Transform3D, rig: OIMO.RigidBody) {
        if (this._rigMap.ContainsKey(pos)) {
            console.error("无法重复指定位置", pos);
            return;
        }
        let bip = new LTRagdollBip();
        bip.rig = rig;
        bip.trans = trans;
        this._rigMap.set(pos, bip);

        if (pos == ELTRagdollBodyPos.Root) {
            this._rootRig = rig;
        }
        switch (pos) {
            case ELTRagdollBodyPos.Root:
                this._rootRig = rig;
                break;
        }

        this._totalMass += rig.getMass();

    }

    public BindSimpleRig(pos: ELTRagdollBodyPos, obj: Laya.Sprite3D) {
        if (this._rigMap.ContainsKey(pos)) {
            console.error("无法重复指定位置", pos);
            return;
        }
        let rig = OimoHelper.CreateRigbody(obj.transform.position, obj.transform.rotation, OIMO.RigidBodyType.DYNAMIC);
        let boxShape = OimoHelper.CreateBox(obj.transform.getWorldLossyScale());
        switch (pos) {
            case ELTRagdollBodyPos.LeftLeg_Down:
            case ELTRagdollBodyPos.RightLeg_Down:
                boxShape.setDensity(5);
                break;
            default:
                boxShape.setDensity(1);
                break;
        }
        rig.addShape(boxShape);
        this.BindRig(pos, obj.transform, rig);
    }

    private _sd: OIMO.SpringDamper;

    public AutoLink(world: OIMO.World) {
        this._cacheWorld = world;
        this._upForce = this._cacheWorld.getGravity().negate();
        let values = this._rigMap.values;
        for (let value of values) {
            world.addRigidBody(value.rig);
            value.rig.sleep();
        }

        let yAxis = new OIMO.Vec3(0, 1, 0);
        let xAxis = new OIMO.Vec3(-1, 0, 0);

        this._sd = new OIMO.SpringDamper();
        this._sd.setSpring(10, 10);

        var lm180 = new OIMO.RotationalLimitMotor().setLimits(-90 * TO_RADIANS, 90 * TO_RADIANS);
        var lm90 = new OIMO.RotationalLimitMotor().setLimits(-45 * TO_RADIANS, 45 * TO_RADIANS);
        var lmElbow = new OIMO.RotationalLimitMotor().setLimits(0 * TO_RADIANS, 160 * TO_RADIANS);
        var lmKnee = new OIMO.RotationalLimitMotor().setLimits(0 * TO_RADIANS, 160 * TO_RADIANS);

        // 头部
        this._LinkRig(world, this._rigMap.Get(ELTRagdollBodyPos.Head), this._rigMap.Get(ELTRagdollBodyPos.Root),
            yAxis, new OIMO.SpringDamper().setSpring(10, 100000),
            new OIMO.Vec3(1, 0, 1), new OIMO.RotationalLimitMotor().setLimits(0, 0), 10, 10);

        // 左上臂
        this._LinkRig(world, this._rigMap.Get(ELTRagdollBodyPos.LeftArm_Up), this._rigMap.Get(ELTRagdollBodyPos.Root),
            xAxis, new OIMO.SpringDamper().setSpring(10, 10), new OIMO.Vec3(0, 0, 1), new OIMO.RotationalLimitMotor().setLimits(0, 0), 180, 180);

        // 右上臂
        this._LinkRig(world, this._rigMap.Get(ELTRagdollBodyPos.RightArm_Up), this._rigMap.Get(ELTRagdollBodyPos.Root),
            xAxis.negate(), new OIMO.SpringDamper().setSpring(10, 10), new OIMO.Vec3(0, 0, 1), new OIMO.RotationalLimitMotor().setLimits(0, 0), 180, 180);

        // 左下臂
        this._LinkRig(world, this._rigMap.Get(ELTRagdollBodyPos.LeftArm_Down), this._rigMap.Get(ELTRagdollBodyPos.LeftArm_Up),
            xAxis, new OIMO.SpringDamper().setSpring(10, 10), new OIMO.Vec3(0, 0, 1), new OIMO.RotationalLimitMotor().setLimits(0, 0), 180, 180);

        // 右下臂
        this._LinkRig(world, this._rigMap.Get(ELTRagdollBodyPos.RightArm_Down), this._rigMap.Get(ELTRagdollBodyPos.RightArm_Up),
            xAxis.negate(), new OIMO.SpringDamper().setSpring(10, 10), new OIMO.Vec3(0, 0, 1), new OIMO.RotationalLimitMotor().setLimits(0, 0), 180, 180);

        // 身体
        this._LinkRig(world, this._rigMap.Get(ELTRagdollBodyPos.Body), this._rigMap.Get(ELTRagdollBodyPos.Root),
            yAxis.negate(), new OIMO.SpringDamper().setSpring(10, 10), new OIMO.Vec3(1, 0, 1), new OIMO.RotationalLimitMotor().setLimits(0, 0), 180, 180);

        // 左上腿
        this._LinkRig(world, this._rigMap.Get(ELTRagdollBodyPos.LeftLeg_Up), this._rigMap.Get(ELTRagdollBodyPos.Root),
            yAxis.negate(), new OIMO.SpringDamper().setSpring(10, 10), new OIMO.Vec3(1, 0, 1), new OIMO.RotationalLimitMotor().setLimits(0, 0), 180, 180);

        // 右上腿
        this._LinkRig(world, this._rigMap.Get(ELTRagdollBodyPos.RightLeg_Up), this._rigMap.Get(ELTRagdollBodyPos.Root),
            yAxis.negate(), new OIMO.SpringDamper().setSpring(10, 10), new OIMO.Vec3(1, 0, 1), new OIMO.RotationalLimitMotor().setLimits(0, 0), 180, 180);

        // 左下腿
        this._LinkRig(world, this._rigMap.Get(ELTRagdollBodyPos.LeftLeg_Down), this._rigMap.Get(ELTRagdollBodyPos.LeftLeg_Up),
            yAxis.negate(), new OIMO.SpringDamper().setSpring(10, 10), new OIMO.Vec3(1, 0, 1), new OIMO.RotationalLimitMotor().setLimits(0, 0), 180, 180);

        // 右下腿
        this._LinkRig(world, this._rigMap.Get(ELTRagdollBodyPos.RightLeg_Down), this._rigMap.Get(ELTRagdollBodyPos.RightLeg_Up),
            yAxis.negate(), new OIMO.SpringDamper().setSpring(10, 10), new OIMO.Vec3(1, 0, 1), new OIMO.RotationalLimitMotor().setLimits(0, 0), 180, 180);

    }

    private _LinkRig(world: OIMO.World, bipC: LTRagdollBip, bipP: LTRagdollBip, twistAxis: OIMO.Vec3, sd: OIMO.SpringDamper,
        swingAxis: OIMO.Vec3, limitMotion: OIMO.RotationalLimitMotor, angle1: number, angle2: number) {
        let linkConfig = new OIMO.RagdollJointConfig();
        let rig1 = bipC.rig;
        let rig2 = bipP.rig;
        let anchor = (bipC.trans.owner.getChildByName("anchor") as Laya.Sprite3D).transform;
        linkConfig.init(rig1, rig2, anchor.position, twistAxis, swingAxis);

        linkConfig.swingSpringDamper = sd;
        linkConfig.twistSpringDamper = sd;
        linkConfig.maxSwingAngle1 = angle1 * TO_RADIANS;
        linkConfig.maxSwingAngle2 = angle2 * TO_RADIANS;
        linkConfig.twistLimitMotor = limitMotion;

        let link = new OIMO.RagdollJoint(linkConfig);
        world.addJoint(link);
    }

    public LogicUpdate(dt: number) {

        // 给身体加力维持站立, 总共9.8
        this._rootRig.applyForceToCenter(this._upForce.scale(this._totalMass * 0.9));

        this._rootRig.setAngularVelocity(new OIMO.Vec3(0, 1, 0));

        let values = this._rigMap.values;
        for (let value of values) {
            value.SyncFromRig();
        }
    }

}