<template>
  <button @click="count+=1">{{count}}</button>
</template>

<script>
let data = {
  count:1,
}
export default {
  name: "BtnItem2",

  data() {
    return data;
  },

  // methods: {
  //   plus: function() {
  //     this.a++;
  //   }
  // }
};
</script>

