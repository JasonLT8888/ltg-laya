import vs_BlinnPhong from './shader/LT-Mesh-BlinnPhong-DepthFog.vs';
import fs_BlinnPhong from './shader/LT-Mesh-BlinnPhong-DepthFog.fs';
import vs_ShadowCast from './shader/Mesh-BlinnPhongShadowCaster.vs';
import fs_ShadowCast from './shader/Mesh-BlinnPhongShadowCaster.fs';
import { HeightFogManager } from './HeightFogManager';

export class LTUnlit_HeightFog extends Laya.Material {

    /**高光强度数据源_漫反射贴图的Alpha通道。*/
    static SPECULARSOURCE_DIFFUSEMAPALPHA: number;
    /**高光强度数据源_高光贴图的RGB通道。*/
    static SPECULARSOURCE_SPECULARMAP: number;

    /**渲染状态_不透明。*/
    static RENDERMODE_OPAQUE: number = 0;
    /**渲染状态_阿尔法测试。*/
    static RENDERMODE_CUTOUT: number = 1;
    /**渲染状态_透明混合。*/
    static RENDERMODE_TRANSPARENT: number = 2;

    static SHADERDEFINE_DIFFUSEMAP: Laya.ShaderDefine;
    static SHADERDEFINE_NORMALMAP: Laya.ShaderDefine;
    static SHADERDEFINE_SPECULARMAP: Laya.ShaderDefine;
    static SHADERDEFINE_TILINGOFFSET: Laya.ShaderDefine;
    static SHADERDEFINE_ENABLEVERTEXCOLOR: Laya.ShaderDefine;

    static DIFFUSE_TEXTURE: number = Laya.Shader3D.propertyNameToID("u_DiffuseTexture");
    static NORMAL_TEXTURE: number = Laya.Shader3D.propertyNameToID("u_NormalTexture");
    static SPECULAR_TEXTURE: number = Laya.Shader3D.propertyNameToID("u_SpecularTexture");
    static ALBEDO_COLOR: number = Laya.Shader3D.propertyNameToID("u_DiffuseColor");
    static MATERIAL_SPECULAR: number = Laya.Shader3D.propertyNameToID("u_MaterialSpecular");
    static SHININESS: number = Laya.Shader3D.propertyNameToID("u_Shininess");
    static TILING_OFFSET: number = Laya.Shader3D.propertyNameToID("u_TilingOffset");
    static CULL: number = Laya.Shader3D.propertyNameToID("s_Cull");
    static BLEND: number = Laya.Shader3D.propertyNameToID("s_Blend");
    static BLEND_SRC: number = Laya.Shader3D.propertyNameToID("s_BlendSrc");
    static BLEND_DST: number = Laya.Shader3D.propertyNameToID("s_BlendDst");
    static DEPTH_TEST: number = Laya.Shader3D.propertyNameToID("s_DepthTest");
    static DEPTH_WRITE: number = Laya.Shader3D.propertyNameToID("s_DepthWrite");
    static HEIGHT_FOG_COLOR: number = Laya.Shader3D.propertyNameToID("u_HeightFogColor");
    static HEIGHT_FOG_STARTY: number = Laya.Shader3D.propertyNameToID("u_HeightFogStartY");
    static HEIGHT_FOG_DISTANCE: number = Laya.Shader3D.propertyNameToID("u_HeightFogDistance");

    /**
	 * @internal
	 */
    static __initDefine__(): void {
        LTUnlit_HeightFog.SHADERDEFINE_DIFFUSEMAP = Laya.Shader3D.getDefineByName("DIFFUSEMAP");
        LTUnlit_HeightFog.SHADERDEFINE_NORMALMAP = Laya.Shader3D.getDefineByName("NORMALMAP");
        LTUnlit_HeightFog.SHADERDEFINE_SPECULARMAP = Laya.Shader3D.getDefineByName("SPECULARMAP");
        LTUnlit_HeightFog.SHADERDEFINE_TILINGOFFSET = Laya.Shader3D.getDefineByName("TILINGOFFSET");
        LTUnlit_HeightFog.SHADERDEFINE_ENABLEVERTEXCOLOR = Laya.Shader3D.getDefineByName("ENABLEVERTEXCOLOR");
    }

