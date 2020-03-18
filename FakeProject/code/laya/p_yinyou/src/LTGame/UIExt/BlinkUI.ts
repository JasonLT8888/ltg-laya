export default class BlinkUI extends Laya.Script {

    /**
     * @prop {name:displayTime, tips:"单位:ms", type:int, default = 800}
     */
    public displayTime : number = 1000;
    /**
     * @prop {name:hideTime, tips:"单位:ms", type:int, default = 400}
     */
    public hideTime : number = 500;

    private _stepTime : number;


    onStart() {
        this._stepTime = 0;
        (this.owner as Laya.UIComponent).visible = true;
    }

    onUpdate() {
        this._stepTime += Laya.timer.delta;
        var checkTime = (this.owner as Laya.UIComponent).visible ? this.displayTime : this.hideTime;
        if(this._stepTime > checkTime) {
            (this.owner as Laya.UIComponent).visible = !(this.owner as Laya.UIComponent).visible;
            this._stepTime = 0;
        }
    }

}