import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTG_UI_EggWall from "../UI/LTCom/LTG_UI_EggWall";
import LTG_UI_item_view_eggwall from "../UI/LTCom/LTG_UI_item_view_eggwall";
import { LTG_Com_EggWallData, EEggState } from "../Data/LTG_Com_EggWallData";
import StringEx from "../../LTGame/LTUtils/StringEx";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import LTUI from "../../LTGame/UIExt/LTUI";
import { LTG_Com_EggNoticeData } from "../Data/LTG_Com_EggNoticeData";

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

    private _showIndex: number;

    _OnShow() {
        super._OnShow();
        // your code

        this._cacheData = this._openParam as LTG_Com_EggWallData;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_EggWallData进行界面打开操作");
        }

        this._showIndex = -1;
        let data = this._cacheData.eggWallDatas[0];
        if (data.canShow) {
            let lockState = LTG_Com_EggWallData.GetEggState(data.eggId);
            if (lockState == EEggState.Unlocked) {
                this._showIndex = 0;
                if (!StringEx.IsNullOrEmpty(data.displayIcon)) {
                    this.ui.m_loader_display.url = data.displayIcon;
                }
            }
        }
        if (this._showIndex == -1) {
            this.ui.m_loader_display.visible = false;
            this.ui.m_img_grow.visible = false;
        }

        this.ui.m_list_view.setVirtual();
        this.ui.m_list_view.itemRenderer = Laya.Handler.create(this, this._OnItemRender, null, false);
        this.ui.m_list_view.numItems = this._cacheData.eggWallDatas.length;

        this.ui.m_btn_back.onClick(this, this._OnClickBack);
    }

    private _OnItemRender(index: number, itemUI: LTG_UI_item_view_eggwall) {
        let data = this._cacheData.eggWallDatas[index];
        if (!StringEx.IsNullOrEmpty(data.iconPath)) {
            itemUI.m_loader_icon.url = data.iconPath;
        }
        if (!StringEx.IsNullOrEmpty(data.maskPath)) {
            itemUI.m_loader_mask.url = data.maskPath;
        }
        if (data.canShow) {
            let lockState = LTG_Com_EggWallData.GetEggState(data.eggId);
            switch (lockState) {
                case EEggState.Unlocked:
                    itemUI.m_btn_get_tip.visible = false;
                    itemUI.m_btn_show_tip.visible = false;
                    itemUI.m_text_unlocked.visible = true;
                    break;
                case EEggState.Locked:
                    itemUI.m_btn_get_tip.visible = true;
                    itemUI.m_btn_show_tip.visible = false;
                    itemUI.m_text_unlocked.visible = false;
                    break;
                case EEggState.CanHint:
                    itemUI.m_btn_get_tip.visible = false;
                    itemUI.m_btn_show_tip.visible = true;
                    itemUI.m_text_unlocked.visible = false;
                    break;
            }
            itemUI.m_img_comming.visible = false;
            itemUI.m_loader_mask.visible = false;
            itemUI.m_loader_icon.visible = true;
        } else {
            itemUI.m_btn_get_tip.visible = false;
            itemUI.m_btn_show_tip.visible = false;
            itemUI.m_text_unlocked.visible = false;
            itemUI.m_img_comming.visible = true;
            itemUI.m_loader_mask.visible = true;
            itemUI.m_loader_icon.visible = false;
        }
        itemUI.m_btn_get_tip.onClick(this, this._OnClickUnlockHint, [index]);
        itemUI.m_btn_show_tip.onClick(this, this._OnClickShowHint, [index]);
        itemUI.m_loader_icon.onClick(this, this._OnClickItem, [index]);
    }

    private _OnClickItem(index: number) {
        let data = this._cacheData.eggWallDatas[index];
        if (!data.canShow) {
            LTUI.Toast("彩蛋尚未解锁");
            return;
        }
        let lockState = LTG_Com_EggWallData.GetEggState(data.eggId);
        if (lockState != EEggState.Unlocked) {
            LTUI.Toast("彩蛋尚未解锁");
            return;
        }
        if (!StringEx.IsNullOrEmpty(data.displayIcon)) {
            this.ui.m_loader_display.url = data.displayIcon;
        }
        this.ui.m_loader_display.visible = true;
        this.ui.m_img_grow.visible = true;
    }

    private _OnClickShowHint(index: number) {
        let data = this._cacheData.eggWallDatas[index];
        if (!data.canShow) return;
        let lockState = LTG_Com_EggWallData.GetEggState(data.eggId);
        if (lockState != EEggState.CanHint) return;
        let uiData = new LTG_Com_EggNoticeData();
        uiData.eggData = data;
        uiData.onEggLocked = this._cacheData.onUnlockEgg;
        uiData.Send();
    }

    private async _OnClickUnlockHint(index: number) {
        let data = this._cacheData.eggWallDatas[index];
        if (!data.canShow) return;
        let lockState = LTG_Com_EggWallData.GetEggState(data.eggId);
        if (lockState != EEggState.Locked) return;
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            LTG_Com_EggWallData.UpdateEggState(data.eggId, EEggState.CanHint);
            this.ui.m_list_view.refreshVirtualList();
        } else {
            LTUI.Toast("跳过广告无法获得奖励");
        }
    }

    private _OnClickBack() {
        this.Hide();
    }

}