import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_OppoEnd from "./UI/LTGame/UI_OppoEnd";
import LTSDK from "../../../SDK/LTSDK";
import { ECheckState } from "../../../SDK/common/ECheckState";
import GlobalUnit from "../../../script/common/GlobalUnit";
import LTPlatform from "../../Platform/LTPlatform";
import { EPlatformType } from "../../Platform/EPlatformType";
import GameData from "../../../script/common/GameData";
import LTUI from "../LTUI";



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
        this.ui.m_btn_gift.onClick(this, () => {
        });
        this.ui.m_btn_ad.onClick(this, () => {
            if (this.ui.m___nativeinpage) {
                this.ui.m___nativeinpage['ClickAd']();
            }
        });
        if ((LTPlatform.instance.platform == EPlatformType.Vivo || LTPlatform.instance.platform == EPlatformType.Oppo)) {// && GameData.instance.levelId % 2 == 0) {
            console.error('每两关触发');
            (LTPlatform.instance as any).createShortcut();
        }
        this.ui.m_label_getCoin.text = "+" + 'LevelConfig.data[GameData.instance.levelId].GetCoin';
        this.ui.m_coin.url = '';
        console.error('处理金币图标和奖励数据');
    }
    clickNo() {
        // GameData.instance.coinCount += LevelConfig.data[GameData.instance.levelId].GetCoin;
        console.error('处理不领奖励');
        this.changePage();
    }
    //点击下一关
    nextLevel() {

        console.error('处理下一关');


    }

    //双倍领取
    async doubleReward() {
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            console.error('处理奖励*2');

            this.changePage();
        } else {
            LTUI.Toast("跳过视频，未获得奖励");
        }
        GameData.SaveToDisk();
        // LTPlatform.instance.ShowRewardVideoAd(Laya.Handler.create(this, () => {
        //     //TODO获得双倍奖励
        //     GameData.instance.coinCount += LevelConfig.data[GameData.instance.levelId].GetCoin;
        //     GameData.SaveToDisk();
        //     this._OnClickNextLevel();
        // }), Laya.Handler.create(this, () => {
        //     LTUI.Toast("跳过视频，未获得奖励");
        //     GameData.SaveToDisk();
        // }));
    }
    changePage() {
        if (LTSDK.instance.checkState == ECheckState.InCheck) {
            this.nextLevel();
        } else {
            this.ui.m_state.selectedIndex = 1;
            if (this.ui.m___endSG) {
                this.ui.m___endSG.visible = true;
            }
            if (this.ui.m___nativeinpage) {
                this.ui.m___nativeinpage.visible = false;
            }
            this.ui.m_btn_ad.visible = false;
        }
    }
    protected _OnHide() { }
}
