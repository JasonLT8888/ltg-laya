import vs from "./shader/LTTestShader.vs";
import fs from "./shader/LTTestShader.fs";

export class LTTestMaterial extends Laya.Material {

    constructor() {
        super();
        this.setShaderName("LTTestShader");
    }

    static InitShader() {
        //所有的attributeMap属性
        var attributeMap = { 
            'a_Position': Laya.VertexMesh.MESH_POSITION0, 
            'a_Normal': Laya.VertexMesh.MESH_NORMAL0,
            'a_Texcoord0': Laya.VertexMesh.MESH_TEXTURECOORDINATE0,
        };
        //所有的uniform属性
        var uniformMap = { 'u_MvpMatrix': Laya.Shader3D.PERIOD_SPRITE, 'u_WorldMat': Laya.Shader3D.PERIOD_SPRITE, "u_Time":Laya.Shader3D.PERIOD_SCENE };
        //注册CustomShader 
        var customShader = Laya.Shader3D.add("LTTestShader");
        //创建一个SubShader
        var subShader = new Laya.SubShader(attributeMap, uniformMap);
        //我们的自定义shader customShader中添加我们新创建的subShader
        customShader.addSubShader(subShader);
        //往新创建的subShader中添加shaderPass
        subShader.addShaderPass(vs, fs);
    }

}