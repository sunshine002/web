<template>
  <div>
    <p>DOM</p>

    <pre>

      render应用：

    </pre>
    <demo></demo>

    <pre>

      template写法：
    </pre>
    <demo2></demo2>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      a: 2,
      htmlInfo: "<span>内容</span>"
    };
  }
};

Vue.component("demo", {
  render(createElement) {
    const menu_items = ["首页", "搜索", "分类", "系统"];
    /**
     * 第一个参数是必填，传入的是似HTML标签名称，eg: ul, li
     * 第二个参数是选填，表示的是属性，eg: className
     * 第三个参数是选填, 子节点，eg: 要显示的文本内容
     */
    return createElement(
      "ul",
      null,
      menu_items.map(item => createElement("li", item))
    );
  }
});

/**
 <template>
　　<ul>
　　　<li v-for="item in menu_items">
　　　　　{{ item }}
　　　</li>
　　</ul>
</template>
 */

Vue.component("demo2", {
  template: "<div>template输出</div>"
});
</script>

<style scoped>
pre {
  margin: 0;
}
</style>

