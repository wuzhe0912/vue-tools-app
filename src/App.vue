<template lang="pug">
  #app
    bodyHeader(v-if="$route.meta.hasHeader")
    .layout
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

<style>

</style>
