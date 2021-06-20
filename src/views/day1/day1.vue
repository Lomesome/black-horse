<template>
  <div>
    <clock></clock>
    <couter></couter>
    <red-green></red-green>
    <css-button></css-button>
  </div>
</template>

<script>
import CssButton from "@/components/ActionButton";
import Clock from "@/components/Clock";
import Couter from "@/components/Couter";
import RedGreen from "@/components/RedGreen";
import MyButton from "@/components/MyButton";
export default {
  components:{
    CssButton, Clock, Couter, RedGreen, MyButton
  },
  name: "Index"
}
</script>

<style scoped>

</style>
