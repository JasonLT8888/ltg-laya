if (typeof global === "undefined") var global = this || {};
if (typeof windows == "undefined") var window = global;
require("weapp-adapter.js");
require("libs/laya.ttmini.js");
window.loadLib = require;
require("index.js");