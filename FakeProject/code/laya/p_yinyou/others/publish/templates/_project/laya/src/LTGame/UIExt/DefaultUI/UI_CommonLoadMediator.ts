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
        super._OnShow();
        // your code
        this._sortOrder = Number.MAX_SAFE_INTEGER;

        let openStr = this._openParam as string;
        this.ui.m_load.m_text_load.text = openStr;
    }

}