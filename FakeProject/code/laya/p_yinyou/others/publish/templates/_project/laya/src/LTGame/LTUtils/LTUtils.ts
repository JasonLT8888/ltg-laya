import LTPlatform from "../Platform/LTPlatform";
import CommonSaveData from "../Commom/CommonSaveData";

export class LTUtils {

    public static CachFile(url: string) {
        if (!Laya.Browser.onWeiXin) return;
        var fullUrl = Laya.URL.formatURL(url);
        var fileInfo = Laya.MiniAdpter.getFileInfo(fullUrl);
        if (fileInfo == null) {
            Laya.MiniAdpter.downLoadFile(fullUrl);
        }
    }

    public static DownLoadFiles(urls: string[], complete?: Laya.Handler, progress?: Laya.Handler) {
        Laya.loader.create(urls, complete, progress, null, null, null, 1, true);
    }

    public static SetShadow(obj: any, castShadow: boolean, receiveShadow: boolean) {
        // 默认当meshrender处理
        let meshRenderer = obj.meshRenderer as Laya.MeshRenderer;
        if (meshRenderer != null) {
            meshRenderer.castShadow = castShadow;
            meshRenderer.receiveShadow = receiveShadow;
        }
        let skinnedMeshRenderer = obj.skinnedMeshRenderer as Laya.SkinnedMeshRenderer;
        if (skinnedMeshRenderer != null) {
            skinnedMeshRenderer.castShadow = castShadow;
            skinnedMeshRenderer.receiveShadow = receiveShadow;
        }
        let node = obj as Laya.Node;
        for (let i = 0; i < node.numChildren; ++i) {
            let getChild = node.getChildAt(i);
            this.SetShadow(getChild, castShadow, receiveShadow);
        }
    }

    public static GetComponentsInChildren(obj: Laya.Sprite3D, cmp: typeof Laya.Component): typeof Laya.Component[] {
        let result: typeof Laya.Component[] = [];
        this._GetComponentsInChildrenHelper(obj, cmp, result);
        return result;
    }

    private static _GetComponentsInChildrenHelper(obj: Laya.Sprite3D, cmp: typeof Laya.Component, result: typeof Laya.Component[]) {
        let cmps = obj.getComponents(cmp) as typeof Laya.Component[];
        if (cmps != null) {
            for (let i = 0; i < cmps.length; ++i) {
                result.push(cmps[i]);
            }
        }
        for (let i = 0; i < obj.numChildren; ++i) {
            let getChild = obj.getChildAt(i);
            this._GetComponentsInChildrenHelper(getChild as Laya.Sprite3D, cmp, result);
        }
    }

    public static EnableShadow(directionLight: Laya.DirectionLight, farDistance: number) {
        //灯光开启阴影
        directionLight.shadowMode = Laya.ShadowMode.Hard;
        //可见阴影距离
        directionLight.shadowDistance = farDistance;
        //生成阴影贴图尺寸
        directionLight.shadowResolution = 512;
        //生成阴影贴图数量
        directionLight.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;
    }

    public static FindChild(parent: Laya.Sprite3D, path: string): Laya.Sprite3D {
        if (path == "") return parent;
        var splitPath = path.split("/");
        return LTUtils._FindChild(splitPath, parent, 0) as Laya.Sprite3D;
    }

    private static _FindChild(nodeName: string[], currentNode: Laya.Node, currentLevel: number): Laya.Node {
        var findChild = currentNode.getChildByName(nodeName[currentLevel]);
        if (findChild == null) {
            console.log(currentNode, "下不存在节点:", nodeName[currentLevel]);
            return null;
        }
        if (currentLevel + 1 == nodeName.length) {
            return findChild;
        } else {
            return LTUtils._FindChild(nodeName, findChild, currentLevel + 1);
        }
    }

    private static _strMap: string[];
    /**
     * 获得金币字符串显示
     * @param num 
     */
    public static GetCoinStr(num: number): string {
        if (this._strMap == null) {
            this._strMap = ["", "K", "M", "B", "T", "Q"];
            for (let i = 0; i < 500; ++i) {
                let firstC = String.fromCharCode(Math.floor(i / 24) + 97);
                let behind = String.fromCharCode(Math.floor(i % 24) + 97);
                this._strMap.push(firstC + behind);
            }
        }
        let count = 0;
        while (num > 1000) {
            num /= 1000;
            count++;
        }
        if (count >= this._strMap.length) {
            console.error("单位表越界");
            return num.toFixed(1) + "aa"//"越界";
        }
        if (count <= 0) {
            return num.toFixed(0);
        }
        return num.toFixed(1) + this._strMap[count];
    }

