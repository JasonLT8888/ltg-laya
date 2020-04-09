import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_Perfomance from "../../ui/Main/UI_PerfomanceDemo";
import LTRes from "../../LTGame/Res/LTRes";
import ResDefine from "../common/ResDefine";

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
        this.ui.m_btn_boneAnim.onClick(this, this._OnClickTest);
    }

    private _OnClickBack() {
        this.Hide();
    }

    private async _OnClickTest() {
        await LTRes.LoadAsync(ResDefine.FixPath(ResDefine.floor_path));
        let loadObj = LTRes.Get(ResDefine.FixPath(ResDefine.floor_path), true);
        console.log(loadObj);
    }

}