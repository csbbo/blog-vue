<template>
    <div class="article-list">
        <div v-if="articleList.length != 0" class="year">
            <span class="this-year">{{year}}</span>
            <ul>
                <li @click="getArticle(article.id)" v-for="article in articleList" :key="article.id">
                    <div class="top">
                    <div class="title">{{article.title}}</div>
                        <div class="cal">
                            <i class="material-icons">date_range</i>
                            <span>{{article.create_time}}</span>
                            <span>({{week[new Date(article.create_time).getDay()]}})</span>
                        </div>
                    </div>
                    <div class="tags">
                        <div v-for="tag in article.tags" :key="tag" class="tag">
                            {{tag}}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div v-else class="not-content">
            <div class="introdution">
                “ 很遗憾! 什么也没找到,送你一首 ‘泡沫’ ”
            </div>
            <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=26113988&auto=1&height=66"></iframe>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data(){
        return{
            week:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
            year: "",
            articleList: [],
        }
    },
    created: function(){
        var today = new Date()
        this.year = today.getFullYear()
        this.getArticleList()
    },
    destroyed:function(){
        this.articleList=[]
    },
    watch: {    //监听路由变化
        "$route":function(to,from){
            this.getArticleList()
        }
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
        getArticleList(){
            if(this.$route.query.search){
                var url = this.GLOBAL.host + "/article?search="+this.$route.query.search
            }else if(this.$route.query.tag){
                var url = this.GLOBAL.host + "/article?tag="+this.$route.query.tag
            }else{
                var url = this.GLOBAL.host + "/article"
            }
            var re = /^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})\.(.*)$/
            this.$http({
                url:url,
                methods:'GET',
            }).then(res=>{
                this.articleList = res.body
                for(var x=0;x<this.articleList.length;x++){
                    this.articleList[x].create_time = re.exec(this.articleList[x].create_time)[1]
                }
                console.log(res.body)
            },err=>{})

            this.$route.query.search = ""
            this.$route.query.tag = ""
        }
    }
}
</script>

<style scoped>
.article-list{
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 1px 1px 1px #bbb;
    overflow: hidden;
}
.year .this-year{
    font-size: 30px;
    color: #bbb;
    float: left;
    margin-top: 10px;
}
.year ul{
    margin: 0%;
    margin-left: 80px;
}
.year ul li{
    border-bottom: 1px solid #ccc;
    padding: 8px 5px;
    display: flex;
    flex-direction: column;
    color: #888;
    transition: transform 1s;
    -webkit-transition: -webkit-transform 1s;
}
.year ul li .top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.year ul li .top .title{
    font-size: 20px;
}
.year ul li .top .cal{
    margin-top: 5px;
    color: #26a69a;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.year ul li .top .cal span{
    margin-left: 5px;
    padding-top: 5px;
}
.year ul li .tags{
    overflow: hidden;
    margin-top: 25px;
}
.year ul li .tags .tag{
    float: right;
    margin:0% 4px;
    padding: 0% 2px;
    padding-right: 5px;
    padding-bottom: 3px;
    font-size: 12px;
    height: 16px;
    line-height: 22px;
    background-color: #0d47a1;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #ffffff;
}
.year ul li .tags .tag::before{
    content: " ";
    background-color: #fff;
    border-radius: 100%;
    height: 5px;
    width: 5px;
    float: left;
    margin-top: 7px;
    margin-right: 5px;
}
.not-content{
    padding: 20px 0%;
    text-align: center;
}
.not-content .introdution{
    font-size: 30px;
}
.not-content iframe{
    margin-top: 40px;
}
</style>

