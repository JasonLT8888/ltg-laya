import { IDevice } from "./IDevice";

export default class DefaultDevice implements IDevice {

    Vibrate(isLong: boolean) {
        console.log("调用震动", isLong);
    }

}