import FGuiEx from "./FGuiEx";
import FGuiData from "./FGuiData";
import { SelfADHelper } from "./SelfADHelper";

export default class BaseUIMediator<T extends fgui.GComponent> {

    public get ui(): T {
        return this._ui;
    }
    protected _ui: T;

    protected _classDefine: any;

    /**
     * 是否适配顶部刘海屏
     */
    protected _needFilScreen: boolean = false;

    public owner: any;

    protected _defaultBottomHeight: number;
    protected _isShow: boolean = false;
    public get isShow(): boolean {
        return this._isShow;
    }

    protected _openParam: any;

    protected _sortOrder: number = 10;

    public Show(obj: any = null) {
        if (this._isShow) {
            return;
        }
        this._isShow = true;
        this._openParam = obj;
        let uiData = new FGuiData();
        uiData.needFitScreen = this._needFilScreen;
        this._ui = FGuiEx.AddUI(this._classDefine, uiData) as T;
        this._ui.sortingOrder = this._sortOrder;
        this._InitSelfAd();
        this._OnShow();
    }

    private _InitSelfAd() {
        SelfADHelper.InitSelfAD(this._ui);
    }

    protected _OnShow() { }

    public Hide(dispose: boolean = true) {
        if (this._ui == null) return;
        if (this._ui.isDisposed) return;
        this._isShow = false;
        this._OnHide();
        this._DoHide(dispose);
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