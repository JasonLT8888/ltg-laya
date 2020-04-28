'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _signer = require('./signer');

var _manifest = require('../../../src/manifest.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = process.env.NODE_ENV;
var projectPath = _path2.default.join(__dirname, '../../../');
var inputPath = _path2.default.join(projectPath, 'src');
var outputPath = _path2.default.join(projectPath, 'dist');

// 签名文件
var signFiles = {
  debug: {
    privatekey: _path2.default.join(projectPath, 'sign/debug/private.pem'),
    certificate: _path2.default.join(projectPath, 'sign/debug/certificate.pem')
  },
  release: {
    privatekey: _path2.default.join(projectPath, 'sign/release/private.pem'),
    certificate: _path2.default.join(projectPath, 'sign/release/certificate.pem')
  }
};

(0, _signer.sign)({
  input: inputPath,
  output: outputPath,
  rpkName: _manifest.package,
  signFiles: env == 'production' ? signFiles.release : signFiles.debug
});