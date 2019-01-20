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
                </div>
            </div>
            <div class="body">
                {{article.content}}
            </div>
            <hr>
            <div class="tail">
                <div class="tags">
                    <i class="material-icons shake-little">loyalty</i>
                    <div v-for="tag in article.tags" :key="tag" class="tag">{{tag}}</div>
                </div>
                <div class="show-all">
                    <span @click="getArticle(article.id)">展开全文</span>
                    <i class="material-icons">more_horiz</i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data(){
        return{
            articleList: [],
        }
    },
    created: function(){
        var url = this.GLOBAL.host + "/article"
        var re = /^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})\.(.*)$/
        this.$http({
            url:url,
            methods:'GET',
        }).then(res=>{
            this.articleList = res.body
            for(var x=0;x<this.articleList.length;x++){
                this.articleList[x].create_time = re.exec(this.articleList[x].create_time)[1]
            }
        },err=>{})
    },
    methods: {
        getArticle(id){
            this.$router.push({
                path: '/article',
                query: {
                    id: id
                }
            })
        }
    }

}
</script>

<style scoped>
.items{
    background-color: #ffffff;
    margin-bottom: 20px;
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
    background-color: #cc8167;
    margin: 0% 4px;
    margin-top: 3px;
    font-size: 12px;
    height: 18px;
    padding: 0% 5px;
    /* border-top-left-radius: 10px;
    border-bottom-left-radius: 10px; */
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #ffffff;
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

