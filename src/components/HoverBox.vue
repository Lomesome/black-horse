<template>
  <a :href="attr.path">
    <div class="product" :style="`width:${attr.width}px`">
      <img
        src="static/image/huawei/mask_grad.png"
        class="mask_grad"
      >
      <img
        :src="attr.img"
        class="product-img"
        :style="`width:${attr.width}px`"
      >
      <div class="product-text">
        <div style="font-size: 18px;font-weight: lighter">产品</div>
        <div style="font-size: 26px;font-weight: bold">{{ attr.name }}</div>
        <div>{{ attr.introduce }}</div>
        <div class="learn-more">
          <span class="learn-more-text" >了解更多</span>
          <img
            alt=""
            src="static/image/arrow-right.png"
            class="arrow-img"
          >
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "HoverBox",
  props: {
    attr: Object
  },
}
</script>

<style scoped>
.product-text{
  position: absolute;
  bottom: 0;
  padding: 20px;
  /*margin: 20px;*/
  transition: .2s linear;
  color: #fff;
  z-index: 9999;
  width: 100%;
}

.product:hover .product-text{
  bottom: 30px;
}

.product:hover .learn-more-text{
  color: rgba(255, 255, 255, 1);
}

.learn-more-text{
  position: absolute;
  bottom: -20px;
  font-weight: 800;
  color: rgba(255, 255, 255, 1);
  transition: .2s linear;
}

.product{
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin: 20px;
}

.product-img{
  vertical-align: bottom;
  transition: .3s linear;
}
.product:hover .product-img{
  transform: scale(1.1);
}

.product:hover .mask_grad{
  z-index: 999;
  opacity: 1;
}

.product:hover .arrow-img{
  opacity: 1;
}

.mask_grad{
  vertical-align: bottom;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.3;
  z-index: 999;
}

.arrow-img{
  width: 15px;
  position: absolute;
  bottom: -16px;
  left: 90px;
  opacity: 0;
  transition: .1s linear;
}

.learn-more:hover .arrow-img{
  left: 100px;
}
</style>
