<template>
  <div class="table" >
    <input
      v-model="addnum"
      class="num-input"
      @input="numChange"
      :style="`margin-bottom:${data.length === 0 ? 20 : 0}px`"
    />
    <button
      class="add-btn"
      @click="addBox"
    >
      add
    </button>
    <div style="clear:both;"></div>
    <div v-for="(item, index) in data"
         class="box"
    >
      <div class="index">
        {{ index }}
      </div>
      <input
        type="text"
        :value="item.content"
        class="content"
      />
      <button
        @click="deleteBox(index)"
        class="del-btn"
      >
        del
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTable",
  props:{
    data:Array
  },
  data() {
    return {
      addnum: 1,
    }
  },
  methods: {
    deleteBox(idx) {
      // this.list = this.list.filter((item, index) => {
      //   return index !== idx
      // })

      this.data.splice(idx, 1);
    },
    addBox() {
      for (let i = 0; i < this.addnum; i++) {
        this.data.push({
          index: this.data.length,
          content: 'this is ' + this.data.length,
        })
      }
    },
    numChange() {
      this.addnum = this.addnum.replace(/[^\d]/g, '')
    }
  }
}
</script>

<style scoped>
.table {
  position: relative;
  width: 340px;
  border-radius: 5px;
  border: 1px solid red;
}

.add-btn {
  float: right;
  margin: 20px 20px 0 0;
}

.num-input {
  float: left;
  margin: 20px 0 0 20px;
}

.box {
  position: relative;
  margin: 20px;
  line-height: 50px;
  border: 1px solid red;
  width: 300px;
  height: 50px;
}

.index {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
}

.del-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.content {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 30px;
}
</style>
