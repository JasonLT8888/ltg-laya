import { EndLoseOpenData } from "../../LTGame/UIExt/DefaultUI/Data/EndLoseOpenData";
import EndRewardOpenData from "../../LTGame/UIExt/DefaultUI/Data/EndRewardOpenData";
import EndShareOpenData from "../../LTGame/UIExt/DefaultUI/Data/EndShareOpenData";
import OfflineOpenData from "../../LTGame/UIExt/DefaultUI/Data/OfflineOpenData";
import OneMoreOpenData from "../../LTGame/UIExt/DefaultUI/Data/OneMoreOpenData";
import RollOpenData from "../../LTGame/UIExt/DefaultUI/Data/RollOpenData";
import SetOpenData from "../../LTGame/UIExt/DefaultUI/Data/SetOpenData";
import SignOpenData from "../../LTGame/UIExt/DefaultUI/Data/SignOpenData";
import TrySkinOpenData from "../../LTGame/UIExt/DefaultUI/Data/TrySkinOpenData";
import { UnlockProgressOpenData } from "../../LTGame/UIExt/DefaultUI/Data/UnlockProgressOpenData";
import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTUI from "../../LTGame/UIExt/LTUI";
import UI_CommonUI from "../../ui/Main/UI_CommonUI";
import UI_MoudleDemoMediator from "./UI_MoudleDemoMediator";

export default class UI_CommonUIMediator extends BaseUIMediator<UI_CommonUI> {

    private static _instance: UI_CommonUIMediator;
    public static get instance(): UI_CommonUIMediator {
        if (this._instance == null) {
            this._instance = new UI_CommonUIMediator();
            this._instance._classDefine = UI_CommonUI;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_back.onClick(this, this._OnClickBack);
        this.ui.m_btn_moudle.onClick(this, this._OnClickModule);
    }

    private _OnClickModule() {
        // LTUI.Toast('完善中');
        // return;
        UI_MoudleDemoMediator.instance.Show();
    }

    private _OnClickBack() {
        this.Hide();
    }

}