import { ILTG_Com_Data } from "./ILTG_Com_Data";
import LTG_UI_LimitSkinMediator from "../Mediator/LTG_UI_LimitSkinMediator";

/**
 * -限定皮肤-
 */
export class LTG_Com_LimitSkinData implements ILTG_Com_Data {

    public iconUrl: string = null;
    public textUrl: string = null;
    public watchCount: number = 0;
    public onWatchedAd: Laya.Handler = null;

    public Send(): number {
        LTG_UI_LimitSkinMediator.instance.Show(this);
        return 0;
    }

    public static UpdateCount(count: number) {
        if (!LTG_UI_LimitSkinMediator.instance.isShow) return;
        LTG_UI_LimitSkinMediator.instance.Refresh(count);
    }

    public static Hide() {
        LTG_UI_LimitSkinMediator.instance.Hide();
    }

}