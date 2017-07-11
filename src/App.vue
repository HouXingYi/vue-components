<template>
  <div id="app">
    <div class="side-nav">
      <ul>
        <li class="item"><router-link class="itemlink" to="/Hello">Hello</router-link></li>
        <li class="item"><router-link class="itemlink" to="/Radio">Radio组件</router-link></li>
      </ul>
    </div>   
    <div class="cBody">
      <span class="topTitle">vue组件</span><br>
      <span class="descrip">平常一些常用的组件，慢慢积累</span>
      <router-view></router-view><!-- 路由匹配到的组件将渲染在这里 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" >
  #app{
    .side-nav{
      position: absolute;
      top: 0;
      left: 0;
      bottom:0;
      width: 300px; 
      color: #364149;
      background: #fafafa;
      border-right: 1px solid rgba(0,0,0,.07);
      li.item{
        height: 40px;
        line-height: 40px;
        padding-left: 20px;
        border-bottom: 1px solid rgba(0,0,0,.07);
        .itemlink{
          display: block;
          text-decoration: none;
          color: #364149;
          &.router-link-active{
            color: #42b983;
          }
        }
      } 
    }
    .cBody{
      position: absolute;
      top: 0;
      right: 0;
      left: 300px;
      bottom: 0;
      color: #000;
      background: #fff;
      padding: 20px;
      text-align: center;
      .topTitle{
        font-size: 30px;
        font-weight: bold;
      }
      .descrip{
        display: block;
        margin-bottom: 20px;
      }
    }
  }
</style>
