
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

export default [
  { path: '/', name: 'index', component: index },
  { path: '/0', name: 'Vue起步', component: Vm0 },
  { path: '/1-1', name: '实例-数据', component: Vm1 },
  { path: '/1-2', name: 'DOM', component: Vm2 },
  { path: '/1-3', name: '临界情况', component: Vm13 },
  { path: '/1-33', name: '特性', component: Vm133}
];
