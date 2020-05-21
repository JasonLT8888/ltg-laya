import { ECheckState } from "../../../SDK/common/ECheckState";
import LTSDK from "../../../SDK/LTSDK";
import { EPlatformType } from "../../Platform/EPlatformType";
import LTPlatform from "../../Platform/LTPlatform";
import BaseUIMediator from "../FGui/BaseUIMediator";
import EndRewardOpenData from "./Data/EndRewardOpenData";
import UI_CommonMainHotGame from "./UI/LTGame/UI_CommonMainHotGame";
import UI_view_item_game from "./UI/LTGame/UI_view_item_game";
import UI_view_game_icon from "./UI/LTGame/UI_view_game_icon";
import View_HotGame from "./Cmp/View_HotGame";

export default class UI_CommonMainHotGameMediator extends BaseUIMediator<UI_CommonMainHotGame> {

    private static _instance: UI_CommonMainHotGameMediator;
    public static get instance(): UI_CommonMainHotGameMediator {
        if (this._instance == null) {
            this._instance = new UI_CommonMainHotGameMediator();
            this._instance._classDefine = UI_CommonMainHotGame;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        // your code

        switch (LTSDK.instance.checkState) {
            case ECheckState.InCheck:
                this.ui.m_hot_game.visible = false;
                break;
            case ECheckState.Normal:
                this.ui.m_hot_game.visible = true;
                break;
            case ECheckState.NoGame:
                this.ui.m_hot_game.visible = true;
                break;
        }
        if (this.ui.m_hot_game.visible) {
            View_HotGame.CreateView(this.ui.m_hot_game);
        }



    }

}