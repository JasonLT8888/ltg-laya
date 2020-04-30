export class LoadPackConfig {

    public name: string;
    public path: string;
    public pathType: EPackType;

}

export enum EPackType {
    MainPack = 1,
    SubPack = 2,
    Remote = 3
}