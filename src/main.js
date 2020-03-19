import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
import env from './env'

// styles
import '@/assets/scss/style.scss'

axios.defaults.baseURL = env.baseURL + env.customURL
// 超時檢查
axios.defaults.timeout = 5000
// API 錯誤攔截
axios.interceptors.response.use((response) => {
  let res = response.data
  return res
})

// register component
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
