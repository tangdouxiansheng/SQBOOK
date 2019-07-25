<template>
    <div>
        <headd>
            <template slot="names"><p class = "bookdetail_headd_p">{{title.title}}</p></template>
        </headd>
        <!--  ------->
        <div class = "bookdatail_divsdesc">
            <p class = "bookdatail_sdesc">{{title.sdesc}}</p>
        </div>
        <!-- ---- -->
        <div>
            <ul>
                <li v-for="(item,index) in list" :key="index" class = "bookdetail_li">
                    <img :src="item.cover" class = "bookdetail_cover"/>
                    <p class = "bookdetail_title">{{item.title}}</p>
                    <p class = "bookdetail_author">{{item.author}}</p>
                    <p class = "bookdetail_desc" v-show="flag">{{item.desc}}</p>
                    <p class = "bookdetail_desc_all" v-show="bool">{{item.desc}}</p>
                    <p class = "bookdetail_recomment">书友寄语:&nbsp;&nbsp;<span>{{item.recomment}}</span></p> 
                    <span class = "bookdetail_logo" @click="changeBool">></span>
                </li>
            </ul>
        </div>
        <foot/>
    </div>
</template>

<script>
import foot from '../module/foot'
import headd from '../module/header'
    export default {
        components:{
            foot,headd
        },
        data(){
            return{
                list:[],
                title:'',
                bool:false,
                flag:true,
                id:''
            }
        },
        created(){
        this.getData();  
        },
        methods:{
            getData(){
                this.id = this.$route.params.id             //拿路由的参数
                this.$axios.get("/SS/novel/i.php?",{
                    params:{
                        do:'is_pay_sddetail',
                        sdid:this.id,
                        p:1,
                        shuqi_h5:'',
                        onlyCpBooks:1,
                        _:1564020661650
                    }
                }).then((res)=>{
                    this.title = res.data.info
                    this.list = res.data.data
                })
            },
            changeBool(){
                this.bool = !this.bool
                this.flag = !this.flag
            }
        }
    }
</script>

<style scoped>
    .bookdetail_headd_p{
        color:#333;
        font-size:16px;
    }
    .bookdatail_divsdesc{
        width:100%;
        height:91px;
        background:#f8f8f8;
    }
    .bookdatail_sdesc{
        width:340px;
        height:66px;
        font-size:14px;
        color:#494949;
        margin:0 auto;
        padding:10px 0;
    }
    .bookdetail_cover{
        width:56px;
        height:74px;
    }
    .bookdetail_li{
        position: relative;
        margin-left:10px;
    }
    .bookdetail_title{
        color:#333;
        font-size:16px;
        position: absolute;
        top:10px;
        left:80px;
    }
    .bookdetail_author{
        color:#999;
        font-size:12px;
        position: absolute;
        top:35px;
        left:80px;
    }
    .bookdetail_desc{
        width:340px;
        height:60px;
        color:#494949;
        font-size:14px;
        margin:10px 0;
        overflow: hidden;
    }
    .bookdetail_desc_all{
        width:340px;
        height:220px;
        color:#494949;
        font-size:14px;
        margin:10px 0;
        overflow: hidden;
    }
    .bookdetail_recomment{
        margin:20px 0;
        font-size: 16px;
        color:#999;
        width:340px;
        font-weight:800;
    }
    .bookdetail_recomment>span{
        font-size:14px;
    }
    .bookdetail_logo{
        transform: rotate(90deg);
        position: absolute;
        bottom:84px;
        right:10px;
        font-size:20px;
        color:#999;
    }
</style>


