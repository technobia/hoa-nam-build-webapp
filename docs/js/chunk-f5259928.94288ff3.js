(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5259928"],{"07e3":function(t,e){var i={}.hasOwnProperty;t.exports=function(t,e){return i.call(t,e)}},"1af6":function(t,e,i){var s=i("63b6");s(s.S,"Array",{isArray:i("9003")})},"1bc3":function(t,e,i){var s=i("f772");t.exports=function(t,e){if(!s(t))return t;var i,a;if(e&&"function"==typeof(i=t.toString)&&!s(a=i.call(t)))return a;if("function"==typeof(i=t.valueOf)&&!s(a=i.call(t)))return a;if(!e&&"function"==typeof(i=t.toString)&&!s(a=i.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,i){var s=i("f772"),a=i("e53d").document,n=s(a)&&s(a.createElement);t.exports=function(t){return n?a.createElement(t):{}}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"35e8":function(t,e,i){var s=i("d9f6"),a=i("aebd");t.exports=i("8e60")?function(t,e,i){return s.f(t,e,a(1,i))}:function(t,e,i){return t[e]=i,t}},"584a":function(t,e){var i=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=i)},"63b6":function(t,e,i){var s=i("e53d"),a=i("584a"),n=i("d864"),r=i("35e8"),o=i("07e3"),c="prototype",l=function(t,e,i){var u,d,f,v=t&l.F,p=t&l.G,_=t&l.S,m=t&l.P,h=t&l.B,g=t&l.W,b=p?a:a[e]||(a[e]={}),C=b[c],y=p?s:_?s[e]:(s[e]||{})[c];for(u in p&&(i=e),i)d=!v&&y&&void 0!==y[u],d&&o(b,u)||(f=d?y[u]:i[u],b[u]=p&&"function"!=typeof y[u]?i[u]:h&&d?n(f,s):g&&y[u]==f?function(t){var e=function(e,i,s){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,i)}return new t(e,i,s)}return t.apply(this,arguments)};return e[c]=t[c],e}(f):m&&"function"==typeof f?n(Function.call,f):f,m&&((b.virtual||(b.virtual={}))[u]=f,t&l.R&&C&&!C[u]&&r(C,u,f)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},"6b4c":function(t,e){var i={}.toString;t.exports=function(t){return i.call(t).slice(8,-1)}},"794b":function(t,e,i){t.exports=!i("8e60")&&!i("294c")(function(){return 7!=Object.defineProperty(i("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"8e60":function(t,e,i){t.exports=!i("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},9003:function(t,e,i){var s=i("6b4c");t.exports=Array.isArray||function(t){return"Array"==s(t)}},a2b6:function(t,e,i){"use strict";i.d(e,"b",function(){return n}),i.d(e,"a",function(){return r});var s=i("a745"),a=i.n(s),n=(i("cadf"),i("551c"),i("f751"),i("097d"),function(t,e){var i=document.getElementsByTagName("body")[0];if(!document.getElementById(e)){var s=document.createElement("script");s.type="text/javascript",s.src=t,s.id=e,s.async=!0,s.defer=!0,i.appendChild(s)}}),r=function(t,e){return function i(){a()(t)?t.some(function(t){return!$(t)[0]})?setTimeout(i,500):e():$(t)[0]?e():setTimeout(i,500)}()}},a745:function(t,e,i){t.exports=i("f410")},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},bb51:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"site-content"},[t.homeBanners.length?i("div",{staticClass:"section"},[i("div",{staticClass:"rev_slider_wrapper fullwidthbanner-container"},[i("div",{staticClass:"rev_slider fullwidthabanner",attrs:{id:"rev_slider_1"}},[i("ul",t._l(t.homeBanners,function(t){return i("li",{key:t.id,attrs:{"data-transition":"random","data-slotamount":"7","data-hideafterloop":"0","data-hideslideonmobile":"off","data-easein":"default","data-easeout":"default","data-masterspeed":"300","data-rotate":"0","data-saveperformance":"off","data-title":"Slide"}},[i("img",{staticClass:"rev-slidebg",attrs:{src:t.img,alt:"","data-bgposition":"center top","data-kenburns":"on","data-duration":"9000","data-ease":"Linear.easeNone","data-scalestart":"100","data-scaleend":"110","data-rotatestart":"0","data-rotateend":"0","data-offsetstart":"0 0","data-offsetend":"0 0"}})])}),0),i("div",{staticClass:"tp-bannertimer"})])])]):t._e(),i("div",{staticClass:"section call-for-action"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-9"},[i("div",{staticClass:"custom_heading home_quote_txt"},[i("div",{staticClass:"call-for-action-text"},[t._v("\n              "+t._s(t.data.call_for_action_text)+"\n            ")])])]),i("div",{staticClass:"col-sm-3"},[i("div",{staticClass:"home_quote_btn text-right"},[i("router-link",{attrs:{to:"/contact-us"}},[t._v(t._s(t.data.call_for_action_button))])],1)])])])]),t.successProject.length>0?i("div",{staticClass:"section pt-5 pb-3"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"mb-3"},[i("div",{staticClass:"section-title"},[t._v(t._s(t.data.our_services_text))]),i("div",{staticClass:"section-desc"},[i("p",[t._v(t._s(t.data.our_services_info))])]),t._m(0)])]),i("div",{staticClass:"col-sm-8"},[i("div",{staticClass:"myportfolio-container minimal-light row"},[i("div",{staticClass:"slider-wrapper"},[i("ul",{staticClass:"service-list"},t._l(t.successProject,function(e){return i("li",{key:e.id,staticClass:"col-md-6 col-sm-6"},[i("div",{staticClass:"service-item"},[i("div",{staticClass:"service-entry-media"},[i("img",{attrs:{src:e.img,alt:""}})]),i("div",{staticClass:"our-services-content"},[i("div",{staticClass:"our-services-title"},[i("span",{staticClass:"our-services-title-link"},[t._v(t._s(e.name))])]),i("div",{staticClass:"our-services-desc",domProps:{innerHTML:t._s(e.description)}})])])])}),0)])])])])])]):t._e(),t.pendingProject.length>0?i("div",{staticClass:"section home-latest-projects"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-12"},[i("div",{staticClass:"mb-3 projects_btn"},[i("p",[t._v(t._s(t.data.home_latest_projects))]),t._m(1),t._m(2)]),i("div",{staticClass:"myportfolio-container minimal-light"},[i("div",{staticClass:"slider-wrapper"},[i("div",{staticClass:"row"},[i("ul",{staticClass:"project-list"},t._l(t.pendingProject,function(e){return i("li",{key:e.id,staticClass:"our-projects-wrapper col-md-4 col-sm-6"},[i("div",{staticClass:"project-media-cover-wrapper"},[i("div",{staticClass:"project-entry-media"},[i("img",{attrs:{src:e.img,alt:""}})]),i("div",{staticClass:"project-entry-cover"},[i("div",{staticClass:"project-overlay our-projects-container"}),i("div",{staticClass:"project-content"},[i("div",{staticClass:"our-projects-categories"},[t._v("\n                            "+t._s("pending"===e.type?"Đang xây dựng":"Đã hoàn thành")+"\n                          ")]),i("div",{staticClass:"line-clear"}),i("div",{staticClass:"our-projects-title"},[t._v(t._s(e.name))])])])])])}),0)])])])])])])]):t._e(),i("div",{staticClass:"section pt-5 pb-2 home_whatweare"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[t._m(3),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"mb-3"},[i("div",{staticClass:"section-title"},[t._v(t._s(t.data.about_us_title))]),i("div",{staticClass:"section-desc"},[i("p",[t._v(t._s(t.data.about_us_readmore_info))])]),i("div",{staticClass:"home_whatweare_btn"},[i("router-link",{attrs:{to:"/about-us"}},[t._v(t._s(t.data.about_us_readmore_button))])],1)])]),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"mb-3"},[i("div",{staticClass:"consulting"},[i("img",{attrs:{src:t.publicPath+"images/image_360x146.jpg",alt:"",width:"370",height:"150"}}),t._m(4)]),i("div",{staticClass:"mt-2"},[t._v(t._s(t.data.about_us_suggest))])])])])])]),i("div",{staticClass:"section pt-9 pb-9 parallax bg-1"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-12"},[i("div",{staticClass:"parallax-text"},[t._v(t._s(t.data.slogan))])])])])]),t.clientBanners.length?i("div",{staticClass:"section pt-5 pb-5"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-12"},[t._m(5),i("div",{staticClass:"myportfolio-container minimal-light"},[i("div",{staticClass:"row"},[i("div",{staticClass:"slider-wrapper"},[i("ul",{staticClass:"client-list"},t._l(t.clientBanners,function(e){return i("li",{key:e.id,staticClass:"col-md-2 col-sm-6"},[i("div",{staticClass:"client-media-cover-wrapper"},[i("div",{staticClass:"client-entry-media"},[i("img",{attrs:{src:e.img,alt:""}})]),i("div",{staticClass:"client-entry-cover"},[i("div",{staticClass:"client-overlay home-clients-container"}),i("div",{staticClass:"home-clients-title"},[t._v("\n                          "+t._s(e.title)+"\n                        ")])])])])}),0)])])])])])])]):t._e()])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ourservices_btn"},[i("div",{staticClass:"navigationbutton button-left ourservices_btn_left"},[i("i",{staticClass:"fa fa-angle-left"})]),i("div",{staticClass:"navigationbutton button-right ourservices_btn_right"},[i("i",{staticClass:"fa fa-angle-right"})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navigationbutton button-left projects_btn_left"},[i("i",{staticClass:"fa fa-angle-left"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navigationbutton button-right projects_btn_right"},[i("i",{staticClass:"fa fa-angle-right"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"mb-3"},[i("div",{staticClass:"text-center"},[i("img",{attrs:{width:"370",height:"240",src:"images/image_360x234.jpg",alt:""}})])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"info"},[i("div",[i("h4",[t._v("TỨ VẤN")]),i("h5",[t._v("MIỄN PHÍ")]),i("a",{attrs:{href:"#"}},[t._v("BẤM VÀO ĐÂY! ")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"clients_btn"},[i("div",{staticClass:"section-title"},[t._v("Đối tác")]),i("div",{staticClass:"navigationbutton button-left clients_btn_left"},[i("i",{staticClass:"fa fa-angle-left"})]),i("div",{staticClass:"navigationbutton button-right clients_btn_right"},[i("i",{staticClass:"fa fa-angle-right"})])])}],n=(i("cadf"),i("551c"),i("f751"),i("097d"),i("a2b6")),r={name:"Home",metaInfo:{title:"Xây Dựng Hoa Nam - Trang chủ"},data:function(){return{publicPath:"/"}},computed:{data:function(){return this.$store.state.home},homeBanners:function(){return this.$store.state.banners.filter(function(t){return"home-banner"===t.type})},clientBanners:function(){return this.$store.state.banners.filter(function(t){return"client"===t.type})},pendingProject:function(){return this.$store.state.projects.filter(function(t){return"pending"===t.type})},successProject:function(){return this.$store.state.projects.filter(function(t){return"success"===t.type})}},methods:{checkReady:function(){var t=[];this.homeBanners.length>0&&t.push("#rev_slider_1"),this.pendingProject.length>0&&t.push(".project-list"),this.successProject.length>0&&t.push(".service-list"),this.clientBanners.length>0&&t.push(".client-list"),Object(n["a"])(t,function(){o(),c(),l(),u()})}},updated:function(){this.checkReady()},mounted:function(){this.checkReady()}};function o(){$("#rev_slider_1").show().revolution({sliderType:"standard",sliderLayout:"auto",dottedOverlay:"none",delay:9e3,navigation:{keyboardNavigation:"off",keyboard_direction:"horizontal",mouseScrollNavigation:"off",mouseScrollReverse:"default",onHoverStop:"on",touch:{touchenabled:"on",swipe_threshold:75,swipe_min_touches:1,swipe_direction:"horizontal",drag_block_vertical:!1},arrows:{style:"hebe",enable:!0,hide_onmobile:!0,hide_under:600,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,left:{h_align:"left",v_align:"center",h_offset:20,v_offset:0},right:{h_align:"right",v_align:"center",h_offset:20,v_offset:0}}},responsiveLevels:[1240,1024,778,480],visibilityLevels:[1240,1024,778,480],gridwidth:[1920,1024,778,480],gridheight:[550,550,550,550],lazyType:"none",shadow:0,spinner:"spinner3",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",autoHeight:"off",hideThumbsOnMobile:"off",hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,debugMode:!1,fallbacks:{simplifyAll:"off",nextSlideOnWindowFocus:"off",disableFocusListener:!1}})}function c(){$(".service-list").owlCarousel({items:2,itemsDesktop:[1199,2],itemsDesktopSmall:[979,2],itemsTablet:[767,2],itemsMobile:[480,1],slideSpeed:500,paginationSpeed:1e3,rewindSpeed:1e3,autoHeight:!0,addClassActive:!0,autoPlay:!1,loop:!0,pagination:!1}),$(".ourservices_btn_left").on("click",function(){$(".service-list").trigger("owl.prev")}),$(".ourservices_btn_right").on("click",function(){$(".service-list").trigger("owl.next")})}function l(){$(".project-list").owlCarousel({items:4,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[767,1],itemsMobile:[480,1],slideSpeed:500,paginationSpeed:1e3,rewindSpeed:1e3,autoHeight:!1,addClassActive:!0,autoPlay:!1,loop:!0,pagination:!1}),$(".projects_btn_left").on("click",function(){$(".project-list").trigger("owl.prev")}),$(".projects_btn_right").on("click",function(){$(".project-list").trigger("owl.next")})}function u(){$(".client-list").owlCarousel({items:6,itemsDesktop:[1199,6],itemsDesktopSmall:[979,3],itemsTablet:[767,2],itemsMobile:[480,2],slideSpeed:500,paginationSpeed:1e3,rewindSpeed:1e3,autoHeight:!1,addClassActive:!0,autoPlay:!1,loop:!0,pagination:!1}),$(".clients_btn_left").on("click",function(){$(".client-list").trigger("owl.prev")}),$(".clients_btn_right").on("click",function(){$(".client-list").trigger("owl.next")})}var d=r,f=(i("cccb"),i("2877")),v=Object(f["a"])(d,s,a,!1,null,null,null);e["default"]=v.exports},cccb:function(t,e,i){"use strict";var s=i("d563"),a=i.n(s);a.a},d563:function(t,e,i){},d864:function(t,e,i){var s=i("79aa");t.exports=function(t,e,i){if(s(t),void 0===e)return t;switch(i){case 1:return function(i){return t.call(e,i)};case 2:return function(i,s){return t.call(e,i,s)};case 3:return function(i,s,a){return t.call(e,i,s,a)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,i){var s=i("e4ae"),a=i("794b"),n=i("1bc3"),r=Object.defineProperty;e.f=i("8e60")?Object.defineProperty:function(t,e,i){if(s(t),e=n(e,!0),s(i),a)try{return r(t,e,i)}catch(o){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(t[e]=i.value),t}},e4ae:function(t,e,i){var s=i("f772");t.exports=function(t){if(!s(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var i=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=i)},f410:function(t,e,i){i("1af6"),t.exports=i("584a").Array.isArray},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=chunk-f5259928.94288ff3.js.map