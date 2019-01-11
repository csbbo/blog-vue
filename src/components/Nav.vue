<template>
<div class="nav">
<div class="head">
    <div class="avatar">
        <router-link to="/"><img src="https://avatars1.githubusercontent.com/u/35909137?s=400&u=9dd8afe3ff9acc78ea474b5d54e879ee5a50e75c&v=4" alt="myavatar"></router-link>
    </div>
    <div class="username">
        <router-link to="/profile"><span>csbbo</span></router-link>
        
    </div>
</div>
<div class="daliy">
    <span>
        要站在人类大多数的一边才不会被看作异类，遵循人们生活规律的轨迹才会被人类社会容纳。
    </span> 
    <hr>
    <ul>
        <li><router-link to="/">我的主页</router-link></li>
        <li><router-link to="/friends">友情链接</router-link></li>
        <li><router-link to="/list">所有文章</router-link></li>
        <!-- <li><a href="">我的主页</a></li>
        <li><a href="">个人简介</a></li>
        <li><a href="">友情链接</a></li>
        <li><a href="">所有文章</a></li> -->
    </ul>
    <hr>
    <div class="application">
        <a href="https://github.com" target="_blank"><img src="../assets/images/link_application/github.jpg" alt="github"></a>
        <a href="https://github.com" target="_blank"><img src="../assets/images/link_application/zhihu.jpg" alt="github"></a>
        <a href="https://github.com" target="_blank"><img src="../assets/images/link_application/twitter.jpg" alt="github"></a>
    </div>
</div>
<div class="tags" style="margin-top:20px;">
    <div class="tag-head">
        <div class="input">
            <input type="text">
            <div class="input-search">
                <i class="material-icons">search</i>
            </div>
        </div>
    </div>
    <!-- <hr> -->
    <div class="tag-items">
        <ul>
            <li class="shake-slow"><i><a href="">Django</a></i></li>
            <li class="shake-slow"><i><a href="" style="font-size:30px">MQTT</a></i></li>
            <li class="shake-slow"><i><a href="" style="font-size:10px">Django</a></i></li>
            <li class="shake-slow"><i><a href="" style="font-size:20px">Nginx</a></i></li>
            <li class="shake-slow"><i><a href="" style="font-size:5px">Django</a></i></li>
            <li class="shake-slow"><i><a href="">Django</a></i></li>
            <li class="shake-slow"><i><a href="" style="font-size:30px">MQTT</a></i></li>
            <li class="shake-slow"><i><a href="" style="font-size:10px">Django</a></i></li>
            <li class="shake-slow"><i><a href="" style="font-size:20px">Nginx</a></i></li>
            <li class="shake-slow"><i><a href="" style="font-size:5px">Django</a></i></li>
            <li class="shake-slow"><i><a href="">Django</a></i></li>
            <li class="shake-slow"><i><a href="" style="font-size:30px">MQTT</a></i></li>
            <li class="shake-slow"><i><a href="" style="font-size:10px">Django</a></i></li>
            <li class="shake-slow"><i><a href="" style="font-size:20px">Nginx</a></i></li>
            <li class="shake-slow"><i><a href="" style="font-size:5px">Django</a></i></li>
            <li class="shake-slow"><i><a href="">Django</a></i></li>
            <li class="shake-slow"><i><a href="" style="font-size:30px">MQTT</a></i></li>
            <li class="shake-slow"><i><a href="" style="font-size:10px">Django</a></i></li>
            <li class="shake-slow"><i><a href="" style="font-size:20px">Nginx</a></i></li>
            <li class="shake-slow"><i><a href="" style="font-size:5px">Django</a></i></li>
        </ul>
    </div>
</div>
<div class="extension">
    <div class="extension-head">
        Extension
    </div>
    <hr>
    <div class="extension-item">
        <ul>
            <li><a href="">有道minQ</a></li>
            <li><a href="">calculator</a></li>
            <li><a href="">MQTT控制台</a></li>
            <li><a href="">入侵检测警报系统</a></li>
        </ul>
    </div>
