if(typeof global === "undefined") var global = this || {};
if(typeof windows == "undefined") var window = global;
window["wx"] = window["tt"];
"undefined"!=typeof swan&&"undefined"!=typeof swanGlobal?(require("swan-game-adapter.js"),require("libs/laya.bdmini.js")):"undefined"!=typeof wx&&(require("weapp-adapter.js"),require("libs/laya.wxmini.js")),window.loadLib=require,require("index.js");