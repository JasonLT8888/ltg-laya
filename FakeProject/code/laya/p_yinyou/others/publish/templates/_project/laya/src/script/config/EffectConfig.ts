export namespace EffectConfig {
    export class config {
        /** 特效id */ readonly id: number;
        /** 特效路径 */ readonly model_path: string;
        /** 是否需要预加载 */ readonly need_preload: boolean;
        /** 是否是UI特效 */ readonly isUIEffect: boolean;
    }
    export var data : {[key: number]: EffectConfig.config};
    export var dataList : EffectConfig.config[];
    export var lastData : EffectConfig.config;
    export const path = "res/config/EffectConfig.json";
}


