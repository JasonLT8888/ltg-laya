import { EPackResolveType } from "./EPackResolveType";

export class LTPackConfig {

    platform: string = "";
    appid: string = "";
    bannerId: string = "";
    rewardVideoId: string = "";
    interstitialId: string = "";
    forceRemote: string[] = ["res/config"];
    forceInPack: string[] = ["res/fgui_load"];
    maxSinglePackSize: number = 4;
    maxTotalPackSize: number = 8;
    packType: EPackResolveType = EPackResolveType.AutoSearch;
    compress: boolean = true;
    es5: boolean = false;
    isDebug: boolean = false;

}