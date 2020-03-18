import { AudioConfig } from "../config/AudioConfig";

export default class AudioManager {

    public static get instance(): AudioManager {
        if (this._instance == null) {
            this._instance = new AudioManager();
        }
        return this._instance;
    }
    private static _instance: AudioManager;

    private constructor() {
        Laya.SoundManager.autoStopMusic = true;
    }

    public PlayByPath(audioPath: string) {
        Laya.SoundManager.playMusic(audioPath);
    }

    public PlayById(audioId: number) {
        let audioConfig = AudioConfig.data[audioId];
        if (audioConfig == null) {
            console.error("不存在的音效id");
            return;
        }
        if (audioConfig.audio_type == 1) {
            // 音效
            Laya.SoundManager.playSound("res/audio/" + audioConfig.audio_path);
        } else {
            this.PlayByPath("res/audio/" + audioConfig.audio_path);
        }
    }

    public StopById(audioId: number) {

    }

    public StopAll() {
        Laya.SoundManager.stopAll();
    }

    public Pause() {

    }

    public Resume() {

    }
}