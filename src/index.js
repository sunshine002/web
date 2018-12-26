/* eslint-disable no-new */

/**
 * 应用的启动文件
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
// 安装Vue路由插件
Vue.use(VueRouter);

Vue.config.devtools = true;
Vue.config.silent = true;

// 系统框架
import Frame from './Frame.vue';

/**
 * vue模块
 */
// 路由配置
import VueShareRouter from './VueShare/rooter.js';
import HtmlCssShareRooter from './HtmlCssShare/rooter.js';

// github pages的的web端demo的router的url中带有web-share
let isWeb = window.location.pathname.indexOf('demo1') !== -1;

let data = {
  a: 1,
  b: '根实例值',
  message: 'message内容'
};

// 创建根Vue实例
const vm = new Vue({
  el: '#app',
  // el: document.getElementById('app'),
  // 通过router配置参数注入路由
  router: isWeb ? HtmlCssShareRooter : VueShareRouter,

  // data
  data: data,

  // template模板中用到了此实例定义的Frame模板
  template: '<Frame  />',

  // Vue实例可用的组件，可以是多个
  components: { Frame },

  beforeCreate: function() {
    console.group('------beforeCreate创建前状态------');
    console.log('%c%s', 'color:red', 'el     : ' + this.$el); // undefined
    console.log('%c%s', 'color:red', 'data   : ' + this.$data); // undefined
    console.log('%c%s', 'color:red', 'message: ' + this.message);
  },
  created: function() {
    console.group('------created创建完毕状态------');
    console.log('%c%s', 'color:red', 'el     : ' + this.$el); // undefined
    console.log('%c%s', 'color:red', 'data   : ' + this.$data); // 已被初始化
    console.log('%c%s', 'color:red', 'message: ' + this.message); // 已被初始化
  },
  beforeMount: function() {
    console.group('------beforeMount挂载前状态------');
    console.log('%c%s', 'color:red', 'el     : ' + (this.$el)); // 已被初始化
    console.log(this.$el);
    console.log('%c%s', 'color:red', 'data   : ' + this.$data); // 已被初始化
    console.log('%c%s', 'color:red', 'message: ' + this.message); // 已被初始化
  },
  mounted: function() {
    console.group('------mounted 挂载结束状态------');
    console.log('%c%s', 'color:red', 'el     : ' + this.$el); // 已被初始化
    console.log(this.$el);
    console.log('%c%s', 'color:red', 'data   : ' + this.$data); // 已被初始化
    console.log('%c%s', 'color:red', 'message: ' + this.message); // 已被初始化
  },
  beforeUpdate: function() {
    console.group('beforeUpdate 更新前状态===============》');
    console.log('%c%s', 'color:red', 'el     : ' + this.$el);
    console.log(this.$el);
    console.log('%c%s', 'color:red', 'data   : ' + this.$data);
    console.log('%c%s', 'color:red', 'message: ' + this.message);
  },
  updated: function() {
    console.group('updated 更新完成状态===============》');
    console.log('%c%s', 'color:red', 'el     : ' + this.$el);
    console.log(this.$el);
    console.log('%c%s', 'color:red', 'data   : ' + this.$data);
    console.log('%c%s', 'color:red', 'message: ' + this.message);
  },
  beforeDestroy: function() {
    console.group('beforeDestroy 销毁前状态===============》');
    console.log('%c%s', 'color:red', 'el     : ' + this.$el);
    console.log(this.$el);
    console.log('%c%s', 'color:red', 'data   : ' + this.$data);
    console.log('%c%s', 'color:red', 'message: ' + this.message);
  },
  destroyed: function() {
    console.group('destroyed 销毁完成状态===============》');
    console.log('%c%s', 'color:red', 'el     : ' + this.$el);
    console.log(this.$el);
    console.log('%c%s', 'color:red', 'data   : ' + this.$data);
    console.log('%c%s', 'color:red', 'message: ' + this.message);
  }

});

// console.log(`vm中的data对象：${vm.a}`);
// console.log(`data对象中的：${data.a}`);

// 更新data值，验证响应式
// data.a = 2;

// data.message = '更新';

// console.log(`vm中的data对象：${vm.a}`);
// console.log(`data对象中的：${data.a}`);

// console.log(vm.$root.a);

// 手动挂载：
// vm.$mount('#app');

