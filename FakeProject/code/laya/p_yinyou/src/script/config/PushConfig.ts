export namespace PushConfig {
    export class config {
        /** 推送id */ readonly id: number;
        /** 起始关卡 */ readonly start: number;
        /** 间隔 */ readonly duration: number;
        /** 优先级 */ readonly priority: number;
        /** 类型
1-关注
2-签到
3-转盘
4-试用 */ readonly type: number;
        /** 游戏开始
前弹出 */ readonly before_start: boolean;
        /** 激活 */ readonly enable: boolean;
    }
    export var isConst: boolean = false;
    export var data: {[key: number]: PushConfig.config};
    export var dataList: PushConfig.config[];
    export var lastData: PushConfig.config;
    export const path = "res/config/PushConfig.json";
}


