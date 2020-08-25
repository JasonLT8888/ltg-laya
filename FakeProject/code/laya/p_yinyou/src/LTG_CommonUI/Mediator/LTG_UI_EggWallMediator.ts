import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTG_UI_EggWall from "../UI/LTCom/LTG_UI_EggWall";
import LTG_UI_item_view_eggwall from "../UI/LTCom/LTG_UI_item_view_eggwall";
import { LTG_Com_EggWallData, EEggState } from "../Data/LTG_Com_EggWallData";

export default class LTG_UI_EggWallMediator extends BaseUIMediator<LTG_UI_EggWall> {

    private static _instance: LTG_UI_EggWallMediator;
    public static get instance(): LTG_UI_EggWallMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_EggWallMediator();
            this._instance._classDefine = LTG_UI_EggWall;
        }
        return this._instance;
    }

    private _cacheData: LTG_Com_EggWallData;

    _OnShow() {
        super._OnShow();
        // your code

        this._cacheData = this._openParam as LTG_Com_EggWallData;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_EggWallData进行界面打开操作");
        }

        this.ui.m_list_view.setVirtual();
        this.ui.m_list_view.itemRenderer = Laya.Handler.create(this, this._OnItemRender, null, false);
        this.ui.m_list_view.numItems = this._cacheData.eggWallDatas.length;

        this.ui.m_btn_back.onClick(this, this._OnClickBack);
    }

    private _OnItemRender(index: number, itemUI: LTG_UI_item_view_eggwall) {
        let data = this._cacheData.eggWallDatas[index];
        let lockState = LTG_Com_EggWallData.GetEggState(data.eggId);
        switch (lockState) {
            case EEggState.Unlocked:
                itemUI.m_btn_get_tip.visible = false;
                itemUI.m_btn_show_tip.visible = false;
                break;
            case EEggState.Locked:
                break;
            case EEggState.CanHint:
                break;
        }
    }

    private _OnClickBack() {
        this.Hide();
    }

}