import Vue from 'vue';
import Router from 'vue-router';
import Frame from '@/page/frame.vue';
import BlogEditor from '@/page/blog-editor.vue';
import BlogDetail from '@/page/blog-detail.vue';
import BlogList from '@/page/n-article.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Frame,
      children:[{
        path:'detail/:id?',
        component:BlogDetail
      },
      {
        path:'',
        component:BlogList
      }]
    },
    {
      path:'/edit/:id?',
      name:'BlogEditor',
      component:BlogEditor
    }/*,
    {
      path:'/detail/:id?',
      name:'BlogDetail',
      component:BlogDetail
    }*/
  ]
})
