import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_CommonToast from "./UI/LTGame/UI_CommonToast";
import FGuiData from "../FGui/FGuiData";
import FGuiEx from "../FGui/FGuiEx";
import UI_view_toast from "./UI/LTGame/UI_view_toast";
import Awaiters from "../../Async/Awaiters";

export default class UI_CommomToastMediator extends BaseUIMediator<UI_CommonToast> {

    private static _instance: UI_CommomToastMediator;
    public static get instance(): UI_CommomToastMediator {
        if (this._instance == null) {
            this._instance = new UI_CommomToastMediator();
            this._instance._classDefine = UI_CommonToast;
        }
        return this._instance;
    }

    public Show(obj: any = null) {
        this._openParam = obj;
        if (this._ui == null) {
            let uiData = new FGuiData();
            this._ui = FGuiEx.AddUI(this._classDefine, uiData) as UI_CommonToast;
            this._ui.sortingOrder = Number.MAX_SAFE_INTEGER;
            this._OnShow();
        }

        this._DoToast(this._openParam as string);
    }

    private async _DoToast(str: string) {
        await Awaiters.NextFrame();
        let createToast = UI_view_toast.createInstance();
        this.ui.m_list_toast.addChild(createToast);
        createToast.m_toast_str.text = str;
        createToast.m_show.play(Laya.Handler.create(this, () => {
            createToast.dispose();
        }));
    }

    public Hide(dispose: boolean = true) {
        // 该界面一旦打开,永不关闭

    }

}