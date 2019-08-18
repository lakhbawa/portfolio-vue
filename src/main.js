import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

import Buefy from 'buefy'

import vueScrollto from 'vue-scrollto'

Vue.use(vueScrollto)

Vue.use(Buefy)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
