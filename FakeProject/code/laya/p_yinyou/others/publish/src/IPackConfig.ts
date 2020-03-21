import { EPackResolveType } from "EPackResolveType";

export interface IPackConfig {

    appid: string,
    bannerId: string,
    rewardVideoId: string;
    interstitialId: string;
    forceRemote: string[],
    forceInPack: string[],
    maxSinglePackSize: number,
    maxTotalPackSize: number,
    packType: EPackResolveType,
    compress: boolean

}