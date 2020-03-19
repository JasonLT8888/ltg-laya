import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_Banner_V from "./UI/LTGame/UI_Banner_V";

export default class UI_BannerVMediator extends BaseUIMediator<UI_Banner_V> {

    private static _instance: UI_BannerVMediator;
    public static get instance(): UI_BannerVMediator {
        if (this._instance == null) {
            this._instance = new UI_BannerVMediator();
            this._instance._classDefine = UI_Banner_V;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        // your code
    }

}