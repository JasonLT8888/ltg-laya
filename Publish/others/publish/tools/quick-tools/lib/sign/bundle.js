/*
 * Copyright (C) 2017, hapjs.org. All rights reserved.
 */

'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _signature = require('./signature');

var _signature2 = _interopRequireDefault(_signature);

var _jsrsasign = require('jsrsasign');

var _jsrsasign2 = _interopRequireDefault(_jsrsasign);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 加签名zip文件
 * @param filepath
 * @param prikey
 * @param pubkey
 * @param output
 */
function signZip(options, prikey, certpem, output) {
  var cert = Buffer.from(_signature2.default.Base64.unarmor(certpem));
  var c = new _jsrsasign2.default.X509();
  c.readCertPEM(certpem.toString());
  var pubkey = _jsrsasign2.default.KEYUTIL.getPEM(c.subjectPublicKeyRSA);

  // 读取zip文件
  var fileBuf = _fs2.default.readFileSync(options.zip);
  if (!fileBuf || fileBuf.length <= 4) {
    _utils.colorconsole.error('### App Loader ### Zip文件打开失败:', options.zip);
    return false;
  }

  // 检查文件类型是否正确
  var filemagic = fileBuf.readInt32LE(0);
  if (filemagic.toString(16).toLowerCase() !== '4034b50') {
    _utils.colorconsole.error('### App Loader ### Zip文件格式错误:', options.zip);
    return false;
  }

  // 解析数据块
  var chunks = parserZip(fileBuf);
  // 加入文件列表hash
  chunks.options = options;

  if (chunks.tag) {
    // 解析成功, 生成签名块
    // 分别处理3个块签名
    (0, _keys2.default)(chunks.sections).forEach(function (item) {
      var chunk = chunks.sections[item];
      processChunk(fileBuf, chunk, prikey);
    });

    // 生成整体签名
    signChunk(chunks, prikey, pubkey, cert);

    // 重新写入zip文件, 如果没有提供output, 则生成缺省文件
    if (!output) {
      output = makeSignFile(options.zip);
    }
    saveChunk(fileBuf, chunks, output);
  }

  return true;
}

/**
 * 解析Zip, 分解数据块
 * @param buf
 * @param tag
 */
function parserZip(buf) {
  var chunk = {
    tag: false,
    length: buf.length,
    sections: {
      header: null,
      central: null,
      footer: null
    }
  };

  chunk.sections.footer = readEOCD(buf); // 至少22个字节
  if (chunk.sections.footer.tag) {
    chunk.sections.central = readCD(buf, chunk.sections.footer.previous, chunk.sections.footer.startIndex - chunk.sections.footer.previous);
    if (chunk.sections.central.tag) {
      chunk.sections.header = readFH(buf, chunk.sections.central.previous, chunk.sections.central.startIndex - chunk.sections.central.previous);
      if (chunk.sections.header.tag) {
        chunk.tag = true;
      }
    }
  }

  return chunk;
}

/**
 * 从后往前读取
 * @param buf
 * @param tag  结束标签
 * @param offset  起始位置(不包括该位置), -1表示末尾
 */
function readEOCD(buf) {
  var chunk = {
    tag: false
  };

  if (buf && buf.length >= 22) {
    var offset = buf.length - 22;
    var tag = void 0;
    // 从开始位置往前单个字节读取, 检查
    while (offset >= 0) {
      tag = buf.readInt32LE(offset);
      if (tag.toString(16).toLowerCase() === '6054b50') {
        // 如果找到起始位置
        chunk.tag = true;
        chunk.startIndex = offset;
        chunk.len = buf.length - offset;
        chunk.previous = buf.readInt32LE(offset + 16);
        break;
      }
      offset -= 1;
    }
  }
  return chunk;
}

/**
 * 从后往前读取
 * @param buf
 * @param tag  结束标签
 * @param offset  起始位置(不包括该位置), -1表示末尾
 */
function readCD(buf, offset, size) {
  var chunk = {
    tag: false
  };

  if (buf && buf.length >= offset) {
    var tag = buf.readInt32LE(offset);
    if (tag.toString(16).toLowerCase() === '2014b50') {
      // 如果找到起始位置
      chunk.tag = true;
      chunk.startIndex = offset;
      chunk.len = size;
      chunk.previous = buf.readInt32LE(offset + 42);
    }
  }
  return chunk;
}

/**
 * 从后往前读取
 * @param buf
 * @param tag  结束标签
 * @param offset  起始位置(不包括该位置), -1表示末尾
 */
