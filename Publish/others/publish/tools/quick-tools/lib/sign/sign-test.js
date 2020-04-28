'use strict';

var _signer = require('./signer');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = process.env.NODE_ENV;
var projectPath = _path2.default.join(__dirname, '..');
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

console.log('NODE_ENV:' + env);

(0, _signer.sign)({
  input: _path2.default.join(__dirname, '../dist'),
  output: _path2.default.join(__dirname, '../dist/'),
  rpkName: 'test',
  signFiles: env == 'production' ? signFiles.release : signFiles.debug
});