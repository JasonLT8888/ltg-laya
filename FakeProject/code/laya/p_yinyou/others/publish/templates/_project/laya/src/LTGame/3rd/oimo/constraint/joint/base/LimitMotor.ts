import { Vec3 } from "../../../math/Vec3";

export class LimitMotor {
    LimitMotor: true;

    axis: Vec3;
    angle: number;
    lowerLimit: number;
    upperLimit: number;
    motorSpeed: number;
    maxMotorForce: number;
    frequency: number;
    dampingRatio: number;

    constructor(axis: Vec3, fixed: boolean) {
        fixed = fixed || false;
        // The axis of the constraint.
        this.axis = axis;
        // The current angle for rotational constraints.
        this.angle = 0;
        // The lower limit. Set lower > upper to disable
        this.lowerLimit = fixed ? 0 : 1;

        //  The upper limit. Set lower > upper to disable.
        this.upperLimit = 0;
        // The target motor speed.
        this.motorSpeed = 0;
        // The maximum motor force or torque. Set 0 to disable.
        this.maxMotorForce = 0;
        // The frequency of the spring. Set 0 to disable.
        this.frequency = 0;
        // The damping ratio of the spring. Set 0 for no damping, 1 for critical damping.
        this.dampingRatio = 0;
    }

    // Set limit data into this constraint.
    setLimit(lowerLimit, upperLimit) {

        this.lowerLimit = lowerLimit;
        this.upperLimit = upperLimit;

    }

    // Set motor data into this constraint.
    setMotor(motorSpeed, maxMotorForce) {

        this.motorSpeed = motorSpeed;
        this.maxMotorForce = maxMotorForce;

    }

    // Set spring data into this constraint.
    setSpring(frequency, dampingRatio) {

        this.frequency = frequency;
        this.dampingRatio = dampingRatio;

    }

}