import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_Main from "../../ui/Main/UI_Main";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import UI_UIDemoMediator from "./UI_UIDemoMediator";
import UI_ADDemoMediator from "./UI_ADDemoMediator";
import UI_RecordDemoMediator from "./UI_RecordDemoMediator";
import UI_CommonUIMediator from "./UI_CommonUIMediator";
import LTUI from "../../LTGame/UIExt/LTUI";
import { TestConst } from "../config/TestConst";
import UI_PerfomanceMediator from "./UI_PerfomanceMediator";

export class UI_MainMediator extends BaseUIMediator<UI_Main> {

    private static _instance;
    public static get instance(): UI_MainMediator {
        if (this._instance == null) {
            this._instance = new UI_MainMediator();
            this._instance._classDefine = UI_Main;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        this.ui.m_btn_ad.onClick(this, this._OnClickBtnAd);
        this.ui.m_btn_ui.onClick(this, this._OnClickBtnUI);
        this.ui.m_btn_record.onClick(this, this._OnClickRecord);
        this.ui.m_btn_common.onClick(this, this._OnClickCommon);
        this.ui.m_btn_others.onClick(this, this._OnClickOthers);
        this.ui.m_btn_performance.onClick(this, this._OnClickPerfomance);
    }

    private _OnClickPerfomance() {
        UI_PerfomanceMediator.instance.Show();
    }

    private _OnClickOthers() {
        LTUI.Toast("读取到配置:" + TestConst.data.init_coin_count);
    }

    private _OnClickBtnAd() {
        UI_ADDemoMediator.instance.Show();
    }

    private _OnClickBtnUI() {
        UI_UIDemoMediator.instance.Show();
    }

    private _OnClickRecord() {
        UI_RecordDemoMediator.instance.Show();
    }

    private _OnClickCommon() {
        UI_CommonUIMediator.instance.Show();
    }

}