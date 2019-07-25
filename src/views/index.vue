<template>
  <div class = "index">
    <div class = "index_nav">
        <img src = "../assets/sqlogo.png" class = "nav_img"/>
        <h2>书旗小说</h2>
        <router-link to="/Search">
            <i class="fa fa-search faa" aria-hidden="true"></i>
        </router-link>
         <router-link to="/BookShelf">
            <i class="fa fa-bookmark-o faa" aria-hidden="true"></i>
        </router-link>
        <router-link to="/User">
            <i class="fa fa-user-circle faa" aria-hidden="true"></i>
        </router-link>
    </div>
    <div class = "index_click">
        <router-link to="/Category">
        <!-- fa fa-calculator fa-spin-->
            <i class="fa fa-indent fbb" aria-hidden="true"></i>
            <p>分类</p>
        </router-link> 
        <router-link to="/Ranking">
        <!-- fa-bar-chart -->
            <i class="fa fa-trophy fbb" aria-hidden="true"></i>
            <p>排行</p>
        </router-link>
        <router-link to="/Boy">
            <i class="fa fa-mars fbb" aria-hidden="true"></i>
            <p>男频</p>
        </router-link>
        <router-link to="/Girl">
            <i class="fa fa-mercury fbb" aria-hidden="true"></i>
            <p>女频</p>
        </router-link>
        <router-link to="/BookList">
            <i class="fa fa-book fbb" aria-hidden="true"></i>
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
        border-bottom:0.018rem solid #ccc;
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
    .faa{
        font-size:0.436rem;
    }
    .index_click{
        width:100%;
        min-width:4.818rem;
        display: flex;
        justify-content: space-around;
        border-bottom:0.018rem solid rgb(212, 209, 209);
    }
    .index_click a{
        color:rgb(17, 169, 180);
        // rgb(238, 122, 14)
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size:0.278rem;
        text-decoration: none;
        margin-top:0.182rem;
        margin-bottom:0.364rem;
    }
    .index_click p{
        margin-top:0.091rem;
    }
    .fbb{
        font-size:0.476rem;
    }
    .index_binner{
        width:100%;
        font-size:0;
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