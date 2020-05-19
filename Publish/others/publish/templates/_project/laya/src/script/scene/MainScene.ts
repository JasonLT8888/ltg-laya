import BaseState from "../../LTGame/Fsm/BaseState";
import { ESceneType } from "../../LTGame/Start/ESceneType";
import { UI_MainMediator } from "../ui/UI_MainMediator";

export default class MainScene extends BaseState {

    constructor() {
        super(ESceneType.Main);
    }

    _DoEnter() {

        UI_MainMediator.instance.Show(); 
    }

}