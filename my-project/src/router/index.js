import Vue from 'vue'
import Router from 'vue-router'
import Stay from '@/components/Stay'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Stay',
      component: Stay
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/room/:id',
      name: 'Room',
      component: Chat
    }
  ]
})
