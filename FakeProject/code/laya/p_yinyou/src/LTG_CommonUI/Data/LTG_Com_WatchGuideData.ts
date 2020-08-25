import { ILTG_Com_Data } from "./ILTG_Com_Data";
import LTG_UI_WatchGuideMediator from "../Mediator/LTG_UI_WatchGuideMediator";

/**
 * -关注抖音指引-
 * @param iconUrl 素材图标,建议在工程内替换
 */
export class LTG_Com_WatchGuideData implements ILTG_Com_Data {

    public iconUrl: string = null;

    public Send(): number {
        LTG_UI_WatchGuideMediator.instance.Show(this);
        return 0;
    }

}