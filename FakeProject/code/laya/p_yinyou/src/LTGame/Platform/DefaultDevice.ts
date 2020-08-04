import { IDevice } from "./IDevice";

export default class DefaultDevice implements IDevice {

    Vibrate(isLong: boolean) {
        console.log("调用震动", isLong);
    }

}
export class OppoDevice implements IDevice {
    base: any;
    constructor() {
        this.base = qg;
        console.log('QGDIVCE INIT', this.base)
    }

    Vibrate(isLong: boolean) {
        console.log('调用振动', isLong);
        if (this.base) {
            if (isLong) {
                this.base.vibrateLong({
                    success: (res?: any) => {
                        console.log('振动')
                    },
                    fail: (res?: any) => { console.log('振动失败') },
                    complete: (res?: any) => { }
                })

            } else {
                this.base.vibrateShort({
                    success: (res?: any) => { console.log('短振动') },
                    fail: (res?: any) => { console.log('短振动失败') },
                    complete: (res?: any) => { }
                });
            }
        }
    }
}
export class VivoDevice implements IDevice {
    base: any;
    constructor() {
        this.base = qg;
        console.log('QGDIVCE INIT', this.base)
    }

    Vibrate(isLong: boolean) {
        console.log('调用振动', isLong);
        if (this.base) {
            if (isLong) {
                this.base.vibrateLong();

            } else {
                this.base.vibrateShort();
            }
        }
    }
}