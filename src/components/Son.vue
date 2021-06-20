<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: "Son",
  props:{
    msg: String,
    callback: Function,
  },
  data(){
    return{
      sonmsg:'hello father',
    }
  },
  mounted() {
    this.callback(this.sonmsg);
    this.$emit("my-func",'hello', 'father', '2')
  }
}
</script>

<style scoped>

</style>
