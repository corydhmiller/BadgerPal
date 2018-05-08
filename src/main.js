import Vue from 'vue'
import Vuex from 'vuex'
import VueFirestore from 'vue-firestore'
import Firebase from 'firebase'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueFirestore)

import App from './App'

import { store } from './store/store'
import router from './router/routes'


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