function readFH(buf, offset, size) {
  var chunk = {
    tag: false
  };

  if (buf && buf.length >= offset) {
    var tag = buf.readInt32LE(offset);
    if (tag.toString(16).toLowerCase() === '4034b50') {
      // 如果找到起始位置
      chunk.tag = true;
      chunk.startIndex = offset;
      chunk.len = size;
      chunk.previous = -1;
    }
  }
  return chunk;
}

/**
 * 数据块hash
 * @param buf
 * @param chunk
 */
function processChunk(buf, chunk, prikey) {
  // 存储每个块的摘要
  var cur = chunk.startIndex;
  var end = chunk.startIndex + chunk.len;
  var chk = buf.slice(cur, end);
  var header = Buffer.alloc(5 + chunk.len);
  header[0] = 0xa5;
  header.writeInt32LE(chk.length, 1);
  chk.copy(header, 5);

  var signer = _crypto2.default.createHash('SHA256');
  signer.update(header);
  chunk.sign = signer.digest();
}

/**
 * 文件hash
 */
function hashFile(file, fs) {
  var chk = fs.readFileSync(file);
  var signer = _crypto2.default.createHash('SHA256');
  signer.update(chk);
  return signer.digest();
}

/**
 * 对整个chunk签名
 * @param chunks
 */
function signChunk(chunks, prikey, pubkey, cert) {
  var sections = chunks.sections;

  // 二进制拼接每个块摘要
  var length = sections.header.sign.length + sections.central.sign.length + sections.footer.sign.length + 5;
  var wholedata = Buffer.alloc(length);
  var offset = 0;
  wholedata.writeInt8(0x5a, 0);
  wholedata.writeInt32LE(3, 1);
  offset += 5;

  function writeBuffer(buf) {
    buf.copy(wholedata, offset);
    offset += buf.length;
  }

  writeBuffer(sections.header.sign);
  writeBuffer(sections.central.sign);
  writeBuffer(sections.footer.sign);

  // 计算整体摘要
  var signer = _crypto2.default.createHash('SHA256');
  signer.update(wholedata);
  var signature = signer.digest();

  // 生成sign block, 计算block总长度, 向buf中考入数据
  var signchunk = makeSignChunk(chunks.options, signature, prikey, pubkey, cert);
  chunks.signchunk = saveSignChunk(signchunk);
}

/**
 *
 * @param file
 */
function makeSignChunk(options, sign, prikey, pubkey, cert) {
  // 摘要块
  var digestBuf = Buffer.alloc(sign.length + 12);
  digestBuf.writeInt32LE(sign.length + 8, 0);
  digestBuf.writeInt32LE(0x0103, 4);
  digestBuf.writeInt32LE(sign.length, 8);
  sign.copy(digestBuf, 12);
  var digestBlock = {
    len: digestBuf.length,
    buffer: digestBuf

    // 证书块
  };var certBuf = Buffer.alloc(cert.length + 4);
  certBuf.writeInt32LE(cert.length, 0);
  cert.copy(certBuf, 4);
  var certBlock = {
    len: certBuf.length,
    buffer: certBuf

    // 签名数据
  };var signdataBlock = {
    len: 12,
    digests: {
      size: 0,
      data: []
    },
    certs: {
      size: 0,
      data: []
    },
    additional: 0
  };
  signdataBlock.digests.data.push(digestBlock);
  signdataBlock.digests.size += digestBlock.len;
  signdataBlock.len += digestBlock.len;

  signdataBlock.certs.data.push(certBlock);
  signdataBlock.certs.size += certBlock.len;
  signdataBlock.len += certBlock.len;

  // 将public.pem转化为der
  var pubbuf = Buffer.from(_signature2.default.Base64.unarmor(pubkey));
  var signBlock = {
    len: 16 + pubbuf.length,
    size: 12 + pubbuf.length,
    signdata: {
      size: 0,
      buffer: null
    },
    signatures: {
      size: 0,
      data: []
    },
    pubkey: {
      size: pubbuf.length,
      buffer: pubbuf
    }
  };

  signBlock.signdata.buffer = makeSignDataBuffer(signdataBlock);
  signBlock.signdata.size = signdataBlock.len;
  signBlock.size += signdataBlock.len;
  signBlock.len += signdataBlock.len;

  // 生成签名
  var signer = _crypto2.default.createSign('RSA-SHA256');
  signer.update(signBlock.signdata.buffer);
  var signature = signer.sign(prikey);
  var signatureBlock = {
    len: signature.length + 12,
    size: signature.length + 8,
    id: 0x0103,
    buffer: signature
  };

  signBlock.signatures.data.push(signatureBlock);
  signBlock.signatures.size += signatureBlock.len;
  signBlock.size += signatureBlock.len;
  signBlock.len += signatureBlock.len;

  var signBlocks = {
    len: 4,
    size: 0,
    data: []
  };
  signBlocks.data.push(signBlock);
  signBlocks.size += signBlock.len;
  signBlocks.len += signBlock.len;

  // 生成key-value
  var kvBlock = {
    len: signBlocks.len + 12,
    size: signBlocks.len + 4,
    id: 0x01000101,
    value: signBlocks
  };

  var signchunk = {
    len: 32,
    size: 24,
    data: []
  };
  signchunk.data.push(kvBlock);
  signchunk.size += kvBlock.len;
  signchunk.len += kvBlock.len;

  // 添加文件列表hash kvblock
  if (options.files) {
    var filehashChunk = signFiles(options.files, prikey);
    if (filehashChunk) {
      var filesignBlocks = {
        len: 4,
        size: 0,
        data: []
      };
      filesignBlocks.data.push(filehashChunk);
      filesignBlocks.size += filehashChunk.length;
      filesignBlocks.len += filehashChunk.length;

      var filekvBlock = {
        len: filesignBlocks.len + 12,
        size: filesignBlocks.len + 4,
        id: 0x01000201,
        value: filesignBlocks
      };

      signchunk.data.push(filekvBlock);
      signchunk.size += filekvBlock.len;
      signchunk.len += filekvBlock.len;
    }
  }

  return signchunk;
}

