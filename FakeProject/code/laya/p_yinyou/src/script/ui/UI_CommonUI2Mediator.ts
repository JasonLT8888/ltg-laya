import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_CommonUI2 from "../../ui/Main/UI_CommonUI2";
import { UI_MainMediator } from "./UI_MainMediator";
import LTG_UI_HideMenuMediator from "../../LTG_CommonUI/Mediator/LTG_UI_HideMenuMediator";
import { LTG_Com_MyGameData } from "../../LTG_CommonUI/Data/LTG_Com_MyGameData";
// import { LTG_Com_ZhuaWawaData } from "../../LTG_CommonUI/Data/LTG_Com_ZhuaWawaData";
import { LTG_Com_RollData } from "../../LTG_CommonUI/Data/LTG_Com_RollData";
import { LTG_Com_WatchDYData } from "../../LTG_CommonUI/Data/LTG_Com_WatchDYData";
import { LTG_Com_ShareVideoData } from "../../LTG_CommonUI/Data/LTG_Com_ShareVideoData";
import { LTG_Com_SignData } from "../../LTG_CommonUI/Data/LTG_Com_SignData";
import { SignConfig } from "../config/SignConfig";
import { RollConfig } from "../config/RollConfig";
import { LTG_Com_SetData } from "../../LTG_CommonUI/Data/LTG_Com_SetData";
import { LTG_Com_EggWallData } from "../../LTG_CommonUI/Data/LTG_Com_EggWallData";
import { GameConst } from "../config/GameConst";
import { LTG_Com_UnlockItemData } from "../../LTG_CommonUI/Data/LTG_Com_UnlockItemData";
import { RewardCodeConfig } from "../config/RewardCodeConfig";
import { LTG_Com_VideoListData } from "../../LTG_CommonUI/Data/LTG_Com_VideoListData";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import LTSDK from "../../SDK/LTSDK";
import { LTG_Com_TrySkinData } from "../../LTG_CommonUI/Data/LTG_Com_TrySkinData";
import { TryItemConfig } from "../config/TryItemConfig";
import LTUI from "../../LTGame/UIExt/LTUI";
import { LTG_UI_RankListMediator } from "../../LTG_CommonUI/Mediator/LTG_UI_RankListMediator";
import { UI_MiniGamesMediator } from "../../LTGame/UIExt/DefaultUI/UI_MiniGamesMediator";
import { LTG_Com_WinData } from "../../LTG_CommonUI/Data/LTG_Com_WinData";

class UIDemoData {

    public name: string;
    public func: Function;

    constructor(name: string, func: Function) {
        this.name = name;
        this.func = func;
    }

}

export default class UI_CommonUI2Mediator extends BaseUIMediator<UI_CommonUI2> {

