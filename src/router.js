
// 引入 vue-router 组件：
import VueRouter from 'vue-router';

import VueShare from './VueShare/frame/index.vue';
import HtmlCssShare from './HtmlCssShare/frame/index.vue';

import error from './error.vue';

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  /**
   * 之所以不用 / ，原因是因为编译后的文件要放在Github Pages中，如果为 /，
   * 则地址会是https://sunshine002.github.io，而不是https://sunshine002.github.io/web-share
   */
  base: '/web-share',
  routes: [
    { path: '/',
      name: 'index',
      component: VueShare,
      children: require('./VueShare/router').default
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: HtmlCssShare,
      children: require('./HtmlCssShare/router').default
    },
    { path: '*', name: 'error', component: error }
  ]
});

export default router;