    private _albedoColor: Laya.Vector4;
    private _albedoIntensity: number;
    private _enableVertexColor: boolean = false;

    private _heightFogDistance: number;
    /**
     * 高度雾范围
     */
    get heightFogDistance(): number {
        return this._heightFogDistance;
    }
    set heightFogDistance(value: number) {
        this._heightFogDistance = value;
        this._shaderValues.setNumber(LTUnlit_HeightFog.HEIGHT_FOG_DISTANCE, value);
    }

    private _heightFogStartY: number;
    /**
     * 高度雾开始高度
     */
    get heightFogStartY(): number {
        return this._heightFogStartY;
    }
    set heightFogStartY(value: number) {
        this._heightFogStartY = value;
        this._shaderValues.setNumber(LTUnlit_HeightFog.HEIGHT_FOG_STARTY, value);
    }

    private _heightFogColor: Laya.Vector3;
    /**
     * 高度雾颜色
     */
    get heightFogColor(): Laya.Vector3 {
        return this._heightFogColor;
    }
    set heightFogColor(value: Laya.Vector3) {
        this._heightFogColor = value;
        this._shaderValues.setVector3(LTUnlit_HeightFog.HEIGHT_FOG_COLOR, value);
    }

	/**
	 * @internal
	 */
    get _ColorR(): number {
        return this._albedoColor.x;
    }

    set _ColorR(value: number) {
        this._albedoColor.x = value;
        this.albedoColor = this._albedoColor;
    }

	/**
	 * @internal
	 */
    get _ColorG(): number {
        return this._albedoColor.y;
    }

    set _ColorG(value: number) {
        this._albedoColor.y = value;
        this.albedoColor = this._albedoColor;
    }

	/**
	 * @internal
	 */
    get _ColorB(): number {
        return this._albedoColor.z;
    }

    set _ColorB(value: number) {
        this._albedoColor.z = value;
        this.albedoColor = this._albedoColor;
    }

	/**
	 * @internal
	 */
    get _ColorA(): number {
        return this._albedoColor.w;
    }

    set _ColorA(value: number) {
        this._albedoColor.w = value;
        this.albedoColor = this._albedoColor;
    }

	/**
	 * @internal
	 */
    get _Color(): Laya.Vector4 {
        return this._shaderValues.getVector(LTUnlit_HeightFog.ALBEDO_COLOR);
    }

    set _Color(value: Laya.Vector4) {
        this.albedoColor = value;
    }

	/**
	 * @internal
	 */
    get _SpecColorR(): number {
        return this._shaderValues.getVector(LTUnlit_HeightFog.MATERIAL_SPECULAR).x;
    }

    set _SpecColorR(value: number) {
        this._shaderValues.getVector(LTUnlit_HeightFog.MATERIAL_SPECULAR).x = value;
    }

	/**
	 * @internal
	 */
    get _SpecColorG(): number {
        return this._shaderValues.getVector(LTUnlit_HeightFog.MATERIAL_SPECULAR).y;
    }

    set _SpecColorG(value: number) {
        this._shaderValues.getVector(LTUnlit_HeightFog.MATERIAL_SPECULAR).y = value;
    }

	/**
	 * @internal
	 */
    get _SpecColorB(): number {
        return this._shaderValues.getVector(LTUnlit_HeightFog.MATERIAL_SPECULAR).z;
    }

    set _SpecColorB(value: number) {
        this._shaderValues.getVector(LTUnlit_HeightFog.MATERIAL_SPECULAR).z = value;
    }

	/**
	 * @internal
	 */
    get _SpecColorA(): number {
        return this._shaderValues.getVector(LTUnlit_HeightFog.MATERIAL_SPECULAR).w;
    }

    set _SpecColorA(value: number) {
        this._shaderValues.getVector(LTUnlit_HeightFog.MATERIAL_SPECULAR).w = value;
    }

	/**
	 * @internal
	 */
    get _SpecColor(): Laya.Vector4 {
        return this._shaderValues.getVector(LTUnlit_HeightFog.MATERIAL_SPECULAR);
    }

