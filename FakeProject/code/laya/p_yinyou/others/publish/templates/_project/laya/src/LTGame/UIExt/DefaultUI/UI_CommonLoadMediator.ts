import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_CommonLoad from "./UI/LTGame/UI_CommonLoad";

export default class UI_CommondLoadMediator extends BaseUIMediator<UI_CommonLoad> {

    private static _instance: UI_CommondLoadMediator;
    public static get instance(): UI_CommondLoadMediator {
        if (this._instance == null) {
            this._instance = new UI_CommondLoadMediator();
            this._instance._classDefine = UI_CommonLoad;
        }
        return this._instance;
    }

    _OnShow() {
        this._sortOrder = Number.MAX_SAFE_INTEGER;
        super._OnShow();
        // your code

        let openStr = this._openParam[0] as string;
        let isBig = this._openParam[1] as boolean;
        this.ui.m_load.m_text_load.text = openStr;
        if (isBig) {
            this.ui.m_small_bg.visible = false;
            this.ui.m_big_bg.visible = true;
        } else {
            this.ui.m_small_bg.visible = true;
            this.ui.m_big_bg.visible = false;
        }
    }

}