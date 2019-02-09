<template>
<div class="mdeditor" :class="{fullscreen:fullscreen}">
<i v-if="fullscreen" @click="fullscreen=!fullscreen" class="material-icons">fullscreen_exit</i>
<i v-else @click="fullscreen=!fullscreen" class="material-icons">fullscreen</i>
<h5 class="title">markdown editor</h5>
<div class="editor">
    <textarea class="edit" v-model="content" placeholder="Emjoy Markdown! coding now..."></textarea>
    <div class="show md">
        <vue-markdown :html=true :xhtml-out=true :source="content"></vue-markdown>
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
            content:'',
            fullscreen:false
        }
    },
    components: {
        "vue-markdown":VueMarkdown,
    },
}
</script>

<style scoped>
.mdeditor{
    background-color: #ffffff;
    box-shadow: 1px 1px 1px #bbb;
    overflow: hidden;
}
.mdeditor i{
    float: right;
    margin-top: 7px;
    margin-right: 20px;
}
.mdeditor i:hover{
    background-color: #ddd;
}
.title{
    color: #999;
    border-bottom: 1px solid #999;
    padding: 10px;
}
.editor{
    display: flex;
    flex-direction: row;
    height: 600px;
}
.edit,.show{
    width: 50%;
    height: 100%;
    padding: 8px
}
.show{
    overflow-y: scroll;
    overflow-x: hidden;
}
.edit{
    resize: none;
    outline: none;
    border: none;
    border-right: 1px solid #999;
    font-size: 18px;
}
/*  */
.fullscreen{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
}
</style>
