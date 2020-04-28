'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildDir = exports.signDir = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * 将目标文件夹打包成rpk文件
 * @param {*} rpkName 包名,可以为空
 * @param {*} targetDir 
 * @param {*} distDir 
 * @param {*} manifestJson 
 * @param {*} signFiles 签名文件
 * @param {*} isDev
 */
var signDir = exports.signDir = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(rpkName, targetDir, distDir, manifestJson, signFiles, isDev) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
              var name = rpkName ? rpkName : manifestJson['package'];
              console.log(_chalk2.default.green('### \u5F00\u59CB\u7B7E\u540Drpk ###: ' + name));
              (0, _signer.sign)({
                input: targetDir,
                output: distDir,
                rpkName: name,
                signFiles: signFiles
              }, isDev, function (rpkFile) {
                console.log(_chalk2.default.green('### \u5B8C\u6210\u7B7E\u540Drpk ###: ' + rpkFile));
                resolve();
              });
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function signDir(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 
 * @param  dir 要构建的目录/文件
 * @param targetDir 目标目录
 * @param isMain 是否主包
 * @param hasSub 
 * @param excludes 排除的文件
 * @param exposeModules
 */


var buildDir = exports.buildDir = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(isBuildJs, dir, targetDir, isMain, hasSub) {
    var excludes = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
    var exposeModules = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
    var isDev = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //console.log('构建目录',dir,isMain,excludes)
            _fsExtra2.default.ensureDirSync(targetDir);
            //注意，打包文件夹还要排除
            if (isMain) {
              excludes.push(_path2.default.resolve(dir, CONFIG.QUICKGAME_DIR));
              excludes.push(_path2.default.resolve(dir, CONFIG.SIGN_DIR_NAME));
              excludes.push(_path2.default.resolve(dir, CONFIG.BUILD_PATH));
              excludes.push(_path2.default.resolve(dir, CONFIG.DEST_DIR));
              CONFIG.EXCLUDES.forEach(function (file) {
                excludes.push(_path2.default.resolve(dir, file));
              });
            }

            _context2.prev = 2;

            if (!isBuildJs) {
              _context2.next = 11;
              break;
            }

            //cocos的js不打包，已经打过一次了
            console.log(_chalk2.default.green('### \u5F00\u59CB\u6784\u5EFAjs ### \u5305\u540D\uFF1A ' + dir));
            _context2.next = 7;
            return buildJs(dir, targetDir, isMain, hasSub, excludes, exposeModules, isDev);

          case 7:
            console.log(_chalk2.default.green('### js\u6784\u5EFA\u5B8C\u6210 ### \u5305\u540D\uFF1A ' + dir));
            (0, _utils.copyFiles)(dir, targetDir, ['.js'], excludes);
            _context2.next = 12;
            break;

          case 11:
            (0, _utils.copyFiles)(dir, targetDir, [], excludes);

          case 12:
            _context2.next = 17;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2['catch'](2);

            console.log(_chalk2.default.red('### \u6784\u5EFAjs\u5931\u8D25 ### ' + _context2.t0));

          case 17:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[2, 14]]);
  }));

  return function buildDir(_x10, _x11, _x12, _x13, _x14) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * 根据文件列表和包名获取要排除的文件列表
 * @param {*} subpackCollections 
 * @param {*} mainpackCollection 
 * @param {*} packName 
 * @param {*} type 
 */


/**
 * 只处理.js文件
 * @param {*} dir 源目录
 * @param {*} isMain 是否主包
 * @param {*} hasSub 是否有分包
 * @param {*} targetDir 生成的目标目录 
 * @param {*} excludes 排除打包的文件
 * @param {*} exposeModules 已经暴露的模块，用于处理模块冲突
 */
