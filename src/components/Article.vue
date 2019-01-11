<template>
    <div class="article">
        <div class="content">
        <div class="head">
            <div class="title">
                esp8266 & 舵机
            </div>
            <div class="cal">
                <i class="material-icons">date_range</i>
                <span>2019-1-10</span>
            </div>
        </div>
        <div class="body">
            <vue-markdown>{{article}}</vue-markdown>
        </div>
        <hr>
        <div class="tail">
            <div class="tags">
                <i class="material-icons">loyalty</i>
                <div class="tag">jQuery</div>
                <div class="tag">jQuery</div>
                <div class="tag">jQuery</div>
                <div class="tag">jQuery</div>
            </div>
        </div>
        </div>
        <div class="switch-article">
            <div class="left-article">
                <i class="material-icons">arrow_back</i>
                <span>jQuery</span>
            </div>
            <div class="right-article">
                <span>shadowsocks</span>
                <i class="material-icons">arrow_forward</i>
            </div>
        </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
    data(){
        return{
            title: "",
            cal: "",
            article: "###### chen",
            tag: []
        }
    },
    components: {
        "vue-markdown":VueMarkdown
    }
}
</script>

<style scoped>
.content{
    background-color: #ffffff;
}
.head{
    border-left: 5px solid #444;
    padding: 20px 40px;
    overflow: hidden;
    color: #696969;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.head .title{
    font-size: 30px;
}
.head .cal{
    display: flex;
    flex-direction: row;
    padding-top: 10px;
}
.head .cal span{
    margin-left: 5px;
}
.body{
    padding: 10px 40px;
}
hr{
    margin: 0% 40px;
}
.tail{
    padding: 20px 40px;
}
.tail .tags{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.tail .tags .tag{
    background-color: #cc8167;
    margin: 0% 2px;
    margin-top: 3px;
    font-size: 12px;
    height: 18px;
    padding: 0% 4px;
    /* border-top-left-radius: 10px;
    border-bottom-left-radius: 10px; */
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    color: #ffffff;
}
.switch-article{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.left-article,.right-article{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #000;
}
.left-article:hover,.right-article:hover{
    color: #08c;
}
</style>
