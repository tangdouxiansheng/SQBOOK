<template>
  <div class="category">
    <headNav>
      <template slot="names"><p class="headTitle">分类</p></template>
    </headNav>
    <div class="center_all" v-for="(all,ind) in list" :key="ind">
      <h3>{{all.allname}}</h3>
      <ul>
          <li v-for="(item,index) in all.boygirl" :key="index">
            <router-link :to="'/Category/CategoryType/'+item.cid+item.relatedName">
            <h4>{{item.name}}</h4>
            <div v-for="(props,id) in item.list" :key="id" class="center_type">
              <span v-if="id===0">{{props}}</span>
              <span v-else>&nbsp;|&nbsp;{{props}}</span>
            </div>
            </router-link>
          </li>
      </ul>
    </div>
  </div>
</template>
<script>
import headNav from "../module/header.vue"
export default {
  data(){
    return{
      list:[
      {allname:"女生分类",boygirl:[
{name:"现言",cid: 1, relatedName: "现代言情", list: ["豪门总裁", "婚姻", "都市情感", "宝宝"]},
{name:"古言",cid: 1, relatedName: "古代言情", list: ["穿越", "架空", "宫斗宅斗", "情仇爱恨", "女尊", "种田"]},
{name:"幻言",cid: 1, relatedName: "幻想言情", list: ["仙侣奇缘", "江湖奇缘"]},
{name:"校园",cid: 2, relatedName: "校园青春", list: ["青春年华", "校园魔幻", "青春校园", "学生"]}
      ]},
      {allname:"男生分类",boygirl:[
{name:"都市",cid: 2, relatedName: "都市小说", list: ["生活", "异能", "重生", "热血", "人生", "美女", "极道江湖"]},
{name:"玄幻",cid: 1, relatedName: "玄幻小说", list: ["东方玄幻", "异界大陆", "转世重生", "远古神话"]},
{name:"仙侠",cid: 2, relatedName: "仙侠小说", list: ["现代修真", "奇幻修真", "洪荒封神", "凡人", "丹药"]},
{name:"灵异",cid: 2, relatedName: "灵异推理", list: ["灵异鬼怪", "恐怖惊悚", "悬疑探险", "侦探推理"]},
{name:"历史",cid: 2, relatedName: "历史架空", list: ["架空历史", "两宋元明", "秦汉三国", "权谋", "乱世"]},
{name:"游戏",cid: 2, relatedName: "游戏竞技", list: ["虚拟网游", "游戏异界", "游戏人生", "系统"]},
{name:"科幻",cid: 2, relatedName: "科幻小说", list: ["未来", "进化变异", "末世", "星际", "机甲", "时空穿梭"]},
{name:"武侠",cid: 8, relatedName: "武侠小说", list: ["传统武侠", "新派武侠", "幻武异侠", "江湖风波"]},
{name:"奇幻",cid: 1, relatedName: "奇幻", list: ["领主贵族", "亡灵异族", "西方奇幻", "魔法", "召唤"]},
{name:"竞技",cid: 1, relatedName: "竞技", list: ["电子竞技", "体坛风云", "球类运动"]},
{name:"其他",cid: 1, relatedName: "其他", list: ["动漫", "影视", "武侠", "小说"]}
      ]}]
    }
  },
  components:{
    headNav
  },
  created(){
// http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&secondCate=%E7%8E%B0%E4%BB%A3%E8%A8%80%E6%83%85&sort=monthHot&_=1564019507260
// http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&secondCate=%E7%8E%B0%E4%BB%A3%E8%A8%80%E6%83%85&sort=monthHot&_=1564019834718
// http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&firstCate=%E6%A0%A1%E5%9B%AD&sort=monthHot&_=1564019553349
// http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&secondCate=%E5%8F%A4%E4%BB%A3%E8%A8%80%E6%83%85&sort=monthHot&_=1564019723636
// 现言secondCate=%E7%8E%B0%E4%BB%A3%E8%A8%80%E6%83%85
// 古言secondCate=%E5%8F%A4%E4%BB%A3%E8%A8%80%E6%83%85
// 幻言secondCate=%E5%B9%BB%E6%83%B3%E8%A8%80%E6%83%85
// firstCate=%E7%8E%84%E5%B9%BB
    // this.$axios.post("/FL/webapi/rank/classrelation?_=1563978008125",{
    //   headers:{"Accept":"application/json",
    //           "Content-Type": "application/x-www-form-urlencoded"}
    //   // _:1563978008125,
    //   // "headers":{"Content-Type":'application/x-www-form-urlencoded'},
    //   // "Accept":"application/json",
    //   // firstName: 'Fred',
    //   // lastName: 'Flintstone'
    // }).then((res)=>{
    //   console.log(res.data)
    // })
  }
}
</script>
<style lang="scss" scoped>
  .headTitle{
    font-size:16px;
    color:#333;
  }
  .center_all{
    h3{
      font-size:12px;
      color:#999;
      padding:16px;
      background:#F8F8F8
    }
    ul{
      li{
        padding:14px 16px;
        h4{
          font-size:14px;
          color:#333;
          margin:6px 0;
        }
        .center_type{
          display:inline-block;
          color:#999;
        }
      }
    }
  }
</style>