var buildJs = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dir, targetDir, isMain, hasSub, excludes) {
    var exposeModules = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    var isDev = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', new _promise2.default(function (resolve, reject) {
              //console.log('excludes', excludes)
              //考虑单文件的情况
              var buildPatten = _fsExtra2.default.statSync(dir).isDirectory() ? _path2.default.resolve(dir) + '/**/*.js' : dir;
              //console.log('buildPatten', buildPatten)
              (0, _globby2.default)([buildPatten]).then(function (entries) {
                var bundle = createBundle(hasSub, dir);
                var jsMain = CONFIG.MAIN_ENTRY_JS_NAME + ".js";
                entries.forEach(function (entry) {
                  var expose = _path2.default.basename(entry, _path2.default.extname(entry));
                  //console.log('entry', path.resolve(entry), entry, process.cwd())
                  if (exposeModules[expose] && exposeModules[expose] != entry) {//如果是分包嵌套一起的，不警告
                    //console.log(chalk.yellow(`[warning]: module '${expose}' both defined in  '${exposeModules[expose]}' and '${entry}'`))
                  } else {
                    exposeModules[expose] = entry;
                  }

                  bundle.require(entry, {
                    expose: getExposeName(entry)
                  });
                  //只有分包这样处理
                  if (!isMain && hasSub) {
                    bundle.add(_path2.default.resolve(entry), {
                      expose: getExposeName(entry)
                    });
                  }
                });
                if (isMain) {
                  //主包只执行main.js
                  var mainPath = _path2.default.resolve(_path2.default.join(dir, jsMain));
                  bundle.add(mainPath, {
                    expose: getExposeName(mainPath)
                  });
                }

                // 解决嵌套问题，可能导致文件没有被打包进来，要从excludes里排除；
                // 同时也要注意，不嵌套的时候，对应的excludes也要生效，否则子包的文件会都打进来
                var excludes_ = [];
                excludes && excludes.forEach(function (exclude) {
                  if (entries.indexOf(exclude) == -1 || isMain) {
                    //主包都要排除
                    excludes_.push(exclude);
                  }
                });

                //bundle = bundle.exclude(excludes_)
                bundle = bundle.external(excludes_).transform(_babelify2.default, {
                  presets: [(0, _utils.loadBabelModule)('babel-preset-env')],
                  generatorOpts: {
                    compact: false
                  }
                  //ignore:['./js/egret.js','./js/eui.js','./js/dragonBones'],
                  //compact: false //当文件大小大于500k。babel不优化
                }).bundle().on('error', function (err) {
                  console.log(_chalk2.default.red('[js\u7F16\u8BD1\u9519\u8BEF]' + err));
                  //this.emit('finish')
                  reject(err);
                }).pipe((0, _vinylSourceStream2.default)(jsMain)).pipe((0, _vinylBuffer2.default)());
                if (isDev) {
                  bundle = bundle.pipe(_gulpSourcemaps2.default.init({ loadMaps: false }));
                }
                if (!isDev) {
                  bundle = bundle.pipe((0, _gulpUglify2.default)({
                    mangle: false,
                    compress: {
                      sequences: false, // join consecutive statements with the “comma operator”
                      properties: false, // optimize property access: a["foo"] → a.foo
                      // dead_code: true,  // discard unreachable code
                      drop_debugger: false, // discard “debugger” statements
                      // ecma: 5, // transform ES5 code into smaller ES6+ equivalent forms
                      // evaluate: true,  // evaluate constant expressions
                      unsafe: false, // some unsafe optimizations (see below)
                      // computed_props: true,
                      // conditionals: false,  // optimize if-s and conditional expressions
                      comparisons: false, // optimize comparisons
                      booleans: false, // optimize boolean expressions
                      typeofs: false, // Transforms typeof foo == "undefined" into foo === void 0. Note: recommend to set this value to false for IE10 and earlier versions due to known issues.
                      loops: false, // optimize loops
                      unused: false, // drop unused variables/functions
                      hoist_funs: false, // hoist function declarations
                      hoist_props: false,
                      hoist_vars: false, // hoist variable declarations
                      if_return: false, // optimize if-s followed by return/continue
                      inline: false, // embed simple functions
                      join_vars: false, // join var declarations
                      collapse_vars: false, // Collapse single-use non-constant variables - side effects permitting.
                      reduce_funcs: false,
                      reduce_vars: false, // Improve optimization on variables assigned with and used as constant values.
                      //warnings: true,
                      pure_getters: false,
                      pure_funcs: null,
                      drop_console: false,
                      // expression: false, // Pass true to preserve completion values from terminal statements without return, e.g. in bookmarklets.
                      keep_fargs: true,
                      keep_fnames: true,
                      keep_infinity: true, // Pass true to prevent Infinity from being compressed into 1/0, which may cause performance issues on Chrome.
                      side_effects: false // drop side-effect-free statements
                    }
                  }));
                }
                /* if (isDev) {
                  bundle = bundle.pipe(sourcemaps.write('./', {
                    sourceRoot: './',
                    includeContent: true,
                    addComment: true
                  }))
                } */
                bundle.pipe(_gulp2.default.dest(targetDir)).on('end', function () {
                  resolve();
                });
              });
            }));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function buildJs(_x19, _x20, _x21, _x22, _x23) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * 根据是否分包生成不同的bundle
 * @param {*} hasSub 是否有分包
 */


