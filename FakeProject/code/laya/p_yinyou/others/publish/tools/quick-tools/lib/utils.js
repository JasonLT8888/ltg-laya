'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorconsole = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.mkdirsSync = mkdirsSync;
exports.traverseDirSync = traverseDirSync;
exports.clearDirSync = clearDirSync;
exports.loadBabelModule = loadBabelModule;
exports.createMainifestJson = createMainifestJson;
exports.getSuggestPackNameJson = getSuggestPackNameJson;
exports.copySignFile = copySignFile;
exports.mkBuildDirs = mkBuildDirs;
exports.copyFiles = copyFiles;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 递归创建目录 同步方法
 * @param dir
 * @returns {boolean}
 */
/*
 * Copyright (C) 2017, hapjs.org. All rights reserved.
 */

function mkdirsSync(dir) {
  if (_fsExtra2.default.existsSync(dir)) {
    return true;
  } else {
    if (mkdirsSync(_path2.default.dirname(dir))) {
      _fsExtra2.default.mkdirSync(dir);
      return true;
    }
  }
}

/**
 * 遍历目录文件 同步方法
 * @param dir 要遍历的文件目录
 * @param files 收集的文件列表
 * @param excludes 要排除的文件列表
 */
function traverseDirSync(dir, files) {
  var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var list = _fsExtra2.default.readdirSync(dir);
  list.forEach(function (file) {
    file = _path2.default.resolve(_path2.default.join(dir, file));
    if (excludes && excludes.indexOf(file) > -1) {} else {
      var stat = _fsExtra2.default.statSync(file);
      if (stat && stat.isDirectory()) {
        traverseDirSync(file, files, excludes);
      }
      //文件
      else {
          files.push(file);
        }
    }
  });
}

/**
 * 删除目录
 * @param dir
 */
function clearDirSync(dir) {
  var files = [];
  if (_fsExtra2.default.existsSync(dir)) {
    files = _fsExtra2.default.readdirSync(dir);
    files.forEach(function (file, index) {
      var curPath = dir + '/' + file;
      if (_fsExtra2.default.statSync(curPath).isDirectory()) {
        clearDirSync(curPath);
      } else {
        _fsExtra2.default.unlinkSync(curPath);
      }
    });
    _fsExtra2.default.rmdirSync(dir);
  }
}

/**
 * 规范日志
 */
var colorconsole = exports.colorconsole = {
  trace: function trace() {
    var _console;

    (_console = console).trace.apply(_console, arguments);
  },
  log: function log() {
    console.log(_chalk2.default.green.apply(_chalk2.default, arguments));
  },
  info: function info() {
    console.info(_chalk2.default.green.apply(_chalk2.default, arguments));
  },
  warn: function warn() {
    var _chalk$yellow;

    console.warn((_chalk$yellow = _chalk2.default.yellow).bold.apply(_chalk$yellow, arguments));
  },
  error: function error() {
    var _chalk$red;

    console.error((_chalk$red = _chalk2.default.red).bold.apply(_chalk$red, arguments));
  },
  throw: function _throw() {
    var _chalk$red2;

    throw new Error((_chalk$red2 = _chalk2.default.red).bold.apply(_chalk$red2, arguments));
  }
};

/**
 * 转换babel模块名
 * @param moduleName
 * @returns {*}
 */
function loadBabelModule(moduleName) {
  // 从当前js所在目录或者当前工作目录查找指定模块，没有找到则返回模块名
  var currentModulePath = _path2.default.resolve(__dirname, '..', 'node_modules', moduleName);
  // 当前运行目录
  var pwdModulePath = _path2.default.resolve(process.cwd(), 'node_modules', moduleName);
  if (_fsExtra2.default.existsSync(currentModulePath)) {
    return currentModulePath;
  } else if (_fsExtra2.default.existsSync(pwdModulePath)) {
    return pwdModulePath;
  }
  return moduleName;
}

/**
 * 创建mainifest.json文件，如果已经存在，则拷贝到tmpDir中，如果不存在，从tplDir中拷贝
 * @param {*} tplDir 
 * @param {*} targetDir 
 * @param tmpDir
 * @param suggestPackNameJson 建议的名称，包含packageName 和projectName
 */
