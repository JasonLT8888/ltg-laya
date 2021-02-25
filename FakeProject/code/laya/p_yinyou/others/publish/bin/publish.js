!function(e){var t={};function i(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(s,o,function(t){return e[t]}.bind(null,o));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=13)}([function(e,t){e.exports=require("path")},function(e,t){e.exports=require("fs")},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EFileType=void 0,function(e){e[e.NotExist=0]="NotExist",e[e.Dir=1]="Dir",e[e.File=2]="File"}(t.EFileType||(t.EFileType={}))},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{static ReplaceAll(e,t,i){for(;e.indexOf(t)>=0;)e=e.replace(t,i);return e}static IsNullOrEmpty(e){return null==e||""==e}}},function(e,t){e.exports=require("process")},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LTUtils=void 0;const s=i(1),o=i(0),l=i(6),r=i(7),n=i(2),a=i(3);class c{static CompressJs(e,t){let i=s.statSync(e),r=o.win32.basename(e),n=s.readFileSync(e,{encoding:"utf-8"}),a=l.minify(n);if(a.error)throw console.error("压缩文件",r,"出错",a.error),SyntaxError("文件压缩失败,中断发包");this.WriteStrTo(t,a.code);let c=s.statSync(t),p=i.size/1024,h=c.size/1024,f=h/p,u="("+(100*f).toFixed(2)+"%)";return console.log("压缩",r.green,p.toFixed(2)+"Kb >>>>>>>> "+h.toFixed(2)+"Kb "+(f>1?u.red:u.green)),a.code}static WrapToES5(e){let t=r.execSync("babel ");console.log(t)}static ReplaceAll(e,t,i){let s=e;if(t==i)return s;for(;s.indexOf(t)>=0;)s=s.replace(t,i);return s}static MakeDirExist(e){let t=null;return s.existsSync(e)&&(t=s.statSync(e)),!(!t||!t.isDirectory())||(s.mkdirSync(e,{recursive:!0}),!(!s.existsSync(e)||!s.statSync(e).isDirectory()))}static IsFileOrDir(e){if(!s.existsSync(e))return n.EFileType.NotExist;return s.statSync(e).isFile()?n.EFileType.File:n.EFileType.Dir}static DeleteDir(e){let t=[];if(s.existsSync(e)){t=s.readdirSync(e);for(let i=0;i<t.length;++i){let l=t[i],r=o.join(e,l);s.statSync(r).isDirectory()?this.DeleteDir(r):s.unlinkSync(r)}s.rmdirSync(e)}}static CopyFile(e,t){let i=t.lastIndexOf("\\"),o=t.substring(0,i);c.MakeDirExist(o),s.copyFileSync(e,t)}static CopyDir(e,t,i=null){this.MakeDirExist(t);let l=s.readdirSync(e);for(let r=0;r<l.length;++r){let n=l[r],a=o.join(t,n);if(i&&!i(n,a))continue;let c=o.join(e,n);s.statSync(c).isDirectory()?this.CopyDir(c,a,i):s.copyFileSync(c,a)}}static ReadStrFrom(e){if(!c.IsFileExist(e))return null;return s.statSync(e).isDirectory()?null:s.readFileSync(e,{encoding:"utf-8"})}static IsFileExist(e){return s.existsSync(e)}static GetDirName(e){let t=this.IsFileOrDir(e);if(t==n.EFileType.NotExist)return"";let i=(e=a.default.ReplaceAll(e,"\\","/")).split("/");return e.endsWith("/")||t==n.EFileType.File?i[i.length-2]:i[i.length-1]}static WriteStrTo(e,t){let i=e.lastIndexOf("\\"),o=e.substring(0,i);c.MakeDirExist(o),s.writeFileSync(e,t,{encoding:"utf-8"})}static Rename(e,t){s.renameSync(e,t)}}t.LTUtils=c},function(e,t){e.exports=require("uglify-es")},function(e,t){e.exports=require("child_process")},,function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EPackResolveType=void 0,function(e){e[e.AutoSearch=0]="AutoSearch",e[e.AllIn=1]="AllIn",e[e.AllOut=2]="AllOut"}(t.EPackResolveType||(t.EPackResolveType={}))},,,,function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=i(4),o=i(14);new class{constructor(){let e=this._GetParam("-p");null!=e?new o.PublishHandler(e).Start():console.log("需要传入-p 平台参数")}_GetParam(e){let t=s.argv.indexOf(e);return t<0?null:s.argv[t+1]}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PublishHandler=void 0;const s=i(0),o=i(1),l=i(4),r=i(15),n=i(16),a=i(6),c=i(17),p=i(5),h=i(18),f=i(3),u=i(20);t.PublishHandler=class{constructor(e){this._keepPlatforms={wx:["project.config.json","game.json"],tt:["project.config.json","game.json"],qq:["project.config.json","game.json"],oppo:["manifest.json","icon.png"]},this._platformStr=e}Start(){let e=Date.now();if(console.log("开始发布",r.green(this._platformStr)),this._InitAll(),this._CheckRelease(),this._CopyTemplate(),this._CopyBin(),"oppo"==this._platformStr){c.cd(this._releasePath);let e=s.join(this._workPath,"./others/publish/tools/quick-tools/lib/bin/index.js"),t=this._packConfig.isDebug?"debug":"release";c.exec(`node ${e} pack ${t}`)}console.log(("注意cdn资源,需要拷贝到服务器:"+this._cdnPath).bgRed);let t=((Date.now()-e)/1e3).toFixed(2);console.log("发布完成",this._releasePath.green),console.log("总共耗时 "+t.green+" 秒")}_CopyBin(){let e=s.join(this._releasePath,"./res/");p.LTUtils.DeleteDir(e);let t=s.join(this._binPath,"./res/"),i=s.join(this._cdnPath,"./res/"),o=new h.SubpackHelper(t,this._packConfig);o.single_max_size=1024*this._packConfig.maxSinglePackSize*1024,o.total_max_size=1024*this._packConfig.maxTotalPackSize*1024,o.Analyze(),o.Replace(e,i),this._CopyIndex(),console.log("bin目录拷贝完成"),console.log()}_CopyIndex(){let e=s.join(this._binPath,"./index.js"),t=p.LTUtils.ReadStrFrom(e);if(this._packConfig.compress){console.log("当前配置需要压缩js,开始压缩");var i=Date.now()}let l=s.join(this._workPath,"./temp/"+this._platformStr+"/");p.LTUtils.MakeDirExist(l);let r,c=/loadLib\("(.*)"\)/gm,h=t;for(;null!==(r=c.exec(h));)if(r.index===c.lastIndex&&c.lastIndex++,r[1]){let e=r[1],t=s.join(this._binPath,e),i=s.join(this._releasePath,e),c=i.lastIndexOf("\\"),h=i.substring(0,c);p.LTUtils.MakeDirExist(h);let f=this._packConfig.es5;if(f&&(e.endsWith("bundle.js")||(f=!1)),f){console.log("进行转es5操作 "+i.green);let e=n.transformFileSync(t,{presets:["@babel/preset-env"],babelrc:!1}).code;this._packConfig.compress&&(e=a.minify(e).code),p.LTUtils.WriteStrTo(i,e)}else this._packConfig.compress?this._DoCacheCompress(e,t,l,i):o.copyFileSync(t,i)}let f=s.join(this._releasePath,"./index.js");if(this._packConfig.compress){this._DoCacheCompress("index.js",e,l,f);let t=((Date.now()-i)/1e3).toFixed(2);console.log("压缩完成,总共耗时 "+t.green+" 秒")}else o.copyFileSync(e,f),console.log("当前配置无需压缩,直接拷贝所有js文件");if("oppo"==this._packConfig.platform||"vivo"==this._packConfig.platform){let t=p.LTUtils.ReadStrFrom(f),i="____";if(t=p.LTUtils.ReplaceAll(t,'loadLib("',i),t=p.LTUtils.ReplaceAll(t,i,'require("./'),p.LTUtils.WriteStrTo(f,t),console.log(this._packConfig.platform+" 平台重写index.js",e),"vivo"==this._packConfig.platform){let e=f.replace("index.js","src/index.js");o.writeFileSync(e,t);let i=t.split('require("'),s=f.replace("index.js","minigame.config.js"),l=[{module_name:"./libs/laya.vvmini.js",module_path:"./libs/laya.vvmini.js",module_from:"../../bin/libs/laya.vvmini.js"}];for(let e=1;e<i.length;e++){let t=i[e].replace('"),',"").replace('");',""),s={module_name:t,module_path:t,module_from:t.replace("./","")};l.push(s)}let r=o.readFileSync(s,{encoding:"utf-8"});r=r.replace("const externals = []",`const externals =${JSON.stringify(l)};`),o.writeFileSync(s,r,{encoding:"utf-8"});let n=f.replace("index.js","res"),a=f.replace("index.js","src\\res");p.LTUtils.DeleteDir(a),o.renameSync(n,a),console.log("vivo 复制 res 完成")}}}_DoCacheCompress(e,t,i,l){let r=o.statSync(t).mtimeMs,n=s.join(i,e),a=p.LTUtils.ReadStrFrom(n);if(f.default.IsNullOrEmpty(a)){let i={fileName:e,modifyTime:r,compressJs:p.LTUtils.CompressJs(t,l)},s=JSON.stringify(i);p.LTUtils.WriteStrTo(n,s)}else{let i=JSON.parse(a),s=i.fileName,o=i.modifyTime;if(e==s&&o==r)console.log("文件未变动,直接使用缓存文件进行替换",e.green),p.LTUtils.WriteStrTo(l,i.compressJs);else{let i={fileName:e,modifyTime:r,compressJs:p.LTUtils.CompressJs(t,l)},s=JSON.stringify(i);p.LTUtils.WriteStrTo(n,s)}}}_CopyTemplate(){p.LTUtils.CopyDir(this._templatePath,this._releasePath,e=>{if(this._keepFiles.indexOf(e)>=0){let t=s.join(this._releasePath,e);if(o.existsSync(t))return console.log("检测到已存在",e.green,"进行保留"),!1}return!0}),console.log("template拷贝完成"),console.log()}_CheckRelease(){if(!p.LTUtils.MakeDirExist(this._releasePath))throw console.log("release路径检查","失败".red),SyntaxError("release路径创建失败,请检查权限");console.log("release路径检查","通过".green),console.log()}_InitAll(){this._workPath=l.cwd();let e=s.join(this._workPath,"./pack_config/publish."+this._platformStr+".json");p.LTUtils.IsFileExist(e)||(console.log("当前平台",this._platformStr,"不存在打包配置文件",e.red,"读取默认配置"),e=s.join(this._workPath,"./others/config/publish.default.json"));let t=p.LTUtils.ReadStrFrom(e),i=JSON.parse(t);this._packConfig=new u.LTPackConfig,this._packConfig.platform=this._platformStr;for(let e in i)this._packConfig[e]=i[e];this._releasePath=s.join(this._workPath,"./release/"+this._platformStr),this._templatePath=s.join(this._workPath,"./others/publish/templates/"+this._platformStr),this._binPath=s.join(this._workPath,"./bin/"),this._cdnPath=s.join(this._workPath,"./cdn/"+this._platformStr),console.log("release路径",this._releasePath.green),this._keepFiles=this._keepPlatforms[this._platformStr],this._keepFiles||(console.log("当前平台未配置keepFiles",this._platformStr),this._keepFiles=[]),console.log()}}},function(e,t){e.exports=require("colors")},function(e,t){e.exports=require("@babel/core")},function(e,t){e.exports=require("shelljs")},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SubpackHelper=void 0;const s=i(1),o=i(0),l=i(19),r=i(5),n=i(9),a=i(3);t.SubpackHelper=class{constructor(e,t){this.single_max_size=4194304,this.total_max_size=4194304,this._rootPath=e,this._packConfig=t,this._rootNode=new l.LTPackNode,this._rootNode.fullPath=e,this._rootNode.isNode=!1}Analyze(){let e="";switch(this._packConfig.packType){case n.EPackResolveType.AllIn:e="全入包";break;case n.EPackResolveType.AllOut:e="全出包";break;case n.EPackResolveType.AutoSearch:e="自动分析"}console.log("打包模式:",e),this._AnalyzeDir(this._rootPath,this._rootNode),this._CombieNode(this._rootNode);let t=Math.ceil(this._rootNode.size/1024),i=t/1024;console.log("资源包:",this._rootNode.fullPath,"总共",t.toFixed(0)+"kb ("+i.toFixed(2)+"mb)"),this._subpacks=[],this._remoteFiles=[],this._cacheSize=0;let r=o.join(this._rootPath,"./../");for(let e=0;e<this._packConfig.forceInPack.length;++e){let t=this._packConfig.forceInPack[e],i=o.join(r,t);console.log("强制主包",i.green);let n=new l.LTPackNode;n.isNode=!1;let a=s.statSync(i);n.size=a.size,n.fullPath=i,this._subpacks.push(n),this._cacheSize+=n.size}this._SplitSubpack(this._rootNode,this._subpacks,this._remoteFiles),t=Math.ceil(this._cacheSize/1024),i=t/1024,console.log("拆分子包个数",this._subpacks.length,"总子包大小",t.toFixed(0)+"kb ("+i.toFixed(2)+"mb)")}Replace(e,t){r.LTUtils.DeleteDir(t);for(let e=0;e<this._remoteFiles.length;++e){let i=this._remoteFiles[e],s=i.fullPath.replace(this._rootPath,""),l=o.join(t,s);i.isNode?r.LTUtils.CopyFile(i.fullPath,l):r.LTUtils.CopyDir(i.fullPath,l)}r.LTUtils.DeleteDir(e);for(let t=0;t<this._subpacks.length;++t){let i=this._subpacks[t];if(i.isNode){console.log("子包检测到单文件,请注意检查".red,i.fullPath);continue}let l=i.fullPath.replace(this._rootPath,""),n=o.join(e,l);r.LTUtils.CopyDir(i.fullPath,n);let c="";switch(this._packConfig.platform){case"oppo":case"ks":c="main";break;default:c="game"}if(a.default.IsNullOrEmpty(c))continue;let p=o.join(n,"./"+c+".js");s.existsSync(p)||r.LTUtils.WriteStrTo(p,"")}let i="";switch(this._packConfig.platform){case"oppo":i="manifest";break;case"vivo":i="src/manifest";break;case"ks":i="game.config";break;default:i="game"}let l=o.join(e,"./../"+i+".json");if(!r.LTUtils.IsFileExist(l))return;let c=s.readFileSync(l,{encoding:"utf-8"}),p=JSON.parse(c),h=[],f=o.join(this._rootPath,"./../");for(let e=0;e<this._subpacks.length;++e){let t=this._subpacks[e];if(t.isNode)continue;let i=t.fullPath.replace(f,""),s=r.LTUtils.ReplaceAll(i,"\\","/"),o=r.LTUtils.ReplaceAll(s,"/","_");this._packConfig.packType==n.EPackResolveType.AutoSearch&&(this._packConfig.forceInPack.indexOf(s)>=0?console.log("强制主包",s.green):h.push({name:o,root:i+"/"}))}"tt"==this._packConfig.platform?p.subPackages=h:p.subpackages=h;let u=JSON.stringify(p);for(;u.indexOf("\\\\")>=0;)u=u.replace("\\\\","/");s.writeFileSync(l,u,{encoding:"utf-8"});let _=[];for(let e=0;e<this._subpacks.length;++e){let t=this._subpacks[e].fullPath.replace(f,""),i=r.LTUtils.ReplaceAll(t,"\\","/"),s=this._packConfig.packType==n.EPackResolveType.AllIn?1:2;this._packConfig.forceInPack.indexOf(i)>=0?s=1:this._packConfig.forceRemote.indexOf(i)>=0&&(s=3);let o=r.LTUtils.ReplaceAll(i,"/","_");_.push({name:o,path:i,pathType:s})}if("vivo"==this._packConfig.platform||"ks"==this._packConfig.platform){console.log("vivo & KS subpack.json 设置远程包");for(let e=0;e<this._packConfig.forceRemote.length;++e){let t=this._packConfig.forceRemote[e].replace(f,""),i=r.LTUtils.ReplaceAll(t,"\\","/"),s=r.LTUtils.ReplaceAll(i,"/","_");_.push({name:s,path:i,pathType:3})}}let d=o.join(e,"./../"),g=JSON.stringify(_),y=o.join(d,"./subpack.json");if(s.writeFileSync(y,g,{encoding:"utf-8"}),console.log("输出subpack.json",y),"vivo"==this._packConfig.platform){let t=JSON.parse(s.readFileSync(l,{encoding:"utf-8"})),i=o.join(e,"./../src/game.js"),r=s.readFileSync(i,{encoding:"utf-8"});console.log("分包：",t.subpackages),r=r.replace("var subpackages = [];",`var subpackages = ${JSON.stringify(t.subpackages)};`),s.writeFileSync(i,r,{encoding:"utf-8"});let n=o.join(d,"./src/subpack.json");s.unlinkSync(n),s.renameSync(y,n)}}_SplitSubpack(e,t,i){let s=o.join(this._rootPath,"./../");for(let o=0;o<e.childs.length;++o){let l=e.childs[o];if(l.isNode)i.push(l);else{let e=l.fullPath.replace(s,"");if(e=e.replace("\\","/"),!(this._packConfig.forceInPack.indexOf(e)>=0)){this._packConfig.forceRemote.indexOf(e)>=0||this._packConfig.packType==n.EPackResolveType.AllOut?(console.log("强制远程包",e.green),i.push(l)):l.size>this.single_max_size?this._SplitSubpack(l,t,i):l.size+this._cacheSize<this.total_max_size?(t.push(l),this._cacheSize+=l.size):this._SplitSubpack(l,t,i)}}}}_CombieNode(e){for(let t=0;t<e.childs.length;++t){let i=e.childs[t];i.isNode||this._CombieNode(i),e.size+=i.size}}_AnalyzeDir(e,t){let i=s.readdirSync(e);for(let r=0;r<i.length;++r){let n=i[r],a=o.join(e,n),c=s.statSync(a),p=new l.LTPackNode;p.fullPath=a,p.parent=t,t.childs.push(p),c.isDirectory()?(p.isNode=!1,this._AnalyzeDir(a,p)):(p.isNode=!0,p.size=c.size)}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LTPackNode=void 0;t.LTPackNode=class{constructor(){this.childs=[],this.size=0}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LTPackConfig=void 0;const s=i(9);t.LTPackConfig=class{constructor(){this.platform="",this.appid="",this.bannerId="",this.rewardVideoId="",this.interstitialId="",this.forceRemote=["res/config"],this.forceInPack=["res/fgui_load"],this.maxSinglePackSize=4,this.maxTotalPackSize=8,this.packType=s.EPackResolveType.AutoSearch,this.compress=!0,this.es5=!1,this.isDebug=!1}}}]);