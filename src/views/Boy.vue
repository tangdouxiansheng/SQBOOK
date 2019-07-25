<template>
  <div class="girl">
    <!-- 头部 -->
    <headNav>
      <template slot="names"><p class="headTitle">男生频道</p></template>
    </headNav>
    <!-- 主编力荐 -->
    <div class = "girl_divtop">
      <p class = "girl_divtop_title">主编力荐</p>
      <ul class = "girl_divtop_ul">
        <li v-for="(item,index) in arr.content" :key="index" class = "girl_divtop_li" @click="go({name:item.bookname,src:item.book_cover,author:item.author_name})">
          <router-link to="" class = "girl_link1">
              <img :src="item.book_cover" class = "girl_cover_img"/>
              <p class = "girl_bookname">{{item.bookname}}</p>
              <p class = "girl_authorname">{{item.author_name}}</p>
          </router-link>
        </li>
      </ul>
      <!--  -->
      <div  class = "girl_divcenter">
        <ul>
            <li v-for="(item,index) in arr.content" :key="index" class = "girl_divcenter_li" @click="go({name:item.bookname,desc:item.stat_name,type:item.class_name,src:item.book_cover,author:item.author_name})">
              <router-link to="" class = "girl_link2">
                <p class = "girl_bookname_p">{{item.bookname}}</p>
                <p class = "girl_authorname_p">{{item.author_name}}</p>
                <p class = "girl_statname">{{item.stat_name}}</p>
                <p class = "girl_classname">{{item.class_name}}</p>
              </router-link>
            </li>
        </ul>
      </div>
      <!-- 换一换功能 -->
      <div class = "girl_change" @click="change">
          <p>换一换
            <i class="fa fa-refresh " aria-hidden="true" ref="iii"></i>
          </p>  
      </div>
      <!-- 热门女生分类 fa-spin-->
      <div class = "girl_divbottom">
        <p class = "girl_divbottom_hot">热门男生分类</p>
        <ul>
          <li v-for="(item,index) in list" :key="index" class = "girl_divbottom_li" 
          @click="go({name:item.bookname,src:item.book_cover,author:item.author_name})">
            <router-link to="" class = "girl_link3">
                <p class = "girl_divbottom_bookname">{{item.bookname}}</p>
                <p class = "girl_divbottom_bookinfo">{{item.book_info}}</p>
                <p class = "girl_divbottom_authorname">{{item.author_name}}</p>
                <img :src="item.book_cover" class = "girl_divbottom_liimg"/>
              </router-link>
          </li>
        </ul>
      </div>
    </div>
    <foot/>
  </div>
</template>
<script>
import headNav from "../module/header.vue"
import foot from "../module/foot"
import { setTimeout } from 'timers';
export default {
  components:{
    headNav,foot
  },
   data(){
    return{
      list:[],
      arr:[],
      id:1563949022094
    }
  },
  created(){
        this.getData();  
  },
   methods:{
    getData(){
      this.$axios.get("/SQ/eva_bookstore/v1/stencil/query?",{
        params:{
            appId:1,
            pageId:2,
            channelId:'',
            versionId:'',
            ver:'',
            shuqi_h5:'',
            md5key:'',
            userId:8000000,
            timestamp:1563982184,
            type:2,
            resetcache:'',
            sign:'EE436FD5DF42D7ABAB1B5B130B2FC7C0',
            key:'shuqiapi',
            _:this.id
            // 1563977408179
            // 1563977416526
            // 1563977597778
        }
      }).then((res)=>{
        this.list = res.data.data.module[6].content.data[0].content
        this.arr = res.data.data.module[1]
        console.log(this.arr)
      })
    },
    change(){
      this.id = 1563949022094?1563977597778:1563977408179;
      this.getData();
      this.$refs.class = "fa fa-refresh fa-spin"
    },
    go(obj){
      this.$route.push({name:'/AllDetails',params:{a:obj}})
    },
  }
}
</script>


<style scoped>
  *{
    margin:0;
    padding:0;
  }
  .girl_cover_img{
    width:1.509rem;
    height:2rem;
    margin-top:0.364rem;
  }
  .girl_divtop_title{
    color:#333;
    font-size:0.255rem;
    width:1.364rem;
    height:0.291rem;
    margin-top:0.818rem;
  }
  .girl_divtop_ul{
    width:100%;
    height:3.455rem;
    overflow: hidden;
    border-bottom:0.018rem solid rgb(226, 217, 217);
  }
  .girl_divtop_li{
    width:1.455rem;
    height:2.727rem;
    float:left;
    list-style:none;
    margin-bottom:0.364rem;
    margin-left:0.182rem;
  }
  .girl_bookname{
    font-size:0.218rem;
    color:#333;
    width:1.509rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top:0.182rem;
  }
  .girl_authorname{
    font-size:0.218rem;
    color:#999;
    margin-top:0.182rem;
  }
  .girl_divcenter{
    width:100%;
    height:3.6rem;
    overflow: hidden;
  }
  .girl_divcenter_li{
    width:100%;
    height:1rem;
    margin-left:0.182rem;
    position:relative;
    border-bottom:0.018rem solid rgb(224, 217, 217);
  }
  .girl_bookname_p{
    font-size:0.273rem;
    color:#333;
    margin-top:0.182rem;
  }
  .girl_authorname_p{
    font-size:0.218rem;
    color:#999;
    margin-top:0.182rem;
  }
  .girl_statname{
    width:0.691rem;
    height:0.364rem;
    color:rgb(16, 91, 231);
    border:0.018rem solid rgb(211, 204, 204);
    font-size:0.218rem;
    text-align:center;
    line-height:0.364rem;
    position:absolute;
    right:1.455rem;
    top:0;
  }
  .girl_classname{
    width:1.127rem;
    height:0.364rem;
    font-size:0.218rem;
    color:#999;
    text-align:center;
    line-height:0.364rem;
    border:0.018rem solid rgb(207, 199, 199);
    position:absolute;
    right:0.236rem;
    top:0;
  }
  .girl_change{
    width:100%;
    height:0.836rem;
    background:rgb(210, 218, 219);
    text-align:center;
    line-height:0.836rem;
    margin-bottom:0.364rem;
  }
  .girl_change>p{
    font-size:0.255rem;
    color:#333;
  }
  .girl_divbottom_hot{
    font-size:0.255rem;
    color:#333;
    margin-bottom:0.182rem;
  }
  .girl_divbottom_li{
    height:2.182rem;
    position: relative;
    list-style:none;
    margin-left:0.182rem;
  }
  .girl_divbottom_bookname{
    font-size:0.273rem;
    color:#333;
  }
  .girl_divbottom_authorname{
    font-size:0.218rem;
    color:#999;
    margin-top:0.273rem;
  }
  .girl_divbottom_bookinfo{
    width:4.582rem;
    height:0.909rem;
    font-size:0.218rem;
    color:#999;
    overflow: hidden;
    margin-top:0.182rem;
  }
  .girl_divbottom_liimg{
    width:1.455rem;
    height:1.818rem;
    position:absolute;
    top:0;
    right:0.182rem;
  }
  .girl_link1{
    text-decoration: none;
  }
  .girl_link2{
    text-decoration: none;
  }
  .girl_link3{
    text-decoration: none;
  }
</style>