function createMainifestJson(tplDir, targetDir, tmpDir, suggestPackNameJson) {
  var orientation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'portrait';

  // apk包名的正则表达式
  var reg = /^[a-zA-Z]+[0-9a-zA-Z_]*(\.[a-zA-Z]+[0-9a-zA-Z_]*)*$/;
  var option = {};
  var manifestExist = false;
  if (!suggestPackNameJson || !suggestPackNameJson.packageName || !suggestPackNameJson.projectName) {
    console.log(_chalk2.default.red('lack suggestPackJson config'));
    _shelljs2.default.exit(1);
  }

  // 判断target下是否有manifest.json文件
  if (!_fsExtra2.default.existsSync(_path2.default.join(targetDir, 'manifest.json'))) {
    option = require(_path2.default.join(tplDir, 'manifest.json'));
    var projectname = suggestPackNameJson.projectName;
    var apkname = suggestPackNameJson.packageName;
    if (!reg.test(apkname)) {
      apkname = 'com.quickgame.demo';
      projectname = 'QuickgameDemo';
    }
    option['package'] = apkname;
    option['name'] = projectname;
    option['orientation'] = orientation;
    var str = (0, _stringify2.default)(option);
    _fsExtra2.default.writeFileSync(_path2.default.join(tmpDir, 'manifest.json'), str);
  } else {
    manifestExist = true;
    option = require(_path2.default.join(targetDir, 'manifest.json'));
    if (targetDir != tmpDir) {
      //直接调用的时候，没有临时文件，可能会出现相同的场景
      copyFiles(_path2.default.join(targetDir, 'manifest.json'), tmpDir);
    }

    if (!reg.test(option['package'])) {
      console.log(_chalk2.default.red('package incorrect in the file ' + _path2.default.join(targetDir, 'manifest.json')));
      _shelljs2.default.exit(1);
    }
  }
  return {
    option: option,
    manifestExist: manifestExist
  };
}

/**
 * 根据引擎，从配置文件中读取项目名称
 * @param {*} engine 
 * @param {*} cwdDir 
 * @param {*} pubDir 
 */
function getSuggestPackNameJson(engine, cwdDir, pubDir) {
  if (engine === 'cocos') {
    if (_fsExtra2.default.existsSync(_path2.default.join(pubDir, '.cocos-project.json'))) {
      var cocosProjectJson = null;
      try {
        cocosProjectJson = require(_path2.default.join(pubDir, '.cocos-project.json'));
      } catch (e) {}
      if (cocosProjectJson && cocosProjectJson.projectName && cocosProjectJson.packageName) {
        return {
          projectName: cocosProjectJson.projectName,
          packageName: cocosProjectJson.packageName
        };
      }
    }
  } else if (engine === 'egret') {
    var projectJson = null;
    var configPath = _path2.default.join(pubDir, 'project.config.json');
    if (_fsExtra2.default.existsSync(configPath)) {
      try {
        projectJson = require(configPath);
      } catch (e) {}
      if (projectJson && projectJson.projectname) {
        return {
          projectName: projectJson.projectname,
          packageName: projectJson.projectname
        };
      }
    }
  }
  var projectname = _path2.default.basename(cwdDir);
  var apkname = 'com.' + projectname;
  return {
    projectName: projectname,
    packageName: apkname
  };
}

/**
 * 如果目标文件有，不拷贝，如果没有，从模板中拷贝到目标文件
 * @param {*} quickgameDir 
 * @param {*} _root 
 * @param {*} config 
 * @param {*} isDev 
 */
