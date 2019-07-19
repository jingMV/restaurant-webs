import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path: '/', component: Home},
]

const router = new VueRouter ({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
