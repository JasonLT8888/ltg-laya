import StringEx from "../LTUtils/StringEx";
import { LTUtils } from "../LTUtils/LTUtils";

export class SaveData {

    /**
     * 最后一次打开时间戳
     */
    public lastOpenTick: number = 0;
    /**
     * 是否是新的一天
     */
    public isNewDay: boolean = true;
    /**
     * 是否已签到
     */
    public isSigned: boolean = false;
    /**
     * 签到天数
     */
    public signDayCount: number = 0;
    /**
     * 音乐是否开启
     */
    public isMusicOn: boolean = true;
    /**
     * 振动是否开启
     */
    public isShakeOn: boolean = true;
    /**
     * 原生插屏展示次数
     */
    public interstitialCount: number = 0;
}

export default class CommonSaveData {

    private static _instance: CommonSaveData;
    public static get instance(): SaveData {
        if (this._instance == null) {
            this._instance = new CommonSaveData();
            this._instance._ReadFromFile();
            this._instance._InitData();
        }
        return this._instance._saveData;
    }

    private _savePath = "ltg-common-save.sav";

    private _saveData: SaveData;

    public static SaveToDisk() {
        if (!this._instance) return;
        let json = JSON.stringify(this._instance._saveData);
        Laya.LocalStorage.setJSON(this._instance._savePath, json);
    }

    private _InitData() {
        this._saveData.isNewDay = false;
        if (this._saveData.lastOpenTick == 0) {
            this._saveData.isNewDay = true;
        } else {
            let lastOpenDayCount = LTUtils.GetCurrentDayCount(this._saveData.lastOpenTick);
            let currentOpenDayCount = LTUtils.GetCurrentDayCount(Date.now());
            if (currentOpenDayCount != lastOpenDayCount) {
                this._saveData.isNewDay = true;
                this._saveData.interstitialCount = 0;
            }
        }
        this._saveData.lastOpenTick = Date.now();

        if (this._saveData.isNewDay) {
            this._saveData.isSigned = false;
        }

        CommonSaveData.SaveToDisk();
    }

    private _ReadFromFile() {
        let readStr = Laya.LocalStorage.getJSON(this._savePath);
        this._saveData = new SaveData();
        if (!StringEx.IsNullOrEmpty(readStr)) {
            let jsonData = JSON.parse(readStr);
            for (let key in jsonData) {
                this._saveData[key] = jsonData[key];
            }
        }

        console.log('common savedata:', this._saveData);
    }

}