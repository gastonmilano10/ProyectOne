import Vue from 'vue'
import Login from './components/Login.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(Login)
}).$mount('#app')


Vue.use(VueRouter)