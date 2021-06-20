<template>
  <div class="navbar">
    <div class="container">
      <img src="static/image/huawei/huawei_logo.png" class="logo" alt="logo"/>
      <div class="navbar-menu">
          <div
            v-for="item in menulist"
            :key="item.name"
            class="menu-item"
          >
            <a
              :href="item.path"
              class="menu-a"
            >
              {{item.name}}
            </a>
          </div>
      </div>
      <div class="nav-right">
        <div class="buy">
          <img src="static/image/huawei/bag.png" class="buy-img" alt="buy-img"/>
          <span class="buy-text">在线购买</span>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menulist: [
        {
          name: '个人及家庭产品',
          path: '',
        },
        {
          name: '商用产品及方案',
          path: '',
        },
        {
          name: '服务支持',
          path: '',
        },
        {
          name: '合作伙伴与开发者',
          path: '',
        },
        {
          name: '关于华为',
          path: '',
        },
      ]
    }
  }
}
</script>

<style scoped>
.navbar{
  z-index: 99999;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 66px;
  background-color: #fff;
}

.container{
  /*position: relative;*/
}

.logo{
  position: absolute;
  width: 133px;
  top: 50%;
  transform: translateY(-50%);
  left: 60px;
}

.menu{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  list-style-type: none;
}

.navbar-menu{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

.menu-item{
  position: relative;
  float: left;
  height: 66px;
  text-align: center;
  margin: 0 15px;
}

.menu-item:hover:after{
  position: absolute;
  content: '';
  width: 100%;
  height: 1px;
  left: 0px;
  background-color:orangered;
  font-weight:bold;
}

.menu-a{
  display: block;
  line-height: 66px;
  height: 66px;
  text-decoration: none;
  font-size: 18px;
  color: #000000;
}

.nav-right{
  text-align: center;
  position: absolute;
  right: 200px;
  height: 66px;
  line-height: 66px;
}

.buy-img{
  width: 21px;
  margin: 0 auto;
  Vertical-align:  middle;
}

.buy-text{
  font-size: 17px;
}
</style>
