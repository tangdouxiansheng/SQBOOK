<template>
  <div class="booklist">
    <headNav>
      <template slot="names"><p class="headTitle">精品书单</p></template>
    </headNav>
    <div class = "booklist_div">
      <ul class = "booklist_ul">  
          <li v-for="(item,index) in list" :key="index" class = "booklist_li"> 
            <!-- 跳转页面+传参 -->
            <router-link :to="'/BookDetail/'+item.id" class = "booklist_link">    
                <p class = "booklist_li_title">{{item.title}}</p>
                <p class = "booklist_li_sdesc">{{item.sdesc}}</p>
                <p class = "booklist_li_tags">{{item.tags}}</p>
                <img :src="item.items[0].cover" class = "booklist_img_left"/>
                <img :src="item.items[1].cover" class = "booklist_img_center"/>
                <img :src="item.items[2].cover" class = "booklist_img_right"/>
              </router-link>
          </li> 
      </ul>
    </div>
    <foot/>
  </div>
</template>
<script>
import headNav from "../module/header.vue"
import foot from "../module/foot"
export default {
  components:{
    headNav,foot
  },
  data(){
    return{
      list:[],
    }
  },
  created(){
        this.getData();  
  },
  methods:{
    getData(){
      this.$axios.get("/SS/novel/i.php?",{
        params:{
            do:'is_pay_sdlist',
            page:1,
            size:10,
            shuqi_h5:'shuqi_h5',
            onlyCpBooks:1,
            _:1563938804243
        }
      }).then((res)=>{
        this.list = res.data.data;
      })
    }
  }
}
</script>
  

<style lang="scss" scoped>

  .booklist_div{
    margin-top:0.827rem;
    margin-left:0.182rem;
  }
  .booklist_li{
    width:100%;
    height:2rem;
    list-style:none;
    border-bottom:0.018rem solid rgb(236, 228, 228);
    position:relative;
    .booklist_li_title{
      font-size:0.291rem;
      color:#333;
      width:2.909rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-top:0.182rem;
    }
    .booklist_li_sdesc{
      color:#999;
      font-size:0.218rem;
      margin:0.182rem 0;
      width:4.364rem;
      height:0.645rem;
      overflow: hidden;
    }
    .booklist_li_tags{
      color:#999;
      font-size:0.218rem;
      width:3.636rem;
    }
    .booklist_img_left{
      position:absolute;
      right:0.909rem;
      top:0.545rem;
      width:0.818rem;
      height:1.091rem;
    }
    .booklist_img_right{
      position:absolute;
      right:0.182rem;
      top:0.545rem;
      width:0.818rem;
      height:1.091rem;
    }
    .booklist_img_center{
      position:absolute;
      right:0.4rem;
      top:0.182rem;
      width:1.091rem;
      height:1.455rem;
      z-index:5;
    }
  }
  .booklist_link{
    text-decoration: none;
  }
</style>
