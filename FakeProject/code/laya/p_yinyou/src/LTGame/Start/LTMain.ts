import { LTStart } from "./LTStart";
import { EScreenOrientation } from "../Commom/EScreenOrientation";

export default class LTMain {

    private _mainLogic: LTStart;

    constructor(mainLogicClass) {
        this._mainLogic = new mainLogicClass();

        let config3D = new Config3D();
        config3D.octreeCulling = false;
        config3D.enableMultiLight = false;
        config3D.isAntialias = true;
        //根据IDE设置初始化引擎
        Laya3D.init(this._mainLogic.designWidth, this._mainLogic.designHeight,
            config3D, Laya.Handler.create(null, () => {
                switch (this._mainLogic.screenOrientation) {
                    case EScreenOrientation.Landscape:
                        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
                        break;
                    case EScreenOrientation.Portrait:
                        Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
                        break;
                    default:
                        console.error("未处理的屏幕初始化方向", this._mainLogic.screenOrientation);
                        break;
                }
                Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
                Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
                Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
                //兼容微信不支持加载scene后缀场景
                Laya.URL.exportSceneToJson = true;

                //打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
                // if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
                // if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();

                if (this._mainLogic.enableStat) {
                    Laya.Stat.show(0, 100);
                }
                Laya.alertGlobalError(false);

                this._mainLogic.InitGame();
            }));

    }

}