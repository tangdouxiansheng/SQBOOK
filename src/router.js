import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import index from './views/index.vue'                 //首页
import BookList from './views/BookList.vue'           //书单
import BookShelf from './views/BookShelf.vue'         //书架
import Boy from './views/Boy.vue'                     //男频
import Girl from './views/Girl.vue'                   //女频
import Category from './views/Category.vue'           //分类
import Ranking from './views/Ranking.vue'             //排行
import Search from './views/Search.vue'               //搜索
import User from './views/User.vue'                   //个人中心 
import BookDetail from './components/BookDetail.vue'  //书单页跳转的详情页
import RankList from "./views/ranking/RankList.vue"  //排行榜的公共列表
import CategoryType from "./components/CategoryType.vue"           //分类详情
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name:'index',
      component:index,
    },
    {
      path: '/BookList',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/Boy',
      name: 'Boy',
      component: Boy
    },
    {
      path: '/Girl',
      name: 'Girl',
      component: Girl
    },
    {
      path: '/Category',
      name: 'Category',
      component: Category,
    },
    {
      path: '/Ranking',
      name: 'Ranking',
      component: Ranking
    },
      
    {
      path: '/BookShelf',
      name: 'BookShelf',
      component: BookShelf
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path:'/BookDetail/:id',
      name: 'BookDetail',
      component: BookDetail
    },
    {
      path: '/RankList/:type',
      name: 'RankList',
      component: RankList
    },
    {
      path:"/Category/CategoryType/:id:name",
      name:"CategoryType",
      component:CategoryType
    },
   

  ]
})
