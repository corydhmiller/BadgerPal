// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyDsthJVQd-UEJSvrLh8PCtTZwKmi2KsOdI",
  authDomain: "badgerpal-87635.firebaseapp.com",
  databaseURL: "https://badgerpal-87635.firebaseio.com",
  projectId: "badgerpal-87635",
  storageBucket: "badgerpal-87635.appspot.com",
  messagingSenderId: "479067404949"
}

firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
