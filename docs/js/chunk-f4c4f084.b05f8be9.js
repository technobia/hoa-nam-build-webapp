(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4c4f084"],{"07e3":function(t,e){var s={}.hasOwnProperty;t.exports=function(t,e){return s.call(t,e)}},"1af6":function(t,e,s){var a=s("63b6");a(a.S,"Array",{isArray:s("9003")})},"1bc3":function(t,e,s){var a=s("f772");t.exports=function(t,e){if(!a(t))return t;var s,i;if(e&&"function"==typeof(s=t.toString)&&!a(i=s.call(t)))return i;if("function"==typeof(s=t.valueOf)&&!a(i=s.call(t)))return i;if(!e&&"function"==typeof(s=t.toString)&&!a(i=s.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,s){var a=s("f772"),i=s("e53d").document,r=a(i)&&a(i.createElement);t.exports=function(t){return r?i.createElement(t):{}}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"35e8":function(t,e,s){var a=s("d9f6"),i=s("aebd");t.exports=s("8e60")?function(t,e,s){return a.f(t,e,i(1,s))}:function(t,e,s){return t[e]=s,t}},"584a":function(t,e){var s=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=s)},"63b6":function(t,e,s){var a=s("e53d"),i=s("584a"),r=s("d864"),o=s("35e8"),n=s("07e3"),c="prototype",l=function(t,e,s){var d,v,u,f=t&l.F,p=t&l.G,m=t&l.S,h=t&l.P,_=t&l.B,C=t&l.W,g=p?i:i[e]||(i[e]={}),b=g[c],y=p?a:m?a[e]:(a[e]||{})[c];for(d in p&&(s=e),s)v=!f&&y&&void 0!==y[d],v&&n(g,d)||(u=v?y[d]:s[d],g[d]=p&&"function"!=typeof y[d]?s[d]:_&&v?r(u,a):C&&y[d]==u?function(t){var e=function(e,s,a){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,s)}return new t(e,s,a)}return t.apply(this,arguments)};return e[c]=t[c],e}(u):h&&"function"==typeof u?r(Function.call,u):u,h&&((g.virtual||(g.virtual={}))[d]=u,t&l.R&&b&&!b[d]&&o(b,d,u)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},"6b4c":function(t,e){var s={}.toString;t.exports=function(t){return s.call(t).slice(8,-1)}},"794b":function(t,e,s){t.exports=!s("8e60")&&!s("294c")(function(){return 7!=Object.defineProperty(s("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"8e60":function(t,e,s){t.exports=!s("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},9003:function(t,e,s){var a=s("6b4c");t.exports=Array.isArray||function(t){return"Array"==a(t)}},a2b6:function(t,e,s){"use strict";s.d(e,"b",function(){return r}),s.d(e,"a",function(){return o});var a=s("a745"),i=s.n(a),r=function(t,e){var s=document.getElementsByTagName("body")[0];if(!document.getElementById(e)){var a=document.createElement("script");a.type="text/javascript",a.src=t,a.id=e,a.async=!0,a.defer=!0,s.appendChild(a)}},o=function(t,e){return function s(){i()(t)?t.some(function(t){return!$(t)[0]})?setTimeout(s,500):e():$(t)[0]?e():setTimeout(s,500)}()}},a745:function(t,e,s){t.exports=s("f410")},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},bb51:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"site-content"},[t.homeBanners.length?s("div",{staticClass:"section"},[s("div",{staticClass:"rev_slider_wrapper fullwidthbanner-container"},[s("div",{staticClass:"rev_slider fullwidthabanner",attrs:{id:"rev_slider_1"}},[s("ul",t._l(t.homeBanners,function(e){return s("li",{key:e.id,attrs:{"data-transition":"random","data-slotamount":"7","data-hideafterloop":"0","data-hideslideonmobile":"off","data-easein":"default","data-easeout":"default","data-masterspeed":"300","data-rotate":"0","data-saveperformance":"off","data-title":"Slide"}},[s("img",{staticClass:"rev-slidebg",attrs:{src:e.img,alt:"","data-bgposition":"center top","data-kenburns":"on","data-duration":"9000","data-ease":"Linear.easeNone","data-scalestart":"100","data-scaleend":"110","data-rotatestart":"0","data-rotateend":"0","data-offsetstart":"0 0","data-offsetend":"0 0"}}),s("div",{staticClass:"tp-caption tp-resizeme",attrs:{"data-x":"['left','center','center','center']","data-hoffset":"['0','0','0','0']","data-y":"['top','middle','middle','middle']","data-voffset":"['135','-130','-130','-128']","data-width":"none","data-height":"none","data-whitespace":"nowrap","data-visibility":"['on','on','on','off']","data-transform_idle":"o:1;","data-transform_in":"x:right;s:250;e:Power3.easeInOut;","data-transform_out":"x:left;s:300;s:300;","data-start":"800","data-responsive_offset":"on"}},[s("img",{attrs:{src:t.publicPath+"images/banner/line_01.png",alt:""}})]),s("div",{staticClass:"tp-caption tp-resizeme",attrs:{"data-x":"['left','center','center','center']","data-hoffset":"['-1','0','0','0']","data-y":"['top','middle','middle','middle']","data-voffset":"['419','150','150','128']","data-width":"none","data-height":"none","data-whitespace":"nowrap","data-visibility":"['on','on','on','off']","data-transform_idle":"o:1;","data-transform_in":"x:left;s:250;e:Power3.easeInOut;","data-transform_out":"x:right;s:300;s:300;","data-start":"1000","data-responsive_offset":"on"}},[s("img",{attrs:{src:t.publicPath+"images/banner/line_01.png",alt:""}})]),s("div",{staticClass:"tp-caption tp-resizeme",attrs:{"data-x":"['left','center','center','left']","data-hoffset":"['375','-250','-250','135']","data-y":"['top','middle','middle','top']","data-voffset":"['0','0','0','0']","data-width":"none","data-height":"none","data-whitespace":"nowrap","data-visibility":"['on','on','on','off']","data-transform_idle":"o:1;","data-transform_in":"y:bottom;s:250;e:Power3.easeInOut;","data-transform_out":"y:top;s:300;s:300;","data-start":"1200","data-responsive_offset":"on"}},[s("img",{attrs:{src:t.publicPath+"images/banner/line_02.png",alt:""}})]),s("div",{staticClass:"tp-caption tp-resizeme",attrs:{"data-x":"['left','center','center','left']","data-hoffset":"['890','250','250','635']","data-y":"['top','middle','middle','top']","data-voffset":"['0','0','0','0']","data-width":"none","data-height":"none","data-whitespace":"nowrap","data-visibility":"['on','on','on','off']","data-transform_idle":"o:1;","data-transform_in":"y:top;s:250;e:Power3.easeInOut;","data-transform_out":"y:bottom;s:300;s:300;","data-start":"1400","data-responsive_offset":"on"}},[s("img",{attrs:{src:t.publicPath+"images/banner/line_02.png",alt:""}})]),s("div",{staticClass:"tp-caption tp-shape tp-shapewrapper tp-resizeme",attrs:{"data-x":"['left','center','center','center']","data-hoffset":"['375','0','0','0']","data-y":"['top','middle','middle','middle']","data-voffset":"['135','0','0','0']","data-width":"['515','500','500','500']","data-height":"['285','280','280','280']","data-whitespace":"['normal','nowrap','nowrap','nowrap']","data-transform_idle":"o:1;","data-transform_in":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:400;e:Power3.easeInOut;","data-transform_out":"opacity:0;s:300;s:300;","data-start":"1600","data-responsive_offset":"on"}}),s("div",{staticClass:"tp-caption slide-text-1 tp-resizeme",attrs:{"data-x":"['left','center','center','center']","data-hoffset":"['410','0','0','0']","data-y":"['top','middle','middle','middle']","data-voffset":"['165','-110','-110','-110']","data-width":"none","data-height":"none","data-whitespace":"nowrap","data-transform_idle":"o:1;","data-transform_in":"opacity:0;s:200;e:Power3.easeInOut;","data-transform_out":"opacity:0;s:300;s:300;","data-start":"2000","data-splitin":"none","data-splitout":"none","data-responsive_offset":"on"}},[t._v(t._s(e.heading)+"\n            ")]),s("div",{staticClass:"tp-caption tp-resizeme",attrs:{"data-x":"['left','center','center','center']","data-hoffset":"['410','0','0','0']","data-y":"['top','middle','middle','middle']","data-voffset":"['203','-70','-70','-70']","data-width":"none","data-height":"none","data-whitespace":"nowrap","data-transform_idle":"o:1;","data-transform_in":"opacity:0;s:200;e:Power3.easeInOut;","data-transform_out":"opacity:0;s:300;s:300;","data-start":"2000","data-responsive_offset":"on"}},[s("img",{attrs:{src:t.publicPath+"images/banner/line_03.png",alt:""}})]),s("div",{staticClass:"tp-caption slide-text-2 tp-resizeme",attrs:{"data-x":"['left','center','center','center']","data-hoffset":"['410','0','0','0']","data-y":"['top','middle','middle','middle']","data-voffset":"['216','-40','-40','-40']","data-width":"none","data-height":"none","data-whitespace":"nowrap","data-transform_idle":"o:1;","data-transform_in":"opacity:0;s:200;e:Power3.easeInOut;","data-transform_out":"opacity:0;s:300;s:300;","data-start":"2000","data-splitin":"none","data-splitout":"none","data-responsive_offset":"on"}},[t._v(t._s(e.title)+"\n            ")])])}),0),s("div",{staticClass:"tp-bannertimer"})])])]):t._e(),s("div",{staticClass:"section call-for-action"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-9"},[s("div",{staticClass:"custom_heading home_quote_txt"},[s("div",{staticClass:"call-for-action-text"},[t._v("\n              "+t._s(t.data.call_for_action_text)+"\n            ")])])]),s("div",{staticClass:"col-sm-3"},[s("div",{staticClass:"home_quote_btn text-right"},[s("router-link",{attrs:{to:"/contact-us"}},[t._v(t._s(t.data.call_for_action_button))])],1)])])])]),s("div",{staticClass:"section pt-5 pb-3"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-4"},[s("div",{staticClass:"mb-3"},[s("div",{staticClass:"section-title"},[t._v(t._s(t.data.our_services_text))]),s("div",{staticClass:"section-desc"},[s("p",[t._v(t._s(t.data.our_services_info))])]),t._m(0)])]),s("div",{staticClass:"col-sm-8"},[s("div",{staticClass:"myportfolio-container minimal-light row"},[s("div",{staticClass:"slider-wrapper"},[s("ul",{staticClass:"service-list"},[s("li",{staticClass:"col-md-6 col-sm-6"},[s("div",{staticClass:"service-item"},[s("div",{staticClass:"service-entry-media"},[s("img",{attrs:{src:t.publicPath+"images/services/service_360x195.jpg",alt:""}}),t._m(1)]),t._m(2)])]),s("li",{staticClass:"col-md-6 col-sm-6"},[s("div",{staticClass:"service-item"},[s("div",{staticClass:"service-entry-media"},[s("img",{attrs:{src:t.publicPath+"images/services/service_360x195.jpg",alt:""}}),t._m(3)]),t._m(4)])]),s("li",{staticClass:"col-md-6 col-sm-6"},[s("div",{staticClass:"service-item"},[s("div",{staticClass:"service-entry-media"},[s("img",{attrs:{src:t.publicPath+"images/services/service_360x195.jpg",alt:""}}),t._m(5)]),t._m(6)])]),s("li",{staticClass:"col-md-6 col-sm-6"},[s("div",{staticClass:"service-item"},[s("div",{staticClass:"service-entry-media"},[s("img",{attrs:{src:t.publicPath+"images/services/service_360x195.jpg",alt:""}}),t._m(7)]),t._m(8)])]),s("li",{staticClass:"col-md-6 col-sm-6"},[s("div",{staticClass:"service-item"},[s("div",{staticClass:"service-entry-media"},[s("img",{attrs:{src:t.publicPath+"images/services/service_360x195.jpg",alt:""}}),t._m(9)]),t._m(10)])]),s("li",{staticClass:"col-md-6 col-sm-6"},[s("div",{staticClass:"service-item"},[s("div",{staticClass:"service-entry-media"},[s("img",{attrs:{src:t.publicPath+"images/services/service_360x195.jpg",alt:""}}),t._m(11)]),t._m(12)])])])])])])])])]),s("div",{staticClass:"section home-latest-projects"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12"},[s("div",{staticClass:"mb-3 projects_btn"},[s("p",[t._v(t._s(t.data.home_latest_projects))]),t._m(13),t._m(14)]),s("div",{staticClass:"myportfolio-container minimal-light"},[s("div",{staticClass:"slider-wrapper"},[s("div",{staticClass:"row"},[s("ul",{staticClass:"project-list"},[s("li",{staticClass:"our-projects-wrapper col-md-4 col-sm-6"},[s("div",{staticClass:"project-media-cover-wrapper"},[s("div",{staticClass:"project-entry-media"},[s("img",{attrs:{src:t.publicPath+"images/portfolio/portfolio_263x280.jpg",alt:""}})]),s("div",{staticClass:"project-entry-cover"},[s("div",{staticClass:"project-overlay our-projects-container"}),s("div",{staticClass:"project-content"},[t._m(15),s("div",{staticClass:"line-clear"}),t._m(16),s("div",{staticClass:"line-clear"}),s("div",{staticClass:"our-projects-popup"},[s("a",{attrs:{"data-rel":"prettyPhoto",href:t.publicPath+"images/portfolio/portfolio_770x515.jpg"}},[s("i",{staticClass:"fa fa-search"})])])])])])]),s("li",{staticClass:"our-projects-wrapper col-md-4 col-sm-6"},[s("div",{staticClass:"project-media-cover-wrapper"},[s("div",{staticClass:"project-entry-media"},[s("img",{attrs:{src:t.publicPath+"images/portfolio/portfolio_263x280.jpg",alt:""}})]),s("div",{staticClass:"project-entry-cover"},[s("div",{staticClass:"project-overlay our-projects-container"}),s("div",{staticClass:"project-content"},[t._m(17),s("div",{staticClass:"line-clear"}),t._m(18),s("div",{staticClass:"line-clear"}),s("div",{staticClass:"our-projects-popup"},[s("a",{attrs:{"data-rel":"prettyPhoto",href:t.publicPath+"images/portfolio/portfolio_770x515.jpg"}},[s("i",{staticClass:"fa fa-search"})])])])])])]),s("li",{staticClass:"our-projects-wrapper col-md-4 col-sm-6"},[s("div",{staticClass:"project-media-cover-wrapper"},[s("div",{staticClass:"project-entry-media"},[s("img",{attrs:{src:t.publicPath+"images/portfolio/portfolio_263x280.jpg",alt:""}})]),s("div",{staticClass:"project-entry-cover"},[s("div",{staticClass:"project-overlay our-projects-container"}),s("div",{staticClass:"project-content"},[t._m(19),s("div",{staticClass:"line-clear"}),t._m(20),s("div",{staticClass:"line-clear"}),s("div",{staticClass:"our-projects-popup"},[s("a",{attrs:{"data-rel":"prettyPhoto",href:t.publicPath+"images/portfolio/portfolio_770x515.jpg"}},[s("i",{staticClass:"fa fa-search"})])])])])])]),s("li",{staticClass:"our-projects-wrapper col-md-4 col-sm-6"},[s("div",{staticClass:"project-media-cover-wrapper"},[s("div",{staticClass:"project-entry-media"},[s("img",{attrs:{src:t.publicPath+"images/portfolio/portfolio_263x280.jpg",alt:""}})]),s("div",{staticClass:"project-entry-cover"},[s("div",{staticClass:"project-overlay our-projects-container"}),s("div",{staticClass:"project-content"},[t._m(21),s("div",{staticClass:"line-clear"}),t._m(22),s("div",{staticClass:"line-clear"}),s("div",{staticClass:"our-projects-popup"},[s("a",{attrs:{"data-rel":"prettyPhoto",href:t.publicPath+"images/portfolio/portfolio_770x515.jpg"}},[s("i",{staticClass:"fa fa-search"})])])])])])]),s("li",{staticClass:"our-projects-wrapper col-md-4 col-sm-6"},[s("div",{staticClass:"project-media-cover-wrapper"},[s("div",{staticClass:"project-entry-media"},[s("img",{attrs:{src:t.publicPath+"images/portfolio/portfolio_263x280.jpg",alt:""}})]),s("div",{staticClass:"project-entry-cover"},[s("div",{staticClass:"project-overlay our-projects-container"}),s("div",{staticClass:"project-content"},[t._m(23),s("div",{staticClass:"line-clear"}),t._m(24),s("div",{staticClass:"line-clear"}),s("div",{staticClass:"our-projects-popup"},[s("a",{attrs:{"data-rel":"prettyPhoto",href:t.publicPath+"images/portfolio/portfolio_770x515.jpg"}},[s("i",{staticClass:"fa fa-search"})])])])])])]),s("li",{staticClass:"our-projects-wrapper col-md-4 col-sm-6"},[s("div",{staticClass:"project-media-cover-wrapper"},[s("div",{staticClass:"project-entry-media"},[s("img",{attrs:{src:t.publicPath+"images/portfolio/portfolio_263x280.jpg",alt:""}})]),s("div",{staticClass:"project-entry-cover"},[s("div",{staticClass:"project-overlay our-projects-container"}),s("div",{staticClass:"project-content"},[t._m(25),s("div",{staticClass:"line-clear"}),t._m(26),s("div",{staticClass:"line-clear"}),s("div",{staticClass:"our-projects-popup"},[s("a",{attrs:{"data-rel":"prettyPhoto",href:t.publicPath+"images/portfolio/portfolio_770x515.jpg"}},[s("i",{staticClass:"fa fa-search"})])])])])])])])])])])])])])]),s("div",{staticClass:"section pt-5 pb-2 home_whatweare"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[t._m(27),s("div",{staticClass:"col-sm-4"},[s("div",{staticClass:"mb-3"},[s("div",{staticClass:"section-title"},[t._v(t._s(t.data.about_us_title))]),s("div",{staticClass:"section-desc"},[s("p",[t._v(t._s(t.data.about_us_readmore_info))])]),s("div",{staticClass:"home_whatweare_btn"},[s("router-link",{attrs:{to:"/about-us"}},[t._v(t._s(t.data.about_us_readmore_button))])],1)])]),s("div",{staticClass:"col-sm-4"},[s("div",{staticClass:"mb-3"},[s("div",{staticClass:"consulting"},[s("img",{attrs:{src:t.publicPath+"images/image_360x146.jpg",alt:"",width:"370",height:"150"}}),t._m(28)]),s("div",{staticClass:"mt-2"},[t._v(t._s(t.data.about_us_suggest))])])])])])]),s("div",{staticClass:"section pt-9 pb-9 parallax bg-1"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12"},[s("div",{staticClass:"parallax-text"},[t._v(t._s(t.data.slogan))])])])])]),t.clientBanners.length?s("div",{staticClass:"section pt-5 pb-5"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12"},[t._m(29),s("div",{staticClass:"myportfolio-container minimal-light"},[s("div",{staticClass:"row"},[s("div",{staticClass:"slider-wrapper"},[s("ul",{staticClass:"client-list"},t._l(t.clientBanners,function(e){return s("li",{key:e.id,staticClass:"col-md-2 col-sm-6"},[s("div",{staticClass:"client-media-cover-wrapper"},[s("div",{staticClass:"client-entry-media"},[s("img",{attrs:{src:e.img,alt:""}})]),s("div",{staticClass:"client-entry-cover"},[s("div",{staticClass:"client-overlay home-clients-container"}),s("div",{staticClass:"home-clients-title"},[t._v("\n                          "+t._s(e.title)+"\n                        ")])])])])}),0)])])])])])])]):t._e()])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ourservices_btn"},[s("div",{staticClass:"navigationbutton button-left ourservices_btn_left"},[s("i",{staticClass:"fa fa-angle-left"})]),s("div",{staticClass:"navigationbutton button-right ourservices_btn_right"},[s("i",{staticClass:"fa fa-angle-right"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"service-entry-cover"},[s("div",{staticClass:"service-overlay our-services-container"}),s("div",{staticClass:"our-services-readmore"},[s("a",{staticClass:"our-services-readmore-link",attrs:{href:"service-detail.html"}},[t._v("\n                            READ MORE\n                          ")])]),s("div",{staticClass:"our-services-url"},[s("a",{staticClass:"our-services-url-link",attrs:{href:"service-detail.html"}},[s("i",{staticClass:"fa fa-external-link"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"our-services-content"},[s("div",{staticClass:"our-services-title"},[s("a",{staticClass:"our-services-title-link",attrs:{href:"service-detail.html"}},[t._v("\n                          Building Renovation\n                        ")])]),s("div",{staticClass:"our-services-desc"},[t._v("\n                        Depending on the scope of your project, we design your renovation in-house or partner with Builder ‘s finest architects to design, budget and build.\n                      ")]),s("div",{staticClass:"our-services-readmore-2"},[s("a",{staticClass:"our-services-readmore-link-2",attrs:{href:"service-detail.html"}},[t._v("\n                          READ MORE\n                        ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"service-entry-cover"},[s("div",{staticClass:"service-overlay our-services-container"}),s("div",{staticClass:"our-services-readmore"},[s("a",{staticClass:"our-services-readmore-link",attrs:{href:"service-detail.html"}},[t._v("\n                            READ MORE\n                          ")])]),s("div",{staticClass:"our-services-url"},[s("a",{staticClass:"our-services-url-link",attrs:{href:"service-detail.html"}},[s("i",{staticClass:"fa fa-external-link"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"our-services-content"},[s("div",{staticClass:"our-services-title"},[s("a",{staticClass:"our-services-title-link",attrs:{href:"service-detail.html"}},[t._v("\n                          Design & Build Package\n                        ")])]),s("div",{staticClass:"our-services-desc"},[t._v("\n                        Integrity for what we build, the purpose of why we build. We build a house with the synchronism between design and build package.\n                      ")]),s("div",{staticClass:"our-services-readmore-2"},[s("a",{staticClass:"our-services-readmore-link-2",attrs:{href:"service-detail.html"}},[t._v("\n                          READ MORE\n                        ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"service-entry-cover"},[s("div",{staticClass:"service-overlay our-services-container"}),s("div",{staticClass:"our-services-readmore"},[s("a",{staticClass:"our-services-readmore-link",attrs:{href:"service-detail.html"}},[t._v("\n                            READ MORE\n                          ")])]),s("div",{staticClass:"our-services-url"},[s("a",{staticClass:"our-services-url-link",attrs:{href:"service-detail.html"}},[s("i",{staticClass:"fa fa-external-link"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"our-services-content"},[s("div",{staticClass:"our-services-title"},[s("a",{staticClass:"our-services-title-link",attrs:{href:"service-detail.html"}},[t._v("\n                          Preconstruction\n                        ")])]),s("div",{staticClass:"our-services-desc"},[t._v("\n                        To ensure that the homebuilding process goes smoothly, it's important that both the homebuilder and buyer understand each other's expectations.\n                      ")]),s("div",{staticClass:"our-services-readmore-2"},[s("a",{staticClass:"our-services-readmore-link-2",attrs:{href:"service-detail.html"}},[t._v("\n                          READ MORE\n                        ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"service-entry-cover"},[s("div",{staticClass:"service-overlay our-services-container"}),s("div",{staticClass:"our-services-readmore"},[s("a",{staticClass:"our-services-readmore-link",attrs:{href:"service-detail.html"}},[t._v("\n                            READ MORE\n                          ")])]),s("div",{staticClass:"our-services-url"},[s("a",{staticClass:"our-services-url-link",attrs:{href:"service-detail.html"}},[s("i",{staticClass:"fa fa-external-link"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"our-services-content"},[s("div",{staticClass:"our-services-title"},[s("a",{staticClass:"our-services-title-link",attrs:{href:"service-detail.html"}},[t._v("\n                          Build Services\n                        ")])]),s("div",{staticClass:"our-services-desc"},[t._v("\n                        Builder's 15 years in design-build with quality contractors has built our best practice solutions to ensure successful project delivery.\n                      ")]),s("div",{staticClass:"our-services-readmore-2"},[s("a",{staticClass:"our-services-readmore-link-2",attrs:{href:"service-detail.html"}},[t._v("\n                          READ MORE\n                        ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"service-entry-cover"},[s("div",{staticClass:"service-overlay our-services-container"}),s("div",{staticClass:"our-services-readmore"},[s("a",{staticClass:"our-services-readmore-link",attrs:{href:"service-detail.html"}},[t._v("\n                            READ MORE\n                          ")])]),s("div",{staticClass:"our-services-url"},[s("a",{staticClass:"our-services-url-link",attrs:{href:"service-detail.html"}},[s("i",{staticClass:"fa fa-external-link"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"our-services-content"},[s("div",{staticClass:"our-services-title"},[s("a",{staticClass:"our-services-title-link",attrs:{href:"service-detail.html"}},[t._v("\n                          House Smart\n                        ")])]),s("div",{staticClass:"our-services-desc"},[t._v("\n                        How smart is your house? All houses are not designed or built the same. What happens behind the walls, below the floors.\n                      ")]),s("div",{staticClass:"our-services-readmore-2"},[s("a",{staticClass:"our-services-readmore-link-2",attrs:{href:"service-detail.html"}},[t._v("\n                          READ MORE\n                        ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"service-entry-cover"},[s("div",{staticClass:"service-overlay our-services-container"}),s("div",{staticClass:"our-services-readmore"},[s("a",{staticClass:"our-services-readmore-link",attrs:{href:"service-detail.html"}},[t._v("\n                            READ MORE\n                          ")])]),s("div",{staticClass:"our-services-url"},[s("a",{staticClass:"our-services-url-link",attrs:{href:"service-detail.html"}},[s("i",{staticClass:"fa fa-external-link"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"our-services-content"},[s("div",{staticClass:"our-services-title"},[s("a",{staticClass:"our-services-title-link",attrs:{href:"service-detail.html"}},[t._v("\n                          Domestic Builders\n                        ")])]),s("div",{staticClass:"our-services-desc"},[t._v("\n                        Whilst many people flout the above laws – and have done for many years, consumers are becoming much more aware of the requirement to engage.\n                      ")]),s("div",{staticClass:"our-services-readmore-2"},[s("a",{staticClass:"our-services-readmore-link-2",attrs:{href:"service-detail.html"}},[t._v("\n                          READ MORE\n                        ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navigationbutton button-left projects_btn_left"},[s("i",{staticClass:"fa fa-angle-left"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navigationbutton button-right projects_btn_right"},[s("i",{staticClass:"fa fa-angle-right"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"our-projects-categories"},[s("a",{attrs:{href:"#"}},[t._v("Building")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"our-projects-title"},[s("a",{attrs:{href:"portfolio-detail.html"}},[t._v("\n                              White House in London\n                            ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"our-projects-categories"},[s("a",{attrs:{href:"#"}},[t._v("3D Design")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"our-projects-title"},[s("a",{attrs:{href:"portfolio-detail.html"}},[t._v("\n                              White House in Singapore\n                            ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"our-projects-categories"},[s("a",{attrs:{href:"#"}},[t._v("Exterior")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"our-projects-title"},[s("a",{attrs:{href:"portfolio-detail.html"}},[t._v("\n                              White House in Paris\n                            ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"our-projects-categories"},[s("a",{attrs:{href:"#"}},[t._v("Interior")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"our-projects-title"},[s("a",{attrs:{href:"portfolio-detail.html"}},[t._v("\n                              White House in Spain\n                            ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"our-projects-categories"},[s("a",{attrs:{href:"#"}},[t._v("Art")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"our-projects-title"},[s("a",{attrs:{href:"portfolio-detail.html"}},[t._v("\n                              White House in Singapore\n                            ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"our-projects-categories"},[s("a",{attrs:{href:"#"}},[t._v("3D Design")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"our-projects-title"},[s("a",{attrs:{href:"portfolio-detail.html"}},[t._v("\n                              White House in London\n                            ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-sm-4"},[s("div",{staticClass:"mb-3"},[s("div",{staticClass:"text-center"},[s("img",{attrs:{width:"370",height:"240",src:"images/image_360x234.jpg",alt:""}})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"info"},[s("div",[s("h4",[t._v("TỨ VẤN")]),s("h5",[t._v("MIỄN PHÍ")]),s("a",{attrs:{href:"#"}},[t._v("BẤM VÀO ĐÂY! ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"clients_btn"},[s("div",{staticClass:"section-title"},[t._v("Đối tác")]),s("div",{staticClass:"navigationbutton button-left clients_btn_left"},[s("i",{staticClass:"fa fa-angle-left"})]),s("div",{staticClass:"navigationbutton button-right clients_btn_right"},[s("i",{staticClass:"fa fa-angle-right"})])])}],r=(s("cadf"),s("551c"),s("f751"),s("097d"),s("a2b6")),o={name:"Home",metaInfo:{title:"Xây Dựng Hoa Nam - Trang chủ"},data:function(){return{publicPath:"/"}},computed:{data:function(){return this.$store.state.home},homeBanners:function(){return this.$store.state.banners.filter(function(t){return"home-banner"===t.type})},clientBanners:function(){return this.$store.state.banners.filter(function(t){return"client"===t.type})}},mounted:function(){Object(r["a"])(["#rev_slider_1",".service-list",".project-list",".client-list"],function(){n(),c(),l(),d()})}};function n(){$("#rev_slider_1").show().revolution({sliderType:"standard",sliderLayout:"auto",dottedOverlay:"none",delay:9e3,navigation:{keyboardNavigation:"off",keyboard_direction:"horizontal",mouseScrollNavigation:"off",mouseScrollReverse:"default",onHoverStop:"on",touch:{touchenabled:"on",swipe_threshold:75,swipe_min_touches:1,swipe_direction:"horizontal",drag_block_vertical:!1},arrows:{style:"hebe",enable:!0,hide_onmobile:!0,hide_under:600,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,left:{h_align:"left",v_align:"center",h_offset:20,v_offset:0},right:{h_align:"right",v_align:"center",h_offset:20,v_offset:0}}},responsiveLevels:[1240,1024,778,480],visibilityLevels:[1240,1024,778,480],gridwidth:[1920,1024,778,480],gridheight:[550,550,550,550],lazyType:"none",shadow:0,spinner:"spinner3",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",autoHeight:"off",hideThumbsOnMobile:"off",hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,debugMode:!1,fallbacks:{simplifyAll:"off",nextSlideOnWindowFocus:"off",disableFocusListener:!1}})}function c(){$(".service-list").owlCarousel({items:2,itemsDesktop:[1199,2],itemsDesktopSmall:[979,2],itemsTablet:[767,2],itemsMobile:[480,1],slideSpeed:500,paginationSpeed:1e3,rewindSpeed:1e3,autoHeight:!0,addClassActive:!0,autoPlay:!1,loop:!0,pagination:!1}),$(".ourservices_btn_left").on("click",function(){$(".service-list").trigger("owl.prev")}),$(".ourservices_btn_right").on("click",function(){$(".service-list").trigger("owl.next")})}function l(){$(".project-list").owlCarousel({items:4,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[767,1],itemsMobile:[480,1],slideSpeed:500,paginationSpeed:1e3,rewindSpeed:1e3,autoHeight:!1,addClassActive:!0,autoPlay:!1,loop:!0,pagination:!1}),$(".projects_btn_left").on("click",function(){$(".project-list").trigger("owl.prev")}),$(".projects_btn_right").on("click",function(){$(".project-list").trigger("owl.next")})}function d(){$(".client-list").owlCarousel({items:6,itemsDesktop:[1199,6],itemsDesktopSmall:[979,3],itemsTablet:[767,2],itemsMobile:[480,2],slideSpeed:500,paginationSpeed:1e3,rewindSpeed:1e3,autoHeight:!1,addClassActive:!0,autoPlay:!1,loop:!0,pagination:!1}),$(".clients_btn_left").on("click",function(){$(".client-list").trigger("owl.prev")}),$(".clients_btn_right").on("click",function(){$(".client-list").trigger("owl.next")})}var v=o,u=s("2877"),f=Object(u["a"])(v,a,i,!1,null,null,null);e["default"]=f.exports},d864:function(t,e,s){var a=s("79aa");t.exports=function(t,e,s){if(a(t),void 0===e)return t;switch(s){case 1:return function(s){return t.call(e,s)};case 2:return function(s,a){return t.call(e,s,a)};case 3:return function(s,a,i){return t.call(e,s,a,i)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,s){var a=s("e4ae"),i=s("794b"),r=s("1bc3"),o=Object.defineProperty;e.f=s("8e60")?Object.defineProperty:function(t,e,s){if(a(t),e=r(e,!0),a(s),i)try{return o(t,e,s)}catch(n){}if("get"in s||"set"in s)throw TypeError("Accessors not supported!");return"value"in s&&(t[e]=s.value),t}},e4ae:function(t,e,s){var a=s("f772");t.exports=function(t){if(!a(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var s=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=s)},f410:function(t,e,s){s("1af6"),t.exports=s("584a").Array.isArray},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=chunk-f4c4f084.b05f8be9.js.map