!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CurvedMenu=t():e.CurvedMenu=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t=window.webpackHotUpdateCurvedMenu;window.webpackHotUpdateCurvedMenu=function(e,n){!function(e,t){if(!_[e]||!y[e])return;for(var n in y[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--m&&0===b&&O()}(e,n),t&&t(e,n)};var n,r=!0,o="c187cdc2490cd9cdaa5d",i=1e4,a={},s=[],c=[];function u(e){var t=C[e];if(!t)return M;var r=function(r){return t.hot.active?(C[r]?C[r].parents.indexOf(e)<0&&C[r].parents.push(e):(s=[e],n=r),t.children.indexOf(r)<0&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),s=[]),M(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return M[e]},set:function(t){M[e]=t}}};for(var i in M)Object.prototype.hasOwnProperty.call(M,i)&&"e"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===l&&p("prepare"),b++,M.e(e).then(t,function(e){throw t(),e});function t(){b--,"prepare"===l&&(g[e]||E(e),0===b&&0===m&&O())}},r}var d=[],l="idle";function p(e){l=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var f,h,v,m=0,b=0,g={},y={},_={};function x(e){return+e+""===e?+e:e}function w(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return r=e,p("check"),(t=i,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=M.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return p("idle"),null;y={},g={},_=e.c,v=e.h,p("prepare");var t=new Promise(function(e,t){f={resolve:e,reject:t}});h={};return E(0),"prepare"===l&&0===b&&0===m&&O(),t});var t}function E(e){_[e]?(y[e]=!0,m++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=M.p+""+e+"."+o+".hot-update.js",t.appendChild(n)}(e)):g[e]=!0}function O(){p("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then(function(){return j(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(x(n));e.resolve(t)}}function j(t){if("ready"!==l)throw new Error("apply() is only allowed in ready status");var n,r,i,c,u;function d(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,a=o.chain;if((c=C[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var s=0;s<c.parents.length;s++){var u=c.parents[s],d=C[u];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([u]),moduleId:i,parentId:u};t.indexOf(u)>=0||(d.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),f(n[u],[i])):(delete n[u],t.push(u),r.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];e.indexOf(r)<0&&e.push(r)}}t=t||{};var m={},b=[],g={},y=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var w in h)if(Object.prototype.hasOwnProperty.call(h,w)){var E;u=x(w);var O=!1,j=!1,k=!1,A="";switch((E=h[w]?d(u):{type:"disposed",moduleId:w}).chain&&(A="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+E.moduleId+A));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+A));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(O=new Error("Aborted because "+u+" is not accepted"+A));break;case"accepted":t.onAccepted&&t.onAccepted(E),j=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),k=!0;break;default:throw new Error("Unexception type "+E.type)}if(O)return p("abort"),Promise.reject(O);if(j)for(u in g[u]=h[u],f(b,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,u)&&(m[u]||(m[u]=[]),f(m[u],E.outdatedDependencies[u]));k&&(f(b,[E.moduleId]),g[u]=y)}var P,I=[];for(r=0;r<b.length;r++)u=b[r],C[u]&&C[u].hot._selfAccepted&&I.push({module:u,errorHandler:C[u].hot._selfAccepted});p("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete installedChunks[e]}(e)});for(var S,L,D=b.slice();D.length>0;)if(u=D.pop(),c=C[u]){var U={},z=c.hot._disposeHandlers;for(i=0;i<z.length;i++)(n=z[i])(U);for(a[u]=U,c.hot.active=!1,delete C[u],delete m[u],i=0;i<c.children.length;i++){var H=C[c.children[i]];H&&((P=H.parents.indexOf(u))>=0&&H.parents.splice(P,1))}}for(u in m)if(Object.prototype.hasOwnProperty.call(m,u)&&(c=C[u]))for(L=m[u],i=0;i<L.length;i++)S=L[i],(P=c.children.indexOf(S))>=0&&c.children.splice(P,1);for(u in p("apply"),o=v,g)Object.prototype.hasOwnProperty.call(g,u)&&(e[u]=g[u]);var R=null;for(u in m)if(Object.prototype.hasOwnProperty.call(m,u)&&(c=C[u])){L=m[u];var T=[];for(r=0;r<L.length;r++)if(S=L[r],n=c.hot._acceptedDependencies[S]){if(T.indexOf(n)>=0)continue;T.push(n)}for(r=0;r<T.length;r++){n=T[r];try{n(L)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:u,dependencyId:L[r],error:e}),t.ignoreErrored||R||(R=e)}}}for(r=0;r<I.length;r++){var B=I[r];u=B.module,s=[u];try{M(u)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:n,orginalError:e,originalError:e}),t.ignoreErrored||R||(R=n),R||(R=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:u,error:e}),t.ignoreErrored||R||(R=e)}}return R?(p("fail"),Promise.reject(R)):(p("idle"),new Promise(function(e){e(b)}))}var C={};function M(t){if(C[t])return C[t].exports;var r=C[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:w,apply:j,status:function(e){if(!e)return l;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:a[e]};return n=void 0,t}(t),parents:(c=s,s=[],c),children:[]};return e[t].call(r.exports,r,r.exports,u(t)),r.l=!0,r.exports}return M.m=e,M.c=C,M.d=function(e,t,n){M.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},M.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return M.d(t,"a",t),t},M.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},M.p="",M.h=function(){return o},u(4)(M.s=4)}([function(e,t,n){(e.exports=n(8)(!1)).push([e.i,'.curved-menu{position:relative;z-index:3;display:inline-block}.curved-menu__curve-container{width:100%;height:100%;overflow:hidden;box-sizing:border-box;position:absolute;left:0;top:0}.curved-menu__curve-container__curve{border-radius:50%;box-sizing:border-box;position:absolute;right:2px;top:50%;transform:translateY(-50%);transition:all .3s ease;box-shadow:0 0 0 2px #eee}.curved-menu__point{position:absolute;z-index:1;cursor:pointer;display:flex;align-items:center}.curved-menu__point__bullet{position:relative;flex:0 0 auto;box-sizing:border-box;z-index:2;transform:scale(1);transition:all .3s ease}.curved-menu__point__bullet:before{content:"";display:block;position:absolute;z-index:0;left:0;top:0;right:0;bottom:0;background-image:linear-gradient(270deg,#f78ca0 0,#fd868c);background-size:200% 200%;background-position:0 0;border-radius:50%}.curved-menu__point__bullet:after{content:"";display:block;position:absolute;z-index:0;left:5px;top:5px;right:5px;bottom:5px;border-radius:50%!important;background-color:#fff;transition:all .3s ease}.curved-menu__point__label{position:relative;flex:0 0 auto;padding:2px 15px 3px;color:#fff;background-color:#fd868c;box-shadow:1px 1px 0 2px #fff,2px 2px 5px #fd868c;box-sizing:border-box;border-radius:30px;font-size:12px;text-transform:uppercase;font-family:sans-serif;white-space:nowrap;z-index:1;opacity:0;transform:translateX(-10px);transition:opacity .3s ease,transform .3s ease;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:100}.curved-menu__point__label:before{content:"";display:block;position:absolute;width:0;height:0;left:-3px;top:50%;transform:translateY(-50%);border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:5px solid #fd868c}.curved-menu__point:hover .curved-menu__point__bullet{transform:scale(1.1)}.curved-menu__point:hover .curved-menu__point__bullet:before{background-position:100% 100%}.curved-menu__point:hover .curved-menu__point__bullet:after{transform:scale(.6);background-color:#eee}.curved-menu__point:hover .curved-menu__point__label{transform:translateX(15px);opacity:1}.curved-menu__point--active .curved-menu__point__bullet:before{background:linear-gradient(270deg,#00d499 0,#00bcd4)}.curved-menu__point--active .curved-menu__point__label{background-color:#15d69c;box-shadow:1px 1px 0 2px #fff,2px 2px 5px #15d69c}.curved-menu__point--active .curved-menu__point__label:before{border-right:5px solid #15d69c}',""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCanvasSize=t.getCos=t.getWidth=void 0;var r=n(2);function o(e,t){var n=(0,r.getCos)(t/2);return Math.round(e-n*e)}t.getWidth=o,t.getCos=r.getCos,t.getCanvasSize=function(e,t){return{width:o(e,t),height:function(e,t){var n=(0,r.getSin)(t/2);return Math.round(e*n*2)}(e,t)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSin=function(e){return e<90?Math.sin(e*(Math.PI/180)):1},t.getCos=function(e){return e<90?Math.cos(e*(Math.PI/180)):0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.stylize=function(e,t){for(var n in t)e.style[n]=t[n];return e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(5),a=n(6);n(7);var s=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.rootElem=t,this.config=n,this.activePoint=null}return o(e,[{key:"init",value:function(){var e,t=this;this.canvasElement=(0,i.getCanvas)(r({rootElem:this.rootElem},this.config)),this.pointElements=(0,a.getPointElements)(this.config,{click:function(e){t.setActivePoint(e.getAttribute("point-id"))}}),this.canvasElement=(e=this.canvasElement).append.apply(e,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(this.pointElements)),this.config.onInit&&"function"==typeof this.config.onInit&&this.config.onInit()}},{key:"setActivePoint",value:function(e){var t=!0,n=!1,r=void 0;try{for(var o,i=this.pointElements[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;e==a.getAttribute("point-id")?(this.activePoint=e,a.classList.add("curved-menu__point--active")):a.classList.remove("curved-menu__point--active")}}catch(e){n=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}this.config.onClick(e)}}]),e}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPathElement=t.stylizeCanvas=t.getCanvas=void 0;var r=n(1),o=n(3);function i(e){var t=e.canvasElem,n=e.radius,i=e.angle,a=e.pointSize,s=(0,r.getCanvasSize)(n,i),c=s.width,u=s.height;return t.classList.add("curved-menu"),(0,o.stylize)(t,{width:c+"px",height:u+"px",marginTop:a+"px",marginLeft:a+"px"})}function a(e){var t=e.radius,n=(e.angle,document.createElement("div")),r=document.createElement("div");return n.classList.add("curved-menu__curve-container"),r.classList.add("curved-menu__curve-container__curve"),(0,o.stylize)(r,{width:2*t+"px",height:2*t+"px"}),n.appendChild(r),n}t.getCanvas=function(e){var t=e.rootElem,n=e.radius,r=e.angle,o=e.pointSize;t.innerHTML="",i({canvasElem:t,radius:n,angle:r,pointSize:o});var s=a({radius:n,angle:r});return t.appendChild(s),t},t.stylizeCanvas=i,t.getPathElement=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPointElements=void 0;var r=n(2),o=n(1),i=n(3);function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function s(e){var t=e.radius,n=e.angle,a=e.elements,s=e.totalElements,c=e.atBottom,u=(0,o.getCanvasSize)(t,n),d=u.width,l=u.height,p=n/2,f=n/2/a.length;for(var h in a){var v=l/2-(0,r.getSin)(p)*t,m=(0,r.getCos)(p)*t-(t-d);c&&(v=l-v),(0,i.stylize)(a[h],{top:Math.round(v)+"px",left:Math.round(m)+"px"}),p-=s%2==0?f+f/(s-1):f}return a}t.getPointElements=function(e,t){var n=e.radius,r=e.angle,c=e.points,u=void 0===c?[{id:"POINT_ID_1",label:"provide some points"}]:c,d=e.pointSize,l=(0,o.getCanvasSize)(n,r),p=l.width,f=l.height,h=u.length,v=u.map(function(e){var n=e.id,r=e.label,o=document.createElement("div"),a=document.createElement("div"),s=document.createElement("div");return o.setAttribute("point-id",n),s.innerText=r,o.appendChild(a),o.appendChild(s),(0,i.stylize)(o,{top:f/2+"px",left:p+"px",marginLeft:-d/2+"px",marginTop:-d/2+"px"}),(0,i.stylize)(a,{width:d+"px",height:d+"px"}),o.classList.add("curved-menu__point"),a.classList.add("curved-menu__point__bullet"),s.classList.add("curved-menu__point__label"),o.addEventListener("click",function(e){t.click(e.currentTarget)}),o}),m=[],b=[],g=[];return h>1&&h%2==0?(m=v.slice(0,h/2),g=v.slice(h/2).reverse()):h>1&&h%2!=0?(m=v.slice(0,h/2),b=v.slice(h/2,h/2+1),g=v.slice(h/2+1)):m=v,h>1&&(s({radius:n,angle:r,elements:m,totalElements:h,atBottom:!1}),s({radius:n,angle:r,elements:g.reverse(),totalElements:h,atBottom:!0})),[].concat(a(m),a(b),a(g.reverse()))}},function(e,t,n){var r=n(0);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},i=n(9)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(0,function(){var t=n(0);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)}),e.hot.dispose(function(){i()})},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),c=null,u=0,d=[],l=n(10);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function f(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function m(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),b(t,e.attrs),h(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function g(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=u++;n=c||(c=m(t)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}e&&p(f(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var y,_=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]).default});