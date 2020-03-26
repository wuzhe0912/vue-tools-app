<template lang="pug">
  .hall__wrap
    .container(v-for="node in list")
      .title
        font-awesome-icon.title__icon(:icon="node.icon")
        span.title__txt {{ node.name }}
      .content
        .content__wrap(v-for="subNode in node.subList" :class="{isDisabled: subNode.disabled}")
          .list__icon
            font-awesome-icon(:icon="subNode.icon")
          .list__text
            span {{ subNode.name }}
            span(v-if="subNode.disabled") (尚未實裝)
</template>

<script>
export default {
  name: 'mall',
  components: {},

  data () {
    return {
      list: [
        {
          name: '熱門',
          icon: 'fire-alt',
          subList: [
            { name: '樹懶公寓', icon: 'building' },
            { name: '六角商城', icon: 'store' }
            // { name: '測試', icon: 'power-off', disabled: true },
            // { name: '測試', icon: 'power-off', disabled: true }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
