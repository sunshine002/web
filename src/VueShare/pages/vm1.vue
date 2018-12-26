<template>
  <div>
    <p>数据与方法</p>
    <pre>
          1. 根vue实例中 data 选项是一个对象
          2. 组件中 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝

          输出data中的数据：{{a}}
        </pre>
    <!-- 组件中 data 维护一份被返回对象的独立的拷贝 -->
    <pre>

          组件的data是一个函数</pre>
    <vmcomponent></vmcomponent>
    <vmcomponent></vmcomponent>
    <!-- 组件中 data 为一对象 -->
    <pre>

          组件中的 data 为一对象</pre>
    <div>
      <vmcomponent2></vmcomponent2>
      <vmcomponent2></vmcomponent2>
    </div>

    <!-- 指令练习 -->
    <pre>

      v-text 指令：</pre>
    <div>{{a}}</div>

    <div v-text='a'></div>



    <pre>

      v-html 指令：</pre>
    <div>{{htmlInfo}}</div>

    <div v-html='htmlInfo'>{{htmlInfo}}</div>

  </div>

</template>

<script>
import Vmcomponent from "./vm1-1";
import Vmcomponent2 from "./vm1-1-1";
export default {
  data() {
    return {
      a: 2,
      htmlInfo: "<span>内容</span>"
    };
  },
  components: {
    Vmcomponent,
    Vmcomponent2
  }
};
</script>

<style scoped>
pre {
  margin: 0;
}
/* .aa{
  font-size:50px;
} */
</style>

