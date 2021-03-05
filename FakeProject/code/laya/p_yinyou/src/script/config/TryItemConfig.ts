export namespace TryItemConfig {
    export class config {
        /** 试用id */ readonly id: number;
        /** 试用类型 */ readonly try_type: number;
        /** 试用id */ readonly try_id: number;
        /** 展示模型 */ readonly display_model_path: string;
        /** 介绍文字 */ readonly intro_url: string;
        /** 主界面展示图标 */ readonly btn_icon_path: string;
        /** 出现权重 */ readonly gen_weight: number;
    }
    export var isConst: boolean = false;
    export var data: {[key: number]: TryItemConfig.config};
    export var dataList: TryItemConfig.config[];
    export var lastData: TryItemConfig.config;
    export const path = "res/config/TryItemConfig.json";
}


