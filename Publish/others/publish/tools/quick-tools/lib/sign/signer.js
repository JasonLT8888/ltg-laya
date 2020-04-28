'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sign = undefined;

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _jszip = require('jszip');

var _jszip2 = _interopRequireDefault(_jszip);

var _bundle = require('./bundle');

var _bundle2 = _interopRequireDefault(_bundle);

var _config = require('../config/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPRESS_OPTS = {
  type: 'nodebuffer',
  compression: 'DEFLATE',
  compressionOptions: {
    level: 9
  }
  /*
   *@ input 打包目录
   *@ output 输出路径
   *@ rpkName rpk名
   *@ signFiles 签名文件
   */
};var sign = exports.sign = function sign(options, isDev, callback) {
  var privatekey = _fsExtra2.default.readFileSync(options.signFiles.privatekey);
  var certpem = _fsExtra2.default.readFileSync(options.signFiles.certificate);
  var zipper = new _jszip2.default();
  var filehashs = [];
  var zipfile = _path2.default.join(options.output, options.rpkName + '.zip');
  var signfile = _path2.default.join(options.output, options.rpkName);
  if (isDev || process.env.NODE_ENV != 'production') {
    //如果强制写了isDev，不打signed
    signfile += '.rpk';
  } else {
    signfile += '.signed.rpk';
  }

  parse(options.input, '.', function (name, file) {
    // 去除/dist/ 和 /sign/目录，.DS_Store文件
    if (name.substr(0, 5) !== 'dist/' && name.substr(0, 5) !== 'sign/' && _config.EXCLUDES.indexOf(name) === -1) {
      console.log('name include', name);
      // 文件列表hash
      filehashs.push({
        name: Buffer.from(name),
        file: file,
        hash: _bundle2.default.hashFile(file, _fsExtra2.default)
      });
      zipper.file(name, _fsExtra2.default.createReadStream(file));
    }
  }, _fsExtra2.default);
  _fsExtra2.default.ensureDirSync(options.output);
  zipper.generateNodeStream(COMPRESS_OPTS).pipe(_fsExtra2.default.createWriteStream(zipfile)).on('finish', function () {
    _bundle2.default.signZip({
      zip: zipfile,
      files: filehashs
    }, privatekey, certpem, signfile);
    // 删除临时文件
    _fsExtra2.default.existsSync(zipfile) && _fsExtra2.default.unlinkSync(zipfile);
    //console.log(chalk.green(`签名完成！文件为：${signfile}`))
    callback && callback(signfile);
  });
};

var parse = function parse(base, dir, cb, fs) {
  dir = dir || '.';
  var directory = _path2.default.posix.join(base, dir);
  var name = void 0;
  // 递归遍历目录
  fs.readdirSync(directory).forEach(function (file) {
    var fullpath = _path2.default.posix.join(directory, file);
    var stat = fs.statSync(fullpath);
    if (stat.isFile()) {
      // 替换
      var posixdir = dir.split(_path2.default.sep).join(_path2.default.posix.sep);
      name = _path2.default.posix.join(posixdir, _path2.default.basename(file));
      cb(name, fullpath);
    } else if (stat.isDirectory()) {
      var subdir = _path2.default.posix.join(dir, file);
      parse(base, subdir, cb, fs);
    }
  });
};