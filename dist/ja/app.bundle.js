!function(e){function t(t){for(var n,i,o=t[0],s=t[1],a=0,u=[];a<o.length;a++)i=o[a],r[i]&&u.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(c&&c(t);u.length;)u.shift()()}var n={},r={1:0,2:0,3:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,i){n=r[e]=[t,i]});t.push(n[2]=o);var s,a=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+"ja/"+({0:"component2"}[e]||e)+".bundle.js"}(e),s=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+i+": "+o+")");s.type=i,s.request=o,n[1](s)}r[e]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,a.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="dist/",i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var a=0;a<o.length;a++)t(o[a]);var c=s;i(i.s=6)}([function(e,t,n){var r;e.exports=function e(t,n,i){function o(a,c){if(!n[a]){if(!t[a]){var u="function"==typeof r&&r;if(!c&&u)return r(a,!0);if(s)return s(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var p=n[a]={exports:{}};t[a][0].call(p.exports,function(e){var n=t[a][1][e];return o(n||e)},p,p.exports,e,t,n,i)}return n[a].exports}for(var s="function"==typeof r&&r,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(e,t,n){"use strict";
/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */var r=e("fs"),i=e("path"),o=e("./utils"),s=!1,a=e("../package.json").version,c="%",u="locals",l=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],p=l.concat("cache"),f=/^\uFEFF/;function h(e,t){var i,o,s=t.views;if("/"==e.charAt(0))i=n.resolveInclude(e.replace(/^\/*/,""),t.root||"/",!0);else if(t.filename&&(o=n.resolveInclude(e,t.filename),r.existsSync(o)&&(i=o)),i||Array.isArray(s)&&s.some(function(t){return o=n.resolveInclude(e,t,!0),r.existsSync(o)})&&(i=o),!i)throw new Error('Could not find the include file "'+t.escapeFunction(e)+'"');return i}function m(e,t){var r,i=e.filename,o=arguments.length>1;if(e.cache){if(!i)throw new Error("cache option requires a filename");if(r=n.cache.get(i))return r;o||(t=d(i).toString().replace(f,""))}else if(!o){if(!i)throw new Error("Internal EJS error: no file name or template provided");t=d(i).toString().replace(f,"")}return r=n.compile(t,e),e.cache&&n.cache.set(i,r),r}function d(e){return n.fileLoader(e)}function g(e,t,n,r,i){var o=t.split("\n"),s=Math.max(r-3,0),a=Math.min(o.length,r+3),c=i(n),u=o.slice(s,a).map(function(e,t){var n=t+s+1;return(n==r?" >> ":"    ")+n+"| "+e}).join("\n");throw e.path=c,e.message=(c||"ejs")+":"+r+"\n"+u+"\n\n"+e.message,e}function v(e){return e.replace(/;(\s*$)/,"$1")}function y(e,t){t=t||{};var r={};this.templateText=e,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",this.dependencies=[],r.client=t.client||!1,r.escapeFunction=t.escape||o.escapeXML,r.compileDebug=!1!==t.compileDebug,r.debug=!!t.debug,r.filename=t.filename,r.delimiter=t.delimiter||n.delimiter||c,r.strict=t.strict||!1,r.context=t.context,r.cache=t.cache||!1,r.rmWhitespace=t.rmWhitespace,r.root=t.root,r.outputFunctionName=t.outputFunctionName,r.localsName=t.localsName||n.localsName||u,r.views=t.views,r.async=t.async,r.strict?r._with=!1:r._with=void 0===t._with||t._with,this.opts=r,this.regex=this.createRegex()}n.cache=o.cache,n.fileLoader=r.readFileSync,n.localsName=u,n.promiseImpl=new Function("return this;")().Promise,n.resolveInclude=function(e,t,n){var r=i.dirname,o=i.extname,s=i.resolve,a=s(n?t:r(t),e),c=o(e);return c||(a+=".ejs"),a},n.compile=function(e,t){return t&&t.scope&&(s||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),s=!0),t.context||(t.context=t.scope),delete t.scope),new y(e,t).compile()},n.render=function(e,t,n){var r=t||{},i=n||{};return 2==arguments.length&&o.shallowCopyFromList(i,r,l),m(i,e)(r)},n.renderFile=function(){var e,t,r,i=Array.prototype.slice.call(arguments),s=i.shift(),a={filename:s};return"function"==typeof arguments[arguments.length-1]&&(e=i.pop()),i.length?(t=i.shift(),i.length?o.shallowCopy(a,i.pop()):(t.settings&&(t.settings.views&&(a.views=t.settings.views),t.settings["view cache"]&&(a.cache=!0),(r=t.settings["view options"])&&o.shallowCopy(a,r)),o.shallowCopyFromList(a,t,p)),a.filename=s):t={},function(e,t,r){var i;if(!r){if("function"==typeof n.promiseImpl)return new n.promiseImpl(function(n,r){try{i=m(e)(t),n(i)}catch(e){r(e)}});throw new Error("Please provide a callback function")}try{i=m(e)(t)}catch(e){return r(e)}r(null,i)}(a,t,e)},n.clearCache=function(){n.cache.reset()},y.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},y.prototype={createRegex:function(){var e="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",t=o.escapeRegExpChars(this.opts.delimiter);return e=e.replace(/%/g,t),new RegExp(e)},compile:function(){var e,t,n,r=this.opts,i="",s="",a=r.escapeFunction;this.source||(this.generateSource(),i+="  var __output = [], __append = __output.push.bind(__output);\n",r.outputFunctionName&&(i+="  var "+r.outputFunctionName+" = __append;\n"),!1!==r._with&&(i+="  with ("+r.localsName+" || {}) {\n",s+="  }\n"),s+='  return __output.join("");\n',this.source=i+this.source+s),e=r.compileDebug?"var __line = 1\n  , __lines = "+JSON.stringify(this.templateText)+"\n  , __filename = "+(r.filename?JSON.stringify(r.filename):"undefined")+";\ntry {\n"+this.source+"} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n":this.source,r.client&&(e="escapeFn = escapeFn || "+a.toString()+";\n"+e,r.compileDebug&&(e="rethrow = rethrow || "+g.toString()+";\n"+e)),r.strict&&(e='"use strict";\n'+e),r.debug&&console.log(e);try{if(r.async)try{n=new Function("return (async function(){}).constructor;")()}catch(e){throw e instanceof SyntaxError?new Error("This environment does not support async/await"):e}else n=Function;t=new n(r.localsName+", escapeFn, include, rethrow",e)}catch(e){throw e instanceof SyntaxError&&(r.filename&&(e.message+=" in "+r.filename),e.message+=" while compiling ejs\n\n",e.message+="If the above error is not helpful, you may want to try EJS-Lint:\n",e.message+="https://github.com/RyanZim/EJS-Lint",e.async||(e.message+="\n",e.message+="Or, if you meant to create an async function, pass async: true as an option.")),e}if(r.client)return t.dependencies=this.dependencies,t;var c=function(e){return t.apply(r.context,[e||{},a,function(t,n){var i=o.shallowCopy({},e);return n&&(i=o.shallowCopy(i,n)),function(e,t){var n=o.shallowCopy({},t);return n.filename=h(e,n),m(n)}(t,r)(i)},g])};return c.dependencies=this.dependencies,c},generateSource:function(){var e=this.opts;e.rmWhitespace&&(this.templateText=this.templateText.replace(/\r/g,"").replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var t=this,r=this.parseTemplateText(),i=this.opts.delimiter;r&&r.length&&r.forEach(function(e,s){var a,c,u,l,p,m;if(0===e.indexOf("<"+i)&&0!==e.indexOf("<"+i+i)&&(c=r[s+2])!=i+">"&&c!="-"+i+">"&&c!="_"+i+">")throw new Error('Could not find matching close tag for "'+e+'".');if((u=e.match(/^\s*include\s+(\S+)/))&&(a=r[s-1])&&(a=="<"+i||a=="<"+i+"-"||a=="<"+i+"_"))return l=o.shallowCopy({},t.opts),p=function(e,t){var n,r,i=o.shallowCopy({},t);n=h(e,i),r=d(n).toString().replace(f,""),i.filename=n;var s=new y(r,i);return s.generateSource(),{source:s.source,filename:n,template:r}}(u[1],l),m=t.opts.compileDebug?"    ; (function(){\n      var __line = 1\n      , __lines = "+JSON.stringify(p.template)+"\n      , __filename = "+JSON.stringify(p.filename)+";\n      try {\n"+p.source+"      } catch (e) {\n        rethrow(e, __lines, __filename, __line, escapeFn);\n      }\n    ; }).call(this)\n":"    ; (function(){\n"+p.source+"    ; }).call(this)\n",t.source+=m,void t.dependencies.push(n.resolveInclude(u[1],l.filename));t.scanLine(e)})},parseTemplateText:function(){for(var e,t=this.templateText,n=this.regex,r=n.exec(t),i=[];r;)0!==(e=r.index)&&(i.push(t.substring(0,e)),t=t.slice(e)),i.push(r[0]),t=t.slice(r[0].length),r=n.exec(t);return t&&i.push(t),i},_addOutput:function(e){if(this.truncate?(e=e.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1):this.opts.rmWhitespace&&(e=e.replace(/^\n/,"")),!e)return e;e=(e=(e=(e=e.replace(/\\/g,"\\\\")).replace(/\n/g,"\\n")).replace(/\r/g,"\\r")).replace(/"/g,'\\"'),this.source+='    ; __append("'+e+'")\n'},scanLine:function(e){var t=this.opts.delimiter,n=0;switch(n=e.split("\n").length-1,e){case"<"+t:case"<"+t+"_":this.mode=y.modes.EVAL;break;case"<"+t+"=":this.mode=y.modes.ESCAPED;break;case"<"+t+"-":this.mode=y.modes.RAW;break;case"<"+t+"#":this.mode=y.modes.COMMENT;break;case"<"+t+t:this.mode=y.modes.LITERAL,this.source+='    ; __append("'+e.replace("<"+t+t,"<"+t)+'")\n';break;case t+t+">":this.mode=y.modes.LITERAL,this.source+='    ; __append("'+e.replace(t+t+">",t+">")+'")\n';break;case t+">":case"-"+t+">":case"_"+t+">":this.mode==y.modes.LITERAL&&this._addOutput(e),this.mode=null,this.truncate=0===e.indexOf("-")||0===e.indexOf("_");break;default:if(this.mode){switch(this.mode){case y.modes.EVAL:case y.modes.ESCAPED:case y.modes.RAW:e.lastIndexOf("//")>e.lastIndexOf("\n")&&(e+="\n")}switch(this.mode){case y.modes.EVAL:this.source+="    ; "+e+"\n";break;case y.modes.ESCAPED:this.source+="    ; __append(escapeFn("+v(e)+"))\n";break;case y.modes.RAW:this.source+="    ; __append("+v(e)+")\n";break;case y.modes.COMMENT:break;case y.modes.LITERAL:this._addOutput(e)}}else this._addOutput(e)}this.opts.compileDebug&&n&&(this.currentLine+=n,this.source+="    ; __line = "+this.currentLine+"\n")}},n.escapeXML=o.escapeXML,n.__express=n.renderFile,e.extensions&&(e.extensions[".ejs"]=function(e,t){var r=t||e.filename,i={filename:r,client:!0},o=d(r).toString(),s=n.compile(o,i);e._compile("module.exports = "+s.toString()+";",r)}),n.VERSION=a,n.name="ejs","undefined"!=typeof window&&(window.ejs=n)},{"../package.json":6,"./utils":2,fs:3,path:4}],2:[function(e,t,n){"use strict";var r=/[|\\{}()[\]^$+*?.]/g;n.escapeRegExpChars=function(e){return e?String(e).replace(r,"\\$&"):""};var i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},o=/[&<>'"]/g;function s(e){return i[e]||e}n.escapeXML=function(e){return void 0==e?"":String(e).replace(o,s)},n.escapeXML.toString=function(){return Function.prototype.toString.call(this)+';\nvar _ENCODE_HTML_RULES = {\n      "&": "&amp;"\n    , "<": "&lt;"\n    , ">": "&gt;"\n    , \'"\': "&#34;"\n    , "\'": "&#39;"\n    }\n  , _MATCH_HTML = /[&<>\'"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n'},n.shallowCopy=function(e,t){for(var n in t=t||{})e[n]=t[n];return e},n.shallowCopyFromList=function(e,t,n){for(var r=0;r<n.length;r++){var i=n[r];void 0!==t[i]&&(e[i]=t[i])}return e},n.cache={_data:{},set:function(e,t){this._data[e]=t},get:function(e){return this._data[e]},reset:function(){this._data={}}}},{}],3:[function(e,t,n){},{}],4:[function(e,t,n){(function(e){function t(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(e){return r.exec(e).slice(1)};function o(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}n.resolve=function(){for(var n="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var s=i>=0?arguments[i]:e.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(n=s+"/"+n,r="/"===s.charAt(0))}return n=t(o(n.split("/"),function(e){return!!e}),!r).join("/"),(r?"/":"")+n||"."},n.normalize=function(e){var r=n.isAbsolute(e),i="/"===s(e,-1);return(e=t(o(e.split("/"),function(e){return!!e}),!r).join("/"))||r||(e="."),e&&i&&(e+="/"),(r?"/":"")+e},n.isAbsolute=function(e){return"/"===e.charAt(0)},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(o(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},n.relative=function(e,t){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=n.resolve(e).substr(1),t=n.resolve(t).substr(1);for(var i=r(e.split("/")),o=r(t.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}for(var u=[],c=a;c<i.length;c++)u.push("..");return(u=u.concat(o.slice(a))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(e){var t=i(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},n.basename=function(e,t){var n=i(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},n.extname=function(e){return i(e)[3]};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,e("_process"))},{_process:5}],5:[function(e,t,n){var r,i,o=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(r===setTimeout)return setTimeout(e,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(e){r=s}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(e){i=a}}();var u,l=[],p=!1,f=-1;function h(){p&&u&&(p=!1,u.length?l=u.concat(l):f=-1,l.length&&m())}function m(){if(!p){var e=c(h);p=!0;for(var t=l.length;t;){for(u=l,l=[];++f<t;)u&&u[f].run();f=-1,t=l.length}u=null,p=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new d(e,t)),1!==l.length||p||c(m)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},{}],6:[function(e,t,n){t.exports={name:"ejs",description:"Embedded JavaScript templates",keywords:["template","engine","ejs"],version:"2.6.0",author:"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",contributors:["Timothy Gu <timothygu99@gmail.com> (https://timothygu.github.io)"],license:"Apache-2.0",main:"./lib/ejs.js",repository:{type:"git",url:"git://github.com/mde/ejs.git"},bugs:"https://github.com/mde/ejs/issues",homepage:"https://github.com/mde/ejs",dependencies:{},devDependencies:{browserify:"^13.1.1",eslint:"^4.14.0","git-directory-deploy":"^1.5.1",istanbul:"~0.4.3",jake:"^8.0.16",jsdoc:"^3.4.0","lru-cache":"^4.0.1",mocha:"^5.0.5","uglify-js":"^3.3.16"},engines:{node:">=0.10.0"},scripts:{test:"jake test",lint:'eslint "**/*.js" Jakefile',coverage:"istanbul cover node_modules/mocha/bin/_mocha",doc:"jake doc",devdoc:"jake doc[dev]"}}},{}]},{},[1])(1)},function(e,t,n){"use strict";n.r(t);var r={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.optionName||"i18n";if(t.optionName=n,Object.defineProperty(e.prototype,n,{get:function(){return this.$options[n]}}),t.templating){var r=t.templating.funcName||"$t";t.templating.funcName=r;var i=t.templating.engine,o=function e(t,n){var r,i=(r=n,Array.isArray(r)?r:Array.from(r)),o=i[0],s=i.slice(1);return t[o]&&"string"!=typeof t[o]?e(t[o],s):t[o]};Object.defineProperty(e.prototype,r,{get:function(){var e=this;return function(t,r){var s=o(e[n],t.split("."));return i(s)(r)}}})}}};t.default=r},function(e,t){e.exports='<div>\n  <div>{{ $t(\'greetings\', { name: name }) }}</div>\n  <div>\n    <button v-on:click="lazyLoad">{{ i18n.button_label }}</button>\n  </div>\n  <div id="component2-slot"></div>\n</div>\n'},function(e){e.exports={greetings:"こんにちは<%= name %>さん！",button_label:"コンポーネント２をロード"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(3)),i=o(n(2));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.Vue;t.component("component1",{i18n:r.default,data:function(){return{name:"Luke Skywalker"}},methods:{lazyLoad:function(){n.e(0).then(n.t.bind(null,7,7)).then(function(e){new(t.extend(e.default))({}).$mount("#component2-slot")})}},template:i.default})}},function(e,t){e.exports=Vue},function(e,t,n){"use strict";var r=a(n(5)),i=a(n(1)),o=a(n(0)),s=a(n(4));function a(e){return e&&e.__esModule?e:{default:e}}r.default.use(i.default,{templating:{engine:o.default.compile}}),(0,s.default)({Vue:r.default}),new r.default({el:"#app"})}]);