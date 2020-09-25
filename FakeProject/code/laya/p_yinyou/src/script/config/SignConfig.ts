export namespace SignConfig {
    export class config {
        /** 签到天数 */ readonly id: number;
        /** 展示文字 */ readonly show_str: string;
        /** 展示图标 */ readonly show_icon: string;
        /** 实际奖励内容 */ readonly reward_type: number;
        /** 实际奖励值 */ readonly reward_value: number;
        /** 看视频时额外奖励内容 */ readonly ad_reward_type: number;
        /** 看视频时额外奖励值 */ readonly ad_reward_value: number;
    }
    export var isConst: boolean = false;
    export var data: {[key: number]: SignConfig.config};
    export var dataList: SignConfig.config[];
    export var lastData: SignConfig.config;
    export const path = "res/config/SignConfig.json";
}


