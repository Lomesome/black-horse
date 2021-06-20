<template>
  <div>
    <div>
      <my-header></my-header>
      <my-carousel style="position: static;transform: translateY(52px)"></my-carousel>
      <my-recommend></my-recommend>
    </div>

  </div>
</template>

<script>
import MyHeader from "@/components/Header";
import MyCarousel from "@/components/Carousel";
import MyRecommend from "@/components/Recommend";

export default {
  components:{
    MyHeader,
    MyCarousel,
    MyRecommend,
  },
  name: "Index",
  data() {
    return {

    };
  }
}
</script>

<style scoped>

</style>
