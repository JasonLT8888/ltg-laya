#ifdef GL_FRAGMENT_PRECISION_HIGH
	precision highp float;
	precision highp int;
#else
	precision mediump float;
	precision mediump int;
#endif

#include "Lighting.glsl";
#include "Shadow.glsl"

uniform vec4 u_DiffuseColor;

#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)
	varying vec4 v_Color;
#endif

#ifdef ALPHATEST
	uniform float u_AlphaTestValue;
#endif

#ifdef DIFFUSEMAP
	uniform sampler2D u_DiffuseTexture;
#endif


#if defined(DIFFUSEMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))
	varying vec2 v_Texcoord0;
#endif

#ifdef LIGHTMAP
	varying vec2 v_LightMapUV;
	uniform sampler2D u_LightMap;
#endif

varying vec3 v_Normal;
#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)
	varying vec3 v_ViewDir; 

	uniform vec3 u_MaterialSpecular;
	uniform float u_Shininess;

	#ifdef LEGACYSINGLELIGHTING
		#ifdef DIRECTIONLIGHT
			uniform DirectionLight u_DirectionLight;
		#endif
		#ifdef POINTLIGHT
			uniform PointLight u_PointLight;
		#endif
		#ifdef SPOTLIGHT
			uniform SpotLight u_SpotLight;
		#endif
	#else
		uniform mat4 u_View;
		uniform vec4 u_ProjectionParams;
		uniform vec4 u_Viewport;
		uniform int u_DirationLightCount;
		uniform sampler2D u_LightBuffer;
		uniform sampler2D u_LightClusterBuffer;
	#endif

	#ifdef SPECULARMAP 
		uniform sampler2D u_SpecularTexture;
	#endif
#endif

#ifdef NORMALMAP 
	uniform sampler2D u_NormalTexture;
	varying vec3 v_Tangent;
	varying vec3 v_Binormal;
#endif

#ifdef FOG
	uniform float u_FogStart;
	uniform float u_FogRange;
	uniform vec3 u_FogColor;
#endif

#if defined(POINTLIGHT)||defined(SPOTLIGHT)||(defined(CALCULATE_SHADOWS)&&defined(SHADOW_CASCADE))||defined(CALCULATE_SPOTSHADOWS)
	varying vec3 v_PositionWorld;
#endif


#include "GlobalIllumination.glsl";//"GlobalIllumination.glsl use uniform should at front of this

#if defined(CALCULATE_SHADOWS)&&!defined(SHADOW_CASCADE)
	varying vec4 v_ShadowCoord;
#endif

#ifdef CALCULATE_SPOTSHADOWS
	varying vec4 v_SpotShadowCoord;
#endif

varying vec3 v_WolrdPos;
uniform vec3 u_HeightFogColor;
uniform float u_HeightFogStartY;
uniform float u_HeightFogDistance;

