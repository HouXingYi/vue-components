<template>
  <label class="co-radio">
    <span class="radio-input"
          :class="{
            'checked': model === label
          }">
      <span class="radio-inner"></span>
      <input type="radio" 
             class="radio-origin"
             :value="label"
             v-model="model"    
             >
    </span>
    <span class="radio-label">
      <slot></slot>
    </span>
  </label>
</template>

<script type="text/babel">
  
  export default {
    props: {
      label: {
        type: String
      },
      value:{}   //这个value就是父组件v-model的数据传过来
    },
    data() {
      return {
      };
    },
    computed: {
      model : {   //model绑定getter与setter
        get(){
          // console.log(this.value);
          return this.value;   //若返回的value与label相同，input(radio)就会被选中
                               //vue中v-model与input的value有绑定
        },
        set(val){
          // console.log(val);
          this.$emit('input', val); //发布,触发input事件//当input被选择的时候,将value传出去,
                                    //外部v-model接收到
        }
      }
    }

  };
</script>

<style scoped lang="scss">

  .co-radio{
    color: #1f2d3d;
    position: relative;
    cursor: pointer;
    display: inline-block;
    .radio-input{
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      &.checked{
        .radio-inner{
          border-color: #20a0ff;
          background: #20a0ff;
        }
        .radio-inner::after{
          transform: translate(-50%,-50%) scale(1);
        }
      }
      .radio-origin{
        opacity: 0;
        outline: none;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0;
      }
      .radio-inner{
        border: 1px solid #bfcbd9;
        border-radius: 100%;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
      }
      .radio-inner:after{
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(0);
        transition: transform .15s cubic-bezier(.71,-.46,.88,.6);
      }
    }
    .radio-label{
      font-size: 14px;
      padding-left: 5px;
    }
  }  

</style>
