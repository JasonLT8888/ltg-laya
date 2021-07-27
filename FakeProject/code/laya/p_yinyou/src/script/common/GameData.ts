import StringEx from "../../LTGame/LTUtils/StringEx";
import CommonSaveData from "../../LTGame/Commom/CommonSaveData";

export class SaveData {

    /**
     * 金币数量
     */
    public coinCount: number = 0;
    /**
     * 关卡id
     */
    public levelId: number = 1;
    /**
     * 排行榜分数
     */
    public maxScore: number = 0;

}

export default class GameData {

    private static _instance: GameData;
    public static get instance(): SaveData {
        if (this._instance == null) {
            this._instance = new GameData();
            this._instance._ReadFromFile();
            this.SaveToDisk();
        }
        return this._instance._saveData;
    }

    private _saveData: SaveData;

    public static SAVE_NAME: string = 'p_game01.sav';

    public static SaveToDisk() {
        if (!this._instance) return;
        let json = JSON.stringify(this._instance._saveData);
        Laya.LocalStorage.setJSON(GameData.SAVE_NAME, json);
        CommonSaveData.SaveToDisk();
    }

    private _ReadFromFile() {
        let readStr = Laya.LocalStorage.getJSON(GameData.SAVE_NAME);
        this._saveData = new SaveData();
        if (!StringEx.IsNullOrEmpty(readStr)) {
            let jsonData = JSON.parse(readStr);
            for (let key in jsonData) {
                this._saveData[key] = jsonData[key];
            }
        }

        console.log(this._saveData);
    }

}