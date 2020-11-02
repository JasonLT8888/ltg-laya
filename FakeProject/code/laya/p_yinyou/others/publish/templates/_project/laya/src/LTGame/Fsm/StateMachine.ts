import LTDictionary from "../LTUtils/LTDictionary";
import BaseState from "./BaseState";

export default class StateMachine<T extends BaseState> {
    private _states: LTDictionary<number, T>;

    constructor() {
        this._states = new LTDictionary<number, T>();
    }

    public get count(): number {
        return this._states.count;
    }

    public currState: T;
    public lastState: T;

    public Add(addState: T): boolean {
        return this._states.Add(addState.id, addState);
    }

    public Remove(id: number): boolean {
        return this._states.Remove(id);
    }

    public RemoveAll(): void {
        this._states.Clear();
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
        console.error("不存在的状态ID:" + id);
        return false;
    }

    public LogicUpdate(dt: number) {
        if(this.currState == null) return;
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
        return this._states.Get(id);
    }
}