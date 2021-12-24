import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import vueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import "../src/main.scss"
import router from './router'

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.use(vueRouter);

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')

