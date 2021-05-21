import { ILTG_Com_Data } from "./ILTG_Com_Data";
import { RewardCodeConfig } from "../../script/config/RewardCodeConfig";
import LTG_UI_UnlockItemMediator from "../Mediator/LTG_UI_UnlockItemMediator";
import { LTG_Com_EggWallData } from "./LTG_Com_EggWallData";
import LTUI from "../../LTGame/UIExt/LTUI";

export class LTG_Com_UnlockItemData implements ILTG_Com_Data {

    public rewardConfig: RewardCodeConfig.config;

    public onClose: Laya.Handler;
    public onUnlocked: Laya.Handler;

    public Send(): number {
        LTG_UI_UnlockItemMediator.instance.Show(this);
        return 0;
    }

    public static HandleCodeEnter(codeStr: string, onUnlocked: Laya.Handler) {
        // TODO:取消该功能
        LTUI.Toast("无效的兑换码");
    }

}