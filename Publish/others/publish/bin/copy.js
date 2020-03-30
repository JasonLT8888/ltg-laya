!function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=10)}([function(e,t){e.exports=require("path")},function(e,t){e.exports=require("process")},function(e,t){e.exports=require("fs")},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.NotExist=0]="NotExist",e[e.Dir=1]="Dir",e[e.File=2]="File"}(t.EFileType||(t.EFileType={}))},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=i(2),r=i(0),o=i(6),l=i(7),s=i(3),c=i(5);class u{static CompressJs(e,t){let i=n.statSync(e),l=r.win32.basename(e),s=n.readFileSync(e,{encoding:"utf-8"}),c=o.minify(s);if(c.error)throw console.error("压缩文件",l,"出错",c.error),SyntaxError("文件压缩失败,中断发包");this.WriteStrTo(t,c.code);let u=n.statSync(t),a=i.size/1024,y=u.size/1024,p=y/a,f="("+(100*p).toFixed(2)+"%)";return console.log("压缩",l.green,a.toFixed(2)+"Kb >>>>>>>> "+y.toFixed(2)+"Kb "+(p>1?f.red:f.green)),c.code}static WrapToES5(e){let t=l.execSync("babel ");console.log(t)}static ReplaceAll(e,t,i){let n=e;for(;n.indexOf(t)>=0;)n=n.replace(t,i);return n}static MakeDirExist(e){let t=null;return n.existsSync(e)&&(t=n.statSync(e)),!(!t||!t.isDirectory())||(n.mkdirSync(e,{recursive:!0}),!(!n.existsSync(e)||!n.statSync(e).isDirectory()))}static IsFileOrDir(e){if(!n.existsSync(e))return s.EFileType.NotExist;return n.statSync(e).isFile()?s.EFileType.File:s.EFileType.Dir}static DeleteDir(e){let t=[];if(n.existsSync(e)){t=n.readdirSync(e);for(let i=0;i<t.length;++i){let o=t[i],l=r.join(e,o);n.statSync(l).isDirectory()?this.DeleteDir(l):n.unlinkSync(l)}n.rmdirSync(e)}}static CopyFile(e,t){let i=t.lastIndexOf("\\"),r=t.substring(0,i);u.MakeDirExist(r),n.copyFileSync(e,t)}static CopyDir(e,t,i=null){this.MakeDirExist(t);let o=n.readdirSync(e);for(let l=0;l<o.length;++l){let s=o[l];if(i&&!i(s))continue;let c=r.join(e,s),u=r.join(t,s);n.statSync(c).isDirectory()?this.CopyDir(c,u,i):n.copyFileSync(c,u)}}static ReadStrFrom(e){if(!u.IsFileExist(e))return null;return n.statSync(e).isDirectory()?null:n.readFileSync(e,{encoding:"utf-8"})}static IsFileExist(e){return n.existsSync(e)}static GetDirName(e){let t=this.IsFileOrDir(e);if(t==s.EFileType.NotExist)return"";let i=(e=c.default.ReplaceAll(e,"\\","/")).split("/");return e.endsWith("/")||t==s.EFileType.File?i[i.length-2]:i[i.length-1]}static WriteStrTo(e,t){let i=e.lastIndexOf("\\"),r=e.substring(0,i);u.MakeDirExist(r),n.writeFileSync(e,t,{encoding:"utf-8"})}}t.LTUtils=u},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{static ReplaceAll(e,t,i){for(;e.indexOf(t)>=0;)e=e.replace(t,i);return e}static IsNullOrEmpty(e){return null==e||""==e}}},function(e,t){e.exports=require("uglify-es")},function(e,t){e.exports=require("child_process")},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class n{}t.default=n,n.needCopy=["src/LTGame","src/SDK","bin/res/ltgame","bin/libs","bin/index.js","libs"],n.needCopyUnity=["Assets/Plugins","Assets/LayaAir3D","Assets/StreamingAssets"]},,function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=i(0),r=i(1),o=i(8),l=i(4),s=i(3);new class{constructor(){let e=r.cwd(),t=n.join(e,"./../"),i=n.join(t,"others/publish/templates/_project/");l.LTUtils.DeleteDir(i),console.log("删除",i,"完成"),console.log("开始拷贝工程_Laya"),this._CopyLaya(t),console.log("laya工程拷贝完成"),console.log("开始拷贝工程_Unity"),this._CopyUnity(t),console.log("unity工程拷贝完成"),console.log("所有工程拷贝完成,开始发布,请耐心等待");let o=n.join(t,"others"),s=n.join(t,"./../../../../Publish/others");l.LTUtils.DeleteDir(s),l.LTUtils.CopyDir(o,s,(function(e){return!e.endsWith("node_modules")}));let c=n.join(t,"package.json"),u=n.join(t,"./../../../../Publish/package.json");l.LTUtils.CopyFile(c,u),console.log("已发布到",n.join(t,"./../../../../Publish"))}_CopyUnity(e){let t=l.LTUtils.GetDirName(e);console.log("projectName",t);let i=n.join(e,"others/publish/templates/_project/unity/"),r=n.join(e,"./../../unity/"+t+"/");for(let e of o.default.needCopyUnity){let t=n.join(r,e),o=l.LTUtils.IsFileOrDir(t);if(o==s.EFileType.NotExist){console.log(t,"不存在");continue}let c=n.join(i,e);o==s.EFileType.File?l.LTUtils.CopyFile(t,c):l.LTUtils.CopyDir(t,c),console.log("拷贝",t,"完成")}}_CopyLaya(e){let t=n.join(e,"others/publish/templates/_project/laya/");for(let i of o.default.needCopy){let r=n.join(e,i),o=l.LTUtils.IsFileOrDir(r);if(o==s.EFileType.NotExist){console.log(r,"不存在");continue}let c=n.join(t,i);o==s.EFileType.File?l.LTUtils.CopyFile(r,c):l.LTUtils.CopyDir(r,c),console.log("拷贝",r,"完成")}}}}]);