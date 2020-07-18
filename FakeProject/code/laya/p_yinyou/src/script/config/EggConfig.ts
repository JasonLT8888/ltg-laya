export namespace EggConfig {
    export class config {
        /** 序号 */ readonly id: number;
        /** 名称 */ readonly name: string;
        /** 锁定时图标路径 */ readonly lockIcon: string;
        /** 完成状态图标路径 */ readonly icon: string;
        /** 密语 */ readonly secret: string;
        /** 暗号 */ readonly password: string;
        /** 是否可用 */ readonly enable: number;
    }
    export var data : {[key: number]: EggConfig.config};
    export var dataList : EggConfig.config[];
    export var lastData : EggConfig.config;
    export const path = "res/config/EggConfig.json";
}


