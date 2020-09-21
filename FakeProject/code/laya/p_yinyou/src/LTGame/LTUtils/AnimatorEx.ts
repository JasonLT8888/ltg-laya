import Awaiters from "../Async/Awaiters";

export class AnimatorEx {

    public static async WaitPlayEnd(animator: Laya.Animator, animName: string = null, times: number = 1) {
        if (animName != null) {
            animator.play(animName);
        }
        await Awaiters.NextFrame();
        while (animator.getCurrentAnimatorPlayState().normalizedTime < 1) {
            await Awaiters.NextFrame();
        }
    }
    
    static GetStates(animator: Laya.Animator, layerIndex: number = 0): Laya.AnimatorState[] {
        return animator['_controllerLayers'][layerIndex]['_states'];
    }

    static GetStateByName(animator: Laya.Animator, stateName: string, layerIndex: number = 0): Laya.AnimatorState {
        let allStates = this.GetStates(animator, layerIndex);
        if (allStates == null) {
            console.error("获取动画状态出错", animator);
            return null;
        }
        for (let state of allStates) {
            if (state.name == stateName) {
                return state;
            }
        }
        console.warn("动画中不存在指定state", animator, stateName);
        return null;
    }

    static IsPlayEnd(animator: Laya.Animator): boolean {
        return animator.getCurrentAnimatorPlayState().normalizedTime >= 1;
    }
}