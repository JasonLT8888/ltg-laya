export namespace GameConst {
    export class config {
        /** 游戏版本号 */ readonly game_version: string;
        /** 转多少次获得特殊奖励 */ readonly special_roll_count: number;
        /** 游戏公告 */ readonly notice_str: string;
        /** 抖音号 */ readonly douyin_id: string;
        /** 导量至飞小鸭官方视频，未开通官方账号时使用 */ readonly douyinVideoId: string;
        /** 头条官方视频，未绑定官方账号时使用 */ readonly toutiaoVideoId: string;
        /** 是否已开通官方账号 */ readonly officalAccountEnable: boolean;
    }
    export var isConst: boolean = true;
    export var data: GameConst.config;
    export const path = "res/config/GameConst.json";
}


