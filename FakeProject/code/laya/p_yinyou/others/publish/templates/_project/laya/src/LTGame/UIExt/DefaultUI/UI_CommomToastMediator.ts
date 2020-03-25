import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_CommomToast from "./UI/LTGame/UI_CommomToast";
import FGuiData from "../FGui/FGuiData";
import FGuiEx from "../FGui/FGuiEx";
import UI_view_toast from "./UI/LTGame/UI_view_toast";

export default class UI_CommomToastMediator extends BaseUIMediator<UI_CommomToast> {

    private static _instance: UI_CommomToastMediator;
    public static get instance(): UI_CommomToastMediator {
        if (this._instance == null) {
            this._instance = new UI_CommomToastMediator();
            this._instance._classDefine = UI_CommomToast;
        }
        return this._instance;
    }

    public Show(obj: any = null) {
        this._openParam = obj;
        if (this._ui == null) {
            let uiData = new FGuiData();
            this._ui = FGuiEx.AddUI(this._classDefine, uiData) as UI_CommomToast;
            this._ui.sortingOrder = Number.MAX_SAFE_INTEGER;
            this.ui.m_toast.visible = false;
            this._OnShow();
        }
        
        this._DoToast(this._openParam as string);
    }

    private _DoToast(str: string) {
        let createToast = UI_view_toast.createInstance();
        this.ui.addChild(createToast);
        createToast.setXY(this.ui.m_toast.x, this.ui.m_toast.y);
        createToast.m_toast_str.text = str;
        createToast.m_show.play(Laya.Handler.create(this, () => {
            createToast.dispose();
        }));
    }

    public Hide(dispose: boolean = true) {
        // 该界面一旦打开,永不关闭

    }

}