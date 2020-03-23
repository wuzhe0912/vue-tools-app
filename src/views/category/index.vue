<template lang="pug">
  .category__wrap.hall__wrap
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
  name: 'category',
  components: {},
  data () {
    return {
      list: [
        {
          name: '應用工具',
          icon: 'tools',
          subList: [
            { name: '蕃茄鐘', icon: 'clock', disabled: false },
            { name: '匿名聊天', icon: 'comment', disabled: false },
            { name: '測試app', icon: 'power-off', disabled: true },
            { name: '測試app', icon: 'power-off', disabled: true },
            { name: '測試app', icon: 'power-off', disabled: true },
            { name: '測試app', icon: 'power-off', disabled: true },
            { name: '測試app', icon: 'power-off', disabled: true }
          ]
        },
        {
          name: '遊戲',
          icon: 'gamepad',
          subList: [
            { name: '測試遊戲', icon: 'power-off', disabled: true },
            { name: '測試遊戲', icon: 'power-off', disabled: true },
            { name: '測試遊戲', icon: 'power-off', disabled: true },
            { name: '測試遊戲', icon: 'power-off', disabled: true }
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
