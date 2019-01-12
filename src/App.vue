<template>
  <div id="app">
    <div class="content">
        <div class="left-nav">
            <app-nav></app-nav>
        </div>
        <div class="right-content">
            <div class="router-view">
                <router-view></router-view>
            </div>
        </div>
    </div>
    <div class="copyright">
        <div class="left shake-chunk">© 2019  csbbo</div>
        <div class="right shake-chunk">New blog imitate Hexo</div>
    </div>
    <div class="back-top">
        <a href="#"><i class="material-icons">keyboard_arrow_up</i></a>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'app',
  components: {
      "app-nav":Nav
  }
}
</script>

<style>
body{
    background-color: #e0e0e08e;
}
</style>

<style scoped>
#app{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
}
.content{
    display:flex;
    flex-direction: row;
    margin: 0% 10%;
}
.left-nav{
    width: 20%;
}
.right-content{
    width: 80%;
    margin-left: 20px;
    /* border:1px solid red; */
}
.copyright{
    color: #999;
    margin: 0% 30%;
    margin-bottom: 10px;
}

.back-top{
    background-color: #4242423f;
    width: 45px;
    height: 45px;
    position: fixed;
    bottom: 40px;
    right: 44px;
    transition:color 1s;
	-webkit-transition:background-color 1s; /* Safari */
}
.back-top:hover{
    background-color: #424242;
}
.back-top i{
    font-size: 45px;
    color: #ffffff;
}
</style>
