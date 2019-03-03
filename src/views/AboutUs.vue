<template>
  <div class="site-content">
    <div class="big-title">
      <div class="container">
        <h1 class="entry-title">Giới thiệu</h1>
        <div class="breadcrumb">
          <div class="container">
            <ul class="tm_bread_crumb">
              <li class="top">
                <router-link to="/">Trang chủ</router-link>
              </li>
              <li class="sub tail current">Giới thiệu</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="our_services_heading3 mb-2">
              <div>Awards</div>
            </div>
            <div class="mb-2">
              <p>
                We have receive a lot of awards from 2011 to 2015. Recently we get Number One Green Builder in the country, Engineering News-Record, The Green Sourcebook.
              </p>
            </div>
            <div class="mb-3">
              <div class="single-project">
                <div class="gallery tm-gallery mb-3">
                  <div class="tm-nav">
                    <span class="tm-next"><i class="fa fa-angle-right"></i></span>
                    <span class="tm-prev"><i class="fa fa-angle-left"></i></span>
                  </div>
                  <div class="project-slider">
                    <img width="870" height="370" src="images/services/service_750x320.jpg" alt="" />
                    <img width="870" height="370" src="images/services/service_750x320.jpg" alt="" />
                    <img width="870" height="370" src="images/services/service_750x320.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-5">
              <p>
                Recognizing excellence, quality and innovation in building, the receipt of an award in this prestigious competition is a goal every professional builder aspires to.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  metaInfo: {
    title: 'Giới thiệu'
  },
  mounted () {
    if ($('.project-slider').length > 0) {
      projectSliderInit()
    }
  }
}

function projectSliderInit () {
  $('.project-slider').owlCarousel({
    items: 1,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [979, 1],
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
  $('.tm-prev').on('click', function () {
    $('.project-slider').trigger('owl.prev')
  })
  $('.tm-next').on('click', function () {
    $('.project-slider').trigger('owl.next')
  })
}
</script>
