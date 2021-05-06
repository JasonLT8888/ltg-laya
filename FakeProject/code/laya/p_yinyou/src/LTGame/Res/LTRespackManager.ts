import { LoadPackConfig, EPackType } from "../Config/LoadPackConfig";
import StringEx from "../LTUtils/StringEx";
import LTPlatform from "../Platform/LTPlatform";
import { EPlatformType } from "../Platform/EPlatformType";

export default class LTRespackManager {

    private static _instance: LTRespackManager;
    public static get instance(): LTRespackManager {
        if (this._instance == null) {
            this._instance = new LTRespackManager();
        }
        return this._instance;
    }

    private _packs: LoadPackConfig[];
    public get packs(): LoadPackConfig[] {
        return this._packs;
    }

    private _baseUrl: string;
    public get baseUrl(): string {
        return this._baseUrl;
    }

    private _subpackLoaded: boolean[];
    private _subpackProgress: number[];

    private get _totalProgress(): number {
        let total = this._subpackProgress.length;
        let loaded = 0;
        for (let singlProgress of this._subpackProgress) {
            loaded += singlProgress;
        }
        return loaded / total;
    }

    constructor() {
        this._packs = [];
    }

    public InitLoadSet() {
        if (StringEx.IsNullOrEmpty(this._baseUrl)) return;
        let adapter = null;
        switch (LTPlatform.instance.platform) {
            case EPlatformType.TT:
                adapter = Laya.TTMiniAdapter;
                break;
            case EPlatformType.WX:
            case EPlatformType.KS:
                adapter = Laya.MiniAdpter;
                break;
            case EPlatformType.BD:
                adapter = Laya.BMiniAdapter;
                break;
            case EPlatformType.QQ:
                adapter = Laya.QQMiniAdapter;
                break;
            case EPlatformType.Oppo:
                adapter = Laya.QGMiniAdapter;
                break;
            case EPlatformType.Vivo:
                adapter = Laya.VVMiniAdapter;
                break;
            // case EPlatformType.KS:
            //     let remoteFiles = [];
            //     for (let pack of this._packs) {
            //         if (pack.pathType == EPackType.Remote) {
            //             remoteFiles.push(pack.path);
            //         }
            //     }
            //     window["baseUrl"] = this._baseUrl;
            //     window["remoteFiles"] = remoteFiles;
            //     break;
        }
        if (adapter == null) return;
        Laya.URL.basePath = this._baseUrl;
        adapter.nativefiles = [];
        for (let pack of this._packs) {
            if (pack.pathType != EPackType.Remote) {
                adapter.nativefiles.push(pack.path);
            }
        }
    }

    public SetRemoteUrl(baseUrl: string) {
        this._baseUrl = baseUrl;
    }

    public AddPackData(...packDatas: LoadPackConfig[]) {
        packDatas.forEach(packData => {
            this._packs.push(packData);
        });
    }

    public LoadSubPack(onComplete: Laya.Handler, onProgress: Laya.Handler) {

        this._subpackLoaded = [];
        this._subpackProgress = [];
        for (let i = 0; i < this._packs.length; ++i) {
            let pack = this._packs[i];
            if (pack.pathType == EPackType.SubPack) {
                this._subpackLoaded.push(false);
                this._subpackProgress.push(0);
            }
        }

        let reIndex = 0;
        for (let i = 0; i < this._packs.length; ++i) {
            let pack = this._packs[i];
            if (pack.pathType == EPackType.SubPack) {
                let cacheIndex = reIndex;
                LTPlatform.instance.LoadSubpackage(pack.name, Laya.Handler.create(this, () => {
                    this._subpackLoaded[cacheIndex] = true;

                    for (let i = 0; i < this._subpackLoaded.length; ++i) {
                        if (!this._subpackLoaded[i]) return;
                    }

                    if (onComplete) {
                        onComplete.run();
                    }

                }), Laya.Handler.create(this, () => {
                    console.error("分包加载失败", pack);
                }), Laya.Handler.create(this, (value) => {
                    this._subpackProgress[cacheIndex] = value;

                    if (onProgress) {
                        onProgress.runWith(this._totalProgress);
                    }
                }, null, false));
                reIndex++;
            }
        }

        if (reIndex == 0) {
            onProgress.runWith(1);
            if (onComplete) {
                onComplete.run();
            }
        }

    }

}