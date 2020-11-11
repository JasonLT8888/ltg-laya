import StateMachine from "../Fsm/StateMachine";
import LTPlatform from "../Platform/LTPlatform";
import LTPlatformData from "../Platform/Data/LTPlatformData";
import { EPlatformType } from "../Platform/EPlatformType";
import FGuiEx from "../UIExt/FGui/FGuiEx";
import MonoHelper, { EActionType } from "../LTUtils/MonoHelper";
import BaseState from "../Fsm/BaseState";
import LTVersion from "../LTVersion";
import { EScreenOrientation } from "../Commom/EScreenOrientation";
import LTSDK from "../../SDK/LTSDK";
import SDK_Default from "../../SDK/Impl/SDK_Default";
import Awaiters from "../Async/Awaiters";

export class LTStart {


    protected _fsm: StateMachine<BaseState>;

    private get _currentState(): BaseState {
        return this._fsm.currState;
    }

    public enableStat: boolean = false;

    public screenOrientation: EScreenOrientation = EScreenOrientation.Portrait;

    public get designWidth(): number {
        switch (this.screenOrientation) {
            case EScreenOrientation.Portrait:
                return 750;
            case EScreenOrientation.Landscape:
                return 1334;
            default:
                console.error("未处理的屏幕初始化方向", this.screenOrientation);
                return 0;
        }
    }

    public get designHeight(): number {
        switch (this.screenOrientation) {
            case EScreenOrientation.Portrait:
                return 1334;
            case EScreenOrientation.Landscape:
                return 750;
            default:
                console.error("未处理的屏幕初始化方向", this.screenOrientation);
                return 0;
        }
    }

    constructor() {

    }

    public InitGame() {
        LTPlatform.CreateInstance();
        console.log("游戏开始初始化,当前框架版本号", LTVersion.version);
        this._Init();
    }

    private async _Init() {
        let platformData = new LTPlatformData();

        this._HandleInitPlatform(LTPlatform.instance.platform, platformData);
        LTPlatform.instance.Init(platformData);

        this._HandleSDK();
        if (!LTSDK.isInited) {
            LTSDK.CreateInstace(SDK_Default, "default", "default", "default");
        }

        /* 2.6.0 版本之后 该设置已经变为默认false,无需手动禁用,如果后期调整,再进行打开
        // 非web平台禁用debug模式
        if (LTPlatform.instance.platform != EPlatformType.Web) {
            Laya.Shader3D.debugMode = false;
        }
        */
        if (LTPlatform.instance.platform != EPlatformType.Web) {
            while (!LTPlatform.instance.safeArea) {
                await Awaiters.NextFrame();
            }
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

    _LogicUpdate(dt: number) {
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