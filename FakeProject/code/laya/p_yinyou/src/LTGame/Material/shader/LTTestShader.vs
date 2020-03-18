#include "Lighting.glsl";
attribute vec4 a_Position;
attribute vec2 a_Texcoord0;
attribute vec3 a_Normal;

uniform mat4 u_MvpMatrix;
uniform mat4 u_WorldMat;

varying vec3 v_Color;
varying vec2 v_Texcoord0;

void main()
{
    gl_Position = u_MvpMatrix * a_Position;
    gl_Position=remapGLPositionZ(gl_Position);
    v_Color=vec3(gl_Position.x , gl_Position.y , gl_Position.z );
    v_Texcoord0=a_Texcoord0;
}