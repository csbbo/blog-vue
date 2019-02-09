<template>
<div class="nav">
<div class="head">
    <div class="avatar">
        <router-link to="/"><img src="../assets/images/avatar.jpg" alt="myavatar"></router-link>
    </div>
    <div class="username">
        <router-link to="/profile"><span>csbbo</span></router-link>
    </div>
</div>
<div class="daliy">
    <p>{{daliy.content}}</p> 
    <hr class="daliy_note" @click="show_note()">
    <ul>
        <li><router-link to="/">我的主页</router-link></li>
        <li><router-link to="/friends">友情链接</router-link></li>
        <li><router-link to="/list">所有文章</router-link></li>
    </ul>
    <hr>
    <div class="application">
        <a href="https://github.com/csbbo" target="_blank"><img src="../assets/images/link_application/github.jpg" alt="github"></a>
        <a href="https://www.zhihu.com/people/csbo-bochex/" target="_blank"><img src="../assets/images/link_application/zhihu.jpg" alt="zhihu"></a>
        <a href="https://twitter.com/GCVVXX" target="_blank"><img src="../assets/images/link_application/twitter.jpg" alt="twitter"></a>
    </div>
</div>
<div class="tags" style="opacity: 1; display: block; transform: initial;">
    <div class="tag-head">
        <div class="input">
            <input ref="search" @keyup.enter="search()" type="text">
            <div @click="search()" class="input-search">
                <i class="material-icons">search</i>
            </div>
        </div>
    </div>
    <div class="tag-items">
        <ul>
            <li @click="tagSearch(tag.name)" v-for="tag in tags" :key="tag" class="shake-slow">
                <i :class="tagSize[Math.round(Math.random()*10)%7]">
                    <a>{{tag.name}}</a>
                </i>
            </li>
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
            <li v-for="item in website" :key="item.id">
                <a target="_blank" :href="item.url">{{item.name}}</a>
            </li>
        </ul>
    </div>
</div>
<!-- fixed -->
<transition name="note">
<div v-show="daliy_show" class="fixed">
<div class="title">每日一句译文</div>
<div class="content">{{daliy.note}}</div>
<button @click="daliy_show=!daliy_show">确定</button>
</div>
</transition>
</div>
</template>

<script>
/* eslint-disable */
export default {
    data(){
        return{
            tags:[],
            website:[],
            daliy:{},
            daliy_show:false,
            tagSize:["s0","s1","s2","s3","s4","s5","s6"],
        }
    },
    created: function(){
        this.get_jingshan_daliy()
        this.get_tags()
        this.get_website()
        this.get_weather()

        // 接口彩蛋
        console.log("金山词霸API")
        console.log("http://open.iciba.com/dsapi/")
        console.log("和风天气API")
        console.log("https://free-api.heweather.net/s6/weather/forecast?parameters")
        console.log("和风天气首页https://www.heweather.com/")
        console.log("用户名shaobo@foxmail.com")
        console.log("百度IP查询接口")
        console.log("http://api.map.baidu.com/location/ip?ak=4B276MB7K1r4kI85zWmNKYvzVq5aNBz4&coor=bd09ll")
    },
    methods: {
        get_jingshan_daliy(){
            var url = "http://open.iciba.com/dsapi/"
            this.$jsonp(url).then(json=>{
                this.daliy = json
            }).catch(err=>{})
        },
        get_tags(){
            var url = this.GLOBAL.host + "/tags"
            this.$http({
                url:url,
                methods:'GET',
            }).then(function(res){
                this.tags = res.body
            },function(err){})
        },
        get_website(){
            var url = this.GLOBAL.host + "/website"
            this.$http({
                url:url,
                methods:'GET',
            }).then(function(res){
                this.website = res.body
            },function(err){})
        },
        search(){
            if(this.$refs.search.value != ""){
                this.$router.push({
                    path: '/list',
                    query: {
                        search: this.$refs.search.value
                    }
                })
                this.$refs.search.value = ""
            }else{
                alert("搜索不能为空")
            }
        },
        tagSearch(tag){
            this.$router.push({
                path: '/list',
                query: {
                    tag: tag
                }
            })
        },
        show_note(){
            this.daliy_show = true
        },
    }
}
</script>


<style scoped>

/*  */
.daliy,.main-items,.tags,.extension,.website{
    background-color: #ffffff;
}
.head{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px 25px;
    background-color: #4d4d4d;
    box-shadow: 1px 1px 1px #999;
    justify-content: space-around;
}
.head .avatar img{
    width: 66px;
    border-radius: 100%;
}
.head .username{
    display: flex;
    justify-content: center;
    align-items: center;
}
.head .username a{
    text-decoration: none;
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
    box-shadow: 1px 1px 1px #bbb;
}
.daliy p{
    margin: 0%;
}
.daliy .daliy_note:hover{
    border: 1px solid #555;
}
.daliy ul{
    margin: 0%;
    list-style: none;
    padding: 0%;
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
    text-decoration: none;
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
    height: 30px;
}
.daliy .application a img{
    width: 25px;
    border-radius: 100%;
    transition:width 0.1s;
    -webkit-transition:width 0.1s;
}
.daliy .application a img:hover{
    width: 32px;
}
/* tags */
.tags{
    box-shadow: 1px 1px 1px #bbb;
}
.tags .tag-head{
    padding: 5px;
    font-size: 15px;
    text-align: center;
    color: #222;
    font-weight: 600;
    margin-top: 20px;
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
    /* font-size: 15px; */
    margin: 3px 2px;
}
.tag-items ul li i a{
    color: #999;
    padding-bottom: 2px;
}
.tag-items ul li i a:hover{
    border-bottom: 1px solid #999;
    color: #000;
}
/* website */
.website{
    margin-top: 20px;
    box-shadow: 1px 1px 1px #bbb;
}
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
    list-style: none;
}
.website .website-item ul li{
    background-color: #777;
    padding: 2px;
    margin: 2px;
    height: 20px;
    line-height: 26px;
    transition: background-color 1s;
    -webkit-transition: background-color 1s;
}
.website .website-item ul li:hover{
    background-color: #222;
}
.website .website-item ul li a{
    color: #ffffff;
    text-decoration: none;
}
.fixed{
    position: fixed;
    top: 0%;
    left: 36%;
    width: 28%;
    background-color: #ffffff;
    box-shadow: 1px 1px 1px #ccc;
    padding: 10px;
    font-size: 15px;
    border: 1px solid #ccc;
}
.fixed .title{
    border-bottom: 1px solid #ccc;
    padding: 2px;
}
.fixed .content{
    padding: 2px;
    padding-top: 8px;
}
.fixed button{
    float: right;
    width: 55px;
    border: none;
    outline: none;
    transition:background-color 1s;
	-webkit-transition:background-color 1s;
}
.fixed button:hover{
    background-color: #555;
    color: #ffffff;
}
.note-enter-active, .note-leave-active {
  transition: opacity 1s;
}
.note-enter, .note-leave-to{
  opacity: 0;
}
</style>
