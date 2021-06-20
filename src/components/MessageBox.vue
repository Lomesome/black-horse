<template>
    <div class="box" v-show="isshow" @mousedown="moused" @mouseup="mouseu" @mouseleave="mouseu" @mousemove="mousem" :style="`left:${this.x}px;top:${this.y}px`">
      <div class="title" >
        提示
      </div>
      <div class="content">
        这是一个消息盒子
      </div>
      <button class="box-button" @click="show">确定</button>
    </div>
</template>

<script>
export default {
  name: "MessageBox",
  data(){
    return{
      isdown:false,
      isshow:true,
      x:300,
      y:300,
      delX:0,
      delY:0,
    }
  },
  methods:{
    show(){
      this.isshow = !this.isshow
    },
    change(event){
      console.log(event)
    },
    moused(event){
      this.isdown = true;
      this.delX = event.clientX - event.offsetX;
      this.delY = event.clientY - event.offsetY;
    },
    mousem(event){
      if (this.isdown){
        this.x = event.clientX - this.delX;
        this.y = event.clientY - this.delY;
      }
    },
    mouseu(event){
      this.isdown = false;
      // this.delX = 0;
      // this.delY = 0;
    },
  }
}
</script>

<style scoped>
.box{
  position: absolute;
  border-radius: 10px;

  width: 350px;
  height: 200px;
  background-color: white;
  box-shadow: darkgrey 10px 10px 30px 5px;
}

.title{
  text-align: center;
  line-height: 30px;
  height: 30px;
  background-color: #c3c3c3;
  border-radius: 10px 10px 0 0;
}

.content{
  position: absolute;
  top: 40%;
  left: 10%;
}

.box-button{
  position: absolute;
  bottom: 10px;
  right: 10px;
  border: 0;
  background-color: #1890ff;
  border-radius: 5px;
  color: white;
  width: 60px;
  height: 30px;
  font-size: 16px;
}
</style>
