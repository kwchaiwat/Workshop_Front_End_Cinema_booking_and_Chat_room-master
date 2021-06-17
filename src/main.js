import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import VueChatScroll from 'vue-chat-scroll'
import VueQRCodeComponent from 'vue-qrcode-component'

require('../public/css/main.css')
// import Swal from 'sweetalert2'

Vue.use(VueCookies)
// Vue.use(Swal)
// Set default config

Vue.component('qr-code', VueQRCodeComponent)

VueCookies.config('1h')

Vue.use(VueAxios, axios)

Vue.use(VueChatScroll)

Vue.config.productionTip = false

Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
