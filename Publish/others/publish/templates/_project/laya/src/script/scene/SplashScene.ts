import { ConfigManager } from "../../LTGame/Config/ConfigManager";
import { ESceneType } from "../../LTGame/Start/ESceneType";
import LTSplashScene from "../../LTGame/Start/LTSplashScene";
import LoadBinder from "../../ui/Load/LoadBinder";
import UI_splash from "../../ui/Load/UI_splash";
import MainBinder from "../../ui/Main/MainBinder";
import GlobalUnit from "../common/GlobalUnit";
import { AudioConfig } from "../config/AudioConfig";
import { EffectConfig } from "../config/EffectConfig";
import { EggConfig } from "../config/EggConfig";
import { GameConst } from "../config/GameConst";
import { PackConst } from "../config/PackConst";
import { SignConfig } from "../config/SignConfig";
import { EffectManager } from "../manager/EffectManager";

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
        ConfigManager.AddConfig(AudioConfig);
        ConfigManager.AddConfig(EffectConfig);
        ConfigManager.AddConfig(GameConst);
        ConfigManager.AddConfig(PackConst);
        ConfigManager.AddConfig(EggConfig);
        ConfigManager.AddConfig(SignConfig); 
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