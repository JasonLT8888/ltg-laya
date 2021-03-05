import { PackConst } from "../../../../script/config/PackConst";
import DefaultRecordManager from "../../DefaultRecordManager";
import LTPlatform from "../../LTPlatform";
import LTSDK from "../../../../SDK/LTSDK";
import GameData from "../../../../script/common/GameData";
import CommonSaveData from "../../../Commom/CommonSaveData";

export default class TTRecordManager extends DefaultRecordManager {

    supportRecord: boolean = true;
    public get isSupportRecord(): boolean {
        return this.supportRecord;
    }
    protected _cacheStartHandle: Laya.Handler;
    protected _cacheStopHandle: Laya.Handler;
    protected _cacheOverTimeHandle: Laya.Handler;
    protected _cachePauseHandle: Laya.Handler;
    protected _cacheResumeHandle: Laya.Handler;

    protected _base: any;
    protected _nativeManager: any;

    constructor(base: any) {
        super();
        this._base = base;
        if (LTPlatform.instance.systemInfo['appName'] == "devtools") {
            this.supportRecord = false;
        }
        this.isRecording = false;
        this.isRecordSuccess = false;
        this.isPausing = false;

        this._nativeManager = this._base.getGameRecorderManager();
        this._nativeManager.onStart((res) => {
            console.log("平台开始录制", res);
            this.isRecording = true;
            this.isRecordSuccess = false;
            this._cacheStartHandle && this._cacheStartHandle.run();
        });
        this._nativeManager.onStop((res) => {
            console.log("平台停止录制", res);
            this.videoSavePath = res.videoPath;
            this.isRecording = false;
            this.isRecordSuccess = true;
            if (this._cacheStopHandle) {
                this._cacheStopHandle.run();
            } else if (this._cacheOverTimeHandle) {
                this._cacheOverTimeHandle.run();
            }
        });
        this._nativeManager.onError((err) => {
            console.log("录制发生错误", err);
            this.isRecordSuccess = false;
            this.isRecording = false;
        });
        this._nativeManager.onPause((res) => {
            console.log("暂停录制视频", res);
            this.isPausing = true;
            this._cachePauseHandle && this._cachePauseHandle.run();
        });
        this._nativeManager.onResume((res) => {
            console.log("暂停录制视频", res);
            this.isPausing = false;
            this._cacheResumeHandle && this._cacheResumeHandle.run();
        });

    }

    StartRecord(onStart: Laya.Handler, onOverTime: Laya.Handler) {
        if (!this.supportRecord) {
            console.log("不支持录屏");
            return;
        }
        console.log("调用开始录屏");
        this._cacheStartHandle = onStart;
        this._cacheOverTimeHandle = onOverTime;
        this._cacheStopHandle = null;

        this._nativeManager.start({ duration: 300 });
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
        this._nativeManager.pause();
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
        this._nativeManager.resume();
    }

    RecordClip(timeRange: number[]) {
        if (!this.isRecording) {
            console.error("当前未开始录制,无法记录精彩时刻");
            return;
        }
        if (this.isPausing) {
            console.log("当前录制状态已暂停,无法记录精彩时刻");
            return;
        }
        if (timeRange == null) {
            this._nativeManager.recordClip({});
        } else {
            this._nativeManager.recordClip({ timeRange: timeRange });
        }
    }

    StopRecord(onStop: Laya.Handler) {
        console.log("调用结束录屏");
        this._cacheStopHandle = onStop;

        this._nativeManager.stop();
    }

    videoID: string = '';
    ShareVideo(onSuccess: Laya.Handler, onCancel: Laya.Handler, onFailed: Laya.Handler) {
        console.log(PackConst.data);
        if (this.isRecordSuccess) {
            let shareId = `${LTSDK.instance.uid}${Date.now()}`
            let shareData = {
                channel: "video",
                title: "",
                desc: "",
                imageUrl: "",
                templateId: PackConst.data.share_id,
                query: `from=sharePage`,
                extra: {
                    videoPath: this.videoSavePath, // 可替换成录屏得到的视频地址
                    videoTopics: PackConst.data.topics,// ['小游戏', '学生党', '钻石方块']
                    withVideoId: true,
                    hashtag_list: PackConst.data.topics,
                    defaultBgm: PackConst.data.defaultBgm,
                    video_title: ""
                },
                success: (res) => {
                    LTPlatform.instance['_cacheOnShowHandle'] = Laya.Handler.create(null, () => {
                        console.log("分享成功", res);
                        this.videoID = res.videoId;
                        LTSDK.instance.reportShareInfo(res.videoId, shareId);
                        if (onSuccess) {
                            onSuccess.run();
                        }
                    })
                },
                fail: (e) => {
                    LTPlatform.instance['_cacheOnShowHandle'] = Laya.Handler.create(null, () => {
                        console.log("取消分享");
                        if (onCancel) {
                            onCancel.run();
                        }
                    })
                }
            } as any;
            this._base.shareAppMessage(shareData);
        } else {
            console.log("无视频可以分享");
            if (onFailed) {
                onFailed.run();
            }
        }
    }
    navigateToVideo(videoId: string) {
        if (!this.videoID) {
            return;
        }
        this._base.navigateToVideoView({
            videoId: this.videoID,
            success: (res) => {
                console.log("跳转成功", res);
            },
            fail: (err) => {
                if (err.errCode === 1006) {
                    this._base.showToast({
                        title: "something wrong with your network",
                    });
                }
            },
        });
    }

}