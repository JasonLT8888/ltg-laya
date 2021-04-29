export class P2Manager {

    private static _instance: P2Manager;

    public static get instance(): P2Manager {
        return this._instance;
    }

    public static CreateInstance() {
        this._instance = new P2Manager();
    }

    private _world: p2.World;

    public get world(): p2.World {
        return this._world;
    }

    private constructor() {

    }

    public InitWorld() {
        this._world = new p2.World();
        this._world.doProfiling = false;
        this._world.gravity = [0, 0];
    }

    public Step(dt: number) {
        this._world.step(dt);
    }

    public CreateCircleBody(radius: number, pos: Laya.Vector3, mass: number = 1, isXZ: boolean = true): p2.Body {
        let body = new p2.Body({
            mass: mass,
            position: [pos.x, isXZ ? pos.z : pos.y]
        });
        let circleShape = new p2.Circle({ radius: radius });
        body.addShape(circleShape);
        body.inertia = 0;
        body.allowSleep = true;
        body.damping = 0;
        return body;
    }

    public CreateBoxBody(size: Laya.Vector3, pos: Laya.Vector3, yaw: number, mass: number = 1, isXZ: boolean = true): p2.Body {
        let body = new p2.Body({
            mass: mass,
            position: [pos.x, isXZ ? pos.z : pos.y]
        });

        let shape = new p2.Box({ width: size.x, height: isXZ ? size.z : size.y });
        body.addShape(shape);

        body.inertia = 0;
        body.allowSleep = false;
        body.damping = 0;
        return body;
    }

    public CreateStaticCircle(radius: number, pos: Laya.Vector3, isXZ: boolean = true): p2.Body {
        let body = new p2.Body({
            position: [pos.x, isXZ ? pos.z : pos.y]
        });
        let circleShape = new p2.Circle({ radius: radius });
        body.addShape(circleShape);
        body.type = p2.Body.STATIC;
        return body;
    }

    public CreateStaticBox(size: Laya.Vector3, pos: Laya.Vector3, yaw: number, isXZ: boolean = true): p2.Body {
        let body = new p2.Body({
            position: [pos.x, isXZ ? pos.z : pos.y]
        });
        let shape = new p2.Box({ width: size.x, height: isXZ ? size.z : size.y });
        body.addShape(shape);
        body.type = p2.Body.STATIC;
        body.angle = yaw;
        return body;
    }

    public AddBody(body: p2.Body) {
        this._world.addBody(body);
    }

    public RemoveBody(body: p2.Body) {
        this._world.removeBody(body);
    }

    private _cachePos: Laya.Vector3 = new Laya.Vector3();
    public SyncTransFromRigXZ(trans: Laya.Transform3D, rig: p2.Body) {
        let pos = rig.position;
        this._cachePos.setValue(pos[0], trans.position.y, pos[1]);
        trans.position = this._cachePos;
    }

    public SyncTransToRigXY(trans: Laya.Transform3D, rig: p2.Body) {
        rig.position[0] = trans.position.x;
        rig.position[1] = trans.position.y;
    }

}