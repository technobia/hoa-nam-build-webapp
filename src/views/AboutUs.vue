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
              <div>{{data.about_us_heading}}</div>
            </div>
            <div class="mb-2">
              <p v-html="data.about_us_part_1"></p>
            </div>
            <div class="mb-3" v-if="homeBanners.length">
              <div class="single-project">
                <div class="gallery tm-gallery mb-3">
                  <div class="tm-nav">
                    <span class="tm-next"><i class="fa fa-angle-right"></i></span>
                    <span class="tm-prev"><i class="fa fa-angle-left"></i></span>
                  </div>
                  <div class="project-slider">
                    <img width="870" height="370" :src="item.img" alt="" v-for="item in homeBanners" :key="item.id" />
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-5">
              <p v-html="data.about_us_part_2"></p>
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
  name: 'AboutUs',
  metaInfo: {
    title: 'Xây Dựng Hoa Nam - Giới thiệu'
  },
  computed: {
    data () {
      return this.$store.state.home
    },
    homeBanners () {
      return this.$store.state.banners.filter(o => o.type === 'about_us')
    }
  },
  mounted () {
    checkReady(['.project-slider'], projectSliderInit)
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
