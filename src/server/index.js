import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

// 超時檢查
axios.defaults.timeout = 5000
// http request 攔截
axios.interceptors.request.use(
  config => {
    config.headers.Authorization = 'Bearer ' + process.env.VUE_APP_HOTEL_API
    config.headers.Accept = 'application/json'
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// API 錯誤處理
axios.interceptors.response.use(
  response => {
    return response.data
  },
  err => {
    if (err & err.response.status) {
      switch (err.response.status) {
        case 500:
          console.log('server error')
          break
        case 404:
          console.log('is not found')
          break
        default:
          console.log(err)
      }
    }
    return Promise.resolve(err.response)
  }
)