    set _SpecColor(value: Laya.Vector4) {
        this.specularColor = value;
    }

	/**
	 * @internal
	 */
    get _AlbedoIntensity(): number {
        return this._albedoIntensity;
    }

    set _AlbedoIntensity(value: number) {
        if (this._albedoIntensity !== value) {
            var finalAlbedo: Laya.Vector4 = (<Laya.Vector4>this._shaderValues.getVector(LTUnlit_HeightFog.ALBEDO_COLOR));
            Laya.Vector4.scale(this._albedoColor, value, finalAlbedo);
            this._albedoIntensity = value;
            this._shaderValues.setVector(LTUnlit_HeightFog.ALBEDO_COLOR, finalAlbedo);//修改值后必须调用此接口,否则NATIVE不生效
        }
    }

	/**
	 * @internal
	 */
    get _Shininess(): number {
        return this._shaderValues.getNumber(LTUnlit_HeightFog.SHININESS);
    }

    set _Shininess(value: number) {
        value = Math.max(0.0, Math.min(1.0, value));
        this._shaderValues.setNumber(LTUnlit_HeightFog.SHININESS, value);
    }

	/**
	 * @internal
	 */
    get _MainTex_STX(): number {
        return this._shaderValues.getVector(LTUnlit_HeightFog.TILING_OFFSET).x;
    }

    set _MainTex_STX(x: number) {
        var tilOff: Laya.Vector4 = (<Laya.Vector4>this._shaderValues.getVector(LTUnlit_HeightFog.TILING_OFFSET));
        tilOff.x = x;
        this.tilingOffset = tilOff;
    }

	/**
	 * @internal
	 */
    get _MainTex_STY(): number {
        return this._shaderValues.getVector(LTUnlit_HeightFog.TILING_OFFSET).y;
    }

    set _MainTex_STY(y: number) {
        var tilOff: Laya.Vector4 = (<Laya.Vector4>this._shaderValues.getVector(LTUnlit_HeightFog.TILING_OFFSET));
        tilOff.y = y;
        this.tilingOffset = tilOff;
    }

	/**
	 * @internal
	 */
    get _MainTex_STZ(): number {
        return this._shaderValues.getVector(LTUnlit_HeightFog.TILING_OFFSET).z;
    }

    set _MainTex_STZ(z: number) {
        var tilOff: Laya.Vector4 = (<Laya.Vector4>this._shaderValues.getVector(LTUnlit_HeightFog.TILING_OFFSET));
        tilOff.z = z;
        this.tilingOffset = tilOff;
    }

	/**
	 * @internal
	 */
    get _MainTex_STW(): number {
        return this._shaderValues.getVector(LTUnlit_HeightFog.TILING_OFFSET).w;
    }

    set _MainTex_STW(w: number) {
        var tilOff: Laya.Vector4 = (<Laya.Vector4>this._shaderValues.getVector(LTUnlit_HeightFog.TILING_OFFSET));
        tilOff.w = w;
        this.tilingOffset = tilOff;
    }

	/**
	 * @internal
	 */
    get _MainTex_ST(): Laya.Vector4 {
        return this._shaderValues.getVector(LTUnlit_HeightFog.TILING_OFFSET);
    }

    set _MainTex_ST(value: Laya.Vector4) {
        this.tilingOffset = value;
    }

	/**
	 * @internal
	 */
    get _Cutoff(): number {
        return this.alphaTestValue;
    }

    set _Cutoff(value: number) {
        this.alphaTestValue = value;
    }

