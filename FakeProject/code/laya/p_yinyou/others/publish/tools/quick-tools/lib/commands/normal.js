'use strict';

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * 没有分包的场景打包
 * @param {*} dir 
 * @param {*} dirConf
 * @param {*} manifestJson 
 * @param {*} isDev 
 */
var generateNoSubpacks = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(isBuildJs, dir, dirConf, manifestJson, isDev) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return packer.buildDir(isBuildJs, dir, dirConf.targetDir, true, false, [], {}, isDev);

          case 2:
            _context.next = 4;
            return packer.signDir(null, dirConf.targetDir, dirConf.distDir, manifestJson, dirConf.signFiles, isDev);

          case 4:
            _fsExtra2.default.removeSync(dirConf.targetDir);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function generateNoSubpacks(_x3, _x4, _x5, _x6, _x7) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 分包打包，注意：子包有可能是JS文件
 * 遍历所有分包，生成文件列表，
 * 遍历主包，生成文件列表
 * 打包主包，打包分包
 * 打包总包
 * 
 * @param {*} projectDir 
 * @param {*} targetDir 
 * @param {*} distDir 
 * @param {*} manifestJson 
 * @param {*} signFiles 
 */


var generateWithSubpacks = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(isBuildJs, projectDir, dirConf, manifestJson, isDev) {
    var subpackCollections, mainpackCollection, targetMain, tmpRpk, exposeModules, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, subpackage, targetSub, sourceDir, _tmpRpk;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            packer.checkSubpackageConf(projectDir, manifestJson);
            subpackCollections = collectSubpacks(projectDir, manifestJson.subpackages); // 收集分包文件路径

            mainpackCollection = collectMainPacks(projectDir, subpackCollections); // 收集主包文件路径

            //打包主包

            targetMain = _path2.default.join(dirConf.targetDir, CONFIG.MAIN_PACK_NAME);
            tmpRpk = _path2.default.join(dirConf.distDir, CONFIG.TMP_RPKS);
            _context2.next = 7;
            return packer.buildDir(isBuildJs, projectDir, targetMain, true, true, packer.getExcludes(null, subpackCollections, mainpackCollection, CONFIG.MAIN_PACK_NAME, 'all'), {}, isDev);

          case 7:
            _context2.next = 9;
            return packer.signDir(CONFIG.MAIN_PACK_NAME, targetMain, tmpRpk, manifestJson, dirConf.signFiles, true);

          case 9:

            // 分包打包
            exposeModules = {}; // 所有的暴露的模块

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context2.prev = 13;
            _iterator = (0, _getIterator3.default)(manifestJson.subpackages);

          case 15:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context2.next = 28;
              break;
            }

            subpackage = _step.value;
            targetSub = _path2.default.resolve(_path2.default.join(dirConf.targetDir, subpackage.name));
            sourceDir = _path2.default.resolve(_path2.default.join(projectDir, subpackage.root));
            _tmpRpk = _path2.default.resolve(_path2.default.join(dirConf.distDir, CONFIG.TMP_RPKS));

            subpackage.path = sourceDir;
            _context2.next = 23;
            return packer.buildDir(isBuildJs, sourceDir, targetSub, false, true, packer.getExcludes(subpackage, subpackCollections, mainpackCollection, subpackage.name, 'all'), exposeModules, isDev);

          case 23:
            _context2.next = 25;
            return packer.signDir(subpackage.name, targetSub, _tmpRpk, manifestJson, dirConf.signFiles, true);

          case 25:
            _iteratorNormalCompletion = true;
            _context2.next = 15;
            break;

          case 28:
            _context2.next = 34;
            break;

          case 30:
            _context2.prev = 30;
            _context2.t0 = _context2['catch'](13);
            _didIteratorError = true;
            _iteratorError = _context2.t0;

          case 34:
            _context2.prev = 34;
            _context2.prev = 35;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 37:
            _context2.prev = 37;

            if (!_didIteratorError) {
              _context2.next = 40;
              break;
            }

            throw _iteratorError;

          case 40:
            return _context2.finish(37);

          case 41:
            return _context2.finish(34);

          case 42:
            _context2.next = 44;
            return packer.signDir(null, tmpRpk, dirConf.distDir, manifestJson, dirConf.signFiles, isDev);

          case 44:
            _fsExtra2.default.removeSync(tmpRpk);
            _fsExtra2.default.removeSync(dirConf.targetDir);

          case 46:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[13, 30, 34, 42], [35,, 37, 41]]);
  }));

  return function generateWithSubpacks(_x8, _x9, _x10, _x11, _x12) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * 这里收集的路径不包括目录
 * @param {*} projectDir 
 * @param {*} subpackages 
 */


var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _pack = require('../pack');

var packer = _interopRequireWildcard(_pack);

var _config = require('../config/config');

var CONFIG = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * browserify+uglify+babel处理js代码
 * 处理分包逻辑，调用sign签名打包
 * 1.检查package，是否有文件，是否有manifest.json，是否配置分包
 * 2.1 不分包的场景：直接打包，入口文件main.js，直接生成rpk
 * 2.2 分包场景，主包子包分别打包，分别生成rpk后，再生成总包rpk
 * 字体？css？文件暂不打包
 */

/**
 * 生成工程目录
 * @param engine 主要对cocos特殊处理
 * @param isDev 是否Dev
 * @param cwdDir 项目目录，如果不传，默认用命令行所在的目录
 */
function generate() {
  var isBuildJs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var isDev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var cwdDir = arguments[2];

  var dir = _path2.default.resolve(cwdDir || process.cwd()); //工程目录
  var manifestJson = packer.checkProject(dir, isDev);
  var dirConf = packer.mkDirs(dir, isDev);
  var subpackages = getSubpacks(manifestJson);
  if (subpackages && subpackages.length > 0) {
    console.log(_chalk2.default.green('###\u5305\u542B\u5206\u5305### \u5F00\u59CB\u6253\u5305'));
    generateWithSubpacks(isBuildJs, dir, dirConf, manifestJson, isDev);
  } else {
    console.log(_chalk2.default.green('###\u4E0D\u5305\u542B\u5206\u5305### \u5F00\u59CB\u6253\u5305'));
    generateNoSubpacks(isBuildJs, dir, dirConf, manifestJson, isDev);
  }
} /*
   * Copyright (C) 2017, hapjs.org. All rights reserved.
   */

function collectSubpacks(projectDir, subpackages) {
  var result = {};
  subpackages.forEach(function (subpackage) {
    result[subpackage.name] = packer.collectPackFiles(_path2.default.resolve(_path2.default.join(projectDir, subpackage.root)));
  });
  return result;
}

/**
 * 这里收集的路径不包括目录
 * @param {*} projectDir 
 * @param {*} subpackCollections 
 */
function collectMainPacks(projectDir, subpackCollections) {
  var excludes = [];
  (0, _values2.default)(subpackCollections).forEach(function (subCol) {
    excludes = excludes.concat(subCol.all);
  });
  return packer.collectPackFiles(projectDir, excludes);
}

function getSubpacks(manifest) {
  return manifest['subpackages'];
}

// 创建工程目录
module.exports = generate;