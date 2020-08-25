import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_CommonLockScreen from "./UI/LTGame/UI_CommonLockScreen";

export default class UI_CommonLockScreenMediator extends BaseUIMediator<UI_CommonLockScreen> {

    private static _instance: UI_CommonLockScreenMediator;
    public static get instance(): UI_CommonLockScreenMediator {
        if (this._instance == null) {
            this._instance = new UI_CommonLockScreenMediator();
            this._instance._classDefine = UI_CommonLockScreen;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        // your code
        this._sortOrder = Number.MAX_SAFE_INTEGER;
    }

}