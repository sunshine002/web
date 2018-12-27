
<template>
  <div class="app-container" id="app-container">
    <div class="header">
      <div class="headerInfo">
        <div class="tagWrap">
          <!--
            之所以不用 / ，原因是因为编译后的文件要放在Github Pages中，如果为 /，
            则地址会是https://sunshine002.github.io，而不是https://sunshine002.github.io/web-share
           -->
          <!-- <span><a href='/'>Vue-Demo</a></span> -->
          <!-- <span><a href='/demo1'>html5,css3,布局-Demo</a></span> -->
          <span><router-link :to="{name:'index'}" tag="a">Vue-Demo</router-link></span>
          <span><router-link :to="{name:'demo1'}" tag="a">html5-meta</router-link></span>
        </div>
        <div class="tip">| 主要用来展示分享的demo，基于webpack(^3.7.1)，vue(^2.0.3)及vue-router(^2.0.1)来构建</div>
      </div>
    </div>
    <div class="app-content">
      <router-view></router-view>
      <!-- <html-css-share v-if='isWeb'></html-css-share>
      <vue-share v-else></vue-share> -->
    </div>
  </div>
</template>

<script>
import VueShare from "./VueShare/frame/index.vue";
import HtmlCssShare from "./HtmlCssShare/frame/index.vue";

export default {
  data() {
    return {
      // isWeb: this.isWeb,
      isWeb: window.location.pathname.indexOf('demo1')!==-1
    };
  },
  props:[
    // "isWeb"
  ],
  components: {
    VueShare,
    HtmlCssShare
  },

};
</script>
<style lang='less' scoped>
@import url("./common/style.less");

.header {
  padding: 18px;
  border-bottom: 1px solid #ddd;
  margin: 0 0 5px;
  clear: both;
  background: #1890ff;
  color:#fff;
  .tagWrap {
    padding: 0;
    padding-right:20px;
    span {
      padding: 8px;
      background: rgb(16, 142, 233);
      margin-right: 10px;
      color: #fff;
      border-radius: 3px;
      border:1px solid #fff;
    }
  }
  a,a:link,a:visited,a:hover{
    color: #fff;
    text-decoration: none;
  }
}
.headerInfo {
  display: flex;
}
.tip {
  // color: #666;
  font-size: 14px;
}
</style>
