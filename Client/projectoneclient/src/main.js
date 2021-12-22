import Vue from 'vue'
import Login from './components/Login.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import Axios from 'axios'
import "../src/main.scss"

Vue.config.productionTip = false
Vue.use(VueAxios, Axios);
Vue.use(VueRouter);

new Vue({
  vuetify,
  store,
  render: h => h(Login)
}).$mount('#app')

