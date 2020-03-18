import { EPackResolveType } from "EPackResolveType";

export interface IPackConfig {

    appid: string,
    forceRemote: string[],
    forceInPack: string[],
    maxSinglePackSize: number,
    maxTotalPackSize: number,
    packType: EPackResolveType

}