/**
 *
 * @param block
 */
function makeSignDataBuffer(block) {
  var buffer = Buffer.alloc(block.len);
  var offset = 0;

  buffer.writeInt32LE(block.digests.size, offset);
  offset += 4;
  block.digests.data.forEach(function (item) {
    item.buffer.copy(buffer, offset);
    offset += item.len;
  });

  buffer.writeInt32LE(block.certs.size, offset);
  offset += 4;
  block.certs.data.forEach(function (item) {
    item.buffer.copy(buffer, offset);
    offset += item.len;
  });

  buffer.writeInt32LE(block.additional, offset);
  return buffer;
}

/**
 *
 * @param file
 */
var SigMagic = 'RPK Sig Block 42';
function saveSignChunk(signchunk) {
  var buffer = Buffer.alloc(signchunk.len);
  var offset = 0;

  // 大小
  buffer.writeInt32LE(signchunk.size, offset);
  offset += 4;
  buffer.writeInt32LE(0, offset);
  offset += 4;

  // key-value
  signchunk.data.forEach(function (kv) {
    buffer.writeInt32LE(kv.size, offset);
    offset += 4;
    buffer.writeInt32LE(0, offset);
    offset += 4;

    buffer.writeInt32LE(kv.id, offset);
    offset += 4;

    // value
    buffer.writeInt32LE(kv.value.size, offset);
    offset += 4;

    if (kv.id === 0x01000101) {
      // sign blocks
      kv.value.data.forEach(function (block) {
        buffer.writeInt32LE(block.size, offset);
        offset += 4;

        // signdata
        buffer.writeInt32LE(block.signdata.size, offset);
        offset += 4;

        block.signdata.buffer.copy(buffer, offset);
        offset += block.signdata.buffer.length;

        // signature
        buffer.writeInt32LE(block.signatures.size, offset);
        offset += 4;

        block.signatures.data.forEach(function (signature) {
          buffer.writeInt32LE(signature.size, offset);
          offset += 4;

          buffer.writeInt32LE(signature.id, offset);
          offset += 4;

          buffer.writeInt32LE(signature.buffer.length, offset);
          offset += 4;

          signature.buffer.copy(buffer, offset);
          offset += signature.buffer.length;
        });

        // pubkey
        buffer.writeInt32LE(block.pubkey.size, offset);
        offset += 4;
        block.pubkey.buffer.copy(buffer, offset);
        offset += block.pubkey.buffer.length;
      });
    } else if (kv.id === 0x01000201) {
      // files blocks
      kv.value.data.forEach(function (block) {
        block.copy(buffer, offset);
        offset += block.length;
      });
    }
  });

  // 大小
  buffer.writeInt32LE(signchunk.size, offset);
  offset += 4;
  buffer.writeInt32LE(0, offset);
  offset += 4;

  // 魔法值
  var magic = Buffer.from(SigMagic);
  magic.copy(buffer, offset);
  return buffer;
}

