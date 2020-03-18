
export class EFlyImg {
    static PLAYOVER: string = 'playover';
}
export class TweenImageFunc extends Laya.EventDispatcher {
    private constructor() { super(); }

    private static _instance: TweenImageFunc;
    public static get instance(): TweenImageFunc {
        if (!TweenImageFunc._instance) {
            TweenImageFunc._instance = new TweenImageFunc();
        }
        return TweenImageFunc._instance;
    }

    public tweenImage(pkgName: string, resName: string, fromPos: Laya.Point | Laya.Vector3 | Laya.Vector2
        , targetPos: Laya.Point | Laya.Vector3 | Laya.Vector2, parent: fgui.GComponent
        , childIndex: number = -1, scale: number = 1, range: number = 160, lastOne: boolean = true, arg?: any): fgui.GObject {
        let img = fgui.UIPackage.createObject(pkgName, resName) as fgui.GImage;
        this.createFlyUnit(img, fromPos, targetPos, parent, childIndex, scale, range, lastOne, arg);
        return img;
    }

    public tweenImagesEvent(pkgName: string, resName: string, count: number, fromPos: Laya.Point, targetPos: Laya.Point, parent: fgui.GComponent, scale: number = 1, arg?: any): void {
        for (let i: number = 0; i < count; i++) {
            Laya.timer.once(i * 30, this, this.tweenImage, [pkgName, resName, fromPos, targetPos, parent, -1, scale, 160, true, arg], false);
        }
    }

    public tweenImages(pkgName: string, resName: string, count: number, fromPos: Laya.Point, targetPos: Laya.Point, parent: fgui.GComponent, scale: number = 1): void {
        let lastOne;
        for (let i: number = 0; i < count; i++) {
            lastOne = i == (count - 1) ? true : false;
            Laya.timer.once(i * 30, this, this.tweenImage, [pkgName, resName, fromPos, targetPos, parent, -1, scale, 160, lastOne], false);
        }
    }

    public createFlyUnit(unit: fgui.GObject, fromPos: Laya.Point | Laya.Vector3 | Laya.Vector2
        , targetPos: Laya.Point | Laya.Vector3 | Laya.Vector2, parent: fgui.GComponent
        , childIndex: number = -1, scale: number = 1, range: number = 160, lastOne: boolean = true, arg: any): void {
        unit.setScale(scale, scale);
        unit.x = fromPos.x - unit.width / 2;
        unit.y = fromPos.y - unit.height / 2;
        childIndex = childIndex == -1 ? parent.numChildren : childIndex;
        parent.addChildAt(unit, childIndex);
        let x: number = fromPos.x + range * (Math.random() - .5);
        let y: number = fromPos.y + range * (Math.random() - .5);
        Laya.Tween.to(unit, { x: x, y: y, scaleX: scale, scaleY: scale }, 600, Laya.Ease.cubicInOut, Laya.Handler.create(this, () => {
            Laya.timer.once(200, this, () => {
                let s = scale * 10 * .8 / 10;
                let tX = targetPos.x - unit.width * s / 2;
                // let tY = targetPos.y + (unit.content ? (unit.content as Laya.Image).height / 2 : 0);
                Laya.Tween.to(unit, { x: tX, y: targetPos.y, scaleX: s, scaleY: s }, 500, Laya.Ease.linearOut, Laya.Handler.create(this, this.moveToTargetPosEnd, [unit, lastOne, arg]));
            })
        }));
    }

    private moveToTargetPosEnd(unit: fgui.GObject, lastOne: boolean = false, arg: any): void {
        if (unit.parent)
            unit.parent.removeChild(unit);
        if (lastOne)
            this.event(unit.packageItem.owner.name + unit.packageItem.name, arg);
        unit.dispose();
    }
}