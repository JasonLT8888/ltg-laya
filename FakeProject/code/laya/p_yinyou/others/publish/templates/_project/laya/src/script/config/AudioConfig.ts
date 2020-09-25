export namespace AudioConfig {
    export class config {
        /** 音效id */ readonly id: number;
        /** 音效名字 */ readonly name: string;
        /** 音效类型 */ readonly audio_type: number;
        /** 音效路径 */ readonly audio_path: string;
    }
    export var isConst: boolean = false;
    export var data: {[key: number]: AudioConfig.config};
    export var dataList: AudioConfig.config[];
    export var lastData: AudioConfig.config;
    export const path = "res/config/AudioConfig.json";
}


