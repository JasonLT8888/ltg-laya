(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var cacheManager = require('./cache-manager');

var _window$fsUtils = window.fsUtils,
    downloadFile = _window$fsUtils.downloadFile,
    readText = _window$fsUtils.readText,
    readArrayBuffer = _window$fsUtils.readArrayBuffer,
    readJson = _window$fsUtils.readJson,
    loadSubpackage = _window$fsUtils.loadSubpackage,
    getUserDataPath = _window$fsUtils.getUserDataPath,
    _subpackagesPath = _window$fsUtils._subpackagesPath;
var REGEX = /^\w+:\/\/.*/;
var downloader = cc.assetManager.downloader;
var parser = cc.assetManager.parser;
var presets = cc.assetManager.presets;
downloader.maxConcurrency = 8;
downloader.maxRequestsPerFrame = 64;
presets['scene'].maxConcurrency = 10;
presets['scene'].maxRequestsPerFrame = 64;
var REMOTE_SERVER_ROOT;
var subpackages = {},
    remoteBundles = {};
var loadedScripts = {};

function downloadScript(url, options, onComplete) {
  if (typeof options === 'function') {
    onComplete = options;
    options = null;
  }

  if (REGEX.test(url)) {
    onComplete && onComplete(new Error('Can not load remote scripts'));
    return;
  }

  if (loadedScripts[url]) return onComplete && onComplete();

  require(url);

  loadedScripts[url] = true;
  onComplete && onComplete(null);
}

function handleZip(url, options, onComplete) {
  var cachedUnzip = cacheManager.cachedFiles.get(url);

  if (cachedUnzip) {
    cacheManager.updateLastTime(url);
    onComplete && onComplete(null, cachedUnzip.url);
  } else if (REGEX.test(url)) {
    downloadFile(url, null, options.header, options.onFileProgress, function (err, downloadedZipPath) {
      if (err) {
        onComplete && onComplete(err);
        return;
      }

      cacheManager.unzipAndCacheBundle(url, downloadedZipPath, options.__cacheBundleRoot__, onComplete);
    });
  } else {
    cacheManager.unzipAndCacheBundle(url, url, options.__cacheBundleRoot__, onComplete);
  }
}

function downloadDomAudio(url, options, onComplete) {
  if (typeof options === 'function') {
    onComplete = options;
    options = null;
  }

  var dom = document.createElement('audio');
  dom.src = url;
  onComplete && onComplete(null, dom);
}

function readFile(filePath, options, onComplete) {
  switch (options.responseType) {
    case 'json':
      readJson(filePath, onComplete);
      break;

    case 'arraybuffer':
      readArrayBuffer(filePath, onComplete);
      break;

    default:
      readText(filePath, onComplete);
      break;
  }
}

function download(url, func, options, onFileProgress, onComplete) {
  var result = transformUrl(url, options);

  if (result.inLocal) {
    func(result.url, options, onComplete);
  } else if (result.inCache) {
    cacheManager.updateLastTime(url);
    func(result.url, options, function (err, data) {
      if (err) {
        cacheManager.removeCache(url);
      }

      onComplete(err, data);
    });
  } else {
    downloadFile(url, null, options.header, onFileProgress, function (err, path) {
      if (err) {
        onComplete(err, null);
        return;
      }

      func(path, options, function (err, data) {
        if (!err) {
          cacheManager.tempFiles.add(url, path);
          cacheManager.cacheFile(url, path, options.cacheEnabled, options.__cacheBundleRoot__, true);
        }

        onComplete(err, data);
      });
    });
  }
}

function parseArrayBuffer(url, options, onComplete) {
  readArrayBuffer(url, onComplete);
}

function parseText(url, options, onComplete) {
  readText(url, onComplete);
}

function parseJson(url, options, onComplete) {
  readJson(url, onComplete);
}

function downloadText(url, options, onComplete) {
  download(url, parseText, options, options.onFileProgress, onComplete);
}

var downloadJson = function downloadJson(url, options, onComplete) {
  download(url, parseJson, options, options.onFileProgress, onComplete);
};

var loadFont = function loadFont(url, options, onComplete) {
  var fontFamily = __globalAdapter.loadFont(url);

  onComplete(null, fontFamily || 'Arial');
};

function doNothing(content, options, onComplete) {
  onComplete(null, content);
}

function downloadAsset(url, options, onComplete) {
  download(url, doNothing, options, options.onFileProgress, onComplete);
}

function subdomainTransformUrl(url, options, onComplete) {
  var _transformUrl = transformUrl(url, options),
      url = _transformUrl.url;

  onComplete(null, url);
}

function downloadBundle(nameOrUrl, options, onComplete) {
  var bundleName = cc.path.basename(nameOrUrl);
  var version = options.version || cc.assetManager.downloader.bundleVers[bundleName];

  if (subpackages[bundleName]) {
    var config = "".concat(_subpackagesPath).concat(bundleName, "/config.").concat(version ? version + '.' : '', "json");
    loadSubpackage(bundleName, options.onFileProgress, function (err) {
      if (err) {
        onComplete(err, null);
        return;
      }

      downloadJson(config, options, function (err, data) {
        data && (data.base = "".concat(_subpackagesPath).concat(bundleName, "/"));
        onComplete(err, data);
      });
    });
  } else {
    var js, url;

    if (REGEX.test(nameOrUrl)) {
      url = nameOrUrl;
      js = "src/scripts/".concat(bundleName, "/index.js");
      cacheManager.makeBundleFolder(bundleName);
    } else {
      if (remoteBundles[bundleName]) {
        url = "".concat(REMOTE_SERVER_ROOT, "remote/").concat(bundleName);
        js = "src/scripts/".concat(bundleName, "/index.js");
        cacheManager.makeBundleFolder(bundleName);
      } else {
        url = "assets/".concat(bundleName);
        js = "assets/".concat(bundleName, "/index.js");
      }
    }

    if (!loadedScripts[js]) {
      require(js);

      loadedScripts[js] = true;
    }

    REGEX.test(url) && cacheManager.makeBundleFolder(bundleName);
    options.cacheEnabled = true;
    options.__cacheBundleRoot__ = bundleName;
    var config = "".concat(url, "/config.").concat(version ? version + '.' : '', "json");
    downloadJson(config, options, function (err, data) {
      if (err) {
        onComplete && onComplete(err);
        return;
      }

      if (data.isZip) {
        var zipVersion = data.zipVersion;
        var zipUrl = "".concat(url, "/res.").concat(zipVersion ? zipVersion + '.' : '', "zip");
        handleZip(zipUrl, options, function (err, unzipPath) {
          if (err) {
            onComplete && onComplete(err);
            return;
          }

          data.base = unzipPath + '/res/';
          onComplete && onComplete(null, data);
        });
      } else {
        data.base = url + '/';
        onComplete && onComplete(null, data);
      }
    });
  }
}

;
var originParsePVRTex = parser.parsePVRTex;

var parsePVRTex = function parsePVRTex(file, options, onComplete) {
  readArrayBuffer(file, function (err, data) {
    if (err) return onComplete(err);
    originParsePVRTex(data, options, onComplete);
  });
};

var originParsePKMTex = parser.parsePKMTex;

var parsePKMTex = function parsePKMTex(file, options, onComplete) {
  readArrayBuffer(file, function (err, data) {
    if (err) return onComplete(err);
    originParsePKMTex(data, options, onComplete);
  });
};

function parsePlist(url, options, onComplete) {
  readText(url, function (err, file) {
    var result = null;

    if (!err) {
      result = cc.plistParser.parse(file);
      if (!result) err = new Error('parse failed');
    }

    onComplete && onComplete(err, result);
  });
}

var downloadImage = downloadAsset;
downloader.downloadDomAudio = downloadDomAudio;
downloader.downloadScript = downloadScript;
parser.parsePVRTex = parsePVRTex;
parser.parsePKMTex = parsePKMTex;
downloader.register({
  '.js': downloadScript,
  // Audio
  '.mp3': downloadAsset,
  '.ogg': downloadAsset,
  '.wav': downloadAsset,
  '.m4a': downloadAsset,
  // Image
  '.png': downloadImage,
  '.jpg': downloadImage,
  '.bmp': downloadImage,
  '.jpeg': downloadImage,
  '.gif': downloadImage,
  '.ico': downloadImage,
  '.tiff': downloadImage,
  '.image': downloadImage,
  '.webp': downloadImage,
  '.pvr': downloadAsset,
  '.pkm': downloadAsset,
  '.font': downloadAsset,
  '.eot': downloadAsset,
  '.ttf': downloadAsset,
  '.woff': downloadAsset,
  '.svg': downloadAsset,
  '.ttc': downloadAsset,
  // Txt
  '.txt': downloadAsset,
  '.xml': downloadAsset,
  '.vsh': downloadAsset,
  '.fsh': downloadAsset,
  '.atlas': downloadAsset,
  '.tmx': downloadAsset,
  '.tsx': downloadAsset,
  '.plist': downloadAsset,
  '.fnt': downloadAsset,
  '.json': downloadJson,
  '.ExportJson': downloadAsset,
  '.binary': downloadAsset,
  '.bin': downloadAsset,
  '.dbbin': downloadAsset,
  '.skel': downloadAsset,
  '.mp4': downloadAsset,
  '.avi': downloadAsset,
  '.mov': downloadAsset,
  '.mpg': downloadAsset,
  '.mpeg': downloadAsset,
  '.rm': downloadAsset,
  '.rmvb': downloadAsset,
  'bundle': downloadBundle,
  'default': downloadText
});
parser.register({
  '.png': downloader.downloadDomImage,
  '.jpg': downloader.downloadDomImage,
  '.bmp': downloader.downloadDomImage,
  '.jpeg': downloader.downloadDomImage,
  '.gif': downloader.downloadDomImage,
  '.ico': downloader.downloadDomImage,
  '.tiff': downloader.downloadDomImage,
  '.image': downloader.downloadDomImage,
  '.webp': downloader.downloadDomImage,
  '.pvr': parsePVRTex,
  '.pkm': parsePKMTex,
  '.font': loadFont,
  '.eot': loadFont,
  '.ttf': loadFont,
  '.woff': loadFont,
  '.svg': loadFont,
  '.ttc': loadFont,
  // Audio
  '.mp3': downloadDomAudio,
  '.ogg': downloadDomAudio,
  '.wav': downloadDomAudio,
  '.m4a': downloadDomAudio,
  // Txt
  '.txt': parseText,
  '.xml': parseText,
  '.vsh': parseText,
  '.fsh': parseText,
  '.atlas': parseText,
  '.tmx': parseText,
  '.tsx': parseText,
  '.fnt': parseText,
  '.plist': parsePlist,
  '.binary': parseArrayBuffer,
  '.bin': parseArrayBuffer,
  '.dbbin': parseArrayBuffer,
  '.skel': parseArrayBuffer,
  '.ExportJson': parseJson
});

var transformUrl = function transformUrl(url, options) {
  var inLocal = false;
  var inCache = false;
  var isInUserDataPath = url.startsWith(getUserDataPath());

  if (isInUserDataPath) {
    inLocal = true;
  } else if (REGEX.test(url)) {
    if (!options.reload) {
      var cache = cacheManager.cachedFiles.get(url);

      if (cache) {
        inCache = true;
        url = cache.url;
      } else {
        var tempUrl = cacheManager.tempFiles.get(url);

        if (tempUrl) {
          inLocal = true;
          url = tempUrl;
        }
      }
    }
  } else {
    inLocal = true;
  }

  return {
    url: url,
    inLocal: inLocal,
    inCache: inCache
  };
};

cc.assetManager.transformPipeline.append(function (task) {
  var input = task.output = task.input;

  for (var i = 0, l = input.length; i < l; i++) {
    var item = input[i];
    var options = item.options;

    if (!item.config) {
      options.cacheEnabled = options.cacheEnabled !== undefined ? options.cacheEnabled : false;
    } else {
      options.__cacheBundleRoot__ = item.config.name;
    }
  }
});
var originInit = cc.assetManager.init;

cc.assetManager.init = function (options) {
  originInit.call(cc.assetManager, options);
  options.subpackages && options.subpackages.forEach(function (x) {
    return subpackages[x] = 'subpackages/' + x;
  });
  options.remoteBundles && options.remoteBundles.forEach(function (x) {
    return remoteBundles[x] = true;
  });
  REMOTE_SERVER_ROOT = options.server || '';
  if (REMOTE_SERVER_ROOT && !REMOTE_SERVER_ROOT.endsWith('/')) REMOTE_SERVER_ROOT += '/';
  cacheManager.init();
};

},{"./cache-manager":15}],2:[function(require,module,exports){
"use strict";
/****************************************************************************
 LICENSING AGREEMENT
 
 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/

cc.FlexBuffer = function (bytes) {
  this._reallocBuffer(bytes || 64, false);
};

cc.js.mixin(cc.FlexBuffer.prototype, {
  _reallocBuffer: function _reallocBuffer(bytes, copyOldData) {
    var oldData;

    if (this.buffer) {
      oldData = new Uint8Array(this.buffer);
    }

    this.buffer = new ArrayBuffer(bytes);
    var newData = new Uint8Array(this.buffer); // Only copy data if old buffer is smaller

    if (oldData && copyOldData && newData.length >= oldData.length) {
      newData.set(oldData);
    }
  },
  // return true if array buffer changed
  reserve: function reserve(bytes) {
    var byteLength = this.buffer.byteLength;

    if (bytes > byteLength) {
      while (byteLength < bytes) {
        byteLength *= 2;
      }

      this._reallocBuffer(byteLength);

      return true;
    }

    return false;
  }
});

},{}],3:[function(require,module,exports){
"use strict";
/****************************************************************************
 LICENSING AGREEMENT
 
 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/

var Helper = cc.Graphics.Helper;
var PointFlags = cc.Graphics.Types.PointFlags;
var Point = cc.Graphics.Point;

function Path() {
  this.reset();
}

cc.js.mixin(Path.prototype, {
  reset: function reset() {
    this.closed = false;
    this.nbevel = 0;
    this.complex = true;

    if (this.points) {
      this.points.length = 0;
    } else {
      this.points = [];
    }
  }
});

var RenderData = function RenderData() {
  this.index = 0;
  this.byteOffset = 0;
  this.indiceStart = 0;
  this.indiceOffset = 0;
  this.vertexStart = 0;
  this.vertexOffset = 0;
};

cc.Graphics.Impl = function Impl(graphics) {
  // inner properties
  this._tessTol = 0.25;
  this._distTol = 0.01;
  this._updatePathOffset = false;
  this._paths = null;
  this._pathLength = 0;
  this._pathOffset = 0;
  this._points = null;
  this._pointsOffset = 0;
  this._commandx = 0;
  this._commandy = 0;
  this._paths = [];
  this._points = [];
  this._renderDatas = [];
  this._dataOffset = 0;
};

cc.js.mixin(cc.Graphics.Impl.prototype, {
  moveTo: function moveTo(x, y) {
    if (this._updatePathOffset) {
      this._pathOffset = this._pathLength;
      this._updatePathOffset = false;
    }

    this._addPath();

    this._addPoint(x, y, PointFlags.PT_CORNER);

    this._commandx = x;
    this._commandy = y;
  },
  lineTo: function lineTo(x, y) {
    this._addPoint(x, y, PointFlags.PT_CORNER);

    this._commandx = x;
    this._commandy = y;
  },
  bezierCurveTo: function bezierCurveTo(c1x, c1y, c2x, c2y, x, y) {
    var path = this._curPath;
    var last = path.points[path.points.length - 1];

    if (last.x === c1x && last.y === c1y && c2x === x && c2y === y) {
      this.lineTo(x, y);
      return;
    }

    Helper.tesselateBezier(this, last.x, last.y, c1x, c1y, c2x, c2y, x, y, 0, PointFlags.PT_CORNER);
    this._commandx = x;
    this._commandy = y;
  },
  quadraticCurveTo: function quadraticCurveTo(cx, cy, x, y) {
    var x0 = this._commandx;
    var y0 = this._commandy;
    this.bezierCurveTo(x0 + 2.0 / 3.0 * (cx - x0), y0 + 2.0 / 3.0 * (cy - y0), x + 2.0 / 3.0 * (cx - x), y + 2.0 / 3.0 * (cy - y), x, y);
  },
  arc: function arc(cx, cy, r, startAngle, endAngle, counterclockwise) {
    Helper.arc(this, cx, cy, r, startAngle, endAngle, counterclockwise);
  },
  ellipse: function ellipse(cx, cy, rx, ry) {
    Helper.ellipse(this, cx, cy, rx, ry);
    this._curPath.complex = false;
  },
  circle: function circle(cx, cy, r) {
    Helper.ellipse(this, cx, cy, r, r);
    this._curPath.complex = false;
  },
  rect: function rect(x, y, w, h) {
    this.moveTo(x, y);
    this.lineTo(x, y + h);
    this.lineTo(x + w, y + h);
    this.lineTo(x + w, y);
    this.close();
    this._curPath.complex = false;
  },
  roundRect: function roundRect(x, y, w, h, r) {
    Helper.roundRect(this, x, y, w, h, r);
    this._curPath.complex = false;
  },
  clear: function clear(comp, clean) {
    this._pathLength = 0;
    this._pathOffset = 0;
    this._pointsOffset = 0;
    this._dataOffset = 0;
    this._curPath = null;
    var datas = this._renderDatas;
    this._paths.length = 0;
    this._points.length = 0;
    datas.length = 0;

    comp._renderHandle.clear();
  },
  close: function close() {
    this._curPath.closed = true;
  },
  _addPath: function _addPath() {
    var offset = this._pathLength;
    var path = this._paths[offset];

    if (!path) {
      path = new Path();

      this._paths.push(path);
    } else {
      path.reset();
    }

    this._pathLength++;
    this._curPath = path;
    return path;
  },
  _addPoint: function _addPoint(x, y, flags) {
    var path = this._curPath;
    if (!path) return;
    var pt;
    var points = this._points;
    var pathPoints = path.points;
    var offset = this._pointsOffset++;
    pt = points[offset];

    if (!pt) {
      pt = new Point(x, y);
      points.push(pt);
    } else {
      pt.x = x;
      pt.y = y;
    }

    pt.flags = flags;
    pathPoints.push(pt);
  },
  requestRenderData: function requestRenderData(graphics, cverts) {
    var renderHandle = graphics._renderHandle;
    var vCount = cverts && cverts > 0 ? cverts : 256;
    var byteLength = vCount * graphics._vertexFormat._bytes;
    var iCount = vCount * 3;
    var vertices = new Float32Array(byteLength);
    var indices = new Uint16Array(iCount);
    var renderData = new RenderData();
    renderData.index = this._dataOffset;
    renderData.vertexStart = 0;
    renderData.vertexOffset = vCount;
    renderData.indiceStart = 0;
    renderData.indiceOffset = iCount;
    renderData.byteOffset = byteLength;

    this._renderDatas.push(renderData);

    renderHandle.updateMesh(this._dataOffset, vertices, indices);
    return renderData;
  },
  getRenderDatas: function getRenderDatas(graphics, cverts) {
    if (this._renderDatas.length === 0) {
      this.requestRenderData(graphics, cverts);
    }

    return this._renderDatas;
  },
  reallocVData: function reallocVData(graphics, index, vcount) {
    var renderData = this._renderDatas[index];
    var renderHandler = graphics._renderHandle;
    var vData = renderHandler.vDatas[index];
    var oldVData;

    if (vData) {
      oldVData = new Uint8Array(vData.buffer);
    }

    renderData.vertexOffset += vcount;
    renderData.byteOffset += vcount * graphics._vertexFormat._bytes;
    var vertices = new Float32Array(renderData.byteOffset);
    var newData = new Uint8Array(vertices.buffer);

    if (oldVData) {
      for (var i = 0, l = oldVData.length; i < l; i++) {
        newData[i] = oldVData[i];
      }
    }

    return vertices;
  },
  reallocIData: function reallocIData(graphics, index, icount) {
    var iBytes = icount;
    var renderHandler = graphics._renderHandle;
    var oldIData = renderHandler.iDatas[index];
    var renderData = this._renderDatas[index];
    renderData.indiceOffset += iBytes;
    var indices = new Uint16Array(renderData.indiceOffset);

    if (oldIData) {
      for (var i = 0, l = oldIData.length; i < l; i++) {
        indices[i] = oldIData[i];
      }
    }

    return indices;
  }
});

},{}],4:[function(require,module,exports){
"use strict";
/****************************************************************************
 LICENSING AGREEMENT
 
 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/

var PointFlags = cc.Graphics.Types.PointFlags;
var LineJoin = cc.Graphics.LineJoin;
var LineCap = cc.Graphics.LineCap;
var Earcut = cc.Graphics.earcut;
var Impl = cc.Graphics.Impl;
var MAX_VERTEX = 65535;
var MAX_INDICE = MAX_VERTEX * 2;
var PI = Math.PI;
var min = Math.min;
var max = Math.max;
var ceil = Math.ceil;
var acos = Math.acos;
var cos = Math.cos;
var sin = Math.sin;
var atan2 = Math.atan2;
var abs = Math.abs;
var _renderData = null;
var _index = 0;
var _renderHandle = null;
var _impl = null;
var _curColor = 0;

function curveDivs(r, arc, tol) {
  var da = acos(r / (r + tol)) * 2.0;
  return max(2, ceil(arc / da));
}

function clamp(v, min, max) {
  if (v < min) {
    return min;
  } else if (v > max) {
    return max;
  }

  return v;
}

cc.Graphics._assembler = {
  useModel: true,
  createImpl: function createImpl(graphics) {
    return new Impl(graphics);
  },
  updateRenderData: function updateRenderData(graphics) {
    var datas = graphics._impl.getRenderDatas(graphics);

    graphics._activateMaterial();

    for (var i = 0, l = datas.length; i < l; i++) {
      graphics._renderHandle.updateMaterial(i, graphics.getMaterial());
    }
  },
  genRenderData: function genRenderData(graphics, cverts) {
    var renderHandle = graphics._renderHandle;
    _impl = graphics._impl;

    var renderDatas = _impl.getRenderDatas(graphics, cverts);

    var renderData = renderDatas[_impl._dataOffset];
    var maxVertsCount = renderData.vertexStart + cverts;

    if (maxVertsCount > MAX_VERTEX || maxVertsCount * 3 > MAX_INDICE) {
      ++_impl._dataOffset;
      maxVertsCount = cverts;

      if (_impl._dataOffset < renderDatas.length) {
        renderData = renderDatas[_impl._dataOffset];
      } else {
        renderData = _impl.requestRenderData(graphics, cverts);
        renderDatas[_impl._dataOffset] = renderData;
      }
    }

    if (maxVertsCount > renderData.vertexOffset) {
      var vertices = _impl.reallocVData(graphics, _impl._dataOffset, cverts);

      var indices = _impl.reallocIData(graphics, _impl._dataOffset, cverts * 3);

      renderHandle.updateMesh(_impl._dataOffset, vertices, indices);
    }

    return renderData;
  },
  stroke: function stroke(graphics) {
    _curColor = graphics._strokeColor._val;
    _renderHandle = graphics._renderHandle;

    this._flattenPaths(graphics._impl);

    this._expandStroke(graphics);

    _renderHandle = null;
    graphics._impl._updatePathOffset = true;
  },
  fill: function fill(graphics) {
    _curColor = graphics._fillColor._val;
    _renderHandle = graphics._renderHandle;

    this._expandFill(graphics);

    _renderHandle = null;
    graphics._impl._updatePathOffset = true;
  },
  _expandStroke: function _expandStroke(graphics) {
    var w = graphics.lineWidth * 0.5,
        lineCap = graphics.lineCap,
        lineJoin = graphics.lineJoin,
        miterLimit = graphics.miterLimit;
    _impl = graphics._impl;
    var ncap = curveDivs(w, PI, _impl._tessTol);

    this._calculateJoins(_impl, w, lineJoin, miterLimit);

    var paths = _impl._paths; // Calculate max vertex usage.

    var cverts = 0;

    for (var i = _impl._pathOffset, l = _impl._pathLength; i < l; i++) {
      var path = paths[i];
      var pointsLength = path.points.length;
      if (lineJoin === LineJoin.ROUND) cverts += (pointsLength + path.nbevel * (ncap + 2) + 1) * 2; // plus one for loop
      else cverts += (pointsLength + path.nbevel * 5 + 1) * 2; // plus one for loop

      if (!path.closed) {
        // space for caps
        if (lineCap === LineCap.ROUND) {
          cverts += (ncap * 2 + 2) * 2;
        } else {
          cverts += (3 + 3) * 2;
        }
      }
    }

    var renderData = _renderData = this.genRenderData(graphics, cverts),
        renderHandle = graphics._renderHandle,
        vData = renderHandle.vDatas[renderData.index],
        iData = renderHandle.iDatas[renderData.index];

    _index = renderData.index;

    for (var _i = _impl._pathOffset, _l = _impl._pathLength; _i < _l; _i++) {
      var _path = paths[_i];
      var pts = _path.points;
      var _pointsLength = pts.length;
      var offset = renderData.vertexStart;
      var p0 = void 0,
          p1 = void 0;
      var start = void 0,
          end = void 0,
          loop = void 0;
      loop = _path.closed;

      if (loop) {
        // Looping
        p0 = pts[_pointsLength - 1];
        p1 = pts[0];
        start = 0;
        end = _pointsLength;
      } else {
        // Add cap
        p0 = pts[0];
        p1 = pts[1];
        start = 1;
        end = _pointsLength - 1;
      }

      if (!loop) {
        // Add cap
        var dPos = p1.sub(p0);
        dPos.normalizeSelf();
        var dx = dPos.x;
        var dy = dPos.y;
        if (lineCap === LineCap.BUTT) this._buttCap(p0, dx, dy, w, 0);else if (lineCap === LineCap.SQUARE) this._buttCap(p0, dx, dy, w, w);else if (lineCap === LineCap.ROUND) this._roundCapStart(p0, dx, dy, w, ncap);
      }

      for (var j = start; j < end; ++j) {
        if (lineJoin === LineJoin.ROUND) {
          this._roundJoin(p0, p1, w, w, ncap);
        } else if ((p1.flags & (PointFlags.PT_BEVEL | PointFlags.PT_INNERBEVEL)) !== 0) {
          this._bevelJoin(p0, p1, w, w);
        } else {
          this._vset(p1.x + p1.dmx * w, p1.y + p1.dmy * w);

          this._vset(p1.x - p1.dmx * w, p1.y - p1.dmy * w);
        }

        p0 = p1;
        p1 = pts[j + 1];
      }

      if (loop) {
        // Loop it
        var vDataoOfset = offset * 3;

        this._vset(vData[vDataoOfset], vData[vDataoOfset + 1]);

        this._vset(vData[vDataoOfset + 3], vData[vDataoOfset + 4]);
      } else {
        // Add cap
        var _dPos = p1.sub(p0);

        _dPos.normalizeSelf();

        var _dx = _dPos.x;
        var _dy = _dPos.y;
        if (lineCap === LineCap.BUTT) this._buttCap(p1, _dx, _dy, w, 0);else if (lineCap === LineCap.BUTT || lineCap === LineCap.SQUARE) this._buttCap(p1, _dx, _dy, w, w);else if (lineCap === LineCap.ROUND) this._roundCapEnd(p1, _dx, _dy, w, ncap);
      } // stroke indices


      var indicesOffset = renderData.indiceStart;

      for (var _start = offset + 2, _end = renderData.vertexStart; _start < _end; _start++) {
        iData[indicesOffset++] = _start - 2;
        iData[indicesOffset++] = _start - 1;
        iData[indicesOffset++] = _start;
      }

      renderData.indiceStart = indicesOffset;
    }

    renderHandle.updateIAData(renderData.index, 0, renderData.indiceStart);
    _renderData = null;
    _impl = null;
  },
  _expandFill: function _expandFill(graphics) {
    _impl = graphics._impl;
    var paths = _impl._paths; // Calculate max vertex usage.

    var cverts = 0;

    for (var i = _impl._pathOffset, l = _impl._pathLength; i < l; i++) {
      var path = paths[i];
      var pointsLength = path.points.length;
      cverts += pointsLength;
    }

    var renderData = _renderData = this.genRenderData(graphics, cverts),
        renderHandle = graphics._renderHandle,
        vData = renderHandle.vDatas[renderData.index],
        iData = renderHandle.iDatas[renderData.index];

    _index = renderData.index;

    for (var _i2 = _impl._pathOffset, _l2 = _impl._pathLength; _i2 < _l2; _i2++) {
      var _path2 = paths[_i2];
      var pts = _path2.points;
      var _pointsLength2 = pts.length;

      if (_pointsLength2 === 0) {
        continue;
      } // Calculate shape vertices.


      var offset = renderData.vertexStart;

      for (var j = 0; j < _pointsLength2; ++j) {
        this._vset(pts[j].x, pts[j].y);
      }

      var indicesOffset = renderData.indiceStart;

      if (_path2.complex) {
        var earcutData = [];

        for (var _j = offset, end = renderData.vertexStart; _j < end; _j++) {
          var vDataOffset = _j * 3;
          earcutData.push(vData[vDataOffset]);
          earcutData.push(vData[vDataOffset + 1]);
        }

        var newIndices = Earcut(earcutData, null, 2);

        if (!newIndices || newIndices.length === 0) {
          continue;
        }

        for (var _j2 = 0, nIndices = newIndices.length; _j2 < nIndices; _j2++) {
          iData[indicesOffset++] = newIndices[_j2] + offset;
        }
      } else {
        var first = offset;

        for (var start = offset + 2, _end2 = renderData.vertexStart; start < _end2; start++) {
          iData[indicesOffset++] = first;
          iData[indicesOffset++] = start - 1;
          iData[indicesOffset++] = start;
        }
      }

      renderData.indiceStart = indicesOffset;
    }

    renderHandle.updateIAData(renderData.index, 0, renderData.indiceStart);
    _renderData = null;
    _impl = null;
  },
  _calculateJoins: function _calculateJoins(impl, w, lineJoin, miterLimit) {
    var iw = 0.0;

    if (w > 0.0) {
      iw = 1 / w;
    } // Calculate which joins needs extra vertices to append, and gather vertex count.


    var paths = impl._paths;

    for (var i = impl._pathOffset, l = impl._pathLength; i < l; i++) {
      var path = paths[i];
      var pts = path.points;
      var ptsLength = pts.length;
      var p0 = pts[ptsLength - 1];
      var p1 = pts[0];
      var nleft = 0;
      path.nbevel = 0;

      for (var j = 0; j < ptsLength; j++) {
        var dmr2 = void 0,
            cross = void 0,
            limit = void 0; // perp normals

        var dlx0 = p0.dy;
        var dly0 = -p0.dx;
        var dlx1 = p1.dy;
        var dly1 = -p1.dx; // Calculate extrusions

        p1.dmx = (dlx0 + dlx1) * 0.5;
        p1.dmy = (dly0 + dly1) * 0.5;
        dmr2 = p1.dmx * p1.dmx + p1.dmy * p1.dmy;

        if (dmr2 > 0.000001) {
          var scale = 1 / dmr2;

          if (scale > 600) {
            scale = 600;
          }

          p1.dmx *= scale;
          p1.dmy *= scale;
        } // Keep track of left turns.


        cross = p1.dx * p0.dy - p0.dx * p1.dy;

        if (cross > 0) {
          nleft++;
          p1.flags |= PointFlags.PT_LEFT;
        } // Calculate if we should use bevel or miter for inner join.


        limit = max(11, min(p0.len, p1.len) * iw);

        if (dmr2 * limit * limit < 1) {
          p1.flags |= PointFlags.PT_INNERBEVEL;
        } // Check to see if the corner needs to be beveled.


        if (p1.flags & PointFlags.PT_CORNER) {
          if (dmr2 * miterLimit * miterLimit < 1 || lineJoin === LineJoin.BEVEL || lineJoin === LineJoin.ROUND) {
            p1.flags |= PointFlags.PT_BEVEL;
          }
        }

        if ((p1.flags & (PointFlags.PT_BEVEL | PointFlags.PT_INNERBEVEL)) !== 0) {
          path.nbevel++;
        }

        p0 = p1;
        p1 = pts[j + 1];
      }
    }
  },
  _flattenPaths: function _flattenPaths(impl) {
    var paths = impl._paths;

    for (var i = impl._pathOffset, l = impl._pathLength; i < l; i++) {
      var path = paths[i];
      var pts = path.points;
      var p0 = pts[pts.length - 1];
      var p1 = pts[0];

      if (p0.equals(p1)) {
        path.closed = true;
        pts.pop();
        p0 = pts[pts.length - 1];
      }

      for (var j = 0, size = pts.length; j < size; j++) {
        // Calculate segment direction and length
        var dPos = p1.sub(p0);
        p0.len = dPos.mag();
        if (dPos.x || dPos.y) dPos.normalizeSelf();
        p0.dx = dPos.x;
        p0.dy = dPos.y; // Advance

        p0 = p1;
        p1 = pts[j + 1];
      }
    }
  },
  _chooseBevel: function _chooseBevel(bevel, p0, p1, w) {
    var x = p1.x;
    var y = p1.y;
    var x0, y0, x1, y1;

    if (bevel !== 0) {
      x0 = x + p0.dy * w;
      y0 = y - p0.dx * w;
      x1 = x + p1.dy * w;
      y1 = y - p1.dx * w;
    } else {
      x0 = x1 = x + p1.dmx * w;
      y0 = y1 = y + p1.dmy * w;
    }

    return [x0, y0, x1, y1];
  },
  _buttCap: function _buttCap(p, dx, dy, w, d) {
    var px = p.x - dx * d;
    var py = p.y - dy * d;
    var dlx = dy;
    var dly = -dx;

    this._vset(px + dlx * w, py + dly * w);

    this._vset(px - dlx * w, py - dly * w);
  },
  _roundCapStart: function _roundCapStart(p, dx, dy, w, ncap) {
    var px = p.x;
    var py = p.y;
    var dlx = dy;
    var dly = -dx;

    for (var i = 0; i < ncap; i++) {
      var a = i / (ncap - 1) * PI;
      var ax = cos(a) * w,
          ay = sin(a) * w;

      this._vset(px - dlx * ax - dx * ay, py - dly * ax - dy * ay);

      this._vset(px, py);
    }

    this._vset(px + dlx * w, py + dly * w);

    this._vset(px - dlx * w, py - dly * w);
  },
  _roundCapEnd: function _roundCapEnd(p, dx, dy, w, ncap) {
    var px = p.x;
    var py = p.y;
    var dlx = dy;
    var dly = -dx;

    this._vset(px + dlx * w, py + dly * w);

    this._vset(px - dlx * w, py - dly * w);

    for (var i = 0; i < ncap; i++) {
      var a = i / (ncap - 1) * PI;
      var ax = cos(a) * w,
          ay = sin(a) * w;

      this._vset(px, py);

      this._vset(px - dlx * ax + dx * ay, py - dly * ax + dy * ay);
    }
  },
  _roundJoin: function _roundJoin(p0, p1, lw, rw, ncap) {
    var dlx0 = p0.dy;
    var dly0 = -p0.dx;
    var dlx1 = p1.dy;
    var dly1 = -p1.dx;
    var p1x = p1.x;
    var p1y = p1.y;

    if ((p1.flags & PointFlags.PT_LEFT) !== 0) {
      var out = this._chooseBevel(p1.flags & PointFlags.PT_INNERBEVEL, p0, p1, lw);

      var lx0 = out[0];
      var ly0 = out[1];
      var lx1 = out[2];
      var ly1 = out[3];
      var a0 = atan2(-dly0, -dlx0);
      var a1 = atan2(-dly1, -dlx1);
      if (a1 > a0) a1 -= PI * 2;

      this._vset(lx0, ly0);

      this._vset(p1x - dlx0 * rw, p1.y - dly0 * rw);

      var n = clamp(ceil((a0 - a1) / PI) * ncap, 2, ncap);

      for (var i = 0; i < n; i++) {
        var u = i / (n - 1);
        var a = a0 + u * (a1 - a0);
        var rx = p1x + cos(a) * rw;
        var ry = p1y + sin(a) * rw;

        this._vset(p1x, p1y);

        this._vset(rx, ry);
      }

      this._vset(lx1, ly1);

      this._vset(p1x - dlx1 * rw, p1y - dly1 * rw);
    } else {
      var _out = this._chooseBevel(p1.flags & PointFlags.PT_INNERBEVEL, p0, p1, -rw);

      var rx0 = _out[0];
      var ry0 = _out[1];
      var rx1 = _out[2];
      var ry1 = _out[3];

      var _a = atan2(dly0, dlx0);

      var _a2 = atan2(dly1, dlx1);

      if (_a2 < _a) _a2 += PI * 2;

      this._vset(p1x + dlx0 * rw, p1y + dly0 * rw);

      this._vset(rx0, ry0);

      var _n = clamp(ceil((_a2 - _a) / PI) * ncap, 2, ncap);

      for (var _i3 = 0; _i3 < _n; _i3++) {
        var _u = _i3 / (_n - 1);

        var _a3 = _a + _u * (_a2 - _a);

        var lx = p1x + cos(_a3) * lw;
        var ly = p1y + sin(_a3) * lw;

        this._vset(lx, ly);

        this._vset(p1x, p1y);
      }

      this._vset(p1x + dlx1 * rw, p1y + dly1 * rw);

      this._vset(rx1, ry1);
    }
  },
  _bevelJoin: function _bevelJoin(p0, p1, lw, rw) {
    var rx0, ry0, rx1, ry1;
    var lx0, ly0, lx1, ly1;
    var dlx0 = p0.dy;
    var dly0 = -p0.dx;
    var dlx1 = p1.dy;
    var dly1 = -p1.dx;

    if (p1.flags & PointFlags.PT_LEFT) {
      var out = this._chooseBevel(p1.flags & PointFlags.PT_INNERBEVEL, p0, p1, lw);

      lx0 = out[0];
      ly0 = out[1];
      lx1 = out[2];
      ly1 = out[3];

      this._vset(lx0, ly0);

      this._vset(p1.x - dlx0 * rw, p1.y - dly0 * rw);

      this._vset(lx1, ly1);

      this._vset(p1.x - dlx1 * rw, p1.y - dly1 * rw);
    } else {
      var _out2 = this._chooseBevel(p1.flags & PointFlags.PT_INNERBEVEL, p0, p1, -rw);

      rx0 = _out2[0];
      ry0 = _out2[1];
      rx1 = _out2[2];
      ry1 = _out2[3];

      this._vset(p1.x + dlx0 * lw, p1.y + dly0 * lw);

      this._vset(rx0, ry0);

      this._vset(p1.x + dlx1 * lw, p1.y + dly1 * lw);

      this._vset(rx1, ry1);
    }
  },
  _vset: function _vset(x, y) {
    var dataOffset = _renderData.vertexStart * 3;
    var vData = _renderHandle.vDatas[_index];
    var uintVData = _renderHandle.uintVDatas[_index];
    vData[dataOffset] = x;
    vData[dataOffset + 1] = y;
    uintVData[dataOffset + 2] = _curColor;
    _renderData.vertexStart++;
  },
  updateColor: function updateColor() {}
};

},{}],5:[function(require,module,exports){
"use strict";
/****************************************************************************
 LICENSING AGREEMENT
 
 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/

var _dataOffset = 0;
cc.Label._assembler.bmfont = cc.js.addon({
  delayUpdateRenderData: true,
  createData: function createData(comp) {
    return comp._renderHandle;
  },
  _reserveQuads: function _reserveQuads(comp, count) {
    var renderHandle = comp._renderHandle;
    var vBytes = count * 4 * 5 * 4;
    var iBytes = count * 6 * 2;
    var bytes = vBytes + iBytes;
    var needUpdateArray = false;

    if (!renderHandle.flexBuffer) {
      renderHandle.flexBuffer = new cc.FlexBuffer(bytes);
      needUpdateArray = true;
    } else {
      needUpdateArray = renderHandle.flexBuffer.reserve(bytes);
    }

    var buffer = renderHandle.flexBuffer.buffer;
    var vData = renderHandle.vDatas[0];

    if (needUpdateArray || !vData || vData.length != count) {
      var vertices = new Float32Array(buffer, 0, vBytes / 4);
      var indices = new Uint16Array(buffer, vBytes, iBytes / 2);

      for (var i = 0, vid = 0; i < indices.length; i += 6, vid += 4) {
        indices[i] = vid;
        indices[i + 1] = vid + 1;
        indices[i + 2] = vid + 2;
        indices[i + 3] = vid + 1;
        indices[i + 4] = vid + 3;
        indices[i + 5] = vid + 2;
      }

      renderHandle.updateMesh(0, vertices, indices);
    }

    renderHandle.updateMaterial(0, comp.getMaterial());
    _dataOffset = 0;
  },
  _quadsUpdated: function _quadsUpdated(comp) {
    _dataOffset = 0;
  },
  appendQuad: function appendQuad(comp, texture, rect, rotated, x, y, scale) {
    var renderHandle = comp._renderHandle;
    var verts = renderHandle.vDatas[0],
        uintVerts = renderHandle.uintVDatas[0];
    var texw = texture.width,
        texh = texture.height,
        rectWidth = rect.width,
        rectHeight = rect.height,
        color = comp.node._color._val; // Keep alpha channel for cpp to update

    color = (uintVerts[4] & 0xff000000 | (color & 0x00ffffff) >>> 0) >>> 0;
    var l, b, r, t;

    if (!rotated) {
      l = rect.x / texw;
      r = (rect.x + rectWidth) / texw;
      b = (rect.y + rectHeight) / texh;
      t = rect.y / texh;
      verts[_dataOffset + 2] = l;
      verts[_dataOffset + 3] = b;
      verts[_dataOffset + 7] = r;
      verts[_dataOffset + 8] = b;
      verts[_dataOffset + 12] = l;
      verts[_dataOffset + 13] = t;
      verts[_dataOffset + 17] = r;
      verts[_dataOffset + 18] = t;
    } else {
      l = rect.x / texw;
      r = (rect.x + rectHeight) / texw;
      b = (rect.y + rectWidth) / texh;
      t = rect.y / texh;
      verts[_dataOffset + 2] = l;
      verts[_dataOffset + 3] = t;
      verts[_dataOffset + 7] = l;
      verts[_dataOffset + 8] = b;
      verts[_dataOffset + 12] = r;
      verts[_dataOffset + 13] = t;
      verts[_dataOffset + 17] = r;
      verts[_dataOffset + 18] = b;
    }

    verts[_dataOffset] = x;
    verts[_dataOffset + 1] = y - rectHeight * scale;
    verts[_dataOffset + 5] = x + rectWidth * scale;
    verts[_dataOffset + 6] = y - rectHeight * scale;
    verts[_dataOffset + 10] = x;
    verts[_dataOffset + 11] = y;
    verts[_dataOffset + 15] = x + rectWidth * scale;
    verts[_dataOffset + 16] = y;
    uintVerts[_dataOffset + 4] = color;
    uintVerts[_dataOffset + 9] = color;
    uintVerts[_dataOffset + 14] = color;
    uintVerts[_dataOffset + 19] = color;
    _dataOffset += 20;
  },
  updateColor: function updateColor(label, color) {
    var uintVerts = label._renderHandle.uintVDatas[0];

    if (uintVerts) {
      // Keep alpha channel for cpp to update
      color = ((uintVerts[4] & 0xff000000) >>> 0 | color & 0x00ffffff) >>> 0;
      var length = uintVerts.length;

      for (var offset = 4; offset < length; offset += 5) {
        uintVerts[offset] = color;
      }
    }
  }
}, cc.textUtils.bmfont);

},{}],6:[function(require,module,exports){
"use strict";
/****************************************************************************
 LICENSING AGREEMENT
 
 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/

cc.Label._assembler = {
  getAssembler: function getAssembler(comp) {
    if (comp.font instanceof cc.BitmapFont) {
      return cc.Label._assembler.bmfont;
    } else {
      return cc.Label._assembler.ttf;
    }
  },
  // Skip invalid labels (without own _assembler)
  updateRenderData: function updateRenderData(label) {
    return label.__allocedDatas;
  },
  updateColor: function updateColor() {}
};

},{}],7:[function(require,module,exports){
"use strict";
/****************************************************************************
 LICENSING AGREEMENT
 
 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/

var WHITE = cc.color(255, 255, 255, 255);
cc.Label._assembler.ttf = cc.js.addon({
  delayUpdateRenderData: true,
  createData: function createData(comp) {
    var renderHandle = comp._renderHandle;

    if (renderHandle.meshCount === 0) {
      var vertices = new Float32Array(20);
      vertices[2] = 0;
      vertices[3] = 1;
      vertices[7] = 1;
      vertices[8] = 1;
      vertices[12] = 0;
      vertices[13] = 0;
      vertices[17] = 1;
      vertices[18] = 0;
      var indices = new Uint16Array(6);
      indices[0] = 0;
      indices[1] = 1;
      indices[2] = 2;
      indices[3] = 1;
      indices[4] = 3;
      indices[5] = 2;
      renderHandle.updateMesh(0, vertices, indices);
      var uintVerts = renderHandle.uintVDatas[0];
      uintVerts[4] = uintVerts[9] = uintVerts[14] = uintVerts[19] = WHITE._val;
    }

    return renderHandle;
  },
  updateColor: function updateColor(label, color) {},
  _updateVerts: function _updateVerts(comp) {
    var renderHandle = comp._renderHandle;
    renderHandle.updateMaterial(0, comp.getMaterial());
    var node = comp.node,
        width = node.width,
        height = node.height,
        appx = node.anchorX * width,
        appy = node.anchorY * height;
    var verts = renderHandle.vDatas[0];
    verts[0] = -appx;
    verts[1] = -appy;
    verts[5] = width - appx;
    verts[6] = -appy;
    verts[10] = -appx;
    verts[11] = height - appy;
    verts[15] = width - appx;
    verts[16] = height - appy;
  }
}, cc.textUtils.ttf);

},{}],8:[function(require,module,exports){
"use strict";
/****************************************************************************
 LICENSING AGREEMENT
 
 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/

var Mask = cc.Mask;
var RenderFlow = cc.RenderFlow;
var spriteAssembler = cc.Sprite._assembler.simple;
var graphicsAssembler = cc.Graphics._assembler;
cc.Mask._assembler = {
  updateRenderData: function updateRenderData(mask) {
    if (!mask._renderData) {
      // Update clear graphics material
      graphicsAssembler.updateRenderData(mask._clearGraphics);

      if (mask._type === Mask.Type.IMAGE_STENCIL) {
        mask._renderData = spriteAssembler.createData(mask);
      }
    }

    var renderData = mask._renderData;

    if (mask._type === Mask.Type.IMAGE_STENCIL) {
      if (mask.spriteFrame) {
        if (!mask._material) {
          mask._activateMaterial();
        }

        spriteAssembler.updateRenderData(mask);
        renderData._material = mask._material;
      } else {
        mask._material = null;
      }

      mask._renderHandle.useImageStencil(true);
    } else {
      if (!mask._material) {
        mask._activateMaterial();
      }

      mask._graphics._material = mask._material;
      graphicsAssembler.updateRenderData(mask._graphics);

      mask._renderHandle.useImageStencil(false);
    }

    mask._renderHandle.updateMaterial(0, mask._material);

    mask._renderHandle.setMaskInverted(mask.inverted);

    mask._renderHandle.setUseModel(mask._type !== Mask.Type.IMAGE_STENCIL);

    mask._clearGraphics._renderHandle.setUseModel(false);
  },
  updateColor: function updateColor() {}
};

},{}],9:[function(require,module,exports){
"use strict";
/****************************************************************************
 LICENSING AGREEMENT
 
 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/

var FillType = cc.Sprite.FillType;
cc.Sprite._assembler.barFilled = {
  useModel: false,
  updateRenderData: function updateRenderData(sprite) {
    var frame = sprite.spriteFrame;

    if (frame) {
      if (sprite._material._texture !== frame._texture) {
        sprite._activateMaterial();
      }

      sprite._renderHandle.updateMaterial(0, sprite._material);
    }

    if (frame && sprite._vertsDirty) {
      var fillStart = sprite._fillStart;
      var fillRange = sprite._fillRange;

      if (fillRange < 0) {
        fillStart += fillRange;
        fillRange = -fillRange;
      }

      fillRange = fillStart + fillRange;
      fillStart = fillStart > 1.0 ? 1.0 : fillStart;
      fillStart = fillStart < 0.0 ? 0.0 : fillStart;
      fillRange = fillRange > 1.0 ? 1.0 : fillRange;
      fillRange = fillRange < 0.0 ? 0.0 : fillRange;
      fillRange = fillRange - fillStart;
      fillRange = fillRange < 0 ? 0 : fillRange;
      var fillEnd = fillStart + fillRange;
      fillEnd = fillEnd > 1 ? 1 : fillEnd;
      this.updateUVs(sprite, fillStart, fillEnd);
      this.updateVerts(sprite, fillStart, fillEnd);
      sprite._vertsDirty = false;
    }
  },
  updateUVs: function updateUVs(sprite, fillStart, fillEnd) {
    var spriteFrame = sprite._spriteFrame,
        renderHandle = sprite._renderHandle,
        verts = renderHandle.vDatas[0]; //build uvs

    var atlasWidth = spriteFrame._texture.width;
    var atlasHeight = spriteFrame._texture.height;
    var textureRect = spriteFrame._rect; //uv computation should take spritesheet into account.

    var ul, vb, ur, vt;
    var quadUV0, quadUV1, quadUV2, quadUV3, quadUV4, quadUV5, quadUV6, quadUV7;

    if (spriteFrame._rotated) {
      ul = textureRect.x / atlasWidth;
      vb = (textureRect.y + textureRect.width) / atlasHeight;
      ur = (textureRect.x + textureRect.height) / atlasWidth;
      vt = textureRect.y / atlasHeight;
      quadUV0 = quadUV2 = ul;
      quadUV4 = quadUV6 = ur;
      quadUV3 = quadUV7 = vb;
      quadUV1 = quadUV5 = vt;
    } else {
      ul = textureRect.x / atlasWidth;
      vb = (textureRect.y + textureRect.height) / atlasHeight;
      ur = (textureRect.x + textureRect.width) / atlasWidth;
      vt = textureRect.y / atlasHeight;
      quadUV0 = quadUV4 = ul;
      quadUV2 = quadUV6 = ur;
      quadUV1 = quadUV3 = vb;
      quadUV5 = quadUV7 = vt;
    }

    switch (sprite._fillType) {
      case FillType.HORIZONTAL:
        verts[2] = quadUV0 + (quadUV2 - quadUV0) * fillStart;
        verts[3] = quadUV1 + (quadUV3 - quadUV1) * fillStart;
        verts[7] = quadUV0 + (quadUV2 - quadUV0) * fillEnd;
        verts[8] = quadUV1 + (quadUV3 - quadUV1) * fillEnd;
        verts[12] = quadUV4 + (quadUV6 - quadUV4) * fillStart;
        verts[13] = quadUV5 + (quadUV7 - quadUV5) * fillStart;
        verts[17] = quadUV4 + (quadUV6 - quadUV4) * fillEnd;
        verts[18] = quadUV5 + (quadUV7 - quadUV5) * fillEnd;
        break;

      case FillType.VERTICAL:
        verts[2] = quadUV0 + (quadUV4 - quadUV0) * fillStart;
        verts[3] = quadUV1 + (quadUV5 - quadUV1) * fillStart;
        verts[7] = quadUV2 + (quadUV6 - quadUV2) * fillStart;
        verts[8] = quadUV3 + (quadUV7 - quadUV3) * fillStart;
        verts[12] = quadUV0 + (quadUV4 - quadUV0) * fillEnd;
        verts[13] = quadUV1 + (quadUV5 - quadUV1) * fillEnd;
        verts[17] = quadUV2 + (quadUV6 - quadUV2) * fillEnd;
        verts[18] = quadUV3 + (quadUV7 - quadUV3) * fillEnd;
        break;

      default:
        cc.errorID(2626);
        break;
    }
  },
  updateVerts: function updateVerts(sprite, fillStart, fillEnd) {
    var renderHandle = sprite._renderHandle,
        verts = renderHandle.vDatas[0],
        uintVerts = renderHandle.uintVDatas[0],
        node = sprite.node,
        color = node._color._val,
        width = node.width,
        height = node.height,
        appx = node.anchorX * width,
        appy = node.anchorY * height;
    var l = -appx,
        b = -appy,
        r = width - appx,
        t = height - appy;
    var progressStart, progressEnd;

    switch (sprite._fillType) {
      case FillType.HORIZONTAL:
        progressStart = l + (r - l) * fillStart;
        progressEnd = l + (r - l) * fillEnd;
        l = progressStart;
        r = progressEnd;
        break;

      case FillType.VERTICAL:
        progressStart = b + (t - b) * fillStart;
        progressEnd = b + (t - b) * fillEnd;
        b = progressStart;
        t = progressEnd;
        break;

      default:
        cc.errorID(2626);
        break;
    }

    verts[0] = l;
    verts[1] = b;
    verts[5] = r;
    verts[6] = b;
    verts[10] = l;
    verts[11] = t;
    verts[15] = r;
    verts[16] = t;
    uintVerts[4] = color;
    uintVerts[9] = color;
    uintVerts[14] = color;
    uintVerts[19] = color;
  },
  createData: function createData(sprite) {
    var renderHandle = sprite._renderHandle;

    if (renderHandle.meshCount === 0) {
      var vertices = new Float32Array(20);
      var indices = new Uint16Array(6);
      indices[0] = 0;
      indices[1] = 1;
      indices[2] = 2;
      indices[3] = 1;
      indices[4] = 3;
      indices[5] = 2;
      renderHandle.updateMesh(0, vertices, indices);
    } // No render data needed for native


    return renderHandle;
  },
  updateColor: function updateColor(sprite, color) {
    var uintVerts = sprite._renderHandle.uintVDatas[0];

    if (uintVerts) {
      color = ((uintVerts[4] & 0xff000000) >>> 0 | color & 0x00ffffff) >>> 0;
      var length = uintVerts.length;

      for (var offset = 4; offset < length; offset += 5) {
        uintVerts[offset] = color;
      }
    }
  }
};

},{}],10:[function(require,module,exports){
"use strict";
/****************************************************************************
 LICENSING AGREEMENT
 
 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/

cc.Sprite._assembler = {
  getAssembler: function getAssembler(sprite) {
    var util = this.simple;

    switch (sprite.type) {
      case cc.Sprite.Type.SLICED:
        util = this.sliced;
        break;

      case cc.Sprite.Type.TILED:
        util = this.tiled;
        break;

      case cc.Sprite.Type.FILLED:
        if (sprite._fillType === cc.Sprite.FillType.RADIAL) {
          util = this.radialFilled;
        } else {
          util = this.barFilled;
        }

        break;

      case cc.Sprite.Type.MESH:
        util = this.mesh;
        break;
    }

    return util;
  },
  // Skip invalid sprites (without own _assembler)
  updateRenderData: function updateRenderData(sprite) {
    return sprite.__allocedDatas;
  },
  updateColor: function updateColor() {}
};

},{}],11:[function(require,module,exports){
"use strict";
/****************************************************************************
 LICENSING AGREEMENT
 
 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/

var PI_2 = Math.PI * 2;
var _vertPos = [cc.v2(0, 0), cc.v2(0, 0), cc.v2(0, 0), cc.v2(0, 0)];
var _vertices = [0, 0, 0, 0];
var _uvs = [0, 0, 0, 0, 0, 0, 0, 0];
var _intersectPoint_1 = [cc.v2(0, 0), cc.v2(0, 0), cc.v2(0, 0), cc.v2(0, 0)];
var _intersectPoint_2 = [cc.v2(0, 0), cc.v2(0, 0), cc.v2(0, 0), cc.v2(0, 0)];

var _center = cc.v2(0, 0);

var _triangles = [];
var _verts = [];

function _calcInsectedPoints(left, right, bottom, top, center, angle, intersectPoints) {
  //left bottom, right, top
  var sinAngle = Math.sin(angle);
  var cosAngle = Math.cos(angle);
  var tanAngle, cotAngle;

  if (Math.cos(angle) !== 0) {
    tanAngle = sinAngle / cosAngle; //calculate right and left

    if ((left - center.x) * cosAngle > 0) {
      var yleft = center.y + tanAngle * (left - center.x);
      intersectPoints[0].x = left;
      intersectPoints[0].y = yleft;
    }

    if ((right - center.x) * cosAngle > 0) {
      var yright = center.y + tanAngle * (right - center.x);
      intersectPoints[2].x = right;
      intersectPoints[2].y = yright;
    }
  }

  if (Math.sin(angle) !== 0) {
    cotAngle = cosAngle / sinAngle; //calculate  top and bottom

    if ((top - center.y) * sinAngle > 0) {
      var xtop = center.x + cotAngle * (top - center.y);
      intersectPoints[3].x = xtop;
      intersectPoints[3].y = top;
    }

    if ((bottom - center.y) * sinAngle > 0) {
      var xbottom = center.x + cotAngle * (bottom - center.y);
      intersectPoints[1].x = xbottom;
      intersectPoints[1].y = bottom;
    }
  }
}

function _calculateVertices(sprite) {
  var node = sprite.node,
      width = node.width,
      height = node.height,
      appx = node.anchorX * width,
      appy = node.anchorY * height;
  var l = -appx,
      b = -appy,
      r = width - appx,
      t = height - appy;
  var vertices = _vertices;
  vertices[0] = l;
  vertices[1] = b;
  vertices[2] = r;
  vertices[3] = t;
  var fillCenter = sprite._fillCenter,
      cx = _center.x = Math.min(Math.max(0, fillCenter.x), 1) * (r - l) + l,
      cy = _center.y = Math.min(Math.max(0, fillCenter.y), 1) * (t - b) + b;
  _vertPos[0].x = _vertPos[3].x = l;
  _vertPos[1].x = _vertPos[2].x = r;
  _vertPos[0].y = _vertPos[1].y = b;
  _vertPos[2].y = _vertPos[3].y = t;
  _triangles.length = 0;

  if (cx !== vertices[0]) {
    _triangles[0] = [3, 0];
  }

  if (cx !== vertices[2]) {
    _triangles[2] = [1, 2];
  }

  if (cy !== vertices[1]) {
    _triangles[1] = [0, 1];
  }

  if (cy !== vertices[3]) {
    _triangles[3] = [2, 3];
  }
}

function _calculateUVs(spriteFrame) {
  var atlasWidth = spriteFrame._texture.width;
  var atlasHeight = spriteFrame._texture.height;
  var textureRect = spriteFrame._rect;
  var u0, u1, v0, v1;
  var uvs = _uvs;

  if (spriteFrame._rotated) {
    u0 = textureRect.x / atlasWidth;
    u1 = (textureRect.x + textureRect.height) / atlasWidth;
    v0 = textureRect.y / atlasHeight;
    v1 = (textureRect.y + textureRect.width) / atlasHeight;
    uvs[0] = uvs[2] = u0;
    uvs[4] = uvs[6] = u1;
    uvs[3] = uvs[7] = v1;
    uvs[1] = uvs[5] = v0;
  } else {
    u0 = textureRect.x / atlasWidth;
    u1 = (textureRect.x + textureRect.width) / atlasWidth;
    v0 = textureRect.y / atlasHeight;
    v1 = (textureRect.y + textureRect.height) / atlasHeight;
    uvs[0] = uvs[4] = u0;
    uvs[2] = uvs[6] = u1;
    uvs[1] = uvs[3] = v1;
    uvs[5] = uvs[7] = v0;
  }
}

function _getVertAngle(start, end) {
  var placementX, placementY;
  placementX = end.x - start.x;
  placementY = end.y - start.y;

  if (placementX === 0 && placementY === 0) {
    return undefined;
  } else if (placementX === 0) {
    if (placementY > 0) {
      return Math.PI * 0.5;
    } else {
      return Math.PI * 1.5;
    }
  } else {
    var angle = Math.atan(placementY / placementX);

    if (placementX < 0) {
      angle += Math.PI;
    }

    return angle;
  }
}

function _generateTriangle(verts, offset, vert0, vert1, vert2) {
  var vertices = _vertices;
  var v0x = vertices[0];
  var v0y = vertices[1];
  var v1x = vertices[2];
  var v1y = vertices[3];
  verts[offset] = vert0.x;
  verts[offset + 1] = vert0.y;
  verts[offset + 5] = vert1.x;
  verts[offset + 6] = vert1.y;
  verts[offset + 10] = vert2.x;
  verts[offset + 11] = vert2.y;
  var progressX, progressY;
  progressX = (vert0.x - v0x) / (v1x - v0x);
  progressY = (vert0.y - v0y) / (v1y - v0y);

  _generateUV(progressX, progressY, verts, offset + 2);

  progressX = (vert1.x - v0x) / (v1x - v0x);
  progressY = (vert1.y - v0y) / (v1y - v0y);

  _generateUV(progressX, progressY, verts, offset + 7);

  progressX = (vert2.x - v0x) / (v1x - v0x);
  progressY = (vert2.y - v0y) / (v1y - v0y);

  _generateUV(progressX, progressY, verts, offset + 12);
}

function _generateUV(progressX, progressY, verts, offset) {
  var uvs = _uvs;
  var px1 = uvs[0] + (uvs[2] - uvs[0]) * progressX;
  var px2 = uvs[4] + (uvs[6] - uvs[4]) * progressX;
  var py1 = uvs[1] + (uvs[3] - uvs[1]) * progressX;
  var py2 = uvs[5] + (uvs[7] - uvs[5]) * progressX;
  verts[offset] = px1 + (px2 - px1) * progressY;
  verts[offset + 1] = py1 + (py2 - py1) * progressY;
}

cc.Sprite._assembler.radialFilled = {
  useModel: false,
  createData: function createData(sprite) {
    return sprite._renderHandle;
  },
  updateRenderData: function updateRenderData(sprite) {
    var frame = sprite.spriteFrame;
    var renderHandle = sprite._renderHandle;

    if (frame) {
      if (sprite._material._texture !== frame._texture) {
        sprite._activateMaterial();
      }

      renderHandle.updateMaterial(0, sprite._material);
    }

    if (frame && sprite._vertsDirty) {
      var fillStart = sprite._fillStart;
      var fillRange = sprite._fillRange;

      if (fillRange < 0) {
        fillStart += fillRange;
        fillRange = -fillRange;
      } //do round fill start [0,1), include 0, exclude 1


      while (fillStart >= 1.0) {
        fillStart -= 1.0;
      }

      while (fillStart < 0.0) {
        fillStart += 1.0;
      }

      fillStart *= PI_2;
      fillRange *= PI_2; //build vertices

      _calculateVertices(sprite); //build uvs


      _calculateUVs(frame);

      _calcInsectedPoints(_vertices[0], _vertices[2], _vertices[1], _vertices[3], _center, fillStart, _intersectPoint_1);

      _calcInsectedPoints(_vertices[0], _vertices[2], _vertices[1], _vertices[3], _center, fillStart + fillRange, _intersectPoint_2);

      this.updateVerts(fillStart, fillRange);
      this.fillVerts(sprite);
      sprite._vertsDirty = false;
    }

    _verts.length = 0;
  },
  updateVerts: function updateVerts(fillStart, fillRange) {
    var fillEnd = fillStart + fillRange;
    var offset = 0;
    var bytePerVertex = 3 * 5;

    for (var triangleIndex = 0; triangleIndex < 4; ++triangleIndex) {
      var triangle = _triangles[triangleIndex];

      if (!triangle) {
        continue;
      } //all in


      if (fillRange >= PI_2) {
        _verts.length = offset + bytePerVertex;

        _generateTriangle(_verts, offset, _center, _vertPos[triangle[0]], _vertPos[triangle[1]]);

        offset += bytePerVertex;
        continue;
      } //test against


      var startAngle = _getVertAngle(_center, _vertPos[triangle[0]]);

      var endAngle = _getVertAngle(_center, _vertPos[triangle[1]]);

      if (endAngle < startAngle) endAngle += PI_2;
      startAngle -= PI_2;
      endAngle -= PI_2; //testing

      for (var testIndex = 0; testIndex < 3; ++testIndex) {
        if (startAngle >= fillEnd) {//all out
        } else if (startAngle >= fillStart) {
          _verts.length = offset + bytePerVertex;

          if (endAngle >= fillEnd) {
            //startAngle to fillEnd
            _generateTriangle(_verts, offset, _center, _vertPos[triangle[0]], _intersectPoint_2[triangleIndex]);
          } else {
            //startAngle to endAngle
            _generateTriangle(_verts, offset, _center, _vertPos[triangle[0]], _vertPos[triangle[1]]);
          }

          offset += bytePerVertex;
        } else {
          //startAngle < fillStart
          if (endAngle <= fillStart) {//all out
          } else if (endAngle <= fillEnd) {
            _verts.length = offset + bytePerVertex; //fillStart to endAngle

            _generateTriangle(_verts, offset, _center, _intersectPoint_1[triangleIndex], _vertPos[triangle[1]]);

            offset += bytePerVertex;
          } else {
            _verts.length = offset + bytePerVertex; //fillStart to fillEnd

            _generateTriangle(_verts, offset, _center, _intersectPoint_1[triangleIndex], _intersectPoint_2[triangleIndex]);

            offset += bytePerVertex;
          }
        } //add 2 * PI


        startAngle += PI_2;
        endAngle += PI_2;
      }
    }
  },
  fillVerts: function fillVerts(sprite) {
    var color = sprite.node._color._val;
    var renderHandle = sprite._renderHandle;
    var count = _verts.length / 5; // update data property

    var vBytes = count * 5 * 4;
    var iBytes = count * 2;
    var needUpdateArray = false;

    if (!renderHandle.flexBuffer) {
      var bytes = 24 * (20 + 2);
      renderHandle.flexBuffer = new cc.FlexBuffer(bytes);
      needUpdateArray = true;
    }

    var buffer = renderHandle.flexBuffer.buffer;
    var vData = renderHandle.vDatas[0];

    if (needUpdateArray || !vData || vData.length != count) {
      var vertices = new Float32Array(buffer, 0, vBytes / 4);
      var indices = new Uint16Array(buffer, vBytes, iBytes / 2);

      for (var i = 0; i < count; i++) {
        indices[i] = i;
      }

      renderHandle.updateMesh(0, vertices, indices);
    }

    var verts = renderHandle.vDatas[0],
        uintVerts = renderHandle.uintVDatas[0];
    var vertexOffset = 0;

    for (var _i = 0; _i < count; _i++) {
      verts[vertexOffset] = _verts[vertexOffset];
      verts[vertexOffset + 1] = _verts[vertexOffset + 1];
      verts[vertexOffset + 2] = _verts[vertexOffset + 2];
      verts[vertexOffset + 3] = _verts[vertexOffset + 3];
      uintVerts[vertexOffset + 4] = color;
      vertexOffset += 5;
    }
  },
  updateColor: function updateColor(sprite, color) {
    var uintVerts = sprite._renderHandle.uintVDatas[0];

    if (uintVerts) {
      color = ((uintVerts[4] & 0xff000000) >>> 0 | color & 0x00ffffff) >>> 0;
      var length = uintVerts.length;

      for (var offset = 4; offset < length; offset += 5) {
        uintVerts[offset] = color;
      }
    }
  }
};

},{}],12:[function(require,module,exports){
"use strict";
/****************************************************************************
 LICENSING AGREEMENT
 
 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/

cc.Sprite._assembler.simple = {
  useModel: false,
  createData: function createData(sprite) {
    var renderHandle = sprite._renderHandle;

    if (renderHandle.meshCount === 0) {
      var vertices = new Float32Array(20);
      var indices = new Uint16Array(6);
      indices[0] = 0;
      indices[1] = 1;
      indices[2] = 2;
      indices[3] = 1;
      indices[4] = 3;
      indices[5] = 2;
      renderHandle.updateMesh(0, vertices, indices);
    } // No render data needed for native


    return renderHandle;
  },
  updateRenderData: function updateRenderData(sprite) {
    var frame = sprite._spriteFrame; // TODO: Material API design and export from editor could affect the material activation process
    // need to update the logic here

    if (frame) {
      if (sprite._material._texture !== frame._texture) {
        sprite._activateMaterial();
      }

      sprite._renderHandle.updateMaterial(0, sprite._material);
    }

    if (frame && sprite._vertsDirty) {
      this.updateVerts(sprite);
      sprite._vertsDirty = false;
    }
  },
  updateColor: function updateColor(sprite, color) {
    var uintVerts = sprite._renderHandle.uintVDatas[0];

    if (uintVerts) {
      // Keep alpha channel for cpp to update
      color = ((uintVerts[4] & 0xff000000) >>> 0 | color & 0x00ffffff) >>> 0;
      uintVerts[4] = color;
      uintVerts[9] = color;
      uintVerts[14] = color;
      uintVerts[19] = color;
    }
  },
  updateVerts: function updateVerts(sprite) {
    var renderHandle = sprite._renderHandle,
        node = sprite.node,
        frame = sprite.spriteFrame,
        color = node._color._val,
        verts = renderHandle.vDatas[0],
        uintVerts = renderHandle.uintVDatas[0],
        cw = node.width,
        ch = node.height,
        appx = node.anchorX * cw,
        appy = node.anchorY * ch,
        l,
        b,
        r,
        t;

    if (sprite.trim) {
      l = -appx;
      b = -appy;
      r = cw - appx;
      t = ch - appy;
    } else {
      var ow = frame._originalSize.width,
          oh = frame._originalSize.height,
          rw = frame._rect.width,
          rh = frame._rect.height,
          offset = frame._offset,
          scaleX = cw / ow,
          scaleY = ch / oh;
      var trimLeft = offset.x + (ow - rw) / 2;
      var trimRight = offset.x - (ow - rw) / 2;
      var trimBottom = offset.y + (oh - rh) / 2;
      var trimTop = offset.y - (oh - rh) / 2;
      l = trimLeft * scaleX - appx;
      b = trimBottom * scaleY - appy;
      r = cw + trimRight * scaleX - appx;
      t = ch + trimTop * scaleY - appy;
    } // Keep alpha channel for cpp to update


    color = (uintVerts[4] & 0xff000000 | (color & 0x00ffffff) >>> 0) >>> 0; // get uv from sprite frame directly

    var uv = frame.uv;
    verts[0] = l;
    verts[1] = b;
    verts[2] = uv[0];
    verts[3] = uv[1];
    verts[5] = r;
    verts[6] = b;
    verts[7] = uv[2];
    verts[8] = uv[3];
    verts[10] = l;
    verts[11] = t;
    verts[12] = uv[4];
    verts[13] = uv[5];
    verts[15] = r;
    verts[16] = t;
    verts[17] = uv[6];
    verts[18] = uv[7];
    uintVerts[4] = color;
    uintVerts[9] = color;
    uintVerts[14] = color;
    uintVerts[19] = color;
  }
};

},{}],13:[function(require,module,exports){
"use strict";
/****************************************************************************
 LICENSING AGREEMENT
 
 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/

var temp = [{
  x: 0,
  y: 0
}, {
  x: 0,
  y: 0
}, {
  x: 0,
  y: 0
}, {
  x: 0,
  y: 0
}];
cc.Sprite._assembler.sliced = {
  useModel: false,
  createData: function createData(sprite) {
    var renderHandle = sprite._renderHandle;

    if (renderHandle.meshCount === 0) {
      var vertices = new Float32Array(80);
      var indices = new Uint16Array(54);
      var indexOffset = 0;

      for (var r = 0; r < 3; ++r) {
        for (var c = 0; c < 3; ++c) {
          var start = r * 4 + c;
          indices[indexOffset++] = start;
          indices[indexOffset++] = start + 1;
          indices[indexOffset++] = start + 4;
          indices[indexOffset++] = start + 1;
          indices[indexOffset++] = start + 5;
          indices[indexOffset++] = start + 4;
        }
      }

      renderHandle.updateMesh(0, vertices, indices);
    }

    return renderHandle;
  },
  updateRenderData: function updateRenderData(sprite) {
    var frame = sprite.spriteFrame; // TODO: Material API design and export from editor could affect the material activation process
    // need to update the logic here

    if (frame) {
      if (sprite._material._texture !== frame._texture) {
        sprite._activateMaterial();
      }

      sprite._renderHandle.updateMaterial(0, sprite._material);
    }

    if (frame && sprite._vertsDirty) {
      this.updateVerts(sprite);
      sprite._vertsDirty = false;
    }
  },
  updateColor: function updateColor(sprite, color) {
    var uintVerts = sprite._renderHandle.uintVDatas[0];

    if (uintVerts) {
      color = ((uintVerts[4] & 0xff000000) >>> 0 | color & 0x00ffffff) >>> 0;
      var length = uintVerts.length;

      for (var offset = 4; offset < length; offset += 5) {
        uintVerts[offset] = color;
      }
    }
  },
  updateVerts: function updateVerts(sprite) {
    var renderHandle = sprite._renderHandle,
        verts = renderHandle.vDatas[0],
        uintVerts = renderHandle.uintVDatas[0],
        node = sprite.node,
        color = node._color._val,
        width = node.width,
        height = node.height,
        appx = node.anchorX * width,
        appy = node.anchorY * height;
    var frame = sprite.spriteFrame;
    var leftWidth = frame.insetLeft;
    var rightWidth = frame.insetRight;
    var topHeight = frame.insetTop;
    var bottomHeight = frame.insetBottom;
    var sizableWidth = width - leftWidth - rightWidth;
    var sizableHeight = height - topHeight - bottomHeight;
    var xScale = width / (leftWidth + rightWidth);
    var yScale = height / (topHeight + bottomHeight);
    xScale = isNaN(xScale) || xScale > 1 ? 1 : xScale;
    yScale = isNaN(yScale) || yScale > 1 ? 1 : yScale;
    sizableWidth = sizableWidth < 0 ? 0 : sizableWidth;
    sizableHeight = sizableHeight < 0 ? 0 : sizableHeight;
    temp[0].x = -appx;
    temp[0].y = -appy;
    temp[1].x = leftWidth * xScale - appx;
    temp[1].y = bottomHeight * yScale - appy;
    temp[2].x = temp[1].x + sizableWidth;
    temp[2].y = temp[1].y + sizableHeight;
    temp[3].x = width - appx;
    temp[3].y = height - appy;
    color = (uintVerts[4] & 0xff000000 | (color & 0x00ffffff) >>> 0) >>> 0;
    var uvSliced = sprite.spriteFrame.uvSliced;

    for (var row = 0; row < 4; ++row) {
      var rowD = temp[row];

      for (var col = 0; col < 4; ++col) {
        var vid = row * 4 + col;
        var uv = uvSliced[vid];
        var colD = temp[col];
        var voffset = vid * 5;
        verts[voffset] = colD.x;
        verts[voffset + 1] = rowD.y;
        verts[voffset + 2] = uv.u;
        verts[voffset + 3] = uv.v;
        uintVerts[voffset + 4] = color;
      }
    }
  }
};

},{}],14:[function(require,module,exports){
"use strict";
/****************************************************************************
 LICENSING AGREEMENT
 
 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/

var _lastCount = 0;
cc.Sprite._assembler.tiled = {
  useModel: false,
  vertexOffset: 5,
  uvOffset: 2,
  colorOffset: 4,
  createData: function createData(sprite) {
    return sprite._renderHandle;
  },
  updateRenderData: function updateRenderData(sprite) {
    var frame = sprite._spriteFrame;
    var node = sprite.node,
        renderHandle = sprite._renderHandle,
        contentWidth = Math.abs(node.width),
        contentHeight = Math.abs(node.height);
    var rect = frame._rect,
        rectWidth = rect.width,
        rectHeight = rect.height,
        hRepeat = contentWidth / rectWidth,
        vRepeat = contentHeight / rectHeight,
        row = Math.ceil(vRepeat),
        col = Math.ceil(hRepeat); // update data property

    var count = row * col;
    var vBytes = count * 4 * 5 * 4;
    var iBytes = count * 6 * 2;
    var bytes = vBytes + iBytes;
    var needUpdateArray = false;

    if (!renderHandle.flexBuffer) {
      renderHandle.flexBuffer = new cc.FlexBuffer(bytes);
      needUpdateArray = true;
    } else {
      needUpdateArray = renderHandle.flexBuffer.reserve(bytes);
    }

    var buffer = renderHandle.flexBuffer.buffer;

    if (needUpdateArray || _lastCount != count) {
      _lastCount = count;
      var vertices = new Float32Array(buffer, 0, vBytes / 4);
      var indices = new Uint16Array(buffer, vBytes, iBytes / 2);

      for (var i = 0, vid = 0; i < indices.length; i += 6, vid += 4) {
        indices[i] = vid;
        indices[i + 1] = vid + 1;
        indices[i + 2] = vid + 2;
        indices[i + 3] = vid + 1;
        indices[i + 4] = vid + 3;
        indices[i + 5] = vid + 2;
      }

      renderHandle.updateMesh(0, vertices, indices);
    } // TODO: Material API design and export from editor could affect the material activation process
    // need to update the logic here


    if (frame) {
      if (sprite._material._texture !== frame._texture) {
        sprite._activateMaterial();
      }

      sprite._renderHandle.updateMaterial(0, sprite._material);
    }

    if (frame && sprite._vertsDirty) {
      this.updateVerts(sprite);
      sprite._vertsDirty = false;
    }
  },
  updateVerts: function updateVerts(sprite) {
    var renderHandle = sprite._renderHandle,
        node = sprite.node,
        color = node._color._val,
        verts = renderHandle.vDatas[0],
        uintVerts = renderHandle.uintVDatas[0],
        cw = node.width,
        ch = node.height,
        appx = node.anchorX * cw,
        appy = node.anchorY * ch;
    var frame = sprite.spriteFrame;
    var rotated = frame._rotated;
    var uv = frame.uv;
    var rect = frame._rect;
    var contentWidth = Math.abs(node.width);
    var contentHeight = Math.abs(node.height);
    var rectWidth = rect.width;
    var rectHeight = rect.height;
    var hRepeat = contentWidth / rectWidth;
    var vRepeat = contentHeight / rectHeight;
    var row = Math.ceil(vRepeat),
        col = Math.ceil(hRepeat);
    var offset = this.vertexOffset,
        uvOffset = this.uvOffset,
        colorOffset = this.colorOffset;
    var offset1 = offset,
        offset2 = offset * 2,
        offset3 = offset * 3,
        offset4 = offset * 4;
    var coefu, coefv, x, y, x1, y1;
    var vOffset = 0;

    for (var yindex = 0, ylength = row; yindex < ylength; ++yindex) {
      coefv = Math.min(1, vRepeat - yindex);

      for (var xindex = 0, xlength = col; xindex < xlength; ++xindex) {
        coefu = Math.min(1, hRepeat - xindex);
        x = Math.min(rectWidth * xindex, contentWidth) - appx;
        y = Math.min(rectHeight * yindex, contentHeight) - appy;
        x1 = Math.min(rectWidth * (xindex + 1), contentWidth) - appx;
        y1 = Math.min(rectHeight * (yindex + 1), contentHeight) - appy; // Vertex
        // lb

        verts[vOffset] = x;
        verts[vOffset + 1] = y; // rb

        verts[vOffset + offset] = x1;
        verts[vOffset + offset + 1] = y; // lt

        verts[vOffset + offset2] = x;
        verts[vOffset + offset2 + 1] = y1; // rt

        verts[vOffset + offset3] = x1;
        verts[vOffset + offset3 + 1] = y1;
        var vertexOffsetU = vOffset + uvOffset;
        var vertexOffsetV = vertexOffsetU + 1; // UV

        if (rotated) {
          // lb
          verts[vertexOffsetU] = uv[0];
          verts[vertexOffsetV] = uv[1]; // rb

          verts[vertexOffsetU + offset1] = uv[0];
          verts[vertexOffsetV + offset1] = uv[1] + (uv[7] - uv[1]) * coefu; // lt

          verts[vertexOffsetU + offset2] = uv[0] + (uv[6] - uv[0]) * coefv;
          verts[vertexOffsetV + offset2] = uv[1]; // rt

          verts[vertexOffsetU + offset3] = verts[vertexOffsetU + offset2];
          verts[vertexOffsetV + offset3] = verts[vertexOffsetV + offset1];
        } else {
          // lb
          verts[vertexOffsetU] = uv[0];
          verts[vertexOffsetV] = uv[1]; // rb

          verts[vertexOffsetU + offset1] = uv[0] + (uv[6] - uv[0]) * coefu;
          verts[vertexOffsetV + offset1] = uv[1]; // lt

          verts[vertexOffsetU + offset2] = uv[0];
          verts[vertexOffsetV + offset2] = uv[1] + (uv[7] - uv[1]) * coefv; // rt

          verts[vertexOffsetU + offset3] = verts[vertexOffsetU + offset1];
          verts[vertexOffsetV + offset3] = verts[vertexOffsetV + offset2];
        } // color


        uintVerts[vOffset + colorOffset] = color;
        uintVerts[vOffset + colorOffset + offset1] = color;
        uintVerts[vOffset + colorOffset + offset2] = color;
        uintVerts[vOffset + colorOffset + offset3] = color;
        vOffset += offset4;
      }
    }
  },
  updateColor: function updateColor(sprite, color) {
    var uintVerts = sprite._renderHandle.uintVDatas[0];

    if (uintVerts) {
      color = ((uintVerts[4] & 0xff000000) >>> 0 | color & 0x00ffffff) >>> 0;
      var length = uintVerts.length;

      for (var offset = 4; offset < length; offset += 5) {
        uintVerts[offset] = color;
      }
    }
  }
};

},{}],15:[function(require,module,exports){
"use strict";

/****************************************************************************
 Copyright (c) 2019 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of cache-manager software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in cache-manager License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
var _require = require('./fs-utils'),
    getUserDataPath = _require.getUserDataPath,
    readJsonSync = _require.readJsonSync,
    makeDirSync = _require.makeDirSync,
    writeFileSync = _require.writeFileSync,
    copyFile = _require.copyFile,
    downloadFile = _require.downloadFile,
    writeFile = _require.writeFile,
    deleteFile = _require.deleteFile,
    rmdirSync = _require.rmdirSync,
    unzip = _require.unzip;

var checkNextPeriod = false;
var writeCacheFileList = null;
var startWrite = false;
var nextCallbacks = [];
var callbacks = [];
var cleaning = false;
var errTest = /the maximum size of the file storage/;
var suffix = 0;
var REGEX = /^\w+:\/\/.*/;
var cacheManager = {
  cacheDir: 'gamecaches',
  cachedFileName: 'cacheList.json',
  // whether or not cache asset into user's storage space
  cacheEnabled: true,
  // whether or not auto clear cache when storage ran out
  autoClear: true,
  // cache one per cycle
  cacheInterval: 500,
  deleteInterval: 500,
  writeFileInterval: 2000,
  // whether or not storage space has run out
  outOfStorage: false,
  tempFiles: null,
  cachedFiles: null,
  cacheQueue: {},
  version: '1.0',
  getCache: function getCache(url) {
    return this.cachedFiles.has(url) ? this.cachedFiles.get(url).url : '';
  },
  getTemp: function getTemp(url) {
    return this.tempFiles.has(url) ? this.tempFiles.get(url) : '';
  },
  init: function init() {
    this.cacheDir = getUserDataPath() + '/' + this.cacheDir;
    var cacheFilePath = this.cacheDir + '/' + this.cachedFileName;
    var result = readJsonSync(cacheFilePath);

    if (result instanceof Error || !result.version) {
      if (!(result instanceof Error)) rmdirSync(this.cacheDir, true);
      this.cachedFiles = new cc.AssetManager.Cache();
      makeDirSync(this.cacheDir, true);
      writeFileSync(cacheFilePath, JSON.stringify({
        files: this.cachedFiles._map,
        version: this.version
      }), 'utf8');
    } else {
      this.cachedFiles = new cc.AssetManager.Cache(result.files);
    }

    this.tempFiles = new cc.AssetManager.Cache();
  },
  updateLastTime: function updateLastTime(url) {
    if (this.cachedFiles.has(url)) {
      var cache = this.cachedFiles.get(url);
      cache.lastTime = Date.now();
    }
  },
  _write: function _write() {
    writeCacheFileList = null;
    startWrite = true;
    writeFile(this.cacheDir + '/' + this.cachedFileName, JSON.stringify({
      files: this.cachedFiles._map,
      version: this.version
    }), 'utf8', function () {
      startWrite = false;

      for (var i = 0, j = callbacks.length; i < j; i++) {
        callbacks[i]();
      }

      callbacks.length = 0;
      callbacks.push.apply(callbacks, nextCallbacks);
      nextCallbacks.length = 0;
    });
  },
  writeCacheFile: function writeCacheFile(cb) {
    if (!writeCacheFileList) {
      writeCacheFileList = setTimeout(this._write.bind(this), this.writeFileInterval);

      if (startWrite === true) {
        cb && nextCallbacks.push(cb);
      } else {
        cb && callbacks.push(cb);
      }
    } else {
      cb && callbacks.push(cb);
    }
  },
  _cache: function _cache() {
    var self = this;

    for (var id in this.cacheQueue) {
      var callback = function callback(err) {
        checkNextPeriod = false;

        if (err) {
          if (errTest.test(err.message)) {
            self.outOfStorage = true;
            self.autoClear && self.clearLRU();
            return;
          }
        } else {
          self.cachedFiles.add(id, {
            bundle: cacheBundleRoot,
            url: localPath,
            lastTime: time
          });
          delete self.cacheQueue[id];
          self.writeCacheFile();
        }

        if (!cc.js.isEmptyObject(self.cacheQueue)) {
          checkNextPeriod = true;
          setTimeout(self._cache.bind(self), self.cacheInterval);
        }
      };

      var _this$cacheQueue$id = this.cacheQueue[id],
          srcUrl = _this$cacheQueue$id.srcUrl,
          isCopy = _this$cacheQueue$id.isCopy,
          cacheBundleRoot = _this$cacheQueue$id.cacheBundleRoot;
      var time = Date.now().toString();
      var localPath = '';

      if (cacheBundleRoot) {
        localPath = "".concat(this.cacheDir, "/").concat(cacheBundleRoot, "/").concat(time).concat(suffix++).concat(cc.path.extname(id));
      } else {
        localPath = "".concat(this.cacheDir, "/").concat(time).concat(suffix++).concat(cc.path.extname(id));
      }

      if (!isCopy) {
        downloadFile(srcUrl, localPath, null, callback);
      } else {
        copyFile(srcUrl, localPath, callback);
      }

      return;
    }

    checkNextPeriod = false;
  },
  cacheFile: function cacheFile(id, srcUrl, cacheEnabled, cacheBundleRoot, isCopy) {
    cacheEnabled = cacheEnabled !== undefined ? cacheEnabled : this.cacheEnabled;
    if (!cacheEnabled || this.cacheQueue[id] || this.cachedFiles.has(id)) return;
    this.cacheQueue[id] = {
      srcUrl: srcUrl,
      cacheBundleRoot: cacheBundleRoot,
      isCopy: isCopy
    };

    if (!checkNextPeriod) {
      checkNextPeriod = true;

      if (!this.outOfStorage) {
        setTimeout(this._cache.bind(this), this.cacheInterval);
      } else {
        checkNextPeriod = false;
      }
    }
  },
  clearCache: function clearCache() {
    var _this = this;

    rmdirSync(this.cacheDir, true);
    this.cachedFiles = new cc.AssetManager.Cache();
    makeDirSync(this.cacheDir, true);
    var cacheFilePath = this.cacheDir + '/' + this.cachedFileName;
    this.outOfStorage = false;
    writeFileSync(cacheFilePath, JSON.stringify({
      files: this.cachedFiles._map,
      version: this.version
    }), 'utf8');
    cc.assetManager.bundles.forEach(function (bundle) {
      if (REGEX.test(bundle.base)) _this.makeBundleFolder(bundle.name);
    });
  },
  clearLRU: function clearLRU() {
    if (cleaning) return;
    cleaning = true;
    var caches = [];
    var self = this;
    this.cachedFiles.forEach(function (val, key) {
      if (val.bundle === 'internal') return;
      if (self._isZipFile(key) && cc.assetManager.bundles.has(val.bundle)) return;
      caches.push({
        originUrl: key,
        url: val.url,
        lastTime: val.lastTime
      });
    });
    caches.sort(function (a, b) {
      return a.lastTime - b.lastTime;
    });
    caches.length = Math.floor(this.cachedFiles.count / 3);
    if (caches.length === 0) return;

    for (var i = 0, l = caches.length; i < l; i++) {
      this.cachedFiles.remove(caches[i].originUrl);
    }

    this.writeCacheFile(function () {
      function deferredDelete() {
        var item = caches.pop();

        if (self._isZipFile(item.originUrl)) {
          rmdirSync(item.url, true);

          self._deleteFileCB();
        } else {
          deleteFile(item.url, self._deleteFileCB.bind(self));
        }

        if (caches.length > 0) {
          setTimeout(deferredDelete, self.deleteInterval);
        } else {
          cleaning = false;
        }
      }

      setTimeout(deferredDelete, self.deleteInterval);
    });
  },
  removeCache: function removeCache(url) {
    if (this.cachedFiles.has(url)) {
      var self = this;
      var path = this.cachedFiles.remove(url).url;
      this.writeCacheFile(function () {
        if (self._isZipFile(url)) {
          rmdirSync(path, true);

          self._deleteFileCB();
        } else {
          deleteFile(path, self._deleteFileCB.bind(self));
        }
      });
    }
  },
  _deleteFileCB: function _deleteFileCB(err) {
    if (!err) this.outOfStorage = false;
  },
  makeBundleFolder: function makeBundleFolder(bundleName) {
    makeDirSync(this.cacheDir + '/' + bundleName, true);
  },
  unzipAndCacheBundle: function unzipAndCacheBundle(id, zipFilePath, cacheBundleRoot, onComplete) {
    var time = Date.now().toString();
    var targetPath = "".concat(this.cacheDir, "/").concat(cacheBundleRoot, "/").concat(time).concat(suffix++);
    var self = this;
    makeDirSync(targetPath, true);
    unzip(zipFilePath, targetPath, function (err) {
      if (err) {
        rmdirSync(targetPath, true);
        onComplete && onComplete(err);
        return;
      }

      self.cachedFiles.add(id, {
        bundle: cacheBundleRoot,
        url: targetPath,
        lastTime: time
      });
      self.writeCacheFile();
      onComplete && onComplete(null, targetPath);
    });
  },
  _isZipFile: function _isZipFile(url) {
    return url.slice(-4) === '.zip';
  }
};
cc.assetManager.cacheManager = module.exports = cacheManager;

},{"./fs-utils":16}],16:[function(require,module,exports){
"use strict";

/****************************************************************************
 Copyright (c) 2017-2019 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of fsUtils software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in fsUtils License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
var _rt = loadRuntime();

var fs = _rt.getFileSystemManager ? _rt.getFileSystemManager() : null;
var fsUtils = {
  fs: fs,
  _subpackagesPath: '',
  getUserDataPath: function getUserDataPath() {
    return loadRuntime().env.USER_DATA_PATH;
  },
  checkFsValid: function checkFsValid() {
    if (!fs) {
      console.warn('can not get the file system!');
      return false;
    }

    return true;
  },
  deleteFile: function deleteFile(filePath, onComplete) {
    fs.unlink({
      filePath: filePath,
      success: function success() {
        onComplete && onComplete(null);
      },
      fail: function fail(res) {
        console.warn('Delete file failed: ' + res.errMsg);
        onComplete && onComplete(new Error(res.errMsg));
      }
    });
  },
  downloadFile: function downloadFile(remoteUrl, filePath, header, onProgress, onComplete) {
    var options = {
      url: remoteUrl,
      success: function success(res) {
        if (res.statusCode === 200) {
          onComplete && onComplete(null, res.tempFilePath || res.filePath);
        } else {
          if (res.filePath) {
            fsUtils.deleteFile(res.filePath);
          }

          console.warn('Download file failed: ' + res.statusCode);
          onComplete && onComplete(new Error(res.statusCode), null);
        }
      },
      fail: function fail(res) {
        console.warn('Download file failed: ' + res.errMsg);
        onComplete && onComplete(new Error(res.errMsg), null);
      }
    };
    if (filePath) options.filePath = filePath;
    if (header) options.header = header;

    var task = _rt.downloadFile(options);

    onProgress && task.onProgressUpdate(onProgress);
  },
  saveFile: function saveFile(srcPath, destPath, onComplete) {
    fs.saveFile({
      tempFilePath: srcPath,
      filePath: destPath,
      success: function success(res) {
        onComplete && onComplete(null);
      },
      fail: function fail(res) {
        console.warn('Save file failed: ' + res.errMsg);
        onComplete && onComplete(new Error(res.errMsg));
      }
    });
  },
  copyFile: function copyFile(srcPath, destPath, onComplete) {
    fs.copyFile({
      srcPath: srcPath,
      destPath: destPath,
      success: function success() {
        onComplete && onComplete(null);
      },
      fail: function fail(res) {
        console.warn('Copy file failed: ' + res.errMsg);
        onComplete && onComplete(new Error(res.errMsg));
      }
    });
  },
  writeFile: function writeFile(path, data, encoding, onComplete) {
    fs.writeFile({
      filePath: path,
      encoding: encoding,
      data: data,
      success: function success() {
        onComplete && onComplete(null);
      },
      fail: function fail(res) {
        console.warn('Write file failed: ' + res.errMsg);
        onComplete && onComplete(new Error(res.errMsg));
      }
    });
  },
  writeFileSync: function writeFileSync(path, data, encoding) {
    try {
      fs.writeFileSync(path, data, encoding);
      return null;
    } catch (e) {
      console.warn('Write file failed: ' + e.message);
      return new Error(e.message);
    }
  },
  readFile: function readFile(filePath, encoding, onComplete) {
    fs.readFile({
      filePath: filePath,
      encoding: encoding,
      success: function success(res) {
        onComplete && onComplete(null, res.data);
      },
      fail: function fail(res) {
        console.warn('Read file failed: ' + res.errMsg);
        onComplete && onComplete(new Error(res.errMsg), null);
      }
    });
  },
  readDir: function readDir(filePath, onComplete) {
    fs.readdir({
      dirPath: filePath,
      success: function success(res) {
        onComplete && onComplete(null, res.files);
      },
      fail: function fail(res) {
        console.warn('Read directory failed: ' + res.errMsg);
        onComplete && onComplete(new Error(res.errMsg), null);
      }
    });
  },
  readText: function readText(filePath, onComplete) {
    fsUtils.readFile(filePath, 'utf8', onComplete);
  },
  readArrayBuffer: function readArrayBuffer(filePath, onComplete) {
    fsUtils.readFile(filePath, '', onComplete);
  },
  readJson: function readJson(filePath, onComplete) {
    fsUtils.readFile(filePath, 'utf8', function (err, text) {
      var out = null;

      if (!err) {
        try {
          out = JSON.parse(text);
        } catch (e) {
          console.warn('Read json failed: ' + e.message);
          err = new Error(e.message);
        }
      }

      onComplete && onComplete(err, out);
    });
  },
  readJsonSync: function readJsonSync(path) {
    try {
      var str = fs.readFileSync(path, 'utf8');
      return JSON.parse(str);
    } catch (e) {
      console.warn('Read json failed: ' + e);
      return new Error(e);
    }
  },
  makeDirSync: function makeDirSync(path, recursive) {
    try {
      fs.mkdirSync(path, recursive);
      return null;
    } catch (e) {
      console.warn('Make directory failed: ' + e.message);
      return new Error(e.message);
    }
  },
  rmdirSync: function rmdirSync(dirPath, recursive) {
    try {
      fs.rmdirSync(dirPath, recursive);
    } catch (e) {
      console.warn('rm directory failed: ' + e.message);
      return new Error(e.message);
    }
  },
  exists: function exists(filePath, onComplete) {
    fs.access({
      path: filePath,
      success: function success() {
        onComplete && onComplete(true);
      },
      fail: function fail() {
        onComplete && onComplete(false);
      }
    });
  },
  loadSubpackage: function loadSubpackage(name, onProgress, onComplete) {
    var task = _rt.loadSubpackage({
      name: name,
      success: function success() {
        onComplete && onComplete();
      },
      fail: function fail(res) {
        console.warn('Load Subpackage failed: ' + res.errMsg);
        onComplete && onComplete(new Error("Failed to load subpackage ".concat(name, ": ").concat(res.errMsg)));
      }
    });

    onProgress && task.onProgressUpdate(onProgress);
    return task;
  },
  unzip: function unzip(zipFilePath, targetPath, onComplete) {
    fs.unzip({
      zipFilePath: zipFilePath,
      targetPath: targetPath,
      success: function success() {
        onComplete && onComplete(null);
      },
      fail: function fail(res) {
        onComplete && onComplete(new Error('unzip failed: ' + res.errMsg));
      }
    });
  }
};
cc.assetManager.fsUtils = window.fsUtils = module.exports = fsUtils;

},{}],17:[function(require,module,exports){
"use strict";
/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

require('./rt-feature-premut-alpha.js');

require('./rt-sys.js');

require('./rt_input.js');

require('./rt-game.js');

require('./rt-jsb.js');

require('./rt-videoplayer.js');

require('./jsb-node.js');

require('./jsb-audio.js');

require('./AssetManager.js');

require('./jsb-editbox.js');

if (CC_JSB && CC_NATIVERENDERER) {
  require('./scene/camera.js');

  require('./scene/node-proxy.js');

  require('./scene/render-flow.js'); // must be required after render flow


  require('./scene/node.js');

  require('./scene/render-handle.js');

  require('./scene/custom-render-handle.js');

  require('./jsb-dragonbones.js');

  require('./jsb-spine-skeleton.js');

  require('./jsb-particle.js');

  require('./scene/graphics-render-handle.js');

  require('./scene/mask-render-handle.js');

  cc.game.on(cc.game.EVENT_ENGINE_INITED, function () {
    require('./assemblers/flex-buffer.js'); // Assemblers


    require('./assemblers/sprite/index.js');

    require('./assemblers/sprite/simple.js');

    require('./assemblers/sprite/sliced.js');

    require('./assemblers/sprite/tiled.js');

    require('./assemblers/sprite/bar-filled.js');

    require('./assemblers/sprite/radial-filled.js');

    require('./assemblers/label/index.js');

    require('./assemblers/label/ttf.js');

    require('./assemblers/label/bmfont.js');

    if (cc.Graphics) {
      require('./assemblers/graphics/impl.js');

      require('./assemblers/graphics/index.js');

      require('./assemblers/mask-assembler.js');
    }
  });
}

},{"./AssetManager.js":1,"./assemblers/flex-buffer.js":2,"./assemblers/graphics/impl.js":3,"./assemblers/graphics/index.js":4,"./assemblers/label/bmfont.js":5,"./assemblers/label/index.js":6,"./assemblers/label/ttf.js":7,"./assemblers/mask-assembler.js":8,"./assemblers/sprite/bar-filled.js":9,"./assemblers/sprite/index.js":10,"./assemblers/sprite/radial-filled.js":11,"./assemblers/sprite/simple.js":12,"./assemblers/sprite/sliced.js":13,"./assemblers/sprite/tiled.js":14,"./jsb-audio.js":18,"./jsb-dragonbones.js":19,"./jsb-editbox.js":20,"./jsb-node.js":21,"./jsb-particle.js":22,"./jsb-spine-skeleton.js":23,"./rt-feature-premut-alpha.js":24,"./rt-game.js":25,"./rt-jsb.js":26,"./rt-sys.js":27,"./rt-videoplayer.js":28,"./rt_input.js":29,"./scene/camera.js":30,"./scene/custom-render-handle.js":31,"./scene/graphics-render-handle.js":32,"./scene/mask-render-handle.js":33,"./scene/node-proxy.js":34,"./scene/node.js":35,"./scene/render-flow.js":36,"./scene/render-handle.js":37}],18:[function(require,module,exports){
"use strict";

/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
 worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
 not use Cocos Creator software for developing other software or tools that's
 used for developing games. You are not granted to publish, distribute,
 sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
var Audio = cc._Audio = function (src) {
  this.src = src;
  this.volume = 1;
  this.loop = false;
  this.id = -1;
};

var handleVolume = function handleVolume(volume) {
  if (volume === undefined) {
    // set default volume as 1
    volume = 1;
  } else if (typeof volume === 'string') {
    volume = Number.parseFloat(volume);
  }

  return volume;
};

(function (proto, audioEngine) {
  if (!audioEngine) return; // Using the new audioEngine

  cc.audioEngine = audioEngine;

  audioEngine.setMaxWebAudioSize = function () {};

  Audio.State = audioEngine.AudioState;

  proto.play = function () {
    audioEngine.stop(this.id);
    var clip = this.src;
    this.id = audioEngine.play(clip, this.loop, this.volume);
  };

  proto.pause = function () {
    audioEngine.pause(this.id);
  };

  proto.resume = function () {
    audioEngine.resume(this.id);
  };

  proto.stop = function () {
    audioEngine.stop(this.id);
  };

  proto.destroy = function () {};

  proto.setLoop = function (loop) {
    this.loop = loop;
    audioEngine.setLoop(this.id, loop);
  };

  proto.getLoop = function () {
    return this.loop;
  };

  proto.setVolume = function (volume) {
    volume = handleVolume(volume);
    this.volume = volume;
    return audioEngine.setVolume(this.id, volume);
  };

  proto.getVolume = function () {
    return this.volume;
  };

  proto.setCurrentTime = function (time) {
    audioEngine.setCurrentTime(this.id, time);
  };

  proto.getCurrentTime = function () {
    return audioEngine.getCurrentTime(this.id);
  };

  proto.getDuration = function () {
    return audioEngine.getDuration(this.id);
  };

  proto.getState = function () {
    return audioEngine.getState(this.id);
  }; // polyfill audioEngine


  var _music = {
    id: -1,
    clip: '',
    loop: false,
    volume: 1
  };
  var _effect = {
    volume: 1
  };

  audioEngine.play = function (clip, loop, volume) {
    if (typeof volume !== 'number') {
      volume = 1;
    }

    var audioFilePath;

    if (typeof clip === 'string') {
      // backward compatibility since 1.10
      cc.warnID(8401, 'cc.audioEngine', 'cc.AudioClip', 'AudioClip', 'cc.AudioClip', 'audio');
      audioFilePath = clip;
    } else {
      if (clip.loaded) {
        audioFilePath = clip.nativeUrl;
      } else {
        // audio delay loading
        clip._nativeAsset = audioFilePath = clip.nativeUrl;
        clip.loaded = true;
      }
    }

    return audioEngine.play2d(audioFilePath, loop, volume);
  };

  audioEngine.playMusic = function (clip, loop) {
    audioEngine.stop(_music.id);
    _music.id = audioEngine.play(clip, loop, _music.volume);
    _music.loop = loop;
    _music.clip = clip;
    return _music.id;
  };

  audioEngine.stopMusic = function () {
    audioEngine.stop(_music.id);
  };

  audioEngine.pauseMusic = function () {
    audioEngine.pause(_music.id);
    return _music.id;
  };

  audioEngine.resumeMusic = function () {
    audioEngine.resume(_music.id);
    return _music.id;
  };

  audioEngine.getMusicVolume = function () {
    return _music.volume;
  };

  audioEngine.setMusicVolume = function (volume) {
    _music.volume = handleVolume(volume);
    audioEngine.setVolume(_music.id, _music.volume);
    return volume;
  };

  audioEngine.isMusicPlaying = function () {
    return audioEngine.getState(_music.id) === audioEngine.AudioState.PLAYING;
  };

  audioEngine.playEffect = function (filePath, loop) {
    return audioEngine.play(filePath, loop || false, _effect.volume);
  };

  audioEngine.setEffectsVolume = function (volume) {
    _effect.volume = handleVolume(volume);
  };

  audioEngine.getEffectsVolume = function () {
    return _effect.volume;
  };

  audioEngine.pauseEffect = function (audioID) {
    return audioEngine.pause(audioID);
  };

  audioEngine.pauseAllEffects = function () {
    var musicPlay = audioEngine.getState(_music.id) === audioEngine.AudioState.PLAYING;
    audioEngine.pauseAll();

    if (musicPlay) {
      audioEngine.resume(_music.id);
    }
  };

  audioEngine.resumeEffect = function (id) {
    audioEngine.resume(id);
  };

  audioEngine.resumeAllEffects = function () {
    var musicPaused = audioEngine.getState(_music.id) === audioEngine.AudioState.PAUSED;
    audioEngine.resumeAll();

    if (musicPaused && audioEngine.getState(_music.id) === audioEngine.AudioState.PLAYING) {
      audioEngine.pause(_music.id);
    }
  };

  audioEngine.stopEffect = function (id) {
    return audioEngine.stop(id);
  };

  audioEngine.stopAllEffects = function () {
    var musicPlaying = audioEngine.getState(_music.id) === audioEngine.AudioState.PLAYING;
    var currentTime = audioEngine.getCurrentTime(_music.id);
    audioEngine.stopAll();

    if (musicPlaying) {
      _music.id = audioEngine.play(_music.clip, _music.loop);
      audioEngine.setCurrentTime(_music.id, currentTime);
    }
  }; // Unnecessary on native platform


  audioEngine._break = function () {};

  audioEngine._restore = function () {}; // deprecated


  audioEngine._uncache = audioEngine.uncache;

  audioEngine.uncache = function (clip) {
    var path;

    if (typeof clip === 'string') {
      // backward compatibility since 1.10
      cc.warnID(8401, 'cc.audioEngine', 'cc.AudioClip', 'AudioClip', 'cc.AudioClip', 'audio');
      path = clip;
    } else {
      if (!clip) {
        return;
      }

      path = clip._nativeAsset;
    }

    audioEngine._uncache(path);
  };

  audioEngine._preload = audioEngine.preload;

  audioEngine.preload = function (filePath, callback) {
    cc.warn('`cc.audioEngine.preload` is deprecated, use `cc.assetManager.loadRes(url, cc.AudioClip)` instead please.');

    audioEngine._preload(filePath, callback);
  };
})(Audio.prototype, jsb.AudioEngine);

},{}],19:[function(require,module,exports){
"use strict";
/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

(function () {
  if (window.dragonBones === undefined || window.middleware === undefined) return;
  if (dragonBones.DragonBonesAtlasAsset === undefined) return;
  var renderEngine = cc.renderer.renderEngine;
  var SpriteMaterial = renderEngine.SpriteMaterial;

  var _slotColor = cc.color(0, 0, 255, 255);

  var _boneColor = cc.color(255, 0, 0, 255);

  var _originColor = cc.color(0, 255, 0, 255); ////////////////////////////////////////////////////////////
  // override dragonBones library by native dragonBones
  ////////////////////////////////////////////////////////////
  //--------------------
  // adapt event name
  //--------------------


  dragonBones.EventObject.START = "start";
  dragonBones.EventObject.LOOP_COMPLETE = "loopComplete";
  dragonBones.EventObject.COMPLETE = "complete";
  dragonBones.EventObject.FADE_IN = "fadeIn";
  dragonBones.EventObject.FADE_IN_COMPLETE = "fadeInComplete";
  dragonBones.EventObject.FADE_OUT = "fadeOut";
  dragonBones.EventObject.FADE_OUT_COMPLETE = "fadeOutComplete";
  dragonBones.EventObject.FRAME_EVENT = "frameEvent";
  dragonBones.EventObject.SOUND_EVENT = "soundEvent";
  dragonBones.DragonBones = {
    ANGLE_TO_RADIAN: Math.PI / 180,
    RADIAN_TO_ANGLE: 180 / Math.PI
  }; //-------------------
  // native factory
  //-------------------

  var factoryProto = dragonBones.CCFactory.prototype;

  factoryProto.createArmatureNode = function (comp, armatureName, node) {
    node = node || new cc.Node();
    var display = node.getComponent(dragonBones.ArmatureDisplay);

    if (!display) {
      display = node.addComponent(dragonBones.ArmatureDisplay);
    }

    node.name = armatureName;
    display._armatureName = armatureName;
    display._N$dragonAsset = comp.dragonAsset;
    display._N$dragonAtlasAsset = comp.dragonAtlasAsset;

    display._init();

    return display;
  }; //-------------------
  // native armature
  //-------------------


  var armatureProto = dragonBones.Armature.prototype;
  Object.defineProperty(armatureProto, 'animation', {
    get: function get() {
      return this.getAnimation();
    }
  });
  Object.defineProperty(armatureProto, 'display', {
    get: function get() {
      return this.getDisplay();
    }
  });
  Object.defineProperty(armatureProto, 'name', {
    get: function get() {
      return this.getName();
    }
  });

  armatureProto.addEventListener = function (eventType, listener, target) {
    if (!this.__persistentDisplay__) {
      this.__persistentDisplay__ = this.getDisplay();
    }

    this.__persistentDisplay__.on(eventType, listener, target);
  };

  armatureProto.removeEventListener = function (eventType, listener, target) {
    if (!this.__persistentDisplay__) {
      this.__persistentDisplay__ = this.getDisplay();
    }

    this.__persistentDisplay__.off(eventType, listener, target);
  }; //--------------------------
  // native CCArmatureDisplay
  //--------------------------


  var nativeArmatureDisplayProto = dragonBones.CCArmatureDisplay.prototype;
  Object.defineProperty(nativeArmatureDisplayProto, "node", {
    get: function get() {
      return this;
    }
  });

  nativeArmatureDisplayProto.getRootNode = function () {
    var rootDisplay = this.getRootDisplay();
    return rootDisplay && rootDisplay._ccNode;
  };

  nativeArmatureDisplayProto.convertToWorldSpace = function (point) {
    var newPos = this.convertToRootSpace(point);
    var ccNode = this.getRootNode();
    if (!ccNode) return newPos;
    var finalPos = ccNode.convertToWorldSpace(newPos);
    return finalPos;
  };

  nativeArmatureDisplayProto.initEvent = function () {
    if (this._eventTarget) {
      return;
    }

    this._eventTarget = new cc.EventTarget();
    this.setDBEventCallback(function (eventObject) {
      this._eventTarget.emit(eventObject.type, eventObject);
    });
  };

  nativeArmatureDisplayProto.on = function (type, listener, target) {
    this.initEvent();

    this._eventTarget.on(type, listener, target);

    this.addDBEventListener(type, listener);
  };

  nativeArmatureDisplayProto.off = function (type, listener, target) {
    this.initEvent();

    this._eventTarget.off(type, listener, target);

    this.removeDBEventListener(type, listener);
  }; //-------------------
  // native slot
  //-------------------


  var slotProto = dragonBones.Slot.prototype;
  Object.defineProperty(slotProto, 'childArmature', {
    get: function get() {
      return this.getChildArmature();
    },
    set: function set(val) {
      this.setChildArmature(val);
    }
  });
  Object.defineProperty(slotProto, 'display', {
    get: function get() {
      return this.getDisplay();
    }
  });
  Object.defineProperty(slotProto, 'name', {
    get: function get() {
      return this.getName();
    }
  }); //------------------------
  // native TransformObject
  //------------------------

  var transformObjectProto = dragonBones.TransformObject.prototype;
  Object.defineProperty(transformObjectProto, 'global', {
    get: function get() {
      return this.getGlobal();
    }
  });
  Object.defineProperty(transformObjectProto, 'origin', {
    get: function get() {
      return this.getOrigin();
    }
  });
  Object.defineProperty(transformObjectProto, 'offset', {
    get: function get() {
      return this.getOffset();
    }
  }); ////////////////////////////////////////////////////////////
  // override DragonBonesAtlasAsset
  ////////////////////////////////////////////////////////////

  var dbAtlas = dragonBones.DragonBonesAtlasAsset.prototype;
  var gTextureIdx = 0;
  var textureKeyMap = {};
  var textureMap = new WeakMap();
  var textureIdx2Name = {};
  var _reset = dbAtlas.reset;

  dbAtlas.reset = function () {
    _reset.call(this);

    this.recordTexture();
  };

  dbAtlas.recordTexture = function () {
    if (this._texture && this._oldTexture !== this._texture) {
      var texKey = textureKeyMap[gTextureIdx] = {
        key: gTextureIdx
      };
      textureMap.set(texKey, this._texture);
      this._oldTexture = this._texture;
      this._texture.__textureIndex__ = gTextureIdx;
      gTextureIdx++;
    }
  };

  dbAtlas.getTextureByIndex = function (textureIdx) {
    var texKey = textureKeyMap[textureIdx];
    if (!texKey) return;
    return textureMap.get(texKey);
  };

  dbAtlas.buildMaterial = function (tex) {
    this._material = this._material || new SpriteMaterial();
    this._materialCache = this._materialCache || {};
    var baseMaterial = this._material;
    var materialCache = this._materialCache;
    var baseKey = baseMaterial._hash;
    var material = undefined;

    if (!materialCache[baseKey]) {
      material = baseMaterial;
    } else {
      material = baseMaterial.clone();
    }

    material.useModel = true;
    material.texture = tex;
    material.useColor = false;
    material.updateHash();
    materialCache[material._hash] = material;
    return material;
  };

  dbAtlas.updateTextureAtlasData = function (factory) {
    var url = this._texture.url;
    var preAtlasInfo = textureIdx2Name[url];
    var index; // If the texture has store the atlas info before,then get native atlas object,and 
    // update script texture map.

    if (preAtlasInfo) {
      index = preAtlasInfo.index;
      this._textureAtlasData = factory.getTextureAtlasDataByIndex(preAtlasInfo.name, index);
      var texKey = textureKeyMap[preAtlasInfo.index];
      textureMap.set(texKey, this._texture);
      this._texture.__textureIndex__ = index; // If script has store the atlas info,but native has no atlas object,then
      // still new native texture2d object,but no call recordTexture to increase
      // textureIndex.

      if (this._textureAtlasData) {
        return;
      }
    } else {
      this.recordTexture();
    }

    index = this._texture.__textureIndex__;
    this.jsbTexture = new middleware.Texture2D();
    this.jsbTexture.setRealTextureIndex(index);
    this.jsbTexture.setPixelsWide(this._texture.width);
    this.jsbTexture.setPixelsHigh(this._texture.height);
    this._textureAtlasData = factory.parseTextureAtlasData(this.atlasJson, this.jsbTexture);
    var material = this.buildMaterial(this._texture); // var pass = material._mainTech.passes[0];
    // pass._programName = 'skeleton';
    // pass._native.setProgramName('skeleton');

    var nativeEffect = material.effect._nativeObj;
    this.jsbTexture.setNativeEffect(nativeEffect);
    this.jsbTexture.setNativeTexture(this._texture.getImpl());
    textureIdx2Name[url] = {
      name: this._textureAtlasData.name,
      index: index
    };
  };

  dbAtlas.init = function (factory) {
    if (this._textureAtlasData) {
      factory.addTextureAtlasData(this._textureAtlasData);
    } else {
      this.updateTextureAtlasData(factory);
    }
  }; ////////////////////////////////////////////////////////////
  // override DragonBonesAsset
  ////////////////////////////////////////////////////////////


  var dbAsset = dragonBones.DragonBonesAsset.prototype;

  dbAsset.init = function (factory) {
    this._factory = factory;

    if (this._dragonBonesData) {
      var sameNamedDragonBonesData = this._factory.getDragonBonesData(this._dragonBonesData.name);

      if (!sameNamedDragonBonesData) {
        this._factory.addDragonBonesData(this._dragonBonesData);
      }
    } else {
      if (this.dragonBonesJson) {
        this.initWithRawData(this.dragonBonesJson, false);
      } else {
        var nativeUrl = cc.loader.md5Pipe ? cc.loader.md5Pipe.transformURL(this.nativeUrl, true) : this.nativeUrl;
        this.initWithRawData(nativeUrl, true);
      }
    }
  };

  dbAsset.initWithRawData = function (nativeUrl, isBinary) {
    var dragonBonesData = this._factory.parseDragonBonesDataOnly(nativeUrl);

    var sameNamedDragonBonesData = this._factory.getDragonBonesData(dragonBonesData.name);

    if (sameNamedDragonBonesData) {
      this._dragonBonesData = sameNamedDragonBonesData;
    } else {
      this._dragonBonesData = dragonBonesData;

      this._factory.handleTextureAtlasData(isBinary);

      this._factory.addDragonBonesData(dragonBonesData);
    }
  }; ////////////////////////////////////////////////////////////
  // override ArmatureDisplay
  ////////////////////////////////////////////////////////////


  dragonBones.ArmatureDisplay._assembler = undefined;
  var armatureDisplayProto = dragonBones.ArmatureDisplay.prototype;
  var renderCompProto = cc.RenderComponent.prototype;
  var RenderFlow = cc.RenderFlow;
  Object.defineProperty(armatureDisplayProto, 'armatureName', {
    get: function get() {
      return this._armatureName;
    },
    set: function set(value) {
      this._armatureName = value;
      var animNames = this.getAnimationNames(this._armatureName);

      if (!this.animationName || animNames.indexOf(this.animationName) < 0) {
        this.animationName = '';
      }

      if (this._armature) {
        this._armature.dispose();

        this._armature = null;
      }

      this._nativeDisplay = null;

      this._refresh();
    },
    visible: false
  });
  Object.defineProperty(armatureDisplayProto, 'debugBones', {
    get: function get() {
      return this._debugBones || false;
    },
    set: function set(value) {
      this._debugBones = value;

      this._initDebugDraw();

      if (this._nativeDisplay) {
        this._nativeDisplay.setDebugBonesEnabled(this._debugBones);
      }
    }
  });
  Object.defineProperty(armatureDisplayProto, "premultipliedAlpha", {
    get: function get() {
      if (this._premultipliedAlpha === undefined) {
        return false;
      }

      return this._premultipliedAlpha;
    },
    set: function set(value) {
      this._premultipliedAlpha = value;

      if (this._nativeDisplay) {
        this._nativeDisplay.setOpacityModifyRGB(this._premultipliedAlpha);
      }
    }
  });

  armatureDisplayProto._clearRenderData = function () {
    this._nativeDisplay = undefined;
  };

  armatureDisplayProto.initNativeHandle = function () {
    this._assembler = undefined;
    this._renderHandle = new middleware.MiddlewareRenderHandle();

    this._renderHandle.bind(this);
  };

  armatureDisplayProto._buildArmature = function () {
    if (!this.dragonAsset || !this.dragonAtlasAsset || !this.armatureName) {
      this._clearRenderData();

      return;
    }

    var atlasName = this.dragonAtlasAsset._textureAtlasData.name;
    this._nativeDisplay = this._factory.buildArmatureDisplay(this.armatureName, this.dragonAsset._dragonBonesData.name, "", atlasName);

    if (!this._nativeDisplay) {
      this._clearRenderData();

      return;
    }

    this._nativeDisplay._ccNode = this.node;
    this._nativeDisplay._comp = this;

    this._nativeDisplay.bindNodeProxy(this.node._proxy);

    this._nativeDisplay.setOpacityModifyRGB(this.premultipliedAlpha);

    this._nativeDisplay.setDebugBonesEnabled(this.debugBones);

    this._armature = this._nativeDisplay.armature();
    this._armature.animation.timeScale = this.timeScale;

    if (this.animationName) {
      this.playAnimation(this.animationName, this.playTimes);
    }
  };

  armatureDisplayProto.update = function () {
    if (this._debugDraw && this.debugBones) {
      var nativeDisplay = this._nativeDisplay;
      this._debugData = this._debugData || nativeDisplay.getDebugData();
      if (!this._debugData) return;
      var graphics = this._debugDraw;
      graphics.clear();
      var debugData = this._debugData;
      var debugIdx = 0;
      graphics.lineWidth = 5;
      graphics.strokeColor = _boneColor;
      graphics.fillColor = _slotColor; // Root bone color is same as slot color.

      var debugBonesLen = debugData[debugIdx++];

      for (var i = 0; i < debugBonesLen; i += 4) {
        var bx = debugData[debugIdx++];
        var by = debugData[debugIdx++];
        var x = debugData[debugIdx++];
        var y = debugData[debugIdx++]; // Bone lengths.

        graphics.moveTo(bx, by);
        graphics.lineTo(x, y);
        graphics.stroke(); // Bone origins.

        graphics.circle(bx, by, Math.PI * 2);
        graphics.fill();

        if (i === 0) {
          graphics.fillColor = _originColor;
        }
      }
    }
  };

  armatureDisplayProto.onEnable = function () {
    renderCompProto.onEnable.call(this);

    if (this._armature) {
      this._factory.add(this._armature);
    }

    this.node._renderFlag &= ~RenderFlow.FLAG_UPDATE_RENDER_DATA;
    this.node._renderFlag &= ~RenderFlow.FLAG_RENDER;
    this.node._renderFlag &= ~RenderFlow.FLAG_CUSTOM_IA_RENDER;
  };

  armatureDisplayProto.onDisable = function () {
    renderCompProto.onDisable.call(this);

    if (this._armature) {
      this._factory.remove(this._armature);
    }
  };

  var _onLoad = armatureDisplayProto.onLoad;

  armatureDisplayProto.onLoad = function () {
    if (_onLoad) {
      _onLoad.call(this);
    }
  };

  armatureDisplayProto.addEventListener = function (eventType, listener, target) {
    if (this._nativeDisplay) {
      this._nativeDisplay.on(eventType, listener, target);
    }
  };

  armatureDisplayProto.removeEventListener = function (eventType, listener, target) {
    if (this._nativeDisplay) {
      this._nativeDisplay.off(eventType, listener, target);
    }
  };

  var _onDestroy = armatureDisplayProto.onDestroy;

  armatureDisplayProto.onDestroy = function () {
    _onDestroy.call(this);

    if (this._nativeDisplay) {
      this._nativeDisplay._comp = undefined;
      this._nativeDisplay = undefined;
    }

    this._materialCache = undefined;
  };
})();

},{}],20:[function(require,module,exports){
"use strict";

/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
(function () {
  if (!(cc && cc.EditBox)) {
    return;
  }

  var _rt = loadRuntime();

  var EditBox = cc.EditBox;
  var js = cc.js;
  var KeyboardReturnType = EditBox.KeyboardReturnType;
  var MAX_VALUE = 65535;
  var _currentEditBoxImpl = null;

  function getKeyboardReturnType(type) {
    switch (type) {
      case KeyboardReturnType.DEFAULT:
      case KeyboardReturnType.DONE:
        return 'done';

      case KeyboardReturnType.SEND:
        return 'send';

      case KeyboardReturnType.SEARCH:
        return 'search';

      case KeyboardReturnType.GO:
        return 'go';

      case KeyboardReturnType.NEXT:
        return 'next';
    }

    return 'done';
  }

  var BaseClass = EditBox._ImplClass;

  function MiniGameEditBoxImpl() {
    BaseClass.call(this);
    this._eventListeners = {
      onKeyboardInput: null,
      onKeyboardConfirm: null,
      onKeyboardComplete: null
    };
  }

  js.extend(MiniGameEditBoxImpl, BaseClass);
  EditBox._ImplClass = MiniGameEditBoxImpl;
  Object.assign(MiniGameEditBoxImpl.prototype, {
    init: function init(delegate) {
      if (!delegate) {
        cc.error('EditBox init failed');
        return;
      }

      this._delegate = delegate;
    },
    beginEditing: function beginEditing() {
      // In case multiply register events
      if (_currentEditBoxImpl === this) {
        return;
      }

      var delegate = this._delegate; // handle the old keyboard

      if (_currentEditBoxImpl) {
        var currentImplCbs = _currentEditBoxImpl._eventListeners;
        currentImplCbs.onKeyboardComplete();
        _rt.updateKeyboard && _rt.updateKeyboard({
          value: delegate._string
        });
      } else {
        this._showKeyboard();
      }

      this._registerKeyboardEvent();

      this._editing = true;
      _currentEditBoxImpl = this;
      delegate.editBoxEditingDidBegan();
    },
    endEditing: function endEditing() {
      this._hideKeyboard();

      var cbs = this._eventListeners;
      cbs.onKeyboardComplete && cbs.onKeyboardComplete();
    },
    _registerKeyboardEvent: function _registerKeyboardEvent() {
      var self = this;
      var delegate = this._delegate;
      var cbs = this._eventListeners;

      cbs.onKeyboardInput = function (res) {
        if (delegate._string !== res.value) {
          delegate.editBoxTextChanged(res.value);
        }
      };

      cbs.onKeyboardConfirm = function (res) {
        delegate.editBoxEditingReturn();
        var cbs = self._eventListeners;
        cbs.onKeyboardComplete && cbs.onKeyboardComplete();
      };

      cbs.onKeyboardComplete = function () {
        self._editing = false;
        _currentEditBoxImpl = null;

        self._unregisterKeyboardEvent();

        delegate.editBoxEditingDidEnded();
      };

      _rt.onKeyboardInput(cbs.onKeyboardInput);

      _rt.onKeyboardConfirm(cbs.onKeyboardConfirm);

      _rt.onKeyboardComplete(cbs.onKeyboardComplete);
    },
    _unregisterKeyboardEvent: function _unregisterKeyboardEvent() {
      var cbs = this._eventListeners;

      if (cbs.onKeyboardInput) {
        _rt.offKeyboardInput(cbs.onKeyboardInput);

        cbs.onKeyboardInput = null;
      }

      if (cbs.onKeyboardConfirm) {
        _rt.offKeyboardConfirm(cbs.onKeyboardConfirm);

        cbs.onKeyboardConfirm = null;
      }

      if (cbs.onKeyboardComplete) {
        _rt.offKeyboardComplete(cbs.onKeyboardComplete);

        cbs.onKeyboardComplete = null;
      }
    },
    _showKeyboard: function _showKeyboard() {
      var delegate = this._delegate;
      var multiline = delegate.inputMode === EditBox.InputMode.ANY;
      var maxLength = delegate.maxLength < 0 ? MAX_VALUE : delegate.maxLength;

      _rt.showKeyboard({
        defaultValue: delegate._string,
        maxLength: maxLength,
        multiple: multiline,
        confirmHold: false,
        confirmType: getKeyboardReturnType(delegate.returnType),
        success: function success(res) {},
        fail: function fail(res) {
          cc.warn(res.errMsg);
        }
      });
    },
    _hideKeyboard: function _hideKeyboard() {
      _rt.hideKeyboard({
        success: function success(res) {},
        fail: function fail(res) {
          cc.warn(res.errMsg);
        }
      });
    }
  });
})();

},{}],21:[function(require,module,exports){
/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
'use strict';

var _typedArray_temp = new Float32Array(16);

var _mat4_temp = new cc.Mat4();

function _mat4ToArray(typedArray, mat4) {
  typedArray[0] = mat4.m00;
  typedArray[1] = mat4.m01;
  typedArray[2] = mat4.m02;
  typedArray[3] = mat4.m03;
  typedArray[4] = mat4.m04;
  typedArray[5] = mat4.m05;
  typedArray[6] = mat4.m06;
  typedArray[7] = mat4.m07;
  typedArray[8] = mat4.m08;
  typedArray[9] = mat4.m09;
  typedArray[10] = mat4.m10;
  typedArray[11] = mat4.m11;
  typedArray[12] = mat4.m12;
  typedArray[13] = mat4.m13;
  typedArray[14] = mat4.m14;
  typedArray[15] = mat4.m15;
}

cc.Node.prototype.getWorldRTInAB = function () {
  this.getWorldRT(_mat4_temp);
  return _mat4_temp.m;
};

cc.Node.prototype.getWorldMatrixInAB = function () {
  this._updateWorldMatrix();

  return this._worldMatrix.m;
  ;
};

},{}],22:[function(require,module,exports){
"use strict";
/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

(function () {
  if (window.middleware === undefined) return;
  var ParticleSystem = cc.ParticleSystem;
  if (ParticleSystem === undefined) return;
  var PSProto = ParticleSystem.prototype;
  ParticleSystem._assembler = undefined;
  var renderEngine = cc.renderer.renderEngine;

  PSProto.initProperties = function () {
    this._simulator = new middleware.ParticleSimulator();
    this._previewTimer = null;
    this._focused = false;
    this._texture = null;
    this._renderData = null;
    this._simulator.__particleSystem__ = this;

    this._simulator.setFinishedCallback(function () {
      var self = this.__particleSystem__;

      self._finishedSimulation();
    });

    this._simulator.setStopCallback(function () {
      var self = this.__particleSystem__;
      self.stopSystem();
    }); // init properties


    for (var key in propertiesList) {
      var propName = propertiesList[key];
      this[propName] = this[propName];
    }

    var objPropList = ['gravity', 'sourcePos', 'posVar', 'startColor', 'startColorVar', 'endColor', 'endColorVar'];

    for (var key in objPropList) {
      var propName = objPropList[key];
      this[propName] = this[propName];
    }
  };

  Object.defineProperty(PSProto, 'gravity', {
    get: function get() {
      !this._gravity && (this._gravity = cc.v2(0, 0));
      return this._gravity;
    },
    set: function set(val) {
      if (!val) return;
      !this._gravity && (this._gravity = cc.v2(0, 0));
      this.gravity.x = val.x;
      this.gravity.y = val.y;
      this._simulator && this._simulator.setGravity(val.x, val.y, 0);
    }
  });
  Object.defineProperty(PSProto, 'sourcePos', {
    get: function get() {
      !this._sourcePos && (this._sourcePos = cc.v2(0, 0));
      return this._sourcePos;
    },
    set: function set(val) {
      if (!val) return;
      !this._sourcePos && (this._sourcePos = cc.v2(0, 0));
      this._sourcePos.x = val.x;
      this._sourcePos.y = val.y;
      this._simulator && this._simulator.setSourcePos(val.x, val.y, 0);
    }
  });
  Object.defineProperty(PSProto, 'posVar', {
    get: function get() {
      !this._posVar && (this._posVar = cc.v2(0, 0));
      return this._posVar;
    },
    set: function set(val) {
      if (!val) return;
      !this._posVar && (this._posVar = cc.v2(0, 0));
      this._posVar.x = val.x;
      this._posVar.y = val.y;
      this._simulator && this._simulator.setPosVar(val.x, val.y, 0);
    }
  });
  Object.defineProperty(PSProto, 'startColor', {
    get: function get() {
      !this._startColor && (this._startColor = cc.color(255, 255, 255, 255));
      return this._startColor;
    },
    set: function set(val) {
      if (!val) return;
      !this._startColor && (this._startColor = cc.color(255, 255, 255, 255));
      this._startColor.r = val.r;
      this._startColor.g = val.g;
      this._startColor.b = val.b;
      this._startColor.a = val.a;
      this._simulator && this._simulator.setStartColor(val.r, val.g, val.b, val.a);
    }
  });
  Object.defineProperty(PSProto, 'startColorVar', {
    get: function get() {
      !this._startColorVar && (this._startColorVar = cc.color(0, 0, 0, 0));
      return this._startColorVar;
    },
    set: function set(val) {
      if (!val) return;
      !this._startColorVar && (this._startColorVar = cc.color(0, 0, 0, 0));
      this._startColorVar.r = val.r;
      this._startColorVar.g = val.g;
      this._startColorVar.b = val.b;
      this._startColorVar.a = val.a;
      this._simulator && this._simulator.setStartColorVar(val.r, val.g, val.b, val.a);
    }
  });
  Object.defineProperty(PSProto, 'endColor', {
    get: function get() {
      !this._endColor && (this._endColor = cc.color(255, 255, 255, 0));
      return this._endColor;
    },
    set: function set(val) {
      if (!val) return;
      !this._endColor && (this._endColor = cc.color(255, 255, 255, 0));
      this._endColor.r = val.r;
      this._endColor.g = val.g;
      this._endColor.b = val.b;
      this._endColor.a = val.a;
      this._simulator && this._simulator.setEndColor(val.r, val.g, val.b, val.a);
    }
  });
  Object.defineProperty(PSProto, 'endColorVar', {
    get: function get() {
      !this._endColorVar && (this._endColorVar = cc.color(0, 0, 0, 0));
      return this._endColorVar;
    },
    set: function set(val) {
      if (!val) return;
      !this._endColorVar && (this._endColorVar = cc.color(0, 0, 0, 0));
      this._endColorVar.r = val.r;
      this._endColorVar.g = val.g;
      this._endColorVar.b = val.b;
      this._endColorVar.a = val.a;
      this._simulator && this._simulator.setEndColorVar(val.r, val.g, val.b, val.a);
    }
  });
  Object.defineProperty(PSProto, 'particleCount', {
    get: function get() {
      if (!this._simulator) {
        return 0;
      }

      return this._simulator.getParticleCount();
    }
  });
  Object.defineProperty(PSProto, 'active', {
    get: function get() {
      if (!this._simulator) {
        return false;
      }

      return this._simulator.active();
    }
  });

  PSProto.onLoad = function () {
    this._simulator.bindNodeProxy(this.node._proxy);
  }; // shield in native


  PSProto.update = undefined;

  PSProto.initNativeHandle = function () {
    this._assembler = undefined;
    this._renderHandle = new middleware.MiddlewareRenderHandle();

    this._renderHandle.bind(this);
  };

  var _onEnable = PSProto.onEnable;

  PSProto.onEnable = function () {
    _onEnable.call(this);

    if (this._simulator) {
      this._simulator.onEnable();
    }
  };

  var _onDisable = PSProto.onDisable;

  PSProto.onDisable = function () {
    _onDisable.call(this);

    if (this._simulator) {
      this._simulator.onDisable();
    }
  };

  PSProto._onTextureLoaded = function () {
    this._texture = this._renderSpriteFrame.getTexture();

    this._simulator.updateUVs(this._renderSpriteFrame.uv); // Reactivate material


    this._activateMaterial();
  }, PSProto._activateMaterial = function () {
    if (!this._material) {
      this._material = new renderEngine.SpriteMaterial();
      this._material.useTexture = true;
      this._material.useModel = true;
      this._material.useColor = false;

      this._simulator.setNativeEffect(this._material.effect._nativeObj);
    }

    if (!this._texture || !this._texture.loaded) {
      this._simulator.onDisable();

      this.markForRender(false);

      if (this._renderSpriteFrame) {
        this._applySpriteFrame();
      }
    } else {
      this.markForRender(true);

      this._simulator.onEnable();

      this._material.texture = this._texture;

      this._updateMaterial(this._material);
    }
  };
  var _applyFile = PSProto._applyFile;

  PSProto._applyFile = function () {
    _applyFile.call(this);

    this._simulator.setGravity(this._gravity.x, this._gravity.y, 0);

    this._simulator.setSourcePos(this._sourcePos.x, this._sourcePos.y, 0);

    this._simulator.setPosVar(this._posVar.x, this._posVar.y, 0);

    this._simulator.setStartColor(this._startColor.r, this._startColor.g, this._startColor.b, this._startColor.a);

    this._simulator.setStartColorVar(this._startColorVar.r, this._startColorVar.g, this._startColorVar.b, this._startColorVar.a);

    this._simulator.setEndColor(this._endColor.r, this._endColor.g, this._endColor.b, this._endColor.a);

    this._simulator.setEndColorVar(this._endColorVar.r, this._endColorVar.g, this._endColorVar.b, this._endColorVar.a);
  };

  var propertiesList = ["positionType", "emissionRate", "totalParticles", "duration", "emitterMode", "life", "lifeVar", "startSize", "startSizeVar", "endSize", "endSizeVar", "startSpin", "startSpinVar", "endSpin", "endSpinVar", "angle", "angleVar", "speed", "speedVar", "radialAccel", "radialAccelVar", "tangentialAccel", "tangentialAccelVar", "rotationIsDir", "startRadius", "startRadiusVar", "endRadius", "endRadiusVar", "rotatePerS", "rotatePerSVar"];
  propertiesList.forEach(function (getSetName) {
    var varName = "_" + getSetName;
    Object.defineProperty(PSProto, getSetName, {
      get: function get() {
        this[varName] === undefined && (this[varName] = 0);
        return this[varName];
      },
      set: function set(val) {
        this[varName] = val;
        this._simulator && (this._simulator[getSetName] = val);
      }
    });
  });
})();

},{}],23:[function(require,module,exports){
/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
"use strict";

(function () {
  if (window.sp === undefined || window.spine === undefined || window.middleware === undefined) return;
  var RenderFlow = cc.RenderFlow;

  var _slotColor = cc.color(0, 0, 255, 255);

  var _boneColor = cc.color(255, 0, 0, 255);

  var _originColor = cc.color(0, 255, 0, 255);

  sp.ANIMATION_EVENT_TYPE = {
    START: 0,
    INTERRUPT: 1,
    END: 2,
    DISPOSE: 3,
    COMPLETE: 4,
    EVENT: 5
  };
  var animation = spine.SpineAnimation.prototype; // The methods are added to be compatibility with old versions.

  animation.setCompleteListener = function (listener) {
    this._compeleteListener = listener;
    this.setCompleteListenerNative(function (trackEntry) {
      var loopCount = Math.floor(trackEntry.trackTime / trackEntry.animationEnd);

      this._compeleteListener(trackEntry, loopCount);
    });
  }; // Temporary solution before upgrade the Spine API


  animation.setAnimationListener = function (target, callback) {
    this._target = target;
    this._callback = callback;
    this.setStartListener(function (trackEntry) {
      if (this._target && this._callback) {
        this._callback.call(this._target, this, trackEntry, sp.ANIMATION_EVENT_TYPE.START, null, 0);
      }
    });
    this.setInterruptListener(function (trackEntry) {
      if (this._target && this._callback) {
        this._callback.call(this._target, this, trackEntry, sp.ANIMATION_EVENT_TYPE.INTERRUPT, null, 0);
      }
    });
    this.setEndListener(function (trackEntry) {
      if (this._target && this._callback) {
        this._callback.call(this._target, this, trackEntry, sp.ANIMATION_EVENT_TYPE.END, null, 0);
      }
    });
    this.setDisposeListener(function (trackEntry) {
      if (this._target && this._callback) {
        this._callback.call(this._target, this, trackEntry, sp.ANIMATION_EVENT_TYPE.DISPOSE, null, 0);
      }
    });
    this.setCompleteListener(function (trackEntry, loopCount) {
      if (this._target && this._callback) {
        this._callback.call(this._target, this, trackEntry, sp.ANIMATION_EVENT_TYPE.COMPLETE, null, loopCount);
      }
    });
    this.setEventListener(function (trackEntry, event) {
      if (this._target && this._callback) {
        this._callback.call(this._target, this, trackEntry, sp.ANIMATION_EVENT_TYPE.EVENT, event, 0);
      }
    });
  };

  sp.Skeleton._assembler = undefined;
  var skeleton = sp.Skeleton.prototype;
  Object.defineProperty(skeleton, 'paused', {
    get: function get() {
      return this._paused || false;
    },
    set: function set(value) {
      this._paused = value;

      if (this._skeleton) {
        this._skeleton.paused(value);
      }
    }
  });
  Object.defineProperty(skeleton, 'debugSlots', {
    get: function get() {
      return this._debugSlots || false;
    },
    set: function set(value) {
      this._debugSlots = value;

      this._initDebugDraw();

      if (this._skeleton) {
        this._skeleton.setDebugSlotsEnabled(this._debugSlots);
      }
    }
  });
  Object.defineProperty(skeleton, 'debugBones', {
    get: function get() {
      return this._debugBones || false;
    },
    set: function set(value) {
      this._debugBones = value;

      this._initDebugDraw();

      if (this._skeleton) {
        this._skeleton.setDebugBonesEnabled(this._debugBones);
      }
    }
  });
  Object.defineProperty(skeleton, "premultipliedAlpha", {
    get: function get() {
      if (this._premultipliedAlpha === undefined) {
        return true;
      }

      return this._premultipliedAlpha;
    },
    set: function set(value) {
      this._premultipliedAlpha = value;

      if (this._skeleton) {
        this._skeleton.setOpacityModifyRGB(this._premultipliedAlpha);
      }
    }
  });
  Object.defineProperty(skeleton, "timeScale", {
    get: function get() {
      return this._timeScale || 1.0;
    },
    set: function set(value) {
      this._timeScale = value;

      if (this._skeleton) {
        this._skeleton.setTimeScale(this._timeScale);
      }
    }
  });
  var _onLoad = skeleton.onLoad;

  skeleton.onLoad = function () {
    if (_onLoad) {
      _onLoad.call(this);
    }
  };

  skeleton.initNativeHandle = function () {
    this._assembler = undefined;
    this._renderHandle = new middleware.MiddlewareRenderHandle();

    this._renderHandle.bind(this);
  }, skeleton.buildMaterial = function (tex) {
    this._material = this._material || new SpriteMaterial();
    this._materials = this._materials || {};
    var baseMaterial = this._material;
    var materials = this._materials;
    var baseKey = baseMaterial._hash;
    var material = undefined;

    if (!materials[baseKey]) {
      material = baseMaterial;
    } else {
      material = baseMaterial.clone();
    }

    material.useModel = true;
    material.texture = tex;
    material.useColor = false;
    material.updateHash();
    materials[material._hash] = material;
    return material;
  };

  skeleton.setSkeletonData = function (skeletonData) {
    null != skeletonData.width && null != skeletonData.height && this.node.setContentSize(skeletonData.width, skeletonData.height);
    var uuid = skeletonData._uuid;

    if (!uuid) {
      cc.errorID(7504);
      return;
    }

    var jsonFile = cc.loader.md5Pipe ? cc.loader.md5Pipe.transformURL(skeletonData.nativeUrl, true) : skeletonData.nativeUrl;
    var atlasText = skeletonData.atlasText;

    if (!atlasText) {
      cc.errorID(7508, skeletonData.name);
      return;
    }

    var texValues = skeletonData.textures;
    var texKeys = skeletonData.textureNames;

    if (!(texValues && texValues.length > 0 && texKeys && texKeys.length > 0)) {
      cc.errorID(7507, skeletonData.name);
      return;
    }

    var textures = {};

    for (var i = 0; i < texValues.length; ++i) {
      var spTex = new middleware.Texture2D();
      var ccTex = texValues[i];
      spTex.setRealTextureIndex(i);
      spTex.setPixelsWide(ccTex.width);
      spTex.setPixelsHigh(ccTex.height);
      spTex.setTexParamCallback(function (texIdx, minFilter, magFilter, wrapS, warpT) {
        texValues[texIdx].setFilters(minFilter, magFilter);
        texValues[texIdx].setWrapMode(wrapS, warpT);
      }.bind(this));
      var material = this.buildMaterial(ccTex);
      var nativeEffect = material.effect._nativeObj;
      spTex.setNativeEffect(nativeEffect);
      spTex.setNativeTexture(ccTex.getImpl());
      textures[texKeys[i]] = spTex;
    }

    var skeletonAni = new spine.SpineAnimation();

    try {
      spine._initSkeletonRenderer(skeletonAni, jsonFile, atlasText, textures, skeletonData.scale);
    } catch (e) {
      cc._throw(e);

      return;
    }

    this._skeleton = skeletonAni;
    this._skeletonTextures = textures;
    this._skeleton._comp = this;

    this._skeleton.setOpacityModifyRGB(this.premultipliedAlpha);

    this._skeleton.setDebugSlotsEnabled(this.debugSlots);

    this._skeleton.setDebugBonesEnabled(this.debugBones);

    this._skeleton.bindNodeProxy(this.node._proxy); // init skeleton listener


    this._startListener && this.setStartListener(this._startListener);
    this._endListener && this.setEndListener(this._endListener);
    this._completeListener && this.setCompleteListener(this._completeListener);
    this._eventListener && this.setEventListener(this._eventListener);
    this._interruptListener && this.setInterruptListener(this._interruptListener);
    this._disposeListener && this.setDisposeListener(this._disposeListener);
  };

  skeleton.setAnimationStateData = function (stateData) {
    if (this._skeleton) {
      return this._skeleton.setAnimationStateData(stateData);
    }
  };

  var _onEnable = skeleton.onEnable;

  skeleton.onEnable = function () {
    _onEnable.call(this);

    if (this._skeleton) {
      this._skeleton.onEnable();
    }

    this.node._renderFlag &= ~RenderFlow.FLAG_UPDATE_RENDER_DATA;
    this.node._renderFlag &= ~RenderFlow.FLAG_RENDER;
    this.node._renderFlag &= ~RenderFlow.FLAG_CUSTOM_IA_RENDER;
  };

  var _onDisable = skeleton.onDisable;

  skeleton.onDisable = function () {
    _onDisable.call(this);

    if (this._skeleton) {
      this._skeleton.onDisable();
    }
  };

  skeleton.update = function (dt) {
    if (this.paused) return;
    var skeleton = this._skeleton;
    if (!skeleton) return;
    var node = this.node;
    if (!node) return;

    if (this.__preColor__ === undefined || !node.color.equals(this.__preColor__)) {
      skeleton.setColor(node.color);
      this.__preColor__ = node.color;
    }

    if (this.debugBones || this.debugSlots) {
      var debugData = this._debugData || this._skeleton.getDebugData();

      if (!debugData) return;
      var graphics = this._debugRenderer;
      graphics.clear();
      var debugIdx = 0;

      if (this.debugSlots) {
        // Debug Slot
        graphics.strokeColor = _slotColor;
        graphics.lineWidth = 5;
        var debugSlotsLen = debugData[debugIdx++];

        for (var i = 0; i < debugSlotsLen; i += 8) {
          graphics.moveTo(debugData[debugIdx++], debugData[debugIdx++]);
          graphics.lineTo(debugData[debugIdx++], debugData[debugIdx++]);
          graphics.lineTo(debugData[debugIdx++], debugData[debugIdx++]);
          graphics.lineTo(debugData[debugIdx++], debugData[debugIdx++]);
          graphics.close();
          graphics.stroke();
        }
      }

      if (this.debugBones) {
        graphics.lineWidth = 5;
        graphics.strokeColor = _boneColor;
        graphics.fillColor = _slotColor; // Root bone color is same as slot color.

        var debugBonesLen = debugData[debugIdx++];

        for (var i = 0; i < debugBonesLen; i += 4) {
          var bx = debugData[debugIdx++];
          var by = debugData[debugIdx++];
          var x = debugData[debugIdx++];
          var y = debugData[debugIdx++]; // Bone lengths.

          graphics.moveTo(bx, by);
          graphics.lineTo(x, y);
          graphics.stroke(); // Bone origins.

          graphics.circle(bx, by, Math.PI * 2);
          graphics.fill();

          if (i === 0) {
            graphics.fillColor = _originColor;
          }
        }
      }
    }
  };

  skeleton.updateWorldTransform = function () {
    this._skeleton && this._skeleton.updateWorldTransform();
  };

  skeleton.setToSetupPose = function () {
    this._skeleton && this._skeleton.setToSetupPose();
  };

  skeleton.setBonesToSetupPose = function () {
    this._skeleton && this._skeleton.setBonesToSetupPose();
  };

  skeleton.setSlotsToSetupPose = function () {
    this._skeleton && this._skeleton.setSlotsToSetupPose();
  };

  skeleton.findBone = function (boneName) {
    if (this._skeleton) return this._skeleton.findBone(boneName);
    return null;
  };

  skeleton.findSlot = function (slotName) {
    if (this._skeleton) return this._skeleton.findSlot(slotName);
    return null;
  };

  skeleton.setSkin = function (skinName) {
    if (this._skeleton) return this._skeleton.setSkin(skinName);
    return null;
  };

  skeleton.getAttachment = function (slotName, attachmentName) {
    if (this._skeleton) return this._skeleton.getAttachment(slotName, attachmentName);
    return null;
  };

  skeleton.setAttachment = function (slotName, attachmentName) {
    this._skeleton && this._skeleton.setAttachment(slotName, attachmentName);
  };

  skeleton.getTextureAtlas = function (regionAttachment) {
    cc.warn("sp.Skeleton getTextureAtlas not support in native");
    return null;
  };

  skeleton.setMix = function (fromAnimation, toAnimation, duration) {
    if (this._skeleton) {
      this._skeleton.setMix(fromAnimation, toAnimation, duration);
    }
  };

  skeleton.setAnimation = function (trackIndex, name, loop) {
    if (this._skeleton) {
      return this._skeleton.setAnimation(trackIndex, name, loop);
    }

    return null;
  };

  skeleton.addAnimation = function (trackIndex, name, loop, delay) {
    if (this._skeleton) {
      delay = delay || 0;
      return this._skeleton.addAnimation(trackIndex, name, loop, delay);
    }

    return null;
  };

  skeleton.findAnimation = function (name) {
    if (this._skeleton) return this._skeleton.findAnimation(name);
    return null;
  };

  skeleton.getCurrent = function (trackIndex) {
    if (this._skeleton) {
      return this._skeleton.getCurrent(trackIndex);
    }

    return null;
  };

  skeleton.clearTracks = function () {
    if (this._skeleton) {
      this._skeleton.clearTracks();
    }
  };

  skeleton.clearTrack = function (trackIndex) {
    if (this._skeleton) {
      this._skeleton.clearTrack(trackIndex);
    }
  };

  skeleton.setStartListener = function (listener) {
    this._startListener = listener;

    if (this._skeleton) {
      this._skeleton.setStartListener(listener);
    }
  };

  skeleton.setInterruptListener = function (listener) {
    this._interruptListener = listener;

    if (this._skeleton) {
      this._skeleton.setInterruptListener(listener);
    }
  };

  skeleton.setEndListener = function (listener) {
    this._endListener = listener;

    if (this._skeleton) {
      this._skeleton.setEndListener(listener);
    }
  };

  skeleton.setDisposeListener = function (listener) {
    this._disposeListener = listener;

    if (this._skeleton) {
      this._skeleton.setDisposeListener(listener);
    }
  };

  skeleton.setCompleteListener = function (listener) {
    this._completeListener = listener;

    if (this._skeleton) {
      this._skeleton.setCompleteListener(listener);
    }
  };

  skeleton.setEventListener = function (listener) {
    this._eventListener = listener;

    if (this._skeleton) {
      this._skeleton.setEventListener(listener);
    }
  };

  skeleton.setTrackStartListener = function (entry, listener) {
    if (this._skeleton) {
      this._skeleton.setTrackStartListener(entry, listener);
    }
  };

  skeleton.setTrackInterruptListener = function (entry, listener) {
    if (this._skeleton) {
      this._skeleton.setTrackInterruptListener(entry, listener);
    }
  };

  skeleton.setTrackEndListener = function (entry, listener) {
    if (this._skeleton) {
      this._skeleton.setTrackEndListener(entry, listener);
    }
  };

  skeleton.setTrackDisposeListener = function (entry, listener) {
    if (this._skeleton) {
      this._skeleton.setTrackDisposeListener(entry, listener);
    }
  };

  skeleton.setTrackCompleteListener = function (entry, listener) {
    if (this._skeleton) {
      this._skeleton.setTrackCompleteListener(entry, listener);
    }
  };

  skeleton.setTrackEventListener = function (entry, listener) {
    if (this._skeleton) {
      this._skeleton.setTrackEventListener(entry, listener);
    }
  };

  skeleton.getState = function () {
    if (this._skeleton) {
      return this._skeleton.getState();
    }
  };

  skeleton._ensureListener = function () {
    cc.warn("sp.Skeleton _ensureListener not need in native");
  };

  skeleton._updateSkeletonData = function () {
    if (this.skeletonData) {
      this.setSkeletonData(this.skeletonData);
      this.defaultSkin && this._skeleton.setSkin(this.defaultSkin);
      this.animation = this.defaultAnimation;
    }
  };

  var _onDestroy = skeleton.onDestroy;

  skeleton.onDestroy = function () {
    _onDestroy.call(this);

    this._skeletonTextures = undefined;

    if (this._skeleton) {
      this._skeleton.stopSchedule();

      this._skeleton._comp = undefined;
      this._skeleton = undefined;
    }

    this._materials = undefined;
  };
})();

},{}],24:[function(require,module,exports){
'use strict'; // Please go to :
// https://github.com/cocos-creator-packages/jsb-adapter/pull/130
// to see more information about function clamp and unpremutAlpha

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _clamp = function _clamp(value) {
  value = Math.round(value);
  return value < 0 ? 0 : value < 255 ? value : 255;
}; // Because the blend factor is modified to SRC_ALPHA, here must perform unpremult alpha.


var _premultAlpha = function _premultAlpha(data, premult) {
  var alpha;

  if (premult) {
    for (var i = 0, len = data._data.length; i < len; i += 4) {
      alpha = data._data[i + 3] / 255;

      if (alpha > 0 && alpha < 255) {
        data._data[i + 0] = clamp(data._data[i + 0] * alpha);
        data._data[i + 1] = clamp(data._data[i + 1] * alpha);
        data._data[i + 2] = clamp(data._data[i + 2] * alpha);
      }
    }
  } else {
    for (var _i = 0, _len = data._data.length; _i < _len; _i += 4) {
      alpha = 255 / data._data[_i + 3];

      if (alpha > 0 && alpha < 255) {
        data._data[_i + 0] = _clamp(data._data[_i + 0] * alpha);
        data._data[_i + 1] = _clamp(data._data[_i + 1] * alpha);
        data._data[_i + 2] = _clamp(data._data[_i + 2] * alpha);
      }
    }
  }
};

var _loop = function _loop() {
  var rt = loadRuntime();

  if (_typeof(rt) != "object") {
    console.error("not runtime platform");
    return "break";
  }

  if ((typeof cc === "undefined" ? "undefined" : _typeof(cc)) !== "object") {
    console.error("can not get cocos creator version");
    return "break";
  } // Judge version，is newer than 2.0.9


  var versionJudge = "2.0.9";
  var engineVersion = cc.ENGINE_VERSION;
  var versionJudgeNum = versionJudge.replace(/[a-zA-Z]/g, function (match, i) {
    return match.charCodeAt();
  }).replace(/[^\d]/g, '') - 0;
  var engineVersionNum = engineVersion.replace(/[a-zA-Z]/g, function (match, i) {
    return match.charCodeAt();
  }).replace(/[^\d]/g, '') - 0;
  var isEngineVersionNew = engineVersionNum >= versionJudgeNum;
  var isRTSupportFeature = typeof rt.getFeature == "function" && typeof rt.setFeature === "function";
  var featureName = "canvas.context2d.premultiply_image_data";
  var shouldPremult = false;

  if (!isEngineVersionNew && !isRTSupportFeature) {
    // old creator old runtime
    return "break";
  }

  if (!isEngineVersionNew) {
    shouldPremult = true;
  }

  if (isRTSupportFeature) {
    rt.setFeature(featureName, shouldPremult);

    if (rt.getFeature(featureName) === shouldPremult) {
      return "break";
    }
  } // set feature fail


  var dataDescriptor = Object.getOwnPropertyDescriptor(HTMLCanvasElement.prototype, "_data");
  var dataGetter = void 0; // get old getter

  if (_typeof(dataDescriptor) === "object") {
    dataGetter = dataDescriptor["get"];
  } // delete old runtime version _data property


  delete HTMLCanvasElement.prototype._data;

  var _newDataGetter = function _newDataGetter() {
    var data;

    if (typeof dataGetter === "function") {
      data = dataGetter.bind(this)();
    } else {
      // old runtime version
      data = this._dataInner;
    }

    if (data === null) {
      return null;
    }

    var premultHandled = data["_premultHandled"];

    if (premultHandled === true) {
      return data;
    }

    _premultAlpha(data, shouldPremult);

    data["_premultHandled"] = true;
    return data;
  };

  Object.defineProperty(HTMLCanvasElement.prototype, "_data", {
    get: _newDataGetter,
    set: function set(params) {
      this._dataInner = params;
    }
  });
};

do {
  var _ret = _loop();

  if (_ret === "break") break;
} while (false);

},{}],25:[function(require,module,exports){
/****************************************************************************
 LICENSING AGREEMENT

 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/
"use strict";

var rt = loadRuntime();

cc.game.restart = function () {
  cc.sys.restartVM();
};

rt.onHide(function () {
  cc.game.emit(cc.game.EVENT_HIDE);
});
rt.onShow(function () {
  cc.game.emit(cc.game.EVENT_SHOW);
});
rt.onWindowResize && rt.onWindowResize(function () {
  // Since the initialization of the creator engine may not take place until after the onWindowResize call,
  // you need to determine whether the canvas already exists before you can call the setCanvasSize method
  cc.game.canvas && cc.view.setCanvasSize(window.innerWidth, window.innerHeight);
});

},{}],26:[function(require,module,exports){
/****************************************************************************
 LICENSING AGREEMENT

 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/
'use strict';

var rt = loadRuntime();
var fs = rt.getFileSystemManager();
jsb.fileUtils = {
  isFileExist: function isFileExist(path) {
    var result = false;

    try {
      fs.accessSync(path);
      result = true;
    } catch (error) {}

    return result;
  },
  getStringFromFile: function getStringFromFile(url) {
    var result;

    try {
      result = fs.readFileSync(url, "utf8");
    } catch (error) {}

    return result;
  },
  getDataFromFile: function getDataFromFile(url) {
    var result;

    try {
      result = fs.readFileSync(url);
    } catch (error) {}

    return result;
  },
  getWritablePath: function getWritablePath() {
    return "".concat(rt.env.USER_DATA_PATH, "/");
  },
  writeToFile: function writeToFile(map, url) {
    var str = JSON.stringify(map);
    var result = false;

    try {
      fs.writeFileSync(url, str, "utf8");
      result = true;
    } catch (error) {}

    return result;
  },
  getValueMapFromFile: function getValueMapFromFile(url) {
    var map_object = {};
    var read;

    try {
      read = fs.readFileSync(url, "utf8");
    } catch (error) {}

    if (!read) {
      return map_object;
    }

    map_object = JSON.parse(read);
    return map_object;
  }
};

if (typeof jsb.saveImageData === 'undefined') {
  jsb.saveImageData = function (data, width, height, filePath) {
    var index = filePath.lastIndexOf(".");

    if (index === -1) {
      return false;
    }

    var fileType = filePath.substr(index + 1);
    var tempFilePath = rt.saveImageTempSync({
      'data': data,
      'width': width,
      'height': height,
      'fileType': fileType
    });

    if (tempFilePath === '') {
      return false;
    }

    var savedFilePath = fs.saveFileSync(tempFilePath, filePath);

    if (savedFilePath === filePath) {
      return true;
    }

    return false;
  };
}

if (typeof jsb.setPreferredFramesPerSecond === 'undefined') {
  if (typeof rt.setPreferredFramesPerSecond !== 'undefined') {
    jsb.setPreferredFramesPerSecond = rt.setPreferredFramesPerSecond;
  } else {
    jsb.setPreferredFramesPerSecond = function () {
      console.error("The jsb.setPreferredFramesPerSecond is not define!");
    };
  }
}

jsb.AudioEngine = rt.AudioEngine;

var _downloaderMap = new WeakMap();

jsb.Downloader = function () {
  _downloaderMap.set(this, {
    _successCb: undefined,
    _errorCb: undefined
  });
};

jsb.Downloader.prototype = {
  constructor: jsb.Downloader,
  setOnFileTaskSuccess: function setOnFileTaskSuccess(cb) {
    _downloaderMap.get(this)["_successCb"] = cb;
  },
  setOnTaskError: function setOnTaskError(cb) {
    _downloaderMap.get(this)["_errorCb"] = cb;
  },
  createDownloadFileTask: function createDownloadFileTask(url, storagePath) {
    var _this = this;

    rt.downloadFile({
      url: url,
      filePath: storagePath,
      success: function success(res) {
        var cb = _downloaderMap.get(_this)["_successCb"];

        if (typeof cb === "function") {
          cb({
            requestURL: url,
            storagePath: storagePath
          });
        }
      },
      fail: function fail(res) {
        var cb = _downloaderMap.get(_this)["_errorCb"];

        if (typeof cb === "function") {
          cb({
            requestURL: url,
            storagePath: storagePath
          }, res.errCode, res.statusCode, res.errMsg);
        }
      },
      complete: function complete() {}
    });
  }
};

},{}],27:[function(require,module,exports){
/****************************************************************************
 LICENSING AGREEMENT

 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/
'use strict';

var sys = cc.sys;

if (typeof loadRuntime === 'function') {
  var rt = loadRuntime();
  sys.getNetworkType = rt.getNetworkType;
  sys.getBatteryLevel = rt.getBatteryLevel;
  sys.garbageCollect = rt.triggerGC;
}

sys.restartVM = function () {
  console.error("The restartVM is not define!");
};

sys.isObjectValid = function () {
  console.error("The sys.isObjectValid is not define!");
};

},{}],28:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
(function () {
  if (typeof loadRuntime === "undefined") {
    return;
  }

  var rt = loadRuntime();

  if (!(cc && cc.VideoPlayer && cc.VideoPlayer.Impl)) {
    return;
  }

  var Mat4 = cc.Mat4;

  var _worldMat = new cc.Mat4();

  var _cameraMat = new cc.Mat4();

  var _impl = cc.VideoPlayer.Impl;
  var _p = cc.VideoPlayer.Impl.prototype;

  cc.VideoPlayer.prototype._updateVideoSource = function _updateVideoSource() {
    var _this = this;

    var clip = this._clip;

    if (this.resourceType === cc.VideoPlayer.ResourceType.REMOTE) {
      this._impl.setURL(this.remoteURL, this._mute || this._volume === 0);
    } else if (clip) {
      if (clip._nativeAsset) {
        this._impl.setURL(clip._nativeAsset, this._mute || this._volume === 0);
      } else {
        // deferred loading video clip
        cc.assetManager.postLoadNative(clip, function (err) {
          if (err) {
            console.error(err.message, err.stack);
            return;
          }

          _this._impl.setURL(clip._nativeAsset, _this._mute || _this._volume === 0);
        });
      }
    }
  };

  _p._bindEvent = function () {
    var video = this._video,
        self = this;

    if (!video) {
      return;
    }

    video.onPlay(function () {
      if (self._video !== video) return;
      self._playing = true;

      self._dispatchEvent(_impl.EventType.PLAYING);
    });
    video.onEnded(function () {
      if (self._video !== video) return;
      self._playing = false;
      self._currentTime = self._duration; // ensure currentTime is at the end of duration

      self._dispatchEvent(_impl.EventType.COMPLETED);
    });
    video.onPause(function () {
      if (self._video !== video) return;
      self._playing = false;

      self._dispatchEvent(_impl.EventType.PAUSED);
    });
    video.onTimeUpdate(function (res) {
      var data = JSON.parse(res.position);

      if (_typeof(data) === "object") {
        self._duration = data.duration;
        self._currentTime = data.position;
        return;
      }

      self._duration = res.duration;
      self._currentTime = res.position;
    }); // onStop not supported
  };

  _p._unbindEvent = function () {
    var video = this._video;

    if (!video) {
      return;
    } // BUG: video.offPlay(cb) is invalid


    video.offPlay();
    video.offEnded();
    video.offPause();
    video.offTimeUpdate(); // offStop not supported
  };

  _p.setVisible = function (value) {
    var video = this._video;

    if (!video) {
      return;
    }

    if (value) {
      video.width = this._actualWidth || 0;
    } else {
      video.width = 0; // hide video
    }

    this._visible = value;
  };

  _p.createDomElementIfNeeded = function () {
    if (!rt.createVideo) {
      cc.warn('VideoPlayer not supported');
      return;
    }
  };

  _p.setURL = function (path, _mute) {
    var video = this._video;

    if (video && video.src === path) {
      return;
    }

    if (!this._tx) {
      return;
    }

    if (this._video) {
      this.destroy();
      this._video = null;
    }

    var videoUrl;

    if (typeof path !== 'string') {
      videoUrl = path._audio;
    } else {
      videoUrl = path;
    }

    this._duration = -1;
    this._currentTime = -1;
    this._video = rt.createVideo({
      x: this._tx,
      y: this._ty,
      width: this._width,
      height: this._height,
      src: videoUrl,
      objectFit: "contain",
      live: false
    });
    video = this._video;
    video.src = videoUrl;
    video.muted = true;
    var self = this;
    this._loaded = false;

    var loadedCallback = function loadedCallback() {
      video.offPlay(loadedCallback);
      video.offTimeUpdate(timeCallBack);
      self.enable();

      self._bindEvent();

      video.stop();
      video.muted = false;
      self._loaded = true;
      self._playing = false;
      self._currentTime = 0;

      self._dispatchEvent(_impl.EventType.READY_TO_PLAY);
    };

    var timeCallBack = function timeCallBack(res) {
      var data = JSON.parse(res.position);

      if (_typeof(data) === "object") {
        self._duration = data.duration;
        self._currentTime = data.position;
        return;
      }

      self._duration = res.duration;
      self._currentTime = res.position;
    };

    video.onPlay(loadedCallback);
    video.onTimeUpdate(timeCallBack); // HACK: keep playing till video loaded

    video.play();
  };

  _p.getURL = function () {
    var video = this._video;

    if (!video) {
      return '';
    }

    return video.src;
  };

  _p.play = function () {
    var video = this._video;
    if (!video || !this._visible || this._playing) return;
    video.play();
  };

  _p.setStayOnBottom = function (enabled) {};

  _p.pause = function () {
    var video = this._video;
    if (!this._playing || !video) return;
    video.pause();
  };

  _p.resume = function () {
    var video = this._video;
    if (this._playing || !video) return;
    video.play();
  };

  _p.stop = function () {
    var video = this._video;
    if (!video || !this._visible) return;
    video.stop();

    this._dispatchEvent(_impl.EventType.STOPPED);

    this._playing = false;
  };

  _p.setVolume = function (volume) {// wx not support setting video volume
  };

  _p.seekTo = function (time) {
    var video = this._video;
    if (!video || !this._loaded) return;
    video.seek(time);
  };

  _p.isPlaying = function () {
    return this._playing;
  };

  _p.duration = function () {
    return this._duration;
  };

  _p.currentTime = function () {
    if (!this._currentTime) {
      return -1;
    }

    return this._currentTime;
  };

  _p.setKeepAspectRatioEnabled = function (isEnabled) {
    cc.log('On wechat game is always keep the aspect ratio');
  };

  _p.isKeepAspectRatioEnabled = function () {
    return true;
  };

  _p.isFullScreenEnabled = function () {
    return this._fullScreenEnabled;
  };

  _p.setFullScreenEnabled = function (enable) {
    var video = this._video;

    if (!video || this._fullScreenEnabled === enable) {
      return;
    }

    if (enable) {
      video.requestFullScreen();
    } else {
      video.exitFullScreen();
    }

    this._fullScreenEnabled = enable;
  };

  _p.enable = function () {
    this.setVisible(true);
  };

  _p.disable = function () {
    this.setVisible(false);
  };

  _p.destroy = function () {
    this.disable();

    this._unbindEvent();

    this.stop();

    if (this._video) {
      this._video.destroy();

      this._video = undefined;
    }

    rt.triggerGC();
  };

  _p.updateMatrix = function (node) {
    node.getWorldMatrix(_worldMat);

    if (this._m00 === _worldMat.m[0] && this._m01 === _worldMat.m[1] && this._m04 === _worldMat.m[4] && this._m05 === _worldMat.m[5] && this._m12 === _worldMat.m[12] && this._m13 === _worldMat.m[13] && this._w === node._contentSize.width && this._h === node._contentSize.height) {
      return;
    } // update matrix cache


    this._m00 = _worldMat.m[0];
    this._m01 = _worldMat.m[1];
    this._m04 = _worldMat.m[4];
    this._m05 = _worldMat.m[5];
    this._m12 = _worldMat.m[12];
    this._m13 = _worldMat.m[13];
    this._w = node._contentSize.width;
    this._h = node._contentSize.height;
    var camera = cc.Camera.findCamera(node);
    camera.getWorldToScreenMatrix2D(_cameraMat);
    Mat4.multiply(_cameraMat, _cameraMat, _worldMat);
    var viewScaleX = cc.view._scaleX,
        viewScaleY = cc.view._scaleY;
    var dpr = cc.view._devicePixelRatio;
    viewScaleX /= dpr;
    viewScaleY /= dpr;
    var finalScaleX = _cameraMat.m[0] * viewScaleX,
        finalScaleY = _cameraMat.m[5] * viewScaleY;
    var finalWidth = this._w * finalScaleX,
        finalHeight = this._h * finalScaleY;
    var appx = finalWidth * node._anchorPoint.x;
    var appy = finalHeight * node._anchorPoint.y;
    var viewport = cc.view._viewportRect;
    var offsetX = viewport.x / dpr,
        offsetY = viewport.y / dpr;
    var tx = _cameraMat.m[12] * viewScaleX - appx + offsetX,
        ty = _cameraMat.m[13] * viewScaleY - appy + offsetY;
    var height = cc.view.getFrameSize().height;
    this._tx = tx;
    this._ty = ty;
    this._width = finalWidth; //w;

    this._height = finalHeight; //h;

    if (this._video) {
      this._video.x = tx;
      this._video.y = height - finalHeight - ty;
      this._video.width = finalWidth;
      this._video.height = finalHeight;
    }

    this._actualWidth = finalWidth;
  };
})();

},{}],29:[function(require,module,exports){
/****************************************************************************
 LICENSING AGREEMENT

 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/
"use strict";

var rt = loadRuntime();
jsb.inputBox = {
  onConfirm: function onConfirm(cb) {
    rt.onKeyboardConfirm(cb);
  },
  offConfirm: function offConfirm(cb) {
    rt.offKeyboardConfirm(cb);
  },
  onComplete: function onComplete(cb) {
    rt.onKeyboardComplete(cb);
  },
  offComplete: function offComplete(cb) {
    rt.offKeyboardComplete(cb);
  },
  onInput: function onInput(cb) {
    rt.onKeyboardInput(cb);
  },
  offInput: function offInput(cb) {
    rt.offKeyboardInput(cb);
  },

  /**
   * @param {string}		options.defaultValue
   * @param {number}		options.maxLength
   * @param {bool}        options.multiple
   * @param {bool}        options.confirmHold
   * @param {string}      options.confirmType
   * @param {string}      options.inputType
   * 
   * Values of options.confirmType can be [done|next|search|go|send].
   * Values of options.inputType can be [text|email|number|phone|password].
   */
  show: function show(options) {
    rt.showKeyboard(options);
  },
  hide: function hide() {
    rt.hideKeyboard();
  }
};

},{}],30:[function(require,module,exports){
"use strict";
/****************************************************************************
 LICENSING AGREEMENT
 
 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/

var nativeCameraProto = renderer.Camera.prototype;
var _setNode = nativeCameraProto.setNode;
cc.js.mixin(nativeCameraProto, {
  setNode: function setNode(node) {
    this._persistentNode = node;

    _setNode.call(this, node);
  }
});

},{}],31:[function(require,module,exports){
/****************************************************************************
 LICENSING AGREEMENT
 
 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/
"use strict";

cc.js.mixin(renderer.CustomRenderHandle.prototype, {
  _ctor: function _ctor() {
    this._comp = null;
  },
  destroy: function destroy() {
    this._comp = null;
  },
  bind: function bind(component) {
    if (this._comp !== component && component instanceof cc.RenderComponent) {
      this._comp = component;

      if (component._assembler) {
        this.setUseModel(!!component._assembler.useModel);
      }
    }
  },
  updateEnabled: function updateEnabled(enabled) {
    if (enabled) {
      if (!this._enabled) {
        this._enabled = true;
        this.enable();
        var node = this._comp.node;

        if (node) {
          node._proxy.addHandle("render", this);
        }
      }
    } else {
      if (this._enabled) {
        this._enabled = false;
        this.disable();
        var _node = this._comp.node;

        if (_node) {
          _node._proxy.removeHandle("render");
        }
      }
    }
  }
});

},{}],32:[function(require,module,exports){
/****************************************************************************
 LICENSING AGREEMENT
 
 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/
"use strict";

cc.js.mixin(renderer.GraphicsRenderHandle.prototype, {
  _ctor: function _ctor() {
    this.vDatas = [];
    this.uintVDatas = [];
    this.iDatas = [];
    this.effects = [];
    this.meshCount = 0;
    this._material = null;
    this._delayed = false;
    this._comp = null;
  },
  destroy: function destroy() {
    this._comp = null;
  },
  bind: function bind(component) {
    if (this._comp !== component && component instanceof cc.RenderComponent) {
      this._comp = component;

      if (component._assembler) {
        this.setUseModel(!!component._assembler.useModel);
      }
    }
  },
  updateEnabled: function updateEnabled(enabled) {
    var node = this._comp.node;

    if (enabled) {
      this.enable();

      if (node) {
        node._proxy.addHandle("render", this);
      }
    } else {
      this.disable();

      if (node) {
        node._proxy.removeHandle("render");
      }
    }
  },
  reserveMeshCount: function reserveMeshCount(count) {
    if (this.meshCount < count) {
      this.vDatas.length = count;
      this.uintVDatas.length = count;
      this.iDatas.length = count;
      this.effects.length = count;
      this.setMeshCount(count);
    }
  },
  updateMesh: function updateMesh(index, vertices, indices) {
    this.reserveMeshCount(index + 1);
    this.vDatas[index] = vertices;
    this.uintVDatas[index] = new Uint32Array(vertices.buffer, 0, vertices.length);
    this.iDatas[index] = indices;
    this.meshCount = this.vDatas.length;
    this.updateNativeMesh(index, vertices, indices);
  },
  updateMaterial: function updateMaterial(index, material) {
    this.reserveMeshCount(index + 1);
    var oldEffect = this.effects[index];
    var newEffect;

    if (material) {
      newEffect = this.effects[index] = material.effect;
    } else {
      newEffect = this.effects[index] = null;
    }

    if (newEffect !== oldEffect) {
      this.updateNativeEffect(index, newEffect ? newEffect._nativeObj : null);
    }
  },
  updateRenderData: function updateRenderData() {
    if (this._comp && this._comp._assembler) {
      this._comp._assembler.updateRenderData(this._comp);

      this._delayed = false;
    }
  },
  updateIAData: function updateIAData(index, start, count) {
    this.updateIA(index, start, count);
  },
  clear: function clear() {
    this.vDatas = [];
    this.uintVDatas = [];
    this.iDatas = [];
    this.effects = [];
    this.meshCount = 0;
    this.reset();
  }
});

},{}],33:[function(require,module,exports){
/****************************************************************************
 LICENSING AGREEMENT
 
 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/
"use strict";

cc.js.mixin(renderer.MaskRenderHandle.prototype, {
  setNativeRenderHandle: function setNativeRenderHandle(handle) {
    if (handle) {
      this.setRenderSubHandle(handle);
    }
  },
  setNativeClearHandle: function setNativeClearHandle(handle) {
    if (handle) {
      this.setClearSubHandle(handle);
    }
  },
  useImageStencil: function useImageStencil(type) {
    this.setImageStencil(type);
  }
});

},{}],34:[function(require,module,exports){
"use strict";

/****************************************************************************
 LICENSING AGREEMENT
 
 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/
cc.js.mixin(renderer.NodeProxy.prototype, {
  _ctor: function _ctor() {
    this._owner = null;
  },
  bind: function bind(owner) {
    if (this._owner) {
      this.unbind();
    }

    this._owner = owner;

    if (owner) {
      owner._proxy = this;
      this.update3DNode();
      this.updateZOrder();
      this.updateCullingMask();
      this.updateJSTRS(owner._trs);

      if (owner._parent && owner._parent._proxy) {
        this.updateParent(owner._parent._proxy);
      }

      owner.on(cc.Node.EventType.SIBLING_ORDER_CHANGED, this.updateZOrder, this);
      owner.on(cc.Node.EventType.GROUP_CHANGED, this.updateCullingMask, this);
    }
  },
  unbind: function unbind() {
    this._owner.off(cc.Node.EventType.SIBLING_ORDER_CHANGED, this.updateZOrder, this);

    this._owner.off(cc.Node.EventType.GROUP_CHANGED, this.updateCullingMask, this);

    this._owner._proxy = null;
    this._owner = null;
    this.reset();
  },
  updateParent: function updateParent(parentProxy) {
    // detach from old parent
    var oldParent = this.getParent();

    if (oldParent) {
      oldParent.removeChild(this);
    } // attach to new parent


    parentProxy.addChild(this);
  },
  updateZOrder: function updateZOrder() {
    this.setLocalZOrder(this._owner._localZOrder);
  },
  updateCullingMask: function updateCullingMask() {
    this.setCullingMask(this._owner._cullingMask);
  },
  updateOpacity: function updateOpacity() {
    this.setOpacity(this._owner.opacity);
  },
  update3DNode: function update3DNode() {
    this.set3DNode(this._owner.is3DNode);
  }
});

},{}],35:[function(require,module,exports){
/****************************************************************************
 LICENSING AGREEMENT
 
 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/
'use strict';

var RenderFlow = cc.RenderFlow;
var LOCAL_TRANSFORM = RenderFlow.FLAG_LOCAL_TRANSFORM;
var COLOR = RenderFlow.FLAG_COLOR;
var OPACITY = RenderFlow.FLAG_OPACITY;
var UPDATE_RENDER_DATA = RenderFlow.FLAG_UPDATE_RENDER_DATA;
var CUSTOM_IA_RENDER = RenderFlow.FLAG_CUSTOM_IA_RENDER;
var POSITION_ON = 1 << 0;
cc.js.getset(cc.Node.prototype, "_renderFlag", function () {
  return 0;
}, function (flag) {
  if (flag === 0) return;
  var comp = this._renderComponent;
  var assembler = comp && comp._assembler;

  if ((flag & UPDATE_RENDER_DATA || flag & CUSTOM_IA_RENDER) && assembler) {
    if (assembler.delayUpdateRenderData) {
      comp._renderHandle.delayUpdateRenderData();
    } else {
      assembler.updateRenderData(comp);
    }
  }

  if (flag & COLOR) {
    // Update uniform
    comp && comp._updateColor();

    if (assembler) {
      // Update vertex
      assembler.updateColor(comp, this._color._val);
    }
  }
});

cc.PrivateNode.prototype._posDirty = function (sendEvent) {
  var parent = this.parent;

  if (parent) {
    // Position correction for transform calculation
    this._trs[1] = this._originPos.x - (parent._anchorPoint.x - 0.5) * parent._contentSize.width;
    this._trs[2] = this._originPos.y - (parent._anchorPoint.y - 0.5) * parent._contentSize.height;
  }

  this.setLocalDirty(cc.Node._LocalDirtyFlag.POSITION);

  if (sendEvent === true && this._eventMask & POSITION_ON) {
    this.emit(cc.Node.EventType.POSITION_CHANGED);
  }
};

},{}],36:[function(require,module,exports){
"use strict";
/****************************************************************************
 LICENSING AGREEMENT
 
 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/

var DONOTHING = 0;
var RENDER = 0;
var CUSTOM_IA_RENDER = 0;
var POST_RENDER = 0;
var LOCAL_TRANSFORM = 1 << 0;
var WORLD_TRANSFORM = 1 << 0;
var TRANSFORM = LOCAL_TRANSFORM | WORLD_TRANSFORM;
var UPDATE_RENDER_DATA = 1 << 1;
var OPACITY = 1 << 2;
var COLOR = 1 << 3;
var CHILDREN = 1 << 4;
var POST_UPDATE_RENDER_DATA = 1 << 5;
var FINAL = 1 << 6;
var INV_LOCAL_TRANSFORM = ~LOCAL_TRANSFORM;
var INV_UPDATE_RENDER_DATA = ~UPDATE_RENDER_DATA;
var INV_OPACITY = ~OPACITY;
var INV_COLOR = ~COLOR;
var RenderFlow = cc.RenderFlow;
RenderFlow.EventType = {
  BEFORE_RENDER: 'before-render'
};
cc.js.mixin(RenderFlow, cc.EventTarget.prototype);
var middlewareMgr = middleware.MiddlewareManager.getInstance();
var director = cc.director;

RenderFlow.render = function (scene) {
  this.emit(this.EventType.BEFORE_RENDER);
  middlewareMgr && middlewareMgr.update(director._deltaTime);

  this._nativeFlow.render(scene._proxy);
};

RenderFlow.init = function (nativeFlow) {
  cc.EventTarget.call(this);
  this._nativeFlow = nativeFlow;
};

RenderFlow.FLAG_DONOTHING = DONOTHING;
RenderFlow.FLAG_LOCAL_TRANSFORM = LOCAL_TRANSFORM;
RenderFlow.FLAG_WORLD_TRANSFORM = WORLD_TRANSFORM;
RenderFlow.FLAG_TRANSFORM = TRANSFORM;
RenderFlow.FLAG_COLOR = COLOR;
RenderFlow.FLAG_OPACITY = OPACITY;
RenderFlow.FLAG_UPDATE_RENDER_DATA = UPDATE_RENDER_DATA;
RenderFlow.FLAG_RENDER = RENDER;
RenderFlow.FLAG_CUSTOM_IA_RENDER = CUSTOM_IA_RENDER;
RenderFlow.FLAG_CHILDREN = CHILDREN;
RenderFlow.FLAG_POST_UPDATE_RENDER_DATA = POST_UPDATE_RENDER_DATA;
RenderFlow.FLAG_POST_RENDER = POST_RENDER;
RenderFlow.FLAG_FINAL = FINAL;

},{}],37:[function(require,module,exports){
"use strict";

/****************************************************************************
 LICENSING AGREEMENT
 
 Xiamen Yaji Software Co., Ltd., (the “Licensor”) grants the user (the “Licensee”) non-exclusive and non-transferable rights to use the software according to the following conditions:
 a.  The Licensee shall pay royalties to the Licensor, and the amount of those royalties and the payment method are subject to separate negotiations between the parties.
 b.  The software is licensed for use rather than sold, and the Licensor reserves all rights over the software that are not expressly granted (whether by implication, reservation or prohibition).
 c.  The open source codes contained in the software are subject to the MIT Open Source Licensing Agreement (see the attached for the details);
 d.  The Licensee acknowledges and consents to the possibility that errors may occur during the operation of the software for one or more technical reasons, and the Licensee shall take precautions and prepare remedies for such events. In such circumstance, the Licensor shall provide software patches or updates according to the agreement between the two parties. The Licensor will not assume any liability beyond the explicit wording of this Licensing Agreement.
 e.  Where the Licensor must assume liability for the software according to relevant laws, the Licensor’s entire liability is limited to the annual royalty payable by the Licensee.
 f.  The Licensor owns the portions listed in the root directory and subdirectory (if any) in the software and enjoys the intellectual property rights over those portions. As for the portions owned by the Licensor, the Licensee shall not:
 - i. Bypass or avoid any relevant technical protection measures in the products or services;
 - ii. Release the source codes to any other parties;
 - iii. Disassemble, decompile, decipher, attack, emulate, exploit or reverse-engineer these portion of code;
 - iv. Apply it to any third-party products or services without Licensor’s permission;
 - v. Publish, copy, rent, lease, sell, export, import, distribute or lend any products containing these portions of code;
 - vi. Allow others to use any services relevant to the technology of these codes;
 - vii. Conduct any other act beyond the scope of this Licensing Agreement.
 g.  This Licensing Agreement terminates immediately if the Licensee breaches this Agreement. The Licensor may claim compensation from the Licensee where the Licensee’s breach causes any damage to the Licensor.
 h.  The laws of the People's Republic of China apply to this Licensing Agreement.
 i.  This Agreement is made in both Chinese and English, and the Chinese version shall prevail the event of conflict.
 ****************************************************************************/
var RenderFlow = cc.RenderFlow;
var BEFORE_RENDER = RenderFlow.EventType.BEFORE_RENDER;
cc.js.mixin(renderer.RenderHandle.prototype, {
  _ctor: function _ctor() {
    this.vDatas = [];
    this.uintVDatas = [];
    this.iDatas = [];
    this.effects = [];
    this.meshCount = 0;
    this._material = null;
    this._delayed = false;
    this._comp = null;
  },
  destroy: function destroy() {
    RenderFlow.off(BEFORE_RENDER, this.updateRenderData, this);
    this._comp = null;
  },
  bind: function bind(component) {
    if (this._comp !== component && component instanceof cc.RenderComponent) {
      this._comp = component;

      if (component._assembler) {
        this.setUseModel(!!component._assembler.useModel);
      }

      if (component._vertexFormat) {
        this.setVertexFormat(component._vertexFormat._nativeObj);
      }
    }
  },
  reserveMeshCount: function reserveMeshCount(count) {
    if (this.meshCount < count) {
      this.vDatas.length = count;
      this.uintVDatas.length = count;
      this.iDatas.length = count;
      this.effects.length = count;
      this.setMeshCount(count);
    }
  },
  updateMesh: function updateMesh(index, vertices, indices) {
    this.reserveMeshCount(index + 1);
    this.vDatas[index] = vertices;
    this.uintVDatas[index] = new Uint32Array(vertices.buffer, 0, vertices.length);
    this.iDatas[index] = indices;
    this.meshCount = this.vDatas.length;
    this.updateNativeMesh(index, vertices, indices);
  },
  updateMaterial: function updateMaterial(index, material) {
    this.reserveMeshCount(index + 1);
    var oldEffect = this.effects[index];
    var newEffect;

    if (material) {
      newEffect = this.effects[index] = material.effect;
    } else {
      newEffect = this.effects[index] = null;
    }

    if (newEffect !== oldEffect) {
      this.updateNativeEffect(index, newEffect ? newEffect._nativeObj : null);
    }
  },
  updateEnabled: function updateEnabled(enabled) {
    if (enabled) {
      if (!this._enabled) {
        this._enabled = true;
        this.enable();
        var node = this._comp.node;

        if (node) {
          node._proxy.addHandle("render", this);
        }
      }
    } else {
      if (this._enabled) {
        this._enabled = false;
        this.disable();
        var _node = this._comp.node;

        if (_node) {
          _node._proxy.removeHandle("render");
        }
      }
    }
  },
  delayUpdateRenderData: function delayUpdateRenderData() {
    if (this._comp) {
      RenderFlow.on(BEFORE_RENDER, this.updateRenderData, this);
      this._delayed = true;
    }
  },
  updateRenderData: function updateRenderData() {
    if (this._comp && this._comp._assembler) {
      this._comp._assembler.updateRenderData(this._comp);

      this._delayed = false;
    }
  }
});

},{}]},{},[17]);
