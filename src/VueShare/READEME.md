### 分享目的
- 以下内容基于Vue2.0版本
- 通过本次学习能够自己构建一个Vue应用
- 了解Vue.js与React的差异

### 文档
- https://cn.vuejs.org/v2/api/
- https://vuejs.org/v2/api

### 概念&特性

> Vue 是一套用于构建用户界面的==渐进式==框架。与其它大型框架不同的是，Vue 被设计为可以==自底向上逐层应用==。Vue 的核心库只关注视图层，不仅易于上手，还==便于==与第三方库或==既有项目整合==。

- 渐进式框架：没有太多的硬性要求，例如angular必须使用它的模块机制，依赖注入；react的函数式编程理念与JSX语法；vue可以在基于Jquery框的系统中，引入vue直接就可以应用Jquery语法
- 响应式系统：data 对象：更新后视图会发生响应
- 与即有项目整合：
    - 通过网易项目组件发展史来说明
    1. 模块的应用史
        - 全局变量+命名空间->AMD(requirejs)及commonjs(常用于打包工具和node服务中)->es6模块
        
    2. 组件发展史
        - 多页面应用：
            - 命名空间的多入口文件 -> AMD(requirejs)->es6及后来的Vue.js的应用
        - 单页面应用：React与Vue.js的应用
    3. 通过项目来说明具体的整合用法
        - 与requirejs模块页整合
        - 与es6模块页整合

### 术语
- 编译器

    用来将模板字符串编译成为 JavaScript 渲染函数的代码

    当使用 vue-loader时，*.vue 文件内部的模板会在构建时预编译成 JavaScript

    这种情况就需要在打包工具中配置一个别名，以下是webpack相关的配置

    ```
    module.exports = {
      // ...
      resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
      }
    }
    ```

    - 其它打包工具(Rollup,Browserify,Parcel)配置别名的方法，具体查看：
    https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    
    - 示例
    
    ```
    // 需要编译器
    new Vue({
      template: '<div>{{ hi }}</div>'
    })
    
    // 不需要编译器
    new Vue({
      render (h) {
        return h('div', this.hi)
      }
    })
    ```
    
### Vue起步
https://cn.vuejs.org/v2/guide/index.html#%E8%B5%B7%E6%AD%A5
- 声明式渲染
- 条件与循环
- 处理用户输入
- 组件化应用构建

### Vue实例：new Vue(options)
> 一个 Vue 应用由一个通过 new Vue 创建的根 Vue 实例，以及可选的嵌套的、可复用的组件树组成

- optitons参数使用及说明
    - rooter: 注入路由，让整个应用都有路由功能
        - 用于单页面应用的vue根实例中
    - 数据(适用于vue根实例与组件中)
        - data
            - vue根实例中data是一个对象
            - 而组件中data对象返回的是一个函数
        - props
            - 父子组件数据传递，类似react中的props
        - 等等，具体查看api
    - DOM（适用于vue根实例与组件中）
    - 生命周期钩子(适用于vue根实例与组件中)
            
- DOM
    - 通过参数el来挂载
        - 类型：string | HTMLElement
        - 只能用在由 new 创建的实例中
        - 实例挂载之后，元素可以用 vm.$el 访问
        - 如果在实例化时存在这个选项，实例将立即进入编译过程，否则，需要显式调用 vm.$mount() 手动开启编译
    - template
        - 类型：string 
        - 模板将会替换挂载的元素。挂载元素的内容都将被忽略，除非模板的内容有==分发插槽==。
        - 其它用法
        
            ```
            <li></li>
            <template v-for='' />
                <li></li>
            </template>
            ```
            
             ```
            Vue.component('alert-box', {
              template: `
                <div class="demo-alert-box">
                  <strong>Error!</strong>
                  <slot></slot>
                </div>
              `
            })
            ```
    - render
        - 字符串模板的代替方案，发挥 JavaScript的编程能力。该渲染函数接收一个 createElement方法作为第一个参数用来创建 VNode
        - vue2.0的新特性，优于el与temlate的写法，因为el与template最终也会编译成render方法执行
        - Vue 选项中的 render 函数若存在，则 Vue 构造函数不会从 template 选项或通过 el 选项指定的挂载元素中提取出的 HTML 模板编译渲染函数。
        - 通过demo了解render函数的应用及与tempate之间的相互转换

 - Vue.js生命周期
    - 通过demo验证各个周期内所做的事情
    - new Vue中没有el时的情况
    - 更新data数据时生命周期钩子的执行情况
    - 没有template模板时的情况

        - beforeCreate
        - created
        - beforeMount
        - mounted
        - beforeUpdate
        - updated
        - beforeDestroy
        - destroyed
        - activated
        - deactivated
        - errorCaptured


 - 注册组件
    - 全局组件
        - Vue.component('组件名称',{})
            ```
            Vue.component('button-counter', {
              data: function () {
                return {
                  count: 0
                }
              },
              template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
            })
            ```
        - Vue.extend()：即通过组件构造器来创建
        
    - 局部组件
        - 通过new实例中的components来注册
        
            ```
            <script>
            import Navbar from './components/navbar';
            export default {
                data() {
                  return {
                    navbarShow: false
                  };
                },
                components: {
                  Navbar
                },
            </script>
            ```
    - 内置组件(动态组件/元组件)
    
- 组件名称
    - 组件名称使用驼峰命名，则在引用组件的时候，需要把大写改为小写，并且用'-'将单词连接；
    - 组件名称不使用驼峰命名，则直接拿名称来使用即可

