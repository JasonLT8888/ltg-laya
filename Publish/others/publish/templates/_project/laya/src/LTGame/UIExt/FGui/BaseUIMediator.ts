import FGuiEx from "./FGuiEx";
import FGuiData from "./FGuiData";
import View_OtherGames from "../DefaultUI/Cmp/View_OtherGames";

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
            return;
        }
        this._isShow = true;
        this._openParam = obj;
        let uiData = new FGuiData();
        this._ui = FGuiEx.AddUI(this._classDefine, uiData) as T;
        View_OtherGames.CreateView(this._ui['m___othergames']);
        this._OnShow();
        this._ui.sortingOrder = this._sortOrder;

        const anim_enter = "m_anim_enter";
        if (this._ui[anim_enter]) {
            let anim = this._ui[anim_enter] as fgui.Transition;
            anim.play();
        }
    }

    protected _OnShow() { }

    public Hide(dispose: boolean = true) {
        if (this._ui == null) return;
        if (this._ui.isDisposed) return;
        this._isShow = false;
        this._OnHide();

        const anim_exit = "m_anim_exit";
        if (this._ui[anim_exit]) {
            let anim = this._ui[anim_exit] as fgui.Transition;
            anim.play(Laya.Handler.create(this, this._DoHide, [dispose]));
        } else {
            this._DoHide(dispose);
        }
    }

    private _DoHide(dispose: boolean) {
        if (dispose) {
            this.ui.dispose();
        } else {
            this.ui.removeFromParent();
        }
    }

    protected _OnHide() { }

}