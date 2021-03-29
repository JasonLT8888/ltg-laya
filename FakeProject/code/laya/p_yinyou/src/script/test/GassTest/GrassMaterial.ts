import fs from './shader/GrassShaderFS.fs';
import vs from './shader/GrassShaderVS.vs';

export class GrassMaterial extends Laya.Material {
    static hasInited: boolean = false;
    /**@internal */
    static WINDAINTENSITY: number = Laya.Shader3D.propertyNameToID("u_WindAIntensity");
    /**@internal */
    static WINDAFREQUECY: number = Laya.Shader3D.propertyNameToID("u_WindAFrequency");
    /**@internal */
    static WINDATILING: number = Laya.Shader3D.propertyNameToID("u_WindATiling");
    /**@internal */
    static WINDAWRAP: number = Laya.Shader3D.propertyNameToID("u_WindAWrap");

    /**@internal */
    static WINDBINTENSITY: number = Laya.Shader3D.propertyNameToID("u_WindBIntensity");
    /**@internal */
    static WINDBFREQUECY: number = Laya.Shader3D.propertyNameToID("u_WindBFrequency");
    /**@internal */
    static WINDBTILING: number = Laya.Shader3D.propertyNameToID("u_WindBTiling");
    /**@internal */
    static WINDBWRAP: number = Laya.Shader3D.propertyNameToID("u_WindBWrap");

    /**@internal */
    static WINDCINTENSITY: number = Laya.Shader3D.propertyNameToID("u_WindCIntensity");
    /**@internal */
    static WINDCFREQUECY: number = Laya.Shader3D.propertyNameToID("u_WindCFrequency");
    /**@internal */
    static WINDCTILING: number = Laya.Shader3D.propertyNameToID("u_WindCTiling");
    /**@internal */
    static WINDCWRAP: number = Laya.Shader3D.propertyNameToID("u_WindCWrap");

    //grass hight width
    static GRASSHEIGHT: number = Laya.Shader3D.propertyNameToID("u_grassHeight");
    static GRASSWIDTH: number = Laya.Shader3D.propertyNameToID("u_grassWidth");
    //grass Bound 必须和草系统里面的UV相同才能得到很好的效果
    static GRASSBOUND: number = Laya.Shader3D.propertyNameToID("u_BoundSize");
    //地面颜色
    static GROUNDCOLOR: number = Laya.Shader3D.propertyNameToID("u_GroundColor");
    static ALBEDOTEXTURE: number = Laya.Shader3D.propertyNameToID("u_albedoTexture");



    static __init__(): void {

        var attributeMap: any = {
            'a_Position': Laya.VertexMesh.MESH_POSITION0,
            'a_Normal': Laya.VertexMesh.MESH_NORMAL0,
            'a_Color': Laya.VertexMesh.MESH_COLOR0,
            'a_Tangent0': Laya.VertexMesh.MESH_TANGENT0,
            'a_privotPosition': Laya.VertexMesh.MESH_CUSTOME0
        };

        var uniformMap: any = {
            'u_AlbedoTexture': Laya.Shader3D.PERIOD_MATERIAL,
            'u_AlbedoColor': Laya.Shader3D.PERIOD_MATERIAL,
            'u_TilingOffset': Laya.Shader3D.PERIOD_MATERIAL,
            'u_MvpMatrix': Laya.Shader3D.PERIOD_SPRITE,
            'u_CameraDirection': Laya.Shader3D.PERIOD_CAMERA,
            'u_CameraUp': Laya.Shader3D.PERIOD_CAMERA,
            'u_CameraPos': Laya.Shader3D.PERIOD_CAMERA,
            'u_View': Laya.Shader3D.PERIOD_CAMERA,
            'u_Projection': Laya.Shader3D.PERIOD_CAMERA,
            "u_Time": Laya.Shader3D.PERIOD_SCENE,
            'u_ViewProjection': Laya.Shader3D.PERIOD_CAMERA,
            //wind
            "u_WindAIntensity": Laya.Shader3D.PERIOD_MATERIAL,
            "u_WindAFrequency": Laya.Shader3D.PERIOD_MATERIAL,
            "u_WindATiling": Laya.Shader3D.PERIOD_MATERIAL,
            "u_WindAWrap": Laya.Shader3D.PERIOD_MATERIAL,
            "u_WindBIntensity": Laya.Shader3D.PERIOD_MATERIAL,
            "u_WindBFrequency": Laya.Shader3D.PERIOD_MATERIAL,
            "u_WindBTiling": Laya.Shader3D.PERIOD_MATERIAL,
            "u_WindBWrap": Laya.Shader3D.PERIOD_MATERIAL,
            "u_WindCIntensity": Laya.Shader3D.PERIOD_MATERIAL,
            "u_WindCFrequency": Laya.Shader3D.PERIOD_MATERIAL,
            "u_WindCTiling": Laya.Shader3D.PERIOD_MATERIAL,
            "u_WindCWrap": Laya.Shader3D.PERIOD_MATERIAL,
            //grass
            "u_grassHeight": Laya.Shader3D.PERIOD_MATERIAL,
            "u_grassWidth": Laya.Shader3D.PERIOD_MATERIAL,
            "u_BoundSize": Laya.Shader3D.PERIOD_MATERIAL,
            "u_GroundColor": Laya.Shader3D.PERIOD_MATERIAL,
            "u_albedoTexture": Laya.Shader3D.PERIOD_MATERIAL

        };

        var stateMap = {
            's_Cull': Laya.Shader3D.RENDER_STATE_CULL,
            's_Blend': Laya.Shader3D.RENDER_STATE_BLEND,
            's_BlendSrc': Laya.Shader3D.RENDER_STATE_BLEND_SRC,
            's_BlendDst': Laya.Shader3D.RENDER_STATE_BLEND_DST,
            's_DepthTest': Laya.Shader3D.RENDER_STATE_DEPTH_TEST,
            's_DepthWrite': Laya.Shader3D.RENDER_STATE_DEPTH_WRITE
        };

        var shader: Laya.Shader3D = Laya.Shader3D.add("GrassShader", attributeMap, uniformMap, false, false);
        var subShader: Laya.SubShader = new Laya.SubShader(attributeMap, uniformMap);
        shader.addSubShader(subShader);
        var pass: Laya.ShaderPass = subShader.addShaderPass(vs, fs, stateMap, "Forward");
        pass.renderState.cull = Laya.RenderState.CULL_BACK;

    }




