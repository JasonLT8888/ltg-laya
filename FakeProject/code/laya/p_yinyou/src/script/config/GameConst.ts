export namespace GameConst {
    export class config {
        /** 游戏版本号 */ readonly game_version: string;
        /** 转多少次获得特殊奖励 */ readonly special_roll_count: number;
    }
    export var data : GameConst.config;
    export const path = "res/config/GameConst.json";
}