void main()
{
	vec3 normal;//light and SH maybe use normal
	#if defined(NORMALMAP)
		vec3 normalMapSample = texture2D(u_NormalTexture, v_Texcoord0).rgb;
		normal = normalize(NormalSampleToWorldSpace(normalMapSample, v_Normal, v_Tangent,v_Binormal));
	#else
		normal = normalize(v_Normal);
	#endif

	#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)
		vec3 viewDir= normalize(v_ViewDir);
	#endif

	LayaGIInput giInput;
	#ifdef LIGHTMAP	
		giInput.lightmapUV=v_LightMapUV;
	#endif
	vec3 globalDiffuse=layaGIBase(giInput,1.0,normal);
	
	vec4 mainColor=u_DiffuseColor;
	#ifdef DIFFUSEMAP
		vec4 difTexColor=texture2D(u_DiffuseTexture, v_Texcoord0);
		mainColor=mainColor*difTexColor;
	#endif 
	#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)
		mainColor=mainColor*v_Color;
	#endif 
    
	#ifdef ALPHATEST
		if(mainColor.a<u_AlphaTestValue)
			discard;
	#endif
  
	
	vec3 diffuse = vec3(0.0);
	vec3 specular= vec3(0.0);
	#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)
		vec3 dif,spe;
		#ifdef SPECULARMAP
			vec3 gloss=texture2D(u_SpecularTexture, v_Texcoord0).rgb;
		#else
			#ifdef DIFFUSEMAP
				vec3 gloss=vec3(difTexColor.a);
			#else
				vec3 gloss=vec3(1.0);
			#endif
		#endif
	#endif

	
	
	#ifdef LEGACYSINGLELIGHTING
		#ifdef DIRECTIONLIGHT
			LayaAirBlinnPhongDiectionLight(u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,u_DirectionLight,dif,spe);
			#ifdef CALCULATE_SHADOWS
				#ifdef SHADOW_CASCADE
					vec4 shadowCoord = getShadowCoord(vec4(v_PositionWorld,1.0));
				#else
					vec4 shadowCoord = v_ShadowCoord;
				#endif
				float shadowAttenuation=sampleShadowmap(shadowCoord);
				dif *= shadowAttenuation;
				spe *= shadowAttenuation;
			#endif
			diffuse+=dif;
			specular+=spe;
		#endif
	
		#ifdef POINTLIGHT
			LayaAirBlinnPhongPointLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,u_PointLight,dif,spe);
			diffuse+=dif;
			specular+=spe;
		#endif

		#ifdef SPOTLIGHT
			LayaAirBlinnPhongSpotLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,u_SpotLight,dif,spe);
			#ifdef CALCULATE_SPOTSHADOWS
				vec4 spotShadowcoord = v_SpotShadowCoord;
				float spotShadowAttenuation = sampleSpotShadowmap(spotShadowcoord);
				dif *= shadowAttenuation;
				spe *= shadowAttenuation;
			#endif
			diffuse+=dif;
			specular+=spe;
		#endif
	#else
		#ifdef DIRECTIONLIGHT
			for (int i = 0; i < MAX_LIGHT_COUNT; i++) 
			{
				if(i >= u_DirationLightCount)
					break;
				DirectionLight directionLight = getDirectionLight(u_LightBuffer,i);
				#ifdef CALCULATE_SHADOWS
					if(i == 0)
					{
						#ifdef SHADOW_CASCADE
							vec4 shadowCoord = getShadowCoord(vec4(v_PositionWorld,1.0));
						#else
							vec4 shadowCoord = v_ShadowCoord;
						#endif
						directionLight.color *= sampleShadowmap(shadowCoord);
					}
				#endif
				LayaAirBlinnPhongDiectionLight(u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,directionLight,dif,spe);
				diffuse+=dif;
				specular+=spe;
			}
		#endif
		#if defined(POINTLIGHT)||defined(SPOTLIGHT)
			ivec4 clusterInfo =getClusterInfo(u_LightClusterBuffer,u_View,u_Viewport, v_PositionWorld,gl_FragCoord,u_ProjectionParams);
			#ifdef POINTLIGHT
				for (int i = 0; i < MAX_LIGHT_COUNT; i++) 
				{
					if(i >= clusterInfo.x)//PointLightCount
						break;
					PointLight pointLight = getPointLight(u_LightBuffer,u_LightClusterBuffer,clusterInfo,i);
					LayaAirBlinnPhongPointLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,pointLight,dif,spe);
					diffuse+=dif;
					specular+=spe;
				}
			#endif
			#ifdef SPOTLIGHT
				for (int i = 0; i < MAX_LIGHT_COUNT; i++) 
				{
					if(i >= clusterInfo.y)//SpotLightCount
						break;
					SpotLight spotLight = getSpotLight(u_LightBuffer,u_LightClusterBuffer,clusterInfo,i);
					#ifdef CALCULATE_SPOTSHADOWS
						if(i == 0)
						{
							vec4 spotShadowcoord = v_SpotShadowCoord;
							spotLight.color *= sampleSpotShadowmap(spotShadowcoord);
						}
					#endif
					LayaAirBlinnPhongSpotLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,spotLight,dif,spe);
					diffuse+=dif;
					specular+=spe;
				}
			#endif
		#endif
	#endif

	gl_FragColor =vec4(mainColor.rgb*(globalDiffuse + diffuse),mainColor.a);

	#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)
		gl_FragColor.rgb+=specular;
	#endif
	  
	#ifdef FOG
		float lerpFact=clamp((1.0/gl_FragCoord.w-u_FogStart)/u_FogRange,0.0,1.0);
		gl_FragColor.rgb=mix(gl_FragColor.rgb,u_FogColor,lerpFact);
	#endif

    float heightLerp = clamp((u_HeightFogStartY - v_WolrdPos.y) / u_HeightFogDistance, 0.0, 1.0);
    gl_FragColor.rgb = mix(gl_FragColor.rgb, u_HeightFogColor, heightLerp);
}

