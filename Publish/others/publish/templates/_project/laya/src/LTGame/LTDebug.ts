import Vector3Ex from "./LTUtils/Vector3Ex";

export default class LTDebug {

    static DrawRay(s3d: Laya.Scene3D, ray: Laya.Ray, during: number, color: Laya.Color) {
        let pix = new Laya.PixelLineSprite3D(1);
        pix.addLine(ray.origin, Vector3Ex.Add(Vector3Ex.Scale(ray.direction, 100), ray.origin), color, color);
        s3d.addChild(pix);
        Laya.timer.once(during, null, () => { pix.destroy(); });
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

    public static CreateSphere(s3d : Laya.Scene3D, pos: Laya.Vector3, scale: number = 0.5, color : Laya.Color = Laya.Color.WHITE): Laya.Sprite3D {
        //添加自定义模型
        var sphere: Laya.MeshSprite3D = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createSphere(scale));
        let mat = new Laya.BlinnPhongMaterial();
        mat.albedoColor = new Laya.Vector4(color.r, color.g, color.b , 1);
        sphere.meshRenderer.material = mat;
        s3d.addChild(sphere);
        sphere.transform.position = pos;
        return sphere;
    }

}