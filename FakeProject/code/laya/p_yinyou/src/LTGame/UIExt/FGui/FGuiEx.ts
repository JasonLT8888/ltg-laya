import FGuiData from "./FGuiData";
import BaseUIMediator from "./BaseUIMediator";
import Awaiters from "../../Async/Awaiters";

export default class FGuiEx {

    public static top: number = 0;
    public static bottom: number = 0;
    public static width: number = 750;
    public static scale: number = 1;

    public static safeArea: LTGame.SafeArea;

    private static _cacheMap: Map<string, FGuiData> = new Map<string, FGuiData>();

    public static Init(safeArea: LTGame.SafeArea = null) {
        this.safeArea = safeArea;
        fgui.UIConfig.packageFileExtension = "bin";
        Laya.stage.addChild(fgui.GRoot.inst.displayObject);
        fgui.GRoot.inst.displayObject.name = "GRoot";
        this.UpdateAllUI();
        Laya.stage.on(Laya.Event.RESIZE, this, this.UpdateAllUI);
    }

    public static AddUI(uiType: any, param: FGuiData = null): fgui.GObject {
        let ui = uiType.createInstance() as fgui.GObject;
        fgui.GRoot.inst.addChild(ui);
        if (param == null) {
            param = new FGuiData();
        }
        if (param == null || !param.needFitScreen) {
            ui.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
        } else {
            ui.setSize(fgui.GRoot.inst.width, this.bottom);
            ui.y = this.top;
        }

        this._cacheMap.set(ui.constructor.name, param);

        window[ui.constructor.name] = ui;

        console.log("打开界面", ui.constructor.name);

        return ui;
    }

    public static UpdateAllUI() {
        let setWidth = Laya.stage.width;
        let setHeight = Laya.stage.height;
        if (this.safeArea != null) {
            let scale = Laya.stage.width / this.safeArea.width;
            this.top = this.safeArea.top * scale;
            this.bottom = (this.safeArea.height) * scale;
            this.width = this.safeArea.width;
        } else {
            this.bottom = setHeight;
            this.width = setWidth;
        }

        fgui.GRoot.inst.setSize(setWidth, setHeight);

        let childCount = fgui.GRoot.inst.numChildren;
        for (let i = 0; i < childCount; ++i) {
            let ui = fgui.GRoot.inst.getChildAt(i);
            let getData = this._cacheMap.get(ui.constructor.name);
            if (getData == null || !getData.needFitScreen) {
                ui.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
            } else {
                ui.setSize(fgui.GRoot.inst.width, this.bottom);
                ui.y = this.top;
            }
        }
    }

    public static CheckIn(ui: fgui.GObject, x: number, y: number): boolean {
        if (x > ui.x && x < ui.x + ui.width && y > ui.y && y < ui.y + ui.height) {
            return true;
        }
        return false;
    }

    /**
     * 获取3d物件在屏幕中的位置
     * @param camera 
     * @param pos3d 
     * @param ui 
     */
    public static GetPointFrom3DWorld(camera: Laya.Camera, pos3d: Laya.Vector3, ui: fgui.GComponent): Laya.Point {
        let uiPos = new Laya.Vector4();
        camera.worldToViewportPoint(pos3d, uiPos);
        if (ui != null) {
            return ui.globalToLocal(uiPos.x, uiPos.y);
        } else {
            return new Laya.Point(uiPos.x, uiPos.y);
        }
    }

    /**
     * 等待ui关闭
     * @param ui 
     */
    public static async WaitUIClose(ui: BaseUIMediator<fgui.GComponent>) {
        await Awaiters.NextFrame();
        while (ui.isShow) {
            await Awaiters.NextFrame();
        }
    }

}