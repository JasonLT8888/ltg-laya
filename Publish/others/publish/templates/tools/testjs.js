

//引用插件模块
const gulp = require("gulp");
const fs = require("fs");
const path = require("path");
const childProcess = require("child_process");
const releaseDir = "release/hw/"
// 新建华为项目-华为项目与其他项目不同，需要安装华为 quickgame node_modules，并打包成.rpk文件

gulp.task("installModules_HW", function () {
	// releaseDir = path.dirname(releaseDir);
	// projDir = path.join(releaseDir, config.hwInfo.projName);
	// // 如果IDE里对应华为包已经install node_modules了，忽略这一步
	// if (fs.existsSync(path.join(toolkitPath, "node_modules"))) {
	// 	return;
	// }

	//others/publish/templates/tools/testjs.js
	// 安装华为 quickgame node_modules
	return new Promise((resolve, reject) => {
		console.log("开始安装华为 toolkit node_modules，请耐心等待...");
		let cmd = `npm${commandSuffix}`;
		let args = ["install"];
		let opts = {
			cwd: toolkitPath,
			shell: true
		};
		let cp = childProcess.spawn(cmd, args, opts);

		cp.stdout.on('data', (data) => {
			console.log(`stdout: ${data}`);
		});

		cp.stderr.on('data', (data) => {
			console.log(`stderr: ${data}`);
			// reject();
		});

		cp.on('close', (code) => {
			console.log(`子进程退出码：${code}`);
			resolve();
		});
	});
});
// 打包rpk
gulp.task("buildRPK_HW", function () {
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
			// console.log(`stderr(iconv): ${iconv.decode(data, 'gbk')}`);
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
