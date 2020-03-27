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

import ElLoading from 'element-loading'
import i18n from './i18n'

// 超時檢查
axios.defaults.timeout = 5000
// API 錯誤攔截
axios.interceptors.response.use((response) => {
  let res = response.data
  return res
})

// 引入 library
library.add(fas)

// register component
Vue.use(VueAxios, axios)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(ElLoading)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
