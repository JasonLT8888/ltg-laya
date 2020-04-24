import UI_CommomToastMediator from "./DefaultUI/UI_CommomToastMediator";
import UI_CommondLoadMediator from "./DefaultUI/UI_CommonLoadMediator";
import UI_FlyPanelMediator from "./DefaultUI/UI_FlyPanelMediator";
import SignOpenData from "./DefaultUI/Data/SignOpenData";
import UI_CommonSignMediator from "./DefaultUI/UI_CommonSignMediator";
import EndShareOpenData from "./DefaultUI/Data/EndShareOpenData";
import UI_CommonEndShareMediator from "./DefaultUI/UI_CommonEndShareMediator";
import EndRewardOpenData from "./DefaultUI/Data/EndRewardOpenData";
import UI_CommonEndRewardMediator from "./DefaultUI/UI_CommonEndRewardMediator";
import OfflineOpenData from "./DefaultUI/Data/OfflineOpenData";
import UI_CommonOfflineMediator from "./DefaultUI/UI_CommonOfflineMediator";
import TrySkinOpenData from "./DefaultUI/Data/TrySkinOpenData";
import UI_CommonTrySkinMediator from "./DefaultUI/UI_CommonTrySkinMediator";
import UI_CommonSetMediator from "./DefaultUI/UI_CommonSetMediator";
import SetOpenData from "./DefaultUI/Data/SetOpenData";
import RollOpenData from "./DefaultUI/Data/RollOpenData";
import UI_CommonRollMediator from "./DefaultUI/UI_CommonRollMediator";
import UI_CommonLockScreenMediator from "./DefaultUI/UI_CommonLockScreenMediator";
import OneMoreOpenData from "./DefaultUI/Data/OneMoreOpenData";
import UI_CommonOneMoreMediator from "./DefaultUI/UI_CommonOneMoreMediator";
import UI_CommonMainMoreGameAdsMediator from "./DefaultUI/UI_CommonMainMoreGameAdsMediator";
import UI_CommonMainHotGameMediator from "./DefaultUI/UI_CommonMainHotGameMediator";
import LTPlatform from "../Platform/LTPlatform";
import { EPlatformType } from "../Platform/EPlatformType";

export default class LTUI {

    public static Toast(str: string) {
        console.log("[Toast]" + str);
        UI_CommomToastMediator.instance.Show(str);
    }

    public static ShowLoading(str: string, isBig: boolean = false) {
        if (UI_CommondLoadMediator.instance.isShow) {
            console.log("加载弹窗界面已打开");
            return;
        }
        UI_CommondLoadMediator.instance.Show([str, isBig]);
    }

    public static HideLoading() {
        UI_CommondLoadMediator.instance.Hide();
    }

    public static async BoomObjs(fromObj: fgui.GObject, boomCount: number = 10, flyTime: number = 1, circleRadius: number = 60) {
        await UI_FlyPanelMediator.instance.BoomObjs(fromObj, boomCount, flyTime, circleRadius);
    }

    public static async FlyObjsTo(fromObj: fgui.GObject, toObj: fgui.GObject, flyCount: number = 10,
        flyTime: number = 1, circleRadius: number = 60) {
        await UI_FlyPanelMediator.instance.FlyObjs(fromObj, toObj, flyCount, flyTime, circleRadius);
    }

    public static async FlyCoinsTo(fromObj: fgui.GObject, toObj: fgui.GObject, flyIcon: string = null, flyCount: number = 10,
        flyTime: number = 1, circleRadius: number = 60) {
        await UI_FlyPanelMediator.instance.FlyCoins(fromObj, toObj, flyIcon, flyCount, flyTime, circleRadius);
    }

    public static async BoomCoins(fromObj: fgui.GObject, flyIcon: string = null, flyCount: number = 10,
        flyTime: number = 1, circleRadius: number = 60) {
        await UI_FlyPanelMediator.instance.BoomCoins(fromObj, flyIcon, flyCount, flyTime, circleRadius);
    }

    /**
     * 打开签到界面
     * @param openData 
     */
    public static ShowSignUI(openData: SignOpenData) {
        UI_CommonSignMediator.instance.Show(openData);
    }

    /**
     * 打开再来一份界面
     * @param openData 
     */
    public static ShowOneMore(openData: OneMoreOpenData) {
        UI_CommonOneMoreMediator.instance.Show(openData);
    }

    public static ShowEndShare(openData: EndShareOpenData) {
        if (LTPlatform.instance.platform == EPlatformType.TT) {
            UI_CommonEndShareMediator.instance.Show(openData);
        }
    }

    public static ShowEndReward(openData: EndRewardOpenData) {
        UI_CommonEndRewardMediator.instance.Show(openData);
    }

    public static ShowMoreGame(openData: any) {
        UI_CommonMainMoreGameAdsMediator.instance.Show(openData);
    }
    public static HideMoreGame(openData: any) {
        UI_CommonMainMoreGameAdsMediator.instance.Hide();
    }
    public static ShowHotGame(openData: any) {
        UI_CommonMainHotGameMediator.instance.Show(openData);
    }
    public static HideHotGame(openData: any) {
        UI_CommonMainHotGameMediator.instance.Hide();
    }

    public static ShowOffline(openData: OfflineOpenData) {
        UI_CommonOfflineMediator.instance.Show(openData);
    }

    public static ShowTrySkin(openData: TrySkinOpenData) {
        UI_CommonTrySkinMediator.instance.Show(openData);
    }

    public static ShowSet(openData: SetOpenData) {
        UI_CommonSetMediator.instance.Show(openData);
    }

    public static ShowRoll(openData: RollOpenData) {
        UI_CommonRollMediator.instance.Show(openData);
    }

    public static LockScreen() {
        UI_CommonLockScreenMediator.instance.Show();
    }

    public static UnlockScreen() {
        UI_CommonLockScreenMediator.instance.Hide();
    }

}