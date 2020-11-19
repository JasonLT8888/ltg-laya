import { BasicTest } from "./BasicTest";
import { BaseOimoTest } from "./BaseOimoTest";
import LTRes from "../../../LTGame/Res/LTRes";
import ResDefine from "../../common/ResDefine";
import { LTRagdoll } from "./LTRagdoll/LTRagdoll";
import { ELTRagdollBodyPos } from "./LTRagdoll/ELTRagdollBodyPos";
import { ITest } from "../ITest";
import { OimoHelper } from "../../../LTGame/Physics/OimoHelper";
import Vector3Ex from "../../../LTGame/LTUtils/Vector3Ex";
import MonoHelper, { EActionType } from "../../../LTGame/LTUtils/MonoHelper";
import Awaiters from "../../../LTGame/Async/Awaiters";

export class RagdollTest implements ITest {

    Clear() {
        this._s3d.destroy();
        MonoHelper.instance.RemoveAction(EActionType.Update, this, this._OnLogicUpdate);
    }

    name: string = "布娃娃测试";

    protected _world: OIMO.World;
    protected _s3d: Laya.Scene3D;
    protected _camera: Laya.Camera;

    private _awakeMat: Laya.BlinnPhongMaterial;
    private _sleepMat: Laya.BlinnPhongMaterial;
    private _staticMat: Laya.BlinnPhongMaterial;

    private _ragdoll: LTRagdoll;

    async Create() {
        this._s3d = new Laya.Scene3D();
        Laya.stage.addChildAt(this._s3d, 1);

        this._camera = new Laya.Camera();
        this._camera.name = "camera";
        this._s3d.addChild(this._camera);
        this._camera.transform.position = new Laya.Vector3(0, 5, 5);
        this._camera.transform.rotationEuler = new Laya.Vector3(-45, 0, 0);

        let light = new Laya.DirectionLight();
        light.name = "light";
        this._s3d.addChild(light);
        light.transform.rotationEuler = new Laya.Vector3(-45, 45, 0);
        light.shadowCascadesMode = Laya.ShadowCascadesMode.FourCascades;
        light.shadowMode = Laya.ShadowMode.SoftHigh;

        this._world = new OIMO.World(OIMO.BroadPhaseType.BVH);

        this._CreateMats();

        await this._OnCreate();
    }

    private _CreateMats() {
        this._awakeMat = new Laya.BlinnPhongMaterial();
        this._awakeMat.albedoColor = new Laya.Vector4(0, 0.73, 0.83, 1);
        this._sleepMat = new Laya.BlinnPhongMaterial();
        this._sleepMat.albedoColor = new Laya.Vector4(0, 0.27, 0.31, 1);
        this._staticMat = new Laya.BlinnPhongMaterial();
        this._staticMat.albedoColor = new Laya.Vector4(0.8, 0.8, 0.8, 1);
    }

    private _CreateStaticPanel(pos: Laya.Vector3, xSize: number, zSize: number) {
        let objMesh = Laya.PrimitiveMesh.createPlane(xSize, zSize);
        let obj = new Laya.MeshSprite3D(objMesh, "panel");
        obj.meshRenderer.sharedMaterial = this._staticMat;
        obj.meshRenderer.castShadow = false;
        obj.meshRenderer.receiveShadow = true;
        obj.transform.position = pos;
        this._s3d.addChild(obj);

        let rig = OimoHelper.CreateRigbody(pos, null, OIMO.RigidBodyType.STATIC);
        Vector3Ex.cacheVec0.setValue(xSize, 0.1, zSize);
        let shape = OimoHelper.CreateBox(Vector3Ex.cacheVec0);
        rig.addShape(shape);
        rig.userData = obj;
        this._world.addRigidBody(rig);
    }

    async _OnCreate() {
        this._CreateStaticPanel(new Laya.Vector3(0, -1, 0), 20, 20);
        let loadObj = (await LTRes.LoadAndGet(ResDefine.FixPath("ragdoll_01"))) as Laya.Sprite3D;
        this._s3d.addChild(loadObj);

        // 创建rig
        this._ragdoll = new LTRagdoll();
        this._ragdoll.BindSimpleRig(ELTRagdollBodyPos.Head, loadObj.getChildByName("head") as Laya.Sprite3D);
        this._ragdoll.BindSimpleRig(ELTRagdollBodyPos.Body, loadObj.getChildByName("body") as Laya.Sprite3D);
        this._ragdoll.BindSimpleRig(ELTRagdollBodyPos.Root, loadObj.getChildByName("root") as Laya.Sprite3D);
        this._ragdoll.BindSimpleRig(ELTRagdollBodyPos.LeftLeg_Up, loadObj.getChildByName("leg_up_l") as Laya.Sprite3D);
        this._ragdoll.BindSimpleRig(ELTRagdollBodyPos.LeftLeg_Down, loadObj.getChildByName("leg_down_l") as Laya.Sprite3D);
        this._ragdoll.BindSimpleRig(ELTRagdollBodyPos.RightLeg_Up, loadObj.getChildByName("leg_up_r") as Laya.Sprite3D);
        this._ragdoll.BindSimpleRig(ELTRagdollBodyPos.RightLeg_Down, loadObj.getChildByName("leg_down_r") as Laya.Sprite3D);
        this._ragdoll.BindSimpleRig(ELTRagdollBodyPos.LeftArm_Up, loadObj.getChildByName("arm_up_l") as Laya.Sprite3D);
        this._ragdoll.BindSimpleRig(ELTRagdollBodyPos.LeftArm_Down, loadObj.getChildByName("arm_down_l") as Laya.Sprite3D);
        this._ragdoll.BindSimpleRig(ELTRagdollBodyPos.RightArm_Up, loadObj.getChildByName("arm_up_r") as Laya.Sprite3D);
        this._ragdoll.BindSimpleRig(ELTRagdollBodyPos.RightArm_Down, loadObj.getChildByName("arm_down_r") as Laya.Sprite3D);
        this._ragdoll.AutoLink(this._world);

        await Awaiters.NextFrame();

        MonoHelper.instance.AddAction(EActionType.Update, this, this._OnLogicUpdate);
    }

    _OnLogicUpdate(dt: number) {
        this._ragdoll.LogicUpdate(dt);
        this._world.step(dt);
    }

}