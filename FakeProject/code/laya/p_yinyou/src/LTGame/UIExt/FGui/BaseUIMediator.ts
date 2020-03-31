import FGuiEx from "./FGuiEx";
import FGuiData from "./FGuiData";

export default class BaseUIMediator<T extends fgui.GComponent> {
    protected _scaleSmall: number = 0.8;
    protected _tweenTime: number = 180;

    public get ui(): T {
        return this._ui;
    }
    protected _ui: T;

    protected _classDefine: any;

    public owner: any;

    protected _defaultBottomHeight: number;
    protected _isShow: boolean = false;
    public get isShow(): boolean {
        return this._isShow;
    }

    protected _openParam: any;

    protected _sortOrder: number = 0;

    protected _InitBottom() {
        let bottomGroup = this.ui["m_bottom_group"];
        if (bottomGroup == null) {
            this._defaultBottomHeight = 0;
        } else {
            this._defaultBottomHeight = bottomGroup.y;
        }
    }

    protected _SetBottomDown(downDistance: number = 0) {
        let bottomGroup = this.ui["m_bottom_group"];
        if (bottomGroup == null) return;
        bottomGroup.y = this._defaultBottomHeight + downDistance;
    }

    public Show(obj: any = null) {
        if (this._isShow) {
            this._isShow = true;
            return;
        }
        this._openParam = obj;
        let uiData = new FGuiData();
        this._ui = FGuiEx.AddUI(this._classDefine, uiData) as T;

        this._OnShow();
        this._ui.sortingOrder = this._sortOrder;
    }

    protected _OnShow() { }

    public Hide(dispose: boolean = true) {
        if (this._ui == null) return;
        if (this._ui.isDisposed) return;
        this._isShow = false;
        this._lockScreen = false;
        this._OnHide();
        if (dispose) {
            this.ui.dispose();
        } else {
            this.ui.removeFromParent();
        }
    }

    protected _lockScreen: boolean = false;

    protected _OnHide() { }

}