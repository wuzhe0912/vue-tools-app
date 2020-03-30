<template lang="pug">
  .hall__wrap
    .container(v-for="node in list")
      .title
        font-awesome-icon.title__icon(:icon="node.icon")
        span.title__txt {{ $t(node.name) }}
      .content
        router-link.content__wrap(
          v-for="(subNode, index) in node.subList"
          :key="index"
          :class="{isDisabled: subNode.disabled}"
          :to="{ name: subNode.code }"
        )
          .list__icon
            font-awesome-icon(:icon="subNode.icon")
          .list__text
            span {{ $t(subNode.name) }}
</template>

<script>
export default {
  name: 'service',
  components: {},

  data () {
    return {
      list: [
        {
          name: '熱門',
          icon: 'fire-alt',
          subList: [
            { name: '旅館預約', icon: 'building', code: 'hotel' }
            // { name: '商城', icon: 'store', code: '' }
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
