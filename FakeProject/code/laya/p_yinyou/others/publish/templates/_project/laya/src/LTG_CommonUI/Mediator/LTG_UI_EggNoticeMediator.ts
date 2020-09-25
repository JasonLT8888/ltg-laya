/*
import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTG_UI_EggNotice from "../UI/LTCom/LTG_UI_EggNotice";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import LTUI from "../../LTGame/UIExt/LTUI";
import { LTG_Com_EggNoticeData } from "../Data/LTG_Com_EggNoticeData";
import { LTG_Com_EggWallData } from "../Data/LTG_Com_EggWallData";
import LTG_UI_EggWallMediator from "./LTG_UI_EggWallMediator";

export default class LTG_UI_EggNoticeMediator extends BaseUIMediator<LTG_UI_EggNotice> {

    private static _instance: LTG_UI_EggNoticeMediator;
    public static get instance(): LTG_UI_EggNoticeMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_EggNoticeMediator();
            this._instance._classDefine = LTG_UI_EggNotice;
        }
        return this._instance;
    }

    private _cacheData: LTG_Com_EggNoticeData;

    _OnShow() {
        super._OnShow();
        // your code

        this._cacheData = this._openParam as LTG_Com_EggNoticeData;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_EggNoticeData进行界面打开操作");
        }

        this.ui.m_view.m_text_notice.text = this._cacheData.eggData.noticeStr;
        this.ui.m_view.m_btn_close.onClick(this, this._OnClickClose);
        this.ui.m_view.m_btn_get_imd.onClick(this, this._OnClickWatchAd);
    }

    private async _OnClickWatchAd() {
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            LTG_Com_EggWallData.UnlockEgg(this._cacheData.eggData.eggId);
            LTG_UI_EggWallMediator.instance.ui.m_list_view.refreshVirtualList();
            this._cacheData.onEggLocked?.runWith([this._cacheData.eggData]);
            this.Hide();
        } else {
            LTUI.Toast("跳过广告无法获得奖励");
        }
    }

    private _OnClickClose() {
        this.Hide();
    }

}
*/