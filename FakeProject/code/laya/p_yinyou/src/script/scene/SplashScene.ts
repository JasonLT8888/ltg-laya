import UI_splash from "../../ui/Load/UI_splash";
import LTSplashScene from "../../LTGame/Start/LTSplashScene";
import LoadBinder from "../../ui/Load/LoadBinder";
import MainBinder from "../../ui/Main/MainBinder";
import { ConfigManager } from "../../LTGame/Config/ConfigManager";
import GlobalUnit from "../common/GlobalUnit";
import { AudioConfig } from "../config/AudioConfig";
import { ESceneType } from "../../LTGame/Start/ESceneType";
import { EffectConfig } from "../config/EffectConfig";
import { GameConst } from "../config/GameConst";
import { EffectManager } from "../manager/EffectManager";

export default class SplashScene extends LTSplashScene {

    constructor() {
        super();
        this._splashUIClass = UI_splash;
    }

    _OnBindUI() {
        console.log('splash',this);
        LoadBinder.bindAll();
        MainBinder.bindAll();
    }

    _OnSetLoadConfig() {
        ConfigManager.AddConfig(AudioConfig);
        ConfigManager.AddConfig(EffectConfig);
        ConfigManager.AddConfig(GameConst);
    }

    _OnGameResPrepared(urls: string[]) {
        GlobalUnit.InitAll();

        EffectManager.instance.Preload(urls);
    }

    async _OnGameResLoaded() {

        await EffectManager.instance.WarmEffects();

        this.isFinished = true;
        this.nextState = ESceneType.Main;
    }


}