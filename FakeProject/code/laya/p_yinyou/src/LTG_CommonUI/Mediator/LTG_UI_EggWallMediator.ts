import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTG_UI_EggWall from "../UI/LTCom/LTG_UI_EggWall";
import LTG_UI_item_view_eggwall from "../UI/LTCom/LTG_UI_item_view_eggwall";
import { LTG_Com_EggWallData, EEggState } from "../Data/LTG_Com_EggWallData";
import StringEx from "../../LTGame/LTUtils/StringEx";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import LTUI from "../../LTGame/UIExt/LTUI";
import { EggConfig } from "../../script/config/EggConfig";
import { LTG_Com_UnlockItemData } from "../Data/LTG_Com_UnlockItemData";
import { RewardCodeConfig } from "../../script/config/RewardCodeConfig";

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
        let data = EggConfig.dataList[0];
        if (data.avliable) {
            this._showIndex = 0;
            if (!StringEx.IsNullOrEmpty(data.display_path)) {
                this.ui.m_loader_display.url = data.display_path;
            }
        }
        if (this._showIndex == -1) {
            this.ui.m_loader_display.visible = false;
            this.ui.m_img_grow.visible = false;
        }

        this.ui.m_list_view.setVirtual();
        this.ui.m_list_view.itemRenderer = Laya.Handler.create(this, this._OnItemRender, null, false);
        this.ui.m_list_view.numItems = EggConfig.dataList.length;

        this.ui.m_view_entercode.m_text_code.valign = "middle";
        this.ui.m_view_entercode.m_text_code.nativeInput.promptColor = "#000000";

        this.ui.m_btn_back.onClick(this, this._OnClickBack);
        this.ui.m_view_entercode.m_btn_duihuan.onClick(this, this._OnClickEnterCode);
    }

    private _OnItemRender(index: number, itemUI: LTG_UI_item_view_eggwall) {
        let data = EggConfig.dataList[index];
        if (!StringEx.IsNullOrEmpty(data.icon_path)) {
            itemUI.m_loader_icon.url = data.icon_path;
        }
        if (!StringEx.IsNullOrEmpty(data.lockicon_path)) {
            itemUI.m_loader_mask.url = data.lockicon_path;
        }
        if (data.avliable) {
            let lockState = LTG_Com_EggWallData.GetEggState(data);
            switch (lockState) {
                case EEggState.Unlocked:
                    itemUI.m_btn_get_tip.visible = false;
                    itemUI.m_btn_watchad.visible = false;
                    itemUI.m_text_unlocked.visible = true;
                    itemUI.m_text_code.visible = false;
                    break;
                case EEggState.Locked:
                    itemUI.m_btn_get_tip.visible = true;
                    itemUI.m_btn_watchad.visible = false;
                    itemUI.m_text_unlocked.visible = false;
                    itemUI.m_text_code.visible = false;
                    break;
                case EEggState.Unlocking:
                    itemUI.m_text_code.visible = false;
                    itemUI.m_btn_get_tip.visible = false;

                    itemUI.m_btn_watchad.visible = true;
                    itemUI.m_btn_watchad.m_text_progress.text = LTG_Com_EggWallData.GetCodeUnlockProgress(data.reward_code);

                    itemUI.m_text_unlocked.visible = false;
                    break;
                case EEggState.ShowHint:
                    itemUI.m_btn_get_tip.visible = false;
                    itemUI.m_btn_watchad.visible = false;
                    itemUI.m_text_unlocked.visible = false;
                    itemUI.m_text_code.visible = true;
                    itemUI.m_text_code.text = data.secret;
                    break;
            }
            itemUI.m_img_comming.visible = false;
            itemUI.m_loader_mask.visible = false;
            itemUI.m_loader_icon.visible = true;
            itemUI.m_text_name.visible = true;
            itemUI.m_text_name.text = data.name;
        } else {
            itemUI.m_btn_get_tip.visible = false;
            itemUI.m_btn_watchad.visible = false;
            itemUI.m_text_unlocked.visible = false;
            itemUI.m_img_comming.visible = true;
            itemUI.m_loader_mask.visible = true;
            itemUI.m_loader_icon.visible = false;
            itemUI.m_text_name.visible = false;
            itemUI.m_text_code.visible = false;
        }
        itemUI.m_btn_get_tip.onClick(this, this._OnClickUnlockHint, [index]);
        itemUI.m_btn_watchad.onClick(this, this._OnClickWatchAd, [index]);
        itemUI.m_loader_icon.onClick(this, this._OnClickItem, [index]);
    }

    private _OnClickItem(index: number) {
        let data = EggConfig.dataList[index];
        if (!data.avliable) {
            LTUI.Toast("彩蛋尚未解锁");
            return;
        }
        if (!StringEx.IsNullOrEmpty(data.display_path)) {
            this.ui.m_loader_display.url = data.display_path;
        }
        this.ui.m_loader_display.visible = true;
        this.ui.m_img_grow.visible = true;
    }

    private _OnClickWatchAd(index: number) {
        let data = EggConfig.dataList[index];
        if (!data.avliable) return;
        let lockState = LTG_Com_EggWallData.GetEggState(data);
        if (lockState != EEggState.Unlocking) return;
        this._OpenUnlockPanel(data);
    }

    private async _OnClickUnlockHint(index: number) {
        let data = EggConfig.dataList[index];
        if (!data.avliable) return;
        let lockState = LTG_Com_EggWallData.GetEggState(data);
        if (lockState != EEggState.Locked) return;
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            LTG_Com_EggWallData.ShowEggHint(data.reward_code);
            this.ui.m_list_view.refreshVirtualList();
        } else {
            LTUI.Toast("跳过广告无法获得奖励");
        }
    }

    private _OpenUnlockPanel(data: EggConfig.config) {
        let uiData = new LTG_Com_UnlockItemData();
        uiData.onClose = Laya.Handler.create(null, () => {
            this.ui.m_list_view.refreshVirtualList();
        });
        uiData.onUnlocked = this._cacheData.onUnlocked;
        uiData.rewardConfig = RewardCodeConfig.data[data.reward_code];
        uiData.Send();
    }

    private _OnClickEnterCode() {
        LTG_Com_UnlockItemData.HandleCodeEnter(this.ui.m_view_entercode.m_text_code.text, this._cacheData.onUnlocked);
    }

    private _OnClickBack() {
        this.Hide();
    }

}