<template>
  <div class = "index">
    <div class = "index_nav">
        <img src = "../assets/sqlogo.png" class = "nav_img"/>
        <h2>书旗小说</h2>
        <router-link to="/Search">
            <!-- <i class="fa fa-search faa" aria-hidden="true"></i> -->
            <span>
                 <img src="http://c-shuqi.11222.cn/assets/search_d5e5264.png" alt="">
            </span>
        </router-link>
         <router-link to="/BookShelf">
            <!-- <i class="fa fa-bookmark-o faa" aria-hidden="true"></i> -->
            <span>
                <img src="http://c-shuqi.11222.cn/assets/bookshelf_606cf21.png" alt="">
            </span>
        </router-link>
        <router-link to="/User">
            <!-- <i class="fa fa-user-circle faa" aria-hidden="true"></i> -->
            <span>
                <img src="data:image/png;base64,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" alt="">
            </span>
        </router-link>
    </div>
    <div class = "index_click">
        <router-link to="/Category">
        <!-- fa fa-calculator fa-spin-->
            <!-- <i class="fa fa-indent fbb" aria-hidden="true"></i> -->
            <span></span>
            <p>分类</p>
        </router-link> 
        <router-link to="/Ranking">
        <!-- fa-bar-chart -->
            <!-- <i class="fa fa-trophy fbb" aria-hidden="true"></i> -->
            <span></span>
            <p>排行</p>
        </router-link>
        <router-link to="/Boy">
            <!-- <i class="fa fa-mars fbb" aria-hidden="true"></i> -->
            <span></span>
            <p>男频</p>
        </router-link>
        <router-link to="/Girl">
            <!-- <i class="fa fa-mercury fbb" aria-hidden="true"></i> -->
            <span></span>
            <p>女频</p>
        </router-link>
        <router-link to="/BookList">
            <!-- <i class="fa fa-book fbb" aria-hidden="true"></i> -->
            <span></span>
            <p>书单</p>
        </router-link>
    </div>
    <router-view/>
    <div class="index_binner">
        <img src="http://img-tailor.11222.cn/pm/book/operate/2018020715462184.jpg">
    </div>
    <div class="index_body">
        <div class="body_header">
            <span class="body_green"></span>
            <h3 class="body_title">精品推荐</h3>
        </div>
        <ul class="body_body">
            <li v-for="(item,index) in bast" :key="index" @click="goDetail({src:item.book_cover,name:item.bookname,author:item.author_name,desc:item.book_info,type:item.class_name})">
                <img :src="item.book_cover">
                <p>{{item.bookname}}</p>
                <span>{{item.author_name}}</span>
            </li>
        </ul>
        <div class="body_change" @click="change1">换一换</div>
    </div>
    <div class="index_body">
        <div class="body_header">
            <span class="body_green"></span>
            <h3 class="body_title">女生美文</h3>
        </div>
        <ul class="body_body">
            <li v-for="(item,index) in girl" :key="index" v-show="index<4" @click="goDetail({src:item.book_cover,name:item.bookname,author:item.author_name,desc:item.book_info,type:item.class_name})">
                <img :src="item.book_cover">
                <p>{{item.bookname}}</p>
                <span>{{item.author_name}}</span>
            </li>
        </ul>
        <div class="body_girl" v-for="(item,index) in girl" :key="index" v-show="index>=4" @click="goDetail({src:item.book_cover,name:item.bookname,author:item.author_name,desc:item.book_info,type:item.class_name})">
            <div class="girl_up">
                <p>{{item.bookname}}</p>
                <div class="up_tags">
                    <span>{{item.stat_name}}</span>
                    <span>{{item.class_name}}</span>
                </div>
            </div>
            <div class="girl_under">{{item.book_info}}</div>
        </div>
        <div class="body_change" @click="change2">换一换</div>
    </div>
    <div class="index_body">
        <div class="body_header">
            <span class="body_green"></span>
            <h3 class="body_title">男生热文</h3>
        </div>
        <ul class="body_body">
            <li v-for="(item,index) in boy" :key="index" v-show="index<4" @click="goDetail({src:item.book_cover,name:item.bookname,author:item.author_name,desc:item.book_info,type:item.class_name})">
                <img :src="item.book_cover">
                <p>{{item.bookname}}</p>
                <span>{{item.author_name}}</span>
            </li>
        </ul>
        <div class="body_girl" v-for="(item,index) in boy" :key="index" v-show="index>=4" @click="goDetail({src:item.book_cover,name:item.bookname,author:item.author_name,desc:item.book_info,type:item.class_name})">
            <div class="girl_up">
                <p>{{item.bookname}}</p>
                <div class="up_tags">
                    <span>{{item.stat_name}}</span>
                    <span>{{item.class_name}}</span>
                </div>
            </div>
            <div class="girl_under">{{item.book_info}}</div>
        </div>
        <div class="body_change" @click="change3">换一换</div>
    </div>
    <foot/>
  </div>
