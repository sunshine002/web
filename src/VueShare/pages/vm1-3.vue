<template>
  <div>
    <pre>

      实例属性：</pre>
    <pre>访问根实例</pre>
    <pre>
      在每个 new Vue 实例的子组件中，其根实例可以通过 $root 属性进行访问。
      即所有的子组件都可以将这个实例作为一个全局 store 来访问或使用
      适用于少量组件或小项目中
    </pre>


    <pre>注：不应该使用箭头函数来定义 method 函数 (例如 plus: () => this.a++)。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.a 将是 undefined。</pre>
    <pre><button @click="getRootData">点击按钮显示根实例数据，methods中不使用箭头函数</button></pre>
    <pre><button @click="getRootDataArrow">点击按钮显示根实例数据，methods中使用箭头函数</button></pre>
    <pre><button @click="get$data">console $data</button></pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      b: "a"
    };
  },

  methods: {
    getRootData: function() {
      alert("输入根实例中数据对象中的b值：" + this.$root.b);
    },
    //不能用箭头函数，否则this不指向Vue实例
    getRootDataArrow: () => {
      alert(this);
    },
    // vm.$data
    get$data: function() {
      console.log(this.$data)
    }
  }
};
</script>

<style>
</style>
