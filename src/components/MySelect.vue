<template>
  <div>
    <label>
      <select class="">
        <option
          v-for="item in options"
          :key="item.label"
          :label="item.label">
        </option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: "MySelect",
  data(){
    return{
      options: [{
        label: '黄金糕'
      }, {
        label: '双皮奶'
      }, {
        label: '蚵仔煎'
      }, {
        label: '龙须面'
      }, {
        label: '北京烤鸭'
      }],
    }
  }
}
</script>

<style scoped>

</style>
