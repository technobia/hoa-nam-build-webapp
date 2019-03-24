<template>
  <div class="site-content">
    <div class="big-title">
      <div class="container">
        <h1 class="entry-title">Dự án</h1>
        <div class="breadcrumb">
          <div class="container">
            <ul class="tm_bread_crumb">
              <li class="top"><router-link to="/">Trang chủ</router-link></li>
              <li class="sub tail current">Dự án</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="our-projects">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="myportfolio-container minimal-light" id="our-projects">
              <div class="mb-6">
                <div class="filter-wrapper">
                  <a href="#" class="filterbutton selected" data-filter="*">
                    Tất cả
                  </a>
                  <a href="#" class="filterbutton" data-filter=".filter-pending">
                    Đang xây dựng
                  </a>
                  <a href="#" class="filterbutton" data-filter=".filter-success">
                    Đã hoàn thành
                  </a>
                </div>
              </div>
              <div class="portfolio-row">
                <div class="portfolioContainer portfolioContainer-full row" id="da-thumbs" v-if="projects.length">
                  <ul class="project-masonry">
                    <li class="grid-item our-projects-wrapper col-md-4 col-sm-6 mb-3"
                        :class="{
                          'filter-pending': item.type === 'pencing',
                          'filter-success': item.type === 'success'
                        }"
                        v-for="item in projects"
                        :key="item.id"
                    >
                      <div class="project-media-cover-wrapper">
                        <div class="project-entry-media">
                          <img :src="item.img" alt="" />
                        </div>
                        <div class="project-entry-cover">
                          <div class="project-overlay our-projects-container"></div>
                          <div class="project-content">
                            <div class="our-projects-categories">
                              {{item.type === 'pending' ? 'Đang xây dựng' : 'Đã hoàn thành'}}
                            </div>
                            <div class="line-clear"></div>
                            <div class="our-projects-title">
                              <a href="javascript:void(0);">
                                {{item.name}}
                              </a>
                            </div>
                            <div class="line-clear"></div>
                            <div class="our-projects-popup">
                              <a :data-rel="`prettyPhoto[${item.id}]`" :href="item.img">
                                <i class="fa fa-search"></i>
                              </a>
                              <a :href="img"
                                 :key="index"
                                 v-for="(img, index) in item.images"
                                 :data-rel="`prettyPhoto[${item.id}]`"></a>
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
  </div>
</template>

<script>
import { checkReady, injectScriptUrl } from '@/helpers/utils'

export default {
  name: 'Projects',
  metaInfo: { title: 'Xây Dựng Hoa Nam - Dự án' },
  computed: {
    projects () {
      return this.$store.state.projects
    }
  },
  mounted () {
    checkReady(['#da-thumbs'], () => {
      projectsInit()
      injectScriptUrl('/js/jquery.prettyPhoto.js', 'jquery.prettyPhoto.js')
      injectScriptUrl('/js/jquery.prettyPhoto.init.min.js', 'jquery.prettyPhoto.init.min.js')
    })
  }
}

function projectsInit () {
  $('#da-thumbs').each(function () {
    let el = $(this)
    let daThumbs = el
    let filters = $('.filter-wrapper')
    filters.on('click', 'a', function () {
      let selector = $(this).attr('data-filter')
      $('.filter-wrapper').find('.filterbutton').removeClass('selected')
      $('.current', filters).removeClass('current')
      $(this).addClass('current')
      daThumbs.isotope({
        filter: selector
      })
      return false
    })

    daThumbs.imagesLoaded(function () {
      daThumbs.isotope({
        layoutMode: 'masonry',
        itemSelector: '.grid-item',
        transitionDuration: '0.5s'
      })
    })

    filters.find('.current').trigger('click')
  })
}
</script>
