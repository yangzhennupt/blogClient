import Vue from 'vue';
import Router from 'vue-router';
import Frame from '@/page/frame.vue';
import BlogEditor from '@/page/blog-editor.vue';
import BlogDetail from '@/page/blog-detail.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Frame',
      component: Frame
    },
    {
      path:'/edit/:id?',
      name:'BlogEditor',
      component:BlogEditor
    },
    {
      path:'/detail/:id?',
      name:'BlogDetail',
      component:BlogDetail
    }
  ]
})
