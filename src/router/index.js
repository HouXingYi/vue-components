import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello/Hello'
import Radio from '@/components/Radio/Radio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Hello'
    },
    {
      path: '/Hello',
      component: Hello
    },
    {
      path:'/Radio',
      component: Radio
    }
  ]
})
