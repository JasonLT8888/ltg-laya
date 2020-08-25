export namespace EggWallConfig {
    export class config {
        /** id */ readonly id: number;
        /** 彩蛋名字 */ readonly name: string;
        /** 图标 */ readonly icon_path: string;
        /** 剪影图标 */ readonly mask_path: string;
        /** 展示图标 */ readonly dsiplay_icon: string;
        /** 是否投放 */ readonly need_show: boolean;
        /** 提示文本 */ readonly notice: string;
    }
    export var data : {[key: number]: EggWallConfig.config};
    export var dataList : EggWallConfig.config[];
    export var lastData : EggWallConfig.config;
    export const path = "res/config/EggWallConfig.json";
}


