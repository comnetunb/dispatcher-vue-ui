// Polyfills
import 'es6-promise/auto'
import 'babel-polyfill'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App'
import store from './store'
import router from './router'
import VuesticPlugin from 'vuestic-theme/vuestic-plugin'
import './i18n'
import YmapPlugin from 'vue-yandex-maps'
import VueCookies from 'vue-cookies'
import axios from 'axios'

Vue.use(VuesticPlugin)
Vue.use(YmapPlugin)

// NOTE: workaround for VeeValidate + vuetable-2
Vue.use(VeeValidate, { fieldsBagName: 'formFields' })
Vue.use(VueCookies);

let mediaHandler = () => {
   if (window.matchMedia(store.getters.config.windowMatchSizeLg).matches) {
      store.dispatch('toggleSidebar', true)
   } else {
      store.dispatch('toggleSidebar', false)
   }
}

router.beforeEach(async (to, from, next) => {
   store.commit('setLoading', true)

   if (to.meta.requiresAuth) {
      if (await isAuthenticated()) {
        next();
      } else {
        next({ path: '*' })
      }
   } else {
      next()
   }
})

var isAuthenticated = () => {
   return axios
      .get('/api/v1/auth/is-authenticated', { withCredentials: true })
      .then(() => {
         return true;
      })
      .catch(() => {
         return false;
      })
}

router.afterEach((to, from) => {
   mediaHandler()
   store.commit('setLoading', false)
})

/* eslint-disable no-new */

new Vue({
   el: '#app',
   router,
   store,
   render: h => h(App)
})
