import Vue from 'vue'
import Vuex from 'vuex'
import VueFire from 'vuefire'
import Firebase from 'firebase'

import './firebase'

import App from './App'

import { store } from './store/store'
import router from './router/routes'

Vue.use(VueFire)
Vue.use(Vuex)
Vue.config.productionTip = false

let app;

Firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      el: '#app',
      store: store,
      router,
      components: {
        App
      },
      template: '<App/>',
      render: h => h(App)
    })
  }
})
