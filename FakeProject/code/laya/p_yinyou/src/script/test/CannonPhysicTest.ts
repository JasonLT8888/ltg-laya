import { ITest } from "./ITest";
import UI_TestMediator from "../ui/UI_TestMediator";
import UI_FunctionTestMediator from "../ui/UI_FunctionTestMediator";
import MonoHelper, { EActionType } from "../../LTGame/LTUtils/MonoHelper";
import MathEx from "../../LTGame/LTUtils/MathEx";
import Awaiters from "../../LTGame/Async/Awaiters";
import Vector3Ex from "../../LTGame/LTUtils/Vector3Ex";
import QuaternionEx from "../../LTGame/LTUtils/QuaternionEx";

export class CannonPhysicTest implements ITest {

    name: string = "Cannon物理";

    private _s3d: Laya.Scene3D;
    private _world: CANNON.World;

    private _isPressed: boolean = false;
    private _touchId: number;
    private _remainTime: number;

    private _panelSize: number = 50;

    private _cubeObjs: Laya.MeshSprite3D[];
    private _cubeRigs: CANNON.Body[];

    Create() {
        this._s3d = new Laya.Scene3D();
        Laya.stage.addChildAt(this._s3d, 1);
        this._world = new CANNON.World();
        this._world.gravity.set(0, -9.82, 0);
        this._world.allowSleep = true;

        let panelMesh = Laya.PrimitiveMesh.createPlane(this._panelSize, this._panelSize, 1, 1);
        let panelMat = new Laya.BlinnPhongMaterial();
        panelMat.albedoColor = new Laya.Vector4(0.8, 0.8, 0.8, 1);
        let panelObj = new Laya.MeshSprite3D(panelMesh, "floor");
        panelObj.meshRenderer.material = panelMat;
        panelObj.meshRenderer.receiveShadow = true;
        this._s3d.addChild(panelObj);
        panelObj.transform.localPosition = new Laya.Vector3(0, 0, 0);

        let panelBody = new CANNON.Body({
            mass: 0,
            position: new CANNON.Vec3(0, -1, 0),
            quaternion: new CANNON.Quaternion(
                panelObj.transform.rotation.x,
                panelObj.transform.rotation.y,
                panelObj.transform.rotation.z,
                panelObj.transform.rotation.w)
        });
        let panelShape = new CANNON.Box(new CANNON.Vec3(this._panelSize / 2, 1, this._panelSize / 2));
        panelBody.addShape(panelShape);
        this._world.addBody(panelBody);

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

        this._world.step(dt, 0, 1);

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

            cubeObj.meshRenderer.sharedMaterial = rig.sleepState == CANNON.Body.SLEEPING ? this._sleepMaterial : this._cacheMaterial;
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

        let rig = new CANNON.Body({
            position: new CANNON.Vec3(cubeObj.transform.position.x, cubeObj.transform.position.y, cubeObj.transform.position.z),
            quaternion: new CANNON.Quaternion(
                cubeObj.transform.rotation.x,
                cubeObj.transform.rotation.y,
                cubeObj.transform.rotation.z,
                cubeObj.transform.rotation.w,
            ),
            mass: 10
        });
        let boxShape = new CANNON.Box(new CANNON.Vec3(size.x / 2, size.y / 2, size.z / 2));
        rig.addShape(boxShape);
        this._world.addBody(rig);

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