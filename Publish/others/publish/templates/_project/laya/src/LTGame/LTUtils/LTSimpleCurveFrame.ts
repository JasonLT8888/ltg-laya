export default class LTSimpleCurveFrame {

    public inTangent : number;
    public value : number;
    public outTangent : number;

    constructor(value : number, inTangent : number, outTangent : number) {
        this.inTangent = inTangent;
        this.value = value;
        this.outTangent = outTangent;
    }
}