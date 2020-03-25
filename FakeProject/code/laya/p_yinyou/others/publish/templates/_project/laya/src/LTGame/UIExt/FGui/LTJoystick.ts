export default class LTJoystick {

    private _ui: any;

    private _init_joystick_pos: Laya.Vector2;
    private _joystick_radius = 200;
    private _joystick_radius_sqrt = this._joystick_radius * this._joystick_radius;

    private _is_pressed: boolean;
    private _drag_vec: Laya.Vector2;
    private _drag_vec_out: Laya.Vector2;
    private _touchId: number;

    public get dragVec() {
        this._drag_vec_out.x = this._drag_vec.x;
        this._drag_vec_out.y = this._drag_vec.y;
        return this._drag_vec_out;
    }

    public get isDragged() {
        return this._drag_vec.x != 0 || this._drag_vec.y != 0;
    }

    public get isPressed() {
        return this._is_pressed;
    }

    public Init(obj: any) {
        this._ui = obj;
        this._drag_vec = new Laya.Vector2(0, 0);
        this._drag_vec_out = new Laya.Vector2(0, 0);
        this._is_pressed = false;

        this._ui.on(Laya.Event.MOUSE_DOWN, this, this._OnDragStart);
        this._ui.on(Laya.Event.MOUSE_MOVE, this, this._OnDragMove);
        this._ui.on(Laya.Event.MOUSE_UP, this, this._OnDragEnd);

        this._init_joystick_pos = new Laya.Vector2(this._ui.m_joystick_bg.x, this._ui.m_joystick_bg.y);
    }

    public Dispose() {
        this._ui.off(Laya.Event.MOUSE_DOWN, this, this._OnDragStart);
        this._ui.off(Laya.Event.MOUSE_MOVE, this, this._OnDragMove);
        this._ui.off(Laya.Event.MOUSE_UP, this, this._OnDragEnd);
        this._ui = null;
    }

    private _OnDragStart(e: Laya.Event) {

        if (this._is_pressed) {
            return;
        }

        this._ui.m_joystick_bg.x = e.stageX;
        this._ui.m_joystick_bg.y = e.stageY;
        this._ui.m_joystick_handle.x = e.stageX;
        this._ui.m_joystick_handle.y = e.stageY;

        this._is_pressed = true;
        this._drag_vec.x = 0;
        this._drag_vec.y = 0;

        this._touchId = e.touchId;
    }

    private _OnDragMove(e: Laya.Event) {
        if (!this._is_pressed) return;
        if (this._touchId != e.touchId) return;
        let xoffset = e.stageX - this._ui.m_joystick_bg.x;
        let yoffset = e.stageY - this._ui.m_joystick_bg.y;
        let distanceSqrt = xoffset * xoffset + yoffset * yoffset;
        if (distanceSqrt < this._joystick_radius_sqrt) {
            // 直接设置
            this._ui.m_joystick_handle.x = e.stageX;
            this._ui.m_joystick_handle.y = e.stageY;

            this._drag_vec.x = xoffset / this._joystick_radius;
            this._drag_vec.y = -yoffset / this._joystick_radius;
        } else {
            // 设置到最大位置
            var distance = Math.sqrt(distanceSqrt);
            var normalX = xoffset / distance;
            var normalY = yoffset / distance;
            this._ui.m_joystick_handle.x = normalX * this._joystick_radius + this._ui.m_joystick_bg.x;
            this._ui.m_joystick_handle.y = normalY * this._joystick_radius + this._ui.m_joystick_bg.y;

            this._drag_vec.x = normalX;
            this._drag_vec.y = -normalY;
        }
    }

    private _OnDragEnd(e) {
        if (this._touchId != e.touchId) return;
        this._touchId = -1;
        this._ui.m_joystick_bg.x = this._init_joystick_pos.x;
        this._ui.m_joystick_bg.y = this._init_joystick_pos.y;

        this._ui.m_joystick_handle.x = this._init_joystick_pos.x;
        this._ui.m_joystick_handle.y = this._init_joystick_pos.y;

        this._is_pressed = false;
        this._drag_vec.x = 0;
        this._drag_vec.y = 0;
    }

}