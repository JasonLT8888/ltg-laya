export default class AutoSize extends Laya.Scene {

    constructor() {
        super();
        this.width = Laya.stage.width;
        this.height = Laya.stage.height;

        console.log("AutoSize ctor()");
    }

}