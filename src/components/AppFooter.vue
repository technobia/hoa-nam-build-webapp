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
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="widget">
            <h3 class="widget-title"><span>Danh mục website</span></h3>
            <ul class="menu">
              <li><router-link to="/about-us">Giới thiệu</router-link></li>
              <li><router-link to="/services">Dịch vụ</router-link></li>
              <li><router-link to="/projects">Dự án</router-link></li>
              <li><router-link to="/contact-us">Liên hệ</router-link></li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="widget office-block">
            <h3 class="widget-title"><span>Địa chỉ liên hệ</span></h3>
            <div class="textwidget">
              <p><i class="fa fa-map-marker"></i>{{data.contact_us_address}}</p>
              <p><i class="fa fa-phone"></i>{{data.contact_us_phone}}</p>
              <p><i class="fa fa-envelope"></i><a :href="`mailto:${data.contact_us_email}`">{{data.contact_us_email}}</a></p>
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
