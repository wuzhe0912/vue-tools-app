<template lang="pug">
  .nav__wrap
    nav.nav
      template(v-for="node in list")
        router-link.nav__link(:to="{ name: `${node.route}` }")
          i.icon(:class="`icon-${node.icon}`")
          h2.txt {{ node.name }}
</template>

<script>
export default {
  name: 'body-nav',
  components: {},
  data () {
    return {
      list: [
        { name: '待辦', icon: 'todo', route: 'todo' },
        { name: '分類', icon: 'category', route: 'category' },
        { name: '新聞', icon: 'news', route: 'news' },
        { name: '商城', icon: 'mall', route: 'mall' },
        { name: '個人', icon: 'personal', route: 'personal' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
