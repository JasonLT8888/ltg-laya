export default class MonoHelper extends Laya.Script {

    private static _instance;
    public static get instance(): MonoHelper {
        if (this._instance == null) {
            let monoHelper = new Laya.Sprite();
            this._instance = monoHelper.addComponent(MonoHelper);
            Laya.stage.addChild(monoHelper);
        }
        return this._instance;
    }

    private _updateActions: Laya.Handler[] = [];
    private _lateUpdateActions: Laya.Handler[] = [];

    private _GetActionList(actionType: EActionType): Laya.Handler[] {
        switch (actionType) {
            case EActionType.Update:
                return this._updateActions;
            case EActionType.LateUpdate:
                return this._lateUpdateActions;
            default:
                console.error("未处理的actionType类型", actionType);
                return null;
        }
    }

    public AddAction(actionType: EActionType, caller: any, func: Function, args?: any[] | null) {
        let list = this._GetActionList(actionType);
        if (list == null) return;
        for (let i = 0; i < list.length; ++i) {
            let handleInList = list[i];
            if (handleInList.caller == caller && handleInList.method == func) {
                console.warn("已存在重复注册事件,取消注册");
                return;
            }
        }
        let handle = Laya.Handler.create(caller, func, args, false);
        list.push(handle);
    }

    public RemoveAction(actionType: EActionType, caller: any, func: Function) {
        let list = this._GetActionList(actionType);
        if (list == null) return;
        for (let i = 0; i < list.length; ++i) {
            let handleInList = list[i];
            if (handleInList.caller == caller && handleInList.method == func) {
                list = list.splice(i, 1);
                return;
            }
        }
    }

    onUpdate() {
        for (let i = 0; i < this._updateActions.length; ++i) {
            let action = this._updateActions[i];
            action.run();
        }
    }

    onLateUpdate() {
        for (let i = 0; i < this._lateUpdateActions.length; ++i) {
            let action = this._lateUpdateActions[i];
            action.run();
        }
    }

    onDestroy() {
        MonoHelper._instance = null;
    }

}

export enum EActionType {

    Update,
    LateUpdate,

}