    private static _instance: UI_CommonUI2Mediator;
    public static get instance(): UI_CommonUI2Mediator {
        if (this._instance == null) {
            this._instance = new UI_CommonUI2Mediator();
            this._instance._classDefine = UI_CommonUI2;
        }
        return this._instance;
    }
    private fakeScore = 10;
    private _demos: UIDemoData[] = [
        new UIDemoData("隐藏菜单", () => {
            LTG_UI_HideMenuMediator.instance.Show();
        }),
        new UIDemoData("我的小程序", () => {
            new LTG_Com_MyGameData().Send();
        }),
        // new UIDemoData("抓娃娃", () => {
        //     let data = new LTG_Com_ZhuaWawaData();
        //     data.onPickup = Laya.Handler.create(null, () => {
        //         console.log("抓娃娃完成");
        //     });
        //     data.onTimeout = Laya.Handler.create(null, () => {
        //         console.log("超时退出");
        //     });
        //     data.Send();
        // }),
        new UIDemoData("皮肤试用", () => {
            let data = new LTG_Com_TrySkinData();
            data.tryConfig = TryItemConfig.dataList[0];
            data.onClose = Laya.Handler.create(this, (res) => {
                if (res) {
                    LTUI.Toast("试用");
                } else {
                    LTUI.Toast("不试用");
                }
            })
            data.Send();
        }),

        new UIDemoData("限定皮肤", () => {
            let data = new LTG_Com_UnlockItemData();
            data.rewardConfig = RewardCodeConfig.dataList[0];
            data.onUnlocked = Laya.Handler.create(null, (rewardType: number, rewardValue: number) => {
                LTUI.Toast(`解锁了皮肤 type+${rewardType} id:${rewardValue}`);
            });
            data.onClose = Laya.Handler.create(null, () => {

            });
            data.Send();
        }),
        new UIDemoData("大转盘", () => {
            let data = new LTG_Com_RollData();
            data.onRolled = Laya.Handler.create(null, (config: RollConfig.config) => {
                console.log("转到奖励", config);
            }, null, false);
            data.onSpecial = Laya.Handler.create(null, (config: RollConfig.config) => {
                console.log("特殊奖励", config);
            }, null, false);
            data.Send();
        }),
        new UIDemoData("关注抖音号", () => {
            let data = new LTG_Com_WatchDYData();
            data.dyId = GameConst.data.douyin_id;
            data.Send();
        }),
        new UIDemoData("视频分享", () => {
            let data = new LTG_Com_ShareVideoData();
            data.onClosed = Laya.Handler.create(null, (code: number) => {
                switch (code) {
                    case 0:
                        console.log("未分享");
                        break;
                    case 1:
                        console.log("已分享");
                        break;
                }
            });
            data.Send();
        }),
        new UIDemoData("签到", () => {
            let data = new LTG_Com_SignData();
            data.onSign = Laya.Handler.create(null, (config: SignConfig.config, isWatched: boolean) => {
                console.log("签到", config, "是否观看视频", isWatched);
            });
            data.Send();
        }),
        new UIDemoData("设置", () => {
            let data = new LTG_Com_SetData();
            data.onCodeEntered = Laya.Handler.create(null, (code: string) => {
                console.log("输入兑换码", code);
            });
            data.Send();
        }),
        new UIDemoData("彩蛋墙", () => {
            let data = new LTG_Com_EggWallData();
            data.onUnlocked = Laya.Handler.create(null, (rewardType: number, rewardValue: number) => {

                console.log(`解锁彩蛋 道具类型 ${rewardType} 道具id= ${rewardValue}`);

            }, null, false);
            data.Send();
        }),
        new UIDemoData("视频墙", () => {
            let data = new LTG_Com_VideoListData();
            data.onShareVideo = Laya.Handler.create(null, (rewardCode: number, rewardValue: number) => {

            }, null, false);
            data.Send();
        }),
        new UIDemoData("头条导流", () => {
            // LTPlatform.instance.setUserCloudStorage("scroe", 100);
            // LTSDK.instance.RecordRankInfo(1, 200);
            UI_MiniGamesMediator.instance.Show();
        })
        ,
        new UIDemoData("游戏盒子", () => {
            // LTPlatform.instance.setUserCloudStorage("scroe", 100);
            // LTSDK.instance.RecordRankInfo(1, 200);
            LTPlatform.instance.OpenGameBox();
        })
        ,
        new UIDemoData("获取排行", () => {
            LTG_UI_RankListMediator.instance.Show();

        }),
        new UIDemoData("结算", () => {
            let windata = new LTG_Com_WinData();
            windata.progressUnlockEnable = false;
            windata.coinIconUrl = "ui://hbq27te3fig09w";
            windata.iconUrl = "";
            windata.multiRate = 5;
            windata.winCoin = 63;
            windata.progressUnlockValue = 100;
            windata.onNextLevel = Laya.Handler.create(this, () => {
                console.log("结算完成，进入下一关");
            });
            windata.onProgressItemUnlocked = Laya.Handler.create(this, () => {
                console.log("这里弹出解锁获得界面");
            });
            windata.Send();

        })
    ];

    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_back.onClick(this, this._OnClickBack);

        this.ui.m_list_btns.setVirtual();
        this.ui.m_list_btns.itemRenderer = Laya.Handler.create(this, this._OnItemRender, null, false);
        this.ui.m_list_btns.numItems = this._demos.length;
    }

    private _OnItemRender(index: number, itemUI: fgui.GButton) {
        let data = this._demos[index];
        itemUI.text = data.name;
        itemUI.onClick(this, data.func);
    }

    private _OnClickBack() {
        this.Hide();
        UI_MainMediator.instance.Show();
    }

}
