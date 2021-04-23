import StringEx from "../LTUtils/StringEx";
import ArrayEx from "../LTUtils/ArrayEx";

class SaveData {
    public saveTags: number[] = [];
    public saveIdArray: number[][] = [];
    public saveProgressArray: number[][] = [];
}

export class CommonProgressData {

    private static _instance: CommonProgressData;
    public static get instance(): CommonProgressData {
        if (this._instance == null) {
            console.error("CommonProgressData尚未初始化,请先调用Init进行初始化");
        }
        return this._instance;
    }

    public static Init(saveName: string) {
        if (this._instance != null) {
            console.error("CommonProgressData不能重复进行初始化");
            return;
        }
        this._instance = new CommonProgressData(saveName);
        this._instance._ReadData();
        console.log('CommonProgressData初始化完成:' + saveName);
    }

    private _savePath: string;
    private _saveData: SaveData;

    private constructor(savePath: string) {
        this._savePath = savePath;
    }

    private _ReadData() {
        let readStr = Laya.LocalStorage.getJSON(this._savePath);
        this._saveData = new SaveData();
        if (StringEx.IsNullOrEmpty(readStr)) {
            this._SaveData();
        } else {
            let jsonData = JSON.parse(readStr);
            for (let key in jsonData) {
                this._saveData[key] = jsonData[key];
            }
        }
    }

    private _SaveData() {
        let json = JSON.stringify(this._saveData);
        Laya.LocalStorage.setJSON(this._savePath, json);
    }

    private _GetTagIndex(tag: number): number {
        let saveIndex = this._saveData.saveTags.indexOf(tag);
        if (saveIndex > -1) {
            return saveIndex;
        }
        this._saveData.saveTags.push(tag);
        this._saveData.saveProgressArray.push([]);
        this._saveData.saveIdArray.push([]);
        return this._saveData.saveTags.length - 1;
    }

    private _GetIds(tagIndex: number): number[] {
        if (this._saveData.saveIdArray.length > tagIndex) {
            return this._saveData.saveIdArray[tagIndex];
        }
        console.error("理论上不该触发");
        let newArray = [];
        this._saveData.saveIdArray[tagIndex] = newArray;
        return newArray;
    }

    private _GetProgresses(tagIndex: number): number[] {
        if (this._saveData.saveProgressArray.length > tagIndex) {
            return this._saveData.saveProgressArray[tagIndex];
        }
        console.error("理论上不该触发");
        let newArray = [];
        this._saveData.saveProgressArray[tagIndex] = newArray;
        return newArray;
    }

    public AddProgress(tag: number, id: number, addProgress: number = 1): number {
        let tagIndex: number = this._GetTagIndex(tag);
        let idArray: number[] = this._GetIds(tagIndex);
        let progressArray: number[] = this._GetProgresses(tagIndex);
        let idIndex = idArray.indexOf(id);
        if (idIndex > -1) {
            progressArray[idIndex] += addProgress;
        } else {
            idArray.push(id);
            progressArray.push(addProgress);
            idIndex = idArray.length - 1;
        }
        this._SaveData();
        return progressArray[idIndex];
    }

    public SetProgress(tag: number, id: number, setProgress: number): number {
        let tagIndex: number = this._GetTagIndex(tag);
        let idArray: number[] = this._GetIds(tagIndex);
        let progressArray: number[] = this._GetProgresses(tagIndex);
        let idIndex = idArray.indexOf(id);
        if (idIndex > -1) {
            progressArray[idIndex] = setProgress;
        } else {
            idArray.push(id);
            progressArray.push(setProgress);
            idIndex = idArray.length - 1;
        }
        this._SaveData();
        return progressArray[idIndex];
    }

    public ReadProgress(tag: number, id: number, defaultProgress: number = 0): number {
        let tagIndex: number = this._GetTagIndex(tag);
        let idArray: number[] = this._GetIds(tagIndex);
        let progressArray: number[] = this._GetProgresses(tagIndex);
        let idIndex = idArray.indexOf(id);
        if (idIndex > -1) {
            return progressArray[idIndex];
        } else {
            return defaultProgress;
        }
    }

    public ClearProgress(tag: number, id: number) {
        let tagIndex: number = this._GetTagIndex(tag);
        let idArray: number[] = this._GetIds(tagIndex);
        let progressArray: number[] = this._GetProgresses(tagIndex);
        let idIndex = idArray.indexOf(id);
        if (idIndex > -1) {
            ArrayEx.RemoveAt(idArray, idIndex);
            ArrayEx.RemoveAt(progressArray, idIndex);
        }
        this._SaveData();
    }

    public ClearAll() {
        this._saveData = new SaveData();
        this._SaveData();
    }

}