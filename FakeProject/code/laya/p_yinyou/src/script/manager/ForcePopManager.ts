import { PushConfig } from "../config/PushConfig";
import LTSDK from "../../SDK/LTSDK";
import { ECheckState } from "../../SDK/common/ECheckState";

export class ForcePopManager {

    private static _instance: ForcePopManager;

    public static get instance(): ForcePopManager {
        if (this._instance == null) {
            this._instance = new ForcePopManager();
        }
        return this._instance;
    }

    private _startActionList: PushConfig.config[];
    private _endActionList: PushConfig.config[];

    public playCount: number = 1;

    private constructor() {
        this._startActionList = [];
        this._endActionList = [];
        for (let i = 0; i < PushConfig.dataList.length; ++i) {
            let pushConfig = PushConfig.dataList[i];
            if (!pushConfig.enable) continue;
            if (pushConfig.before_start) {
                // end pop
                this._endActionList.push(pushConfig);
            } else {
                // start pop
                this._startActionList.push(pushConfig);
            }
        }
        this._startActionList.sort((left: PushConfig.config, right: PushConfig.config) => {
            return left.priority - right.priority;
        });
        this._endActionList.sort((left: PushConfig.config, right: PushConfig.config) => {
            return left.priority - right.priority;
        });
    }

    public StartPop(): number[] {
        return this._SelectArray(this._startActionList);
    }

    public EndPop(): number[] {
        return this._SelectArray(this._endActionList);
    }

    private _SelectArray(array: PushConfig.config[]): number[] {
        let result = [];
        if (LTSDK.instance.checkState == ECheckState.InCheck) {
            return result;
        }
        for (let i = 0; i < array.length; ++i) {
            let actionConfig = array[i];
            if (actionConfig.start > this.playCount) continue;
            let offset = this.playCount - actionConfig.start;
            if (offset % actionConfig.duration == 0) {
                result.push(actionConfig.type);
            }
        }
        return result;
    }

}

export enum EPopType {
    WatchDY = 1,
    Sign = 2,
    Roll = 3,
    Try = 4,
}