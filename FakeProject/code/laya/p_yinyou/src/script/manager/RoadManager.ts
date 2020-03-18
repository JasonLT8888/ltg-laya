import ResDefine from "../common/ResDefine";
import GlobalUnit from "../common/GlobalUnit";
import { LTUtils } from "../../LTGame/LTUtils/LTUtils";
import GameConst from "../common/GameConst";
import MathEx from "../../LTGame/LTUtils/MathEx";
import { PropConfig } from "../config/PropConfig";
import { LevelConfig } from "../config/LevelConfig";
import GameData from "../common/GameData";
import AudioManager from "./AudioManager";
import Awaiters from "../../LTGame/Async/Awaiters";
import LTRes from "../../LTGame/Res/LTRes";

export default class RoadManager {

    private _followFloor: Laya.Sprite3D;
    private _propContainer: Laya.Sprite3D;

    public totalDistance: number;
    private _levelConfig: LevelConfig.config;

    private _cacheBgm: string;

    public Preload(urls: string[]) {
        urls.push(ResDefine.FixPath(ResDefine.floor_path));
        let propList = PropConfig.dataList;
        for (let propConfig of propList) {
            urls.push(ResDefine.FixPath(propConfig.model_path));
        }
    }

    private _GetDataConfigPath(): string {
        return "res/level/" + this._levelConfig.level_config;
    }

    public async CreateRoad() {

        this._levelConfig = LevelConfig.data[GameData.instance.levelId];
        if (this._levelConfig == null) {
            console.error("关卡不存在", GameData.instance.levelId, "初始化为第一关");
            this._levelConfig = LevelConfig.dataList[0];
        }
        await LTRes.Load2dAsync(this._GetDataConfigPath());

        this._followFloor = GlobalUnit.s3d.addChild(LTUtils.GetRes(ResDefine.FixPath(ResDefine.floor_path))) as Laya.Sprite3D;
        this._propContainer = new Laya.Sprite3D();
        GlobalUnit.s3d.addChild(this._propContainer);

        this._followFloor.transform.localPositionZ = 0;

        let loadJson = Laya.loader.getRes(this._GetDataConfigPath());

        this.totalDistance = loadJson['length'] * GameConst.genRoadSpeed;
        let timeArray: number[] = loadJson['time'];
        let dataArray: number[][] = loadJson['data'];
        for (let i = 0; i < timeArray.length; ++i) {
            let distance = timeArray[i] * GameConst.genRoadSpeed;
            let readData = dataArray[i];
            for (let j = 0; j < readData.length; ++j) {
                let genId = readData[j];
                let propConfig = PropConfig.data[genId];
                if (propConfig == null) {
                    continue;
                }
                let addProp = this._propContainer.addChild(LTUtils.GetRes(ResDefine.FixPath(propConfig.model_path))) as Laya.Sprite3D;
                addProp.transform.localPositionZ = distance;
                addProp.transform.localPositionX = (2 - j) * GameConst.halfRoadWidth / 2;
                addProp.name = "" + genId;
            }
        }

        await Awaiters.NextFrame();

        let bgm = loadJson['bgm'];
        this._cacheBgm = "res/bgm/" + bgm + ".mp3";
        await LTRes.Load2dAsync(this._cacheBgm);

        // 销毁
        Laya.loader.clearRes(this._GetDataConfigPath());

    }

    public StartGame() {
        AudioManager.instance.PlayByPath(this._cacheBgm);
    }

    public ClearRoad() {

    }

    public LogicUpdate(dt: number) {
        this._followFloor.transform.localPositionZ += dt * GameConst.moveSpeedZ;
    }

    public StopGame() {
        AudioManager.instance.StopAll();
    }

}