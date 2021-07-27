import BaseState from "../../LTGame/Fsm/BaseState";
import { ESceneType } from "../../LTGame/Start/ESceneType";
import { UI_MainMediator } from "../ui/UI_MainMediator";
import LTSDK from "../../SDK/LTSDK";
import { ECheckState } from "../../SDK/common/ECheckState";
import { UI_ChannelMediator } from "../../LTGame/UIExt/DefaultUI/UI_ChannelMediator";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import { EPlatformType } from "../../LTGame/Platform/EPlatformType";

export default class MainScene extends BaseState<any> {

    constructor() {
        super(null, ESceneType.Main);
    }

    _DoEnter() {
        //     LTSDK.instance.checkState = ECheckState.NoGame;
        //     console.error("[测试功能]强制设置checkstate", LTSDK.instance.checkState);

        UI_MainMediator.instance.Show();

        if (window["__GM"] && LTPlatform.instance.platform == EPlatformType.TT) {
            UI_ChannelMediator.instance.Show();
        }
    }

}