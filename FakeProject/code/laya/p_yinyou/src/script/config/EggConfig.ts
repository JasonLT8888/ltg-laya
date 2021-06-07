export namespace EggConfig {
    export class config {
        /** 序号 */ readonly id: number;
        /** 名称 */ readonly name: string;
        /** 展示用模型 */ readonly model_path: string;
        /** 彩色图标路径 */ readonly icon_path: string;
        /** 奖励类型 */ readonly reward_type: number;
        /** 奖励内容 */ readonly reward_value: number;
        /** 进度奖励金币数量 */ readonly reward_coin_value: number[];
        /** 金币图标 */ readonly coin_icon: string;
        /** 解锁类型 */ readonly unlock_type: number;
        /** 解锁价格 */ readonly unlock_value: number;
        /** 兑换码 */ readonly code: string;
        /** 是否可用 */ readonly avliable: boolean;
        /** 偏移值 */ readonly offset: number[];
        /** 旋转 */ readonly rotation: number[];
        /** 缩放 */ readonly scale: number[];
        /** 默认动画 */ readonly default_anim: string;
    }
    export var isConst: boolean = false;
    export var data: {[key: number]: EggConfig.config};
    export var dataList: EggConfig.config[];
    export var lastData: EggConfig.config;
    export const path = "res/config/EggConfig.json";
}


