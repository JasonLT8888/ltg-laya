export enum EPackResolveType {

    /**
     * 自动生成game.js,配置json等
     */
    AutoSearch,
    /**
     * 全打入包内,不生成game.js,也不生成json等
     */
    AllIn,
    /**
     * 全放cdn,不生成game.js,也不生成json等
     */
    AllOut

}