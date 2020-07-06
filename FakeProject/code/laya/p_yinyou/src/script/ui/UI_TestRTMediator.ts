import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_TestRT from "../../ui/Main/UI_TestRT";

export default class UI_TestRTMediator extends BaseUIMediator<UI_TestRT> {

    private static _instance: UI_TestRTMediator;
    public static get instance(): UI_TestRTMediator {
        if (this._instance == null) {
            this._instance = new UI_TestRTMediator();
            this._instance._classDefine = UI_TestRT;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        // your code
    }

}