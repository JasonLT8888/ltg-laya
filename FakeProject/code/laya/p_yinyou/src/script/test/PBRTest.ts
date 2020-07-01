import LTRes from "../../LTGame/Res/LTRes";

const scene_path = "res/export/Conventional/SkyBox.ls";

export class PBRTest {

    private _s3d: Laya.Scene3D;

    public async Create() {
        this._s3d = await LTRes.LoadAndGet(scene_path, true);
        Laya.stage.addChildAt(this._s3d, 1);
        this._s3d.reflection = (this._s3d.skyRenderer.material as Laya.SkyBoxMaterial).textureCube;

        let sphereMesh: Laya.Mesh = Laya.PrimitiveMesh.createSphere(0.25, 32, 32);
        const row: number = 6;
        this.addSpheresSpecialMetallic(sphereMesh, new Laya.Vector3(0, 1.5, 2), this._s3d, row, new Laya.Vector4(186 / 255, 110 / 255, 64 / 255, 1.0), 1.0);
        this.addSpheresSmoothnessMetallic(sphereMesh, new Laya.Vector3(0, 0, 2), this._s3d, 3, row, new Laya.Vector4(1.0, 1.0, 1.0, 1.0));
        this.addSpheresSpecialMetallic(sphereMesh, new Laya.Vector3(0, -1.5, 2), this._s3d, row, new Laya.Vector4(0.0, 0.0, 0.0, 1.0), 0.0);
    }

    /**
	 * Add some different smoothness with special metallic sphere.
	 */
    addSpheresSpecialMetallic(sphereMesh: Laya.Mesh, offset: Laya.Vector3, scene: Laya.Scene3D, col: number, color: Laya.Vector4,
        metallic: number = 0): void {
        const width: number = col * 0.5;
        for (var i: number = 0, n: number = col; i < n; i++) {//diffenent smoothness
            var smoothness: number = i / (n - 1);
            // var metallic: number = metallic;

            var pos: Laya.Vector3 = new Laya.Vector3();
            pos.setValue(-width / 2 + i * width / (n - 1), 0, 3.0);
            Laya.Vector3.add(offset, pos, pos);

            this.addPBRSphere(sphereMesh, pos, scene, color, smoothness, metallic);
        }
    }

    /**
	 * Add some different smoothness and metallic sphere.
	 */
    addSpheresSmoothnessMetallic(sphereMesh: Laya.Mesh, offset: Laya.Vector3, scene: Laya.Scene3D,
        row: number, col: number, color: Laya.Vector4): void {
        const width: number = col * 0.5;
        const height: number = row * 0.5;
        for (var i: number = 0, n: number = col; i < n; i++) {//diffenent smoothness
            for (var j: number = 0, m: number = row; j < m; j++) {//diffenent metallic
                var smoothness: number = i / (n - 1);
                var metallic: number = 1.0 - j / (m - 1);

                var pos: Laya.Vector3 = new Laya.Vector3();
                pos.setValue(-width / 2 + i * width / (n - 1), height / 2 - j * height / (m - 1), 3.0);
                Laya.Vector3.add(offset, pos, pos);

                this.addPBRSphere(sphereMesh, pos, scene, color, smoothness, metallic);
            }
        }
    }

    /**
	 * Add one with smoothness and metallic sphere.
	 */
    private addPBRSphere(sphereMesh: Laya.Mesh, position: Laya.Vector3, scene: Laya.Scene3D,
        color: Laya.Vector4, smoothness: number, metallic: number): Laya.PBRStandardMaterial {
        var mat: Laya.PBRStandardMaterial = new Laya.PBRStandardMaterial();
        mat.albedoColor = color;
        mat.smoothness = smoothness;
        mat.metallic = metallic;

        var meshSprite: Laya.MeshSprite3D = new Laya.MeshSprite3D(sphereMesh);
        meshSprite.meshRenderer.sharedMaterial = mat;
        var transform: Laya.Transform3D = meshSprite.transform;
        transform.localPosition = position;
        scene.addChild(meshSprite);
        return mat;
    }

    public Clear() {
        this._s3d.destroy();
        LTRes.Unload(scene_path);
    }

}