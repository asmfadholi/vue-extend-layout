// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import { VueExtendLayout, layout } from 'vue-extend-layout'
import {ServerTable, ClientTable, Event} from 'vue-tables-2'
import axios from 'axios'

Vue.use(VueExtendLayout)
Vue.config.productionTip = false
Vue.use(ServerTable)
Vue.use(ClientTable)

// Vue.use(axios)
window.axios = require('axios')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...layout // Add methods to extend layouts
})
// import Vue from 'vue'
// import router from './router.js'
// import { VueExtendLayout, layout } from '../vue-extend-layout'
//
// Vue.use(VueExtendLayout, {
//   loader: 'loader'
// })
// Vue.config.productionTip = false
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   ...layout
// })
