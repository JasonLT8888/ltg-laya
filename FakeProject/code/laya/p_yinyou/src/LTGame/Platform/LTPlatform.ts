import { EPlatformType } from "./EPlatformType";
import IPlatform from "./IPlatform";
import LTPlatformFactory from "./LTPlatformFactory";

export default class LTPlatform {

    private static _instance: IPlatform;
    public static get instance(): IPlatform {
        if (this._instance == null) {
            console.error("对象尚未初始化,请先调用CreateInstance进行初始化");
        }
        return this._instance;
    }

    public static CreateInstance(appId: string = null): IPlatform {
        if (this._instance != null) {
            console.error("已调用过平台创建为", LTPlatform.GetPlatformStr(this._instance.platform), "不能重复创建");
            return this._instance;
        }

        this._instance = LTPlatformFactory.CreateInstance();
        this._instance.appId = appId;
        console.log("平台实例创建完成", LTPlatform.GetPlatformStr(this._instance.platform));
        return this._instance;
    }

    public static get platformStr(): string {
        return LTPlatform.GetPlatformStr(this._instance.platform);
    }

    public static GetPlatformStr(platformEnum: EPlatformType): string {
        switch (platformEnum) {
            case EPlatformType.BD:
                return "百度";
            case EPlatformType.None:
                return "未识别";
            case EPlatformType.Oppo:
                return "Oppo";
            case EPlatformType.QQ:
                return "QQ";
            case EPlatformType.TT:
                return "头条";
            case EPlatformType.Vivo:
                return "Vivo";
            case EPlatformType.Web:
                return "网页";
            case EPlatformType.WX:
                return "微信";
            case EPlatformType.QTT:
                return "趣头条";
            default:
                return "未定义";
        }
    }

}