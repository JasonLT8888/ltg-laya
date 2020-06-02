import IPlatform from "./IPlatform";
import TTPlatform from "./TTPlatform";
import WXPlatform from "./WXPlatform";
import BDPlatform from "./BDPlatform";
import QTTPlatform from "./QTTPlatform";
import QQPlatform from "./QQPlatform";
import DefaultPlatform from "./DefaultPlatform";
import OppoPlatform from "./OppoPlatform";
import { NativeIOSPlatform } from "./Impl/Native_IOS/NativeIOSPlatform";

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
        } else if (window['conch']) {
            let conchConfig = window['conchConfig'];
            let os = conchConfig.getOS();
            if (os == 'Conch-ios') {
                result = new NativeIOSPlatform();
            } else if (os == 'Conch-android') {
                result = new DefaultPlatform();
                console.error("android native平台暂未接入");
            }

        } else {
            console.log("未识别平台,默认创建为web", Laya.Browser.userAgent);
            result = new DefaultPlatform();
        }
        return result;

    }

}