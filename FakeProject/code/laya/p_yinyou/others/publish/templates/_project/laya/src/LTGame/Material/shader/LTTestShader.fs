#ifdef FSHIGHPRECISION
precision highp float;
#else
precision mediump float;
#endif

uniform float u_Time;

varying vec3 v_Color;
varying vec2 v_Texcoord0;

void main()
{
    gl_FragColor = vec4(sin(u_Time) / 2.0 + 0.5, v_Texcoord0.x, v_Texcoord0.y, 1);
}



