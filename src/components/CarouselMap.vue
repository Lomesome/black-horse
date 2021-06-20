<template>
  <div class="lunbo" @mouseleave="onMouseLeave" @mouseenter="onMouseEnter">
    <img
      alt="left"
      src="static/image/arrow-left.png"
      class="arrow left"
      @click="left"
    />
    <div
      class="item"
      v-for="(item, idx) in list"
      :key="idx"
      :style="`
        left: ${ calPos(idx) }px;
        z-index: ${ calPos(idx) === 0 ? 999 : 0 };
      `">
      <img :src="item.img"/>
    </div>
    <img
      alt="right"
      src="static/image/arrow-right.png"
      class="arrow right"
      @click="right"/>
  </div>
</template>

<script>

let timer = null;
let clickable = true;

export default {
  name: "CarouselMap",
  data() {
    return {
      list: [
        {
          img: 'static/image/huawei/vmall-618.jpg',
        },
        {
          img: 'static/image/huawei/hwcloud-618-2.jpg',
        },
        {
          img: 'static/image/huawei/hwcloud-618-2.jpg',
        },
      ],
      count: 9999,
    }
  },
  methods: {
    calPos(index) {
      return (1920 * index - 1920 * this.count - 1920) % (1920 * this.list.length) + 1920
    },
    left() {
      if (clickable){
        this.count++;
        this.setClickaAble();
      }
    },
    right() {
      if (clickable){
        this.count--;
        this.setClickaAble();
      }
    },
    onMouseLeave() {
      this.creatTimer()
    },
    onMouseEnter() {
      clearInterval(timer)
    },
    setClickaAble(){
      clickable = false;
      setTimeout(()=>{
        clickable = true;
      },2000)
    },
    creatTimer() {
      timer = setInterval(() => {
        this.count++;
      }, 2000)
    }
  },
  computed: {

  },
  mounted() {
    this.creatTimer()
  }
}
</script>

<style scoped>
.lunbo {
  height: 647px;
  width: 1680px;
  top: 66px;
  position: relative;
  overflow: hidden;
}

.lunbo:hover .arrow{
  display: block;
}

.item {
  height: 200px;
  width: 300px;
  text-align: center;
  line-height: 200px;
  font-size: 100px;
  font-weight: bold;
  position: absolute;
  transition: .5s linear;
  background: white;
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
