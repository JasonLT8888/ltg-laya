/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "portrait";

//-----libs-begin-----
loadLib("libs/laya.core.js");
loadLib("libs/laya.html.js");
loadLib("libs/laya.d3.js")//-----libs-end-------
loadLib("libs/ltgame/generator.js");
loadLib("libs/ltgame/promise.js");
loadLib("libs/fairygui/fairygui.js");
loadLib("libs/laya.physics3D.js");
loadLib("libs/OimoPhysics.min.js");
loadLib("js/bundle.js");
