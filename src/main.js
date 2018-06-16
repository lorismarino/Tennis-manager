import Vue from 'vue'
import 'normalize.css'
import App from './App'
import store from '../store'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
