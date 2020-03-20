<template lang="pug">
  section.layout
    bodyHeader(v-if="$route.meta.hasHeader")
    .layout__container(:class="{noNav: !$route.meta.hasNav, noHeader: !$route.meta.hasHeader}")
      router-view
    bodyNav(v-if="$route.meta.hasNav")
</template>

<script>
import bodyHeader from '@/components/body-header'
import bodyNav from '@/components/body-nav'

export default {
  components: {
    bodyHeader,
    bodyNav
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/share.scss';

.layout {
  overflow-x: hidden;
  margin: auto;
  width: 100%;
  min-width: to-rem(320px);
  max-width: $padPro;
  background-color: $main-bg;
}
</style>
