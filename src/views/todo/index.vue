<template lang="pug">
  .wrap
    .todo__wrap
      span.time__title 當前時間：{{ todayTime }}
      .table__card
        span.card__txt(@click="selected = 'all'" :class="{isActive: selected === 'all'}") 全部
        span.card__txt(@click="selected = 'doing'" :class="{isActive: selected === 'doing'}") 進行中
        span.card__txt(@click="selected = 'done'" :class="{isActive: selected === 'done'}") 已完成
      ul.todo__list(v-if="todoList.length > 0")
        li.list__content(v-for="(node, key) in filterTodoList")
            .form__checkbox
              input.list__checkbox(v-model="node.completed" type="checkbox" :id="node.id")
              label.list__txt(
                v-if="node.id !== catchTodo.id"
                :for="node.id"
                :class="{ isCompleted: node.completed }"
              ) {{ node.txt }}
              input.edit__txt(
                v-if="node.id === catchTodo.id"
                v-model="catchTxt"
                @keyup.esc="canceEdit()"
                @keyup.enter="doneEdit(node)"
              )
            .icon__wrap
              .edit__icon(@click="editTodo(node)")
                font-awesome-icon(icon="edit")
              .delete__icon(@click="removeTodo(node)")
                font-awesome-icon(icon="times-circle")
        .list__footer
          .list__footer__txt 還有<span class="list__number">{{ checkNoCompleted }}</span>筆任務未完成
          .list__footer__clear(@click="removeTodo('clearAll')") 清除所有任務
      span.todo__title(v-else) 尚未有待辦事項～
    .btn__wrap
      .input__wrap(v-if="changeInput")
        input.form__input(
          v-model="newToDo"
          type="text"
          placeholder="請輸入文字"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = '請輸入文字'"
          @keyup.enter="addTodoList()"
        )
        button.btn__add
          font-awesome-icon.btn__add__icon(icon="hand-point-up")
          span.btn__add__txt(@click="addTodoList()") 推送
      button.btn__primary.add__container(@click="change()")
        font-awesome-icon.add__icon(icon="plus")
        span.add__txt 新增待辦事項
</template>

<script>
import moment from 'moment'

export default {
  name: 'todo',

  data () {
    return {
      todayTime: '',
      changeInput: false,
      showModal: true,
      todoList: [],
      newToDo: '',
      selected: 'all',
      catchTodo: '',
      catchTxt: ''
    }
  },

  computed: {
    filterTodoList: function () {
      let doingList = []
      let doneList = []
      switch (this.selected) {
        case 'doing':
          this.todoList.forEach((node) => {
            if (!node.completed) doingList.push(node)
          })
          return doingList
        case 'done':
          this.todoList.forEach((node) => {
            if (node.completed) doneList.push(node)
          })
          return doneList
        default:
          return this.todoList
      }
    },
    checkNoCompleted: function () {
      let item = []
      this.todoList.forEach((node) => {
        if (!node.completed) item.push(node)
      })
      return item.length
    }
  },

  created () {
    this.todayTime = moment(Date.now()).format('lll')
  },

  methods: {
    change () {
      this.changeInput = true
    },
    addTodoList () {
      let value = this.newToDo.trim() // trim() 可以清除前後多餘空白
      let timestamp = Math.floor(Date.now()) // 替代 id
      // 簡單驗證
      if (!value) {
        return false
      }
      this.todoList.push({
        id: timestamp,
        txt: value,
        completed: false
      })
      this.newToDo = ''
    },
    editTodo (val) {
      this.catchTodo = val
      this.catchTxt = val.txt
    },
    canceEdit () {
      this.catchTodo = ''
    },
    doneEdit (val) {
      val.txt = this.catchTxt
      this.catchTxt = ''
      this.catchTodo = ''
    },
    removeTodo (val) {
      if (val === 'clearAll') {
        this.todoList = ''
      } else {
        let newIndex = ''
        this.todoList.forEach((node, key) => {
          if (val.id === node.id) newIndex = key
        })
        this.todoList.splice(newIndex, 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
