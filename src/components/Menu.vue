<template>
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
      <router-link to="/contact-us">Liên hệ</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
    getActiveLink (url) {
      return this.$route.fullPath === url
    }
  }
}
</script>
