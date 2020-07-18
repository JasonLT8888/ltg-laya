export namespace SignConfig {
    export class config {
        /** 天数 */ readonly id: number;
        /** 图标路径 */ readonly icon: string;
        /** 额外奖励数量 */ readonly money: number;
        /** 默认奖励类型 */ readonly type: number;
        /** 默认奖励数量 */ readonly value: number;
        /** 描述 */ readonly title: string;
    }
    export var data : {[key: number]: SignConfig.config};
    export var dataList : SignConfig.config[];
    export var lastData : SignConfig.config;
    export const path = "res/config/SignConfig.json";
}


