<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <div class="widget">
            <a href="./" class="footer-logo">
              <img src="images/footer_logo.png" alt="Footer Logo" />
            </a>
            {{data.footer_about_us}}
          </div>
          <div class="social">
            <div class="social-menu">
              <ul class="menu">
                <li><a href="http://facebook.com">Facebook</a></li>
                <li><a href="http://twitter.com">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="widget">
            <h3 class="widget-title"><span>Thông tin liên hệ</span></h3>
            <ul class="menu">
              <li><a href="#">Giới thiệu</a></li>
              <li><a href="#">Dự án</a></li>
              <li><a href="#">Liên hệ</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="widget office-block">
            <h3 class="widget-title"><span>Văn phòng</span></h3>
            <div class="textwidget">
              <p><i class="fa fa-map-marker"></i>14 Tottenham Road, London, England.</p>
              <p><i class="fa fa-phone"></i>(102) 6666 8888</p>
              <p><i class="fa fa-envelope"></i><a href="mailto:email@domain.com">email@domain.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    data () {
      return this.$store.state.home
    }
  }
}
</script>

<style scoped>
  .site-footer .office-block .fa {
    width: 18px;
    margin-right: 5px;
  }
</style>
