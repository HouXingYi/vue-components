<template>
  <div id="app">
    <div class="top">
      <span class="topTitle">vue组件</span><br>
      <span class="descrip">平常一些常用的组件，慢慢积累</span>
    </div>
    <div class="nav">
      <ul>
        <li class="item"><router-link to="/Hello">Hello</router-link></li>
        <li class="item"><router-link to="/Radio">Radio</router-link></li>
      </ul>
    </div>   
    <router-view></router-view><!-- 路由匹配到的组件将渲染在这里 -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" >

body{
  background: rgb(221, 221 , 221);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .top{
    height: 100px;
    .topTitle{
      font-size: 35px;
      font-weight: bold;
    }
    .descrip{
      line-height: 30px;
    }
  }
  .nav{
    ul{
      display: flex;
      margin: 0;
      padding: 0;
      background: #000;
      li.item{
        list-style-type: none;
        flex-grow: 1;
        height: 50px;
        border-right: 1px solid #e5e5e5;
        text-align: center;
        &:hover{
          background: #fff;
          a{
            color: #000;
          }
        }
        a{
          display: block;
          height: 50px;
          line-height: 50px;
          color: #fff;
        }
      }
    }
  }
}
</style>
