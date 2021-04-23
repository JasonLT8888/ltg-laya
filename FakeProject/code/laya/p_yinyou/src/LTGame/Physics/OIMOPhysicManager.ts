export class OIMOPhysicManager {

    public static instance: OIMOPhysicManager;

    public static CreateInstance() {
        if (this.instance == null) {
            this.instance = new OIMOPhysicManager();
        }
    }

    public world: OIMO.World;

    private _closestRaycastHandle: RaycastMaskClosest;
    private _raycastHandle: RaycastMask;
    private _cacheRayStart: OIMO.Vec3;
    private _cacheRayEnd: OIMO.Vec3;

    private constructor() {
        this._raycastHandle = new RaycastMask();
        this._cacheRayStart = new OIMO.Vec3();
        this._cacheRayEnd = new OIMO.Vec3();
        this._closestRaycastHandle = new RaycastMaskClosest();
    }

    public InitWorld() {
        this.world = new OIMO.World(OIMO.BroadPhaseType.BVH, new OIMO.Vec3(0, -9.8, 0));
        this.world.setNumPositionIterations(1);
        this.world.setNumVelocityIterations(2);
        // console.log(this.world);
    }

    public Step(dt: number) {
        this.world.step(dt);
    }

    public RaycastCloset(ray: Laya.Ray, distance: number, mask: number): RaycastMaskClosest {
        this._closestRaycastHandle.clear();
        this._closestRaycastHandle.mask = mask;
        this._cacheRayStart.init(ray.origin.x, ray.origin.y, ray.origin.z);
        this._cacheRayEnd.init(ray.origin.x + ray.direction.x * distance,
            ray.origin.y + ray.direction.y * distance,
            ray.origin.z + ray.direction.z * distance);
        this.world.rayCast(this._cacheRayStart, this._cacheRayEnd, this._closestRaycastHandle);
        return this._closestRaycastHandle;
    }

    public RaycastClosetFromTo(from: Laya.Vector3, to: Laya.Vector3, mask: number): RaycastMaskClosest {
        this._closestRaycastHandle.clear();
        this._closestRaycastHandle.mask = mask;
        this._cacheRayStart.init(from.x, from.y, from.z);
        this._cacheRayEnd.init(to.x, to.y, to.z);
        this.world.rayCast(this._cacheRayStart, this._cacheRayEnd, this._closestRaycastHandle);
        return this._closestRaycastHandle;
    }

    public RaycastAll(ray: Laya.Ray, distance: number, mask: number, onHit: Laya.Handler) {
        this._raycastHandle.onHit = onHit;
        this._raycastHandle.mask = mask;

        this._cacheRayStart.init(ray.origin.x, ray.origin.y, ray.origin.z);
        this._cacheRayEnd.init(ray.origin.x + ray.direction.x * distance,
            ray.origin.y + ray.direction.y * distance,
            ray.origin.z + ray.direction.z * distance);
        this.world.rayCast(this._cacheRayStart, this._cacheRayEnd, this._raycastHandle);
    }

    public RaycastAllFromTo(from: Laya.Vector3, to: Laya.Vector3, mask: number, onHit: Laya.Handler) {
        this._raycastHandle.onHit = onHit;
        this._raycastHandle.mask = mask;

        this._cacheRayStart.init(from.x, from.y, from.z);
        this._cacheRayEnd.init(to.x, to.y, to.z);
        this.world.rayCast(this._cacheRayStart, this._cacheRayEnd, this._raycastHandle);
    }

}

class RaycastMaskClosest extends OIMO.RayCastCallback {
    /**
	 * The shape the ray hit.
	 */
    shape: OIMO.Shape;

	/**
	 * The position the ray hit at.
	 */
    position: OIMO.Vec3;

	/**
	 * The normal vector of the surface the ray hit.
	 */
    normal: OIMO.Vec3;

	/**
	 * The ratio of the position the ray hit from the start point to the end point.
	 */
    fraction: number;

	/**
	 * Whether the ray hit any shape in the world.
	 */
    hit: boolean;

    /**
     * 筛选mask
     */
    mask: number;

    /**
	 * Default constructor.
	 */
    constructor() {
        super();
        this.position = new OIMO.Vec3();
        this.normal = new OIMO.Vec3();
        this.clear();
    }

    /**
	 * Clears the result data.
	 */
    public clear(): void {
        this.shape = null;
        this.fraction = Number.MAX_SAFE_INTEGER;
        this.position.zero();
        this.normal.zero();
        this.hit = false;
    }

    public process(shape: OIMO.Shape, hit: OIMO.RayCastHit): void {
        if (hit.fraction < this.fraction && (shape.getCollisionGroup() & this.mask) > 0) {
            this.shape = shape;
            this.hit = true;
            this.fraction = hit.fraction;
            this.position.copyFrom(hit.position);
            this.normal.copyFrom(hit.normal);
        }
    }
}

class RaycastMask extends OIMO.RayCastCallback {
    /**
     * 筛选mask
     */
    mask: number;

    /**
     * @shape OIMO.Shape
     * @hit OIMO.RayCastHit
     */
    onHit: Laya.Handler;

    constructor() {
        super();
    }

    public process(shape: OIMO.Shape, hit: OIMO.RayCastHit): void {
        if ((shape.getCollisionGroup() & this.mask) > 0) {
            this.onHit?.runWith([shape, hit]);
        }
    }
}