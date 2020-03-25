import Vector2Ex from "../../LTUtils/Vector2Ex";

export default class LTJoystick01 {

    private _pressBg: fgui.GObject;
    private _joystickBg: fgui.GObject;
    private _joystickFont: fgui.GObject;

    private _isPressed: boolean = false;
    private _cacheTouchId: number;

    private _cacheInitPos: Laya.Point;
    private _cacheCenterPos: Laya.Point;

    public get active(): boolean {
        if (this._pressBg) return this._pressBg.visible;
        return false;
    }

    public set active(v: boolean) {
        if (this._pressBg) {
            this._pressBg.visible = v;
        }
    }

    private _radius: number;
    private _radius_Out: number;
    public get radius(): number {
        if (this._radius_Out) {
            return this._radius_Out;
        }
        return this._radius;
    }

    public set raidus(v: number) {
        this._radius_Out = v;
    }

    public get isPressed(): boolean {
        return this._isPressed;
    }

    private _cacheDragVec: Laya.Vector2;
    public get dragVec(): Laya.Vector2 {
        return this._cacheDragVec;
    }

    private _cacheUp: Laya.Vector2 = new Laya.Vector2(0, 1);

    private _cacheYaw: number = 0;
    public get yaw(): number {
        return this._cacheYaw;
    }

    public Init(ui: any) {
        this._pressBg = ui;
        this._joystickBg = ui['m_joystick_bg'];
        this._joystickFont = ui['m_joystick_front'];

        this._isPressed = false;
        this._pressBg.on(Laya.Event.MOUSE_DOWN, this, this._OnTouchDown);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this._OnTouchUp);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this._OnTouchMove);
        this._cacheInitPos = new Laya.Point(this._joystickBg.x, this._joystickBg.y);
        this._radius = this._joystickBg.width / 2;
        this._pressBg.alpha = 0.5;
        this._cacheDragVec = new Laya.Vector2();
        this._cacheYaw = 0;
    }

    private _OnTouchDown(event: Laya.Event) {
        if (this._isPressed) return;
        this._isPressed = true;
        this._cacheTouchId = event.touchId;
        this._pressBg.alpha = 1;
        // 设置遥感位置
        let point = this._pressBg.globalToLocal(event.stageX, event.stageY);
        this._cacheCenterPos = point;
        this._joystickBg.setXY(point.x, point.y);
        this._joystickFont.setXY(point.x, point.y);
    }

    private _OnTouchMove(event: Laya.Event) {
        if (this._pressBg == null) return;
        if (!this._isPressed) return;
        if (event.touchId != this._cacheTouchId) return;

        // 移动遥感操作区域
        let point = this._pressBg.globalToLocal(event.stageX, event.stageY);
        let xOffset = this._cacheCenterPos.x - point.x;
        let yOffset = this._cacheCenterPos.y - point.y;
        let distanceToPoint = Math.sqrt(xOffset * xOffset + yOffset * yOffset);
        if (distanceToPoint > this.radius) {
            let scale = this.radius / distanceToPoint;
            xOffset = xOffset * scale;
            yOffset = yOffset * scale;
            this._joystickFont.setXY(this._cacheCenterPos.x - xOffset, this._cacheCenterPos.y - yOffset);
        } else {
            this._joystickFont.setXY(point.x, point.y);
        }

        this._cacheDragVec.x = xOffset;
        this._cacheDragVec.y = yOffset;
        this._cacheYaw = -Vector2Ex.SignedAngle(this._cacheUp, this._cacheDragVec);
    }

    private _OnTouchUp(event: Laya.Event) {
        if (this._pressBg == null) return;
        if (!this._isPressed) return;
        if (event.touchId != this._cacheTouchId) return;
        this._isPressed = false;
        this._pressBg.alpha = 0.5;
        // 还原遥感位置
        let point = this._cacheCenterPos;
        this._joystickBg.setXY(point.x, point.y);
        this._joystickFont.setXY(point.x, point.y);

        // 这里不重置
        this._cacheDragVec.x = 0;
        this._cacheDragVec.y = 0;
        this._cacheYaw = 0;
    }

    public Dispose() {
        this._pressBg.off(Laya.Event.MOUSE_DOWN, this, this._OnTouchDown);
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this._OnTouchUp);
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this._OnTouchMove);
    }

}