'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * 生成工程目录
 * @param sourceDir 指定的微信目录，默认为空
 */
/*
 * Copyright (C) 2017, hapjs.org. All rights reserved.
 */

var generate = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var pubDir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var isDev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var isSmallPack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var dir, dirConf, excludeFiles;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dir = process.cwd();

            if (pubDir) {
              if (!_path2.default.isAbsolute(pubDir)) {
                pubDir = _path2.default.resolve(dir, pubDir);
              }
            } else {
              pubDir = _path2.default.join(dir, COCOS_CONFIG.DEFAULT_PARENT_DIR, COCOS_CONFIG.DEFAULT_PUB_DIR);
            }

            if (!_fsExtra2.default.existsSync(pubDir)) {
              console.log(_chalk2.default.red('[\u9519\u8BEF]\u6307\u5B9A\u7684\u53D1\u5E03\u6587\u4EF6\u5939\u4E0D\u5B58\u5728\uFF1A' + pubDir));
              _shelljs2.default.exit(1);
            }

            //生成对应目录和文件
            dirConf = (0, _utils.mkBuildDirs)(pubDir, dir, CONFIG, COCOS_CONFIG, 'cocos', isDev);
            excludeFiles = COCOS_CONFIG.EXCLUDE_FILES.map(function (eFile) {
              return eFile;
            });

            if (isSmallPack) {
              excludeFiles.push('res');
            }
            //拷贝文件
            (0, _utils.copyFiles)(pubDir, dirConf.quickgameDir, COCOS_CONFIG.EXCLUDE_FILE_TYPE, excludeFiles.map(function (eFile) {
              return _path2.default.join(pubDir, eFile);
            }));
            _context.next = 9;
            return packer.signDir(null, dirConf.quickgameDir, dirConf.distDir, dirConf.manifestJson.option, dirConf.signFiles, isDev);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function generate() {
    return _ref.apply(this, arguments);
  };
}();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _pack = require('../pack');

var packer = _interopRequireWildcard(_pack);

var _config = require('../config/config');

var CONFIG = _interopRequireWildcard(_config);

var _cocos_v = require('../config/cocos_v2');

var COCOS_CONFIG = _interopRequireWildcard(_cocos_v);

var _utils = require('../utils');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = generate;