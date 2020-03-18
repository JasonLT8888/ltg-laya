import { UI_MainMediator } from "../ui/UI_MainMediator";
import GlobalUnit from "../common/GlobalUnit";
import BaseState from "../../LTGame/Fsm/BaseState";
import { ESceneType } from "../../LTGame/Start/ESceneType";

export default class MainScene extends BaseState {

    constructor() {
        super(ESceneType.Main);
    }

    _DoEnter() {

        UI_MainMediator.instance.Show();

    }

    _DoRunning() {
        GlobalUnit.gameManager.LogicUpdate(this.deltaTime);
    }

    _DoLateUpdate() {
        GlobalUnit.gameManager.LateUpdate(this.deltaTime);
    }

}