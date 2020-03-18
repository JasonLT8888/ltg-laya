export default class TriggerCMP extends Laya.Script3D {

    public triggerEnterAction : Laya.Handler;

    onTriggerEnter(other : Laya.PhysicsCollider) {
        if(this.triggerEnterAction!=null) {
            this.triggerEnterAction.runWith(other);
        }
    }

}