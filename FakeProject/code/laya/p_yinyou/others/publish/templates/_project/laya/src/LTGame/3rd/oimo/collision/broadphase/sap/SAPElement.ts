import { Proxy } from "../Proxy";
import { Pair } from "../Pair";

export class SAPElement {
    proxy: Proxy;
    pair: Pair;
    min1: any;
    max1: any;
    min2: any;
    max2: any;
    max: boolean;
    value: number;

    constructor(proxy: Proxy, max: boolean) {
        // The parent proxy
        this.proxy = proxy;
        // The pair element.
        this.pair = null;
        // The minimum element on other axis.
        this.min1 = null;
        // The maximum element on other axis.
        this.max1 = null;
        // The minimum element on other axis.
        this.min2 = null;
        // The maximum element on other axis.
        this.max2 = null;
        // Whether the element has maximum value or not.
        this.max = max;
        // The value of the element.
        this.value = 0;
    }

}