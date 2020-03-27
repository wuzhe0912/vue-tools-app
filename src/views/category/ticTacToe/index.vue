<template lang="pug">
  .tic__wrap
    main.board(v-loading="loading")
      .grid(
        v-for="(node, index) in gridList"
        @click="setGrid(index)"
      ) {{ symbolFormatter(node) }}
    footer.player
      .player-txt {{ $t('目前下棋者') }}：<span>{{ playerFormatter(player) }}</span>
      .winner-txt(v-if="winner !== 0") {{ $t('贏者') }}：{{ playerFormatter(winner) }}
      button.btn(v-if="winner !== 0" @click="reset()") {{ $t('再來一局') }}
</template>

<script>
// 計算所有連線獲勝的組合
const lines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]

export default {
  name: 'ticTacToe',
  components: {},
  data () {
    return {
      /*
        設計邏輯：
        1 => O,
        -1 => X,
        0 => ''
      */
      gridList: [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
      ],
      player: 1,
      winner: 0,
      loading: false
    }
  },

  methods: {
    setGrid (val) {
      // 阻擋重複點擊
      if (this.gridList[val] !== 0) return
      // 驗證是否已出現贏家
      if (this.winner !== 0) return

      // Vue 本身無法直接檢測到物件本身的變化，必須透過set()
      this.$set(this.gridList, val, this.player)
      // 初始化第一位玩家，每執行一次點擊，就輪替一次玩家
      this.player = -this.player
      this.winner = this.checkWinner()
    },
    symbolFormatter (val) {
      return val === 0 ? '' : val === 1 ? 'O' : 'X'
    },
    playerFormatter (val) {
      return val === 1 ? 'Player A' : val === -1 ? 'Player B' : ''
    },
    checkWinner () {
      for (let i = 0; i < 8; i++) {
        /*
          在 lines 這個二維陣列中，有8種組合
          透過 for 迴圈，依序將每種組合賦值給 line
          再透過解構的用法，賦給 [a, b, c]
          第一種組合為第一行的 0 1 2，這時 this.gridList 中
          第一格 0 的位置，已經經過 setGrid() 方法改變了數值為 1
          但 1 2 的位置仍是 0，於是加總為 1
        */
        const line = lines[i]
        // 解構賦值用法
        const [a, b, c] = line
        const sum = this.gridList[a] + this.gridList[b] + this.gridList[c]
        if (sum === 3) {
          // O 形成連線
          return 1
        } else if (sum === -3) {
          // 反之，X 形成連線
          return -1
        }
      }
      return 0
    },
    reset () {
      this.loading = true
      setTimeout(() => {
        // 重新初始化本局
        this.gridList = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        this.player = 1
        this.winner = 0
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
