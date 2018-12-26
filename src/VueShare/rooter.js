
// 引入 vue-router 组件：
import VueRouter from 'vue-router';

/**
 * 模块相关的组件
 */
import index from './pages/index.vue';
import Vm0 from './pages/vm0';
import Vm1 from './pages/vm1';
import Vm2 from './pages/vm2';
import Vm13 from './pages/vm1-3';
import Vm133 from './pages/vm1-33';
import error from '../error.vue';

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    // 根目录也指向index，原则上编译后的文件用于Github pages，默认根目录会是web-share
    { path: '/', name: 'index', component: index },
    { path: '/web-share', name: 'index', component: index },
    { path: '/web-share/0', name: 'Vue起步', component: Vm0 },
    { path: '/web-share/1-1', name: '实例-数据', component: Vm1 },
    { path: '/web-share/1-2', name: 'DOM', component: Vm2 },
    { path: '/web-share/1-3', name: '临界情况', component: Vm13 },
    { path: '/web-share/1-33', name: '特性', component: Vm133},
    { path: '*', name: 'error', component: error }
  ]
});

export default router;
