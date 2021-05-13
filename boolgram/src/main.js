import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
Vue.prototype.$http = axios
Vue.prototype.$stories = 'https://flynn.boolean.careers/exercises/api/boolgram/profiles'
Vue.prototype.$posts = 'https://flynn.boolean.careers/exercises/api/boolgram/posts'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
