<template lang="pug">
  .form__warp
    .list__container(v-loading="loading")
      .room__list(v-for="node in roomList" :key="node.id")
        .list__img
          img(:src="node.imageUrl")
        .list__txt
          .room__name {{$t('房名')}}：{{ node.name }}
          .room__price
            .room__normalDayPrice {{$t('平日')}}：{{ node.normalDayPrice }} / {{$t('每晚')}}
            .room__holidayPrice {{$t('假日')}}：{{ node.holidayPrice }} / {{$t('每晚')}}
        .list__arrow(@click="goDetail(node.id)")
          font-awesome-icon(icon="angle-double-right")
</template>

<script>
export default {
  name: 'hotel',
  components: {},

  data () {
    return {
      loading: false,
      roomList: []
    }
  },
  created () {
    this.getAllRoom()
  },
  methods: {
    getAllRoom () {
      this.loading = true
      let api = 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms'
      this.axios.get(api).then((res) => {
        this.roomList = res.items
        this.loading = false
      }).catch((err) => {
        this.loading = false
        console.log(err)
      })
    },
    goDetail (val) {
      this.$router.push({ name: 'roomDetail', query: { roomId: val } })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