    /**
     * 获得金币字符串显示
     * @param num 
     */
    public static GetCoinStr1(num: number): string {
        if (this._strMap == null) {
            this._strMap = ["", "K", "M", "B", "T", "Q"];
            for (let i = 0; i < 500; ++i) {
                let firstC = String.fromCharCode(Math.floor(i / 24) + 97);
                let behind = String.fromCharCode(Math.floor(i % 24) + 97);
                this._strMap.push(firstC + behind);
            }
        }
        let count = 0;
        while (num > 1000) {
            num /= 1000;
            count++;
        }
        if (count >= this._strMap.length) {
            console.error("单位表越界");
            return num.toFixed(1) + "aa"//"越界";
        }
        if (count <= 0) {
            return num.toFixed(0);
        }
        return num.toFixed(0) + this._strMap[count];
    }

    /**
    * 时间转换
    */
    static ONE_YEAR: number = 60 * 60 * 24 * 365;
    static ONE_DAY: number = 60 * 60 * 24;
    public static makeTimeLeftString(time: number, separator: string = ":", flag: Boolean = false): string {
        var ret: string = "";
        var hour: number;
        if (time <= 0) {
            ret = ret + "00:00";
            return ret;
        }
        if (time > LTUtils.ONE_YEAR) {
            ret = "大于一年";
            return ret;
        }
        if (flag) {
            if (time > LTUtils.ONE_DAY) {
                var day: number = Math.floor(time / LTUtils.ONE_DAY);
                ret = day + "天";
            } else if (time >= 3600) {
                hour = Math.floor(time / 3600);
                ret = hour + "时";
            } else {
                var minute: number = Math.floor(time / 60);
                if (minute < 10) ret += "0";
                ret += minute.toString() + separator;
                var second: number = time % 60;
                if (second < 10) ret += "0";
                ret += second.toString();
            }
            return ret;
        }
        if (time > LTUtils.ONE_DAY) {
            var day: number = Math.floor(time / LTUtils.ONE_DAY);
            ret = day + "天";
            time = time - day * LTUtils.ONE_DAY;
            if (flag) {
                hour = Math.floor(time / 3600);
                if (hour > 0) {
                    ret += hour + "时";
                }
                return ret;
            }
        }
        if (time <= 0) {
            ret = ret + "00:00";
            return ret;
        }
        ret = '';
        hour = Math.floor(time / 3600);
        if (hour > 0) {
            if (hour < 10) {
                ret += "0" + hour.toString() + separator;
            } else {
                ret += hour.toString() + separator;
            }
        }
        var minute: number = Math.floor((time - hour * 3600) / 60);
        if ((minute > 0) || (hour > 0)) {
            if (minute < 10) ret += "0";
            ret += minute.toString() + separator;
        } else {
            ret += "00" + separator;
        }
        var second: number = time % 60;
        if (second < 10) ret += "0";
        ret += second.toString();
        return ret;
    }

    /**
    * 获取当前天数
    */
    public static GetCurrentDayCount(tick: number) {
        let dayCount = Math.floor(tick / 1000 / 60 / 60 / 24);
        return dayCount;
    }

    /**
     * 设置层级
     * @param obj 
     * @param layerIndex 
     */
    public static SetLayer(obj: Laya.Sprite3D, layerIndex: number) {
        obj.layer = layerIndex;
        for (let i = 0; i < obj.numChildren; ++i) {
            let getChild = obj.getChildAt(i);
            this.SetLayer(getChild as Laya.Sprite3D, layerIndex);
        }
    }

    /**
     * 调用震动
     * @param isLong 是否是长震动
     */
    public static Vibrate(isLong: boolean = true) {
        if (CommonSaveData.instance.isShakeOn) {
            LTPlatform.instance.device.Vibrate(isLong);
        }
    }
}