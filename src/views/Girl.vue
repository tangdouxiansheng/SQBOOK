<template>
  <div class="girl">
    <!-- 头部 -->
    <headNav>
      <template slot="names"><p class="headTitle">女生专区</p></template>
    </headNav>
    <!-- 主编力荐 -->
    <div class = "girl_divtop">
      <p class = "girl_divtop_title">主编力荐</p>
      <ul class = "girl_divtop_ul">
        <router-link to="" class = "girl_link1">
          <li v-for="(item,index) in arr.content" :key="index" class = "girl_divtop_li">
              <img :src="item.book_cover" class = "girl_cover_img"/>
              <p class = "girl_bookname">{{item.bookname}}</p>
              <p class = "girl_authorname">{{item.author_name}}</p>
          </li>
        </router-link>
      </ul>
      <!--  -->
      <div  class = "girl_divcenter">
        <ul>
          <router-link to="" class = "girl_link2">
            <li v-for="(item,index) in arr.content" :key="index" class = "girl_divcenter_li">
              <p class = "girl_bookname_p">{{item.bookname}}</p>
              <p class = "girl_authorname_p">{{item.author_name}}</p>
              <p class = "girl_statname">{{item.stat_name}}</p>
              <p class = "girl_classname">{{item.class_name}}</p>
            </li>
          </router-link>
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
        <p class = "girl_divbottom_hot">热门女生分类</p>
        <ul>
          <router-link to="" class = "girl_link3">
            <li v-for="(item,index) in list" :key="index" class = "girl_divbottom_li">
                <p class = "girl_divbottom_bookname">{{item.bookname}}</p>
                <p class = "girl_divbottom_bookinfo">{{item.book_info}}</p>
                <p class = "girl_divbottom_authorname">{{item.author_name}}</p>
                <img :src="item.book_cover" class = "girl_divbottom_liimg"/>
            </li>
          </router-link>
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
            pageId:3,
            channelId:'',
            versionId:'',
            ver:'',
            shuqi_h5:'',
            md5key:'',
            userId:8000000,
            timestamp:1563949022,
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
      })
    },
    change(){
      this.id = 1563949022094?1563977597778:1563977408179;
      this.getData();
      this.$refs.class = "fa fa-refresh fa-spin"
     
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
    width:83px;
    height:110px;
    margin-top:20px;
  }
  .girl_divtop_title{
    color:#333;
    font-size:14px;
    width:75px;
    height:16px;
    margin-top:45px;
  }
  .girl_divtop_ul{
    width:100%;
    height:190px;
    overflow: hidden;
    border-bottom:1px solid rgb(226, 217, 217);
  }
  .girl_divtop_li{
    width:80px;
    height:150px;
    float:left;
    list-style:none;
    margin-bottom:20px;
    margin-left:10px;
  }
  .girl_bookname{
    font-size:12px;
    color:#333;
    width:83px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top:10px;
  }
  .girl_authorname{
    font-size:12px;
    color:#999;
    margin-top:10px;
  }
  .girl_divcenter{
    width:100%;
    height:198px;
    overflow: hidden;
  }
  .girl_divcenter_li{
    width:100%;
    height:55px;
    margin-left:10px;
    position:relative;
    border-bottom:1px solid rgb(224, 217, 217);
  }
  .girl_bookname_p{
    font-size:15px;
    color:#333;
    margin-top:10px;
  }
  .girl_authorname_p{
    font-size:12px;
    color:#999;
    margin-top:10px;
  }
  .girl_statname{
    width:38px;
    height:20px;
    color:rgb(16, 91, 231);
    border:1px solid rgb(211, 204, 204);
    font-size:12px;
    text-align:center;
    line-height:20px;
    position:absolute;
    right:80px;
    top:0;
  }
  .girl_classname{
    width:62px;
    height:20px;
    font-size:12px;
    color:#999;
    text-align:center;
    line-height:20px;
    border:1px solid rgb(207, 199, 199);
    position:absolute;
    right:13px;
    top:0;
  }
  .girl_change{
    width:100%;
    height:46px;
    background:rgb(210, 218, 219);
    text-align:center;
    line-height:46px;
    margin-bottom:20px;
  }
  .girl_change>p{
    font-size:14px;
    color:#333;
  }
  .girl_divbottom_hot{
    font-size:14px;
    color:#333;
    margin-bottom:10px;
  }
  .girl_divbottom_li{
    height:120px;
    position: relative;
    list-style:none;
    margin-left:10px;
  }
  .girl_divbottom_bookname{
    font-size:15px;
    color:#333;
  }
  .girl_divbottom_authorname{
    font-size:12px;
    color:#999;
    margin-top:15px;
  }
  .girl_divbottom_bookinfo{
    width:252px;
    height:50px;
    font-size:12px;
    color:#999;
    overflow: hidden;
    margin-top:10px;
  }
  .girl_divbottom_liimg{
    width:80px;
    height:100px;
    position:absolute;
    top:0;
    right:10px;
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
