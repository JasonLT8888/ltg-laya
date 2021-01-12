import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_FakeBanner_V from "./UI/LTGame/UI_FakeBanner_V";

export default class UI_FakeBannerVMediator extends BaseUIMediator<UI_FakeBanner_V> {

    private static _instance: UI_FakeBannerVMediator;
    public static get instance(): UI_FakeBannerVMediator {
        if (this._instance == null) {
            this._instance = new UI_FakeBannerVMediator();
            this._instance._classDefine = UI_FakeBanner_V;
        }
        return this._instance;
    }

    _sortOrder = Number.MAX_SAFE_INTEGER;

    _OnShow() {
        super._OnShow();
        // your code

    }

}