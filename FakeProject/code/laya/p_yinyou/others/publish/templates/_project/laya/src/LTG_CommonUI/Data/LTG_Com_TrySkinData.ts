import { ILTG_Com_Data } from "./ILTG_Com_Data";
import { TryItemConfig } from "../../script/config/TryItemConfig";
import LTG_UI_TrySkinMediator from "../Mediator/LTG_UI_TrySkinMediator";
import { EggConfig } from "../../script/config/EggConfig";
import { CommonProgressData } from "../../LTGame/Commom/CommonProgressData";
import { EEggState } from "./LTG_Com_EggWallData";
const TRY_TAG = 10000;
export class LTG_Com_TrySkinData implements ILTG_Com_Data {

    /**返回true 代表看了广告  解锁进度和试用逻辑*/
    public onClose: Laya.Handler;
    /**模型路径 */
    public modelPath: string;
    /**试用进度 不解锁进度则不传 */
    public tryProgress: string;

    Send(): number {
        LTG_UI_TrySkinMediator.instance.Show(this);
        return 0;
    }


}