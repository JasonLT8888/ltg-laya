import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTG_UI_WatchGuide from "../UI/LTCom/LTG_UI_WatchGuide";
import { LTG_Com_WatchGuideData } from "../Data/LTG_Com_WatchGuideData";
import StringEx from "../../LTGame/LTUtils/StringEx";

export default class LTG_UI_WatchGuideMediator extends BaseUIMediator<LTG_UI_WatchGuide> {

    private static _instance: LTG_UI_WatchGuideMediator;
    public static get instance(): LTG_UI_WatchGuideMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_WatchGuideMediator();
            this._instance._classDefine = LTG_UI_WatchGuide;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        // your code

        let openData = this._openParam as LTG_Com_WatchGuideData;
        if (openData == null) {
            throw new Error("请调用LTG_Com_WatchGuideData进行界面打开操作");
        }

        if (!StringEx.IsNullOrEmpty(openData.iconUrl)) {
            this.ui.m_view.m_loader_icon.url = openData.iconUrl;
        }

        this.ui.m_view.m_btn_close.onClick(this, this._OnClickClose);
    }

    private _OnClickClose() {
        this.Hide();
    }

}