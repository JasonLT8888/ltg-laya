import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTG_UI_AddShortcut from "../UI/LTCom/LTG_UI_AddShortcut";
import { LTG_Com_AddShortcutData } from "../Data/LTG_Com_AddShortcutData";
import StringEx from "../../LTGame/LTUtils/StringEx";
import LTUI from "../../LTGame/UIExt/LTUI";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import { LTG_Com_WatchDYData } from "../Data/LTG_Com_WatchDYData";

export default class LTG_UI_AddShortcutMediator extends BaseUIMediator<LTG_UI_AddShortcut> {

    private static _instance: LTG_UI_AddShortcutMediator;
    public static get instance(): LTG_UI_AddShortcutMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_AddShortcutMediator();
            this._instance._classDefine = LTG_UI_AddShortcut;
        }
        return this._instance;
    }
    private _cacheData: LTG_Com_AddShortcutData;
    _OnShow() {
        super._OnShow();
        // your code
        this._cacheData = this._openParam as LTG_Com_AddShortcutData;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_AddShortcutData进行界面打开操作");
        }

        if (!StringEx.IsNullOrEmpty(this._cacheData.icon_url)) {
            this.ui.m_view.m_icon.url = this._cacheData.icon_url;
        }

        this.ui.m_view.m_btn_follow.onClick(this, this._OnClickShortcut);
        this.ui.m_btn_back.onClick(this, this._OnClickClose);
    }
    async _OnClickShortcut() {
        let created = await LTPlatform.instance.createShortcut();
        if (created) {
            this.Hide();
            this._cacheData.onReward?.run();
        }
    }
    private _OnClickClose() {
        LTUI.TrigerBtnClick();
        this.Hide();
    }

}