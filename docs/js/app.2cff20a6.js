(function(e){function n(n){for(var r,a,u=n[0],i=n[1],s=n[2],d=0,f=[];d<u.length;d++)a=u[d],c[a]&&f.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(f.length)f.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==c[u]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2066ae2f":"b72a9501","chunk-2d0ae5b3":"4bab6cc1","chunk-2d0cc2c1":"f44f059c","chunk-2d20888b":"fa1707e0","chunk-2d226caa":"0ddc8a42","chunk-5d4ebb74":"edc327ac","chunk-6c8fdf10":"dec42770","chunk-cb4e528c":"4afb3496","chunk-f5259928":"ee71199b","chunk-2d23756e":"fb0978d6"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-5d4ebb74":1,"chunk-cb4e528c":1,"chunk-f5259928":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-2066ae2f":"31d6cfe0","chunk-2d0ae5b3":"31d6cfe0","chunk-2d0cc2c1":"31d6cfe0","chunk-2d20888b":"31d6cfe0","chunk-2d226caa":"31d6cfe0","chunk-5d4ebb74":"a8cdffcc","chunk-6c8fdf10":"31d6cfe0","chunk-cb4e528c":"cde3753f","chunk-f5259928":"8845c703","chunk-2d23756e":"31d6cfe0"}[e]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===c))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],d=s.getAttribute("data-href");if(d===r||d===c)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,delete a[e],l.parentNode.removeChild(l),t(o)},l.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(l)}).then(function(){a[e]=0}));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(function(n,t){r=c[e]=[n,t]});n.push(r[2]=o);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e),s=function(n){d.onerror=d.onload=null,clearTimeout(f);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");o.type=r,o.request=a,t[1](o)}c[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:d})},12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var l=d;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),a=t("0a89"),c=t.n(a),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("pre-loading"),t("side-menu"),t("div",{staticClass:"site",attrs:{id:"page"}},[t("app-header"),t("router-view"),t("app-footer"),t("div",{staticClass:"copyright"},[t("div",{staticClass:"container"},[t("div",{staticClass:"row middle"},[t("div",{staticClass:"col-md-12 end-md end-lg center"},[e._v("\n            © Copyrights "+e._s(e.year)+", powered by "),t("a",{attrs:{href:"https://crystsoft.asia"}},[e._v("Crystsoft Vietnam")])])])])])],1),e._m(0)],1)},u=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("a",{staticClass:"scrollup"},[t("i",{staticClass:"fa fa-angle-up"})])}],i={name:"App",data:function(){return{year:(new Date).getFullYear()}},components:{preLoading:function(){return t.e("chunk-2d0ae5b3").then(t.bind(null,"0a5a"))},sideMenu:function(){return t.e("chunk-2d0cc2c1").then(t.bind(null,"4d94"))},appHeader:function(){return t.e("chunk-2d20888b").then(t.bind(null,"a4ce"))},appFooter:function(){return t.e("chunk-5d4ebb74").then(t.bind(null,"f657"))}},mounted:function(){s(),this.$store.dispatch("getHome"),this.$store.dispatch("getBanner"),this.$store.dispatch("getProject")}};function s(){$("#loading").length||(console.log("reloading..."),setTimeout(s,500)),$("#loading").fadeOut(300)}var d=i,f=t("2877"),l=Object(f["a"])(d,o,u,!1,null,null,null),h=l.exports,p=t("8c4f");r["a"].use(p["a"]);var m=new p["a"]({mode:"hash",base:"/",routes:[{path:"/",name:"Home",component:function(){return t.e("chunk-f5259928").then(t.bind(null,"bb51"))}},{path:"/about-us",name:"AboutUs",component:function(){return t.e("chunk-6c8fdf10").then(t.bind(null,"2664"))}},{path:"/services",name:"Servicess",component:function(){return t.e("chunk-cb4e528c").then(t.bind(null,"f23e"))}},{path:"/projects",name:"Projects",component:function(){return t.e("chunk-2066ae2f").then(t.bind(null,"acca"))}},{path:"/contact-us",name:"ContactUs",component:function(){return t.e("chunk-2d226caa").then(t.bind(null,"e9bb"))}}]}),b=(t("ac6a"),t("2f62")),g=t("59ca"),v=t.n(g),k=(t("ea7b"),t("e71f"),t("588e"),{apiKey:"AIzaSyCAOq3_p_NY-5lKQ4_-8tNhHI15yMrNH_E",authDomain:"hoa-nam-build.firebaseapp.com",databaseURL:"https://hoa-nam-build.firebaseio.com",projectId:"hoa-nam-build",storageBucket:"hoa-nam-build.appspot.com",messagingSenderId:"855752803457"});v.a.initializeApp(k);var y=v.a.firestore(),j=function(e){return y.collection(e).get()},w=function(e,n){return y.collection(e).doc(n).get().then(function(e){return e.data()})};r["a"].use(b["a"]);var _=new b["a"].Store({state:{home:{},banners:[],projects:[]},mutations:{setHome:function(e,n){e.home=n},setBanners:function(e,n){e.banners=n},setProjects:function(e,n){e.projects=n}},actions:{getHome:function(e){var n=e.commit;w("root","home").then(function(e){n("setHome",e)})},getBanner:function(e){var n=e.commit;j("banner").then(function(e){var t=[];e.forEach(function(e){return t.push(e.data())}),n("setBanners",t)})},getProject:function(e){var n=e.commit;j("projects").then(function(e){var t=[];e.forEach(function(e){return t.push(e.data())}),n("setProjects",t)})}}});r["a"].config.productionTip=!1,r["a"].use(c.a),new r["a"]({router:m,store:_,render:function(e){return e(h)}}).$mount("#app")}});
//# sourceMappingURL=app.2cff20a6.js.map