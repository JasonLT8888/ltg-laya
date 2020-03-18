export class LoadPackConfig {

    public path: string;
    public pathType: EPackType;

    constructor(path: string, pathType: EPackType) {
        this.path = path;
        this.pathType = pathType;
    }
}

export enum EPackType {
    MainPack = 1,
    SubPack = 2,
    Remote = 3
}