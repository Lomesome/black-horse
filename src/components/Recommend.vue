<template>
  <div>
    <div class="title">
      <span class="title-text">
        推荐信息
      </span>
    </div>
    <div class="products">
      <hover-box v-for="item in productlist" :key="item.name" style="float:left;" src="" :attr="item"></hover-box>
    </div>
  </div>
</template>

<script>
import HoverBox from "./HoverBox";
export default {
  name: "Recommend",
  components:{
    HoverBox,
  },
  data() {
    return {
      productlist: [
        {
          name: 'HUAWEI MateView',
          img: 'static/image/huawei/mateview_cn.jpg',
          width: 920,
          introduce: '无线·原色显示器',
          path: '#'
        },
        {
          name: 'HUAWEI FreeBuds 4 无线耳机',
          img: 'static/image/huawei/freebuds_4_cn.jpg',
          width: 444,
          introduce: '轻盈舒适，独享好声音',
          path: '#'
        },
        {
          name: 'HUAWEI MatePad Pro',
          img: 'static/image/huawei/matepad_pro_cn2.jpg',
          width: 920,
          introduce: '创造无界',
          path: '#'
        },
        {
          name: 'HUAWEI MateBook 16',
          img: 'static/image/huawei/matebook_16_cn.jpg',
          width: 444,
          introduce: '大显本色',
          path: '#'
        }

      ],
    }
  }
}
</script>

<style scoped>

.title{
  width: 100%;
  text-align: center;
  margin: 60px 0;
}

.title-text{
  padding-bottom: 10px;
  position: relative;
  font-weight: 800;
  font-size: 40px;
}

.title-text:after{
  position: absolute;
  content: '';
  width: 40px;
  height: 2px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  background-color:orangered;
  font-weight:bold;
}

.products{
  position: absolute;
  left: 100px;
}


</style>
