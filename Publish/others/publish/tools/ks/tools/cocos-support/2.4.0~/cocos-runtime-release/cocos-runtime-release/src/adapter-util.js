let path = require('path'); let fs = require('fs-extra'); let resPath = path.join(__dirname, "../", "res"); let cpk; let dirName = "jsb-adapter"; let destPath; let isDebug; module.exports = { gatherInfo(info) { cpk = info.cpk; isDebug = info.options.debug; destPath = path.join(info.buildPath, dirName); }, async organizeResources(_event) { let jsbAdapterDestPath = path.join(destPath, "engine", "index.js"); fs.emptyDirSync(destPath); if (isDebug) { fs.copySync(path.join(resPath, 'adapter_debug.js'), jsbAdapterDestPath); } else { fs.copySync(path.join(resPath, 'adapter_release.js'), jsbAdapterDestPath); } return true; }, pack() { cpk.directory(destPath, dirName); } };