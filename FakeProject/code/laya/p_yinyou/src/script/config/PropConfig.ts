export namespace PropConfig {
    export class config {
        /** 道具id */ readonly id: number;
        /** 道具名字 */ readonly name: string;
        /** 道具模型路径 */ readonly model_path: string;
        /** 道具被吃的时候音效id */ readonly audio_id: number;
    }
    export var data : PropConfig.config;
    export var dataList : PropConfig.config[];
    export const path = "res/config/PropConfig.json";
}


