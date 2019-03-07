<template>
  <div id="app">
    <pre-loading></pre-loading>
    <side-menu></side-menu>
    <div id="page" class="site">
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
      <div class="copyright">
        <div class="container">
          <div class="row middle">
            <div class="col-md-12 end-md end-lg center">
              © Copyrights {{year}}, powered by <a href="https://crystsoft.asia">Crystsoft Vietnam</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a class="scrollup"><i class="fa fa-angle-up"></i></a>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      year: (new Date()).getFullYear()
    }
  },
  components: {
    preLoading: () => import('@/components/PreLoading'),
    sideMenu: () => import('@/components/SideMenu'),
    appHeader: () => import('@/components/AppHeader'),
    appFooter: () => import('@/components/AppFooter')
  },
  mounted () {
    preLoading()
    this.$store.dispatch('getHome')
    this.$store.dispatch('getBanner')
  }
}

function preLoading () {
  if (!$('#loading').length) {
    console.log('reloading...')
    setTimeout(preLoading, 500)
  }
  $('#loading').fadeOut(300)
}
</script>
