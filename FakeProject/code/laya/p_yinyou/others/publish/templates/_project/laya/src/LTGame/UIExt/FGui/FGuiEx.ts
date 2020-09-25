import LTDictionary from "../../LTUtils/LTDictionary";
import FGuiData from "./FGuiData";

export default class FGuiEx {

    public static top: number = 0;
    public static bottom: number = 0;

    public static safeArea: LTGame.SafeArea;

    private static _cacheMap: LTDictionary<string, FGuiData> = new LTDictionary<string, FGuiData>();

    public static Init(safeArea: LTGame.SafeArea = null) {
        this.safeArea = safeArea;
        fgui.UIConfig.packageFileExtension = "bin";
        Laya.stage.addChild(fgui.GRoot.inst.displayObject);
        this.UpdateAllUI();
        Laya.stage.on(Laya.Event.RESIZE, this, this.UpdateAllUI);
    }

    public static AddUI(uiType, param: FGuiData = null): fgui.GObject {
        let ui = uiType.createInstance() as fgui.GObject;
        fgui.GRoot.inst.addChild(ui);
        if (param == null) {
            param = new FGuiData();
        }
        if (param == null || !param.needFitScreen) {
            ui.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
        } else {
            ui.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height - this.top - this.bottom);
            ui.y = this.top;
        }
        if (window['kwaigame']) {
            let scale = (1334 / 750) / (Laya.stage.height / Laya.stage.width);
            ui.asCom._children.forEach(c => {
                if (ui.asCom._children.indexOf(c) > 0) {
                    c.scaleY = scale;
                }
            });
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
            this.bottom = (this.safeArea.bottom - this.safeArea.height - this.safeArea.top) * scale;
        }
        if (window['kwaigame']) {
            fgui.GRoot.inst.setSize(750, 1334);
        } else {
            fgui.GRoot.inst.setSize(setWidth, setHeight);
        }
        let childCount = fgui.GRoot.inst.numChildren;
        for (let i = 0; i < childCount; ++i) {
            let ui = fgui.GRoot.inst.getChildAt(i);
            let getData = this._cacheMap.Get(ui.constructor.name);
            if (getData == null || !getData.needFitScreen) {
                ui.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
            } else {
                ui.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height - this.top - this.bottom);
                ui.y = this.top;
            }
            if (window['kwaigame']) {
                ui.setScale(1, (Laya.stage.height / Laya.stage.width) / (1334 / 750));
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

}