declare namespace OIMO {


    class EpaPolyhedron {
        _vertices: Array<EpaVertex>;
        _numVertices: number;
        _triangleList: EpaTriangle;
        _triangleListLast: EpaTriangle;
        _numTriangles: number;
        _trianglePool: EpaTriangle;
        _vertexPool: EpaVertex;
        _center: Vec3;
        _status: number;
        constructor();
        private pickTriangle;
        private poolTriangle;
        private setAdjacentTriangle;
        private initTriangle;
        validate(): boolean;
        findEdgeLoop(id: number, base: EpaTriangle, from: Vec3): void;
        private addTriangle;
        private removeTriangle;
        _pickVertex(): EpaVertex;
        _poolVertex(v: EpaVertex): void;
        _clear(): void;
        _init(v1: EpaVertex, v2: EpaVertex, v3: EpaVertex, v4: EpaVertex): boolean;
        _getBestTriangle(): EpaTriangle;
        _addVertex(vertex: EpaVertex, base: EpaTriangle): boolean;
    }
    
    class EpaPolyhedronState {
        static OK: number;
        static INVALID_TRIANGLE: number;
        static NO_ADJACENT_PAIR_INDEX: number;
        static NO_ADJACENT_TRIANGLE: number;
        static EDGE_LOOP_BROKEN: number;
        static NO_OUTER_TRIANGLE: number;
        static TRIANGLE_INVISIBLE: number;
    }
    
    
    
    class EpaTriangle {
        _next: EpaTriangle;
        _prev: EpaTriangle;
        _vertices: Array<EpaVertex>;
        _adjacentTriangles: Array<EpaTriangle>;
        _adjacentPairIndex: Array<number>;
        _normal: Vec3;
        _distanceSq: number;
        _nextIndex: Array<number>;
        _tmpDfsId: number;
        _tmpDfsVisible: boolean;
        tmp: Vec3;
        static count: number;
        id: number;
        constructor();
        checkVisible(id: number, from: Vec3): boolean;
        init(vertex1: EpaVertex, vertex2: EpaVertex, vertex3: EpaVertex, center: Vec3, autoCheck?: boolean): boolean;
        setAdjacentTriangle(triangle: EpaTriangle): boolean;
        removeAdjacentTriangles(): void;
        removeReferences(): void;
        dump(): void;
    }
    
    
    
    class EpaVertex {
        _next: EpaVertex;
        v: Vec3;
        w1: Vec3;
        w2: Vec3;
        _tmpEdgeLoopNext: EpaVertex;
        _tmpEdgeLoopOuterTriangle: EpaTriangle;
        randId: number;
        constructor();
        init(v: Vec3, w1: Vec3, w2: Vec3): EpaVertex;
        removeReferences(): void;
    }
    
    
    class GjkCache {
        prevClosestDir: Vec3;
        constructor();
        clear(): void;
    }
    
    
    
    
    
    
    
    
    class GjkEpa {
        c1: ConvexGeometry;
        c2: ConvexGeometry;
        tf1: Transform;
        tf2: Transform;
        static instance: GjkEpa;
        s: Array<Vec3>;
        simplexSize: number;
        w1: Array<Vec3>;
        w2: Array<Vec3>;
        tempVec3s: Array<Vec3>;
        tempTransform: Transform;
        dir: Vec3;
        closest: Vec3;
        baseDirs: Array<Vec3>;
        tl1: Vec3;
        tl2: Vec3;
        rayX: Vec3;
        rayR: Vec3;
        depth: number;
        polyhedron: EpaPolyhedron;
        closestPoint1: Vec3;
        closestPoint2: Vec3;
        distance: number;
        constructor();
        computeClosestPointsImpl(c1: ConvexGeometry, c2: ConvexGeometry, tf1: Transform, tf2: Transform, cache: CachedDetectorData, useEpa: boolean): number;
        convexCastImpl(c1: ConvexGeometry, c2: ConvexGeometry, tf1: Transform, tf2: Transform, tl1: Vec3, tl2: Vec3, hit: RayCastHit): boolean;
        interpolateClosestPoints(): void;
        loadCache(gjkCache: GjkCache): void;
        saveCache(gjkCache: GjkCache): void;
        shrinkSimplex(vertexBits: number): void;
        private computeSupportingVertex;
        private computeConvexCastSupportingVertex;
        computeWitnessPoint1(addMargin: boolean): void;
        computeWitnessPoint2(addMargin: boolean): void;
        pointToTetrahedron(): void;
        lineToTetrahedron(): void;
        triangleToTetrahedron(): void;
        isValidTetrahedron(): boolean;
        computeDepth(convex1: ConvexGeometry, convex2: ConvexGeometry, tf1: Transform, tf2: Transform, initialPolyhedron: Array<Vec3>, initialPolyhedron1: Array<Vec3>, initialPolyhedron2: Array<Vec3>): number;
        static getInstance(): GjkEpa;
        computeClosestPoints(c1: ConvexGeometry, c2: ConvexGeometry, tf1: Transform, tf2: Transform, cache: CachedDetectorData): number;
        computeDistance(c1: ConvexGeometry, c2: ConvexGeometry, tf1: Transform, tf2: Transform, cache: CachedDetectorData): number;
        convexCast(c1: ConvexGeometry, c2: ConvexGeometry, tf1: Transform, tf2: Transform, tl1: Vec3, tl2: Vec3, hit: RayCastHit): boolean;
        rayCast(c: ConvexGeometry, tf: Transform, begin: Vec3, end: Vec3, hit: RayCastHit): boolean;
    }
    
    class GjkEpaLog {
        static log(text: string): void;
        static run(func: Function): void;
    }
    
    class GjkEpaResultState {
        static _SUCCEEDED: number;
        static _GJK_FAILED_TO_MAKE_TETRAHEDRON: number;
        static _GJK_DID_NOT_CONVERGE: number;
        static _EPA_FAILED_TO_INIT: number;
        static _EPA_FAILED_TO_ADD_VERTEX: number;
        static _EPA_DID_NOT_CONVERGE: number;
        static SUCCEEDED: number;
        static GJK_FAILED_TO_MAKE_TETRAHEDRON: number;
        static GJK_DID_NOT_CONVERGE: number;
        static EPA_FAILED_TO_INIT: number;
        static EPA_FAILED_TO_ADD_VERTEX: number;
        static EPA_DID_NOT_CONVERGE: number;
    }
    
    
    class SimplexUtil {
        static projectOrigin2(vec1: Vec3, vec2: Vec3, out: Vec3): number;
        static projectOrigin3(vec1: Vec3, vec2: Vec3, vec3: Vec3, out: Vec3): number;
        static projectOrigin4(vec1: Vec3, vec2: Vec3, vec3: Vec3, vec4: Vec3, out: Vec3): number;
    }
    
    
    
    class ContactSolverInfo {
        b1: RigidBody;
        b2: RigidBody;
        numRows: number;
        rows: Array<ContactSolverInfoRow>;
        constructor();
    }
    
    
    
    class ContactSolverInfoRow {
        jacobianN: JacobianRow;
        jacobianT: JacobianRow;
        jacobianB: JacobianRow;
        rhs: number;
        cfm: number;
        friction: number;
        impulse: ContactImpulse;
        constructor();
        clear(): void;
    }
    
    
    
    
    class JointSolverInfo {
        b1: RigidBody;
        b2: RigidBody;
        numRows: number;
        rows: Array<JointSolverInfoRow>;
        constructor();
        addRow(impulse: JointImpulse): JointSolverInfoRow;
    }
    
    
    
    class JointSolverInfoRow {
        jacobian: JacobianRow;
        rhs: number;
        cfm: number;
        minImpulse: number;
        maxImpulse: number;
        motorSpeed: number;
        motorMaxImpulse: number;
        impulse: JointImpulse;
        constructor();
        clear(): void;
        equalLimit(rhs: number, cfm: number): void;
        motor(speed: number, maxImpulse: number): void;
    }
    
    
    class ContactSolverMassDataRow {
        invMLinN1: Vec3;
        invMLinN2: Vec3;
        invMAngN1: Vec3;
        invMAngN2: Vec3;
        invMLinT1: Vec3;
        invMLinT2: Vec3;
        invMAngT1: Vec3;
        invMAngT2: Vec3;
        invMLinB1: Vec3;
        invMLinB2: Vec3;
        invMAngB1: Vec3;
        invMAngB2: Vec3;
        massN: number;
        massTB00: number;
        massTB01: number;
        massTB10: number;
        massTB11: number;
        constructor();
    }
    
    
    class JointSolverMassDataRow {
        invMLin1: Vec3;
        invMLin2: Vec3;
        invMAng1: Vec3;
        invMAng2: Vec3;
        mass: number;
        massWithoutCfm: number;
        constructor();
    }
    
    
    
    
    class Boundary {
        numBounded: number;
        iBounded: Array<number>;
        signs: Array<number>;
        numUnbounded: number;
        iUnbounded: Array<number>;
        b: Array<number>;
        matrixId: number;
        constructor(maxRows: number);
        init(buildInfo: BoundaryBuildInfo): void;
        computeImpulses(info: JointSolverInfo, mass: MassMatrix, relVels: Array<number>, impulses: Array<number>, dImpulses: Array<number>, impulseFactor: number, noCheck: boolean): boolean;
    }
    
    
    
    
    class BoundaryBuilder {
        numBoundaries: number;
        boundaries: Array<Boundary>;
        maxRows: number;
        bbInfo: BoundaryBuildInfo;
        constructor(maxRows: number);
        buildBoundariesRecursive(info: JointSolverInfo, i: number): void;
        private addBoundary;
        buildBoundaries(info: JointSolverInfo): void;
    }
    
    class BoundaryBuildInfo {
        size: number;
        numBounded: number;
        iBounded: Array<number>;
        signs: Array<number>;
        numUnbounded: number;
        iUnbounded: Array<number>;
        constructor(size: number);
        clear(): void;
        pushBounded(idx: number, sign: number): void;
        pushUnbounded(idx: number): void;
        popBounded(): void;
        popUnbounded(): void;
    }
    
    class BoundarySelector {
        n: number;
        indices: Array<number>;
        tmpIndices: Array<number>;
        constructor(n: number);
        getIndex(i: number): number;
        select(index: number): void;
        setSize(size: number): void;
    }
    
    
    
    
    
    
    
    
    
