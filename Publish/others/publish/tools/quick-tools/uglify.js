/*
 * Copyright (C) 2017, hapjs.org. All rights reserved.
 */

var uglifyjs = require('uglify-js')
var fs = require('fs-extra')
var path = require('path')

/**
 * 遍历目录文件 同步方法
 * @param dir
 * @param files 收集的文件列表
 */
function traverseDirSync(dir, files) {
  const list = fs.readdirSync(dir)
  list.forEach(function(file) {
    file = path.join(dir, file)
    const stat = fs.statSync(file)
    if (stat && stat.isDirectory()) {
      traverseDirSync(file, files)
    } else {
      files.push(file)
    }
  })
}

/**
 * 压缩文件
 * @param dest 目标路径
 * @param src 模板文件路径
 */
function uglifyFiles(dest, src) {
  const files = []
    // 遍历收集文件列表
  traverseDirSync(src, files);

  files.forEach(file => {
    const relative = path.relative(src, file)
    const finalPath = path.join(dest, relative)
    if (path.extname(file) != '.js') {
      //fs.copySync(file, finalPath)
    } else {
      const result = uglifyjs.minify([file], {
        compress: true
      })
      fs.ensureDirSync(path.dirname(finalPath))
      fs.writeFileSync(finalPath, result.code)
    }
    console.log(`file: ${finalPath} created.`)
  })
}

uglifyFiles(path.join(__dirname, 'lib'), path.join(__dirname, 'lib'))