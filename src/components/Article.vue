<template>
    <div class="article">
        <div class="content">
            <div class="head">
                <div class="title">
                    {{article.title}}
                </div>
                <div class="cal">
                    <i class="material-icons">date_range</i>
                    <span>{{article.create_time}}</span>
                    <span>({{week[new Date(article.create_time).getDay()]}})</span>
                </div>
            </div>
            <div class="body md">
                <vue-markdown :html=true :xhtml-out=true :source="article.content"></vue-markdown>
            </div>
            <hr>
            <div class="tail">
                <div class="tags">
                    <i class="material-icons">loyalty</i>
                    <div @click="tagSearch(tag)" class="tag" :class="tagColor[Math.round(Math.random()*10)%6]" v-for="tag in article.tags" :key="tag" >
                        {{tag}}
                    </div>
                </div>
            </div>
        </div>
        <div class="switch-article">
            <div v-if="lastArticle.title" @click="getLastArticle()" class="left-article">
                <i class="material-icons">arrow_back</i>
                <span>{{lastArticle.title}}</span>
            </div>
            <div v-if="nextArticle.title" @click="getNextArticle()" class="right-article">
                <span>{{nextArticle.title}}</span>
                <i class="material-icons">arrow_forward</i>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import VueMarkdown from 'vue-markdown'
export default {
    data(){
        return{
            week:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
            article: "",
            lastArticle:{},
            nextArticle:{},
            tagColor:["c0","c1","c2","c3","c4","c5"],
        }
    },
    components: {
        "vue-markdown":VueMarkdown,
    },
    created: function(){
        this.getArticle()
    },
    methods:{
        getArticle(){
            var id = this.$route.query.id
            var url = this.GLOBAL.host + "/article/?id=" + id
            var re = /^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})\.(.*)$/
            var re_preview = /^([\s\S]*)<!--more-->([\s\S]*)$/
            this.lastArticle={}
            this.nextArticle={}
            this.$http({
                url:url,
                methods:'GET',
            }).then(function(res){
                this.article = res.body[0]
                this.article.create_time = re.exec(res.body[0].create_time)[1]
                if(re_preview.exec(res.body[0].content)!=null){
                    this.article.content = re_preview.exec(res.body[0].content)[1]+re_preview.exec(res.body[0].content)[2]
                }
            },function(err){})
            // 上一篇文章
            url = this.GLOBAL.host+"/article/?id="+(parseInt(id)+1)
            this.$http({
                url:url,
                methods:'GET',
            }).then(function(res){
                if(res.body.length != 0){
                    this.lastArticle = res.body[0]
                }
            },function(err){})
            // 下一篇文章
            url = this.GLOBAL.host+"/article/?id="+(parseInt(id)-1)
            this.$http({
                url:url,
                methods:'GET',
            }).then(function(res){
                if(res.body.length != 0){
                    this.nextArticle = res.body[0]
                }
            },function(err){})
        },
        getNextArticle(){
            this.$router.push({
                path: '/article',
                query: {
                    id: parseInt(this.article.id)-1
                }
            })
            this.getArticle()
        },
        getLastArticle(){
            this.$router.push({
                path: '/article',
                query: {
                    id: parseInt(this.article.id)+1
                }
            })
            this.getArticle()
        },
        tagSearch(tag){
            this.$router.push({
                path: '/list',
                query: {
                    tag: tag
                }
            })
        }
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
    padding-top: 5px;
}
.body{
    padding: 10px 40px;
    /* overflow-x: scroll; */
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
    margin: 0% 2px;
    margin-top: 3px;
    font-size: 12px;
    height: 18px;
    padding: 0% 4px;
    padding-top: 5px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    color: #ffffff;
}
.tail .tags .tag:hover{
    box-shadow: 1px 1px 1px #aaa;
}
.tail .tags .tag::before{
    content: " ";
    background-color: #fff;
    border-radius: 100%;
    height: 5px;
    width: 5px;
    float: left;
    margin-top: 4px;
    margin-right: 5px;
}
.switch-article{
    margin-top: 20px;
    overflow: hidden;
}
.left-article,.right-article{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #000;
    height: 25px;
    line-height: 30px;
}
.left-article{
    float: left;
}
.right-article{
    float: right;
}
.left-article:hover,.right-article:hover{
    color: #08c;
}
</style>