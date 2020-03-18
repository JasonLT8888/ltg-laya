import GameConst from "../common/GameConst";
import MathEx from "../../LTGame/LTUtils/MathEx";
import GlobalUnit from "../common/GlobalUnit";
import LayerDefine from "../common/LayerDefine";
import AudioManager from "../manager/AudioManager";
import { PropConfig } from "../config/PropConfig";
import { UI_FightMediator } from "../ui/UI_FightMediator";
import { UI_DeadMediator } from "../ui/UI_DeadMediator";
import { UI_PassMediator } from "../ui/UI_PassMediator";

export default class ModelPlayer {

    public posX: number;
    public posZ: number;
    private _lastPosX: number;
    private _lastPosZ: number;
    private _viewObj: Laya.Sprite3D;
    private _checkFromPos: Laya.Vector3;
    private _checkToPos: Laya.Vector3;
    private _hitResults: Laya.HitResult[];

    private _checkShape: Laya.ColliderShape;

    public comboCount: number;

    constructor(obj: Laya.Sprite3D) {
        this.posX = 0;
        this.posZ = 0;
        this._lastPosX = 0;
        this._lastPosZ = 0;
        this._viewObj = obj;
        this.comboCount = 0;

        this._checkFromPos = new Laya.Vector3(0, 0.5, 0);
        this._checkToPos = new Laya.Vector3(0, 0.5, 0);
        this._hitResults = [];

        let colliderObj = obj.getChildAt(1);
        let colliderCmp = colliderObj.getComponent(Laya.PhysicsCollider) as Laya.PhysicsCollider;
        this._checkShape = colliderCmp.colliderShape;
        colliderObj.active = false;
    }

    public MoveX(xP: number) {
        if (!GlobalUnit.gameManager.isRunning) return;
        this.posX = MathEx.Clamp(this.posX + xP * GameConst.moveSpeedX, -GameConst.halfRoadWidth, GameConst.halfRoadWidth);
        this._viewObj.transform.localPositionX = this.posX;
    }

    public LogicUpdate(dt: number) {
        this.posZ += dt * GameConst.moveSpeedZ;
        this._viewObj.transform.localPositionZ = this.posZ;

        // 检查碰撞
        this._checkFromPos.x = this._lastPosX;
        this._checkFromPos.z = this._lastPosZ;
        this._checkToPos.x = this.posX;
        this._checkToPos.z = this.posZ;
        GlobalUnit.s3d.physicsSimulation.shapeCastAll(this._checkShape, this._checkFromPos, this._checkToPos,
            this._hitResults);
        for (let i = 0; i < this._hitResults.length; ++i) {
            let hitResult = this._hitResults[i];
            if (!hitResult.succeeded) {
                continue;
            }
            let ownerName = hitResult.collider.owner.name;
            switch (ownerName) {
                case "1":
                    // 销毁
                    hitResult.collider.owner.destroy();
                    let propConfig = PropConfig.data[1];
                    AudioManager.instance.PlayById(propConfig.audio_id);
                    this.comboCount++;
                    UI_FightMediator.instance.UpdateComboCount(this.comboCount);
                    break;
                case "2":
                    // 游戏结束
                    GlobalUnit.gameManager.StopGame();
                    UI_DeadMediator.instance.Show();
                    break;
                default:
                    console.error("暂未处理的道具类型", ownerName);
                    break;
            }
        }

        this._lastPosZ = this.posZ;
        this._lastPosX = this.posX;

        if (this.posZ >= GlobalUnit.gameManager.roadManager.totalDistance) {
            GlobalUnit.gameManager.StopGame();
            UI_PassMediator.instance.Show();
        }
    }

}