import Vue from 'vue'
import Meta from 'vue-meta'
import firebase from 'firebase/app'
import App from './App.vue'
import router from './router'
import store from './store'
import './connectDb'

Vue.config.productionTip = false

Vue.use(Meta)

let app = null
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
