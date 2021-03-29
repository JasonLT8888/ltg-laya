#if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了
precision highp float;
#else
precision mediump float;
#endif

varying vec4 v_Color;
#ifdef FOG
uniform float u_FogStart;
uniform float u_FogRange;
uniform vec3 u_FogColor;
#endif

void main(){
    
    vec4 color=v_Color;
    gl_FragColor=color;
    #ifdef FOG
    float lerpFact=clamp((1./gl_FragCoord.w-u_FogStart)/u_FogRange,0.,1.);
    gl_FragColor.rgb=mix(gl_FragColor.rgb,u_FogColor,lerpFact);
    #endif
    
}