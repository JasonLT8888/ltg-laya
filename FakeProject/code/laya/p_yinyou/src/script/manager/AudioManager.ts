import MonoHelper, { EActionType } from "../../LTGame/LTUtils/MonoHelper";
import ArrayEx from "../../LTGame/LTUtils/ArrayEx";
import LTRes from "../../LTGame/Res/LTRes";
import { AudioConfig } from "../config/AudioConfig";
import CommonSaveData from "../../LTGame/Commom/CommonSaveData";

export default class AudioManager {

    public static get instance(): AudioManager {
        if (this._instance == null) {
            this._instance = new AudioManager();
        }
        return this._instance;
    }
    private static _instance: AudioManager;

    private _isInited: boolean = false;
    private _needPlayAudioIds: number[];

    private _bgmAudio: Laya.SoundChannel;

    private constructor() {
        Laya.SoundManager.autoStopMusic = true;
        this.Init();
    }

    public Init() {
        if (this._isInited) return;
        this._isInited = true;
        this._needPlayAudioIds = [];
        MonoHelper.instance.AddAction(EActionType.Update, this, this._LogicUpdate);
    }

    public PlayByPath(audioPath: string): Laya.SoundChannel {
        return Laya.SoundManager.playMusic(audioPath);
    }

    public async PlayBgm(bgmPath: string) {
        let formatUrl = Laya.URL.formatURL(bgmPath);
        if (Laya.SoundManager['_musicChannel']) Laya.SoundManager['_musicChannel'].stop();
        Laya.SoundManager['_bgMusic'] = formatUrl;
        await LTRes.Load2dAsync(bgmPath);
        this._bgmAudio = AudioManager.instance.PlayByPath(bgmPath);
    }

    public StopBgm() {
        if (this._bgmAudio != null) {
            this._bgmAudio.stop();
        }
    }

    public PlayById(audioId: number) {
        if (!CommonSaveData.instance.isMusicOn) return;
        let audioConfig = AudioConfig.data[audioId];
        if (audioConfig == null) {
            console.error("不存在的音效id");
            return;
        }
        if (audioConfig.audio_type == 1) {
            // 音效
            if (!ArrayEx.Contains(this._needPlayAudioIds, audioConfig.id)) {
                this._needPlayAudioIds.push(audioConfig.id);
            }
        } else {
            this.PlayBgm("res/audio/" + audioConfig.audio_path);
            // this.PlayByPath("res/audio/" + audioConfig.audio_path);
        }
    }

    private _LogicUpdate() {
        if (this._needPlayAudioIds.length > 0) {
            for (let id of this._needPlayAudioIds) {
                let audioConfig = AudioConfig.data[id];
                Laya.SoundManager.playSound("res/audio/" + audioConfig.audio_path);
            }
            this._needPlayAudioIds = [];
        }
    }

    public StopAll() {
        Laya.SoundManager.stopAll();
    }

    public Pause() {
        if (this._bgmAudio) {
            this._bgmAudio.pause();
        }
    }

    public Resume() {
        if (!CommonSaveData.instance.isMusicOn) return;
        if (this._bgmAudio) {
            this._bgmAudio.resume();
        }
    }
}