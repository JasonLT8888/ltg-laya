import { CollisionDetector } from "./CollisionDetector";

export class SphereSphereCollisionDetector extends CollisionDetector {


    detectCollision(shape1, shape2, manifold) {

        var s1 = shape1;
        var s2 = shape2;
        var p1 = s1.position;
        var p2 = s2.position;
        var dx = p2.x - p1.x;
        var dy = p2.y - p1.y;
        var dz = p2.z - p1.z;
        var len = dx * dx + dy * dy + dz * dz;
        var r1 = s1.radius;
        var r2 = s2.radius;
        var rad = r1 + r2;
        if (len > 0 && len < rad * rad) {
            len = Math.sqrt(len);
            var invLen = 1 / len;
            dx *= invLen;
            dy *= invLen;
            dz *= invLen;
            manifold.addPoint(p1.x + dx * r1, p1.y + dy * r1, p1.z + dz * r1, dx, dy, dz, len - rad, false);
        }

    }

}