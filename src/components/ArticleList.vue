<template>
    <div class="article-list">
        <div class="year">
            <span class="this-year">2019</span>
            <ul>
                <li>
                    <div class="top">
                        <div class="title">jQury</div>
                        <div class="cal"><i class="material-icons">date_range</i><span>2019-1-10</span></div>
                    </div>
                    <div class="tags">
                        <div class="tag">jQuery</div>
                        <div class="tag">jQuery</div>
                        <div class="tag">jQuery</div>
                        <div class="tag">jQuery</div>
                    </div>
                </li>
                <li>
                    <div class="top">
                        <div class="title">jQury</div>
                        <div class="cal"><i class="material-icons">date_range</i><span>2019-1-10</span></div>
                    </div>
                    <div class="tags">
                        <div class="tag">jQuery</div>
                        <div class="tag">jQuery</div>
                        <div class="tag">jQuery</div>
                        <div class="tag">jQuery</div>
                    </div>
                </li>
                <li>
                    <div class="top">
                        <div class="title">jQury</div>
                        <div class="cal"><i class="material-icons">date_range</i><span>2019-1-10</span></div>
                    </div>
                    <div class="tags">
                        <div class="tag">jQuery</div>
                        <div class="tag">jQuery</div>
                        <div class="tag">jQuery</div>
                        <div class="tag">jQuery</div>
                    </div>
                </li>
                <li>
                    <div class="top">
                        <div class="title">jQury</div>
                        <div class="cal"><i class="material-icons">date_range</i><span>2019-1-10</span></div>
                    </div>
                    <div class="tags">
                        <div class="tag">jQuery</div>
                        <div class="tag">jQuery</div>
                        <div class="tag">jQuery</div>
                        <div class="tag">jQuery</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.article-list{
    background-color: #ffffff;
    margin-top: 20px;
    padding: 10px 20px;
}
.year .this-year{
    font-size: 30px;
    color: #999;
    float: left;
}
.year ul{
    margin: 0%;
    margin-left: 100px;
}
.year ul li{
    border-bottom: 1px solid #ccc;
    padding: 6px 5px;
    display: flex;
    flex-direction: column;
    transition: transform 1s;
    -webkit-transition: -webkit-transform 1s;
}
.year ul li:hover{
    border-bottom: none;
    background-color: #eee;
    transform: rotateX(40deg);
    -webkit-transform: rotateX(40deg);
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.year ul li .top .cal span{
    margin-left: 5px;
}
.year ul li .tags{
    overflow: hidden;
    margin-top: 4px;
}
.year ul li .tags .tag{
    float: right;
    margin:0% 4px;
    background-color: #cc8167;
    padding: 0% 2px;
    padding-right: 5px;
    font-size: 12px;
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
    margin-top: 6px;
    margin-right: 5px;
}
</style>

