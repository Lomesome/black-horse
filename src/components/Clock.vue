<template>
  <div class="clock">
    <div class="hour-number" v-for="item in 12" :key="item" :style="`transform:rotate(${30 * item + 181}deg)`">
      <div class="number">
        <div class="scale" :style="`transform:rotate(${-30 * item + 180}deg)`">
          {{item}}
        </div>
        <span style="top: 230px;position:absolute;">|</span>
      </div>
    </div>
    <div class="hour" :style="`transform:rotate(${30 * hour}deg)`"></div>
    <div class="minute" :style="`transform:rotate(${6 * minute}deg)`"></div>
    <div class="second" :style="`transform:rotate(${6 * second}deg)`"></div>
    <div class="point"></div>
  </div>
</template>

<script>
export default {
  name: "clock",
  data() {
    return {
      hour: '',
      minute: '',
      second: '',
      interval: null
    }
  },
  computed: {

  },
  mounted() {
    const that = this;
    const update = () => {
      const now = new Date();
      that.second = now.getSeconds();
      that.minute = now.getMinutes() + that.second / 60;
      that.hour = now.getHours() + that.minute / 60;
    }
    update();
    that.interval = setInterval(update, 1000);
  }
}
</script>

<style scoped>
.clock {
  width: 500px;
  height: 500px;
  margin: 0 auto;
  position: relative;
  border-radius: 50%;
  border: 1px solid black;
  background-color: transparent;
}

.clock > div {
  position: absolute;
}

.hour-number {
  position: relative;
  left: 50%;
  top: 50%;
}

.number{
  position: absolute;
  padding-top: 210px;
}

.scale{
  transform: translateX(-50%);
}

.point {
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.hour{
  background-color: blue;
  height: 100px;
  width: 6px;
  top: 150px;
  left: 247px;
  transform-origin: center 100px;
}

.minute{
  background-color: yellow;
  height: 150px;
  width: 4px;
  top: 100px;
  left: 248px;
  transform-origin: center 150px;
}

.second{
  background-color: green;
  height: 200px;
  width: 2px;
  top: 50px;
  left: 249px;
  transform-origin: center 200px;
}
</style>
