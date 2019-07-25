<template>
    <div class="CategoryType">
        <!-- {{this.$route.params.id}}
        {{this.$route.params.name}} -->
        <headNav>
            <template slot="names"><p class="headTitle">{{this.$route.params.name}}</p></template>
        </headNav>
        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <li v-for="(item,index) in list" :key="index" @click="goDetail({src:item.cover,name:item.title,author:item.author,desc:item.desc,type:item.category})">
                <img :src="item.cover">
                <h3>{{item.title}}</h3>
                <h5>{{item.author}}</h5>
                <p>{{item.desc}}</p>
                <span>{{item.tags}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import { InfiniteScroll } from 'mint-ui';
import { Toast } from 'mint-ui';
import headNav from "../module/header.vue"
export default {
    components:{
        headNav
    },
    data(){
        return{
            type:"secondCate",
            list:[],
            loading:false,
            page:1
        }
    },
    methods:{
        loadMore(){
            this.page ++;
            this.gogo();
        },
        gogo(){
            if(this.page > 3){
                Toast({
                    message: '我也是有底限的',
                    position: 'bottom',
                    duration: 2000
                });
                return;
            }
            this.loading = true;
            var haha = encodeURI(this.$route.params.name)
            var id = this.$route.params.id
            if(id == 1){
                this.type = "secondCate"
            }else{
                this.type = "firstCate"
            }
            this.$axios.get("/FL/novel/i.php?do=is_caterank&p=1&page="+this.page+"&words=&shuqi_h5=&onlyCpBooks=1&"+this.type+"="+haha+"&sort=monthHot").then((res)=>{
                this.list = this.list.concat(res.data.data)
                this.loading = false;
            })
        },
        getfilms(){
            this.list = [];
            this.loading = false;
            this.page = 1;
        },
        goDetail(list){
            this.$router.push({name:"AllDetails",params:{a:list}})
        }
    },
    watch:{
        $route:{
            handler(newv){
                this.getfilms();
                this.gogo();
            },
            deep:true,
            immediate:true
        }
    }
}
</script>
<style lang="scss" scoped>
    .CategoryType{

    }
    ul{
        li{
            padding:20px 16px;
            img{
                width:1.527rem;
                height:2.036rem;
                margin-right:16px;
                float:left;
            }
            h3{
                color: #333;
                font-size:16px;
                line-height:0.327rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            h5,p{
                font-size:12px;
                color: #999;
                line-height:0.327rem;
                margin-top:0.145rem;
            }
            p{
                height:0.655rem;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                display: -webkit-box;
            }
            span{
                margin-top:0.145rem;
                display: inline-block;
            }
        }
    }
</style>

