import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_Fight from "../../ui/Main/UI_Fight";
import FGuiEx from "../../LTGame/UIExt/FGui/FGuiEx";
import Vector3Ex from "../../LTGame/LTUtils/Vector3Ex";
import GlobalUnit from "../common/GlobalUnit";

export class UI_FightMediator extends BaseUIMediator<UI_Fight> {

    private static _instance;
    public static get instance(): UI_FightMediator {
        if (this._instance == null) {
            this._instance = new UI_FightMediator();
        }
        return this._instance;
    }

    public Show() {
        this._ui = FGuiEx.AddUI(UI_Fight) as UI_Fight;
        this._OnShow();
    }

    private _cacheTouchId: number;
    private _isPressed: boolean;
    private _lastPos: Laya.Vector2;

    _OnShow() {
        super._OnShow();
        this.ui.m_bg.on(Laya.Event.MOUSE_DOWN, this, this._OnMouseDown);
        this.ui.m_bg.on(Laya.Event.MOUSE_MOVE, this, this._OnMouseMove);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this._OnMouseUp);
        this._lastPos = new Laya.Vector2();
        this._isPressed = false;
    }

    private _OnMouseDown(event: Laya.Event) {
        if (this._isPressed) return;
        this._isPressed = true;
        this._cacheTouchId = event.touchId;
        this._lastPos.x = event.stageX;
        this._lastPos.y = event.stageY;
    }

    private _OnMouseMove(event: Laya.Event) {
        if(!this._isPressed) return;
        if (event.touchId != this._cacheTouchId) return;
        let xOffset = event.stageX - this._lastPos.x;
        this._lastPos.x = event.stageX;
        let xProgress = -xOffset / Laya.stage.width;
        GlobalUnit.gameManager.playerManager.mainPlayer.MoveX(xProgress);
    }

    private _OnMouseUp(event: Laya.Event) {
        if (!this._isPressed) return;
        if (event.touchId != this._cacheTouchId) return;
        this._isPressed = false;
    }

    public UpdateComboCount(comboCount: number) {
        this.ui.m_text_combo.text = "combo:" + comboCount;
    }

}