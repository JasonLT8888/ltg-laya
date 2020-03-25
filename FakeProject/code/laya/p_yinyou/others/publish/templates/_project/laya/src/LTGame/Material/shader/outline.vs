#include "Lighting.glsl";

attribute vec4 a_Position; 
attribute vec2 a_Texcoord0; 

#ifdef GPU_INSTANCE
	attribute mat4 a_MvpMatrix;
#else
	uniform mat4 u_MvpMatrix;
#endif

#ifdef BONE
	const int c_MaxBoneCount = 24;
	attribute vec4 a_BoneIndices;
	attribute vec4 a_BoneWeights;
	uniform mat4 u_Bones[c_MaxBoneCount];
#endif

#ifdef GPU_INSTANCE
	attribute mat4 a_WorldMat;
#else
	uniform mat4 u_WorldMat;
#endif

uniform float u_OutlineWidth;

attribute vec3 a_Normal; 
varying vec3 v_Normal; 
varying vec2 v_Texcoord0; 

void main() 
{ 
    vec4 position;
	#ifdef BONE
		mat4 skinTransform = u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;
		skinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;
		skinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;
		skinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;
		position=skinTransform*a_Position;
	#else
		position=a_Position;
	#endif

	mat4 worldMat;
	#ifdef GPU_INSTANCE
		worldMat = a_WorldMat;
	#else
		worldMat = u_WorldMat;
	#endif 

    position = vec4(position.xyz + v_Normal * 10.0, 1.0);

	#ifdef GPU_INSTANCE
		gl_Position = a_MvpMatrix * position;
	#else
		gl_Position = u_MvpMatrix * position;
	#endif
    v_Texcoord0 = a_Texcoord0; 
    gl_Position=remapGLPositionZ(gl_Position); 
}