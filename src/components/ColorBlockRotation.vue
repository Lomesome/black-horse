<template>
  <div>
    <div v-show="show" class="circle-bg" >
      <div class="circle">

      </div>
      <div class="circle">

      </div>
      <div class="circle">

      </div>
      <div class="circle">

      </div>
    </div>
    <button style="position:absolute;" @click="isShow">点击</button>
  </div>

</template>

<script>
export default {
  name: "ColorBlockRotation",
  data(){
    return{
      show:true,
    }
  },
  methods:{
    isShow(){
      this.show = !this.show
    }
  }
}
</script>

<style scoped>
.circle-bg{
  position: relative;
  transform-origin: 120px 120px;
  margin: 50px;
  animation: circlerotate 4s infinite linear;
}
.circle{
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #4a75ff;
}

.circle:first-child{
  animation: a1 4s infinite linear;
}

.circle:nth-child(2){
  top: 120px;
  animation: a2 2s infinite linear;
}
.circle:nth-child(3){
  left: 120px;
  animation: a3 3s infinite linear;
}
.circle:nth-child(4){
  left: 120px;
  top: 120px;
  animation: a4 4s infinite linear;
}

@keyframes circlerotate {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}

@keyframes a1 {
  0%{
    background-color: #d1eaff;
  }

  100%{
    background-color: #037bfc;
  }
}

@keyframes a2 {
  0%{
    background-color: #62aefd;
  }
  25%{
    background-color: #62aefd;
  }
  50%{
    background-color: #4da3fd;
  }
  75%{
    background-color: #2990f8;
  }
  100%{
    background-color: #4da3fd;
  }

}

@keyframes a3 {
  0%{
    background-color: #4da3fd;
  }
  25%{
    background-color: #62aefd;
  }
  50%{
    background-color: #62aefd;
  }
  75%{
    background-color: #4da3fd;
  }
  100%{
    background-color: #2990f8;
  }
}

@keyframes a4 {
  0%{
    background-color: #2990f8;
  }
  25%{
    background-color: #4da3fd;
  }
  50%{
    background-color: #62aefd;
  }
  75%{
    background-color: #62aefd;
  }
  100%{
    background-color: #4da3fd;
  }
}
</style>
