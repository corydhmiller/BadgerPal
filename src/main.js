import Vue from 'vue'
import firebase from 'firebase'
import firebaseConfig from './assets/firebaseConfig'

import App from './App'
import router from './router'

Vue.config.productionTip = false

let app;
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      components: {
        App
      },
      template: '<App/>'
    })
  }
})
