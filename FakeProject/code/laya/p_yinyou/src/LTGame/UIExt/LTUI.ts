import { CommonRewardData } from "./DefaultUI/Data/CommonRewardData";
import { EndLoseOpenData } from "./DefaultUI/Data/EndLoseOpenData";
import EndRewardOpenData from "./DefaultUI/Data/EndRewardOpenData";
import EndShareOpenData from "./DefaultUI/Data/EndShareOpenData";
import OfflineOpenData from "./DefaultUI/Data/OfflineOpenData";
import OneMoreOpenData from "./DefaultUI/Data/OneMoreOpenData";
import RollOpenData from "./DefaultUI/Data/RollOpenData";
import SetOpenData from "./DefaultUI/Data/SetOpenData";
import SignOpenData from "./DefaultUI/Data/SignOpenData";
import TrySkinOpenData from "./DefaultUI/Data/TrySkinOpenData";
import { UnlockProgressOpenData } from "./DefaultUI/Data/UnlockProgressOpenData";
import UI_CommomToastMediator from "./DefaultUI/UI_CommomToastMediator";
// import UI_CommonEndLoseMediator from "./DefaultUI/UI_CommonEndLoseMediator";
// import UI_CommonEndRewardMediator from "./DefaultUI/UI_CommonEndRewardMediator";
// import UI_CommonEndShareMediator from "./DefaultUI/UI_CommonEndShareMediator";
import UI_CommondLoadMediator from "./DefaultUI/UI_CommonLoadMediator";
import UI_CommonLockScreenMediator from "./DefaultUI/UI_CommonLockScreenMediator";
// import UI_CommonOfflineMediator from "./DefaultUI/UI_CommonOfflineMediator";
// import UI_CommonOneMoreMediator from "./DefaultUI/UI_CommonOneMoreMediator";
// import UI_CommonRollMediator from "./DefaultUI/UI_CommonRollMediator";
// import UI_CommonSetMediator from "./DefaultUI/UI_CommonSetMediator";
import UI_CommonTrySkinMediator from "./DefaultUI/UI_CommonTrySkinMediator";
import UI_CommonUnlockProgressMediator from "./DefaultUI/UI_CommonUnlockProgressMediator";
import UI_FlyPanelMediator from "./DefaultUI/UI_FlyPanelMediator";
import { UI_BonusBoxMediator } from "./DefaultUI/UI_BonusBoxMediator";
import { UI_ExSkinMediator } from "./DefaultUI/UI_ExSkinMediator";
import LTPlatform from "../Platform/LTPlatform";

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
     * 打开再来一份界面
     * @param openData 
     */
    public static ShowOneMore(openData: OneMoreOpenData) {
        //   UI_CommonOneMoreMediator.instance.Show(openData);
    }

    public static ShowEndShare(openData: EndShareOpenData) {
        // 不在内部进行平台判断,防止开发过程中功能遗漏
        //   UI_CommonEndShareMediator.instance.Show(openData);
    }

    public static ShowEndReward(openData: EndRewardOpenData) {
        // UI_CommonEndRewardMediator.instance.Show(openData);
    }

    public static ShowEndLose(openData: EndLoseOpenData) {
        // UI_CommonEndLoseMediator.instance.Show(openData);
    }

    public static ShowUnlockProgress(openData: UnlockProgressOpenData) {
        UI_CommonUnlockProgressMediator.instance.Show(openData);
    }

    public static ShowOffline(openData: OfflineOpenData) {
        // UI_CommonOfflineMediator.instance.Show(openData);
    }

    public static ShowTrySkin(openData: TrySkinOpenData) {
        UI_CommonTrySkinMediator.instance.Show(openData);
    }

    public static ShowSet(openData: SetOpenData) {
        // UI_CommonSetMediator.instance.Show(openData);
    }

    public static ShowRoll(openData: RollOpenData) {
        // UI_CommonRollMediator.instance.Show(openData);
    }

    public static LockScreen() {
        UI_CommonLockScreenMediator.instance.Show();
    }

    public static UnlockScreen() {
        UI_CommonLockScreenMediator.instance.Hide();
    }
    /**展示九宫宝箱 demo */
    public static ShowBonusBox() {
        console.error('demo 数据');
        let openData = new CommonRewardData();
        openData.datas = [
            { type: 0, value: 10, icon: 'ui://75kiu87kbg0016' },
            { type: 0, value: 20, icon: 'ui://75kiu87kbg0016' },
            { type: 0, value: 30, icon: 'ui://75kiu87kbg0016' },
            { type: 0, value: 40, icon: 'ui://75kiu87kbg0016' },
            { type: 0, value: 50, icon: 'ui://75kiu87kbg0016' },
            { type: 0, value: 60, icon: 'ui://75kiu87kbg0016' },
            { type: 0, value: 70, icon: 'ui://75kiu87kbg0016' },
            { type: 0, value: 80, icon: 'ui://75kiu87kbg0016' },
            { type: 1, value: 9, icon: 'test/test.png' }
        ];
        openData.onGetSkin = () => { LTUI.Toast('恭喜获得皮肤') };
        UI_BonusBoxMediator.instance.Show(openData);
    }
    /**展示限定皮肤 demo */
    public static ShowExSKin() {
        console.error('demo 数据');
        let openData = new CommonRewardData();
        openData.datas = [
            { type: 1, value: 9, icon: 'test/test.png' }
        ];
        openData.onGetSkin = () => { LTUI.Toast(`恭喜获得限定 皮肤 ${openData.datas[0].value}`) };
        UI_ExSkinMediator.instance.Show(openData);
    }

}