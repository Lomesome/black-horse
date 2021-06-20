import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/views/Index";
import Day1 from "@/views/day1/day1"
import Day2 from "@/views/day2/day2"
import Day3 from "@/views/day3/day3"
import HuaWeiIndex from "@/views/day3/huawei/Index"
import Day5 from "@/views/day5/day5"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Clock',
      component: Index
    },{
      path: '/day1',
      name: 'day1',
      component: Day1
    },{
      path: '/day2',
      name: 'day2',
      component: Day2
    },{
      path: '/day3',
      name: 'day3',
      component: Day3,
    },{
      path: '/huawei',
      name: 'huawei',
      component: HuaWeiIndex
    },{
      path: '/day5',
      name: 'day5',
      component: Day5
    }
  ]
})
