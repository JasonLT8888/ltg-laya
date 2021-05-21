import { ILTG_Com_Data } from "./ILTG_Com_Data";
import LTG_UI_EggWallMediator from "../Mediator/LTG_UI_EggWallMediator";
import { EggConfig } from "../../script/config/EggConfig";
import { CommonProgressData } from "../../LTGame/Commom/CommonProgressData";

const EGG_TAG = 1001;
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

    public static GetUnlockProgress(eggId: number): string {
        let eggConfig = EggConfig.data[eggId];
        return this.GetWatchedADCount(eggConfig.id) + "/" + eggConfig.unlock_value;
    }

    public static GetWatchedADCount(eggId: number): number {
        return CommonProgressData.instance.ReadProgress(EGG_TAG, eggId);
    }

    public static RecordWatchAD(eggId: number): boolean {
        let newValue = CommonProgressData.instance.AddProgress(EGG_TAG, eggId);
        let eggConfig = EggConfig.data[eggId];
        return newValue >= eggConfig.unlock_value;
    }

    public static MarkEggUnlocking(eggId: number) {
        CommonProgressData.instance.SetProgress(EGG_TAG, eggId, 0);
    }

    public static GetEggState(eggConfig: EggConfig.config): EEggState {
        let readValue = CommonProgressData.instance.ReadProgress(EGG_TAG, eggConfig.id, -1);
        if (readValue < 0) return EEggState.Locked;
        if (readValue < eggConfig.unlock_value) {
            return EEggState.Unlocking;
        }
        return EEggState.Unlocked;
    }

}

export enum EEggState {

    Locked,
    Unlocking,
    Unlocked

}