exports.checkSubpackageConf = checkSubpackageConf;
exports.getExcludes = getExcludes;
exports.collectPackFiles = collectPackFiles;
exports.mkDirs = mkDirs;
exports.checkProject = checkProject;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _browserify = require('browserify');

var _browserify2 = _interopRequireDefault(_browserify);

var _globby = require('globby');

var _globby2 = _interopRequireDefault(_globby);

var _babelify = require('babelify');

var _babelify2 = _interopRequireDefault(_babelify);

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _vinylSourceStream = require('vinyl-source-stream');

var _vinylSourceStream2 = _interopRequireDefault(_vinylSourceStream);

var _vinylBuffer = require('vinyl-buffer');

var _vinylBuffer2 = _interopRequireDefault(_vinylBuffer);

var _gulpSourcemaps = require('gulp-sourcemaps');

var _gulpSourcemaps2 = _interopRequireDefault(_gulpSourcemaps);

var _gulpUglify = require('gulp-uglify');

var _gulpUglify2 = _interopRequireDefault(_gulpUglify);

var _signer = require('../sign/signer');

var _config = require('../config/config');

var CONFIG = _interopRequireWildcard(_config);

var _utils = require('../utils');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var preludePath = _path2.default.resolve(__dirname, '../../prelude/browserify_prelude_src.js');
var prelude = _fsExtra2.default.readFileSync(preludePath, 'utf8');


/**
 * 不能存在main的包
 * 包名不能冲突，root必须存在
 * @param {JSON} manifestJson 
 */
function checkSubpackageConf(projectDir, manifestJson) {
  var tmpPack = {};
  manifestJson.subpackages.forEach(function (subpackage) {
    if (subpackage.name && subpackage.root) {
      if (tmpPack[subpackage.name]) {
        console.log(_chalk2.default.red('[\u914D\u7F6E\u9519\u8BEF]\u5206\u5305\u540D\u91CD\u590D\uFF1A ' + subpackage.name));
        _shelljs2.default.exit(1);
      } else if (subpackage.name == CONFIG.MAIN_PACK_NAME) {
        console.log(_chalk2.default.red('[\u914D\u7F6E\u9519\u8BEF]\u5206\u5305\u540D\u79F0\u4E0D\u80FD\u4E3Amain\uFF1A [' + subpackage.name + ']'));
        _shelljs2.default.exit(1);
      } else {
        var subpackRoot = _path2.default.resolve(projectDir, subpackage.root);
        if (_fsExtra2.default.existsSync(subpackRoot)) {
          var stat = _fsExtra2.default.statSync(subpackRoot);
          if (stat.isDirectory()) {
            tmpPack[subpackage.name] = subpackage;
          } else {
            //文件必须是js
            if (_path2.default.extname(subpackage.root) === '.js') {
              tmpPack[subpackage.name] = subpackage;
            } else {
              console.log(_chalk2.default.red('[\u914D\u7F6E\u9519\u8BEF]\u5206\u5305[' + subpackage.name + '] root\u5FC5\u987B\u662F\u76EE\u5F55\u6216\u8005.js\u6587\u4EF6'));
              _shelljs2.default.exit(1);
            }
          }
        } else {
          console.log(_chalk2.default.red('[\u914D\u7F6E\u9519\u8BEF]\u5206\u5305[' + subpackage.name + '] root \u4E0D\u5B58\u5728'));
          _shelljs2.default.exit(1);
        }
      }
    } else {
      console.log(_chalk2.default.red('[\u914D\u7F6E\u9519\u8BEF]\u5206\u5305\u914D\u7F6E\u5FC5\u987B\u5305\u542Bname\u548Croot\u5C5E\u6027'));
      _shelljs2.default.exit(1);
    }
  });
  console.log(_chalk2.default.green('### \u5206\u5305\u914D\u7F6E\u68C0\u67E5\u5B8C\u6210 ### \u51C6\u5907\u6253\u5305'));
}function getExcludes(subpackObj, subpackCollections, mainpackCollection, packName) {
  var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "all";

  var excludes = [];
  for (var subpackname in subpackCollections) {
    var subCol = subpackCollections[subpackname];
    //console.log('getexludes',subCol,subpackObj)
    if (subpackObj == null || subCol.path != subpackObj.path) {
      //路径不相等，文件就要互斥
      //if(subpackObj != null) console.log(packName,'paths',subCol.path,subpackObj.path)
      excludes = excludes.concat(subCol[type]);
    }
    if (_fsExtra2.default.statSync(subCol.path).isDirectory()) {
      excludes.push(subCol.path);
    }
  }
  if (packName != CONFIG.MAIN_PACK_NAME) {
    //分包，去掉当前分包所在的包
    excludes = excludes.concat(mainpackCollection[type]);
  }
  return excludes;
}

