// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import VueRouter from 'vue-router'
import App from './App'

import Home from './components/Home.vue'
import Table from './components/Table.vue'

// 0. Install router & vuex
Vue.use(VueRouter)
Vue.use(Vuex)

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/table', component: Table },
  { path: '/', component: Home }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here.
const router = new VueRouter({
  routes // short for routes: routes
})

// 4. Create and mount the root instance.
// Inject the router with the router option to make the whole app router-aware.

/* eslint-disable no-new */
new Vue({
  router,
  store,
  ...App
}).$mount('#app')
