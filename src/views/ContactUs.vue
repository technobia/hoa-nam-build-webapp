<template>
  <div class="site-content">
    <div class="big-title">
      <div class="container">
        <h1 class="entry-title">Contact</h1>
        <div class="breadcrumb">
          <div class="container">
            <ul class="tm_bread_crumb">
              <li class="top"><router-link to="/">Trang chủ</router-link></li>
              <li class="sub tail current">Liên hệ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-contact">
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <div class="mb-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501726.4604411113!2d106.41504048145225!3d10.754666404816403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2sHo+Chi+Minh+City%2C+Vietnam!5e0!3m2!1sen!2s!4v1551410581606"
                id="map-canvas"
                height="370"
                width="100%"
              ></iframe>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="mb-2">
              <h1>{{data.contact_us_heading}}</h1>
            </div>
            <div class="contact-info">
              <p><i class="fa fa-map-marker"></i>{{data.contact_us_address}}</p>
              <p><i class="fa fa-phone"></i> {{data.contact_us_phone}}</p>
              <p><i class="fa fa-envelope"></i> {{data.contact_us_email}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  metaInfo: { title: 'Xây Dựng Hoà Nam - Liên hệ' },
  computed: {
    data () {
      return this.$store.state.home
    }
  }
}
</script>
