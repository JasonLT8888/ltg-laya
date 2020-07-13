import FGuiEx from "./FGuiEx";
import FGuiData from "./FGuiData";
import View_OtherGames from "../DefaultUI/Cmp/View_OtherGames";
import View_HotGame from "../DefaultUI/Cmp/View_HotGame";
import { View_NativeIcon } from "../DefaultUI/Cmp/View_NativeIcon";
import View_BottomGames from "../DefaultUI/Cmp/View_BottomGames";
import View_SideGames from "../DefaultUI/Cmp/View_SideGames";
import View_EndSlideGames from "../DefaultUI/Cmp/View_EndSlideGames";
import LTSDK from "../../../SDK/LTSDK";
import { View_NativeIconLong } from "../DefaultUI/Cmp/View_NativeIconLong";
import { View_NativeInPage } from "../DefaultUI/Cmp/View_NativeInpage";

export default class BaseUIMediator<T extends fgui.GComponent> {
    protected _scaleSmall: number = 0.8;
    protected _tweenTime: number = 180;

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
        uiData.needFitScreen = this._needFilScreen;
        this._ui = FGuiEx.AddUI(this._classDefine, uiData) as T;
        this._InitSelfAd();
        this._OnShow();
        this._ui.sortingOrder = this._sortOrder;

        const anim_enter = "m_anim_enter";
        if (this._ui[anim_enter] && LTSDK.instance.isDelayClose) {
            let anim = this._ui[anim_enter] as fgui.Transition;
            anim.play(Laya.Handler.create(this, this._CallEnterAnimEnd));
        }
    }

    private _CallEnterAnimEnd() {
        this._OnEnterAnimEnd();
    }

    protected _OnEnterAnimEnd() {
        
    }

    private _InitSelfAd() {

        let othergames = View_OtherGames.CreateView(this._ui['m___othergames']);
        if (othergames) {
            this._ui['m___othergames'] = othergames.ui;
        } else {
            this._ui['m___othergames'] = null;
        }

        let hotGame = View_HotGame.CreateView(this._ui['m___hotgame']);
        if (hotGame) {
            this._ui['m___hotgame'] = hotGame.ui;
        } else {
            this._ui['m___hotgame'] = null;
        }

        let nativeIcon = View_NativeIcon.CreateView(this._ui['m___nativeicon']);
        if (nativeIcon) {
            this._ui['m___nativeicon'] = nativeIcon;
        } else {
            this._ui['m___nativeicon'] = null;
        }
        let nativeIconL = View_NativeIconLong.CreateView(this._ui['m___nativeiconL']);
        if (nativeIconL) {
            this._ui['m___nativeiconL'] = nativeIconL;
        } else {
            this._ui['m___nativeiconL'] = null;
        }
        let nativeinpage = View_NativeInPage.CreateView(this._ui['m___nativeinpage']);
        if (nativeinpage) {
            this._ui['m___nativeinpage'] = nativeinpage;
        } else {
            this._ui['m___nativeinpage'] = null;
        }
        let bottomgames = View_BottomGames.CreateView(this._ui['m___bottomgames']);
        if (bottomgames) {
            this._ui['m___bottomgames'] = bottomgames.ui;
        } else {
            this._ui['m___bottomgames'] = null;
        }
        let sidegames = View_SideGames.CreateView(this._ui['m___sidegames']);
        if (sidegames) {
            this._ui['m___sidegames'] = sidegames.ui;
        } else {
            this._ui['m___sidegames'] = null;
        }
        let endslide = View_EndSlideGames.CreateView(this._ui['m___endSG']);
        if (endslide) {
            this._ui['m___endSG'] = endslide.ui;
        } else {
            this._ui['m___endSG'] = null;
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