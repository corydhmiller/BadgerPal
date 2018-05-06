import Vue from 'vue'
import Router from 'vue-router'

import Wrap from '@/components/Wrap'
import Login from '@/components/Login'
import Register from '@/components/Register'
import PageNotFound from '@/components/PageNotFound'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/app'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/app',
      name: 'Wrap',
      component: Wrap,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/pagenotfound',
      name: 'Page Not Found',
      component: PageNotFound

    },
    {
      path: '*',
      redirect: '/pagenotfound',
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        next({
          path: '/login'
        })
      } else {
        next()
      }
    })
  }
  else {
    next()
  }
})

export default router