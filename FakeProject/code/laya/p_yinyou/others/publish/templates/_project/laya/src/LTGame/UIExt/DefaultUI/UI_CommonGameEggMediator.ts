import { EggConfig } from "../../../script/config/EggConfig";
import CommonSaveData from "../../Commom/CommonSaveData";
import MathEx from "../../LTUtils/MathEx";
import LTPlatform from "../../Platform/LTPlatform";
import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_CommonGameEgg from "./UI/LTGame/UI_CommonGameEgg";
import UI_eggItem from "./UI/LTGame/UI_eggItem";



export class UI_CommonGameEggMediator extends BaseUIMediator<UI_CommonGameEgg> {
    private static _instance: UI_CommonGameEggMediator;
    public get ui(): UI_CommonGameEgg {
        return this._ui;
    }

    public static get instance(): UI_CommonGameEggMediator {
        if (this._instance == null) {
            this._instance = new UI_CommonGameEggMediator();
            this._instance._classDefine = UI_CommonGameEgg;
        }
        return this._instance;
    }
    private selectId: number = 1;
    private isInit: boolean = false;
    _OnShow() {
        super._OnShow();
        this.ui.m_btn_close.onClick(this, this.Hide);
        this.ui.m_btn_getSec.onClick(this, this.onGetSecret);
        this.ui.m_btn_getPass.onClick(this, this.onGetPassword);
        this.ui.m_eggLsit.setVirtual();
        this.ui.m_eggLsit.itemRenderer = Laya.Handler.create(this, this.renderItem, null, false);
        this.ui.m_eggLsit.on(fgui.Events.CLICK_ITEM, this, this.onItemClick);
        this.ui.m_eggLsit.numItems = EggConfig.dataList.length;
        this.isInit = true;
        this.refreshShowInfo();
    }
    onItemClick(item: UI_eggItem) {
        this.selectId = parseInt(item.data['index']) + 1;
        this.ui.m_eggLsit.refreshVirtualList();
        this.refreshShowInfo();

    }
    renderItem(index: number, item: UI_eggItem) {
        item.data = { index: index };
        if (!this.isInit) {
            let type = MathEx.RandomInt(0, 3);
            item.m_type.selectedIndex = type;
        }
        let data = EggConfig.dataList[index];
        let passState = CommonSaveData.instance.EggPassIds.indexOf(data.id) >= 0;
        item.m_icon.m_selected.selectedIndex = (index == this.selectId - 1) ? 1 : 0;
        item.m_icon.m_icon.url = passState ? data.icon : data.lockIcon;;
        item.m_icon.m_lockState.selectedIndex = passState ? 1 : 0;
    }
    refreshShowInfo() {
        let data = EggConfig.data[this.selectId];
        let pass = CommonSaveData.instance.EggPassIds.indexOf(data.id) >= 0;
        let password = CommonSaveData.instance.EggPasswordIds.indexOf(data.id) >= 0;
        let secret = CommonSaveData.instance.EggSecretIds.indexOf(data.id) >= 0;
        this.ui.m_noEgg.selectedIndex = data.enable ? 0 : 1;
        this.ui.m_txt_eggName.text = data.name;
        this.ui.m_txt_getState.text = pass ? '(已获得)' : '(未获得)';
        this.ui.m_info.m_icon.url = pass ? data.icon : data.lockIcon;
        this.ui.m_btn_getPass.m_lockState.selectedIndex = password ? 1 : 0;
        this.ui.m_btn_getPass.title = data.password;
        this.ui.m_btn_getSec.m_lockState.selectedIndex = secret ? 1 : 0;
        this.ui.m_btn_getSec.title = data.secret;
    }
    async  onGetSecret() {
        if (this.ui.m_btn_getSec.m_lockState.selectedIndex == 0) {
            let res = await LTPlatform.instance.ShowRewardVideoAdAsync();
            if (res) {
                CommonSaveData.instance.EggSecretIds.push(this.selectId);
                CommonSaveData.SaveToDisk();
                this.refreshShowInfo();
            }
        }
    }
    async  onGetPassword() {
        if (this.ui.m_btn_getPass.m_lockState.selectedIndex == 0) {
            let res = await LTPlatform.instance.ShowRewardVideoAdAsync();
            if (res) {
                CommonSaveData.instance.EggPasswordIds.push(this.selectId);
                CommonSaveData.SaveToDisk();
                this.refreshShowInfo();
            }
        }
    }
    protected _OnHide() { }
    /**
     * 游戏中找到彩蛋
     * @param id 
     */
    public static PassEgg(id: number) {
        CommonSaveData.instance.EggPassIds.push(id);
        CommonSaveData.SaveToDisk();
    }
}