    class DirectJointConstraintSolver extends ConstraintSolver {
        info: JointSolverInfo;
        massData: Array<JointSolverMassDataRow>;
        relVels: Array<number>;
        impulses: Array<number>;
        dImpulses: Array<number>;
        dTotalImpulses: Array<number>;
        joint: Joint;
        massMatrix: MassMatrix;
        boundaryBuilder: BoundaryBuilder;
        velBoundarySelector: BoundarySelector;
        posBoundarySelector: BoundarySelector;
        constructor(joint: Joint);
        private applyImpulses;
        private applySplitImpulses;
        private applyPositionImpulses;
        preSolveVelocity(timeStep: TimeStep): void;
        warmStart(timeStep: TimeStep): void;
        solveVelocity(): void;
        postSolveVelocity(timeStep: TimeStep): void;
        private updatePositionData;
        preSolvePosition(timeStep: TimeStep): void;
        solvePositionSplitImpulse(): void;
        solvePositionNgs(timeStep: TimeStep): void;
        postSolve(): void;
    }
    
    
    
    class MassMatrix {
        _size: number;
        _invMass: Array<Array<number>>;
        _invMassWithoutCfm: Array<Array<number>>;
        _massData: Array<JointSolverMassDataRow>;
        _cachedSubmatrices: Array<Array<Array<number>>>;
        _cacheComputed: Array<boolean>;
        _maxSubmatrixId: number;
        tmpMatrix: Array<Array<number>>;
        constructor(size: number);
        computeSubmatrix(id: number, indices: Array<number>, size: number): void;
        computeInvMass(info: JointSolverInfo, massData: Array<JointSolverMassDataRow>): void;
        getSubmatrix(indices: Array<number>, n: number): Array<Array<number>>;
        clearCache(): void;
    }
    
    
    
    
    
    
    class PgsContactConstraintSolver extends ConstraintSolver {
        constraint: ContactConstraint;
        info: ContactSolverInfo;
        massData: Array<ContactSolverMassDataRow>;
        constructor(constraint: ContactConstraint);
        preSolveVelocity(timeStep: TimeStep): void;
        warmStart(timeStep: TimeStep): void;
        solveVelocity(): void;
        private updatePositionData;
        preSolvePosition(timeStep: TimeStep): void;
        solvePositionSplitImpulse(): void;
        solvePositionNgs(timeStep: TimeStep): void;
        postSolve(): void;
    }
    
    
    
    
    
    
    class PgsJointConstraintSolver extends ConstraintSolver {
        joint: Joint;
        info: JointSolverInfo;
        massData: Array<JointSolverMassDataRow>;
        constructor(joint: Joint);
        preSolveVelocity(timeStep: TimeStep): void;
        warmStart(timeStep: TimeStep): void;
        solveVelocity(): void;
        postSolveVelocity(timeStep: TimeStep): void;
        private updatePositionData;
        preSolvePosition(timeStep: TimeStep): void;
        solvePositionSplitImpulse(): void;
        solvePositionNgs(timeStep: TimeStep): void;
        postSolve(): void;
    }
    
    
    
    
    
    
    
    
    class BruteForceBroadPhase extends BroadPhase {
        constructor();
        private overlap;
        createProxy(userData: any, aabb: Aabb): Proxy;
        destroyProxy(proxy: Proxy): void;
        moveProxy(proxy: Proxy, aabb: Aabb, dislacement: Vec3): void;
        collectPairs(): void;
        rayCast(begin: Vec3, end: Vec3, callback: BroadPhaseProxyCallback): void;
        convexCast(convex: ConvexGeometry, begin: Transform, translation: Vec3, callback: BroadPhaseProxyCallback): void;
        aabbTest(aabb: Aabb, callback: BroadPhaseProxyCallback): void;
    }
    
    
    
    
    
    
    
    
    
    
    
    class BvhBroadPhase extends BroadPhase {
        _tree: BvhTree;
        movedProxies: Array<BvhProxy>;
        numMovedProxies: number;
        constructor();
        private addToMovedProxy;
        private updateProxy;
        collide(n1: BvhNode, n2: BvhNode): void;
        rayCastRecursive(node: BvhNode, _p1: Vec3, _p2: Vec3, callback: BroadPhaseProxyCallback): void;
        convexCastRecursive(node: BvhNode, convex: ConvexGeometry, begin: Transform, translation: Vec3, callback: BroadPhaseProxyCallback): void;
        aabbTestRecursive(node: BvhNode, aabb: Aabb, callback: BroadPhaseProxyCallback): void;
        createProxy(userData: any, aabb: Aabb): Proxy;
        destroyProxy(proxy: Proxy): void;
        moveProxy(proxy: Proxy, aabb: Aabb, displacement: Vec3): void;
        collectPairs(): void;
        rayCast(begin: Vec3, end: Vec3, callback: BroadPhaseProxyCallback): void;
        convexCast(convex: ConvexGeometry, begin: Transform, translation: Vec3, callback: BroadPhaseProxyCallback): void;
        aabbTest(aabb: Aabb, callback: BroadPhaseProxyCallback): void;
        getTreeBalance(): number;
    }
    
    class BvhInsertionStrategy {
        static SIMPLE: number;
        static MINIMIZE_SURFACE_AREA: number;
    }
    
    
    
    class BvhNode {
        _next: BvhNode;
        _prevLeaf: BvhNode;
        _nextLeaf: BvhNode;
        _children: Array<BvhNode>;
        _childIndex: number;
        _parent: BvhNode;
        _height: number;
        _proxy: BvhProxy;
        _aabbMin: Vec3;
        _aabbMax: Vec3;
        _tmp: Vec3;
        constructor();
        _setChild(index: number, child: BvhNode): void;
        _removeReferences(): void;
        _computeAabb(): void;
        _computeHeight(): void;
        _perimeter(): number;
    }
    
    
    
    class BvhProxy extends Proxy {
        _leaf: BvhNode;
        _moved: boolean;
        constructor(userData: any, id: number);
    }
    
    
    class BvhStrategy {
        _insertionStrategy: number;
        _balancingEnabled: boolean;
        constructor();
        _decideInsertion(currentNode: BvhNode, leaf: BvhNode): number;
        _splitLeaves(leaves: Array<BvhNode>, from: number, until: number): number;
        private decideInsertionSimple;
        private decideInsertionMinimumSurfaceArea;
        private splitLeavesMean;
    }
    
    
    
    
    class BvhTree {
        _root: BvhNode;
        _numLeaves: number;
        _strategy: BvhStrategy;
        _nodePool: BvhNode;
        leafList: BvhNode;
        leafListLast: BvhNode;
        tmp: Array<BvhNode>;
        constructor();
        _insertProxy(proxy: BvhProxy): void;
        _deleteProxy(proxy: BvhProxy): void;
        _clear(): void;
        _optimize(count: number): void;
        _buildTopDown(): void;
        _getBalance(): number;
        private decompose;
        private deleteRecursive;
        decomposeRecursive(root: BvhNode): void;
        buildTopDownRecursive(leaves: Array<BvhNode>, from: number, until: number): BvhNode;
        getBalanceRecursive(root: BvhNode): number;
        private insertLeaf;
        private deleteLeaf;
        private balance;
        private assertBeLeaf;
        private pool;
        private pick;
    }
    
    
    
    
    
    
    class BoxBoxDetector extends Detector {
        static EDGE_BIAS_MULT: number;
        clipper: FaceClipper;
        constructor();
        detectImpl(result: DetectorResult, geom1: Geometry, geom2: Geometry, tf1: Transform, tf2: Transform, cachedData: CachedDetectorData): void;
        private project;
        private project2;
    }
    class IncidentVertex {
        x: number;
        y: number;
        wx: number;
        wy: number;
        wz: number;
        constructor();
        init(x: number, y: number, wx: number, wy: number, wz: number): void;
        copyFrom(v: IncidentVertex): void;
        interp(v1: IncidentVertex, v2: IncidentVertex, t: number): void;
    }
    class FaceClipper {
        w: number;
        h: number;
        numVertices: number;
        vertices: Array<IncidentVertex>;
        numTmpVertices: number;
        tmpVertices: Array<IncidentVertex>;
        constructor();
        init(w: number, h: number): void;
        addIncidentVertex(x: number, y: number, wx: number, wy: number, wz: number): void;
        clip(): void;
        reduce(): void;
        private clipL;
        private clipR;
        private clipT;
        private clipB;
        private flip;
        private clipWithParam;
        private add;
        private interp;
    }
    
    
    
    class BoxBoxDetectorMacro {
        static satCheck(minDepth: number, minDepthAxis: Vec3, proj1: number, proj2: number, projC12: number, axis: Vec3, id: number, biasMult: number): [number, number, number];
        static supportingVertexRect(out: Vec3, halfExtX: Vec3, halfExtY: Vec3, axis: Vec3): void;
        static getBoxFace(v1: Vec3, v2: Vec3, v3: Vec3, v4: Vec3, basisX: Vec3, basisY: Vec3, basisZ: Vec3, face: string): void;
        static mix(dst: Vec3, v: Vec3, sign: number): void;
        static mix2(dst: Vec3, v1: Vec3, v2: Vec3, sign1: number, sign2: number): void;
        static mix3(dst: Vec3, v1: Vec3, v2: Vec3, v3: Vec3, sign1: number, sign2: number, sign3: number): void;
        static swapV(tmp: Vec3, v1: Vec3, v2: Vec3): void;
    }
    
    
    class CachedDetectorData {
        _gjkCache: GjkCache;
        constructor();
        _clear(): void;
    }
    
    
    
    
    
    
    class CapsuleCapsuleDetector extends Detector {
        constructor();
        detectImpl(result: DetectorResult, geom1: Geometry, geom2: Geometry, tf1: Transform, tf2: Transform, cachedData: CachedDetectorData): void;
    }
    
    
    
    
    
    
    class Detector {
        swapped: boolean;
        constructor(swapped: boolean);
        setNormal(result: DetectorResult, n: Vec3): void;
        addPoint(result: DetectorResult, pos1: Vec3, pos2: Vec3, depth: number, id: number): void;
        detectImpl(result: DetectorResult, geom1: Geometry, geom2: Geometry, tf1: Transform, tf2: Transform, cachedData: CachedDetectorData): void;
        detect(result: DetectorResult, geom1: Geometry, geom2: Geometry, transform1: Transform, transform2: Transform, cachedData: CachedDetectorData): void;
    }
    
    
    
    
    
    
    class GjkEpaDetector extends Detector {
        constructor();
        detectImpl(result: DetectorResult, geom1: Geometry, geom2: Geometry, tf1: Transform, tf2: Transform, cachedData: CachedDetectorData): void;
    }
    
    
    
    
    
    
    class SphereBoxDetector extends Detector {
        constructor(swapped: boolean);
        detectImpl(result: DetectorResult, geom1: Geometry, geom2: Geometry, tf1: Transform, tf2: Transform, cachedData: CachedDetectorData): void;
    }
    
    
    
    
    
    
    class SphereCapsuleDetector extends Detector {
        constructor(swapped: boolean);
        detectImpl(result: DetectorResult, geom1: Geometry, geom2: Geometry, tf1: Transform, tf2: Transform, cachedData: CachedDetectorData): void;
    }
    
    
    
    
    
    
    class SphereSphereDetector extends Detector {
        constructor();
        detectImpl(result: DetectorResult, geom1: Geometry, geom2: Geometry, tf1: Transform, tf2: Transform, cachedData: CachedDetectorData): void;
    }
    
    
    
    
    
    
    
    
    
