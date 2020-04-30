import BaseState from "../Fsm/BaseState";
import LTPlatform from "../Platform/LTPlatform";
import FGuiData from "../UIExt/FGui/FGuiData";
import LTRespackManager from "../Res/LTRespackManager";
import { ConfigManager } from "../Config/ConfigManager";
import FGuiEx from "../UIExt/FGui/FGuiEx";
import LTGameBinder from "../UIExt/DefaultUI/UI/LTGame/LTGameBinder";
import UI_FlyPanelMediator from "../UIExt/DefaultUI/UI_FlyPanelMediator";
import { ESceneType } from "./ESceneType";
import { EPlatformType } from "../Platform/EPlatformType";
import { LoadPackConfig } from "../Config/LoadPackConfig";
import { LoadUIPack } from "../UIExt/FGui/LoadUIPack";

export default class LTSplashScene extends BaseState {

    /**
     * 用于初始化的ui包
     */
    private _initUiPack: LoadUIPack = new LoadUIPack("res/fgui_load/Load");

    /**
     * 需要加载的其他UI包
     */
    protected _needLoadOtherUIPack: LoadUIPack[] = [
        new LoadUIPack("res/fgui/Main")
    ];

    /**
     * 资源加载权重:
     * 子包
     * 配置
     * 资源
     * 其他ui
     */
    private _loadProgressWeight = [10, 1, 5, 2];
    private _ui: fgui.GObject;
    private _progressUI: fgui.GProgressBar;
    protected _splashUIClass: any;

    private _configProgress: number = 0;
    private _otherUIProgress: number = 0;
    private _resProgress: number = 0;
    private _subPackProgress: number = 0;
    private _isUIShowed: boolean = false;
    private get _loadProgress(): number {
        let totalWeight = this._loadProgressWeight[0] + this._loadProgressWeight[1] + this._loadProgressWeight[2] + this._loadProgressWeight[3];
        let loadWeight = this._loadProgressWeight[0] * this._subPackProgress
            + this._loadProgressWeight[1] * this._configProgress
            + this._loadProgressWeight[2] * this._resProgress
            + this._loadProgressWeight[3] * this._otherUIProgress;
        return loadWeight / totalWeight * 100;
    }

    private _jsonPath = "subpack.json";

    constructor() {
        super(ESceneType.Splash);
        switch (LTPlatform.instance.platform) {
            case EPlatformType.WX:
            case EPlatformType.QQ:
                this._loadProgressWeight = [10, 1, 5, 2];
                break;
            default:
                this._loadProgressWeight = [1, 1, 5, 2];
                break;
        }
    }

    _DoEnter() {

        this._needLoadOtherUIPack.push(
            new LoadUIPack("res/ltgame/ui/LTGame")
        );

        Laya.loader.load(this._jsonPath, Laya.Handler.create(this, this._OnJsonLoaded));
    }

    private _OnJsonLoaded() {
        let loadJson = Laya.loader.getRes(this._jsonPath);
        Laya.loader.clearRes(this._jsonPath);
        if (loadJson != null) {
            for (let i = 0; i < loadJson.length; ++i) {
                let jsonData = loadJson[i] as LoadPackConfig;
                console.log("自动设置分包", jsonData);
                LTRespackManager.instance.AddPackData(jsonData);
            }
        }
        LTRespackManager.instance.InitLoadSet();

        this._InitUI();
    }

    private _InitUI() {
        LTPlatform.instance.RecordEvent("开始初始化启动界面", null);
        LTGameBinder.bindAll();
        this._OnBindUI();
        let loadUrl = [];
        this._initUiPack.PushUrl(loadUrl);
        Laya.loader.load(loadUrl, Laya.Handler.create(this, this._OnUILoaded));
    }

    protected _OnBindUI() { }

    private _OnUILoaded() {
        this._initUiPack.AddPackage();
        // 打开界面
        let needFit = new FGuiData();
        needFit.needFitScreen = false;
        this._ui = FGuiEx.AddUI(this._splashUIClass, needFit);
        this._ui.sortingOrder = Number.MAX_SAFE_INTEGER;
        this._progressUI = this._ui["m_progress"];
        this._progressUI.value = 0;
        this._isUIShowed = true;
        LTPlatform.instance.RecordEvent("启动界面初始化完成", null);

        LTRespackManager.instance.LoadSubPack(Laya.Handler.create(this, this._OnPackLoaded), Laya.Handler.create(this, this._OnPackProgress, null, false));
    }

    private _OnPackProgress(value: number) {
        this._subPackProgress = value;
    }

    private _OnPackLoaded() {
        this._StartLoad();
    }

    private _StartLoad() {
        LTPlatform.instance.RecordEvent("开始加载配置表", null);

        this._OnSetLoadConfig();
        if (ConfigManager.needLoadCount <= 0) {
            this._configProgress = 1;
            this._OnConfigLoaded();
            return;
        }
        ConfigManager.StartLoad(Laya.Handler.create(this, this._OnConfigLoaded), Laya.Handler.create(this, this._OnConfigProgress, null, false));
    }

    protected _OnSetLoadConfig() {

    }

    private _OnConfigProgress(value: number) {
        this._configProgress = value;
    }

    private _OnConfigLoaded() {
        LTPlatform.instance.RecordEvent("开始加载剩余UI资源", null);
        if (this._needLoadOtherUIPack.length == 0) {
            this._OnOtherUILoaded();
            return;
        }

        let uiLoadData = [];
        for (let i = 0; i < this._needLoadOtherUIPack.length; ++i) {
            let otherUIPack = this._needLoadOtherUIPack[i];
            otherUIPack.PushUrl(uiLoadData);
        }
        Laya.loader.load(uiLoadData, Laya.Handler.create(this, this._OnOtherUILoaded), Laya.Handler.create(this, this._OnOtherUIProgress, null, false));
    }

    private _OnOtherUIProgress(value: number) {
        this._otherUIProgress = value;
    }

    private _OnOtherUILoaded() {
        LTPlatform.instance.RecordEvent("开始加载剩余游戏资源", null);
        for (let i = 0; i < this._needLoadOtherUIPack.length; ++i) {
            let otherUIPack = this._needLoadOtherUIPack[i];
            otherUIPack.AddPackage();
            console.log(otherUIPack, "已加载");
        }
        UI_FlyPanelMediator.instance.Show();

        let loadUrls = [];
        this._OnGameResPrepared(loadUrls);
        if (loadUrls.length == 0) {
            this._resProgress = 1;
            this._OnResLoaded();
            return;
        }
        Laya.loader.create(loadUrls, Laya.Handler.create(this, this._OnResLoaded),
            Laya.Handler.create(this, this._OnResProgress, null, false));
    }

    /**
     * 准备需要在splash界面加载的资源,会体现在进度条上
     * @param urls 
     */
    protected _OnGameResPrepared(urls: string[]) {

    }

    private _OnResProgress(value: number) {
        this._resProgress = value;
    }

    private _OnResLoaded() {
        this._progressUI.value = 100;
        LTPlatform.instance.RecordEvent("进入游戏", null);

        this._OnGameResLoaded();
    }

    protected _OnGameResLoaded() {

    }

    _DoRunning() {
        if (!this._isUIShowed) {
            return;
        }
        this._progressUI.value = this._loadProgress;
    }

    _DoExit() {
        this._ui.dispose();
    }

}