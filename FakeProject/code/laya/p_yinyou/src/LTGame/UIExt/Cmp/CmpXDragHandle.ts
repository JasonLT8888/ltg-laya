import MonoHelper, { EActionType } from "../../LTUtils/MonoHelper";

export class CmpXDragHandle {

    public ui: fgui.GObject;

    public isPressed: boolean;
    public xOffset: number;
    private _cacheTouchId: number;
    private _lastCacheX: number;
    private _cacheX: number;

    constructor(ui: fgui.GObject) {
        this.ui = ui;

        this.isPressed = false;
        this.xOffset = 0;
        this.ui.on(Laya.Event.MOUSE_DOWN, this, this._OnMouseDown);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this._OnMouseMove);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this._OnMouseUp);

        MonoHelper.instance.AddAction(EActionType.Update, this, this._LogicUpdate);
    }

    private _OnMouseDown(event: Laya.Event) {
        if (this.isPressed) return;
        this.isPressed = true;
        this._cacheTouchId = event.touchId;
        this._cacheX = event.stageX;
        this._lastCacheX = event.stageX;
    }

    private _OnMouseMove(event: Laya.Event) {
        if (!this.isPressed) return;
        if (event.touchId != this._cacheTouchId) return;
        this._cacheX = event.stageX;
    }

    private _LogicUpdate(dt: number) {
        if (this.isPressed) {
            this.xOffset = this._cacheX - this._lastCacheX;
            this._lastCacheX = this._cacheX;
        }
    }

    private _OnMouseUp(event: Laya.Event) {
        if (!this.isPressed) return;
        if (event.touchId != this._cacheTouchId) return;
        this.isPressed = false;
        this.xOffset = 0;
    }

    public Dispose() {
        MonoHelper.instance.RemoveAction(EActionType.Update, this, this._LogicUpdate);

        this.ui.off(Laya.Event.MOUSE_DOWN, this, this._OnMouseDown);
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this._OnMouseMove);
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this._OnMouseUp);
    }

}