    class ContactConstraint {
        _positionCorrectionAlgorithm: number;
        _manifold: Manifold;
        _s1: Shape;
        _s2: Shape;
        _tf1: Transform;
        _tf2: Transform;
        _invM1: number;
        _invM2: number;
        _friction: number;
        _restitution: number;
        _invI1: Mat3;
        _invI2: Mat3;
        _b1: RigidBody;
        _b2: RigidBody;
        _solver: ConstraintSolver;
        constructor(manifold: Manifold);
        _attach(s1: Shape, s2: Shape): void;
        _detach(): void;
        _getVelocitySolverInfo(timeStep: TimeStep, info: ContactSolverInfo): void;
        _getPositionSolverInfo(info: ContactSolverInfo): void;
        _syncManifold(): void;
        getShape1(): Shape;
        getShape2(): Shape;
        getManifold(): Manifold;
        isTouching(): boolean;
    }
    
    
    class ContactImpulse {
        impulseN: number;
        impulseT: number;
        impulseB: number;
        impulseP: number;
        impulseL: Vec3;
        constructor();
        clear(): void;
        copyFrom(imp: ContactImpulse): void;
    }
    
    
    
    
    class Manifold {
        _normal: Vec3;
        _tangent: Vec3;
        _binormal: Vec3;
        _numPoints: number;
        _points: Array<ManifoldPoint>;
        constructor();
        _clear(): void;
        _buildBasis(normal: Vec3): void;
        _updateDepthsAndPositions(tf1: Transform, tf2: Transform): void;
        getNormal(): Vec3;
        getNormalTo(normal: Vec3): void;
        getTangent(): Vec3;
        getTangentTo(tangent: Vec3): void;
        getBinormal(): Vec3;
        getBinormalTo(binormal: Vec3): void;
        getPoints(): Array<ManifoldPoint>;
        getNumPoints(): number;
    }
    
    
    
    
    
    class ManifoldPoint {
        _localPos1: Vec3;
        _localPos2: Vec3;
        _relPos1: Vec3;
        _relPos2: Vec3;
        _pos1: Vec3;
        _pos2: Vec3;
        _depth: number;
        _impulse: ContactImpulse;
        _warmStarted: boolean;
        _disabled: boolean;
        _id: number;
        constructor();
        _clear(): void;
        _initialize(result: DetectorResultPoint, tf1: Transform, tf2: Transform): void;
        _updateDepthAndPositions(result: DetectorResultPoint, tf1: Transform, tf2: Transform): void;
        _copyFrom(cp: ManifoldPoint): void;
        getPosition1(): Vec3;
        getPosition1To(position: Vec3): void;
        getPosition2(): Vec3;
        getPosition2To(position: Vec3): void;
        getDepth(): number;
        isWarmStarted(): boolean;
        getNormalImpulse(): number;
        getTangentImpulse(): number;
        getBinormalImpulse(): number;
        isEnabled(): boolean;
    }
    
    
    
    
    
    
    class ManifoldUpdater {
        _manifold: Manifold;
        numOldPoints: number;
        oldPoints: Array<ManifoldPoint>;
        constructor(manifold: Manifold);
        removeOutdatedPoints(): void;
        removeManifoldPoint(index: number): void;
        addManifoldPoint(point: DetectorResultPoint, tf1: Transform, tf2: Transform): void;
        computeTargetIndex(newPoint: DetectorResultPoint, tf1: Transform, tf2: Transform): number;
        private quadAreaFast;
        computeRelativePositions(tf1: Transform, tf2: Transform): void;
        findNearestContactPointIndex(target: DetectorResultPoint, tf1: Transform, tf2: Transform): number;
        private distSq;
        private saveOldData;
        private updateContactPointById;
        totalUpdate(result: DetectorResult, tf1: Transform, tf2: Transform): void;
        incrementalUpdate(result: DetectorResult, tf1: Transform, tf2: Transform): void;
    }
    
    
    class JacobianRow {
        lin1: Vec3;
        lin2: Vec3;
        ang1: Vec3;
        ang2: Vec3;
        static BIT_LINEAR_SET: number;
        static BIT_ANGULAR_SET: number;
        flag: number;
        constructor();
        clear(): void;
        updateSparsity(): void;
        isLinearSet(): boolean;
        isAngularSet(): boolean;
    }
    
    
    
    
    
    
    
    
    
    
    class CylindricalJoint extends Joint {
        _translSd: SpringDamper;
        _translLm: TranslationalLimitMotor;
        _rotSd: SpringDamper;
        _rotLm: RotationalLimitMotor;
        _basis: JointBasis;
        angle: number;
        angularErrorY: number;
        angularErrorZ: number;
        translation: number;
        linearErrorY: number;
        linearErrorZ: number;
        constructor(config: CylindricalJointConfig);
        getInfo(info: JointSolverInfo, timeStep: TimeStep, isPositionPart: boolean): void;
        private computeErrors;
        _syncAnchors(): void;
        _getVelocitySolverInfo(timeStep: TimeStep, info: JointSolverInfo): void;
        _getPositionSolverInfo(info: JointSolverInfo): void;
        getAxis1(): Vec3;
        getAxis2(): Vec3;
        getAxis1To(axis: Vec3): void;
        getAxis2To(axis: Vec3): void;
        getLocalAxis1(): Vec3;
        getLocalAxis2(): Vec3;
        getLocalAxis1To(axis: Vec3): void;
        getLocalAxis2To(axis: Vec3): void;
        getTranslationalSpringDamper(): SpringDamper;
        getRotationalSpringDamper(): SpringDamper;
        getTranslationalLimitMotor(): TranslationalLimitMotor;
        getRotationalLimitMotor(): RotationalLimitMotor;
        getAngle(): number;
        getTranslation(): number;
    }
    
    
    
    
    
    
    
    class CylindricalJointConfig extends JointConfig {
        localAxis1: Vec3;
        localAxis2: Vec3;
        translationalLimitMotor: TranslationalLimitMotor;
        translationalSpringDamper: SpringDamper;
        rotationalLimitMotor: RotationalLimitMotor;
        rotationalSpringDamper: SpringDamper;
        constructor();
        init(rigidBody1: RigidBody, rigidBody2: RigidBody, worldAnchor: Vec3, worldAxis: Vec3): CylindricalJointConfig;
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    class Joint {
        _b1: RigidBody;
        _b2: RigidBody;
        _link1: JointLink;
        _link2: JointLink;
        _positionCorrectionAlgorithm: number;
        _allowCollision: boolean;
        _prev: Joint;
        _next: Joint;
        _world: World;
        _localAnchor1: Vec3;
        _localAnchor2: Vec3;
        _relativeAnchor1: Vec3;
        _relativeAnchor2: Vec3;
        _anchor1: Vec3;
        _anchor2: Vec3;
        _localBasisX1: Vec3;
        _localBasisY1: Vec3;
        _localBasisZ1: Vec3;
        _localBasisX2: Vec3;
        _localBasisY2: Vec3;
        _localBasisZ2: Vec3;
        _basisX1: Vec3;
        _basisY1: Vec3;
        _basisZ1: Vec3;
        _basisX2: Vec3;
        _basisY2: Vec3;
        _basisZ2: Vec3;
        _impulses: Array<JointImpulse>;
        _appliedForce: Vec3;
        _appliedTorque: Vec3;
        _breakForce: number;
        _breakTorque: number;
        _type: number;
        _solver: ConstraintSolver;
        userData: any;
        constructor(config: JointConfig, type: number);
        buildLocalBasesFromX(): void;
        private buildLocalBasesFromXY;
        buildLocalBasesFromX1Z2(): void;
        buildLocalBasesFromXY1X2(): void;
        setSolverInfoRowLinear(row: JointSolverInfoRow, diff: number, lm: TranslationalLimitMotor, mass: number, sd: SpringDamper, timeStep: TimeStep, isPositionPart: boolean): void;
        setSolverInfoRowAngular(row: JointSolverInfoRow, diff: number, lm: RotationalLimitMotor, mass: number, sd: SpringDamper, timeStep: TimeStep, isPositionPart: boolean): void;
        getErp(timeStep: TimeStep, isPositionPart: boolean): number;
        computeEffectiveInertiaMoment(axis: Vec3): number;
        private computeEffectiveInertiaMoment2;
        _getWarmStartingFactor(): number;
        _syncAnchors(): void;
        _getVelocitySolverInfo(timeStep: TimeStep, info: JointSolverInfo): void;
        _getPositionSolverInfo(info: JointSolverInfo): void;
        _checkDestruction(): void;
        _attachLinks(): void;
        _detachLinks(): void;
        getRigidBody1(): RigidBody;
        getRigidBody2(): RigidBody;
        getType(): number;
        getAnchor1(): Vec3;
        getAnchor2(): Vec3;
        getAnchor1To(anchor: Vec3): void;
        getAnchor2To(anchor: Vec3): void;
        getLocalAnchor1(): Vec3;
        getLocalAnchor2(): Vec3;
        getLocalAnchor1To(localAnchor: Vec3): void;
        getLocalAnchor2To(localAnchor: Vec3): void;
        getBasis1(): Mat3;
        getBasis2(): Mat3;
        getBasis1To(basis: Mat3): void;
        getBasis2To(basis: Mat3): void;
        getAllowCollision(): boolean;
        setAllowCollision(allowCollision: boolean): void;
        getBreakForce(): number;
        setBreakForce(breakForce: number): void;
        getBreakTorque(): number;
        setBreakTorque(breakTorque: number): void;
        getPositionCorrectionAlgorithm(): number;
        setPositionCorrectionAlgorithm(positionCorrectionAlgorithm: number): void;
        getAppliedForce(): Vec3;
        getAppliedForceTo(appliedForce: Vec3): void;
        getAppliedTorque(): Vec3;
        getAppliedTorqueTo(appliedTorque: Vec3): void;
        getPrev(): Joint;
        getNext(): Joint;
    }
    
    
    
