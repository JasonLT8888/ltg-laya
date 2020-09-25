export namespace RewardCodeConfig {
    export class config {
        /** 兑换码id */ readonly id: number;
        /** 兑换码是否有效 */ readonly avaliable: boolean;
        /** 兑换码内容 */ readonly code: string;
        /** 奖励类型 */ readonly reward_type: number;
        /** 奖励内容 */ readonly reward_value: number;
        /** 需要看几次视频 */ readonly need_ad_count: number;
        /** 展示用模型 */ readonly model_path: string;
        /** 展示用文本 */ readonly title_icon_path: string;
    }
    export var isConst: boolean = false;
    export var data: {[key: number]: RewardCodeConfig.config};
    export var dataList: RewardCodeConfig.config[];
    export var lastData: RewardCodeConfig.config;
    export const path = "res/config/RewardCodeConfig.json";
}


