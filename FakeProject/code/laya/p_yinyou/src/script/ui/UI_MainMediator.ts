import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_Main from "../../ui/Main/UI_Main";
import UI_ADDemoMediator from "./UI_ADDemoMediator";
import UI_CommonUIMediator from "./UI_CommonUIMediator";
import UI_FunctionTestMediator from "./UI_FunctionTestMediator";
import UI_OthersMediator from "./UI_OthersMediator";
import UI_PerfomanceMediator from "./UI_PerfomanceMediator";
import UI_RecordDemoMediator from "./UI_RecordDemoMediator";
import UI_UIDemoMediator from "./UI_UIDemoMediator";
import UI_CommonUI2Mediator from "./UI_CommonUI2Mediator";
import { UI_ChannelMediator } from "../../LTGame/UIExt/DefaultUI/UI_ChannelMediator";

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
        this.ui.m_btn_feature.onClick(this, this._OnClickFunctionTest);
        this.ui.m_btn_common2.onClick(this, this._OnClickCommon2);
    }

    private _OnClickCommon2() {
        this.Hide();
        UI_CommonUI2Mediator.instance.Show();
    }

    private _OnClickFunctionTest() {
        this.Hide();
        UI_FunctionTestMediator.instance.Show();
    }

    private _OnClickPerfomance() {
        UI_PerfomanceMediator.instance.Show();
    }

    private _OnClickOthers() {
        UI_OthersMediator.instance.Show();
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