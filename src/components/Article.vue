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
            </div>
        </div>
        <div class="body">
            {{ article.content }}
            <!-- <vue-markdown>{{ article }}</vue-markdown> -->
        </div>
        <hr>
        <div class="tail">
            <div class="tags">
                <i class="material-icons shake-little">loyalty</i>
                <div @click="tagSearch(tag)" class="tag" v-for="tag in article.tags" :key="tag">
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
            article: {},
            lastArticle:{},
            nextArticle:{},
        }
    },
    components: {
        "vue-markdown":VueMarkdown
    },
    created: function(){
        this.getArticle()
    },
    methods:{
        getArticle(){
            var id = this.$route.query.id
            var url = this.GLOBAL.host + "/article/?id=" + id
            var re = /^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})\.(.*)$/
            this.lastArticle={}
            this.nextArticle={}
            this.$http({
                url:url,
                methods:'GET',
            }).then(function(res){
                this.article = res.body[0]
                this.article.create_time = re.exec(res.body[0].create_time)[1]
                console.log(res.body[0])
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
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    color: #ffffff;
}
.switch-article{
    margin-top: 20px;
}
.left-article,.right-article{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #000;
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