    class JointBasis {
        joint: Joint;
        x: Vec3;
        y: Vec3;
        z: Vec3;
        constructor(joint: Joint);
        trackByX(): void;
        trackByY(): void;
        trackByZ(): void;
        private trackByAxis;
    }
    
    
    
    class JointConfig {
        rigidBody1: RigidBody;
        rigidBody2: RigidBody;
        localAnchor1: Vec3;
        localAnchor2: Vec3;
        allowCollision: boolean;
        solverType: number;
        positionCorrectionAlgorithm: number;
        breakForce: number;
        breakTorque: number;
        constructor();
        _init(rb1: RigidBody, rb2: RigidBody, worldAnchor: Vec3): void;
    }
    
    class JointImpulse {
        impulse: number;
        impulseM: number;
        impulseP: number;
        constructor();
        clear(): void;
    }
    
    
    
    class JointLink {
        _prev: JointLink;
        _next: JointLink;
        _joint: Joint;
        _other: RigidBody;
        constructor(joint: Joint);
        getContact(): Joint;
        getOther(): RigidBody;
        getPrev(): JointLink;
        getNext(): JointLink;
    }
    
    class JointMacro {
        static computeSoftConstraintParameters(frequency: number, dampingRatio: number, dt: number, useSymplecticEuler: boolean): [number, number];
    }
    
    class JointType {
        static _SPHERICAL: number;
        static _REVOLUTE: number;
        static _CYLINDRICAL: number;
        static _PRISMATIC: number;
        static _UNIVERSAL: number;
        static _RAGDOLL: number;
        static SPHERICAL: number;
        static REVOLUTE: number;
        static CYLINDRICAL: number;
        static PRISMATIC: number;
        static UNIVERSAL: number;
        static RAGDOLL: number;
    }
    
    
    
    
    
    
    
    
    
    class PrismaticJoint extends Joint {
        _sd: SpringDamper;
        _lm: TranslationalLimitMotor;
        _basis: JointBasis;
        translation: number;
        linearErrorY: number;
        linearErrorZ: number;
        angularError: Vec3;
        constructor(config: PrismaticJointConfig);
        getInfo(info: JointSolverInfo, timeStep: TimeStep, isPositionPart: boolean): void;
        private computeErrors;
        _syncAnchors(): void;
        _getVelocitySolverInfo(timeStep: TimeStep, info: JointSolverInfo): void;
        _getPositionSolverInfo(info: JointSolverInfo): void;
        getAxis1(): Vec3;
        getAxis2(): Vec3;
        getAxis1To(axis: Vec3): void;
        getAxis2To(axis: Vec3): void;
        getLocalAxis1(): Vec3;
        getLocalAxis2(): Vec3;
        getLocalAxis1To(axis: Vec3): void;
        getLocalAxis2To(axis: Vec3): void;
        getSpringDamper(): SpringDamper;
        getLimitMotor(): TranslationalLimitMotor;
        getTranslation(): number;
    }
    
    
    
    
    
    
    class PrismaticJointConfig extends JointConfig {
        localAxis1: Vec3;
        localAxis2: Vec3;
        limitMotor: TranslationalLimitMotor;
        springDamper: SpringDamper;
        constructor();
        init(rigidBody1: RigidBody, rigidBody2: RigidBody, worldAnchor: Vec3, worldAxis: Vec3): PrismaticJointConfig;
    }
    
    
    
    
    
    
    
    
    class RagdollJoint extends Joint {
        _twistSd: SpringDamper;
        _swingSd: SpringDamper;
        _twistLm: RotationalLimitMotor;
        _maxSwingAngle1: number;
        _maxSwingAngle2: number;
        swingAxis: Vec3;
        twistAxis: Vec3;
        linearError: Vec3;
        swingError: number;
        dummySwingLm: RotationalLimitMotor;
        _swingAngle: number;
        _twistAngle: number;
        constructor(config: RagdollJointConfig);
        getInfo(info: JointSolverInfo, timeStep: TimeStep, isPositionPart: boolean): void;
        private computeErrors;
        _syncAnchors(): void;
        _getVelocitySolverInfo(timeStep: TimeStep, info: JointSolverInfo): void;
        _getPositionSolverInfo(info: JointSolverInfo): void;
        getAxis1(): Vec3;
        getAxis2(): Vec3;
        getAxis1To(axis: Vec3): void;
        getAxis2To(axis: Vec3): void;
        getLocalAxis1(): Vec3;
        getLocalAxis2(): Vec3;
        getLocalAxis1To(axis: Vec3): void;
        getLocalAxis2To(axis: Vec3): void;
        getTwistSpringDamper(): SpringDamper;
        getTwistLimitMotor(): RotationalLimitMotor;
        getSwingSpringDamper(): SpringDamper;
        getSwingAxis(): Vec3;
        getSwingAxisTo(axis: Vec3): void;
        getSwingAngle(): number;
        getTwistAngle(): number;
    }
    
    
    
    
    
    
    class RagdollJointConfig extends JointConfig {
        localTwistAxis1: Vec3;
        localTwistAxis2: Vec3;
        localSwingAxis1: Vec3;
        twistSpringDamper: SpringDamper;
        twistLimitMotor: RotationalLimitMotor;
        swingSpringDamper: SpringDamper;
        maxSwingAngle1: number;
        maxSwingAngle2: number;
        constructor();
        init(rigidBody1: RigidBody, rigidBody2: RigidBody, worldAnchor: Vec3 | Laya.Vector3, 
            worldTwistAxis: Vec3 | Laya.Vector3, worldSwingAxis: Vec3 | Laya.Vector3): RagdollJointConfig;
    }
    
    
    
    
    
    
    
    
    class RevoluteJointConfig extends JointConfig {
        localAxis1: Vec3;
        localAxis2: Vec3;
        springDamper: SpringDamper;
        limitMotor: RotationalLimitMotor;
        constructor();
        init(rigidBody1: RigidBody, rigidBody2: RigidBody, worldAnchor: Vec3, worldAxis: Vec3): RevoluteJointConfig;
    }
    
    class RotationalLimitMotor {
        lowerLimit: number;
        upperLimit: number;
        motorSpeed: number;
        motorTorque: number;
        constructor();
        setLimits(lower: number, upper: number): RotationalLimitMotor;
        setMotor(speed: number, torque: number): RotationalLimitMotor;
        clone(): RotationalLimitMotor;
    }
    
    
    
    
    
    
    class SphericalJoint extends Joint {
        _sd: SpringDamper;
        constructor(config: SphericalJointConfig);
        getInfo(info: JointSolverInfo, timeStep: TimeStep, isPositionPart: boolean): void;
        _getVelocitySolverInfo(timeStep: TimeStep, info: JointSolverInfo): void;
        _getPositionSolverInfo(info: JointSolverInfo): void;
        getSpringDamper(): SpringDamper;
    }
    
    
    
    
    
    class SphericalJointConfig extends JointConfig {
        springDamper: SpringDamper;
        constructor();
        init(rigidBody1: RigidBody, rigidBody2: RigidBody, worldAnchor: Vec3): SphericalJointConfig;
    }
    
    class SpringDamper {
        frequency: number;
        dampingRatio: number;
        useSymplecticEuler: boolean;
        constructor();
        setSpring(frequency: number, dampingRatio: number): SpringDamper;
        setSymplecticEuler(useSymplecticEuler: boolean): SpringDamper;
        clone(): SpringDamper;
    }
    
    class TranslationalLimitMotor {
        lowerLimit: number;
        upperLimit: number;
        motorSpeed: number;
        motorForce: number;
        constructor();
        setLimits(lower: number, upper: number): TranslationalLimitMotor;
        setMotor(speed: number, force: number): TranslationalLimitMotor;
        clone(): TranslationalLimitMotor;
    }
    
    
    
    
    
    
    
    
    class UniversalJoint extends Joint {
        _sd1: SpringDamper;
        _sd2: SpringDamper;
        _lm1: RotationalLimitMotor;
        _lm2: RotationalLimitMotor;
        _axisX: Vec3;
        _axisY: Vec3;
        _axisZ: Vec3;
        _angleX: number;
        _angleY: number;
        _angleZ: number;
        xSingular: boolean;
        ySingular: boolean;
        zSingular: boolean;
        linearError: Vec3;
        constructor(config: UniversalJointConfig);
        private updateConstraintAxes;
        getInfo(info: JointSolverInfo, timeStep: TimeStep, isPositionPart: boolean): void;
        private computeErrors;
        _syncAnchors(): void;
        _getVelocitySolverInfo(timeStep: TimeStep, info: JointSolverInfo): void;
        _getPositionSolverInfo(info: JointSolverInfo): void;
        getAxis1(): Vec3;
        getAxis2(): Vec3;
        getAxis1To(axis: Vec3): void;
        getAxis2To(axis: Vec3): void;
        getLocalAxis1(): Vec3;
        getLocalAxis2(): Vec3;
        getLocalAxis1To(axis: Vec3): void;
        getLocalAxis2To(axis: Vec3): void;
        getSpringDamper1(): SpringDamper;
        getSpringDamper2(): SpringDamper;
        getLimitMotor1(): RotationalLimitMotor;
        getLimitMotor2(): RotationalLimitMotor;
        getAngle1(): number;
        getAngle2(): number;
    }
    
    
    
    
    
    
    class UniversalJointConfig extends JointConfig {
        localAxis1: Vec3;
        localAxis2: Vec3;
        springDamper1: SpringDamper;
        springDamper2: SpringDamper;
        limitMotor1: RotationalLimitMotor;
        limitMotor2: RotationalLimitMotor;
        constructor();
        init(rigidBody1: RigidBody, rigidBody2: RigidBody, worldAnchor: Vec3, worldAxis1: Vec3, worldAxis2: Vec3): UniversalJointConfig;
    }
    
    class ConstraintSolverType {
        static _ITERATIVE: number;
        static _DIRECT: number;
    }
    
    
    
    
    
    
    
    
    
