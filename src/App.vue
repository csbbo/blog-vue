<template>
<div id="app">
<div class="content">
    <div class="left-nav">
        <app-nav></app-nav>
    </div>
    <app-stickypage></app-stickypage>
    <div class="right-content">
        <div class="router-view">
            <router-view></router-view>
        </div>
        <div class="copyright">
            <div>© 2019  csbbo</div>
        </div>
    </div>
</div>
<!-- fixed page -->
<app-fixedpage></app-fixedpage>
</div>
</template>

<script>
import Nav from './components/Nav.vue'
import FixedPage from './components/FixedPage'
import StickyPage from './components/StickyPage'
export default {
  name: 'app',
  data(){
      return{

      }
  },
  components: {
      "app-nav":Nav,
      "app-fixedpage":FixedPage,
      "app-stickypage":StickyPage
  }
}
</script>

<style>
@import url("./assets/css/markdown.css");
@import url("./assets/css/material-icons/material-icons.css");
@import url("./assets/css/csshake.min.css");
body{
    background-color: #eee;
}
*{
    padding: 0%;
    margin: 0%;
}
.c0{
    background-color: #cc8167
}
.c1{
    background-color: #ba8f6c;
}
.c2{
    background-color: rgb(151, 142, 142)
}
.c3{
    background-color: rgba(0, 136, 204, 0.616)
}
.c4{
    background-color: #21227c98
}
.c5{
    background-color: #94635c
}
.s0{
    font-size: 15px;
}
.s1{
    font-size: 25px;
}
.s2{
    font-size: 15px;
}
.s3{
    font-size: 20px;
}
.s4{
    font-size: 20px;
}
.s5{
    font-size: 15px;
}
.s6{
    font-size: 10px;
}
</style>

<style scoped>
.content{
    margin: 0 10%;
}
.left-nav{
    width: 216.16px;
    float: left;
}
.right-content{
    margin-left: 216.16px;
    padding-left: 20px;
}
.copyright{
    color: #999;
    padding-top:40px;
    margin-bottom: 10px;
    text-align: center;
    /* clear: both; */
}
</style>
