import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/templates/Inicio'
/*import Sobre from './components/templates/Sobre'
import Contato from './components/templates/Contato'
import Associese from './components/templates/Associese'
*/
Vue.user(Router)

export default new Router({
    routes: [{
        path: '/home',
        component: Inicio
    },
 /*   {
        path: '/sobre',
        component: Sobre
    },
    {
        path:  '/contato',
        component: Contato
    },
    {
        path:  '/associese',
        component: Associese
    },*/
    {
        path:  '*',
        redirect: '/home'
    }]
})

