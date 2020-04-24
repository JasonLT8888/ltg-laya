import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_Perfomance from "../../ui/Main/UI_PerfomanceDemo";
import LTRes from "../../LTGame/Res/LTRes";
import ResDefine from "../common/ResDefine";
import UI_BoneAnimTestMediator from "./UI_BoneAnimTestMediator";
import { UI_MainMediator } from "./UI_MainMediator";

export default class UI_PerfomanceMediator extends BaseUIMediator<UI_Perfomance> {

    private static _instance: UI_PerfomanceMediator;
    public static get instance(): UI_PerfomanceMediator {
        if (this._instance == null) {
            this._instance = new UI_PerfomanceMediator();
            this._instance._classDefine = UI_Perfomance;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_back.onClick(this, this._OnClickBack);
        this.ui.m_btn_boneAnim.onClick(this, this._OnClickBoneTest);

        UI_MainMediator.instance.Hide();
    }

    private _OnClickBack() {
        this.Hide();
        UI_MainMediator.instance.Show();
    }

    private async _OnClickBoneTest() {
        this.Hide();
        UI_BoneAnimTestMediator.instance.Show();
    }

    private async _OnClickTest() {
        await LTRes.LoadAsync(ResDefine.FixPath("floor"));
        let loadObj = LTRes.Get(ResDefine.FixPath("floor"), true);
        console.log(loadObj);
    }

}