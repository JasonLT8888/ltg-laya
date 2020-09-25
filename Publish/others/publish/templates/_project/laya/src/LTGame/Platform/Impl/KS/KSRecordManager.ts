import DefaultRecordManager from "../../DefaultRecordManager";
import IRecordManager from "../../IRecordManager";
import Awaiters from "../../../Async/Awaiters";



export default class KSRecordManager implements IRecordManager {

    public supportRecord: boolean = true;
    public get isSupportRecord(): boolean {
        if (this._nativeManager) {
            this.supportRecord = true;
            return true;
        }
        return false;
    }
    protected _cacheStartHandle: Laya.Handler;
    protected _cacheStopHandle: Laya.Handler;
    protected _cacheOverTimeHandle: Laya.Handler;
    protected _cachePauseHandle: Laya.Handler;
    protected _cacheResumeHandle: Laya.Handler;

    protected _base: any;
    protected _nativeManager: any;

    constructor(base: any) {
        this._base = base;

        this.isRecording = false;
        this.isRecordSuccess = false;
        this.isPausing = false;



    }
    isRecording: boolean;
    isPausing: boolean;
    isRecordSuccess: boolean;
    videoSavePath: string;

    StartRecord(onStart: Laya.Handler, onOverTime: Laya.Handler) {
        console.log("KS调用开始录屏");
        this._cacheStartHandle = onStart;
        this._cacheOverTimeHandle = onOverTime;
        this._cacheStopHandle = null;
        if (!this._nativeManager) {
            try {
                console.log("创建录屏组件");
                this._nativeManager = this._base.createMediaRecorder();
            } catch (error) {
                console.error('创建录屏组件错误', JSON.stringify(error));
            }
        }
        Awaiters.Seconds(1).then(() => {
            if (this._nativeManager) {
                this.supportRecord = true;
                this._nativeManager.init({
                    callback: (error) => {
                        if (error != null && error != undefined) {
                            console.log("录屏初始化失败: " + JSON.stringify(error));
                            return;
                        }
                        console.log("录屏初始化成功");
                    }
                });
                this._nativeManager.onError({
                    listener: (error) => {
                        console.log("录屏错误 终止录屏: " + error);
                        if (this._cacheStopHandle) this._cacheStopHandle.run();
                    }
                });
                this._nativeManager.start({
                    callback: (error) => {
                        if (error != null && error != undefined) {
                            console.log("开始录屏失败: " + JSON.stringify(error));
                            return;
                        }
                        console.log("开始录屏成功");
                        if (this._cacheStartHandle) this._cacheStartHandle.run();
                    }
                });
            } else {
                console.error(" 无录屏组件");
            }
        });


    }

    Pause(onPause: Laya.Handler) {
        if (!this.isRecording) {
            console.error("当前未开始录制,无法暂停录制");
            return;
        }
        if (this.isPausing) {
            console.log("当前录制状态已暂停");
            return;
        }

        console.log("调用暂停录制");
        this._cachePauseHandle = onPause;
        this._nativeManager.pause({
            callback: (error) => {
                if (error != null && error != undefined) {
                    console.log("暂停录屏失败: " + JSON.stringify(error));
                    return;
                }
                console.log("暂停录屏成功");
                if (this._cachePauseHandle) this._cachePauseHandle.run();
            }
        });
    }
    Resume(onReume: Laya.Handler) {
        if (!this.isRecording) {
            console.error("当前未开始录制,无法恢复录制");
            return;
        }
        if (!this.isPausing) {
            console.log("当前录制状态正在进行中");
            return;
        }
        console.log("调用恢复录制");
        this._cacheResumeHandle = onReume;
        this._nativeManager.resume({
            callback: (error) => {
                if (error != null && error != undefined) {
                    console.log("恢复录屏失败: " + JSON.stringify(error));
                    return;
                }
                if (this._cacheResumeHandle) this._cacheResumeHandle.run();
                console.log("恢复录屏成功");
            }
        });
    }

    RecordClip(timeRange: number[]) {

    }

    StopRecord(onStop: Laya.Handler) {
        console.log("调用结束录屏");
        if (!this.supportRecord) return;
        if (!this._nativeManager) return;
        this._cacheStopHandle = onStop;

        this._nativeManager.stop({
            callback: (error) => {
                if (error != null && error != undefined) {
                    console.log("停止录屏失败: " + JSON.stringify(error));
                    return;
                }
                console.log("停止录屏成功");
                this.isRecordSuccess = true;
                if (this._cacheStopHandle) this._cacheStopHandle.run();
            }
        });
    }


    ShareVideo(onSuccess: Laya.Handler, onCancel: Laya.Handler, onFailed: Laya.Handler) {
        if (this.isRecordSuccess) {
            this._nativeManager.publishVideo({
                callback: (error) => {
                    if (error != null && error != undefined) {
                        console.log("分享录屏失败: " + JSON.stringify(error));
                        if (onCancel) onCancel.run();
                        return;
                    }
                    console.log("分享录屏成功");
                    if (onSuccess) onSuccess.run();
                }
            });
        } else {
            console.log("无视频可以分享");
            if (onFailed) {
                onFailed.run();
            }
        }
    }
}