const fs = require('fs');
const path = require('path');
const xxtea = require('xxtea-node');

const _log = console.log;

function _exit(code, msg) {
    if (typeof code !== "number") {
        msg = code;
        code = 0;
    }
    if (typeof msg === "undefined") {
        msg = "";
    }

    console.log(code === 0 ? "[SUCCESS]" : "[FAILURE]", msg);
    process.exit(code);
}

//  使用 key 加密 path 文件为 dest 文件
function _encrypt(src, key, dst) {
    src = path.normalize(src);
    dst = path.normalize(dst);
    let data = fs.readFileSync(src, "utf-8");
    if (data.length > 0) {
        data = xxtea.encrypt(xxtea.toBytes(data), xxtea.toBytes(key));
    }
    fs.writeFileSync(dst, data);
    _exit("write file: " + dst);
}

////////////////////////////////////////////////////////////////////////////////
const argv = process.argv;
// const NODE_PATH = argv[0];
// const SCRIPT_PATH = argv[1];

const SRC_PATH = argv[2];
const KEY = argv[3];

let dstPath = argv[4];

if (SRC_PATH === undefined || !fs.statSync(SRC_PATH).isFile()) {
    _exit(1, "please input source file path as argument 1");
}

if (typeof KEY !== "string") {
    _exit(2, "please input endrypto key as argument 2");
}

if (typeof dstPath === "undefined") {
    dstPath = SRC_PATH + "c";
} else if (fs.statSync(dstPath).isDirectory()) {
    dstPath = path.join(dstPath, path.basename(SRC_PATH) + "c");
}

_encrypt(SRC_PATH, KEY, dstPath);