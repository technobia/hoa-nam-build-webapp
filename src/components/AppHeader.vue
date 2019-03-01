<template>
  <header class="site-header">
    <nav id="site-navigation" class="main-navigation">
      <div class="main-menu">
        <div class="container">
          <div class="row middle">
            <div class="col-md-2 col-xs-10 site-branding">
              <a href="./">
                <img src="images/logo.png" alt="Logo" />
              </a>
            </div>
            <div class="col-xs-2 hidden-md hidden-lg end">
              <i id="open-left" class="fa fa-navicon"></i>
            </div>
            <div class="col-md-9 hidden-xs hidden-sm nav-left">
              <div class="primary-menu">
                <ul class="menu">
                  <li :class="{ 'current-menu-item': getActiveLink('/') }">
                    <router-link to="/">Trang chủ</router-link>
                  </li>
                  <li :class="{ 'current-menu-item': getActiveLink('/about-us') }">
                    <router-link to="/about-us">Giới thiệu</router-link>
                  </li>
                  <li :class="{ 'current-menu-item': getActiveLink('/projects') }">
                    <router-link to="/projects">Dự án</router-link>
                  </li>
                  <li :class="{ 'current-menu-item': getActiveLink('/contact-us') }">
                    <a href="#">Liên hệ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- #site-navigation -->
  </header>
</template>

<script>
/* eslint-disable */
export default {
  name: 'AppHeader',
  methods: {
    getActiveLink (url) {
      return this.$route.fullPath === url
    }
  },
  mounted () {
    initScript()
  }
}

function initScript () {
  const snapper = new Snap({
    element: document.getElementById('page'),
    dragger: document.getElementsByClassName('page'),
    disable: 'right',
    slideIntent: 10
  })

  $('#open-left').on('click', function () {
    snapper.open('left')
  })
}
</script>
