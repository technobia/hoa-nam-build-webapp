(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],d=0,l=[];d<u.length;d++)a=u[d],o[a]&&l.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0ae5b3":"4bab6cc1","chunk-2d0b2cf8":"0e69db21","chunk-2d0cc2c1":"f44f059c","chunk-2d20888b":"fa1707e0","chunk-2d226caa":"0c10e5b2","chunk-909b1040":"1140e4a0","chunk-c05ea62c":"f307d830","chunk-d328a13a":"4f91f084","chunk-2d23756e":"0fb8c0d6"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-c05ea62c":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0ae5b3":"31d6cfe0","chunk-2d0b2cf8":"31d6cfe0","chunk-2d0cc2c1":"31d6cfe0","chunk-2d20888b":"31d6cfe0","chunk-2d226caa":"31d6cfe0","chunk-909b1040":"31d6cfe0","chunk-c05ea62c":"a8cdffcc","chunk-d328a13a":"31d6cfe0","chunk-2d23756e":"31d6cfe0"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===o))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===r||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e),s=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:d})},12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("0a89"),o=n.n(a),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("pre-loading"),n("side-menu"),n("div",{staticClass:"site",attrs:{id:"page"}},[n("app-header"),n("router-view"),n("app-footer"),n("div",{staticClass:"copyright"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row middle"},[n("div",{staticClass:"col-md-12 end-md end-lg center"},[e._v("\n            © Copyrights "+e._s(e.year)+", powered by "),n("a",{attrs:{href:"https://crystsoft.asia"}},[e._v("Crystsoft Vietnam")])])])])])],1),e._m(0)],1)},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"scrollup"},[n("i",{staticClass:"fa fa-angle-up"})])}],i={name:"App",data:function(){return{year:(new Date).getFullYear()}},components:{preLoading:function(){return n.e("chunk-2d0ae5b3").then(n.bind(null,"0a5a"))},sideMenu:function(){return n.e("chunk-2d0cc2c1").then(n.bind(null,"4d94"))},appHeader:function(){return n.e("chunk-2d20888b").then(n.bind(null,"a4ce"))},appFooter:function(){return n.e("chunk-c05ea62c").then(n.bind(null,"f657"))}},mounted:function(){s(),this.$store.dispatch("getHome")}};function s(){$("#loading").length||(console.log("reloading..."),setTimeout(s,500)),$("#loading").fadeOut(300)}var d=i,l=n("2877"),f=Object(l["a"])(d,c,u,!1,null,null,null),p=f.exports,h=n("8c4f");r["a"].use(h["a"]);var m=new h["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:function(){return n.e("chunk-909b1040").then(n.bind(null,"bb51"))}},{path:"/about-us",name:"AboutUs",component:function(){return n.e("chunk-2d0b2cf8").then(n.bind(null,"2664"))}},{path:"/projects",name:"Projects",component:function(){return n.e("chunk-d328a13a").then(n.bind(null,"acca"))}},{path:"/contact-us",name:"ContactUs",component:function(){return n.e("chunk-2d226caa").then(n.bind(null,"e9bb"))}}]}),b=n("2f62"),g=n("59ca"),v=n.n(g),y=(n("ea7b"),n("e71f"),n("588e"),{apiKey:"AIzaSyCAOq3_p_NY-5lKQ4_-8tNhHI15yMrNH_E",authDomain:"hoa-nam-build.firebaseapp.com",databaseURL:"https://hoa-nam-build.firebaseio.com",projectId:"hoa-nam-build",storageBucket:"hoa-nam-build.appspot.com",messagingSenderId:"855752803457"});v.a.initializeApp(y);var k=v.a.firestore(),w=function(e,t){return k.collection(e).doc(t).get().then(function(e){return e.data()})};r["a"].use(b["a"]);var _=new b["a"].Store({state:{home:{}},mutations:{setHome:function(e,t){e.home=t}},actions:{getHome:function(e){var t=e.commit;w("root","home").then(function(e){t("setHome",e)})}}});r["a"].config.productionTip=!1,r["a"].use(o.a),new r["a"]({router:m,store:_,render:function(e){return e(p)}}).$mount("#app")}});
//# sourceMappingURL=app.0d210693.js.map