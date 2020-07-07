import Vector3Ex from "../LTUtils/Vector3Ex";
import { LTBlinnPhong_HeightFog } from "./LTBlinnPhong_HeightFog";
import { LTUnlit_HeightFog } from "./LTUnlit_HeightFog";

export class HeightFogManager {

    private static _instance: HeightFogManager;
    public static get instance(): HeightFogManager {
        if (this._instance == null) {
            this._instance = new HeightFogManager();
        }
        return this._instance;
    }

    private _fogColor: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
    public get fogColor(): Laya.Vector3 {
        return this._fogColor;
    }
    public set fogColor(value: Laya.Vector3) {
        if (Vector3Ex.IsSame(this._fogColor, value)) return;
        this._fogColor = value;

        for (let i = 0; i < this._matList.length; ++i) {
            let mat = this._matList[i];
            if (mat != null) {
                mat.heightFogColor = this._fogColor;
            }
        }
    }

    private _fogStartHeight: number = 5;
    public get fogStartHeight(): number {
        return this._fogStartHeight;
    }
    public set fogStartHeight(value: number) {
        if (this._fogStartHeight == value) return;
        this._fogStartHeight = value;

        for (let i = 0; i < this._matList.length; ++i) {
            let mat = this._matList[i];
            if (mat != null) {
                mat.heightFogStartY = this._fogStartHeight;
            }
        }
    }

    private _fogDistance: number = 5;
    public get fogDistance(): number {
        return this._fogDistance;
    }
    public set fogDistance(value: number) {
        if (this._fogDistance == value) return;
        this._fogDistance = value;

        for (let i = 0; i < this._matList.length; ++i) {
            let mat = this._matList[i];
            if (mat != null) {
                mat.heightFogDistance = this._fogDistance;
            }
        }
    }

    private _matList: LTBlinnPhong_HeightFog[] | LTUnlit_HeightFog[];

    private constructor() {
        this._matList = [];
    }

    public RegistFogMat(mat: LTBlinnPhong_HeightFog | LTUnlit_HeightFog) {
        this._matList.push(mat as any);
        mat.heightFogColor = this._fogColor;
        mat.heightFogStartY = this._fogStartHeight;
        mat.heightFogDistance = this._fogDistance;
    }

}