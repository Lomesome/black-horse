<template>
  <div>
    <color-block-rotation></color-block-rotation>
    <MessageBox v-if="ifshow" :key="k"></MessageBox>
    <button @click="ifshow = true" style="margin-top: 500px">消息盒子</button>
    <carousel-map></carousel-map>
    <my-select style="padding-top: 100px"></my-select>

  </div>
</template>

<script>
import ColorBlockRotation from "@/components/ColorBlockRotation";
import MessageBox from "@/components/MessageBox";
import MySelect from "@/components/MySelect";
import CarouselMap from "@/components/CarouselMap";
export default {
  components: {
    ColorBlockRotation, MessageBox, MySelect, CarouselMap
  },
  name: "day2",
  data(){
    return{
      ifshow:false,
      k:new Date().getTime(),
    }
  }
}
</script>

<style scoped>

</style>