	/**
	 * 设置渲染模式。
	 */
    set renderMode(value: number) {
        switch (value) {
            case LTUnlit_HeightFog.RENDERMODE_OPAQUE:
                this.alphaTest = false;
                this.renderQueue = Laya.Material.RENDERQUEUE_OPAQUE;
                this.depthWrite = true;
                this.cull = Laya.RenderState.CULL_BACK;
                this.blend = Laya.RenderState.BLEND_DISABLE;
                this.depthTest = Laya.RenderState.DEPTHTEST_LESS;
                break;
            case LTUnlit_HeightFog.RENDERMODE_CUTOUT:
                this.renderQueue = Laya.Material.RENDERQUEUE_ALPHATEST;
                this.alphaTest = true;
                this.depthWrite = true;
                this.cull = Laya.RenderState.CULL_BACK;
                this.blend = Laya.RenderState.BLEND_DISABLE;
                this.depthTest = Laya.RenderState.DEPTHTEST_LESS;
                break;
            case LTUnlit_HeightFog.RENDERMODE_TRANSPARENT:
                this.renderQueue = Laya.Material.RENDERQUEUE_TRANSPARENT;
                this.alphaTest = false;
                this.depthWrite = false;
                this.cull = Laya.RenderState.CULL_BACK;
                this.blend = Laya.RenderState.BLEND_ENABLE_ALL;
                this.blendSrc = Laya.RenderState.BLENDPARAM_SRC_ALPHA;
                this.blendDst = Laya.RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA;
                this.depthTest = Laya.RenderState.DEPTHTEST_LESS;
                break;
            default:
                throw new Error("Material:renderMode value error.");
        }
    }

	/**
	 * 是否支持顶点色。
	 */
    get enableVertexColor(): boolean {
        return this._enableVertexColor;
    }

    set enableVertexColor(value: boolean) {
        this._enableVertexColor = value;
        if (value)
            this._shaderValues.addDefine(LTUnlit_HeightFog.SHADERDEFINE_ENABLEVERTEXCOLOR);
        else
            this._shaderValues.removeDefine(LTUnlit_HeightFog.SHADERDEFINE_ENABLEVERTEXCOLOR);
    }

	/**
	 * 纹理平铺和偏移X分量。
	 */
    get tilingOffsetX(): number {
        return this._MainTex_STX;
    }

    set tilingOffsetX(x: number) {
        this._MainTex_STX = x;
    }

	/**
	 * 纹理平铺和偏移Y分量。
	 */
    get tilingOffsetY(): number {
        return this._MainTex_STY;
    }

    set tilingOffsetY(y: number) {
        this._MainTex_STY = y;
    }

	/**
	 * 纹理平铺和偏移Z分量。
	 */
    get tilingOffsetZ(): number {
        return this._MainTex_STZ;
    }

    set tilingOffsetZ(z: number) {
        this._MainTex_STZ = z;
    }

	/**
	 * 纹理平铺和偏移W分量。
	 */
    get tilingOffsetW(): number {
        return this._MainTex_STW;
    }

    set tilingOffsetW(w: number) {
        this._MainTex_STW = w;
    }

	/**
	 * 纹理平铺和偏移。
	 */
    get tilingOffset(): Laya.Vector4 {
        return (<Laya.Vector4>this._shaderValues.getVector(LTUnlit_HeightFog.TILING_OFFSET));
    }

    set tilingOffset(value: Laya.Vector4) {
        if (value) {
            if (value.x != 1 || value.y != 1 || value.z != 0 || value.w != 0)
                this._shaderValues.addDefine(LTUnlit_HeightFog.SHADERDEFINE_TILINGOFFSET);
            else
                this._shaderValues.removeDefine(LTUnlit_HeightFog.SHADERDEFINE_TILINGOFFSET);
        } else {
            this._shaderValues.removeDefine(LTUnlit_HeightFog.SHADERDEFINE_TILINGOFFSET);
        }
        this._shaderValues.setVector(LTUnlit_HeightFog.TILING_OFFSET, value);
    }

	/**
	 * 反照率颜色R分量。
	 */
    get albedoColorR(): number {
        return this._ColorR;
    }

    set albedoColorR(value: number) {
        this._ColorR = value;
    }

	/**
	 * 反照率颜色G分量。
	 */
    get albedoColorG(): number {
        return this._ColorG;
    }

    set albedoColorG(value: number) {
        this._ColorG = value;
    }

	/**
	 * 反照率颜色B分量。
	 */
    get albedoColorB(): number {
        return this._ColorB;
    }

    set albedoColorB(value: number) {
        this._ColorB = value;
    }

	/**
	 * 反照率颜色Z分量。
	 */
    get albedoColorA(): number {
        return this._ColorA;
    }

