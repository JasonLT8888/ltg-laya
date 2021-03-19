import OutlineVS from "./shader/outline.vs";
import OutlineFS from "./shader/outline.fs";
import Outline02VS from "./shader/outline02.vs";
import Outline02FS from "./shader/outline02.fs";

export class LTOutlineMaterial extends Laya.Material {
    static ALBEDOTEXTURE: number = Laya.Shader3D.propertyNameToID("u_AlbedoTexture");
    static OUTLINECOLOR: number = Laya.Shader3D.propertyNameToID("u_OutlineColor");
    static OUTLINEWIDTH: number = Laya.Shader3D.propertyNameToID("u_OutlineWidth");
    static OUTLINELIGHTNESS: number = Laya.Shader3D.propertyNameToID("u_OutlineLightness");

    static SHADERDEFINE_ALBEDOTEXTURE: Laya.ShaderDefine;

    static __initDefine__(): void {
        LTOutlineMaterial.SHADERDEFINE_ALBEDOTEXTURE = Laya.Shader3D.getDefineByName("ALBEDOTEXTURE");
    }

	/**
	 * 漫反射贴图。
	 */
    get albedoTexture(): Laya.BaseTexture {
        return this._shaderValues.getTexture(LTOutlineMaterial.ALBEDOTEXTURE);
    }

    set albedoTexture(value: Laya.BaseTexture) {
        if (value)
            this._shaderValues.addDefine(LTOutlineMaterial.SHADERDEFINE_ALBEDOTEXTURE);
        else
            this._shaderValues.removeDefine(LTOutlineMaterial.SHADERDEFINE_ALBEDOTEXTURE);
        this._shaderValues.setTexture(LTOutlineMaterial.ALBEDOTEXTURE, value);
    }
	/**
	 * 线条颜色
	 */
    get outlineColor(): Laya.Vector4 {
        return this._shaderValues.getVector(LTOutlineMaterial.OUTLINECOLOR);
    }

    set outlineColor(value: Laya.Vector4) {
        this._shaderValues.setVector(LTOutlineMaterial.OUTLINECOLOR, value);
    }
	/**
	 * 获取轮廓宽度,范围为0到0.05。
	 */
    get outlineWidth(): number {
        return this._shaderValues.getNumber(LTOutlineMaterial.OUTLINEWIDTH);
    }

    set outlineWidth(value: number) {
        value = Math.max(0.0, Math.min(0.05, value));
        this._shaderValues.setNumber(LTOutlineMaterial.OUTLINEWIDTH, value);
    }

	/**
	 * 轮廓亮度,范围为0到1。
	 */
    get outlineLightness(): number {
        return this._shaderValues.getNumber(LTOutlineMaterial.OUTLINELIGHTNESS);
    }

    set outlineLightness(value: number) {
        value = Math.max(0.0, Math.min(1.0, value));
        this._shaderValues.setNumber(LTOutlineMaterial.OUTLINELIGHTNESS, value);
    }

