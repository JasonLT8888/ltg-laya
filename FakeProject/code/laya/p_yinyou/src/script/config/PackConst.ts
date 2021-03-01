export namespace PackConst {
    export class config {
        /** 0:正常状态 1:提审状态 2:洗钱状态 */ readonly check_type: number;
        /** 头条话题 第三个为当前游戏名称 */ readonly topics: string[];
        /** 头条分享id，在头条后台-设置-分享设置中 */ readonly share_id: string;
         /** 抖音分享默认音乐 */ readonly defaultBgm: string;
    }
    export var isConst: boolean = true;
    export var data: PackConst.config;
    export const path = "res/config/PackConst.json";
}