    set albedoColorA(value: number) {
        this._ColorA = value;
    }

	/**
	 * 反照率颜色。
	 */
    get albedoColor(): Laya.Vector4 {
        return this._albedoColor;
    }

    set albedoColor(value: Laya.Vector4) {
        var finalAlbedo: Laya.Vector4 = (<Laya.Vector4>this._shaderValues.getVector(LTUnlit_HeightFog.ALBEDO_COLOR));
        Laya.Vector4.scale(value, this._albedoIntensity, finalAlbedo);
        this._albedoColor = value;
        this._shaderValues.setVector(LTUnlit_HeightFog.ALBEDO_COLOR, finalAlbedo);//修改值后必须调用此接口,否则NATIVE不生效
    }

	/**
	 * 反照率强度。
	 */
    get albedoIntensity(): number {
        return this._albedoIntensity;
    }

    set albedoIntensity(value: number) {
        this._AlbedoIntensity = value;
    }

	/**
	 * 高光颜色R轴分量。
	 */
    get specularColorR(): number {
        return this._SpecColorR;
    }

    set specularColorR(value: number) {
        this._SpecColorR = value;
    }

	/**
	 * 高光颜色G分量。
	 */
    get specularColorG(): number {
        return this._SpecColorG;
    }

    set specularColorG(value: number) {
        this._SpecColorG = value;
    }

	/**
	 * 高光颜色B分量。
	 */
    get specularColorB(): number {
        return this._SpecColorB;
    }

    set specularColorB(value: number) {
        this._SpecColorB = value;
    }

	/**
	 * 高光颜色A分量。
	 */
    get specularColorA(): number {
        return this._SpecColorA;
    }

    set specularColorA(value: number) {
        this._SpecColorA = value;
    }

	/**
	 * 高光颜色。
	 */
    get specularColor(): Laya.Vector4 {
        return (<Laya.Vector4>this._shaderValues.getVector(LTUnlit_HeightFog.MATERIAL_SPECULAR));
    }

    set specularColor(value: Laya.Vector4) {
        this._shaderValues.setVector(LTUnlit_HeightFog.MATERIAL_SPECULAR, value);
    }

	/**
	 * 高光强度,范围为0到1。
	 */
    get shininess(): number {
        return this._Shininess;
    }

    set shininess(value: number) {
        this._Shininess = value;
    }

	/**
	 * 反照率贴图。
	 */
    get albedoTexture(): Laya.BaseTexture {
        return this._shaderValues.getTexture(LTUnlit_HeightFog.DIFFUSE_TEXTURE);
    }

    set albedoTexture(value: Laya.BaseTexture) {
        if (value)
            this._shaderValues.addDefine(LTUnlit_HeightFog.SHADERDEFINE_DIFFUSEMAP);
        else
            this._shaderValues.removeDefine(LTUnlit_HeightFog.SHADERDEFINE_DIFFUSEMAP);
        this._shaderValues.setTexture(LTUnlit_HeightFog.DIFFUSE_TEXTURE, value);
    }

	/**
	 * 法线贴图。
	 */
    get normalTexture(): Laya.BaseTexture {
        return this._shaderValues.getTexture(LTUnlit_HeightFog.NORMAL_TEXTURE);
    }

    set normalTexture(value: Laya.BaseTexture) {
        if (value)
            this._shaderValues.addDefine(LTUnlit_HeightFog.SHADERDEFINE_NORMALMAP);
        else
            this._shaderValues.removeDefine(LTUnlit_HeightFog.SHADERDEFINE_NORMALMAP);
        this._shaderValues.setTexture(LTUnlit_HeightFog.NORMAL_TEXTURE, value);
    }

	/**
	 * 高光贴图。
	 */
    get specularTexture(): Laya.BaseTexture {
        return this._shaderValues.getTexture(LTUnlit_HeightFog.SPECULAR_TEXTURE);
    }

