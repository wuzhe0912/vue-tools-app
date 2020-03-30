<template lang="pug">
  .form__warp
    .form__container(v-loading="loading")
      .slide__room
        swiper(:options="swiperOption")
          swiper-slide(v-for="(node, index) in slideList" :key="index")
            img(:src="node")
      .room__wrap(v-for="node in roomDetail" :key="node.id")
        .room__list.title__txt {{ node.name }}
        .room__list.room__limit.small__txt
          .limit__size.limit__list
            font-awesome-icon.small__icon(icon="th")
            .size__txt.limit__list__txt {{ node.descriptionShort.Footage }} {{$t('平方公尺')}}
          .limit__bed.limit__list
            .bed__type(v-for="subNode in node.descriptionShort.Bed")
              font-awesome-icon.small__icon(icon="bed")
              .limit__txt {{ subNode }}
          .limit__num.limit__list
            font-awesome-icon.small__icon(icon="users")
            .num__txt.limit__list__txt {{$t('房客人數限制')}}：{{ node.descriptionShort.GuestMin }} - {{ node.descriptionShort.GuestMax }} {{$t('人')}}
        .room__list.room__price
          .title__txt {{$t('價格')}}
          .price__detail.small__txt
            span {{$t('平日(一～四)')}}：{{ node.normalDayPrice }}
            span.price__txt {{$t('假日(五～日)')}}：{{ node.holidayPrice }}
        .room__list.room__tag
          .tag__content(v-if="item" v-for="(item, index) in node.amenities")
            font-awesome-icon.small__icon(:icon="tagFormatter(index, 'icon')")
            span.tag__txt {{ tagFormatter(index, 'tag') }}
        .room__list.room__check
          .check__wrap
            .title__txt CheckIn
            span.early__txt {{$t('最早')}}：{{ node.checkInAndOut.checkInEarly }}
            span.later__txt {{$t('最晚')}}：{{ node.checkInAndOut.checkInLate }}
          .check__wrap
            .title__txt CheckOut
            span {{ node.checkInAndOut.checkOut }}，{{$t('請先行確認行程安排')}}
        .room__list.room__description
          .title__txt {{$t('描述')}}
          p.small__txt.description__txt {{ node.description }}
        .room__list.btn__wrap
          button.btn__primary.btn(@click="goOrder(node.id, node.name, node.normalDayPrice, node.holidayPrice)") {{$t('現在訂房')}}
</template>

<script>
import { HOTEL_TAG_LIST } from '@/configs/site.js'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'roomDetail',

  components: {
    Swiper,
    SwiperSlide
  },

  data () {
    return {
      loading: false,
      roomDetail: [],
      slideList: [],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 3000
        }
      },
      privateBath: ''
    }
  },
  mounted () {
    this.getRoomDetail()
  },
  methods: {
    getRoomDetail () {
      this.loading = true
      let id = this.$route.query.roomId
      let api = `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${id}`
      this.axios.get(api).then((res) => {
        this.roomDetail = res.room
        this.slideList = res.room[0].imageUrl
        this.loading = false
      }).catch((err) => {
        this.loading = false
        console.log(err)
      })
    },
    tagFormatter (val, subVal) {
      let target = HOTEL_TAG_LIST.find(node => node.code === val)
      if (target && subVal === 'tag') {
        if (this.$i18n.locale === 'en') return val
        else return target.name
      } else if (target && subVal === 'icon') return target.icon
      else return val
    },
    goOrder (roomId, roomName, normalDayPrice, holidayPrice) {
      this.$router.push({
        name: 'roomOrder',
        query: {
          roomId: roomId,
          roomName: roomName,
          normalDayPrice: normalDayPrice,
          holidayPrice: holidayPrice
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
