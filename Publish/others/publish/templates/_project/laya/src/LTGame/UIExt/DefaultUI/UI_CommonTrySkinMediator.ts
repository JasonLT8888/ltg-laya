import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_CommonTrySkin from "./UI/LTGame/UI_CommonTrySkin";
import TrySkinOpenData from "./Data/TrySkinOpenData";
import UI_view_item_try_skin from "./UI/LTGame/UI_view_item_try_skin";
import LTPlatform from "../../Platform/LTPlatform";
import LTUI from "../LTUI";

export default class UI_CommonTrySkinMediator extends BaseUIMediator<UI_CommonTrySkin> {

    private static _instance: UI_CommonTrySkinMediator;
    public static get instance(): UI_CommonTrySkinMediator {
        if (this._instance == null) {
            this._instance = new UI_CommonTrySkinMediator();
            this._instance._classDefine = UI_CommonTrySkin;
        }
        return this._instance;
    }

    private _openData: TrySkinOpenData;

    _OnShow() {
        super._OnShow();
        // your code
        this._openData = new TrySkinOpenData();
        if (this._openParam == null) {
            console.error("请传入TrySkinOpenData用于初始化皮肤试用界面");
        } else {
            for (let key in this._openParam) {
                this._openData[key] = this._openParam[key];
            }
        }
        if (this._openData.iconPaths == null || this._openData.iconPaths.length != 4) {
            console.error("请传入试用皮肤图标");
        }
        for (let i = 0; i < this.ui.m_list_item.numChildren; ++i) {
            let getUI = this.ui.m_list_item.getChildAt(i) as UI_view_item_try_skin;
            if (this._openData.iconPaths && this._openData.iconPaths[i]) {
                getUI.m_icon.url = this._openData.iconPaths[i];
            }
            getUI.onClick(this, this._OnClickTrySkin, [i]);
        }

        this.ui.m_btn_thanks.onClick(this, this._OnClickNoThanks);
    }

    private async _OnClickTrySkin(index: number) {
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {

            if (this._openData.onClose) {
                this._openData.onClose.runWith(index);
            }

            this.Hide();
        } else {
            LTUI.Toast("跳过视频无法获得奖励");
        }
    }

    private _OnClickNoThanks() {
        if (this._openData.onClose) {
            this._openData.onClose.runWith(-1);
        }

        this.Hide();
    }

}