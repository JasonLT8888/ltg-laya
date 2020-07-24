export class Constraint {
    Constraint: true;

    parent: any;
    body1: any;
    body2: any;
    addedToIsland: boolean;

    constructor() {
        // parent world of the constraint.
        this.parent = null;

        // first body of the constraint.
        this.body1 = null;

        // second body of the constraint.
        this.body2 = null;

        // Internal
        this.addedToIsland = false;
    }

    // Prepare for solving the constraint
    preSolve(timeStep: number, invTimeStep: number) {

        console.error("Constraint", "Inheritance error.");

    }

    // Solve the constraint. This is usually called iteratively.
    solve() {

        console.error("Constraint", "Inheritance error.");

    }

    // Do the post-processing.
    postSolve() {

        console.error("Constraint", "Inheritance error.");

    }

}