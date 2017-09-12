import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Mission from '@/components/Mission'
import Login from '@/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/component/Mission',
      name: 'Mission',
      component: Mission
    },
    {
      path: '/login/Login',
      name: 'Login',
      component: Login
    }
  ]
})
