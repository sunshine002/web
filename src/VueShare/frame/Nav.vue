<template>
  <el-col :span="24">
    <!-- router: 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
    <el-menu
      router
      default-active="/web-share/1"
      :default-openeds="['/web-share/1']"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="/web-share/0">
        <i class="el-icon-menu"></i>
        <span slot="title">Vue起步</span>
      </el-menu-item>


      <el-submenu index="/web-share/1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>vue demo</span>
        </template>

        <el-menu-item-group>
          <template slot="title">vue实例</template>
          <el-menu-item index="/web-share/1-1">数据</el-menu-item>
          <el-menu-item index="/web-share/1-2">DOM</el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group title="组件">
          <el-menu-item index="/web-share/1-3">实例相关(属性/方法..)</el-menu-item>
          <el-menu-item index="/web-share/1-33">特性</el-menu-item>
        </el-menu-item-group>

        <el-submenu index="/web-share/1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="/web-share/1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>


      <el-menu-item index="/web-share/2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="/web-share/3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="/web-share/4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>


<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
