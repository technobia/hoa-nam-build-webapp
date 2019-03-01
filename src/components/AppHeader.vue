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
                <menu-component></menu-component>
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
  components: {
    menuComponent: () => import('./Menu')
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
