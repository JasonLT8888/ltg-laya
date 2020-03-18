
/**
 * 基本UI类,提供一些辅助方法
 */
export default class LTUI extends Laya.Script {

    public sortOrder = 10;
    public openData: any;

    public get visible(): boolean {
        return (this.owner as Laya.UIComponent).visible;
    }

    public set visible(value: boolean) {
        if ((this.owner as Laya.UIComponent).visible == value) return;
        (this.owner as Laya.UIComponent).visible = value;
        if (value) {
            this.onVisible();
        } else {
            this.onUnvisible();
        }
    }

    public get visibleInScene(): boolean {
        if (!this.visible) return false;
        var parent = this.owner.parent as Laya.UIComponent;
        while (parent != null) {
            if (!parent.visible) return false;
            parent = parent.parent as Laya.UIComponent;
        }
        return true;
    }

    public FindChild(pathName: string): any {
        if (pathName == "") return this.owner;
        var splitPath = pathName.split("/");
        return LTUI._FindChild(splitPath, this.owner, 0);
    }

    public FindCMP(pathName: string, cmp): any {
        var findChild = this.FindChild(pathName) as Laya.Node;
        if (findChild == null) return null;
        if (findChild instanceof cmp) {
            return findChild;
        }
        var findCmp = findChild.getComponent(cmp);
        if (findCmp == null) {
            console.log(findChild, "上不存在组件:" + cmp);
        }
        return findCmp;
    }

    public HideUI() {
        this.owner.parent.removeChild(this.owner);
    }

    protected onVisible() {

    }

    protected onUnvisible() {

    }

    onUpdate() {
        if (this.visibleInScene) {
            this._OnUpdate();
        }
    }

    protected _OnUpdate() {

    }

    private static _FindChild(nodeName: string[], currentNode: Laya.Node, currentLevel: number): Laya.Node {
        var findChild = currentNode.getChildByName(nodeName[currentLevel]);
        if (findChild == null) {
            console.log(currentNode + "下不存在节点:" + nodeName[currentLevel]);
            return null;
        }
        if (currentLevel + 1 == nodeName.length) {
            return findChild;
        } else {
            return LTUI._FindChild(nodeName, findChild, currentLevel + 1);
        }
    }

}