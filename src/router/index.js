import Vue from 'vue';
import Router from 'vue-router';
import Frame from '@/page/frame.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Frame',
      component: Frame
    }
  ]
})
