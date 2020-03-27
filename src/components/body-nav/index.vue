<template lang="pug">
  .nav__wrap
    nav.nav
      template(v-for="node in list")
        router-link.nav__link(:to="{ name: `${node.route}` }")
          font-awesome-icon.icon(:icon="node.icon")
          h2.txt {{ $t(node.name) }}
</template>

<script>
export default {
  name: 'body-nav',
  components: {},
  data () {
    return {
      list: [
        { name: '待辦', icon: 'list-alt', route: 'todo' },
        { name: '分類', icon: 'bars', route: 'category' },
        { name: '新聞', icon: 'newspaper', route: 'news' },
        { name: '服務', icon: 'shopping-bag', route: 'services' }
        // { name: '個人', icon: 'user', route: 'personal' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
