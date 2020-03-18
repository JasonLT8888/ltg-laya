{"fileName":"libs/laya.html.js","modifyTime":1583811063340.744,"compressJs":"!function(t,e){\"use strict\";class s{constructor(){this.reset()}reset(){return this.stroke=0,this.strokeColor=\"#000000\",this.leading=0,this.lineHeight=0,this.letterSpacing=0,this.href=null,this}recover(){this!=s.EMPTY&&e.Pool.recover(\"HTMLExtendStyle\",this.reset())}static create(){return e.Pool.getItemByClass(\"HTMLExtendStyle\",s)}}s.EMPTY=new s,e.ClassUtils.regClass(\"laya.html.utils.HTMLExtendStyle\",s),e.ClassUtils.regClass(\"Laya.HTMLExtendStyle\",s);class i{constructor(){this.padding=i._PADDING,this.reset()}_getExtendStyle(){return this._extendStyle===s.EMPTY&&(this._extendStyle=s.create()),this._extendStyle}get href(){return this._extendStyle.href}set href(t){t!==this._extendStyle.href&&(this._getExtendStyle().href=t)}get stroke(){return this._extendStyle.stroke}set stroke(t){this._extendStyle.stroke!==t&&(this._getExtendStyle().stroke=t)}get strokeColor(){return this._extendStyle.strokeColor}set strokeColor(t){this._extendStyle.strokeColor!==t&&(this._getExtendStyle().strokeColor=t)}get leading(){return this._extendStyle.leading}set leading(t){this._extendStyle.leading!==t&&(this._getExtendStyle().leading=t)}get lineHeight(){return this._extendStyle.lineHeight}set lineHeight(t){this._extendStyle.lineHeight!==t&&(this._getExtendStyle().lineHeight=t)}set align(t){t in i.alignVDic&&(this._type&=~i._ALIGN,this._type|=i.alignVDic[t])}get align(){var t=this._type&i._ALIGN;return i.align_Value[t]}set valign(t){t in i.alignVDic&&(this._type&=~i._VALIGN,this._type|=i.alignVDic[t])}get valign(){var t=this._type&i._VALIGN;return i.vAlign_Value[t]}set font(t){for(var e=t.split(\" \"),s=0,i=e.length;s<i;s++){var r=e[s];switch(r){case\"italic\":this.italic=!0;continue;case\"bold\":this.bold=!0;continue}r.indexOf(\"px\")>0&&(this.fontSize=parseInt(r),this.family=e[s+1],s++)}}get font(){return(this.italic?\"italic \":\"\")+(this.bold?\"bold \":\"\")+this.fontSize+\"px \"+(e.ILaya.Browser.onIPhone&&e.ILaya.Text.fontFamilyMap[this.family]||this.family)}set block(t){t?this._type|=i._CSS_BLOCK:this._type&=~i._CSS_BLOCK}get block(){return 0!=(this._type&i._CSS_BLOCK)}reset(){return this.ower=null,this._type=0,this.wordWrap=!0,this.fontSize=e.ILaya.Text.defaultFontSize,this.family=e.ILaya.Text.defaultFont,this.color=\"#000000\",this.valign=i.VALIGN_TOP,this.padding=i._PADDING,this.bold=!1,this.italic=!1,this.align=i.ALIGN_LEFT,this.textDecoration=null,this.bgColor=null,this.borderColor=null,this._extendStyle&&this._extendStyle.recover(),this._extendStyle=s.EMPTY,this}recover(){e.Pool.recover(\"HTMLStyle\",this.reset())}static create(){return e.Pool.getItemByClass(\"HTMLStyle\",i)}inherit(t){var e,s,r,h;for(s=(r=i._inheritProps).length,e=0;e<s;e++)this[h=r[e]]=t[h]}get wordWrap(){return 0==(this._type&i._NOWARP)}set wordWrap(t){t?this._type&=~i._NOWARP:this._type|=i._NOWARP}get bold(){return 0!=(this._type&i._BOLD)}set bold(t){t?this._type|=i._BOLD:this._type&=~i._BOLD}get italic(){return 0!=(this._type&i._ITALIC)}set italic(t){t?this._type|=i._ITALIC:this._type&=~i._ITALIC}_widthAuto(){return 0!=(this._type&i._WIDTHAUTO)}widthed(t){return 0!=(this._type&i._WIDTH_SET)}set whiteSpace(t){\"nowrap\"===t&&(this._type|=i._NOWARP),\"none\"===t&&(this._type&=~i._NOWARP)}get whiteSpace(){return this._type&i._NOWARP?\"nowrap\":\"\"}_calculation(t,e){return!1}set width(t){if(this._type|=i._WIDTH_SET,\"string\"==typeof t){var e=t.indexOf(\"auto\");if(e>=0&&(this._type|=i._WIDTHAUTO,t=t.substr(0,e)),this._calculation(\"width\",t))return;t=parseInt(t)}this.size(t,-1)}set height(t){if(this._type|=i._HEIGHT_SET,\"string\"==typeof t){if(this._calculation(\"height\",t))return;t=parseInt(t)}this.size(-1,t)}heighted(t){return 0!=(this._type&i._HEIGHT_SET)}size(t,e){var s=this.ower,r=!1;-1!==t&&t!=s.width&&(this._type|=i._WIDTH_SET,s.width=t,r=!0),-1!==e&&e!=s.height&&(this._type|=i._HEIGHT_SET,s.height=e,r=!0),r&&s._layoutLater()}getLineElement(){return 0!=(this._type&i._LINE_ELEMENT)}setLineElement(t){t?this._type|=i._LINE_ELEMENT:this._type&=~i._LINE_ELEMENT}_enableLayout(){return 0==(this._type&i._DISPLAY_NONE)&&0==(this._type&i._ABSOLUTE)}get letterSpacing(){return this._extendStyle.letterSpacing}set letterSpacing(t){\"string\"==typeof t&&(t=parseInt(t+\"\")),t!=this._extendStyle.letterSpacing&&(this._getExtendStyle().letterSpacing=t)}cssText(t){this.attrs(i.parseOneCSS(t,\";\"))}attrs(t){if(t)for(var e=0,s=t.length;e<s;e++){var i=t[e];this[i[0]]=i[1]}}set position(t){\"absolute\"===t?this._type|=i._ABSOLUTE:this._type&=~i._ABSOLUTE}get position(){return this._type&i._ABSOLUTE?\"absolute\":\"\"}get absolute(){return 0!=(this._type&i._ABSOLUTE)}get paddingLeft(){return this.padding[3]}get paddingTop(){return this.padding[0]}static parseOneCSS(t,e){for(var s,r=[],h=t.split(e),l=0,a=h.length;l<a;l++){var n=h[l],o=n.indexOf(\":\"),_=n.substr(0,o).replace(/^\\s+|\\s+$/g,\"\");if(0!==_.length){var d=n.substr(o+1).replace(/^\\s+|\\s+$/g,\"\"),g=[_,d];switch(_){case\"italic\":case\"bold\":g[1]=\"true\"==d;break;case\"font-weight\":\"bold\"==d&&(g[1]=!0,g[0]=\"bold\");break;case\"line-height\":g[0]=\"lineHeight\",g[1]=parseInt(d);break;case\"font-size\":g[0]=\"fontSize\",g[1]=parseInt(d);break;case\"stroke\":g[0]=\"stroke\",g[1]=parseInt(d);break;case\"padding\":(s=d.split(\" \")).length>1||(s[1]=s[2]=s[3]=s[0]),g[1]=[parseInt(s[0]),parseInt(s[1]),parseInt(s[2]),parseInt(s[3])];break;default:(g[0]=i._CSSTOVALUE[_])||(g[0]=_)}r.push(g)}}return r}static parseCSS(t,e){for(var s;null!=(s=i._parseCSSRegExp.exec(t));)i.styleSheets[s[1]]=i.parseOneCSS(s[2],\";\")}}i._CSSTOVALUE={\"letter-spacing\":\"letterSpacing\",\"white-space\":\"whiteSpace\",\"line-height\":\"lineHeight\",\"font-family\":\"family\",\"vertical-align\":\"valign\",\"text-decoration\":\"textDecoration\",\"background-color\":\"bgColor\",\"border-color\":\"borderColor\"},i._parseCSSRegExp=new RegExp(\"([.#]\\\\w+)\\\\s*{([\\\\s\\\\S]*?)}\",\"g\"),i._inheritProps=[\"italic\",\"align\",\"valign\",\"leading\",\"stroke\",\"strokeColor\",\"bold\",\"fontSize\",\"lineHeight\",\"wordWrap\",\"color\"],i.ALIGN_LEFT=\"left\",i.ALIGN_CENTER=\"center\",i.ALIGN_RIGHT=\"right\",i.VALIGN_TOP=\"top\",i.VALIGN_MIDDLE=\"middle\",i.VALIGN_BOTTOM=\"bottom\",i.styleSheets={},i.ADDLAYOUTED=512,i._PADDING=[0,0,0,0],i._HEIGHT_SET=8192,i._LINE_ELEMENT=65536,i._NOWARP=131072,i._WIDTHAUTO=262144,i._BOLD=1024,i._ITALIC=2048,i._CSS_BLOCK=1,i._DISPLAY_NONE=2,i._ABSOLUTE=4,i._WIDTH_SET=8,i.alignVDic={left:0,center:16,right:32,top:0,middle:64,bottom:128},i.align_Value={0:\"left\",16:\"center\",32:\"right\"},i.vAlign_Value={0:\"top\",64:\"middle\",128:\"bottom\"},i._ALIGN=48,i._VALIGN=192,e.ClassUtils.regClass(\"laya.html.utils.HTMLStyle\",i),e.ClassUtils.regClass(\"Laya.HTMLStyle\",i);class r{constructor(){this.all=[],this.styleSheets=i.styleSheets}getElementById(t){return this.all[t]}setElementById(t,e){this.all[t]=e}}r.document=new r,e.ClassUtils.regClass(\"laya.html.dom.HTMLDocument\",r),e.ClassUtils.regClass(\"Laya.HTMLDocument\",r);class h{constructor(){this.rec=new e.Rectangle,this.reset()}reset(){return this.rec.reset(),this.href=null,this}recover(){e.Pool.recover(\"HTMLHitRect\",this.reset())}static create(){return e.Pool.getItemByClass(\"HTMLHitRect\",h)}}e.ClassUtils.regClass(\"laya.html.dom.HTMLHitRect\",h),e.ClassUtils.regClass(\"Laya.HTMLHitRect\",h);class l{}l.HTMLDivElement=null,l.HTMLImageElement=null,l.HTMLBrElement=null,l.HTMLDivParser=null,l.HTMLParse=null,l.HTMLElementType=null;class a{constructor(){this.elements=[],this.x=0,this.y=0,this.w=0,this.h=0,this.wordStartIndex=0,this.minTextHeight=99999,this.mWidth=0}updatePos(t,e,s,r,h,a,n){var o,_=0;this.elements.length>0&&(_=(o=this.elements[this.elements.length-1]).x+o.width-this.elements[0].x),n=n||this.h;var d,g=0;h===i.ALIGN_CENTER&&(g=(e-_)/2),h===i.ALIGN_RIGHT&&(g=e-_);for(var c=0,y=this.elements.length;c<y;c++){var u=(o=this.elements[c])._getCSSStyle();switch(0!==g&&(o.x+=g),u.valign){case\"top\":o.y=r;break;case\"middle\":var p=0;99999!=this.minTextHeight&&(p=this.minTextHeight);var L=(p+n)/2;L=Math.max(L,this.h),d=(o.eletype,l.HTMLElementType.IMAGE,r+L-o.height),o.y=d;break;case\"bottom\":o.y=r+(n-o.height)}}}}e.ClassUtils.regClass(\"laya.html.utils.LayoutLine\",a),e.ClassUtils.regClass(\"Laya.LayoutLine\",a);class n{static later(t){null==n._will&&(n._will=[],e.ILaya.stage.frameLoop(1,null,function(){if(!(n._will.length<1)){for(var t=0;t<n._will.length;t++)n.layout(n._will[t]);n._will.length=0}})),n._will.push(t)}static layout(t){return t&&t._style?0==(t._style._type&i.ADDLAYOUTED)?null:(t.style._type&=~i.ADDLAYOUTED,n._multiLineLayout(t)):null}static _multiLineLayout(t){var e=[];t._addChildsToLayout(e);var s,r,h,o,_,d,g,c=e.length,y=t._getCSSStyle(),u=y.letterSpacing,p=y.leading,L=y.lineHeight,T=y._widthAuto()||!y.wordWrap,m=T?999999:t.width,C=(t.height,0),f=y.italic?y.fontSize/3:0,E=y.align,S=y.valign,x=S!==i.VALIGN_TOP||E!==i.ALIGN_LEFT||0!=L,w=0,I=0,H=0,v=0,M=[],U=M[0]=new a,A=!1;U.h=0,y.italic&&(m-=y.fontSize/3);var b=0,D=!0;function R(){U.y=I,I+=U.h+p,U.mWidth=b,b=0,U=new a,M.push(U),U.h=0,w=0,D=!0,_=!1}for(s=0;s<c;s++)if(null!=(r=e[s]))if(D=!1,r instanceof l.HTMLBrElement)R(),U.y=I,U.h=L;else{if(r._isChar()){if((d=r).isWord)_=A||\"\\n\"===d.char,U.wordStartIndex=U.elements.length;else{if(M.length>0&&w+H>m&&U.wordStartIndex>0){var P;P=U.elements.length-U.wordStartIndex+1,U.elements.length=U.wordStartIndex,s-=P,R();continue}_=!1,b+=d.width}H=d.width+d.style.letterSpacing,v=d.height,A=!1,(_=_||w+H>m)&&R(),U.minTextHeight=Math.min(U.minTextHeight,r.height)}else g=r,o=(h=r._getCSSStyle()).padding,_=A||h.getLineElement(),H=g.width+o[1]+o[3]+h.letterSpacing,v=g.height+o[0]+o[2],A=h.getLineElement(),(_=_||w+H>m&&h.wordWrap)&&R();U.elements.push(r),U.h=Math.max(U.h,v),r.x=w,r.y=I,w+=H,U.w=w-u,U.y=I,C=Math.max(w+f,C)}else D||(w+=n.DIV_ELEMENT_PADDING),U.wordStartIndex=U.elements.length;if(I=U.y+U.h,x){var N=0,O=m;for(T&&t.width>0&&(O=t.width),s=0,c=M.length;s<c;s++)M[s].updatePos(0,O,s,N,E,S,L),N+=Math.max(L,M[s].h+p);I=N}return T&&(t.width=C),I>t.height&&(t.height=I),[C,I]}}var o;n.DIV_ELEMENT_PADDING=0,e.ClassUtils.regClass(\"laya.html.utils.Layout\",n),e.ClassUtils.regClass(\"Laya.Layout\",n),(o=t.HTMLElementType||(t.HTMLElementType={}))[o.BASE=0]=\"BASE\",o[o.IMAGE=1]=\"IMAGE\";class _{constructor(){this.eletype=t.HTMLElementType.BASE,this._creates(),this.reset()}static formatURL1(t,s=null){if(!t)return\"null path\";if(s||(s=e.URL.basePath),t.indexOf(\":\")>0)return t;if(null!=e.URL.customFormat&&(t=e.URL.customFormat(t)),t.indexOf(\":\")>0)return t;var i=t.charAt(0);if(\".\"===i)return e.URL._formatRelativePath(s+t);if(\"~\"===i)return e.URL.rootPath+t.substring(1);if(\"d\"===i){if(0===t.indexOf(\"data:image\"))return t}else if(\"/\"===i)return t;return s+t}_creates(){this._style=i.create()}reset(){if(this.URI=null,this.parent=null,this._style.reset(),this._style.ower=this,this._style.valign=\"middle\",this._text&&this._text.words){var t,e,s,i=this._text.words;for(e=i.length,t=0;t<e;t++)(s=i[t])&&s.recover()}return this._text=_._EMPTYTEXT,this._children&&(this._children.length=0),this._x=this._y=this._width=this._height=0,this}_getCSSStyle(){return this._style}_addChildsToLayout(t){var e=this._getWords();if(null==e&&(!this._children||0==this._children.length))return!1;if(e)for(var s=0,i=e.length;s<i;s++)t.push(e[s]);return this._children&&this._children.forEach(function(e,s,i){var r=e._style;r._enableLayout&&r._enableLayout()&&e._addToLayout(t)}),!0}_addToLayout(t){if(this._style){var e=this._style;e.absolute||(e.block?t.push(this):this._addChildsToLayout(t)&&(this.x=this.y=0))}}set id(t){r.document.setElementById(t,this)}repaint(t=!1){this.parentRepaint(t)}parentRepaint(t=!1){this.parent&&this.parent.repaint(t)}set innerTEXT(t){this._text===_._EMPTYTEXT?this._text={text:t,words:null}:(this._text.text=t,this._text.words&&(this._text.words.length=0)),this.repaint()}get innerTEXT(){return this._text.text}_setParent(t){if(t instanceof _){var e=t;this.URI||(this.URI=e.URI),this.style&&this.style.inherit(e.style)}}appendChild(t){return this.addChild(t)}addChild(t){return t.parent&&t.parent.removeChild(t),this._children||(this._children=[]),this._children.push(t),t.parent=this,t._setParent(this),this.repaint(),t}removeChild(t){if(!this._children)return null;var e,s;for(s=this._children.length,e=0;e<s;e++)if(this._children[e]==t)return this._children.splice(e,1),t;return null}static getClassName(t){return t instanceof Function?t.name:t.constructor.name}destroy(){this._children&&(this.destroyChildren(),this._children.length=0),e.Pool.recover(_.getClassName(this),this.reset())}destroyChildren(){if(this._children){for(var t=this._children.length-1;t>-1;t--)this._children[t].destroy();this._children.length=0}}get style(){return this._style}_getWords(){if(!this._text)return null;var t=this._text.text;if(!t||0===t.length)return null;var s,i=this._text.words;if(i&&i.length===t.length)return i;null===i&&(this._text.words=i=[]),i.length=t.length;for(var r=this.style,h=r.font,l=0,a=t.length;l<a;l++)s=e.ILaya.Browser.measureText(t.charAt(l),h),i[l]=e.HTMLChar.create().setData(t.charAt(l),s.width,s.height||r.fontSize,r);return i}_isChar(){return!1}_layoutLater(){var t=this.style;t._type&i.ADDLAYOUTED||(t.widthed(this)&&(this._children&&this._children.length>0||null!=this._getWords())&&t.block?(n.later(this),t._type|=i.ADDLAYOUTED):this.parent&&this.parent._layoutLater())}set x(t){this._x!=t&&(this._x=t,this.parentRepaint())}get x(){return this._x}set y(t){this._y!=t&&(this._y=t,this.parentRepaint())}get y(){return this._y}get width(){return this._width}set width(t){this._width!==t&&(this._width=t,this.repaint())}get height(){return this._height}set height(t){this._height!==t&&(this._height=t,this.repaint())}_setAttributes(t,e){switch(t){case\"style\":this.style.cssText(e);break;case\"class\":this.className=e;break;case\"x\":this.x=parseFloat(e);break;case\"y\":this.y=parseFloat(e);break;case\"width\":this.width=parseFloat(e);break;case\"height\":this.height=parseFloat(e);break;default:this[t]=e}}set href(t){this._style&&t!=this._style.href&&(this._style.href=t,this.repaint())}get href(){return this._style?this._style.href:null}formatURL(t){return this.URI?_.formatURL1(t,this.URI?this.URI.path:null):t}set color(t){this.style.color=t}set className(t){this.style.attrs(r.document.styleSheets[\".\"+t])}drawToGraphic(t,e,s,i){e+=this.x,s+=this.y;var r,h,l,a=this.style;if(a.paddingLeft&&(e+=a.paddingLeft),a.paddingTop&&(s+=a.paddingTop),(null!=a.bgColor||a.borderColor)&&t.drawRect(e,s,this.width,this.height,a.bgColor,a.borderColor,1),this.renderSelfToGraphic(t,e,s,i),this._children&&this._children.length>0)for(h=this._children.length,r=0;r<h;r++)null!=(l=this._children[r]).drawToGraphic&&l.drawToGraphic(t,e,s,i)}renderSelfToGraphic(t,e,s,i){var r=this.style,l=this._getWords();if(l&&(l.length,r)){var a=r.font,n=r.color;if(r.stroke){var o=r.stroke;o=parseInt(o);var _=r.strokeColor;t.fillBorderWords(l,e,s,a,n,_,o)}else t.fillWords(l,e,s,a,n);if(this.href){var d=l[l.length-1],g=d.y+d.height;if(d.y==l[0].y){\"none\"!=r.textDecoration&&t.drawLine(l[0].x,g,d.x+d.width,g,n,1);var c=h.create();c.rec.setTo(l[0].x,d.y,d.x+d.width-l[0].x,d.height),c.href=this.href,i.push(c)}else this.workLines(l,t,i)}}}workLines(t,e,s){var i,r,h,l,a;if(i=\"none\"!=this.style.textDecoration,h=t.length,a=l=t[r],l){var n;for(r=1;r<h;r++)(n=t[r]).y!=l.y?(this.createOneLine(l,a,i,e,s),l=n,a=n):a=n;this.createOneLine(l,a,i,e,s)}}createOneLine(t,e,s,i,r){var l=e.y+e.height;s&&i.drawLine(t.x,l,e.x+e.width,l,this.style.color,1);var a=h.create();a.rec.setTo(t.x,e.y,e.x+e.width-t.x,e.height),a.href=this.href,r.push(a)}}_._EMPTYTEXT={text:null,words:null},e.ILaya.regClass(_),l.HTMLElementType=t.HTMLElementType,e.ClassUtils.regClass(\"laya.html.dom.HTMLElement\",_),e.ClassUtils.regClass(\"Laya.HTMLElement\",_);class d{_addToLayout(t){t.push(this)}reset(){return this}destroy(){e.Pool.recover(_.getClassName(this),this.reset())}_setParent(t){}set parent(t){}set URI(t){}set href(t){}_getCSSStyle(){return d.brStyle||(d.brStyle=new i,d.brStyle.setLineElement(!0),d.brStyle.block=!0),d.brStyle}renderSelfToGraphic(t,e,s,i){}}l.HTMLBrElement=d,e.ILaya.regClass(d),e.ClassUtils.regClass(\"laya.html.dom.HTMLBrElement\",d),e.ClassUtils.regClass(\"Laya.HTMLBrElement\",d);class g extends _{_creates(){}drawToGraphic(t,e,s,i){}reset(){return this}set innerTEXT(t){i.parseCSS(t,null)}get innerTEXT(){return super.innerTEXT}}e.ILaya.regClass(g),e.ClassUtils.regClass(\"laya.html.dom.HTMLStyleElement\",g),e.ClassUtils.regClass(\"Laya.HTMLStyleElement\",g);class c extends _{_creates(){}drawToGraphic(t,e,s,i){}reset(){return this._loader&&this._loader.off(e.Event.COMPLETE,this,this._onload),this._loader=null,this}_onload(t){switch(this._loader&&(this._loader=null),this.type){case\"text/css\":i.parseCSS(t,this.URI)}this.repaint(!0)}set href(t){t&&(t=this.formatURL(t),this.URI=new e.URL(t),this._loader&&this._loader.off(e.Event.COMPLETE,this,this._onload),e.Loader.getRes(t)?\"text/css\"==this.type&&i.parseCSS(e.Loader.getRes(t),this.URI):(this._loader=new e.Loader,this._loader.once(e.Event.COMPLETE,this,this._onload),this._loader.load(t,e.Loader.TEXT)))}get href(){return super.href}}c._cuttingStyle=new RegExp(\"((@keyframes[\\\\s\\\\t]+|)(.+))[\\\\t\\\\n\\\\r\\\\s]*{\",\"g\"),e.ILaya.regClass(c),e.ClassUtils.regClass(\"laya.html.dom.HTMLLinkElement\",c),e.ClassUtils.regClass(\"Laya.HTMLLinkElement\",c);class y extends _{constructor(){super(...arguments),this.repaintHandler=null}reset(){return super.reset(),this._style.block=!0,this._style.setLineElement(!0),this._style.width=200,this._style.height=200,this.repaintHandler=null,this.contextHeight=0,this.contextWidth=0,this}set innerHTML(t){this.destroyChildren(),this.appendHTML(t)}set width(t){var e;e=0===t?t!=this._width:t!=this.width,super.width=t,e&&this.layout()}appendHTML(t){l.HTMLParse.parse(this,t,this.URI),this.layout()}_addChildsToLayout(t){var e=this._getWords();if(null==e&&(!this._children||0==this._children.length))return!1;e&&e.forEach(function(e){t.push(e)});for(var s=!0,i=0,r=this._children.length;i<r;i++){var h=this._children[i];s?s=!1:t.push(null),h._addToLayout(t)}return!0}_addToLayout(t){this.layout(),!this.style.absolute&&t.push(this)}getBounds(){return this._htmlBounds?(this._boundsRec||(this._boundsRec=e.Rectangle.create()),this._boundsRec.copyFrom(this._htmlBounds)):null}parentRepaint(t=!1){super.parentRepaint(),this.repaintHandler&&this.repaintHandler.runWith(t)}layout(){this.style._type|=i.ADDLAYOUTED;var t=n.layout(this);if(t){this._htmlBounds||(this._htmlBounds=e.Rectangle.create());var s=this._htmlBounds;s.x=s.y=0,s.width=this.contextWidth=t[0],s.height=this.contextHeight=t[1]}}get height(){return this._height?this._height:this.contextHeight}set height(t){super.height=t}get width(){return this._width?this._width:this.contextWidth}}l.HTMLDivParser=y,e.ILaya.regClass(y),e.ClassUtils.regClass(\"laya.html.dom.HTMLDivParser\",y),e.ClassUtils.regClass(\"Laya.HTMLDivParser\",y);class u extends _{constructor(){super(),this.eletype=t.HTMLElementType.IMAGE}reset(){return super.reset(),this._tex&&this._tex.off(e.Event.LOADED,this,this.onloaded),this._tex=null,this._url=null,this}set src(t){if(t=this.formatURL(t),this._url!==t){this._url=t;var s=this._tex=e.Loader.getRes(t);s||(this._tex=s=new e.Texture,s.load(t),e.Loader.cacheTexture(t,s)),s.getIsReady()?this.onloaded():s.once(e.Event.READY,this,this.onloaded)}}onloaded(){if(this._style){var t=this._style;t.widthed(this)||this._tex.width,t.heighted(this)||this._tex.height;t.widthed(this)||this._width==this._tex.width||(this.width=this._tex.width,this.parent&&this.parent._layoutLater()),t.heighted(this)||this._height==this._tex.height||(this.height=this._tex.height,this.parent&&this.parent._layoutLater()),this.repaint()}}_addToLayout(t){!this._style.absolute&&t.push(this)}renderSelfToGraphic(t,e,s,i){this._tex&&t.drawImage(this._tex,e,s,this.width||this._tex.width,this.height||this._tex.height)}}l.HTMLImageElement=u,e.ILaya.regClass(u),e.ClassUtils.regClass(\"laya.html.dom.HTMLImageElement\",u),e.ClassUtils.regClass(\"Laya.HTMLImageElement\",u);class p{static getInstance(t){var s=e.Pool.getItem(p._htmlClassMapShort[t]);return s||(s=e.ClassUtils.getInstance(t)),s}static parse(t,s,i){s=(s=\"<root>\"+(s=s.replace(/<br>/g,\"<br/>\"))+\"</root>\").replace(p.spacePattern,p.char255);var r=e.Utils.parseXMLFromString(s);p._parseXML(t,r.childNodes[0].childNodes,i)}static _parseXML(t,e,s,i=null){var r,h;if(e.join||e.item)for(r=0,h=e.length;r<h;++r)p._parseXML(t,e[r],s,i);else{var a,n;if(3==e.nodeType){var o;if(t instanceof l.HTMLDivParser)null==e.nodeName&&(e.nodeName=\"#text\"),n=e.nodeName.toLowerCase(),(o=e.textContent.replace(/^\\s+|\\s+$/g,\"\")).length>0&&(a=p.getInstance(n))&&(t.addChild(a),a.innerTEXT=o.replace(p.char255AndOneSpacePattern,\" \"));else if((o=e.textContent.replace(/^\\s+|\\s+$/g,\"\")).length>0){var d=t;if(t instanceof _&&t.innerTEXT&&t.innerTEXT.length>0){let e=p.getInstance(\"p\");e&&(t.addChild(e),d=e)}d.innerTEXT=o.replace(p.char255AndOneSpacePattern,\" \")}return}if(\"#comment\"==(n=e.nodeName.toLowerCase()))return;if(a=p.getInstance(n)){\"p\"==n?(t.addChild(p.getInstance(\"br\")),a=t.addChild(a),t.addChild(p.getInstance(\"br\"))):a=t.addChild(a),a.URI=s,a.href=i;var g=e.attributes;if(g&&g.length>0)for(r=0,h=g.length;r<h;++r){var c=g[r],y=c.nodeName,u=c.value;a._setAttributes(y,u)}p._parseXML(a,e.childNodes,s,a.href)}else p._parseXML(t,e.childNodes,s,i)}}}p.char255=String.fromCharCode(255),p.spacePattern=/&nbsp;|&#160;/g,p.char255AndOneSpacePattern=new RegExp(String.fromCharCode(255)+\"|(\\\\s+)\",\"g\"),p._htmlClassMapShort={div:y,p:_,img:u,span:_,br:d,style:g,font:_,a:_,\"#text\":_,link:c},l.HTMLParse=p,e.ClassUtils.regClass(\"div\",y),e.ClassUtils.regClass(\"p\",_),e.ClassUtils.regClass(\"img\",u),e.ClassUtils.regClass(\"span\",_),e.ClassUtils.regClass(\"br\",d),e.ClassUtils.regClass(\"style\",g),e.ClassUtils.regClass(\"font\",_),e.ClassUtils.regClass(\"a\",_),e.ClassUtils.regClass(\"#text\",_),e.ClassUtils.regClass(\"link\",c),e.ClassUtils.regClass(\"laya.html.utils.HTMLParse\",p),e.ClassUtils.regClass(\"Laya.HTMLParse\",p);class L extends e.Sprite{constructor(){super(),this._recList=[],this._repaintState=0,this._element=new y,this._element.repaintHandler=new e.Handler(this,this._htmlDivRepaint),this.mouseEnabled=!0,this.on(e.Event.CLICK,this,this._onMouseClick)}destroy(t=!0){this._element&&this._element.reset(),this._element=null,this._doClears(),super.destroy(t)}_htmlDivRepaint(t=!1){t?this._repaintState<2&&(this._repaintState=2):this._repaintState<1&&(this._repaintState=1),this._repaintState>0&&this._setGraphicDirty()}_updateGraphicWork(){switch(this._repaintState){case 1:this._updateGraphic();break;case 2:this._refresh()}}_setGraphicDirty(){this.callLater(this._updateGraphicWork)}_doClears(){if(this._recList){var t,e=this._recList.length;for(t=0;t<e;t++)this._recList[t].recover();this._recList.length=0}}_updateGraphic(){this._doClears(),this.graphics.clear(!0),this._repaintState=0,this._element.drawToGraphic(this.graphics,-this._element.x,-this._element.y,this._recList);var t=this._element.getBounds();t&&this.setSelfBounds(t),this.size(t.width,t.height)}get style(){return this._element.style}set innerHTML(t){this._innerHTML!=t&&(this._repaintState=1,this._innerHTML=t,this._element.innerHTML=t,this._setGraphicDirty())}_refresh(){this._repaintState=1,this._innerHTML&&(this._element.innerHTML=this._innerHTML),this._setGraphicDirty()}get contextWidth(){return this._element.contextWidth}get contextHeight(){return this._element.contextHeight}_onMouseClick(){var t,e,s,i=this.mouseX,r=this.mouseY;for(e=this._recList.length,t=0;t<e;t++)(s=this._recList[t]).rec.contains(i,r)&&this._eventLink(s.href)}_eventLink(t){this.event(e.Event.LINK,[t])}}l.HTMLDivElement=L,l.HTMLParse=p,e.ClassUtils.regClass(\"laya.html.dom.HTMLDivElement\",L),e.ClassUtils.regClass(\"Laya.HTMLDivElement\",L);class T extends L{constructor(){super(),this._element._getCSSStyle().valign=\"middle\"}set href(t){t=this._element.formatURL(t);var s=new e.Loader;s.once(e.Event.COMPLETE,null,s=>{var i=this._element.URI;this._element.URI=new e.URL(t),this.innerHTML=s,!i||(this._element.URI=i)}),s.load(t,e.Loader.TEXT)}}e.ClassUtils.regClass(\"laya.html.dom.HTMLIframeElement\",T),e.ClassUtils.regClass(\"Laya.HTMLIframeElement\",T),t.HTMLBrElement=d,t.HTMLDivElement=L,t.HTMLDivParser=y,t.HTMLDocument=r,t.HTMLElement=_,t.HTMLExtendStyle=s,t.HTMLHitRect=h,t.HTMLIframeElement=T,t.HTMLImageElement=u,t.HTMLLinkElement=c,t.HTMLParse=p,t.HTMLStyle=i,t.HTMLStyleElement=g,t.IHtml=l,t.Layout=n,t.LayoutLine=a}(window.Laya=window.Laya||{},Laya);"}