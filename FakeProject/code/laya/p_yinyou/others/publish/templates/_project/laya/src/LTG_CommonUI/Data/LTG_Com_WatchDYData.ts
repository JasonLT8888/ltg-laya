import { ILTG_Com_Data } from "./ILTG_Com_Data";
import LTG_UI_WatchDYMediator from "../Mediator/LTG_UI_WatchDYMediator";

/**
 * -关注抖音号-
 * @param dyId 抖音号
 * @param iconUrl 素材图标,建议在工程内替换
 */
export class LTG_Com_WatchDYData implements ILTG_Com_Data {

    public dyId: string = "wysgs";
    public iconUrl: string = null;

    public Send(): number {
        LTG_UI_WatchDYMediator.instance.Show(this);
        return 0;
    }

}