function copySignFile(quickgameDir, _root, config, isDev) {
  //检查签名文件，如果是dev模式，缺少sign文件，从打包项目中拷贝，如果是发布，需要release下有对应签名文件
  var signDir = _path2.default.join(quickgameDir, config.SIGN_DIR_NAME);
  var _sign = _path2.default.resolve(_root, './sign'); // 自带的签名文件

  if (!_fsExtra2.default.existsSync(signDir)) {
    console.log(_chalk2.default.yellow('### no sign files ### copy default to the project'));
    copyFiles(_sign, signDir);
  }
  var signEnvDir = isDev ? config.SIGN_DEBUG_DIR : config.SIGN_RELEASE_DIR;
  var privatekey = _path2.default.join(signDir, signEnvDir, config.PRIVATE_FILE_NAME);
  var certificate = _path2.default.join(signDir, signEnvDir, config.CERTIFICATE_FILE_NAME);
  if (!_fsExtra2.default.existsSync(privatekey) || !_fsExtra2.default.existsSync(certificate)) {
    if (!isDev) {
      console.log(_chalk2.default.red('### no release sign files ### please make sure that the sign files exist:privatekey:' + privatekey + ', certificate:' + certificate));
      _shelljs2.default.exit(1);
    } else {
      console.log(_chalk2.default.yellow('### no sign files ### copy default to the project'));
      copyFiles(_path2.default.join(_sign, signEnvDir), _path2.default.join(signDir, signEnvDir));
    }
  }
  return {
    privatekey: privatekey,
    certificate: certificate
  };
}

function getOrientation(pubDir, engine) {
  var orientation = 'portait';
  if (engine == 'cocos') {
    var settingPath = _path2.default.resolve(pubDir, './src/settings.js');
    if (_fsExtra2.default.existsSync(settingPath)) {
      global.window = {};
      try {
        require(settingPath);
        orientation = window['_CCSettings'] && window['_CCSettings']['orientation'] ? window['_CCSettings']['orientation'] : orientation;
      } catch (e) {
        console.log(_chalk2.default.yellow('\u52A0\u8F7DSettings\u6587\u4EF6\u5931\u8D25\uFF0C\u65E0\u6CD5\u83B7\u5F97orientation'));
      }
    }
  } else if (engine == 'laya' || engine == 'egret') {
    var _settingPath = _path2.default.resolve(pubDir, './game.json');
    if (_fsExtra2.default.existsSync(_settingPath)) {
      try {
        var setting = require(_settingPath);
        orientation = setting.deviceOrientation ? setting.deviceOrientation : orientation;
      } catch (e) {
        console.log(_chalk2.default.yellow('\u52A0\u8F7DSettings\u6587\u4EF6\u5931\u8D25\uFF0C\u65E0\u6CD5\u83B7\u5F97orientation'));
      }
    }
  }
  return orientation;
}

/**
 * 生成对应的目录，处理manifest.json和logo.png，sign签名文件
 * @param {*} pubDir 生成的发布目录
 * @param {*} cwdDir 当前运行时目录
 * @param {*} config 
 * @param {*} engineConfig 
 * @param {*} engine 
 * @param {*} isDev 
 */
