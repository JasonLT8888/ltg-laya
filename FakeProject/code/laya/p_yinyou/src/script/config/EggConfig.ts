export namespace EggConfig {
    export class config {
        /** 序号 */ readonly id: number;
        /** 名称 */ readonly name: string;
        /** 展示图标路径 */ readonly display_path: string;
        /** 黑色图标路径 */ readonly lockicon_path: string;
        /** 彩色图标路径 */ readonly icon_path: string;
        /** 关联兑换码id */ readonly reward_code: number;
        /** 密语 */ readonly secret: string;
        /** 是否可用 */ readonly avliable: boolean;
    }
    export var isConst: boolean = false;
    export var data: {[key: number]: EggConfig.config};
    export var dataList: EggConfig.config[];
    export var lastData: EggConfig.config;
    export const path = "res/config/EggConfig.json";
}


