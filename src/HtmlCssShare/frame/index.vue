<!--
  htmlCssShare页面模块 框架
-->
<template>
<div class="row">
      <div class="col-xs-2 col-md-2">
        <app-nav></app-nav>
      </div>
      <div class="col-xs-10 col-md-10 m-right">
          <!-- 路由出口 -->
          <!-- 路由匹配到的组件将渲染在这里 -->
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import AppNav from "./nav.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    AppNav
  }
};
</script>
