import StringEx from "../../LTGame/LTUtils/StringEx";
import CommonSaveData from "../../LTGame/Commom/CommonSaveData";

export class SaveData {

    /**
     * 金币数量
     */
    public coinCount: number = 0;

    /**
 * 彩蛋获得数据
 */
    public EggPassIds: number[] = [];
    /**
    * 彩蛋密语数据
    */
    public EggSecretIds: number[] = [];
    /**
    * 彩蛋暗号数据
    */
    public EggPasswordIds: number[] = [];

}

export default class GameData {

    private static _instance: GameData;
    public static get instance(): SaveData {
        if (this._instance == null) {
            this._instance = new GameData();
            this._instance._ReadFromFile();
        }
        return this._instance._saveData;
    }

    private _savePath = "game01.sav";

    private _saveData: SaveData;

    public static SaveToDisk() {
        if (!this._instance) return;
        let json = JSON.stringify(this._instance._saveData);
        Laya.LocalStorage.setJSON(this._instance._savePath, json);
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

        console.log(this._saveData);
    }

}