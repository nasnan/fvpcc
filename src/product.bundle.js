!function(n){var r={};function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:e})},t.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=8)}([function(n,r,t){var e,o,i={},a=(e=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=e.apply(this,arguments)),o}),l=function(n){var r={};return function(n){if("function"==typeof n)return n();if(void 0===r[n]){var t=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}}(),d=null,s=0,c=[],p=t(4);function f(n,r){for(var t=0;t<n.length;t++){var e=n[t],o=i[e.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](e.parts[a]);for(;a<e.parts.length;a++)o.parts.push(v(e.parts[a],r))}else{var l=[];for(a=0;a<e.parts.length;a++)l.push(v(e.parts[a],r));i[e.id]={id:e.id,refs:1,parts:l}}}}function u(n,r){for(var t=[],e={},o=0;o<n.length;o++){var i=n[o],a=r.base?i[0]+r.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};e[a]?e[a].parts.push(l):t.push(e[a]={id:a,parts:[l]})}return t}function h(n,r){var t=l(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var e=c[c.length-1];if("top"===n.insertAt)e?e.nextSibling?t.insertBefore(r,e.nextSibling):t.appendChild(r):t.insertBefore(r,t.firstChild),c.push(r);else if("bottom"===n.insertAt)t.appendChild(r);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=l(n.insertInto+" "+n.insertAt.before);t.insertBefore(r,o)}}function m(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var r=c.indexOf(n);r>=0&&c.splice(r,1)}function g(n){var r=document.createElement("style");return n.attrs.type="text/css",b(r,n.attrs),h(n,r),r}function b(n,r){Object.keys(r).forEach(function(t){n.setAttribute(t,r[t])})}function v(n,r){var t,e,o,i;if(r.transform&&n.css){if(!(i=r.transform(n.css)))return function(){};n.css=i}if(r.singleton){var a=s++;t=d||(d=g(r)),e=w.bind(null,t,a,!1),o=w.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var r=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",b(r,n.attrs),h(n,r),r}(r),e=function(n,r,t){var e=t.css,o=t.sourceMap,i=void 0===r.convertToAbsoluteUrls&&o;(r.convertToAbsoluteUrls||i)&&(e=p(e));o&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([e],{type:"text/css"}),l=n.href;n.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}.bind(null,t,r),o=function(){m(t),t.href&&URL.revokeObjectURL(t.href)}):(t=g(r),e=function(n,r){var t=r.css,e=r.media;e&&n.setAttribute("media",e);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){m(t)});return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else o()}}n.exports=function(n,r){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(r=r||{}).attrs="object"==typeof r.attrs?r.attrs:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=a()),r.insertInto||(r.insertInto="head"),r.insertAt||(r.insertAt="bottom");var t=u(n,r);return f(t,r),function(n){for(var e=[],o=0;o<t.length;o++){var a=t[o];(l=i[a.id]).refs--,e.push(l)}n&&f(u(n,r),r);for(o=0;o<e.length;o++){var l;if(0===(l=e[o]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete i[l.id]}}}};var y,x=(y=[],function(n,r){return y[n]=r,y.filter(Boolean).join("\n")});function w(n,r,t,e){var o=t?"":e.css;if(n.styleSheet)n.styleSheet.cssText=x(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}},function(n,r){n.exports=function(n){var r=[];return r.toString=function(){return this.map(function(r){var t=function(n,r){var t=n[1]||"",e=n[3];if(!e)return t;if(r&&"function"==typeof btoa){var o=(a=e,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=e.sources.map(function(n){return"/*# sourceURL="+e.sourceRoot+n+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(r,n);return r[2]?"@media "+r[2]+"{"+t+"}":t}).join("")},r.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var e={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(e[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&e[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),r.push(a))}},r}},function(n,r,t){(n.exports=t(1)(!1)).push([n.i,"body\r\n{\r\n\tcolor: #333;\r\n\tbackground-color: #e0e0e0;\r\n}\r\n#header\r\n{\r\n\tbackground-color: #ebf2f3;\r\n}\r\nheader\r\n{\r\n\tcolor: #fff;\r\n\tbackground-color: #39AECF;\r\n}\r\nheader nav\r\n{\r\n\tbackground-color: #025167;\r\n\tborder-color: #e0e0e0;\r\n}\r\nheader nav a:link,header nav a:visited\r\n{\r\n\tcolor: #e0e0e0;\r\n\tbackground-color: transparent;\r\n\tborder-color: #e0e0e0;\r\n}\r\nheader nav a:hover\r\n{\r\n\tcolor: #fff;\r\n\tbackground-color: #057d9f;\r\n}\r\nheader nav a:active\r\n{\r\n\tcolor: #667;\r\n\tbackground-color: #ec8;\r\n}\r\nheader nav a.here:link,\r\nheader nav a.here:visited,\r\nheader nav a.here:hover,\r\nheader nav a.here:active\r\n{\r\n\tcolor: #fff;\r\n\tbackground-color: #206676;\r\n}\r\nbody #mainwrap\r\n{\r\n\tbackground-color: #fff;\r\n}\r\nbody #main\r\n{\r\n\tcolor: #333;\r\n\tbackground-color: #fff;\r\n}\r\nh1\r\n{\r\n\tcolor: #61b7cf;\r\n}\r\nbody div #imageBox .imageCount li\r\n{\r\n\tcolor: #fff;\r\n\tbackground-color: #60b9ce;\r\n}\r\nbody div #imageBox .imageCount li.current\r\n{\r\n\tbackground-color: #39AECF;\r\n}\r\nbody #main nav li a\r\n{\r\n\tcolor: #333;\r\n}",""])},function(n,r,t){var e=t(2);"string"==typeof e&&(e=[[n.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(0)(e,o);e.locals&&(n.exports=e.locals)},function(n,r){n.exports=function(n){var r="undefined"!=typeof window&&window.location;if(!r)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=r.protocol+"//"+r.host,e=t+r.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,r){var o,i=r.trim().replace(/^"(.*)"$/,function(n,r){return r}).replace(/^'(.*)'$/,function(n,r){return r});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:e+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,r,t){(n.exports=t(1)(!1)).push([n.i,'*\r\n{\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\nnav,header,article\r\n{\r\n\tdisplay: block;\r\n}\r\na\r\n{\r\n\tfont-weight: bold;\r\n\ttext-decoration: none;\r\n}\r\nbody\r\n{\r\n\tmargin: 16px 10%;\r\n\tmax-width: 960px;\r\n\tfont-size: 76%;\r\n\tfont-family: "Helvetica","Arial",sans-serif;\r\n}\r\nheader\r\n{\r\n\tmin-width: 700px;\r\n}\r\nheader #logoitem\r\n{\r\n    min-height: 200px;\r\n    border-bottom: 1px solid;\r\n    position: relative;\r\n}\r\nheader nav\r\n{\r\n\tpadding-left: 10%;\r\n}\r\nheader nav ul\r\n{\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n\tborder-left-width: 1px;\r\n\tborder-left-style: solid;\r\n}\r\nheader nav li\r\n{\r\n\tdisplay: inline;\r\n}\r\nheader nav li a\r\n{\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\tpadding: 8px 48px;\r\n\tborder-right: 1px solid;\r\n}\r\n#logo\r\n{\r\n    position: absolute;\r\n    top: 120px;\r\n    right: 70px;\r\n    font-size: 30px;\r\n}\r\nbody #mainwrap\r\n{\r\n\tmin-width: 700px;\r\n\tpadding-bottom: 20px;\r\n}\r\nbody #main\r\n{\r\n\tborder-top: 1px solid #e0e0e0;\r\n\tmargin: 0px 10%;\r\n\tpadding-top: 30px;\r\n\tline-height: 27px;\r\n}\r\nh1\r\n{\r\n\tfont-family: "Times New Roman",sans-serif;\r\n\tfont: 18px normal;\r\n\tfont-weight: bold;\r\n\tmargin-bottom: 16px; \r\n}\r\nbody div #colA\r\n{\r\n\twidth: 400px;\r\n\t\r\n    float: left;\r\n    display: block;\r\n}\r\nbody div #colB\r\n{\r\n\twidth: 30%;\r\n    float: left;\r\n \tmargin-left: 130px;\r\n    display: block;\r\n}\r\n.clear\r\n{\r\n\tclear: both;\r\n}\r\nbody #main .tiA\r\n{\r\n\tfont-weight: bold;\r\n}\r\n\r\nbody #main .titleA\r\n{\r\n\tmargin-top: 10px;\r\n}\r\nbody div .imageList,body div .imageCount\r\n{\r\n\tlist-style-type: none;\r\n}\r\nbody div #imageBox\r\n{\r\n    margin-top: 25px;\r\n\twidth: 400px;\r\n\theight: 200px;\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n}\r\nbody div #imageBox .imageList\r\n{\r\n\tposition: relative;\r\n\twidth: 400px;\r\n\theight: 200px;\r\n/*\toverflow: hidden;*/\r\n}\r\nbody div #imageBox .imageList ul\r\n{\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n}\r\nbody div #imageBox .imageList li\r\n{\r\n\twidth: 400px;\r\n\theight: 200px;\r\n\toverflow: hidden;\r\n}\r\nbody div #imageBox .imageCount\r\n{\r\n\tposition: absolute;\r\n\tright: 0;\r\n\tbottom: 5px;\r\n}\r\nbody div #imageBox .imageCount li\r\n{\r\n\tfloat: left;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tcursor: pointer;\r\n\tmargin-right: 5px;\r\n\toverflow: hidden;\r\n\tborder-radius: 20px;\r\n\topacity: 0.7;\r\n\ttext-align: center;\r\n}\r\nbody div #imageBox .imageCount li.current\r\n{\r\n\topacity: 1;\r\n}\r\nbody #employwrap .emp\r\n{\r\n\tborder:1px solid #000;\r\n\twidth: 226px;\r\n\theight: 110px;\r\n\tmargin-top: 20px;\r\n\tmargin-right: 42px;\r\n\tmargin-bottom: 10px;\r\n\tfloat: left;\r\n}\r\n\r\nbody #employwrap .emp .empimg\r\n{\r\n\theight: 95px;\r\n\twidth: 100px;\r\n\toverflow: hidden;\r\n\tmargin-top: 15px;\r\n\tmargin-left: 15px;\r\n\tfloat: left;\r\n}\r\nbody #employwrap .emp .empimg img\r\n{\r\n\theight: 80px;\r\n\twidth: 80px;\r\n\tfloat: left;\r\n}\r\nbody #employwrap .emp .empinfo\r\n{\r\n\tmargin-top: 12px;\r\n\tfloat: left;\r\n}\r\nbody .empinfo h3\r\n{\r\n\tmargin-bottom: 10px;\r\n}\r\nbody #main .onepro\r\n{\r\n\tmargin:20px 0px 50px 0px;\r\n\toverflow: hidden;\r\n\r\n}\r\nbody #main .proname\r\n{\r\n\tborder-bottom: 1px solid #333;\r\n}\r\nbody #main .procont ul\r\n{\r\n\tlist-style-type: none;\r\n\toverflow: hidden;\r\n}\r\nbody #main .procont ul li\r\n{\r\n\tdisplay: inline;\r\n}\r\nbody #main .procont ul li img\r\n{\r\n\tmargin: 10px 0px;\r\n\tcursor: pointer;\r\n}\r\nbody #main .procont ul li:nth-child(odd)\r\n{\r\n\tmargin-right: 64px;\r\n}\r\nbody #main .procont ul div.promore\r\n{\r\n\tborder: 1px solid #000;\r\n\tmin-height: 100px;\r\n\twidth: auto;\r\n\tpadding: 10px 20px;\r\n\tmargin: 10px 0px;\r\n\tdisplay: none;\r\n}\r\n',""])},function(n,r,t){var e=t(5);"string"==typeof e&&(e=[[n.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(0)(e,o);e.locals&&(n.exports=e.locals)},function(n,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.highlightPage=void 0,t(6),t(3);var e=function(){if(!document.getElementsByTagName)return!1;if(!document.getElementsByTagName("header"))return!1;var n=document.getElementsByTagName("header")[0].getElementsByTagName("nav");if(0==n.length)return!1;for(var r,t=n[0].getElementsByTagName("a"),e=0;e<t.length;e++)r=t[e].getAttribute("href"),-1!=window.location.href.indexOf(r)&&(t[e].className="here")};r.highlightPage=e,window.onload=e},function(n,r,t){"use strict";var e=t(7);window.onload=function(){(0,e.highlightPage)(),function(){for(var n=document.getElementById("main").getElementsByTagName("img"),r=0;r<n.length;r++)n[r].iscilck=!1,n[r].getAttribute("alt")&&(n[r].temp=n[r].getAttribute("alt")+"more",n[r].onclick=function(){0==this.iscilck?(document.getElementById(this.temp).style.display="block",this.iscilck=!0):(document.getElementById(this.temp).style.display="none",this.iscilck=!1)})}()}}]);