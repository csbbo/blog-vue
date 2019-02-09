<template>
    <div class="friends">
        <div v-for="friend in friends" :key="friend.id" class="block shake-slow">
            <a target="_blank" :href="friend.url"><span>{{friend.name}}</span></a>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data(){
        return {
            friends:[],
        }
    },
    created:function(){
        this.getFriends()
    },
    methods:{
        getFriends(){
            var url = this.GLOBAL.host + "/friend/"
            this.$http({
                url:url,
                methods:'GET',
            }).then(res=>{
                this.friends = res.body
                console.log(res.body)
            },err=>{})
        },
    }
}
</script>

<style scoped>
.friends{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.block a{
    background-color: #999;
    color: #ffffff;
    width: 100px;
    height: 100px;
    margin-right: 20px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}
</style>
