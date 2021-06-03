/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "portrait";

//-----libs-begin-----
require("./libs/laya.core.js");
require("./libs/laya.html.js");
require("./libs/laya.d3.js");//-----libs-end-------
require("./libs/laya.ui.js");
require("./libs/ltgame/generator.js");
require("./libs/ltgame/promise.js");
require("./libs/fairygui/fairygui.js");
require("./libs/laya.physics3D.js");
require("./libs/OimoPhysics.min.js");
require("./js/bundle.js");
