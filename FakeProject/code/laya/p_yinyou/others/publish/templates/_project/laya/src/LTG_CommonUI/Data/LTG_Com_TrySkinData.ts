import LTG_UI_TrySkinMediator from "../Mediator/LTG_UI_TrySkinMediator";
import { ILTG_Com_Data } from "./ILTG_Com_Data";
/**传参图标和模型二选一 */
export class LTG_Com_TrySkinData implements ILTG_Com_Data {

    /**回调返回true 代表看了广告  
     * 这里面执行试用逻辑和解锁逻辑(若需要)
    */
    public onClose: Laya.Handler;
    /**图标 */
    public tryIcon: string;
    /**模型路径 */
    public modelPath: string;
    /**试用进度 不解锁进度则不传 */
    public tryProgress: string;
    Send(): number {
        LTG_UI_TrySkinMediator.instance.Show(this);
        return 0;
    }


}