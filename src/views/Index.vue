<template>
  <div>
    <Clock></Clock>
    <Couter></Couter>
    <RedGreen></RedGreen>
    <MyButton style="clear:both;"></MyButton>
  </div>
</template>

<script>
import Clock from "@/components/Clock";
import Couter from "@/components/Couter";
import RedGreen from "@/components/RedGreen";
import MyButton from "@/components/MyButton";

export default {
  name: "Index",
  components:{Clock,Couter,RedGreen,MyButton}
}
</script>

<style scoped>

</style>
