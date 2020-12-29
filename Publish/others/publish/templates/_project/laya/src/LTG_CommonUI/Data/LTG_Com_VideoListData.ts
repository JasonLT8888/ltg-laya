import { ILTG_Com_Data } from "./ILTG_Com_Data";
import CommonSaveData from "../../LTGame/Commom/CommonSaveData";
import LTG_UI_EggWallMediator from "../Mediator/LTG_UI_EggWallMediator";
import { EggConfig } from "../../script/config/EggConfig";
import { RewardCodeConfig } from "../../script/config/RewardCodeConfig";
import { LTG_UI_VideoListMediator } from "../Mediator/LTG_UI_VideoListMediator";

/**
 * -彩蛋墙-
 */
export class LTG_Com_VideoListData implements ILTG_Com_Data {

    /**
     * @param rewardType: number 类型
     * @param rewardValue: number id
     */
    public onShareVideo: Laya.Handler;

    public Send(): number {
        LTG_UI_VideoListMediator.instance.Show(this);
        return 0;
    }


}
