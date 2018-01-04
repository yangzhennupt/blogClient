// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';
import iView from 'iview';
import marked from 'marked';
import axios from 'axios';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(iView);

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,																														
  smartypants: false
});

Vue.prototype.$axios = axios;
Vue.prototype.$marked = marked;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
