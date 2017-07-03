// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuefire from 'vuefire'
import VueResource from 'vue-resource'
import router from './router'
import firebase from './service/firebase'

import App from './App'
Vue.config.productionTip = false

Vue.use(Vuefire)
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  firebase: {
    cat: firebase.database.ref('cat')
  },
  template: '<App/>',
  components: { App }
})
