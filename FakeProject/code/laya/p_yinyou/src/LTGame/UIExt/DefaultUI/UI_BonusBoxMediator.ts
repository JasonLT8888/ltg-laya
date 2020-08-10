import GameData from "../../../script/common/GameData";
import MathEx from "../../LTUtils/MathEx";
import LTPlatform from "../../Platform/LTPlatform";
import BaseUIMediator from "../FGui/BaseUIMediator";
import LTUI from "../LTUI";
import { CommonRewardData, RewardItem } from "./Data/CommonRewardData";
import UI_BonusBox from "./UI/LTUI/UI_BonusBox";
import UI_BonusItem from "./UI/LTUI/UI_BonusItem";
import UI_tog_key from "./UI/LTUI/UI_tog_key";





export class UI_BonusBoxMediator extends BaseUIMediator<UI_BonusBox> {
    private static _instance: UI_BonusBoxMediator;
    public get ui(): UI_BonusBox {
        return this._ui;
    }

    public static get instance(): UI_BonusBoxMediator {
        if (this._instance == null) {
            this._instance = new UI_BonusBoxMediator();
            this._instance._classDefine = UI_BonusBox;
        }
        return this._instance;
    }
    keyCount: number = 3;
    weight: number[] = [20, 20, 20, 5, 5, 5, 5, 1, 1];
    adItems: number[] = [];
    datas: RewardItem[] = [];
    private _openData: CommonRewardData;
    _OnShow() {
        super._OnShow(); 
        this._openData = new CommonRewardData();
        if (this._openParam == null) {
            console.error("请传入CommonRewardData用于初始化宝箱界面");
        } else {
            for (let key in this._openParam) {
                this._openData[key] = this._openParam[key];
            }
        }
        this.keyCount = 3;
        if (this._openData) {
            this.datas = this._openData.datas;
        }

        this.adItems = MathEx.RandomArrayFromArray([0, 1, 2, 3, 4, 5, 6, 7, 8], 3);
        this.ui.m_btn_close.visible = false;// LTPlatform.instance.platform == EPlatformType.Oppo;

        this.ui.m_keyList.setVirtual();
        this.ui.m_keyList.itemRenderer = Laya.Handler.create(this, this.renderKeyItem, null, false);
        this.ui.m_keyList.numItems = 3;
        this.ui.m_keyList.refreshVirtualList();

        this.ui.m_boxList.setVirtual();
        this.ui.m_boxList.itemRenderer = Laya.Handler.create(this, this.renderBoxItem, null, false);
        this.ui.m_boxList.on(fairygui.Events.CLICK_ITEM, this, this.clickBox);
        this.ui.m_boxList.numItems = 9;
        this.ui.m_boxList.refreshVirtualList();
        this.ui.m_btn_close.onClick(this, this.Hide);
        this.ui.m_txt_count.text = `可免费开启${this.keyCount}个宝箱`;
        this.ui.m_btn_ad.onClick(this, this.addKey);
        this.ui.m_tog.visible = false;
        this.ui.m_tog.m_selected.selectedIndex = 1;
        // this.ui.m_tog.m_selected.selectedIndex = LTSDK.instance.checkState == ECheckState.InCheck ? 0 : 1;
        // this.ui.m_tog.onClick(this, () => {
        //     this.ui.m_tog.m_selected.selectedIndex = (this.ui.m_tog.m_selected.selectedIndex + 1) % 2;
        //     this.ui.m_btn_ad.m_ad.selectedIndex = this.ui.m_tog.m_selected.selectedIndex;
        // });
        this.ui.m_btn_ad.m_ad.selectedIndex = 1;//this.ui.m_tog.m_selected.selectedIndex; 

    }
    async addKey() {
        if (this.ui.m_tog.m_selected.selectedIndex == 1) {
            let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
            if (result) {
                this.keyCount = 3;
                this.ui.m_keyList.refreshVirtualList();
                this.ui.m_txt_count.text = `可免费开启${this.keyCount}个宝箱`;
            }
            else {
                LTUI.Toast("跳过广告无法获得奖励");
            }
        } else {
            this.Hide();
        }

    }
    clickBox(item: UI_BonusItem) {
        if (item.m_isclicked.selectedIndex == 1) {
            return;
        }
        if (parseInt(item.data.toString()) == 1 || this.keyCount == 0) {
            this.getAdBonus(item);
        } else {
            this.getBonus(item);
        }
    }
    async getAdBonus(item: UI_BonusItem) {
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            this.getBonus(item);
        }
        else {
            LTUI.Toast("跳过广告无法获得奖励");
        }
    }
    getBonus(item: UI_BonusItem) {
        let data = MathEx.RandomFromWithWeight(this.datas, this.weight);
        item.m_title.text = `${data.type == 1 ? '皮肤' : '金币'}${data.value}`;
        item.m_icon.url = data.icon;
        LTUI.Toast(`恭喜获得${data.type == 1 ? '皮肤' : '金币'}${data.value}`);
        item.m_isclicked.selectedIndex = 1;
        if (data.type == 0) {
            GameData.instance.coinCount += data.value;
            GameData.SaveToDisk();
        } else {
            this._openData.onGetSkin();
        }
        if (this.keyCount > 0) {
            this.keyCount -= 1;
            this.ui.m_keyList.refreshVirtualList();
            if (this.ui.m_canclose.selectedIndex == 0) {
                this.ui.m_canclose.selectedIndex = this.keyCount < 1 ? 1 : 0;
            }
            if (!this.ui.m_btn_close.visible && this.ui.m_canclose.selectedIndex == 1) {
                this.ui.m_btn_close.visible = true;
                this.ui.m_delay.play();
            }
        }
        this.ui.m_txt_count.text = `可免费开启${this.keyCount}个宝箱`;


    }
    renderKeyItem(indx: number, item: UI_tog_key) {
        if (indx < this.keyCount) {
            item.m_select.selectedIndex = 1;
        } else {
            item.m_select.selectedIndex = 0;
        }
    }
    renderBoxItem(indx: number, item: UI_BonusItem) {
        if (this.adItems.indexOf(indx) >= 0) {
            item.m_ad.selectedIndex = 1;
            item.data = 1;
        } else {
            item.m_ad.selectedIndex = 0;
            item.data = 0;
        }
    }
    protected _OnHide() {
    }
}

