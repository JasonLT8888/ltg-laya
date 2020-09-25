/*
import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTG_UI_ShareVideo from "../UI/LTCom/LTG_UI_ShareVideo";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import LTUI from "../../LTGame/UIExt/LTUI";
import { LTG_Com_ShareVideoData } from "../Data/LTG_Com_ShareVideoData";
import StringEx from "../../LTGame/LTUtils/StringEx";

export default class LTG_UI_ShareVideoMediator extends BaseUIMediator<LTG_UI_ShareVideo> {

    private static _instance: LTG_UI_ShareVideoMediator;
    public static get instance(): LTG_UI_ShareVideoMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_ShareVideoMediator();
            this._instance._classDefine = LTG_UI_ShareVideo;
        }
        return this._instance;
    }

    private _cacheData: LTG_Com_ShareVideoData;

    _OnShow() {
        super._OnShow();
        // your code

        this._cacheData = this._openParam as LTG_Com_ShareVideoData;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_ShareVideoData进行界面打开操作");
        }

        if (!StringEx.IsNullOrEmpty(this._cacheData.iconPath)) {
            this.ui.m_view.m_loader_icon.url = this._cacheData.iconPath;
        }
        if (!StringEx.IsNullOrEmpty(this._cacheData.textPath)) {
            this.ui.m_view.m_loader_text.url = this._cacheData.textPath;
        }

        this.ui.m_view.m_btn_close.onClick(this, this._OnClickClose);
        this.ui.m_view.m_btn_share.onClick(this, this._OnClickShare);
    }

    private _OnClickClose() {
        this._cacheData.onClosed?.runWith([0]);
        this.Hide();
    }

    private async _OnClickShare() {
        LTPlatform.instance.recordManager.ShareVideo(
            Laya.Handler.create(null, () => {
                this._cacheData.onClosed?.runWith([1]);
                this.Hide();
            }),
            Laya.Handler.create(null, () => {
                LTUI.Toast("取消分享无法获得奖励");
            }),
            Laya.Handler.create(null, () => {
                LTUI.Toast("分享错误");
            }))
    }

}
*/