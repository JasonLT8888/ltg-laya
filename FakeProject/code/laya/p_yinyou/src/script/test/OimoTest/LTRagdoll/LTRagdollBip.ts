import { OimoHelper } from "../../../../LTGame/Physics/OimoHelper";

export class LTRagdollBip {

    public rig: OIMO.RigidBody;
    public trans: Laya.Transform3D;

    public SyncFromRig() {
        OimoHelper.SyncTransFromRig(this.trans, this.rig);
    }
}