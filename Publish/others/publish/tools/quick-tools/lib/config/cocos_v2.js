'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//不打包文件相对发布目录的路径
var EXCLUDE_FILES = exports.EXCLUDE_FILES = ['jsb-adapter/jsb-builtin.js', 'cocos-project-template.json', 'frameworks', 'project.json', '.cocos-project.json', '.DS_Store'];
var EXCLUDE_FILE_TYPE = exports.EXCLUDE_FILE_TYPE = ['.cpk'];
var DEFAULT_PARENT_DIR = exports.DEFAULT_PARENT_DIR = 'build';
var DEFAULT_PUB_DIR = exports.DEFAULT_PUB_DIR = 'jsb-link';
var DEFAULT_TPL_FILES = exports.DEFAULT_TPL_FILES = []; //这里的文件如果有修改，就不会从tpl里拷贝覆盖