    static InitShader(): void {
        this.__initDefine__();
		let attributeMap: any = {
			'a_Position': Laya.VertexMesh.MESH_POSITION0,
			'a_Color': Laya.VertexMesh.MESH_COLOR0,
			'a_Normal': Laya.VertexMesh.MESH_NORMAL0,
			'a_Texcoord0': Laya.VertexMesh.MESH_TEXTURECOORDINATE0,
			'a_Texcoord1': Laya.VertexMesh.MESH_TEXTURECOORDINATE1,
			'a_BoneWeights': Laya.VertexMesh.MESH_BLENDWEIGHT0,
			'a_BoneIndices': Laya.VertexMesh.MESH_BLENDINDICES0,
			'a_Tangent0': Laya.VertexMesh.MESH_TANGENT0,
			'a_WorldMat': Laya.VertexMesh.MESH_WORLDMATRIX_ROW0
		};
        let uniformMap: any = {
            'u_Bones': Laya.Shader3D.PERIOD_CUSTOM,
            'u_DiffuseTexture': Laya.Shader3D.PERIOD_MATERIAL,
            'u_SpecularTexture': Laya.Shader3D.PERIOD_MATERIAL,
            'u_NormalTexture': Laya.Shader3D.PERIOD_MATERIAL,
            'u_AlphaTestValue': Laya.Shader3D.PERIOD_MATERIAL,
            'u_DiffuseColor': Laya.Shader3D.PERIOD_MATERIAL,
            'u_MaterialSpecular': Laya.Shader3D.PERIOD_MATERIAL,
            'u_Shininess': Laya.Shader3D.PERIOD_MATERIAL,
            'u_TilingOffset': Laya.Shader3D.PERIOD_MATERIAL,
    
            'u_WorldMat': Laya.Shader3D.PERIOD_SPRITE,
            'u_MvpMatrix': Laya.Shader3D.PERIOD_SPRITE,
            'u_LightmapScaleOffset': Laya.Shader3D.PERIOD_SPRITE,
            'u_LightMap': Laya.Shader3D.PERIOD_SPRITE,
    
            'u_CameraPos': Laya.Shader3D.PERIOD_CAMERA,
            'u_Viewport': Laya.Shader3D.PERIOD_CAMERA,
            'u_ProjectionParams': Laya.Shader3D.PERIOD_CAMERA,
            'u_View': Laya.Shader3D.PERIOD_CAMERA,
    
            'u_ReflectTexture': Laya.Shader3D.PERIOD_SCENE,
            'u_ReflectIntensity': Laya.Shader3D.PERIOD_SCENE,
            'u_FogStart': Laya.Shader3D.PERIOD_SCENE,
            'u_FogRange': Laya.Shader3D.PERIOD_SCENE,
            'u_FogColor': Laya.Shader3D.PERIOD_SCENE,
            'u_DirationLightCount': Laya.Shader3D.PERIOD_SCENE,
            'u_LightBuffer': Laya.Shader3D.PERIOD_SCENE,
            'u_LightClusterBuffer': Laya.Shader3D.PERIOD_SCENE,
            'u_AmbientColor': Laya.Shader3D.PERIOD_SCENE,
            'u_shadowMap1': Laya.Shader3D.PERIOD_SCENE,
            'u_shadowMap2': Laya.Shader3D.PERIOD_SCENE,
            'u_shadowMap3': Laya.Shader3D.PERIOD_SCENE,
            'u_shadowPSSMDistance': Laya.Shader3D.PERIOD_SCENE,
            'u_lightShadowVP': Laya.Shader3D.PERIOD_SCENE,
            'u_shadowPCFoffset': Laya.Shader3D.PERIOD_SCENE,
    
            //legacy lighting
            'u_DirectionLight.color': Laya.Shader3D.PERIOD_SCENE,
            'u_DirectionLight.direction': Laya.Shader3D.PERIOD_SCENE,
            'u_PointLight.position': Laya.Shader3D.PERIOD_SCENE,
            'u_PointLight.range': Laya.Shader3D.PERIOD_SCENE,
            'u_PointLight.color': Laya.Shader3D.PERIOD_SCENE,
            'u_SpotLight.position': Laya.Shader3D.PERIOD_SCENE,
            'u_SpotLight.direction': Laya.Shader3D.PERIOD_SCENE,
            'u_SpotLight.range': Laya.Shader3D.PERIOD_SCENE,
            'u_SpotLight.spot': Laya.Shader3D.PERIOD_SCENE,
            'u_SpotLight.color': Laya.Shader3D.PERIOD_SCENE
        };

        let stateMap: any = {
			's_Cull': Laya.Shader3D.RENDER_STATE_CULL,
			's_Blend': Laya.Shader3D.RENDER_STATE_BLEND,
			's_BlendSrc': Laya.Shader3D.RENDER_STATE_BLEND_SRC,
			's_BlendDst': Laya.Shader3D.RENDER_STATE_BLEND_DST,
			's_DepthTest': Laya.Shader3D.RENDER_STATE_DEPTH_TEST,
			's_DepthWrite': Laya.Shader3D.RENDER_STATE_DEPTH_WRITE
		}

        let customShader: Laya.Shader3D = Laya.Shader3D.add("LTOutline");
        let subShader: Laya.SubShader = new Laya.SubShader(attributeMap, uniformMap);
        customShader.addSubShader(subShader);
        let pass1 = subShader.addShaderPass(OutlineVS, OutlineFS, stateMap);
        pass1.renderState.cull = Laya.RenderState.CULL_FRONT;
        let pass2 = subShader.addShaderPass(Outline02VS, Outline02FS);
        pass2.renderState.cull = Laya.RenderState.CULL_BACK;
    }



    constructor() {
        super();
        this.setShaderName("LTOutline");
        this._shaderValues.setNumber(LTOutlineMaterial.OUTLINEWIDTH, 1);
        this._shaderValues.setNumber(LTOutlineMaterial.OUTLINELIGHTNESS, 1);
        this._shaderValues.setVector(LTOutlineMaterial.OUTLINECOLOR, new Laya.Vector4(1.0, 1.0, 1.0, 0.0));
    }

    /**
	 * 克隆。
	 * @return	 克隆副本。
	 * @override
	 */
    clone(): any {
        var dest: LTOutlineMaterial = new LTOutlineMaterial();
        this.cloneTo(dest);
        return dest;
    }
}