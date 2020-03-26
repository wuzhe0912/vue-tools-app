<template lang="pug">
  .timer__wrap
    .time__number
      span {{ minutesFormatter(timeRemaining) }}：{{ secondFormatter(timeRemaining) }}
    .action__wrap
      .action__icon.action__end
        font-awesome-icon(v-if="freeTime" @click="timerAction('skip')" icon="coffee")
        font-awesome-icon(v-else @click="timerAction('work')" icon="wrench")
      .action__icon.action__run
        .action__icon.action__start(v-if="timerStatus" @click="timerAction('start')")
          font-awesome-icon(icon="play")
        .action__icon.action__pause(v-else @click="timerAction('pause')")
          font-awesome-icon(icon="pause")
      .action__icon.action__reset(@click="timerAction('reset')")
        font-awesome-icon(icon="redo-alt")
</template>

<script>
export default {
  name: 'timer',
  components: {},
  data () {
    return {
      timerStatus: true,
      timeRemaining: 1500, // 25 minutes = 25 * 60(second)
      timeRunning: false,
      timeId: null,
      timePause: false,
      freeTime: true
    }
  },

  methods: {
    timerAction (val) {
      switch (val) {
        case 'start':
          this.timerStatus = false
          if (!this.timeRunning) {
            // 利用 setInterval 無限循環的特性來執行重複+1
            this.timeId = setInterval(this.tick, 1000)
            this.timeRunning = true
          }
          if (this.timePause) {
            // 結束暫停狀態
            this.timePause = false
          }
          break
        case 'pause':
          this.timerStatus = true
          // 啟動暫停狀態
          this.timePause = true
          break
        case 'reset':
          // 清除 setInterval，初始化時間資料
          clearInterval(this.timeId)
          this.timerStatus = true
          this.timeRemaining = 1500
          this.timeRunning = false
          this.timeId = null
          this.timePause = false
          break
        case 'skip':
          this.timeRemaining = 300
          this.freeTime = false
          break
        case 'work':
          this.timeRemaining = 1500
          this.freeTime = true
          break
        default:
          break
      }
    },

    tick () {
      if (this.timePause === false) {
        if (this.timeRunning && this.timeRemaining > 0) {
          this.timeRemaining--
        } else {
          this.timerAction('reset')
        }
      }
    },

    minutesFormatter (val) {
      // 將時間轉回分鐘單位
      let item = Math.floor(val / 60).toString().padStart(2, '0')
      return item
    },

    secondFormatter (val) {
      // padEnd 填充字符串，前者是需要補充的位數，後者是補充進去的數字或字符串
      let item = (val % 60).toString().padStart(2, '0')
      return item
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
