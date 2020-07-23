import { ManifoldPoint } from "./ManifoldPoint";

export class ContactManifold {
    body1: any;
    body2: any;
    numPoints: number;
    points: any[];

    constructor() {
        // The first rigid body.
        this.body1 = null;
        // The second rigid body.
        this.body2 = null;
        // The number of manifold points.
        this.numPoints = 0;
        // The manifold points.
        this.points = [
            new ManifoldPoint(),
            new ManifoldPoint(),
            new ManifoldPoint(),
            new ManifoldPoint()
        ];
    }

    //Reset the manifold.
    reset(shape1, shape2) {

        this.body1 = shape1.parent;
        this.body2 = shape2.parent;
        this.numPoints = 0;

    }

    //  Add a point into this manifold.
    addPointVec(pos, norm, penetration, flip) {

        var p = this.points[this.numPoints++];

        p.position.copy(pos);
        p.localPoint1.sub(pos, this.body1.position).applyMatrix3(this.body1.rotation);
        p.localPoint2.sub(pos, this.body2.position).applyMatrix3(this.body2.rotation);

        p.normal.copy(norm);
        if (flip) p.normal.negate();

        p.normalImpulse = 0;
        p.penetration = penetration;
        p.warmStarted = false;

    }

    //  Add a point into this manifold.
    addPoint(x, y, z, nx, ny, nz, penetration, flip) {

        var p = this.points[this.numPoints++];

        p.position.set(x, y, z);
        p.localPoint1.sub(p.position, this.body1.position).applyMatrix3(this.body1.rotation);
        p.localPoint2.sub(p.position, this.body2.position).applyMatrix3(this.body2.rotation);

        p.normalImpulse = 0;

        p.normal.set(nx, ny, nz);
        if (flip) p.normal.negate();

        p.penetration = penetration;
        p.warmStarted = false;

    }

}