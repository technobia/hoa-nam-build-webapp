<template>
  <div class="site-content">
    <div class="big-title">
      <div class="container">
        <h1 class="entry-title">Dịch vụ</h1>
        <div class="breadcrumb">
          <div class="container">
            <ul class="tm_bread_crumb">
              <li class="top">
                <router-link to="/">Trang chủ</router-link>
              </li>
              <li class="sub tail current">Dịch vụ</li>
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
              <div>{{data.service_heading}}</div>
            </div>
            <div class="service-body mb-2">
              <p v-html="data.service_body"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
  metaInfo: {
    title: 'Xây Dựng Hoa Nam - Dịch vụ'
  },
  computed: {
    data () {
      return this.$store.state.home
    }
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

<style scoped>
.service-body {
  color: #333333;
}
</style>
