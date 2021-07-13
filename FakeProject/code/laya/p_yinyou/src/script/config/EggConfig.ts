export namespace EggConfig {
    export class config {
        /** 序号 */ readonly id: number;
        /** 名称 */ readonly name: string;
        /** 展示用模型 */ readonly model_path: string;
        /** 彩色图标路径 */ readonly icon_path: string;
        /** 名字图标 */ readonly name_icon: string;
        /** 奖励类型
0金币 */ readonly reward_type: number;
        /** 奖励内容 */ readonly reward_value: number;
        /** 进度奖励金币数量 */ readonly reward_coin_value: number[];
        /** 金币图标 */ readonly coin_icon: string;
        /** 解锁类型
1默认解锁
2兑换码直接获得
3视频直接解锁
4分享解锁--保留
5.详情解锁
6.看视频进度解锁
 */ readonly unlock_type: number;
        /** 解锁价格 */ readonly unlock_value: number;
        /** 兑换码，若为详情解锁则填入详情 */ readonly code: string;
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