    constructor() {

        if (!GrassMaterial.hasInited) {
            GrassMaterial.__init__();
            GrassMaterial.hasInited = true;
        }

        super();
        this.setShaderName("GrassShader");
        // todo  渲染队列选择
        this.alphaTest = false;
        this.renderQueue = Laya.Material.RENDERQUEUE_OPAQUE;
        this.depthWrite = true;
        this.cull = Laya.RenderState.CULL_BACK;
        this.blend = Laya.RenderState.BLEND_DISABLE;
        this.depthTest = Laya.RenderState.DEPTHTEST_LESS;
        this.setWindA(1.77, 4, new Laya.Vector2(0.1, 0.1), new Laya.Vector2(0.5, 0.5));
        this.setWindB(0.25, 7.7, new Laya.Vector2(0.37, 3), new Laya.Vector2(0.5, 0.5));
        this.setWindC(0.125, 11.7, new Laya.Vector2(0.77, 3), new Laya.Vector2(0.5, 0.5));
        this.grassHight = 1.0;
        this.grassWidth = 1.0;
        this.grassGroundColor = new Laya.Vector3(0.25, 0.49, 0.23);
        this.grassBoundSize = new Laya.Vector4(-105, -105, 210, 210);
        this.albedoTexture = Laya.Loader.getRes("res/InstancedIndirectGrassVertexColor.jpg");
    }

    setWindA(windIntensity: number, windFrequency: number, windTiling: Laya.Vector2, windWrap: Laya.Vector2) {
        this._shaderValues.setNumber(GrassMaterial.WINDAINTENSITY, windIntensity);
        this._shaderValues.setNumber(GrassMaterial.WINDAFREQUECY, windFrequency);
        this._shaderValues.setVector2(GrassMaterial.WINDATILING, windTiling);
        this._shaderValues.setVector2(GrassMaterial.WINDAWRAP, windWrap);
    }

    setWindB(windIntensity: number, windFrequency: number, windTiling: Laya.Vector2, windWrap: Laya.Vector2) {
        this._shaderValues.setNumber(GrassMaterial.WINDBINTENSITY, windIntensity);
        this._shaderValues.setNumber(GrassMaterial.WINDBFREQUECY, windFrequency);
        this._shaderValues.setVector2(GrassMaterial.WINDBTILING, windTiling);
        this._shaderValues.setVector2(GrassMaterial.WINDBWRAP, windWrap);
    }

    setWindC(windIntensity: number, windFrequency: number, windTiling: Laya.Vector2, windWrap: Laya.Vector2) {
        this._shaderValues.setNumber(GrassMaterial.WINDCINTENSITY, windIntensity);
        this._shaderValues.setNumber(GrassMaterial.WINDCFREQUECY, windFrequency);
        this._shaderValues.setVector2(GrassMaterial.WINDCTILING, windTiling);
        this._shaderValues.setVector2(GrassMaterial.WINDCWRAP, windWrap);
    }

    set grassHight(value: number) {
        this._shaderValues.setNumber(GrassMaterial.GRASSHEIGHT, value);
    }

    set grassWidth(value: number) {
        this._shaderValues.setNumber(GrassMaterial.GRASSWIDTH, value);
    }

    set grassGroundColor(value: Laya.Vector3) {
        this._shaderValues.setVector3(GrassMaterial.GROUNDCOLOR, value);
    }

    set grassBoundSize(value: Laya.Vector4) {
        this._shaderValues.setVector(GrassMaterial.GRASSBOUND, value);
    }

    set albedoTexture(value: Laya.BaseTexture) {
        this._shaderValues.setTexture(GrassMaterial.ALBEDOTEXTURE, value);
    }

}