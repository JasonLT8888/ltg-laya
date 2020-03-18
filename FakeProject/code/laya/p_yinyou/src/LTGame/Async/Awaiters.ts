export default class Awaiters {

    public static NextFrame(): Promise<void> {
        // 一帧有可能刚好当帧执行,这里跳两帧
        return this.Frames(2);
    }

    public static Frames(num: number): Promise<void> {
        return new Promise(function (resolve) {
            Laya.timer.frameOnce(num, null, () => {
                resolve();
            })
        });
    }

    public static Seconds(num: number): Promise<void> {
        return new Promise(function (resolve) {
            Laya.timer.once(num * 1000, null, () => {
                resolve();
            })
        });
    }

}