import { ILTG_Com_Data } from "./ILTG_Com_Data";
import CommonSaveData from "../../LTGame/Commom/CommonSaveData";
import LTG_UI_EggWallMediator from "../Mediator/LTG_UI_EggWallMediator";

/**
 * -彩蛋墙-
 */
export class LTG_Com_EggWallData implements ILTG_Com_Data {

    public eggWallDatas: EggWallData[] = [];
    /**
     * @param data EggWallData
     */
    public onUnlockEgg: Laya.Handler;

    public static UnlockEgg(id: number) {
        let index = CommonSaveData.instance.eggWallIds.indexOf(id);
        if (index > -1) {
            CommonSaveData.instance.eggWallStates[index] = EEggState.Unlocked;
        } else {
            CommonSaveData.instance.eggWallIds.push(id);
            CommonSaveData.instance.eggWallStates.push(EEggState.Unlocked);
        }
        CommonSaveData.SaveToDisk();
    }

    public static UpdateEggState(id: number, state: EEggState) {
        let index = CommonSaveData.instance.eggWallIds.indexOf(id);
        if (index > -1) {
            CommonSaveData.instance.eggWallStates[index] = state;
        } else {
            CommonSaveData.instance.eggWallIds.push(id);
            CommonSaveData.instance.eggWallStates.push(state);
        }
        CommonSaveData.SaveToDisk();
    }

    public static GetEggState(id: number): EEggState {
        let index = CommonSaveData.instance.eggWallIds.indexOf(id);
        if (index > -1) {
            return CommonSaveData.instance.eggWallStates[index];
        } else {
            CommonSaveData.instance.eggWallIds.push(id);
            CommonSaveData.instance.eggWallStates.push(EEggState.Locked);
            CommonSaveData.SaveToDisk();
            return EEggState.Locked;
        }
    }

    public Send(): number {
        LTG_UI_EggWallMediator.instance.Show(this);
        return 0;
    }

}

export class EggWallData {

    /**
     * id
     */
    public eggId: number;
    /**
     * 彩图
     */
    public iconPath: string;
    /**
     * 黑图
     */
    public maskPath: string;
    /**
     * 提示文本
     */
    public noticeStr: string;
    /**
     * 展示图标
     */
    public displayIcon: string;
    /**
     * 是否展示
     */
    public canShow: boolean;
}

export enum EEggState {

    Locked = 0,
    Unlocked = 1,
    CanHint = 2

}