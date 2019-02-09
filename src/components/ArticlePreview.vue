<template>
    <div class="article-preview">
        <div v-for="article in articleList" :key="article.id" class="items">
            <div @click="getArticle(article.id)" class="head">
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
                <vue-markdown :source="article.content"></vue-markdown>
            </div>
            <hr>
            <div class="tail">
                <div class="tags">
                    <i class="material-icons">loyalty</i>
                    <div @click="tagSearch(tag)" v-for="tag in article.tags" :key="tag" class="tag" :class="tagColor[Math.round(Math.random()*10)%6]">
                        {{tag}}
                    </div>
                </div>
                <div class="show-all">
                    <span @click="getArticle(article.id)">展开全文</span>
                    <i class="material-icons">more_horiz</i>
                </div>
            </div>
        </div>
        <div class="paging">
            <ul>
                <li @click="getPage(page.article_num-1)" v-if="page.has_previous" class="switch_icon switch_icon_left"><i class="material-icons">chevron_left</i></li>
                <li @click="getPage(n)" v-for="n in page.num_pages" :key="n" :style="{background: n===page.article_num?'#1565c0':'none',color: n===page.article_num?'#ffffff':'#1565c0'}">{{n}}</li>
                <li @click="getPage(page.article_num+1)" v-if="page.has_next" class="switch_icon switch_icon_right"><i class="material-icons">chevron_right</i></li>
            </ul>
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
            page:{},
            articleList: [],
            tagColor:["c0","c1","c2","c3","c4","c5"],
        }
    },
    components: {
        "vue-markdown":VueMarkdown,
    },
    created: function(){
        this.getPage(1)
    },
    methods: {
        getArticle(id){
            this.$router.push({
                path: '/article',
                query: {
                    id: id
                }
            })
        },
        tagSearch(tag){
            this.$router.push({
                path: '/list',
                query: {
                    tag: tag
                }
            })
        },
        getPage(page){
            var url = this.GLOBAL.host + "/article/?page="+page
            var re = /^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})\.(.*)$/
            var re_preview = /^([\s\S]*)<!--more-->([\s\S]*)$/
            this.$http({
                url:url,
                methods:'GET',
            }).then(res=>{
                this.page = res.body
                this.articleList = this.page.article
                for(var x=0;x<this.articleList.length;x++){
                    this.articleList[x].create_time = re.exec(this.articleList[x].create_time)[1]
                    if(re_preview.exec(this.articleList[x].content)!=null){
                        this.articleList[x].content = re_preview.exec(this.articleList[x].content)[1]
                    }
                }
            },err=>{})
        }
    }

}
</script>

<style scoped>
.paging{
    text-align: center;
}
.paging ul{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.paging ul li{
    list-style: none;
    color: #1565c0;
    font-size: 20px;
    border-radius: 3px;
    width: 28px;
    height: 28px;
    line-height: 30px;
}
.paging ul .switch_icon i{
    font-size: 27px;
}
/*  */
.items{
    background-color: #ffffff;
    margin-bottom: 20px;
    box-shadow: 1px 1px 1px #bbb;
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
    margin-top: 5px;
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.tail .tags{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.tail .tags .tag{
    margin: 0% 4px;
    margin-top: 3px;
    font-size: 12px;
    height: 18px;
    line-height: 21.5px;
    padding: 0% 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
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
    margin-top: 6px;
    margin-right: 5px;
}
.tail .show-all{
    background-color: #444;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    padding: 0px 5px;
    padding-top: 2px;
    border-radius: 2px;
    font-size: 12px;
    height: 21px;
    transition: background-color 0.5s;
    -webkit-transition: background-color 0.5s;
}
.tail .show-all:hover{
    background-color: #222;
}
</style>

