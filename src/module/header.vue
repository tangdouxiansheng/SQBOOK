
// 封装的头部公共样式
//详情参考BookList.vue页面
<template>
    <div class = "header">
        <div class = "header_div">
            <!-- <i class="fa fa-arrow-left" aria-hidden="true" @click="goback"></i> -->
            <span class="left"  @click="goback"></span>
            <slot name="names"></slot>
            <span class="right" @click="goindex"></span>
            <!-- <i class="fa fa-university" aria-hidden="true" @click="goindex"></i> -->
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
        font-size:14px;
        top:0;
        background:#fff;
        border-bottom:1px solid #f3f3f3;
        z-index: 5;
    }
    /* .fa{
        font-size:0.364rem;
        color:rgb(18, 230, 177);
    } */
    .header_div>span{
        display: inline-block;
        width:0.909rem;
        height:0.8rem;
    }
    .left{
        margin-left:0.182rem;
        background: url("http://c-shuqi.11222.cn/assets/backIcon_ba492d1.png") no-repeat center;
        background-size: cover;
        background-size: .44rem .36rem;
    }
    .right{
        margin-right:0.182rem;
        background: url("http://c-shuqi.11222.cn/assets/home_48a04f5.png") no-repeat center;
        background-size: cover;
        background-size: .44rem .45rem;
    }
    
</style>


