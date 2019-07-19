
// 封装的头部公共样式
//详情参考BookList.vue页面
<template>
    <div class = "header">
        <div class = "header_div">
            <i class="fa fa-arrow-left" aria-hidden="true" @click="goback"></i>
            <slot name="names"></slot>
            <i class="fa fa-university" aria-hidden="true" @click="goindex"></i>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            goback(){
                this.$router.go(-1)
            },
            goindex(){
                this.$router.push("/")
            }
        }
    }
</script>

<style scoped>
    .header{
        margin-bottom:0.727rem;
    }
    .header_div{
        width:100%;
        height:0.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position:fixed;
        top:0;
        background:#fff;
    }
    .fa{
        font-size:0.364rem;
        color:rgb(18, 230, 177);
    }
    .fa-arrow-left{
        margin-left:0.182rem;
    }
    .fa-university{
        margin-right:0.182rem;
    }
    
</style>


