<template>
  <div>
      <div :class="'light ' + color1">

      </div>

      <div :class="'light ' + color2 ">

      </div>

      <div :class="'light ' + color3 ">

      </div>



    <button @click="change">
      切换
    </button>
  </div>
</template>

<script>
export default {
  name: "RedGreen",
  data(){
    return{
      color1: 'white',
      color2: 'yellow',
      color3: 'green',
    }
  },
  methods:{
    change(){
      this.color1 === 'white' ? (this.color1 = 'red') + (this.color3 = 'white') : (this.color1 = 'white') + (this.color3 = 'green')
    }
  }
}
</script>

<style scoped>
.light{
  margin: 10px auto;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 50%;
  /* float: left; */
  position: absolute;
}

.light:nth-child(2){
  left: 120px;
}
.light:nth-child(1){
  left: 240px;
}
.red{
  background-color: red;
}

.green{
  background-color: green;
}

.yellow{
  background-color: yellow;
}

.white{
  background-color: whitesmoke;
}
</style>
