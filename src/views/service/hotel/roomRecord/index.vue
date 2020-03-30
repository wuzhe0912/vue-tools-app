<template lang="pug">
  .record__warp
    .record__completed
      i.icon
      span {{ $t('完成訂單') }}
    .btn__wrap
      button.btn__primary.btn(@click="goBack()") {{ $t('回到首頁') }}
</template>

<script>
export default {
  name: 'roomRecord',
  components: {},

  data () {
    return {
    }
  },

  methods: {
    goBack () {
      this.$router.push({ name: 'service' })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
