import ResDefine from "../common/ResDefine";
import GlobalUnit from "../common/GlobalUnit";
import { LTUtils } from "../../LTGame/LTUtils/LTUtils";
import RoadManager from "./RoadManager";
import PlayerManager from "./PlayerManager";
import { UI_DeadMediator } from "../ui/UI_DeadMediator";
import { UI_FightMediator } from "../ui/UI_FightMediator";
import Awaiters from "../../LTGame/Async/Awaiters";

export default class GameManager {

    public roadManager: RoadManager;
    public playerManager: PlayerManager;
    private _lightObj: Laya.DirectionLight;

    private _isRunning: boolean;
    public get isRunning(): boolean {
        return this._isRunning;
    }

    constructor() {
        this.roadManager = new RoadManager();
        this.playerManager = new PlayerManager();
        this._isRunning = false;
    }

    public Preload(urls: string[]) {
        urls.push(ResDefine.FixPath(ResDefine.light_path));

        this.roadManager.Preload(urls);
        this.playerManager.Preload(urls);
        GlobalUnit.cameraManager.Preload(urls);
    }

    public async CreateGame() {
        if (this._lightObj == null) {
            this._lightObj = GlobalUnit.s3d.addChild(LTUtils.GetRes(ResDefine.FixPath(ResDefine.light_path), true)) as Laya.DirectionLight;
        } else {
            GlobalUnit.s3d.addChild(this._lightObj);
        }

        this.playerManager.CreatePlayer();
        await this.roadManager.CreateRoad();

        GlobalUnit.cameraManager.CreateCamera();
    }

    public ClearGame() {
        // 移除相机
        GlobalUnit.cameraManager.ClearCamera();
        // 移除光照
        this._lightObj.removeSelf();
        // 销毁场景
        GlobalUnit.s3d.destroyChildren();
    }

    public StartGame() {
        this.roadManager.StartGame();
        this._isRunning = true;
    }

    public StopGame() {
        this.roadManager.StopGame();
        this._isRunning = false;
        UI_FightMediator.instance.Hide();
    }

    public LogicUpdate(dt: number) {
        if (!this._isRunning) {
            return;
        }
        this.roadManager.LogicUpdate(dt);
        this.playerManager.LogicUpdate(dt);
    }

    public LateUpdate(dt: number) {
        if (!this._isRunning) {
            return;
        }
        GlobalUnit.cameraManager.LateUpdate(dt);
    }

}