!function(e,t,n,r){function o(e,t){return typeof e===t}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):T?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function s(){var e=n.body;return e||(e=i(T?"svg":"body"),e.fake=!0),e}function a(e,t,r,o){var a,l,u,f,c="modernizr",d=i("div"),p=s();if(parseInt(r,10))for(;r--;)u=i("div"),u.id=o?o[r]:c+(r+1),d.appendChild(u);return a=i("style"),a.type="text/css",a.id="s"+c,(p.fake?p:d).appendChild(a),p.appendChild(d),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",f=b.style.overflow,b.style.overflow="hidden",b.appendChild(p)),l=t(d,e),p.fake?(p.parentNode.removeChild(p),b.style.overflow=f,b.offsetHeight):d.parentNode.removeChild(d),!!l}function l(e,n,r){var o;if("getComputedStyle"in t){o=getComputedStyle.call(t,e,n);var i=t.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&e.currentStyle&&e.currentStyle[r];return o}function u(e,t){return!!~(""+e).indexOf(t)}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(e,n){var o=e.length;if("CSS"in t&&"supports"in t.CSS){for(;o--;)if(t.CSS.supports(f(e[o]),n))return!0;return!1}if("CSSSupportsRule"in t){for(var i=[];o--;)i.push("("+f(e[o])+":"+n+")");return i=i.join(" or "),a("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"===l(e,null,"position")})}return r}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function p(e,t,n,s){function a(){f&&(delete z.style,delete z.modElem)}if(s=!o(s,"undefined")&&s,!o(n,"undefined")){var l=c(e,n);if(!o(l,"undefined"))return l}for(var f,p,m,v,h,y=["modernizr","tspan","samp"];!z.style&&y.length;)f=!0,z.modElem=i(y.shift()),z.style=z.modElem.style;for(m=e.length,p=0;p<m;p++)if(v=e[p],h=z.style[v],u(v,"-")&&(v=d(v)),z.style[v]!==r){if(s||o(n,"undefined"))return a(),"pfx"!==t||v;try{z.style[v]=n}catch(e){}if(z.style[v]!==h)return a(),"pfx"!==t||v}return a(),!1}function m(e,t){return function(){return e.apply(t,arguments)}}function v(e,t,n){var r;for(var i in e)if(e[i]in t)return!1===n?e[i]:(r=t[e[i]],o(r,"function")?m(r,n||t):r);return!1}function h(e,t,n,r,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+j.join(s+" ")+s).split(" ");return o(t,"string")||o(t,"undefined")?p(a,t,r,i):(a=(e+" "+O.join(s+" ")+s).split(" "),v(a,t,n))}function y(e,t,n){return h(e,r,r,t,n)}var g=[],C={_version:"3.11.4",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){g.push({name:e,fn:t,options:n})},addAsyncTest:function(e){g.push({name:null,fn:e})}},S=function(){};S.prototype=C,S=new S;var x=[],b=n.documentElement,T="svg"===b.nodeName.toLowerCase();S.addTest("history",function(){var e=navigator.userAgent;return!!e&&(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone")||"file:"===location.protocol)&&t.history&&"pushState"in t.history}),S.addTest("cookies",function(){try{n.cookie="cookietest=1";var e=-1!==n.cookie.indexOf("cookietest=");return n.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(e){return!1}});var w=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=w;var k=function(){var e=t.matchMedia||t.msMatchMedia;return e?function(t){var n=e(t);return n&&n.matches||!1}:function(e){var t=!1;return a("@media "+e+" { #modernizr { position: absolute; } }",function(e){t="absolute"===l(e,null,"position")}),t}}();C.mq=k,S.addTest("touchevents",function(){if("ontouchstart"in t||t.TouchEvent||t.DocumentTouch&&n instanceof DocumentTouch)return!0;var e=["(",w.join("touch-enabled),("),"heartz",")"].join("");return k(e)});var _="Moz O ms Webkit",j=C._config.usePrefixes?_.split(" "):[];C._cssomPrefixes=j;var P={elem:i("modernizr")};S._q.push(function(){delete P.elem});var z={style:P.elem.style};S._q.unshift(function(){delete z.style});var O=C._config.usePrefixes?_.toLowerCase().split(" "):[];C._domPrefixes=O,C.testAllProps=h,C.testAllProps=y,S.addTest("backdropfilter",y("backdropFilter"));var E=t.CSS&&t.CSS.supports.bind(t.CSS)||t.supportsCSS;S.addTest("customproperties",!!E&&(E("--f:0")||E("--f",0)));var M=function(e){var n,o=w.length,i=t.CSSRule;if(void 0===i)return r;if(!e)return!1;if(e=e.replace(/^@/,""),(n=e.replace(/-/g,"_").toUpperCase()+"_RULE")in i)return"@"+e;for(var s=0;s<o;s++){var a=w[s];if(a.toUpperCase()+"_"+n in i)return"@-"+a.toLowerCase()+"-"+e}return!1};C.atRule=M;var A=C.prefixed=function(e,t,n){return 0===e.indexOf("@")?M(e):(-1!==e.indexOf("-")&&(e=d(e)),t?h(e,t,n):h(e,"pfx"))};S.addTest("backgroundblendmode",A("backgroundBlendMode","text")),S.addTest("cssgridlegacy",y("grid-columns","10px",!0)),S.addTest("cssgrid",y("grid-template-rows","none",!0));var N="CSS"in t&&"supports"in t.CSS,L="supportsCSS"in t;S.addTest("supports",N||L),S.addTest("cssfilters",function(){if(S.supports)return y("filter","blur(2px)");var e=i("a");return e.style.cssText=w.join("filter:blur(2px); "),!!e.style.length&&(n.documentMode===r||n.documentMode>9)}),S.addTest("objectfit",!!A("objectFit"),{aliases:["object-fit"]}),S.addTest("csspositionsticky",function(){var e="position:",t=i("a"),n=t.style;return n.cssText=e+w.join("sticky;"+e).slice(0,-e.length),-1!==n.position.indexOf("sticky")}),S.addTest("srcset","srcset"in i("img")),function(){var e,t,n,r,i,s,a;for(var l in g)if(g.hasOwnProperty(l)){if(e=[],t=g[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?S[a[0]]=r:(S[a[0]]&&(!S[a[0]]||S[a[0]]instanceof Boolean)||(S[a[0]]=new Boolean(S[a[0]])),S[a[0]][a[1]]=r),x.push((r?"":"no-")+a.join("-"))}}(),function(e){var t=b.className,n=S._config.classPrefix||"";if(T&&(t=t.baseVal),S._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}S._config.enableClasses&&(e.length>0&&(t+=" "+n+e.join(" "+n)),T?b.className.baseVal=t:b.className=t)}(x),delete C.addTest,delete C.addAsyncTest;for(var q=0;q<S._q.length;q++)S._q[q]();e.Modernizr=S}(window,window,document);