export namespace GameConst {
    export class config {
        /** 游戏版本号 */ readonly game_version: string;
        /** 转多少次获得特殊奖励 */ readonly special_roll_count: number;
        /** 游戏公告 */ readonly notice_str: string;
        /** 抖音号 */ readonly douyin_id: string;
    }
    export var isConst: boolean = true;
    export var data: GameConst.config;
    export const path = "res/config/GameConst.json";
}


