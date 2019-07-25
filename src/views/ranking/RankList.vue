<template>
<div class="box" >
    <div v-show="!tag">
         <headNav>
            <template slot="names"><p class="headTitle" ref="title">排行</p></template>
        </headNav>
    </div>
   
    <div class="list">
            <ul v-show="!bool">
                <li @click="sex(1)" :class="{'on':gender==1?!flag:flag}">男生</li>
                <li @click="sex(2)" :class="{'on':gender==2?!flag:flag}">女生</li>
            </ul>

            <ul v-show="bool">
                <li @click="sex(2)" :class="{'on':rank==2?!flag:flag}">周榜</li>
                <li @click="sex(3)" :class="{'on':rank==3?!flag:flag}">月榜</li>
                <li @click="sex(4)" :class="{'on':rank==4?!flag:flag}">总榜</li>
            </ul>
    </div>
    <div class="detail">
        <ul v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="20">
            <li v-for="(item,index) in list" :key="index" @click="goDetail({src:item.cover,name:item.title,author:item.author,desc:item.desc,type:item.category})">
                <div class="detail_left"><img :src="item.cover" alt=""></div>
                <div class="detail_center">
                    <h4>{{item.title}}</h4>
                    <p class="author">{{item.author}}</p>
                    <p class="book-tag"><span :class="{'lz':item.status===0,'wj':item.status===1}">{{item.status===0 ? "连载" : "完结"}}</span><span>{{Math.ceil(item.words/10000)}}万字</span><span >{{(item.tags).split(",")[0]}}</span><span>{{(item.tags).split(",")[1]}}</span></p>
                </div>
                <div class="view">
                    <p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAALEgAACxIB0t1+/AAAA/RJREFUeNrtWkloVEEQTVxw32LwoBFUcMnRPYgbGNGLGEFFJXrJRVFccDm4IXiJ60FFM5klzpgBCQqCOCgKcxCSU6KggivuKGhGTIJmMRlfYQszxZ8///f/f5b8Lih6Jpmqrq2rq7u6oECBAgUKFChQoECBAgUKbIS6urqhPp9vqdfr3VtbW3sReMfj8TzD+BFjDGMXxh6MPzB+Aj7H5/vAGtAcxLiqvr5+dF4pDaFnAI9CmUahYNwi9gIfg9cpGGVuTiodiUSGQLgqCNpig8Lp8DVFB8YxOaE4BDkE73zNgOJJiDnbgGewzMZmRXkIUQF8Y0DQVuANfN4Pz1UiJ6z2+/3zIPiUUCg0gvIE/l6Cv8/GuBK4Gb/dDZqQyAvpjPENv90ej8cLM6I4JSVMGNRbs/j/XeABUgqCDbAyH4w1Ezx3CCN26sz7IBgMTnLa67NoDaYQoAd4lX7j1PwwxkQY4hywI1W0IYKWO5Xdl4ntik/cDbxMIZ2p5QdPj4csJzHvTw0jdNFSs9vzc4DtGsq/R5gvyFYSDgQC0yBDc4pluM6WSWDNqVpZnooaKF+UCzsRFU4a8v0GLrLq+WIweaFh4WMyWRd0g2HQ9RiviaqvTUTWS+B1fN9ECkk6qlIsx6ScYCkngcEtDeVPSAq4FvxeGdg235EhJB22BbR9jOeTaDQ6yDQzhPcaDeFqzPKhbRB01RLFziUZwencwXlR5WjWksPJE0z5poaGhoESUVRtodq7Ihm5IcanAwlzshkDHGHCdMKKpZLVopZiPvArw74+CkYdie/zyePi4MO9t00ieot44iajGA3ZQhC8ZcTHZRKeRtH0BbzKdWgW09bK5v5MESkRBRv5rhAOh8cZsd4KJnS7zMkLNBuYAH16yies4TL87g+LgiqJ3FPIdzDw2WlEcC9PRpIZOcz4eE3QnmXGuy0pwy4mw0MjodPEJi+XTES8flhoIpOX8qUjufWWMD4xI4K3JhLhyDpB0vpJpTMlO5NbZ+Iy6JXZgYQcMWaE4nQE391ugEZXLwHXJ0HXb4OuL4SEFw67thRWh6E8Pw6Dbp/l47C6EEm+fc2LKzHQbrX9SizNpWgkVy5FPf+AO+mX5UtRI9fiZio8h67FW1J0lCv6bWNE3FZnrjGSMLFua0z0DJ1ujZ1P1Rqjgxw5ylHrU/GSrjkKvGd3cxR4U685Si9LHG+O8m3NaHuchCeDUKZObI9TFQgcRkXK//a42Mr2UDEjyuDcao/zDCze8mTlgQTG01l7IKFhCPc9kdECeGS63Y+kwOdRTj+S0jEGPX9ZItb0BeooA59CqQ/i6QwZqLtfPZNToECBAgUKFChQoEBB3sBf6pPdz7S2/8IAAAAASUVORK5CYII=" alt="">
                    <span>{{(item.reads/10000).toFixed(1)}}万</span></p>
                </div>
            </li>
        </ul>
         <div class="go_top" v-show="tag" @click="goTop"><img src="http://f0.jmstatic.com/btstatic/h5/index/go_top.png" alt=""></div>
    </div>
