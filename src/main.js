import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from 'firebase'
import FirebaseConfig from './assets/firebaseConfig'
import App from './App'

import { store } from './store/store';
import router from './router/routes'

Vue.use(Vuex)
Vue.config.productionTip = false

Firebase.initializeApp(FirebaseConfig);

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
