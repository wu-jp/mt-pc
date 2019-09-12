import Vue from 'vue'
import Router from 'vue-router'
import Default from './views/default.vue'
import Blank from './views/blank.vue'

import goodsList from '@/page/goodsList.vue'
import Index from '@/page/index.vue'
import ChangeCity from '@/page/changeCity.vue'
import Login from '@/page/login.vue'
import Register from '@/page/register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'default',
      component: Default,
      redirect: '/index',
      children: [{
          path: 's/:name',
          name: 'goods',
          component: goodsList
        },
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: ChangeCity
        }
      ]
    },
    {
      path: '/blank',
      name: 'blank',
      component: Blank,
      children: [{
        path: 'login',
        name: 'login',
        component: Login
      }, {
        path: 'register',
        name: 'register',
        component: Register
      }]
    }
  ]
})