</div>

</template>

<script>
import headNav from "../../module/header.vue"
import { InfiniteScroll } from 'mint-ui';
import Msg from "../../module/toast"
var msg = new Msg()
export default {
    components:{
        headNav
    },
    data(){
        return{
            type:'',
            gender:1,
            rank:2,
            list:[],
            bool:false,
            flag:false,
            tag:false,
            page:1,
            loading:false
        }
    },
    created(){
        
        this.resteList()
        this.type = this.$route.params.type;
        if(this.type==8){
           this.sex(this.rank)
        }else{
           this.sex(this.gender)
        }      
    },
    mounted(){
      window.addEventListener('scroll',this.handleScroll,true);
      switch(this.type){
          case "1":
            this.$refs.title.innerHTML = "精品畅销" 
          break;
           case "2":
            this.$refs.title.innerHTML = "狂热点击" 
          break;
           case "6":
            this.$refs.title.innerHTML = "新书潜力"
          break;
           case "8":
            this.$refs.title.innerHTML = "大神力作"
          break;
           case "5":
            this.$refs.title.innerHTML = "经典完结"  
          break;
      }

    },
    methods:{
        loadMore(){
            this.page++;
            if(this.type==8){
                this.sex(this.rank)
            }else{
                this.sex(this.gender)
            }      
        },
        sex(number){
            if(this.page>8){
              msg.showMsg("已经没有啦","bottom",1000)
              return;
            }
            if(this.type==8){
               this.bool = true ; 
               if(this.rank!==number)  this.resteList(); 
               this.rank = number;
               this.$axios.get("/SS/novel/i.php?do=is_novelrank",{
                    params:{
                        p:1,
                        page:this.page,
                        size:10,
                        onlyCpBooks:1,
                        rank:this.rank,
                        type:this.type,
                        shuqi_h5:"",
                    }
                }).then((res)=>{
                    this.list = this.list.concat(res.data.data)
            })
            }else{
                if(this.gender!==number)  this.resteList(); 
                this.gender = number;
                this.$axios.get("/SS/novel/i.php?do=is_novelrank",{
                    params:{
                        p:1,
                        page:this.page,
                        size:10,
                        onlyCpBooks:1,
                        gender:this.gender,
                        type:this.type,
                        shuqi_h5:"",
                    }
                }).then((res)=>{
                    this.list =this.list.concat(res.data.data)
                })
            }
        },
        goTop(){
            document.documentElement.scrollTop = 0;
            this.page = 1;
        },
        resteList(){                   
            this.list = [];
            this.loading = false;
            this.page = 1;
        },
        handleScroll(e){
            if(e.target.scrollingElement.scrollTop>40){
                this.tag = true;
            }else{
                this.tag = false;
            } 
        },
        goDetail(list){
            this.$router.push({name:"AllDetails",params:{a:list}})
        }
    } 
}
</script>

<style scoped>
.box{
    width:100%;
}
.list>ul {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #fff;
    border-bottom: 1px solid #f3f3f3;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top:0.727rem;
}
.list>ul>li{
    color: #333;
    text-align: center;
    font-size: .3rem;
    width: 50%;
}
.detail>ul>li {
    width:100%;
    padding:0.4rem 0.32rem 0.4rem 0.32rem;
    display: flex;
    flex: 1;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #f3f3f3;
    position: relative;
}
.detail_left img{
    margin-right: .32rem;
    width: 1.12rem;
    height: 1.48rem;
    position: relative;
    overflow: hidden;
}
.detail_center h4{
    color: #333;
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    height: .36rem;
    line-height: .36rem;
    margin-bottom: .3rem;
    font-weight: 400
}
.author{
    height: .32rem;
    line-height: .32rem;
    font-size: .24rem;
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
}
.book-tag{
    font-size: 0;
    margin-top: .28rem;
    height: .4rem;
    overflow: hidden;
    line-height: .34rem;
}
.book-tag span{
    font-size: .2rem;
    height: .34rem;
    line-height: .36rem;
    border: 1px solid rgba(153,153,153,.3);
    border-radius: .04rem;
    padding: 0 .1rem;
    margin-right: .08rem;
    padding-top: .01rem;
    color: #999;
    display: inline-block;
}
.view{
    width: .9rem;
    color: #999;
    font-size: .24rem;
    line-height: .24rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    display: inline-block;
    position: absolute;
    right:0.909rem;
   
}
.view img{
    width: .32rem;
    height: .32rem;
    margin:-0.05rem .08rem 0 0;
    float: left;
}
.lz{
    color: #499fff !important;
    border-color: rgba(73,159,255,.3)!important;
}
.wj{
    color: #00c98d!important;
    border-color: rgba(0,201,141,.3)!important;
}
.on{
    color: #00c98d !important;
    border-bottom: .06rem solid #00c98d;
}
.go_top{
    width: 0.8rem;
    height: 0.8rem;
    position: fixed;
    right: 0.2rem;
    bottom: 1.7rem;
    background: #fff;
    border-radius: 50%;
    }
.go_top img{
    width: 0.6rem;
    height: 0.6rem;
    }
</style>
