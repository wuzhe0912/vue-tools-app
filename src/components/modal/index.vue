<template lang="pug">
  .modal(v-show="showModal")
    //- 遮罩
    .mask
    .modal__dialog
      .modal__header
        span 標題
        a(href="javascript:;")
      .modal__body
        //- 為了擴充性，採用 slot 插入內容
        slot(name="body")
      .modal__footer
        button 確定
        button 取消
</template>

<script>
export default {
  name: 'modal',
  props: {
    /*
      為了靈活性，可以將 modal 設計成多種類別，透過傳參來選擇顯示對應的類型
      例如大、中、小、表單
    */
    modalType: {
      type: String,
      default: 'form'
    },
    // 標題
    title: String,
    /*
      button type：
      1. sure & cancel
      2. sure
      3. cancel
    */
    btnType: String,
    // button text
    sureText: {
      type: String,
      default: '確定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showModal: Boolean
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