</div>
<div class="website">
    <div class="website-head">
        Website
    </div>
    <hr>
    <div class="website-item">
        <ul>
            <li><a href="">有道minQ</a></li>
            <li><a href="">calculator</a></li>
            <li><a href="">MQTT</a></li>
            <li><a href="">入侵检测警报系统</a></li>
        </ul>
    </div>
</div>
</div>
</template>

<style scoped>

/*  */
/* .nav{
    padding-bottom: 20px;
} */
.daliy,.main-items,.tags,.extension,.website{
    background-color: #ffffff;
}
.head{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px 25px;
    padding-right: 5px;
    background-color: #4d4d4d
}
.head .avatar img{
    width: 66px;
    border-radius: 100%;
}
.head .username{
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.head .username span{
    color: #e0e0e0;
    font-size: 30px;
}
.head .username span:hover{
    color: #ffffff;
}
.daliy{
    padding: 10px 20px;
    color: #999;
}
.daliy ul{
    margin: 0%;
}
.daliy ul li:hover{
    background-color: rgba(153, 153, 153, 0.404);
}
.daliy ul li:visited{
    background-color: rgba(153, 153, 153, 0.404);
}
.daliy ul li a{
    display: block;
    width: 100%;
    color: #888;
    padding: 4px 2px;
}
.daliy ul li a:hover:after{
    content: " ";
    background-color: #555;
    border-radius: 100%;
    height: 6px;
    width: 6px;
    float: right;
    margin-top: 8px;
    margin-right: 5px;
}
.daliy .application{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0% 10%;
    margin-top: 10px;
}
.daliy .application a img{
    width: 25px;
    border-radius: 100%;
}
.daliy .application a img:hover{
    box-shadow: 1px 1px 1px #999;
}
/* tags */
.tags .tag-head{
    padding: 5px;
    font-size: 15px;
    text-align: center;
    color: #222;
    font-weight: 600;
}
.tags .tag-head .input{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border: 1px solid #999;
    height: 25px;
    margin: 5px 3%;
    border-radius: 12px;
}
.tags .tag-head .input input{
    height: 22px;
    margin-left: 5%;
    width: 80%;
    outline: none;
    border: none;
    text-decoration: none;
}
.tags .tag-head .input .input-search{
    width: 10%;
    margin-right: 1%;
}
.tag-items ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    color: #e0e0e0;
    margin-top: 0px;
    padding-left: 10px;
    padding-bottom: 5px;
}
.tag-items ul li{
    padding: 0% 3px;
}
.tag-items ul li i a{
    color: #999;
    padding-bottom: 2px;
}
.tag-items ul li i a:hover{
    border-bottom: 1px solid #999;
    color: #000;
}
/* extension */
.extension{
    padding: 0px 10px;
    padding-bottom: 0px;
    text-align: center;
}
.extension .extension-head{
    padding: 5px;
    font-size: 15px;
    color: #222;
    font-weight: 600;
}
.extension hr{
    margin: 0% 10%;
}
.extension .extension-item ul{
    padding: 0% 22%;
    margin-top: 5px;
    padding-bottom: 10px;
}
.extension .extension-item ul li{
    padding: 2px 5px;
}
.extension .extension-item ul li a:hover{
    color: #000;
}
.extension .extension-item ul li a{
    color: #555;
    padding-bottom: 2px;
    border-bottom: 1px solid #444;
}
/* website */
.website .website-head{
    padding: 5px;
    font-size: 15px;
    text-align: center;
    color: #222;
    font-weight: 600;
}
.website hr{
    margin: 0% 10%;
}
.website .website-item ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px 0%;
    padding-left: 10px;
    padding-bottom: 10px;
}
.website .website-item ul li{
    background-color: #bbb;
    padding: 2px;
    margin: 2px;
}
.website .website-item ul li:hover{
    box-shadow:2px 2px 1px #999;
}
.website .website-item ul li a{
    color: #555;
}
.website .website-item ul li a:hover{
    color: #222;
}
</style>
