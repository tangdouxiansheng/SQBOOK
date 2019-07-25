<template>
    <div>
        <!-- 
            src:地址
            name：书名
            author：作者名
            desc：介绍
            type：类型
         -->
        <headNav>
            <template slot="names"><p class="headTitle">书籍详情</p></template>
        </headNav>
        <div class="detail" v-if="list">
            <img :src="list.src" v-if="list.src">
            <div class="rightText">
                <h1 v-if="list.name">{{list.name}}</h1>
                <h3 v-if="list.author">{{list.author}}</h3>
                <p v-if="list.type">{{list.type}}&nbsp;&nbsp;完结</p>
                <span>全部免费</span>
            </div>
        </div>
        <div class="detail_button">
            <button>开始阅读</button>
            <button>离线下载</button>
            <button>加书架</button>
        </div>
        <p v-if="list.desc" class="detail_desc">{{list.desc}}</p>
    </div>
</template>
<script>
import headNav from "../module/header.vue"
export default {
    components:{
        headNav
    },
    data(){
        return{
            list:{}
        }
    },
    created(){
        this.list = this.$route.params.a
        console.log(this.list)
    }
}
</script>
<style lang="scss" scoped>
    .detail{
        padding:20px 16px 16px 16px;
        img{
            width:1.782rem;
            height:2.364rem;
            margin-right:0.291rem;
            float:left;
        }
        .rightText{
            height:2.364rem;
            display:flex;
            flex-direction: column;
            justify-content: center;
            color: #999;
            font-size:14px;
            h1{
                font-weight:500;
                font-size:18px;
                color:#333;
                line-height:0.418rem;
            }
            h3{
                font-weight:200;
                padding-top:0.218rem;
                padding-bottom:0.145rem;
            }
            p{
                margin-bottom:0.145rem;
            }
        }
    }
    .detail_button{
        display:flex;
        padding:0 16px;
        button{
            margin-right:0.255rem;
            padding:0 0.182rem;
            flex:1;
            background: #00c98d;
            color: #fff;
            height:0.709rem;
            line-height:0.709rem;
            border: 1px solid #00c98d;
            border-radius: 0.08rem;
            font-size:14px;
            text-align: center;
        }
    }
    .detail_desc{
        margin:0 0.291rem;
        padding-top:0.255rem;
        font-size:0.255rem;
        line-height:0.455rem;
        color: #999;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
    }
</style>