- 组件特性
- 可通过插槽分发内容 slot
- 组件通信
    - 父->子
        - props：静态/动态
            - 静态属性：不用v-bind(简写:)来绑定
            - 动态属性及非string类型的静态属性(如boolen,number,object...)则需要用指令:来绑定
    - 子->父
        - 通过事件监听
    - Vuex

### 通过源码了解Vue实例的渲染过程
- 在创建一个vue实例的时候 new Vue(options), Vue的构造函数将运行 this._init

```
vue/src/core/instance/init.js

// Vue.prototype._init
...
initLifecycle(vm)
initEvents(vm)
initRender(vm)
```

- initRender(vm)

```
//initRender
  ...
  if (vm.$options.el) {
    vm.$mount(vm.$options.el);
  }
```

### Vue源码$mount函数的流程
$mount: 在Vue原型上被定义，即Vue.prototype.$mount

```
src/platforms/web/entry-runtime-with-compiler

import { query } from './util/index'

const mount = Vue.prototype.$mount
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && query(el)

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== 'production' && warn(
      `Do not mount Vue to <html> or <body> - mount to normal elements instead.`
    )
    return this
  }
  ...
  return mount.call(this, el, hydrating)
 }
```

```
export function query (el: string | Element): Element {
  if (typeof el === 'string') {
    const selected = document.querySelector(el)
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      )
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}
```

- el不能是body或者html，原因是vue在挂载是会将对应的dom对象替换成新的div，但body和html是不适合替换的

- vm.$mount的渲染过程


<html>
<!--在这里插入内容-->
<img src='https://note.youdao.com/yws/res/111693/WEBRESOURCE6a17d653a2ec27c584b1d206f22fcc10' width='80%' />
</html>


### Vue Rooter应用

- 文档

    - https://router.vuejs.org/zh/guide/#javascript
    - https://router.vuejs.org/guide/#html

- html

```
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<div id="app">
  <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</div>
```

- js

```
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！
```
        
### Vue.js相关的组件框架
- element-ui
    - 基于 Vue 2.0 的桌面端组件库
    - 乐得大数据系统依赖的ui库
    - 和React的antd库相似
    - 文档：http://element.eleme.io/#/zh-CN
- vue-strap
    - Bootstrap components built with Vue.js.
    - No jQuery, bootstrap.js, or any 3rd party plugins required
    - 应用于乐得的投顾系统
    - 文档：https://www.bootcdn.cn/vue-strap/
- Mint UI
    - 基于Vue.js的移动端组件库
    - https://mint-ui.github.io/#!/zh-cn
    - 组件的引用 
        ```
        // 引入全部组件
        import Vue from 'vue';
        import Mint from 'mint-ui';
        Vue.use(Mint);
        // 按需引入部分组件
        import { Cell, Checklist } from 'minu-ui';
        Vue.component(Cell.name, Cell);
        Vue.component(Checklist.name, Checklist);
        ```
    
### Vue应用使用小结
- template模板文件中引入样式，原则上相关样式通过<style>标签写在template模板中，但如果有全局样式文件，可通过以下代码实现

    ```
    <!--.vue文件中的引用方式-->
    <!--header.vue-->
    <style>
      @import './style.less';
      <!--组件私有-->
      .className:{
          ...
      }
      ....
    </style>
    ```
- .vue组件中插入内联样式，支持less语法
    - lang='less' 可对less语法进行解析
    - less相关代码高亮显示，修改vscode的配置
    
    ```
    "files.associations": {
        "*.vue":"vue"
      }
    ```

- scoped 可实现样式的模块化
    - 添加 scoped 属性 

    ```
    <style lang='less' scoped>
    ```

### Vue调试工具
- vue-devtools
    - https://github.com/vuejs/vue-devtools
    - chrome插件: Vue.js devtools

### Vue.js与React的对比
- 实例化根组件组件
    - React
    
        ```
        import { render } from 'react-dom';
        
        render(<App />, document.getElementById('app')
        ```

    - Vue

        ```
        new Vue({
          el: '#app',
          // 通过router配置参数注入路由
          router: HtmlCssShareRooter
        });
        ```
- vue-router与react-router
    - HTML5 History用法相同
        - 404页面配置
        - webpack配置
            - 配置项：historyApiFallback: true
            - 命令：--history-api-
- template中所有节点应放在同一个父节点中，同react组件
- 在Vue2.0中，渲染层的实现做了根本性改动，那就是引入了虚拟DOM，类似react中的虚拟DOM实现原理
- 都是面向组件的的开发思路
- react有点强热，且自己定义的 JSX 规范，揉和在 JS 的组件框架里，Vue可和其它项目整合
- 表单的数据绑定
    - Vue通过指令v-model来实现数据的双向绑定
    - react 则是单向数据绑定(遵循自顶向下或单向数据流)，若实现双向绑定需要借助插件或用受控组件来实现
- 数据更新时都是先生成虚拟dom
- 手动强制更新，99%的应用原因是哪个地方代码有问题，都应该尽量少用
    - Vue中组件的$forceUpdate
    - React中组件的forceUpdate()
- 插槽的应用
    - Vue中有slot特性
    - React中通过复合组件来实现或通过组件的props.children来实现
- 官方总结
    - https://cn.vuejs.org/v2/guide/comparison.html

### Vuex: Vue.js的状态管理模式
### VueSSR: 服务端渲染
    
    

    


