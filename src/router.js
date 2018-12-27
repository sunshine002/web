
// 引入 vue-router 组件：
import VueRouter from 'vue-router';

/**
 * 模块相关的组件
 */
// vue 相关
// import index from './pages/index.vue';
// import Vm0 from './VueShare/pages/vm0';
// import Vm1 from './VueShare/pages/vm1';
// import Vm2 from './VueShare/pages/vm2';
// import Vm13 from './VueShare/pages/vm1-3';
// import Vm133 from './VueShare/pages/vm1-33';
// import error from './error.vue';

import VueShare from './VueShare/frame/index.vue';
import HtmlCssShare from './HtmlCssShare/frame/index.vue';

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  // base: '/web-share/',
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
    }
  ]
});

export default router;
