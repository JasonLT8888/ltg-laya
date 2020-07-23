import { ITest } from "./ITest";
import UI_TestMediator from "../ui/UI_TestMediator";
import UI_FunctionTestMediator from "../ui/UI_FunctionTestMediator";
import MonoHelper, { EActionType } from "../../LTGame/LTUtils/MonoHelper";
import MathEx from "../../LTGame/LTUtils/MathEx";
import Awaiters from "../../LTGame/Async/Awaiters";

export class PhysicTest implements ITest {

    name: string = "Bullet物理";

    private _s3d: Laya.Scene3D;

    private _isPressed: boolean = false;
    private _touchId: number;
    private _remainTime: number;

    private _panelSize: number = 50;

    private _cubeObjs: Laya.MeshSprite3D[];
    private _cubeRigs: Laya.Rigidbody3D[];

    Create() {
        this._s3d = new Laya.Scene3D();
        Laya.stage.addChildAt(this._s3d, 1);

        let panelMesh = Laya.PrimitiveMesh.createPlane(this._panelSize, this._panelSize, 1, 1);
        let panelMat = new Laya.BlinnPhongMaterial();
        panelMat.albedoColor = new Laya.Vector4(0.8, 0.8, 0.8, 1);
        let panelObj = new Laya.MeshSprite3D(panelMesh, "floor");
        panelObj.meshRenderer.material = panelMat;
        panelObj.meshRenderer.receiveShadow = true;
        this._s3d.addChild(panelObj);
        panelObj.transform.localPosition = new Laya.Vector3(0, 0, 0);
        let colliderCmp = panelObj.addComponent(Laya.PhysicsCollider) as Laya.PhysicsCollider;
        colliderCmp.colliderShape = new Laya.BoxColliderShape(this._panelSize, 1, this._panelSize);
        colliderCmp.friction = 1;

        let camera = new Laya.Camera();
        camera.name = "camera";
        this._s3d.addChild(camera);
        camera.transform.localPosition = new Laya.Vector3(0, this._panelSize * 1.2, this._panelSize * 1.2);
        camera.transform.localRotationEuler = new Laya.Vector3(-45, 0, 0);

        let light = new Laya.DirectionLight();
        this._s3d.addChild(light);
        light.transform.localRotationEuler = new Laya.Vector3(-75, 0, 0);
        light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;
        light.shadowMode = Laya.ShadowMode.SoftHigh;
        light.shadowDistance = 200;

        MonoHelper.instance.AddAction(EActionType.Update, this, this._LogicUpdate);
        UI_TestMediator.instance.Show(Laya.Handler.create(this, this.Clear));

        UI_TestMediator.instance.ui.m_img_bg.on(Laya.Event.MOUSE_DOWN, this, this._OnMouseDown);
        UI_TestMediator.instance.ui.on(Laya.Event.MOUSE_UP, this, this._OnMouseUp);
        UI_TestMediator.instance.ui.on(Laya.Event.MOUSE_OUT, this, this._OnMouseUp);

        this._cacheMaterial = new Laya.BlinnPhongMaterial();
        this._cacheMaterial.albedoColor = new Laya.Vector4(0.1, 0.1, 0.6, 1);

        this._sleepMaterial = new Laya.BlinnPhongMaterial();
        this._sleepMaterial.albedoColor = new Laya.Vector4(0.5, 0.5, 0, 1);

        this._cacheMesh = Laya.PrimitiveMesh.createBox(1, 1, 1);

        this._cubeRigs = [];
        this._cubeObjs = [];

        this._s3d.physicsSimulation.maxSubSteps = 2;
        this._s3d.physicsSimulation.fixedTimeStep = 1 / 30;
    }

    private _LogicUpdate() {
        let dt: number = Laya.timer.delta * 0.001;
        if (this._isPressed) {
            this._remainTime -= dt;
            if (this._remainTime < 0) {
                this._GenCube();
                this._remainTime = 0.1;
            }
        }

        for (let i = 0; i < this._cubeObjs.length; ++i) {
            let cubeObj = this._cubeObjs[i];
            let rig = this._cubeRigs[i];
            cubeObj.meshRenderer.sharedMaterial = rig.isSleeping ? this._sleepMaterial : this._cacheMaterial;
        }
    }

    private _cacheMaterial: Laya.BlinnPhongMaterial;
    private _sleepMaterial: Laya.BlinnPhongMaterial;
    private _cacheMesh: Laya.Mesh;
    private async _GenCube() {

        let cubeObj = new Laya.MeshSprite3D(this._cacheMesh, "cube");
        cubeObj.meshRenderer.sharedMaterial = this._cacheMaterial;
        this._s3d.addChild(cubeObj);
        cubeObj.transform.localPosition = new Laya.Vector3(MathEx.Random(-5, 5), this._panelSize, MathEx.Random(-5, 5));
        cubeObj.transform.localRotationEuler = new Laya.Vector3(MathEx.Random(0, 360), MathEx.Random(0, 360), MathEx.Random(0, 360));
        cubeObj.transform.localScale = new Laya.Vector3(MathEx.Random(0.5, 2), MathEx.Random(0.5, 2), MathEx.Random(0.5, 2));
        cubeObj.meshRenderer.castShadow = true;
        cubeObj.meshRenderer.receiveShadow = true;
        await Awaiters.NextFrame();

        let rig = cubeObj.addComponent(Laya.Rigidbody3D) as Laya.Rigidbody3D;
        rig.colliderShape = new Laya.BoxColliderShape(1, 1, 1);
        rig.sleepAngularVelocity = 0.1;
        rig.sleepLinearVelocity = 0.1;
        rig.ccdMotionThreshold = 0;
        rig.ccdSweptSphereRadius = 0;

        this._cubeObjs.push(cubeObj);
        this._cubeRigs.push(rig);

        UI_TestMediator.instance.ui.m_text_notice.text = "物体数量:" + this._cubeObjs.length;
    }

    private _OnMouseDown(event: Laya.Event) {
        if (this._isPressed) return;
        this._isPressed = true;
        this._touchId = event.touchId;
        this._remainTime = 0;
    }

    private _OnMouseUp(event: Laya.Event) {
        if (!this._isPressed) return;
        if (this._touchId != event.touchId) return;
        this._isPressed = false;
    }

    Clear() {
        MonoHelper.instance.RemoveAction(EActionType.Update, this, this._LogicUpdate);
        this._s3d.destroy();

        UI_FunctionTestMediator.instance.Show();
    }

}