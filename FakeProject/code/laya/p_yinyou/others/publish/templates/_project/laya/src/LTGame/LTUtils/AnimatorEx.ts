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

}