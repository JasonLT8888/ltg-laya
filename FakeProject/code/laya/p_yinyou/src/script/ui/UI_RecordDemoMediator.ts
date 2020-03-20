import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_RecordDemo from "../../ui/Main/UI_RecordDemo";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import LTUI from "../../LTGame/UIExt/LTUI";

export default class UI_RecordDemoMediator extends BaseUIMediator<UI_RecordDemo> {

    private static _instance: UI_RecordDemoMediator;
    public static get instance(): UI_RecordDemoMediator {
        if (this._instance == null) {
            this._instance = new UI_RecordDemoMediator();
            this._instance._classDefine = UI_RecordDemo;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        // your code

        this.ui.m_btn_back.onClick(this, this._OnClickBack);
        this.ui.m_btn_share_video.onClick(this, this._OnClickShareRecord);
        this.ui.m_btn_start_record.onClick(this, this._OnClickStartRecord);
        this.ui.m_btn_stop_record.onClick(this, this._OnClickStopRecord);
        this.ui.m_btn_pause_record.onClick(this, this._OnClickPause);
        this.ui.m_btn_resume_record.onClick(this, this._OnClickResume);
        this.ui.m_btn_record_clip.onClick(this, this._OnClickRecordClip);

        this._UpdateUI();
    }

    private _UpdateUI() {
        this.ui.m_text_supportrecord.text = "当前平台:" + LTPlatform.platformStr
            + (LTPlatform.instance.recordManager.supportRecord ? "支持视频录制" : "不支持视频录制");
        this.ui.m_text_isrecording.text = "当前录制状态:" + (LTPlatform.instance.recordManager.isRecording ? "录制中" : "未录制");
        this.ui.m_text_pausestate.text = "录制暂停状态:" + (LTPlatform.instance.recordManager.isPausing ? "暂停中" : "未暂停");
        this.ui.m_text_savepath.text = LTPlatform.instance.recordManager.isRecordSuccess ? "视频地址:" + LTPlatform.instance.recordManager.videoSavePath
            : "等待录制完成";
    }

    private _OnClickStartRecord() {
        LTPlatform.instance.recordManager.StartRecord(Laya.Handler.create(null, () => {
            LTUI.Toast("开始录制视频");
            this._UpdateUI();
        }), Laya.Handler.create(null, () => {
            LTUI.Toast("录制视频超时结束");
            this._UpdateUI();
        }));
    }

    private _OnClickStopRecord() {
        LTPlatform.instance.recordManager.StopRecord(Laya.Handler.create(null, () => {
            LTUI.Toast("停止录制视频");
            this._UpdateUI();
        }));
    }

    private _OnClickShareRecord() {
        LTPlatform.instance.ShareVideoInfo(Laya.Handler.create(null, () => {
            LTUI.Toast("分享视频成功");
            this._UpdateUI();
        }), Laya.Handler.create(null, () => {
            LTUI.Toast("分享视频失败");
            this._UpdateUI();
        }))
    }

    private _OnClickPause() {
        LTPlatform.instance.recordManager.Pause(Laya.Handler.create(null, () => {
            LTUI.Toast("暂停录制视频");
            this._UpdateUI();
        }))
    }

    private _OnClickResume() {
        LTPlatform.instance.recordManager.Resume(Laya.Handler.create(null, () => {
            LTUI.Toast("恢复录制视频");
            this._UpdateUI();
        }))
    }

    private _OnClickRecordClip() {
        LTPlatform.instance.recordManager.RecordClip(null);
        LTUI.Toast("记录精彩时刻");
    }

    private _OnClickBack() {
        this.Hide();
        LTPlatform.instance.recordManager.StopRecord(null);
    }

}