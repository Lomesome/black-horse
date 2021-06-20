<template>
  <div class="carousel" @mouseleave="onMouseLeave" @mouseenter="onMouseEnter">
    <transition-group tag='ul' class="clearfix slide" name='image'>
      <li v-for='(image,index) in img' :key='image' v-show='index===mark'>
        <a><img :src="image" alt=""></a>
      </li>
    </transition-group>
    <img
      alt="left"
      src="static/image/arrow-left.png"
      class="arrow left"
      @click="left"
    />
    <img
      alt="right"
      src="static/image/arrow-right.png"
      class="arrow right"
      @click="right"
    />
    <div class="bullet">
      <div v-for='(item,index) in img.length' class="progress-bar" @click='change(index)'>
        <div class="progress" :class="{'active':index===mark}"></div>
      </div>
    </div>
  </div>
</template>

<script>
let timer = null;
let clickable = true;
export default {
  name: "Carousel",
  data() {
    return {

      mark: 0,
      img: [
        'static/image/huawei/vmall-618.jpg',
        'static/image/huawei/hwcloud-618-2.jpg',
        'static/image/huawei/love-passon2.jpg'
      ]
    }
  },
  methods: {
    left() {
      if (clickable) {
        this.go()
        this.setClickaAble();
      }
    },
    right() {
      if (clickable) {
        this.back()
        this.setClickaAble();
      }
    },
    onMouseLeave() {
      this.play()
    },
    onMouseEnter() {
      clearInterval(timer)
    },
    change(i) {
      if (clickable) {
        this.mark = i
        this.setClickaAble();
      }
    },
    setClickaAble() {
      clickable = false;
      setTimeout(() => {
        clickable = true;
      }, 2000)
    },
    go() {
      this.mark++
      console.log(this.mark)
      if (this.mark === this.img.length) {
        this.mark = 0
      }
    },
    back() {
      this.mark--
      console.log(this.mark)
      if (this.mark === -1) {
        this.mark = this.img.length - 1
      }
    },
    play() {
      timer = setInterval(this.go, 5000)
    }
  },
  mounted() {
    this.play()
  },
}
</script>

<style scoped>
li {
  list-style: none;
}

ul {
  padding: 0;
}

.clearfix {
  content: '';
  clear: both;
  display: block;
}

.carousel {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.slide {
  width: 100%;
  height: 551px;
}

li {
  position: absolute
}

img {
  width: 100%;
}

.bullet {
  display: block;
  width: 100%;
  position: absolute;
  bottom: 10px;
  margin: 0 auto;
  text-align: center;
  z-index: 99999;
  color: transparent;
}

.progress-bar {
  cursor: pointer;
  width: 80px;
  height: 4px;
  border: 1px solid;
  border-radius: 5px;
  background: lightgray;
  display: inline-block;
  margin-right: 10px;
}

.progress {
  border-radius: 5px;
  width: 0;
  height: 4px;
  background-color: white;
  transition: 0s;
}

.active {
  width: 80px;
  transition: 5s linear;
}

.image-enter-active {
  transform: translateX(0);
  transition: all 1s ease;
}

.image-leave-active {
  transform: translateX(-100%);
  transition: all 1s ease;
}

.image-enter {
  transform: translateX(100%)
}

.image-leave {
  transform: translateX(0)
}

.carousel:hover .arrow,
.carousel:hover .bullet {
  display: block;
}

.arrow {
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: absolute;
  z-index: 9999;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(210, 210, 210, 0.4);
  border-radius: 50%;
  padding: 10px;
  display: none;
}

.left {
  left: 10px;
}

.right {
  right: 10px;
}

</style>