    class BroadPhase {
        _type: number;
        _numProxies: number;
        _proxyList: Proxy;
        _proxyListLast: Proxy;
        _proxyPairList: ProxyPair;
        _incremental: boolean;
        _testCount: number;
        _proxyPairPool: ProxyPair;
        _idCount: number;
        _convexSweep: ConvexSweepGeometry;
        _aabb: AabbGeometry;
        identity: Transform;
        zero: Vec3;
        rayCastHit: RayCastHit;
        constructor(type: number);
        protected pickAndPushProxyPair(p1: Proxy, p2: Proxy): void;
        protected poolProxyPairs(): void;
        protected addProxy(p: Proxy): void;
        protected removeProxy(p: Proxy): void;
        private abs;
        private min;
        private max;
        protected aabbSegmentTest(aabbMin: Vec3, aabbMax: Vec3, begin: Vec3, end: Vec3): boolean;
        protected aabbConvexSweepTest(aabbMin: Vec3, aabbMax: Vec3, convex: ConvexGeometry, begin: Transform, translation: Vec3): boolean;
        createProxy(userData: any, aabb: Aabb): Proxy;
        destroyProxy(proxy: Proxy): void;
        moveProxy(proxy: Proxy, aabb: Aabb, displacement: Vec3): void;
        isOverlapping(proxy1: Proxy, proxy2: Proxy): boolean;
        collectPairs(): void;
        getProxyPairList(): ProxyPair;
        isIncremental(): boolean;
        getTestCount(): number;
        rayCast(begin: Vec3, end: Vec3, callback: BroadPhaseProxyCallback): void;
        convexCast(convex: ConvexGeometry, begin: Transform, translation: Vec3, callback: BroadPhaseProxyCallback): void;
        aabbTest(aabb: Aabb, callback: BroadPhaseProxyCallback): void;
    }
    class ConvexSweepGeometry extends ConvexGeometry {
        c: ConvexGeometry;
        localTranslation: Vec3;
        constructor();
        init(c: ConvexGeometry, transform: Transform, translation: Vec3): void;
        computeLocalSupportingVertex(dir: Vec3, out: Vec3): void;
    }
    class AabbGeometry extends ConvexGeometry {
        min: Vec3;
        max: Vec3;
        constructor();
        computeLocalSupportingVertex(dir: Vec3, out: Vec3): void;
    }
    
    
    
    class BroadPhaseProxyCallback {
        constructor();
        process(proxy: Proxy): void;
    }
    
    class BroadPhaseType {
        static BRUTE_FORCE: number;
        static BVH: number;
    }
    
    
    
    class Proxy {
        _prev: Proxy;
        _next: Proxy;
        _aabbMin: Vec3;
        _aabbMax: Vec3;
        _id: number;
        userData: any;
        constructor(userData: any, id: number);
        _setAabb(aabb: Aabb): void;
        getId(): number;
        getFatAabb(): Aabb;
        getFatAabbTo(aabb: Aabb): void;
    }
    
    
    class ProxyPair {
        _next: ProxyPair;
        _p1: Proxy;
        _p2: Proxy;
        constructor();
        getProxy1(): Proxy;
        getProxy2(): Proxy;
        getNext(): ProxyPair;
    }
    
    
    class CollisionMatrix {
        detectors: Array<Array<Detector>>;
        constructor();
        getDetector(geomType1: number, geomType2: number): Detector;
    }
    
    
    
    class DetectorResult {
        numPoints: number;
        points: Array<DetectorResultPoint>;
        normal: Vec3;
        incremental: boolean;
        constructor();
        getMaxDepth(): number;
        clear(): void;
    }
    
    
    class DetectorResultPoint {
        position1: Vec3;
        position2: Vec3;
        depth: number;
        id: number;
        constructor();
    }
    
    
    class Aabb {
        _min: Vec3;
        _max: Vec3;
        constructor();
        init(min: Vec3, max: Vec3): Aabb;
        getMin(): Vec3;
        getMinTo(min: Vec3): void;
        setMin(min: Vec3): Aabb;
        getMax(): Vec3;
        getMaxTo(max: Vec3): void;
        setMax(max: Vec3): Aabb;
        getCenter(): Vec3;
        getCenterTo(center: Vec3): void;
        getExtents(): Vec3;
        getExtentsTo(halfExtents: Vec3): void;
        combine(other: Aabb): Aabb;
        combined(other: Aabb): Aabb;
        overlap(other: Aabb): boolean;
        getnumberersection(other: Aabb): Aabb;
        getnumberersectionTo(other: Aabb, intersection: Aabb): void;
        copyFrom(aabb: Aabb): Aabb;
        clone(): Aabb;
    }
    
    
    
    
    
    
    class BoxGeometry extends ConvexGeometry {
        _halfExtents: Vec3;
        _halfAxisX: Vec3;
        _halfAxisY: Vec3;
        _halfAxisZ: Vec3;
        constructor(halfExtents: Vec3);
        getHalfExtents(): Vec3;
        getHalfExtentsTo(halfExtents: Vec3): void;
        _updateMass(): void;
        _computeAabb(aabb: Aabb, tf: Transform): void;
        computeLocalSupportingVertex(dir: Vec3, out: Vec3): void;
        _rayCastLocal(begin: Vec3, end: Vec3, hit: RayCastHit): boolean;
    }
    
    
    
    
    
    
    class CapsuleGeometry extends ConvexGeometry {
        _radius: number;
        _halfHeight: number;
        constructor(radius: number, halfHeight: number);
        getRadius(): number;
        getHalfHeight(): number;
        _updateMass(): void;
        _computeAabb(aabb: Aabb, tf: Transform): void;
        computeLocalSupportingVertex(dir: Vec3, out: Vec3): void;
        _rayCastLocal(begin: Vec3, end: Vec3, hit: RayCastHit): boolean;
    }
    
    
    
    
    
    
    class ConeGeometry extends ConvexGeometry {
        _radius: number;
        _halfHeight: number;
        sinTheta: number;
        cosTheta: number;
        constructor(radius: number, halfHeight: number);
        getRadius(): number;
        getHalfHeight(): number;
        _updateMass(): void;
        _computeAabb(aabb: Aabb, tf: Transform): void;
        computeLocalSupportingVertex(dir: Vec3, out: Vec3): void;
        _rayCastLocal(begin: Vec3, end: Vec3, hit: RayCastHit): boolean;
    }
    
    
    
    
    
    class ConvexGeometry extends Geometry {
        _gjkMargin: number;
        _useGjkRayCast: boolean;
        constructor(type: number);
        getGjkMergin(): number;
        setGjkMergin(gjkMergin: number): void;
        computeLocalSupportingVertex(dir: Vec3, out: Vec3): void;
        rayCast(begin: Vec3, end: Vec3, transform: Transform, hit: RayCastHit): boolean;
    }
    
    
    
    
    
    class ConvexHullGeometry extends ConvexGeometry {
        _vertices: Array<Vec3>;
        _tmpVertices: Array<Vec3>;
        _numVertices: number;
        constructor(vertices: Array<Vec3>);
        getVertices(): Array<Vec3>;
        _updateMass(): void;
        _computeAabb(aabb: Aabb, tf: Transform): void;
        computeLocalSupportingVertex(dir: Vec3, out: Vec3): void;
    }
    
    
    
    
    
    
    
    
    class Geometry {
        _type: number;
        _volume: number;
        _inertiaCoeff: Mat3;
        constructor(type: number);
        _updateMass(): void;
        _computeAabb(aabb: Aabb, tf: Transform): void;
        _rayCastLocal(begin: Vec3, end: Vec3, hit: RayCastHit): boolean;
        getType(): number;
        getVolume(): number;
        rayCast(begin: Vec3, end: Vec3, transform: Transform, hit: RayCastHit): boolean;
    }
    
    class GeometryType {
        static _SPHERE: number;
        static _BOX: number;
        static _CYLINDER: number;
        static _CONE: number;
        static _CAPSULE: number;
        static _CONVEX_HULL: number;
        static _CONVEX_MIN: number;
        static _CONVEX_MAX: number;
    }
    
    
    class RayCastHit {
        position: Vec3;
        normal: Vec3;
        fraction: number;
        constructor();
    }
    
    
    
    
    
    
    class SphereGeometry extends ConvexGeometry {
        _radius: number;
        constructor(radius: number);
        getRadius(): number;
        _updateMass(): void;
        _computeAabb(aabb: Aabb, tf: Transform): void;
        computeLocalSupportingVertex(dir: Vec3, out: Vec3): void;
        _rayCastLocal(begin: Vec3, end: Vec3, hit: RayCastHit): boolean;
    }
    
    
    class AabbTestCallback {
        constructor();
        process(shape: Shape): void;
    }
    
    
    class ContactCallback {
        constructor();
        beginContact(c: Contact): void;
        preSolve(c: Contact): void;
        postSolve(c: Contact): void;
        endContact(c: Contact): void;
    }
    
    
    
    class RayCastCallback {
        constructor();
        process(shape: Shape, hit: RayCastHit): void;
    }
    
    
    
    
    
    class RayCastClosest extends RayCastCallback {
        shape: Shape;
        position: Vec3;
        normal: Vec3;
        fraction: number;
        hit: boolean;
        constructor();
        clear(): void;
        process(shape: Shape, hit: RayCastHit): void;
    }
    
    
    
    class ConstraintSolver {
        _b1: RigidBody;
        _b2: RigidBody;
        _addedToIsland: boolean;
        constructor();
        preSolveVelocity(timeStep: TimeStep): void;
        warmStart(timeStep: TimeStep): void;
        solveVelocity(): void;
        postSolveVelocity(timeStep: TimeStep): void;
        preSolvePosition(timeStep: TimeStep): void;
        solvePositionSplitImpulse(): void;
        solvePositionNgs(timeStep: TimeStep): void;
        postSolve(): void;
    }
    
    class PositionCorrectionAlgorithm {
        static _BAUMGARTE: number;
        static _SPLIT_IMPULSE: number;
        static _NGS: number;
        static BAUMGARTE: number;
        static SPLIT_IMPULSE: number;
        static NGS: number;
    }
    
    
    class MassData {
        mass: number;
        localInertia: Mat3;
        constructor();
    }
    
    
    
    
    
    
    
    
    
    
    
