import Vector3Ex from "./Vector3Ex";

export class CameraEx {

    static ScreenPosToWorldPos(camera: Laya.Camera, screenPos: Laya.Vector2, fakeYPos: number): Laya.Vector3 {
        let ray = new Laya.Ray(Vector3Ex.zero, Vector3Ex.zero);
        camera.viewportPointToRay(screenPos, ray);
        let downVec = Vector3Ex.s_down;
        let dotValue = Vector3Ex.Dot(downVec, ray.direction);
        let heightValue = ray.origin.y;
        let scaleValue = heightValue / dotValue;
        let finalDir = Vector3Ex.Scale(ray.direction, scaleValue);
        return Vector3Ex.Add(ray.origin, finalDir);
    }

    static ScreenPosToRay(camera: Laya.Camera, screenPos: Laya.Vector2): Laya.Ray {
        let ray: Laya.Ray = new Laya.Ray(Vector3Ex.zero, Vector3Ex.zero);
        let clickPoint = new Laya.Vector2(screenPos.x / Laya.stage.width, screenPos.y / Laya.stage.height);
        camera.normalizedViewportPointToRay(clickPoint, ray);
        return ray;
    }

}