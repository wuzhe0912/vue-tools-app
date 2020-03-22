<template lang="pug">
  .news__wrap
    .category__list
      .list__tag(v-for="node in categoryList")
        .tag__wrap(:class="{ isActive: isSelected === node.category }" @click="fetchTopNews(node.category)")
          .tag__icon
            font-awesome-icon(icon="tags")
          span {{ node.name }}
    .slide__list
      swiper(:options="swiperOption")
        swiper-slide(v-for="(node, index) in slideList" :key="index")
          img(:src="node.urlToImage")
          span.slide__txt {{ stringFormatter(node.title) }}
        .swiper-pagination.swiper-pagination-white(slot="pagination")
    .news__list
      .news__list__wrap
        article.news__card(v-for="node in formData")
          .card__img
            img(v-if="node.urlToImage" :src="node.urlToImage")
            font-awesome-icon.img__icon(v-else icon="image")
          section.card__txt
            .txt__title {{ node.title }}
          a.card__arrow(:href="node.url" target="_blank")
            font-awesome-icon(icon="angle-double-right")
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'news',

  components: {
    Swiper,
    SwiperSlide
  },

  data () {
    return {
      formData: [],
      country: 'tw',
      category: '',
      categoryList: [
        { name: '綜合焦點', category: 'all' },
        { name: '商業', category: 'business' },
        { name: '科技', category: 'technology' },
        { name: '健康醫療', category: 'health' },
        { name: '自然科學', category: 'science' },
        { name: '運動', category: 'sports' },
        { name: '明星娛樂', category: 'entertainment' }
      ],
      isSelected: 'all',
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // simulateTouch: false,
        // allowTouchMove: false,
        autoplay: {
          delay: 3000
        }
      },
      slideList: []
    }
  },

  created () {
    this.fetchTopNews()
  },

  methods: {
    fetchTopNews (val) {
      let api = `${process.env.VUE_APP_NEWS_API_URL}/top-headlines?country=${this.country}&apikey=${process.env.VUE_APP_NEWS_API_KEY}`
      if (val !== 'all' && val !== undefined) {
        this.isSelected = val
        api = `${process.env.VUE_APP_NEWS_API_URL}/top-headlines?country=${this.country}&category=${val}&apikey=${process.env.VUE_APP_NEWS_API_KEY}`
      }
      this.$http.get(api).then((res) => {
        this.formData = res.articles
        let item = []
        res.articles.forEach((node) => {
          if (node.urlToImage) item.push(node)
        })
        this.slideList = item.slice(0, 6)
      }).catch((err) => {
        console.log(err)
      })
    },
    stringFormatter (val) {
      let item = val.split(' - ')
      return item[0]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
