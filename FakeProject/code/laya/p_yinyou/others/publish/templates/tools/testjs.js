const ideModuleDir = `D:\\Dev\\LayaAirIDE2_10\\resources\\app\\node_modules\\`;
const workSpaceDir = "F:\\work\\gitee\\ltg-laya\\FakeProject\\code\\laya\\p_yinyou\\";

//引用插件模块
const gulp = require(ideModuleDir + "gulp");
const fs = require("fs");
const path = require("path");
const https = require("https");
const childProcess = require("child_process");
const del = require(ideModuleDir + "del");
const revCollector = require(ideModuleDir + 'gulp-rev-collector');
const iconv =  require(ideModuleDir + "iconv-lite");
const request = require(ideModuleDir + "request");

let copyLibsTask = ["copyPlatformLibsJsFile"];
let versiontask = ["version2"];

// 打包rpk
gulp.task("buildRPK_HW", ["version_HW"], function() {
	// 在华为快游戏项目目录中执行:
    // node .\signtool\package\index.js .\web .\dist com.demo .\release\private.pem .\release\certificate.pem
	let 
		signtoolPath = path.join(toolkitPath, "index.js"),
		releasePath = projDir,
		distPath = path.join(projDir, "dist"),
		name = config.hwInfo.package,
		privatePem = path.join(projDir, "sign", "debug", "private.pem"),
		certificatePemPath = path.join(projDir, "sign", "debug", "certificate.pem");
    if (config.hwInfo.useReleaseSign) {
        privatePem = path.join(projDir, "sign", "release", "private.pem"),
		certificatePemPath = path.join(projDir, "sign", "release", "certificate.pem");
    }
	return new Promise((resolve, reject) => {
		let cmd = `node`;
		let args = [`"${signtoolPath}"`, `"${releasePath}"`, `"${distPath}"`, name, `"${privatePem}"`, `"${certificatePemPath}"`];
		let opts = {
			cwd: projDir,
			shell: true
		};
		let cp = childProcess.spawn(cmd, args, opts);
		// let cp = childProcess.spawn('npx.cmd', ['-v']);
		cp.stdout.on('data', (data) => {
			console.log(`stdout: ${data}`);
		});

		cp.stderr.on('data', (data) => {
			console.log(`stderr: ${data}`);
			console.log(`stderr(iconv): ${iconv.decode(data, 'gbk')}`);
			// reject();
		});

		cp.on('close', (code) => {
			console.log(`子进程退出码：${code}`);
			// rpk是否生成成功
			let distRpkPath = path.join(distPath, `${name}.rpk`);
			if (!fs.existsSync(distRpkPath)) {
				throw new Error("rpk生成失败，请检查！");
			}
			resolve();
		});
	});
});
