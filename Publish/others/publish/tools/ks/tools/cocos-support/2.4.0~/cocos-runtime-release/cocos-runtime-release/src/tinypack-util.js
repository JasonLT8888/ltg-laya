let path = require('path'); let fs = require('fs'); let cpk; let buildPath; let isTinyPackage = false; module.exports = { gatherInfo(info) { cpk = info.cpk; isTinyPackage = info.customConfig.tinyPackageServer !== ''; buildPath = info.buildPath; }, async organizeResources() { }, pack() { if (isTinyPackage === true) { return; } let tinyRes = path.join(buildPath, "remote"); if (fs.existsSync(tinyRes)) { cpk.directory(tinyRes, "remote"); } }, packFinished() { } };