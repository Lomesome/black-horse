<template>
  <div>
    <div class="switch" @click="cur = !cur">
      <div class="switch-bg" :class="cur==1?'on':'off'">
        <div class="switch-btn" :class="cur==1?'on':'off'" ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CssButton",
  data(){
    return{
      cur:0
    }
  }
}
</script>

<style scoped>
.switch{
  cursor: pointer;
  width: 100px;
  height: 40px;
  border-radius: 50px;
  background-color: #00000040;
  position: relative;
}

.switch-btn{
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #efefef;
  position: absolute;
  background-color: #fff;
  top: 50%;
  transform: translateY(-50%);
  left: .1rem;
  transition:left .5s ease;
}

.switch-bg{
  background-color: transparent;
  width: 100px;
  height: 40px;
  border-radius: 50px;
  transition: .5s ease;
}

.switch-btn.on{
  left: 60px;
  animation: buttonon .7s ease alternate forwards;
}

.switch-bg.on{
  background-color: #1890ff;
}

.switch-btn.off{
  left: 2px;
  animation: buttonoff .7s ease alternate forwards;
}

@keyframes buttonon{
  0%{
    width: 35px;
  }
  30%{
    width: 45px;
  }
  50%{
    width: 40px;
  }
  100%{
    width: 35px;
  }
}

@keyframes buttonoff{
  0%{
    width: 35px;
  }
  30%{
    width: 45px;
  }
  50%{
    width: 40px;
  }
  100%{
    width: 35px;
  }
}
</style>
