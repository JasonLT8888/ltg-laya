import { AnimatorEx } from "../LTUtils/AnimatorEx";

export class LTSimpleAnimator {

    private _animators: Laya.Animator[];

    private _targetAnimName: string;
    public set targetAnimName(value: string) {
        this._targetAnimName = value;
        if (this.updateImd) {
            this.UpdateAnim();
        }
    }

    private _speed: number;
    public set speed(value: number) {
        if (this._speed == value) return;
        this._speed = value;
        for (let i = 0; i < this._animators.length; ++i) {
            this._animators[i].speed = this._speed;
        }
    }

    private _currentAnimName: string;
    public get currentAnimName(): string {
        return this._currentAnimName;
    }

    public updateImd: boolean = false;

    constructor(...animators: Laya.Animator[]) {
        this._animators = animators;
        this._speed = 1;
    }

    public UpdateAnim(force: boolean = false) {
        if (this._targetAnimName == null) return;
        if (this._currentAnimName != this._targetAnimName || force) {
            this._currentAnimName = this._targetAnimName;
            for (let animator of this._animators) {
                animator.crossFade(this._currentAnimName, 0.1);
            }
        }
    }

    public GetStateLength(stateName: string): number {
        if (this._animators.length == 0) return 0;
        let getState = AnimatorEx.GetStateByName(this._animators[0], stateName);
        if (getState == null) return 0;
        return getState.clip.duration();
    }

}