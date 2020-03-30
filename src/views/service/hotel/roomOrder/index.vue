<template lang="pug">
  form.form__warp.order__wrap(@submit.prevent="submit(formData)")
    input.form__input(
      v-model="formData.name",
      :placeholder="$t('姓名')"
      @blur="$v.formData.name.$touch()"
      :class="{ danger: $v.formData.name.$error }"
    )
    template(v-if="$v.formData.name.$error")
      span.form__error {{ $t('請輸入中英文姓名') }}
    input.form__input(
      v-model="formData.tel",
      :placeholder="$t('電話')",
      @blur="$v.formData.tel.$touch()"
      :class="{ danger: $v.formData.tel.$error }"
    )
    template(v-if="$v.formData.tel.$error")
      span.form__error {{ $t('電話為必填，且為數字') }}
    label.form__title {{ $t('預約起迄時間(入住日不可選擇今天)') }}
      span.form__error(v-if="errMessage") {{ $t('請確認時間選擇範圍是否正確') }}
    .form__datetime
      datetime(
        type="date",
        v-model="formData.startTime",
        format="yyyy-MM-dd",
        :max-datetime="maxDatetime",
        :min-datetime="minDatetime",
        :placeholder="$t('請選擇起始日期')",
        @blur="$v.formData.startTime.$touch()"
        :class="{ warning: $v.formData.startTime.$error }"
      )
    .form__datetime
      datetime(
        type="date",
        v-model="formData.endTime",
        format="yyyy-MM-dd",
        :max-datetime="maxDatetime",
        :min-datetime="minDatetime",
        :placeholder="$t('請選擇結束日期')",
        @blur="$v.formData.endTime.$touch()"
        :class="{ warning: $v.formData.endTime.$error }"
      )
    label.form__title {{ $t('訂單資訊') }}
    .card__wrap
      .card__list.card__title {{ $t('預定房名') }}：{{ roomName }}
      .card__list.card__txt
        span {{ normalDayPrice }} / {{ $t('平日每晚(週一～週四)') }}
        span {{ holidayPrice }} / {{ $t('假日每晚(週五～週日)') }}
        span(v-if="formData.startTime") {{ $t('入住日') }}：{{ timeFormatter(formData.startTime) }}
        span(v-if="formData.endTime") {{ $t('退房日') }}：{{ timeFormatter(formData.endTime) }}
    .btn__wrap
      button.btn__primary.btn(type="submit" v-loading="loading" value="確認付款") {{ $t('確認付款') }}
</template>

<script>
import moment from 'moment'
import { name, phone, Required } from '@/validators/config'

export default {
  name: 'roomOrder',

  components: {
    name,
    phone
  },

  validations: {
    formData: {
      name: name,
      tel: phone,
      startTime: Required,
      endTime: Required
    }
  },

  data () {
    return {
      loading: false,
      formData: {},
      roomId: this.$route.query.roomId,
      roomName: this.$route.query.roomName,
      normalDayPrice: this.$route.query.normalDayPrice,
      holidayPrice: this.$route.query.holidayPrice,
      maxDatetime: moment().add(90, 'days').format('YYYY-MM-DD'),
      minDatetime: moment().add(0, 'days').format('YYYY-MM-DD'),
      errorTime: false,
      errMessage: ''
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.formData = {
        name: '',
        tel: '',
        startTime: '',
        endTime: ''
      }
    },
    timeFormatter (val) {
      return moment(val).format('YYYY-MM-DD')
    },
    submit (formData) {
      let currentTime = moment(formData.startTime).format('YYYY-MM-DD')
      let stopTime = moment(formData.endTime).format('YYYY-MM-DD')

      this.$v.formData.$touch()
      if (this.$v.formData.$error) return

      let dateArray = []
      dateArray.push(currentTime, stopTime)
      let obj = {
        name: formData.name,
        tel: formData.tel,
        date: dateArray
      }

      this.loading = true

      let api = `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${this.roomId}`
      this.axios.post(api, obj, {
        headers: {
          accept: 'application/json'
        }
      }).then((res) => {
        this.loading = false
        this.$router.push({ name: 'roomRecord' })
      }).catch((err) => {
        this.errMessage = err
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './style';
</style>
