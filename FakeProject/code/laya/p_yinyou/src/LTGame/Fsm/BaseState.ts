export default class BaseState {
    public id: any;
    public isFinished: boolean;
    public nextState: any;
    public passTime: number;
    public deltaTime: number;

    constructor(id) {
        this.id = id;
    }

    public GetNextState(): any {
        if (this.isFinished) {
            return this.nextState;
        }
        return 0;
    }

    public OnEnter(exitState: BaseState, param: any) {
        this.isFinished = false;
        this.nextState = 0;
        this.passTime = 0;
        this.deltaTime = 0;
        this._DoEnter(exitState, param);
    }

    public OnRunning(param: any, dt: number) {
        if (this.isFinished) return;
        this.deltaTime = dt;
        this.passTime += dt;
        this._DoRunning(param);
    }

    public OnExit(enterState: BaseState, param: any) {
        this._DoExit(enterState, param);
    }

    protected _DoEnter(exitStte, param) { }
    protected _DoRunning(param) { }
    protected _DoExit(enterState, param) { }
}