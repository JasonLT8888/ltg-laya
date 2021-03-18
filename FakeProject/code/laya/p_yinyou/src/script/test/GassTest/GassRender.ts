import { GrassMaterial } from "./GrassMaterial";
import { GrassRenderManager } from "./GassRenderManager";

export class GlassRender {

    private grassManager: GrassRenderManager;
    private instanceCMD: Laya.DrawMeshInstancedCMD;
    private materialBlock: Laya.MaterialInstancePropertyBlock;
    private grassMaterial: GrassMaterial;
    private buf: Laya.CommandBuffer;
    private camera: Laya.Camera;
    constructor(manager: GrassRenderManager, camera: Laya.Camera) {
        this.grassManager = manager;
        this.createCommandBuffer();
        this.camera = camera;
    }


    /**
     * @internal
     */
    private creatGrassMesh(): Laya.Mesh {
        // 生成 单片 grass (一个 三角形)
        var vertexArray: Float32Array = new Float32Array(3 * 3);
        vertexArray[0] = -0.25 * 0.2;  // p1.x
        vertexArray[3] = 0.25 * 0.2; // p2.x
        vertexArray[7] = 1 * 0.4;     // p3.y
        var indexArray: Uint16Array = new Uint16Array([2, 1, 0]);
        var vertexDeclaration: Laya.VertexDeclaration = Laya.VertexMesh.getVertexDeclaration("POSITION");
        var mesh = Laya.PrimitiveMesh._createMesh(vertexDeclaration, vertexArray, indexArray);
        return mesh;
    }

    /**
     * @internal
     */
    private createMaterial(): GrassMaterial {
        var mat = new GrassMaterial();
        this.grassMaterial = mat;
        //set mat Property
        return mat;
    }

    /**
     * 创建CommandBuffer命令缓存流
     * @param camera 
     */
    createCommandBuffer() {
        Laya.DrawMeshInstancedCMD.maxInstanceCount = 1000000;
        //创建渲染命令流
        this.buf = new Laya.CommandBuffer();
        //创建材质instance属性块
        this.materialBlock = new Laya.MaterialInstancePropertyBlock();
        //设置属性
        this.materialBlock.setVector3Array("a_privotPosition", this.grassManager.dataArrayBuffer, Laya.InstanceLocation.CUSTOME0);
        // let matrixs =new Array<Matrix4x4>();
        // for(var i = 0;i<1000000;i++){
        //     matrixs.push(new Matrix4x4());
        // }
        this.instanceCMD = this.buf.drawMeshInstance(this.creatGrassMesh(), 0, null, this.createMaterial(), 0, this.materialBlock, this.grassManager.drawArrayLength);
        return;
    }

    removeCommandBuffer() {
        this.camera.removeCommandBuffer(Laya.CameraEventFlags.BeforeTransparent, this.buf);
    }

    addCommandBuffer() {
        this.camera.addCommandBuffer(Laya.CameraEventFlags.BeforeTransparent, this.buf);
    }

    changeDrawNums() {
        this.materialBlock.setVector3Array("a_privotPosition", this.grassManager.dataArrayBuffer, Laya.InstanceLocation.CUSTOME0);
        this.instanceCMD.setDrawNums(this.grassManager.drawArrayLength);
    }

}