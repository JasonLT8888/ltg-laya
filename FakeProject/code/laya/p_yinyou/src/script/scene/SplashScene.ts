import UI_splash from "../../ui/Load/UI_splash";
import LTSplashScene from "../../LTGame/Start/LTSplashScene";
import LoadBinder from "../../ui/Load/LoadBinder";
import MainBinder from "../../ui/Main/MainBinder";
import { ConfigManager } from "../../LTGame/Config/ConfigManager";
import { LevelConfig } from "../config/LevelConfig";
import GlobalUnit from "../common/GlobalUnit";
import { AudioConfig } from "../config/AudioConfig";
import { PropConfig } from "../config/PropConfig";
import { ESceneType } from "../../LTGame/Start/ESceneType";
import { TestConst } from "../config/TestConst";

export default class SplashScene extends LTSplashScene {

    constructor() {
        super();
        this._splashUIClass = UI_splash;
    }

    _OnBindUI() {
        LoadBinder.bindAll();
        MainBinder.bindAll();
    }

    _OnSetLoadConfig() {
        ConfigManager.AddConfig(LevelConfig);
        ConfigManager.AddConfig(AudioConfig);
        ConfigManager.AddConfig(PropConfig);
        ConfigManager.AddConfig(TestConst);
    }

    _OnGameResPrepared(urls: string[]) {
        GlobalUnit.InitAll();
    }

    _OnGameResLoaded() {
        this.isFinished = true;
        this.nextState = ESceneType.Main;
    }


}