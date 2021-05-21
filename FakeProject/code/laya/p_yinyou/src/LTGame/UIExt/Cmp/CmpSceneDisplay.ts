import LTRes from "../../Res/LTRes";
import ResDefine from "../../../script/common/ResDefine";

export class CmpSceneDisplay {

    private _oldImg: fgui.GObject;
    public get oldImg(): fgui.GObject {
        return this._oldImg;
    }

    private _cacheImage: fgui.GImage;
    public get displayImage(): fgui.GImage {
        return this._cacheImage;
    }

    private _cacheRt: Laya.RenderTexture;
    public s3d: Laya.Scene3D;
    public camera: Laya.Camera;

    private _scenePath: string;

    constructor(oldImg: fgui.GObject) {
        this._oldImg = oldImg;
        this._oldImg.visible = false;

        // 创建RT
        let imgParent = this._oldImg.parent;
        this._cacheRt = new Laya.RenderTexture(this._oldImg.width,
            this._oldImg.height, Laya.RenderTextureFormat.R8G8B8A8,
            Laya.RenderTextureDepthFormat.DEPTH_16);
        this._cacheImage = new fgui.GImage();
        imgParent.addChildAt(this._cacheImage, imgParent.getChildIndex(this._oldImg) + 1);
        this._cacheImage.image.texture = new Laya.Texture(this._cacheRt as any);
        this._cacheImage.setPivot(this._oldImg.pivotX, this._oldImg.pivotY, this._oldImg.pivotAsAnchor);
        this._cacheImage.setXY(this._oldImg.x, this._oldImg.y);
        this._cacheImage.visible = false;
    }

    public async LoadScene(scenePath: string) {
        this._scenePath = ResDefine.FixScene(scenePath);
        this.s3d = await LTRes.LoadAndGet(this._scenePath, true) as Laya.Scene3D;
        this.camera = this._SearchCamera(this.s3d);
        if (this.camera == null) {
            console.error("无有效的camera");
            return;
        }
        this.camera.renderTarget = this._cacheRt;
        Laya.stage.addChild(this.s3d);
        this._cacheImage.visible = true;
        this._oldImg.visible = false;
    }

    private _SearchCamera(seachObj: Laya.Node): Laya.Camera {
        if (seachObj instanceof Laya.Camera) {
            return seachObj;
        }
        for (let i = 0; i < seachObj.numChildren; ++i) {
            let camera = this._SearchCamera(seachObj.getChildAt(i));
            if (camera != null) {
                return camera;
            }
        }
        return null;
    }

    public Dispose() {
        if (this._cacheRt != null) {
            this._cacheRt.destroy();
            this._cacheRt = null;
        }

        if (this._cacheImage != null) {
            this._cacheImage.dispose();
            this._cacheImage = null;
        }

        this.s3d.destroy();
        LTRes.Unload(this._scenePath);
    }

}