import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)
export default new Router({
  base:'/blog/',
  mode:'history',
  routes: [
    {
      path: '/',
      component: ()=>import ('@/page/frame.vue'),
      children:[{
        path:'detail/:id?',
        component:()=> import ('@/page/blog-detail.vue')
      },
      {
        path:'',
        component:()=> import ('@/page/n-article.vue')
      }]
    },
    {
      path:'/edit/:id?',
      name:'BlogEditor',
      component:()=> import ('@/page/blog-editor.vue')
    }/*,
    {
      path:'/detail/:id?',
      name:'BlogDetail',
      component:BlogDetail
    }*/
  ]
})
