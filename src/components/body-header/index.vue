<template lang="pug">
  .header__wrap
    //- .back__icon
    header.header__title {{ pageName }}
</template>

<script>
import { TITLE_LIST } from '@/configs/site.js'

export default {
  name: 'body-header',
  components: {},
  data () {
    return {}
  },

  computed: {
    pageName: function () {
      let target = TITLE_LIST.find(node => node.route === this.$route.name)
      if (target) return target.name
      else return this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
