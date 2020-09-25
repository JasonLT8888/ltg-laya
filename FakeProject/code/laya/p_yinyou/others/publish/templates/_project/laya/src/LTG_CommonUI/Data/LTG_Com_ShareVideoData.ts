import { ILTG_Com_Data } from "./ILTG_Com_Data";
import LTG_UI_ScreenShootMediator from "../Mediator/LTG_UI_ScreenShootMediator";

/**
 * -分享视频-
 * @param camera 截图用相机
 * @param onClosed 关闭事件
 */
export class LTG_Com_ShareVideoData implements ILTG_Com_Data {

    public camera: Laya.Camera = null;

    /**
     * code: int 0 未分享, 1 已分享
     */
    public onClosed: Laya.Handler = null;

    public Send(): number {
        LTG_UI_ScreenShootMediator.instance.Show(this);
        return 0;
    }

}