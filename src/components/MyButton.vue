<template>
  <div>
    <div :class="'button ' + color" @click="move">
      <div class="circle" :style="'left:' + pos + 'px'"> </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyButton",
  data(){
    return{
      color: 'no',
      pos:2,
    }
  },
  methods:{
    move(){
      if (this.pos === 2){
        this.color = 'select'
        while (this.pos < 38){
          this.pos++;
        }
      }else {
        this.color = 'no'
        while (this.pos > 2) {
          this.pos--;
        }
      }
      console.log(this.pos)
    }
  }
}
</script>

<style scoped>
.circle{
  background-color: white;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  height: 20px;
  width: 20px;
  border-radius: 50%;
}

.button{
  cursor: pointer;

  position: relative;
  width: 60px;
  height: 25px;
  border-radius: 50px;
}

.no{
  background-color: #c3c3c3;
}

.select{
  background-color: #4a75ff;
}
</style>
