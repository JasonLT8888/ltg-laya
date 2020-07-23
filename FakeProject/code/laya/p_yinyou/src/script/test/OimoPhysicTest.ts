import { ITest } from "./ITest";
import UI_TestMediator from "../ui/UI_TestMediator";
import UI_FunctionTestMediator from "../ui/UI_FunctionTestMediator";
import MonoHelper, { EActionType } from "../../LTGame/LTUtils/MonoHelper";
import MathEx from "../../LTGame/LTUtils/MathEx";
import Awaiters from "../../LTGame/Async/Awaiters";
import Vector3Ex from "../../LTGame/LTUtils/Vector3Ex";
import QuaternionEx from "../../LTGame/LTUtils/QuaternionEx";
import { World } from "../../LTGame/3rd/oimo/core/World";
import { RigidBody } from "../../LTGame/3rd/oimo/core/RigidBody";

export class OimoPhysicTest implements ITest {

    name: string = "Oimo物理";

    private _s3d: Laya.Scene3D;
    private _world: World;

    private _isPressed: boolean = false;
    private _touchId: number;
    private _remainTime: number;

    private _panelSize: number = 50;

    private _cubeObjs: Laya.MeshSprite3D[];
    private _cubeRigs: RigidBody[];

    Create() {
        this._s3d = new Laya.Scene3D();
        Laya.stage.addChildAt(this._s3d, 1);
        this._world = new World({
            timestep: 1 / 60,
            iterations: 8,
            broadphase: 3, // 1 brute force, 2 sweep and prune, 3 volume tree
            worldscale: 1, // scale full world 
            random: false,  // randomize sample
            info: false,   // calculate statistic or not
            gravity: [0, -9.8, 0]
        });

        let panelMesh = Laya.PrimitiveMesh.createPlane(this._panelSize, this._panelSize, 1, 1);
        let panelMat = new Laya.BlinnPhongMaterial();
        panelMat.albedoColor = new Laya.Vector4(0.8, 0.8, 0.8, 1);
        let panelObj = new Laya.MeshSprite3D(panelMesh, "floor");
        panelObj.meshRenderer.material = panelMat;
        panelObj.meshRenderer.receiveShadow = true;
        this._s3d.addChild(panelObj);
        panelObj.transform.localPosition = new Laya.Vector3(0, 0, 0);

        let collider = this._world.add({
            type: 'box',
            size: [this._panelSize, 1, this._panelSize],
            pos: [0, 0, 0], // start position in degree
            rot: [0, 0, 0], // start rotation in degree
            move: false, // dynamic or statique
            belongsTo: 1, // The bits of the collision groups to which the shape belongs.
            collidesWith: 0xffffffff // The bits of the collision groups with which the shape collides.
        } as any);

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

        this._world.timeStep = dt;
        this._world.step();

        for (let i = 0; i < this._cubeObjs.length; ++i) {
            let cubeObj = this._cubeObjs[i];
            let rig = this._cubeRigs[i];
            let pos = rig.position;
            Vector3Ex.cacheVec0.setValue(pos.x, pos.y, pos.z);
            cubeObj.transform.position = Vector3Ex.cacheVec0;
            let rot = rig.quaternion;
            QuaternionEx.cacheVec0.x = rot.x;
            QuaternionEx.cacheVec0.y = rot.y;
            QuaternionEx.cacheVec0.z = rot.z;
            QuaternionEx.cacheVec0.w = rot.w;
            cubeObj.transform.rotation = QuaternionEx.cacheVec0;

            cubeObj.meshRenderer.sharedMaterial = rig.sleeping ? this._sleepMaterial : this._cacheMaterial;
        }
    }

    private _cacheMaterial: Laya.BlinnPhongMaterial;
    private _sleepMaterial: Laya.BlinnPhongMaterial;
    private _cacheMesh: Laya.Mesh;
    private _GenCube() {

        let cubeObj = new Laya.MeshSprite3D(this._cacheMesh, "cube");
        cubeObj.meshRenderer.sharedMaterial = this._cacheMaterial;
        this._s3d.addChild(cubeObj);
        let size = new Laya.Vector3(MathEx.Random(0.5, 2), MathEx.Random(0.5, 2), MathEx.Random(0.5, 2));
        cubeObj.transform.localPosition = new Laya.Vector3(MathEx.Random(-5, 5), this._panelSize, MathEx.Random(-5, 5));
        cubeObj.transform.localRotationEuler = new Laya.Vector3(MathEx.Random(0, 360), MathEx.Random(0, 360), MathEx.Random(0, 360));
        cubeObj.transform.localScale = size
        cubeObj.meshRenderer.castShadow = true;
        cubeObj.meshRenderer.receiveShadow = true;

        let rig = this._world.add({
            type: 'box',
            size: [size.x, size.y, size.z],
            pos: [cubeObj.transform.localPosition.x, cubeObj.transform.localPosition.y, cubeObj.transform.localPosition.z], // start position in degree
            rot: [cubeObj.transform.localRotationEuler.x, cubeObj.transform.localRotationEuler.y, cubeObj.transform.localRotationEuler.z], // start rotation in degree
            move: true, // dynamic or statique
            density: 1,
            friction: 0.8,
            restitution: 0.2,
            belongsTo: 1, // The bits of the collision groups to which the shape belongs.
            collidesWith: 0xffffffff // The bits of the collision groups with which the shape collides.
        } as any);

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