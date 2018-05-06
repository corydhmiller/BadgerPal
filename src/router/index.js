import Vue from 'vue'
import Router from 'vue-router'

import Wrap from '@/components/Wrap'
import Login from '@/components/Login'
import Register from '@/components/Register'
import PageNotFound from '@/components/PageNotFound'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/app'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/app',
      name: 'app',
      component: Wrap,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/pagenotfound',
      name: 'Page Not Found',
      component: PageNotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login')
  else next()
})


export default router