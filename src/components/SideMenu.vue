<template>
  <div class="snap-drawers">
    <div class="snap-drawer snap-drawer-left">
      <div class="mobile-menu">
        <menu-component></menu-component>
      </div>
    </div>
    <div class="snap-drawer snap-drawer-right"></div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  components: {
    menuComponent: () => import('./Menu')
  }
}
</script>
