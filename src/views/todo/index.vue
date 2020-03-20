<template lang="pug">
  .home__wrap
    //- Modal(
    //-   :showModal="showModal"
    //-   title="新增待辦事項",
    //-   sureText="確定新增",
    //-   btnType="2",
    //-   modalType="middle",
    //- )
    //-   //- slot 新的寫法需加入 template
    //-   template(v-slot:body)
    //-     input.form__input(placeholder="請輸入代辦事項內容")
</template>

<script>
import Modal from '@/components/modal'

export default {
  name: 'todo',
  components: {
    Modal
  },
  data () {
    return {
      showModal: true
    }
  },

  mounted () {
  },

  created () {
    // const url = `${this.axios.defaults.baseURL}/products`
    // this.$http.get(url).then((response) => {
    //   console.log(5, response)
    // })
  }
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
