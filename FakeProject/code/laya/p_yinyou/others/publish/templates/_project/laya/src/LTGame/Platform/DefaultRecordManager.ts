import IRecordManager from "./IRecordManager";
import LTPlatform from "./LTPlatform";

export default class DefaultRecordManager implements IRecordManager {


    supportRecord: boolean = false;

    isRecording: boolean = false;

    isPausing: boolean = false;

    isRecordSuccess: boolean = false;

    videoSavePath: string;

    StartRecord(onStart: Laya.Handler, onOverTime: Laya.Handler) {
        console.log("该平台" + LTPlatform.platformStr + "不支持录制视频");
    }

    StopRecord(onStop: Laya.Handler) {
        console.log("该平台" + LTPlatform.platformStr + "不支持录制视频");
    }

    Pause(onPause: Laya.Handler) {
        console.log("该平台" + LTPlatform.platformStr + "不支持录制视频");
    }
    Resume(onReume: Laya.Handler) {
        console.log("该平台" + LTPlatform.platformStr + "不支持录制视频");
    }

    RecordClip(timeRange: number[]) {
        console.log("该平台" + LTPlatform.platformStr + "不支持录制视频");
    }

    ShareVideo(onSuccess: Laya.Handler, onCancel: Laya.Handler, onFailed: Laya.Handler) {
        if (onFailed) {
            onFailed.run();
        }
    }

}