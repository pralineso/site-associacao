import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Inicio from './components/templates/Inicio'
import Sobre from './components/templates/Sobre'
import Contato from './components/templates/Contato'
import Associese from './components/templates/Associese'


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

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
