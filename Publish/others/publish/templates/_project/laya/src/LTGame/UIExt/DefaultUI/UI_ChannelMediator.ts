import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_Channel from "./UI/LTGame/UI_Channel";
import StringEx from "../../LTUtils/StringEx";
import LTUI from "../LTUI";
import GameData from "../../../script/common/GameData";



export class UI_ChannelMediator extends BaseUIMediator<UI_Channel> {
    private static _instance: UI_ChannelMediator;
    public get ui(): UI_Channel {
        return this._ui;
    }

    public static get instance(): UI_ChannelMediator {
        if (this._instance == null) {
            this._instance = new UI_ChannelMediator();
            this._instance._classDefine = UI_Channel;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        this.ui.m_btn_close.onClick(this, this.Hide);
        this.ui.m_btn_yes.onClick(this, this.bindChannel);
        this.ui.m_btn_rebind.onClick(this, this.clear);
        this.updateUI();
    }
    private updateUI() {
        if (StringEx.IsNullOrEmpty(GameData.instance.channelId)) {
            this.ui.m_state.selectedIndex = 0;
        }
        else {
            this.showChannelID();
        }
    }

    private clear() {
        GameData.instance.channelId = '';
        GameData.SaveToDisk();
        this.updateUI();
    }
    private bindChannel() {
        let txt = this.ui.m_txt_input.text;
        if (StringEx.IsNullOrEmpty(txt)) {
            return LTUI.Toast('请重新输入');
        } else {
            GameData.instance.channelId = txt;
            GameData.SaveToDisk();
            LTUI.Toast('渠道绑定成功');
            this.showChannelID();
        }
    }
    private showChannelID() {
        this.ui.m_state.selectedIndex = 1;
        this.ui.m_txt_show.text = `您已绑定的渠道号/抖音账号：\n${GameData.instance.channelId}`;
    }
    protected _OnHide() { }
}
