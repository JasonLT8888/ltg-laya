'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * 生成工程目录
 * @param name 项目名
 */
var generate = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(pubDir) {
    var isDev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var dir, _root, _tpl, signFiles, manifestJson, distDir;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dir = pubDir || process.cwd();
            _root = _path2.default.resolve(_path2.default.resolve(__dirname, '../'), '../');
            _tpl = _path2.default.join(_root, 'tpl');
            // 判断签名目录是否存在

            signFiles = (0, _utils.copySignFile)(dir, _root, CONFIG, isDev);
            manifestJson = (0, _utils.createMainifestJson)(_tpl, dir, dir, (0, _utils.getSuggestPackNameJson)('', dir));
            distDir = _path2.default.join(dir, CONFIG.DEST_DIR);

            _fsExtra2.default.emptyDirSync(distDir);
            _context.next = 9;
            return (0, _pack.signDir)(null, dir, distDir, manifestJson.option, signFiles, isDev);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function generate(_x2) {
    return _ref.apply(this, arguments);
  };
}();

// 创建工程目录
/*
 * Copyright (C) 2017, hapjs.org. All rights reserved.
 */

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _utils = require('../utils');

var _pack = require('../pack');

var _config = require('../config/config');

var CONFIG = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = generate;