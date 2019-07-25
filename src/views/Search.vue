<template>
  <div class="search">
      <headerr>
        <template slot="names"><p class = "search_p">搜索中心</p></template>
      </headerr> 
      <div class = "search_nav">
        <div class = "search_nav_nav">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder="搜索 书名/作者/关键词" class = "search_input" ref="search" @input="search"/>
        </div>
      </div>
      <div class = "search_new">
          <ul>
            <li v-for="(item,index) in arr" :key="index">{{item.title}}</li>
          </ul>
      </div>
      <div class = "search_search" @click="come">
          <p>
            <span>换一换</span>
            <i class="fa fa-refresh " aria-hidden="true"></i>
          </p>
      </div>
      <ul class = "search_main" v-show="bool">
        <li v-for="(item,index) in brr" :key="index">{{item}}</li>
      </ul>
  </div>
</template>

<script>
  import headerr from '../module/header'
  export default {
    components:{
      headerr
    },
    data(){
      return{
        arr:[],
        id:1563522943418,
        val:'',
        brr:[],
        bool:false
      }
    },
    created(){
        this.getData();  
    },
    // mounted(){
    //    console.log(this.$refs.search.value)
    // },
    methods:{
      getData(){
        this.$axios.get(`/SS/novel/i.php?`,{
            params:{
                do:'is_payreco',
                id:8000000,
                qtf:'shuqiApp',
                qtn:'cpSearchReplace_sug',
                nums:8,
                shuqi_h5:'',
                _:this.id
                // 1563524510144
                // 1563522943418
            }
        }).then((res)=>{
                console.log(res.data.data)
                this.arr = res.data.data
              })
      },
      come(){
        this.id===1563522943418? 1563524510144:1563522943418;
        this.getData();
      },
      search(){
         this.val = this.$refs.search.value;
         if(this.$refs.search.value!==''){
           this.bool = true
         }else{
           this.bool = false;
         }
        this.$axios.get(`http://read.xiaoshuo1-sm.com/novel/i.php?`,{
              params:{
                  do:'is_pay_sugs',
                  q:this.val,
                  _:1563540816317
              }
            }).then((res)=>{
              console.log(res.data)
              this.brr = res.data.data;
        })
      }
    }
  }
</script>

<style scoped>
  .search_p{
    font-size:18px;
  }
  .search_nav{
    width:100%;
    height:60px;
    background:#ccc;
    overflow: hidden;
  }
  .search_nav_nav{
    width:340px;
    height:35px;
    background:#fff;
    margin-top:15px;
    margin-left:20px;
    line-height: 35px;
    border-radius: 3px;
  }
  .fa-search{
    margin-left:10px;
    color:#ccc;
    font-size:16px;
  }
  .search_input{
    width:280px;
    height:20px;
    border:0;
    margin-left:5px;
   
  }
  .search_new{
    height:180px;
  }
  .search_new>ul{
    margin-left:20px;
  }
  .search_new>ul>li{
    width:90px;
    height:30px;
    line-height:30px;
    text-align:center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border:1px solid #ccc;
    border-radius: 5px;
    float:left;
    margin:10px;
    color:#333;
  }
  .search_search{
    width:100%;
    height:48px;
    line-height:48px;
    text-align:center;
    font-size:14px;
  }
  .fa-refresh{
    margin-left:3px;
    color:#ccc;
  }
  .search{
    position: relative;
  }
  .search_main{
    width:100%;
    height:210px;
    background: #fff;
    overflow: hidden;
    position: absolute;
    top:60px;
  }
  .search_main>li{
    height:50px;
    width:100%;
    line-height:50px;
    margin-left:10px;
    border-bottom:1px solid #ccc;
    color:#333;
    font-size:14px;
  }
 
</style>