    set specularTexture(value: Laya.BaseTexture) {
        if (value)
            this._shaderValues.addDefine(LTUnlit_HeightFog.SHADERDEFINE_SPECULARMAP);
        else
            this._shaderValues.removeDefine(LTUnlit_HeightFog.SHADERDEFINE_SPECULARMAP);

        this._shaderValues.setTexture(LTUnlit_HeightFog.SPECULAR_TEXTURE, value);
    }

	/**
	 * 是否写入深度。
	 */
    get depthWrite(): boolean {
        return this._shaderValues.getBool(LTUnlit_HeightFog.DEPTH_WRITE);
    }

    set depthWrite(value: boolean) {
        this._shaderValues.setBool(LTUnlit_HeightFog.DEPTH_WRITE, value);
    }

	/**
	 * 剔除方式。
	 */
    get cull(): number {
        return this._shaderValues.getInt(LTUnlit_HeightFog.CULL);
    }

    set cull(value: number) {
        this._shaderValues.setInt(LTUnlit_HeightFog.CULL, value);
    }


	/**
	 * 混合方式。
	 */
    get blend(): number {
        return this._shaderValues.getInt(LTUnlit_HeightFog.BLEND);
    }

    set blend(value: number) {
        this._shaderValues.setInt(LTUnlit_HeightFog.BLEND, value);
    }


	/**
	 * 混合源。
	 */
    get blendSrc(): number {
        return this._shaderValues.getInt(LTUnlit_HeightFog.BLEND_SRC);
    }

    set blendSrc(value: number) {
        this._shaderValues.setInt(LTUnlit_HeightFog.BLEND_SRC, value);
    }

	/**
	 * 混合目标。
	 */
    get blendDst(): number {
        return this._shaderValues.getInt(LTUnlit_HeightFog.BLEND_DST);
    }

    set blendDst(value: number) {
        this._shaderValues.setInt(LTUnlit_HeightFog.BLEND_DST, value);
    }

	/**
	 * 深度测试方式。
	 */
    get depthTest(): number {
        return this._shaderValues.getInt(LTUnlit_HeightFog.DEPTH_TEST);
    }

    set depthTest(value: number) {
        this._shaderValues.setInt(LTUnlit_HeightFog.DEPTH_TEST, value);
    }

    private static _isInited: boolean;
    public static InitShader() {
        if (this._isInited) return;
        this._isInited = true;
        this.__initDefine__();

        //BLINNPHONG
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
            'u_HeightFogColor': Laya.Shader3D.PERIOD_MATERIAL,
            'u_HeightFogStartY': Laya.Shader3D.PERIOD_MATERIAL,
            'u_HeightFogDistance': Laya.Shader3D.PERIOD_MATERIAL,

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
            'u_LightMapDirection': Laya.Shader3D.PERIOD_SPRITE,

            'u_CameraPos': Laya.Shader3D.PERIOD_CAMERA,
            'u_Viewport': Laya.Shader3D.PERIOD_CAMERA,
            'u_ProjectionParams': Laya.Shader3D.PERIOD_CAMERA,
            'u_View': Laya.Shader3D.PERIOD_CAMERA,
            'u_ViewProjection': Laya.Shader3D.PERIOD_CAMERA,

            'u_ReflectTexture': Laya.Shader3D.PERIOD_SCENE,
            'u_ReflectIntensity': Laya.Shader3D.PERIOD_SCENE,
            'u_FogStart': Laya.Shader3D.PERIOD_SCENE,
            'u_FogRange': Laya.Shader3D.PERIOD_SCENE,
            'u_FogColor': Laya.Shader3D.PERIOD_SCENE,
            'u_DirationLightCount': Laya.Shader3D.PERIOD_SCENE,
            'u_LightBuffer': Laya.Shader3D.PERIOD_SCENE,
            'u_LightClusterBuffer': Laya.Shader3D.PERIOD_SCENE,
            'u_AmbientColor': Laya.Shader3D.PERIOD_SCENE,
            'u_ShadowBias': Laya.Shader3D.PERIOD_SCENE,
            'u_ShadowLightDirection': Laya.Shader3D.PERIOD_SCENE,
            'u_ShadowMap': Laya.Shader3D.PERIOD_SCENE,
            'u_ShadowParams': Laya.Shader3D.PERIOD_SCENE,
            'u_ShadowSplitSpheres': Laya.Shader3D.PERIOD_SCENE,
            'u_ShadowMatrices': Laya.Shader3D.PERIOD_SCENE,
            'u_ShadowMapSize': Laya.Shader3D.PERIOD_SCENE,
            'u_SpotShadowMap': Laya.Shader3D.PERIOD_SCENE,
            'u_SpotViewProjectMatrix': Laya.Shader3D.PERIOD_SCENE,
            'u_ShadowLightPosition': Laya.Shader3D.PERIOD_SCENE,

            //GI
            'u_AmbientSHAr': Laya.Shader3D.PERIOD_SCENE,
            'u_AmbientSHAg': Laya.Shader3D.PERIOD_SCENE,
            'u_AmbientSHAb': Laya.Shader3D.PERIOD_SCENE,
            'u_AmbientSHBr': Laya.Shader3D.PERIOD_SCENE,
            'u_AmbientSHBg': Laya.Shader3D.PERIOD_SCENE,
            'u_AmbientSHBb': Laya.Shader3D.PERIOD_SCENE,
            'u_AmbientSHC': Laya.Shader3D.PERIOD_SCENE,

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

        let customShader: Laya.Shader3D = Laya.Shader3D.add(LTUnlit_HeightFog._shaderName, null, null, true);
        let subShader: Laya.SubShader = new Laya.SubShader(attributeMap, uniformMap);
        customShader.addSubShader(subShader);
        subShader.addShaderPass(vs_BlinnPhong, fs_BlinnPhong, stateMap, "Forward");
        // let shaderPass: Laya.ShaderPass = subShader.addShaderPass(vs_ShadowCast, fs_ShadowCast, stateMap, "ShadowCaster");
    }

