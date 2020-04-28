'use strict';

/*
 * Copyright (C) 2017, hapjs.org. All rights reserved.
 */

var program = require('commander');
var chalk = require('chalk');
var command = require('../commands');
program.version('1.0.2').usage('<command> [options]');

program.command('cocos [env]').option('-d, --pub_dir [pubDir]', '指定release文件夹，默认为./build/web-mobile文件夹').option('--small-pack', '是否小包模式').description('build cocos project to quickgame').action(function (env, cmd) {
  process.env.NODE_ENV = env != 'release' ? 'development' : 'production';
  command.cocos_v2(cmd.pub_dir, env != 'release', cmd.smallPack);
});
program.command('cocoscreator [env]').option('--small-pack', '是否小包模式').description('build cocos project to quickgame').action(function (env, cmd) {
  process.env.NODE_ENV = env != 'release' ? 'development' : 'production';
  command.cocoscreator(env != 'release', cmd.smallPack);
});
program.command('pack [env]').option('-d, --pub_dir [pubDir]', '指定release文件夹，默认为当前文件夹').description('pack a project to rpk').action(function (env, cmd) {
  process.env.NODE_ENV = env != 'release' ? 'development' : 'production';
  command.pack(cmd.pub_dir, env != 'release');
});

program.command('laya [env]').option('-d, --pub_dir [pubDir]', '指定release文件夹，默认为./release/wxgame文件夹').description('build laya project to quickgame').action(function (env, cmd) {
  process.env.NODE_ENV = env != 'release' ? 'development' : 'production';
  command.laya(cmd.pub_dir, env != 'release');
});

program.command('egret [env]').option('-d, --pub_dir [pubDir]', '指定release文件夹，默认为../<projectname>_wxgame 文件夹').description('build egret project to quickgame').action(function (env, cmd) {
  process.env.NODE_ENV = env != 'release' ? 'development' : 'production';
  command.egret(cmd.pub_dir, env != 'release');
});
program.command('subpack [env]').option('--no-build-js', '是否构建JS文件').description('build normal project to quickgame with dev enviroment').action(function (env, cmd) {
  process.env.NODE_ENV = env != 'release' ? 'development' : 'production';
  command.normal(cmd.buildJs, env != 'release');
});

program.on('--help', function () {
  console.log();
  console.log('Run ' + chalk.cyan('quickgame <command> --help') + ' for detailed usage of given command.');
  console.log();
});

// 更改NodeJS 10.1.0上的"fs.promise is Experiment"日志输出位置
require('fs-extra');
setTimeout(function () {
  program.parse(process.argv);

  if (!process.argv.slice(2).length) {
    program.outputHelp();
  }
}, 0);