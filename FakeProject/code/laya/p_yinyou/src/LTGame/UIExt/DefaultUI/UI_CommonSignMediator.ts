import GameData from "../../../script/common/GameData";
import { SignConfig } from "../../../script/config/SignConfig";
import { ECheckState } from "../../../SDK/common/ECheckState";
import LTSDK from "../../../SDK/LTSDK";
import CommonSaveData from "../../Commom/CommonSaveData";
import LTPlatform from "../../Platform/LTPlatform";
import BaseUIMediator from "../FGui/BaseUIMediator";
import LTUI from "../LTUI";
import { CommonRewardData } from "./Data/CommonRewardData";
import UI_CommonSign2 from "./UI/LTGame/UI_CommonSign2";
import UI_SignItem from "./UI/LTGame/UI_SignItem";


/** 签到 */
export class UI_CommonSignMediator extends BaseUIMediator<UI_CommonSign2> {
    private static _instance: UI_CommonSignMediator;
    _openData: CommonRewardData;
    public get ui(): UI_CommonSign2 {
        return this._ui;
    }

    public static get instance(): UI_CommonSignMediator {
        if (this._instance == null) {
            this._instance = new UI_CommonSignMediator();
            this._instance._classDefine = UI_CommonSign2;
        }
        return this._instance;
    }
    todayData: SignConfig.config;
    _OnShow() {
        super._OnShow();
        this._openData = new CommonRewardData();
        if (this._openParam == null) {
            console.error("请传入 CommonRewardData  onGetSkin  onGetMoney 用于初始化签到界面");
        } else {
            for (let key in this._openParam) {
                this._openData[key] = this._openParam[key];
            }
        }

        if (!CommonSaveData.instance.isSigned && CommonSaveData.instance.signDayCount == 7) {
            CommonSaveData.instance.signDayCount = 0;
            CommonSaveData.SaveToDisk();
        }

        this.ui.m_isSigned.selectedIndex = CommonSaveData.instance.isSigned ? 1 : 0;
        this.ui.m_btn_close.onClick(this, this.Hide);
        this.ui.m_btn_nornalRwd.onClick(this, this.onNormalGet);
        this.ui.m_btn_videoRwd.onClick(this, this.onVideoGet);
        this.ui.m_dayList.setVirtual();
        this.ui.m_dayList.itemRenderer = Laya.Handler.create(this, this.renderItem, null, false);
        this.ui.m_dayList.on(fairygui.Events.CLICK_ITEM, this, this.onItemClick);
        this.ui.m_dayList.numItems = 7;
        LTPlatform.instance.HideBannerAd();

    }
    onItemClick(item: UI_SignItem) {

    }
    renderItem(index: number, item: UI_SignItem) {
        if (index == 6) {
            item.m_type.selectedIndex = 2;
        } else if (index % 2 == 0) {
            item.m_type.selectedIndex = 1;
        } else {
            item.m_type.selectedIndex = 0;
        }
        let data = SignConfig.dataList[index];
        item.m_day.text = `第${data.id}天`;
        item.m_icon.url = data.icon;
        let showDesc = LTSDK.instance.checkState != ECheckState.InCheck || data.type == 1;
        item.m_title.text = showDesc ? data.title : `+${data.value}`;
        if (CommonSaveData.instance.isSigned) {
            if (index < CommonSaveData.instance.signDayCount) {
                item.m_state.selectedIndex = 2;
            } else {
                item.m_state.selectedIndex = 0;
            }
        } else {
            if (index == CommonSaveData.instance.signDayCount) {

                item.m_state.selectedIndex = 1;
                this.todayData = data;
                this.ui.m_btn_nornalRwd.title = data.type == 1 ? '只拿皮肤' : '只拿金币';
            } else if (index < CommonSaveData.instance.signDayCount) {
                item.m_state.selectedIndex = 2;
            } else {
                item.m_state.selectedIndex = 0;
            }
        }
    }
    async onVideoGet() {
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            CommonSaveData.instance.signDayCount++;
            CommonSaveData.instance.isSigned = true;
            this.ui.m_isSigned.selectedIndex = 1;
            this.ui.m_dayList.refreshVirtualList();
            let rewd = this.todayData.type == 1 ? `${this.todayData.title}+${this.todayData.money}金币` : `${this.todayData.value + this.todayData.money}金币`;
            LTUI.Toast(`恭喜获得 ${rewd}`);
            if (this.todayData.type == 1) {
                this.getSkin(this.todayData.value);
                GameData.instance.coinCount += (this.todayData.money);
                GameData.SaveToDisk();
            } else {
                GameData.instance.coinCount += (this.todayData.money + this.todayData.value);
                GameData.SaveToDisk();
            }
            CommonSaveData.SaveToDisk();
            this.Hide();
        } else {
            LTUI.Toast("跳过广告无法获得奖励");
        }
    }
    private getSkin(id: number) {
        // CommonSaveData.instance.skinAdCount = 0;
        if (this._openData) {
            this._openData.onGetSkin(id);
        }
    }
    onNormalGet() {
        if (this.todayData.type == 1) {
            this.getSkin(this.todayData.value);
        } else {
            LTUI.Toast(`恭喜获得 ${this.todayData.money}金币`);
            GameData.instance.coinCount += this.todayData.money;
            GameData.SaveToDisk();
        }
        CommonSaveData.instance.signDayCount++;
        CommonSaveData.instance.isSigned = true;
        CommonSaveData.SaveToDisk();
        this.Hide();
        // if (LTSDK.instance.checkState == ECheckState.InCheck) {
        // }
        // else {
        //     this.onVideoGet();
        // }
    }
    protected _OnHide() {

    }
}