    class RigidBody {
        _next: RigidBody;
        _prev: RigidBody;
        _shapeList: Shape;
        _shapeListLast: Shape;
        _numShapes: number;
        _vel: Vec3;
        _angVel: Vec3;
        _pseudoVel: Vec3;
        _angPseudoVel: Vec3;
        _ptransform: Transform;
        _transform: Transform;
        _type: number;
        _sleepTime: number;
        _sleeping: boolean;
        _autoSleep: boolean;
        _mass: number;
        _invMass: number;
        _localInertia: Mat3;
        _rotFactor: Vec3;
        _invLocalInertia: Mat3;
        _invLocalInertiaWithoutRotFactor: Mat3;
        _invInertia: Mat3;
        _linearDamping: number;
        _angularDamping: number;
        _force: Vec3;
        _torque: Vec3;
        _world: World;
        _contactLinkList: ContactLink;
        _contactLinkListLast: ContactLink;
        _numContactLinks: number;
        _jointLinkList: JointLink;
        _jointLinkListLast: JointLink;
        _numJointLinks: number;
        _addedToIsland: boolean;
        _gravityScale: number;
        userData: any;
        constructor(config: RigidBodyConfig);
        _integrate(dt: number): void;
        _integratePseudoVelocity(): void;
        _isSleepy(): boolean;
        _isAlone(): boolean;
        _applyTranslation(translation: Vec3): void;
        _applyRotation(rotation: Vec3): void;
        _shapeModified(): void;
        _syncShapes(): void;
        _applyLinearPositionImpulse(imp: Vec3): void;
        _applyAngularPositionImpulse(imp: Vec3): void;
        updateMass(): void;
        private completeMassData;
        private updateInvInertia;
        private updateTransformExt;
        getPosition(): Vec3;
        getPositionTo(position: Vec3| Laya.Vector3): void;
        setPosition(position: Vec3| Laya.Vector3): void;
        translate(translation: Vec3): void;
        getRotation(): Mat3;
        getRotationTo(rotation: Mat3): void;
        setRotation(rotation: Mat3): void;
        setRotationXyz(eulerAngles: Vec3): void;
        rotate(rotation: Mat3): void;
        rotateXyz(eulerAngles: Vec3): void;
        getOrientation(): Quat;
        getOrientationTo(orientation: Quat): void;
        setOrientation(quaternion: Quat): void;
        getTransform(): Transform;
        getTransformTo(transform: Transform): void;
        setTransform(transform: Transform): void;
        getMass(): number;
        getLocalInertia(): Mat3;
        getLocalInertiaTo(inertia: Mat3): void;
        getMassData(): MassData;
        getMassDataTo(massData: MassData): void;
        setMassData(massData: MassData): void;
        getRotationFactor(): Vec3;
        setRotationFactor(rotationFactor: Vec3 | Laya.Vector3): void;
        getLinearVelocity(): Vec3;
        getLinearVelocityTo(linearVelocity: Vec3): void;
        setLinearVelocity(linearVelocity: Vec3| Laya.Vector3): void;
        getAngularVelocity(): Vec3;
        getAngularVelocityTo(angularVelocity: Vec3): void;
        setAngularVelocity(angularVelocity: Vec3): void;
        addLinearVelocity(linearVelocityChange: Vec3): void;
        addAngularVelocity(angularVelocityChange: Vec3): void;
        applyImpulse(impulse: Vec3, positionInWorld: Vec3): void;
        applyLinearImpulse(impulse: Vec3| Laya.Vector3): void;
        applyAngularImpulse(impulse: Vec3): void;
        applyForce(force: Vec3, positionInWorld: Vec3): void;
        applyForceToCenter(force: Vec3| Laya.Vector3): void;
        applyTorque(torque: Vec3): void;
        getGravityScale(): number;
        setGravityScale(gravityScale: number): void;
        getLocalPoint(worldPoint: Vec3): Vec3;
        getLocalPointTo(worldPoint: Vec3, localPoint: Vec3): void;
        getLocalVector(worldVector: Vec3): Vec3;
        getLocalVectorTo(worldVector: Vec3, localVector: Vec3): void;
        getWorldPoint(localPoint: Vec3): Vec3;
        getWorldPointTo(localPoint: Vec3, worldPoint: Vec3): void;
        getWorldVector(localVector: Vec3): Vec3;
        getWorldVectorTo(localVector: Vec3, worldVector: Vec3): void;
        getNumShapes(): number;
        getShapeList(): Shape;
        getNumContectLinks(): number;
        getContactLinkList(): ContactLink;
        getNumJointLinks(): number;
        getJointLinkList(): JointLink;
        addShape(shape: Shape): void;
        removeShape(shape: Shape): void;
        getType(): number;
        setType(type: number): void;
        wakeUp(): void;
        sleep(): void;
        isSleeping(): boolean;
        getSleepTime(): number;
        setAutoSleep(autoSleepEnabled: boolean): void;
        getLinearDamping(): number;
        setLinearDamping(damping: number): void;
        getAngularDamping(): number;
        setAngularDamping(damping: number): void;
        getPrev(): RigidBody;
        getNext(): RigidBody;
    }
    
    
    
    class RigidBodyConfig {
        position: Vec3;
        rotation: Mat3;
        linearVelocity: Vec3;
        angularVelocity: Vec3;
        type: number;
        autoSleep: boolean;
        linearDamping: number;
        angularDamping: number;
        constructor();
    }
    
    enum RigidBodyType {
        DYNAMIC = 0,
        STATIC = 1,
        KINEMATIC = 2
    }
    
    
    
    
    
    
    
    
    
    class Shape {
        _id: number;
        _prev: Shape;
        _next: Shape;
        _rigidBody: RigidBody;
        _geom: Geometry;
        _localTransform: Transform;
        _ptransform: Transform;
        _transform: Transform;
        _restitution: number;
        _friction: number;
        _density: number;
        _aabb: Aabb;
        _proxy: Proxy;
        _collisionGroup: number;
        _collisionMask: number;
        _contactCallback: ContactCallback;
        displacement: Vec3;
        userData: any;
        constructor(config: ShapeConfig);
        _sync(tf1: Transform, tf2: Transform): void;
        getFriction(): number;
        setFriction(friction: number): void;
        getRestitution(): number;
        setRestitution(restitution: number): void;
        getLocalTransform(): Transform;
        getLocalTransformTo(transform: Transform): void;
        getTransform(): Transform;
        getTransformTo(transform: Transform): void;
        setLocalTransform(transform: Transform): void;
        getDensity(): number;
        setDensity(density: number): void;
        getAabb(): Aabb;
        getAabbTo(aabb: Aabb): void;
        getGeometry(): Geometry;
        getRigidBody(): RigidBody;
        getCollisionGroup(): number;
        setCollisionGroup(collisionGroup: number): void;
        getCollisionMask(): number;
        setCollisionMask(collisionMask: number): void;
        getContactCallback(): ContactCallback;
        setContactCallback(callback: ContactCallback): void;
        getPrev(): Shape;
        getNext(): Shape;
    }
    
    
    
    
    
    class ShapeConfig {
        position: Vec3;
        rotation: Mat3;
        friction: number;
        restitution: number;
        density: number;
        geometry: Geometry;
        collisionGroup: number;
        collisionMask: number;
        contactCallback: ContactCallback;
        constructor();
    }
    
    
    
    
    
    class M {
        static quat_getReal(q: Quat): number;
        static vec3_abs(dst: Vec3, src: Vec3): void;
        static vec3_fromQuat(dst: Vec3, src: Quat): void;
        static mat3_mulRhsTransposed(dst: Mat3, src1: Mat3, src2: Mat3): void;
        static quat_scale(dst: Quat, src: Quat, s: number): void;
        static quat_normalize(dst: Quat, src: Quat): void;
        static quat_addRhsScaled(dst: Quat, src1: Quat, src2: Quat, src3: number): void;
        static quat_sub(dst: Quat, src1: Quat, src2: Quat): void;
        static quat_negate(dst: Quat, src: Quat): void;
        static quat_dot(src1: Quat, src2: Quat): number;
        static quat_slerp(dst: Quat, src1: Quat, src2: Quat, t: number): void;
        static quat_id(q: Quat): void;
        static mat3_toEulerXyz(dst: Vec3, src: Mat3): void;
        static mat3_getRow(dst: Vec3, src: Mat3, index: number): void;
        static mat3_negate(dst: Mat3, src: Mat3): void;
        static vec3_toCrossMatrix(dst: Mat3, src: Vec3): void;
        static vec3_negate(dst: Vec3, src: Vec3): void;
        static aabb_contains(min1: Vec3, max1: Vec3, min2: Vec3, max2: Vec3): boolean;
        static vec3_normalize(dst: Vec3, src: Vec3): void;
        static vec3_perp(dst: Vec3, src: Vec3): void;
        static quat_arc(dst: Quat, v1: Vec3, v2: Vec3): void;
        static mat3_fromCols(dst: Mat3, src1: Vec3, src2: Vec3, src3: Vec3): void;
        static aabb_combine(dstMin: Vec3, dstMax: Vec3, src1Min: Vec3, src1Max: Vec3, src2Min: Vec3, src2Max: Vec3): void;
        static aabb_surfaceArea(min: Vec3, max: Vec3): number;
        static vec3_max(dst: Vec3, src1: Vec3, src2: Vec3): void;
        static vec3_min(dst: Vec3, src1: Vec3, src2: Vec3): void;
        static vec3_mulMat3Transposed(dst: Vec3, src1: Vec3, src2: Mat3): void;
        static vec3_zero(vec: Vec3): void;
        static quat_fromQuat(dst: Quat, src: Quat): void;
        static quat_toQuat(src: Quat, dst: Quat): void;
        static mat3_fromEulerXyz(dst: Mat3, xyz: Vec3): void;
        static mat3_fromMat3(dst: Mat3, src: Mat3): void;
        static mat3_toMat3(src: Mat3, dst: Mat3): void;
        static vec3_fromVec3(dst: Vec3, src: Vec3): void;
        static vec3_toVec3(dst: Vec3, src: Vec3): void;
        static transform_assign(dst: Transform, src: Transform): void;
        static mat3_zero(dst: Mat3): void;
        static mat3_scaleRows(dst: Mat3, src: Mat3, x: number, y: number, z: number): void;
        static mat3_assign(dst: Mat3, src: Mat3): void;
        static mat3_inv(dst: Mat3, src: Mat3): void;
        static mat3_det(mat: Mat3): number;
        static mat3_add(dst: Mat3, src1: Mat3, src2: Mat3): void;
        static mat3_addRhsScaled(dst: Mat3, src1: Mat3, src2: Mat3, num: number): void;
        static mat3_inertiaFromCOG(dst: Mat3, src: Vec3): void;
        static mat3_scale(dst: Mat3, src: Mat3, mass: number): void;
        static mat3_mul(dst: Mat3, src1: Mat3, src2: Mat3): void;
        static mat3_mulLhsTransposed(dst: Mat3, src1: Mat3, src2: Mat3): void;
        static mat3_transformInertia(dst: Mat3, inertia: Mat3, rotation: Mat3): void;
        static mat3_fromQuat(dst: Mat3, quat: Quat): void;
        static quat_mul(dst: Quat, src1: Quat, src2: Quat): void;
        static quat_fromMat3(dst: Quat, mat: Mat3): void;
        static quat_fromVec3AndFloat(dst: Quat, vec: Vec3, num: number): void;
        static vec3_length(v: Vec3): number;
        static vec3_set(v: Vec3, x: number, y: number, z: number): void;
        static mat3_getCol(dst: Vec3, src: Mat3, index: number): void;
        static vec3_clamp(dst: Vec3, src: Vec3, min: Vec3, max: Vec3): void;
        static aabb_overlap(mi1: Vec3, ma1: Vec3, mi2: Vec3, ma2: Vec3): boolean;
        static vec3_get(vec: Vec3, index: number): number;
        static mat3_diagonal(dst: Mat3, x: number, y: number, z: number): void;
        static vec3_compWiseMul(dst: Vec3, v1: Vec3, v2: Vec3): void;
        static vec3_mulHorizontal(v: Vec3): number;
        static vec3_cross(dst: Vec3, v1: Vec3, v2: Vec3): void;
        static vec3_scale(dst: Vec3, src: Vec3, scale: number): void;
        static assert(b: boolean): void;
        static vec3_mulMat3(dst: Vec3, pos: Vec3, rot: Mat3): void;
        static vec3_isZero(v: Vec3): boolean;
        static vec3_sub(dst: Vec3, v1: Vec3, v2: Vec3): void;
        static vec3_add(dst: Vec3, v1: Vec3, v2: Vec3): void;
        static vec3_addRhsScaled(src: Vec3, add: Vec3, scale: number): Vec3;
        static vec3_addRhsScaledEQ(_: Vec3, src: Vec3, add: Vec3, scale: number): Vec3;
        static vec3_addRhsScaledTo(to: Vec3, src: Vec3, add: Vec3, scale: number): Vec3;
        static error(s: string): Error;
        static vec3_dot(v1: Vec3, v2: Vec3): number;
        static vec3_assign(dst: Vec3, src: Vec3): void;
        static transform_mul(dst: Transform, src1: Transform, src2: Transform): void;
        static compare3min(a: number, b: number, c: number): number;
        static compare3max(a: number, b: number, c: number): number;
        static toFixed8(num: number): string;
    }
    
    
    
