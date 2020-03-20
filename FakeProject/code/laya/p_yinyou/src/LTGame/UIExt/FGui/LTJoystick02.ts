export default class LTJoystick02 {

    private _pressBg: fgui.GObject;
    private _joystickBg: fgui.GObject;
    private _joystickBgOut: fgui.GObject;
    private _joystickFont: fgui.GObject;

    private _isPressed: boolean;
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
    private _radiusOut: number;

    public isFastMove: boolean;

    public get isPressed(): boolean {
        return this._isPressed;
    }

    private _cacheDragVec: Laya.Vector2;
    public get dragVec(): Laya.Vector2 {
        return this._cacheDragVec;
    }

    public Init(ui: any) {
        this._pressBg = ui;
        this._joystickBg = ui['m_joystick_bg'];
        this._joystickFont = ui['m_joystick_front'];
        this._joystickBgOut = ui['m_joystick_bg_out'];

        this._isPressed = false;
        this._pressBg.on(Laya.Event.MOUSE_DOWN, this, this._OnTouchDown);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this._OnTouchUp);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this._OnTouchMove);
        this._cacheInitPos = new Laya.Point(this._joystickBg.x, this._joystickBg.y);
        this._radius = this._joystickBg.width / 2;
        this._radiusOut = this._joystickBgOut.width / 2;
        this._pressBg.alpha = 0.5;
        this._cacheDragVec = new Laya.Vector2();
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
        this._joystickBgOut.setXY(point.x, point.y);
        this.isFastMove = false;
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
        this.isFastMove = false;
        if (distanceToPoint > this._radiusOut) {
            let scale = this._radiusOut / distanceToPoint;
            xOffset = xOffset * scale;
            yOffset = yOffset * scale;
            this._joystickFont.setXY(this._cacheCenterPos.x - xOffset, this._cacheCenterPos.y - yOffset);
            this.isFastMove = true;
        }
        else if (distanceToPoint > this._radius) {
            let scale = this._radius / distanceToPoint;
            xOffset = xOffset * scale;
            yOffset = yOffset * scale;
            this._joystickFont.setXY(this._cacheCenterPos.x - xOffset, this._cacheCenterPos.y - yOffset);
        } else {
            this._joystickFont.setXY(point.x, point.y);
        }

        this._cacheDragVec.x = xOffset;
        this._cacheDragVec.y = yOffset;
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
        this._joystickBgOut.setXY(point.x, point.y);

        this._cacheDragVec.x = 0;
        this._cacheDragVec.y = 0;
        this.isFastMove = false;
    }

    public Dispose() {
        this._pressBg.off(Laya.Event.MOUSE_DOWN, this, this._OnTouchDown);
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this._OnTouchUp);
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this._OnTouchMove);
    }

}