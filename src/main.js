// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
// import Vuex from 'vuex'
import marked from 'marked'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios'
import 'iview/dist/styles/iview.css'
import store from './store/index'
import hljs from 'highlight.js/lib/highlight'
import markdown from 'highlight.js/lib/languages/markdown'
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import htmlbars from 'highlight.js/lib/languages/htmlbars'
import 'highlight.js/styles/tomorrow.css'
import { Form, Input, Select, Option, Button, Menu, Icon, MenuItem, Spin, FormItem } from 'iview'
hljs.registerLanguage('markdown', markdown)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('css', css)
hljs.registerLanguage('htmlbars', htmlbars)
Vue.config.productionTip = false
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Input', Input)
Vue.component('Select', Select)
Vue.component('Option', Option)
Vue.component('Button', Button)
Vue.component('Menu', Menu)
Vue.component('Icon', Icon)
Vue.component('MenuItem', MenuItem)
Vue.use(mavonEditor)

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
})

Vue.prototype.$axios = axios
Vue.prototype.$marked = marked

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
