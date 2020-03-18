import GameManager from "../manager/GameManager";
import CameraManager from "../manager/CameraManager";

export default class GlobalUnit {

    static s3d: Laya.Scene3D;

    static gameManager: GameManager;
    static cameraManager: CameraManager;

    static InitAll() {
        this.s3d = Laya.stage.addChildAt(new Laya.Scene3D(), 0) as Laya.Scene3D;

        this.gameManager = new GameManager();
        this.cameraManager = new CameraManager();
    }

}