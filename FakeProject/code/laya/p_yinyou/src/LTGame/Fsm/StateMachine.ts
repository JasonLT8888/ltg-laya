import BaseState from "./BaseState";

export default class StateMachine<T extends BaseState<any>> {

    private _states: Map<number, T>;

    constructor() {
        this._states = new Map<number, T>();
    }

    public get count(): number {
        return this._states.size;
    }

    public currState: T;
    public lastState: T;

    private _forceChangeState: number = 0;
    private _forceChangeParam: any;

    public Add(addState: T): boolean {
        if (this._states.has(addState.id)) {
            return false;
        }
        this._states.set(addState.id, addState);
        return true;
    }

    public Remove(id: number): boolean {
        return this._states.delete(id);
    }

    public RemoveAll(): void {
        this._states.clear();
        this.currState = null;
    }

    public ExitCurrState(param: any = null): void {
        if (null != this.currState) {
            this.currState.OnExit(null, param);
            this.currState = null;
        }
    }

    public ChangeState(id: number, param: any = null): boolean {
        var state = this.Find(id);
        if (state != null) {
            if (null != this.currState) {
                this.currState.OnExit(state, param);
            }
            this.lastState = this.currState;
            this.currState = state;
            state.OnEnter(this.lastState, param);
            return true;
        }
        console.error("[状态机] 不存在的状态ID:" + id);
        return false;
    }

    public SetForceChangeState(id: number, param: any = null) {
        this._forceChangeState = id;
        this._forceChangeParam = param;
    }

    public LogicUpdate(dt: number) {
        if (this.currState == null) {
            if (this._forceChangeState != 0) {
                this.ChangeState(this._forceChangeState, this._forceChangeParam);
                this._forceChangeState = 0;
                this._forceChangeParam = null;
                this.OnRunning(null, dt);
            }
            return;
        }

        if (this._forceChangeState != 0) {
            this.ChangeState(this._forceChangeState, this._forceChangeParam);
            this._forceChangeState = 0;
            this._forceChangeParam = null;
            this.OnRunning(null, dt);
            return;
        }

        let nextState = this.currState.GetNextState();
        if (nextState != 0) {
            this.ChangeState(nextState);
        }
        this.OnRunning(null, dt);
    }

    public OnRunning(param: any, dt: number): void {
        if (null == this.currState) {
            return;
        }
        this.currState.OnRunning(param, dt);
    }

    public Find(id: number): T {
        return this._states.get(id);
    }
}