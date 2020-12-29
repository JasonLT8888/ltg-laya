import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_OppoEnd from "./UI/LTGame/UI_OppoEnd";
import LTSDK from "../../../SDK/LTSDK";
import { ECheckState } from "../../../SDK/common/ECheckState";
import GlobalUnit from "../../../script/common/GlobalUnit";
import LTPlatform from "../../Platform/LTPlatform";
import { EPlatformType } from "../../Platform/EPlatformType";
import GameData from "../../../script/common/GameData";
import LTUI from "../LTUI";
import { UI_GameCenterMediator } from "./UI_GameCenterMediator";
import { LTG_Com_RollData } from "../../../LTG_CommonUI/Data/LTG_Com_RollData";
import { RollConfig } from "../../../script/config/RollConfig";



export class UI_OppoEndMediator extends BaseUIMediator<UI_OppoEnd> {
    private static _instance: UI_OppoEndMediator;
    public get ui(): UI_OppoEnd {
        return this._ui;
    }

    public static get instance(): UI_OppoEndMediator {
        if (this._instance == null) {
            this._instance = new UI_OppoEndMediator();
            this._instance._classDefine = UI_OppoEnd;
        }
        return this._instance;
    }
    levelId: number = 1;
    rewardCount: number = 0;
    _OnShow() {
        super._OnShow();
        if (LTSDK.instance.checkState == ECheckState.InCheck) {
            this.ui.m_btn_ad.visible = false;
            if (this.ui.m___endSG) {
                this.ui.m___endSG.visible = false;
            }
            if (this.ui.m___nativeinpage) {
                this.ui.m___nativeinpage.visible = false;
            }
        } else {
            if (this.ui.m___endSG) {
                this.ui.m___endSG.visible = false;
            }
            if (this.ui.m___nativeinpage) {
                this.ui.m___nativeinpage.visible = true;
            }
        }
        this.ui.m_btn_double.onClick(this, this.doubleReward)
        this.ui.m_btn_no.onClick(this, this.clickNo)
        this.ui.m_btn_no.m_bg.visible = LTSDK.instance.checkState == ECheckState.InCheck;
        this.ui.m_btn_next.onClick(this, this.nextLevel);
        this.ui.m_btn_gift.onClick(this, this.showRoll);
        this.ui.m_btn_ad.onClick(this, () => {
            if (this.ui.m___nativeinpage) {
                this.ui.m___nativeinpage['ClickAd']();
            }
        });
        console.error('这里需要改关卡id');
        this.levelId = GameData.instance.levelId;
        if ((LTPlatform.instance.platform == EPlatformType.Vivo || LTPlatform.instance.platform == EPlatformType.Oppo) && this.levelId % 3 == 0) {
            console.error('每两关触发');
            (LTPlatform.instance as any).createShortcut();
        }
        console.error('todo 这里设置==================  金币图标和奖励数据');
        this.rewardCount = 100;
        this.ui.m_label_getCoin.text = "+" + this.rewardCount;
        this.ui.m_coin.url = "";
        LTPlatform.instance.ShowBannerAd();
    }
    clickNo() {
        GameData.instance.coinCount += this.rewardCount;
        GameData.SaveToDisk();
        LTUI.Toast(`获得金币+${this.rewardCount}`);
        console.error('处理不领奖励');
        this.changePage();
    }
    //点击下一关
    nextLevel() {

        console.error('todo =========== 处理下一关');

        this.Hide();
    }

    //双倍领取
    async doubleReward() {
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            console.error('处理奖励*2');
            GameData.instance.coinCount += (this.rewardCount * 2);
            GameData.SaveToDisk();
            LTUI.Toast(`获得金币+${this.rewardCount}`);
            this.changePage();
        } else {
            LTUI.Toast("跳过视频，未获得奖励");
        }
        GameData.SaveToDisk();
    }
    changePage() {
        if (LTSDK.instance.checkState == ECheckState.InCheck || !LTSDK.instance.isNavEnable) {
            this.nextLevel();
        } else {
            this.ui.m_state.selectedIndex = 1;
            if (this.ui.m___endSG) {
                this.ui.m___endSG.visible = true;
            }
            if (this.ui.m___nativeinpage) {
                this.ui.m___nativeinpage.visible = false;
            }
            if (LTSDK.instance.navLevels.indexOf(this.levelId) > -1) {
                UI_GameCenterMediator.instance.Show(() => {
                    this.nextLevel();
                });
            }
            this.ui.m_btn_ad.visible = false;
        }
    }
    showRoll() {
        let data = new LTG_Com_RollData();
        data.onRolled = Laya.Handler.create(this, (config: RollConfig.config) => {
            GameData.instance.coinCount += config.reward_value;
            GameData.SaveToDisk();
            LTUI.Toast('获得金币' + config.reward_value);
        });
        data.onRolled = Laya.Handler.create(this, (config: RollConfig.config) => {
            GameData.instance.coinCount += config.reward_value;
            GameData.SaveToDisk();
            LTUI.Toast('获得金币' + config.reward_value);
        });
        data.Send();
    }
    protected _OnHide() {
        LTPlatform.instance.HideBannerAd();
    }
}
