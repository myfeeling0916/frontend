import Vue from 'vue'
import Router from 'vue-router'
import GameView from './views/GameView.vue'
import Proxy from './views/Proxy.vue'
import Login from './views/Login.vue'
import Message from './views/Message.vue'
import table from './views/ui/table'
import lobby from './views/ui/lobby'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'proxy',
      component: Proxy,
      props: route => {
        const token = route.query.token;
        return {
          token
        };
      }
    },
    {
      path: '/game',
      name: 'game',
      component: GameView
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      props: route => {
        const type = route.query.type;
        return {
          type
        };
      }
    },
    {
      path: '/developLogin',
      name: 'developLogin',
      component: Login
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: lobby
    }
  ]
})
