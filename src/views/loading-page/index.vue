<template lang="pug">
  .wrap
    .box
</template>

<script>
export default {
  name: 'loading-page',
  data () {
    return {}
  },
  created () {
    setTimeout(() => {
      this.$router.push({ name: 'todo' })
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
