import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// styles
import '@/assets/scss/style.scss'
import 'element-theme-chalk/lib/loading.css'
import 'vue-datetime/dist/vue-datetime.css'

import ElLoading from 'element-loading'
import i18n from './i18n'
import Datetime from 'vue-datetime'
import Vuelidate from 'vuelidate'

// 引入 library
library.add(fas)

// register component
Vue.use(VueAxios, axios)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(ElLoading)
Vue.use(Datetime)
Vue.use(Vuelidate)

Vue.config.productionTip = false

// 超時檢查
axios.defaults.timeout = 5000
// http request 攔截
axios.interceptors.request.use(
  config => {
    config.headers.Authorization = 'Bearer ' + process.env.VUE_APP_HOTEL_API_KEY
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
  }
)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