/**
 * 收集子包/主包 文件，返回分类文件列表
 * @param {*} dir 
 * @param {*} excludes  绝对路径列表
 */
function collectPackFiles(rootPath) {
  var excludes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  //console.log('exludes',excludes)
  var result = {
    "path": rootPath,
    "all": [],
    "js": [],
    "other": []
  };
  var stat = _fsExtra2.default.statSync(rootPath);
  if (stat.isDirectory()) {
    var files = [];
    (0, _utils.traverseDirSync)(rootPath, files, excludes);
    files.forEach(function (file) {
      result.all.push(file);
      if (_path2.default.extname(file) == '.js') {
        result.js.push(file);
      } else {
        result.other.push(file);
      }
    });
  } else {
    //文件
    if (!excludes || excludes.indexOf(rootPath) == -1) {
      result.all.push(rootPath);
      result.js.push(rootPath);
    } else {
      //
    }
  }
  return result;
}

function mkDirs(projectDir, isDev) {
  //let quickgameDir = path.join(projectDir,CONFIG.QUICKGAME_DIR)
  var quickgameDir = projectDir;
  var targetDir = _path2.default.join(quickgameDir, CONFIG.BUILD_PATH);
  var distDir = _path2.default.join(quickgameDir, CONFIG.DEST_DIR);

  //fs.ensureDirSync(quickgameDir)
  _fsExtra2.default.emptyDirSync(distDir);
  _fsExtra2.default.emptyDirSync(targetDir);
  console.log(_chalk2.default.green('[\u51C6\u5907\u5DE5\u4F5C]build&dist \u6587\u4EF6\u5939\u5DF2\u6E05\u7A7A'));

  //检查签名文件，如果是dev模式，缺少sign文件，从打包项目中拷贝，如果是发布，需要release下有对应签名文件
  var signDir = _path2.default.join(quickgameDir, CONFIG.SIGN_DIR_NAME);
  var _sign = _path2.default.resolve(_path2.default.resolve(__dirname, '../../sign')); //自带的签名文件

  if (!_fsExtra2.default.existsSync(signDir)) {
    console.log(_chalk2.default.yellow('### \u7F3A\u5C11\u7B7E\u540D\u6587\u4EF6 ### \u4F7F\u7528\u9ED8\u8BA4\u7B7E\u540D\u548C\u8BC1\u4E66'));
    (0, _utils.copyFiles)(_sign, signDir);
  }
  var signEnvDir = isDev ? CONFIG.SIGN_DEBUG_DIR : CONFIG.SIGN_RELEASE_DIR;
  var privatekey = _path2.default.join(signDir, signEnvDir, CONFIG.PRIVATE_FILE_NAME);
  var certificate = _path2.default.join(signDir, signEnvDir, CONFIG.CERTIFICATE_FILE_NAME);
  if (!_fsExtra2.default.existsSync(privatekey) || !_fsExtra2.default.existsSync(certificate)) {
    if (!isDev) {
      console.log(_chalk2.default.red('[\u7B7E\u540D\u6587\u4EF6\u9519\u8BEF]\u6CA1\u6709 release \u7684\u7B7E\u540D\u548C\u8BC1\u4E66, \u8BF7\u4FDD\u8BC1\u4EE5\u4E0B\u8DEF\u5F84\u7684\u6587\u4EF6\u5B58\u5728\uFF0C\u79C1\u94A5\uFF1A' + privatekey + ', \u8BC1\u4E66\uFF1A' + certificate));
      _shelljs2.default.exit(1);
    } else {
      console.log(_chalk2.default.yellow('### \u7F3A\u5C11\u7B7E\u540D\u6587\u4EF6 ### \u4F7F\u7528\u9ED8\u8BA4\u7B7E\u540D\u548C\u8BC1\u4E66'));
      (0, _utils.copyFiles)(_path2.default.join(_sign, signEnvDir), _path2.default.join(signDir, signEnvDir));
    }
  }
  return {
    signFiles: {
      privatekey: privatekey,
      certificate: certificate
    },
    targetDir: targetDir,
    distDir: distDir
  };
}

