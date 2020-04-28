'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorconsole = undefined;
exports.mkdirsSync = mkdirsSync;
exports.traverseDirSync = traverseDirSync;
exports.clearDirSync = clearDirSync;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 递归创建目录 同步方法
 * @param dir
 * @returns {boolean}
 */
function mkdirsSync(dir) {
  if (_fs2.default.existsSync(dir)) {
    return true;
  } else {
    if (mkdirsSync(_path2.default.dirname(dir))) {
      _fs2.default.mkdirSync(dir);
      return true;
    }
  }
}

/**
 * 遍历目录文件 同步方法
 * @param dir
 * @param files 收集的文件列表
 */
/*
 * Copyright (C) 2017, hapjs.org. All rights reserved.
 */

function traverseDirSync(dir, files) {
  var excludeRootDirs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var list = _fs2.default.readdirSync(dir);
  list.forEach(function (file) {
    file = _path2.default.join(dir, file);
    var stat = _fs2.default.statSync(file);
    if (stat && stat.isDirectory()) {
      traverseDirSync(file, files);
    } else {
      files.push(file);
    }
  });
}

/**
 * 删除目录
 * @param dir
 */
function clearDirSync(dir) {
  var files = [];
  if (_fs2.default.existsSync(dir)) {
    files = _fs2.default.readdirSync(dir);
    files.forEach(function (file, index) {
      var curPath = dir + '/' + file;
      if (_fs2.default.statSync(curPath).isDirectory()) {
        clearDirSync(curPath);
      } else {
        _fs2.default.unlinkSync(curPath);
      }
    });
    _fs2.default.rmdirSync(dir);
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