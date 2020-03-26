<template lang="pug">
  .calculator__wrap
    .calculator__content
      .calculator__list.result {{ current || '0' }}
      .calculator__list(@click="clearResult()") AC
      .calculator__list(@click="signNumber()") +/-
      .calculator__list(@click="percent()") %
      .calculator__list.operator ÷
      .calculator__list(@click="append('7')") 7
      .calculator__list(@click="append('8')") 8
      .calculator__list(@click="append('9')") 9
      .calculator__list.operator x
      .calculator__list(@click="append('4')") 4
      .calculator__list(@click="append('5')") 5
      .calculator__list(@click="append('6')") 6
      .calculator__list.operator -
      .calculator__list(@click="append('1')") 1
      .calculator__list(@click="append('2')") 2
      .calculator__list(@click="append('3')") 3
      .calculator__list.operator(@click="plus()") +
      .calculator__list.zero(@click="append('0')") 0
      .calculator__list(@click="dot()") .
      .calculator__list.operator =
</template>

<script>
export default {
  name: 'calculator',
  components: {},
  data () {
    return {
      current: '',
      previous: null,
      operator: null,
      operatorClicked: false
    }
  },

  methods: {
    clearResult () {
      this.current = ''
    },
    signNumber () {
      /*
        charAt() 先檢查當前計算結果中第一個字串是否為'-'
        若為 true，則清除負數符號
        若為 false，則補上負數符號
      */
      this.current = this.current.charAt(0) === '-' ? this.current.slice(1) : `-${this.current}`
    },
    percent () {
      this.current = `${parseFloat(this.current) / 100}`
    },
    append (val) {
      this.current = `${this.current}${val}`
    },
    dot () {
      // 檢查計算結果中有無'.'，若無則加入小數點
      if (this.current.indexOf('.') === -1) {
        this.append('.')
      }
    },
    plus () {
      this.operator = (a, b) => a + b
      console.log(1, this.operator)
      this.setPrevious()
    },
    setPrevious () {
      console.log(2)
      this.previous = this.current
      this.operatorClicked = true
    },
    equal () {
      console.log(3)
      this.current = `${this.operator(
        parseFloat(this.current),
        parseFloat(this.previous)
      )}`
      this.previous = null
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
