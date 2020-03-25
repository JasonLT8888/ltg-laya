import LTDictionary from "./LTDictionary";

export default class LTObjPool {

    private static _instance : LTObjPool;
    public static get instance() : LTObjPool {
        if(this._instance == null) {
            this._instance = new LTObjPool();
        }
        return this._instance;
    }

    private _objMap : LTDictionary<string, LTObjPoolItem>;

    constructor() {
        this._objMap = new LTDictionary<string, LTObjPoolItem>();
    }

    public InitObjPool(keyName : string, obj : Laya.Sprite3D) {
        if(this._objMap.ContainsKey(keyName)) {
            console.error("对象池中已存在重复key:" + keyName);
            return;
        }
        var newItem = new LTObjPoolItem();
        newItem.sampleObj = obj;
        this._objMap.Add(keyName, newItem);
        // console.log("对象池:" + keyName + "初始化完成");
    }

    public GetObj(keyName : string) : Laya.Sprite3D {
        var getItem = this._objMap.Get(keyName);
        if(getItem == null) {
            console.error("对象池中不存在key:" + keyName);
            return null;
        }
        return getItem.GenNew();
    }

    public ReturnObj(keyName : string, obj : Laya.Sprite3D) {
        var getItem = this._objMap.Get(keyName);
        if(getItem == null) {
            console.error("对象池中不存在key:" + keyName);
            obj.destroy();
            return;
        }
        getItem.ReturnObj(obj);
    }

}

class LTObjPoolItem {

    public sampleObj : Laya.Sprite3D;
    public maxCount : number;
    private _cacheList : Laya.Sprite3D[];

    constructor() {
        this._cacheList = [];
        this.maxCount = 50;
    }

    public GenNew() : Laya.Sprite3D {
        if(this._cacheList.length > 0) {
            return this._cacheList.pop();
        }
        return Laya.Sprite3D.instantiate(this.sampleObj);
    }

    public ReturnObj(obj : Laya.Sprite3D) {
        if(this._cacheList.length >= this.maxCount) {
            obj.destroy(true);
        } else {
            this._cacheList.push(obj);
        }
    }

}