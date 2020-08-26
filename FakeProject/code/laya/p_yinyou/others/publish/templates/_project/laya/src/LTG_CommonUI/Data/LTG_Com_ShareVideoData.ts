import { ILTG_Com_Data } from "./ILTG_Com_Data";
import LTG_UI_ShareVideoMediator from "../Mediator/LTG_UI_ShareVideoMediator";

/**
 * -分享视频-
 * @param iconPath 图标路径,建议工程内替换
 * @param textPath 文字路径,建议工程内替换
 */
export class LTG_Com_ShareVideoData implements ILTG_Com_Data {

    public iconPath: string = null;
    public textPath: string = null;

    /**
     * code: int 0 未分享, 1 已分享
     */
    public onClosed: Laya.Handler = null;

    public Send(): number {
        LTG_UI_ShareVideoMediator.instance.Show(this);
        return 0;
    }

}