// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';
import marked from 'marked';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios';
import 'iview/dist/styles/iview.css';
import store from './store';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import {Form,Input,Select,Button,Menu,Icon,MenuItem,Spin} from 'iview';
Vue.config.productionTip = false;

Vue.component('Form', Form);
Vue.component('Input', Input);
Vue.component('Select', Select);
Vue.component('Button', Button);
Vue.component('Menu', Menu);
Vue.component('Icon', Icon);
Vue.component('MenuItem', MenuItem);
Vue.use(mavonEditor);

Vue.prototype.$Spin = Spin

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: (code) => hljs.highlightAuto(code).value
});

Vue.prototype.$axios = axios;
Vue.prototype.$marked = marked;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
