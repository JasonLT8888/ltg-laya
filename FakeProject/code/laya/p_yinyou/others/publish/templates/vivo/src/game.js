require("@qgame/adapter");
if (!window.navigator)
	window.navigator = {};
window.navigator.userAgent = 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 VVGame NetType/WIFI Language/zh_CN';
require("./libs/laya.vvmini.js");
var subpackages = [];
function loadpack() {
	var loaded_package = 0;
	for (let i = 0; i < subpackages.length; i++) {
		qg.loadSubpackage({
			name: subpackages[i].name,
			success: function (res) {
				console.log("分包加载完成", `${1 + i}/${subpackages.length}`);

			},
			fail: function (err) {
				console.error("vivo分包加载出错", err);
			},
			complete: function () {
				loaded_package++;
				if (loaded_package >= subpackages.length) {
					require("./index.js");
				}
			}
		});

	}
}
if (subpackages.length) {
	loadpack();
} else {
	require("./index.js");
}
