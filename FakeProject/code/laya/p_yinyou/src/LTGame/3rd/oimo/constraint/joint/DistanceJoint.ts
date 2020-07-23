import { Joint } from "./Joint";
import { JointConfig } from "./JointConfig";
import { JOINT_DISTANCE } from "../../constants";
import { Vec3 } from "../../math/Vec3";
import { LimitMotor } from "./base/LimitMotor";
import { TranslationalConstraint } from "./base/TranslationalConstraint";

export class DistanceJoint extends Joint {
    nor: Vec3;
    limitMotor: LimitMotor;
    t: TranslationalConstraint;

    constructor(config: JointConfig, minDistance: number, maxDistance: number) {
        super(config);
        this.type = JOINT_DISTANCE;

        this.nor = new Vec3();

        // The limit and motor information of the joint.
        this.limitMotor = new LimitMotor(this.nor, true);
        this.limitMotor.lowerLimit = minDistance;
        this.limitMotor.upperLimit = maxDistance;

        this.t = new TranslationalConstraint(this, this.limitMotor);
    }

    preSolve(timeStep, invTimeStep) {

        this.updateAnchorPoints();

        this.nor.sub(this.anchorPoint2, this.anchorPoint1).normalize();

        // preSolve

        this.t.preSolve(timeStep, invTimeStep);

    }

    solve() {

        this.t.solve();

    }

    postSolve() {

    }

}