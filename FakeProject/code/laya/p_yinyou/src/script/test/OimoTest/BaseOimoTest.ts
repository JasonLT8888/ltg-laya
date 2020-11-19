import { ITest } from "../ITest";
import MonoHelper, { EActionType } from "../../../LTGame/LTUtils/MonoHelper";
import { OimoHelper } from "../../../LTGame/Physics/OimoHelper";
import Vector3Ex from "../../../LTGame/LTUtils/Vector3Ex";
import UI_TestMediator from "../../ui/UI_TestMediator";
import UI_FunctionTestMediator from "../../ui/UI_FunctionTestMediator";
import Awaiters from "../../../LTGame/Async/Awaiters";

export class BaseOimoTest implements ITest {

    name: string = "OimoTest";

    protected _world: OIMO.World;
    protected _s3d: Laya.Scene3D;
    protected _camera: Laya.Camera;

    private _awakeMat: Laya.BlinnPhongMaterial;
    private _sleepMat: Laya.BlinnPhongMaterial;
    private _staticMat: Laya.BlinnPhongMaterial;

    async Create() {
        this._s3d = new Laya.Scene3D();
        Laya.stage.addChildAt(this._s3d, 1);

        this._camera = new Laya.Camera();
        this._camera.name = "camera";
        this._s3d.addChild(this._camera);
        this._camera.transform.position = new Laya.Vector3(0, 15, 15);
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

        await Awaiters.NextFrame();

        MonoHelper.instance.AddAction(EActionType.Update, this, this._LogicUpdate);
        UI_TestMediator.instance.Show(Laya.Handler.create(this, this.Clear, null, false));
    }

    protected async _OnCreate() {

    }

    private _CreateMats() {
        this._awakeMat = new Laya.BlinnPhongMaterial();
        this._awakeMat.albedoColor = new Laya.Vector4(0, 0.73, 0.83, 1);
        this._sleepMat = new Laya.BlinnPhongMaterial();
        this._sleepMat.albedoColor = new Laya.Vector4(0, 0.27, 0.31, 1);
        this._staticMat = new Laya.BlinnPhongMaterial();
        this._staticMat.albedoColor = new Laya.Vector4(0.8, 0.8, 0.8, 1);
    }

    protected _OnLogicUpdate(dt: number) {

    }

    private _LogicUpdate() {
        let dt = Laya.timer.delta / 1000;
        dt = Math.min(dt, 0.02);
        this._world.step(dt);

        let workRig = this._world.getRigidBodyList();
        while (workRig != null) {

            if (workRig.userData != null) {
                let obj = workRig.userData as Laya.Sprite3D;
                OimoHelper.SyncTransFromRig(obj.transform, workRig);

                let render = obj['_render'] as Laya.MeshRenderer;
                if (render != null) {
                    switch (workRig.getType()) {
                        case OIMO.RigidBodyType.DYNAMIC:
                            if (workRig.isSleeping()) {
                                render.sharedMaterial = this._sleepMat;
                            } else {
                                render.sharedMaterial = this._awakeMat;
                            }
                            break;
                    }
                }

            }

            workRig = workRig.getNext();
        }

        this._OnLogicUpdate(dt);
    }

    Clear() {
        MonoHelper.instance.RemoveAction(EActionType.Update, this, this._LogicUpdate);
        this._s3d.destroy();

        UI_TestMediator.instance.Hide();
        UI_FunctionTestMediator.instance.Show();
    }

    protected _CreateBox(pos: Laya.Vector3, rot: Laya.Quaternion, size: Laya.Vector3) {
        let objMesh = Laya.PrimitiveMesh.createBox();
        let obj = new Laya.MeshSprite3D(objMesh, "box");
        obj.meshRenderer.sharedMaterial = this._awakeMat;
        obj.meshRenderer.castShadow = true;
        obj.meshRenderer.receiveShadow = true;
        obj.transform.position = pos;
        if (rot != null) {
            obj.transform.rotation = rot;
        }
        this._s3d.addChild(obj);

        let rig = OimoHelper.CreateRigbody(pos, rot, OIMO.RigidBodyType.DYNAMIC);
        let shape = OimoHelper.CreateBox(size);
        rig.addShape(shape);
        rig.userData = obj;
        this._world.addRigidBody(rig);
    }

    protected _CreateStaticPanel(pos: Laya.Vector3, xSize: number, zSize: number) {
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

}