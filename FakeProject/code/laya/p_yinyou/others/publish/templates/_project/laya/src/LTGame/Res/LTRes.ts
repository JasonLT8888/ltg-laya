export default class LTRes {

    public static Load(urls: string | string[], onCompleted: Laya.Handler, onProgress: Laya.Handler = null) {
        Laya.loader.create(urls, onCompleted, onProgress);
    }

    public static Load2d(urls: string | string[], onCompleted: Laya.Handler, onProgress: Laya.Handler = null) {
        Laya.loader.load(urls, onCompleted, onProgress);
    }

    public static LoadAsync(urls: string | string[], onProgress: Laya.Handler = null): Promise<void> {
        return new Promise(function (resolve) {
            LTRes.Load(urls, Laya.Handler.create(null, () => {
                resolve();
            }), onProgress);
        });
    }

    public static Load2dAsync(urls: string | string[], onProgress: Laya.Handler = null): Promise<void> {
        return new Promise(function (resolve) {
            LTRes.Load2d(urls, Laya.Handler.create(null, () => {
                resolve();
            }), onProgress);
        });
    }

    public static Get(resUrl: string, noClone: boolean = false): any {
        let getRes = Laya.loader.getRes(resUrl);
        if (getRes == null) {
            console.error("资源尚未加载", resUrl);
            return null;
        }
        return noClone ? getRes : getRes.clone();
    }

}