// 统一转化为linux下方式expose，兼容windows和linux
function getExposeName(entry) {
  //return path.sep + path.relative(process.cwd(), entry).replace(path.extname(entry),'')
  return _path2.default.posix.sep + _path2.default.relative(process.cwd(), entry).split(_path2.default.win32.sep).join(_path2.default.posix.sep);
}function createBundle(hasSub, dir) {
  var config = {
    debug: false,
    insertGlobals: false,
    externalRequireName: "__require__",
    prelude: prelude,
    preludePath: preludePath,
    paths: []
    //commondir : false
    //basedir:dir
  };
  if (_fsExtra2.default.statSync(dir).isDirectory()) {
    config.paths.push(dir);
  } else {
    //不是目录的时候也能够兼容
    config.paths.push(_path2.default.dirname(dir));
  }
  if (hasSub) {
    config = (0, _assign2.default)(config, {});
  }
  return (0, _browserify2.default)(config);
}

/**
 * 返回manifest配置和对应的签名文件
 * @param {string} projectDir 
 * @param {boolean} isDev 
 */
function checkProject(projectDir) {
  var result = null;
  var checkFiles = ['manifest.json', 'main.js'];
  checkFiles.forEach(function (fileName) {
    var filePath = _path2.default.join(projectDir, fileName);
    if (!_fsExtra2.default.existsSync(filePath)) {
      console.log(_chalk2.default.red('[\u9519\u8BEF]\u7F3A\u5C11\u6587\u4EF6 ' + fileName + ', \u786E\u4FDD\u6539\u8DEF\u5F84\u4E0B\u6587\u4EF6\u5B58\u5728\uFF1A' + filePath));
      _shelljs2.default.exit(1);
    }
  });
  var filePath = _path2.default.join(projectDir, checkFiles[0]);
  try {
    result = require(filePath);
  } catch (e) {
    console.log(_chalk2.default.red('[error]parse config file error: ' + filePath));
    _shelljs2.default.exit(1);
  }
  if (result) {
    var reg = /^[a-zA-Z]+[0-9a-zA-Z_]*(\.[a-zA-Z]+[0-9a-zA-Z_]*)*$/;
    if (result['package']) {
      if (!reg.test(result['package'])) {
        console.log(_chalk2.default.red('[\u914D\u7F6E\u9519\u8BEF]\u5305\u540D\u4E0D\u5408\u6CD5'));
        _shelljs2.default.exit(1);
      }
    } else {
      console.log(_chalk2.default.red('[\u914D\u7F6E\u9519\u8BEF]\u5FC5\u987B\u5305\u542B\u5305\u540D'));
      _shelljs2.default.exit(1);
    }
  }
  return result;
}