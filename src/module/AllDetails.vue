<template>
    <div>
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
            <div class="detail">
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


            <div class="index_body">
                <div class="body_header">
                    <span class="body_green"></span>
                    <h3 class="body_title">看过这本书的人还在看</h3>
                </div>
                <ul class="body_body">
                    <li v-for="(item,index) in data" :key="index" @click="goDetail({src:item.cover,name:item.bookname,author:item.author_name,desc:item.book_info,type:item.class_name})">
                        <img :src="item.cover">
                        <p>{{item.bookname}}</p>
                        <span>{{item.author_name}}</span>
                    </li>
                </ul>
                <div class="body_change" @click="change">换一换</div>
            </div>
        </div>
    </div>
</template>
<script>
import headNav from "../module/header.vue"
import { setInterval } from 'timers';
export default {
    components:{
        headNav
    },
    data(){
        return{
            list:{},
            data:[]
        }
    },
    created(){
        // setInterval(this.getData,5000)
        this.getData();
    },
    methods:{
        getData(){
            this.$axios.get("http://bookapi.shuqiapi.com/?bamp=sqdk&dataFrom=sm&bid=7137410&bkName=%E9%AC%BC%E5%8C%BB%E7%A5%9E%E5%86%9C&authName=%E4%B8%89%E5%B0%BA%E7%A5%9E%E5%89%91&authorid=3805067&limit=8&ver=07.22.124.50&fr_pr_id=10002&tk=NzEzNzQxMDQxN2FjNTllOWYzODA1MDY3&shuqi_h5=&_=1564065024405").then((res)=>{
                this.data = res.data.data.dk.bookinfo
            })
        },
        change(){
            this.getData();
        },
        goDetail(list){
            this.list = list
        }
    },
    watch:{
        $route:{
            handler(neww){
                if(this.$route.params.a){
                    this.list = this.$route.params.a
                    return
                }
                this.$router.go(-1)
            },
            deep:true,
            immediate:true
        }
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
        margin:0 0.291rem 0.291rem;
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
    .index_body{
        border-top:0.2rem solid #ccc;
        padding-top:0.291rem;
        .body_green{
            width:0.1rem;
            height:0.291rem;
            background:#00c98d;
            display:inline-block;
            position:absolute;
        }
        .body_title{
            padding-left:0.291rem;
            display:inline-block;
            color:#333;
            line-height:0.291rem;
        }
        .body_body{
            padding: 0.291rem 0 0.291rem 0.291rem;
            list-style:none;
            li{
                width: 23%;
                display: inline-block;
                padding-right:0.1rem;
                font-size:12px;
                img{
                    width:100%;
                }
                p{
                    color: #333;
                    margin:0.145rem 0.036rem;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                span{
                    color: #999;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    display: block;
                }
            }
        }
        .body_change{
            width:100%;
            height:0.873rem;
            line-height:0.873rem;
            color: #333;
            font-size:0.255rem;
            text-align:center;
            border-top:1px solid #fafafa;
            border-bottom:8px solid #f0f0f2;
        }
    }
</style>

