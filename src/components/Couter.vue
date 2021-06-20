<template>
  <div>
    <div @click="clickme" :style="'width: 100px;height: 100px;background-color:' + color">

    </div>
    <div>
      <button @click="clickme" >
        按钮
      </button>
      {{count}}
    </div>
  </div>

</template>

<script>
export default {
  name: "Couter",
  data(){
    return{
      count:1,
      color:'red',
    }
  },
  methods:{
    clickme(event){
      this.color === 'red' ? this.color='green' : this.color='red'
      console.log(event)
    }
  },
  mounted() {
    setInterval(()=>{
      this.count++;
    },1000)
  }
}
</script>

<style scoped>

</style>
