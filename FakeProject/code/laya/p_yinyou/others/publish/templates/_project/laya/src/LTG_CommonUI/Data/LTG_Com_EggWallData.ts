import { ILTG_Com_Data } from "./ILTG_Com_Data";
import CommonSaveData from "../../LTGame/Commom/CommonSaveData";
import LTG_UI_EggWallMediator from "../Mediator/LTG_UI_EggWallMediator";
import { EggConfig } from "../../script/config/EggConfig";
import { RewardCodeConfig } from "../../script/config/RewardCodeConfig";

/**
 * -彩蛋墙-
 */
export class LTG_Com_EggWallData implements ILTG_Com_Data {

    /**
     * @param rewardType: number 类型
     * @param rewardValue: number id
     */
    public onUnlocked: Laya.Handler;

    public Send(): number {
        LTG_UI_EggWallMediator.instance.Show(this);
        return 0;
    }

    public static GetCodeUnlockProgress(codeId: number): string {
        let codeConfig = RewardCodeConfig.data[codeId];
        return this.GetCodeWatchedADCount(codeConfig.id) + "/" + codeConfig.need_ad_count;
    }

    public static GetCodeWatchedADCount(codeId: number): number {
        let codeConfig = RewardCodeConfig.data[codeId];
        let index = CommonSaveData.instance.codeStrList.indexOf(codeConfig.code);
        if (index < 0) {
            return 0;
        }
        let result = CommonSaveData.instance.codeADCounts[index];
        return result < 0 ? 0 : result;
    }

    public static RecordWatchAD(codeId: number): boolean {
        let codeConfig = RewardCodeConfig.data[codeId];
        let index = CommonSaveData.instance.codeStrList.indexOf(codeConfig.code);
        if (index < 0) {
            CommonSaveData.instance.codeStrList.push(codeConfig.code);
            CommonSaveData.instance.codeADCounts.push(1);
        } else {
            if (CommonSaveData.instance.codeADCounts[index] < 0) {
                CommonSaveData.instance.codeADCounts[index] = 0;
                CommonSaveData.instance.codeADCounts[index]++;
            } else {
                CommonSaveData.instance.codeADCounts[index]++;
            }
        }
        CommonSaveData.SaveToDisk();
        let watchedCount = CommonSaveData.instance.codeADCounts[index];
        if (watchedCount >= codeConfig.need_ad_count) {
            return true;
        } else {
            return false;
        }
    }

    public static GetEggState(eggConfig: EggConfig.config): EEggState {
        let codeConfig = RewardCodeConfig.data[eggConfig.reward_code];
        let index = CommonSaveData.instance.codeStrList.indexOf(codeConfig.code);
        if (index < 0) {
            return EEggState.Locked;
        } else {
            let watchCount = CommonSaveData.instance.codeADCounts[index];
            if (watchCount == -1) return EEggState.ShowHint;
            if (watchCount >= codeConfig.need_ad_count) {
                return EEggState.Unlocked;
            } else {
                return EEggState.Unlocking;
            }
        }
    }

    public static IsUnlocked(codeId: number): boolean {
        let codeConfig = RewardCodeConfig.data[codeId];
        let index = CommonSaveData.instance.codeStrList.indexOf(codeConfig.code);
        if (index < 0) {
            return false;
        }
        return CommonSaveData.instance.codeADCounts[index] >= codeConfig.need_ad_count;
    }

    public static UnlockEgg(codeId: number) {
        let codeConfig = RewardCodeConfig.data[codeId];
        let index = CommonSaveData.instance.codeStrList.indexOf(codeConfig.code);
        if (index < 0) {
            CommonSaveData.instance.codeStrList.push(codeConfig.code);
            CommonSaveData.instance.codeADCounts.push(0);
            CommonSaveData.SaveToDisk();
        } else {
            let count = CommonSaveData.instance.codeADCounts[index];
            if (count < 0) {
                CommonSaveData.instance.codeADCounts[index] = 0;
            }
        }
    }

    public static ShowEggHint(codeId: number) {
        let codeConfig = RewardCodeConfig.data[codeId];
        let index = CommonSaveData.instance.codeStrList.indexOf(codeConfig.code);
        if (index < 0) {
            CommonSaveData.instance.codeStrList.push(codeConfig.code);
            CommonSaveData.instance.codeADCounts.push(-1);
            CommonSaveData.SaveToDisk();
        }
    }

}

export enum EEggState {

    Locked,
    ShowHint,
    Unlocking,
    Unlocked

}