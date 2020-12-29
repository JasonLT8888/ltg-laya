import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";

import LTUI from "../../LTGame/UIExt/LTUI";
import { EPlatformType } from "../../LTGame/Platform/EPlatformType";
import TTPlatform, { VideoInfo } from "../../LTGame/Platform/TTPlatform";
import LTSDK from "../../SDK/LTSDK";
import LTG_UI_VideoList from "../UI/LTCom/LTG_UI_VideoList";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import LTG_UI_top3 from "../UI/LTCom/LTG_UI_top3";
import { LTG_Com_VideoListData } from "../Data/LTG_Com_VideoListData";

export class LTG_UI_VideoListMediator extends BaseUIMediator<LTG_UI_VideoList> {
    private static _instance: LTG_UI_VideoListMediator;
    data: VideoInfo[];
    private _cacheData: LTG_Com_VideoListData;
    public get ui(): LTG_UI_VideoList {
        return this._ui;
    }

    public static get instance(): LTG_UI_VideoListMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_VideoListMediator();
            this._instance._classDefine = LTG_UI_VideoList;
        }
        return this._instance;
    }

    async _OnShow() {
        super._OnShow();
        if (LTPlatform.instance.platform != EPlatformType.TT) {
            LTUI.Toast('不支持的平台');
            return this.Hide();
        }
        this._cacheData = this._openParam as LTG_Com_VideoListData;

        this.ui.m_btn_back.onClick(this, this.Hide);
        let token = await LTSDK.instance.getToken();
        if (token) {
            this.getAndRefresh();
        } else {
            this.Hide();
            return console.error('token 获取失败');
        }

        this.ui.m_list.setVirtual();
        this.ui.m_list.itemRenderer = Laya.Handler.create(this, this.renderItem, null, false);
        this.ui.m_list.on(fairygui.Events.CLICK_ITEM, this, this.clickListItem)
        this.ui.m_btn_like.onClick(this, () => {
            this.getAndRefresh();
        });
        this.ui.m_btn_new.onClick(this, () => {
            this.getAndRefresh(false);
        });
        this.ui.m_btn_create.onClick(this, () => {
            LTPlatform.instance.recordManager.ShareVideo(Laya.Handler.create(this, () => {
                this._cacheData.onShareVideo?.run();
            }), null, Laya.Handler.create(this, () => {
                LTUI.Toast('请先完成一局游戏')
            }));
        });
        this.ui.m_item1.onClick(this, () => this.clickItem(0));
        this.ui.m_item2.onClick(this, () => this.clickItem(1));
        this.ui.m_item3.onClick(this, () => this.clickItem(2));
    }
    getAndRefresh(bylick: boolean = true) {
        (LTPlatform.instance as TTPlatform).requestVideoList(bylick, 15).then((e) => {
            this.data = e.data as VideoInfo[];
            this.updateInfo();
        });
    }
    clickListItem(item: any) {
        let index = parseInt(item.data.toString());
        this.clickItem(index);
    }
    clickItem(index: number) {
        const data = this.data[index];
        (LTPlatform.instance as TTPlatform).navigateToVideo(data.video_id);
    }
    renderItem(index: number, item: any) {
        const data = this.data[index + 3];
        item.data = index + 3;
        item.m_digs.text = data.digg_count;
        item.m_icon.m_icon.url = data.cover_url;
        item.m_nickname.text = data.user_name;
    }
    updateInfo() {
        for (let i = 0; i < 3; i++) {
            const item: LTG_UI_top3 = this.ui[`m_item${i + 1}`];
            const data = this.data[i];
            item.m_digs.text = data.digg_count;
            item.m_icon.m_icon.url = data.cover_url;
            item.m_nickname.text = data.user_name;
        }
        this.ui.m_list.numItems = 12;
        this.ui.m_list.refreshVirtualList();
    }
    protected _OnHide() { }
}
