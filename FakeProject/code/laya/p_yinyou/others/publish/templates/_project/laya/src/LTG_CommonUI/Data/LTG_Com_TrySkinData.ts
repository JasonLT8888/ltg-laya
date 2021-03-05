import { ILTG_Com_Data } from "./ILTG_Com_Data";
import { TryItemConfig } from "../../script/config/TryItemConfig";
import LTG_UI_TrySkinMediator from "../Mediator/LTG_UI_TrySkinMediator";

export class LTG_Com_TrySkinData implements ILTG_Com_Data {

    public tryConfig: TryItemConfig.config;

    public onClose: Laya.Handler;

    Send(): number {
        LTG_UI_TrySkinMediator.instance.Show(this);
        return 0;
    }

}