export namespace LevelConfig {
    export class config {
        /** 关卡id */ readonly id: number;
        /** 关卡名字 */ readonly name: string;
        /** 关卡配置 */ readonly level_config: string;
    }
    export var data : {[key: number]: LevelConfig.config};
    export var dataList : LevelConfig.config[];
    export const path = "res/config/LevelConfig.json";
}


