
/**
 * 模块相关的组件
 */
import index from './pages/index.vue';
// 流式布局
import fluid from './pages/fluid.vue';
// 弹性布局：新老对比
import flexOldNew from './pages/flex-old-new.vue';
// 旧 弹性布局 属性
import oldflexBoxAlign from './pages/oldflex-box-align.vue';
import oldflexBoxPack from './pages/oldflex-box-pack.vue';
// 弹性布局
import flexLayOut from './pages/newflex-flex.vue';
import flexOrder from './pages/newflex-order.vue';
// 多列布局
import columns from './pages/columns.vue';
// 网格布局
import grid from './pages/grid.vue';
// 表格布局
import table from './pages/table.vue';
// css3相关
import css3BorderRadius from './pages/css3-border-radius.vue';
import css3SelectorChecked from './pages/css3-selector-checked.vue';
import css3SelectorTarget from './pages/css3-selector-target.vue';
import css3AninimalSteps from './pages/css3-aninimal-steps().vue';
import css3Calc from './pages/css3-calc().vue';
import jianjiao from './pages/jianjiao.vue';
import css3AnimalGradient from './pages/css3-animal-gradient.vue';
import css3Add from './pages/css3-add.vue';
// html5相关
import html5Meta from './pages/html5-meta.vue';
import html5VideoAudio from './pages/html5-video-audio.vue';
import html5Location from './pages/html5-location.vue';
import html5WebWorks from './pages/html5-web-works.vue';
import html5Websocket from './pages/html5-websocket.vue';
// 开发调试相关
import webpackInfo from './pages/webpack-info.vue';
import devFtlNode from './pages/dev-ftl-node';
import devWeinre from './pages/dev-weinre';
import devBrowsersync from './pages/dev-browsersync';

export default [
  { path: '/demo1', name: 'demo1', component: index },
  { path: '/web-fluid', name: '流式布局', component: fluid },
  { path: '/web-flex-old-new', name: '弹性布局(新老对比)', component: flexOldNew },
  { path: '/web-oldflex-box-align', name: '弹性布局(旧)-box-align', component: oldflexBoxAlign },
  { path: '/web-oldflex-box-pack', name: '弹性布局(旧)-pack', component: oldflexBoxPack },

  { path: '/web-newflex-flex', name: '弹性布局-flex', component: flexLayOut },
  { path: '/web-newflex-order', name: '弹性布局-order', component: flexOrder },

  { path: '/web-columns', name: '多列布局', component: columns },
  { path: '/web-grid', name: '网格布局', component: grid },

  { path: '/web-table', name: '表格布局', component: table },

  { path: '/web-css3-border-radius', name: 'css3-border-radius', component: css3BorderRadius },
  { path: '/web-css3-selector-checked', name: 'css3-selector-checked', component: css3SelectorChecked },
  { path: '/web-css3-selector-target', name: 'css3-selector-target', component: css3SelectorTarget },
  { path: '/web-css3-aninimal-steps', name: 'css3-aninimal-steps()', component: css3AninimalSteps },
  { path: '/web-css3-calc', name: 'css3-calc()', component: css3Calc },
  { path: '/web-jianjiao', name: '尖角', component: jianjiao },
  { path: '/web-css3-animal-gradient', name: 'css3动画背景渐变', component: css3AnimalGradient },
  { path: '/web-css3-add', name: 'css3-易忽略的属性', component: css3Add },

  { path: '/web-html5-meta', name: 'html5-meta', component: html5Meta },
  { path: '/web-html5-video-audio', name: 'html5-video-audio', component: html5VideoAudio },
  { path: '/web-html5-location', name: 'html5-地理定位', component: html5Location },
  { path: '/web-html5-web-works', name: 'html5-web-works', component: html5WebWorks },
  { path: '/web-html5-websocket', name: 'html5-websocket', component: html5Websocket },

  { path: '/web-webpack-info', name: 'webpack服务器小结', component: webpackInfo },
  { path: '/web-dev-ftl-node', name: 'ftl-node服务器', component: devFtlNode },
  { path: '/web-dev-weinre', name: 'weinre服务器使用', component: devWeinre },
  { path: '/web-dev-browsersync', name: 'Browsersync多端远程调试', component: devBrowsersync }
];
