import LTPlatform from "../../LTGame/Platform/LTPlatform";
import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTUI from "../../LTGame/UIExt/LTUI";
import { LTG_Com_WatchDYData } from "../Data/LTG_Com_WatchDYData";
import LTG_UI_WatchDY from "../UI/LTCom/LTG_UI_WatchDY";

export default class LTG_UI_WatchDYMediator extends BaseUIMediator<LTG_UI_WatchDY> {

    private static _instance: LTG_UI_WatchDYMediator;
    public static get instance(): LTG_UI_WatchDYMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_WatchDYMediator();
            this._instance._classDefine = LTG_UI_WatchDY;
        }
        return this._instance;
    }

    private _cacheData: LTG_Com_WatchDYData;

    _OnShow() {
        super._OnShow();
        // your code

        this._cacheData = this._openParam as LTG_Com_WatchDYData;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_ZhuaWawaData进行界面打开操作");
        }

        this.ui.m_view.m_text_code.text = this._cacheData.dyId;
        this.ui.m_btn_close.onClick(this, this._OnClickClose);
        // this.ui.m_view.m_btn_copy.onClick(this, this._OnClickCopy);
        this.ui.m_view.m_btn_watch.onClick(this, this._OnClickWatch);
        this.ui.m_view.m_btn_follow.onClick(this, this._OnClickWatch);
        // this.ui.m_view.m_btn_copy.visible = false;
        this.ui.m_view.m_text_code.visible = true; 
    }

    private _OnClickCopy() {
        LTUI.Toast("已拷贝到剪切板");
        LTPlatform.instance.SetClipboardData(this._cacheData.dyId);
    }

    private _OnClickClose() {
        this.Hide();
    }

    private _OnClickWatch() {
        // let data = new LTG_Com_WatchGuideData();
        // data.iconUrl = this._cacheData.iconUrl;
        // data.Send();
        // this.Hide();
        LTPlatform.instance.followOfficialAccount();
    }

}