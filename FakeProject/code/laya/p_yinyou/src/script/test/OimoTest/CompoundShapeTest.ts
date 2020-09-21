import { BaseOimoTest } from "./BaseOimoTest";
import LTUI from "../../../LTGame/UIExt/LTUI";
import LTRes from "../../../LTGame/Res/LTRes";
import ResDefine from "../../common/ResDefine";
import MathEx from "../../../LTGame/LTUtils/MathEx";
import QuaternionEx from "../../../LTGame/LTUtils/QuaternionEx";
import { OimoHelper } from "../../../LTGame/Physics/OimoHelper";

const shape_01 = "compound_01";

export class CompoundShapeTest extends BaseOimoTest {

    name = "组合碰撞体测试";

    async _OnCreate() {

        LTUI.ShowLoading("资源加载中...");

        this._CreateStaticPanel(new Laya.Vector3(0, 0, 0), 20, 20);
        let sampleObj: Laya.Sprite3D = await LTRes.LoadAndGet(ResDefine.FixPath(shape_01), true);
        for (let i = 0; i < 5; ++i) {
            let obj = sampleObj.clone() as Laya.Sprite3D;
            let randomPos = new Laya.Vector3(MathEx.Random(-3, 3), MathEx.Random(5, 8), MathEx.Random(-3, 3));
            let randomRot = QuaternionEx.Euler(MathEx.Random(0, 360), MathEx.Random(0, 360), MathEx.Random(0, 360));
            this._s3d.addChild(obj);
            obj.transform.position = randomPos;
            obj.transform.rotation = randomRot;

            let rig = OimoHelper.CreateRigbody(randomPos, randomRot, OIMO.RigidBodyType.DYNAMIC);
            for (let j = 0; j < obj.numChildren; ++j) {
                let getChild = obj.getChildAt(j) as Laya.MeshSprite3D;
                if (getChild.name.startsWith("Sphere ")) {
                    let shape = OimoHelper.CreateSphere(getChild.transform.localScale.x / 2, 1, 1,
                        getChild.transform.localPosition, getChild.transform.localRotation);
                    rig.addShape(shape);
                } else {
                    let shape = OimoHelper.CreateBox(getChild.transform.localScale, 1, 1,
                        getChild.transform.localPosition, getChild.transform.localRotation);
                    rig.addShape(shape);
                }
            }
            rig.userData = obj;
            this._world.addRigidBody(rig);
        }

        LTUI.HideLoading();
    }

}