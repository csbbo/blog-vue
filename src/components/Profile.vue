<template>
    <div class="profile">
        <h1>个人简介</h1>
        <ul>
            <li>你好!</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <div class="contact">
            <span class="qq">QQ:NTk5ODgzNTE5</span>
            &nbsp;
            <span class="email">Email:c2hhb2JvMjcyQGZveG1haWwuY29t</span>
        </div>
        <div class="feedback">
            <button @click="switchbox()" v-if="messge_box">Leave a message</button>
            <div v-else class="text">
                <textarea ref="message" :placeholder="placeholder" type="text" class="message"></textarea>
                <div class="fb-btn">
                    <button @click="post_feedback()" class="save">Save</button>
                    <button @click="switchbox()" class="cancel">Cancel</button>
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
            messge_box: true,
            placeholder: 'Welcome to leave a message'
        }
    },
    methods:{
        switchbox(){
            this.messge_box = !this.messge_box
        },
        post_feedback(){
            var url = this.GLOBAL.host + "/feedback/"
            var message = this.$refs.message.value
            let data = new FormData()
            data.append('message',message)
            if(message != ""){
                this.$http({
                    url:url,
                    body:data,
                    method:'POST',
                }).then(function(res){
                    this.$refs.message.value = ""
                    this.placeholder = "Success!"
                },function(err){
                    this.placeholder = "Fail!"
                })
            }else{
                alert("你还没有输入内容呢")
            }
            this.$refs.message.value = ""
            this.placeholder = "Wating..."
        }
    }
}
</script>

<style scoped>
.profile{
    background-color: #ffffff;
    padding: 20px 45px;
}
h1{
   text-align: center;
   color: #999; 
}
ul{
    list-style: none;
    padding: 0%;
}
ul li{
    border-bottom: 1px solid #999;
    height: 45px;
    padding-left: 5px;
    line-height: 72px;
}
.contact{
    text-align: right;
    color: #999; 
    margin-top: 10px;
    font-size: 15px;
}
.feedback{
    padding-top: 30px;
}
.feedback>button{
    width: 100%;
    display: block;
    margin-bottom: 16px;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    padding: 3px 10px;
    background-color: #ccc;
    color: #24292e;
    border: none;
    outline: none;
    transition:background-color .5s;
	-webkit-transition:background-color .5s;
}
.feedback>button:hover{
    background-color: #aaa;
}
.feedback .text .message{
    width: 98%;
    height: 65px;
    padding: 1%;
    overflow: auto;
    resize: none;
}
.feedback .text .save{
    background-color: #279f43;
    color: #ffffff;
    border: none;
    outline: none;
    padding: 5px 10px;
    border-radius: 3px;
}
.feedback .text .fb-btn{
    margin-top: 10px;
}
.feedback .text .save:hover{
    background-color: #207c36;
}
.feedback .text .cancel{
    margin-left: 10px;
    border: none;
    outline: none;
    padding: 5px 10px;
    border-radius: 3px;
}
.feedback .text .cancel:hover{
    background-color: #ccc;
}
</style>
