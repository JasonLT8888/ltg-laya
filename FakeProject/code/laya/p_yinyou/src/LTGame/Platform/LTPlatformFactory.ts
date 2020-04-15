import IPlatform from "./IPlatform";
import TTPlatform from "./TTPlatform";
import WXPlatform from "./WXPlatform";
import BDPlatform from "./BDPlatform";
import QTTPlatform from "./QTTPlatform";
import QQPlatform from "./QQPlatform";
import DefaultPlatform from "./DefaultPlatform";
import OppoPlatform from "./OppoPlatform";

export default class LTPlatformFactory {

    public static CreateInstance(): IPlatform {

        let isQTT = window["qttGame"] != null;
        let isTT = window["tt"] != null;

        let result: IPlatform;
        if (isTT) {
            result = new TTPlatform();
        } else if (Laya.Browser.onMiniGame) {
            result = new WXPlatform();
        } else if (Laya.Browser.onBDMiniGame) {
            result = new BDPlatform();
        } else if (isQTT) {
            result = new QTTPlatform();
        } else if (Laya.Browser.onQQMiniGame) {
            result = new QQPlatform();
        } else if (Laya.Browser.onQGMiniGame) {
            result = new OppoPlatform();
        } else {
            console.log("未识别平台,默认创建为web", Laya.Browser.userAgent);
            result = new DefaultPlatform();
        }
        return result;

    }

}