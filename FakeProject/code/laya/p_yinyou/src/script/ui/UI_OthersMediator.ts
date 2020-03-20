import ShareManager from "../../LTGame/Platform/ShareManager";
import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_Others from "../../ui/Main/UI_Others";

export default class UI_OthersMediator extends BaseUIMediator<UI_Others> {

    private static _instance: UI_OthersMediator;
    public static get instance(): UI_OthersMediator {
        if (this._instance == null) {
            this._instance = new UI_OthersMediator();
            this._instance._classDefine = UI_Others;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_back.onClick(this, this._OnClickBack);

        this.ui.m_btn_othergame.onClick(this, this._OnClickMoreGames);
        this.ui.m_btn_share.onClick(this, this._OnClickShare);
    }

    private _OnClickBack() {
        this.Hide();
    }

    private _OnClickShare() {
        ShareManager.instance.ShareAppMessage(ShareManager.instance.GetShareInfo());
    }

    private _OnClickMoreGames() {

    }

}