function mkBuildDirs(pubDir, cwdDir, config, engineConfig, engine, isDev) {
  var quickgameDir = _path2.default.resolve(pubDir, '../', (engine == 'egret' ? getProjectName(cwdDir) + "_" : "") + config.QUICKGAME_DIR);
  var quickgameTmpDir = _path2.default.resolve(pubDir, '../', config.QUICKGAME_DIR_TMP);
  var distDir = _path2.default.join(quickgameDir, config.DEST_DIR);

  _fsExtra2.default.emptyDirSync(quickgameTmpDir);

  var _root = _path2.default.resolve(__dirname, '../'); //本项目根目录
  var _tplDir = _path2.default.join(_root, 'tpl');
  var _tplEngine = _path2.default.join(_root, engine);

  var orientation = getOrientation(pubDir, engine);
  var manifestJson = createMainifestJson(_tplDir, quickgameDir, quickgameTmpDir, getSuggestPackNameJson(engine, cwdDir, pubDir), orientation);

  //文件如果存在，写到临时文件中；如果不存在，从模板里写到临时文件中
  engineConfig.DEFAULT_TPL_FILES && engineConfig.DEFAULT_TPL_FILES.forEach(function (tplFile) {
    var tplFileAbs = _path2.default.join(quickgameDir, tplFile);
    if (_fsExtra2.default.existsSync(tplFileAbs)) {
      copyFiles(tplFileAbs, quickgameTmpDir);
    } else {
      copyFiles(_path2.default.join(_tplDir, tplFile), quickgameTmpDir);
    }
  });

  //单独处理logo文件；分文件已经存在和没有存在来处理
  if (manifestJson.option.icon) {
    var iconPath = _path2.default.resolve(_path2.default.join(quickgameDir, manifestJson.option.icon));
    if (_fsExtra2.default.existsSync(iconPath)) {
      copyFiles(iconPath, _path2.default.join(quickgameTmpDir, _path2.default.dirname(manifestJson.option.icon)));
    } else {
      copyFiles(_path2.default.join(_tplDir, 'logo.png'), quickgameTmpDir);
    }
  }

  if (_fsExtra2.default.existsSync(_path2.default.join(quickgameDir, config.SIGN_DIR_NAME))) {
    var signFileDir = _path2.default.join(quickgameTmpDir, config.SIGN_DIR_NAME);
    copyFiles(_path2.default.join(quickgameDir, config.SIGN_DIR_NAME), signFileDir);
  }

  //清空quickgame文件夹
  _fsExtra2.default.emptyDirSync(quickgameDir);

  //将临时文件夹的内容写回生成目录
  copyFiles(quickgameTmpDir, quickgameDir);

  //写入默认文件
  if (_fsExtra2.default.existsSync(_tplEngine) && engineConfig.DEFAULT_TPL_FILES_JS) engineConfig.DEFAULT_TPL_FILES_JS.forEach(function (tplFile) {
    copyFiles(_path2.default.join(_tplEngine, tplFile), quickgameDir);
  });

  _fsExtra2.default.ensureDirSync(distDir);
  console.log(_chalk2.default.green('[\u51C6\u5907\u5DE5\u4F5C]build&dist \u6587\u4EF6\u5939\u5DF2\u5220\u9664, manifest\u914D\u7F6E\u6587\u4EF6\u5DF2\u751F\u6210'));

  //检查签名文件，如果是dev模式，缺少sign文件，从打包项目中拷贝，如果是发布，需要release下有对应签名文件
  var signFiles = copySignFile(quickgameDir, _root, config, isDev);

  _fsExtra2.default.removeSync(quickgameTmpDir);
  return {
    signFiles: signFiles,
    distDir: distDir,
    quickgameDir: quickgameDir,
    manifestJson: manifestJson
  };
}

/**
 * 根据文件夹名字生成快应用的文件夹名称
 * @param {*} dir 
 */
function getProjectName(dir) {
  var dirName = _path2.default.basename(dir);
  return dirName.replace('wxgame', '');
}
/**
 * 拷贝文件，如果文件已经存在，不会覆盖
 * @param {string} src 
 * @param {string} dest 
 * @param {Array} excludeExts 不拷贝的文件后缀
 * @param {Array} excludes 不拷贝的文件列表
 * @param forceCopy 是否强制覆盖文件
 */
function copyFiles(src, dest) {
  var excludeExts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var excludes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var forceCopy = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  var stat = _fsExtra2.default.statSync(src);
  if (stat.isDirectory()) {
    var files = [];
    // 遍历收集文件列表
    excludes = excludes || [];
    traverseDirSync(src, files, excludes);
    files.forEach(function (file) {
      var relative = _path2.default.relative(src, file);
      var finalPath = _path2.default.resolve(_path2.default.join(dest, relative));
      //console.log('rf',relative,finalPath)
      if (!_fsExtra2.default.existsSync(finalPath)) {
        if (excludeExts && excludeExts.length > 0 && excludeExts.indexOf(_path2.default.extname(file)) > -1) {} else {
          _fsExtra2.default.copySync(file, finalPath);
        }
      } else {
        if (!forceCopy) {
          console.log(_chalk2.default.white('[\u4FE1\u606F]\u6587\u4EF6: ' + finalPath + ' \u5DF2\u5B58\u5728'));
        } else {
          _fsExtra2.default.copySync(file, finalPath);
        }
      }
    });
  } else {
    if (excludeExts && excludeExts.length > 0 && excludeExts.indexOf(_path2.default.extname(src)) > -1) {
      //console.log('not copy', src)
    } else {
      _fsExtra2.default.copySync(src, _path2.default.resolve(_path2.default.join(dest, _path2.default.basename(src))));
    }
  }
}