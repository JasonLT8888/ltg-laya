import StateMachine from "../Fsm/StateMachine";
import LTPlatform from "../Platform/LTPlatform";
import LTPlatformData from "../Platform/Data/LTPlatformData";
import { LoadPackConfig } from "../Config/LoadPackConfig";
import LTRespackManager from "../Res/LTRespackManager";
import { EPlatformType } from "../Platform/EPlatformType";
import FGuiEx from "../UIExt/FGui/FGuiEx";
import MonoHelper, { EActionType } from "../LTUtils/MonoHelper";
import BaseState from "../Fsm/BaseState";
import LTVersion from "../LTVersion";

export class LTStart {

    private _jsonPath = "subpack.json";

    protected _fsm: StateMachine<BaseState>;

    private get _currentState(): BaseState {
        return this._fsm.currState;
    }

    private __enableStat: boolean = false;
    protected get _enableStat(): boolean {
        return this.__enableStat;
    }
    protected set _enableStat(value: boolean) {
        if (value == this.__enableStat) return;
        Laya.Stat.show();
        this.__enableStat = value;
    }

    constructor() {
        console.log("游戏开始初始化,当前框架版本号", LTVersion.version);

        Laya.loader.load(this._jsonPath, Laya.Handler.create(this, this._OnJsonLoaded));
    }

    private _OnJsonLoaded() {
        LTPlatform.CreateInstance();
        let platformData = new LTPlatformData();
        let loadJson = Laya.loader.getRes(this._jsonPath);
        Laya.loader.clearRes(this._jsonPath);
        if (loadJson != null) {
            for (let i = 0; i < loadJson.length; ++i) {
                let jsonData = loadJson[i] as LoadPackConfig;
                console.log("自动设置分包", jsonData);
                LTRespackManager.instance.AddPackData(jsonData);
            }
        }

        this._HandleInitPlatform(LTPlatform.instance.platform, platformData);
        this._HandleSDK();
        LTPlatform.instance.Init(platformData);


        // 非web平台禁用debug模式
        if (LTPlatform.instance.platform != EPlatformType.Web) {
            Laya.Shader3D.debugMode = false;
        }

        FGuiEx.Init(LTPlatform.instance.safeArea);


        Laya.timer.frameOnce(1, this, this._NextFramUpdate);
    }

    private _NextFramUpdate() {
        this._fsm = new StateMachine<BaseState>();
        this._InitFsm();

        if (this._fsm.count == 0) {
            console.error("请在_InitFsm中先进行状态注册");
            return;
        }
        this._fsm.ChangeState(1);

        this._RegistUpdate();
    }

    private _RegistUpdate() {
        MonoHelper.instance.AddAction(EActionType.Update, this, this._LogicUpdate);
        MonoHelper.instance.AddAction(EActionType.LateUpdate, this, this._LateUpdate);
    }

    private _UnRegistUpdate() {
        MonoHelper.instance.RemoveAction(EActionType.Update, this, this._LogicUpdate);
        MonoHelper.instance.RemoveAction(EActionType.LateUpdate, this, this._LateUpdate);
    }

    protected _HandleSDK() {

    }

    protected _HandleInitPlatform(ePlatform: EPlatformType, platformData: LTPlatformData) {

    }

    _LogicUpdate() {
        let dt = Laya.timer.delta / 1000;
        let nextState = this._currentState.GetNextState();
        if (nextState != 0) {
            var changeResult = this._fsm.ChangeState(nextState, null);
            if (!changeResult) {
                console.error("场景切换发生错误,无法进行切换,终止游戏流程");
                this._UnRegistUpdate();
                return;
            }
        }
        this._fsm.OnRunning(null, dt);
    }

    _LateUpdate() {
        let dt = Laya.timer.delta / 1000;
        this._currentState.OnLateUpdate(dt);
    }

    protected _InitFsm() {
    }

}