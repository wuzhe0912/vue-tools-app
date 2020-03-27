<template lang="pug">
  .hall__wrap
    .container(v-for="node in list")
      .title
        font-awesome-icon.title__icon(:icon="node.icon")
        span.title__txt {{ $t(node.name) }}
      .content
        template(v-for="subNode in node.subList")
          a.content__wrap(v-if="subNode.icon === 'comment'" :href="subNode.url" target="_blank")
            .list__icon
              font-awesome-icon(:icon="subNode.icon")
            .list__text
              span {{ $t(subNode.name) }}
          router-link.content__wrap(v-else :class="{isDisabled: subNode.disabled}" :to="{ name: subNode.code }")
            .list__icon
              font-awesome-icon(:icon="subNode.icon")
            .list__text
              span {{ $t(subNode.name) }}
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
            { name: '語系切換', icon: 'language', disabled: false, code: 'language' },
            { name: '匿名聊天', icon: 'comment', disabled: false, url: 'https://vue-chat-6a66d.firebaseapp.com/' },
            { name: '蕃茄鐘', icon: 'clock', disabled: false, code: 'timer' },
            { name: '計算機', icon: 'calculator', disabled: true, code: '' }
            // { name: '測試app', icon: 'power-off', disabled: true },
            // { name: '測試app', icon: 'power-off', disabled: true },
            // { name: '測試app', icon: 'power-off', disabled: true }
          ]
        },
        {
          name: '遊戲',
          icon: 'gamepad',
          subList: [
            { name: '井字遊戲', icon: 'dice-d6', disabled: false, code: 'ticTacToe' }
            // { name: '測試遊戲', icon: 'power-off', disabled: true },
            // { name: '測試遊戲', icon: 'power-off', disabled: true },
            // { name: '測試遊戲', icon: 'power-off', disabled: true }
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
