<template>
  <div class="site-content">
    <div class="section" v-if="homeBanners.length">
      <div class="rev_slider_wrapper fullwidthbanner-container">
        <div id="rev_slider_1" class="rev_slider fullwidthabanner">
          <ul>
            <li data-transition="random"
                data-slotamount="7"
                data-hideafterloop="0"
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed="300"
                data-rotate="0"
                data-saveperformance="off"
                data-title="Slide"
                v-for="item in homeBanners"
                :key="item.id"
            >
              <!-- MAIN IMAGE -->
              <img :src="item.img" alt=""
                   data-bgposition="center top"
                   data-kenburns="on"
                   data-duration="9000"
                   data-ease="Linear.easeNone"
                   data-scalestart="100"
                   data-scaleend="110"
                   data-rotatestart="0"
                   data-rotateend="0"
                   data-offsetstart="0 0"
                   data-offsetend="0 0"
                   class="rev-slidebg" />
              <!-- LAYERS -->

              <div class="tp-caption tp-resizeme"
                   data-x="['left','center','center','center']"
                   data-hoffset="['0','0','0','0']"
                   data-y="['top','middle','middle','middle']"
                   data-voffset="['135','-130','-130','-128']"
                   data-width="none"
                   data-height="none"
                   data-whitespace="nowrap"
                   data-visibility="['on','on','on','off']"
                   data-transform_idle="o:1;"
                   data-transform_in="x:right;s:250;e:Power3.easeInOut;"
                   data-transform_out="x:left;s:300;s:300;"
                   data-start="800"
                   data-responsive_offset="on"><img :src="`${publicPath}images/banner/line_01.png`" alt="" />
              </div>

              <div class="tp-caption tp-resizeme"
                   data-x="['left','center','center','center']"
                   data-hoffset="['-1','0','0','0']"
                   data-y="['top','middle','middle','middle']"
                   data-voffset="['419','150','150','128']"
                   data-width="none"
                   data-height="none"
                   data-whitespace="nowrap"
                   data-visibility="['on','on','on','off']"
                   data-transform_idle="o:1;"
                   data-transform_in="x:left;s:250;e:Power3.easeInOut;"
                   data-transform_out="x:right;s:300;s:300;"
                   data-start="1000"
                   data-responsive_offset="on"><img :src="`${publicPath}images/banner/line_01.png`" alt="" />
              </div>

              <div class="tp-caption tp-resizeme"
                   data-x="['left','center','center','left']"
                   data-hoffset="['375','-250','-250','135']"
                   data-y="['top','middle','middle','top']"
                   data-voffset="['0','0','0','0']"
                   data-width="none"
                   data-height="none"
                   data-whitespace="nowrap"
                   data-visibility="['on','on','on','off']"
                   data-transform_idle="o:1;"
                   data-transform_in="y:bottom;s:250;e:Power3.easeInOut;"
                   data-transform_out="y:top;s:300;s:300;"
                   data-start="1200"
                   data-responsive_offset="on"><img :src="`${publicPath}images/banner/line_02.png`" alt="" />
              </div>

              <div class="tp-caption tp-resizeme"
                   data-x="['left','center','center','left']"
                   data-hoffset="['890','250','250','635']"
                   data-y="['top','middle','middle','top']"
                   data-voffset="['0','0','0','0']"
                   data-width="none"
                   data-height="none"
                   data-whitespace="nowrap"
                   data-visibility="['on','on','on','off']"
                   data-transform_idle="o:1;"
                   data-transform_in="y:top;s:250;e:Power3.easeInOut;"
                   data-transform_out="y:bottom;s:300;s:300;"
                   data-start="1400"
                   data-responsive_offset="on"><img :src="`${publicPath}images/banner/line_02.png`" alt="" />
              </div>

              <div class="tp-caption tp-shape tp-shapewrapper tp-resizeme"
                   data-x="['left','center','center','center']"
                   data-hoffset="['375','0','0','0']"
                   data-y="['top','middle','middle','middle']"
                   data-voffset="['135','0','0','0']"
                   data-width="['515','500','500','500']"
                   data-height="['285','280','280','280']"
                   data-whitespace="['normal','nowrap','nowrap','nowrap']"
                   data-transform_idle="o:1;"
                   data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:400;e:Power3.easeInOut;"
                   data-transform_out="opacity:0;s:300;s:300;"
                   data-start="1600"
                   data-responsive_offset="on"></div>

              <div class="tp-caption slide-text-1 tp-resizeme"
                   data-x="['left','center','center','center']"
                   data-hoffset="['410','0','0','0']"
                   data-y="['top','middle','middle','middle']"
                   data-voffset="['165','-110','-110','-110']"
                   data-width="none"
                   data-height="none"
                   data-whitespace="nowrap"
                   data-transform_idle="o:1;"
                   data-transform_in="opacity:0;s:200;e:Power3.easeInOut;"
                   data-transform_out="opacity:0;s:300;s:300;"
                   data-start="2000"
                   data-splitin="none"
                   data-splitout="none"
                   data-responsive_offset="on">{{item.heading}}
              </div>

              <div class="tp-caption tp-resizeme"
                   data-x="['left','center','center','center']"
                   data-hoffset="['410','0','0','0']"
                   data-y="['top','middle','middle','middle']"
                   data-voffset="['203','-70','-70','-70']"
                   data-width="none"
                   data-height="none"
                   data-whitespace="nowrap"
                   data-transform_idle="o:1;"
                   data-transform_in="opacity:0;s:200;e:Power3.easeInOut;"
                   data-transform_out="opacity:0;s:300;s:300;"
                   data-start="2000"
                   data-responsive_offset="on"><img :src="`${publicPath}images/banner/line_03.png`" alt="" />
              </div>

              <div class="tp-caption slide-text-2 tp-resizeme"
                   data-x="['left','center','center','center']"
                   data-hoffset="['410','0','0','0']"
                   data-y="['top','middle','middle','middle']"
                   data-voffset="['216','-40','-40','-40']"
                   data-width="none"
                   data-height="none"
                   data-whitespace="nowrap"
                   data-transform_idle="o:1;"
                   data-transform_in="opacity:0;s:200;e:Power3.easeInOut;"
                   data-transform_out="opacity:0;s:300;s:300;"
                   data-start="2000"
                   data-splitin="none"
                   data-splitout="none"
                   data-responsive_offset="on">{{item.title}}
              </div>
            </li>
          </ul>
          <div class="tp-bannertimer"></div>
        </div>
      </div>
    </div>
    <div class="section call-for-action">
      <div class="container">
        <div class="row">
          <div class="col-sm-9">
            <div class="custom_heading home_quote_txt">
              <div class="call-for-action-text">
                {{data.call_for_action_text}}
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="home_quote_btn text-right">
              <router-link to="/contact-us">{{data.call_for_action_button}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section pt-5 pb-3">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="mb-3">
              <div class="section-title">{{data.our_services_text}}</div>
              <div class="section-desc">
                <p>{{data.our_services_info}}</p>
              </div>
              <div class="ourservices_btn">
                <div class="navigationbutton button-left ourservices_btn_left">
                  <i class="fa fa-angle-left"></i>
                </div>
                <div class="navigationbutton button-right ourservices_btn_right">
                  <i class="fa fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="myportfolio-container minimal-light row">
              <div class="slider-wrapper">
                <ul class="service-list">
                  <li class="col-md-6 col-sm-6">
                    <div class="service-item">
                      <div class="service-entry-media">
                        <img :src="`${publicPath}images/services/service_360x195.jpg`" alt="" />
                        <div class="service-entry-cover">
                          <div class="service-overlay our-services-container"></div>
                          <div class="our-services-readmore">
                            <a class="our-services-readmore-link" href="service-detail.html">
                              READ MORE
                            </a>
                          </div>
                          <div class="our-services-url">
                            <a class="our-services-url-link" href="service-detail.html">
                              <i class="fa fa-external-link"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="our-services-content">
                        <div class="our-services-title">
                          <a class="our-services-title-link" href="service-detail.html">
                            Building Renovation
                          </a>
                        </div>
                        <div class="our-services-desc">
                          Depending on the scope of your project, we design your renovation in-house or partner with Builder ‘s finest architects to design, budget and build.
                        </div>
                        <div class="our-services-readmore-2">
                          <a class="our-services-readmore-link-2" href="service-detail.html">
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="col-md-6 col-sm-6">
                    <div class="service-item">
                      <div class="service-entry-media">
                        <img :src="`${publicPath}images/services/service_360x195.jpg`" alt="" />
                        <div class="service-entry-cover">
                          <div class="service-overlay our-services-container"></div>
                          <div class="our-services-readmore">
                            <a class="our-services-readmore-link" href="service-detail.html">
                              READ MORE
                            </a>
                          </div>
                          <div class="our-services-url">
                            <a class="our-services-url-link" href="service-detail.html">
                              <i class="fa fa-external-link"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="our-services-content">
                        <div class="our-services-title">
                          <a class="our-services-title-link" href="service-detail.html">
                            Design &amp; Build Package
                          </a>
                        </div>
                        <div class="our-services-desc">
                          Integrity for what we build, the purpose of why we build. We build a house with the synchronism between design and build package.
                        </div>
                        <div class="our-services-readmore-2">
                          <a class="our-services-readmore-link-2" href="service-detail.html">
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="col-md-6 col-sm-6">
                    <div class="service-item">
                      <div class="service-entry-media">
                        <img :src="`${publicPath}images/services/service_360x195.jpg`" alt="" />
                        <div class="service-entry-cover">
                          <div class="service-overlay our-services-container"></div>
                          <div class="our-services-readmore">
                            <a class="our-services-readmore-link" href="service-detail.html">
                              READ MORE
                            </a>
                          </div>
                          <div class="our-services-url">
                            <a class="our-services-url-link" href="service-detail.html">
                              <i class="fa fa-external-link"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="our-services-content">
                        <div class="our-services-title">
                          <a class="our-services-title-link" href="service-detail.html">
                            Preconstruction
                          </a>
                        </div>
                        <div class="our-services-desc">
                          To ensure that the homebuilding process goes smoothly, it's important that both the homebuilder and buyer understand each other's expectations.
                        </div>
                        <div class="our-services-readmore-2">
                          <a class="our-services-readmore-link-2" href="service-detail.html">
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="col-md-6 col-sm-6">
                    <div class="service-item">
                      <div class="service-entry-media">
                        <img :src="`${publicPath}images/services/service_360x195.jpg`" alt="" />
                        <div class="service-entry-cover">
                          <div class="service-overlay our-services-container"></div>
                          <div class="our-services-readmore">
                            <a class="our-services-readmore-link" href="service-detail.html">
                              READ MORE
                            </a>
                          </div>
                          <div class="our-services-url">
                            <a class="our-services-url-link" href="service-detail.html">
                              <i class="fa fa-external-link"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="our-services-content">
                        <div class="our-services-title">
                          <a class="our-services-title-link" href="service-detail.html">
                            Build Services
                          </a>
                        </div>
                        <div class="our-services-desc">
                          Builder's 15 years in design-build with quality contractors has built our best practice solutions to ensure successful project delivery.
                        </div>
                        <div class="our-services-readmore-2">
                          <a class="our-services-readmore-link-2" href="service-detail.html">
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="col-md-6 col-sm-6">
                    <div class="service-item">
                      <div class="service-entry-media">
                        <img :src="`${publicPath}images/services/service_360x195.jpg`" alt="" />
                        <div class="service-entry-cover">
                          <div class="service-overlay our-services-container"></div>
                          <div class="our-services-readmore">
                            <a class="our-services-readmore-link" href="service-detail.html">
                              READ MORE
                            </a>
                          </div>
                          <div class="our-services-url">
                            <a class="our-services-url-link" href="service-detail.html">
                              <i class="fa fa-external-link"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="our-services-content">
                        <div class="our-services-title">
                          <a class="our-services-title-link" href="service-detail.html">
                            House Smart
                          </a>
                        </div>
                        <div class="our-services-desc">
                          How smart is your house? All houses are not designed or built the same. What happens behind the walls, below the floors.
                        </div>
                        <div class="our-services-readmore-2">
                          <a class="our-services-readmore-link-2" href="service-detail.html">
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="col-md-6 col-sm-6">
                    <div class="service-item">
                      <div class="service-entry-media">
                        <img :src="`${publicPath}images/services/service_360x195.jpg`" alt="" />
                        <div class="service-entry-cover">
                          <div class="service-overlay our-services-container"></div>
                          <div class="our-services-readmore">
                            <a class="our-services-readmore-link" href="service-detail.html">
                              READ MORE
                            </a>
                          </div>
                          <div class="our-services-url">
                            <a class="our-services-url-link" href="service-detail.html">
                              <i class="fa fa-external-link"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="our-services-content">
                        <div class="our-services-title">
                          <a class="our-services-title-link" href="service-detail.html">
                            Domestic Builders
                          </a>
                        </div>
                        <div class="our-services-desc">
                          Whilst many people flout the above laws – and have done for many years, consumers are becoming much more aware of the requirement to engage.
                        </div>
                        <div class="our-services-readmore-2">
                          <a class="our-services-readmore-link-2" href="service-detail.html">
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section home-latest-projects">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="mb-3 projects_btn">
              <p>{{data.home_latest_projects}}</p>
              <div class="navigationbutton button-left projects_btn_left">
                <i class="fa fa-angle-left"></i>
              </div>
              <div class="navigationbutton button-right projects_btn_right">
                <i class="fa fa-angle-right"></i>
              </div>
            </div>
            <div class="myportfolio-container minimal-light">
              <div class="slider-wrapper">
                <div class="row">
                  <ul class="project-list">
                    <li class="our-projects-wrapper col-md-4 col-sm-6">
                      <div class="project-media-cover-wrapper">
                        <div class="project-entry-media">
                          <img :src="`${publicPath}images/portfolio/portfolio_263x280.jpg`" alt="" />
                        </div>
                        <div class="project-entry-cover">
                          <div class="project-overlay our-projects-container"></div>
                          <div class="project-content">
                            <div class="our-projects-categories">
                              <a href="#">Building</a>
                            </div>
                            <div class="line-clear"></div>
                            <div class="our-projects-title">
                              <a href="portfolio-detail.html">
                                White House in London
                              </a>
                            </div>
                            <div class="line-clear"></div>
                            <div class="our-projects-popup">
                              <a data-rel="prettyPhoto" :href="`${publicPath}images/portfolio/portfolio_770x515.jpg`">
                                <i class="fa fa-search"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="our-projects-wrapper col-md-4 col-sm-6">
                      <div class="project-media-cover-wrapper">
                        <div class="project-entry-media">
                          <img :src="`${publicPath}images/portfolio/portfolio_263x280.jpg`" alt="" />
                        </div>
                        <div class="project-entry-cover">
                          <div class="project-overlay our-projects-container"></div>
                          <div class="project-content">
                            <div class="our-projects-categories">
                              <a href="#">3D Design</a>
                            </div>
                            <div class="line-clear"></div>
                            <div class="our-projects-title">
                              <a href="portfolio-detail.html">
                                White House in Singapore
                              </a>
                            </div>
                            <div class="line-clear"></div>
                            <div class="our-projects-popup">
                              <a data-rel="prettyPhoto" :href="`${publicPath}images/portfolio/portfolio_770x515.jpg`">
                                <i class="fa fa-search"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="our-projects-wrapper col-md-4 col-sm-6">
                      <div class="project-media-cover-wrapper">
                        <div class="project-entry-media">
                          <img :src="`${publicPath}images/portfolio/portfolio_263x280.jpg`" alt="" />
                        </div>
                        <div class="project-entry-cover">
                          <div class="project-overlay our-projects-container"></div>
                          <div class="project-content">
                            <div class="our-projects-categories">
                              <a href="#">Exterior</a>
                            </div>
                            <div class="line-clear"></div>
                            <div class="our-projects-title">
                              <a href="portfolio-detail.html">
                                White House in Paris
                              </a>
                            </div>
                            <div class="line-clear"></div>
                            <div class="our-projects-popup">
                              <a data-rel="prettyPhoto" :href="`${publicPath}images/portfolio/portfolio_770x515.jpg`">
                                <i class="fa fa-search"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="our-projects-wrapper col-md-4 col-sm-6">
                      <div class="project-media-cover-wrapper">
                        <div class="project-entry-media">
                          <img :src="`${publicPath}images/portfolio/portfolio_263x280.jpg`" alt="" />
                        </div>
                        <div class="project-entry-cover">
                          <div class="project-overlay our-projects-container"></div>
                          <div class="project-content">
                            <div class="our-projects-categories">
                              <a href="#">Interior</a>
                            </div>
                            <div class="line-clear"></div>
                            <div class="our-projects-title">
                              <a href="portfolio-detail.html">
                                White House in Spain
                              </a>
                            </div>
                            <div class="line-clear"></div>
                            <div class="our-projects-popup">
                              <a data-rel="prettyPhoto" :href="`${publicPath}images/portfolio/portfolio_770x515.jpg`">
                                <i class="fa fa-search"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="our-projects-wrapper col-md-4 col-sm-6">
                      <div class="project-media-cover-wrapper">
                        <div class="project-entry-media">
                          <img :src="`${publicPath}images/portfolio/portfolio_263x280.jpg`" alt="" />
                        </div>
                        <div class="project-entry-cover">
                          <div class="project-overlay our-projects-container"></div>
                          <div class="project-content">
                            <div class="our-projects-categories">
                              <a href="#">Art</a>
                            </div>
                            <div class="line-clear"></div>
                            <div class="our-projects-title">
                              <a href="portfolio-detail.html">
                                White House in Singapore
                              </a>
                            </div>
                            <div class="line-clear"></div>
                            <div class="our-projects-popup">
                              <a data-rel="prettyPhoto" :href="`${publicPath}images/portfolio/portfolio_770x515.jpg`">
                                <i class="fa fa-search"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="our-projects-wrapper col-md-4 col-sm-6">
                      <div class="project-media-cover-wrapper">
                        <div class="project-entry-media">
                          <img :src="`${publicPath}images/portfolio/portfolio_263x280.jpg`" alt="" />
                        </div>
                        <div class="project-entry-cover">
                          <div class="project-overlay our-projects-container"></div>
                          <div class="project-content">
                            <div class="our-projects-categories">
                              <a href="#">3D Design</a>
                            </div>
                            <div class="line-clear"></div>
                            <div class="our-projects-title">
                              <a href="portfolio-detail.html">
                                White House in London
                              </a>
                            </div>
                            <div class="line-clear"></div>
                            <div class="our-projects-popup">
                              <a data-rel="prettyPhoto" :href="`${publicPath}images/portfolio/portfolio_770x515.jpg`">
                                <i class="fa fa-search"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section pt-5 pb-2 home_whatweare">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="mb-3">
              <div class="text-center">
                <img width="370" height="240" src="images/image_360x234.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="mb-3">
              <div class="section-title">{{data.about_us_title}}</div>
              <div class="section-desc">
                <p>{{data.about_us_readmore_info}}</p>
              </div>
              <div class="home_whatweare_btn">
                <router-link to="/about-us">{{data.about_us_readmore_button}}</router-link>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="mb-3">
              <div class="consulting">
                <img :src="`${publicPath}images/image_360x146.jpg`" alt="" width="370" height="150" />
                <div class="info">
                  <div>
                    <h4>TỨ VẤN</h4>
                    <h5>MIỄN PHÍ</h5>
                    <a href="#">BẤM VÀO ĐÂY! </a>
                  </div>
                </div>
              </div>
              <div class="mt-2">{{data.about_us_suggest}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section pt-9 pb-9 parallax bg-1">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="parallax-text">{{data.slogan}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="section pt-5 pb-5" v-if="clientBanners.length">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="clients_btn">
              <div class="section-title">Đối tác</div>
              <div class="navigationbutton button-left clients_btn_left">
                <i class="fa fa-angle-left"></i>
              </div>
              <div class="navigationbutton button-right clients_btn_right">
                <i class="fa fa-angle-right"></i>
              </div>
            </div>
            <div class="myportfolio-container minimal-light">
              <div class="row">
                <div class="slider-wrapper">
                  <ul class="client-list">
                    <li class="col-md-2 col-sm-6" v-for="item in clientBanners" :key="item.id">
                      <div class="client-media-cover-wrapper">
                        <div class="client-entry-media">
                          <img :src="item.img" alt="" />
                        </div>
                        <div class="client-entry-cover">
                          <div class="client-overlay home-clients-container"></div>
                          <div class="home-clients-title">
                            {{item.title}}
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { checkReady } from '@/helpers/utils'

export default {
  name: 'Home',
  metaInfo: {
    title: 'Xây Dựng Hoa Nam - Trang chủ'
  },
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  computed: {
    data () {
      return this.$store.state.home
    },
    homeBanners () {
      return this.$store.state.banners.filter(o => o.type === 'home-banner')
    },
    clientBanners () {
      return this.$store.state.banners.filter(o => o.type === 'client')
    }
  },
  mounted () {
    checkReady(['#rev_slider_1', '.service-list', '.project-list', '.client-list'], () => {
      RevSlider1_Init()
      ourServicesInit()
      projectSliderInit()
      clientSliderInit()
    })
  }
}

function RevSlider1_Init () {
  $('#rev_slider_1').show().revolution({
    sliderType: 'standard',
    sliderLayout: 'auto',
    dottedOverlay: 'none',
    delay: 9000,
    navigation: {
      keyboardNavigation: 'off',
      keyboard_direction: 'horizontal',
      mouseScrollNavigation: 'off',
      mouseScrollReverse: 'default',
      onHoverStop: 'on',
      touch: {
        touchenabled: 'on',
        swipe_threshold: 75,
        swipe_min_touches: 1,
        swipe_direction: 'horizontal',
        drag_block_vertical: false
      },
      arrows: {
        style: 'hebe',
        enable: true,
        hide_onmobile: true,
        hide_under: 600,
        hide_onleave: true,
        hide_delay: 200,
        hide_delay_mobile: 1200,
        left: {
          h_align: 'left',
          v_align: 'center',
          h_offset: 20,
          v_offset: 0
        },
        right: {
          h_align: 'right',
          v_align: 'center',
          h_offset: 20,
          v_offset: 0
        }
      }
    },
    responsiveLevels: [1240, 1024, 778, 480],
    visibilityLevels: [1240, 1024, 778, 480],
    gridwidth: [1920, 1024, 778, 480],
    gridheight: [550, 550, 550, 550],
    lazyType: 'none',
    shadow: 0,
    spinner: 'spinner3',
    stopLoop: 'off',
    stopAfterLoops: -1,
    stopAtSlide: -1,
    shuffle: 'off',
    autoHeight: 'off',
    hideThumbsOnMobile: 'off',
    hideSliderAtLimit: 0,
    hideCaptionAtLimit: 0,
    hideAllCaptionAtLilmit: 0,
    debugMode: false,
    fallbacks: {
      simplifyAll: 'off',
      nextSlideOnWindowFocus: 'off',
      disableFocusListener: false
    }
  })
}

function ourServicesInit () {
  $('.service-list').owlCarousel({
    items: 2,
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [979, 2],
    itemsTablet: [767, 2],
    itemsMobile: [480, 1],
    slideSpeed: 500,
    paginationSpeed: 1000,
    rewindSpeed: 1000,
    autoHeight: true,
    addClassActive: true,
    autoPlay: false,
    loop: true,
    pagination: false
  })
  $('.ourservices_btn_left').on('click', function () {
    $('.service-list').trigger('owl.prev')
  })
  $('.ourservices_btn_right').on('click', function () {
    $('.service-list').trigger('owl.next')
  })
}

// Project Slider
function projectSliderInit () {
  $('.project-list').owlCarousel({
    items: 4,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [767, 1],
    itemsMobile: [480, 1],
    slideSpeed: 500,
    paginationSpeed: 1000,
    rewindSpeed: 1000,
    autoHeight: false,
    addClassActive: true,
    autoPlay: false,
    loop: true,
    pagination: false
  })
  $('.projects_btn_left').on('click', function () {
    $('.project-list').trigger('owl.prev')
  })
  $('.projects_btn_right').on('click', function () {
    $('.project-list').trigger('owl.next')
  })
}

// Client Slider
function clientSliderInit () {
  $('.client-list').owlCarousel({
    items: 6,
    itemsDesktop: [1199, 6],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [767, 2],
    itemsMobile: [480, 2],
    slideSpeed: 500,
    paginationSpeed: 1000,
    rewindSpeed: 1000,
    autoHeight: false,
    addClassActive: true,
    autoPlay: false,
    loop: true,
    pagination: false
  })
  $('.clients_btn_left').on('click', function () {
    $('.client-list').trigger('owl.prev')
  })
  $('.clients_btn_right').on('click', function () {
    $('.client-list').trigger('owl.next')
  })
}
</script>