</template>
<script>
import foot from "../module/foot"
export default {
    data(){
        return{
            bast:[],
            girl:[],
            boy:[]
        }
    },
    components:{
        foot
    },
    created(){
        this.getbast();
        this.getgirl();
        this.getboy();
    },
    methods:{
        getbast(){
            this.$axios.get("/SQ/eva_bookstore/v1/module/query?",{
                params:{
                    appId:1,
                    pageId:1,
                    channelId:"",
                    versionId:"",
                    ver:"",
                    shuqi_h5:"",
                    md5key:"",
                    userId:8000000,
                    timestamp:1563502813,
                    type:2,
                    resetcache:"",
                    func_id:19,
                    orderid:6,
                    mid:6,
                    lmkTxt:"index",
                    sign:"BF1ADE000BB4CAAD93AC5633DBB9465A",
                    key:"shuqiapi",
                    _:1563502813735
                }
            }).then((res)=>{
                this.bast = res.data.data.module[0].content
            })
        },
        getgirl(){
            this.$axios.get("/SQ/eva_bookstore/v1/module/query?",{
                params:{
                    appId:1,
                    pageId:1,
                    channelId:"",
                    versionId:"",
                    ver:"",
                    shuqi_h5:"",
                    md5key:"",
                    userId:8000000,
                    timestamp:1563521938,
                    type:2,
                    resetcache:"",
                    func_id:19,
                    orderid:11,
                    mid:12,
                    lmkTxt:"index",
                    sign:"E170ADB89F91655EE7F9DA61F13744E9",
                    key:"shuqiapi",
                    _:1563521938259
                }
            }).then((res)=>{
                this.girl = res.data.data.module[0].content
            })
        },
        getboy(){
            this.$axios.get("/SQ/eva_bookstore/v1/module/query?",{
                params:{
                    appId:1,
                    pageId:1,
                    channelId:"",
                    versionId:"",
                    ver:"",
                    shuqi_h5:"",
                    md5key:"",
                    userId:8000000,
                    timestamp:1563536652,
                    type:2,
                    resetcache:"",
                    func_id:19,
                    orderid:16,
                    mid:17,
                    lmkTxt:"index",
                    sign:"28F4DBC8C50A571795617E1B6E462F4E",
                    key:"shuqiapi",
                    _:1563536652615
                }
            }).then((res)=>{
                this.boy = res.data.data.module[0].content
            })
        },
        change1(){
            this.getbast();
        },
        change2(){
            this.getgirl();
        },
        change3(){
            this.getboy();
        },
        goDetail(list){
            this.$router.push({name:"AllDetails",params:{a:list}})
        }
    }
}
</script>

<style lang="scss" scoped>
    .index_nav{
        width:100%;
        min-width:4.818rem;
        height:0.8rem;
        line-height:0.8rem;
        text-align: center;
    }
    .nav_img{
        width:0.455rem;
        height:0.455rem;
        float:left;
        margin-top:0.182rem;
        margin-left:0.364rem;
    }
    .index_nav h2{
        float:left;
        margin-left:0.364rem;
    }
    .index_nav a{
        color:rgb(17, 192, 204);
        float:right;
        margin-right:0.364rem;
    }
    .index_nav span{
        display: inline-block;
        width:0.436rem;
        height:0.436rem;
        margin-top:0.145rem;
    }
     .index_nav span>img{
         width:0.436rem;
        height:0.436rem;
     }
    .faa{
        font-size:0.436rem;
    }
    .index_click{
        width:100%;
        min-width:4.9rem;
        display: flex;
        justify-content: space-around;
        border:0.01rem solid rgba(212, 209, 209,0.4);
    }
    .index_click a{
        color:rgb(17, 169, 180);
        // rgb(238, 122, 14)
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size:0.278rem;
        text-decoration: none;
        margin-top:0.3rem;
        margin-bottom:0.3rem;
    }
    .index_click span{
        display: inline-block;
        width:0.95rem;
        height:0.95rem;
    }
    .index_click a:nth-of-type(1) span{
        background: url('http://img-tailor.11222.cn/pm/book/operate/2017022317384553.png') no-repeat;
        background-size: cover; 
    }
    .index_click a:nth-of-type(2) span{
        background: url('http://img-tailor.11222.cn/pm/book/operate/2017022317384553.png') no-repeat 0 -0.99rem;
        background-size: cover; 
    }
    .index_click a:nth-of-type(3) span{
        background: url('http://img-tailor.11222.cn/pm/book/operate/2017022317384553.png') no-repeat 0 -1.94rem;
        background-size: cover; 
    }
    .index_click a:nth-of-type(4) span{
        background: url('http://img-tailor.11222.cn/pm/book/operate/2017022317384553.png') no-repeat 0 -2.9rem;
        background-size: cover; 
    }
    .index_click a:nth-of-type(5) span{
        background: url('http://img-tailor.11222.cn/pm/book/operate/2017022317384553.png') no-repeat 0 -3.87rem;
        background-size: cover; 
    }
    .index_click p{
        margin-top:0.091rem;
        color:#999;
        font-size:12px;
    }
    .fbb{
        font-size:0.476rem;
    }
    .index_binner{
        width:100%;
        font-size:0;
        margin-top:0.055rem;
        img{
            width:100%;
        }
    }
    .index_body{
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
        .body_girl{
            position: relative;
            padding:0.291rem;
            font-size:12px;
            border-top: 1px solid #f3f3f3;
            .girl_up{
                display: flex;
                margin-bottom:0.145rem;
                height:0.364rem;
                p{
                    font-size:15px;
                    color: #333;
                    line-height:0.364rem;
                    flex: 1;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .up_tags{
                    display: inline-block;
                    span{
                        display: inline-block;
                        height:0.327rem;
                        line-height:0.327rem;
                        padding: 0 0.11rem;
                        border: 1px solid rgba(153,153,153,.3);
                        border-radius: 0.04rem;
                        color: #999;
                        margin-right: 0.08rem;
                    }
                    span:nth-of-type(1){
                        color: #00c98d;
                        border-color: rgba(0,201,141,.3);
                    }
                }
            }
            .girl_under{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                word-break: break-all;
                line-height:0.291rem;
                height:0.291rem;
                color: #999;
            }
        }
    }

</style>