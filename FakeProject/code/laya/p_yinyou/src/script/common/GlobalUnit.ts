
export default class GlobalUnit {

    static s3d: Laya.Scene3D;

    static InitAll() {
        this.s3d = Laya.stage.addChildAt(new Laya.Scene3D(), 0) as Laya.Scene3D;

    }

}