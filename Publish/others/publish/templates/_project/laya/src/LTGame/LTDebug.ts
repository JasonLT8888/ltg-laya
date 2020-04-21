import Vector3Ex from "./LTUtils/Vector3Ex";
import Awaiters from "./Async/Awaiters";

export default class LTDebug {

    static async DrawLine(startPoint: Laya.Vector3, stopPoint: Laya.Vector3, color: Laya.Color, during: number = null) {
        let s3d = window['s3d'] as Laya.Sprite3D;
        if (s3d == null) {
            console.error("无s3d对象,无法drawline");
            return;
        }
        let pix = new Laya.PixelLineSprite3D(1);
        pix.addLine(startPoint, stopPoint, color, color);
        s3d.addChild(pix);

        if (during) {
            await Awaiters.Seconds(during);
        } else {
            await Awaiters.NextFrame();
        }
        pix.destroy();
    }

    static async DrawRay(ray: Laya.Ray, color: Laya.Color, during: number = null) {
        this.DrawLine(ray.origin, Vector3Ex.Add(Vector3Ex.Scale(ray.direction, 100), ray.origin), color, during);
    }

    static PrintNodes(obj: Laya.Node, depth: number = 0) {
        if (obj == null) {
            console.log("null");
            return;
        }
        var printLine = "";
        for (var i = 0; i < depth; ++i) {
            printLine += "--|";
        }
        printLine += obj.name;
        console.log(printLine);
        for (var i = 0; i < obj.numChildren; ++i) {
            this.PrintNodes(obj.getChildAt(i), depth + 1);
        }
    }

    static PrintAvatarNodes(obj: Laya.AnimationNode, depth: number = 0) {
        if (obj == null) {
            console.log("null");
            return;
        }
        var printLine = "";
        for (var i = 0; i < depth; ++i) {
            printLine += "--|";
        }
        printLine += obj.name;
        console.log(printLine);
        for (var i = 0; i < obj.getChildCount(); ++i) {
            this.PrintAvatarNodes(obj.getChildByIndex(i), depth + 1);
        }
    }

    public static CreateSphere(s3d: Laya.Scene3D, pos: Laya.Vector3, scale: number = 0.5, color: Laya.Color = Laya.Color.WHITE): Laya.Sprite3D {
        //添加自定义模型
        var sphere: Laya.MeshSprite3D = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createSphere(scale));
        let mat = new Laya.BlinnPhongMaterial();
        mat.albedoColor = new Laya.Vector4(color.r, color.g, color.b, 1);
        sphere.meshRenderer.material = mat;
        s3d.addChild(sphere);
        sphere.transform.position = pos;
        return sphere;
    }

}