/**
 *
 * @param file
 */
function makeSignFile(filepath) {
  // 提取文件名
  var extname = _path2.default.extname(filepath);
  var dir = _path2.default.dirname(filepath);
  var basename = _path2.default.basename(filepath, extname);
  return _path2.default.join(dir, basename + '.signed' + extname);
}

/**
 * 对整个chunk签名
 * @param buf
 * @param chunks
 * @param output
 */
function saveChunk(buf, chunks, output) {
  // 创建新buffer
  var newBuffer = Buffer.alloc(buf.length + chunks.signchunk.length);
  var offset = 0;
  var sections = chunks.sections;

  // 拷贝header
  buf.copy(newBuffer, offset, sections.header.startIndex, sections.header.startIndex + sections.header.len);
  offset += sections.header.len;

  // 拷贝signblock
  chunks.signchunk.copy(newBuffer, offset);
  offset += chunks.signchunk.length;

  // 拷贝central
  buf.copy(newBuffer, offset, sections.central.startIndex, sections.central.startIndex + sections.central.len);
  offset += sections.central.len;

  // 修改eocd
  buf.writeInt32LE(sections.central.startIndex + chunks.signchunk.length, sections.footer.startIndex + 16);
  // 拷贝eocd
  buf.copy(newBuffer, offset, sections.footer.startIndex, sections.footer.startIndex + sections.footer.len);
  offset += sections.footer.len;

  // 写入文件
  _fs2.default.writeFileSync(output, newBuffer);
}

/**
 * 加签名文件
 * @param filepath
 * @param prikey
 * @param pubkey
 * @param output
 */
function signFiles(filehashs, prikey, output) {
  var chunk = {
    len: 8,
    size: 4,
    digests: [],
    sign: null

    // 生成hash块
  };filehashs.forEach(function (item) {
    // name hash
    var namehash = _signature2.default.CRC32.digest(item.name.toString());

    // 计算大小
    var sum = 6 + item.hash.length;
    var chk = Buffer.alloc(sum);
    var offset = 0;
    chk.writeInt32LE(namehash, offset);
    offset += 4;

    chk.writeInt16LE(item.hash.length, offset);
    offset += 2;
    item.hash.copy(chk, offset);
    offset += item.hash.length;

    chunk.digests.push(chk);
    chunk.size += sum;
    chunk.len += sum;
  });

  // 生成整体签名
  signDigestChunk(chunk, prikey);

  // 写入文件
  return saveDigestChunk(chunk, output);
}

/**
 *
 * @param chunk
 * @param prikey
 */
function signDigestChunk(chunk, prikey) {
  var buf = Buffer.alloc(chunk.size);
  var offset = 0;
  buf.writeInt32LE(0x0103, offset);
  offset += 4;

  chunk.digests.forEach(function (chk) {
    chk.copy(buf, offset);
    offset += chk.length;
  });
  chunk.digests = buf.slice();

  // 生成签名
  var signer = _crypto2.default.createSign('RSA-SHA256');
  signer.update(buf);
  var signature = signer.sign(prikey);
  chunk.sign = {
    len: 12 + signature.length,
    size: 8 + signature.length,
    id: 0x0103,
    data: signature
  };
  chunk.len += chunk.sign.len;
}

/**
 *
 * @param chunk
 * @param output
 */
function saveDigestChunk(chunk, output) {
  // 创建新buffer
  var newBuffer = Buffer.alloc(chunk.len);

  var offset = 0;
  newBuffer.writeInt32LE(chunk.size, offset);
  offset += 4;

  // 文件hash列表
  chunk.digests.copy(newBuffer, offset);
  offset += chunk.digests.length;

  // 写入签名
  newBuffer.writeInt32LE(chunk.sign.size, offset);
  offset += 4;
  newBuffer.writeInt32LE(chunk.sign.id, offset);
  offset += 4;
  newBuffer.writeInt32LE(chunk.sign.data.length, offset);
  offset += 4;

  chunk.sign.data.copy(newBuffer, offset);
  offset += chunk.sign.data.length;

  // 写入文件
  if (output) {
    _fs2.default.writeFileSync(output, newBuffer);
  }

  return newBuffer;
}

module.exports = {
  signZip: signZip,
  hashFile: hashFile
};