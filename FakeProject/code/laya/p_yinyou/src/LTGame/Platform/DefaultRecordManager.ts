import IRecordManager from "./IRecordManager";
import { LTUtils } from "../LTUtils/LTUtils";
import LTPlatform from "./LTPlatform";
import LTUI from "../UIExt/LTUI";

export default class DefaultRecordManager implements IRecordManager {


    supportRecord: boolean = false;

    isRecording: boolean = false;

    isPausing: boolean = false;

    isRecordSuccess: boolean = false;

    videoSavePath: string;

    StartRecord(onStart: Laya.Handler, onOverTime: Laya.Handler) {
        LTUI.Toast("该平台" + LTPlatform.platformStr + "不支持录制视频");
    }

    StopRecord(onStop: Laya.Handler) {
        LTUI.Toast("该平台" + LTPlatform.platformStr + "不支持录制视频");
    }

    Pause(onPause: Laya.Handler) {
        LTUI.Toast("该平台" + LTPlatform.platformStr + "不支持录制视频");
    }
    Resume(onReume: Laya.Handler) {
        LTUI.Toast("该平台" + LTPlatform.platformStr + "不支持录制视频");
    }

    RecordClip(timeRange: number[]) {
        LTUI.Toast("该平台" + LTPlatform.platformStr + "不支持录制视频");
    }

}