    private static _shaderName = "LTUnlit_HeightFog";

    static CreateFromUnlit(mat: Laya.UnlitMaterial): LTUnlit_HeightFog {
        let newMat = new LTUnlit_HeightFog();
        newMat.albedoColor = mat.albedoColor;
        newMat.albedoIntensity = mat.albedoIntensity;
        newMat.albedoTexture = mat.albedoTexture;
        return newMat;
    }

	/**
	 * 创建一个 <code>BlinnPhongMaterial</code> 实例。
	 */
    constructor() {
        super();
        LTUnlit_HeightFog.InitShader();
        this.setShaderName(LTUnlit_HeightFog._shaderName);
        this._albedoIntensity = 1.0;
        this._albedoColor = new Laya.Vector4(1.0, 1.0, 1.0, 1.0);
        let sv: Laya.ShaderData = this._shaderValues;
        sv.setVector(LTUnlit_HeightFog.ALBEDO_COLOR, new Laya.Vector4(1.0, 1.0, 1.0, 1.0));
        sv.setVector(LTUnlit_HeightFog.MATERIAL_SPECULAR, new Laya.Vector4(1.0, 1.0, 1.0, 1.0));
        sv.setNumber(LTUnlit_HeightFog.SHININESS, 0.078125);
        sv.setNumber(Laya.Material.ALPHATESTVALUE, 0.5);
        sv.setVector(LTUnlit_HeightFog.TILING_OFFSET, new Laya.Vector4(1.0, 1.0, 0.0, 0.0));
        this.renderMode = LTUnlit_HeightFog.RENDERMODE_OPAQUE;

        HeightFogManager.instance.RegistFogMat(this);
    }

	/**
	 * 克隆。
	 * @return	 克隆副本。
	 * @override
	 */
    clone(): any {
        var dest: LTUnlit_HeightFog = new LTUnlit_HeightFog();
        this.cloneTo(dest);
        return dest;
    }

	/**
	 * @inheritDoc
	 * @override
	 */
    cloneTo(destObject: any): void {
        super.cloneTo(destObject);
        var destMaterial: LTUnlit_HeightFog = (<LTUnlit_HeightFog>destObject);
        destMaterial._albedoIntensity = this._albedoIntensity;
        destMaterial._enableVertexColor = this._enableVertexColor;
        this._albedoColor.cloneTo(destMaterial._albedoColor);
    }

}