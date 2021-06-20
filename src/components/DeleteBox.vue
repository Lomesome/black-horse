<template>
  <div class="box" v-if="isexits">
    <div class="text">
      {{index}}
    </div>
    <button class="box-button" @click="isexits = false">del</button>
    <div style="clear:both;"></div>
  </div>
</template>

<script>
export default {
  name: "DeleteBox",
  props:{
    index:Number,
  },
  data() {
    return {
      isexits:true,
    }
  }
}
</script>

<style scoped>

.box{
  border-radius: 5px;
  border: 2px solid red;
  padding: 20px;
  margin: 20px;
}
.text{
  line-height: 35px;
  float: left;
  width: 200px;
  height: 35px;
  margin-right: 20px;
}

.box-button{
  width: 70px;
  float: left;
  height: 35px;
}
</style>
