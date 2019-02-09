<template>
<div class="translate">
    <div class="select">
        <div class="select_content">自动检测语言</div>
    </div>
    <div class="clear">
        <i v-show="before_translate" @click="clear()" class="material-icons clear">clear</i>
    </div>
    <textarea class="input" v-model="before_translate" @keyup="translation()"></textarea>
    <!-- eslint-disable-next-line -->
    <textarea class="output">{{after_translate}}</textarea>
</div>
</template>
<script>
/* eslint-disable */
var md5 = require('js-md5')
export default {
    data(){
        return {
            before_translate:'',
            after_translate:''
        }
    },
    methods:{
        clear(){
            this.before_translate = ''
            this.after_translate = ''
        },
        translation(){
            var q = this.before_translate
            if(q === ''){
                this.after_translate = ''
            }
            var re = /^[\u4e00-\u9fa5]*.*[，|。|？|！]$/
            var to = "zh-CHS"
            if(re.exec(q)){
                to = 'EN'
                console.log('china')
            }
            var secretKey = "8z6MGtGsyVoervF5Fk3yET4xsNOqgjet"
            var appKey = "2ba19d7e3ed057cf"
            var salt = "8520"
            var sign = md5(appKey+q+salt+secretKey)
            var ext = "mp3"
            var voice = 0
            var url = "http://openapi.youdao.com/api?q="+q+"&from=auto&to="+to+"&appKey="+appKey+"&salt="+salt+"&sign="+sign+"&ext="+ext+"&voice="+voice
            this.$jsonp(url).then(res=>{
                this.after_translate = res.translation[0]
                console.log(res)
            }).catch(err=>{})
        }
    }
}
</script>

<style scoped>
.translate{
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 30px;
    box-shadow: 1px 1px 1px #bbb;
}
.select{
    display: flex;
    flex-direction: row;
}
.select .select_content{
    margin-right: 40px;
    border: 1px solid #999;
    padding: 3px 20px;
    margin-left: 2px;
}
.clear{
    text-align: right;
    height: 5px;
}
.clear i{
    position: relative;
    top: 18px;
    right: 14px;
    color: #999;
}
.clear i:hover{
    color: #2979ff;
}
.input,.output{
    height: 250px;
    border-radius: 5px;
    border: 1px solid #999;
    resize: none;
    padding: 5px;
    font-size: 22px;
    overflow: auto;
    outline: none;
    border: none;
    background-color: #f2f2f2;
}
.input::-webkit-scrollbar,.output::-webkit-scrollbar{
    width: 0 !important 
}
.input::scrollbar,.output::scrollbar{
    width: 0 !important 
}
.input{
    border: 1px solid #ffffff;
    margin-bottom: 10px;
}
.input:focus{
    border: 1px solid #999;
}
</style>
