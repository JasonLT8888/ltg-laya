import { ISDK } from "./Interface/ISDK";
import LTPlatform from "../LTGame/Platform/LTPlatform";

export default class LTSDK {

    private static _instance: ISDK;
    public static get instance(): ISDK {
        if (this._instance == null) {
            console.error("sdk尚未初始化,请先调用CreateInstance进行初始化");
            return null;
        }
        return this._instance;
    }

    public static get isInited(): boolean {
        return this._instance != null;
    }

    /**
     * 
     * @param sdkClass 初始化的类
     * @param identifyId 游戏标识
     * @param controlVersion 广告版本
     */
    public static CreateInstace(sdkClass: any, identifyId: string, controlVersion: string, appId: string): ISDK {
        if (this._instance != null) {
            console.error("SDK不能反复进行初始化");
            return this._instance;
        }
        this._instance = new sdkClass();

        // 初始化sdk
        let channel = "own";
        let options = LTPlatform.instance.lauchOption as any;
        if (options && options.query && options.query.channel) {
            channel = options.query.channel;
        }
        this._instance.Init(identifyId, channel, controlVersion, appId);

        // 请求云控信息
        this._instance.RequestRemoteConfig();

        // 自动sdk登录
        LTPlatform.instance.onLoginEnd = Laya.Handler.create(null, () => {
            if (LTPlatform.instance.loginState.isLogin) {
                LTSDK.instance.Login(LTPlatform.instance.loginState.code, LTPlatform.instance.GetFromAppId());
            } else {
                console.log("平台未登录,跳过登录sdk");
            }
        });

        return this._instance;
    }

}