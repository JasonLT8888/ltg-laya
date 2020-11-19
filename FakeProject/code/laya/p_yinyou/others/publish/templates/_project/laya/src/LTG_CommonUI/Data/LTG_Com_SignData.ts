import { ILTG_Com_Data } from "./ILTG_Com_Data";
import LTG_UI_SignMediator from "../Mediator/LTG_UI_SignMediator";

/**
 * -签到界面-
 * 签到数据由signconfig控制
 * @param onSign 签到回调
 * @param onClose 关闭回调
 */
export class LTG_Com_SignData implements ILTG_Com_Data {

    /**
     * confg: SignConfig.config
     * isWatched: boolean 是否观看了广告
     */
    public onSign: Laya.Handler;
    /**
     * 关闭界面回调
     */
    public onClose: Laya.Handler;

    public Send(): number {
        LTG_UI_SignMediator.instance.Show(this);
        return 0;
    }

}