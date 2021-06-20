<template>
  <div>
<!--    <son :msg="msg" :callback="fromSon" @my-func="showSon"></son>-->
<!--    <div> {{ fromsonmsg1 }} </div>-->
<!--    <div> <span v-for="item in fromsonmsg2" :key="item">  {{ item }} </span> </div>-->
<!--    <div class="big-box">-->
<!--      <DeleteBox :index="item" v-for="item in 5" :key="item"></DeleteBox>-->
<!--    </div>-->
  <my-table :data="list"></my-table>

  </div>
</template>

<script>
import Son from "@/components/Son";
import DeleteBox from "@/components/DeleteBox";
import MyTable from "@/components/MyTable";
export default {
  name: "day3",
  components: {
    Son,
    DeleteBox,
    MyTable,
  },
  data() {
    return {
      msg: 'hello son',
      fromsonmsg1: '',
      fromsonmsg2: '',
      list: [
        {
          index: 1,
          content: 'this is 1',
        },
        {
          index: 2,
          content: 'this is 2',
        },
        {
          index: 3,
          content: 'this is 3',
        },
      ]
    }
  },
  methods:{
    fromSon(msg) {
      this.fromsonmsg1 = msg;
    },
    showSon(...args) {
      this.fromsonmsg2 = args
    }
  }
}
</script>

<style scoped>
.big-box{
  width: 400px;
  border: 2px solid red;
  border-radius: 5px;
}


</style>
