import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTG_UI_EggWall from "../UI/LTCom/LTG_UI_EggWall";
import { LTG_Com_EggWallData, EEggState } from "../Data/LTG_Com_EggWallData";
import { EggConfig } from "../../script/config/EggConfig";
import LTG_UI_view_item_egg from "../UI/LTCom/LTG_UI_view_item_egg";
import { CmpSceneDisplay } from "../../LTGame/UIExt/Cmp/CmpSceneDisplay";
import LTUI from "../../LTGame/UIExt/LTUI";
import { EEggUnlockType } from "../Common/EEggUnlockType";
import LTG_UI_EggUnlockMediator from "./LTG_UI_EggUnlockMediator";
import { CmpSimpleLoader } from "../../LTGame/UIExt/Cmp/CmpSimpleLoader";
import { LTUtils } from "../../LTGame/LTUtils/LTUtils";
import LTPlatform from "../../LTGame/Platform/LTPlatform";

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

    private _selectIndex: number;

    private _avilableConfigs: EggConfig.config[];

    private _displayScene: CmpSceneDisplay;
    private _displayPlayer: CmpSimpleLoader;

    _OnShow() {
        super._OnShow();
        // your code

        this._avilableConfigs = EggConfig.dataList.filter((config: EggConfig.config) => {
            return config.avliable;
        });

        this._cacheData = this._openParam as LTG_Com_EggWallData;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_EggWallData进行界面打开操作");
        }

        this._selectIndex = -1;

        this._displayScene = new CmpSceneDisplay(this.ui.m_img_display);

        this.ui.m_list_view.setVirtual();
        this.ui.m_list_view.itemRenderer = Laya.Handler.create(this, this._OnItemRender, null, false);
        this.ui.m_list_view.numItems = this._avilableConfigs.length;

        this.ui.m_view_entercode.m_text_code.valign = "middle";
        this.ui.m_view_entercode.m_text_code.nativeInput.promptColor = "#000000";

        this.ui.m_btn_back.onClick(this, this._OnClickBack);
        this.ui.m_view_entercode.m_btn_duihuan.onClick(this, this._OnClickEnterCode);

        this._CreateScene();
    }

    private async _CreateScene() {
        LTUI.ShowLoading('资源加载中');

        await this._displayScene.LoadScene('ZS_Egg');
        this._displayScene.camera.clearColor = new Laya.Vector4(0, 0, 0, 0);
        this._displayPlayer = new CmpSimpleLoader(LTUtils.FindChild(this._displayScene.s3d, 'ZS_01/xuanzhuan/jiaose') as Laya.Sprite3D);

        LTUI.HideLoading();
    }

    _OnHide() {
        this._displayScene.Dispose();
        if (this._cacheData.onUnlocked != null) {
            this._cacheData.onUnlocked.recover();
        }
    }

    private _OnItemRender(index: number, itemUI: LTG_UI_view_item_egg) {
        let data = this._avilableConfigs[index];
        itemUI.m_loader_icon.url = data.icon_path;

        let lockState = LTG_Com_EggWallData.GetEggState(data);
        switch (lockState) {
            case EEggState.Unlocked:
                itemUI.m_state_lock.selectedIndex = 0;
                break;
            case EEggState.Locked:
                switch (data.unlock_type) {
                    case EEggUnlockType.Code:
                        itemUI.m_state_lock.selectedIndex = 2;
                        itemUI.m_text_lockstr.text = '彩蛋';
                        break;
                    case EEggUnlockType.Share:
                        itemUI.m_state_lock.selectedIndex = 2;
                        itemUI.m_text_lockstr.text = '分享';
                        break;
                    case EEggUnlockType.WatchAd:
                        itemUI.m_state_lock.selectedIndex = 1;
                        itemUI.m_text_progress.text = LTG_Com_EggWallData.GetUnlockProgress(data.id);
                        break;
                    default:
                        console.error("暂未实现的彩蛋解锁类型" + data.unlock_type);
                        break;
                }
                break;
            case EEggState.Unlocking:
                itemUI.m_state_lock.selectedIndex = 1;
                itemUI.m_text_progress.text = LTG_Com_EggWallData.GetUnlockProgress(data.id);
                break;
        }
        itemUI.m_img_selected.visible = index == this._selectIndex;
        itemUI.onClick(this, this._OnClickItem, [index]);
    }

    private async _OnClickItem(index: number) {
        let data = this._avilableConfigs[index];
        let lockState = LTG_Com_EggWallData.GetEggState(data);

        this._selectIndex = index;

        switch (lockState) {
            case EEggState.Locked:
                switch (data.unlock_type) {
                    case EEggUnlockType.WatchAd:
                        await this._WatchAd(data);
                        break;
                }
                break;
            case EEggState.Unlocking:
                await this._WatchAd(data);
                break;
            case EEggState.Unlocked:
                break;
        }

        LTUI.ShowLoading('资源加载中', false);
        await this._displayPlayer.LoadObj(data.model_path);
        LTUI.HideLoading();

        this.ui.m_list_view.refreshVirtualList();
    }

    private async _WatchAd(config: EggConfig.config) {
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            let isUnlocked = LTG_Com_EggWallData.RecordWatchAD(config.id);
            if (isUnlocked) {
                this._UnlockItem(config);
            }
        } else {
            LTUI.Toast('跳过广告无法获得奖励');
        }
    }

    public RefreshUI() {
        if (!this.isShow) return;
        this.ui.m_list_view.refreshVirtualList();
    }

    private _OnClickEnterCode() {
        let code = this.ui.m_view_entercode.m_text_code.text;
        let searchConfig = this._SearchEnterCode(code);
        if (searchConfig == null) {
            return;
        }
        if (searchConfig.unlock_type != EEggUnlockType.Code) {
            return;
        }
        let eggState = LTG_Com_EggWallData.GetEggState(searchConfig);
        if (eggState != EEggState.Locked) {
            return;
        }
        LTG_UI_EggUnlockMediator.instance.Show([searchConfig, Laya.Handler.create(this, this._UnlockItem, [searchConfig])]);
    }

    private _UnlockItem(config: EggConfig.config) {
        this._cacheData.onUnlocked.runWith([config.reward_type, config.reward_value]);
    }

    private _SearchEnterCode(code: string): EggConfig.config {
        for (let eggConfig of this._avilableConfigs) {
            if (eggConfig.code == code) {
                return eggConfig;
            }
        }
        return null;
    }

    private _OnClickBack() {
        this.Hide();
    }

}