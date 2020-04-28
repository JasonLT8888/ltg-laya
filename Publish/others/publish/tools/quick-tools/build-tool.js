const jszip = require('jszip')
const fs = require('fs')
const path = require('path')
const pkgJson = require('./package.json')


const initPkgJson = () => {
  pkgJson.scripts = {
    "init": "node ./bin/hap init"
  }
  delete pkgJson.devDependencies
}

const parse = (base, dir, cb, fs) => {
  dir = dir || '.'
  var directory = path.posix.join(base, dir)
  var name
    // 递归遍历目录
  fs.readdirSync(directory).forEach(function(file) {
    var fullpath = path.posix.join(directory, file)
    var stat = fs.statSync(fullpath)
    if (stat.isFile()) {
      // 替换
      var posixdir = dir.split(path.sep).join(path.posix.sep)
      name = path.posix.join(posixdir, path.basename(file))
      cb(name, fullpath)
    } else if (stat.isDirectory()) {
      var subdir = path.posix.join(dir, file)
      parse(base, subdir, cb, fs)
    }
  })
}

const makeZip = ({
  dirList =  [],
  fileList =  [],
  outputPath = path.join(__dirname, '..') + '/',
  name =  'quickgame-toolkit-' + Date.now() + '.zip'
} = {}) => {
  let zipper = new jszip()
  fileList.forEach(function(file) {
    zipper.file(file, fs.createReadStream(file))
  })
  dirList.forEach(function(distPath) {
    parse(distPath, './', (name, file) => {
      if (distPath !== 'dist') {
        name = distPath + '/' + name
      }
      console.log('packing: ' + name)
      zipper.file(name, fs.createReadStream(file))
    }, fs)
  })
  zipper.file('package.json', JSON.stringify(pkgJson, null, 2))
  zipper.generateNodeStream().pipe(fs.createWriteStream(outputPath + name))
}

initPkgJson()
makeZip({
  dirList: ['dist', 'templates'],
  fileList: ['README.md']
})