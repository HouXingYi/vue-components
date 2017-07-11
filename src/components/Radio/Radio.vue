<template>
  <div class="Radio">
    <br>
    <Radio class="radio" v-model="rad" label="大众1">大众</Radio>
    <Radio class="radio" v-model="rad" label="丰田2">丰田</Radio>
    <Radio class="radio" v-model="rad" label="本田3">本田</Radio>
    <Radio class="radio" v-model="rad" label="奥迪4">奥迪</Radio>
    <Radio class="radio" v-model="rad" label="宝马5">宝马</Radio>
    <div class="check">现在"radio"的值是 {{rad}}</div>
  </div>
</template>

<script>

import Radio from 'commonC/radio/main'

export default {
  data () {
    return {
      rad : "未选择"
    }
  },
  watch :{
    rad : function(val,oldVal){
      console.log(val,oldVal);
    }
  },
  components : {
    Radio
  }
}
</script>

<style scoped lang="scss">
  .title{
    font-size: 30px;
  }
  .Radio{
    padding-top: 10px;
  }
</style>
