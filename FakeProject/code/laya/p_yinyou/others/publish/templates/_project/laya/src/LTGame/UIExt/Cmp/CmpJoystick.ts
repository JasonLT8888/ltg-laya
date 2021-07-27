import Vector2Ex from "../../LTUtils/Vector2Ex";

export class CmpJoystick {

    private _isPressed: boolean;
    private _cacheTouchId: number;
    private _isDragged: boolean;

    private _imgHandleBg: fgui.GObject;
    private _imgHandleFront: fgui.GObject;
    private _imgBg: fgui.GObject;

    public radius: number;

    public get isPressed(): boolean {
        return this._isPressed;
    }

    public get isDragged(): boolean {
        return this._isDragged;
    }

    public dragVec: Laya.Vector2;

    constructor(imgBg: fgui.GObject, handleBg: fgui.GObject, handleFront: fgui.GObject) {
        this._imgBg = imgBg;
        this._imgHandleBg = handleBg;
        this._imgHandleFront = handleFront;

        this._isPressed = false;
        this._isDragged = false;
        this.radius = this._imgHandleBg.width / 2;
        this.dragVec = new Laya.Vector2(0, 0);

        this._imgBg.on(Laya.Event.MOUSE_DOWN, this, this._OnMouseDown);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this._OnMouseMove);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this._OnMouseUp);
        Laya.stage.on(Laya.Event.MOUSE_OUT, this, this._OnMouseUp);

        this._imgHandleBg.visible = false;
        this._imgHandleFront.visible = false;
    }

    private _OnMouseDown(event: Laya.Event) {
        if (this.isPressed) return;
        this._isPressed = true;
        this._cacheTouchId = event.touchId;

        this._imgHandleBg.setXY(event.stageX, event.stageY);
        this._imgHandleFront.setXY(event.stageX, event.stageY);
        this._isDragged = false;
        this.dragVec.setValue(0, 0);

        this._imgHandleBg.visible = true;
        this._imgHandleFront.visible = true;
    }

    private _OnMouseMove(event: Laya.Event) {
        if (!this.isPressed) return;
        if (this._cacheTouchId != event.touchId) return;

        this._imgHandleFront.setXY(event.stageX, event.stageY);
        this.dragVec.setValue(event.stageX - this._imgHandleBg.x,
            event.stageY - this._imgHandleBg.y);;
        let distance = Vector2Ex.Magnitude(this.dragVec);
        if (distance > this.radius) {
            Laya.Vector2.scale(this.dragVec, (distance - this.radius) / distance, this.dragVec);
            this._imgHandleBg.x += this.dragVec.x;
            this._imgHandleBg.y += this.dragVec.y;
        }
        if (distance > 0) {
            this._isDragged = true;
        }

    }

    private _OnMouseUp(event: Laya.Event) {
        if (!this.isPressed) return;
        if (this._cacheTouchId != event.touchId) return;
        this._isPressed = false;
        this._isDragged = false;

        this._imgHandleBg.visible = false;
        this._imgHandleFront.visible = false;
    }

    public Dispose() {
        this._imgBg.off(Laya.Event.MOUSE_DOWN, this, this._OnMouseDown);
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this._OnMouseMove);
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this._OnMouseUp);
        Laya.stage.off(Laya.Event.MOUSE_OUT, this, this._OnMouseUp);
    }

}