    class Mat3 {
        static numCreations: number;
        e00: number;
        e01: number;
        e02: number;
        e10: number;
        e11: number;
        e12: number;
        e20: number;
        e21: number;
        e22: number;
        constructor(e00?: number, e01?: number, e02?: number, e10?: number, e11?: number, e12?: number, e20?: number, e21?: number, e22?: number);
        private _init;
        init(e00: number, e01: number, e02: number, e10: number, e11: number, e12: number, e20: number, e21: number, e22: number): Mat3;
        identity(): Mat3;
        zero(): Mat3;
        add(m: Mat3): Mat3;
        addTo(m: Mat3, to: Mat3): void;
        sub(m: Mat3): Mat3;
        scale(s: number): Mat3;
        scaleTo(s: number, to: Mat3): void;
        mul(m: Mat3): Mat3;
        mulTo(m: Mat3, to: Mat3): Mat3;
        addEq(m: Mat3): Mat3;
        subEq(m: Mat3): Mat3;
        scaleEq(s: number): Mat3;
        mulEq(m: Mat3): Mat3;
        prependScale(sx: number, sy: number, sz: number): Mat3;
        appendScale(sx: number, sy: number, sz: number): Mat3;
        prependRotation(rad: number, axisX: number, axisY: number, axisZ: number): Mat3;
        appendRotation(rad: number, axisX: number, axisY: number, axisZ: number): Mat3;
        prependScaleEq(sx: number, sy: number, sz: number): Mat3;
        appendScaleEq(sx: number, sy: number, sz: number): Mat3;
        prependRotationEq(rad: number, axisX: number, axisY: number, axisZ: number): Mat3;
        appendRotationEq(rad: number, axisX: number, axisY: number, axisZ: number): Mat3;
        transpose(): Mat3;
        transposeEq(): Mat3;
        determinant(): number;
        trace(): number;
        inverse(): Mat3;
        inverseEq(): Mat3;
        negateTo(to: Mat3): void;
        toArray(columnMajor?: boolean): Array<number>;
        copyFrom(m: Mat3): Mat3;
        clone(): Mat3;
        fromQuat(q: Quat | Laya.Quaternion): Mat3;
        toQuat(): Quat;
        fromEulerXyz(eulerAngles: Vec3): Mat3;
        toEulerXyz(): Vec3;
        toEulerXyzTo(to: Vec3): void;
        getRow(index: number): Vec3;
        getCol(index: number): Vec3;
        getRowTo(index: number, dst: Vec3): void;
        getColTo(index: number, dst: Vec3): void;
        fromRows(row0: Vec3, row1: Vec3, row2: Vec3): Mat3;
        fromCols(col0: Vec3, col1: Vec3, col2: Vec3): Mat3;
        toString(): String;
        private toFixed8;
    }
    
    
    
    
    class Mat4 {
        static numCreations: number;
        e00: number;
        e01: number;
        e02: number;
        e03: number;
        e10: number;
        e11: number;
        e12: number;
        e13: number;
        e20: number;
        e21: number;
        e22: number;
        e23: number;
        e30: number;
        e31: number;
        e32: number;
        e33: number;
        constructor(e00?: number, e01?: number, e02?: number, e03?: number, e10?: number, e11?: number, e12?: number, e13?: number, e20?: number, e21?: number, e22?: number, e23?: number, e30?: number, e31?: number, e32?: number, e33?: number);
        private _init;
        init(e00: number, e01: number, e02: number, e03: number, e10: number, e11: number, e12: number, e13: number, e20: number, e21: number, e22: number, e23: number, e30: number, e31: number, e32: number, e33: number): Mat4;
        identity(): Mat4;
        add(m: Mat4): Mat4;
        sub(m: Mat4): Mat4;
        scale(s: number): Mat4;
        mul(m: Mat4): Mat4;
        addEq(m: Mat4): Mat4;
        subEq(m: Mat4): Mat4;
        scaleEq(s: number): Mat4;
        mulEq(m: Mat4): Mat4;
        prependScale(sx: number, sy: number, sz: number): Mat4;
        appendScale(sx: number, sy: number, sz: number): Mat4;
        prependRotation(rad: number, axisX: number, axisY: number, axisZ: number): Mat4;
        appendRotation(rad: number, axisX: number, axisY: number, axisZ: number): Mat4;
        prependTranslation(tx: number, ty: number, tz: number): Mat4;
        appendTranslation(tx: number, ty: number, tz: number): Mat4;
        prependScaleEq(sx: number, sy: number, sz: number): Mat4;
        appendScaleEq(sx: number, sy: number, sz: number): Mat4;
        prependRotationEq(rad: number, axisX: number, axisY: number, axisZ: number): Mat4;
        appendRotationEq(rad: number, axisX: number, axisY: number, axisZ: number): Mat4;
        prependTranslationEq(tx: number, ty: number, tz: number): Mat4;
        appendTranslationEq(tx: number, ty: number, tz: number): Mat4;
        transpose(): Mat4;
        transposeEq(): Mat4;
        determinant(): number;
        trace(): number;
        inverse(): Mat4;
        inverseEq(): Mat4;
        lookAt(eyeX: number, eyeY: number, eyeZ: number, atX: number, atY: number, atZ: number, upX: number, upY: number, upZ: number): Mat4;
        perspective(fovY: number, aspect: number, near: number, far: number): Mat4;
        ortho(width: number, height: number, near: number, far: number): Mat4;
        toArray(columnMajor?: boolean): Array<number>;
        copyFrom(m: Mat4): Mat4;
        fromMat3(m: Mat3): Mat4;
        fromRotationAndPos(m: Mat3, v: Vec3): Mat4;
        fromTransform(transform: Transform): Mat4;
        clone(): Mat4;
        toString(): String;
    }
    
    
    class MathUtil {
        static POSITIVE_INFINITY: number;
        static NEGATIVE_INFINITY: number;
        static PI: number;
        static TWO_PI: number;
        static HALF_PI: number;
        static TO_RADIANS: number;
        static TO_DEGREES: number;
        static abs(x: number): number;
        static sin(x: number): number;
        static cos(x: number): number;
        static tan(x: number): number;
        static asin(x: number): number;
        static acos(x: number): number;
        static atan(x: number): number;
        static safeAsin(x: number): number;
        static safeAcos(x: number): number;
        static atan2(y: number, x: number): number;
        static sqrt(x: number): number;
        static clamp(x: number, min: number, max: number): number;
        static rand(): number;
        static randIn(min: number, max: number): number;
        static randVec3In(min: number, max: number): Vec3;
        static randVec3(): Vec3;
    }
    
    
    
    
    
    class Pool {
        stackVec3: Array<Vec3>;
        stackMat3: Array<Mat3>;
        stackMat4: Array<Mat4>;
        stackQuat: Array<Quat>;
        constructor();
        vec3(): Vec3;
        mat3(): Mat3;
        mat4(): Mat4;
        quat(): Quat;
        dispose(vec3?: Vec3, mat3?: Mat3, mat4?: Mat4, quat?: Quat): void;
        disposeVec3(v: Vec3): void;
        disposeMat3(m: Mat3): void;
        disposeMat4(m: Mat4): void;
        disposeQuat(q: Quat): void;
        _dispose<T>(stack: Array<T>, obj: T): T;
    }
    
    
    
    class Quat {
        static numCreations: number;
        x: number;
        y: number;
        z: number;
        w: number;
        constructor(x?: number, y?: number, z?: number, w?: number);
        private initi;
        identity(): Quat;
        init(x: number, y: number, z: number, w: number): Quat;
        add(q: Quat): Quat;
        addScaleTo(q: Quat, scale: number, to: Quat): void;
        sub(q: Quat): Quat;
        subTo(q: Quat, to: Quat): Quat;
        scale(s: number): Quat;
        scaleTo(s: number, to: Quat): void;
        addEq(q: Quat): Quat;
        subEq(q: Quat): Quat;
        scaleEq(s: number): Quat;
        length(): number;
        lengthSq(): number;
        dot(q: Quat): number;
        normalized(): Quat;
        normalize(): Quat;
        normalizeTo(to: Quat): Quat;
        negateTo(to: Quat): void;
        setArc(v1: Vec3, v2: Vec3): Quat;
        slerp(q: Quat, t: number): Quat;
        copyFrom(q: Quat): Quat;
        clone(): Quat;
        fromMat3(m: Mat3): Quat;
        toMat3(): Mat3;
        toString(): String;
    }
    
