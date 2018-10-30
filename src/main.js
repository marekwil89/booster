import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/pl'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss/main.scss';
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'
import router from './routes'
import store from './store'

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCPImQDBkArEQJj7aAnSkTRZ8AUGbK5_pY',
    libraries: "places"
  }
})

Vue.use(Vuex)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
