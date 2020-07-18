module SDK {

    /**
     * 云趣登录后台参数
     */
    export class LoginParam {
        flg: string; //游戏唯一标识
        code: string; // 微信返回的code
        channel: string; // 用户来源的渠道，没有的情况下可以不传
        appid: string; // 用户来源的appid，没有的情况下可以不传
    }

    export class LoginResult {

        /**
         * 状态，1为正确，0为错误
         */
        status: number;
        msg: string; // 描述，一般情况下为空，status非1时不为空
        result: any; // 返回参数
    }

    export class LoginSuccessParam {
        openid: string; // 微信返回的openid
        session_key: string; // 微信返回的session_key
        token: string; // token
        expire: number; // 过期时间
    }

    /**
     * 广告展示上报数据
     */
    export class ADReportShowData {
        /**
         * 广告ID
         */
        ad_id: number;

        /**
         * 位置ID
         */
        location_id: number;

        /**
         * 曝光次数
         */
        num: number;
    }

    /**
     * 广告数据
     */
    export class ADInfoData {
        /**
         * 广告ID
         */
        ad_id: number;
        /**
         * 广告名称
         */
        ad_name: string;
        /**
         * 广告图片
         */
        ad_img: string;
        /**
         * 小程序路径
         */
        ad_path: string;
        /**
         * 小程序APPID
         */
        ad_appid: string;
        /**
         * 小程序包名
         */
        ad_package: string;
        /**
         * 游戏人数
         */
        ad_count: number;
        /**
         * 广告二维码，如果appid不在10个白名单内，或者ad_path为空则显示二维码
         */
        ad_qrimg: string;
        /**
         * 对应展示的设备 {0全部设备，1Android设备，2iOS设备}
         */
        ad_device: number;
        /**
         * 小红点 {1为显示小红点,0不显示}
         */
        ad_dot: number;
    }

    /**
     * 分享数据 重庆
     */
    export class ShareData_CQ {

        /**
         * 分享id
         */
        id : number;

        /**
         * 图片url
         */
        picurl : string;

        /**
         * 分享内容
         */
        title : string;

        /**
         * 类型
         */
        type : string;

    }

    /**
     * 分享数据
     */
    export class ShareData {
        /**
         * 分享id
         */
        share_id: number;
        /**
         * 标题
         */
        share_title: string;
        /**
         * 分享图
         */
        share_img: string;
        /**
         * 路径
         */
        share_path: string;
    }

    /**
     * 广告位数据
     */
    export class ADPosData {
        id: number;
        /**
         * 游戏ID
         */
        game_id: number;
        /**
         * 游戏名称
         */
        game_name: string;
        /**
         * 游戏标识
         */
        game_flg: string;
        /**
         * 位置ID
         */
        location_id: number;
        /**
         * 位置名称
         */
        location_name: string;
        /**
         * 位置标识
         */
        location_flg: string;
        /**
         * 素材类型（1是广告，2是分享）
         */
        matter_type: number;
        /**
         * 对应位置的接口地址
         */
        url: string;
    }

}