<template>
  <button @click="count+=1">{{count}}</button>
</template>

<script>
let data = {
  count2:1,
}
export default {
  name: "BtnItem",

  data() {
    return {
      count: 1,
    };
  },

  // methods: {
  //   plus: function() {
  //     this.a++;
  //   }
  // }
};
</script>

