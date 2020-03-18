import { EPlatformType } from "./EPlatformType";
import LTPlatformData from "./Data/LTPlatformData";
import { ShareInfo } from "./ShareInfo";

export default interface IPlatform {

    /**
     * appid
     */
    appId: string;

    /**
     * 安全区域
     */
    safeArea: LTGame.SafeArea;

    /**
     * 当前平台
     */
    platform: EPlatformType;

    /**
     * 启动参数
     */
    lauchOption: LTGame.LaunchOption;

    /**
     * 登录状态
     */
    loginState: LTGame.LoginState;

    /**
     * 登录完成回调(成功失败都会调用)
     */
    onLoginEnd: Laya.Handler;

    /**
     * 回到前台
     */
    onResume: Laya.Handler;
    /**
     * 回到前台
     */
    onPause: Laya.Handler;
    /**
     * 初始化
     */
    Init(platformData: LTPlatformData);

    /**
     * banner广告是否可以展示
     */
    IsBannerAvaliable(): boolean;

    /**
     * 视频广告是否可以展示
     */
    IsVideoAvaliable(): boolean;

    /**
     * 插页广告是否可以展示
     */
    IsInterstitalAvaliable(): boolean;

    /**
     * 展示banner广告
     */
    ShowBannerAd();

    /**
     * 隐藏banner广告
     */
    HideBannerAd();

    /**
     * 展示有奖视频
     * @param onSuccess 
     * @param onSkipped 
     */
    ShowRewardVideoAd(onSuccess: Laya.Handler, onSkipped: Laya.Handler);

    /**
     * 展示插页广告
     */
    ShowInterstitalAd();

    /**
     * 获取来源APPID,如果没有则返回null
     */
    GetFromAppId(): string;

    /**
     * 分享消息
     * @param obj 
     * @param onSuccess 
     * @param onFailed 
     */
    ShareAppMessage(obj: ShareInfo, onSuccess: Laya.Handler, onFailed: Laya.Handler);

    /**
     * 加载分包内容
     */
    LoadSubpackage(name: string, onSuccess: Laya.Handler, onFailed: Laya.Handler, onProgress: Laya.Handler);

    /**
     * 记录事件
     */
    RecordEvent(eventId: string, param: object);

    /**
     * 开始录屏
     */
    StartRecord(maxTime: number, startCallBack: Laya.Handler, overCallBack: Laya.Handler);

    /**
     * 停止录屏
     */
    StopRecord();

    /**
     * 分享视频内容
     */
    ShareVideoInfo(onSuccess: Laya.Handler, onFailed: Laya.Handler);

    /**
     * 检查更新,非外部调用
     */
    _CheckUpdate();

    /**
     * 显示toast
     */
    ShowToast(str: string);

}