    class Setting {
        static defaultFriction: number;
        static defaultRestitution: number;
        static defaultDensity: number;
        static defaultCollisionGroup: number;
        static defaultCollisionMask: number;
        static maxTranslationPerStep: number;
        static maxRotationPerStep: number;
        static bvhProxyPadding: number;
        static bvhIncrementalCollisionThreshold: number;
        static defaultGJKMargin: number;
        static enableGJKCaching: boolean;
        static maxEPAVertices: number;
        static maxEPAPolyhedronFaces: number;
        static contactEnableBounceThreshold: number;
        static velocityBaumgarte: number;
        static positionSplitImpulseBaumgarte: number;
        static positionNgsBaumgarte: number;
        static contactUseAlternativePositionCorrectionAlgorithmDepthThreshold: number;
        static defaultContactPositionCorrectionAlgorithm: number;
        static alternativeContactPositionCorrectionAlgorithm: number;
        static contactPersistenceThreshold: number;
        static maxManifoldPoints: number;
        static defaultJointConstraintSolverType: number;
        static defaultJointPositionCorrectionAlgorithm: number;
        static jointWarmStartingFactorForBaungarte: number;
        static jointWarmStartingFactor: number;
        static minSpringDamperDampingRatio: number;
        static minRagdollMaxSwingAngle: number;
        static maxJacobianRows: number;
        static directMlcpSolverEps: number;
        static islandInitialRigidBodyArraySize: number;
        static islandInitialConstraintArraySize: number;
        static sleepingVelocityThreshold: number;
        static sleepingAngularVelocityThreshold: number;
        static sleepingTimeThreshold: number;
        static disableSleeping: boolean;
        static linearSlop: number;
        static angularSlop: number;
    }
    
    
    
    
    class Transform {
        _position: Vec3;
        _rotation: Mat3;
        constructor(pos?: Vec3, rot?: Mat3);
        identity(): Transform;
        getPosition(): Vec3;
        getPositionTo(position: Vec3): void;
        setPosition(position: Vec3| Laya.Vector3): Transform;
        translate(translation: Vec3): void;
        getRotation(): Mat3;
        getRotationTo(out: Mat3): void;
        setRotation(rotation: Mat3): Transform;
        setRotationXyz(eulerAngles: Vec3): void;
        rotate(rotation: Mat3): void;
        rotateXyz(eulerAngles: Vec3): void;
        getOrientation(): Quat;
        getOrientationTo(orientation: Quat): void;
        setOrientation(quaternion: Quat| Laya.Quaternion): Transform;
        clone(): Transform;
        copyFrom(transform: Transform): Transform;
    }
    
    
    
    
    class Vec3 {
        static numCreations: number;
        x: number;
        y: number;
        z: number;
        constructor(x?: number, y?: number, z?: number);
        init(x: number, y: number, z: number): Vec3;
        isZero(): boolean;
        zero(): Vec3;
        abs(): Vec3;
        absTo(to: Vec3): void;
        absEq(): void;
        clampTo(min: Vec3, max: Vec3, to: Vec3): void;
        private initi;
        add(v: Vec3): Vec3;
        addTo(v: Vec3, to: Vec3): Vec3;
        addScaled(v: Vec3, s: number): Vec3;
        addScaledTo(v: Vec3, s: number, to: Vec3): Vec3;
        sub(v: Vec3): Vec3;
        subTo(v: Vec3, to: Vec3): void;
        scale(s: number): Vec3;
        scaleTo(s: number, to: Vec3): Vec3;
        scale3(sx: number, sy: number, sz: number): Vec3;
        dot(v: Vec3): number;
        cross(v: Vec3): Vec3;
        crossTo(v: Vec3, to: Vec3): Vec3;
        addEq(v: Vec3): Vec3;
        addScaledEq(v: Vec3, s: number): Vec3;
        subEq(v: Vec3): Vec3;
        scaleEq(s: number): Vec3;
        scale3Eq(sx: number, sy: number, sz: number): Vec3;
        crossEq(v: Vec3): Vec3;
        minEq(v: Vec3): Vec3;
        minTo(v: Vec3, to: Vec3): Vec3;
        maxEq(v: Vec3): Vec3;
        maxTo(v: Vec3, to: Vec3): Vec3;
        mulMat3(m: Mat3): Vec3;
        mulMat3to(m: Mat3, to: Vec3): Vec3;
        mulMat4(m: Mat4): Vec3;
        mulTransform(tf: Transform): Vec3;
        mulMat3Eq(m: Mat3): Vec3;
        mulMat4Eq(m: Mat4): Vec3;
        mulTransformEq(tf: Transform): Vec3;
        length(): number;
        lengthSq(): number;
        normalized(): Vec3;
        normalize(): Vec3;
        normalzeTo(to: Vec3): Vec3;
        negate(): Vec3;
        negateEq(): Vec3;
        negateTo(to: Vec3): Vec3;
        copyFrom(v: Vec3): Vec3;
        clone(): Vec3;
        toString(): String;
    }
    
    
    
    
    
    
    
    
    
    
    class Contact {
        _next: Contact;
        _prev: Contact;
        _link1: ContactLink;
        _link2: ContactLink;
        _s1: Shape;
        _s2: Shape;
        _b1: RigidBody;
        _b2: RigidBody;
        _detector: Detector;
        _cachedDetectorData: CachedDetectorData;
        _detectorResult: DetectorResult;
        _latest: boolean;
        _shouldBeSkipped: boolean;
        _manifold: Manifold;
        _updater: ManifoldUpdater;
        _contactConstraint: ContactConstraint;
        _touching: boolean;
        constructor();
        private attachLinks;
        private detachLinks;
        private sendBeginContact;
        private sendEndContact;
        private sendPreSolve;
        private sendPostSolve;
        _attach(s1: Shape, s2: Shape, detector: Detector): void;
        _detach(): void;
        _updateManifold(): void;
        _postSolve(): void;
        getShape1(): Shape;
        getShape2(): Shape;
        isTouching(): boolean;
        getManifold(): Manifold;
        getContactConstraint(): ContactConstraint;
        getPrev(): Contact;
        getNext(): Contact;
    }
    
    
    
    class ContactLink {
        _prev: ContactLink;
        _next: ContactLink;
        _contact: Contact;
        _other: RigidBody;
        constructor();
        getContact(): Contact;
        getOther(): RigidBody;
        getPrev(): ContactLink;
        getNext(): ContactLink;
    }
    
    
    
    
    
    class ContactManager {
        _numContacts: number;
        _contactList: Contact;
        _contactListLast: Contact;
        _contactPool: Contact;
        _broadPhase: BroadPhase;
        _collisionMatrix: CollisionMatrix;
        constructor(broadPhase: BroadPhase);
        createContacts(): void;
        destroyOutdatedContacts(): void;
        shouldCollide(s1: Shape, s2: Shape): boolean;
        _updateContacts(): void;
        _postSolve(): void;
        _updateManifolds(): void;
        _destroyContact(contact: Contact): void;
        getNumContacts(): number;
        getContactList(): Contact;
    }
    
    
    
    
    
    class Island {
        gravity: Vec3;
        numRigidBodies: number;
        rigidBodies: Array<RigidBody>;
        numSolvers: number;
        solvers: Array<ConstraintSolver>;
        numSolversSi: number;
        solversSi: Array<ConstraintSolver>;
        numSolversNgs: number;
        solversNgs: Array<ConstraintSolver>;
        constructor();
        private fastInvExp;
        private addConstraintSolverSI;
        private addConstraintSolverNgs;
        _clear(): void;
        _setGravity(gravity: Vec3): void;
        _addRigidBody(rigidBody: RigidBody): void;
        _addConstraintSolver(solver: ConstraintSolver, positionCorrection: number): void;
        _stepSingleRigidBody(timeStep: TimeStep, rb: RigidBody): void;
        _step(timeStep: TimeStep, numVelocityIterations: number, numPositionIterations: number): void;
    }
    
    class TimeStep {
        dt: number;
        invDt: number;
        dtRatio: number;
        constructor();
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    class World {
        _rigidBodyList: RigidBody;
        _rigidBodyListLast: RigidBody;
        _jointList: Joint;
        _jointListLast: Joint;
        _broadPhase: BroadPhase;
        _contactManager: ContactManager;
        _numRigidBodies: number;
        _numJoints: number;
        _numShapes: number;
        _numIslands: number;
        _numVelocityIterations: number;
        _numPositionIterations: number;
        _gravity: Vec3;
        _timeStep: TimeStep;
        _island: Island;
        _rigidBodyStack: Array<RigidBody>;
        _solversInIslands: Array<ConstraintSolver>;
        _numSolversInIslands: number;
        _rayCastWrapper: RayCastWrapper;
        _convexCastWrapper: ConvexCastWrapper;
        _aabbTestWrapper: AabbTestWrapper;
        _pool: Pool;
        _shapeIdCount: number;
        constructor(broadPhaseType?: number, gravity?: Vec3);
        _updateContacts(): void;
        _solveIslands(): void;
        buildIsland(base: RigidBody): void;
        _addShape(shape: Shape): void;
        _removeShape(shape: Shape): void;
        step(timeStep: number): void;
        addRigidBody(rigidBody: RigidBody): void;
        removeRigidBody(rigidBody: RigidBody): void;
        addJoint(joint: Joint): void;
        removeJoint(joint: Joint): void;
        rayCast(begin: Vec3, end: Vec3, callback: RayCastCallback): void;
        convexCast(convex: ConvexGeometry, begin: Transform, translation: Vec3, callback: RayCastCallback): void;
        aabbTest(aabb: Aabb, callback: AabbTestCallback): void;
        getRigidBodyList(): RigidBody;
        getJointList(): Joint;
        getBroadPhase(): BroadPhase;
        getContactManager(): ContactManager;
        getNumRigidBodies(): number;
        getNumJoints(): number;
        getNumShapes(): number;
        getNumIslands(): number;
        getNumVelocityIterations(): number;
        setNumVelocityIterations(numVelocityIterations: number): void;
        getNumPositionIterations(): number;
        setNumPositionIterations(numPositionIterations: number): void;
        getGravity(): Vec3;
        setGravity(gravity: Vec3): void;
    }
    class RayCastWrapper extends BroadPhaseProxyCallback {
        callback: RayCastCallback;
        begin: Vec3;
        end: Vec3;
        rayCastHit: RayCastHit;
        constructor();
        process(proxy: Proxy): void;
    }
    class ConvexCastWrapper extends BroadPhaseProxyCallback {
        callback: RayCastCallback;
        begin: Transform;
        translation: Vec3;
        convex: ConvexGeometry;
        rayCastHit: RayCastHit;
        zero: Vec3;
        constructor();
        process(proxy: Proxy): void;
    }
    class AabbTestWrapper extends BroadPhaseProxyCallback {
        _callback: AabbTestCallback;
        _aabb: Aabb;
        constructor();
        process(proxy: Proxy): void;
    }
    
    
    
    
    }