<template lang="pug">
  form.lang__wrap
    .lang__list(v-for="node in langList" @click="changeLang(node.code)")
      .lang__title
        .title__icon
          i.icon__flag(:class="'icon-' + node.code")
        .titile__txt {{ $t(node.name) }}
      .lang__select(:class="{ active: $i18n.locale === node.code }")
</template>

<script>
export default {
  name: 'language',
  components: {},
  data () {
    return {
      langList: [
        { name: '繁體中文', code: 'tw' },
        { name: '英文', code: 'en' },
        // { name: '日文', code: 'jp' },
        { name: '簡體中文', code: 'cn' }
      ]
    }
  },
  methods: {
    changeLang (val) {
      window.localStorage.setItem('userChangeLang', val)
      this.$i18n.locale = window.localStorage.getItem('userChangeLang')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
