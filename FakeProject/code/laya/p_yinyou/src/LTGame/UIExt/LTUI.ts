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

export default class LTUI {

    public static Toast(str: string) {
        console.log("[Toast]" + str);
        UI_CommomToastMediator.instance.Show(str);
    }

    public static ShowLoading(str: string) {
        if (UI_CommondLoadMediator.instance.isShow) {
            console.log("加载弹窗界面已打开");
            return;
        }
        UI_CommondLoadMediator.instance.Show(str);
    }

    public static HideLoading() {
        UI_CommondLoadMediator.instance.Hide();
    }

    public static async FlyCoinsTo(fromObj: fgui.GObject, toObj: fgui.GObject, flyIcon: string = null, flyCount: number = 10,
        flyTime: number = 1, circleRadius: number = 60) {
        await UI_FlyPanelMediator.instance.FlyCoins(fromObj, toObj, flyIcon, flyCount, flyTime, circleRadius);
    }

    public static ShowSignUI(openData: SignOpenData) {
        UI_CommonSignMediator.instance.Show(openData);
    }

    public static ShowEndShare(openData: EndShareOpenData) {
        UI_CommonEndShareMediator.instance.Show(openData);
    }

    public static ShowEndReward(openData: EndRewardOpenData) {
        UI_CommonEndRewardMediator.instance.Show(openData);
    }

    public static ShowOffline(openData: OfflineOpenData) {
        UI_CommonOfflineMediator.instance.Show(openData);
    }

}