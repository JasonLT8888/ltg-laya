export default class LTBehaviour extends Laya.Script3D {

    private _isDestory = false;

    public get transform() {
        if (this == null) return null;
        if (this.owner == null) return null;
        return (this.owner as Laya.Sprite3D).transform;
    }

    public get gameobject() {
        if (this == null) return null;
        if (this.owner == null) return null;
        return this.owner as Laya.Sprite3D;
    }

    public DestorySelf() {
        if (this._isDestory) return;
        this._isDestory = true;
        if (this.owner == null) return;
        if (this.owner.destroyed) return;
        this.owner.destroy(true);
    }

}