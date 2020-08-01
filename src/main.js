import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Inicio from './components/templates/Inicio'
import Sobre from './components/templates/Sobre'
import Contato from './components/templates/Contato'
import Associese from './components/templates/Associese'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fab, fas);

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Inicio
    },
    {
      path: '/sobre',
      component: Sobre
    },
    {
      path: '/contato',
      component: Contato
    },
    {
      path: '/associese',
      component: Associese
    },
    {
      path:  '*',
      redirect: '/home'
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
